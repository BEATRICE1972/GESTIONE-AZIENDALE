// =====================================================
// AUTHENTICATION UI
// =====================================================
// Gestisce l'interfaccia di login/registrazione

class AuthUI {
    constructor() {
        this.authContainer = null;
        this.onAuthSuccess = null;
    }

    // Crea l'interfaccia di autenticazione
    create(onSuccess, showSetupRequired = false) {
        this.onAuthSuccess = onSuccess;

        // Se Supabase non è configurato, mostra schermata di setup
        if (showSetupRequired) {
            this.showSetupRequired();
            return;
        }

        const authHTML = `
        <div id="auth-container" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        ">
            <div style="
                background: white;
                border-radius: 20px;
                padding: 40px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                width: 90%;
                max-width: 450px;
                animation: slideIn 0.5s ease;
            ">
                <!-- Logo e titolo -->
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="font-size: 48px; margin-bottom: 10px;">📊</div>
                    <h1 style="margin: 0; color: #2c3e50; font-size: 24px; font-weight: 600;">
                        Sistema Gestione Direzionale
                    </h1>
                    <p style="margin: 10px 0 0 0; color: #7f8c8d; font-size: 14px;">
                        Multi-Azienda - Cloud Sync
                    </p>
                </div>

                <!-- Tabs -->
                <div style="display: flex; margin-bottom: 30px; border-bottom: 2px solid #ecf0f1;">
                    <button id="login-tab" class="auth-tab active-tab" onclick="authUIInstance.showTab('login')" style="
                        flex: 1;
                        padding: 12px;
                        border: none;
                        background: none;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        color: #7f8c8d;
                        border-bottom: 3px solid transparent;
                        transition: all 0.3s;
                    ">
                        Accedi
                    </button>
                    <button id="register-tab" class="auth-tab" onclick="authUIInstance.showTab('register')" style="
                        flex: 1;
                        padding: 12px;
                        border: none;
                        background: none;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        color: #7f8c8d;
                        border-bottom: 3px solid transparent;
                        transition: all 0.3s;
                    ">
                        Registrati
                    </button>
                </div>

                <!-- Login Form -->
                <form id="login-form" style="display: block;">
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px; color: #2c3e50; font-weight: 600; font-size: 14px;">
                            Email
                        </label>
                        <input
                            type="email"
                            id="login-email"
                            placeholder="nome@email.com"
                            required
                            style="
                                width: 100%;
                                padding: 12px 15px;
                                border: 2px solid #ecf0f1;
                                border-radius: 10px;
                                font-size: 15px;
                                transition: all 0.3s;
                                box-sizing: border-box;
                            "
                            onfocus="this.style.borderColor='#667eea'"
                            onblur="this.style.borderColor='#ecf0f1'"
                        >
                    </div>

                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px; color: #2c3e50; font-weight: 600; font-size: 14px;">
                            Password
                        </label>
                        <input
                            type="password"
                            id="login-password"
                            placeholder="••••••••"
                            required
                            style="
                                width: 100%;
                                padding: 12px 15px;
                                border: 2px solid #ecf0f1;
                                border-radius: 10px;
                                font-size: 15px;
                                transition: all 0.3s;
                                box-sizing: border-box;
                            "
                            onfocus="this.style.borderColor='#667eea'"
                            onblur="this.style.borderColor='#ecf0f1'"
                        >
                    </div>

                    <button
                        type="submit"
                        style="
                            width: 100%;
                            padding: 14px;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            border: none;
                            border-radius: 10px;
                            font-size: 16px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s;
                            margin-top: 10px;
                        "
                        onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(102,126,234,0.4)'"
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'"
                    >
                        Accedi
                    </button>

                    <div style="text-align: center; margin-top: 15px;">
                        <a href="#" onclick="authUIInstance.showResetPassword(); return false;" style="
                            color: #667eea;
                            text-decoration: none;
                            font-size: 14px;
                        ">
                            Password dimenticata?
                        </a>
                    </div>
                </form>

                <!-- Register Form -->
                <form id="register-form" style="display: none;">
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px; color: #2c3e50; font-weight: 600; font-size: 14px;">
                            Nome Completo
                        </label>
                        <input
                            type="text"
                            id="register-name"
                            placeholder="Mario Rossi"
                            style="
                                width: 100%;
                                padding: 12px 15px;
                                border: 2px solid #ecf0f1;
                                border-radius: 10px;
                                font-size: 15px;
                                transition: all 0.3s;
                                box-sizing: border-box;
                            "
                            onfocus="this.style.borderColor='#667eea'"
                            onblur="this.style.borderColor='#ecf0f1'"
                        >
                    </div>

                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px; color: #2c3e50; font-weight: 600; font-size: 14px;">
                            Email
                        </label>
                        <input
                            type="email"
                            id="register-email"
                            placeholder="nome@email.com"
                            required
                            style="
                                width: 100%;
                                padding: 12px 15px;
                                border: 2px solid #ecf0f1;
                                border-radius: 10px;
                                font-size: 15px;
                                transition: all 0.3s;
                                box-sizing: border-box;
                            "
                            onfocus="this.style.borderColor='#667eea'"
                            onblur="this.style.borderColor='#ecf0f1'"
                        >
                    </div>

                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 8px; color: #2c3e50; font-weight: 600; font-size: 14px;">
                            Password
                        </label>
                        <input
                            type="password"
                            id="register-password"
                            placeholder="Minimo 6 caratteri"
                            required
                            style="
                                width: 100%;
                                padding: 12px 15px;
                                border: 2px solid #ecf0f1;
                                border-radius: 10px;
                                font-size: 15px;
                                transition: all 0.3s;
                                box-sizing: border-box;
                            "
                            onfocus="this.style.borderColor='#667eea'"
                            onblur="this.style.borderColor='#ecf0f1'"
                        >
                        <small style="color: #7f8c8d; font-size: 12px; display: block; margin-top: 5px;">
                            Usa almeno 6 caratteri con lettere e numeri
                        </small>
                    </div>

                    <button
                        type="submit"
                        style="
                            width: 100%;
                            padding: 14px;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            border: none;
                            border-radius: 10px;
                            font-size: 16px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s;
                            margin-top: 10px;
                        "
                        onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(102,126,234,0.4)'"
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'"
                    >
                        Crea Account
                    </button>
                </form>

                <!-- Messaggio di stato -->
                <div id="auth-message" style="
                    margin-top: 20px;
                    padding: 12px;
                    border-radius: 8px;
                    text-align: center;
                    font-size: 14px;
                    display: none;
                "></div>

                <!-- Info localStorage -->
                <div id="localstorage-info" style="
                    margin-top: 25px;
                    padding: 15px;
                    background: #fff3cd;
                    border-left: 4px solid #ffc107;
                    border-radius: 8px;
                    display: none;
                ">
                    <div style="font-weight: 600; color: #856404; margin-bottom: 8px; font-size: 14px;">
                        📦 Dati locali trovati!
                    </div>
                    <div style="color: #856404; font-size: 13px; margin-bottom: 12px;">
                        Dopo il login, potrai migrare i tuoi dati esistenti nel cloud.
                    </div>
                    <button onclick="authUIInstance.showLocalData()" style="
                        padding: 8px 15px;
                        background: white;
                        color: #856404;
                        border: 1px solid #ffc107;
                        border-radius: 6px;
                        font-size: 13px;
                        cursor: pointer;
                        font-weight: 600;
                    ">
                        Visualizza dati
                    </button>
                </div>

                <!-- Footer -->
                <div style="margin-top: 30px; text-align: center; color: #95a5a6; font-size: 12px;">
                    <p style="margin: 5px 0;">🔒 Connessione sicura e criptata</p>
                    <p style="margin: 5px 0;">☁️ Sincronizzazione cloud automatica</p>
                    <p style="margin: 5px 0;">💾 Backup automatico dei dati</p>
                </div>
            </div>
        </div>

        <style>
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .active-tab {
                color: #667eea !important;
                border-bottom-color: #667eea !important;
            }
        </style>
        `;

        document.body.insertAdjacentHTML('beforeend', authHTML);
        this.authContainer = document.getElementById('auth-container');

        // Setup event listeners
        this.setupEventListeners();

        // Check per dati localStorage
        this.checkLocalStorage();
    }

