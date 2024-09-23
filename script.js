const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn"),
  languageToggle = document.getElementById("language-toggle"),
  languageLabel = document.getElementById("language-label"),
  heading = document.getElementById("main-heading"),
  infoText = document.getElementById("info-text"),
  btn1 = document.getElementById("btn1"),
  btn2 = document.getElementById("btn2"),
  navAbout = document.getElementById("nav-about"),
  navApp = document.getElementById("nav-app"),
  navHelp = document.getElementById("nav-help");

// Conteúdo em Português
const textPt = {
  heading: "Boas vindas ao <span>auway</span><br />Vamos passear?",
  info: "Explorar o app",
  btn1: "ver tudo",
  btn2: "Download",
  navAbout: "sobre",
  navApp: "app",
  navHelp: "ajuda"
};

// Conteúdo em Inglês
const textEn = {
  heading: "Welcome to <span>auway</span><br />Shall we go for a walk?",
  info: "Explore the app",
  btn1: "see all",
  btn2: "Download",
  navAbout: "about",
  navApp: "app",
  navHelp: "help"
};

// Função para atualizar o conteúdo
function updateContent(isEnglish) {
  if (isEnglish) {
    heading.innerHTML = textEn.heading;
    infoText.textContent = textEn.info;
    btn1.textContent = textEn.btn1;
    btn2.textContent = textEn.btn2;
    navAbout.textContent = textEn.navAbout;
    navApp.textContent = textEn.navApp;
    navHelp.textContent = textEn.navHelp;
    languageLabel.textContent = "English";
  } else {
    heading.innerHTML = textPt.heading;
    infoText.textContent = textPt.info;
    btn1.textContent = textPt.btn1;
    btn2.textContent = textPt.btn2;
    navAbout.textContent = textPt.navAbout;
    navApp.textContent = textPt.navApp;
    navHelp.textContent = textPt.navHelp;
    languageLabel.textContent = "Português";
  }
}

// Alternar o idioma com base no estado do toggle
languageToggle.addEventListener("change", (event) => {
  updateContent(event.target.checked);
});

// Função de mostrar/ocultar menu
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// Inicializar conteúdo com base no estado do toggle
updateContent(languageToggle.checked);

// Animações existentes
AOS.init();
gsap.from(".logo", { opacity: 0, y: -10, delay: 1, duration: 0.5 });
gsap.from(".nav_menu_list .nav_menu_item", { opacity: 0, y: -10, delay: 1.4, duration: 0.5, stagger: 0.3 });
gsap.from(".toggle_btn", { opacity: 0, y: -10, delay: 1.4, duration: 0.5 });
gsap.from(".main-heading", { opacity: 0, y: 20, delay: 2.4, duration: 1 });
gsap.from(".info-text", { opacity: 0, y: 20, delay: 2.8, duration: 1 });
gsap.from(".btn_wrapper", { opacity: 0, y: 20, delay: 2.8, duration: 1 });
gsap.from(".team_img_wrapper img", { opacity: 0, y: 20, delay: 3, duration: 1 });
gsap.from(".language-toggle", { opacity: 0, y: 20, delay: 3, duration: 1 });
