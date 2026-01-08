#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script finale: riordina SOP e rimuovi riferimenti search rimasti
"""

import re
import sys

if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

# Leggi il file
with open('gestione-locale-FIXED.html', 'r', encoding='utf-8') as f:
    content = f.read()

print("Fix finale: riordina SOP e pulisci search...")

# PROBLEMA 1: I SOP personal (19-22) vengono prima dei business (12-18)
# Dobbiamo riordinarli correttamente nell'array sopTemplates

print("1. Riordinamento SOP...")

# Estrai la sezione SOP
sop_section_start = content.find('const sopTemplates = [')
sop_section_end = content.find('];', sop_section_start) + 2

if sop_section_start == -1 or sop_section_end == -1:
    print("ERRORE: Sezione SOP non trovata!")
    sys.exit(1)

before_sop = content[:sop_section_start]
sop_section = content[sop_section_start:sop_section_end]
after_sop = content[sop_section_end:]

# Estrai i singoli SOP con regex
sop_pattern = r'\{\s*title:\s*"(\d+)\.\s*([^"]+)".*?\}'
sops = []
for match in re.finditer(sop_pattern, sop_section, re.DOTALL):
    num = int(match.group(1))
    sops.append((num, match.group(0)))

print(f"   Trovati {len(sops)} SOP")

# Ordina per numero
sops.sort(key=lambda x: x[0])

# Ricostruisci l'array
new_sop_section = 'const sopTemplates = [\n            // ==================== SOP AZIENDALI (1-18) ====================\n'

for i, (num, sop_text) in enumerate(sops):
    if i == 0:
        new_sop_section += '            '
    else:
        new_sop_section += ',\n            '

    # Aggiungi commento separatore per personal
    if num == 19:
        new_sop_section += '\n            // ==================== SOP PERSONALI/CASA (19-22) ====================\n            '

    new_sop_section += sop_text

new_sop_section += '\n        ];'

# Sostituisci
content = before_sop + new_sop_section + after_sop

print("   SOP riordinati correttamente")

# PROBLEMA 2: Rimuovi completamente la funzione toggleGlobalSearch e riferimenti
print("2. Rimozione completa toggleGlobalSearch...")

# Rimuovi la definizione della funzione
content = re.sub(
    r'function toggleGlobalSearch\(\) \{[^}]*\}',
    '''function toggleGlobalSearch() {
            // FUNZIONE DISABILITATA NELLA VERSIONE LOCALE
            console.log('toggleGlobalSearch() non disponibile nella versione locale');
            return;
        }''',
    content,
    flags=re.DOTALL
)

# Rimuovi gli onclick che chiamano toggleGlobalSearch
content = re.sub(
    r'onclick="toggleGlobalSearch\(\)"',
    'onclick="alert(\'Ricerca globale non disponibile nella versione locale. Usa i filtri nelle singole sezioni.\')"',
    content
)

# PROBLEMA 3: Verifica che non ci siano SOP duplicati
print("3. Verifica SOP duplicati...")
sop_numbers = re.findall(r'title:\s*"(\d+)\.', content)
if len(sop_numbers) != len(set(sop_numbers)):
    print("   ATTENZIONE: SOP duplicati trovati!")
    from collections import Counter
    dupes = [k for k, v in Counter(sop_numbers).items() if v > 1]
    print(f"   Duplicati: {dupes}")
else:
    print("   Nessun SOP duplicato")

# Salva
print("4. Salvataggio...")
with open('gestione-locale-FIXED.html', 'w', encoding='utf-8') as f:
    f.write(content)

file_size = len(content) / (1024 * 1024)
print(f"\nOK - Fix finale completato!")
print(f"File: gestione-locale-FIXED.html ({file_size:.2f} MB)")

# Report finale
print("\n=== REPORT FINALE ===")
print(f"SOP totali: {len(sop_numbers)}")
print(f"SOP business (1-18): {len([n for n in sop_numbers if 1 <= int(n) <= 18])}")
print(f"SOP personal (19-22): {len([n for n in sop_numbers if 19 <= int(n) <= 22])}")
print(f"Riferimenti toggleGlobalSearch: {content.count('toggleGlobalSearch')}")
print(f"Riferimenti supabase: {content.count('supabase')}")
