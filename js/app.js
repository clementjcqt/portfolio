// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});


// reveal-on-scroll.js
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

reveals.forEach(el => observer.observe(el));


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar a");

const observersection = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));

      const activeLink = document.querySelector(`.sidebar a[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }

    }
  });
}, { threshold: 0.4 });
sections.forEach(section => observersection.observe(section));

window.addEventListener("DOMContentLoaded", () => {
  navLinks.forEach(link => link.classList.remove("active"));
  const firstLink = document.querySelector(`.sidebar a[href="#${sections[0].id}"]`);
  if (firstLink) firstLink.classList.add("active");
});


const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "My skills",
    "nav.projects": "My projects",
    "nav.resume": "My CV",
    "nav.contact": "Contact me",
    "intro.greeting": "Hi, my name is",
    "intro.p1": 'Hi, I’m <span>Clément</span> — a junior <span>full-stack developer</span> and a recent graduate from Le Wagon Bordeaux. After several years working in management, I decided to switch paths and dive into tech, where I could combine <span>creativity, problem-solving, and teamwork.</span>',
    "intro.p2": 'What I bring with me is a solid foundation in web development, along with the rigor and collaborative mindset I developed in my previous career. I love turning ideas into <span>functional, user-friendly</span> applications.',
    "intro.p3": '<span>My goal is simple:</span> to contribute to innovative projects, grow alongside motivated teams, and keep building products that make a real impact.',
    "cta.about": "Any ideas? Contact me",
    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks",
    "skills.tools": "Tools / Platforms",
    "projects.title": "My projects ",
    "projects.habitsDescription": "Habits is a responsive web application built with Ruby on Rails, designed to help users track and visualize their daily routines over time. It not only lets users log good and bad habits, but also integrates with a large language model (LLM) to provide personalized tips and recommendations, making habit-building more engaging and effective.",
    "projects.dogtherhappyDescription": "DogTherHappy is a playful landing page built in vanilla HTML/CSS/JS, highlighting a cheerful pet wellness service with smooth scroll, animated accents, and a bright, welcoming hero section.",
    "projects.cta": "Have a look !",
    "resume.title": "My CV",
    "resume.job1.title": "Duty Manager — Ricky’s River Bar and Restaurant",
    "resume.job1.dates": "Jan 2022 – Nov 2024",
    "resume.job1.bullet1": "Directed a 30-member team in a high-pressure environment.",
    "resume.job1.bullet2": "Implemented stock management processes to reduce inefficiencies.",
    "resume.job1.bullet3": "Organized private events (up to 200 clients) demonstrating project management skills.",
    "resume.job2.title": "Head Waiter — Ricky’s River Bar and Restaurant",
    "resume.job2.dates": "Jan 2021 – Aug 2021",
    "resume.job2.bullet1": "Delivered top-tier customer service in fine dining.",
    "resume.job2.bullet2": "Ensured precision and attention to detail for service excellence.",
    "resume.job2.bullet3": "Anticipated client needs, akin to understanding end-user requirements in development.",
    "resume.job3.title": "Assistant Manager — Franprix",
    "resume.job3.dates": "Feb 2017 – Sep 2018",
    "resume.job3.bullet1": "Supervised a team of 6 employees and fostered accountability.",
    "resume.job3.bullet2": "Optimized stock and inventory processes to reduce waste.",
    "resume.job3.bullet3": "Monitored P&L, applying data-driven decision-making.",
    "contact.title": "Contact me !",
    "contact.subtitle": "Let's build something together",
    "contact.text": "If you have a project in mind, want to collaborate, or just say hello, drop me a line. I’ll reply as soon as I can.",
    "contact.emailLabel": "clement.jacquet.16@gmail.com",
    "contact.linkedin": "Connect on LinkedIn",
    "contact.github": "Explore my GitHub",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.cta": "Send message"
  },
  fr: {
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Mes projets",
    "nav.resume": "Mon CV",
    "nav.contact": "Contact",
    "intro.greeting": "Bonjour, je m’appelle",
    "intro.p1": 'Je suis <span>Clément</span> — <span>développeur full-stack</span> junior et récent diplômé du Wagon Bordeaux. Après plusieurs années en management, j’ai choisi de me réorienter vers la tech pour mêler <span>créativité, résolution de problèmes et travail d’équipe.</span>',
    "intro.p2": 'Je m’appuie sur de solides bases en développement web et sur la rigueur acquise dans mes expériences précédentes. J’aime transformer les idées en applications <span>fonctionnelles et agréables à utiliser</span>.',
    "intro.p3": '<span>Mon objectif :</span> contribuer à des projets innovants, progresser avec des équipes motivées et construire des produits qui ont de l’impact.',
    "cta.about": "Une idée ? Contacte-moi",
    "skills.title": "Compétences",
    "skills.languages": "Langages",
    "skills.frameworks": "Frameworks",
    "skills.tools": "Outils / Plateformes",
    "projects.title": "Mes projets ",
    "projects.habitsDescription": "Habits est une application web responsive créée avec Ruby on Rails. Elle aide à suivre et visualiser ses routines quotidiennes, tout en intégrant un modèle de langage pour donner des conseils personnalisés et rendre la construction d’habitudes plus efficace.",
    "projects.dogtherhappyDescription": "DogTherHappy est une landing page ludique en HTML/CSS/JS, qui met en avant un service de bien-être canin avec défilement fluide, accents animés et un hero lumineux et accueillant.",
    "projects.cta": "Découvrir le projet",
    "resume.title": "Mon CV",
    "resume.job1.title": "Duty Manager — Ricky’s River Bar and Restaurant",
    "resume.job1.dates": "Jan 2022 – Nov 2024",
    "resume.job1.bullet1": "Supervision d’une équipe de 30 personnes dans un environnement exigeant.",
    "resume.job1.bullet2": "Mise en place de processus de gestion des stocks pour réduire les inefficacités.",
    "resume.job1.bullet3": "Organisation d’événements privés (jusqu’à 200 clients) démontrant mes compétences en gestion de projet.",
    "resume.job2.title": "Head Waiter — Ricky’s River Bar and Restaurant",
    "resume.job2.dates": "Jan 2021 – Août 2021",
    "resume.job2.bullet1": "Service client premium en restauration gastronomique.",
    "resume.job2.bullet2": "Précision et attention aux détails pour une expérience irréprochable.",
    "resume.job2.bullet3": "Anticipation des besoins des clients, comme comprendre les utilisateurs finaux en développement.",
    "resume.job3.title": "Assistant Manager — Franprix",
    "resume.job3.dates": "Fév 2017 – Sep 2018",
    "resume.job3.bullet1": "Encadrement d’une équipe de 6 personnes et responsabilisation.",
    "resume.job3.bullet2": "Optimisation des stocks et des inventaires pour limiter les pertes.",
    "resume.job3.bullet3": "Suivi du compte d’exploitation avec une approche data-driven.",
    "contact.title": "Contacte-moi !",
    "contact.subtitle": "Construisons quelque chose ensemble",
    "contact.text": "Un projet, une collaboration ou juste envie d’échanger ? Écris-moi et je te répondrai rapidement.",
    "contact.emailLabel": "clement.jacquet.16@gmail.com",
    "contact.linkedin": "Parlons sur LinkedIn",
    "contact.github": "Voir mon GitHub",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.cta": "Envoyer"
  }
};

const typewriterPhrases = {
  en: ["I build things for the web."],
  fr: ["Je crée des expériences web."]
};

const typewriterElement = document.getElementById("typewriter");
let currentLang = "en";
let currentLetter = 0;
const speed = 100;
let typingTimeout = null;

function typeLoop() {
  const current = typewriterPhrases[currentLang][0];
  if (currentLetter < current.length) {
    typewriterElement.textContent += current[currentLetter];
    currentLetter++;
    typingTimeout = setTimeout(typeLoop, speed);
  }
}

function startTypewriter() {
  if (!typewriterElement) return;
  if (typingTimeout) {
    clearTimeout(typingTimeout);
    typingTimeout = null;
  }
  currentLetter = 0;
  typewriterElement.textContent = "";
  typeLoop();
}

function applyPlaceholders(lang) {
  const placeholders = {
    name: { en: "Your name", fr: "Votre nom" },
    email: { en: "you@example.com", fr: "vous@exemple.com" },
    subject: { en: "Project idea, collaboration...", fr: "Idée de projet, collaboration..." },
    message: { en: "Tell me more about your project", fr: "Parlez-moi de votre projet" }
  };

  Object.keys(placeholders).forEach(id => {
    const input = document.getElementById(id);
    if (input) input.placeholder = placeholders[id][lang];
  });

  const hiddenSubject = document.getElementById("form-subject-hidden");
  if (hiddenSubject) {
    hiddenSubject.value = lang === "fr" ? "Contact portfolio" : "Portfolio contact";
  }
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  currentLang = lang;
  document.documentElement.lang = lang;
  applyPlaceholders(lang);
  startTypewriter();
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    applyTranslations(lang);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
});

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function setTheme(mode) {
  const isLight = mode === "light";
  body.classList.toggle("light-theme", isLight);
  const label = isLight ? "☀ Light" : "☾ Dark";
  themeToggle.textContent = label;
  themeToggle.setAttribute("aria-pressed", String(isLight));
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextMode = body.classList.contains("light-theme") ? "dark" : "light";
    setTheme(nextMode);
  });
}

setTheme("dark");
