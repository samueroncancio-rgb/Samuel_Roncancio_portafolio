import type {
  PersonalInfo,
  NavItem,
  SpecialtyItem,
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  LanguageItem
} from '../types/portfolio'

export const personalInfo: PersonalInfo = {
  name: 'Samuel Roncancio Bertel',
  logoText: '<SamuelRoncancio />',
  roleBadge: 'Disponible para oportunidades & Proyectos Freelance',
  title: 'Samuel Roncancio Bertel',
  subtitle: 'AI & Automation Developer | Backend Software Engineer',
  shortDescription:
    'Especializado en construir soluciones con Inteligencia Artificial Generativa, integraciones avanzadas con LLMs, implementación de Model Context Protocol (MCP) y arquitecturas backend escalables con Python (FastAPI, Django) y React.',
  aboutText:
    'Desarrollador de Software especializado en soluciones de Inteligencia Artificial Generativa, integraciones de APIs de grandes Modelos de Lenguaje (LLM) e implementaciones de Model Context Protocol (MCP), respaldado por sólidos fundamentos en Python (FastAPI, Django) y JavaScript/TypeScript (React). Combino experiencia práctica como freelance con entrenamiento intensivo de simulación de entorno laboral en Riwi. Experto en Ingeniería de Prompts y automatización de flujos de trabajo con IA para optimizar procesos operativos, creativos y pipelines de activos digitales (Ads).',
  profileImage: '/assets/images/profile.jpg',
  resumeUrl: '/assets/cv-samuel-roncancio.pdf',
  location: 'Barranquilla, Colombia (Disponible Remoto / Híbrido)',
  email: 'Samueroncancio@gmail.com',
  phone: '+57 3147281031',
  whatsappUrl: 'https://wa.me/573147281031',
  githubUrl: 'https://github.com/samueroncancio-rgb',
  linkedinUrl: 'https://www.linkedin.com/in/samuel-roncancio',
  availabilityStatus: 'Abierto a nuevos retos de ingeniería y proyectos freelance de alto impacto',
  statusActive: true,
}

export const navItems: NavItem[] = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Contacto', href: '#contacto' },
]

