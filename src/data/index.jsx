import { Cpu, Search, Layout, Brain, PieChart, TrendingUp, Sliders, FileText, Terminal, BookOpen } from 'lucide-react';
import empChurnConfMatrix from '../assets/images/emp_pred/conf_matrix.png';
import mentalHealthImg from '../assets/images/mental-health-clf/mental-health-classification.png';
import housePricePred from '../assets/images/house-price-pred/house-price-pred.png';
import ricePriceCollectorImg from '../assets/images/rice-price-collector/rice-price-collector.png';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/chamochiran/",
  email: "chamochiran05@gmail.com",
  github: "https://github.com/ChamoChiran"
};

export const PROJECTS = [
  {
    id: 1,
    title: "Employee Churn Prediction",
    subtitle: "ML + HR Analytics",
    desc: "Predicting turnover using machine learning models to help HR retention strategies.",
    tags: ["ML", "Python"],
    theme: "pink",
    image: empChurnConfMatrix,
    details: {
      date: "2024",
      role: "Machine Learning, HR Analytics",
      tools: "Python, XGBoost, Pandas",
      repo: "https://github.com/ChamoChiran/employee-churn-prediction",
      objective: "Predict whether an employee will leave the organization based on HR and performance data. This project aimed to identify key churn drivers and provide actionable insights for HR teams to improve employee retention strategies.",
      steps: [
        "Data cleaning and exploratory data analysis (EDA)",
        "Feature engineering (project-to-tenure ratio, overwork index)",
        "Model training and evaluation using ROC-AUC metrics",
        "Model interpretation and insight extraction"
      ],
      techStack: [
        { name: "Python", desc: "Core programming language" },
        { name: "Pandas", desc: "Data manipulation and analysis" },
        { name: "Scikit-learn", desc: "Machine learning algorithms" },
        { name: "XGBoost", desc: "Gradient boosting framework" },
        { name: "Matplotlib/Seaborn", desc: "Data visualization" }
      ],
      results: "Achieved high model accuracy and identified key churn drivers such as satisfaction level and overtime hours. The model provides actionable insights for HR teams to implement targeted retention strategies."
    }
  },
  {
    id: 2,
    title: "House Price Prediction",
    subtitle: "Advanced Regression & Ensemble Methods",
    desc: "A comprehensive machine learning project for predicting house prices using advanced regression techniques, feature engineering, and ensemble methods.",
    tags: ["ML", "Python", "Ensemble", "Regression"],
    theme: "green",
    image: housePricePred,
    details: {
      date: "2024",
      role: "Machine Learning Engineer",
      tools: "Python, XGBoost, Scikit-learn, Plotly",
      repo: "https://github.com/ChamoChiran/kaggle-house-price-pred",
      objective: "Tackle the Kaggle House Prices competition by implementing a complete machine learning pipeline from data exploration to model deployment, utilizing extensive feature engineering and sophisticated ensemble methods.",
      steps: [
        "Data Exploration & Visualization (Missing Value Analysis, Feature Relationships)",
        "Feature Engineering (Custom features like PropertyAge, TotalSF)",
        "Data Preprocessing Pipeline (Imputation, Encoding, PCA)",
        "Model Implementation (Linear Regression, RF, XGBoost, MLP)",
        "Advanced Ensemble Methods (Stacking, Average Ensemble)"
      ],
      techStack: [
        { name: "Python", desc: "Core programming language" },
        { name: "Pandas/Numpy", desc: "Data manipulation" },
        { name: "Plotly", desc: "Interactive visualization" },
        { name: "Scikit-learn", desc: "ML algorithms & preprocessing" },
        { name: "XGBoost", desc: "Gradient boosting" }
      ],
      results: "Successfully implemented multiple regression models and ensemble methods. Key insights included the importance of living area and property age. Generated multiple submissions including XGBoost, Random Forest, and Stacking Ensembles."
    }
  },
  {
    id: 3,
    title: "Mental Health Classification",
    subtitle: "Depression Prediction & Analysis",
    desc: "Exploratory data analysis and machine learning project focused on predicting depression using demographic and lifestyle factors.",
    tags: ["ML", "Python", "Healthcare", "Classification"],
    theme: "yellow",
    image: mentalHealthImg,
    details: {
      date: "2024",
      role: "Data Scientist",
      tools: "Python, Pandas, Scikit-learn, Seaborn",
      repo: "https://github.com/ChamoChiran/kaggle-mental-health-classifcation",
      objective: "Predict depression status based on various demographic, lifestyle, and psychological factors using data from the Kaggle Playground Series.",
      steps: [
        "Comprehensive Exploratory Data Analysis (Correlation, Chi-square)",
        "Feature Analysis (Demographics, Stressors, Clinical Factors)",
        "Data Preprocessing & Cleaning",
        "Model Training & Evaluation"
      ],
      techStack: [
        { name: "Python", desc: "Core programming language" },
        { name: "Pandas/Numpy", desc: "Data manipulation" },
        { name: "Matplotlib/Seaborn", desc: "Data visualization" },
        { name: "Scikit-learn", desc: "Machine learning models" }
      ],
      results: "Key findings include a strong negative correlation between age and depression (-0.56) and a positive correlation with academic pressure (0.48). Identified education level and occupation status as strong predictors."
    }
  },
  {
    id: 4,
    title: "CBSL Rice Price Collector",
    subtitle: "Web Scraping & Data Pipeline",
    desc: "Automated tool to collect, parse, and process rice price data from the CBSL website, published as a PyPI package.",
    tags: ["Automation", "Python", "Web Scraping", "PyPI"],
    theme: "cyan",
    image: ricePriceCollectorImg,
    details: {
      date: "2024",
      role: "Python Developer",
      tools: "Python, PyPI, pdfplumber",
      repo: "https://github.com/ChamoChiran/rice_price_collector",
      objective: "Develop a robust tool to automate the collection and processing of rice price data from the Central Bank of Sri Lanka (CBSL) website.",
      steps: [
        "PDF Downloading (Automated retrieval from CBSL)",
        "Data Parsing (Extracting structured data from PDFs)",
        "Data Processing (Cleaning and formatting)",
        "Package Distribution (Published on PyPI)"
      ],
      techStack: [
        { name: "Python", desc: "Core programming language" },
        { name: "pdfplumber", desc: "PDF data extraction" },
        { name: "Requests", desc: "HTTP library for downloading" },
        { name: "PyPI", desc: "Package distribution" }
      ],
      results: "Successfully created and published a Python package 'cbsl_rice_price_collector' on PyPI. The tool simplifies the access to historical and current rice price data for analysis."
    }
  },
  {
    id: 5,
    title: "World History Search Pipeline",
    subtitle: "Semantic Search & RAG System",
    desc: "A semantic search system for world history textbooks, transforming raw educational content into a queryable vector database.",
    tags: ["RAG", "Vector DB", "Python", "NLP"],
    theme: "yellow",
    details: {
      date: "2024",
      role: "AI Engineer",
      tools: "Python, ChromaDB, LangChain, Gemini API",
      repo: "https://github.com/ChamoChiran/world-history-search-pipeline",
      objective: "Build a semantic search system for world history textbooks to enable intelligent retrieval and AI-powered tutoring.",
      steps: [
        "PDF Extraction & Text Cleaning (pymupdf, NLTK)",
        "Semantic Chunking (sentence-transformers)",
        "Vector Database Construction (ChromaDB)",
        "Semantic Search Implementation"
      ],
      techStack: [
        { name: "Python", desc: "Core programming language" },
        { name: "ChromaDB", desc: "Vector database" },
        { name: "LangChain", desc: "Orchestration framework" },
        { name: "Sentence-Transformers", desc: "Embeddings generation" },
        { name: "Gemini API", desc: "LLM integration" }
      ],
      results: "Successfully built a pipeline that converts textbooks into a queryable vector database, enabling context-aware semantic search for historical queries."
    }
  }
];

