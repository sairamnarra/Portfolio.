import type { Certificate, Project, Experience, Education, SkillCategory } from '../types/index.ts';

export const PERSONAL_INFO = {
  name: 'Narra Sairam',
  role: 'Software Engineer & Data Analyst',
  subRole: 'MCA Graduate · Python, Machine Learning & SQL Specialist',
  location: 'Telangana, India',
  email: 'narrasairam13@gmail.com',
  phone: '+91 9398684560',
  linkedin: 'https://www.linkedin.com/in/narra-sairam-b4048b225',
  github: 'https://github.com/sairamnarra',
  whatsapp: 'https://wa.me/919398684560',
  resumePreviewUrl: 'https://drive.google.com/file/d/1py2tGIwLZ2LQOMpJEzbvrTFbGYz6BnGx/view?usp=sharing',
  resumeDownloadUrl: 'https://drive.google.com/uc?export=download&id=1py2tGIwLZ2LQOMpJEzbvrTFbGYz6BnGx',
  summary:
    'MCA graduate and software engineer with focused hands-on experience in Python backend development, predictive machine learning, and data analytics. Built end-to-end applications including an Auto Insurance Fraud Detection system (81% accuracy) and an AI Resume Screening engine. Proven track record of academic excellence as MCA Batch Topper (8.78 CGPA) and SSC Mandal Topper (9.3 CGPA), with multiple national-level internship credentials from Microsoft Elevate, AICTE, and Edunet Foundation.',
};

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-powerbi-microsoft',
    title: 'Power BI – For Business Applications',
    issuer: 'Microsoft Elevate & AICTE',
    partner: 'Director Gunjan Patel & AICTE CCO',
    date: 'February 2026 – March 2026',
    category: 'data',
    duration: '4-Week Virtual Internship',
    credentialId: 'STU678e594176fb51737382209',
    description:
      'Completed a rigorous 4-week internship focused on Power BI dashboards, DAX queries, ETL pipelines, and business intelligence reporting for enterprise datasets under Emerging Technologies.',
    pdfUrl: '/assets/aistudio/PL-300_internship_complition_cert_aicte_microsoft_ca7a845c.pdf',
    previewImageUrl: '/assets/aistudio/previews/cert-powerbi.jpg',
    skills: ['Power BI', 'Business Intelligence', 'Data Visualization', 'DAX', 'Analytics'],
    featured: true,
  },
  {
    id: 'cert-techsaksham-ai',
    title: 'AI: Transformative Learning with TechSaksham',
    issuer: 'TechSaksham (Microsoft & SAP)',
    partner: 'Edunet Foundation & AICTE',
    date: '2025',
    category: 'ai-ml',
    duration: 'National Skilling Internship',
    credentialId: 'TSPIN24_627874',
    description:
      'Hands-on internship on Artificial Intelligence architectures, Natural Language Processing pipelines, model evaluation, and deployment of machine learning applications.',
    pdfUrl: '/assets/aistudio/AI_resume_rank_20ce39c6.pdf',
    previewImageUrl: '/assets/aistudio/previews/cert-techsaksham.jpg',
    skills: ['Artificial Intelligence', 'Machine Learning', 'NLP', 'Python', 'Scikit-Learn'],
    featured: true,
  },
  {
    id: 'cert-ai-ml-microsoft',
    title: 'Artificial Intelligence & Machine Learning',
    issuer: 'Microsoft Elevate & AICTE',
    partner: 'Emerging Technologies Initiative',
    date: 'February 2026 – March 2026',
    category: 'ai-ml',
    duration: '20-Hour Intensive Course',
    credentialId: 'STU678e594176fb51737382209',
    description:
      'Successfully completed a 20-hour specialized course covering algorithmic machine learning, model optimization, predictive workflows, and automated intelligence systems.',
    pdfUrl: '/assets/aistudio/Artificial_Intelligence___Machine_Learning_aicte_c62c76a3.pdf',
    previewImageUrl: '/assets/aistudio/previews/cert-aiml-microsoft.jpg',
    skills: ['Machine Learning', 'Deep Learning Concepts', 'Predictive Modeling', 'Python'],
    featured: true,
  },
  {
    id: 'cert-ijra-publication',
    title: 'Research Publication: Data Science Enquiry Chatbot using RASA NLU',
    issuer: 'International Journal of Research and Applications (IJRA)',
    partner: 'Approved by National Science Library (NSL)',
    date: 'Volume 12, Issue 46 (April – June 2025)',
    category: 'publication',
    credentialId: 'IJRA-CERT-20252 · DOI: 10.5281/zenodo.15878325',
    description:
      'Authored and published peer-reviewed research manuscript detailing conversational intent recognition, entity extraction, and dialog management using RASA NLU for data science query automation.',
    pdfUrl: '/assets/aistudio/IJRA_Certificate_-_N._Sai_Ram_7e4f3560.pdf',
    previewImageUrl: '/assets/aistudio/previews/cert-ijra.jpg',
    skills: ['RASA NLU', 'Natural Language Understanding', 'Chatbot Engineering', 'Academic Research'],
    featured: true,
  },
  {
    id: 'cert-vois-data-analytics',
    title: 'Conversational Data Analysis with LLMs',
    issuer: "AICTE & 'VOIS for Tech University Engagement'",
    partner: 'Vodafone Idea Foundation & Edunet',
    date: 'September 2025 – October 2025',
    category: 'data',
    duration: 'Virtual Analytics Internship',
    description:
      'Executed end-to-end data processing pipelines, exploratory data analysis, and conversational query interfaces leveraging LLMs to democratize complex statistical insights for stakeholders.',
    pdfUrl: '/assets/aistudio/data_analysis_04767e12.jpg',
    previewImageUrl: '/assets/aistudio/previews/cert-vois.jpg',
    skills: ['Data Analytics', 'LLMs', 'Exploratory Data Analysis', 'Python', 'Statistical Modeling'],
    featured: true,
  },
  {
    id: 'cert-python-nsdc',
    title: 'Python Programming',
    issuer: 'Skill India Digital Hub & Microsoft',
    partner: 'National Skill Development Corporation (NSDC)',
    date: 'July 2025',
    category: 'programming',
    duration: '40-Hour Accredited Course',
    description:
      'Comprehensive accreditation in Python programming, object-oriented paradigms, data structures, algorithm design, and computational problem solving.',
    pdfUrl: '/assets/aistudio/Python_programming_cert_by_nsdc_105b19b1.pdf',
    previewImageUrl: '/assets/aistudio/previews/cert-python.jpg',
    skills: ['Python', 'OOP', 'Data Structures', 'Algorithms', 'Software Engineering'],
    featured: false,
  },
  {
    id: 'cert-tcs-ion',
    title: 'TCS iON Career Edge – Young Professional',
    issuer: 'Tata Consultancy Services (TCS iON)',
    partner: 'TCS Global Delivery',
    date: 'March 2025 – April 2025',
    category: 'programming',
    duration: 'Career Foundation Program',
    credentialId: '240640-28129924-1016',
    description:
      'Professional certification encompassing IT foundational systems, business communications, analytical problem solving, and workplace technology etiquette.',
    pdfUrl: '/assets/aistudio/TCS_ION_certificate_1597ef11.pdf',
    previewImageUrl: '/assets/aistudio/previews/cert-tcs.jpg',
    skills: ['IT Foundations', 'Business Communication', 'Problem Solving', 'Professional Etiquette'],
    featured: false,
  },
  {
    id: 'cert-cybersecurity-nsdc',
    title: 'Cybersecurity Skilling Course',
    issuer: 'Skill India Digital Hub & Tech Mahindra Foundation',
    partner: 'National Skill Development Corporation (NSDC)',
    date: 'May 2025',
    category: 'programming',
    duration: '10-Hour Security Course',
    description:
      'Explored cyber defense strategies, network vulnerability assessment, access control frameworks, and foundational web security best practices.',
    pdfUrl: '/assets/aistudio/SkillIndia_cyber_security_2605d7e7.pdf',
    previewImageUrl: '/assets/aistudio/previews/cert-cybersecurity.jpg',
    skills: ['Cybersecurity', 'Network Security', 'Vulnerability Analysis', 'Security Best Practices'],
    featured: false,
  },
  {
    id: 'cert-simplilearn-python',
    title: 'Python for Beginners',
    issuer: 'Simplilearn SkillUp',
    partner: 'Simplilearn Online Learning',
    date: 'June 2025',
    category: 'programming',
    credentialId: '8440023',
    description:
      'Foundational certification verifying proficiency in Python syntax, modular script authoring, file I/O operations, and computational logic.',
    pdfUrl: '/assets/aistudio/simplilearn_python._e4eeccd3.pdf',
    previewImageUrl: '/assets/aistudio/previews/cert-simplilearn.jpg',
    skills: ['Python Fundamentals', 'Control Flow', 'Data Manipulation'],
    featured: false,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'project-insurance-fraud',
    title: 'Auto Insurance Fraud Detection Portal',
    subtitle: 'Machine Learning Web Application for Claims Risk Scoring',
    description:
      'An end-to-end predictive machine learning web platform that flags fraudulent automotive insurance claims in real-time. Employs SMOTE class balancing and optimized Random Forest classification to deliver dependable risk probability indicators.',
    metrics: '81% Accuracy · SMOTE Balanced · Sub-100ms Inference',
    tags: ['Python', 'Flask', 'Scikit-Learn', 'Pandas', 'Machine Learning', 'JavaScript'],
    highlights: [
      'Engineered complete preprocessing pipeline handling missing telemetry and categorical features',
      'Applied Synthetic Minority Over-sampling Technique (SMOTE) to eliminate severe fraud class imbalance',
      'Deployed interactive Flask web interface with visual claim probability meters and risk factor breakdowns',
    ],
    image: '/assets/aistudio/insurance-fraud-detection-cover_b0a53619.png',
    demoUrl: 'https://insurancefrauddetection-psi.vercel.app/',
    githubUrl: 'https://github.com/sairamnarra/Auto_insurance_Fraud_Detection',
    featured: true,
  },
  {
    id: 'project-ai-resume',
    title: 'AI Resume Screening & Ranking Engine',
    subtitle: 'Natural Language Processing Candidate Matching System',
    description:
      'An automated recruitment analytics tool that ingests candidate resumes in PDF and DOCX formats, extracts core technical competencies, and semantically ranks candidates against custom job descriptions using TF-IDF and vector similarity.',
    metrics: 'Multi-Format Parsing · Instant Semantic Ranking · Zero Manual Overhead',
    tags: ['Python', 'Flask', 'NLP', 'Scikit-Learn', 'Vector Similarity', 'Tailwind CSS'],
    highlights: [
      'Parses and normalizes unstructured text from diverse resume layouts with high fidelity',
      'Computes cosine similarity vectors between candidate skill profiles and position requirements',
      'Delivers sortable candidate leaderboards with highlighted qualification match scores',
    ],
    image: '/assets/aistudio/resume-screening-cover_82d588ce.png',
    demoUrl: 'https://airesumerank1.vercel.app/',
    githubUrl: 'https://github.com/sairamnarra/ai_resume_rank',
    featured: true,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-vois',
    role: 'Data Analyst Intern',
    organization: "AICTE & 'VOIS for Tech University Engagement Program'",
    period: 'Sep 2025 – Oct 2025',
    type: 'internship',
    description:
      'Virtual internship on Conversational Data Analysis with LLMs implemented by Edunet Foundation. Focused on data wrangling, automated analytics, and reporting.',
    highlights: [
      'Performed structured data cleaning, preprocessing, and exploratory analysis across large transaction sets',
      'Applied statistical models to uncover key performance indicators (KPIs) and operational trends',
      'Demonstrated data-driven decision frameworks to institutional evaluators',
    ],
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Analytics'],
    certificate: CERTIFICATES.find((c) => c.id === 'cert-vois-data-analytics'),
  },
  {
    id: 'exp-microsoft-elevate',
    role: 'Emerging Technologies Intern',
    organization: 'Microsoft Elevate & AICTE',
    period: 'Feb 2026 – Mar 2026',
    type: 'internship',
    description:
      '4-week intensive internship on Power BI for Business Applications and 20-hour specialized track in Artificial Intelligence & Machine Learning.',
    highlights: [
      'Constructed business intelligence dashboards visualizing multi-dimensional enterprise metrics',
      'Implemented predictive models using standard machine learning classification workflows in Python',
      'Earned dual official completion credentials accredited by Microsoft Elevate and AICTE leadership',
    ],
    techStack: ['Power BI', 'Python', 'Machine Learning', 'DAX', 'Business Intelligence'],
    certificate: CERTIFICATES.find((c) => c.id === 'cert-powerbi-microsoft'),
  },
  {
    id: 'exp-techsaksham',
    role: 'AI / ML Virtual Intern',
    organization: 'TechSaksham (Microsoft & SAP) & Edunet Foundation',
    period: '2025',
    type: 'internship',
    description:
      'Joint CSR initiative of Microsoft & SAP focusing on transformative AI architectures, deep learning principles, and cloud-assisted model training.',
    highlights: [
      'Developed Natural Language Processing pipelines to analyze textual information and extract domain entities',
      'Built and evaluated candidate classification models using Scikit-Learn',
      'Awarded Certificate of Internship under AICTE Student ID: STU678e594176fb51737382209',
    ],
    techStack: ['Python', 'Scikit-Learn', 'NLP', 'Machine Learning', 'Edunet AI'],
    certificate: CERTIFICATES.find((c) => c.id === 'cert-techsaksham-ai'),
  },
];

