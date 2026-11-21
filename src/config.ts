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
  aboutMe: `I like using data to figure out what’s really going on and what we can do about it. Recently, I’ve been getting more into machine learning and AI agents, while also becoming interested in the ethical side of AI and how these technologies affect society.

Outside of school, I love traveling, trying new food spots, and catching sunsets. I’m also into fashion and styling, and I’m always up for a good K-drama recommendation.

I’m actively looking for Summer 2027 internships in data analytics, data science, or applied AI/ML. Feel free to reach out!`,
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
    "I like using data to figure out what’s really going on and what we can do about it. Recently, I’ve been getting more into machine learning and AI agents, while also becoming interested in the ethical side of AI and how these technologies affect society.",
    "Outside of school, I love traveling, trying new food spots, and catching sunsets. I’m also into fashion and styling, and I’m always up for a good K-drama recommendation.",
    "I’m actively looking for Summer 2027 internships in data analytics, data science, or applied AI/ML. Feel free to reach out!",
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
      summary:
        "Currently working on a research project to support San Diego Rescue Mission’s Mission Academy by studying student withdrawal and potential early-warning signals.",
      bullets: [
        "Reviewing literature on student retention and survival analysis to help shape the study.",
        "Scoping an analysis of program records to investigate when students withdraw and what signals may be associated with withdrawal.",
        "Exploring how the research could inform a future dashboard for staff to review student information and prioritize check-ins.",
      ],
    },
    {
      company: "Vaccine Genie",
      category: "work",
      title: "AI/ML Intern",
      location: "Remote",
      dateRange: "Jun 2026 - Oct 2026",
      summary:
        "Developed an AI agent prototype that checks immunization records against California and Washington school-entry requirements and explains when follow-up is needed.",
      bullets: [
        "Implemented the agent using Gemini and Google ADK, with a local FastAPI endpoint for normalizing and validating incoming records.",
        "Encoded California and Washington school-entry requirements as JSON rules, with Python tools that check vaccination ages, dose intervals, and dose-reduction exceptions, allowing the agent to explain which requirements were met and when follow-up was due.",
        "Benchmarked Gemini and Llama 4 separately on the same 500 California immunization checks across 50 synthetic records, achieving 99.4% and 99.0% agreement with rule-based reference results, respectively.",
        "Evaluated the rules on 36 edge cases, ran regression checks on 113 synthetic records across both states, and tested the agent with a free-text immunization history.",
      ],
    },
    {
      company: "IDXExchange",
      category: "work",
      title: "Data Science Intern",
      location: "Remote",
      dateRange: "Jun 2026 - Sep 2026",
      summary:
        "Developed a home price predictor using California MLS data, examining how prediction errors varied by price range and how location features affected accuracy.",
      bullets: [
        "Built a Python pipeline to filter approximately 640K MLS records into 311K single-family home sales, using only training data to determine outlier cutoffs and missing-value imputation.",
        "Compared five regression models (Linear Regression, Decision Tree, Random Forest, XGBoost, LightGBM) on a held-out month of nearly 12K sales; tuned XGBoost performed best, with an R² of 0.817 and an 11.9% median error versus 22.9% for linear regression.",
        "Improved linear regression R² from 0.42 to 0.61 by incorporating location features and analyzed prediction errors across five price tiers.",
        "Deployed a Streamlit app that estimates sale prices from seven location and property inputs, powered by a separate gradient boosting model that achieved an R² of 0.826 on the same held-out month.",
      ],
      links: [
        { label: "Streamlit app", url: "https://idx-home-price-predictor.streamlit.app" },
      ],
    },
    {
      company: "IDXExchange",
      category: "work",
      title: "Data Analyst Intern",
      location: "Remote",
      dateRange: "Mar 2026 - Jun 2026",
      summary:
        "Used monthly California MLS data to track housing market trends and compare activity across agents, offices, and ZIP codes.",
      bullets: [
        "Automated the aggregation of monthly MLS files into a dataset of 386K residential sales, with checks for missing files and inconsistent records.",
        "Flagged invalid prices, dates, and coordinates and used the interquartile range to identify outliers for review.",
        "Calculated price per square foot and the sale-to-original-list price ratio and added monthly mortgage rates from FRED.",
        "Built two interactive Tableau dashboards to track median sale price and days on market and compare activity across agents, offices, and ZIP codes.",
      ],
      links: [
        { label: "Market dashboard", url: "https://public.tableau.com/app/profile/amelia.oo/viz/IDXMarketAnalysisDashboard/Story1" },
        { label: "Competitive dashboard", url: "https://public.tableau.com/app/profile/amelia.oo/viz/IDX_Competitive_Analysis/TopListingAgents" },
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
