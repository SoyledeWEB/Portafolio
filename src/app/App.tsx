import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

function App() {
  const personalInfo = {
    name: "Néstor Ledesma",
    role: "UX/UI Designer · Front-end Developer",
    description: "Diseñador UX/UI y Front-end con más de 10 años de experiencia creando productos digitales centrados en el usuario para marcas de alto impacto en sectores como medios, banca, consumo masivo y marketing digital. Especialista en arquitectura de información, wireframes, prototipado y maquetación responsive, con fuerte criterio visual y técnico para garantizar viabilidad, rendimiento y escalabilidad.",
    imageUrl: "/Portafolio/soylede.png",
    contact: {
      phone: "+57 313 300 7194",
      email: "nestor.ledezma1988@gmail.com",
      linkedin: "https://www.linkedin.com/in/nestorledesma"
    }
  };

  const skillCategories = [
    {
      title: "UX / UI",
      skills: [
        "User Flows",
        "Wireframes",
        "Prototipado",
        "Design Systems",
        "UI Kits",
        "Usabilidad",
        "Mobile First",
        "Responsive Design"
      ]
    },
    {
      title: "Front-end",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Bootstrap",
        "Tailwind CSS",
        "WordPress",
        "SEO Técnico",
        "Performance"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Liderazgo",
        "Comunicación",
        "Trabajo en equipo",
        "Resolución de problemas",
        "Pensamiento estratégico",
        "Metodologías ágiles"
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      name: "Polla Mundialista RCN Televisión",
      description: "UX/UI de plataforma de predicciones deportivas para Mundial 2026, con enfoque en experiencia social, gamificación y aumento de engagement mediante rankings y grupos.",
      technologies: ["Figma", "User Flows", "Design Systems", "UX/UI"],
      url: "https://www.behance.net/gallery/246046665/Polla-Mundialista-RCN-UX-UI"
    },
    {
      id: 2,
      name: "Landing RCN Radios Marcas",
      description: "Creación de landing page para RCN Radios, integrando diseño visual atractivo con funcionalidad y usabilidad para promover las diferentes marcas de la emisora.",
      technologies: ["Design Systems", "UI Kits", "Figma", "React", "tailwind CSS"],
      url: "https://www.behance.net/gallery/246044955/RCN-Radio-Marcas-Landing-Page-UI-UX-Design-"
    },
    {
      id: 3,
      name: "Media Kit RCN",
      description: "Diseño y maquetación de media kit para RCN SITE, destacando métricas clave, formatos publicitarios y casos de éxito para atraer anunciantes y agencias de medios.",
      technologies: ["WordPress", "Elementor", "JavaScript", "Landing Pages", "UX/UI"],
      url: "#"
    },
    {
      id: 4,
      name: "Smoove",
      description: "Smoove es un servicio premium de mudanzas en Melbourne enfocado en ofrecer experiencias sin estrés, personalizadas y sostenibles.",
      technologies: ["Figma", "Design Systems", "Prototipado", "WordPress", "SEO"],
      url: "https://www.behance.net/gallery/246048773/Smoove-es-un-servicio-premium-de-mudanzas"
    }
  ];

  const experiences = [
    {
      id: 1,
      company: "RCN TELEVISIÓN",
      role: "Diseñador Web Senior · Front-end",
      period: "Oct 2018 – Actualidad",
      description: [
        "Diseño y desarrollo de interfaces UX/UI para productos digitales de alto tráfico",
        "Creación de wireframes, prototipos y maquetación responsive",
        "Optimización de sitios para velocidad, escalabilidad y SEO",
        "Garantía de viabilidad técnica entre diseño y desarrollo",
        "Colaboración con equipos ágiles (Scrum), desarrolladores y QA"
      ]
    },
    {
      id: 2,
      company: "LEO BURNETT",
      role: "Diseñador Web Senior",
      period: "Feb 2018 – Ago 2018",
      description: [
        "Cliente principal: Banco Davivienda",
        "Diseño y desarrollo de piezas digitales para campañas publicitarias",
        "Mantenimiento y adaptación visual de activos digitales"
      ]
    },
    {
      id: 3,
      company: "ASYLUM MARKETING",
      role: "Webmaster",
      period: "Feb 2018 – Ago 2018",
      description: [
        "Diseño de sitios web, mailings, landings y piezas digitales",
        "Maquetación web y adaptación de campañas digitales",
        "Gestión de pauta: Google Ads, DBM y Facebook Ads"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F8FA] py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero Section */}
        <Hero 
          name={personalInfo.name}
          role={personalInfo.role}
          description={personalInfo.description}
          imageUrl={personalInfo.imageUrl}
          contact={personalInfo.contact}
        />

        {/* Skills Section */}
        <Skills categories={skillCategories} />

        {/* Projects Section */}
        <Projects projects={projects} />

        {/* Experience Section */}
        <Experience experiences={experiences} />

        {/* Footer */}
        <footer className="text-center py-8 text-gray-600 text-sm">
          <p>© 2025 Néstor Ledesma. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
