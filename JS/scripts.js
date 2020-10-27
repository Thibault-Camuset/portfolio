let accueilBox = document.getElementById("accueil-box");
let aboutBox = document.getElementById("about-box");
let skillsBox = document.getElementById("skills-box");
let worksBox = document.getElementById("works-box");
let contactBox = document.getElementById("contact-box");

let homeLink = document.querySelector(".homeLink");
let aboutLink = document.querySelector(".aboutLink");
let skillsLink = document.querySelector(".skillsLink");
let worksLink = document.querySelector(".worksLink");
let contactLink = document.querySelector(".contactLink");

let langFr = document.querySelector(".lang-fr");
let langEn = document.querySelector(".lang-en");

let contactMe = document.getElementById("contactMe");

let indexText = document.getElementById("indexText");
let indexSubText = document.getElementById("index-sub-text");
let aboutMe = document.getElementById("aboutMe");
let aboutP = document.getElementById("about-p");
let skillsAndExp = document.getElementById("skillsAndExp");
let skillsP = document.getElementById("skills-p");

let workBataille = document.getElementById("work-bataille");
let workBatailleType = document.getElementById("work-bataille-type");
let worksImageBataille = document.getElementById("works-image-bataille");

let contact_Me = document.getElementById("contact-me");
let contactP = document.getElementById("contact-p");

let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");
let inputSubject = document.getElementById("inputSubject");
let inputMessage = document.getElementById("inputMessage");
let sendButton = document.getElementById("sendButton");

let msgConfirm = document.getElementById("msg-confirm");
let containerConfirmation = document.getElementById("container-confirmation");

// Ecouteurs pour naviguer entre les pages, et afficher le "lien"/page actif
aboutLink.addEventListener("click", () => {
  accueilBox.classList.add("hidden");
  skillsBox.classList.add("hidden");
  worksBox.classList.add("hidden");
  contactBox.classList.add("hidden");
  aboutBox.classList.remove("hidden");
  msgConfirm.classList.add("hidden");

  homeLink.classList.remove("green");
  skillsLink.classList.remove("green");
  worksLink.classList.remove("green");
  contactLink.classList.remove("green");
  aboutLink.classList.add("green");
});

homeLink.addEventListener("click", () => {
  aboutBox.classList.add("hidden");
  skillsBox.classList.add("hidden");
  worksBox.classList.add("hidden");
  contactBox.classList.add("hidden");
  accueilBox.classList.remove("hidden");
  msgConfirm.classList.add("hidden");

  aboutLink.classList.remove("green");
  skillsLink.classList.remove("green");
  worksLink.classList.remove("green");
  contactLink.classList.remove("green");
  homeLink.classList.add("green");
});

skillsLink.addEventListener("click", () => {
  aboutBox.classList.add("hidden");
  accueilBox.classList.add("hidden");
  worksBox.classList.add("hidden");
  contactBox.classList.add("hidden");
  skillsBox.classList.remove("hidden");
  msgConfirm.classList.add("hidden");

  aboutLink.classList.remove("green");
  homeLink.classList.remove("green");
  worksLink.classList.remove("green");
  contactLink.classList.remove("green");
  skillsLink.classList.add("green");
});

worksLink.addEventListener("click", () => {
  aboutBox.classList.add("hidden");
  accueilBox.classList.add("hidden");
  skillsBox.classList.add("hidden");
  contactBox.classList.add("hidden");
  worksBox.classList.remove("hidden");
  msgConfirm.classList.add("hidden");

  aboutLink.classList.remove("green");
  homeLink.classList.remove("green");
  skillsLink.classList.remove("green");
  contactLink.classList.remove("green");
  worksLink.classList.add("green");
});

contactLink.addEventListener("click", () => {
  aboutBox.classList.add("hidden");
  accueilBox.classList.add("hidden");
  skillsBox.classList.add("hidden");
  worksBox.classList.add("hidden");
  contactBox.classList.remove("hidden");
  msgConfirm.classList.add("hidden");

  aboutLink.classList.remove("green");
  homeLink.classList.remove("green");
  skillsLink.classList.remove("green");
  worksLink.classList.remove("green");
  contactLink.classList.add("green");
});

// Ecouteur du bouton "contact me"
contactMe.addEventListener("click", () => {
  accueilBox.classList.add("hidden");
  contactBox.classList.remove("hidden");

  homeLink.classList.remove("green");
  contactLink.classList.add("green");
});

// Ecouteurs sur le changement de langue de la page
langFr.addEventListener("click", () => {
  toEnglish();
});

langEn.addEventListener("click", () => {
  toFrench();
});

