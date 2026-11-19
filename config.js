const SUPABASE_URL = "https://ewtshnnehaczenjvbshg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_SUVALSaLiSmWK18S2Wn5zQ_ZSSqfraK";

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// معرف فريد لكل متصفح/جهاز لتخزين الكورسات التي فتحها الطالب
function getClientId() {
    let cid = localStorage.getItem("edtech_client_id");
    if (!cid) {
        cid = "stu_" + crypto.randomUUID();
        localStorage.setItem("edtech_client_id", cid);
    }
    return cid;
}

// استخراج ID الفيديو من رابط يوتيوب أو إدخاله مباشرة
function extractYouTubeVideoId(input) {
    if (!input) return "";
    const trimmed = input.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
    const match = trimmed.match(/(?:v=|\/embed\/|youtu\.be\/|\/shorts\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : trimmed;
}

// استخراج ID البلاي ليست من رابط يوتيوب أو إدخاله مباشرة
function extractYouTubePlaylistId(input) {
    if (!input) return "";
    const trimmed = input.trim();
    const match = trimmed.match(/[?&]list=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : trimmed;
}
