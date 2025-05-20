import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white border-b border-gray-800">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Emre YUKSEL</h1>
            <h2 className="text-2xl md:text-3xl mb-4">Développeur Full Stack</h2>
            <p className="text-xl text-gray-300 mb-8">
              Expert en développement web et gestion de projet, je combine expertise technique et vision stratégique pour créer des solutions digitales innovantes
            </p>
            <div className="flex justify-center mb-12">
              <a 
                href="/emre_yuksel_cv_1.pdf" 
                 target="_blank"
                className="group relative inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:bg-indigo-700"
                download="emre_yuksel_cv_1.pdf"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={20} />
                  <span className="font-medium">Télécharger mon CV</span>
                  
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:emre.yuksel.nantes@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors">
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a href="tel:0750390390" className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors">
                <Phone size={20} />
                <span>07 50 39 03 90</span>
              </a>
              <a href="https://github.com/emre-yuksel42" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/emre-yuksel-5995ab177/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Mes Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-indigo-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Développement Backend</h3>
              <p className="text-gray-300 mb-6">Création d'APIs REST robustes et scalables avec Node.js et Express</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Architecture REST</li>
                <li>• Performance optimisée</li>
                <li>• Tests automatisés</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-indigo-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Gestion de Projet</h3>
              <p className="text-gray-300 mb-6">Coordination et suivi de projets digitaux de A à Z</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Méthodologie Agile</li>
                <li>• Suivi client</li>
                <li>• Optimisation des processus</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-indigo-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">Solutions Web</h3>
              <p className="text-gray-300 mb-6">Développement de solutions web sur mesure pour votre entreprise</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Sites responsive</li>
                <li>• Applications web</li>
                <li>• Intégration API</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Compétences</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-indigo-400">Compétences Techniques</h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express.js', 'API REST', 'JavaScript', 'Git', 'CI/CD'].map((skill) => (
                  <span key={skill} className="bg-gray-700 px-4 py-2 rounded-full text-gray-200 text-sm font-medium border border-gray-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-indigo-400">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Gestion de projet', 'Communication', 'Travail d\'équipe', 'Résolution de problèmes'].map((skill) => (
                  <span key={skill} className="bg-gray-700 px-4 py-2 rounded-full text-gray-200 text-sm font-medium border border-gray-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Contact</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-indigo-400" />
              <h3 className="font-semibold mb-2 text-white">Email</h3>
              <a href="mailto:emre.yuksel.nantes@gmail.com" className="text-indigo-400 hover:text-indigo-300">
                emre.yuksel.nantes@gmail.com
              </a>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-indigo-400" />
              <h3 className="font-semibold mb-2 text-white">Téléphone</h3>
              <a href="tel:0750390390" className="text-indigo-400 hover:text-indigo-300">
                07 50 39 03 90
              </a>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-4 text-indigo-400">📍</div>
              <h3 className="font-semibold mb-2 text-white">Localisation</h3>
              <p className="text-gray-300">Paris 75010</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Emre YUKSEL - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}

export default App;