export const EDUCATIONS: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Vaagdevi Engineering College',
    period: '2023 – 2025',
    score: '8.78',
    scoreType: 'CGPA',
    honor: 'Batch Topper Award',
    description:
      'Graduated at the top of the MCA batch with academic distinction. Coursework focused on Advanced Data Structures, Database Management Systems, Object-Oriented Software Engineering, and Python Machine Learning.',
  },
  {
    degree: 'Bachelor of Science (Degree)',
    institution: 'University Arts and Science College',
    period: '2020 – 2023',
    score: '8.00',
    scoreType: 'CGPA',
    honor: 'First Class with Distinction',
    description:
      'Rigorous foundation in Computer Science, Mathematics, and Analytical Statistics. Developed foundational programming proficiencies in C, C++, and Relational Database Systems.',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'NRI Junior College',
    period: '2018 – 2020',
    score: '9.59',
    scoreType: 'CGPA',
    honor: 'Top Percentile',
    description:
      'Completed Mathematics, Physics, and Chemistry (MPC) stream with 9.59 CGPA, building solid quantitative and problem-solving skills.',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'ZPPS High School',
    period: '2017 – 2018',
    score: '9.30',
    scoreType: 'CGPA',
    honor: 'Mandal Academic Topper',
    description:
      'Achieved highest academic rank across the entire mandal in state board examinations.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Core Systems',
    description: 'Foundational programming and query languages',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'SQL / MySQL', level: 'Proficient' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'HTML5 & CSS3', level: 'Proficient' },
    ],
  },
  {
    title: 'Machine Learning & Data Science',
    description: 'Algorithmic models, data manipulation, and NLP',
    skills: [
      { name: 'Scikit-Learn', level: 'Proficient' },
      { name: 'Pandas & NumPy', level: 'Advanced' },
      { name: 'Natural Language Processing (NLP)', level: 'Intermediate' },
      { name: 'Power BI', level: 'Proficient' },
      { name: 'Matplotlib & Seaborn', level: 'Proficient' },
    ],
  },
  {
    title: 'Web Frameworks & Engineering',
    description: 'Backend services and client-side integration',
    skills: [
      { name: 'Flask', level: 'Proficient' },
      { name: 'REST APIs', level: 'Proficient' },
      { name: 'React & Modern Frontend', level: 'Working Knowledge' },
      { name: 'Tailwind CSS', level: 'Proficient' },
    ],
  },
  {
    title: 'Developer Tools & Platforms',
    description: 'Version control, developer environments, and deployment',
    skills: [
      { name: 'Git & GitHub', level: 'Proficient' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Jupyter Notebook', level: 'Advanced' },
      { name: 'Vercel Deployment', level: 'Proficient' },
      { name: 'MS Office Suite', level: 'Advanced' },
    ],
  },
];