    setupEventListeners() {
        // Login form
        document.getElementById('login-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleLogin();
        });

        // Register form
        document.getElementById('register-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleRegister();
        });
    }

    showTab(tab) {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const loginTab = document.getElementById('login-tab');
        const registerTab = document.getElementById('register-tab');

        if (tab === 'login') {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            loginTab.classList.add('active-tab');
            registerTab.classList.remove('active-tab');
        } else {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            loginTab.classList.remove('active-tab');
            registerTab.classList.add('active-tab');
        }

        this.hideMessage();
    }

    async handleLogin() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        this.showMessage('Accesso in corso...', 'info');

        const result = await supabaseAPI.signIn(email, password);

        if (result.success) {
            this.showMessage('Accesso riuscito! Caricamento...', 'success');
            setTimeout(() => {
                this.onAuthSuccess && this.onAuthSuccess();
                this.remove();
            }, 1000);
        } else {
            this.showMessage('Errore: ' + result.error, 'error');
        }
    }

    async handleRegister() {
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        if (password.length < 6) {
            this.showMessage('La password deve contenere almeno 6 caratteri', 'error');
            return;
        }

        this.showMessage('Creazione account...', 'info');

        const result = await supabaseAPI.signUp(email, password, name);

        if (result.success) {
            this.showMessage('Account creato! Controlla la tua email per la conferma.', 'success');
            setTimeout(() => {
                this.showTab('login');
            }, 3000);
        } else {
            this.showMessage('Errore: ' + result.error, 'error');
        }
    }

    showMessage(message, type) {
        const messageDiv = document.getElementById('auth-message');
        messageDiv.textContent = message;
        messageDiv.style.display = 'block';

        if (type === 'success') {
            messageDiv.style.background = '#d4edda';
            messageDiv.style.color = '#155724';
            messageDiv.style.border = '1px solid #c3e6cb';
        } else if (type === 'error') {
            messageDiv.style.background = '#f8d7da';
            messageDiv.style.color = '#721c24';
            messageDiv.style.border = '1px solid #f5c6cb';
        } else {
            messageDiv.style.background = '#d1ecf1';
            messageDiv.style.color = '#0c5460';
            messageDiv.style.border = '1px solid #bee5eb';
        }
    }

    hideMessage() {
        const messageDiv = document.getElementById('auth-message');
        messageDiv.style.display = 'none';
    }

    checkLocalStorage() {
        const localData = localStorage.getItem('gestione-direzionale-data');
        if (localData) {
            document.getElementById('localstorage-info').style.display = 'block';
        }
    }

    showLocalData() {
        const localData = localStorage.getItem('gestione-direzionale-data');
        if (localData) {
            const data = JSON.parse(localData);
            let summary = 'Dati presenti:\n\n';

            for (let i = 1; i <= 4; i++) {
                const company = data.companies[i];
                summary += `${company.name}:\n`;
                summary += `- ${company.tasks?.length || 0} attività\n`;
                summary += `- ${company.deadlines?.length || 0} scadenze\n`;
                summary += `- ${company.contacts?.length || 0} contatti\n`;
                summary += `- ${company.emails?.length || 0} email\n\n`;
            }

            alert(summary);
        }
    }

    showResetPassword() {
        const email = prompt('Inserisci la tua email per il reset della password:');
        if (email) {
            this.showMessage('Invio email di reset...', 'info');
            supabaseAPI.resetPassword(email).then(result => {
                if (result.success) {
                    this.showMessage('Email di reset inviata! Controlla la tua casella.', 'success');
                } else {
                    this.showMessage('Errore: ' + result.error, 'error');
                }
            });
        }
    }

    showSetupRequired() {
        const setupHTML = `
        <div id="auth-container" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        ">
            <div style="
                background: white;
                border-radius: 20px;
                padding: 50px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.4);
                width: 90%;
                max-width: 600px;
                text-align: center;
            ">
                <div style="font-size: 72px; margin-bottom: 20px;">⚠️</div>

                <h1 style="color: #e74c3c; font-size: 28px; margin-bottom: 15px;">
                    Configurazione Richiesta
                </h1>

                <p style="color: #2c3e50; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                    Il sistema richiede <strong>autenticazione obbligatoria</strong> per proteggere i tuoi dati.<br>
                    Supabase non è stato ancora configurato.
                </p>

                <div style="background: #fff3cd; padding: 20px; border-radius: 10px; margin-bottom: 30px; text-align: left;">
                    <h3 style="color: #856404; margin-top: 0;">📋 Setup Rapido (5 minuti)</h3>
                    <ol style="color: #856404; line-height: 1.8; margin: 15px 0;">
                        <li>Vai su <a href="https://supabase.com" target="_blank" style="color: #667eea;">supabase.com</a></li>
                        <li>Crea account gratuito con GitHub</li>
                        <li>Crea nuovo progetto "gestione-direzionale"</li>
                        <li>Esegui lo script SQL (file: supabase-setup.sql)</li>
                        <li>Copia URL e API Key</li>
                        <li>Incolla in supabase-config.js</li>
                        <li>Fai commit e push su GitHub</li>
                    </ol>
                </div>

                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="window.open('https://supabase.com', '_blank')" style="
                        padding: 15px 30px;
                        background: #667eea;
                        color: white;
                        border: none;
                        border-radius: 10px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s;
                    ">
                        🚀 Vai su Supabase
                    </button>

                    <button onclick="window.open('SETUP-SUPABASE.md', '_blank')" style="
                        padding: 15px 30px;
                        background: white;
                        color: #667eea;
                        border: 2px solid #667eea;
                        border-radius: 10px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s;
                    ">
                        📖 Leggi Guida
                    </button>
                </div>

                <p style="color: #95a5a6; font-size: 13px; margin-top: 30px;">
                    💡 Dopo la configurazione, ricarica questa pagina (F5)
                </p>
            </div>
        </div>
        `;

        document.body.insertAdjacentHTML('beforeend', setupHTML);
        this.authContainer = document.getElementById('auth-container');
    }

    remove() {
        if (this.authContainer) {
            this.authContainer.remove();
        }
    }
}

// Istanza globale
const authUIInstance = new AuthUI();
