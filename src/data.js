// ============================================================
//  SEMUA ISI WEBSITE ADA DI FILE INI.
//  Ganti teks di bawah dengan data kamu, tidak perlu menyentuh komponen.
//  Semua teks ditulis dalam bahasa Inggris karena target buyer internasional.
// ============================================================

export const profile = {
  name: 'AL Fajrin',
  role: 'Frontend developer',
  email: 'alfazrin653@gmail.com',
  location: 'Jakarta, Indonesia',
  timezone: 'UTC+7',
  availability: 'Available for new projects',

  // Kalimat besar di hero. Huruf-hurufnya bereaksi ke kursor.
  headline: "I build websites people don't want to leave.",
  intro:
    'Freelance frontend developer for startups and small teams. I turn your idea into a fast, good-looking site with real interaction, and I stay until it ships.',

  // Taruh foto kamu di folder /public lalu ganti jadi '/foto-saya.jpg'
  photo: '/photo.jpeg',

  links: {
    upwork: 'https://www.upwork.com/freelancers/~01ac9219818a2bb170',
    github: 'https://github.com/alfajrin653',
    linkedin: 'https://www.linkedin.com/in/al-fajrin-621145266/',
  },
}

export const marquee = [
  'Landing pages',
  'React apps',
  'Tailwind CSS',
  'Animations that feel good',
  'Fast on mobile',
  'Clean handoff',
]

// Daftar tools. Nama di sini harus sama persis dengan isi "tools" di tiap project.
export const tools = [
  'React.js',
  'Tailwind CSS',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Framer Motion',
  'Figma',
  'REST APIs',
  'Git',
  'node.js',
  'mysql',
  'postgreSQL',
  
]

export const projects = [
 
{
  title: 'Koran Gala 5.0',
  kind: 'full-stack digital news platform',
  year: '2026',
  color: 'bg-pink',
  summary:
    'A full-stack digital news platform focused on financial journalism and hyperlocal news coverage across West Java, featuring a modern editorial experience and data-driven information services.',
  role: 'Full-Stack Developer, Design and Development',
  result:
    'Developed approximately 80% of the platform, including the frontend, backend REST API, database architecture, authentication system, and core editorial features. The remaining work focuses on additional platform features and improvements.',
  tools: [
    'React.js',
    'Vite',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MySQL',
    'Sequelize ORM',
    'Zustand',
    'JWT Authentication',
    'Axios',
    'REST API',
    'payment getway integration',
    'midtrans integration',
  ],
  link: '',
  repo: 'https://github.com/alfajrin653/project-korangala-publick',
  image: '/img/korangala.png', // Example: '/projects/koran-gala.png'
},
{
  title: 'GoldTrade',
  kind: 'transaction management system',
  year: '2026',
  color: 'bg-amber',
  summary:
    'A full-stack gold transaction management system built to handle gold purchase and sales submissions, approval workflows, stock tracking, transaction history, photo evidence, and real-time notifications between sales and management teams.',
  role: 'Full-Stack Developer, System Design and Development',
  result:
    'Built a role-based transaction management platform for Sales and Management users. Sales can submit gold purchase and sales transactions with transaction details, descriptions, account information, and supporting photos. Management can review submissions, approve or reject transactions with rejection notes, upload transfer proof for approved gold purchases, and automatically update gold stock. The system also includes transaction tracking, audit logs, dashboard statistics, real-time Socket.io notifications, cloud-based image uploads, authentication, and server-side validation.',
  tools: [
    'React.js',
    'Vite',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'Prisma ORM',
    'MySQL',
    'Socket.io',
    'Cloudinary',
    'JWT Authentication',
    'Axios',
    'React Router',
    'Framer Motion',
    'Recharts',
    'JavaScript (ES6+)'
  ],
  link: '',
  repo: 'https://github.com/alfajrin653/apps-gold-public',
  image: ''
},
  
{
    title: 'Duduk Manis',
    kind: 'web application',
    year: '2026',
    color: 'bg-mint',
    summary:
      'A web platform focused on business legal services, designed to help entrepreneurs and companies navigate legal requirements and administrative processes clearly.',
    role: 'Full-Stack / Frontend Developer',
    result:
      'Built a structured web application presenting business legal service flows, clear information architecture, and responsive layouts across desktop and mobile devices.',
    tools: [
      'React.js',
      'Tailwind CSS',
      'JavaScript (ES6+)',
      'Responsive Design',
      'Figma',
      'git'
    ],
    link: 'https://dudukmanis.com',
    repo: 'https://github.com/alfajrin653/dudukmanis-new',
    image: '/img/duduk-manis.png', 
  },
{
  title: 'ANTQ Perspective Website',
    kind: 'agency portfolio website',
    year: '2026',
    color: 'bg-pink',
    summary:
      'A portfolio website for creative production agency ANTQ Perspective showcasing commercial videos, short films, documentaries, music videos, company profile/team info, and client inquiries.',
    role: 'Frontend Developer',
    result:
      'Built an agency showcase featuring dynamic portfolio data rendering, category filtering, video embeds, team and service sections, and a contact page integrated with EmailJS, WhatsApp, and social links.',
    tools: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'JavaScript (ES6+)',
      'EmailJS',
      'Responsive Design'
    ],
    link: 'https://antqperspective.com',
    repo: 'https://github.com/alfajrin653/tmrw-clone',
    image: '/img/perspektiv.png', 
  },
  {
  title: 'Indonesia Peduli Politik',
  kind: 'civic tech website',
  year: '2026',
  color: 'bg-pink',
  summary:
    'A responsive civic tech website that presents political data stories, articles, infographics, news updates, and open datasets to help Indonesian citizens engage with democracy. Designed with a red and white identity inspired by the Indonesian flag and the organization’s logo.',
  role: 'Frontend Developer, Design and Development',
  result:
    'Built a complete multi-page website with a home page, category and topic listings, article detail pages, a downloadable open data page, and an about page. Includes search, sorting, and topic filtering, a reusable component system, a custom red-and-white Tailwind theme, and an accessible mobile-friendly layout.',
  tools: [
    'React.js',
    'Vite',
    'Tailwind CSS',
    'React Router',
    'JavaScript (ES6+)',
    'Responsive Design'
  ],
  link: 'https://pedulipolitik.id',
  repo: '',
  image: '/img/pedulipolitik.png', // Example: '/img/peduli-politik.png'
},
{
  title: 'IRWATA RWA Website',
  kind: 'corporate website',
  year: '2026',
  color: 'bg-blue',
  summary:
    'A modern, futuristic corporate website concept for an Indonesian engineering and EPC company, inspired by international enterprise brands. Features a dark navy and electric blue theme with glassmorphism cards, animated grid background, floating gradient orbs, and smooth scroll interactions.',
  role: 'Web Development',
  result:
    'Built a complete single-page website with 12 sections: hero with animated stats, about with company timeline, services, project portfolio with category filter, clients, news and insights, career listings, CSR and sustainability, contact form, and an enterprise-level footer. Includes a sticky navbar that changes on scroll, scroll progress indicator, animated counters, back-to-top button, and a responsive mobile hamburger menu.',
  tools: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'CSS Animations',
    'Intersection Observer API',
    'Responsive Design'
  ],
  link: '',
  repo: '',
  image: '', // Example: '/img/irwata-website.png'
},  

]

