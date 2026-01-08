# 🚀 ISTRUZIONI DEPLOY - Sistema Gestione Direzionale

## ✅ Preparazione Completata!

Ho già preparato tutto per il deploy su Vercel. Segui questi semplici passi:

---

## 📝 STEP 1: Crea Repository su GitHub (2 minuti)

### Opzione A: Dal Sito GitHub (PIÙ FACILE)

1. **Vai su [github.com](https://github.com)** e fai login
   - Se non hai un account: click "Sign up" (è gratis!)

2. **Crea nuovo repository**:
   - Click sul **+** in alto a destra
   - Seleziona **"New repository"**

3. **Compila il form**:
   ```
   Repository name: sistema-gestione-direzionale
   Description: Sistema di Gestione Direzionale Multi-Azienda
   Public/Private: Scegli PUBLIC (per Vercel gratuito)

   ⚠️ NON selezionare:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license

   (Abbiamo già questi file!)
   ```

4. **Click "Create repository"**

5. **Copia l'URL** che appare (sarà tipo):
   ```
   https://github.com/TUO-USERNAME/sistema-gestione-direzionale.git
   ```

---

## 📤 STEP 2: Carica il Codice su GitHub

### Apri il terminale (PowerShell o CMD) e esegui:

```powershell
# 1. Vai nella cartella del progetto
cd "C:\Users\ASUS\Desktop\PROGETTI\Sistema Gestione Direzionale"

# 2. Aggiungi il repository GitHub (sostituisci TUO-USERNAME con il tuo username GitHub!)
git remote add origin https://github.com/TUO-USERNAME/sistema-gestione-direzionale.git

# 3. Verifica che sia configurato
git remote -v

# 4. Carica tutto su GitHub
git push -u origin main
```

**Se ti chiede username e password**:
- Username: il tuo username GitHub
- Password: usa un **Personal Access Token** (non la password normale!)
  - Per creare il token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
  - Seleziona: `repo` (tutte le checkbox)
  - Copia il token e usalo come password

---

## 🌐 STEP 3: Deploy su Vercel (1 minuto!)

### Vai su Vercel e fai il deploy:

1. **Apri [vercel.com](https://vercel.com)**

2. **Login con GitHub**:
   - Click **"Continue with GitHub"**
   - Autorizza Vercel ad accedere ai tuoi repository

3. **Importa il progetto**:
   - Click **"Add New..."** → **"Project"**
   - Troverai il repository `sistema-gestione-direzionale`
   - Click **"Import"**

4. **Configura (lascia tutto di default!)**:
   ```
   Framework Preset: Other
   Root Directory: ./
   Build Command: (lascia vuoto)
   Output Directory: (lascia vuoto)
   Install Command: (lascia vuoto)
   ```

5. **Click "Deploy"** 🚀

6. **Attendi 30 secondi...**

7. **✅ FATTO!** 🎉

   Vercel ti darà un URL tipo:
   ```
   https://sistema-gestione-direzionale.vercel.app
   ```

---

## 🎯 STEP 4: Testa il Sistema

1. **Apri l'URL** che Vercel ti ha dato

2. **Importa i dati di test**:
   - Click su **"Impostazioni"** nel menu
   - Scroll a "Gestione Dati"
   - Click **"📤 Importa Dati"**
   - Seleziona il file `dati-test-aziende.json` dalla cartella del progetto
   - Vedrai 2 aziende con dati completi!

3. **Esplora il sistema**:
   - Vai su **"Azienda 1"** (Carletti Componenti)
   - Click su un'attività per vedere il dettaglio
   - Prova ad aggiungere un documento allegato
   - Testa la ricerca globale: premi **Ctrl+K**
   - Vai su **"📈 Vista Consolidata"** per vedere tutte le aziende
   - Esplora **"📊 Analytics"** per i grafici

---

## 🔄 Aggiornamenti Futuri

Ogni volta che modifichi il codice:

```powershell
# 1. Vai nella cartella
cd "C:\Users\ASUS\Desktop\PROGETTI\Sistema Gestione Direzionale"

# 2. Commit le modifiche
git add .
git commit -m "Descrizione modifiche"

# 3. Push su GitHub
git push

# 4. Vercel rileva automaticamente e rideploya!
```

**Il deploy automatico richiede ~30 secondi**

---

## 🎨 Personalizzazioni Vercel

### Dominio Personalizzato

Se vuoi un dominio tuo (es: `gestione.tuosito.com`):

1. Vai su Vercel → Il tuo progetto
2. Click **"Settings"** → **"Domains"**
3. Aggiungi il tuo dominio
4. Segui le istruzioni DNS

### Variabili d'Ambiente

Non necessarie per questo progetto (tutto client-side!)

---

## ⚠️ IMPORTANTE: Gestione Dati

### 💾 I dati sono salvati nel localStorage del browser!

Questo significa:
- ✅ Privacy totale (dati solo sul tuo dispositivo)
- ✅ Nessun costo server
- ✅ Funziona offline
- ⚠️ Ogni browser ha dati separati
- ⚠️ Se cancelli cache, perdi i dati

### 🔒 Backup Essenziale

**DEVI fare backup regolari!**

1. **Setup backup automatico**:
   - Vai su **Impostazioni**
   - Sezione "Notifiche Browser"
   - Click **"🔔 Abilita Notifiche"**
   - Il sistema farà backup automatico ogni 30 minuti

2. **Backup manuale** (CONSIGLIATO settimanale):
   - Vai su **Impostazioni**
   - Click **"📥 Esporta Tutti i Dati (JSON)"**
   - Salva il file su:
     - Google Drive
     - Dropbox
     - OneDrive
     - Email a te stessa
     - Disco esterno

3. **Per ripristinare**:
   - Vai su **Impostazioni**
   - Click **"📤 Importa Dati"**
   - Seleziona il file JSON di backup

---

## 📱 Multi-Dispositivo

### Scenario: Usare su PC, Laptop e Tablet

Ogni dispositivo avrà dati separati. Per sincronizzare:

**Metodo 1 - Manuale**:
1. Sul dispositivo principale: Esporta dati
2. Salva su cloud (Google Drive/Dropbox)
3. Su altri dispositivi: Importa il file

**Metodo 2 - Condivisione File Cloud**:
1. Esporta dati regolarmente
2. Salva sempre con lo stesso nome su cloud
3. Prima di usare un altro dispositivo, importa l'ultima versione

---

## 🆘 Problemi Comuni

### "Git push failed - authentication failed"

**Soluzione**: Usa Personal Access Token invece della password

1. Vai su GitHub: Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Seleziona: `repo` (tutte le opzioni)
4. Copia il token
5. Usalo come password quando fai `git push`

### "Vercel build failed"

**Soluzione**: Non dovrebbe succedere (è un file HTML statico!)

Se succede:
- Verifica che `index.html` sia nella root del progetto
- Controlla che `vercel.json` sia presente
- Contatta supporto Vercel (chat in basso a destra su vercel.com)

### "I dati non si salvano su Vercel"

**Normale!** I dati sono nel localStorage del browser, non su Vercel.

Vercel ospita solo il codice (HTML/CSS/JS).
I dati sono nel TUO browser.

Fai backup regolari!

---

## 📊 Monitoraggio Vercel

Dopo il deploy, puoi vedere:

- **Analytics**: Visite, utenti, performance
- **Logs**: Eventuali errori (unlikely per HTML statico)
- **Deployments**: Storico deploy
- **Domains**: Domini collegati

Tutto dal dashboard Vercel!

---

## 🎉 Sei Pronta!

Il sistema è completo e pronto all'uso!

**Checklist Finale**:
- ✅ Codice su GitHub
- ✅ Deploy su Vercel
- ✅ URL pubblico funzionante
- ✅ Dati di test importati
- ✅ Backup configurato

**Inizia a usarlo!** 🚀

---

## 📞 Supporto

Se hai problemi:

1. Controlla questa guida
2. Leggi il [README.md](README.md) completo
3. Consulta [Vercel Docs](https://vercel.com/docs)
4. Apri un issue su GitHub del progetto

**Buon lavoro con il tuo Sistema di Gestione Direzionale!** 💼✨
