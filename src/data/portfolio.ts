export type Stat = { label: string; value: string };
export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  summary?: string;
  achievements?: string[];
  technologies: string[];
};

export type Project = {
  name: string;
  period: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  impact: string[];
  learnings: string;
  github?: string;
  link?: string;
};

export type SkillGroup = { category: string; skills: string[] };

export type Certification = { name: string; issuer: string; date?: string };

export const profile = {
  name: "Gia Phú",
  fullName: "Tran Gia Phu",
  title: "Data Engineer",
  location: "Ho Chi Minh City, Vietnam",
  email: "trangiaphu25092003@gmail.com",
  phone: "+84 898 429 072",
  linkedin: "https://www.linkedin.com/in/gia-phú-1b8427281",
  github: "https://github.com/GiaPhus",
  resume: "/resume.pdf",
  avatar: "/avatar.jpg",
  credential: "AWS Certified Data Engineer – Associate (2026–2029)",
  credentialShort: "AWS Certified Data Engineer – Associate",
  headline: "Hi, I'm Gia Phú — a curious engineer who loves building data systems.",
  subheadline:
    "I'm a data engineer based in Ho Chi Minh City. I enjoy turning messy data into pipelines and warehouses that teams can actually rely on. Over the last couple of years I've worked across a few data teams, and I'm still learning something new with every project — most recently, cloud architecture on AWS.",
};

export const stats: Stat[] = [
  { label: "Professional experience in data engineering", value: "2y+" },
  { label: "English proficiency", value: "TOEIC 660+" },
  { label: "Data teams I've built with", value: "4" },
  { label: "Main cloud I'm growing in", value: "AWS" },
];

