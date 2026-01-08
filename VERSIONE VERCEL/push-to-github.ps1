# Script PowerShell per Push su GitHub
# Esegui DOPO aver creato il repository su GitHub

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "PUSH SISTEMA GESTIONE DIREZIONALE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vai nella directory del progetto
Set-Location "C:\Users\ASUS\Desktop\PROGETTI\Sistema Gestione Direzionale"

Write-Host "Directory corrente: " -NoNewline
Get-Location
Write-Host ""

# Chiedi l'URL del repository GitHub
Write-Host "Hai creato il repository su GitHub?" -ForegroundColor Yellow
Write-Host "Se NO, apri il browser su: https://github.com/new" -ForegroundColor Yellow
Write-Host ""
$repoUrl = Read-Host "Inserisci l'URL del tuo repository GitHub (es: https://github.com/username/sistema-gestione-direzionale.git)"

Write-Host ""
Write-Host "1. Configurazione remote..." -ForegroundColor Green

# Rimuovi remote esistente se presente
git remote remove origin 2>$null

# Aggiungi il remote
git remote add origin $repoUrl

Write-Host "   ✓ Remote configurato" -ForegroundColor Green
Write-Host ""

# Verifica remote
Write-Host "2. Verifica configurazione..." -ForegroundColor Green
git remote -v
Write-Host ""

# Push
Write-Host "3. Push su GitHub..." -ForegroundColor Green
Write-Host ""
Write-Host "   Se ti chiede username e password:" -ForegroundColor Yellow
Write-Host "   - Username: il tuo username GitHub" -ForegroundColor Yellow
Write-Host "   - Password: usa Personal Access Token (NON la password normale!)" -ForegroundColor Yellow
Write-Host ""
Write-Host "   Per creare il token:" -ForegroundColor Yellow
Write-Host "   GitHub → Settings → Developer settings → Personal access tokens" -ForegroundColor Yellow
Write-Host "   Seleziona: repo (tutte le checkbox)" -ForegroundColor Yellow
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "✓ PUSH COMPLETATO CON SUCCESSO!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "PROSSIMO PASSO: Deploy su Vercel" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Vai su: https://vercel.com" -ForegroundColor White
    Write-Host "2. Login con GitHub" -ForegroundColor White
    Write-Host "3. Click 'New Project'" -ForegroundColor White
    Write-Host "4. Seleziona 'sistema-gestione-direzionale'" -ForegroundColor White
    Write-Host "5. Click 'Deploy'" -ForegroundColor White
    Write-Host "6. Aspetta 30 secondi" -ForegroundColor White
    Write-Host "7. FATTO! Avrai il tuo URL pubblico!" -ForegroundColor White
    Write-Host ""

    # Chiedi se aprire Vercel
    $openVercel = Read-Host "Vuoi aprire Vercel adesso? (S/N)"
    if ($openVercel -eq "S" -or $openVercel -eq "s") {
        Start-Process "https://vercel.com/new"
        Write-Host ""
        Write-Host "Browser aperto su Vercel!" -ForegroundColor Green
    }

} else {
    Write-Host ""
    Write-Host "⚠️  Errore durante il push" -ForegroundColor Red
    Write-Host ""
    Write-Host "Possibili soluzioni:" -ForegroundColor Yellow
    Write-Host "1. Verifica di aver creato il repository su GitHub" -ForegroundColor Yellow
    Write-Host "2. Controlla che l'URL sia corretto" -ForegroundColor Yellow
    Write-Host "3. Se chiede password, usa un Personal Access Token" -ForegroundColor Yellow
    Write-Host "4. Verifica la connessione internet" -ForegroundColor Yellow
    Write-Host ""
}

Write-Host ""
Write-Host "Premi un tasto per chiudere..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
