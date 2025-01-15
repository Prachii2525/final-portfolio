import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  apple,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  greenwrap,
  meta,
  starbucks,
  tesla,
  shopify,
  virtual,
  amdocs,
  engineersday,
  sts,
  



  jobit,
  tripguide,
  threejs,
  lpf,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "3D Visual Creator",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Content Presenter",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const achievements = [
  {
    title: "LILA Poonawalla Scholarship",
    description: "Awarded for academic excellence and leadership potential.",
    image: lpf, // Replace with actual image path
  },
  {
    title: "Engineer’s Day Speech",
    description: "Delivered a speech on Engineer's Day in my department.",
    image: engineersday, // Replace with actual image path
  },
  {
    title: "Hackathon Participation",
    description: "Shortlisted in Top 10 in Spark The Summer Hackathon at Mehsana, Gujarat.",
    image: sts, // Replace with actual image path
  },
  {
    title: "Corporate Employability Program",
    description: "Completed a program at Amdocs through the LILA Poonawalla Foundation.",
    image: amdocs, // Replace with actual image path
  },
];




const projects = [
  {
    name: "Apple Web",
    description:
      "Created a 3D product showcase for the Apple iPhone 15 Pro Max using React Three Fiber, featuring smooth GSAP animations and scroll-based interactions. The project highlights product details with dynamic rotation effects and is optimized for seamless performance across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "https://github.com/Prachii2525/Apple-web",
    demo_link: "https://pn-apple-web.vercel.app/",
  },
  {
    name: "Virtual Books Library",
    description:
      "A responsive React and Tailwind CSS application for discovering and saving books. Features include dynamic search, category filtering, book trailers, and persistent favorites with interactive animations for an engaging user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: virtual,
    source_code_link: "https://github.com/Prachii2525/virtual-books-library",
    demo_link: "https://virtual-books-library.vercel.app/",
  },
  {
    name: "GreenWrap Emporium",
    description:
      "Developed an interactive e-commerce website, GreenWrap Emporium, featuring a product carousel, dynamic functionality. Designed a responsive and user-friendly interface to showcase products effectively, ensuring seamless navigation and optimized performance.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: greenwrap,
    source_code_link: "https://github.com/",
    demo_link: "https://green-wrap-emporium-main.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
