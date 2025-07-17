
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Facebook,
  Send,
  Code,
  Server,
  Cloud,
  BrainCircuit,
  BarChart,
  Paintbrush,
  UserCheck,
  Briefcase,
  BookOpen,
  MessageSquare,
  Star,
  Link,
  BookUser,
  GitBranch,
  Database,
  Type,
  TrendingUp,
  Cpu,
} from 'lucide-react';
import type { Icon } from 'lucide-react';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/PRABHAT-72', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prabhat-kumar-032623197/', icon: Linkedin },
  { name: 'Instagram', url: 'https://www.instagram.com/prabhat_kumar_72/', icon: Instagram },
  { name: 'Twitter', url: 'https://twitter.com/prabhatkumar_72', icon: Twitter },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCf1_pf82D01-p34Gj5-b9gQ', icon: Youtube },
  { name: 'Email', url: 'mailto:mailtoprabhat72@gmail.com', icon: Mail },
  { name: 'Facebook', url: 'https://www.facebook.com/prabhatkumar72', icon: Facebook },
  { name: 'Telegram', url: 'https://t.me/prabhatkumar72', icon: Send },
  // Add other links from proposal if available
];

export const projects = [

    {
      name: 'Cryptocurrency Price Prediction',
      description: 'A machine learning-based app that predicts Bitcoin prices using historical data. Demonstrates data preprocessing, model training, and performance evaluation in a real-world finance use case.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Matplotlib'],
      link: 'https://github.com/Hugs-4-Bugs/Cryptocurrency-Price-prediction-using-ML',
      image: '/images/prabhat.jpg',
      imageAiHint: 'cryptocurrency prediction graph'
    },
    {
      name: 'REST API CRUD Operation',
      description: 'A Spring Boot application implementing full CRUD functionality using RESTful APIs. Features Hibernate, JSP, and MySQL integration for robust backend operations.',
      tags: ['Spring Boot', 'Hibernate', 'MySQL', 'JSP'],
      link: 'https://github.com/Hugs-4-Bugs/REST-API-CRUD-Operation',
      image: '/images/prabhat.jpg',
      imageAiHint: 'rest api crud operation backend'
    },
    {
      name: 'Flight Reservation System',
      description: 'A full-featured airline booking platform using Spring Boot and AngularJS. Supports flight search, booking, and check-in with secure authentication and role-based access.',
      tags: ['Spring Boot', 'AngularJS', 'Thymeleaf', 'MySQL'],
      link: 'https://github.com/Hugs-4-Bugs/Flight_Reservation_Project',
      image: '/images/prabhat.jpg',
      imageAiHint: 'flight booking interface'
    },
    {
      name: 'Blog Application (Spring Boot)',
      description: 'A secure blog platform supporting JWT authentication, CRUD operations, and Postman testing. Built with Spring Boot and MySQL for backend robustness.',
      tags: ['Spring Boot', 'JWT', 'MySQL', 'Postman'],
      link: 'https://github.com/Hugs-4-Bugs/Blog_Application-SpringBoot-Project',
      image: '/images/prabhat.jpg',
      imageAiHint: 'developer blog interface'
    },
    {
      name: 'Hospital Management System',
      description: 'A full-stack hospital management app with admin panels, report downloads, and service tracking. Uses Spring Boot, Thymeleaf, and Bootstrap for a responsive UI.',
      tags: ['Spring Boot', 'Thymeleaf', 'Bootstrap', 'MySQL'],
      link: 'https://github.com/Hugs-4-Bugs/Hospital-Managment-Application',
      image: '/images/prabhat.jpg',
      imageAiHint: 'hospital dashboard interface'
    },
    {
      name: 'Bitcoin Mining Application',
      description: 'Spring Boot project simulating Bitcoin mining operations with account management, transactions, and audit logging. Integrates BitcoinJ and REST APIs.',
      tags: ['Spring Boot', 'BitcoinJ', 'MySQL', 'REST API'],
      link: 'https://github.com/Hugs-4-Bugs/Bitcoin-Mining-App',
      image: '/images/prabhat.jpg',
      imageAiHint: 'bitcoin mining dashboard'
    },
    {
      name: 'Multi File Upload System',
      description: 'Spring Boot REST API for uploading multiple files to the database using Spring Data JPA. Supports multipart handling and easy integration.',
      tags: ['Spring Boot', 'REST API', 'File Upload'],
      link: 'https://github.com/Hugs-4-Bugs/MultiFileUpload-Using-Spring-Boot-Application',
      image: '/images/prabhat.jpg',
      imageAiHint: 'file upload ui'
    },
    {
      name: 'QR Code Generator',
      description: 'Java-based QR code generator that accepts text input and outputs custom QR codes. Includes REST endpoints and Postman test support.',
      tags: ['Java', 'QR Code', 'Spring Boot'],
      link: 'https://github.com/Hugs-4-Bugs/QR-code-Generator',
      image: '/images/prabhat.jpg',
      imageAiHint: 'qr code generator'
    },
    {
      name: 'Awesome Portfolio Collection',
      description: 'A curated collection of 100+ portfolio templates built using HTML, CSS, and JavaScript. Ideal for design inspiration and development practice.',
      tags: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
      link: 'https://github.com/Hugs-4-Bugs/Awesome-Portfolio-Collection',
      image: '/images/prabhat.jpg',
      imageAiHint: 'web developer portfolio gallery'
    },
    {
      name: 'GitHub Streak Back',
      description: 'Automates contributions to restore broken GitHub streaks using Node.js and Git. Ideal for devs who missed a commit.',
      tags: ['Node.js', 'Automation', 'Git'],
      link: 'https://github.com/Hugs-4-Bugs/github-streak-back.git',
      image: '/images/prabhat.jpg',
      imageAiHint: 'github contribution graph automation'
    },
    {
      name: 'AlgoByPrabhat',
      description: 'A learning platform for DSA concepts with visualizations. Helps learners understand algorithms via interactive examples.',
      tags: ['JavaScript', 'Algorithms', 'Data Structures'],
      link: 'https://github.com/Hugs-4-Bugs/AlgoByPrabhat.git',
      image: '/images/prabhat.jpg',
      imageAiHint: 'algorithm visualizer interface'
    },
    {
      name: 'Sharma AI Assistant',
      description: 'Voice-activated desktop assistant built with JavaScript and Node.js. Uses AppleScript to automate OS-level tasks.',
      tags: ['JavaScript', 'Voice Control', 'Node.js'],
      link: 'https://github.com/Hugs-4-Bugs/Sharma-AI.git',
      image: '/images/prabhat.jpg',
      imageAiHint: 'voice assistant interface'
    },
    {
      name: 'User Details App',
      description: 'Spring Boot app for managing user data with REST API. Supports CRUD operations and MySQL integration.',
      tags: ['Spring Boot', 'MySQL', 'REST API'],
      link: 'https://github.com/Hugs-4-Bugs/user-details-app.git',
      image: '/images/prabhat.jpg',
      imageAiHint: 'user profile management'
    },
    {
      name: 'SpringBoot OpenAI Integration',
      description: 'Integrates OpenAI into a Spring Boot backend to enable AI-powered text generation, response crafting, and content creation.',
      tags: ['Spring Boot', 'OpenAI', 'REST API'],
      link: 'https://github.com/Hugs-4-Bugs/SpringBoot-OpenAI',
      image: '/images/prabhat.jpg',
      imageAiHint: 'ai integration spring boot'
    },
    {
      name: 'Mobile Banking App',
      description: 'Spring Boot application providing mobile banking services like transactions, fund transfers, and account management.',
      tags: ['Spring Boot', 'Banking', 'MySQL'],
      link: 'https://github.com/Hugs-4-Bugs/Sharma-AI.git',
      image: '/images/prabhat.jpg',
      imageAiHint: 'mobile banking interface'
    },
    {
      name: 'Uber Application',
      description: 'A ride-hailing platform with real-time ride tracking, driver management, and fare estimation. Built with Spring Boot.',
      tags: ['Spring Boot', 'Maps API', 'E-commerce'],
      link: 'https://github.com/Hugs-4-Bugs/Uber-Application.git',
      image: '/images/prabhat.jpg',
      imageAiHint: 'uber clone interface'
    },
    {
      name: 'Cafe Management System',
      description: 'Spring Boot-based system for handling cafe operations like order processing, billing, and menu updates.',
      tags: ['Spring Boot', 'Cafe App', 'MySQL'],
      link: 'https://github.com/Hugs-4-Bugs/Cafe-Management-System.git',
      image: '/images/prabhat.jpg',
      imageAiHint: 'cafe billing interface'
    },
    {
      name: 'Ollama AI + Spring Boot',
      description: 'Spring Boot integration with Ollama AI using Spring AI and Flux to deliver both synchronous and streaming AI responses.',
      tags: ['Spring Boot', 'Ollama', 'Spring AI', 'LLMs'],
      link: 'https://github.com/Hugs-4-Bugs/Ollama-Spring-Boot-AI-Implementation.git',
      image: '/images/prabhat.jpg',
      imageAiHint: 'spring ai ollama chatbot'
    },
    {
      name: 'LinkedIn Clone Application',
      description: 'A microservice-based LinkedIn clone with features like connections, posts, notifications, and user profiles.',
      tags: ['Spring Boot', 'Microservices', 'API Gateway', 'Eureka'],
      link: 'https://github.com/Hugs-4-Bugs/LinkedIn-Application.git',
      image: '/images/prabhat.jpg',
      imageAiHint: 'linkedin clone ui'
    }
  ];  
  
