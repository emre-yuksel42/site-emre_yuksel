import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Configuration
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'public')));

// Data
const pageData = {
  hero: {
    name: 'Emre YUKSEL',
    title: 'Développeur Web Full Stack',
    description: 'Spécialisé dans le développement d\'applications web modernes et la création d\'APIs REST performantes',
    cta: 'Découvrir mes services'
  },
  services: [
    {
      title: 'Développement Backend',
      description: 'Création d\'APIs REST robustes et scalables avec Node.js et Express',
      features: ['Architecture REST', 'Performance optimisée', 'Tests automatisés']
    },
    {
      title: 'Gestion de Projet',
      description: 'Coordination et suivi de projets digitaux de A à Z',
      features: ['Méthodologie Agile', 'Suivi client', 'Optimisation des processus']
    },
    {
      title: 'Solutions Web',
      description: 'Développement de solutions web sur mesure pour votre entreprise',
      features: ['Sites responsive', 'Applications web', 'Intégration API']
    }
  ],
  skills: {
    technical: ['Node.js', 'Express.js', 'API REST', 'JavaScript', 'SEO','PHP','Git', 'CI/CD'],
    soft: ['Gestion de projet', 'Communication', 'Travail d\'équipe', 'Résolution de problèmes']
  },
  contact: {
    email: 'emre.yuksel.nantes@gmail.com',
    phone: '07 50 39 03 90',
    location: 'Paris 75010'
  }
};

// Routes
app.get('/', (req, res) => {
  res.render('index', { data: pageData });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});