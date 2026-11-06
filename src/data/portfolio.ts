/**
 * Central portfolio data for Manmohan Ganesan.
 * Update this file to change portfolio content. Keep claims and metrics aligned
 * with the resume and project evidence.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Manmohan Ganesan',
  displayName: 'Manmohan Ganesan',
  firstName: 'MANMOHAN',
  seriesTag: 'THE SERIES',
  originalLabel: 'A MANMOHAN ORIGINAL',
  role: 'Data Science | Machine Learning | AI Engineering',
  tagline: ['Data Scientist', 'Machine Learning', 'RAG', 'Agentic AI', 'AI Agents'],
  intro:
    'Data Scientist with hands-on experience in machine learning, NLP, and Retrieval-Augmented Generation. Builds end-to-end AI projects involving data pipelines, vector databases, and scalable ML workflows using Python, LangChain, SQL, and modern AI tooling.',
  location: 'Bengaluru, Karnataka',
  phone: '9632941796',
  email: 'manmohanguitarist10@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/manmohan-ganesan/',
    github: 'https://github.com/manmohanganesh',
  },
  resumePdf: `${import.meta.env.BASE_URL}assets/Manmohan_Ganesan_Resume.pdf`,
  portrait: {
    src: `${import.meta.env.BASE_URL}assets/portrait-720.webp`,
    srcSet: [
      `${import.meta.env.BASE_URL}assets/portrait-420.webp 420w`,
      `${import.meta.env.BASE_URL}assets/portrait-720.webp 720w`,
      `${import.meta.env.BASE_URL}assets/portrait-1100.webp 1100w`,
    ].join(', '),
    alt: 'Manmohan Ganesan',
  },
  interests: ['Machine Learning', 'Retrieval-Augmented Generation', 'Agentic AI'],
};

export const education = [
  {
    school: 'Christ University',
    place: 'Bengaluru, Karnataka',
    degree: "Master's in Computer Applications",
    period: '2018 – 2021',
    score: 'CGPA 8.73',
  },
  {
    school: "St. Joseph's University",
    place: 'Bengaluru, Karnataka',
    degree: 'B.Sc. in Physics, Mathematics and Computer Science',
    period: '2015 - 2021',
    score: 'CGPA 7.5',
  },
];

export const experience = [
  {
    company: 'SysCloud',
    role: 'Software Developer',
    place: 'Bengaluru, Karnataka',
    period: '2020 - 2021',
    points: [
      'Analyzed operational datasets using SQL and Excel to support reporting, workflow monitoring, debugging, and issue analysis.',
      'Developed SQL queries with joins, aggregations, filters, and subqueries to retrieve, validate, and analyze business-critical data.',
      'Automated repetitive data-processing and reporting workflows using Python, reducing manual effort and improving operational efficiency.',
      'Built Excel reports and dashboards using pivot tables and lookup functions; collaborated across teams to investigate system logs and recurring issues.',
    ],
  },
  {
    company: 'U&I Volunteering',
    role: 'Teacher',
    place: 'Bengaluru',
    period: '2025 - Present',
    points: [
      'Taught students from 1st to 10th standard across multiple subjects during weekend learning sessions.',
      'Mentored students individually and in groups, and worked with fellow volunteers to create an engaging learning environment.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ecommerce-intent',
    title: 'E-Commerce Intent Prediction',
    year: '2026',
    genre: 'LLM • Fine-Tuning • Machine Learning',
    logline: 'Fine-tuned a quantized 7B instruction model to predict e-commerce user revenue intent and return schema-valid JSON.',
    stack: ['Python', 'PyTorch', 'Qwen2.5-Instruct', 'QLoRA', 'Hugging Face', 'PEFT', 'TRL', 'bitsandbytes', 'llama.cpp'],
    build: [
      'Fine-tuned the 7-billion-parameter Qwen2.5-Instruct model with 4-bit QLoRA to predict e-commerce user revenue intent, reaching 78.0% prediction accuracy and 100.0% valid JSON schema output.',
      'Built a memory-constrained training workflow on Kaggle T4 GPUs, adjusting adapter parameter types and mixed-precision settings to address VRAM limits.',
      'Merged LoRA adapters on CPU and compiled the model to a 4-bit GGUF format with llama.cpp for local inference.',
    ],
    features: ['4-bit QLoRA fine-tuning', 'Kaggle T4 memory-aware training', 'JSON schema-constrained outputs', 'CPU adapter merging', 'GGUF local inference'],
    metrics: [
      { value: '78.0%', label: 'prediction accuracy' },
      { value: '100.0%', label: 'valid JSON schema outputs' },
      { value: '7B', label: 'base model parameters' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'cart-abandonment',
    title: 'Cart Abandonment Intelligence System',
    year: '2026',
    genre: 'Machine Learning • Explainable AI • RAG',
    logline: 'An AI decision-support system that predicts cart abandonment and creates personalized intervention strategies.',
    stack: ['Python', 'XGBoost', 'SHAP', 'Hugging Face Embeddings', 'ChromaDB', 'Gemini API', 'Streamlit'],
    build: [
      'Built an XGBoost classification pipeline with session features including engagement score, bounce and exit rates, scroll depth, and price sensitivity; reported approximately 90% classification accuracy.',
      'Combined SHAP explanations with a retrieval-augmented diagnosis flow using Hugging Face embeddings and ChromaDB to connect individual predictions with population-level behavioral insights.',
      'Integrated prediction, what-if simulation, intervention impact estimation, and Gemini-generated recommendations in a multi-page Streamlit dashboard.',
    ],
    features: ['Behavioral feature engineering', 'SHAP explainability', 'ChromaDB-based RAG diagnosis', 'What-if simulation', 'LLM-generated interventions', 'Multi-page Streamlit dashboard'],
    metrics: [{ value: '~90%', label: 'classification accuracy (reported)' }],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'Google-play-analytics',
    title: 'Google Play Store Analytics Dashboard',
    year: '2026',
    genre: 'Analytics • Business Intelligence • Power BI',
    logline: 'An interactive dashboard exploring app ratings, installs, reviews, pricing, and category performance.',
    stack: ['Power BI', 'Data Cleaning', 'Data Transformation', 'Data Visualization'],
    build: [
      'Cleaned and transformed Google Play Store data to support analysis of app performance.',
      'Designed KPI-driven visualizations for category performance, ratings, reviews, pricing, engagement, and install trends.',
    ],
    features: ['KPI dashboard', 'Category comparisons', 'Ratings and review analysis', 'Install and pricing trends'],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };

export const achievements: Achievement[] = [
  {
    id: 'hackathon-winner',
    title: 'National-Level Hackathon Winner',
    org: 'Rajagiri College, Ernakulam',
    detail: 'Won a national-level hackathon.',
    laurel: 'Hackathon Winner',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'IIT Patna', name: 'Professional Fellowship in Data Science and Agentic AI' },
  { issuer: 'Oracle', name: 'Certified AI Foundations Associate (2025)' },
  { issuer: 'Oracle', name: 'Certified Generative AI Professional (2025)' },
  { issuer: 'Microsoft', name: 'Microsoft Certified: Azure Fundamentals (2026)' },
  { issuer: 'JPMorgan Chase & Co.', name: 'Excel Skills' },
  { issuer: 'AlmaBetter', name: 'Full Stack Data Science Program' },
  { issuer: 'Google', name: 'Advanced Data Analytics Professional' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages', title: 'Languages', subtitle: 'Programming and querying',
    skills: [{ name: 'Python', mono: 'Py' }, { name: 'SQL', mono: 'Sq' }, { name: 'JavaScript', mono: 'Js' }],
  },
  {
    id: 'ai-llm', title: 'AI & LLM', subtitle: 'Retrieval, fine-tuning and orchestration',
    skills: [
      { name: 'LLM Fine-Tuning', mono: 'FT' }, { name: 'QLoRA', mono: 'QL' }, { name: 'PEFT', mono: 'Pf' }, { name: 'TRL', mono: 'Tr' },
      { name: 'LangChain', mono: 'Lc' }, { name: 'LangGraph', mono: 'Lg' }, { name: 'RAG', mono: 'Rg' }, { name: 'Prompt Engineering', mono: 'Pr' },
      { name: 'Embeddings', mono: 'Em' }, { name: 'FAISS', mono: 'Fa' }, { name: 'ChromaDB', mono: 'Ch' }, { name: 'Hugging Face', mono: 'Hf' },
      { name: 'Gemini API', mono: 'Ge' }, { name: 'OpenAI API', mono: 'Oi' },
    ],
  },
  {
    id: 'data', title: 'Data Analysis & Visualization', subtitle: 'From preparation to communication',
    skills: [
      { name: 'Pandas', mono: 'Pd' }, { name: 'NumPy', mono: 'Np' }, { name: 'Matplotlib', mono: 'Mp' }, { name: 'Seaborn', mono: 'Sb' },
      { name: 'Tableau', mono: 'Tb' }, { name: 'Power BI', mono: 'Bi' }, { name: 'Data Cleaning', mono: 'Dc' }, { name: 'EDA', mono: 'Ed' },
    ],
  },
  {
    id: 'machine-learning', title: 'Machine Learning', subtitle: 'Modeling and evaluation',
    skills: [
      { name: 'PyTorch', mono: 'Pt' }, { name: 'Scikit-learn', mono: 'Sk' }, { name: 'XGBoost', mono: 'Xg' }, { name: 'Supervised Learning', mono: 'Sl' },
      { name: 'Regression', mono: 'Re' }, { name: 'Classification', mono: 'Cl' }, { name: 'Feature Engineering', mono: 'Fe' },
      { name: 'Data Preprocessing', mono: 'Dp' }, { name: 'Model Evaluation', mono: 'Me' }, { name: 'SHAP', mono: 'Sh' },
    ],
  },
  {
    id: 'tools', title: 'Tools & Technologies', subtitle: 'Building and operating workflows',
    skills: [
      { name: 'Git', mono: 'Gt' }, { name: 'GitHub', mono: 'Gh' }, { name: 'Streamlit', mono: 'St' }, { name: 'Jupyter Notebook', mono: 'Jn' },
      { name: 'YAML', mono: 'Ym' }, { name: 'Logging', mono: 'Lg' }, { name: 'Config-Driven Pipelines', mono: 'Cp' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['E-Commerce Intent Prediction', 'Cart Abandonment Intelligence System', 'SysCloud workflow automation'],
  SQL: ['SysCloud operational reporting and analysis'],
  'LLM Fine-Tuning': ['E-Commerce Intent Prediction'],
  QLoRA: ['E-Commerce Intent Prediction'],
  LangChain: ['Listed in resume skills'],
  LangGraph: ['Listed in resume skills'],
  RAG: ['Cart Abandonment Intelligence System'],
  XGBoost: ['Cart Abandonment Intelligence System'],
  SHAP: ['Cart Abandonment Intelligence System'],
  ChromaDB: ['Cart Abandonment Intelligence System'],
  'Power BI': ['Google Play Store Analytics Dashboard'],
  Streamlit: ['Cart Abandonment Intelligence System'],
  'Data Cleaning': ['Google Play Store Analytics Dashboard'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1, title: 'The Data Foundations', period: '2018 – 2021',
    synopsis: "Studied Physics, Mathematics and Computer Science at St. Joseph's University.",
    episodes: [{ code: 'S01 E01', title: 'The Foundations', description: "B.Sc. in Physics, Mathematics and Computer Science — CGPA 7.5.", tags: ['Physics', 'Mathematics', 'Computer Science'], runtime: '2018 – 2021', palette: amber }],
  },
  {
    number: 2, title: 'Into Data Science', period: 'Dates not listed',
    synopsis: 'Master of Computer Applications at Christ University and professional learning in data science and analytics.',
    episodes: [
      { code: 'S02 E01', title: 'The Analyst', description: 'Master of Computer Applications at Christ University — CGPA 8.73.', tags: ['MCA', 'CGPA 8.73'], runtime: 'Christ University', palette: violet },
      { code: 'S02 E02', title: 'The Fellowship', description: 'Professional Fellowship in Data Science and Agentic AI from IIT Patna.', tags: ['Data Science', 'Agentic AI'], runtime: 'IIT Patna', palette: ocean },
    ],
  },
  {
    number: 3, title: 'Building Applied AI', period: '2026',
    synopsis: 'Hands-on projects across LLM fine-tuning, behavioral machine learning, RAG, and analytics.',
    episodes: [
      { code: 'S03 E01', title: 'The Fine-Tuner', description: 'Fine-tuned Qwen2.5-Instruct with 4-bit QLoRA for e-commerce revenue-intent prediction.', tags: ['Python', 'PyTorch', 'QLoRA'], runtime: 'E-Commerce Intent Prediction', palette: crimson },
      { code: 'S03 E02', title: 'The Decision Scientist', description: 'Combined XGBoost, SHAP, ChromaDB retrieval, simulation, and Gemini recommendations for cart-abandonment interventions.', tags: ['XGBoost', 'SHAP', 'RAG'], runtime: 'Cart Abandonment Intelligence System', palette: jade },
      { code: 'S03 E03', title: 'The Visualizer', description: 'Cleaned and analyzed Google Play Store data in an interactive Power BI dashboard.', tags: ['Power BI', 'Data Cleaning'], runtime: 'Google Play Store Analytics Dashboard', palette: ocean },
    ],
  },
  {
    number: 4, title: 'Software in Practice', period: 'Dates not listed',
    synopsis: 'Software development at SysCloud, supporting analysis, reporting, automation, and operational workflows.',
    episodes: [{ code: 'S04 E01', title: 'The Developer', description: 'Used SQL, Excel, and Python to analyze operational data, automate reporting, investigate issues, and improve workflows.', tags: ['SQL', 'Python', 'Excel'], runtime: 'SysCloud', palette: amber }],
  },
  {
    number: 5, title: "What's Next", period: 'Now streaming',
    synopsis: 'Focused on data science, machine learning, retrieval, and agentic AI.',
    episodes: [{ code: 'S05 E01', title: 'The Next Chapter', description: 'Applying ML and RAG to practical decision-support systems.', tags: ['Machine Learning', 'RAG', 'Agentic AI'], runtime: 'Current focus', palette: violet }],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Core focus', title: 'Data Science', detail: 'Machine learning, NLP and analytics', palette: ocean },
  { label: 'Featured AI project', title: 'E-Commerce Intent Prediction', detail: '78.0% prediction accuracy', palette: crimson },
  { label: 'LLM engineering', title: '4-bit QLoRA', detail: 'Fine-tuned a 7B Qwen2.5 model', palette: violet },
  { label: 'Decision intelligence', title: 'Cart Abandonment', detail: 'XGBoost + SHAP + RAG', palette: jade },
  { label: 'Education', title: 'MCA', detail: 'Christ University • CGPA 8.73', palette: amber },
  { label: 'Fellowship', title: 'Data Science & Agentic AI', detail: 'Professional Fellowship • IIT Patna', palette: ocean },
  { label: 'Analytics', title: 'Google Play Store', detail: 'Interactive Power BI dashboard', palette: jade },
  { label: 'Experience', title: 'Software Developer', detail: 'SysCloud • SQL, Python and Excel', palette: amber },
  { label: 'Recognition', title: 'Hackathon Winner', detail: 'National level • Rajagiri College', palette: crimson },
  { label: 'Current focus', title: 'RAG & ML', detail: 'Applied AI systems and data workflows', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'MCA · 8.73 CGPA', lines: ['Christ University', "B.Sc. Physics, Mathematics & Computer Science · St. Joseph's University"], chips: ['Data Science'] },
  { kicker: 'Skills', title: 'Python · SQL · ML', lines: ['PyTorch, Scikit-learn, XGBoost, SHAP', 'LangChain, LangGraph, embeddings, vector databases'], chips: ['RAG', 'QLoRA', 'Power BI'] },
  { kicker: 'Experience', title: 'Software Developer', lines: ['SysCloud', 'Operational analysis, reporting automation, SQL and Excel dashboards'] },
  { kicker: 'Projects', title: 'Three AI & Data Originals', lines: ['E-Commerce Intent Prediction — 78.0% accuracy, 100.0% valid JSON', 'Cart Abandonment Intelligence — approximately 90% classification accuracy', 'Google Play Store Analytics — Power BI dashboard'] },
  { kicker: 'Recognition', title: 'National Hackathon Winner', lines: ['Rajagiri College, Ernakulam', 'IIT Patna Professional Fellowship in Data Science and Agentic AI'] },
  { kicker: 'Current mission', title: 'Applied Data & AI', lines: ['Machine Learning · NLP · RAG · Agentic AI'] },
];

// Keep `sushmita` as the template's internal ID; the visible profile name is Manmohan.
export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'sushmita', name: 'Manmohan', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Experience, projects & skills first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Data & AI', blurb: 'Projects, methods & tools first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Highlights', blurb: 'The story and project highlights first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Projects • Data & AI`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from my experience', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements & Certifications', meta: `${achievements.length} Achievement • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
