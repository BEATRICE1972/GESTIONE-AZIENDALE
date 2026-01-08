# 🚀 SETUP SUPABASE - Guida Automatica

## Questo file ti guida nella configurazione del backend database

---

## ⏱️ TEMPO RICHIESTO: 5 minuti

---

## STEP 1: Crea Account Supabase (1 minuto)

1. Vai su: **https://supabase.com**
2. Click su **"Start your project"**
3. Login con GitHub (stesso account usato per Vercel)
4. Autorizza Supabase

---

## STEP 2: Crea Nuovo Progetto (2 minuti)

1. Click su **"New Project"**

2. Compila il form:
   ```
   Name: gestione-direzionale
   Database Password: [Scegli password sicura - SALVALA!]
   Region: Europe (Frankfurt) o Europe (Ireland)
   Pricing Plan: Free (gratuito)
   ```

3. Click **"Create new project"**

4. **ATTENDI 2-3 MINUTI** - Supabase sta creando il database

---

## STEP 3: Configura Database (1 minuto)

Una volta che il progetto è pronto:

1. **Nella sidebar sinistra, click su "SQL Editor"** (icona </>)

2. Click sul pulsante **"+ New query"**

3. **Copia TUTTO il contenuto** del file `supabase-setup.sql`

4. **Incolla** nell'editor SQL

5. Click sul pulsante **"Run"** (o premi F5)

6. Attendi il completamento (vedrai "Success" in verde)

7. ✅ **Database configurato!** Tutte le tabelle sono state create.

---

## STEP 4: Ottieni Credenziali API (1 minuto)

1. **Nella sidebar sinistra, click su "Settings"** (icona ingranaggio in basso)

2. Click su **"API"** nel menu Settings

3. Troverai due informazioni importanti:

   **A. Project URL**
   ```
   https://tuoprogetto.supabase.co
   ```

   **B. Project API Key (anon public)**
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

4. **COPIA QUESTE DUE INFORMAZIONI** - ti serviranno tra poco!

---

## STEP 5: Configura il Progetto Locale

Ora torna al tuo progetto e configura le credenziali:

1. Apri il file **`supabase-config.js`** (lo creo io automaticamente)

2. Sostituisci:
   - `YOUR_SUPABASE_URL` con il tuo Project URL
   - `YOUR_SUPABASE_ANON_KEY` con la tua API Key

3. Salva il file

---

## STEP 6: Test (Fatto automaticamente)

Quando apri l'app:
1. Vedrai una schermata di login
2. Click su "Registrati"
3. Inserisci email e password
4. ✅ Account creato!
5. I tuoi dati sono ora nel database cloud!

---

## ✅ COMPLETATO!

Ora hai:
- ✅ Database PostgreSQL cloud (gratuito)
- ✅ Autenticazione utenti
- ✅ Sincronizzazione automatica tra dispositivi
- ✅ Backup automatico
- ✅ Accesso sicuro ai dati

---

## 🔒 SICUREZZA

- Ogni utente vede solo i propri dati (Row Level Security)
- Password criptate
- Connessione HTTPS
- Token JWT per autenticazione

---

## 💾 PIANO GRATUITO SUPABASE

Cosa include GRATIS:
- ✅ 500 MB database storage
- ✅ 1 GB file storage
- ✅ 2 GB bandwidth/mese
- ✅ 50,000 utenti attivi/mese
- ✅ Row Level Security
- ✅ Backup automatici

**Più che sufficiente per il tuo uso!**

---

## 🆘 PROBLEMI?

### "Error: relation already exists"
**Soluzione**: Hai già eseguito lo script. Tutto ok, ignora l'errore.

### "Invalid API credentials"
**Soluzione**:
1. Verifica di aver copiato correttamente URL e API Key
2. Assicurati di usare la "anon public" key, NON la "service role" key

### "Failed to fetch"
**Soluzione**:
1. Verifica connessione internet
2. Controlla che il progetto Supabase sia attivo (Status: Active)

---

## 📊 MIGRAZIONE DATI ESISTENTI

Se hai già dati in localStorage:
1. **NON PREOCCUPARTI** - Il sistema li manterrà
2. Al primo login, vedrai un pulsante "Migra dati da locale a cloud"
3. Click sul pulsante
4. ✅ Dati migrati automaticamente!

---

## 🎉 SEI PRONTO!

Ora il tuo sistema è completamente cloud-based e sincronizzato!

**Cosa cambia per te:**
- Accedi da qualsiasi dispositivo con email/password
- Dati sempre sincronizzati
- Backup automatico
- Nessuna perdita dati anche se cambi browser

**Buon lavoro!** 💼✨
