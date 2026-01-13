export type Locale = "fr" | "en"

export const translations = {
  fr: {
    // Header
    nav: {
      home: "Accueil",
      services: "Services",
      projects: "Projets",
      about: "À propos",
      contact: "Contact",
      cta: "Contactez-nous",
    },
    // Hero
    hero: {
      badge: "Agence Digitale",
      title: "ALD TECH – Agence Digitale & Développement Web",
      description:
        "Créons des solutions digitales modernes et performantes pour propulser votre entreprise vers le succès.",
      cta: "Contactez-nous",
      secondary: "Voir nos projets",
      stats: {
        projects: "Projets réalisés",
        clients: "Clients satisfaits",
        experience: "Années d'expérience",
      },
    },
    // Services
    services: {
      title: "Nos meilleurs services",
      subtitle: "Des solutions digitales complètes pour accompagner votre croissance",
      learnMore: "En savoir plus",
      items: [
        {
          title: "Création de landing pages",
          description: "Pages d'atterrissage optimisées pour la conversion et le référencement.",
        },
        {
          title: "Sites web responsives",
          description: "Sites web adaptés à tous les écrans, mobiles, tablettes et ordinateurs.",
        },
        {
          title: "Refonte de sites web",
          description: "Modernisation de votre site existant pour une meilleure performance.",
        },
        {
          title: "Développement sur mesure",
          description: "Solutions web personnalisées selon vos besoins spécifiques.",
        },
        {
          title: "Design d'applications",
          description: "Interfaces utilisateur modernes et intuitives pour applications mobiles.",
        },
        { title: "Boostage de pages", description: "Marketing digital sur Facebook, LinkedIn et Instagram." },
        { title: "Modération de sites", description: "Gestion et maintenance continue de votre présence web." },
        { title: "Design graphique", description: "Création de logos, affiches et supports visuels professionnels." },
      ],
    },
    // Portfolio
    portfolio: {
      badge: "Portfolio",
      title: "Nos réalisations",
      subtitle: "Découvrez nos projets récents et laissez-vous inspirer par notre expertise",
      viewProject: "Voir le projet",
      projects: [
        { title: "E-commerce Mode", category: "Site Web" },
        { title: "Application Fintech", category: "Application Mobile" },
        { title: "Site Corporate", category: "Site Web" },
        { title: "Branding Startup", category: "Design Graphique" },
        { title: "Plateforme SaaS", category: "Développement Web" },
        { title: "Marketing Digital", category: "Campagne" },
      ],
    },
    // About
    about: {
      badge: "À propos",
      title: "Votre partenaire digital de confiance",
      description1:
        "ALD TECH est une agence digitale spécialisée dans la création de solutions web innovantes. Nous accompagnons les entreprises de toutes tailles dans leur transformation digitale, du développement web au design graphique en passant par le marketing digital.",
      description2:
        "Notre équipe passionnée combine expertise technique et créativité pour concevoir des expériences digitales qui captivent vos utilisateurs et propulsent votre croissance.",
      values: [
        { title: "Créativité", description: "Des designs uniques et innovants qui reflètent votre identité." },
        { title: "Performance", description: "Des solutions optimisées pour la vitesse et l'efficacité." },
        { title: "Fiabilité", description: "Un accompagnement professionnel et un support continu." },
      ],
    },
    // Contact
    contact: {
      badge: "Contact",
      title: "Parlons de votre projet",
      subtitle: "Prêt à démarrer votre projet digital ? Contactez-nous dès maintenant.",
      stayInTouch: "Restons en contact",
      description:
        "Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans la réalisation de vos projets digitaux.",
      phone: "Téléphone",
      email: "Email",
      whatsapp: "Discuter sur WhatsApp",
      form: {
        name: "Nom complet",
        namePlaceholder: "Votre nom",
        phone: "Téléphone",
        phonePlaceholder: "Votre téléphone",
        email: "Email",
        emailPlaceholder: "votre@email.com",
        message: "Message",
        messagePlaceholder: "Décrivez votre projet...",
        submit: "Envoyer le message",
      },
    },
    // Footer
    footer: {
      callUs: "Appelez-nous",
      whatsappContact: "Contact WhatsApp",
      description:
        "Agence digitale spécialisée en développement web, design graphique et marketing digital. Votre partenaire pour des solutions digitales modernes et performantes.",
      quickLinks: "Liens rapides",
      servicesTitle: "Services",
      servicesList: ["Développement Web", "Design Graphique", "Marketing Digital", "Applications Mobiles"],
      copyright: "Tous droits réservés.",
      madeWith: "Conçu avec passion au Maroc",
    },
  },
  en: {
    // Header
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      cta: "Contact Us",
    },
    // Hero
    hero: {
      badge: "Digital Agency",
      title: "ALD TECH – Digital Agency & Web Development",
      description: "Creating modern and high-performance digital solutions to propel your business to success.",
      cta: "Contact Us",
      secondary: "View our projects",
      stats: {
        projects: "Projects completed",
        clients: "Satisfied clients",
        experience: "Years of experience",
      },
    },
    // Services
    services: {
      title: "Our best services",
      subtitle: "Complete digital solutions to support your growth",
      learnMore: "Learn more",
      items: [
        { title: "Landing page creation", description: "Landing pages optimized for conversion and SEO." },
        { title: "Responsive websites", description: "Websites adapted to all screens, mobile, tablet, and desktop." },
        { title: "Website redesign", description: "Modernizing your existing site for better performance." },
        { title: "Custom development", description: "Personalized web solutions for your specific needs." },
        { title: "Application design", description: "Modern and intuitive user interfaces for mobile apps." },
        { title: "Page boosting", description: "Digital marketing on Facebook, LinkedIn, and Instagram." },
        { title: "Site moderation", description: "Ongoing management and maintenance of your web presence." },
        { title: "Graphic design", description: "Creating logos, posters, and professional visual materials." },
      ],
    },
    // Portfolio
    portfolio: {
      badge: "Portfolio",
      title: "Our work",
      subtitle: "Discover our recent projects and get inspired by our expertise",
      viewProject: "View project",
      projects: [
        { title: "Fashion E-commerce", category: "Website" },
        { title: "Fintech Application", category: "Mobile App" },
        { title: "Corporate Website", category: "Website" },
        { title: "Startup Branding", category: "Graphic Design" },
        { title: "SaaS Platform", category: "Web Development" },
        { title: "Digital Marketing", category: "Campaign" },
      ],
    },
    // About
    about: {
      badge: "About",
      title: "Your trusted digital partner",
      description1:
        "ALD TECH is a digital agency specializing in creating innovative web solutions. We support businesses of all sizes in their digital transformation, from web development to graphic design and digital marketing.",
      description2:
        "Our passionate team combines technical expertise and creativity to design digital experiences that captivate your users and drive your growth.",
      values: [
        { title: "Creativity", description: "Unique and innovative designs that reflect your identity." },
        { title: "Performance", description: "Solutions optimized for speed and efficiency." },
        { title: "Reliability", description: "Professional support and continuous assistance." },
      ],
    },
    // Contact
    contact: {
      badge: "Contact",
      title: "Let's talk about your project",
      subtitle: "Ready to start your digital project? Contact us now.",
      stayInTouch: "Stay in touch",
      description:
        "Our team is available to answer all your questions and support you in completing your digital projects.",
      phone: "Phone",
      email: "Email",
      whatsapp: "Chat on WhatsApp",
      form: {
        name: "Full name",
        namePlaceholder: "Your name",
        phone: "Phone",
        phonePlaceholder: "Your phone",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        messagePlaceholder: "Describe your project...",
        submit: "Send message",
      },
    },
    // Footer
    footer: {
      callUs: "Call us",
      whatsappContact: "WhatsApp Contact",
      description:
        "Digital agency specialized in web development, graphic design, and digital marketing. Your partner for modern and high-performance digital solutions.",
      quickLinks: "Quick links",
      servicesTitle: "Services",
      servicesList: ["Web Development", "Graphic Design", "Digital Marketing", "Mobile Applications"],
      copyright: "All rights reserved.",
      madeWith: "Made with passion in Morocco",
    },
  },
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}