function toEnglish() {
  langFr.classList.add("hidden");
  langEn.classList.remove("hidden");
  langEn.classList.add("green");
  langFr.classList.remove("green");

  indexText.innerHTML = `Hi,<br/>I'm Thibault,<br/>web developer.<span class="tagsOther">&nbsp;&lt;/h1&gt;</span>`;
  indexSubText.innerHTML = "Full Stack Developer / WordPress / More to come";
  contactMe.innerHTML = "CONTACT ME";

  aboutMe.innerHTML = "About me";
  aboutP.innerHTML = `Currently in a 7 months traineeship with <a id="simplonLink" href="https://simplon.co/" target="_blank" title="To the Simplon.co website!">Simplon</a>, I'm learning what it takes to be a web developer.
    <br/>
    <br/>
    I'm learning all the basic languages: HTML, CSS, Javascript, PHP/MySQL, the concepts of UX/UI and making wireframes and mockups, using the AGILE methods, and of course, learning to use the softwares needed by web developers.
    <br/>
    <br/>
    I'll be looking to do an internship in a company from Febuary the 15th to April the 9th in 2021 to finish and validate my traineeship, and to obtain in the end my web developer certification.
    <br/>
    <br/>
    My long term goals are yet to be defined. It would either be finding a company to work, and gain experience as a web developer with, or do another traineeship after this one, to perfect my skills and maybe learn new ones as an app developer for exemple.`;

  skillsAndExp.innerHTML = "My Skills and Experience";
  skillsP.innerHTML = `I'm learning to use both Front-End (HTML, CSS, JavaScript) languages, and just as well as Back-End languages (JavaScript, PHP MySQL), but also some Frameworks (Bootstrap, Symfony, Angular).
    <br/>
    <br/>
    I can also use website interface designing tools like Figma, and I am learning to use CMS softwares like WordPress or SalesForce.
    <br/>
    <br/>
    In a couple of months, when the time to find my internship will come, I'll be a full fledged Full-Stack Junior Web Developer, but will not stop to try and learn more languages and improve my skills!`;

  contact_Me.innerHTML = "Contact me<br/>";
  contactP.innerHTML =
    "If you are interested to contact me, to offer me an opportunity for a traineeship, or maybe for some work, please by all means feel free to contact me!";

  inputName.placeholder = "Name";
  inputEmail.placeholder = "Email";
  inputSubject.placeholder = "Subject";
  inputMessage.placeholder = "Message";
  sendButton.value = "SEND";
  msgConfirm.innerHTML =
    "Thanks, your mail has been sent, I'll be sure to anwser it shortly!";
}

function toFrench() {
  langFr.classList.remove("hidden");
  langEn.classList.add("hidden");
  langEn.classList.remove("green");
  langFr.classList.add("green");

  indexText.innerHTML = `Bonjour,<br/>Moi c'est Thibault,<br/>développeur Web.<span class="tagsOther">&nbsp;&lt;/h1&gt;</span>`;
  indexSubText.innerHTML =
    "Développeur Full-Stack / WordPress / Et plus à venir";
  contactMe.innerHTML = "ME CONTACTER";

  aboutMe.innerHTML = "À propos de moi";
  aboutP.innerHTML = `En pleine formation avec <a id="simplonLink" href="https://simplon.co/" target="_blank" title="Vers le site de Simplon.co!">Simplon</a>, je me reconvertis en Déveoppeur Web.
    <br/>
    <br/>
    Je suis en train d'apprendre tous les langages nécessaires: HTML, CSS, Javascript, PHP/MySQL, le concept de UX/UI et réaliser des maquettes et wireframes, utiliser les méthodes AGILES, et bien entendu, apprendre a utiliser les logiciels prisés par les développeurs.
    <br/>
    <br/>
    Je suis à la recherche d'un stage de deux mois, du 15 Février au 9 Avril 2021 pour finir, et valider ma certification, et obtenir un titre reconnu de niveau 5 (BAC +2) de développeur Web et Web Mobile.
    <br/>
    <br/>
    Je suis encore en train de réfléchir à mes buts à long terme. Mais cela serait très certainement soit rentrer dans une entreprise directement pour aquérir de l'expérience et appliquer ce que j'ai appris, ou bien enchainer sur une autre formation pour me spécialiser, éventuellement en développement d'applications par exemple.`;

  skillsAndExp.innerHTML = "Mon Expérience et mes Compétences";
  skillsP.innerHTML = `Je suis en train d'apprendre aussi bien des langages Front-End (HTML, CSS, JavaScript) que Back-End (JavaScript, PHP MySQL), mais aussi des Frameworks (Bootstrap, Symfony, Angular).
    <br/>
    <br/>
    J'ai aussi appris à utiliser des outils de création de maquettes/wireframe, tel que Figma, et je suis en train d'apprendre à utiliser des CMS comme WordPress et SalesForce.
    <br/>
    <br/>
    D'ici quelques mois, quand l'heure de faire mon stage aura sonnée, je serais un véritable développeur Full-Stack, mais cela ne va pas m'arrêter, ou m'empêcher de découvrir d'autres langages!`;

  contact_Me.innerHTML = "Me contacter<br/>";
  contactP.innerHTML =
    "Si vous êtes intéressés pour me contacter, pour m'offrir une opportunité de stage, peut-être même un emploi, vous êtes plus que bienvenus pour m'envoyer un message!";

  inputName.placeholder = "Nom";
  inputEmail.placeholder = "Email";
  inputSubject.placeholder = "Sujet";
  inputMessage.placeholder = "Message";
  sendButton.value = "ENVOYER";
  msgConfirm.innerHTML =
    "Merci, votre mail est bien parti, je vous contacterai sous peu!";
}

sendButton.addEventListener("click", (e) => {
  const formData = new FormData(document.getElementById("contactFormForm"));
  contactRequest(formData);
  e.preventDefault();
});

function contactRequest(data) {
  let request = new XMLHttpRequest();
  request.open("POST", "http://developer-road.com/PHP/contact.php", true);
  request.send(data);

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      containerConfirmation.classList.remove("hidden");
      msgConfirm.classList.remove("hidden");
      contactBox.classList.add("hidden");

      // reset les 4 inputs ici?
      inputName.value = "";
      inputEmail.value = "";
      inputSubject.value = "";
      inputMessage.value = "";
    }
  };
}

let gitHubBataille = document.getElementById("github-bataille");
let onlineBataille = document.getElementById("online-bataille");

gitHubBataille.addEventListener("click", () => {
  open("https://github.com/Thibault-Camuset/simplon_batailleNavale", "_blank");
});

onlineBataille.addEventListener("click", () => {
  open("https://developer-road.com/Bataille-Spatiale/", "_blank");
});
