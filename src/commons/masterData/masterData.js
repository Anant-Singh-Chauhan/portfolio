/*
    Author : Anant Singh Chauhan
    Created : Jan 07, 2024
*/
const Profile = {
  mail: "eng.anant.schauhan21@gmail.com",
  profileName: "Anant Singh Chauhan",
  profileSummary:
    "I'm a Software Engineer, specializing in crafting innovative solutions that drive business success. I've experience working in 'MES', 'Insurance' and 'AgriTech' domains. My superpowers include 'Getting Things Done!' and 'Serving fault at Game Point'.",
  buildThingsFor: ["Web", "Mobile"],
  github: "https://github.com/Anant-Singh-Chauhan",
  linkedIn: "https://www.linkedin.com/in/anant-chauhan98/",
};

const Experiences = [
  {
    jobId: 3,
    companyName: "Nitara (GormalOne)",
    designation: "Software Developer",
    duration: "August 2023 - Present",
    workContributions: [
      {
        projectTitle: "Nitara Farmer Web 2.0",
        projectContributions: [
          "Working on Migration from ASP.NET to REACT for refined responsiveness and UI interactions.",
          "Expecting a 15% improved performance metrics with efficient rendering and smoother navigations.",
          "Identified and resolved critical bugs in ASP.NET version, while efficiently implementing change requests to enhance system functionality and meet stakeholder requirements.",
          ,
        ],
      },
      {
        projectTitle: "Nitara CDN",
        projectContributions: [
          "Implemented a CDN Server to serve static files to various Nitara Project Modules.",
          "Increased maintainability by providing a single point of dependency to 16+ Nitara modules.",
        ],
      },
      {
        projectTitle: "Nitara Farmer Mobile 2.0",
        projectContributions: [
          "Migrated from Kotlin to Flutter for improved cross platform compatibility on Android and iOS platforms.",
          "Lead a team of 4 to work on specific modules",
          "Resulted in Increased development efficiency and Streamlined maintenance and enhanced UX.",
        ],
      },
    ],
  },
  {
    jobId: 2,
    companyName: "Dhruv Tech. Solutions",
    designation: "Software Engineer",
    duration: "January 2022 - August 2023",
    workContributions: [
      {
        projectTitle: "Error Reprocessing Tool",
        projectContributions: [
          "Designed and implemented a responsive UI for web application from scratch.",
          "Bridged the gap between the ERP layer and MES layer by enabling the end user to efficiently handle the errors in information transactions and treat them further with various provided utilities.",
          "Lead a team of 5 members and coordinated with stakeholders and product team.",
          "The system effectively reduced the time loss in error handling at shop-floor level by an average of 30%.",
        ],
      },
      {
        projectTitle: "Contents v1.0 Migration",
        projectContributions: [
          "Migrated back end services from n8n (a low code, no code platform) to REST APIs in ASP .NET CORE 6.",
          "Resulted in decreasing average service downtime by 20% and allowing enhanced maintainability.",
        ],
      },
      {
        projectTitle: "Dhruv APS",
        projectContributions: [
          "Worked on implementing SPA, being built to help users in Planning and scheduling of various resources and tasks at hand, for increasing productivity.",
        ],
      },
    ],
  },
  {
    jobId: 1,
    companyName: "Think Gas",
    designation: "Graduate Engineering Trainee",
    duration: "September 2021 - December 2021",
    workContributions: [
      {
        projectTitle: "Raikot CGS",
        projectContributions: [
          "Owned responsibility for maintaining company assets in radius of 45 kms",
          "Coonducted routine machinery inspections and maintained RCA reports for damages",
          "Held sessions among town authorities and in various public gatherings to spread awareness about CNG and PNG."
        ],
      },
    ],
  },
];

const SelfProjects = [
  {
    id: 1,
    title: "MyNotes",
    description: [
      "Helpful for creating and managing notes; also provides user with responsive searching.",
      "'MyNotes' is a responsive web app, where user can add, remove and search notes. It uses localStorage for data Storage.",
    ],
    buildYear: "2022",
    liveLink: "https://anant-singh-chauhan.github.io/MyNotes/",
    githubLink: "https://github.com/Anant-Singh-Chauhan/MyNotes",
    toolsUsed: ["HTML", "CSS", "JS", "Google Charts"],
  },
  {
    id: 2,
    title: "Library Management",
    description: [
      " Designed and built for library admin to keep track of book inventory, issuing records, members, late fines and perform CRUD operations",
      "Implemented Sorting, Interactive Searching, Data Visualization graph, Pagination, Description popups, Backing and Restoring Data etc",
    ],
    buildYear: 2022,
    liveLink: "",
    githubLink: "https://github.com/Anant-Singh-Chauhan/Library",
    toolsUsed: ["HTML", "CSS", "JS", "Google Charts"],
  },
  {
    id: 3,
    title: "Employee Register",
    description: [
      "Built a system with interactive UI to manage employee details.",
      "Built Front End as an SPA and Backend using Microservices Architecture, creating REST APIs for performing CRUD operations",
    ],
    buildYear: 2023,
    liveLink: "",
    githubLink: "",
    toolsUsed: [
      "ReactJs",
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL",
    ],
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    description: [
      "Created a dynamic multiplayer Tic Tac Toe game, playable both locally and online, offering options to match with random opponents or host private rooms for friends.",
      "Built Front End as an SPA in ReactJs and Backend based on Websockets using Socket.io and ExpressJs ",
    ],
    buildYear: 2024,
    liveLink: "https://anant-singh-chauhan.github.io/tic_tac_toe/",
    githubLink: "https://github.com/Anant-Singh-Chauhan/tic_tac_toe",
    toolsUsed: ["ReactJs", "ExpressJs", "NodeJs", "Socket.io"],
  },
  {
    id: 5,
    title: "Portfolio",
    description: [
      "Discover my digital playground showcasing expertise in responsive design, dynamic functionality, and sleek user interfaces.",
      "Explore a showcase of interactive projects, all meticulously crafted with the latest technologies, awaiting your exploration.",
    ],
    buildYear: 2024,
    liveLink: "https://anantchauhan.in/",
    githubLink: "https://github.com/Anant-Singh-Chauhan/portfolio",
    toolsUsed: ["ReactJs", "NodeJs", "CSS", "ContextApi"],
  },
];
export { Experiences, SelfProjects, Profile };
