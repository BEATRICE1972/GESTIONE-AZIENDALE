#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script parte 2: pulizia finale dei riferimenti Supabase rimasti
"""

import re
import sys

if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

# Leggi il file
with open('gestione-locale-FIXED.html', 'r', encoding='utf-8') as f:
    content = f.read()

print("Parte 2: Pulizia riferimenti Supabase residui...")

# Semplifica la funzione init() rimuovendo tutto il codice Supabase non necessario
print("1. Semplificazione funzione init()...")
init_pattern = r'try \{\s*// Verifica se config Supabase esiste.*?// Versione locale: sempre localStorage\s*console\.log\(\'💾 Avvio in modalità localStorage \(versione locale\)\.\.\.\'\);\s*initializeAppLocal\(\);\s*return;\s*// Il resto del codice Supabase è disabilitato nella versione locale.*?\} catch \(error\) \{'

init_replacement = '''try {
                console.log('🚀 Inizializzazione sistema (Versione Locale)...');
                
                // Versione locale: usa sempre localStorage
                console.log('💾 Modalità localStorage attiva');
                initializeAppLocal();
                return;
            } catch (error) {'''

content = re.sub(init_pattern, init_replacement, content, flags=re.DOTALL)

# Rimuovi o semplifica la funzione initializeApp() che carica da cloud
print("2. Rimozione funzione initializeApp() cloud...")
content = re.sub(
    r'async function initializeApp\(\) \{[^}]*await loadDataFromCloud\(\);[^}]*\}',
    '''async function initializeApp() {
            // Versione locale: non utilizzata
            console.log('initializeApp() non utilizzata nella versione locale');
            initializeAppLocal();
        }''',
    content,
    flags=re.DOTALL
)

# Commenta la funzione loadDataFromCloud
print("3. Disabilitazione funzione loadDataFromCloud...")
content = re.sub(
    r'async function loadDataFromCloud\(\) \{',
    '''async function loadDataFromCloud() {
            // DISABILITATA NELLA VERSIONE LOCALE
            return; // Exit immediately
            /*''',
    content
)

# Chiudi il commento multi-linea alla fine della funzione loadDataFromCloud
content = re.sub(
    r'(\s*// Fallback a localStorage\s*\}\s*\})',
    r'\1\n            */',
    content,
    count=1
)

# Disabilita le funzioni cloud specifiche
cloud_functions = [
    'showCloudUpgradeInfo',
    'migrateToCloud',
    'manualSync',
    'handleLogout',
    'updateCloudStatus'
]

print("4. Disabilitazione funzioni cloud...")
for func in cloud_functions:
    pattern = rf'(async )?function {func}\([^)]*\) \{{'
    replacement = rf'\1function {func}() {{ /* DISABILITATA VERSIONE LOCALE */ return;'
    content = re.sub(pattern, replacement, content)

# Rimuovi il banner localStorage dalla sidebar (già sostituito con "Versione Locale")
print("5. Pulizia banner localStorage...")
content = re.sub(
    r'<!-- Storage Mode Banner -->.*?</div>',
    '',
    content,
    flags=re.DOTALL,
    count=1
)

# Semplifica la parte di cloud-sync-settings nelle impostazioni
print("6. Semplificazione sezione cloud settings...")
cloud_settings_old = r'<div class="card" style="margin-top: 30px;" id="cloud-sync-settings">.*?</div>\s*</div>'
cloud_settings_new = '''<div class="card" style="margin-top: 30px;">
                    <h3>💾 Versione Locale</h3>
                    <p style="color: #7f8c8d; margin-bottom: 15px;">
                        Stai utilizzando la <strong>versione locale</strong> del sistema. Tutti i dati sono salvati nel browser (localStorage).
                    </p>
                    <div style="padding: 15px; background: #e8f5e9; border-left: 4px solid #27ae60; border-radius: 8px;">
                        <p style="color: #2e7d32; margin: 0;">
                            ✓ <strong>Dati sempre disponibili offline</strong><br>
                            ℹ️ Ricorda di esportare periodicamente un backup dei tuoi dati (pulsante "Backup Manuale" sopra)
                        </p>
                    </div>
                </div>'''

content = re.sub(cloud_settings_old, cloud_settings_new, content, flags=re.DOTALL)

# Salva
print("7. Salvataggio...")
with open('gestione-locale-FIXED.html', 'w', encoding='utf-8') as f:
    f.write(content)

file_size = len(content) / (1024 * 1024)
print(f"\nOK - Parte 2 completata!")
print(f"File: gestione-locale-FIXED.html ({file_size:.2f} MB)")
print("\nRiferimenti Supabase rimanenti:", content.count('supabase'))
print("(alcuni riferimenti rimangono nel codice legacy non eseguito)")