export const skillCategories: { name: string; icon: Icon; skills: { name: string; icon: Icon }[] }[] = [
  { 
    name: 'Frontend', 
    icon: Code,
    skills: [
      { name: 'React', icon: Code },
      { name: 'HTML', icon: Code },
      { name: 'CSS', icon: Code },
      { name: 'Tailwind', icon: Type },
      { name: 'Angular', icon: Code },
    ]
  },
  { 
    name: 'Backend', 
    icon: Server,
    skills: [
      { name: 'Spring Boot', icon: Server },
      { name: 'Node.js', icon: Server },
      { name: 'REST API', icon: Link },
      { name: 'Java', icon: Code },
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', icon: Cloud },
      { name: 'Firebase', icon: Cloud },
      { name: 'Docker', icon: Cpu },
      { name: 'Kubernetes', icon: Cpu },
      { name: 'Jenkins', icon: GitBranch },
      { name: 'Git', icon: GitBranch },
    ]
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'PostgreSQL', icon: Database },
    ]
  },
  {
    name: 'AI/ML',
    icon: BrainCircuit,
    skills: [
      { name: 'Machine Learning', icon: BrainCircuit },
      { name: 'Artificial Intelligence', icon: BrainCircuit },
    ]
  },
  {
    name: 'Trading',
    icon: TrendingUp,
    skills: [
      { name: 'Technical Analysis', icon: BarChart },
      { name: 'Algorithmic Trading', icon: Code },
      { name: 'Market Psychology', icon: BrainCircuit },
    ]
  },
  {
    name: 'Design & Tools',
    icon: Paintbrush,
    skills: [
      { name: 'Figma', icon: Paintbrush },
      { name: 'Adobe XD', icon: Paintbrush },
    ]
  }
];

