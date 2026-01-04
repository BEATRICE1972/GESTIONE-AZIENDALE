// =====================================================
// CONFIGURAZIONE SUPABASE
// =====================================================
// IMPORTANTE: Sostituisci questi valori con le tue credenziali Supabase
// Le trovi su: Supabase Dashboard → Settings → API

const SUPABASE_CONFIG = {
    // URL del tuo progetto Supabase
    // Esempio: https://tuoprogetto.supabase.co
    // LASCIA COSÌ per usare localStorage (funziona subito!)
    // Compila SOLO se vuoi sincronizzazione cloud
    url: 'YOUR_SUPABASE_URL',

    // API Key pubblica (anon key)
    // Esempio: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
    // LASCIA COSÌ per usare localStorage (funziona subito!)
    // Compila SOLO se vuoi sincronizzazione cloud
    anonKey: 'YOUR_SUPABASE_ANON_KEY',

    // Modalità: 'localStorage' o 'cloud'
    // Con localStorage: funziona subito, dati solo sul browser corrente
    // Con cloud: richiede setup Supabase, dati sincronizzati ovunque
    mode: 'localStorage'
};

// Verifica se le credenziali sono state configurate
function checkSupabaseConfig() {
    // Se è in modalità localStorage, va bene
    if (SUPABASE_CONFIG.mode === 'localStorage') {
        console.info('💾 Modalità localStorage attiva. Per sincronizzazione cloud, configura Supabase.');
        return false;
    }

    if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL' ||
        SUPABASE_CONFIG.anonKey === 'YOUR_SUPABASE_ANON_KEY') {
        console.warn('⚠️ Supabase non configurato! Uso localStorage come fallback.');
        console.info('📖 Per attivare cloud sync, leggi SETUP-SUPABASE.md');
        return false;
    }
    return true;
}
