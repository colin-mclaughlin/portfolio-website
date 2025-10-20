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
    title: 'Visulo',
    desc:
      'Visulo is a privacy-first AI study overlay that captures on-screen text or regions, performs OCR, retrieves grounded explanations with citations, and generates exportable flashcards and quizzes.',
    subdesc:
      'Built with Tauri, React/TypeScript, and Rust, Visulo runs locally with SQLite storage, e5-small embeddings via FAISS vector index, and pluggable LLM providers (OpenAI/Ollama) for retrieval-augmented answers. It delivers an ethical, offline-first studying experience with export options for Anki, Notion, and Docs.',
    href: 'https://github.com/colin-mclaughlin',
    texture: '/textures/project/project1.mp4',
    logoScreen: '/assets/visulo_video_screen.mp4',
    logo: '/assets/visulologo1.png',
    logoStyle: {
      backgroundColor: '#101820',
      border: '0.2px solid #162A3F',
      boxShadow: '0px 0px 60px 0px #58A6FF4D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Tauri', path: '/assets/tauri.png' },
      { id: 2, name: 'React', path: '/assets/react.svg' },
      { id: 3, name: 'Rust', path: '/assets/rustlogo.png' },
      { id: 4, name: 'OpenAI', path: '/assets/openai.png' },
    ],
  },
  {
    title: 'CodeOps Agent',
    desc:
      'CodeOps Agent is an agentic DevOps assistant that monitors GitHub CI pipelines, retrieves semantic context from code and logs, and autonomously proposes and tests fixes in a sandboxed environment.',
    subdesc:
      'Developed with Python, FastAPI, and LangGraph, it integrates modular MCP tools (GitTool, TestRunnerTool, NotifierTool) into a ReAct reasoning loop using RAG over code and CI logs via FAISS embeddings. The system automates CI insights, debugging, and patch validation for modern engineering workflows.',
    href: 'https://github.com/colin-mclaughlin',
    texture: '/textures/project/project2.mp4',
    logoScreen: '/assets/codeops_video_screen.mp4',
    logo: '/assets/codeopsagentlogo.png',
    logoStyle: {
      backgroundColor: '#1A1A1A',
      border: '0.2px solid #2C2C2C',
      boxShadow: '0px 0px 60px 0px #00BFFF4D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.png' },
      { id: 2, name: 'FastAPI', path: '/assets/fastapi.png' },
      { id: 3, name: 'LangGraph', path: '/assets/langchain.png' },
      { id: 4, name: 'Docker', path: '/assets/docker.png' },
    ],
  },
];


/*
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
  
  {
    title: 'SortSeek',
    desc: 'A privacy-first desktop app that helps users intelligently organize, search, and summarize their documents. SortSeek empowers users to work offline with powerful semantic search, smart renaming, and clause-level summarization.',
    subdesc: 'Designed for speed and control, SortSeek combines Electron, FastAPI, LangChain, and ChromaDB to deliver local embeddings, clause TLDRs, and document insights without relying on the cloud.',
    href: 'https://github.com/colin-mclaughlin',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/sortseeklogo.png',
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
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'Electron',
        path: '/assets/electron.png',
      },
      {
        id: 3,
        name: 'FastAPI',
        path: '/assets/fastapi.png',
      },
      {
        id: 4,
        name: 'LangChain',
        path: '/assets/langchain.png',
      },
      {
        id: 5,
        name: 'React',
        path: '/assets/react.svg',
      },
    ],
  },
];
*/

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
    name: 'Ostar Education',
    pos: 'AI Software Developer',
    duration: 'June 2025 – August 2025',
    title:
      "Developed a full-stack AI lesson generation platform (FastAPI, React, OpenAI, PostgreSQL), building out databases, admin dashboards, role-based access, and complete lesson/user CRUD workflows that automated K-12 worksheet creation and cut teacher prep time from 45 to 5 minutes. Deployed the solution on a secure Linux cloud server with CI/CD (GitHub Actions), Nginx reverse proxying, and automated process monitoring. Collaborated directly with stakeholders and QA to conduct testing for production-grade usage.",
    icon: '/assets/ostaredulogo.png',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'QMIND',
    pos: 'Project Lead — Technical Management Group Ltd.',
    duration: 'September 2025 – Present',
    title:
      "Leading a team of 5 developers to automate contractor CV generation for a mining and energy consulting firm, reducing a 45-minute manual process to a 2-minute proofread. Building a pipeline integrating PDF/LinkedIn parsing, GPT-4, and LangChain for structured JSON output. Organizing stakeholder meetings and maintaining GitHub workflows to deliver a client-ready automation system.",
    icon: '/assets/qmind.svg',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'QMIND',
    pos: 'AI Developer — Natural Language Processing',
    duration: 'September 2024 – April 2025',
    title:
      "Developed an electroencephalograph (EEG) ML pipeline (Pandas, NumPy, scikit-learn, Matplotlib) and trained a Convolutional Neural Network classifier (TensorFlow) achieving 95% accuracy on select datasets. Produced analysis notebooks and plots, accelerating model iteration and enabling one-command retraining.",
    icon: '/assets/qmind.svg',
    animation: 'clapping',
  },
];