export const experiences: Experience[] = [
  {
    company: "Datatyk",
    role: "Junior Data Engineer",
    location: "Ho Chi Minh City, Vietnam",
    period: "Apr 2026 — Present",
    current: true,
    summary:
      "Currently working as a Junior Data Engineer at Datatyk — following along on company projects, strengthening my practical data engineering skills, and getting hands-on with modern cloud-based data platforms. Alongside the day-to-day, I'm preparing for the AWS Data Engineer Associate certification while going deeper into distributed data systems and cloud architecture.",
    technologies: ["AWS", "Cloud Data Platforms", "Distributed Systems"],
  },
  {
    company: "SmartPay",
    role: "Fresher Data Analytics Engineer",
    location: "Ho Chi Minh City, Vietnam",
    period: "Sep 2025 — Jan 2026",
    achievements: [
      "Built a scheduled Airflow pipeline that pulls Jira issue data into PostgreSQL, then set up Metabase dashboards so the team could keep an eye on SLA, resolution time, and issue trends.",
      "Put together user-tracking dashboards for SmartSME by VPBank, bringing OD, Card, and Loan behavioral data into one place to spot where people dropped off and how registrations were trending.",
      "Worked closely with Product, Customer Support, and Sales to agree on the KPIs that actually mattered for their reporting.",
    ],
    technologies: ["PostgreSQL", "Apache Airflow", "Metabase", "MongoDB", "Kafka", "Jira"],
  },
  {
    company: "HQSOFT",
    role: "Fresher Data Engineer",
    location: "Ho Chi Minh City, Vietnam",
    period: "Jul 2025 — Sep 2025",
    achievements: [
      "Built end-to-end ETL in Microsoft Fabric Data Factory, moving data from DMS and Excel/CSV sources into a Fabric Lakehouse.",
      "Set up Bronze → Silver → Gold processing in notebooks and added Batch IDs and Business Dates so every run could be traced back.",
      "Built the semantic models and Power BI dashboards the business asked for.",
    ],
    technologies: ["Microsoft Fabric", "Apache Spark", "SQL Server", "Power BI"],
  },
  {
    company: "International Trade Council",
    role: "Intern Data Engineer",
    location: "Ho Chi Minh City, Vietnam",
    period: "Jul 2024 — Dec 2024",
    achievements: [
      "Built Spark + Airflow pipelines that handled anywhere from hundreds of thousands to over a million records per batch on the way into the data warehouse.",
      "Designed a Bronze–Silver–Gold (Medallion) layout for cleaning and refining data step by step, and did the cleaning and schema mapping in PySpark.",
      "Wrote reusable Python modules and parameterized Airflow DAGs to automate crawling, collecting 10M+ records from a range of web sources.",
    ],
    technologies: [
      "Apache Spark",
      "Apache Airflow",
      "PySpark",
      "Docker",
      "MinIO",
      "Selenium",
      "PostgreSQL",
      "MySQL",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Spotify Data Pipeline & Analysis",
    period: "Mar — May 2025",
    tagline: "An end-to-end pipeline built around the Spotify API.",
    overview:
      "A personal project where I built an end-to-end pipeline that pulls data from the Spotify API, processes it, and turns it into something I could actually explore — song trends, popularity, and listening patterns.",
    problem:
      "Spotify's API has a lot of useful track and popularity data, but getting it into a shape you can analyze means handling ingestion, distributed processing, and a query layer that's quick to work with.",
    solution:
      "I used Airflow to schedule ingestion from the Spotify API, landed 200,000+ records in MongoDB, processed and transformed them with Hadoop and Spark into HDFS, and queried everything through Trino to feed interactive Tableau dashboards.",
    architecture: [
      "Airflow DAGs schedule and pull data from the Spotify API",
      "Raw records land in MongoDB (200K+ records)",
      "Hadoop + Spark process and transform into HDFS",
      "Trino sits on top as the SQL query layer",
      "Tableau dashboards explore trends, popularity, and engagement",
    ],
    technologies: ["Apache Airflow", "Docker", "MongoDB", "Hadoop", "Apache Spark", "Trino", "Tableau"],
    impact: [
      "Ingestion of 200,000+ records runs on a schedule without manual steps",
      "Made song trends, popularity, and engagement easy to explore in one place",
    ],
    learnings:
      "Splitting the pipeline into clear layers — NoSQL staging, distributed processing, then a query engine — made each part easier to reason about and change on its own.",
    github: "https://github.com/GiaPhus/Spotify-Data-Pipeline-Analytics",
  },
  {
    name: "Pandemic ETL Analysis",
    period: "Sep — Oct 2023",
    tagline: "A batch ETL project on global COVID-19 data.",
    overview:
      "A containerized batch ETL project that processes global COVID-19 data and shows death, recovery, and confirmed-case trends by region in an interactive dashboard.",
    problem:
      "Pandemic data is scattered across different sources and formats, which makes consistent regional comparisons hard without a repeatable pipeline.",
    solution:
      "I built Spark batch ETL orchestrated as Dagster assets, containerized it with Docker, used MinIO for object storage and SQL databases for structured output, and surfaced it all through a Plotly/Dash dashboard.",
    architecture: [
      "Dagster assets orchestrate the pipeline end to end",
      "Apache Spark handles the batch transformation",
      "MinIO provides S3-compatible object storage",
      "MySQL / PostgreSQL hold the structured output",
      "Plotly + Dash render the interactive dashboard",
    ],
    technologies: ["Dagster", "Apache Spark", "MinIO", "Docker", "MySQL", "PostgreSQL", "Plotly", "Dash"],
    impact: [
      "Containerized so it runs the same way in any environment",
      "Gave a clear regional view of COVID-19 deaths, recoveries, and confirmed cases",
    ],
    learnings:
      "Modeling the pipeline as Dagster assets made the data lineage obvious, which made it much easier to test and re-run.",
    github: "https://github.com/GiaPhus/Pandemic-Data-ETL",
  },
  {
    name: "Recovered Health — Backend & Automation",
    period: "Jun — Jul 2024",
    tagline: "Freelance backend work with a bit of automation on the side.",
    overview:
      "Freelance backend work for a health platform — building API features, tidying up the UI, and automating some data collection from the live site.",
    problem:
      "The platform needed solid backend features plus a reliable way to collect up-to-date data from the live site for reporting.",
    solution:
      "I built features on Laravel, wrote and maintained the APIs that talked to the database, improved the UI, and used Playwright to automate data extraction so the reporting data stayed accurate and current.",
    architecture: [
      "Laravel application layer with maintained REST APIs",
      "MySQL database managed through PhpMyAdmin",
      "Node.js tooling for supporting services",
      "Playwright automation for scheduled data extraction",
    ],
    technologies: ["Laravel", "MySQL", "PhpMyAdmin", "Node.js", "Playwright", "HTML", "CSS"],
    impact: [
      "Shipped maintainable backend features with working APIs",
      "Automated extraction kept the reporting data accurate and on time",
    ],
    learnings:
      "Pairing good API design with browser automation was a nice reminder that product work and data collection often go hand in hand.",
    link: "https://recoveredhealth.com/",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Cloud (AWS)",
    skills: ["S3", "Glue", "Athena", "Lambda", "Step Functions"],
  },
  {
    category: "Data Engineering",
    skills: ["Apache Spark", "Apache Airflow", "Dagster", "Microsoft Fabric", "Hadoop", "Trino", "Kafka"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "MinIO"],
  },
  {
    category: "Programming",
    skills: ["Python", "SQL", "Java", "PySpark"],
  },
  {
    category: "Analytics & BI",
    skills: ["Power BI", "Tableau", "Metabase", "Pandas", "Seaborn", "Matplotlib", "Plotly"],
  },
  {
    category: "DevOps & Data Modeling",
    skills: ["Docker", "Git", "Dimensional Modeling", "Medallion Architecture", "Normalization"],
  },
];

export const certifications: Certification[] = [
  {name: "AWS Certified Data Engineer – Associate", issuer: "Amazon Web Services (AWS)", date: "2026–2029"},
  { name: "Fundamentals of Visualization with Tableau", issuer: "Coursera" },
  { name: "Fundamentals of Data Engineering", issuer: "AIDE" },
  { name: "SQL (Advanced) Certificate", issuer: "HackerRank" },
  { name: "Python Certificate", issuer: "HackerRank" },
  { name: "Java Certificate", issuer: "HackerRank" },
];

export const education = {
  school: "Saigon University (SGU)",
  degree: "Bachelor of Engineering, Information Technology",
  period: "9/2021 — 3/2026",
  coursework:
    "Databases, Database Management Systems, Data Structures & Algorithms, Database Modeling,...",
  english: "TOEIC 660",
};
