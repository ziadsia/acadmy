// إدارة يوزرات أعضاء الفريق وصلاحياتهم
let teamMembers = JSON.parse(localStorage.getItem('platform_team')) || [
    { user: "admin", pass: "123", role: "المالك الأساسي" },
    { user: "ziad", pass: "2026", role: "مدير النظام" }
];

function verifyAdminSession() {
    const current = sessionStorage.getItem('currentAdmin');
    if (!current) {
        document.getElementById('login-screen').style.display = 'flex';
        document.getElementById('admin-dashboard').style.display = 'none';
        return null;
    } else {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        document.getElementById('current-admin-badge').innerText = `👤 مشرف: ${current}`;
        return current;
    }
}

function handleLogin() {
    const u = document.getElementById('admin-user').value.trim();
    const p = document.getElementById('admin-pass').value.trim();
    const msg = document.getElementById('login-msg');

    const found = teamMembers.find(m => m.user === u && m.pass === p);
    if (found) {
        sessionStorage.setItem('currentAdmin', u);
        verifyAdminSession();
        if (typeof loadDashboardData === 'function') loadDashboardData();
    } else {
        msg.innerText = "❌ اسم المستخدم أو كلمة المرور غير صحيحة!";
    }
}

function handleLogout() {
    sessionStorage.removeItem('currentAdmin');
    verifyAdminSession();
}

function addNewTeamMember() {
    const u = document.getElementById('new-team-user').value.trim();
    const p = document.getElementById('new-team-pass').value.trim();
    if (!u || !p) return alert("من فضلك أدخل اليوزر والباسورد للمشرف الجديد!");

    if(teamMembers.some(m => m.user === u)) return alert("⚠️ اسم المستخدم هذا موجود بالفعل!");

    teamMembers.push({ user: u, pass: p, role: "مشرف فرعي" });
    localStorage.setItem('platform_team', JSON.stringify(teamMembers));
    alert("🎉 تم إضافة المشرف بنجاح!");
    document.getElementById('new-team-user').value = '';
    document.getElementById('new-team-pass').value = '';
    if (typeof renderTeamTable === 'function') renderTeamTable();
}
