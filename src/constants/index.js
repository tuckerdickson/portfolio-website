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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    iowa,
    collins,
    greatamerica,
    mri,
    roomfinder,
    golf,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer (CHANGE)",
      icon: web,
    },
    {
      title: "React Native Developer (CHANGE)",
      icon: mobile,
    },
    {
      title: "Backend Developer (CHANGE)",
      icon: backend,
    },
    {
      title: "Content Creator (CHANGE)",
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
      name: "Redux Toolkit",
      icon: redux,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Teaching Assistant (ENGR:1300)",
      company_name: "University of Iowa",
      icon: iowa,
      iconBg: "#383E56",
      date: "Jan 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Collins Aerospace",
      icon: collins,
      iconBg: "#E6DEDD",
      date: "May 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Teaching Assistant (ENGR:2730)",
      company_name: "University of Iowa",
      icon: iowa,
      iconBg: "#383E56",
      date: "Aug 2021 - May 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Programmer Analyst Intern",
      company_name: "GreatAmerica",
      icon: greatamerica,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Aug 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "MRI Translation",
      description:
        "A collection of artificial neural networks (CNN & GAN), capable of synthesizing MRI of a certain contrast, given MRI of a different contrast as input.",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "cnn",
          color: "green-text-gradient",
        },
        {
          name: "gan",
          color: "pink-text-gradient",
        },
      ],
      image: mri,
      source_code_link: "https://github.com/tuckerdickson/mri-translation",
    },
    {
      name: "Room Finder",
      description:
        "An iOS application which enables users to search for, and navigate to, points of interest within the University of Iowa's Seamans Center for the Engineering Arts and Sciences.",
      tags: [
        {
          name: "swift",
          color: "blue-text-gradient",
        },
        {
          name: "ios",
          color: "green-text-gradient",
        },
        {
          name: "navigation",
          color: "pink-text-gradient",
        },
      ],
      image: roomfinder,
      source_code_link: "https://github.com/tuckerdickson/roomfinder",
    },
    {
      name: "Space Golf",
      description:
        "A virtual reality experience that allows users to perfect their golf swing and improve their accuracy, but in space!",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "virtual-reality",
          color: "green-text-gradient",
        },
        {
          name: "oculus",
          color: "pink-text-gradient",
        },
      ],
      image: golf,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };