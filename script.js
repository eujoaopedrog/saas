// --- CONFIGURAÇÃO ---
const WHATSAPP_LINK = "https://wa.me/5511999999999"; 

// --- MENU MOBILE TOGGLE ---
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu-overlay');
    menu.classList.toggle('active');
}

// Navegação via Mobile (Fecha o menu e rola)
function handleMobileClick(id) {
    toggleMobileMenu(); // Fecha o menu
    setTimeout(() => {
        scrollToSection(id);
    }, 400); // Espera animação de fechar
}

function goToLoginMobile() {
    toggleMobileMenu();
    setTimeout(() => {
        goToLogin();
    }, 400);
}

// --- SPOTLIGHT MOUSE ---
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.glass-card, .btn-glow').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// --- TYPEWRITER ---
const words = ["Garantido.", "Imediato.", "Automático.", "Eletrizante."];
let i = 0;
function typeWriter() {
    const target = document.querySelector('.typing-effect');
    if(!target) return;
    const word = words[i];
    let charIndex = 0;
    const type = setInterval(() => {
        target.textContent = word.substring(0, charIndex + 1);
        charIndex++;
        if(charIndex === word.length) {
            clearInterval(type);
            setTimeout(erase, 2000);
        }
    }, 100);
    function erase() {
        const eraseInterval = setInterval(() => {
            target.textContent = word.substring(0, charIndex - 1);
            charIndex--;
            if(charIndex === 0) {
                clearInterval(eraseInterval);
                i = (i + 1) % words.length;
                typeWriter();
            }
        }, 50);
    }
}
document.addEventListener('DOMContentLoaded', typeWriter);

// --- NAVEGAÇÃO SPA ---
const landingView = document.getElementById('landing-page');
const loginView = document.getElementById('login-page');
const btnPortal = document.getElementById('btn-portal');

function switchView(view) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (view === 'login') {
        landingView.classList.remove('active-view');
        landingView.classList.add('hidden-view');
        loginView.classList.remove('hidden-view');
        loginView.classList.add('active-view');
        // Atualiza botão desktop se existir
        if(btnPortal) {
            const btnContent = btnPortal.querySelector('.btn-content');
            if(btnContent) btnContent.innerText = 'Voltar ao Site';
            btnPortal.setAttribute('onclick', 'goToHome()');
        }
    } else {
        loginView.classList.remove('active-view');
        loginView.classList.add('hidden-view');
        landingView.classList.remove('hidden-view');
        landingView.classList.add('active-view');
        if(btnPortal) {
            const btnContent = btnPortal.querySelector('.btn-content');
            if(btnContent) btnContent.innerText = 'Área do Parceiro';
            btnPortal.setAttribute('onclick', 'goToLogin()');
        }
    }
}

window.goToLogin = () => switchView('login');
window.goToHome = () => switchView('home');

// Navegação Desktop
window.handleNavClick = (id) => {
    if (loginView.classList.contains('active-view')) {
        goToHome();
        setTimeout(() => {
            const el = document.getElementById(id);
            if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    } else {
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};

window.scrollToSection = (id) => {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

window.openWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank');
};

// --- FADE IN ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// --- LOGIN SIMULADO ---
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    btn.innerHTML = 'Validando Acesso...';
    btn.style.opacity = 0.7;
    setTimeout(() => {
        alert('Ambiente Demonstrativo. Redirecionando para WhatsApp...');
        window.openWhatsApp();
        btn.innerText = originalText;
        btn.style.opacity = 1;
    }, 1500);
});