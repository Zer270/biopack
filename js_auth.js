const authBtn = document.getElementById('authBtn');
const authModal = document.getElementById('authModal');
const authForm = document.getElementById('authForm');
const closeAuth = document.getElementById('closeAuth');
const adminBadge = document.getElementById('adminBadge');
const dashboardBtn = document.getElementById('dashboardBtn');
const registerToggle = document.getElementById('registerToggle');

authBtn.addEventListener('click', () => {
    authModal.style.display = 'block';
});

closeAuth.addEventListener('click', () => {
    authModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Kiểm tra đăng nhập
    const user = accounts.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = user;
        updateAuthUI();
        authModal.style.display = 'none';
        authForm.reset();
        loadAdminButtons();
        alert(`Welcome ${user.username}!`);
    } else {
        alert('Username hoặc Password không chính xác!');
    }
});

registerToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const newUsername = prompt('Nhập username mới:');
    if (newUsername && newUsername.trim()) {
        const newPassword = prompt('Nhập password:');
        if (newPassword) {
            // Thêm tài khoản mới
            accounts.push({
                username: newUsername,
                password: newPassword,
                role: 'member'
            });
            alert('Đăng ký thành công! Bây giờ đăng nhập với tài khoản của bạn.');
        }
    }
});

function updateAuthUI() {
    if (currentUser) {
        authBtn.textContent = `Đăng xuất (${currentUser.username})`;
        authBtn.onclick = logout;
        
        if (currentUser.role === 'admin') {
            adminBadge.style.display = 'inline-block';
        }
        dashboardBtn.style.display = 'block';
    }
}

function logout() {
    currentUser = null;
    authBtn.textContent = 'Đăng nhập';
    authBtn.onclick = null;
    authBtn.addEventListener('click', () => {
        authModal.style.display = 'block';
    });
    adminBadge.style.display = 'none';
    dashboardBtn.style.display = 'none';
    hideAdminButtons();
    alert('Đã đăng xuất!');
}

function loadAdminButtons() {
    if (currentUser && currentUser.role === 'admin') {
        document.getElementById('addBedrockBtn').style.display = 'block';
        document.getElementById('addJavaBtn').style.display = 'block';
        document.getElementById('addSwordBtn').style.display = 'block';
        document.getElementById('addCrystalBtn').style.display = 'block';
    }
}

function hideAdminButtons()