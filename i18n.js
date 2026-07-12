function buildWhatsAppHref() {
  const base   = parseInt('521777', 10) * 1e7;
  const offset = 1111343;
  const number = String(base + offset);
  const msg = currentLang === 'en'
    ? 'Hi, I found your site and would like to book a session'
    : 'Hola, encontré tu sitio y me gustaría agendar una sesión';
  return 'https://wa.me/' + number + '?text=' + encodeURIComponent(msg);
}

function armWhatsApp() {
  const el = document.getElementById('wa-link');
  if (!el || el.dataset.armed) return;
  el.dataset.armed = '1';
  ['mousedown', 'touchstart'].forEach(evt =>
    el.addEventListener(evt, () => { el.href = buildWhatsAppHref(); }, { once: true })
  );
}

// Arm only when the contact section scrolls into view
const _waObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    armWhatsApp();
    _waObserver.disconnect();
  }
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) _waObserver.observe(contactSection);
});

/* ── Translations ── */
const translations = {
  es: {
    "meta.title":       "Renata De Lille Romero · Psicóloga y Psicoterapeuta",
    "meta.description": "Psicóloga y psicoterapeuta especializada en acompañamiento individual para la transformación de vínculos, relación con el cuerpo e integración de la historia personal.",

    "nav.about":    "Sobre mí",
    "nav.services": "Servicios",
    "nav.contact":  "Contacto",

    "hero.label":        "Psicóloga · Psicoterapeuta",
    "hero.tagline":      "Autoconocimiento · Transformación · Integración",
    "hero.intro":        "Acompaño a personas que quieren comprender y transformar la forma en la que se relacionan con sus vínculos, su cuerpo, su propia historia y con la Vida misma.",
    "hero.cta_primary":  "Contáctame",
    "hero.cta_secondary":"Ver servicios",

    "about.label":         "Sobre mí",
    "about.title":         "Un acompañamiento desde la presencia y el cuidado",
    "about.p1":            "Soy psicóloga y psicoterapeuta con enfoque en el acompañamiento individual de personas adultas. Mi trabajo central es el proceso psicoterapéutico profundo: acompañar a quienes buscan comprender y transformar su relación con sus vínculos, su cuerpo, su propia historia y con la Vida misma. También colaboro con comunidades educativas en programas de bienestar socioemocional.",
    "about.p2":            "Trabajo desde un enfoque humano, corporal e integrativo que integra las Prácticas Narrativas Decoloniales, la Neurodanza, el Arteterapia y la Terapia de juego —priorizando la presencia, el cuidado y la coherencia entre lo que se enseña y lo que se vive.",
    "about.p3":            "Cuento con formación en Psicoterapia Corporal (Instituto Córpore / The Institute of Core Energetics), Licenciatura en Psicología por la Universidad Latinoamericana y especialización en Terapias Narrativas Decoloniales.",
    "about.approach_label":"A quién acompaño",
    "about.area1":         "Personas que han atravesado trauma y anhelan recuperar seguridad interna",
    "about.area2":         "Quienes quieren sanar su relación con el cuerpo y sentirse a salvo en él",
    "about.area3":         "Personas que repiten escenarios, relaciones o conductas dolorosas",
    "about.area4":         "Quienes buscan salir de la lucha interior y elegir desde la consciencia",
    "about.area5":         "Familias y comunidades educativas en procesos de cambio",

    "services.label":           "Servicios",
    "services.title":           "¿Cómo puedo acompañarte?",
    "services.s1.title":        "Psicoterapia individual",
    "services.s1.desc":         "Proceso de autoconocimiento y exploración profunda del Ser, acompañado por la curiosidad compasiva y la voluntad de mirar lo que causa sufrimiento para reconocerlo, aceptarlo e integrarlo, eligiendo con consciencia redirigir la vida hacia su desarrollo más pleno.",
    "services.s2.title":        "Acompañamiento familiar",
    "services.s2.desc":         "Acompañamiento parental y familiar para fortalecer vínculos, mejorar la comunicación y navegar etapas de cambio.",
    "services.s3.title":        "Psicología educativa",
    "services.s3.desc":         "Programas de bienestar socioemocional y prevención de violencia dirigidos a escuelas, desde primaria hasta universidad.",
    "services.s4.title":        "Talleres vivenciales",
    "services.s4.desc":         "Talleres y charlas psicoeducativas integrando Neurodanza, Arteterapia y dinámicas corporales para estudiantes, docentes y familias.",
    "services.mod1":            "Presencial",
    "services.mod2":            "Virtual",
    "services.mod3":            "por sesión",
    "services.mod4":            "mensual · 4 sesiones",

    "contact.label": "Contacto",
    "contact.title": "Hablemos",
    "contact.desc":  "Si estás buscando iniciar un proceso de acompañamiento psicoterapéutico, o quieres saber más sobre talleres y programas para tu escuela o comunidad, puedes encontrarme en mis redes sociales.",
    "contact.whatsapp": "WhatsApp",

    "footer.copy": "© Renata De Lille Romero · Psicóloga y Psicoterapeuta",
  },

  en: {
    "meta.title":       "Renata De Lille Romero · Psychologist & Psychotherapist",
    "meta.description": "Psychologist and psychotherapist specialising in individual support for transforming relationships, the body, and personal history.",

    "nav.about":    "About me",
    "nav.services": "Services",
    "nav.contact":  "Contact",

    "hero.label":        "Psychologist · Psychotherapist",
    "hero.tagline":      "Self-knowledge · Transformation · Integration",
    "hero.intro":        "I accompany people who want to understand and transform the way they relate to their bonds, their body, their personal history, and Life itself.",
    "hero.cta_primary":  "Get in touch",
    "hero.cta_secondary":"See services",

    "about.label":         "About me",
    "about.title":         "Support grounded in presence and care",
    "about.p1":            "I am a psychologist and psychotherapist focused on individual therapeutic support for adults. My central work is deep psychotherapeutic process: accompanying those who seek to understand and transform their relationship with their bonds, their body, their personal history, and Life itself. I also collaborate with educational communities on socio-emotional wellbeing programmes.",
    "about.p2":            "I work from a human, body-centred, and integrative framework that weaves together Decolonial Narrative Practices, Neurodance, Art Therapy, and Play Therapy — prioritising presence, care, and coherence between what is taught and what is lived.",
    "about.p3":            "My training includes Body Psychotherapy (Instituto Córpore / The Institute of Core Energetics), a Bachelor's Degree in Psychology from Universidad Latinoamericana, and specialisation in Decolonial Narrative Therapies.",
    "about.approach_label":"Who I support",
    "about.area1":         "People who have experienced trauma and long to recover a sense of inner safety",
    "about.area2":         "Those who want to heal their relationship with their body and feel at home in it",
    "about.area3":         "People who keep repeating painful scenarios, relationships, or behaviours",
    "about.area4":         "Those seeking to end inner conflict and choose consciously from a compassionate place",
    "about.area5":         "Families and educational communities navigating change",

    "services.label":           "Services",
    "services.title":           "How can I support you?",
    "services.s1.title":        "Individual psychotherapy",
    "services.s1.desc":         "A process of self-knowledge and deep exploration of the Self, guided by compassionate curiosity and the willingness to look honestly at what causes suffering — to recognise it, accept it, integrate it, and consciously redirect life towards its fullest unfolding.",
    "services.s2.title":        "Family therapy",
    "services.s2.desc":         "Parental and family support to strengthen bonds, improve communication, and navigate periods of change.",
    "services.s3.title":        "Educational psychology",
    "services.s3.desc":         "Socio-emotional wellbeing and violence-prevention programmes for schools, from primary level to university.",
    "services.s4.title":        "Experiential workshops",
    "services.s4.desc":         "Psychoeducational workshops and talks integrating Neurodance, Art Therapy, and body-based dynamics for students, teachers, and families.",
    "services.mod1":            "In-Person",
    "services.mod2":            "Online",
    "services.mod3":            "per session",
    "services.mod4":            "monthly · 4 sessions",

    "contact.label": "Contact",
    "contact.title": "Let's talk",
    "contact.desc":  "If you are looking to begin a psychotherapeutic process, or would like to learn more about workshops and programmes for your school or community, you can find me on social media.",
    "contact.whatsapp": "WhatsApp",

    "footer.copy": "© Renata De Lille Romero · Psychologist & Psychotherapist",
  },
};

/* ── Language logic ── */
let currentLang = localStorage.getItem('lang') || 'es';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const t = translations[lang];

  // Update <title> and <meta description>
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) titleEl.textContent = t[titleEl.dataset.i18n] ?? titleEl.textContent;

  const metaDesc = document.querySelector('meta[data-i18n]');
  if (metaDesc) metaDesc.setAttribute('content', t[metaDesc.dataset.i18n] ?? metaDesc.getAttribute('content'));

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t[key];
    if (val === undefined) return;
    // Use innerHTML only for keys containing HTML entities (&amp; etc.)
    if (val.includes('&') || val.includes('<')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // Update toggle button appearance
  document.getElementById('opt-es').classList.toggle('active', lang === 'es');
  document.getElementById('opt-en').classList.toggle('active', lang === 'en');
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

// Apply on load
applyLang(currentLang);