export const specialties: SpecialtyItem[] = [
  {
    id: 'ai-mcp',
    title: 'IA Generativa & MCP',
    description:
      'Orquestación de agentes autónomos, integración profunda de APIs de LLMs (OpenAI, Google AI Studio), ingeniería avanzada de prompts e implementación de servidores y clientes bajo Model Context Protocol (MCP).',
    iconName: 'sparkles',
    highlightTags: ['LLM Orchestration', 'MCP Servers', 'Prompt Engineering', 'AI Agents'],
    accentColor: 'from-blue-500/20 to-emerald-500/10 border-blue-500/30 text-blue-400',
  },
  {
    id: 'backend-api',
    title: 'Arquitectura Backend & APIs',
    description:
      'Diseño y desarrollo de microservicios y APIs RESTful de alto rendimiento, optimización de consultas, validación estricta de esquemas y lógica de negocio escalable con Python, FastAPI y Django.',
    iconName: 'server',
    highlightTags: ['FastAPI', 'Python Async', 'Django', 'REST Architecture'],
    accentColor: 'from-emerald-500/20 to-cyan-500/10 border-emerald-500/30 text-emerald-400',
  },
  {
    id: 'automation-frontend',
    title: 'Automatización & Frontend Interactivo',
    description:
      'Construcción de dashboards e interfaces web modernas y responsivas con React conectadas a pipelines automatizados de procesamiento de datos, optimización operativa y generación de activos publicitarios (Ads).',
    iconName: 'workflow',
    highlightTags: ['React + Vite', 'Pipeline Automation', 'Ads Workflows', 'Clean UI'],
    accentColor: 'from-indigo-500/20 to-blue-500/10 border-indigo-500/30 text-indigo-400',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-automation',
    title: 'IA & Automatización',
    iconName: 'bot',
    description: 'Tecnologías y protocolos para flujos generativos inteligentes',
    skills: [
      { name: 'LLM Applications', highlight: true, category: 'ai-automation' },
      { name: 'Model Context Protocol (MCP)', highlight: true, category: 'ai-automation' },
      { name: 'Prompt Engineering Avanzado', highlight: true, category: 'ai-automation' },
      { name: 'OpenAI API', highlight: false, category: 'ai-automation' },
      { name: 'Google AI Studio', highlight: false, category: 'ai-automation' },
      { name: 'AI Workflow Automation', highlight: true, category: 'ai-automation' },
      { name: 'Ads Pipeline Automation', highlight: false, category: 'ai-automation' },
    ],
  },
  {
    id: 'backend-core',
    title: 'Backend & Core',
    iconName: 'server',
    description: 'Bases de arquitectura sólida, lógica de datos y APIs',
    skills: [
      { name: 'Python', highlight: true, category: 'backend-core' },
      { name: 'FastAPI', highlight: true, category: 'backend-core' },
      { name: 'Django', highlight: false, category: 'backend-core' },
      { name: 'RESTful APIs', highlight: true, category: 'backend-core' },
      { name: 'Data Structures & Algorithms', highlight: false, category: 'backend-core' },
      { name: 'Validación de Datos (Pydantic)', highlight: false, category: 'backend-core' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Moderno',
    iconName: 'layout',
    description: 'Interfaces interactivas, reactivas y orientadas al usuario',
    skills: [
      { name: 'JavaScript (ES6+)', highlight: true, category: 'frontend' },
      { name: 'TypeScript', highlight: true, category: 'frontend' },
      { name: 'React', highlight: true, category: 'frontend' },
      { name: 'Tailwind CSS', highlight: false, category: 'frontend' },
      { name: 'State Management', highlight: false, category: 'frontend' },
    ],
  },
  {
    id: 'cloud-tools',
    title: 'Cloud & Herramientas',
    iconName: 'cloud',
    description: 'Infraestructura, control de versiones y entorno dev',
    skills: [
      { name: 'AWS', highlight: false, category: 'cloud-tools' },
      { name: 'Git & GitHub', highlight: true, category: 'cloud-tools' },
      { name: 'Render', highlight: false, category: 'cloud-tools' },
      { name: 'Linux / Bash', highlight: true, category: 'cloud-tools' },
      { name: 'CI/CD Basics', highlight: false, category: 'cloud-tools' },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Competencias Humanas & Metodología',
    iconName: 'users',
    description: 'Criterio analítico y colaboración de alto rendimiento',
    skills: [
      { name: 'Pensamiento Analítico', highlight: true, category: 'soft-skills' },
      { name: 'Resolución de Problemas', highlight: true, category: 'soft-skills' },
      { name: 'Comunicación Efectiva', highlight: false, category: 'soft-skills' },
      { name: 'Adaptabilidad Rápida', highlight: false, category: 'soft-skills' },
      { name: 'Aprendizaje Continuo', highlight: true, category: 'soft-skills' },
      { name: 'Ownership & Responsabilidad', highlight: true, category: 'soft-skills' },
      { name: 'Mentalidad Ágil (Scrum / Git Flow)', highlight: false, category: 'soft-skills' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'citas-medicas',
    title: 'Sistema de Ingesta Flexible de Citas Médicas',
    description:
      'Arquitectura backend y flujo de procesamiento de datos para la gestión, validación e ingesta flexible de agendamiento médico, optimizando la interoperabilidad y consistencia de registros clínicos en tiempo récord.',
    techStack: ['Python', 'FastAPI', 'REST API', 'Data Processing', 'Automation'],
    repoUrl: 'https://github.com/samueroncancio-rgb/-Ingesta-flexible-citas-m-dicas.git',
    image: '/assets/images/project-citas.jpg',
    featured: true,
    category: 'Backend & Data Pipeline',
    accentColor: 'from-blue-600 to-cyan-500',
    iconName: 'activity',
  },
  {
    id: 'edulogic-riwi',
    title: 'EduLogic (Proyecto Colaborativo Riwi)',
    description:
      'Plataforma tecnológica educativa desarrollada bajo metodologías ágiles en entorno colaborativo multidisciplinario, enfocada en lógica de negocio estructurada, gestión de aprendizaje e integración fluida cliente-servidor.',
    techStack: ['Python', 'JavaScript', 'React', 'REST APIs', 'Git Flow'],
    repoUrl: 'https://github.com/Riwi-io-Medellin/219-edulogic.git',
    image: '/assets/images/project-edulogic.jpg',
    featured: true,
    category: 'Full Stack & Agile Collaboration',
    accentColor: 'from-emerald-500 to-teal-400',
    iconName: 'layers',
  },
  {
    id: 'surebets-engine',
    title: 'Motor de Escaneo y Análisis Surebets',
    description:
      'Sistema automatizado de análisis algorítmico y detección de oportunidades de arbitraje deportivo (Surebets) mediante procesamiento rápido de cuotas probabilísticas, ejecución matemática en tiempo real y alertas.',
    techStack: ['Python', 'Algoritmos', 'Automatización', 'Real-Time Analytics'],
    repoUrl: 'https://github.com/samueroncancio-rgb/proyecto-surebets--2-.git',
    image: '/assets/images/project-surebets.jpg',
    featured: true,
    category: 'Algorithmic Engine & Analytics',
    accentColor: 'from-amber-500 to-orange-500',
    iconName: 'trending-up',
  },
  {
    id: 'suite-evaluacion-desempeno',
    title: 'Suite de Evaluación Técnica & Arquitectura',
    description:
      'Implementación integral de estructuras de datos, lógica algorítmica avanzada y buenas prácticas de ingeniería de software bajo estándares estrictos de rendimiento, modularidad y clean code comprobable.',
    techStack: ['Python', 'JavaScript', 'Data Structures', 'Clean Code', 'Algorithms'],
    repoUrl: 'https://github.com/samueroncancio-rgb/prueba_desempe-o_Samuel_Roncancio.git',
    image: '/assets/images/project-desempeno.jpg',
    featured: false,
    category: 'Software Engineering & Performance',
    accentColor: 'from-purple-500 to-indigo-500',
    iconName: 'cpu',
  },
]

export const experiences: ExperienceItem[] = [
  {
    id: 'freelance-ai-backend',
    role: 'Desarrollador de Software e IA Generativa',
    company: 'Freelance / Independiente',
    period: '2025 – Presente',
    location: 'Barranquilla, Colombia (Remoto)',
    type: 'Freelance & Consultoría Técnica',
    current: true,
    achievements: [
      'Diseño y desarrollo de soluciones a medida integrando IA Generativa y aplicaciones basadas en LLMs para automatizar tareas operativas complejas y flujos creativos.',
      'Implementación de soluciones impulsadas por Model Context Protocol (MCP) conectadas a servicios backend escalables en Python (FastAPI y Django).',
      'Aplicación de técnicas avanzadas de Prompt Engineering para maximizar la precisión, consistencia y eficiencia en la generación automatizada de contenido.',
      'Construcción de interfaces interactivas y herramientas internas en React y JavaScript para gestionar y monitorizar flujos automatizados.',
      'Consultoría directa con clientes desde el levantamiento de requerimientos hasta el despliegue y monitoreo en producción (AWS / Render).',
    ],
    skills: ['GenAI', 'LLM Apps', 'MCP', 'FastAPI', 'Django', 'React', 'Prompt Engineering', 'AWS'],
  },
  {
    id: 'riwi-junior-dev',
    role: 'Junior Software Developer',
    company: 'Riwi (Entrenamiento en Simulación de Entorno Laboral)',
    period: 'Marzo 2026 – Presente',
    location: 'Barranquilla, Colombia',
    type: 'Entorno Laboral Simulado & Aceleración Tech',
    current: true,
    achievements: [
      'Ejecución de proyectos prácticos aplicando fundamentos sólidos de ingeniería de software, estructuras de datos avanzadas e integración de APIs en un entorno ágil colaborativo.',
      'Implementación de flujos de trabajo técnicos y arquitecturas de agentes de IA utilizando Python y JavaScript bajo estándares estrictos de calidad.',
      'Trabajo conjunto con líderes técnicos y equipos multidisciplinarios para iterar, probar y escalar productos de software bajo metodologías Scrum y Git Flow.',
    ],
    skills: ['Python', 'JavaScript', 'Data Structures', 'Git Flow', 'Agile / Scrum', 'AI Workflows'],
  },
]

export const educations: EducationItem[] = [
  {
    id: 'utel-software',
    degree: 'Ingeniería de Software',
    institution: 'Universidad Tecnológica Latinoamericana en Línea (UTEL)',
    period: 'En curso',
    details: 'Formación universitaria en diseño de sistemas, arquitectura de software, bases de datos y ciclo de vida de desarrollo.',
    badge: 'Grado Universitario',
  },
  {
    id: 'riwi-training',
    degree: 'Entrenamiento Intensivo en Desarrollo de Software & IA',
    institution: 'Riwi',
    period: '2026 – Presente',
    details: 'Programa de alto rendimiento en simulación laboral, agentes de IA, backend con Python, frontend con React y trabajo ágil en equipo.',
    badge: 'Bootcamp Intensivo',
  },
  {
    id: 'unisimon-industrial',
    degree: 'Ingeniería Industrial (8 semestres cursados)',
    institution: 'Universidad Simón Bolívar',
    period: 'Base Analítica y de Procesos',
    details: 'Sólida formación en optimización de operaciones, pensamiento sistémico, análisis cuantitativo y mejora continua aplicada al desarrollo de software.',
    badge: 'Fundamento de Procesos',
  },
]

export const languages: LanguageItem[] = [
  {
    language: 'Español',
    proficiency: 'Nativo',
    level: 'C2',
    note: 'Comunicación nativa, redacción técnica y liderazgo de equipos.',
  },
  {
    language: 'Inglés',
    proficiency: 'Intermedio',
    level: 'B1',
    note: 'Lectura fluida de documentación técnica, diseño de prompts en inglés y comunicación profesional efectiva.',
  },
]
