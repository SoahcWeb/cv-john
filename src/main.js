import "./style.css";
import 'remixicon/fonts/remixicon.css'


document.querySelector("#app").innerHTML = `
  <div class="cv-container">
    <h1 class="cv-title">John Doe</h1>
    <p class="cv-subtitle">Développeur Web</p>

    <div class="cv-section">
      <h2 class="cv-section-title">À propos de moi</h2>
      <p class="cv-text">
        Passionné par le développement web, j'ai de l'expérience en JavaScript, Vite et Tailwind CSS.
      </p>
    </div>

    <div class="cv-section">
    <i class="ri-building-4-fill"></i>
      <h2 class="cv-section-title">Compétences</h2>
      <ul class="cv-list">
        <li>JavaScript, HTML, CSS</li>
        <li>Vite, Tailwind CSS</li>
        <li>Node.js, Express</li>
      </ul>
    </div>

    <div class="cv-section">
      <h2 class="cv-section-title">Contact</h2>
      <p class="cv-text">📧 john.doe@email.com</p>
      <p class="cv-text">
        🔗 <a href="https://linkedin.com/in/johndoe" class="cv-link">LinkedIn</a>
      </p>
    </div>
  </div>
`;


