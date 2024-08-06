import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate software developer with a knack for building robust and scalable web applications. One year of hands-on experience I honed my skills in front-end technologies like React and Next.js, and back-end technologies like Node.js, MySQL, MongoDB etc. My goal is to leverage my expertise to create innovative solutions that enhance performance and deliver exceptional user experiences`;

export const ABOUT_TEXT = `I am a professional and enthusiastic programmer with a quick learning attitude and a passion for exploring new technologies. With one year of experience, I worked with different technologies including Reactjs, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity about how people work, and evolved into a career where I am constantly trying to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems while providing high-quality solutions. In addition to coding, I stay active, explore new technologies, contribute to open-source projects, and have some business development skills. I am available for job opportunities that match my skills and interests.`;

export const EXPERIENCES = [
  {
    year: "Jul'24 - Aug'24",
    role: " Full Stack Developer Intern",
    company: "Appwars Technologies",
    description: `Designed and Developed a webpage using the MERN stack (MongoDB, Express.js, React, Node.js), focusing on database administration and backend growth. Gained experience  in front-end and back-end integration, database handling, server-side operations, and learned Next.js for enhanced full-stack development.`,
    technologies: ["Expressjs", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "Aug'23 - Sept'23",
    role: "Business Development Intern",
    company:"HouseBoon",
    description: `Identified valuable leads via social media, networking events, and targeted marketing. Applied lead generation methods through numerous cold calls daily. Received a Letter of Recommendation (LOR) from the CEO of the company.`,
    technologies: ["Excel", "Communication",],
  },
  {
    year: "Jul'23 - Aug'23",
    role: "Summer Training",
    company: "DigiiDunia",
    description: `Gained hands-on experience in front-end development and UI design, receiving positive feedback and user engagement. Developed a Netflix Clone, Password Manager, and Temperature Converter web application, and implemented API calls in JavaScript.`,
    technologies: ["Html", "Css", "Javascript", "Sql"],
  },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
 ];

export const PROJECTS = [
  {
    title: "NFT Marketplace",
    image: project1,
    description:
      "Successfully built a marketplace  enabling seamless cryptocurrency transactions for digital products. Integrated Cryptomus payment gateway, ensuring secure transactions. Designed interactive, responsive user interfaces with React and Tailwind CSS, enhancing usability across devices and browsers.",
    technologies: ["Reactjs", "TailwindCSS","Node.js", "MongoDB", "Epxress.js",],
  },
  {
    title: "Chat.Ai",
    image: project2,
    description:
      "Developed an AI Chat App using React and Google Gemini API for AI-driven conversations. Utilized React state management for real-time chat data, ensuring efficient API calls and smooth user experience.",
    technologies: ["React.js", "GoogleGeminiApi", "TailwindCSS"],
  },
  {
    title: "Password Manager",
    image: project3,
    description:
      "Developed a personal password manager application, focusing on secure storage and management of user credentials. Implemented  a user-friendly interface for easy password retrieval and organization.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Netflix-clone",
    image: project4,
    description:
      "Developed a Netflix clone application, integrating APIs to display movie UIs. Focused on creating an engaging user interface and seamless movie browsing experience",
    technologies: ["HTML", "CSS", "MovieDbApi", "Javascript"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
