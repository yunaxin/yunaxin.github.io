export const siteConfig = {
  name: "Amelia Oo",
  title: "Data Science @ UC San Diego · Class of 2028",
  description:
    "Portfolio of Amelia Oo, a data science student at UC San Diego focused on machine learning and data analysis",
  accentColor: "#be4a6d",
  photo: "/my_pic.jpg", // file lives in /public
  social: {
    email: "aoo@ucsd.edu",
    linkedin: "https://www.linkedin.com/in/nann-su-mon-oo",
    github: "https://github.com/yunaxin",
    twitter: "", // optional, leave empty to hide
  },
  // Separate paragraphs with a blank line
  aboutMe: `I like using data to figure out what’s really going on and what we can do about it. Recently, I’ve been digging more into machine learning and AI agents, and I’ve also been exploring AI ethics: how these systems affect society, and how to build them responsibly.

Outside of school, I love exploring California, trying new food spots and catching sunsets. I’m also into fashion and styling, and I’m always up for a good K-drama recommendation.

I’m looking for Summer 2027 internships in data analytics, data science or applied AI/ML. Feel free to reach out!`,
  skills: [
    "Python",
    "SQL",
    "R",
    "Java",
    "C++",
    "JavaScript",
    "scikit-learn",
    "XGBoost",
    "PyTorch",
    "pandas",
    "NumPy",
    "Plotly",
    "Tableau",
    "Streamlit",
    "Docker",
    "Google Cloud Platform",
    "Git/GitHub",
  ],
  // Short intro paragraphs shown under the hero title on the home page
  notes: [
    "I like using data to figure out what’s really going on and what we can do about it. Recently, I’ve been digging more into machine learning and AI agents, and I’ve also been exploring AI ethics: how these systems affect society, and how to build them responsibly.",
    "Outside of school, I love exploring California, trying new food spots and catching sunsets. I’m also into fashion and styling, and I’m always up for a good K-drama recommendation.",
    "I’m looking for Summer 2027 internships in data analytics, data science or applied AI/ML. Feel free to reach out!",
  ],
  // fields: "Machine Learning" | "Statistics" | "Data Visualization" | "Hackathons" (a project can have several)
  // type: "Coursework" | "Student Org" | "Client Project" | "Hackathon"  (shown first in the card label)
  // context: the specific course code / org / event name (optional, shown after the type)
  projects: [
    {
      name: "Spotify Popularity Prediction",
      type: "Coursework",
      context: "DSC 80",
      fields: ["Machine Learning"],
      description:
        "Predicts whether a song will be popular from its audio features. A Random Forest on 114K tracks improved F1 from 0.630 to 0.745 through feature engineering and tuning.",
      date: "Mar 2026 - Jun 2026",
      team: 2,
      links: [
        { type: "website", url: "https://yunaxin.github.io/Spotify_Predictive_Model/" },
        { type: "code", url: "https://github.com/yunaxin/Spotify_Predictive_Model" },
      ],
      skills: ["Python", "pandas", "scikit-learn", "Plotly"],
    },
    {
      name: "Building Damage Classifier",
      type: "Student Org",
      context: "ACM AI",
      fields: ["Machine Learning"],
      description:
        "Classifies how badly buildings were damaged in a disaster from before and after images (0.76 validation macro F1), with a web prototype for interactive damage assessment.",
      date: "Jul 2026 - Sep 2026",
      team: 5,
      links: [
        { type: "demo", url: "https://mindpretzel1--building-damage-classifier-128-fastapi-app.modal.run" },
      ],
      skills: ["Python", "PyTorch", "ResNet-18", "FastAPI", "Modal"],
    },
    {
      name: "Air Quality & Respiratory Health",
      type: "Coursework",
      context: "MATH 189",
      fields: ["Statistics"],
      description:
        "Studies how air quality relates to respiratory deaths across U.S. counties. A regression model reached a test R² of 0.92, with extreme-pollution days among the strongest predictors.",
      date: "Jan 2026 - Mar 2026",
      team: 4,
      links: [
        { type: "code", url: "https://github.com/yunaxin/air-quality-health-analysis" },
      ],
      skills: ["Python", "pandas", "NumPy", "seaborn", "Regression"],
    },
    {
      name: "Breast Cancer & Socioeconomic Factors",
      type: "Client Project",
      context: "TruBridge",
      fields: ["Statistics"],
      description:
        "Externship project through Extern, analyzing how county-level socioeconomic factors relate to late-stage breast cancer in women under 50 across California. Poverty rate had the strongest link (model R² = 0.46), with an interactive dashboard to explore the results.",
      date: "Jan 2026 - Mar 2026",
      team: 1,
      links: [
        { type: "website", url: "https://yunaxin.github.io/healthcare-analytics-externship/dashboard/index.html" },
        { type: "code", url: "https://github.com/yunaxin/healthcare-analytics-externship" },
      ],
      skills: ["Python", "pandas", "Seaborn", "Regression", "Hypothesis Testing"],
    },
    {
      name: "Bikewatching",
      type: "Coursework",
      context: "DSC 106",
      fields: ["Data Visualization"],
      description:
        "An interactive map of Boston bike traffic across the day, with a time slider to see how busy each Bluebikes station gets.",
      date: "Nov 2026",
      team: 1,
      links: [
        { type: "website", url: "https://yunaxin.github.io/bike-watching/" },
        { type: "code", url: "https://github.com/yunaxin/bike-watching" },
      ],
      skills: ["JavaScript", "D3.js", "Mapbox"],
    },
    {
      name: "Super Bowl Advertising Impact",
      type: "Coursework",
      context: "COGS 108",
      fields: ["Statistics"],
      description:
        "Measured whether Super Bowl ads move public attention and stock performance for brands like Coca-Cola and Pepsi, combining Google Trends and Yahoo Finance data (2016–2025) with time-series, rolling-average and volatility analysis. Search interest rose around the game but inconsistently, and t-tests found no significant change in stock returns or volatility (p > 0.05).",
      date: "Sep 2025 - Dec 2025",
      team: 5,
      links: [
        { type: "video", url: "https://youtu.be/nNGhUMErO2Q" },
        { type: "code", url: "https://github.com/yunaxin/superbowl_advertising_analysis" },
      ],
      skills: ["Python", "pandas", "SciPy", "Hypothesis Testing", "Time Series"],
    },
    {
      name: "Agent Courtroom",
      type: "Hackathon",
      fields: ["Machine Learning", "Hackathons"],
      description:
        "Keeps track of long-running AI agents so they don't loop, stall or overspend. When one goes off track, a Prosecutor, Defense and Judge agent argue the case and rule whether to continue, change strategy, escalate or halt.",
      date: "Oct 2026",
      team: 3,
      links: [
        { type: "demo", url: "https://agent-courtroom.vercel.app/" },
        { type: "code", url: "https://github.com/Allghelierce/Agent-Courtroom" },
      ],
      skills: ["Python", "TypeScript", "AI Agents", "Groq"],
    },
    {
      name: "TimeCatter",
      type: "Hackathon",
      fields: ["Hackathons"],
      description:
        "A desk companion inspired by virtual pets. An Arduino and a small LCD screen show your schedule and remind you of tasks with a cat meow.",
      date: "Jun 2024",
      team: 4,
      links: [
        { type: "website", url: "https://devpost.com/software/smart-calendar-assistant" },
        { type: "code", url: "https://github.com/HJINY007/TimeCatter" },
      ],
      skills: ["Arduino", "Python"],
    },
  ],
  experience: [
    {
      company: "Halıcıoğlu Data Science Institute & Data Science Alliance",
      category: "work",
      title: "Undergraduate Researcher",
      location: "San Diego, CA",
      dateRange: "Oct 2026 - Present",
      bullets: [
        "Scoping survival analyses of de-identified San Diego Rescue Mission program records",
        "Looking for early-warning signals of student withdrawal and possible intervention windows",
      ],
    },
    {
      company: "Vaccine Genie",
      category: "work",
      title: "AI/ML Intern",
      location: "Remote",
      dateRange: "Jun 2026 - Oct 2026",
      bullets: [
        "Built a Gemini-powered Google ADK agent that checks immunization records for school-entry compliance, served through FastAPI",
        "Designed configurable JSON rules for California and Washington school-entry requirements",
        "Benchmarked Gemini and Llama 4 on 500 synthetic records (99.4% and 99.0% accuracy)",
      ],
    },
    {
      company: "IDXExchange",
      category: "work",
      title: "Data Analyst & Data Science Intern",
      location: "Remote",
      dateRange: "Mar 2026 - Sep 2026",
      bullets: [
        "Built a Python pipeline that cleaned 625K California real estate records into 314K home sales",
        "Compared 5 regression models; tuned XGBoost reached R² of 0.85 and 12% median absolute percentage error",
        "Built a Streamlit prototype for home price prediction",
      ],
    },
    {
      company: "UC San Diego, Department of Mathematics",
      category: "parttime",
      title: "Fiscal Support Assistant",
      location: "San Diego, CA",
      dateRange: "Aug 2026 - Present",
      bullets: [
        "Support the department's fiscal operations with UCPath funding entries and salary cost transfers",
        "Process purchase orders in Oracle Financials Cloud",
        "Track and reconcile finances in Excel",
      ],
    },
    {
      company: "Foothill-De Anza Community College District",
      category: "parttime",
      title: "Cashier",
      location: "Cupertino, CA",
      dateRange: "Oct 2024 - Jun 2025",
      bullets: [
        "Processed cash, credit and check payments with zero discrepancies",
        "Kept accurate financial records",
        "Answered students' payment questions at the cashier's window",
      ],
    },
    {
      company: "UC San Diego",
      category: "volunteer",
      title: "Undergraduate Peer Learning Assistant",
      location: "San Diego, CA",
      dateRange: "Mar 2026 - Jun 2026",
      bullets: [
        "Support Introduction to Data Science by preparing discussion materials and helping grade exams",
        "Work with the TA to run a discussion section of 30+ students",
      ],
    },
    {
      company: "Foothill-De Anza Community College District",
      category: "volunteer",
      title: "Teaching Assistant",
      location: "Remote",
      dateRange: "Apr 2024 - Jun 2024",
      bullets: [
        "Helped students in an introductory Python course with debugging, assignments and technical support",
      ],
    },
    {
      company: "De Anza Inter Club Council",
      category: "leadership",
      title: "Chair of Finance",
      location: "Cupertino, CA",
      dateRange: "Jan 2024 - Jun 2025",
      bullets: [
        "Managed a $30K annual budget supporting 80+ active clubs and reviewed funding applications",
        "Led the first update to the financial code in 5 years",
        "Delivered a Financial Orientation to clarify funding procedures for student clubs",
        "Started as an Intern, then served as Vice Chair of Finance before becoming Chair",
      ],
    },
    {
      company: "Mentors @ De Anza",
      category: "leadership",
      title: "Vice Chair of Marketing & Content",
      location: "Cupertino, CA",
      dateRange: "Jul 2024 - Jun 2025",
      bullets: [
        "Designed marketing materials and supported outreach through social media and campus events",
        "Supported mentor-mentee pairings, workshops and events",
      ],
    },
    {
      company: "De Anza World Languages Club",
      category: "leadership",
      title: "Marketing Officer",
      location: "Cupertino, CA",
      dateRange: "Jan 2024 - Jun 2024",
      bullets: [
        "Created social media posts and video content for the club",
        "Helped organize meetings and cultural events promoting language learning",
      ],
    },
  ],
  education: [
    {
      school: "University of California, San Diego",
      degree: "B.S. in Data Science, Minor in Business Analytics",
      dateRange: "Expected Mar 2028",
      achievements: [],
      coursework: [
        "Machine Learning",
        "Exploratory Data Analysis & Inference",
        "Statistical Methods",
        "Theoretical Foundations of Data Science I & II",
      ],
    },
    {
      school: "De Anza College",
      degree: "Associate in Science in Mathematics for Transfer",
      honors: "Magna Cum Laude",
      dateRange: "Sep 2023 - Jun 2025",
      achievements: ["Dean's List, 2023–2025"],
    },
  ],
};
