# 🔒 GUIDA USO LOCALE SICURO

## ✅ SOLUZIONE AL 100% PRIVATA

---

## 🚀 AVVIO RAPIDO

### Metodo Semplice (CONSIGLIATO):

1. **Doppio click** su: `🔒 AVVIA-LOCALE-SICURO.bat`
2. **Attendi** 3 secondi
3. Il browser si apre automaticamente
4. ✅ **Inizia a lavorare!**

### Come Chiudere:

1. Nella finestra nera (terminale) premi **Ctrl+C**
2. Conferma con **S** (Sì)
3. Chiudi il browser

---

## 🔐 LIVELLO DI SICUREZZA

### Cosa Significa "Locale"?

```
┌─────────────────────────────────────┐
│  Il Tuo PC                          │
│  ├─ Server locale (porta 8000)      │
│  ├─ Browser (localhost:8000)        │
│  └─ Dati (localStorage)             │
│                                     │
│  ❌ NO connessione internet         │
│  ❌ NO accesso esterno possibile    │
│  ❌ NO dati sul cloud                │
│  ✅ 100% PRIVATO                     │
└─────────────────────────────────────┘
```

### Sicurezza Garantita:

✅ **Nessuno può accedere** (neanche dalla tua rete locale)
✅ **Dati solo sul tuo PC** (file system locale)
✅ **Nessuna traccia online** (zero log esterni)
✅ **Privacy assoluta** (GDPR compliant al 100%)

---

## 📋 COSA SUCCEDE QUANDO AVVII

1. **Server locale si avvia** sulla porta 8000
2. **Browser si apre** automaticamente
3. **App si carica** da file locali
4. **Dati salvati** in localStorage del browser
5. **Zero comunicazione** esterna

### URL Mostrato nel Browser:
```
http://localhost:8000
```

- `localhost` = solo questo PC
- `8000` = porta locale (non accessibile dall'esterno)

---

## 🆚 CONFRONTO: LOCALE vs WEB

| Aspetto | 🔒 Locale | 🌐 Web (Vercel) |
|---------|----------|----------------|
| **Accesso Esterno** | ❌ Impossibile | ✅ Possibile |
| **Privacy** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Multi-dispositivo** | ❌ No | ✅ Sì |
| **Backup Cloud** | ❌ No | ✅ Sì (con Supabase) |
| **Sicurezza Dati** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Velocità** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Costi** | €0 | €0 |

---

## ⚠️ IMPORTANTE: BACKUP

### I Dati Sono Solo Su Questo PC!

Fai backup regolari:

1. **Esporta Dati**:
   - Apri il sistema
   - Vai su **Impostazioni**
   - Click **"📥 Esporta Tutti i Dati (JSON)"**

2. **Salva il File**:
   - Scegli una cartella sicura
   - Nome esempio: `backup-gestione-2026-01-04.json`

3. **Backup su Cloud** (opzionale):
   - Carica su Google Drive
   - Oppure su OneDrive
   - Oppure su Dropbox

### Frequenza Consigliata:
- **Critico**: Esporta ogni sera
- **Normale**: Esporta 1 volta a settimana
- **Leggero**: Esporta 1 volta al mese

---

## 🔧 RISOLUZIONE PROBLEMI

### "Errore: porta 8000 già in uso"

**Causa**: Hai già un server attivo sulla porta 8000

**Soluzione**:
1. Chiudi tutti i terminali aperti
2. Riavvia lo script
3. Se persiste, riavvia il PC

### "Il browser non si apre"

**Soluzione**:
1. Apri manualmente il browser
2. Vai su: `http://localhost:8000`

### "Pagina bianca o errore"

**Soluzione**:
1. Verifica che il server sia attivo (finestra nera aperta)
2. Premi F5 nel browser (ricarica)
3. Controlla console browser (F12) per errori

### "Dati non si salvano"

**Causa**: localStorage disabilitato nel browser

**Soluzione**:
1. Impostazioni browser → Privacy
2. Abilita "Archiviazione locale"
3. Riavvia il browser

---

## 💡 SUGGERIMENTI D'USO

### Uso Quotidiano:

**Mattina**:
1. Doppio click `🔒 AVVIA-LOCALE-SICURO.bat`
2. Lavora tutto il giorno

**Sera**:
1. Esporta backup
2. Ctrl+C nel terminale
3. Chiudi browser

### Multi-Sessione:

Puoi aprire **più finestre** del browser:
- Tutte puntano a `localhost:8000`
- Condividono gli stessi dati
- Modifica in una → appare in tutte (dopo F5)

### Accesso da Rete Locale:

**NO**: Non è possibile (e non dovresti farlo)

Se serve accesso da altri PC:
→ Usa la versione Web con Supabase + Autenticazione

---

## 🎯 QUANDO USARE LOCALE

### ✅ USA LOCALE SE:
- Lavori sempre dallo stesso PC
- Massima privacy richiesta
- Dati ultra-sensibili
- Non serve sincronizzazione
- Preferisci controllo totale

### ❌ USA WEB + CLOUD SE:
- Lavori da più dispositivi
- Vuoi accesso da smartphone
- Serve backup automatico cloud
- Vuoi sincronizzazione real-time
- Collabori con altri

---

## 🔄 PASSAGGIO DA LOCALE A CLOUD

Se decidi di passare a cloud dopo:

1. **Esporta i dati** dal locale:
   - Impostazioni → Esporta Dati JSON

2. **Configura Supabase**:
   - Esegui `AUTO-SETUP.bat`
   - Segui le istruzioni

3. **Importa i dati** nel cloud:
   - Apri versione web
   - Login
   - Impostazioni → Migra Dati al Cloud
   - Oppure: Importa Dati → seleziona JSON esportato

4. ✅ **Fatto!** Dati ora sincronizzati

---

## 📞 SUPPORTO

### File Utili:
- Questo file: `🔒 GUIDA-USO-LOCALE.md`
- Script avvio: `🔒 AVVIA-LOCALE-SICURO.bat`
- Guida completa: `GUIDA-COMPLETA-CLOUD.md`

### Debug:
- Console browser: F12 → Console
- Verifica server: finestra terminale deve essere aperta
- Porta occupata: Task Manager → chiudi Python

---

## 🎉 VANTAGGI USO LOCALE

### Privacy
- ⭐⭐⭐⭐⭐ **MASSIMA** privacy
- Zero tracce online
- GDPR compliant al 100%
- Controllo totale sui dati

### Velocità
- ⚡ Caricamento istantaneo
- Nessuna latenza di rete
- Funziona offline

### Costi
- 💰 **€0** per sempre
- Nessun abbonamento
- Nessun costo server

### Semplicità
- Un click per avviare
- Nessuna configurazione
- Funziona subito

---

## ✅ CHECKLIST PRIMO USO

- [ ] Doppio click su `🔒 AVVIA-LOCALE-SICURO.bat`
- [ ] Verifica apertura browser
- [ ] Importa dati di test (`dati-test-aziende.json`)
- [ ] Esplora le funzionalità
- [ ] Personalizza nomi aziende
- [ ] **IMPORTANTE**: Esporta primo backup
- [ ] Salva backup su cloud personale (Google Drive)

---

**🔒 Buon lavoro in TOTALE SICUREZZA e PRIVACY!** ✨

---

**Nota**: Questa modalità è perfetta per dati aziendali sensibili che non devono MAI lasciare il tuo PC.
