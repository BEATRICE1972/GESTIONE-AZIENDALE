// =====================================================
// CONFIGURAZIONE SUPABASE
// =====================================================
// IMPORTANTE: Sostituisci questi valori con le tue credenziali Supabase
// Le trovi su: Supabase Dashboard → Settings → API

const SUPABASE_CONFIG = {
    // URL del tuo progetto Supabase
    // Esempio: https://tuoprogetto.supabase.co
    url: 'YOUR_SUPABASE_URL',

    // API Key pubblica (anon key)
    // Esempio: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
    anonKey: 'YOUR_SUPABASE_ANON_KEY'
};

// Verifica se le credenziali sono state configurate
function checkSupabaseConfig() {
    if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL' ||
        SUPABASE_CONFIG.anonKey === 'YOUR_SUPABASE_ANON_KEY') {
        console.warn('⚠️ Supabase non configurato! Leggi SETUP-SUPABASE.md per le istruzioni.');
        return false;
    }
    return true;
}
