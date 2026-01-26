/*  TYPING EFFECT ON HERO  */

const text = "Frontend Developer";
let idx = 0;

function typing() {
    const title = document.querySelector("#Home h2");
    if (!title) return;

    title.innerText = text.slice(0, idx++);
    if (idx <= text.length) {
        setTimeout(typing, 90);
    }
}
typing();

/* SKILLS CARDS  */

const skills = [
    { name: "HTML", img: "images/html.icon.jpg" },
    { name: "CSS", img: "images/cssiconn..jpg" },
    { name: "JavaScript", img: "images/jsicon.jpg" },
    { name: "Bootstrap", img: "images/boot.jpg" },
    { name: "React", img: "images/react (2).jpg" },
    { name: "SQL", img: "images/Mysql.jpg" },
    { name: "Python", img: "images/python.jpg" },
    { name: "Django", img: "images/django.jpg" }
];



const skillContainer = document.getElementById("cards");

if (skillContainer) {
    skills.forEach(skill => {
        const div = document.createElement("div");
        div.className = "skill-card";
        div.innerHTML = `
            <img src="${skill.img}" alt="${skill.name}">
            <h5>${skill.name}</h5>
        `;
        skillContainer.appendChild(div);
    });
}

/*  PROJECTS WITH LINKS */

const projects = [
    {
        title: "E-Commerce Website",
        img: "images/ecom.jpg",
        live: "https://lakshmanan-vl.github.io/E-Commerce-Website",
        github:"https://github.com/lakshmanan-vl/E-Commerce-Website"
    },
    {
        title: "Portfolio Website",
        img: "images/portfolio3.jpg",
        live: "https://lakshmanan-vl.github.io/My-Portfolio--Lakshmanan/",
        github:"https://github.com/lakshmanan-vl/My-Portfolio--Lakshmanan"
    },
    {
        title: "Weather Application",
        img: "images/weather.jpg",
        live: "https://lakshmanan-vl.github.io/Weather-Application/",
        github: "https://github.com/lakshmanan-vl/Weather-Application"
    },
    {
        title: "Calculator Application",
        img: "images/calc.jpg",
        live: "https://lakshmanan-vl.github.io/Calculator/",
        github: "https://github.com/lakshmanan-vl/Calculator"
    }
];

const projectContainer = document.getElementById("works");

if (projectContainer) {
    projects.forEach(project => {
        const div = document.createElement("div");
        div.className = "project-card";

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
}

/*  DOWNLOAD CV */

function downloadCV() {
    window.open("images/Lakshmanan  V  resume 2025.pdf", "_blank");
}



/* SCROLL REVEAL  */

const sections = document.querySelectorAll("section");

if (sections.length > 0) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
}
