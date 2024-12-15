import {
  mobile,
  backend,
  creator,
  web,
  docker,
  git,
  mongodb,
  ETL,
  NLP,
  airflow,
  tableau,
  kafka,
  spark,
  azure,
  SGU,
  ITC,
  rh,
  mysql,
  hadoop,
  postgre,
  airbnb,
  linux,
  python,
} from '@/assets';


export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Data Pipeline Development',
    icon: web,
  },
  {
    title: 'Big Data Technologies',
    icon: mobile,
  },
  {
    title: 'Real-Time Data Processing',
    icon: backend,
  },
  {
    title: 'Data Modeling and Visualization',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: airflow,
  },
  {
    name: 'CSS 3',
    icon: tableau,
  },
  {
    name: 'TypeScript',
    icon: kafka,
  },
  {
    name: 'React JS',
    icon: spark,
  },
  {
    name: 'Node JS',
    icon: azure,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'PostgreSQL',
    icon: postgre,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'django',
    icon: mysql,
  },
  {
    name: 'express',
    icon: hadoop,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'linux',
    icon: linux,
  },
  {
    name: 'python',
    icon: python,
  },
];

const experiences = [
  {
    title: 'Data Engineer Full-time',
    company_name: 'International Trade Council',
    icon: ITC,
    iconBg: '#E6DEDD',
    date: 'Sep 2024 - Dec 2024',
    points: [
      {
        content:
          'Reimplementing the old website written in Wordpress to a new, clean, maintainable website supported by Ruby on Rails template engine and other technologies.',
        subContent: null,
      },
      {
        content:
          'Collaborating with cross-functional teams including designers and other developers to create high-quality products.',
        subContent: null,
      },
      {
        content: 'Implementing responsive design and ensuring cross-browser compatibility.',
        subContent: null,
      },
      {
        content: 'Participating in code reviews and providing constructive feedback to other developers.',
        subContent: null,
      },
    ],
  },
  {
    title: 'Data Engineer Intern',
    company_name: 'International Trade Council',
    icon: ITC,
    iconBg: '#E6DEDD',
    date: 'Jul 2024 - Sep 2024',
    points: [
      {
        content:
          ' Web Scraping: Extracted data from multiple U.S. and international websites using tools such as Selenium and Beautiful Soup.',
        subContent: null,
      },
      {
        content:
          'Collaborating with cross-functional teams including designers and other developers to create high-quality products.',
        subContent: null,
      },
      {
        content: 'Implementing responsive design and ensuring cross-browser compatibility.',
        subContent: null,
      },
      {
        content: 'Participating in code reviews and providing constructive feedback to other developers.',
        subContent: null,
      },
    ],
  },
  
  {
    title: 'Engineering Degree in Informantion Technology',
    company_name: 'Sai Gon University - SGU',
    icon: SGU,
    iconBg: '#E6DEDD',
    date: 'Oct 2021 - Present',
    points: [
      {
        content: 'Current GPA: 3.11/4',
        subContent: null,
      },
      {
        content: 'Revelant Coursework:',
        subContent: [
          'Databases',
          'Data Analyst',
          'Neuro-linguistic programming(NLP)',
          'Data Structures and Algorithms',
          'Probability and Statistics',
          'Discrete Distributed database management system',
          'Object Oriented Programming(OOP)',
        ],
      },
    ],
  },
  {
    title: 'Backend Developer Freelancer',
    company_name: 'Recovered Health',
    icon: rh,
    iconBg: '#E6DEDD',
    date: 'Jun 2024 - Jul 2024',
    points: [
      {
        content: 'Website:https://recoveredhealth.com/ ',
        subContent: null,
      },      
      {
        content:
          'Completing the website development using the Laravel framework, ensuring robust and scalable solutions.',
        subContent: null,
      },
      {
        content: 'Improving the user interface (UI) of the website to enhance user experience and engagement.',
        subContent: null,
      },
      {
        content: 'Creating and maintaining APIs for seamless integration with the database, and utilizing Playwright to pull data from the website for accurate and up-to-date data collection.',
        subContent: null,
      },
    ],
  },
];

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: ' Pandemic-Data-ETL',
    description:
      '"Pandemic-Data-ETL" is an ETL (Extract, Transform, Load) project designed to handle data related to pandemics, such as Covid-19..',
    tags: [
      {
        name: 'Spark',
        color: 'blue-text-gradient',
      },
      {
        name: 'Minio',
        color: 'green-text-gradient',
      },
      {
        name: 'Python',
        color: 'pink-text-gradient',
      },
      {
        name: 'MySQL',
        color: 'orange-text-gradient',
      },
    ],
    image: ETL,
    github_repo: true,
    source_code_link: 'https://github.com/GiaPhus/Pandemic-Data-ETL',
    live_demo: false,
  },
  {
    name: 'Recovered Health Website',
    description:
      'Develop a scalable Laravel website with improved UI, seamless API integration, and accurate data collection using Playwright.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'laravel',
        color: 'green-text-gradient',
      },
      {
        name: 'playwright',
        color: 'pink-text-gradient',
      },
    ],
    image: rh,
    github_repo: false,
    source_code_link: '',
    live_demo: true,
    live_demo_link: 'https://recoveredhealth.com/',
  },
  {
    name: 'Vietnamese-Text-Summary-with-LSTM',
    description:
      'This project develops automated text summarization methods using machine learning and deep learning models.',
    tags: [
      {
        name: 'LSTM',
        color: 'blue-text-gradient',
      },
      {
        name: 'Kmeans',
        color: 'green-text-gradient',
      },
      {
        name: 'word2vec',
        color: 'pink-text-gradient',
      },
    ],
    image: NLP,
    github_repo: true,
    source_code_link: 'https://github.com/GiaPhus/Vietnamese-Text-Summary-with-LSTM',
    live_demo: false,
    live_demo_link: '',
  },
  {
    name: 'Airbnb Visualization',
    description:
      'Provide concise visualizations to showcase diverse information such as prices, locations, ratings, room counts, and other factors of Airbnb rental listings.',
    tags: [
      {
        name: 'pandas',
        color: 'blue-text-gradient',
      }, {
        name: 'plotly',
        color: 'pink-text-gradient',
      },{
        name: 'PySpark',
        color: 'red-text-gradient',
      },
    ],
    image: airbnb,
    github_repo: true,
    source_code_link: 'https://github.com/GiaPhus/AirBnb-Visualization',
    live_demo: false,
    live_demo_link: ' ',
  },
];

export { services, technologies, experiences, testimonials, projects };
