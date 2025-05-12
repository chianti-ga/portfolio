<script setup>
import {onMounted} from 'vue';
import Menubar from 'primevue/menubar';
import Timeline from 'primevue/timeline';
import Button from 'primevue/button';
import ScrollTop from 'primevue/scrolltop';
import Tech from "@/components/Tech.vue";

onMounted(() => {
  const breadcrumb = document.querySelector('.breadcrumb-container');
  if (breadcrumb) {
    document.body.style.paddingTop = `${breadcrumb.offsetHeight}px`;
  }
});

const items = [
  {label: 'Accueil', url: '#top'},
  {label: 'À propos', url: '#about'},
  {label: 'Stack', url: '#stack'},
];

const formations = [
  {
    label: "BUT Informatique",
    date: "2024 - Présent",
    description: "Étudiant au BUT Informatique à l'IUT de Nantes."
  },
  {
    label: "Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable",
    date: "2024",
    description: "Diplôme obtenu avec Mention Bien au Lycée François-Truffaut, Challans."
  },
  {
    label: "Brevet d'Initiation Aéronautique",
    date: "2023",
    description: "Obtention avec Mention Très Bien au Lycée François-Truffaut, Challans."
  },
  {
    label: "Diplôme National du Brevet",
    date: "2021",
    description: "Diplôme obtenu avec Mention Bien au Collège Pays De Monts, Saint-Jean-de-Monts."
  }
];

const projets = [
  {
    label: "Développement Back-End en Java",
    date: "",
    description: "Création de services en Java avec Spring Boot, Hibernate et Tomcat, incluant l'exploitation d'API et l'intégration de chatbots sur différentes plateformes (Discord, Matrix.org).",
    githubUrl: "https://github.com/chianti-ga/kanei"
  },
  {
    label: "Application Launcher en Java",
    date: "",
    description: "Développement d'un lanceur d'application en Java utilisant JavaFX et Swing.",
    githubUrl: "https://github.com/chianti-ga/botcore"
  },
  {
    label: "Développement Full Stack en Rust",
    date: "",
    description: "Conception d'applications combinant back-end (Actix Web) et front-end (egui & WebAssembly) en Rust.",
    githubUrl: "https://github.com/chianti-ga/website"
  },
  {
    label: "Chatbot pour WhatsApp",
    date: "",
    description: "Réalisation d'un chatbot intelligent en JavaScript et TypeScript avec NodeJS.",
    githubUrl: "https://github.com/chianti-ga/bot-whatsapp"
  },
  {
    label: "Homelab",
    date: "",
    description: "Ce homelab, orchestré via Portainer, regroupe les services suivants:\n" +
        "LibreChat, " +
        "Immich, " +
        "Uptime Kuma, " +
        "Syncthing, " +
        "Conduwuit, " +
        "Pingvin, " +
        "Jupyter Notebook, " +
        "OpenSpeedTest",
    githubUrl: "https://uptime.skitou.fr/"
  }
];


const postes = [
  {
    label: "Assistant Paysagiste",
    company: "Artisan GALLY",
    location: "Saint-Jean-de-Monts",
    date: "2017 - 2024",
    description: "Participation à la rénovation de toit, à l’élagage et à la gestion des espaces verts, incluant l’évacuation des déchets verts."
  },
  {
    label: "Saisonnier Vendeur sur Marché",
    company: "Marché local (Saint-Jean-de-Monts)",
    location: "Saint-Jean-de-Monts",
    date: "2017 - 2024",
    description: "Gestion des stocks, accueil personnalisé des clients et vente directe sur le marché."
  },
  {
    label: "CDD Saisonnier en frais libre-service",
    company: "Super U",
    location: "Saint-Jean-de-Monts",
    date: "2025",
    description: "CDD Saisonnier en frais libre-service."
  }
];

</script>
<template>
  <div class="breadcrumb-container"
       style="position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; background-color: white;">
    <Menubar :model="items" class="menubar
