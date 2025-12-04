/* ================= TYPING EFFECT ON HERO ================= */

const text = "Frontend Developer";
let idx = 0;

function typing() {
    document.querySelector("#Home h2").innerText = text.slice(0, idx++);
    if (idx <= text.length) {
        setTimeout(typing, 90);
    }
}
typing();

/* ================= SKILLS CARDS ================= */

const skills = [
    { name: "HTML", img: "images/html.icon.jpg" },
    { name: "CSS", img: "images/cssiconn..jpg" },
    { name: "JavaScript", img: "images/jsicon.jpg" },
    { name: "Bootstrap", img: "images/boot.icon.jpg" },
    { name: "React", img: "images/react.icon.jpg" }
];

const skillContainer = document.getElementById("cards");

skills.forEach(skill => {
    const div = document.createElement("div");
    div.classList.add("skill-card");
    div.innerHTML = `
        <img src="${skill.img}" alt="${skill.name}">
        <h6>${skill.name}</h6>
    `;
    skillContainer.appendChild(div);
});

/* ================= PROJECTS CARDS ================= */

// const projects = [
//     { title: "E-Commerce Website", img: "images/ecom.jpg" },
//     { title: "Portfolio Website", img: "images/portfolio.webp" },
//     { title: "Weather Application", img: "images/weather.jpg" }
// ];

// const projectContainer = document.getElementById("works");

// projects.forEach(project => {
//     const div = document.createElement("div");
//     div.classList.add("project-card");
//     div.innerHTML = `
//         <img src="${project.img}" alt="${project.title}">
//         <h5>${project.title}</h5>
//     `;
//     projectContainer.appendChild(div);
// });


/* ================= PROJECTS WITH LINKS ================= */

const projects = [
  {
    title: "E-Commerce Website",
    img: "images/ecom.jpg",
    live: "https://your-username.github.io/ecommerce",
    github: "https://github.com/your-username/ecommerce"
  },
  {
    title: "Portfolio Website",
    img: "images/portfolio.webp",
    live: "https://your-username.github.io/portfolio",
    github: "https://github.com/your-username/portfolio"
  },
  {
    title: "Weather Application",
    img: "images/weather.jpg",
    live: "https://your-username.github.io/weather-app",
    github: "https://github.com/your-username/weather-app"
  }
];

const projectContainer = document.getElementById("works");

projects.forEach(project => {
  const div = document.createElement("div");
  div.classList.add("project-card");

  div.innerHTML = `
      <img src="${project.img}" alt="${project.title}">

      <h5>${project.title}</h5>

      <div class="project-links">
        <a href="${project.live}" target="_blank" class="btn demo-btn">
            <i class="bi bi-box-arrow-up-right"></i> Live
        </a>

        <a href="${project.github}" target="_blank" class="btn git-btn">
            <i class="bi bi-github"></i> GitHub
        </a>
      </div>
  `;

  projectContainer.appendChild(div);
});

/* ================= DOWNLOAD CV ================= */

function downloadCV() {
    window.open("images/Lakshmanan  V  resume 2025.pdf");
}

/* ================= PRELOADER ================= */

let percent = 0;
const progress = document.querySelector(".progress");
const percentText = document.getElementById("percent");

const loading = setInterval(() => {
    percent++;
    progress.style.width = percent + "%";
    percentText.innerText = percent + "%";

    if (percent >= 100) {
        clearInterval(loading);
        document.getElementById("preloader").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }
}, 20);

/* ================= SCROLL REVEAL ================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
