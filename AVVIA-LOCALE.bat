@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo ════════════════════════════════════════════════════
echo 🔒 AVVIO SISTEMA IN MODALITÀ LOCALE SICURA
echo ════════════════════════════════════════════════════
echo.
echo ✅ Apertura in corso...
echo.
echo 💡 Il sistema si aprirà nel browser ma funziona OFFLINE
echo 📍 URL locale: file:///...
echo 🔒 Nessuna connessione internet richiesta
echo 💾 Dati salvati solo su questo PC
echo.
start "" "index.html"
echo.
echo ✅ Sistema avviato!
echo.
echo 📋 Per chiudere: chiudi semplicemente il browser
echo.
timeout /t 3 >nul