// export const services = [
//   {
//     title: 'Landing pages that convert',
//     text: 'One focused page with a clear offer, smooth motion, and a form or button that gets used.',
//     price: 'From $300',
//     time: '1 week',
//     color: 'bg-blue text-white',
//   },
//   {
//     title: 'Web apps in React',
//     text: 'Dashboards, booking tools, and client portals. Clean components, connected to your API.',
//     price: 'From $900',
//     time: '3 to 4 weeks',
//     color: 'bg-pink',
//   },
//   {
//     title: 'Fix and polish your site',
//     text: 'Slow, broken on mobile, or just dated? I audit it, fix what matters, and give you a short report.',
//     price: 'From $150',
//     time: '2 to 3 days',
//     color: 'bg-mint',
//   },
// ]

// export const process = [
//   { title: 'Brief', text: 'You tell me the goal. I reply within a day with questions and a fixed quote.' },
//   { title: 'Build', text: 'You see a live preview link every few days, not one big reveal at the end.' },
//   { title: 'Ship', text: 'I deploy it, hand over the code, and fix bugs free for 14 days.' },
// ]

export const process = [
  {
    title: 'Understand',
    text: 'I start by understanding the goal, users, requirements, and technical constraints of the project.',
  },
  {
    title: 'Build',
    text: 'I turn the idea or design into a working interface, connecting it with APIs and backend services when needed.',
  },
  {
    title: 'Refine',
    text: 'I test the result, improve responsiveness and usability, and refine the details before delivery.',
  },
]


export const capabilities = [
  {
    title: 'Frontend Development',
    text: 'Building responsive and interactive web interfaces with modern frontend technologies, from landing pages to complex web applications.',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS'],
    color: 'bg-blue text-black',
  },
  {
    title: 'Full-Stack Development',
    text: 'Developing complete web applications with frontend, backend APIs, authentication, databases, and business logic.',
    tags: ['Node.js', 'REST API', 'MySQL', 'PostgreSQL'],
    color: 'bg-pink',
  },
  {
    title: 'UI Implementation',
    text: 'Turning designs and ideas into polished, responsive interfaces with attention to usability, interaction, and performance.',
    tags: ['Responsive Design', 'Figma', 'UI Development'],
    color: 'bg-mint',
  },
]




export const about = {
  paragraphs: [
    'I started building websites in (year) and now spend most days making interfaces that feel alive without getting in the way.',
    'I care about the small things: how a button responds, how fast a page loads on a cheap phone, and whether the code is easy for the next developer to read.',
  ],
  facts: [
    ['Based in', 'Jakarta, Indonesia'],
    ['Working hours', '09:00 to 18:00 UTC+7, overlap with Europe and Australia'],
    ['Languages', 'English, Bahasa Indonesia'],
    ['Reply time', 'Within 24 hours'],
  ],
}
