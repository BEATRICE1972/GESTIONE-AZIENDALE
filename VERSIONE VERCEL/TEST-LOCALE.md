# 🧪 TEST LOCALE - Istruzioni per Verificare il Sistema

## 🚀 Come Testare Localmente

### Metodo 1: Server Python (Consigliato)

1. Apri il terminale in questa cartella
2. Esegui:
   ```bash
   python -m http.server 8000
   ```
3. Apri il browser su: `http://localhost:8000`
4. **Apri la Console del Browser (F12)** per vedere i log

### Metodo 2: Doppio Click (Può avere problemi CORS)

1. Fai doppio click su `index.html`
2. Apri Console (F12) per vedere eventuali errori

---

## 🔍 Cosa Verificare nella Console (F12)

### ✅ Log di Successo Attesi:

Quando il sistema si avvia correttamente dovresti vedere:

```
🚀 Inizializzazione sistema...
📋 Config Supabase: assente (o presente)
📋 API Supabase: assente (o presente)
📋 Require Auth: false
💾 Avvio in modalità localStorage...
🔧 Inizializzazione app locale...
📊 Caricamento dati di test per dimostrazione...
✅ Dati di test caricati con successo!
✅ Inizializzazione completata!
```

### ⚠️ Errori Comuni (Non Bloccanti):

Questi errori sono NORMALI e non bloccano il sistema:

```
⚠️ Supabase CDN non disponibile. Sistema userà localStorage.
⚠️ supabase-config.js non caricato
⚠️ supabase-api.js non caricato
⚠️ auth-ui.js non caricato
Template non disponibili
Audit log non disponibile
Dashboard consolidata non disponibile
Analytics non disponibili
Auto backup non disponibile
Notifiche non disponibili
```

### ❌ Errori BLOCCANTI da Segnalare:

Se vedi questi, il sistema ha problemi:

```
❌ Errore loadData: ...
❌ Errore updateDashboard: ...
❌ Errore showSection: ...
TypeError: ... is not a function
ReferenceError: ... is not defined
```

---

## 🎯 Checklist Test Funzionalità

Segui questa checklist e segna ✅ o ❌:

### 1. Dashboard
- [ ] La dashboard è visibile all'avvio?
- [ ] Vedi statistiche (numeri nei box colorati)?
- [ ] Vedi nomi aziende reali nel dropdown? (ABC Costruzioni SRL, ecc.)
- [ ] Il dropdown aziende funziona? (cambio azienda)

### 2. Navigazione Sidebar
Clicca ogni voce e verifica che la sezione si apra:
- [ ] 📊 Dashboard
- [ ] ✅ Attività
- [ ] 📅 Scadenze
- [ ] 💰 Spese
- [ ] 📅 Appuntamenti
- [ ] 📧 Email & Assistente IA
- [ ] 👥 Contatti
- [ ] 📁 Archivi
- [ ] 📋 SOP
- [ ] 📅 Calendario
- [ ] ⚙️ Impostazioni

### 3. Sezione Attività
- [ ] Vedi lista attività?
- [ ] Puoi aggiungere una nuova attività?
- [ ] Puoi completare un'attività (checkbox)?
- [ ] Puoi eliminare un'attività?

### 4. Sezione Email ⭐ (IMPORTANTE)
- [ ] Vedi 3 email nella posta in arrivo?
- [ ] Vedi il pulsante "🤖 Avvia Assistente Email IA"?
- [ ] Cliccando il pulsante si apre un popup di conferma?
- [ ] Dopo conferma, vedi un alert con risultati?
- [ ] Le email sono state categorizzate?
- [ ] I filtri Categoria e Sotto-categoria funzionano?

### 5. Sezione Archivi ⭐ (IMPORTANTE)
- [ ] Vedi le categorie (Contratti, Fiscale, ecc.)?
- [ ] Cliccando una categoria si apre il modale?
- [ ] Vedi il campo "Carica File"?
- [ ] Puoi selezionare un file?
- [ ] Dopo selezione vedi "📎 File caricato: ..."?
- [ ] Il documento si salva?

### 6. Sezione Calendario ⭐ (IMPORTANTE)
- [ ] Vedi il calendario mensile?
- [ ] Vedi gli appuntamenti nel calendario?
- [ ] Vedi il pulsante "📅 Esporta su Google Calendar"?
- [ ] Cliccando si apre un popup?
- [ ] Dopo conferma si scarica un file .ICS?

### 7. Persistenza Dati
- [ ] Ricarica la pagina (F5)
- [ ] I dati rimangono?
- [ ] Le modifiche fatte sono ancora lì?

---

## 🐛 Se Qualcosa Non Funziona

### Problema: Pulsanti non rispondono

1. **Apri Console (F12) → Tab Console**
2. Cerca errori in rosso
3. Copia l'errore completo
4. Verifica se è nella lista "Errori BLOCCANTI"

### Problema: Dashboard vuota

1. Apri Console (F12) → Tab Console
2. Cerca: "✅ Dati di test caricati con successo!"
3. Se NON c'è, cerca "Errore loadData" o "Errore loadTestData"
4. Apri Console → Tab Application → Local Storage → file://
5. Verifica se c'è la chiave `gestione-direzionale-data`

### Problema: "Nessun dato"

1. Console → Application → Local Storage
2. Elimina `gestione-direzionale-data`
3. Ricarica la pagina
4. I dati di test dovrebbero ricaricarsi

### Problema: Email non si categorizzano

1. Verifica di essere nella sezione "📧 Email"
2. Verifica di vedere 3 email in "Posta in Arrivo"
3. Clicca "🤖 Avvia Assistente Email IA"
4. Se non succede nulla, apri Console e cerca errori

---

## 📊 Report dei Test

Dopo aver completato tutti i test, compila questo report:

```
DATA TEST: _______________
BROWSER: Chrome / Firefox / Edge / Safari
METODO: Server Python / Doppio Click

FUNZIONANTE:
✅ / ❌ Dashboard visibile
✅ / ❌ Navigazione sidebar
✅ / ❌ Attività funzionanti
✅ / ❌ Email + Assistente IA
✅ / ❌ Upload file archivi
✅ / ❌ Export calendario
✅ / ❌ Persistenza dati

ERRORI TROVATI:
[Copia qui eventuali errori dalla Console]

NOTE:
[Aggiungi qui osservazioni]
```

---

## 🔧 Reset Completo Sistema

Se vuoi ricominciare da zero:

1. Apri Console (F12)
2. Vai su "Application" (o "Applicazione")
3. Sidebar sinistra → Local Storage → file:// (o http://localhost:8000)
4. Click destro → Clear
5. Ricarica pagina (F5)

I dati di test si ricaricheranno automaticamente!

---

## ✅ Criteri di Successo

Il sistema è considerato **FUNZIONANTE** se:

1. ✅ Dashboard si apre all'avvio
2. ✅ TUTTI i pulsanti della sidebar aprono le sezioni
3. ✅ Puoi aggiungere/modificare/eliminare dati
4. ✅ Assistente Email IA categorizza le email
5. ✅ Puoi caricare file negli archivi
6. ✅ Puoi esportare il calendario
7. ✅ I dati persistono dopo reload
8. ✅ Console mostra "✅ Inizializzazione completata!"

Se anche **UNO SOLO** di questi punti fallisce, **NON È FUNZIONANTE AL 95%**.

---

## 📞 Prossimi Passi

Dopo il test:

1. Se **TUTTO OK**: Il sistema è pronto! 🎉
2. Se **CI SONO ERRORI**: Segnala gli errori specifici dalla Console

---

**Buon Test! 🧪**
