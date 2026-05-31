export const portfolioData = {
  personalInfo: {
    name: "Maithily M. Gondode",
    email: "maithilygondode93599@gmail.com",
    phone: "+91 9834451464",
    location: "Saoner, Nagpur - 441107",
    profile: "A motivated and detail-oriented engineering student with hands-on experience in data analysis, machine learning fundamentals, and front-end web development. Passionate about applying analytical skills, technical knowledge, and problem-solving abilities to contribute effectively in a professional environment."
  },
  
  education: [
    {
      degree: "Bachelor of Technology",
      institution: "J.D College of Engineering & Management",
      score: "SGPA: 9.68",
      year: "2021-2025"
    },
    {
      degree: "Higher Secondary Certificate (H.S.C)",
      institution: "Maharashtra State Board",
      score: "80.67%",
      year: "2021"
    },
    {
      degree: "Secondary School Certificate (S.S.C)",
      institution: "Central Board of Secondary Education",
      score: "69%",
      year: "2019"
    }
  ],
  
  // FIXED: Technical Skills Structure
  technicalSkills: {
    programming: [
      { name: "Python", level: 85, icon: "🐍", color: "#3776AB" },
      { name: "JavaScript", level: 75, icon: "📜", color: "#F7DF1E" },
      { name: "HTML", level: 90, icon: "🌐", color: "#E34F26" },
      { name: "CSS", level: 85, icon: "🎨", color: "#1572B6" }
    ],
    dataSkills: [
      { name: "Data Cleaning", level: 85, icon: "🧹", color: "#00C49F" },
      { name: "EDA", level: 80, icon: "📊", color: "#FFBB28" },
      { name: "Data Visualization", level: 85, icon: "📈", color: "#FF8042" },
      { name: "Machine Learning", level: 75, icon: "🤖", color: "#8884D8" }
    ],
    tools: [
      { name: "VS Code", level: 90, icon: "💻", color: "#007ACC" },
      { name: "Jupyter", level: 85, icon: "📓", color: "#F37626" },
      { name: "Git", level: 80, icon: "📦", color: "#F05032" },
      { name: "Tableau", level: 75, icon: "📊", color: "#E97627" },
      { name: "Excel", level: 80, icon: "📑", color: "#217346" }
    ]
  },
  
  // FIXED: Projects Structure
  projects: [
    {
      title: "Amazon Clone",
      description: "Developed a front-end clone of the Amazon homepage using HTML and CSS. Implemented navigation bar, product listings, responsive layout, and UI styling. Focused on layout structuring, responsiveness, and design consistency.",
      technologies: ["React", "HTML/CSS", "JavaScript"],
      image: "/images/amazon-clone.jpg",
      github: "https://github.com/Maithily27/amazon-clone",
      live: "https://amazon-clone-brown-eta.vercel.app/",
      features: [
        "Responsive design",
        "Product listing grid",
        "Navigation bar",
        "Shopping cart UI"
      ],
      category: "frontend"
    },
    {
      title: "Snake Game",
      description: "A classic retro Snake Game built using HTML, CSS, and JavaScript. Control a snake with arrow keys, eat food to grow, and avoid walls and your own tail. Features canvas-based rendering and smooth game loop logic.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/snake-game.jpg",
      github: "https://github.com/Maithily27/-Snake-Game-",
      live: "https://snake-game-umber-eta-41.vercel.app/",
      features: [
        "Classic retro feel",
        "Arrow key controls",
        "Score tracking",
        "Canvas-based rendering"
      ],
      category: "frontend"
    },
    {
      title: "Matching Cards Game",
      description: "A simple and fun card matching game built using HTML, CSS, and JavaScript. Players flip cards two at a time to find matching pairs. The game tracks moves and optionally time, providing an interactive way to improve memory skills.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/matching-cards.jpg",
      github: "https://github.com/Maithily27/matching-cards",
      live: "https://matching-cards-theta.vercel.app/",
      features: [
        "Card flip animations",
        "Move counter",
        "Memory skill building",
        "Responsive layout"
      ],
      category: "frontend"
    },
    {
      title: "Tic Tac Toe",
      description: "A classic two-player Tic Tac Toe game implemented using HTML, CSS, and JavaScript. Players take turns marking Xs and Os on a 3x3 grid, and the game automatically detects a win or a draw. Features turn management, winner announcement, and a reset option.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/images/tic-tac-toe.jpg",
      github: "https://github.com/Maithily27/Tic-Tac-Toe",
      live: "https://tic-tac-toe-woad-kappa-99.vercel.app/",
      features: [
        "Two-player mode",
        "Win & draw detection",
        "Turn management",
        "Reset option"
      ],
      category: "frontend"
    }
  ],
  
  // FIXED: Experience Structure
  experience: [
    {
      role: "Data Analyst Intern",
      company: "SS Infotech, Nagpur",
      duration: "Dec 2025 – Mar 2026",
      description: "Worked as a Data Analyst in the Product & Development department. Contributed to data analysis and business intelligence tasks across the full data pipeline.",
      technologies: ["Python", "Tableau", "Power BI", "SQL", "Matplotlib"],
      achievements: [
        "Collected, processed & cleaned large datasets for analysis",
        "Built dashboards using Tableau, Power BI & Matplotlib",
        "Applied statistical & ML models for forecasting"
      ],
      icon: "📈",
      color: "from-pink-500 to-rose-500"
    },
    {
      role: "Data Science Intern",
      company: "Prodigy InfoTech",
      duration: "2024",
      description: "Performed data cleaning, exploratory data analysis (EDA), and data visualization. Built and evaluated machine learning models for predictive insights.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      achievements: [
        "Improved model accuracy by 15%",
        "Created 10+ interactive visualizations",
        "Automated data cleaning pipeline"
      ],
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      role: "Data Science Master - Virtual Internship",
      company: "EduSkill",
      duration: "2024",
      description: "Completed hands-on training in data analysis, preprocessing, and visualization. Worked with real-world datasets using Python to derive actionable insights.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
      achievements: [
        "Completed 5 real-world projects",
        "Learned advanced data visualization",
        "Implemented ML algorithms"
      ],
      icon: "📊",
      color: "from-purple-500 to-pink-500"
    },
    {
      role: "Deloitte Australia Data Analytics Job Simulation",
      company: "Forage",
      duration: "2024",
      description: "Created interactive dashboards using Tableau. Classified data using Excel and derived business conclusions.",
      technologies: ["Tableau", "Excel", "PowerPoint"],
      achievements: [
        "Created 3 interactive dashboards",
        "Analyzed business datasets",
        "Presented findings to stakeholders"
      ],
      icon: "📈",
      color: "from-green-500 to-teal-500"
    }
  ],
  
  // FIXED: Certifications as Strings (for split function)
  certifications: [
    "Website Development Tutorial - Infosys Springboard",
    "Introduction to Artificial Intelligence - Infosys Springboard",
    "Blockchain - NPTEL",
    "The Joy of Computing using Python - NPTEL",
    "Database Management System - NPTEL",
    "Enhancing Soft Skills & Personality - NPTEL"
  ],
  
  softSkills: [
    "Effective Communication",
    "Time Management",
    "Teamwork",
    "Problem Solving",
    "Leadership"
  ],
  
  languages: [
    { name: "English", proficiency: "Fluent", level: 90 },
    { name: "Hindi", proficiency: "Native", level: 100 },
    { name: "Marathi", proficiency: "Native", level: 100 }
  ],
  
  socialLinks: {
    github: "https://github.com/Maithily27",
    linkedin: "https://linkedin.com/in/maithily-gondode"
  }
};