# Checklist Test Versione Locale

## Test da eseguire dopo aver aperto `gestione-locale.html`

### ✅ Test Base (2 minuti)

#### 1. Apertura File
- [ ] Il file si apre correttamente con doppio click
- [ ] La pagina carica completamente
- [ ] Vedi la sidebar a sinistra con menu
- [ ] Vedi il banner verde "Versione Locale" in sidebar
- [ ] Console browser (F12) non mostra errori critici

#### 2. Dashboard Iniziale
- [ ] Vedi la dashboard con statistiche
- [ ] Vedi le 4 aziende nel selettore
- [ ] Puoi cambiare azienda dal dropdown
- [ ] Le statistiche cambiano per ogni azienda

#### 3. Navigazione
- [ ] Tutti i menu nella sidebar sono cliccabili
- [ ] Le sezioni cambiano correttamente
- [ ] Non ci sono errori JavaScript

### ✅ Test Funzionalità Core (10 minuti)

#### 4. Gestione Attività
- [ ] Vai su "Attività"
- [ ] Crea una nuova attività
- [ ] L'attività appare nella lista
- [ ] Puoi modificare l'attività
- [ ] Puoi completarla (checkbox)
- [ ] Puoi eliminarla

#### 5. Scadenze
- [ ] Vai su "Scadenze"
- [ ] Aggiungi una scadenza
- [ ] La scadenza appare nella lista
- [ ] Puoi segnarla come pagata
- [ ] Vedi le scadenze nel calendario

#### 6. Calendario
- [ ] Vai su "Calendario"
- [ ] Vedi il mese corrente
- [ ] Le attività appaiono sul calendario
- [ ] Puoi navigare tra i mesi
- [ ] Click su un giorno mostra dettagli

#### 7. Email
- [ ] Vai su "Email"
- [ ] Vedi email di esempio (se presenti)
- [ ] Puoi comporre una nuova email
- [ ] Puoi categorizzare email
- [ ] Assistente IA funziona

#### 8. Contatti
- [ ] Vai su "Contatti"
- [ ] Aggiungi un nuovo contatto
- [ ] Il contatto appare nella lista
- [ ] Puoi modificarlo
- [ ] Puoi eliminarlo

### ✅ Test Persistenza Dati (5 minuti)

#### 9. Salvataggio Automatico
- [ ] Crea 3 attività diverse
- [ ] Chiudi il browser completamente
- [ ] Riapri il file `gestione-locale.html`
- [ ] Le 3 attività sono ancora presenti
- [ ] Tutti i dati sono preservati

#### 10. Multi-Azienda
- [ ] Passa a Azienda 2
- [ ] Crea 2 attività
- [ ] Passa a Azienda 1
- [ ] Le attività sono diverse tra aziende
- [ ] I dati non si mischiano

### ✅ Test Backup/Export (5 minuti)

#### 11. Backup JSON
- [ ] Vai in "Impostazioni"
- [ ] Click su "Backup Manuale"
- [ ] Si scarica un file JSON
- [ ] Il file JSON contiene i dati
- [ ] È leggibile come testo

#### 12. Export CSV
- [ ] Vai in "Impostazioni"
- [ ] Click su "Esporta CSV"
- [ ] Si scarica un file CSV
- [ ] Il CSV è apribile in Excel
- [ ] Contiene i dati corretti

#### 13. Importazione Dati
- [ ] Vai in "Impostazioni"
- [ ] Click su "Importa Dati"
- [ ] Seleziona il backup JSON fatto prima
- [ ] Dati importati correttamente
- [ ] Nessun errore

### ✅ Test Funzionalità Avanzate (10 minuti)

#### 14. Spese
- [ ] Vai su "Spese"
- [ ] Aggiungi una spesa
- [ ] Vedi il totale aggiornarsi
- [ ] Puoi filtrare per categoria
- [ ] Export spese funziona

#### 15. Appuntamenti
- [ ] Vai su "Appuntamenti"
- [ ] Aggiungi un appuntamento
- [ ] Appare nel calendario
- [ ] Puoi modificarlo
- [ ] Notifica (se abilitata) funziona

#### 16. Archivi Documenti
- [ ] Vai su "Archivi"
- [ ] Apri una categoria
- [ ] Aggiungi un documento
- [ ] Il documento appare nella lista
- [ ] Link al file funziona

#### 17. Procedure SOP
- [ ] Vai su "Procedure SOP"
- [ ] Apri una procedura
- [ ] Esegui la checklist
- [ ] Segna item come completati
- [ ] Completa l'esecuzione

#### 18. Ricerca Globale
- [ ] Premi CTRL+K
- [ ] Si apre la ricerca globale
- [ ] Digita qualcosa
- [ ] Trova risultati
- [ ] Click risultato porta alla sezione

### ✅ Test Interfaccia (5 minuti)

#### 19. Responsività
- [ ] Rimpicciolisci la finestra browser
- [ ] Layout si adatta
- [ ] Sidebar si minimizza
- [ ] Tutto rimane usabile

#### 20. Browser Diversi
- [ ] Prova su Chrome → Funziona
- [ ] Prova su Firefox → Funziona
- [ ] Prova su Edge → Funziona
- [ ] Prova su Safari (Mac) → Funziona

### ✅ Test Offline (2 minuti)

#### 21. Modalità Offline
- [ ] Disconnetti internet
- [ ] Ricarica la pagina
- [ ] Tutto funziona normalmente
- [ ] Dati accessibili
- [ ] Nessun errore di rete

### ✅ Test Portabilità (5 minuti)

#### 22. Copia su USB
- [ ] Copia file su chiavetta USB
- [ ] Apri da USB
- [ ] Funziona correttamente
- [ ] Puoi creare dati
- [ ] Dati salvati su USB

#### 23. Email a Te Stesso
- [ ] Allega file a email
- [ ] Invia a te stesso
- [ ] Scarica allegato
- [ ] Apri file scaricato
- [ ] Funziona correttamente

## Risultati Test

### ✅ Tutti i test passati
**Congratulazioni!** Il sistema è completamente funzionante.

### ⚠️ Alcuni test falliti
Controlla:
1. Browser aggiornato? (consigliato: ultima versione)
2. JavaScript abilitato?
3. Permessi localStorage attivi?
4. Console browser (F12) per errori specifici

### ❌ Molti test falliti
Possibili cause:
1. File corrotto → Scarica nuovamente
2. Browser non supportato → Usa Chrome/Firefox/Edge
3. Estensioni browser che bloccano → Disabilita temporaneamente
4. Antivirus che blocca → Aggiungi eccezione

## Punteggio

- **23/23 ✅** = Perfetto! Sistema al 100%
- **20-22 ✅** = Ottimo! Piccole imperfezioni
- **15-19 ⚠️** = Buono, alcuni problemi da risolvere
- **< 15 ❌** = Problemi significativi, verifica setup

## Note

**Data test:** _____________

**Browser usato:** _____________

**Sistema operativo:** _____________

**Problemi rilevati:**
-
-
-

**Note aggiuntive:**
-
-
-

---

## Test Superati? Prossimi Passi

1. ✅ Personalizza nomi aziende
2. ✅ Importa dati reali (se hai)
3. ✅ Configura notifiche
4. ✅ Crea backup iniziale
5. ✅ Imposta routine backup settimanale
6. ✅ Inizia a usare il sistema quotidianamente!

**Buon lavoro! 🚀**
