# Checklist Test gestione-locale-FIXED.html

## ✅ Test Rapido (5 minuti)

### 1. Apertura File
- [ ] Aprire `gestione-locale-FIXED.html` in Chrome/Edge/Firefox
- [ ] Verificare che si apra senza errori nella console (F12)
- [ ] Verificare che il titolo del browser sia "Sistema Gestione Direzionale - Versione Locale"

### 2. Interfaccia Principale
- [ ] Nella sidebar deve apparire il banner "💾 Versione Locale" (viola/blu)
- [ ] Verificare che NON ci sia il pulsante di ricerca nella topbar
- [ ] Verificare che NON ci sia il FAB "+" in basso a destra
- [ ] Verificare che la sidebar mostri tutte le sezioni (Dashboard, Email, Attività, ecc.)

### 3. Test SOP (CRITICO)
- [ ] Cliccare su "Procedure (SOP)" nella sidebar
- [ ] Verificare che ci siano 2 tab: "💼 SOP Aziendali" e "🏠 SOP Personali/Casa"
- [ ] Nel tab "SOP Aziendali" devono esserci SOP numerati da 1 a 18
- [ ] Nel tab "SOP Personali/Casa" devono esserci SOP numerati da 19 a 22
- [ ] Verificare che NON esistano SOP 23, 24, 25

#### Ordine SOP Aziendali (1-18):
```
1. Gestione Email Direzionali
2. Gestione Documentazione Fornitori/Clienti
3. Standardizzazione Richieste Interne
4. Flusso di Approvazione Documenti
5. Archiviazione Digitale
6. Preparazione Meeting Direzionali
7. Follow-up Automatico Scadenze
8. Protocollo Comunicazione tra Aziende
9. Protocollo Contatti con Consulenti
10. Preparazione Report Settimanale al Management
11. Prenotazione Viaggi e Trasferte
12. Protocollazione e Archiviazione Documenti
13. Gestione Ciclo Ordini Fornitori
14. Rinnovo Licenze e Certificazioni Aziendali
15. Gestione Pagamenti e Bonifici
16. Controllo Scadenze Fiscali Mensili
17. Negoziazione e Rinnovo Contratti
18. Onboarding Nuovo Dipendente
```

#### Ordine SOP Personali (19-22):
```
19. Gestione Sistemi Allarme Casa
20. Gestione Utenze Domestiche
21. Manutenzione Ordinaria Casa
22. Gestione Emergenze Domestiche
```

### 4. Test Funzionalità Base
- [ ] Aggiungere una nuova attività (sezione "Attività")
- [ ] Aggiungere una nuova scadenza (sezione "Scadenze")
- [ ] Aggiungere un nuovo contatto (sezione "Contatti")
- [ ] Verificare che i dati siano salvati (ricaricare la pagina e verificare che siano ancora presenti)

### 5. Test Pulsanti Rimossi
- [ ] Verificare che cliccando dove c'era la ricerca appaia un alert: "Ricerca globale non disponibile nella versione locale"
- [ ] Verificare che NON sia possibile aprire modal di "Azioni Rapide"

---

## ✅ Test Completo (15 minuti)

### 1. Dashboard
- [ ] Visualizzare statistiche (attività urgenti, scadenze, ecc.)
- [ ] Card "Spese del Mese" deve mostrare € 0.00 inizialmente

### 2. Gestione Attività
- [ ] Aggiungere attività con priorità A+, A, B, C
- [ ] Verificare che appaiano nella dashboard
- [ ] Marcare un'attività come completata
- [ ] Eliminare un'attività

### 3. Gestione Scadenze
- [ ] Aggiungere scadenza fiscale
- [ ] Aggiungere scadenza HR
- [ ] Verificare che appaiano nella tabella
- [ ] Verificare che appaiano nel calendario

