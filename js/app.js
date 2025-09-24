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


const phrases = [
  "I build things for the web.",
];

let currentPhrase = 0;
let currentLetter = 0;
const speed = 100;
const element = document.getElementById("typewriter");

function typeLoop() {
  let current = phrases[currentPhrase];
  if (currentLetter < current.length) {
    element.textContent += current[currentLetter];
    currentLetter++;
    setTimeout(typeLoop, speed);
  }
}

window.onload = typeLoop;
