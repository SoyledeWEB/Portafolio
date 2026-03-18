import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

function App() {
  const personalInfo = {
    name: "Néstor Ledesma",
    role: "UX/UI Designer · Front-end Developer",
    description: "Diseñador UX/UI y Front-end con más de 10 años de experiencia creando productos digitales centrados en el usuario para marcas de alto impacto en sectores como medios, banca, consumo masivo y marketing digital. Especialista en arquitectura de información, wireframes, prototipado y maquetación responsive, con fuerte criterio visual y técnico para garantizar viabilidad, rendimiento y escalabilidad.",
    imageUrl: "https://images.unsplash.com/photo-1681164314699-38fc76972dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB1eCUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczODQ4MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      name: "Portal RCN Televisión",
      description: "Diseño y desarrollo de interfaces UX/UI para el portal de alto tráfico de RCN Televisión, optimizado para performance y SEO.",
      technologies: ["React", "WordPress", "SEO", "UX/UI", "Responsive"],
      url: "https://www.canalrcn.com"
    },
    {
      id: 2,
      name: "Sistema de Design System",
      description: "Creación de un sistema de diseño escalable con componentes reutilizables y documentación completa para equipos de desarrollo.",
      technologies: ["Design Systems", "UI Kits", "Figma", "React", "Storybook"],
      url: "#"
    },
    {
      id: 3,
      name: "Campañas Banco Davivienda",
      description: "Diseño y desarrollo de piezas digitales y landing pages para campañas publicitarias del Banco Davivienda.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Landing Pages", "UX/UI"],
      url: "#"
    },
    {
      id: 4,
      name: "Optimización Core Web Vitals",
      description: "Proyecto enfocado en mejorar métricas de rendimiento y experiencia de usuario según los estándares de Google.",
      technologies: ["Performance", "SEO", "Core Web Vitals", "Optimization"],
      url: "#"
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
