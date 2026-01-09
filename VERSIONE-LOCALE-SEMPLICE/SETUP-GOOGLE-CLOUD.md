# 🔐 SETUP GOOGLE CLOUD CONSOLE - PASSO PER PASSO

## ⏰ TEMPO NECESSARIO: 15 minuti

---

## 📋 STEP 1: Accedi a Google Cloud Console

### 1. Apri il browser e vai su:
```
https://console.cloud.google.com
```

### 2. Fai login con il tuo account Gmail
- Usa lo stesso account Gmail da cui vuoi leggere le email
- Se hai più account, scegli quello principale

---

## 📋 STEP 2: Crea Nuovo Progetto

### 1. In alto a sinistra, click sul menu dropdown progetto
- Dovresti vedere "Seleziona un progetto"

### 2. Click su "NUOVO PROGETTO" (in alto a destra nella finestra)

### 3. Compila il form:
```
Nome progetto: Sistema Gestione Email
ID progetto: (lascia quello generato automaticamente)
Località: Nessuna organizzazione
```

### 4. Click su "CREA"
- Aspetta 10-20 secondi che il progetto venga creato

### 5. Verifica che il progetto sia selezionato
- In alto dovresti vedere "Sistema Gestione Email"

---

## 📋 STEP 3: Abilita Gmail API

### 1. Nel menu laterale sinistro, vai su:
```
API e servizi → Libreria
```
(oppure cerca "API Library" nella barra di ricerca in alto)

### 2. Nella barra di ricerca scrivi:
```
Gmail API
```

### 3. Click su "Gmail API" (primo risultato)

### 4. Click sul pulsante blu "ABILITA"
- Aspetta 5-10 secondi

### 5. Verifica abilitazione
- Dovresti vedere "Gmail API abilitata" ✅

---

## 📋 STEP 4: Configura Schermata Consenso OAuth

### 1. Nel menu laterale, vai su:
```
API e servizi → Schermata consenso OAuth
```

### 2. Seleziona tipo utente:
```
☑️ Esterno (External)
```

### 3. Click "CREA"

### 4. Compila il form (Pagina 1 - Informazioni app):
```
Nome applicazione: Sistema Gestione Email
Email di supporto utente: [il tuo email]
Logo applicazione: (lascia vuoto)
Domini app: (lascia vuoto)
Domini autorizzati: (lascia vuoto)
Email sviluppatore: [il tuo email]
```

### 5. Click "SALVA E CONTINUA"

### 6. Ambiti (Scopes) - Pagina 2:
```
Click "AGGIUNGI O RIMUOVI AMBITI"

Nella barra di ricerca cerca:
Gmail API

Seleziona questi ambiti:
☑️ https://www.googleapis.com/auth/gmail.readonly
☑️ https://www.googleapis.com/auth/gmail.modify

Click "AGGIORNA"
Click "SALVA E CONTINUA"
```

### 7. Utenti di test - Pagina 3:
```
Click "AGGIUNGI UTENTI"
Inserisci il tuo indirizzo email Gmail
Click "AGGIUNGI"
Click "SALVA E CONTINUA"
```

### 8. Riepilogo - Pagina 4:
```
Verifica che tutto sia corretto
Click "TORNA ALLA DASHBOARD"
```

---

## 📋 STEP 5: Crea Credenziali OAuth 2.0

### 1. Nel menu laterale, vai su:
```
API e servizi → Credenziali
```

### 2. In alto, click su:
```
+ CREA CREDENZIALI → ID client OAuth
```

### 3. Compila il form:
```
Tipo di applicazione: Applicazione web

Nome: Sistema Gestione Email Client

Origini JavaScript autorizzate:
  Click "+ AGGIUNGI URI"
  Inserisci: http://localhost
  Click "+ AGGIUNGI URI"
  Inserisci: http://127.0.0.1

URI di reindirizzamento autorizzati:
  Click "+ AGGIUNGI URI"
  Inserisci: http://localhost
  Click "+ AGGIUNGI URI"
  Inserisci: http://127.0.0.1
```

### 4. Click "CREA"

### 5. POPUP "Client OAuth creato"
```
📋 Copia queste informazioni SUBITO:

Client ID:
[lungo codice tipo: 123456789-abcdefg.apps.googleusercontent.com]

Client Secret:
[codice tipo: GOCSPX-AbCdEfGhIjKlMnOp]

⚠️ IMPORTANTE: Copia ENTRAMBI in un file di testo!
```

### 6. Click "OK"

---

## 📋 STEP 6: Verifica Finale

### Controlla di avere:

```
✅ Progetto "Sistema Gestione Email" creato
✅ Gmail API abilitata
✅ Schermata consenso OAuth configurata
✅ Credenziali OAuth create
✅ Client ID copiato
✅ Client Secret copiato
```

---

## 📝 ADESSO INCOLLA QUI LE CREDENZIALI:

### Copia e incolla qui nel chat:

```
Client ID: [INCOLLA QUI]

Client Secret: [INCOLLA QUI]
```

---

## ❓ PROBLEMI COMUNI:

### "Non trovo il menu API e servizi"
→ Click sul menu hamburger ☰ in alto a sinistra

### "Gmail API non appare"
→ Verifica di aver selezionato il progetto giusto (in alto)

### "Errore durante creazione credenziali"
→ Verifica di aver configurato la schermata consenso OAuth prima

### "Il popup delle credenziali si è chiuso"
→ Vai su "API e servizi" → "Credenziali" → Click sul nome delle credenziali create → Copia Client ID e Secret da lì

---

## ✅ PROSSIMO STEP:

Una volta che mi dai:
- Client ID
- Client Secret

Io:
1. Li inserisco nel sistema
2. Implemento il codice Gmail API
3. Creo l'interfaccia di sync
4. Ti avviso quando è pronto per testare!

---

**INIZIA ORA! Mentre configuri, io scrivo il codice! 🚀**

**Tempo previsto:** 15 minuti
