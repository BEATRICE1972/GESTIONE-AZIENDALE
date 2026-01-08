# 📊 Sistema Gestione Direzionale - Versione Locale

## 🎯 Descrizione

Versione **completamente locale** e **standalone** del Sistema di Gestione Direzionale Multi-Azienda.

- ✅ **Nessun server richiesto**
- ✅ **Funziona offline**
- ✅ **Dati salvati nel browser (localStorage)**
- ✅ **File singolo HTML autosufficiente**
- ✅ **No dipendenze esterne**
- ✅ **No configurazione necessaria**

---

## 🚀 Avvio Rapido

### Metodo 1: Doppio Click
1. Vai nella cartella `VERSIONE-LOCALE-SEMPLICE`
2. Fai **doppio click** su `gestione-locale-FIXED.html`
3. Il file si aprirà nel browser predefinito

### Metodo 2: Drag & Drop
1. Apri Chrome, Firefox o Edge
2. Trascina `gestione-locale-FIXED.html` nella finestra del browser

### Metodo 3: File > Apri
1. Apri il browser
2. File → Apri file (Ctrl+O)
3. Seleziona `gestione-locale-FIXED.html`

---

## ✨ Caratteristiche Versione Locale

### ✅ Cosa È Incluso

#### Funzionalità Complete:
- 📊 **Dashboard** multi-azienda con statistiche in tempo reale
- ✅ **Gestione Attività** con priorità (A+, A, B, C)
- ⏰ **Scadenze Fiscali/Legali** con reminder
- 💰 **Gestione Spese** con categorie e report
- 📅 **Calendario** integrato con eventi e colori priorità
- 📧 **Gestione Email** con assistente IA (simulato)
- 👥 **Rubrica Contatti** con import/export CSV
- 📁 **Archivi Documenti** digitali categorizzati
- 📋 **22 SOP** (Standard Operating Procedures):
  - 18 SOP Aziendali (business)
  - 4 SOP Personali/Casa (personal)
- 📄 **Report Direzionale** settimanale automatico
- 📊 **Analytics** e statistiche avanzate
- 🔄 **Template Ricorrenti** per attività ripetitive
- 📜 **Audit Log** storico modifiche
- 💾 **Backup/Export** dati in JSON, CSV, Excel

#### Gestione Multi-Azienda:
- 4 aziende separate (Azienda 1, 2, 3, 4)
- Dati completamente isolati per ogni azienda
- Switch veloce tra aziende
- Dashboard consolidata multi-azienda

### ❌ Cosa È Stato Rimosso

Rispetto alla versione Vercel (cloud), sono stati rimossi:

- ❌ Sincronizzazione cloud (Supabase)
- ❌ Autenticazione utenti
- ❌ Backup automatico su cloud
- ❌ Accesso da più dispositivi sincronizzati
- ❌ Pulsante ricerca globale (non necessario)
- ❌ FAB "+" azioni rapide (duplicato)
- ❌ Modal ricerca globale (non necessario)
- ❌ SOP 23, 24, 25 (ridondanti)

---

## 📂 Struttura Dati

Tutti i dati sono salvati nel **localStorage** del browser con questa struttura:

```javascript
{
  companies: {
    1: { name: 'Azienda 1', tasks: [], deadlines: [], ... },
    2: { name: 'Azienda 2', tasks: [], deadlines: [], ... },
    3: { name: 'Azienda 3', tasks: [], deadlines: [], ... },
    4: { name: 'Azienda 4', tasks: [], deadlines: [], ... }
  },
  templates: [],
  auditLog: [],
  settings: { ... }
}
```

---

## 💾 Backup e Sicurezza Dati

### ⚠️ IMPORTANTE: I Dati Sono Locali

I dati sono salvati **solo nel browser** in cui apri il file. Questo significa:

- ✅ Dati accessibili offline
- ✅ Privacy totale (nessun dato online)
- ✅ Velocità massima
- ⚠️ Se cancelli i dati del browser, **perdi tutto**
- ⚠️ Se cambi browser, **non vedi i dati**
- ⚠️ Se cambi computer, **non vedi i dati**

### 💾 Come Fare Backup

#### Backup Manuale (Consigliato: Settimanale)

1. Apri il sistema
2. Vai in **Impostazioni** (⚙️)
3. Clicca su **"💾 Backup Manuale"**
4. Salva il file JSON generato
5. Conserva il backup in un luogo sicuro (es: Google Drive, Dropbox, USB)

#### Export Dati

Puoi esportare i dati in diversi formati:

- **JSON** (completo, consigliato per backup)
- **CSV** (per Excel/Google Sheets)
- **Excel** (tabelle formattate)

#### Restore da Backup

1. Vai in **Impostazioni**
2. Clicca su **"📤 Importa Dati"**
3. Seleziona il file JSON di backup
4. Conferma il ripristino

---

## 🔧 Configurazione

### Personalizza Nomi Aziende

1. Vai in **Impostazioni** → **Configura Nomi Aziende**
2. Cambia i nomi (es: "Azienda 1" → "Rossi S.r.l.")
3. Clicca **Salva Configurazione**

### Abilita Notifiche Browser

1. Vai in **Impostazioni** → **Notifiche Browser**
2. Clicca **"🔔 Abilita Notifiche"**
3. Accetta la richiesta del browser
4. Riceverai promemoria automatici per scadenze urgenti

---

## 📋 Guide Rapide

### Aggiungere un'Attività

1. Sidebar → **Attività** ✅
2. Compila il form:
   - Titolo
   - Descrizione
   - Categoria (Urgente, Importante, ecc.)
   - Priorità (A+, A, B, C)
   - Data scadenza
