const SUPABASE_URL = 'https://ewtshnnehaczenjvbshg.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_SUVALSaLiSmWK18S2Wn5zQ_ZSSqfraK';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// دالة التحقق من تسجيل دخول الطالب
async function checkAuth() {
    const { data: { session } } = await _supabase.auth.getSession();
    if (!session) {
        window.location.href = 'index.html';
        return null;
    }
    return session.user;
}

// دالة تسجيل الخروج
async function logout() {
    await _supabase.auth.signOut();
    window.location.href = 'index.html';
}