# 📊 Sistema di Gestione Direzionale Multi-Azienda

Sistema completo di gestione operativa per Assistente di Direzione Senior che coordina 4 aziende contemporaneamente.

## 🚀 Deploy su Vercel

### Metodo 1: Deploy Automatico con GitHub (CONSIGLIATO)

1. **Carica il progetto su GitHub** (se non l'hai già fatto):
   ```bash
   git remote add origin https://github.com/TUO-USERNAME/sistema-gestione-direzionale.git
   git branch -M main
   git push -u origin main
   ```

2. **Vai su [Vercel](https://vercel.com)**
   - Fai login (usa GitHub per accesso rapido)
   - Click su **"New Project"**

3. **Importa il repository**
   - Seleziona il repository `sistema-gestione-direzionale`
   - Click **"Import"**

4. **Configura il deploy**
   - Framework Preset: **Other**
   - Root Directory: `./` (lascia vuoto)
   - Build Command: (lascia vuoto)
   - Output Directory: (lascia vuoto)
   - Click **"Deploy"**

5. **Deploy completato!**
   - Vercel genererà un URL tipo: `https://sistema-gestione-direzionale.vercel.app`
   - Il sito sarà online in ~30 secondi

### Metodo 2: Deploy con Vercel CLI

1. **Installa Vercel CLI** (solo la prima volta):
   ```bash
   npm install -g vercel
   ```

2. **Login a Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy il progetto**:
   ```bash
   cd "C:\Users\ASUS\Desktop\PROGETTI\Sistema Gestione Direzionale"
   vercel
   ```

4. Segui le istruzioni:
   - Setup and deploy? **Y**
   - Which scope? Scegli il tuo account
   - Link to existing project? **N**
   - Project name? `sistema-gestione-direzionale`
   - In which directory? `./`
   - Deploy? **Y**

5. **Deploy in produzione**:
   ```bash
   vercel --prod
   ```

### Metodo 3: Deploy Manuale (Drag & Drop)

1. Vai su [Vercel](https://vercel.com) e fai login
2. Vai alla [pagina di deploy](https://vercel.com/new)
3. Trascina la cartella `Sistema Gestione Direzionale` nella finestra
4. Vercel farà automaticamente il deploy
5. Riceverai un URL pubblico

---

## ✨ Funzionalità Principali

### 🏢 Multi-Azienda
- Gestione simultanea di 4 aziende
- Dashboard consolidata con vista aggregata
- Cambio rapido tra aziende

### ✅ Gestione Attività
- Sistema priorità A+, A, B, C
- Categorie: Urgente, Importante, Fiscale, HR, Critico, Decisioni, Operativo
- Scadenze e deadline
- Completamento automatico

### 📅 Scadenze Fiscali
- Calendario scadenze IVA, INPS, F24
- Alert automatici per scadenze imminenti
- Categorizzazione (fiscale, amministrativa, HR)

### 💰 Gestione Spese
- Tracciamento spese aziendali
- Categorie personalizzate
- Statistiche giornaliere, settimanali, mensili

### 📆 Calendario e Appuntamenti
- Calendario mensile interattivo
- Gestione appuntamenti con luogo e partecipanti
- Vista prossimi appuntamenti

### 👥 Rubrica Contatti
- Gestione completa contatti
- Categorie: clienti, fornitori, consulenti, dipendenti
- Ricerca rapida

### 📁 Archivi Documenti
- Sistema categorizzato per tipo documento
- Link a file locali e online
- Ricerca e filtro documenti

### 📋 Procedure SOP
- 15+ procedure operative standard
- Checklist interattive
- Tracciamento esecuzioni

### 📊 Report Direzionale
- Generazione report PDF
- Statistiche aggregate
- Vista settimanale/mensile

### 🔍 Ricerca Globale
- Ricerca in tutte le sezioni
- Shortcut: **Ctrl+K**
- Risultati in tempo reale

### 📈 Analytics Avanzate
- Grafici interattivi
- Statistiche per periodo
- Trend e performance

### 🔄 Template Ricorrenti
- Template per attività ripetitive
- Frequenza: giornaliera, settimanale, mensile, trimestrale

### 📎 Sistema Dettaglio Elementi
- Click su qualsiasi elemento per dettagli completi
- **Documenti allegati**: aggiungi PDF, contratti, fatture, email
- **Note interne**: commenti e annotazioni
- **Cronologia**: timeline di tutte le modifiche
- Icone file: 📕PDF, 📘Word, 📗Excel, 📧Email

### 🔔 Notifiche Browser
- Alert per scadenze imminenti
- Promemoria attività urgenti
- Controllo automatico ogni 30 minuti

### 💾 Backup Automatico
- Salvataggio automatico ogni 30 minuti
- Versioning degli ultimi 10 backup
- Export manuale in JSON, CSV, Excel

### 📜 Audit Log
- Storico completo modifiche
- Filtri per tipo e azienda
- Tracciabilità azioni

---

## 💾 Gestione Dati

### Dove Vengono Salvati i Dati?

I dati sono salvati nel **localStorage del browser**. Questo significa:

✅ **Vantaggi:**
- Nessun costo server
- Privacy totale (dati solo sul tuo dispositivo)
- Funziona offline
- Nessuna registrazione richiesta

⚠️ **Importante:**
- I dati sono specifici per ogni browser
- Se cancelli cache/dati del browser, perdi i dati
- **SOLUZIONE**: Usa il backup automatico e manuale

### Backup dei Dati

1. **Backup Automatico** (ogni 30 minuti)
   - I backup sono salvati automaticamente
   - Mantiene ultimi 10 backup
   - Accessibili da Impostazioni

2. **Export Manuale**
   - Vai su **Impostazioni**
   - Click su **"📥 Esporta Tutti i Dati (JSON)"**
   - Salva il file in un luogo sicuro (Dropbox, Google Drive, etc.)

3. **Export CSV/Excel**
   - Per analisi: **"📊 Esporta CSV"**
   - Per report: **"📑 Esporta Excel"**

### Importare Dati di Test

Per iniziare subito con dati di esempio:

1. Vai su **Impostazioni**
2. Click **"📤 Importa Dati"**
3. Seleziona il file `dati-test-aziende.json`
4. I dati di 2 aziende saranno caricati

---

## 🔒 Sicurezza e Privacy

- ✅ Tutti i dati rimangono sul tuo browser
- ✅ Nessun server esterno coinvolto
- ✅ Nessun tracciamento
- ✅ Nessun cookie di terze parti
- ✅ Funziona completamente offline dopo il primo caricamento

**IMPORTANTE**: Fai backup regolari dei tuoi dati!

---

## 🛠️ Tecnologie

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: localStorage API
- **Deploy**: Vercel (serverless)
- **Browser Support**: Chrome, Firefox, Edge, Safari (versioni moderne)

---

## 📱 Utilizzo

### Desktop
- Esperienza ottimale su schermi ≥1280px
- Tutte le funzionalità disponibili

### Tablet/Mobile
- Layout responsive
- Funzionalità complete
- Ottimizzato per touch

---

## 🆘 Supporto

### Problemi Comuni

**1. I dati non si salvano**
- Verifica che il browser permetta localStorage
- Controlla di non essere in modalità incognito
- Verifica spazio disponibile browser

**2. Le notifiche non funzionano**
- Vai su Impostazioni
- Click "Abilita Notifiche"
- Accetta i permessi del browser

**3. Il sistema è lento**
- Fai un backup ed elimina dati vecchi
- Svuota cache browser
- Prova con browser diverso

---

## 📄 Licenza

MIT License - Libero uso personale e commerciale

---

## 👥 Autore

Beatrice Carletti - Assistente di Direzione Senior
Sistema creato per gestione operativa multi-azienda

---

## 🔄 Aggiornamenti

### Versione 3.0 (Dicembre 2024)
- ✨ Sistema dettaglio elementi con documenti allegati
- 📎 Gestione documenti per attività, scadenze, appuntamenti, spese
- 📝 Sistema note e commenti
- 🕒 Cronologia eventi con timeline
- 📈 Dashboard consolidata multi-azienda
- 🔍 Ricerca globale (Ctrl+K)
- 📊 Analytics avanzate con grafici
- 🔄 Template attività ricorrenti
- 🔔 Notifiche browser
- 💾 Backup automatico con versioning
- 📑 Export multi-formato (CSV, Excel)
- 📜 Audit log completo

### Versione 2.0
- 🏢 Gestione 4 aziende
- 📅 Calendario interattivo
- 👥 Sistema contatti
- 📁 Archivi documenti
- 📋 15+ Procedure SOP

### Versione 1.0
- ✅ Gestione attività base
- 📅 Scadenze fiscali
- 💰 Tracciamento spese
- 📊 Report base

---

## 🚀 Prossimi Sviluppi

- [ ] Sync cloud opzionale (Google Drive/Dropbox)
- [ ] App mobile nativa
- [ ] Esportazione PDF avanzata
- [ ] Integrazione calendario Google/Outlook
- [ ] Multi-lingua (EN, ES, FR)
- [ ] Temi colore personalizzati
- [ ] Dashboard widget personalizzabili

---

**Buon lavoro! 🎉**