export const experiences = [
  {
    company: 'Startek',
    role: 'L1 Technical Support Engineer',
    period: 'June 2025 - Present',
    description: 'Providing frontline technical assistance to customers, diagnosing and resolving hardware and software issues with a focus on delivering excellent service and timely solutions. Responsible for ticket management and escalating complex issues to senior engineers.',
    icon: UserCheck,
  },
  {
    company: 'JMR Infotech',
    role: 'Software Engineer',
    period: 'Jan 2025 – April 2025',
    description: 'Developed and maintained key features for enterprise applications, including secure login/signup systems with JWT authentication and building a comprehensive Blog API. Focused on writing clean, scalable Java code and collaborating with cross-functional teams.',
    icon: Briefcase,
  },
  {
    company: 'CodeSpeedy Technology',
    role: 'Intern',
    period: 'Oct 2022 – Dec 2022',
    description: 'Gained hands-on experience with Spring Boot and Hibernate, focusing on building secure authentication systems. Contributed to backend development tasks, database design, and API implementation.',
    icon: Briefcase,
  },
  {
    company: 'Walmart USA (Simulation)',
    role: 'Software Engineering Simulation',
    period: '2022',
    description: 'Participated in a virtual work experience program simulating real-world software engineering tasks at Walmart. Worked on problems related to Java heap management, memory optimization, and designed system architecture using UML/ER diagrams.',
    icon: Star,
  },
];

