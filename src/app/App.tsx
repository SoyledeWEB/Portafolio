import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

function App() {
  const personalInfo = {
    name: "Néstor Ledesma",
    role: "UX/UI Designer | Front-end Developer",
    description: "UX/UI Designer and Front-end Developer with over 9 years of experience designing and building user-centered digital products. Strong background in wireframing, prototyping, responsive web design, and front-end development. Experienced in SEO optimization, performance improvement, and cross-functional collaboration with designers, developers, and stakeholders.",
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
      description: "UX/UI of a sports prediction platform for the 2026 World Cup, focusing on social experience, gamification and increased engagement through rankings and groups.",
      technologies: ["Figma", "User Flows", "Design Systems", "UX/UI"],
      url: "https://www.behance.net/gallery/246046665/Polla-Mundialista-RCN-UX-UI"
    },
    {
      id: 2,
      name: "Landing RCN Radios Marcas",
      description: "Creation of a landing page for RCN Radios, integrating an attractive visual design with functionality and usability to promote the different brands of the broadcaster.",
      technologies: ["Design Systems", "UI Kits", "Figma", "React", "tailwind CSS"],
      url: "https://www.behance.net/gallery/246044955/RCN-Radio-Marcas-Landing-Page-UI-UX-Design-"
    },
    {
      id: 3,
      name: "Media Kit RCN",
      description: "Design and layout of a media kit for RCN SITE, highlighting key metrics, advertising formats and success cases to attract advertisers and media agencies.",
      technologies: ["WordPress", "Elementor", "JavaScript", "Landing Pages", "UX/UI"],
      url: "#"
    },
    {
      id: 4,
      name: "Smoove",
      description: "Smoove is a premium moving service in Melbourne focused on offering stress-free, personalized and sustainable experiences.",
      technologies: ["Figma", "Design Systems", "Prototyping", "WordPress", "SEO"],
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
        "Design and development of UX/UI interfaces for high-traffic digital products",
        "Creation of wireframes, prototypes and responsive layouts",
        "Optimization of sites for speed, scalability and SEO",
        "Guarantee of technical viability between design and development",
        "Collaboration with agile teams (Scrum), developers and QA"
      ]
    },
    {
      id: 2,
      company: "LEO BURNETT",
      role: "Diseñador Web Senior",
      period: "Feb 2018 – Ago 2018",
      description: [
        "Main Client: Banco Davivienda",
        "Design and development of digital assets for advertising campaigns",
        "Maintenance and visual adaptation of digital assets"
      ]
    },
    {
      id: 3,
      company: "ASYLUM MARKETING",
      role: "Webmaster",
      period: "Feb 2018 – Ago 2018",
      description: [
        "Design of websites, mailings, landings and digital pieces",
        "Web layout and adaptation of digital campaigns",
        "Management of ad placements: Google Ads, DBM and Facebook Ads"
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
          <p>© 2025 Néstor Ledesma. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