export const SKILLS = [
  {
    title: "Data Science & Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    desc: "I don't just crunch numbers — I chase the story behind them. Every dataset hides a pulse, and I like figuring out what it's trying to say."
  },
  {
    title: "Machine Learning",
    icon: <Cpu className="w-8 h-8" />,
    desc: "I love experimenting with predictive models. XGBoost and Random Forest are my favorites when I need results that actually make sense. I care more about understanding why a model works than just chasing high scores."
  },
  {
    title: "Data Analytics",
    icon: <Search className="w-8 h-8" />,
    desc: "Before building any model, I dive into the data — cleaning, exploring, and engineering features until patterns emerge. It's like detective work, but with spreadsheets."
  },
  {
    title: "Data Visualization",
    icon: <PieChart className="w-8 h-8" />,
    desc: "Turning data into visuals people actually understand is half the fun. I use Matplotlib and Seaborn for the basics, plus interactive dashboards that bring insights to life."
  },
  {
    title: "Business Intelligence",
    icon: <TrendingUp className="w-8 h-8" />,
    desc: "Data only matters if it helps people make better decisions. I connect analysis to real questions — who might leave, what drives performance, how trends change."
  },
  {
    title: "Model Optimization",
    icon: <Sliders className="w-8 h-8" />,
    desc: "Once a model works, I make it better — tuning parameters, cross-validation, ensemble methods. It's the quiet work that makes models trustworthy."
  },
  {
    title: "Research & Analysis",
    icon: <FileText className="w-8 h-8" />,
    desc: "Sometimes I go beyond prediction into behavioral data and social patterns. I like mixing technical skills with curiosity about how people actually work."
  }
];