export const education = [
    {
      institution: 'Visvesvaraya Technological University',
      degree: 'Bachelor of Engineering',
      period: '2019 – 2023',
      icon: BookOpen,
    },
    {
      institution: 'Veer Kunwar Singh University',
      degree: 'Intermediate of Science',
      period: '2016 – 2018',
      icon: BookOpen,
    },
    {
      institution: 'St. Anne’s Mission School',
      degree: 'Matriculation',
      period: '2016',
      icon: BookOpen,
    },
  ];

export const services = [
  {
    name: 'API Development & Integration',
    description: 'Designing and building robust, scalable, and secure RESTful APIs to connect your applications and services.',
    icon: Link,
  },
  {
    name: 'Java Software Development',
    description: 'Expert-level Java development using frameworks like Spring Boot to create high-performance enterprise applications.',
    icon: Code,
  },
  {
    name: 'Cloud & DevOps',
    description: 'Implementing cloud infrastructure on AWS and setting up CI/CD pipelines with Docker and Jenkins for efficient deployment.',
    icon: Cloud,
  },
  {
    name: 'Strategic Trading Solutions',
    description: 'Developing algorithmic trading strategies and providing insights based on technical analysis and market psychology.',
    icon: TrendingUp,
  },
  {
    name: 'AI/ML Implementation',
    description: 'Integrating machine learning models into your applications to create intelligent features and data-driven insights.',
    icon: BrainCircuit,
  },
  {
    name: 'Web Application Development',
    description: 'Full-stack development of modern, responsive web applications using React, Node.js, and other leading technologies.',
    icon: Server,
  },
  {
    name: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with Figma and implementing them with pixel-perfect precision.',
    icon: Paintbrush,
  },
  {
    name: 'System Architecture & Automation',
    description: 'Designing scalable system architectures and automating workflows to improve efficiency and reliability.',
    icon: GitBranch,
  },
];

export const tradingConcepts = [
    {
      name: 'Supply & Demand',
      description: 'Core market principle where prices move based on the balance between buyers (demand) and sellers (supply).',
      icon: BarChart,
    },
    {
      name: 'Order Blocks',
      description: 'Specific price areas where large institutional orders were placed, often acting as strong support or resistance.',
      icon: Briefcase,
    },
    {
      name: 'Fair Value Gaps (FVG)',
      description: 'Imbalances in price delivery that the market tends to revisit to "rebalance" price, creating trading opportunities.',
      icon: Star,
    },
    {
      name: 'Market Psychology',
      description: 'Understanding the collective emotions of market participants (fear, greed) to anticipate price movements.',
      icon: BrainCircuit,
    },
    {
      name: 'Candlestick Patterns',
      description: 'Visual patterns formed by price movements that can indicate potential reversals or continuations in trends.',
      icon: Type,
    },
    {
      name: 'Backtesting',
      description: 'The process of testing a trading strategy on historical data to determine its potential profitability and risk.',
      icon: BookUser,
    },
  ];

export const userDetails = `I am the founder and CEO of QuantumFusion Solutions, an innovation-driven technology company specializing in AI, cloud computing, and automation. At QuantumFusion Solutions, we focus on building intelligent, scalable, and secure software solutions tailored to solve real-world business challenges.

Our work includes:

AI Integration & Automation: Designing smart systems using machine learning, NLP, and computer vision to automate complex workflows.

Cloud-Based Development: Creating modern, resilient, and scalable cloud-native applications on AWS, GCP, and other platforms.

Web & App Development: Delivering secure, full-stack applications with frameworks like Spring Boot, Angular, React, and Node.js.

Data-Driven Insights: Building analytics pipelines and dashboards to enable better decision-making through data.

Learn more about QuantumFusion Solutions on our Website or LinkedIn Page.`;
