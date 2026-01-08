// =====================================================
// SUPABASE API MODULE
// =====================================================
// Gestisce autenticazione e tutte le operazioni CRUD

class SupabaseAPI {
    constructor() {
        this.client = null;
        this.currentUser = null;
        this.initialized = false;
    }

    // Inizializza Supabase client
    async init() {
        // Verifica se Supabase library è caricata
        if (typeof supabase === 'undefined') {
            console.warn('⚠️ Libreria Supabase non caricata. Usando localStorage.');
            this.initialized = false;
            return false;
        }

        if (!checkSupabaseConfig()) {
            console.info('💾 Modalità localStorage attiva.');
            this.initialized = false;
            return false;
        }

        try {
            this.client = supabase.createClient(
                SUPABASE_CONFIG.url,
                SUPABASE_CONFIG.anonKey
            );

            // Verifica sessione corrente
            const { data: { session } } = await this.client.auth.getSession();
            if (session) {
                this.currentUser = session.user;
                this.initialized = true;
                return true;
            }

            this.initialized = true;
            return false; // Nessun utente loggato
        } catch (error) {
            console.error('❌ Errore inizializzazione Supabase:', error);
            console.warn('🔄 Fallback a localStorage');
            this.initialized = false;
            return false;
        }
    }

    // =====================================================
    // AUTENTICAZIONE
    // =====================================================

