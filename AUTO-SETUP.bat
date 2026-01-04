@echo off
chcp 65001 >nul
echo.
echo ============================================================
echo 🚀 SETUP AUTOMATICO - Sistema Gestione Direzionale Cloud
echo ============================================================
echo.

echo [1/5] Verifico stato progetto...
cd /d "%~dp0"
if not exist "index.html" (
    echo ❌ ERRORE: File index.html non trovato!
    pause
    exit /b 1
)
echo ✅ Progetto trovato

echo.
echo [2/5] Verifico Git repository...
git status >nul 2>&1
if errorlevel 1 (
    echo ❌ ERRORE: Non è un repository Git!
    pause
    exit /b 1
)
echo ✅ Repository Git OK

echo.
echo [3/5] Verifico connessione GitHub...
git remote -v | findstr "github.com" >nul
if errorlevel 1 (
    echo ❌ ERRORE: Repository GitHub non configurato!
    pause
    exit /b 1
)
echo ✅ GitHub connesso

echo.
echo [4/5] Verifico deploy Vercel...
curl -s -o nul -w "%%{http_code}" https://gestione-aziendale-git-main-beatrices-projects-c612032b.vercel.app/ > temp_status.txt
set /p HTTP_STATUS=<temp_status.txt
del temp_status.txt

if "%HTTP_STATUS%"=="401" (
    echo ⚠️  Sito protetto - DEVI rimuovere protezione su Vercel
    echo.
    echo 📋 ISTRUZIONI RAPIDE:
    echo    1. Apri: https://vercel.com
    echo    2. Login con GitHub
    echo    3. Vai al progetto "gestione-aziendale"
    echo    4. Settings → General → Deployment Protection
    echo    5. Cambia in "Standard Protection" o "Disabled"
    echo    6. Salva
    echo    7. Deployments → Redeploy ultimo deployment
    echo.
    echo 🔗 Link diretto impostazioni:
    echo    https://vercel.com/beatrices-projects-c612032b/gestione-aziendale/settings/deployment-protection
    echo.
    start https://vercel.com/beatrices-projects-c612032b/gestione-aziendale/settings/deployment-protection
    echo.
    echo ⏳ Premi un tasto DOPO aver rimosso la protezione...
    pause >nul
) else if "%HTTP_STATUS%"=="200" (
    echo ✅ Sito accessibile!
) else (
    echo ⚠️  Status HTTP: %HTTP_STATUS%
)

echo.
echo [5/5] Setup Supabase...
echo.
echo 📦 SUPABASE - SEGUI QUESTI PASSAGGI:
echo.
echo ✅ STEP 1: Crea account Supabase
echo    → Apro il browser su supabase.com...
start https://supabase.com/dashboard/sign-in
timeout /t 3 >nul
echo    → Login con GitHub
echo    → Autorizza Supabase
echo.
echo ✅ STEP 2: Crea progetto
echo    → Click "New Project"
echo    → Nome: gestione-direzionale
echo    → Password database: [scegli e SALVALA]
echo    → Region: Europe (Frankfurt)
echo    → Click "Create new project"
echo    → ATTENDI 2-3 minuti...
echo.
echo ✅ STEP 3: Configura database
echo    → Sidebar sinistra: SQL Editor
echo    → Click "+ New query"
echo    → Apri il file: supabase-setup.sql
echo    → COPIA TUTTO il contenuto
echo    → INCOLLA nell'editor SQL
echo    → Click "Run" (o F5)
echo    → Attendi "Success"
echo.
echo ✅ STEP 4: Ottieni credenziali
echo    → Sidebar sinistra: Settings (icona ingranaggio)
echo    → Click "API"
echo    → COPIA: Project URL
echo    → COPIA: anon public (API Key)
echo.
echo ⏳ Premi un tasto DOPO aver copiato URL e API Key...
pause >nul

echo.
echo 📝 Inserisci le credenziali Supabase:
echo.
set /p SUPABASE_URL="Project URL: "
set /p SUPABASE_KEY="API Key (anon public): "

echo.
echo 💾 Salvo configurazione in supabase-config.js...

(
echo // =====================================================
echo // CONFIGURAZIONE SUPABASE
echo // =====================================================
echo.
echo const SUPABASE_CONFIG = {
echo     url: '%SUPABASE_URL%',
echo     anonKey: '%SUPABASE_KEY%'
echo };
echo.
echo function checkSupabaseConfig^(^) {
echo     if ^(SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL' ^^|^^|
echo         SUPABASE_CONFIG.anonKey === 'YOUR_SUPABASE_ANON_KEY'^) {
echo         console.warn^('⚠️ Supabase non configurato!'^);
echo         return false;
echo     }
echo     return true;
echo }
) > supabase-config.js

echo ✅ Configurazione salvata!

echo.
echo 📤 Push su GitHub...
git add supabase-config.js
git commit -m "Configura credenziali Supabase"
git push

echo.
echo ============================================================
echo ✅ SETUP COMPLETATO!
echo ============================================================
echo.
echo 🎉 Il tuo sistema è pronto!
echo.
echo 🔗 Apri il tuo sito:
echo    https://gestione-aziendale-git-main-beatrices-projects-c612032b.vercel.app/
echo.
echo 📋 PROSSIMI PASSI:
echo    1. Attendi 30 secondi che Vercel completi il deploy
echo    2. Apri l'URL sopra
echo    3. Registra un account
echo    4. Login
echo    5. Se hai dati esistenti: Impostazioni → Migra Dati
echo.
echo 💡 Per aprire il sito ora, premi un tasto...
pause >nul
start https://gestione-aziendale-git-main-beatrices-projects-c612032b.vercel.app/
echo.
echo 🎊 BUON LAVORO!
echo.
pause
