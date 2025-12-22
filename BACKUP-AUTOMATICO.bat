@echo off
title Backup Sistema Gestione Direzionale
color 0A

echo.
echo ========================================
echo   BACKUP SISTEMA GESTIONE DIREZIONALE
echo ========================================
echo.

REM Ottieni data e ora corrente
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set year=%datetime:~0,4%
set month=%datetime:~4,2%
set day=%datetime:~6,2%
set hour=%datetime:~8,2%
set minute=%datetime:~10,2%

set backup_date=%year%-%month%-%day%_%hour%-%minute%

echo Creazione backup in corso...
echo Data e ora: %day%/%month%/%year% alle %hour%:%minute%
echo.

REM Copia il file HTML nella cartella Backup con timestamp
copy "sistema-gestione-direzionale.html" "Backup\backup_%backup_date%.html" >nul

if %errorlevel% equ 0 (
    echo [OK] Backup creato con successo!
    echo.
    echo File salvato come: backup_%backup_date%.html
    echo Percorso: Backup\backup_%backup_date%.html
) else (
    echo [ERRORE] Impossibile creare il backup!
)

echo.
echo ========================================
echo Premi un tasto per chiudere...
pause >nul
