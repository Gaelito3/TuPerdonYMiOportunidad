// Configuración inicial
const CONFIG = {
    startDate: '2023-01-01', // Fecha cuando empezaron (cambiar por la real)
    memoriesCount: 50,
    playlists: {
        'quien-chucha-somos': '[ENLACE_SPOTIFY_1]',
        'short-goodbye': '[ENLACE_SPOTIFY_2]', 
        'gaelo-playlist': '[ENLACE_SPOTIFY_3]',
        'andreita-playlist': '[ENLACE_SPOTIFY_4]'
    },
    driveLink: '[ENLACE_DRIVE]'
};

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    calculateDaysTogether();
});

function initializeApp() {
    // Smooth scrolling para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Contenido de los modales
    initializeModalContent();
}

function setupEventListeners() {
    // Hamburger menu para móviles
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar modal al hacer clic fuera
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('modal-container');
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cerrar modal con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function calculateDaysTogether() {
    const start = new Date(CONFIG.startDate);
    const today = new Date();
    const diffTime = Math.abs(today - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('days-together').textContent = diffDays;
}

function openModal(section) {
    const modal = document.getElementById('modal-container');
    const modalBody = document.getElementById('modal-body');
    
    // Limpiar contenido previo
    modalBody.innerHTML = '';
    
    // Agregar contenido según la sección
    const content = getModalContent(section);
    modalBody.innerHTML = content;
    
    // Mostrar modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal-container');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function getModalContent(section) {
    const content = {
        'andrea-hobbies': `
            <h2>Hobbies de Andrea</h2>
            <div class="modal-grid">
                <div class="hobby-item">
                    <i class="fas fa-book"></i>
                    <h4>Leer</h4>
                    <p>Disfruta de la literatura romántica y de autoayuda</p>
                </div>
                <div class="hobby-item">
                    <i class="fas fa-music"></i>
                    <h4>Música</h4>
                    <p>Apasionada por descubrir nueva música y crear playlists</p>
                </div>
                <div class="hobby-item">
                    <i class="fas fa-camera"></i>
                    <h4>Fotografía</h4>
                    <p>Capturando momentos especiales con su cámara</p>
                </div>
            </div>
        `,
        
        'andrea-foda': `
            <h2>Análisis FODA - Andrea</h2>
            <div class="foda-grid">
                <div class="foda-item fortalezas">
                    <h3>Fortalezas</h3>
                    <ul>
                        <li>Empatía y comprensión hacia los demás</li>
                        <li>Creatividad en la resolución de problemas</li>
                        <li>Perseverancia en sus objetivos</li>
                        <li>Capacidad de adaptación</li>
                    </ul>
                </div>
                <div class="foda-item oportunidades">
                    <h3>Oportunidades</h3>
                    <ul>
                        <li>Desarrollo profesional en su campo</li>
                        <li>Crecimiento personal continuo</li>
                        <li>Expansión de su círculo social</li>
                        <li>Nuevos hobbies y habilidades</li>
                    </ul>
                </div>
                <div class="foda-item debilidades">
                    <h3>Debilidades</h3>
                    <ul>
                        <li>Perfeccionismo excesivo en ocasiones</li>
                        <li>Sensibilidad emocional elevada</li>
                        <li>Dificultad para decir no</li>
                    </ul>
                </div>
                <div class="foda-item amenazas">
                    <h3>Amenazas</h3>
                    <ul>
                        <li>Estrés por altas expectativas</li>
                        <li>Incertidumbre en algunos aspectos</li>
                    </ul>
                </div>
            </div>
        `,
        
        'andrea-hexagono': `
            <h2>Hexágono de Habilidades - Andrea</h2>
            <div class="hexagon-container">
                <img src="images/hexagono-andrea.jpg" alt="Hexágono de habilidades de Andrea" style="width: 100%; border-radius: 10px;">
                <div class="skills-list">
                    <h3>Habilidades Principales</h3>
                    <ul>
                        <li>Comunicación efectiva: 90%</li>
                        <li>Inteligencia emocional: 85%</li>
                        <li>Creatividad: 80%</li>
                        <li>Resiliencia: 75%</li>
                        <li>Liderazgo: 70%</li>
                        <li>Organización: 85%</li>
                    </ul>
                </div>
            </div>
        `,
        
        'perdon': `
            <h2>¿Por qué deberías perdonarme?</h2>
            <div class="forgiveness-content">
                <div class="reason-card">
                    <i class="fas fa-heart"></i>
                    <h3>Porque te amo profundamente</h3>
                    <p>Mi amor por ti es genuino y sincero. Cada día me esfuerzo por ser mejor para ti.</p>
                </div>
                <div class="reason-card">
                    <i class="fas fa-hand-holding-heart"></i>
                    <h3>Porque reconozco mis errores</h3>
                    <p>He reflexionado sobre mis acciones y comprendo dónde me equivoqué.</p>
                </div>
                <div class="reason-card">
                    <i class="fas fa-seedling"></i>
                    <h3>Porque estoy creciendo</h3>
                    <p>Estoy trabajando en mí mismo para ser la persona que te mereces.</p>
                </div>
                <div class="reason-card">
                    <i class="fas fa-history"></i>
                    <h3>Por nuestra historia</h3>
                    <p>Hemos construido momentos maravillosos juntos que valen la pena salvar.</p>
                </div>
                <div class="reason-card">
                    <i class="fas fa-universal-access"></i>
                    <h3>Porque merecemos una segunda oportunidad</h3>
                    <p>Creo que nuestro amor es lo suficientemente fuerte para superar esto.</p>
                </div>
                <div class="reason-card">
                    <i class="fas fa-star"></i>
                    <h3>Por el futuro que podemos construir</h3>
                    <p>Imagino un futuro brillante a tu lado y haré todo lo posible para hacerlo realidad.</p>
                </div>
            </div>
            <div class="forgiveness-promise">
                <h3>Mi promesa para ti:</h3>
                <p>"Prometo escucharte más, comprenderte mejor y valorar cada momento a tu lado. Eres lo más importante en mi vida y lucharé cada día para demostrártelo."</p>
            </div>
        `
    };
    
    return content[section] || `<h2>Contenido no disponible</h2><p>Esta sección está en desarrollo.</p>`;
}

function initializeModalContent() {
    // Puedes agregar más contenido modal aquí según sea necesario
}

// Efectos de scroll y animaciones adicionales
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.subsection-card, .playlist-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});