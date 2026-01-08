// =====================================================
// CONFIGURAZIONE SUPABASE
// =====================================================
// IMPORTANTE: Sostituisci questi valori con le tue credenziali Supabase
// Le trovi su: Supabase Dashboard → Settings → API

const SUPABASE_CONFIG = {
    // URL del tuo progetto Supabase
    // IMPORTANTE: Sostituisci con il tuo URL Supabase
    // Lo trovi su: Supabase Dashboard → Settings → API
    url: 'YOUR_SUPABASE_URL',

    // API Key pubblica (anon key)
    // IMPORTANTE: Sostituisci con la tua API Key
    // La trovi su: Supabase Dashboard → Settings → API
    anonKey: 'YOUR_SUPABASE_ANON_KEY',

    // Modalità forzata: 'cloud' per richiedere sempre login, 'localStorage' per test locale
    // Cambia a 'localStorage' per testare il sistema senza Supabase
    mode: 'localStorage',

    // Se true, mostra sempre schermata login anche se non configurato
    // Impostato a false per permettere test in localStorage
    requireAuth: false
};

// Verifica se le credenziali sono state configurate
function checkSupabaseConfig() {
    // Se requireAuth è true, verifica sempre la configurazione
    if (SUPABASE_CONFIG.requireAuth) {
        if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL' ||
            SUPABASE_CONFIG.anonKey === 'YOUR_SUPABASE_ANON_KEY') {
            console.error('❌ ERRORE: Supabase NON configurato!');
            console.error('📋 Il sistema richiede autenticazione obbligatoria.');
            console.error('📖 DEVI configurare Supabase per usare il sistema.');
            console.error('🔧 Segui la guida: SETUP-SUPABASE.md oppure esegui AUTO-SETUP.bat');
            return false;
        }
        console.info('✅ Supabase configurato correttamente. Modalità cloud attiva.');
        return true;
    }

    // Se è in modalità localStorage e non richiede auth
    if (SUPABASE_CONFIG.mode === 'localStorage') {
        console.info('💾 Modalità localStorage attiva.');
        return false;
    }

    // Verifica normale per modalità cloud
    if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL' ||
        SUPABASE_CONFIG.anonKey === 'YOUR_SUPABASE_ANON_KEY') {
        console.warn('⚠️ Supabase non configurato! Uso localStorage come fallback.');
        console.info('📖 Per attivare cloud sync, leggi SETUP-SUPABASE.md');
        return false;
    }
    return true;
}
