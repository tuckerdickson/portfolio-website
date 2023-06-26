import {
    mobile,
    backend,
    creator,
    web,

    iowa,
    collins,
    greatamerica,

    git,
    python,
    pytorch,
    swift, 
    cpp,

    mri,
    roomfinder,
    golf
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
      title: "Artificial Intelligence Enthusiast",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Computer Engineering Student",
      icon: backend,
    },
    {
      title: "Aspiring Entrepreneur",
      icon: creator,
    }
  ];
  
  const experiences = [
    {
      title: "Teaching Assistant (ENGR:1300)",
      company_name: "University of Iowa",
      icon: iowa,
      iconBg: "#383E56",
      date: "Jan 2023 - May 2023",
      points: [
        "Aid in the admimistration of ENGR:1300 Introduction to Engineering Computing.",
        "Attend regular lectures and assist students with in-class programming assignments.",
        "Hold office hours to answer questions about course content and assignments.",
        "Evaluate and provide feedback on assignment submissions."
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Collins Aerospace",
      icon: collins,
      iconBg: "#E6DEDD",
      date: "May 2022 - Jan 2023",
      points: [
        "Collaborated with a team of engineers to create and test software used in cockpit displays.",
        "Lead an effort to upgrade outdated lab computers.",
        "Gained insight into the software testing life cycle in a large company."
      ],
    },
    {
      title: "Teaching Assistant (ENGR:2730)",
      company_name: "University of Iowa",
      icon: iowa,
      iconBg: "#383E56",
      date: "Aug 2021 - May 2022",
      points: [
        "Aid in the admimistration of ENGR:2730 Computers in Engineering.",
        "Attend regular lectures and assist students with in-class programming activities.",
        "Hold office hours to answer questions about course content and assignments.",
        "Evaluate and provide feedback on assignment submissions."
      ],
    },
    {
      title: "Programmer Analyst Intern",
      company_name: "GreatAmerica",
      icon: greatamerica,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Aug 2021",
      points: [
        "Improved efficiency of company applications, maintained data integrity, and solved code- level issues reported by internal employees.",
        "Gained experience using SQL Server Management Studio to query data and improve database objects such as stored procedures and tables.",
        "Formed strong communication skills by working through software bugs with users."
      ],
    },
  ];

  const technologies = [
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python
    },
    {
      name: "pytorch",
      icon: pytorch
    },
    {
      name: "swift",
      icon: swift
    },
    {
      name: "c++",
      icon: cpp
    }
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
      source_code_link: "https://github.com/tuckerdickson",
    },
  ];
  
  export { services, technologies, experiences, projects };