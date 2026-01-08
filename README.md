# Sistema Gestione Direzionale Multi-Azienda

Sistema completo di gestione direzionale per gestire simultaneamente fino a 4 aziende diverse, con tutte le funzionalità necessarie per organizzare attività, scadenze, spese, appuntamenti, email, contatti e procedure operative standard (SOP).

## Scegli la Tua Versione

Il progetto è disponibile in **due versioni complete e funzionanti**:

### 1. VERSIONE LOCALE (Consigliata per iniziare)

**Percorso:** `VERSIONE-LOCALE-SEMPLICE/`

**File principale:** `gestione-locale.html`

**Caratteristiche:**
- File SINGOLO autocontenuto (400 KB)
- Funziona completamente OFFLINE
- Nessuna configurazione necessaria
- Avvio immediato con doppio click
- Portabile (copia su USB e usa ovunque)
- Privacy totale (dati solo sul tuo dispositivo)
- 22 SOP complete
- Tutte le funzionalità disponibili

**Come iniziare:**
```bash
1. Vai nella cartella VERSIONE-LOCALE-SEMPLICE/
2. Doppio click su gestione-locale.html
3. Inizia subito!
```

**Documentazione:**
- `README-VERSIONI.md` - Confronto dettagliato tra versioni
- `GUIDA-VERSIONE-LOCALE.md` - Guida completa all'uso
- `QUICK-START-LOCALE.txt` - Guida rapida 1 pagina
- `TEST-VERSIONE-LOCALE.md` - Checklist test funzionalità

### 2. VERSIONE CLOUD

**Percorso:** `VERSIONE VERCEL/`

**File principale:** `index.html`

**Caratteristiche:**
- Sincronizzazione cloud con Supabase
- Backup automatico
- Accesso multi-dispositivo
- Autenticazione utente
- Collaborazione team
- Deploy su Vercel

**Come iniziare:**
```bash
1. Leggi SETUP-SUPABASE.md per configurare il backend
2. Configura account Supabase gratuito
3. Crea file supabase-config.js con le tue credenziali
4. Apri index.html o fai deploy su Vercel
```

**Documentazione:**
- `SETUP-SUPABASE.md` - Setup completo Supabase
- `DEPLOY-INSTRUCTIONS.md` - Deploy su Vercel
- `GUIDA-COMPLETA-CLOUD.md` - Guida all'uso cloud
- `GUIDA-VERCEL-ACCESSO.md` - Accesso a progetto Vercel

## Confronto Rapido

| Caratteristica | Versione Locale | Versione Cloud |
|----------------|----------------|----------------|
| Setup | Zero (doppio click) | Configurazione Supabase |
| Internet | Opzionale | Necessario |
| Storage | localStorage browser | Cloud + localStorage |
| Backup | Manuale | Automatico |
| Multi-dispositivo | Backup/restore manuale | Sync automatica |
| Privacy | Dati solo locali | Dati su server |
| Portabilità | Sì (USB/email) | No |
| Team | No | Sì |
| Funzionalità | Complete (22 SOP) | Complete (25 SOP) |

## Funzionalità Complete (Entrambe le Versioni)

- **Dashboard Multi-Azienda**: Gestisci fino a 4 aziende simultaneamente
- **Gestione Attività**: Con priorità (A+, A, B, C) e categorie
- **Scadenze Fiscali**: Calendario fiscale con alert automatici
- **Gestione Spese**: Tracciamento categorizzato con statistiche
- **Calendario Appuntamenti**: Con export .ICS per Google/Outlook
- **Email con IA**: Categorizzazione automatica e assistente intelligente
- **Rubrica Contatti**: Clienti, fornitori, consulenti, dipendenti
- **Archivi Documenti**: Upload file (PDF, Excel, Word, immagini)
- **Procedure SOP**: 22-25 SOP complete con checklist interattive
- **Report e Statistiche**: Dashboard completo e analytics
- **Backup/Export**: JSON, CSV, Excel
- **Notifiche Browser**: Alert automatici per scadenze

