#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script per applicare tutte le modifiche alla versione locale
"""

import re
import sys

# Set UTF-8 encoding for Windows console
if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

# Leggi il file sorgente
with open('gestione-locale-FIXED.html', 'r', encoding='utf-8') as f:
    content = f.read()

print("[1/14] Applicazione modifiche...")

# MODIFICA 1: Cambia titolo
print("[2/14] Modifica titolo...")
content = content.replace(
    '<title>Sistema di Gestione Direzionale Multi-Azienda</title>',
    '<title>Sistema Gestione Direzionale - Versione Locale</title>'
)

# MODIFICA 2-4: Rimuovi tag script Supabase
print("[3/14] Rimozione script Supabase...")
# Rimuovi CDN Supabase
content = re.sub(
    r'<!-- SUPABASE CDN.*?</script>\s*',
    '',
    content,
    flags=re.DOTALL
)

# Rimuovi SUPABASE INTEGRATION
content = re.sub(
    r'<!-- SUPABASE INTEGRATION.*?(?=</head>)',
    '',
    content,
    flags=re.DOTALL
)

# MODIFICA 5: Aggiungi banner "Versione Locale" nella sidebar
print("[4/14] Aggiunta banner Versione Locale...")
sidebar_header_old = '''        <div class="sidebar-header">
            <h2>
                <span class="icon">📊</span>
                <span>Gestione Direzionale</span>
            </h2>'''

sidebar_header_new = '''        <div class="sidebar-header">
            <h2>
                <span class="icon">📊</span>
                <span>Gestione Direzionale</span>
            </h2>
            <div style="padding: 8px 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); margin: 10px 15px 0 15px; border-radius: 6px; text-align: center; font-size: 0.8em; color: white; font-weight: 600; border: 1px solid rgba(255,255,255,0.2);">
                💾 Versione Locale
            </div>'''

content = content.replace(sidebar_header_old, sidebar_header_new)

# MODIFICA 6-8: Rimuovi pulsanti search topbar
print("[5/14] Rimozione pulsanti ricerca topbar...")
# Rimuovi search button nella topbar
content = re.sub(
    r'<div style="display: flex; align-items: center; gap: 20px;">\s*<!-- Search Global -->.*?</div>\s*<!-- Company Switcher',
    '<div style="display: flex; align-items: center; gap: 20px;">\n                <!-- Company Switcher',
    content,
    flags=re.DOTALL
)

# Rimuovi pulsante cerca sticky (search-bar-sticky)
print("[6/14] Rimozione pulsante cerca sticky...")
content = re.sub(
    r'<!-- RICERCA GLOBALE -->.*?<div class="search-bar-sticky">.*?</div>\s*<div id="global-search"',
    '<div id="global-search"',
    content,
    flags=re.DOTALL
)

# MODIFICA 9-10: Rimuovi FAB e modal azioni rapide
print("[7/14] Rimozione FAB...")
# Rimuovi FAB
content = re.sub(
    r'<!-- FAB \(Floating Action Button\) per azioni rapide -->.*?<div class="fab".*?</div>',
    '',
    content,
    flags=re.DOTALL,
    count=1
)

print("[8/14] Rimozione modal azioni rapide...")
# Rimuovi Modal Azioni Rapide
content = re.sub(
    r'<!-- Modal Azioni Rapide -->.*?<div class="modal" id="quick-actions-modal">.*?</div>\s*</div>\s*</div>',
    '',
    content,
    flags=re.DOTALL,
    count=1
)

# MODIFICA 11: Rimuovi modal ricerca globale
print("[9/14] Rimozione modal ricerca globale...")
content = re.sub(
    r'<!-- Modal Ricerca Globale -->.*?<div class="modal" id="global-search-modal">.*?</div>\s*</div>\s*</div>',
    '',
    content,
    flags=re.DOTALL,
    count=1
)

# Rimuovi container global-search
content = re.sub(
    r'<div id="global-search" class="global-search-container">.*?</div>\s*</div>\s*</div>',
    '',
    content,
    flags=re.DOTALL,
    count=1
)

# MODIFICA 12: Rimuovi funzioni JS non funzionanti
print("[10/14] Rimozione funzioni JS obsolete...")
functions_to_remove = [
    'toggleGlobalSearch',
    'closeGlobalSearch',
    'performGlobalSearch',
    'showQuickActions',
    'closeQuickActions'
]

for func in functions_to_remove:
    # Rimuovi definizione funzione (pattern semplificato)
    pattern = rf'function {func}\([^)]*\)\s*\{{(?:[^{{}}]|\{{[^{{}}]*\}})*\}}'
    content = re.sub(pattern, '', content, flags=re.DOTALL)

# Rimuovi event listener Ctrl+K
content = re.sub(
    r'// Ctrl\+K per ricerca globale.*?document\.addEventListener.*?Ctrl.*?\}\);',
    '',
    content,
    flags=re.DOTALL
)

# MODIFICA 13: Modifica funzione init() per rimuovere loadDataFromCloud
print("[11/14] Modifica funzione init()...")
content = re.sub(
    r'// Se non c\'è Supabase o non richiede auth, vai in modalità localStorage\s*if \(!hasSupabaseAPI \|\| !hasSupabaseConfig \|\| !requireAuth\) \{\s*console\.log\(\'💾 Avvio in modalità localStorage\.\.\.\'\);\s*initializeAppLocal\(\);\s*return;\s*\}',
    '''// Versione locale: sempre localStorage
                console.log('💾 Avvio in modalità localStorage (versione locale)...');
                initializeAppLocal();
                return;

                // Il resto del codice Supabase è disabilitato nella versione locale''',
    content,
    flags=re.DOTALL
)

# MODIFICA 14-CRITICA: Riorganizza SOP
print("[12/14] Riorganizzazione SOP (rimozione 23-25)...")

# Trova e rimuovi i SOP 23, 24, 25 che vanno eliminati
# Pattern per trovare SOP 23
content = re.sub(
    r',\s*\{\s*title:\s*"23\.\s*Gestione Sinistri Assicurativi".*?\}(?=\s*,\s*\{|\s*\];)',
    '',
    content,
    flags=re.DOTALL
)

# Pattern per trovare SOP 24
content = re.sub(
    r',\s*\{\s*title:\s*"24\.\s*Richiesta e Confronto Preventivi".*?\}(?=\s*,\s*\{|\s*\];)',
    '',
    content,
    flags=re.DOTALL
)

# Pattern per trovare SOP 25
content = re.sub(
    r',\s*\{\s*title:\s*"25\.\s*Gestione Reclami e Contestazioni Clienti".*?\}(?=\s*\];)',
    '',
    content,
    flags=re.DOTALL
)

print("[13/14] Rinumerazione SOP...")

# Ora rinumera i SOP 12-15 (personal) in 19-22
# E rinumera 16-22 (business) in 12-18

# STEP 1: Rinumera temporaneamente i personal (12-15) con numeri placeholder (1012-1015)
content = re.sub(r'"12\. Gestione Sistemi Allarme Casa"', '"1012. Gestione Sistemi Allarme Casa"', content)
content = re.sub(r'"13\. Gestione Utenze Domestiche"', '"1013. Gestione Utenze Domestiche"', content)
content = re.sub(r'"14\. Manutenzione Ordinaria Casa"', '"1014. Manutenzione Ordinaria Casa"', content)
content = re.sub(r'"15\. Gestione Emergenze Domestiche"', '"1015. Gestione Emergenze Domestiche"', content)

# STEP 2: Rinumera business (16-22) in 12-18
content = re.sub(r'"16\. Protocollazione e Archiviazione Documenti"', '"12. Protocollazione e Archiviazione Documenti"', content)
content = re.sub(r'"17\. Gestione Ciclo Ordini Fornitori"', '"13. Gestione Ciclo Ordini Fornitori"', content)
content = re.sub(r'"18\. Rinnovo Licenze e Certificazioni Aziendali"', '"14. Rinnovo Licenze e Certificazioni Aziendali"', content)
content = re.sub(r'"19\. Gestione Pagamenti e Bonifici"', '"15. Gestione Pagamenti e Bonifici"', content)
content = re.sub(r'"20\. Controllo Scadenze Fiscali Mensili"', '"16. Controllo Scadenze Fiscali Mensili"', content)
content = re.sub(r'"21\. Negoziazione e Rinnovo Contratti"', '"17. Negoziazione e Rinnovo Contratti"', content)
content = re.sub(r'"22\. Onboarding Nuovo Dipendente"', '"18. Onboarding Nuovo Dipendente"', content)

# STEP 3: Rinumera i personal placeholder (1012-1015) in 19-22
content = re.sub(r'"1012\. Gestione Sistemi Allarme Casa"', '"19. Gestione Sistemi Allarme Casa"', content)
content = re.sub(r'"1013\. Gestione Utenze Domestiche"', '"20. Gestione Utenze Domestiche"', content)
content = re.sub(r'"1014\. Manutenzione Ordinaria Casa"', '"21. Manutenzione Ordinaria Casa"', content)
content = re.sub(r'"1015\. Gestione Emergenze Domestiche"', '"22. Gestione Emergenze Domestiche"', content)

# Salva il file modificato
print("[14/14] Salvataggio file modificato...")
with open('gestione-locale-FIXED.html', 'w', encoding='utf-8') as f:
    f.write(content)

file_size = len(content) / (1024 * 1024)  # Convert to MB
print(f"\nOK - Tutte le modifiche applicate con successo!")
print(f"File salvato: gestione-locale-FIXED.html ({file_size:.2f} MB)")
print("\nModifiche applicate:")
print("  - Titolo cambiato in 'Versione Locale'")
print("  - Rimossi tutti i riferimenti Supabase")
print("  - Aggiunto banner 'Versione Locale' nella sidebar")
print("  - Rimossi pulsanti ricerca non funzionanti")
print("  - Rimossi FAB e modal azioni rapide")
print("  - Riorganizzati SOP: 1-18 business, 19-22 personal")
print("  - Eliminati SOP 23, 24, 25")
