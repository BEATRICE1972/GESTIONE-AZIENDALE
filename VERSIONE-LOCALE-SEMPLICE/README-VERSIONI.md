# Sistema Gestione Direzionale - Guida alle Versioni

## File Disponibili

### 1. `index.html` - Versione Cloud (Originale)
**Caratteristiche:**
- ✅ Sincronizzazione cloud con Supabase
- ✅ Backup automatico
- ✅ Accesso multi-dispositivo
- ✅ Autenticazione utente
- ⚠️ Richiede configurazione Supabase
- ⚠️ Richiede file esterni (supabase-config.js, auth-ui.js)

**Usa se:**
- Vuoi accedere da più dispositivi
- Vuoi backup automatico nel cloud
- Hai configurato Supabase
- Lavori in team

**File necessari:**
- `index.html`
- `supabase-config.js`
- `supabase-api.js`
- `auth-ui.js`

---

### 2. `gestione-locale.html` - Versione Locale Standalone ⭐
**Caratteristiche:**
- ✅ File SINGOLO completamente autocontenuto
- ✅ Funziona OFFLINE (no internet)
- ✅ Nessuna dipendenza esterna
- ✅ Avvio immediato (doppio click)
- ✅ Portabile (copia su USB e usa ovunque)
- ✅ Privacy totale (dati solo sul tuo dispositivo)
- ✅ TUTTE le funzionalità della versione cloud
- ⚠️ Dati solo nel browser (serve backup manuale)
- ⚠️ No sync automatica tra dispositivi

**Usa se:**
- Vuoi massima semplicità
- Non vuoi configurare nulla
- Uso personale su singolo PC
- Vuoi portabilità assoluta
- Privacy è prioritaria
- Non ti serve cloud/sync

**File necessari:**
- Solo `gestione-locale.html` (basta questo!)

---

## Confronto Rapido

| Caratteristica | index.html (Cloud) | gestione-locale.html |
|----------------|-------------------|---------------------|
| **Setup** | ⚠️ Complesso (Supabase) | ✅ Zero (doppio click) |
| **File esterni** | ⚠️ Sì (3 file JS) | ✅ No (tutto inline) |
| **Internet** | ⚠️ Necessario | ✅ Opzionale |
| **Storage** | ✅ Cloud + localStorage | 💾 localStorage |
| **Backup** | ✅ Automatico | ⚠️ Manuale |
| **Multi-dispositivo** | ✅ Sync automatica | ⚠️ Backup/restore |
| **Privacy** | ⚠️ Dati su server | ✅ Dati solo locali |
| **Portabilità** | ❌ No | ✅ Sì (USB/email) |
| **Team** | ✅ Sì | ❌ No |
| **Funzionalità** | ✅ Complete | ✅ Complete |

---

## Quale Scegliere?

### Scegli `gestione-locale.html` se:
- 👤 Uso personale
- 💻 Lavori su 1 PC/laptop
- 🔒 Vuoi massima privacy
- 🚀 Vuoi iniziare SUBITO senza setup
- 📁 Ti va bene fare backup manuali
- 💾 Vuoi copiare su USB e portare ovunque

### Scegli `index.html` se:
- 👥 Lavori in team
- 🌐 Accedi da più dispositivi
- ☁️ Vuoi backup automatico cloud
- 🔄 Vuoi sync real-time
- 🔐 Ti serve autenticazione utenti
- 💼 Uso aziendale professionale

---

## Come Iniziare

### Con gestione-locale.html (RACCOMANDATO PER PRINCIPIANTI)
```bash
1. Trova il file gestione-locale.html
2. Doppio click
3. Inizia a usarlo!
```

### Con index.html (Cloud)
```bash
1. Leggi SETUP-SUPABASE.md
2. Configura account Supabase
3. Crea file supabase-config.js
4. Apri index.html
5. Login e inizia
```

---

## Migrazione tra Versioni

### Da locale a cloud:
1. Versione locale: Impostazioni → Backup Manuale (JSON)
2. Scarica file JSON
3. Configura versione cloud (index.html)
4. Login su index.html
5. Importa JSON dalla sezione migrazione

### Da cloud a locale:
1. Versione cloud: Esporta dati (JSON)
2. Apri gestione-locale.html
3. Impostazioni → Importa Dati
4. Seleziona JSON esportato
5. Dati importati!

---

## Domande Frequenti

**Q: Qual è la differenza principale?**
A: `gestione-locale.html` è standalone e offline. `index.html` usa cloud e sync.

**Q: Le funzionalità sono diverse?**
A: No! Entrambe hanno TUTTE le stesse funzionalità (task, email, calendario, ecc.)

**Q: Quale è più veloce?**
A: `gestione-locale.html` è istantaneo (no server latency).

**Q: Posso usare entrambe?**
A: Sì, basta fare export/import dei dati tra le due.

**Q: Quale è più sicura?**
A: `gestione-locale.html` per privacy (dati solo locali). `index.html` per sicurezza backup.

**Q: Posso modificarle?**
A: Sì, entrambe sono open source e modificabili.

---

## File Aggiuntivi

- `GUIDA-VERSIONE-LOCALE.md` - Guida dettagliata versione locale
- `SETUP-SUPABASE.md` - Setup versione cloud
- `GUIDA-RAPIDA.md` - Guida rapida all'uso
- `TEST-LOCALE-CHECKLIST.md` - Checklist test

---

**Raccomandazione:** Inizia con `gestione-locale.html` per semplicità. Passa a `index.html` solo se hai bisogno di cloud/sync.

**Buon lavoro! 🚀**
