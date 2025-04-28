<script setup>

import {
  faCss3,
  faDocker,
  faGit,
  faGolang,
  faHtml5,
  faJava,
  faJs,
  faLinux,
  faNode,
  faPython,
  faRust
} from '@fortawesome/free-brands-svg-icons'
import {faCode, faDatabase, faFlag, faServer} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div class="technos card">
    <h2>Compétences</h2>
    <div class="skills-section">
      <h3>Langages de programmation</h3>
      <div class="skills-grid">
        <div class="skill-item">
          <FontAwesomeIcon :icon="faJava" class="text-emerald-600" size="2x"/>
          <p>Java/Kotlin</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faRust" class="text-emerald-600" size="2x"/>
          <p>Rust</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faGolang" class="text-emerald-600" size="2x"/>
          <p>Go</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faJs" class="text-emerald-600" size="2x"/>
          <p>JavaScript/TypeScript</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faHtml5" class="text-emerald-600" size="2x"/>
          <p>HTML</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faCss3" class="text-emerald-600" size="2x"/>
          <p>CSS</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faPython" class="text-emerald-600" size="2x"/>
          <p>Python</p>
        </div>
      </div>
    </div>

    <div class="skills-section">
      <h3>Technologies</h3>
      <div class="skills-grid">
        <div class="skill-item">
          <FontAwesomeIcon :icon="faDatabase" class="text-emerald-600" size="2x"/>
          <p>MongoDB</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faDatabase" class="text-emerald-600" size="2x"/>
          <p>MySQL/MariaDB/Oracle</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faDocker" class="text-emerald-600" size="2x"/>
          <p>Podman/Docker/QEMU</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faServer" class="text-emerald-600" size="2x"/>
          <p>Spring Boot</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faNode" class="text-emerald-600" size="2x"/>
          <p>Node.js</p>
        </div>
      </div>
    </div>

    <div class="skills-section">
      <h3>Outils informatiques</h3>
      <div class="skills-grid">
        <div class="skill-item">
          <FontAwesomeIcon :icon="faGit" class="text-emerald-600" size="2x"/>
          <p>Git/Gitlab/Github</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faCode" class="text-emerald-600" size="2x"/>
          <p>CI/CD</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faCode" class="text-emerald-600" size="2x"/>
          <p>IDE Jetbrains/VSCode</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faLinux" class="text-emerald-600" size="2x"/>
          <p>Linux</p>
        </div>
      </div>
    </div>

    <div class="skills-section">
      <h3>Langues</h3>
      <div class="skills-grid">
        <div class="skill-item">
          <FontAwesomeIcon :icon="faFlag" class="text-emerald-600" size="2x"/>
          <p>Français (natif)</p>
        </div>
        <div class="skill-item">
          <FontAwesomeIcon :icon="faFlag" class="text-emerald-600" size="2x"/>
          <p>Anglais (B2)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.technos {
  margin-top: 20px;
}

.skills-section {
  margin-bottom: 30px;
}

.skills-section h3 {
  color: var(--color-emerald-600);
  margin-bottom: 15px;
  border-bottom: 1px solid var(--color-emerald-500);
  padding-bottom: 5px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.skill-item:hover {
  background-color: var(--color-emerald-900);
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.skill-item p {
  margin-top: 10px;
  font-size: 0.9rem;
}
</style>