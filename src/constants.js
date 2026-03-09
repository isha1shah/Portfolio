// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import renderLogo from './assets/tech_logo/render.png';
import appwrite from './assets/tech_logo/appwrite.png';


// Education Section Logo's
import schoolLogo from './assets/education_logo/school.png';
import collegeLogo from './assets/education_logo/college.png';
import Demo from './assets/work_logo/Demo.png';
import Blog from './assets/work_logo/Blog.png';
import streamflow from './assets/work_logo/streamflow.png';
import cc from './assets/work_logo/cc.png';


// Project Section Logo's



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Render', logo: renderLogo },
      { name: 'Appwrite', logo: appwrite },
    
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: collegeLogo,
      school: "IMS Engineering College, Ghaziabad",
      date: "2023-27",
      grade: "8.2 CGPA",
      desc: "I am currently pursuing my Bachelor's degree in Computer Science (B.Tech) from IMS Engineering College, Ghaziabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at IMS Engineering College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology (B.Tech) - Computer Science Engineering (Artificial Intelligence and Machine Learning)",
    },
    {
      id: 1,
      img: schoolLogo,
      school: "Smt. Kamla Agarwal Public School, Hapur, UP",
      date: "Apr 2022 - March 2023",
      grade: "86%",
      desc:  "I completed my Class 12 under the CBSE board with Physics, Chemistry, and Mathematics (PCM) as my core subjects. During this phase, I developed strong analytical and problem-solving skills, particularly through Mathematics and Physics. Studying PCM strengthened my logical thinking, numerical ability, and conceptual understanding, which later became the foundation of my interest in Computer Science and programming. My academic journey in senior secondary school helped me build discipline, consistency, and a goal-oriented mindset.",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "Smt. Kamla Agarwal Public School, Hapur, UP",
      date: "Apr 2020 - March 2021",
      grade: "85%",
      desc: "I completed my Class 10 under the CBSE board with a strong academic record. This phase laid the foundation for my academic discipline and curiosity for learning. I actively participated in school activities and focused on strengthening my fundamentals in Mathematics and Science. Class 10 played a crucial role in shaping my interest toward technical subjects and building confidence in my academic abilities.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "PostHive- A Blogging Platform",
      description:
        "A full-stack blogging platform built with React.js and Node.js. It allows users to create, edit, and manage blog posts with features like user authentication, comments, and responsive design. The platform supports rich text editing and integrates seamlessly with a MongoDB database.",
      image: Blog,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Node.js", "MongoDB", "Appwrite"],
      github: "https://github.com/isha1shah/megablog",
      webapp: "https://megablog-kpl4.onrender.com",
    },
    {
      id: 1,
      title: "StreamFlow- A Video Streaming Platform",
      description:
        "A full-stack video streaming platform built with React.js and Node.js. It allows users to browse, watch, and manage video content with features like user authentication, comments, and responsive design. The platform supports video playback and integrates seamlessly with a MongoDB database.",
      image: streamflow,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/isha1shah/StreamFlow",
      webapp: "https://streamflow-frontend-6w4d.onrender.com",
    },
    {
      id: 2,
      title: "Resume Builder Web App  ",
      description:
        "A React-based web application that allows users to create, customize, and download professional resumes. The app provides a variety of templates and design options to help users build visually appealing and well-structured resumes.",
      image: Demo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/isha1shah/resume-builder-mern",
      webapp: "https://resume-builder-client-5ucg.onrender.com",
    },
    {
      id: 3,
      title: "Currency Converter App",
      description:
        "A React.js-based web application that allows users to convert currencies in real-time. The app supports multiple currencies and provides a clean, responsive interface for seamless user experience.",
      image: cc,
      tags: ["React JS", "API", "Currency Conversion", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/isha1shah/currency-converter",
      webapp: "https://currency-converter-xmxd.onrender.com",
    },
  ];  