"/>
  </div>
  <header>
    <div id="pcard">
      <img alt="photo" src="/photo.jpg"/>
      <div class="text-container">
        <h1>Chianti GALLY</h1>
        <h3>Étudiant au BUT Informatique de l’IUT de Nantes</h3>

      </div>
    </div>

    <div id="about">
      <p>
        Étudiant en BUT Informatique passionné, je maîtrise divers langages (Java, Kotlin, Rust) et la
        création d'applications et de solutions numériques.
      </p>
    </div>

    <div class="text-center cv-btn" style="margin-top: 1em;">
      <Button as="a" href="Chianti_GALLY-CV.pdf" label="Mon CV" rel="noopener" target="_blank"/>
      <Button as="a" href="mailto:chiantigally@gmail.com" label="Me contacter" rel="noopener" target="_blank"/>
    </div>


  </header>

  <!--<div id="top-content">
    <Tech></Tech>
  </div>-->

  <div id="content">
    <div id="right-column">

      <div id="cv-formation" class="card">
        <h2>Formations</h2>
        <Timeline :value="formations">

          <template #opposite="formaItem">
            <small class="text-zinc-400">{{ formaItem.item.date }}</small>
          </template>

          <template #content="formaItem">
            <div class="text-container">
              <h3>{{ formaItem.item.label }}</h3>
              <small class=" text-emerald-500">{{ formaItem.item.description }}</small>
            </div>
          </template>
        </Timeline>


        <h2>Activités professionnelles</h2>

        <Timeline :value="postes" class="timeline">

          <template #opposite="posteItem">
            <small class="text-zinc-400">{{ posteItem.item.date }}</small>
          </template>

          <template #content="posteItem">
            <div class="text-container">
              <h3>{{ posteItem.item.label }}</h3>
              <small class=" text-emerald-500">{{ posteItem.item.description }}</small>
            </div>
          </template>
        </Timeline>
      </div>


    </div>

    <div id="left-column">
      <div id="cv-projets" class="card">
        <h2>Projets</h2>

        <Timeline :value="projets" align="alternate" class="timeline">
          <template #opposite="projItem">
            <small class="text-zinc-400">{{ projItem.item.date }}</small>
          </template>
          <template #content="projItem">
            <a
                :href="projItem.item.githubUrl"
                class="github-link"
                rel="noopener noreferrer"
                target="_blank"
            >
              <h3>{{ projItem.item.label }}</h3>
            </a>
            <p>{{ projItem.item.description }}</p>
          </template>
        </Timeline>
      </div>
    </div>
  </div>

  <div id="bot-content">
    <Tech id="stack"/>
  </div>

  <ScrollTop/>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Contact</h3>
        <div class="footer-links">
          <a class="footer-link" href="mailto:chiantigally@gmail.com">
            <i class="fa-solid fa-envelope"></i> Email
          </a>
          <a class="footer-link" href="https://github.com/chianti-ga/" rel="noopener" target="_blank">
            <i class="fa-brands fa-github"></i> GitHub
          </a>
          <a class="footer-link" href="https://www.linkedin.com/in/chianti-gally/" rel="noopener" target="_blank">
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>

      <div class="footer-section">
        <h3>Navigation</h3>
        <div class="footer-links">
          <a class="footer-link" href="#top">Accueil</a>
          <a class="footer-link" href="#about">À propos</a>
          <a class="footer-link" href="#stack">Stack</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 Chianti GALLY</p>
    </div>
  </footer>
</template>

<style scoped>

header {
  text-align: center;
  margin: 2em;
  padding: 1em;
  background-color: var(--color-emerald-800);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
}

header .cv-btn {
  display: flex;
  flex-direction: row;
}

.breadcrumb-container {
  backdrop-filter: blur(10px);
  background-color: var(--color-stone-900) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0;
}

.menubar {
  display: flex;
  justify-content: center;
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
}

/* mobile */
@media (max-width: 768px) {
  .menubar {
    justify-content: flex-start;
    padding-left: 1rem;
    align-items: flex-start;
  }

  .breadcrumb-container {
    padding: 0.3rem 0;
  }
}

#content, #top-content, #bot-content {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1em;
  margin: 2em;
}

#right-column,
#left-column {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 50px;
  width: 48%;
}

#top-content :deep(.technos), #bot-content :deep(.technos) {
  width: 100%;
}

/* mobile */
@media (max-width: 768px) {
  #content, #top-content, #bot-content {
    flex-direction: column;
    align-items: center;
  }

  #right-column,
  #left-column {
    width: 100%;
    margin-bottom: 2em;
  }
}

.card {
  padding: 20px;
  margin: 0;
  border: 2px solid transparent;
  border-radius: 10px;
  box-shadow: 0 0 5px var(--color-emerald-600);
}

#pcard img {
  max-width: 150px;
  border-radius: 10px;
  margin-right: 20px;
}

#pcard .text-container {
  display: flex;
  flex-direction: column;
}

#cv-formation .p-timeline {
  margin: 1em;
}

.github-link {
  color: var(--color-emerald-600);
  text-decoration: underline;

  transition: color 0.2s ease;
}

.github-link:hover {
  color: var(--color-emerald-400);
  text-decoration: underline;
}

.footer {
  background-color: var(--color-stone-900);
  color: white;
  padding: 2em;
  margin-top: 2em;
  border-top: 3px solid var(--color-emerald-600);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  margin: 1em;
  min-width: 200px;
}

.footer-section h3 {
  color: var(--color-emerald-400);
  margin-bottom: 1em;
  font-size: 1.2rem;
  position: relative;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 50px;
  height: 2px;
  background-color: var(--color-emerald-600);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.7em;
}

.footer-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.footer-link:hover {
  color: var(--color-emerald-400);
}

.footer-bottom {
  text-align: center;
  margin-top: 2em;
  padding-top: 1.5em;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-links {
    align-items: center;
  }
}
</style>