### 4. Gestione Spese
- [ ] Aggiungere spesa di test (es: Taxi, €25.00)
- [ ] Verificare che appaia nella tabella
- [ ] Verificare che il totale si aggiorni
- [ ] Eliminare la spesa

### 5. Calendario
- [ ] Navigare tra i mesi (◀ ▶)
- [ ] Verificare che le attività e scadenze appaiano nel calendario
- [ ] Verificare i colori per priorità (A+ rosso, A arancione, B blu, C grigio)

### 6. Archivi Documenti
- [ ] Aprire una categoria (es: "Contratti")
- [ ] Aggiungere un documento di test
- [ ] Verificare che il contatore si aggiorni
- [ ] Eliminare il documento

### 7. Contatti
- [ ] Aggiungere un contatto di test
- [ ] Modificare il contatto
- [ ] Filtrare per categoria
- [ ] Cercare per nome
- [ ] Esportare CSV (opzionale)
- [ ] Eliminare il contatto

### 8. Email & Assistente IA
- [ ] Aprire sezione "Email & Assistente IA"
- [ ] Verificare statistiche email
- [ ] Comporre nuova email (simulata)
- [ ] Verificare che funzioni l'assistente IA

### 9. Report Direzionale
- [ ] Generare report settimanale
- [ ] Verificare che includa tutte le sezioni

### 10. Impostazioni
- [ ] Verificare sezione "💾 Versione Locale" nelle impostazioni
- [ ] Esportare tutti i dati (JSON)
- [ ] Creare backup manuale
- [ ] Verificare messaggio: "Dati sempre disponibili offline"

### 11. Multi-Azienda
- [ ] Cambiare azienda dal selector (Azienda 1, 2, 3, 4)
- [ ] Verificare che i dati siano separati per azienda
- [ ] Aggiungere attività in Azienda 1
- [ ] Passare ad Azienda 2
- [ ] Verificare che l'attività di Azienda 1 non sia visibile

---

## ⚠️ Test Negativi (Cose che NON devono funzionare)

- [ ] Tentare di aprire la ricerca globale (Ctrl+K) → Deve apparire alert
- [ ] Cercare il pulsante FAB "+" → NON deve esistere
- [ ] Cercare modal "Azioni Rapide" → NON deve esistere
- [ ] Verificare che NON ci siano errori JavaScript nella console (F12)
- [ ] Verificare che i SOP 23, 24, 25 NON esistano

---

## 🔍 Test Console JavaScript (F12)

Aprire Console e verificare:

```javascript
// 1. Verifica numero SOP
sopTemplates.length
// Deve essere: 22

// 2. Verifica SOP business
sopTemplates.filter(s => s.category === 'business').length
// Deve essere: 18

// 3. Verifica SOP personal
sopTemplates.filter(s => s.category === 'personal').length
// Deve essere: 4

// 4. Verifica localStorage
Object.keys(localStorage)
// Deve includere chiavi del sistema

// 5. Verifica azienda corrente
currentCompany
// Deve essere: 1 (di default)
```

---

## 📊 Risultati Attesi

✅ **PASS**: Tutti i test superati
⚠️ **WARNING**: Alcuni test falliti ma non critici
❌ **FAIL**: Test critici falliti

### Test Critici (devono TUTTI passare):
1. File si apre senza errori
2. Banner "Versione Locale" visibile
3. SOP nell'ordine corretto (1-18 business, 19-22 personal)
4. SOP 23, 24, 25 NON presenti
5. FAB e Modal Azioni Rapide NON presenti
6. Dati salvati in localStorage

---

## 📝 Note Test

**Data Test**: _______________
**Browser**: _______________
**Versione Browser**: _______________
**Sistema Operativo**: _______________

**Risultato Complessivo**: ⬜ PASS | ⬜ WARNING | ⬜ FAIL

**Note/Bug trovati**:
_______________________________________
_______________________________________
_______________________________________

---

**Tester**: _______________
**Firma**: _______________