export const CERTS = [
  { name: "Google Advanced Data Analytics", issuer: "Google" },
  { name: "Data Science Methodology", issuer: "IBM" },
  { name: "Databases & SQL for Data Science", issuer: "IBM" },
  { name: "Python Project for Data Science", issuer: "IBM" },
  { name: "Postman API Fundamentals Student Expert", issuer: "Postman" }
];

export const ARTICLES = [
  {
    id: 1,
    title: "Stop Naming Files 'final_final.ipynb'",
    desc: "Keep data science projects clean with Cookiecutter structure and simple workflow habits.",
    link: "https://medium.com/@chamochiran05/stop-naming-files-final-final-ipynb-14350c1fb982"
  },
  {
    id: 2,
    title: "Finding The Balance: The Jedi Way of Machine Learning",
    desc: "Balance bias and variance in machine learning, Jedi style.",
    link: "https://medium.com/@chamochiran05/finding-the-balance-4d16dd90ee78"
  },
  {
    id: 3,
    title: "Backbone of Every Data System",
    desc: "A practical overview of ETL pipelines, data integration, and reliable data engineering.",
    link: "https://medium.com/@chamochiran05/backbone-of-every-data-system-8f41c9da0a84"
  },
  {
    id: 4,
    title: "Predicting Employee Churn",
    desc: "Feature engineering + model selection for reliable HR churn prediction.",
    link: "https://medium.com/@chamochiran05/predicting-employee-churn-with-machine-learning-54a32f1c2ebd"
  },
  {
    id: 5,
    title: "Neurons are just fancy Yes/No buttons",
    desc: "An intuitive take on how deep nets build up intelligence from simple decisions.",
    link: "https://medium.com/@chamochiran05/neurons-are-just-fancy-yes-no-buttons-a70d632ab790"
  }
];

export const ABOUT_ME = [
  "Advanced Data Science Professional with deep technical proficiency in Generative AI and Machine Learning. specialized in developing scalable NLP applications using Transformers, Hugging Face, and LangChain. Proven track record of leveraging deep learning architectures to extract semantic insights from unstructured data.",
  "Experienced in the full lifecycle of model development—from fine-tuning pre-trained models to deploying optimized inference pipelines. My toolkit combines the efficiency of traditional ML (Scikit-learn, XGBoost) with the cutting-edge capabilities of modern LLM frameworks to deliver actionable, high-impact solutions."
];

export const TECH_STACK = ["Python", "Pandas", "PyTorch", "HuggingFace", "Power BI", "SQL", "LangChain"];

export const JOURNEY = [
  {
    role: "Data Science Intern",
    company: "Management Systems (Pvt) Ltd",
    period: "2025 – Present",
    desc: [
      "Apply ML + statistical analysis to business data",
      "Uncover trends, predict key outcomes"
    ],
    icon: <Terminal className="w-5 h-5" />,
    type: "work"
  },
  {
    role: "Bachelor of Computer Science",
    company: "University of Westminster",
    period: "2023 – 2027",
    desc: [
        "Focused on software development, data analytics, machine learning and database systems.",
        "Gained hands-on experience in Python, web development and Machine Learning solutions."
    ],
    icon: <BookOpen className="w-5 h-5" />,
    type: "education"
  },
  {
    role: "Certificate of Foundation",
    company: "IIT",
    period: "2021 – 2022",
    desc: [
        "Mathematics for Computing",
        "Introduction to Computer Science and Computer Systems"
    ],
    icon: <BookOpen className="w-5 h-5" />,
    type: "education"
  }
];
