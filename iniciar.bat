@echo off
cd /d "%~dp0"
echo ===================================================
echo   Iniciando o servidor da animacao (Porta 5500)
echo ===================================================
echo.
start http://localhost:5500
node server.mjs
pause
