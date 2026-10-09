// ==========================================================================
// JPIRES – SOCIEDADE DE ADVOGADOS, RL
// SCROLL-DRIVEN MOTION ENGINE & UI CONTROLLER
// ==========================================================================

const TOTAL_FRAMES = 600;
const LERP_FACTOR = 0.16;      // Fluid momentum interpolation factor
const CONCURRENCY_LIMIT = 20; // Concurrent preload requests

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d', { alpha: false });

const images = new Array(TOTAL_FRAMES);
let frameFilenames = [];
let currentFrame = 0;
let targetFrame = 0;
let lastDrawnFrame = -1;
let isReady = false;

// ==========================================================================
// NATURAL NUMERIC SORT
// ==========================================================================
function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

// ==========================================================================
// CARREGAMENTO DOS NOMES DOS FRAMES
// ==========================================================================
async function loadFilenames() {
  try {
    const res = await fetch('frames.json');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data.sort(naturalSort);
      }
    }
  } catch (err) {
    // Fallback silencioso
  }

  // Fallback padrão para os 600 frames
  const fallback = [];
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    fallback.push(`ezgif-frame-${String(i).padStart(3, '0')}.jpg`);
  }
  return fallback.sort(naturalSort);
}

// ==========================================================================
// PRÉ-CARREGAMENTO DE IMAGENS EM BUFFER
// ==========================================================================
async function preloadImages(filenames) {
  const total = filenames.length;
  let cursor = 0;

  async function worker() {
    while (cursor < total) {
      const idx = cursor++;
      const img = new Image();
      await new Promise((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = `frames/${filenames[idx]}`;
      });
      images[idx] = img;

      // Se for o primeiro frame ou o frame atualmente em foco, desenha de imediato
      if (idx === 0 && lastDrawnFrame === -1) {
        drawFrame(0);
      }
    }
  }

  const workers = Array.from(
    { length: Math.min(CONCURRENCY_LIMIT, total) },
    () => worker()
  );

  await Promise.all(workers);
}

// Localiza o frame carregado mais próximo para evitar qualquer piscar ou tela preta
function findClosestLoadedImage(index) {
  const target = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(index)));
  if (images[target] && images[target].complete && images[target].naturalWidth > 0) {
    return images[target];
  }

  for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
    const prev = target - offset;
    if (prev >= 0 && images[prev] && images[prev].complete && images[prev].naturalWidth > 0) {
      return images[prev];
    }
    const next = target + offset;
    if (next < TOTAL_FRAMES && images[next] && images[next].complete && images[next].naturalWidth > 0) {
      return images[next];
    }
  }
  return null;
}

// ==========================================================================
// RENDERIZAÇÃO NO CANVAS COM "OBJECT-FIT: COVER"
// ==========================================================================
function drawFrame(frameIndex) {
  const img = findClosestLoadedImage(frameIndex);
  if (!img) return;

  const cw = window.innerWidth;
  const ch = window.innerHeight;
  const nw = img.naturalWidth || img.width;
  const nh = img.naturalHeight || img.height;

  if (!nw || !nh) return;

  // Limpa o canvas com a cor institucional mais escura
  ctx.fillStyle = '#1F120B';
  ctx.fillRect(0, 0, cw, ch);

  // Cálculo de Object-fit: cover
  const imgRatio = nw / nh;
  const screenRatio = cw / ch;

  let drawW, drawH, drawX, drawY;

  if (screenRatio > imgRatio) {
    drawW = cw;
    drawH = cw / imgRatio;
    drawX = 0;
    drawY = (ch - drawH) / 2;
  } else {
    drawH = ch;
    drawW = ch * imgRatio;
    drawX = (cw - drawW) / 2;
    drawY = 0;
  }

  ctx.drawImage(img, drawX, drawY, drawW, drawH);
}

// ==========================================================================
// AJUSTE DE RESOLUÇÃO DO CANVAS (DEVICEPIXELRATIO)
// ==========================================================================
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const w = window.innerWidth;
  const h = window.innerHeight;

  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  lastDrawnFrame = -1;
  drawFrame(Math.round(currentFrame));
}

// ==========================================================================
// MAPEAMENTO DO SCROLL DA PÁGINA (0% -> 100%) PARA OS 600 FRAMES
// ==========================================================================
function computeScrollProgress() {
  const doc = document.documentElement;
  const body = document.body;
  const scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop || 0;
  const scrollHeight = Math.max(
    (doc.scrollHeight || 0) - window.innerHeight,
    (body.scrollHeight || 0) - window.innerHeight,
    1
  );
  return Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
}

function onScroll() {
  const progress = computeScrollProgress();
  targetFrame = progress * (TOTAL_FRAMES - 1);

  // Efeito de translucidez na Navbar ao descer a página
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-[#1F120B]/90', 'backdrop-blur-md', 'border-b', 'border-white/10', 'shadow-xl', 'py-3');
      navbar.classList.remove('py-5', 'sm:py-6');
    } else {
      navbar.classList.remove('bg-[#1F120B]/90', 'backdrop-blur-md', 'border-b', 'border-white/10', 'shadow-xl', 'py-3');
      navbar.classList.add('py-5', 'sm:py-6');
    }
  }
}

// ==========================================================================
// LOOP DE ANIMAÇÃO COM INTERPOLAÇÃO (LERP) FLUIDA
// ==========================================================================
function animationLoop() {
  const diff = targetFrame - currentFrame;
  if (Math.abs(diff) > 0.001) {
    currentFrame += diff * LERP_FACTOR;
  } else {
    currentFrame = targetFrame;
  }

  const frameToDraw = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrame)));
  if (frameToDraw !== lastDrawnFrame) {
    drawFrame(frameToDraw);
    lastDrawnFrame = frameToDraw;
  }

  requestAnimationFrame(animationLoop);
}

// ==========================================================================
// CONTROLO DO MENU MOBILE
// ==========================================================================
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });

    document.querySelectorAll('.mobile-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }
}

// ==========================================================================
// INICIALIZAÇÃO
// ==========================================================================
async function init() {
  resizeCanvas();
  setupMobileMenu();

  // 1. Obter e ordenar os 600 frames em ordem numérica natural
  frameFilenames = await loadFilenames();

  // 2. Carregar primeiro frame prioritário
  const firstImg = new Image();
  firstImg.src = `frames/${frameFilenames[0]}`;
  images[0] = firstImg;
  firstImg.onload = () => {
    drawFrame(0);
  };

  // 3. Ouvir eventos de redimensionamento e scroll
  window.addEventListener('resize', resizeCanvas, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('wheel', onScroll, { passive: true });
  window.addEventListener('touchmove', onScroll, { passive: true });

  onScroll();
  currentFrame = targetFrame;

  // 4. Iniciar loop de interpolação
  requestAnimationFrame(animationLoop);

  // 5. Pré-carregar os restantes frames em segundo plano
  await preloadImages(frameFilenames);
  isReady = true;
}

init();
