@echo off
chcp 65001 >nul
color 0B
cls

echo ============================================
echo   PUSH CODICE SU GITHUB - SUPER FACILE
echo ============================================
echo.

cd /d "C:\Users\ASUS\Desktop\PROGETTI\Sistema Gestione Direzionale"

echo Dimmi il tuo USERNAME GitHub
echo (Lo trovi in alto a destra quando sei su github.com)
echo.
set /p username="Username GitHub: "

echo.
echo Configurazione in corso...
git remote remove origin 2>nul
git remote add origin https://github.com/%username%/sistema-gestione-direzionale.git

echo.
echo ✓ Configurato!
echo.
echo ============================================
echo   ADESSO FACCIO IL PUSH
echo ============================================
echo.
echo ATTENZIONE: Git ti chiederà username e password!
echo.
echo Username: %username%
echo Password: USA UN TOKEN (non la password normale!)
echo.
echo Se non hai il token:
echo 1. Apri: https://github.com/settings/tokens
echo 2. Click "Generate new token (classic)"
echo 3. Note: "Vercel Deploy"
echo 4. Spunta: repo (tutte le checkbox)
echo 5. Click "Generate token"
echo 6. COPIA IL TOKEN
echo 7. Incollalo qui sotto come password
echo.
echo ============================================
echo.
pause

git push -u origin main

echo.
echo ============================================
if %errorlevel%==0 (
    echo   ✓✓✓ PUSH COMPLETATO CON SUCCESSO! ✓✓✓
    echo ============================================
    echo.
    echo PROSSIMO PASSO: Deploy su Vercel
    echo.
    echo Premi INVIO per aprire Vercel...
    pause >nul
    start https://vercel.com/new
    echo.
    echo Browser aperto su Vercel!
    echo.
    echo Su Vercel:
    echo 1. Login con GitHub
    echo 2. Click "New Project"
    echo 3. Seleziona "sistema-gestione-direzionale"
    echo 4. Click "Deploy"
    echo 5. Aspetta 30 secondi
    echo 6. FATTO!
    echo.
) else (
    echo   ✗✗✗ ERRORE DURANTE IL PUSH ✗✗✗
    echo ============================================
    echo.
    echo Hai usato il TOKEN come password?
    echo.
    echo Riprova! Chiudi questa finestra e riapri:
    echo PUSH-FACILE.bat
    echo.
)

echo.
echo Premi un tasto per chiudere...
pause >nul
