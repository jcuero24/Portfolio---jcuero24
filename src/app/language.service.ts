import { Injectable, signal } from '@angular/core';

export type PortfolioLanguage = 'es' | 'en';

const copy: Record<PortfolioLanguage, Record<string, string>> = {
  es: {
    'nav.home': 'Inicio', 'nav.about': 'Sobre mí', 'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos', 'nav.contact': 'Contacto', 'nav.education': 'Educación',
    'nav.skills': 'Habilidades', 'nav.openMenu': 'Abrir menú', 'nav.changeLanguage': 'Cambiar idioma a inglés',
    'nav.lightMode': 'Claro', 'nav.darkMode': 'Oscuro', 'nav.enableLight': 'Activar tema claro',
    'nav.enableDark': 'Activar tema oscuro', 'home.badge': 'Desarrollo · Tecnología · Soluciones',
    'home.greeting': 'Hola, soy Juan David Cuero', 'home.role': 'Desarrollador Full-Stack bilingüe',
    'home.experience': 'Mi experiencia', 'home.projects': 'Mis proyectos',
    'home.downloadCv': 'Descargar CV', 'home.cvEnglish': 'CV en inglés', 'home.cvSpanish': 'CV en español',
    'home.imageAlt': 'Foto de Juan David Cuero', 'about.title': 'Sobre mí',
    'about.lead': 'Ingeniero de Software en formación, Desarrollador Full-Stack bilingüe y Profesor de Inglés.',
    'about.body': 'Combino mi formación en ingeniería con experiencia práctica en desarrollo web y enseñanza. He contribuido al diseño y despliegue de una plataforma con Angular y Firebase, integrando datos, automatizando despliegues y creando funciones para captar contactos en una interfaz adaptable y multilingüe. Como profesor, imparto programas de inglés para adultos y grupos corporativos. Me enfoco en comprender las necesidades, comunicar ideas con claridad y aportar soluciones prácticas.',
    'experience.title': 'Experiencia', 'experience.present': 'Presente',
    'experience.fullStack': 'Desarrollador web Full-Stack', 'experience.educator': 'Profesor de Inglés',
    'experience.location': 'Tuluá, Colombia',
    'experience.developmentImageAlt': 'Ilustración de programación y desarrollo de software',
    'experience.teachingImageAlt': 'Ilustración de aprendizaje y enseñanza de idiomas',
    'experience.devDescription': 'Diseñé y desplegué una plataforma web con Angular y Firebase para apoyar las operaciones de Cross Way Center English Academy. Mis responsabilidades incluyeron integrar datos entre áreas, automatizar despliegues e implementar funciones para captar contactos. También desarrollé una interfaz adaptable y multilingüe para facilitar el acceso desde distintos dispositivos. El proyecto recibió la máxima distinción académica: 5.0 / A.',
    'experience.educatorDescription': 'Imparto programas de inglés para estudiantes adultos y grupos corporativos en Cross Way Center English Academy. Acompaño el desarrollo de sus habilidades lingüísticas y adapto la comunicación a diferentes contextos de aprendizaje. También apoyo la presencia digital de la academia y sus canales de contacto, combinando mi experiencia docente con conocimientos de medios y tecnología.',
    'education.title': 'Educación y certificaciones', 'education.training': 'Formación',
    'education.certifications': 'Certificaciones',
    'education.degree': 'Ingeniería de Software — 5.º semestre, Institución Universitaria Politécnico Grancolombiano',
    'education.technical': 'Técnico en Desarrollo de Software — ParqueSoft.TI',
    'education.electronics': 'Técnico en Electrónica Industrial — Institución Educativa Técnico Industrial CSL',
    'education.aptis': 'APTIS, nivel B2 — British Council',
    'education.itsm': 'Certificado técnico en Gestión de Servicios de TI — Pointec',
    'skills.title': 'Habilidades', 'skills.subtitle': 'Tecnologías y herramientas que utilizo',
    'skills.languages': 'Lenguajes', 'skills.frontend': 'Frontend', 'skills.backend': 'Backend y APIs',
    'skills.cloud': 'Cloud y DevOps', 'skills.databases': 'Bases de datos', 'skills.tools': 'Herramientas',
    'projects.title': 'Proyectos', 'projects.badge': 'Proyecto institucional',
    'projects.name': 'Plataforma institucional de aprendizaje y operaciones',
    'projects.description': 'Aplicación web para conectar estudiantes activos, prospectos y áreas administrativas. Diseñé y desplegué la solución con una arquitectura modular y modelos de datos optimizados. El proyecto obtuvo la máxima distinción académica: 5.0 / A.',
    'projects.imageAlt': 'Vista inicial de la plataforma web de Cross Way Center',
    'projects.openDemo': 'Ver sitio en vivo',
    'projects.portfolioBadge': 'Proyecto personal',
    'projects.portfolioName': 'Portafolio personal bilingüe',
    'projects.portfolioDescription': 'Diseñé y desarrollé este portafolio adaptable para presentar mi experiencia, habilidades y proyectos. Incluye cambio entre español e inglés, tema claro y oscuro, navegación por secciones y animaciones sutiles al desplazarse.',
    'projects.portfolioImageAlt': 'Ilustración de un portafolio y documentos de presentación',
    'projects.sourceCode': 'Ver código fuente',
    'contact.title': 'Hablemos',
    'contact.subtitle': '¿Tienes un proyecto o una oportunidad? Puedes contactarme aquí.',
    'contact.email': 'Enviar correo', 'contact.github': 'Ver GitHub', 'contact.linkedin': 'LinkedIn', 'contact.whatsapp': 'WhatsApp',
    'footer.copyright': '© 2026-2027 Juan David Cuero | Todos los derechos reservados',
    'backToTop': 'Volver al inicio'
  },
  en: {
    'nav.home': 'Home', 'nav.about': 'About', 'nav.experience': 'Experience',
    'nav.projects': 'Projects', 'nav.contact': 'Contact', 'nav.education': 'Education',
    'nav.skills': 'Skills', 'nav.openMenu': 'Open menu', 'nav.changeLanguage': 'Switch language to Spanish',
    'nav.lightMode': 'Light', 'nav.darkMode': 'Dark', 'nav.enableLight': 'Enable light theme',
    'nav.enableDark': 'Enable dark theme', 'home.badge': 'Development · Technology · Solutions',
    'home.greeting': 'Hi, I’m Juan David Cuero', 'home.role': 'Bilingual Full-Stack Developer',
    'home.experience': 'My experience', 'home.projects': 'My projects',
    'home.downloadCv': 'Download CV', 'home.cvEnglish': 'Resume in English', 'home.cvSpanish': 'CV in Spanish',
    'home.imageAlt': 'Photo of Juan David Cuero', 'about.title': 'About me',
    'about.lead': 'Software Engineer in Training, Bilingual Full-Stack Developer, and English Teacher.',
    'about.body': 'I combine my engineering training with hands-on experience in web development and teaching. I have contributed to designing and deploying an Angular and Firebase platform, integrating data, automating deployments, and building lead-capture features in a responsive, multilingual interface. As an English teacher, I deliver programs for adult learners and corporate groups. I focus on understanding needs, communicating ideas clearly, and contributing practical solutions.',
    'experience.title': 'Experience', 'experience.present': 'Present',
    'experience.fullStack': 'Full-Stack Web Developer', 'experience.educator': 'English Teacher',
    'experience.location': 'Tuluá, Colombia',
    'experience.developmentImageAlt': 'Illustration of programming and software development',
    'experience.teachingImageAlt': 'Illustration of language learning and teaching',
    'experience.devDescription': 'Designed and deployed an Angular and Firebase web platform to support Cross Way Center English Academy’s operations. Responsibilities included integrating data across areas, automating deployments, and implementing lead-capture features. Also developed a responsive, multilingual interface to improve access across devices. The project received the highest academic distinction: 5.0 / A.',
    'experience.educatorDescription': 'Deliver English programs for adult learners and corporate groups at Cross Way Center English Academy. Support learners as they develop their language skills and adapt communication to different learning contexts. I also support the academy’s digital presence and contact channels, combining teaching experience with knowledge of media and technology.',
    'education.title': 'Education & Certifications', 'education.training': 'Education',
    'education.certifications': 'Certifications',
    'education.degree': 'Software Engineering — 5th semester, Politécnico Grancolombiano University Institution',
    'education.technical': 'Technical Degree in Software Development — ParqueSoft.TI',
    'education.electronics': 'Industrial Electronics Technician — Institución Educativa Técnico Industrial CSL',
    'education.aptis': 'APTIS, B2 level — British Council',
    'education.itsm': 'Technical Certificate in IT Service Management — Pointec',
    'skills.title': 'Skills', 'skills.subtitle': 'Technologies and tools I work with',
    'skills.languages': 'Programming languages', 'skills.frontend': 'Frontend', 'skills.backend': 'Backend & APIs',
    'skills.cloud': 'Cloud & DevOps', 'skills.databases': 'Databases', 'skills.tools': 'Tools',
    'projects.title': 'Projects', 'projects.badge': 'Institutional project',
    'projects.name': 'Institutional E-Learning & Operations Platform',
    'projects.description': 'A web application connecting active students, prospective students, and administrative teams. I designed and deployed the solution with a modular architecture and optimized data models. The project received the highest academic distinction: 5.0 / A.',
    'projects.imageAlt': 'Homepage preview of the Cross Way Center web platform',
    'projects.openDemo': 'View live website',
    'projects.portfolioBadge': 'Personal project',
    'projects.portfolioName': 'Bilingual personal portfolio',
    'projects.portfolioDescription': 'Designed and built this responsive portfolio to present my experience, skills, and projects. It includes English and Spanish language switching, light and dark themes, section navigation, and subtle scroll animations.',
    'projects.portfolioImageAlt': 'Illustration representing a portfolio and professional documents',
    'projects.sourceCode': 'View source code',
    'contact.title': 'Let’s talk',
    'contact.subtitle': 'Have a project or opportunity in mind? Get in touch.',
    'contact.email': 'Email me', 'contact.github': 'View GitHub', 'contact.linkedin': 'LinkedIn', 'contact.whatsapp': 'WhatsApp',
    'footer.copyright': '© 2026-2027 Juan David Cuero | All rights reserved',
    'backToTop': 'Back to top'
  }
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly current = signal<PortfolioLanguage>('en');

  constructor() {
    const saved = localStorage.getItem('portfolio-language');
    this.setLanguage(saved === 'es' ? 'es' : 'en');
  }

  t(key: string): string {
    return copy[this.current()][key] ?? key;
  }

  toggle(): void {
    this.setLanguage(this.current() === 'es' ? 'en' : 'es');
  }

  private setLanguage(language: PortfolioLanguage): void {
    this.current.set(language);
    document.documentElement.lang = language;
    localStorage.setItem('portfolio-language', language);
  }
}
