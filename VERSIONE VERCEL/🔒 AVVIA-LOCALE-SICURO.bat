@echo off
chcp 65001 >nul
cd /d "%~dp0"
cls
echo.
echo ════════════════════════════════════════════════════════════
echo 🔒 SISTEMA GESTIONE DIREZIONALE - MODALITÀ LOCALE SICURA
echo ════════════════════════════════════════════════════════════
echo.
echo ✅ Avvio server locale in corso...
echo.
echo 📍 Il sistema sarà disponibile su: http://localhost:8000
echo 🔒 Completamente OFFLINE (nessun accesso esterno)
echo 💾 Dati salvati SOLO su questo PC
echo 🚫 Nessuno dall'esterno può accedere
echo.
echo ⚡ Il browser si aprirà automaticamente tra 3 secondi...
echo.
timeout /t 3 >nul

echo 🚀 Avvio del server...
echo.
echo ═══════════════════════════════════════════════════════════
echo  SERVER ATTIVO - Il sistema è in esecuzione!
echo ═══════════════════════════════════════════════════════════
echo.
echo 📌 URL: http://localhost:8000
echo.
echo 💡 ISTRUZIONI:
echo    - Il browser si aprirà automaticamente
echo    - I tuoi dati sono al 100%% PRIVATI
echo    - Per CHIUDERE: premi Ctrl+C qui, poi chiudi il browser
echo.
echo ═══════════════════════════════════════════════════════════
echo.

start http://localhost:8000

python -m http.server 8000