## Quale Versione Scegliere?

### Usa la VERSIONE LOCALE se:
- Uso personale su 1 PC/laptop
- Vuoi massima privacy e semplicità
- Non vuoi configurare nulla
- Ti va bene fare backup manuali
- Vuoi portabilità totale

### Usa la VERSIONE CLOUD se:
- Lavori in team
- Accedi da più dispositivi
- Vuoi backup automatico cloud
- Ti serve sync real-time
- Uso aziendale professionale

## Struttura Progetto

```
Sistema Gestione Direzionale/
│
├── README.md                          (questo file)
│
├── VERSIONE-LOCALE-SEMPLICE/          Versione standalone
│   ├── gestione-locale.html          FILE PRINCIPALE
│   ├── README-VERSIONI.md            Confronto versioni
│   ├── GUIDA-VERSIONE-LOCALE.md      Guida completa
│   ├── QUICK-START-LOCALE.txt        Guida rapida
│   └── ... (documentazione e test)
│
└── VERSIONE VERCEL/                   Versione cloud
    ├── index.html                    FILE PRINCIPALE
    ├── supabase-config.js            Configurazione (da creare)
    ├── supabase-api.js               API Supabase
    ├── auth-ui.js                    Autenticazione
    ├── SETUP-SUPABASE.md             Guida setup
    ├── DEPLOY-INSTRUCTIONS.md        Guida deploy
    └── ... (file configurazione)
```

## Migrazione tra Versioni

### Da locale a cloud:
1. Versione locale: Impostazioni → Backup Manuale (JSON)
2. Configura versione cloud (segui SETUP-SUPABASE.md)
3. Login su index.html
4. Importa JSON dalla sezione migrazione

### Da cloud a locale:
1. Versione cloud: Esporta dati (JSON)
2. Apri gestione-locale.html
3. Impostazioni → Importa Dati
4. Seleziona JSON esportato

## Requisiti

### Versione Locale:
- Browser moderno (Chrome, Edge, Firefox, Opera)
- JavaScript abilitato
- localStorage abilitato (500KB+ disponibili)

### Versione Cloud:
- Account Supabase (gratuito)
- Account Vercel (opzionale, per deploy)
- Node.js (opzionale, per sviluppo locale)
- Browser moderno

## Quick Start - Versione Locale (5 minuti)

1. Clona o scarica questo repository
2. Vai in `VERSIONE-LOCALE-SEMPLICE/`
3. Doppio click su `gestione-locale.html`
4. Esplora le funzionalità con i dati di test precaricati
5. Personalizza nomi aziende nelle impostazioni
6. Inizia a inserire i tuoi dati reali

## Supporto e Documentazione

- Leggi i file README in ogni cartella versione
- Consulta le guide specifiche per ogni versione
- Controlla i file di test per verificare le funzionalità

## Sicurezza e Privacy

**Versione Locale:**
- Dati salvati SOLO nel browser locale
- Nessuna connessione internet
- Nessun tracking / analytics
- Privacy totale

**Versione Cloud:**
- Dati criptati su Supabase
- Autenticazione sicura
- Backup automatico
- Accesso controllato

## Backup Raccomandati

**Versione Locale:**
- Backup manuale settimanale (Impostazioni → Backup)
- Copia file JSON su cloud personale o USB

**Versione Cloud:**
- Backup automatico su Supabase
- Export manuale periodico consigliato

## Licenza

Open source - Modificabile e personalizzabile

## Versione

- Sistema: v4.0
- Versione Locale: 4.0 Local Edition
- Versione Cloud: 4.0 Cloud Edition
- Ultimo aggiornamento: 2026-01-08

## Inizia Ora!

**Per la massima semplicità:** Vai in `VERSIONE-LOCALE-SEMPLICE/` e apri `gestione-locale.html`

**Per funzionalità cloud:** Vai in `VERSIONE VERCEL/` e segui `SETUP-SUPABASE.md`

Buon lavoro con il tuo Sistema di Gestione Direzionale!
