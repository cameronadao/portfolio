  const translations = {
    fr: {
      contactTitle: "Contact - ITWithCam",
      navAccueil: "Accueil",
      navProjets: "Projets",
      navServices: "Services",
      navApropos: "À Propos",
      navContact: "Contact",
      // À propos
      h1: "À PROPOS",
      p: "Moi c’est Cameron — développeur web & mobile iOS. Après plusieurs années dans le business development, j’ai décidé de faire un virage vers le code pour mettre la tech au service des entrepreneurs, startups et créatifs. Formé en développement full stack, design UI/UX et automatisation, je conçois des sites web modernes, des apps iOS et des outils sur-mesure, pensés pour la performance, l’efficacité et l’expérience utilisateur. Mon objectif : créer des solutions simples, utiles, bien codées. Développons quelque chose d’unique.",
      h2: "Ce que je fais ?",
      li1: "Des sites vitrines responsives (HTML, CSS, JS, Bootstrap)",
      li2: "Des apps web modernes avec React & Node.js",
      li3: "Des apps iOS natives avec Swift",
      li4: "Des automatisations intelligentes avec Python / OpenAI / no-code",
      // Contact
      contactH1: "CONTACT",
      contactH2: "Parlons de votre projet",
      labelNom: "Nom",
      labelEmail: "Email",
      labelTel: "Téléphone",
      labelMessage: "Message",
      yourname: "Votre nom",
      youremail: "Votre email",
      yournumber: "Votre numéro",
      yourproject: "Décrivez votre besoin...",
      btnEnvoyer: "Envoyer",
      // Projets
      projet: "PROJETS",
      description: "Voici une sélection de mes projets réalisés, allant des sites web aux applications mobiles, en passant par des tableaux de bord et des systèmes de gestion. Chaque projet reflète mes compétences en développement et en design.",
      projet1: "OnTourWithCam",
      projet2: "Le Café de Camille",
      projet3: "ZenFlow",
      projet4: "TodoLife",
      projet5: "BudgetView",
      projet6: "SkillSwap",
      projet7: "SpendWise",
      projet8: "AskMyDev",
      typeprojet1: "Blog Personnel",
      typeprojet2: "Site vitrine",
      typeprojet3: "Landing page responsive",
      typeprojet4: "Appli web de gestion de tâches",
      typeprojet5: "Dashboard React de gestion budgétaire.",
      typeprojet6: "Plateforme d’échange de compétences",
      typeprojet7: "Application iOS Swift de suivi de finances",
      typeprojet8: "Assistant IA pour développeurs",
      technoprojet1: "Technologies : WordPress",
      technoprojet2: "Technologies : HTML5 + CSS3",
      technoprojet3: "Technologies : Figma + HTML/CSS avancé + Bootstrap 5",
      technoprojet4: "Technologies : HTML5 + CSS3 + JavaScript (ES6)",
      technoprojet5: "Technologies : React.js + Redux + Charts.js",
      technoprojet6: "Technologies :<br> <strong>Frontend</strong> : React.js + Axios + React Router<br> <strong>Backend</strong> : Node.js + Express.js<br> <strong>Base de données</strong> : MongoDB (via Mongoose)<br> <strong>API</strong> : RESTful API sécurisée<br> <strong>Auth</strong> : JWT (JSON Web Tokens) pour les connexions<br> <strong>Déploiement</strong> : Render.com (gratuit) pour API + Vercel pour Frontend<br><strong>Hébergement base de données</strong> : MongoDB Atlas (gratuit)",
      technoprojet7: "Technologies : Swift + SwiftUI + CoreData",
      technoprojet8: "Technologies : Python + API OpenAI + Frontend HTML/CSS/JS simple",
      button: "Voir le projet",
      // Footer
      footerNav: "Navigation",
      footerContact: "Contact"
    },
    en: {
      contactTitle: "Contact - ITWithCam",
      navAccueil: "Home",
      navProjets: "Projects",
      navServices: "Services",
      navApropos: "About",
      navContact: "Contact",
      // About
      h1: "ABOUT",
      p: "My name is Cameron - web & iOS mobile developer. After several years in business development, I decided to make a shift towards coding to put tech at the service of entrepreneurs, startups, and creatives. Trained in full stack development, UI/UX design, and automation, I design modern websites, iOS apps, and custom tools, designed for performance, efficiency, and user experience. My goal: to create simple, useful, well-coded solutions. Let's develop something unique.",
      h2: "What do I do?",
      li1: "Responsive showcase sites (HTML, CSS, JS, Bootstrap)",
      li2: "Modern web apps with React & Node.js",
      li3: "Native iOS apps with Swift",
      li4: "Intelligent automations with Python / OpenAI / no-code",
      // Contact
      contactH1: "CONTACT",
      contactH2: "Let's talk about your project",
      labelNom: "Name",
      labelEmail: "Email",
      labelTel: "Phone",
      labelMessage: "Message",
      yourname: "Your name",
      youremail: "Your email",
      yournumber: "Your number",
      yourproject: "Describe your need...",
      btnEnvoyer: "Send",
      // Projects
      projet: "PROJECTS",
      description: "Here is a selection of my completed projects, ranging from websites to mobile applications, including dashboards and management systems. Each project reflects my skills in development and design.",
      projet1: "OnTourWithCam",
      projet2: "Camille's Café",
      projet3: "ZenFlow",
      projet4: "TodoLife",
      projet5: "BudgetView",
      projet6: "SkillSwap",
      projet7: "SpendWise",
      projet8: "AskMyDev",
      typeprojet1: "Personal Blog",
      typeprojet2: "Showcase website",
      typeprojet3: "Responsive landing page",
      typeprojet4: "Task management web app",
      typeprojet5: "React-based budget management dashboard",
      typeprojet6: "Skill exchange platform",
      typeprojet7: "iOS app for finance tracking",
      typeprojet8: "AI assistant for developers",
      technoprojet1: "Technologies: WordPress",
      technoprojet2: "Technologies: HTML5 + CSS3",
      technoprojet3: "Technologies: Figma + Advanced HTML/CSS + Bootstrap 5",
      technoprojet4: "Technologies: HTML5 + CSS3 + JavaScript (ES6)",
      technoprojet5: "Technologies: React.js + Redux + Charts.js",
      technoprojet6: "Technologies: <br><strong>Frontend</strong>: React.js + Axios + React Router<br><strong>Backend</strong>: Node.js + Express.js<br><strong>Database</strong>: MongoDB (via Mongoose)<br><strong>API</strong>: Secure RESTful API<br><strong>Auth</strong>: JWT (JSON Web Tokens)<br><strong>Deployment</strong>: Render.com (free) for API + Vercel for frontend<br><strong>Database Hosting</strong>: MongoDB Atlas (free)",
      technoprojet7: "Technologies: Swift + SwiftUI + CoreData",
      technoprojet8: "Technologies: Python + OpenAI API + Simple HTML/CSS/JS frontend",
      button: "View project",
      // Footer
      footerNav: "Navigation",
      footerContact: "Contact"
    }
  };

  const switchLang = (lang) => {
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      if (translations[lang] && translations[lang][key]) {
        if (el.placeholder !== undefined && el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key]; // innerHTML pour supporter les <br> dans les valeurs
        }
      }
    });

    // Mise à jour du titre
    if (translations[lang].contactTitle) {
      document.title = translations[lang].contactTitle;
    }

    localStorage.setItem("preferredLanguage", lang);
    const langSwitcher = document.getElementById("lang-switcher");
    if (langSwitcher) langSwitcher.value = lang;
  };

  document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    const userLang = navigator.language.startsWith("en") ? "en" : "fr";
    switchLang(savedLanguage || userLang);

    const langSwitcher = document.getElementById("lang-switcher");
    if (langSwitcher) {
      langSwitcher.addEventListener("change", (e) => {
        switchLang(e.target.value);
      });
    }
  });
