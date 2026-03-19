import { Mail, Phone, Linkedin } from 'lucide-react';

interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
}

interface HeroProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  contact: ContactInfo;
}

export function Hero({ name, role, description, imageUrl, contact }: HeroProps) {
  return (
    <section className="w-full bg-white rounded-xl shadow-sm p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img 
              src={imageUrl} 
              alt={name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl mb-2 text-gray-900">{name}</h1>
            <p className="text-lg md:text-xl text-[#000000] mb-6">{role}</p>
            
            {/* Contact Info */}
            <div className="flex flex-col gap-3 mb-6">
              <a 
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 text-gray-700 hover:text-[#000000] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm md:text-base">{contact.phone}</span>
              </a>
              <a 
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-gray-700 hover:text-[#000000] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm md:text-base">{contact.email}</span>
              </a>
              <a 
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-[#000000] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm md:text-base">LinkedIn</span>
              </a>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl mb-3 text-gray-900">Resumen Profesional</h2>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
