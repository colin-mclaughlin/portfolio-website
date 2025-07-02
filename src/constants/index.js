export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];


export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'AutoDoc Agent',
    desc: 'AutoDoc Agent is an AI-powered tool designed to automate code documentation for GitHub repositories. It scans Python projects to identify key functions and classes, then uses the OpenAI API to generate clear, professional README content and docstrings.',
    subdesc:
      'The tool monitors for changes in the codebase and, when updates are detected, automatically creates a pull request with refreshed documentation. Built in Python, AutoDoc Agent helps developers save time and maintain consistent, high-quality documentation across their projects.',
    href: 'https://github.com/colin-mclaughlin',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/autodocagent.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',

    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'OpenAI API',
        path: 'assets/openai.png',
      },
      {
        id: 3,
        name: 'GitHub API',
        path: '/assets/github.png',
      },
    ],
  },
  {
    title: 'Email Communication Assistant',
    desc: 'The Email Assistant is an AI-powered tool that helps users search and interact with their inbox using natural language. It connects to email platforms, processes past messages, and allows users to ask questions like “What did my manager say about the deadline?” or “Summarize last week’s updates.”',
    subdesc:
      'The assistant retrieves relevant emails, provides concise answers, and displays the original context when needed. Built with a focus on privacy and usability, the tool streamlines inbox management and enhances productivity through intelligent, conversational search.',
    href: 'https://github.com/colin-mclaughlin',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/emailassistant.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'OpenAI API',
        path: 'assets/openai.png',
      },
      {
        id: 3,
        name: 'Flask',
        path: '/assets/flask.png',
      },
      {
        id: 4,
        name: 'Gmail API',
        path: '/assets/gmail.png',
      },
    ],
  },
  /*
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      }, 
    ], 
  }, */
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [4, -7, 0] : isTablet ? [5, -5, 0] : [10, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [3, 4, 0] : isTablet ? [5, 4, 0] : [10.5, 1.5, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-17, 18, 0] : isTablet ? [-12, 10, 0] : [-20, 13, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-8, -10, -10] : isTablet ? [-11, -7, -10] : [-16, -5, -10],
  };
};

export const workExperiences = [
    {
    id: 1,
    name: 'CodingCat Club',
    pos: 'AI Software Developer',
    duration: 'June 2025 - Present',
    title: "Developing an internal full-stack application for team operations and AI-powered educational features. My work includes integrating APIs like OpenAI, designing and testing prompts, building backend services, and ensuring API reliability through monitoring and error handling. I also support security compliance, contribute to team planning, and generate technical documentation.",
    icon: '/assets/codingcatlogo.png',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'QMIND',
    pos: 'NLP Developer',
    duration: 'October 2024 - April 2025',
    title: "Developed a Convolutional Neural Network for EEG classification using TensorFlow and supporting libraries, achieving over 95% accuracy on select datasets. I handled large-scale EEG data preprocessing, analysis, and visualization using Python libraries such as NumPy, Pandas, Scikit-learn, Matplotlib, and Seaborn.",
    icon: '/assets/qmind.svg',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'Queens Hyperloop Design Team',
    pos: 'AI Research Specialist',
    duration: 'October 2023 - Present',
    title: "Designed and implemented a geospatial pathfinding algorithm in QGIS with Python to optimize a cross-provincial Hyperloop route. Contributed to technical proposals and research materials presented at Hyperloop Global (Toronto, May 2024) and European Hyperloop Week (Switzerland, July 2024), where QHDT AI earned the full-scale Socio-Economic award.",
    icon: '/assets/hyperloop.png',
    animation: 'clapping',
  },
];