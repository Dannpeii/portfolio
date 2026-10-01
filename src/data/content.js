export const NAV_ITEMS = ["Home", "About", "Experiences"];

export const HERO = {
  chineseGreeting: "你好，我是小德", // Or "你好，我是裴有德" / "你好！"
  hello: "Hello, I'm",
  greeting: "Danny Bui",
  role: "Fullstack Test Engineer | Automation Test Engineer </>",
  chineseRole: "- 测试开发工程师 (SDET) -",
  bio: "Full-stack Test Engineer with extensive experience verifying large-scale backend systems and APIs. Proficient in manual and automated testing, API validation, requirements analysis, and SQL verification. With a strong software development background, I collaborate closely with development teams to reduce defect leakage, improve release stability, and deliver robust, high-quality software.",
  github: "https://github.com/Dannpeii",
  email: "mailto:ducbh.dev@gmail.com",
};

export const EDUCATION = {
  degree: "Bachelor of Software Engineering",
  school: "FPT University (campus HCMC)",
  years: "2020 - 2024",
};

export const ABOUT = {
  title: "About Me",
  Language: "Languages",
  Vietnamese: "Vietnamese (Native)",
  English: "English",
  Chinese: "Chinese - HSK 4",
};

export const CONTACT = {
  title: "Contact Me",
  email: "mailto:ducbh.dev@gmail.com",
  phone: "(+84) 971 22 7879)",
  address: "Ho Chi Minh City, Vietnam",
  github: "https://github.com/Dannpeii",
  linkedin: "https://www.linkedin.com/in/dannybuivn/",
  quote:
    '"Keep going. Everything you need will come to you at the perfect time."',
};

export const EXP_JOBS = [
  {
    name: "Straits Financial",
    role: "Automation Test Engineer",
    duration: "04/2026 - Present",
    description:
      "Responsible for developing and maintaining automated test scripts, performing regression testing, and collaborating with the development team to ensure software quality.",
    team_size: "5",
    tech_stack: ["Playwright - typescript", "PLane", "Git"],
    logoKey: "SFVN",
  },
  {
    name: "ISV Vietnam CO.,LTD.",
    role: "SDET & Backend Developer",
    duration: "02/2025 - 04/2026",
    description:
      "Handled both development and automated testing for web applications, ensuring high-quality software delivery.",
    team_size: "5",
    tech_stack: [
      "TypeScript",
      "Node.js",
      "Tortoise",
      "GraphQL",
      "Postman",
      "Mantis",
    ],
    logoKey: "ISV",
  },
  {
    name: "FPT Software Co., Ltd.",
    role: "Java Developer Intern",
    duration: "2023",
    description:
      "Developed backend services and RESTful APIs for a recruitment site using Spring Boot.",
    team_size: "12",
    tech_stack: ["Java", "Spring Boot", "Git"],
    logoKey: "fpts",
  },
];

export const PROJECTS = [
  {
    id: "lumos",
    video: "https://youtu.be/YKV2S68ffqw?si=fKpTUpQ0Bxjf-Yt7",
    title: "Lumos - A Mothers' Home Healthcare Platform",
    members: "4",
    description:
      "A platform connecting medical services at home for expectant mothers, new mothers, and infants. Make an appointment easily and feel secure with reputable service providers",
    technicalUsed:
      "HTML5, CSS, React, Next.js, ASP.NET - Entity Framework, RESTful API, Azure SQL DB Server, Flutter, hive, firebase, payOS (payment)",
    link: {
      label: "All About Lumos: ",
      text: "About Lumos",
      url: "https://www.canva.com/design/DAF_uZRO42A/FqrupoD4YcGtulcL0x39gA/view?utm_content=DAF_uZRO42A&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    },
  },
  {
    id: "bike-parking",
    image: "bai",
    title: "No Cash Payment Bike Parking Application for FPTU Campus",
    members: "4",
    description:
      "No Cash Payment Bike Parking Application for FPTU Campus is an intelligent app that efficiently manages the parking facilities at FPT University",
    technicalUsed:
      "Flutter, Electron, ASP.NET - Entity Framework, RESTful API, hive, firebase, ZaloPay, VnPay (payment), Docker.",
  },
];