    async signUp(email, password, fullName = '') {
        try {
            const { data, error } = await this.client.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName
                    }
                }
            });

            if (error) throw error;

            // Crea profilo utente
            if (data.user) {
                await this.client.from('user_profiles').insert({
                    id: data.user.id,
                    email: email,
                    full_name: fullName
                });

                // Crea impostazioni di default
                await this.client.from('user_settings').insert({
                    user_id: data.user.id,
                    auto_backup: true,
                    backup_interval: 30,
                    notifications_enabled: false
                });

                // Crea 4 aziende di default
                for (let i = 1; i <= 4; i++) {
                    await this.client.from('companies').insert({
                        user_id: data.user.id,
                        name: `Azienda ${i}`
                    });
                }
            }

            this.currentUser = data.user;
            return { success: true, user: data.user };
        } catch (error) {
            console.error('Errore registrazione:', error);
            return { success: false, error: error.message };
        }
    }

    async signIn(email, password) {
        try {
            const { data, error } = await this.client.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;

            this.currentUser = data.user;
            return { success: true, user: data.user };
        } catch (error) {
            console.error('Errore login:', error);
            return { success: false, error: error.message };
        }
    }

    async signOut() {
        try {
            const { error } = await this.client.auth.signOut();
            if (error) throw error;

            this.currentUser = null;
            return { success: true };
        } catch (error) {
            console.error('Errore logout:', error);
            return { success: false, error: error.message };
        }
    }

    async resetPassword(email) {
        try {
            const { error } = await this.client.auth.resetPasswordForEmail(email);
            if (error) throw error;

            return { success: true };
        } catch (error) {
            console.error('Errore reset password:', error);
            return { success: false, error: error.message };
        }
    }

    isAuthenticated() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    // =====================================================
    // COMPANIES
    // =====================================================

    async getCompanies() {
        try {
            const { data, error } = await this.client
                .from('companies')
                .select('*')
                .order('id', { ascending: true });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Errore caricamento aziende:', error);
            return { success: false, error: error.message, data: [] };
        }
    }

    async updateCompanyName(companyId, newName) {
        try {
            const { data, error } = await this.client
                .from('companies')
                .update({ name: newName })
                .eq('id', companyId);

            if (error) throw error;

            await this.logAudit('update', 'company', companyId, { name: newName });
            return { success: true, data };
        } catch (error) {
            console.error('Errore aggiornamento azienda:', error);
            return { success: false, error: error.message };
        }
    }

    // =====================================================
    // TASKS
    // =====================================================

    async getTasks(companyId) {
        try {
            const { data, error } = await this.client
                .from('tasks')
                .select('*')
                .eq('company_id', companyId)
                .order('created_at', { ascending: false });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Errore caricamento tasks:', error);
            return { success: false, error: error.message, data: [] };
        }
    }

    async addTask(companyId, task) {
        try {
            const { data, error } = await this.client
                .from('tasks')
                .insert({
                    company_id: companyId,
                    user_id: this.currentUser.id,
                    ...task
                })
                .select();

            if (error) throw error;

            await this.logAudit('create', 'task', data[0].id, task);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Errore aggiunta task:', error);
            return { success: false, error: error.message };
        }
    }

    async updateTask(taskId, updates) {
        try {
            const { data, error } = await this.client
                .from('tasks')
                .update(updates)
                .eq('id', taskId)
                .select();

            if (error) throw error;

            await this.logAudit('update', 'task', taskId, updates);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Errore aggiornamento task:', error);
            return { success: false, error: error.message };
        }
    }

    async deleteTask(taskId) {
        try {
            const { error } = await this.client
                .from('tasks')
                .delete()
                .eq('id', taskId);

            if (error) throw error;

            await this.logAudit('delete', 'task', taskId, null);
            return { success: true };
        } catch (error) {
            console.error('Errore eliminazione task:', error);
            return { success: false, error: error.message };
        }
    }

    // =====================================================
    // DEADLINES
    // =====================================================

    async getDeadlines(companyId) {
        try {
            const { data, error } = await this.client
                .from('deadlines')
                .select('*')
                .eq('company_id', companyId)
                .order('date', { ascending: true });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Errore caricamento deadlines:', error);
            return { success: false, error: error.message, data: [] };
        }
    }

    async addDeadline(companyId, deadline) {
        try {
            const { data, error } = await this.client
                .from('deadlines')
                .insert({
                    company_id: companyId,
                    user_id: this.currentUser.id,
                    ...deadline
                })
                .select();

            if (error) throw error;

            await this.logAudit('create', 'deadline', data[0].id, deadline);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Errore aggiunta deadline:', error);
            return { success: false, error: error.message };
        }
    }

    async updateDeadline(deadlineId, updates) {
        try {
            const { data, error } = await this.client
                .from('deadlines')
                .update(updates)
                .eq('id', deadlineId)
                .select();

            if (error) throw error;

            await this.logAudit('update', 'deadline', deadlineId, updates);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Errore aggiornamento deadline:', error);
            return { success: false, error: error.message };
        }
    }

    async deleteDeadline(deadlineId) {
        try {
            const { error } = await this.client
                .from('deadlines')
                .delete()
                .eq('id', deadlineId);

            if (error) throw error;

            await this.logAudit('delete', 'deadline', deadlineId, null);
            return { success: true };
        } catch (error) {
            console.error('Errore eliminazione deadline:', error);
            return { success: false, error: error.message };
        }
    }

    // =====================================================
    // EXPENSES
    // =====================================================

    async getExpenses(companyId) {
        try {
            const { data, error } = await this.client
                .from('expenses')
                .select('*')
                .eq('company_id', companyId)
                .order('date', { ascending: false });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Errore caricamento spese:', error);
            return { success: false, error: error.message, data: [] };
        }
    }

    async addExpense(companyId, expense) {
        try {
            const { data, error } = await this.client
                .from('expenses')
                .insert({
                    company_id: companyId,
                    user_id: this.currentUser.id,
                    ...expense
                })
                .select();

            if (error) throw error;

            await this.logAudit('create', 'expense', data[0].id, expense);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Errore aggiunta spesa:', error);
            return { success: false, error: error.message };
        }
    }

    async updateExpense(expenseId, updates) {
        try {
            const { data, error } = await this.client
                .from('expenses')
                .update(updates)
                .eq('id', expenseId)
                .select();

            if (error) throw error;

            await this.logAudit('update', 'expense', expenseId, updates);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Errore aggiornamento spesa:', error);
            return { success: false, error: error.message };
        }
    }

    async deleteExpense(expenseId) {
        try {
            const { error } = await this.client
                .from('expenses')
                .delete()
                .eq('id', expenseId);

            if (error) throw error;

            await this.logAudit('delete', 'expense', expenseId, null);
            return { success: true };
        } catch (error) {
            console.error('Errore eliminazione spesa:', error);
            return { success: false, error: error.message };
        }
    }

    // =====================================================
    // CONTACTS
    // =====================================================

    async getContacts(companyId) {
        try {
            const { data, error } = await this.client
                .from('contacts')
                .select('*')
                .eq('company_id', companyId)
                .order('name', { ascending: true });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Errore caricamento contatti:', error);
            return { success: false, error: error.message, data: [] };
        }
    }

    async addContact(companyId, contact) {
        try {
            const { data, error } = await this.client
                .from('contacts')
                .insert({
                    company_id: companyId,
                    user_id: this.currentUser.id,
                    ...contact
                })
                .select();

            if (error) throw error;

            await this.logAudit('create', 'contact', data[0].id, contact);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Errore aggiunta contatto:', error);
            return { success: false, error: error.message };
        }
    }

    async updateContact(contactId, updates) {
        try {
            const { data, error } = await this.client
                .from('contacts')
                .update(updates)
                .eq('id', contactId)
                .select();

            if (error) throw error;

            await this.logAudit('update', 'contact', contactId, updates);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Errore aggiornamento contatto:', error);
            return { success: false, error: error.message };
        }
    }

    async deleteContact(contactId) {
        try {
            const { error } = await this.client
                .from('contacts')
                .delete()
                .eq('id', contactId);

            if (error) throw error;

            await this.logAudit('delete', 'contact', contactId, null);
            return { success: true };
        } catch (error) {
            console.error('Errore eliminazione contatto:', error);
            return { success: false, error: error.message };
        }
    }

    // =====================================================
    // EMAILS
    // =====================================================

    async getEmails(companyId) {
        try {
            const { data, error } = await this.client
                .from('emails')
                .select('*')
                .eq('company_id', companyId)
                .order('date', { ascending: false });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Errore caricamento email:', error);
            return { success: false, error: error.message, data: [] };
        }
    }

    async addEmail(companyId, email) {
        try {
            const { data, error } = await this.client
                .from('emails')
                .insert({
                    company_id: companyId,
                    user_id: this.currentUser.id,
                    ...email
                })
                .select();

            if (error) throw error;

            await this.logAudit('create', 'email', data[0].id, email);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Errore aggiunta email:', error);
            return { success: false, error: error.message };
        }
    }

    async updateEmail(emailId, updates) {
        try {
            const { data, error } = await this.client
                .from('emails')
                .update(updates)
                .eq('id', emailId)
                .select();

            if (error) throw error;

            await this.logAudit('update', 'email', emailId, updates);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Errore aggiornamento email:', error);
            return { success: false, error: error.message };
        }
    }

    async deleteEmail(emailId) {
        try {
            const { error } = await this.client
                .from('emails')
                .delete()
                .eq('id', emailId);

            if (error) throw error;

            await this.logAudit('delete', 'email', emailId, null);
            return { success: true };
        } catch (error) {
            console.error('Errore eliminazione email:', error);
            return { success: false, error: error.message };
        }
    }

    // =====================================================
    // APPOINTMENTS
    // =====================================================

    async getAppointments(companyId) {
        try {
            const { data, error } = await this.client
                .from('appointments')
                .select('*')
                .eq('company_id', companyId)
                .order('date', { ascending: true });

            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Errore caricamento appuntamenti:', error);
            return { success: false, error: error.message, data: [] };
        }
    }

    async addAppointment(companyId, appointment) {
        try {
            const { data, error } = await this.client
                .from('appointments')
                .insert({
                    company_id: companyId,
                    user_id: this.currentUser.id,
                    ...appointment
                })
                .select();

            if (error) throw error;

            await this.logAudit('create', 'appointment', data[0].id, appointment);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Errore aggiunta appuntamento:', error);
            return { success: false, error: error.message };
        }
    }

    async updateAppointment(appointmentId, updates) {
        try {
            const { data, error } = await this.client
                .from('appointments')
                .update(updates)
                .eq('id', appointmentId)
                .select();

            if (error) throw error;

            await this.logAudit('update', 'appointment', appointmentId, updates);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Errore aggiornamento appuntamento:', error);
            return { success: false, error: error.message };
        }
    }

    async deleteAppointment(appointmentId) {
        try {
            const { error } = await this.client
                .from('appointments')
                .delete()
                .eq('id', appointmentId);

            if (error) throw error;

            await this.logAudit('delete', 'appointment', appointmentId, null);
            return { success: true };
        } catch (error) {
            console.error('Errore eliminazione appuntamento:', error);
            return { success: false, error: error.message };
        }
    }

    // =====================================================
    // UTILITY - AUDIT LOG
    // =====================================================

    async logAudit(action, entityType, entityId, changes) {
        try {
            await this.client.from('audit_log').insert({
                user_id: this.currentUser.id,
                action,
                entity_type: entityType,
                entity_id: entityId,
                changes: changes
            });
        } catch (error) {
            console.error('Errore log audit:', error);
        }
    }

    // =====================================================
    // MIGRAZIONE DA LOCALSTORAGE
    // =====================================================

    async migrateFromLocalStorage() {
        try {
            const localData = localStorage.getItem('gestione-direzionale-data');
            if (!localData) {
                return { success: false, error: 'Nessun dato locale trovato' };
            }

            const data = JSON.parse(localData);

            // Ottieni le aziende dal database
            const companiesResult = await this.getCompanies();
            if (!companiesResult.success) {
                throw new Error('Errore caricamento aziende');
            }

            const companies = companiesResult.data;

            // Migra i dati per ogni azienda
            for (let i = 1; i <= 4; i++) {
                const localCompany = data.companies[i];
                const dbCompany = companies.find(c => c.name === `Azienda ${i}` || c.name === localCompany.name);

                if (!dbCompany) continue;

                const companyId = dbCompany.id;

                // Aggiorna nome azienda se diverso
                if (dbCompany.name !== localCompany.name) {
                    await this.updateCompanyName(companyId, localCompany.name);
                }

                // Migra tasks
                for (const task of localCompany.tasks || []) {
                    await this.addTask(companyId, task);
                }

                // Migra deadlines
                for (const deadline of localCompany.deadlines || []) {
                    await this.addDeadline(companyId, deadline);
                }

                // Migra expenses
                for (const expense of localCompany.expenses || []) {
                    await this.addExpense(companyId, expense);
                }

                // Migra contacts
                for (const contact of localCompany.contacts || []) {
                    await this.addContact(companyId, contact);
                }

                // Migra emails
                for (const email of localCompany.emails || []) {
                    await this.addEmail(companyId, email);
                }

                // Migra appointments
                for (const appointment of localCompany.appointments || []) {
                    await this.addAppointment(companyId, appointment);
                }
            }

            return { success: true };
        } catch (error) {
            console.error('Errore migrazione:', error);
            return { success: false, error: error.message };
        }
    }
}

// Istanza globale
const supabaseAPI = new SupabaseAPI();
