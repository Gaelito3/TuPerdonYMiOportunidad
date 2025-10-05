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
                    <i class="fas fa-heart"></i>
                    <h4>Bailar marinera norteña</h4>
                    <p>Disfruta de bailar desde los 17 años, que comenzó por su familia, que la incentivó a meterse en esto que la terminó metiendo a una academia para enseñar, participó en innumerables concursos de marinera, donde quedó primer puestos en múltiples ocasiones. Terminó destacando en esta danza y es muy conocida por todo su entorno por esta atractiva habilidad.</p>
                </div>
                <div class="hobby-item">
                    <i class="fas fa-users"></i>
                    <h4>Pasar tiempo con amigos</h4>
                    <p>Le gusta socializar con un entorno que le parezca seguro o que ella vea conveniente, a veces se acerca con mucha confianza para probar si la gente es capaz de adentrarse a una conversación con un tono sarcástico de confianza y termina haciendo amigos muy fácil por esta forma de ser tan particular, que hasta muchos de sus amigos cercanos la tildaron de "autista", pero así como se muestra al mundo se ha hecho querer bastante.</p>
                </div>
                <div class="hobby-item">
                    <i class="fas fa-running"></i>
                    <h4>Atletismo</h4>
                    <p>Este es un nuevo hobbie que ha adquirido por juntarse con muchos de sus amigos que le incentivaron al deporte, primero Alexander y Wilder, luego conoció a alguien que destacaba bastante en este deporte, por su alta resistencia y velocidad, ese es Gael, quien le terminó por acompañar en este camino a la mejora, no solo la disciplina del atletismo...</p>
                </div>
                <div class="hobby-item">
                    <i class="fas fa-music"></i>
                    <h4>Cantar</h4>
                    <p>Sinceramente, un hobbie no significa que lo hagas muy bien; pero le gusta, tanto a ella como a muchos de sus amigos, que también cantan mal. Lo importante es la intención y cómo vives la canción cuando lo haces.</p>
                </div>
                <div class="hobby-item">
                    <i class="fas fa-gamepad"></i>
                    <h4>Billar</h4>
                    <p>Aunque no sea muy buena en el real, en el virtual ha ganado cientos de veces a Gael, que es un profesional tanto en el billar en la vida real, como en el ocho bola, pero puede que parte de sus derrotas sea porque se dejó por simp, ya que siempre usaban este juego para charlar, en llamada o matar el tiempo en un curso aburrido o momento muy equisde.</p>
                </div>
            </div>
        `,
        
        'andrea-foda': `
            <h2>Análisis FODA - Andrea</h2>
            <div class="foda-grid">
                <div class="foda-item fortalezas">
                    <h3>Fortalezas</h3>
                    <ul>
                        <li>Creatividad artística</li>
                        <li>Se sabe mover (7.5/10) ;)</li>
                        <li>Determinación cuando se lo propone en serio</li>
                    </ul>
                </div>
                <div class="foda-item oportunidades">
                    <h3>Oportunidades</h3>
                    <ul>
                        <li>Crecimiento personal continuo en base a experiencias</li>
                        <li>Expansión de círculo social</li>
                    </ul>
                </div>
                <div class="foda-item debilidades">
                    <h3>Debilidades</h3>
                    <ul>
                        <li>Sobrepensar</li>
                        <li>Potencial narcicista (está mejorando eso, pero podría seguir siendo una debilidad y ya no una amenaza)</li>
                        <li>Sensible</li>
                        <li>Poca organización (especialmente en su cuarto)</li>
                    </ul>
                </div>
                <div class="foda-item amenazas">
                    <h3>Amenazas</h3>
                    <ul>
                        <li>Actuar por despecho (impulsividad en las emociones y no saber canalizarlas correctamente)</li>
                        <li>Estrés por altas expectativas</li>
                    </ul>
                </div>
            </div>
        `,
        
        'andrea-psicologico': `
            <h2>Aspecto Psicológico - Andrea</h2>
            <div class="psychological-content">
                <p>Es una persona sensible, un poco impulsiva con sus emociones, quiere sentir emoción al socializar, dependiendo del ambiente. Resuelve los problemas de una manera de imitación y presenta ecolalias en cuanto a su manera de reaccionar (imita a sus referentes).</p>
            </div>
        `,

        // Añadir contenido para las demás secciones de Andrea
        'andrea-hexagono': `
            <h2>Hexágono de Habilidades - Andrea</h2>
            <div class="hexagon-container">
                <div class="skills-chart">
                    <div class="skill" data-skill="Bailar" data-level="90">Bailar: 90%</div>
                    <div class="skill" data-skill="Socializar" data-level="85">Socializar: 85%</div>
                    <div class="skill" data-skill="Creatividad" data-level="80">Creatividad: 80%</div>
                    <div class="skill" data-skill="Resistencia" data-level="75">Resistencia: 75%</div>
                    <div class="skill" data-skill="Determinación" data-level="70">Determinación: 70%</div>
                    <div class="skill" data-skill="Organización" data-level="60">Organización: 60%</div>
                </div>
            </div>
        `,

        'andrea-estudios': `
            <h2>Estudios - Andrea</h2>
            <div class="studies-content">
                <p>Información sobre la formación académica y estudios de Andrea...</p>
            </div>
        `,

        'andrea-gustos': `
            <h2>Gustos - Andrea</h2>
            <div class="likes-content">
                <p>Sus preferencias, pasiones y cosas que disfruta...</p>
            </div>
        `,

        'andrea-historial': `
            <h2>Historial de Amor - Andrea</h2>
            <div class="love-history">
                <p>Su journey en el amor y relaciones anteriores...</p>
            </div>
        `,

        'andrea-deporte': `
            <h2>Deporte - Andrea</h2>
            <div class="sports-content">
                <p>Su experiencia en atletismo y otros deportes...</p>
            </div>
        `,

        'andrea-familia': `
            <h2>Familia - Andrea</h2>
            <div class="family-content">
                <p>Información sobre su núcleo familiar...</p>
            </div>
        `,

        'andrea-circulo': `
            <h2>Círculo Social - Andrea</h2>
            <div class="social-content">
                <p>Sus amistades y relaciones sociales...</p>
            </div>
        `,

        'andrea-pienso': `
            <h2>Lo que pienso de ti - Andrea</h2>
            <div class="thoughts-content">
                <p>Reflexiones y sentimientos sobre Andrea...</p>
            </div>
        `,

        // SECCIONES PARA GAEL (mismas que Andrea)
        'gael-hobbies': `
            <h2>Hobbies de Gael</h2>
            <div class="modal-grid">
                <div class="hobby-item">
                    <i class="fas fa-dumbbell"></i>
                    <h4>Atletismo y Deporte</h4>
                    <p>Gael destaca por su alta resistencia y velocidad en atletismo. Es una de sus mayores pasiones y habilidades.</p>
                </div>
                <div class="hobby-item">
                    <i class="fas fa-gamepad"></i>
                    <h4>Videojuegos</h4>
                    <p>Disfruta de los videojuegos, especialmente aquellos que requieren estrategia y habilidad.</p>
                </div>
                <div class="hobby-item">
                    <i class="fas fa-billiard"></i>
                    <h4>Billar</h4>
                    <p>Es un profesional tanto en el billar en la vida real como en el ocho bola virtual.</p>
                </div>
                <div class="hobby-item">
                    <i class="fas fa-music"></i>
                    <h4>Música</h4>
                    <p>Apasionado por la música, crea playlists y descubre nuevos artistas constantemente.</p>
                </div>
            </div>
        `,

        'gael-foda': `
            <h2>Análisis FODA - Gael</h2>
            <div class="foda-grid">
                <div class="foda-item fortalezas">
                    <h3>Fortalezas</h3>
                    <ul>
                        <li>Alta resistencia física y velocidad</li>
                        <li>Capacidad estratégica en juegos</li>
                        <li>Lealtad y compromiso</li>
                    </ul>
                </div>
                <div class="foda-item oportunidades">
                    <h3>Oportunidades</h3>
                    <ul>
                        <li>Desarrollo en deportes competitivos</li>
                        <li>Crecimiento profesional</li>
                        <li>Expansión de habilidades sociales</li>
                    </ul>
                </div>
                <div class="foda-item debilidades">
                    <h3>Debilidades</h3>
                    <ul>
                        <li>Puede ser muy competitivo</li>
                        <li>A veces reservado emocionalmente</li>
                        <li>Perfeccionismo en ciertas áreas</li>
                    </ul>
                </div>
                <div class="foda-item amenazas">
                    <h3>Amenazas</h3>
                    <ul>
                        <li>Lesiones deportivas</li>
                        <li>Estrés por competencia</li>
                    </ul>
                </div>
            </div>
        `,

        'gael-psicologico': `
            <h2>Aspecto Psicológico - Gael</h2>
            <div class="psychological-content">
                <p>Gael es una persona con carácter fuerte, estratégico en su pensar y actuar. Tiene profundidad emocional aunque a veces puede ser reservado. Es leal y comprometido con las personas que valora.</p>
            </div>
        `,

        'gael-hexagono': `
            <h2>Hexágono de Habilidades - Gael</h2>
            <div class="hexagon-container">
                <div class="skills-chart">
                    <div class="skill" data-skill="Atletismo" data-level="95">Atletismo: 95%</div>
                    <div class="skill" data-skill="Estrategia" data-level="85">Estrategia: 85%</div>
                    <div class="skill" data-skill="Billar" data-level="90">Billar: 90%</div>
                    <div class="skill" data-skill="Música" data-level="80">Música: 80%</div>
                    <div class="skill" data-skill="Lealtad" data-level="95">Lealtad: 95%</div>
                    <div class="skill" data-skill="Compromiso" data-level="90">Compromiso: 90%</div>
                </div>
            </div>
        `,

        // Añadir el resto de secciones para Gael siguiendo el mismo patrón
        'gael-estudios': `<h2>Estudios - Gael</h2><div class="studies-content"><p>Información académica de Gael...</p></div>`,
        'gael-gustos': `<h2>Gustos - Gael</h2><div class="likes-content"><p>Preferencias y pasiones de Gael...</p></div>`,
        'gael-historial': `<h2>Historial de Amor - Gael</h2><div class="love-history"><p>Su journey en el amor...</p></div>`,
        'gael-deporte': `<h2>Deporte - Gael</h2><div class="sports-content"><p>Su experiencia deportiva...</p></div>`,
        'gael-familia': `<h2>Familia - Gael</h2><div class="family-content"><p>Su núcleo familiar...</p></div>`,
        'gael-circulo': `<h2>Círculo Social - Gael</h2><div class="social-content"><p>Sus amistades...</p></div>`,
        'gael-pienso': `<h2>Lo que pienso de ti - Gael</h2><div class="thoughts-content"><p>Reflexiones sobre Gael...</p></div>`,

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