3. Clicca **Aggiungi Attività**

### Aggiungere una Scadenza

1. Sidebar → **Scadenze** ⏰
2. Compila:
   - Tipo (F24, INPS, ecc.)
   - Data scadenza
   - Categoria (Fiscale, Legale, HR, Amministrativa)
3. Clicca **Aggiungi Scadenza**

### Aggiungere una Spesa

1. Sidebar → **Spese** 💰
2. Compila:
   - Descrizione
   - Importo (€)
   - Data
   - Categoria
3. Clicca **Aggiungi Spesa**

### Usare i SOP (Procedure)

1. Sidebar → **Procedure (SOP)** 📋
2. Scegli tab: **💼 SOP Aziendali** o **🏠 SOP Personali/Casa**
3. Clicca su un SOP per espanderlo
4. Segui i passaggi della checklist
5. Salva note ed esegui la procedura

### Gestire Documenti

1. Sidebar → **Archivi Documenti** 📁
2. Clicca su una categoria (es: "Contratti")
3. Aggiungi documento:
   - Nome
   - Data
   - Tipo
   - Carica file (max 10MB) **OPPURE** inserisci link esterno
4. Clicca **Aggiungi Documento**

---

## 🆘 Risoluzione Problemi

### Il file non si apre

**Soluzione**:
- Verifica che il file sia in formato `.html`
- Prova ad aprirlo con tasto destro → Apri con → Browser

### I dati non si salvano

**Soluzione**:
- Verifica che il browser non sia in modalità incognito
- Controlla le impostazioni privacy del browser
- Assicurati che localStorage sia abilitato

### Errore "Cannot read property..."

**Soluzione**:
- Ricarica la pagina (F5)
- Cancella la cache del browser (Ctrl+Shift+Del)
- Prova con un browser diverso

### Ho cancellato i dati per errore

**Soluzione**:
- Se hai un backup: Impostazioni → Importa Dati
- Se non hai backup: purtroppo i dati sono persi ⚠️

### Il calendario non mostra gli eventi

**Soluzione**:
- Verifica di aver aggiunto attività con data di scadenza
- Naviga al mese corretto con le frecce ◀ ▶
- Ricarica la pagina

---

## 📱 Compatibilità

### Browser Supportati

✅ **Consigliati**:
- Chrome/Chromium 90+
- Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

⚠️ **Limitati**:
- Internet Explorer (NON supportato)

### Dispositivi

✅ **Desktop**: Windows, macOS, Linux
✅ **Tablet**: iPad, Android tablet
⚠️ **Mobile**: Smartphone (funziona ma UX ottimizzata per desktop)

---

## 🔐 Privacy e Sicurezza

### Dove Sono i Miei Dati?

I tuoi dati sono salvati **solo nel tuo browser**, nella memoria localStorage. NON vengono mai inviati a server esterni.

### Chi Può Vedere i Miei Dati?

**Nessuno**, tranne te. Non c'è:
- ❌ Nessun server
- ❌ Nessun database online
- ❌ Nessuna sincronizzazione cloud
- ❌ Nessun tracciamento
- ❌ Nessuna analytics

### Posso Usarlo per Dati Sensibili?

✅ **Sì**, i dati sono completamente privati e locali. Tuttavia:
- ⚠️ Fai backup regolari (settimanali)
- ⚠️ Non condividere il file HTML con altri (contiene i tuoi dati)
- ⚠️ Se il computer è condiviso, considera di criptare i backup

---

## 📚 Documentazione Aggiuntiva

### File Inclusi

- `gestione-locale-FIXED.html` - File principale (QUESTO)
- `MODIFICHE-APPLICATE.md` - Log dettagliato modifiche
- `TEST-CHECKLIST.md` - Checklist test funzionalità
- `README-VERSIONE-LOCALE.md` - Questa guida

### Changelog

**v1.0 - 6 Gennaio 2026**
- ✅ Versione locale standalone creata da versione Vercel
- ✅ Rimossi riferimenti cloud/Supabase
- ✅ Riorganizzati SOP (1-18 business, 19-22 personal)
- ✅ Eliminati SOP 23, 24, 25
- ✅ Rimossi pulsanti ricerca e FAB non funzionanti
- ✅ Aggiunto banner "Versione Locale"

---

## 🤝 Supporto

### FAQ

**Q: Posso usarlo su più computer?**
A: Sì, ma i dati NON si sincronizzano. Devi fare backup/import manuale.

**Q: Quanto spazio occupa?**
A: Il file HTML è ~420KB. I dati in localStorage dipendono dall'uso (solitamente 1-5 MB).

**Q: Posso modificare il codice?**
A: Sì, è un file HTML aperto. Puoi modificarlo con qualsiasi editor di testo.

**Q: È sicuro per dati aziendali?**
A: Sì, i dati sono locali. Ma fai backup regolari!

**Q: Funziona su iPad/iPhone?**
A: Sì, ma l'interfaccia è ottimizzata per desktop.

---

## 📧 Contatti

Per segnalazioni bug o suggerimenti, crea un Issue su GitHub (se disponibile) o contatta l'amministratore del sistema.

---

## 📄 Licenza

Questo software è fornito "as-is" senza garanzie di alcun tipo.

---

**Versione**: 1.0 Local
**Data Rilascio**: 6 Gennaio 2026
**Creato con**: Claude Code (Anthropic)

---

## 🎉 Buon Lavoro!

Hai domande? Consulta prima:
1. Questa guida (README)
2. Le FAQ sopra
3. Il file MODIFICHE-APPLICATE.md
4. La checklist TEST-CHECKLIST.md

💡 **Tip**: Aggiungi questo file ai preferiti del browser per accesso rapido!
