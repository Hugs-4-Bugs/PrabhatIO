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
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
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
      name: 'Trade-Pros-Front-End',
      description: 'The frontend of a trading platform built with React, focusing on real-time data visualization and user-friendly interface design. It integrates with various APIs to provide live market data, charting tools, and portfolio management features.',
      tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'REST API'],
      link: 'https://github.com/PRABHAT-72/Trade-Pros-Front-End',
      image: 'https://placehold.co/600x400.png',
      imageAiHint: 'trading dashboard'
    },
    {
      name: 'Weather-App',
      description: 'A clean and simple weather application that provides current weather conditions and forecasts. Built with modern web technologies, it features a search function for different locations and a responsive design for both desktop and mobile devices.',
      tags: ['React', 'API', 'JavaScript'],
      link: 'https://github.com/PRABHAT-72/Weather-App',
      image: 'https://placehold.co/600x400.png',
      imageAiHint: 'weather forecast'
    },
    {
      name: 'Blog-Website',
      description: 'A full-stack blog platform featuring user authentication, post creation, and comment sections. The backend is built with Spring Boot, providing a robust and secure API, while the frontend offers a clean and engaging reading experience.',
      tags: ['Spring Boot', 'React', 'MySQL'],
      link: 'https://github.com/PRABHAT-72/Blog-Website',
      image: 'https://placehold.co/600x400.png',
      imageAiHint: 'blog article'
    },
    {
        name: 'The-Inner-Battle',
        description: 'The official landing page for my book, "The Inner Battle". This project is a simple, elegant static site built with HTML and CSS to provide information about the book, author details, and purchase links. The design focuses on readability and a professional author portfolio feel.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/PRABHAT-72/The-Inner-Battle',
        image: 'https://placehold.co/600x400.png',
        imageAiHint: 'book cover'
    },
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
    company: 'JMR Infotech',
    role: 'Software Engineer',
    period: 'Jan 2023 – Present',
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

export const userDetails = `Prabhat Kumar is a multifaceted professional based in Bengaluru, India, with a strong foundation in software engineering and a passion for emerging technologies. As a Java Developer with expertise in the Spring Boot framework, he excels at building robust, scalable backend systems and RESTful APIs. His skills extend across the full stack, including frontend development with React and modern cloud and DevOps practices with AWS, Docker, and Kubernetes.

Beyond his technical prowess, Prabhat is an avid AI and Machine Learning enthusiast, constantly exploring new ways to integrate intelligence into applications. He is also a disciplined trader, applying his analytical skills to the financial markets through technical analysis and algorithmic strategies. This unique blend of technology and finance is complemented by his work as an author, having penned "The Inner Battle," a book that delves into personal growth and resilience. His academic journey includes a Bachelor of Engineering from Visvesvaraya Technological University, shaping him into a well-rounded and innovative thinker.`;
