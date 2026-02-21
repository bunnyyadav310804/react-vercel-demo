// Company Specific Preparation - ALL Major Indian & International Companies
// COMPLETE: Each company has 2-3 job roles with preparation paths and interview rounds
// UI FLOW: College → Company → Job Role (shows title, location, salary, experience) → Rounds & Questions

export const indianCompanies = [
  {
    id: 1,
    name: 'TCS',
    logo: '🏢',
    foundedYear: 1968,
    headquarter: 'Mumbai, India',
    about: 'Tata Consultancy Services - India\'s largest IT company',
    website: 'https://www.tcs.com',
    hiringUrl: 'https://www.tcs.com/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Associate Software Engineer',
        location: 'Bangalore',
        salary: '₹3.5L - ₹4.5L PA',
        experience: 'Fresher',
        skills: ['Java', 'C++', 'Python', 'SQL'],
        prepPath: [
          { phase: 'Phase 1: Fundamentals (2 weeks)', topics: ['Programming Basics', 'Data Structures', 'OOPS Concepts'] },
          { phase: 'Phase 2: Core Technologies (3 weeks)', topics: ['Java/C++ Mastery', 'SQL Queries', 'Problem Solving'] },
          { phase: 'Phase 3: Mock Tests (2 weeks)', topics: ['TCS Sample Papers', 'Mock Interviews', 'Aptitude Practice'] }
        ],
        resources: [
          { name: 'TCS Ninja - Official', link: 'https://www.tcs.com/careers/ninja' },
          { name: 'GeeksforGeeks DSA', link: 'https://www.geeksforgeeks.org' },
          { name: 'HackerRank Challenges', link: 'https://www.hackerrank.com' }
        ]
      },
      {
        jobId: 2,
        title: 'System Administrator',
        location: 'Chennai',
        salary: '₹2.8L - ₹3.8L PA',
        experience: 'Fresher/1 Year',
        skills: ['Linux', 'Windows Server', 'Networking', 'Cloud'],
        prepPath: [
          { phase: 'Phase 1: OS Fundamentals', topics: ['Linux Basics', 'Windows Server', 'Shell Scripting'] },
          { phase: 'Phase 2: Networking & Cloud', topics: ['TCP/IP', 'Cloud Services', 'Security'] },
          { phase: 'Phase 3: Practical Labs', topics: ['Hands-on Setup', 'Troubleshooting', 'Case Studies'] }
        ],
        resources: [
          { name: 'Linux Academy', link: 'https://linuxacademy.com' },
          { name: 'AWS Training', link: 'https://aws.amazon.com/training' },
          { name: 'CompTIA A+', link: 'https://www.comptia.org' }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Infosys',
    logo: '💼',
    foundedYear: 1981,
    headquarter: 'Bangalore, India',
    about: 'Infosys - Global IT consulting and services company',
    website: 'https://www.infosys.com',
    hiringUrl: 'https://www.infosys.com/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Infosys Certified Associate - Java',
        location: 'Multiple Cities',
        salary: '₹3.2L - ₹4.2L PA',
        experience: 'Fresher',
        skills: ['Java', 'Spring Boot', 'Microservices', 'Database'],
        prepPath: [
          { phase: 'Phase 1: Java Foundations', topics: ['Core Java', 'OOP', 'Collections Framework'] },
          { phase: 'Phase 2: Enterprise Java', topics: ['Spring Framework', 'REST APIs', 'Microservices'] },
          { phase: 'Phase 3: Project Work', topics: ['Real-world Projects', 'Design Patterns', 'Best Practices'] }
        ],
        resources: [
          { name: 'Infosys Springboard', link: 'https://www.infosys.com/springboard' },
          { name: 'Spring.io Documentation', link: 'https://spring.io' },
          { name: 'Udemy Spring Courses', link: 'https://www.udemy.com' }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Wipro',
    logo: '🌐',
    foundedYear: 1980,
    headquarter: 'Bangalore, India',
    about: 'Wipro - IT services, consulting, and business process services',
    website: 'https://www.wipro.com',
    hiringUrl: 'https://careers.wipro.com',
    jobs: [
      {
        jobId: 1,
        title: 'Software Engineer - Full Stack',
        location: 'Bangalore, Hyderabad',
        salary: '₹3.5L - ₹5L PA',
        experience: 'Fresher/1-2 Years',
        skills: ['Java', 'Spring Boot', 'Microservices', 'Database', 'React'],
        prepPath: [
          { phase: 'Phase 1: Frontend Basics', topics: ['HTML/CSS', 'JavaScript', 'React Fundamentals'] },
          { phase: 'Phase 2: Backend Development', topics: ['Node.js', 'Express', 'RESTful APIs'] },
          { phase: 'Phase 3: Full Stack Integration', topics: ['Full Stack Projects', 'Deployment', 'DevOps Basics'] }
        ],
        resources: [
          { name: 'Wipro WILP', link: 'https://www.wipro.com/wilp' },
          { name: 'Frontend Masters', link: 'https://frontendmasters.com' },
          { name: 'Node.js Official Docs', link: 'https://nodejs.org' }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Accenture',
    logo: '🚀',
    foundedYear: 1989,
    headquarter: 'Delhi, India',
    about: 'Accenture - Global management consulting and professional services',
    website: 'https://www.accenture.com',
    hiringUrl: 'https://www.accenture.com/in-en/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Analyst - Management Consulting',
        location: 'Bangalore, Delhi, Mumbai',
        salary: '₹4.5L - ₹6L PA',
        experience: 'Fresher',
        skills: ['Business Analysis', 'Excel', 'Communication', 'Problem Solving'],
        prepPath: [
          { phase: 'Phase 1: Business Fundamentals', topics: ['Management Basics', 'Business Models', 'Case Studies'] },
          { phase: 'Phase 2: Analytics & Data', topics: ['Excel Mastery', 'Data Analysis', 'Visualization'] },
          { phase: 'Phase 3: Consulting Skills', topics: ['Client Interaction', 'Presentation', 'Leadership'] }
        ],
        resources: [
          { name: 'Accenture Learning Hub', link: 'https://www.accenture.com/careers' },
          { name: 'Management Consulting Prep', link: 'https://www.myconsultingcoach.com' },
          { name: 'Excel Advanced', link: 'https://www.edx.org' }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'HCL Technologies',
    logo: '⚡',
    foundedYear: 1976,
    headquarter: 'Noida, India',
    about: 'HCL - IT and business services company',
    website: 'https://www.hcltech.com',
    hiringUrl: 'https://careers.hcltech.com',
    jobs: [
      {
        jobId: 1,
        title: 'Junior Software Engineer',
        location: 'Noida, Bangalore, Chennai',
        salary: '₹3.2L - ₹4.5L PA',
        experience: 'Fresher/1 Year',
        skills: ['Python', 'Java', 'Databases', 'Linux'],
        prepPath: [
          { phase: 'Phase 1: Programming Basics', topics: ['Python/Java Fundamentals', 'Data Structures'] },
          { phase: 'Phase 2: Advanced Concepts', topics: ['Databases', 'APIs', 'Software Design Patterns'] },
          { phase: 'Phase 3: Interview Prep', topics: ['Technical Interview', 'Coding Problems', 'System Design'] }
        ],
        resources: [
          { name: 'HCL CodeVita', link: 'https://www.codevita.io' },
          { name: 'LeetCode', link: 'https://leetcode.com' },
          { name: 'Interview Bit', link: 'https://www.interviewbit.com' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Cognizant',
    logo: '🎯',
    foundedYear: 1994,
    headquarter: 'Bangalore, India',
    about: 'Cognizant - IT services, consulting, and technology solutions',
    website: 'https://www.cognizant.com',
    hiringUrl: 'https://careers.cognizant.com',
    jobs: [
      {
        jobId: 1,
        title: 'Programmer - Graduate Trainee',
        location: 'Bangalore, Pune, Mumbai',
        salary: '₹3.5L - ₹4.8L PA',
        experience: 'Fresher',
        skills: ['C++', 'Java', 'SQL', 'Testing'],
        prepPath: [
          { phase: 'Phase 1: Core Programming', topics: ['C++/Java Basics', 'OOPS', 'Problem Solving'] },
          { phase: 'Phase 2: Development Tools', topics: ['Debugging', 'Version Control', 'Testing Methods'] },
          { phase: 'Phase 3: Production Ready', topics: ['Code Quality', 'Performance', 'Documentation'] }
        ],
        resources: [
          { name: 'Cognizant Developer Programs', link: 'https://www.cognizant.com/careers' },
          { name: 'CPlusPlus.com Tutorial', link: 'https://cplusplus.com' },
          { name: 'Selenium & Testing', link: 'https://www.seleniumhq.org' }
        ]
      }
    ]
  },
  {
    id: 7,
    name: 'Flipkart',
    logo: '🛍️',
    foundedYear: 2007,
    headquarter: 'Bangalore, India',
    about: 'Flipkart - India\'s leading e-commerce platform',
    website: 'https://www.flipkart.com',
    hiringUrl: 'https://www.flipkart.careers',
    jobs: [
      {
        jobId: 1,
        title: 'Software Development Engineer - Backend',
        location: 'Bangalore',
        salary: '₹6L - ₹10L PA',
        experience: '0-2 Years',
        skills: ['Java', 'Distributed Systems', 'Databases', 'AWS'],
        prepPath: [
          { phase: 'Phase 1: Strong Foundations', topics: ['Advanced Java', 'Data Structures & Algorithms'] },
          { phase: 'Phase 2: System Design', topics: ['Scalable Architecture', 'Microservices', 'Databases'] },
          { phase: 'Phase 3: Production Systems', topics: ['Monitoring', 'CI/CD', 'Performance Optimization'] }
        ],
        resources: [
          { name: 'Flipkart Tech', link: 'https://tech.flipkart.com' },
          { name: 'System Design Primer', link: 'https://github.com/donnemartin/system-design-primer' },
          { name: 'Grokking System Design', link: 'https://www.educative.io' }
        ]
      }
    ]
  },
  {
    id: 8,
    name: 'Amazon India',
    logo: '📦',
    foundedYear: 1994,
    headquarter: 'Bangalore, India',
    about: 'Amazon - Global e-commerce and cloud services',
    website: 'https://www.amazon.in',
    hiringUrl: 'https://www.amazon.jobs',
    jobs: [
      {
        jobId: 1,
        title: 'Software Development Engineer 1',
        location: 'Bangalore, Hyderabad',
        salary: '₹10L - ₹15L PA',
        experience: '0-1 Years',
        skills: ['Java', 'Python', 'AWS', 'System Design'],
        prepPath: [
          { phase: 'Phase 1: DSA Mastery', topics: ['Arrays', 'Strings', 'Trees', 'Graphs', 'Dynamic Programming'] },
          { phase: 'Phase 2: System Design', topics: ['Scalability', 'Load Balancing', 'Caching', 'Databases'] },
          { phase: 'Phase 3: Behavioral & AWS', topics: ['Leadership Principles', 'AWS Services', 'Mock Interviews'] }
        ],
        resources: [
          { name: 'Amazon Interview Guide', link: 'https://www.amazon.jobs' },
          { name: 'LeetCode Premium', link: 'https://leetcode.com/premium' },
          { name: 'AWS Training', link: 'https://aws.amazon.com/training' }
        ]
      }
    ]
  },
  {
    id: 9,
    name: 'Google India',
    logo: '🔍',
    foundedYear: 1998,
    headquarter: 'Mountain View, USA (India Office in Bangalore)',
    about: 'Google - Search, advertising, and cloud services leader',
    website: 'https://www.google.com',
    hiringUrl: 'https://careers.google.com',
    jobs: [
      {
        jobId: 1,
        title: 'Associate Software Engineer',
        location: 'Bangalore',
        salary: '₹15L - ₹25L PA',
        experience: 'Fresher/0-1 Years',
        skills: ['C++', 'Python', 'JavaScript', 'System Design'],
        prepPath: [
          { phase: 'Phase 1: Algorithm Excellence', topics: ['Competitive Programming', 'Advanced DSA', 'Problem Patterns'] },
          { phase: 'Phase 2: System Design', topics: ['Distributed Systems', 'Database Design', 'Cloud Architecture'] },
          { phase: 'Phase 3: Google Interview', topics: ['Mock Interviews', 'Behavioral Questions', 'Technical Deep Dives'] }
        ],
        resources: [
          { name: 'Google Interviews', link: 'https://www.google.com/careers/how-we-hire' },
          { name: 'Codeforces', link: 'https://codeforces.com' },
          { name: 'Google Tech Dev Guide', link: 'https://techdevguide.withgoogle.com' }
        ]
      }
    ]
  },
  {
    id: 10,
    name: 'Microsoft India',
    logo: '🪟',
    foundedYear: 1975,
    headquarter: 'Redmond, USA (India Office in Bangalore)',
    about: 'Microsoft - Software, cloud computing, and services',
    website: 'https://www.microsoft.com',
    hiringUrl: 'https://careers.microsoft.com',
    jobs: [
      {
        jobId: 1,
        title: 'Software Engineer - Early Career',
        location: 'Bangalore, Hyderabad',
        salary: '₹12L - ₹20L PA',
        experience: 'Fresher/0-1 Years',
        skills: ['C#', 'Python', 'Azure', 'SQL'],
        prepPath: [
          { phase: 'Phase 1: Programming Skills', topics: ['C# Mastery', 'OOPS', 'Data Structures'] },
          { phase: 'Phase 2: Microsoft Stack', topics: ['Azure Services', '.NET Framework', 'Cloud Development'] },
          { phase: 'Phase 3: Interview Prep', topics: ['Coding Challenges', 'System Design', 'Microsoft Culture'] }
        ],
        resources: [
          { name: 'Microsoft Learn', link: 'https://learn.microsoft.com' },
          { name: 'Microsoft Interview Prep', link: 'https://careers.microsoft.com' },
          { name: 'Azure Academy', link: 'https://azure.microsoft.com/en-in/training' }
        ]
      }
    ]
  },
  {
    id: 11,
    name: 'Capgemini',
    logo: '🎨',
    foundedYear: 1967,
    headquarter: 'Paris, France (India Office in Bangalore)',
    about: 'Capgemini - Digital transformation and consulting services',
    website: 'https://www.capgemini.com',
    hiringUrl: 'https://www.capgemini.com/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Analyst - Consulting & Technology',
        location: 'Bangalore, Pune, Delhi',
        salary: '₹4L - ₹6L PA',
        experience: 'Fresher',
        skills: ['Business Analysis', 'SAP', 'SQL', 'Communication'],
        prepPath: [
          { phase: 'Phase 1: Business Fundamentals', topics: ['Process Mapping', 'Business Process', 'SAP Basics'] },
          { phase: 'Phase 2: Technical Skills', topics: ['SQL Mastery', 'Data Modelling', 'Technical Writing'] },
          { phase: 'Phase 3: Case Studies', topics: ['Capgemini Case Studies', 'Client Scenarios', 'Consulting Skills'] }
        ],
        resources: [
          { name: 'Capgemini LearnHub', link: 'https://www.capgemini.com/careers' },
          { name: 'SAP Learning', link: 'https://training.sap.com' },
          { name: 'PrepInsta Capgemini', link: 'https://prepinsta.com/capgemini' }
        ]
      },
      {
        jobId: 2,
        title: 'Technology Analyst - Cloud',
        location: 'Hyderabad, Bangalore',
        salary: '₹4.5L - ₹6.5L PA',
        experience: 'Fresher/1 Year',
        skills: ['AWS', 'Azure', 'Python', 'DevOps'],
        prepPath: [
          { phase: 'Phase 1: Cloud Fundamentals', topics: ['AWS Basics', 'Azure Fundamentals', 'Cloud Architecture'] },
          { phase: 'Phase 2: Hands-on Experience', topics: ['EC2', 'S3', 'Lambda', 'Containers'] },
          { phase: 'Phase 3: DevOps & CI/CD', topics: ['Jenkins', 'Docker', 'Kubernetes', 'Infrastructure'] }
        ],
        resources: [
          { name: 'AWS Training', link: 'https://aws.amazon.com/training' },
          { name: 'Azure Learn', link: 'https://learn.microsoft.com/en-us/azure' },
          { name: 'CloudAcademy', link: 'https://cloudacademy.com' }
        ]
      }
    ]
  },
  {
    id: 12,
    name: 'Oracle',
    logo: '🗄️',
    foundedYear: 1977,
    headquarter: 'Redwood City, USA (India Office in Bangalore)',
    about: 'Oracle - Database and enterprise software solutions',
    website: 'https://www.oracle.com',
    hiringUrl: 'https://careers.oracle.com',
    jobs: [
      {
        jobId: 1,
        title: 'Associate Software Engineer - Database',
        location: 'Bangalore',
        salary: '₹8L - ₹12L PA',
        experience: 'Fresher/0-1 Years',
        skills: ['SQL', 'Java', 'PL/SQL', 'Database Design'],
        prepPath: [
          { phase: 'Phase 1: SQL Mastery', topics: ['Advanced SQL', 'Query Optimization', 'Database Design'] },
          { phase: 'Phase 2: PL/SQL & Stored Procedures', topics: ['PL/SQL', 'Triggers', 'Packages', 'Performance Tuning'] },
          { phase: 'Phase 3: Oracle Architecture', topics: ['Oracle Database', 'Backup & Recovery', 'Security'] }
        ],
        resources: [
          { name: 'Oracle Learning', link: 'https://www.oracle.com/learning' },
          { name: 'Oracle SQL Tutorial', link: 'https://www.oracle.com/database' },
          { name: 'Oracle University', link: 'https://university.oracle.com' }
        ]
      },
      {
        jobId: 2,
        title: 'Software Developer - Cloud Infrastructure',
        location: 'Bangalore, Hyderabad',
        salary: '₹9L - ₹14L PA',
        experience: '0-2 Years',
        skills: ['Java', 'Python', 'OCI', 'Cloud Architecture'],
        prepPath: [
          { phase: 'Phase 1: Core Programming', topics: ['Advanced Java', 'Python for Cloud', 'REST APIs'] },
          { phase: 'Phase 2: Oracle Cloud Infrastructure', topics: ['OCI Services', 'Compute', 'Storage', 'Networking'] },
          { phase: 'Phase 3: Microservices & Containers', topics: ['Docker', 'Kubernetes', 'Microservices', 'CI/CD'] }
        ],
        resources: [
          { name: 'OCI Training', link: 'https://www.oracle.com/cloud/training' },
          { name: 'OCI Certification', link: 'https://www.oracle.com/cloud/certification' },
          { name: 'Kubernetes Official', link: 'https://kubernetes.io' }
        ]
      }
    ]
  },
  {
    id: 13,
    name: 'Cisco',
    logo: '🌐',
    foundedYear: 1984,
    headquarter: 'San Jose, USA (India Office in Bangalore)',
    about: 'Cisco - Networking and cybersecurity solutions',
    website: 'https://www.cisco.com',
    hiringUrl: 'https://jobs.cisco.com',
    jobs: [
      {
        jobId: 1,
        title: 'Software Engineer - Networking',
        location: 'Bangalore, Hyderabad',
        salary: '₹8L - ₹13L PA',
        experience: 'Fresher/0-1 Years',
        skills: ['Python', 'C/C++', 'Networking', 'Linux'],
        prepPath: [
          { phase: 'Phase 1: Networking Fundamentals', topics: ['TCP/IP', 'OSI Model', 'Network Protocols', 'Routing'] },
          { phase: 'Phase 2: Programming for Networks', topics: ['Socket Programming', 'Network Libraries', 'Scripting'] },
          { phase: 'Phase 3: Cisco Technologies', topics: ['Cisco IOS', 'Network Automation', 'SDN', 'NetDevOps'] }
        ],
        resources: [
          { name: 'Cisco Learning Network', link: 'https://learningnetwork.cisco.com' },
          { name: 'Cisco Certification', link: 'https://www.cisco.com/c/en/us/training-events/training-certifications' },
          { name: 'Network Automation', link: 'https://developer.cisco.com' }
        ]
      },
      {
        jobId: 2,
        title: 'Cybersecurity Engineer',
        location: 'Bangalore, Pune',
        salary: '₹9L - ₹14L PA',
        experience: '0-2 Years',
        skills: ['Security', 'Python', 'Linux', 'Network Security'],
        prepPath: [
          { phase: 'Phase 1: Security Basics', topics: ['Cryptography', 'Network Security', 'Web Security'] },
          { phase: 'Phase 2: Threat Analysis', topics: ['Vulnerability Assessment', 'Penetration Testing', 'Incident Response'] },
          { phase: 'Phase 3: Cisco Security', topics: ['Cisco ASA', 'Firewalls', 'IDS/IPS', 'Zero Trust'] }
        ],
        resources: [
          { name: 'Cisco Security', link: 'https://www.cisco.com/c/en/us/products/security' },
          { name: 'CCNA Security', link: 'https://learningnetwork.cisco.com' },
          { name: 'HackTheBox', link: 'https://www.hackthebox.com' }
        ]
      }
    ]
  },
  {
    id: 14,
    name: 'IBM',
    logo: '📟',
    foundedYear: 1911,
    headquarter: 'Armonk, USA (India Office in Bangalore)',
    about: 'IBM - Enterprise technology and consulting solutions',
    website: 'https://www.ibm.com',
    hiringUrl: 'https://www.ibm.com/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Associate Software Developer',
        location: 'Bangalore, Pune',
        salary: '₹6L - ₹9L PA',
        experience: 'Fresher/0-1 Years',
        skills: ['Java', 'Python', 'Spring Boot', 'DB2'],
        prepPath: [
          { phase: 'Phase 1: Java Fundamentals', topics: ['Core Java', 'Collections', 'Multithreading', 'OOPS'] },
          { phase: 'Phase 2: Enterprise Technologies', topics: ['Spring Framework', 'IBM Tools', 'Database'] },
          { phase: 'Phase 3: Enterprise Solutions', topics: ['Enterprise Integration', 'SOA', 'Microservices'] }
        ],
        resources: [
          { name: 'IBM Developer', link: 'https://developer.ibm.com' },
          { name: 'IBM Training', link: 'https://www.ibm.com/training' },
          { name: 'IBM Cloud Mastery', link: 'https://www.ibm.com/cloud/learn' }
        ]
      },
      {
        jobId: 2,
        title: 'Blockchain Developer',
        location: 'Bangalore, Hyderabad',
        salary: '₹10L - ₹16L PA',
        experience: '0-2 Years',
        skills: ['Hyperledger', 'Solidity', 'Blockchain', 'Cryptography'],
        prepPath: [
          { phase: 'Phase 1: Blockchain Basics', topics: ['Blockchain Fundamentals', 'Smart Contracts', 'Cryptography'] },
          { phase: 'Phase 2: Hyperledger Fabric', topics: ['Hyperledger Architecture', 'Chaincode', 'Channels'] },
          { phase: 'Phase 3: Enterprise Blockchain', topics: ['Production Deployment', 'Performance', 'Security'] }
        ],
        resources: [
          { name: 'Hyperledger Learn', link: 'https://hyperledger.org' },
          { name: 'IBM Blockchain', link: 'https://www.ibm.com/blockchain' },
          { name: 'Blockchain Dev Course', link: 'https://www.coursera.org' }
        ]
      }
    ]
  },
  {
    id: 15,
    name: 'Deloitte',
    logo: '📊',
    foundedYear: 1845,
    headquarter: 'New York, USA (India Office in Delhi)',
    about: 'Deloitte - Consulting, audit, and advisory services',
    website: 'https://www.deloitte.com',
    hiringUrl: 'https://www2.deloitte.com/in/en/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Consultant - Management Consulting',
        location: 'Delhi, Bangalore, Mumbai',
        salary: '₹6.5L - ₹9L PA',
        experience: 'Fresher',
        skills: ['Business Analysis', 'Data Analysis', 'Excel', 'Communication'],
        prepPath: [
          { phase: 'Phase 1: Consulting Fundamentals', topics: ['Consulting Process', 'Problem Solving', 'Case Studies'] },
          { phase: 'Phase 2: Analytics & Tools', topics: ['Excel Advanced', 'Data Visualization', 'SQL Basics'] },
          { phase: 'Phase 3: Client Skills', topics: ['Presentation', 'Communication', 'Business Acumen'] }
        ],
        resources: [
          { name: 'Deloitte University', link: 'https://www2.deloitte.com/us/en/pages/about-deloitte/articles/training-development.html' },
          { name: 'Consulting Case Prep', link: 'https://www.myconsultingcoach.com' },
          { name: 'Case In Point', link: 'https://www.amazon.com/Case-Point-3rd-Marc-Cosentino' }
        ]
      },
      {
        jobId: 2,
        title: 'Data Analyst - Technology Advisory',
        location: 'Hyderabad, Bangalore',
        salary: '₹5.5L - ₹8L PA',
        experience: 'Fresher/1 Year',
        skills: ['Python', 'SQL', 'Tableau', 'Data Analysis'],
        prepPath: [
          { phase: 'Phase 1: Data Foundation', topics: ['SQL Mastery', 'Statistical Analysis', 'Excel'] },
          { phase: 'Phase 2: Data Visualization', topics: ['Tableau', 'Power BI', 'Dashboard Design'] },
          { phase: 'Phase 3: Big Data & Analytics', topics: ['Python for Data', 'Statistical Modeling', 'ML Basics'] }
        ],
        resources: [
          { name: 'Tableau Public', link: 'https://public.tableau.com' },
          { name: 'DataCamp', link: 'https://www.datacamp.com' },
          { name: 'SQL Tutorial', link: 'https://www.sqlzoodb.com' }
        ]
      }
    ]
  },
  {
    id: 16,
    name: 'Adobe',
    logo: '🎬',
    foundedYear: 1982,
    headquarter: 'San Jose, USA (India Office in Bangalore)',
    about: 'Adobe - Creative and document software solutions',
    website: 'https://www.adobe.com',
    hiringUrl: 'https://www.adobe.com/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Software Engineer - C++/Frameworks',
        location: 'Bangalore, Noida',
        salary: '₹10L - ₹16L PA',
        experience: '0-1 Years',
        skills: ['C++', 'JavaScript', 'PDF Technology', 'Algorithms'],
        prepPath: [
          { phase: 'Phase 1: Advanced C++', topics: ['Modern C++', 'Memory Management', 'Performance Optimization'] },
          { phase: 'Phase 2: Adobe Technologies', topics: ['PDF Technology', 'Imaging', 'Graphics Libraries'] },
          { phase: 'Phase 3: Framework Development', topics: ['Plugin Development', 'API Design', 'Adobe SDK'] }
        ],
        resources: [
          { name: 'Adobe Developer', link: 'https://developer.adobe.com' },
          { name: 'C++ Reference', link: 'https://cppreference.com' },
          { name: 'Adobe SDK Documentation', link: 'https://developer.adobe.com/apis' }
        ]
      },
      {
        jobId: 2,
        title: 'Machine Learning Engineer',
        location: 'Bangalore, Hyderabad',
        salary: '₹12L - ₹18L PA',
        experience: '0-2 Years',
        skills: ['Python', 'TensorFlow', 'ML', 'Deep Learning'],
        prepPath: [
          { phase: 'Phase 1: ML Fundamentals', topics: ['Supervised Learning', 'Unsupervised Learning', 'Regression'] },
          { phase: 'Phase 2: Deep Learning', topics: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers'] },
          { phase: 'Phase 3: Production ML', topics: ['Model Deployment', 'MLOps', 'Performance Tuning'] }
        ],
        resources: [
          { name: 'Fast.ai', link: 'https://www.fast.ai' },
          { name: 'TensorFlow Guide', link: 'https://www.tensorflow.org' },
          { name: 'ML Mastery', link: 'https://machinelearningmastery.com' }
        ]
      }
    ]
  },
  {
    id: 17,
    name: 'Salesforce',
    logo: '☁️',
    foundedYear: 1999,
    headquarter: 'San Francisco, USA (India Office in Bangalore)',
    about: 'Salesforce - Cloud-based CRM and enterprise solutions',
    website: 'https://www.salesforce.com',
    hiringUrl: 'https://www.salesforce.com/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Associate Developer - Salesforce',
        location: 'Bangalore, Hyderabad',
        salary: '₹6.5L - ₹9.5L PA',
        experience: 'Fresher/1 Year',
        skills: ['Apex', 'Visualforce', 'SOQL', 'JavaScript'],
        prepPath: [
          { phase: 'Phase 1: Salesforce Platform', topics: ['Salesforce Objects', 'Workflows', 'Validation Rules'] },
          { phase: 'Phase 2: Apex & VF', topics: ['Apex Programming', 'Visualforce', 'Triggers', 'Governor Limits'] },
          { phase: 'Phase 3: Integration & Deployment', topics: ['APIs', 'Integration', 'Change Set', 'Testing'] }
        ],
        resources: [
          { name: 'Salesforce Trailhead', link: 'https://trailhead.salesforce.com' },
          { name: 'Salesforce Developer', link: 'https://developer.salesforce.com' },
          { name: 'Salesforce Certification', link: 'https://www.salesforce.com/training/certification' }
        ]
      },
      {
        jobId: 2,
        title: 'Technical Consultant',
        location: 'Delhi, Mumbai, Bangalore',
        salary: '₹7L - ₹10.5L PA',
        experience: '0-2 Years',
        skills: ['Salesforce', 'Business Analysis', 'Requirements Gathering', 'Communication'],
        prepPath: [
          { phase: 'Phase 1: CRM Fundamentals', topics: ['Salesforce Features', 'Sales Cloud', 'Service Cloud'] },
          { phase: 'Phase 2: Configuration & Customization', topics: ['Org Setup', 'Custom Fields', 'Flows', 'Integrations'] },
          { phase: 'Phase 3: Client Engagement', topics: ['Consulting Skills', 'Case Studies', 'Solution Design'] }
        ],
        resources: [
          { name: 'Salesforce University', link: 'https://www.salesforce.com/training' },
          { name: 'Trailhead Modules', link: 'https://trailhead.salesforce.com' },
          { name: 'Consultant Bootcamp', link: 'https://www.salesforce.com/consulting' }
        ]
      }
    ]
  },
  {
    id: 18,
    name: 'SAP',
    logo: '📈',
    foundedYear: 1972,
    headquarter: 'Walldorf, Germany (India Office in Bangalore)',
    about: 'SAP - Enterprise resource planning and cloud solutions',
    website: 'https://www.sap.com',
    hiringUrl: 'https://www.sap.com/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Associate Consultant - ERP',
        location: 'Bangalore, Delhi, Pune',
        salary: '₹5.5L - ₹8.5L PA',
        experience: 'Fresher',
        skills: ['SAP', 'ABAP', 'FIORI', 'Business Process'],
        prepPath: [
          { phase: 'Phase 1: SAP Fundamentals', topics: ['SAP Architecture', 'MM Module', 'SD Module', 'FI/CO'] },
          { phase: 'Phase 2: ABAP Programming', topics: ['ABAP Basics', 'OOP ABAP', 'Debugging', 'Enhancements'] },
          { phase: 'Phase 3: SAP Fiori & Advance', topics: ['UI5 Development', 'Fiori Launchpad', 'Modern UI'] }
        ],
        resources: [
          { name: 'SAP Learning Hub', link: 'https://learning.sap.com' },
          { name: 'SAP Community', link: 'https://community.sap.com' },
          { name: 'ABAP Tutorial', link: 'https://www.tutorialspoint.com/sap_abap' }
        ]
      },
      {
        jobId: 2,
        title: 'SAP Analytics Cloud Developer',
        location: 'Hyderabad, Bangalore',
        salary: '₹8L - ₹12L PA',
        experience: '0-2 Years',
        skills: ['SAP Analytics', 'Python', 'Data Modeling', 'BI Tools'],
        prepPath: [
          { phase: 'Phase 1: Analytics Fundamentals', topics: ['Business Intelligence', 'Data Warehouse', 'Data Modeling'] },
          { phase: 'Phase 2: SAP Analytics Cloud', topics: ['SAC Features', 'Planning', 'Predictive Analysis'] },
          { phase: 'Phase 3: Advanced Analytics', topics: ['ML in Analytics', 'Story Building', 'Dashboard Design'] }
        ],
        resources: [
          { name: 'SAP Analytics Course', link: 'https://learning.sap.com' },
          { name: 'Data Warehouse Concepts', link: 'https://www.coursera.org' },
          { name: 'Python for Data Science', link: 'https://www.datacamp.com' }
        ]
      }
    ]
  },
  {
    id: 19,
    name: 'Intel',
    logo: '⚙️',
    foundedYear: 1968,
    headquarter: 'Santa Clara, USA (India Office in Bangalore)',
    about: 'Intel - Semiconductor and computing technology',
    website: 'https://www.intel.com',
    hiringUrl: 'https://www.intel.com/content/www/us/en/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Hardware Engineer - Design',
        location: 'Bangalore, Hyderabad',
        salary: '₹9L - ₹14L PA',
        experience: '0-1 Years',
        skills: ['VLSI', 'Verilog', 'HDL', 'Circuit Design'],
        prepPath: [
          { phase: 'Phase 1: Digital Design', topics: ['Digital Logic', 'Boolean Algebra', 'Combinational Circuits'] },
          { phase: 'Phase 2: Hardware Description Language', topics: ['Verilog/VHDL', 'Simulation', 'Synthesis', 'Timing'] },
          { phase: 'Phase 3: Advanced VLSI', topics: ['Physical Design', 'Place & Route', 'Timing Analysis', 'Verification'] }
        ],
        resources: [
          { name: 'Verilog Tutorial', link: 'https://www.testbencher.com' },
          { name: 'VLSI Design', link: 'https://www.geeksforgeeks.org/vlsi' },
          { name: 'HDL Learning', link: 'https://www.edaplayground.com' }
        ]
      },
      {
        jobId: 2,
        title: 'Software Engineer - Firmware',
        location: 'Bangalore, Pune',
        salary: '₹8.5L - ₹13L PA',
        experience: '0-2 Years',
        skills: ['C/C++', 'Assembly', 'Hardware Debugging', 'Linux'],
        prepPath: [
          { phase: 'Phase 1: Embedded Systems', topics: ['Firmware Basics', 'Bootloaders', 'Device Drivers'] },
          { phase: 'Phase 2: Hardware Interaction', topics: ['Memory Management', 'Interrupts', 'Register Programming'] },
          { phase: 'Phase 3: System Optimization', topics: ['Performance Tuning', 'Debugging Tools', 'Testing'] }
        ],
        resources: [
          { name: 'Embedded Linux', link: 'https://www.embedded.linux' },
          { name: 'Assembly Language', link: 'https://www.oreilly.com' },
          { name: 'Firmware Development', link: 'https://www.github.com' }
        ]
      }
    ]
  },
  {
    id: 20,
    name: 'Qualcomm',
    logo: '📡',
    foundedYear: 1985,
    headquarter: 'San Diego, USA (India Office in Hyderabad)',
    about: 'Qualcomm - Wireless technology and semiconductors',
    website: 'https://www.qualcomm.com',
    hiringUrl: 'https://www.qualcomm.com/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Systems Engineer - Modem',
        location: 'Hyderabad, Bangalore',
        salary: '₹9.5L - ₹15L PA',
        experience: '0-1 Years',
        skills: ['C/C++', 'Signal Processing', 'Wireless', 'MATLAB'],
        prepPath: [
          { phase: 'Phase 1: Wireless Fundamentals', topics: ['Signal Processing', 'Modulation', 'Demodulation', 'Channels'] },
          { phase: 'Phase 2: Modem Design', topics: ['Physical Layer', 'Protocol Stack', 'Performance Analysis'] },
          { phase: 'Phase 3: 5G & Advanced', topics: ['5G Technology', 'Optimization', 'Testing & Validation'] }
        ],
        resources: [
          { name: 'Wireless Communication', link: 'https://www.geeksforgeeks.org/wireless' },
          { name: '5G Technology', link: 'https://www.qualcomm.com/5g' },
          { name: 'MATLAB Signal Processing', link: 'https://www.mathworks.com' }
        ]
      },
      {
        jobId: 2,
        title: 'Software Developer - GPU',
        location: 'Hyderabad',
        salary: '₹10L - ₹16L PA',
        experience: '0-2 Years',
        skills: ['CUDA', 'OpenGL', 'Graphics', 'C++'],
        prepPath: [
          { phase: 'Phase 1: GPU Architecture', topics: ['GPU Basics', 'Parallel Computing', 'Threading Model'] },
          { phase: 'Phase 2: CUDA Programming', topics: ['CUDA Kernels', 'Memory Management', 'Optimization'] },
          { phase: 'Phase 3: Graphics & ML', topics: ['OpenGL', 'Vulkan', 'ML Acceleration', 'Performance'] }
        ],
        resources: [
          { name: 'CUDA by NVIDIA', link: 'https://developer.nvidia.com/cuda-zone' },
          { name: 'CUDA Programming Guide', link: 'https://docs.nvidia.com/cuda' },
          { name: 'GPU Computing Gems', link: 'https://www.oreilly.com' }
        ]
      }
    ]
  },
  {
    id: 21,
    name: 'Meta (Facebook)',
    logo: '👥',
    foundedYear: 2004,
    headquarter: 'Menlo Park, USA (India Office in Bangalore)',
    about: 'Meta - Social media and metaverse technology',
    website: 'https://www.meta.com',
    hiringUrl: 'https://www.metacareers.com',
    jobs: [
      {
        jobId: 1,
        title: 'Software Engineer - Backend',
        location: 'Bangalore',
        salary: '₹18L - ₹28L PA',
        experience: '0-1 Years',
        skills: ['C++', 'Python', 'System Design', 'Distributed Systems'],
        prepPath: [
          { phase: 'Phase 1: DSA Excellence', topics: ['Advanced Algorithms', 'Graph Algorithms', 'Dynamic Programming'] },
          { phase: 'Phase 2: System Design Mastery', topics: ['Large Scale Systems', 'Databases', 'Caching', 'Message Queues'] },
          { phase: 'Phase 3: Meta Specific', topics: ['Meta Stack', 'Hack Language', 'Performance Optimization'] }
        ],
        resources: [
          { name: 'Meta Careers', link: 'https://www.metacareers.com' },
          { name: 'System Design Interview', link: 'https://www.educative.io' },
          { name: 'Hack Language', link: 'https://hacklang.org' }
        ]
      },
      {
        jobId: 2,
        title: 'ML Engineer - Recommendations',
        location: 'Bangalore, Hyderabad',
        salary: '₹20L - ₹30L PA',
        experience: '0-2 Years',
        skills: ['Python', 'PyTorch', 'ML', 'Recommendation Systems'],
        prepPath: [
          { phase: 'Phase 1: ML Fundamentals', topics: ['Machine Learning Basics', 'Feature Engineering', 'Model Selection'] },
          { phase: 'Phase 2: Advanced ML', topics: ['Deep Learning', 'NLP', 'Computer Vision', 'Recommendations'] },
          { phase: 'Phase 3: Production Systems', topics: ['MLOps', 'Model Serving', 'Experimentation', 'Scaling'] }
        ],
        resources: [
          { name: 'PyTorch', link: 'https://pytorch.org' },
          { name: 'Fast.ai Course', link: 'https://course.fast.ai' },
          { name: 'Recommendation Algorithms', link: 'https://www.coursera.org' }
        ]
      }
    ]
  },
  {
    id: 22,
    name: 'Apple',
    logo: '🍎',
    foundedYear: 1976,
    headquarter: 'Cupertino, USA (India Office in Bangalore)',
    about: 'Apple - Premium consumer electronics and software',
    website: 'https://www.apple.com',
    hiringUrl: 'https://www.apple.com/jobs',
    jobs: [
      {
        jobId: 1,
        title: 'Software Engineer - iOS',
        location: 'Bangalore, Hyderabad',
        salary: '₹15L - ₹24L PA',
        experience: '0-1 Years',
        skills: ['Swift', 'Objective-C', 'iOS', 'Cocoa'],
        prepPath: [
          { phase: 'Phase 1: Swift Mastery', topics: ['Swift Programming', 'Memory Management', 'Concurrency'] },
          { phase: 'Phase 2: iOS Development', topics: ['UIKit/SwiftUI', 'App Architecture', 'Frameworks', 'Testing'] },
          { phase: 'Phase 3: Advanced iOS', topics: ['Performance Optimization', 'App Security', 'Accessibility'] }
        ],
        resources: [
          { name: 'Swift by Apple', link: 'https://www.swift.org' },
          { name: 'iOS Developer Guide', link: 'https://developer.apple.com/ios' },
          { name: 'SwiftUI Tutorials', link: 'https://developer.apple.com/swiftui' }
        ]
      },
      {
        jobId: 2,
        title: 'Hardware Engineer - SoC Design',
        location: 'Bangalore',
        salary: '₹16L - ₹26L PA',
        experience: '0-2 Years',
        skills: ['VLSI', 'Hardware Design', 'Performance Analysis', 'Verilog'],
        prepPath: [
          { phase: 'Phase 1: Advanced VLSI', topics: ['Chip Design Basics', 'Timing', 'Power Analysis', 'DFT'] },
          { phase: 'Phase 2: SoC Design', topics: ['System Architecture', 'Interconnects', 'Memory Hierarchies'] },
          { phase: 'Phase 3: Apple SoC', topics: ['Performance Optimization', 'Thermal Management', 'Silicon Validation'] }
        ],
        resources: [
          { name: 'VLSI Design Mastery', link: 'https://www.geeksforgeeks.org/vlsi' },
          { name: 'Apple SoC Architecture', link: 'https://www.apple.com' },
          { name: 'Chip Design Courses', link: 'https://www.udemy.com' }
        ]
      }
    ]
  },
  {
    id: 23,
    name: 'NVIDIA',
    logo: '🎮',
    foundedYear: 1993,
    headquarter: 'Santa Clara, USA (India Office in Bangalore)',
    about: 'NVIDIA - AI, graphics, and data center technology',
    website: 'https://www.nvidia.com',
    hiringUrl: 'https://www.nvidia.com/en-us/about-nvidia/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Software Engineer - CUDA',
        location: 'Bangalore, Pune',
        salary: '₹12L - ₹18L PA',
        experience: '0-1 Years',
        skills: ['CUDA', 'C/C++', 'GPU', 'Parallel Computing'],
        prepPath: [
          { phase: 'Phase 1: GPU Fundamentals', topics: ['GPU Architecture', 'Parallel Thinking', 'Thread Hierarchy'] },
          { phase: 'Phase 2: CUDA Deep Dive', topics: ['CUDA Programming', 'Memory Optimization', 'Performance Tuning'] },
          { phase: 'Phase 3: Advanced Applications', topics: ['ML Frameworks', 'Tensor Cores', 'Libraries'] }
        ],
        resources: [
          { name: 'NVIDIA Developer', link: 'https://developer.nvidia.com' },
          { name: 'CUDA Toolkit', link: 'https://developer.nvidia.com/cuda-toolkit' },
          { name: 'NVIDIA Learn', link: 'https://courses.nvidia.com' }
        ]
      },
      {
        jobId: 2,
        title: 'AI Software Engineer',
        location: 'Bangalore, Hyderabad',
        salary: '₹14L - ₹22L PA',
        experience: '0-2 Years',
        skills: ['Python', 'TensorRT', 'CUDA', 'AI Frameworks'],
        prepPath: [
          { phase: 'Phase 1: AI Fundamentals', topics: ['Deep Learning', 'Transformers', 'Optimization Techniques'] },
          { phase: 'Phase 2: NVIDIA AI Stack', topics: ['TensorRT', 'cuDNN', 'NCCL', 'AI Frameworks'] },
          { phase: 'Phase 3: Inference Optimization', topics: ['Model Optimization', 'Quantization', 'Deployment'] }
        ],
        resources: [
          { name: 'NVIDIA AI Learning', link: 'https://courses.nvidia.com' },
          { name: 'TensorRT Guide', link: 'https://docs.nvidia.com/deeplearning/tensorrt' },
          { name: 'NVIDIA Launchpad', link: 'https://www.nvidia.com/en-us/data-center/launchpad' }
        ]
      }
    ]
  },
  {
    id: 24,
    name: 'LTIMindtree',
    logo: '🏗️',
    foundedYear: 2021,
    headquarter: 'Bangalore, India',
    about: 'LTIMindtree - Integrated IT services and consulting',
    website: 'https://www.ltimindtree.com',
    hiringUrl: 'https://www.ltimindtree.com/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Associate Software Engineer - Core',
        location: 'Bangalore, Hyderabad, Pune',
        salary: '₹3.5L - ₹4.5L PA',
        experience: 'Fresher',
        skills: ['Java', 'Python', 'SQL', 'Core Java'],
        prepPath: [
          { phase: 'Phase 1: Programming Foundations', topics: ['Core Java', 'Data Structures', 'Algorithms'] },
          { phase: 'Phase 2: Web Technologies', topics: ['Servlets', 'JSP', 'Web Services', 'REST APIs'] },
          { phase: 'Phase 3: Framework Mastery', topics: ['Spring Framework', 'Hibernate', 'Database Design'] }
        ],
        resources: [
          { name: 'LTI Campus Hiring', link: 'https://www.ltimindtree.com/careers' },
          { name: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org' },
          { name: 'HackerRank Java', link: 'https://www.hackerrank.com' }
        ]
      },
      {
        jobId: 2,
        title: 'Technology Associate - Cloud Services',
        location: 'Bangalore, Pune, Hyderabad',
        salary: '₹4L - ₹5.5L PA',
        experience: 'Fresher/1 Year',
        skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Docker'],
        prepPath: [
          { phase: 'Phase 1: Cloud Basics', topics: ['AWS Fundamentals', 'EC2', 'S3', 'RDS'] },
          { phase: 'Phase 2: DevOps & Containerization', topics: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins'] },
          { phase: 'Phase 3: Microservices', topics: ['Microservices Architecture', 'Serverless', 'API Gateway'] }
        ],
        resources: [
          { name: 'AWS Free Tier', link: 'https://aws.amazon.com/free' },
          { name: 'Docker Academy', link: 'https://www.docker.com/play-with-docker' },
          { name: 'Linux Academy Cloud', link: 'https://linuxacademy.com' }
        ]
      }
    ]
  }
];

// Function to get company by id
export const getCompanyById = (id) => {
  return indianCompanies.find(company => company.id === id);
};

// Function to get all company names
export const getCompanyNames = () => {
  return indianCompanies.map(company => ({
    id: company.id,
    name: company.name,
    logo: company.logo
  }));
};

// Function to get jobs by company
export const getJobsByCompany = (companyId) => {
  const company = getCompanyById(companyId);
  return company ? company.jobs : [];
};

// Function to get job details
export const getJobDetails = (companyId, jobId) => {
  const company = getCompanyById(companyId);
  if (!company) return null;
  return company.jobs.find(job => job.jobId === jobId);
};

// Function to get company by name
export const getCompanyJobs = (companyName) => {
  const company = indianCompanies.find(c => c.name === companyName);
  return company || null;
};

// Function to get all companies with jobs
export const getAllCompaniesWithJobs = () => {
  return indianCompanies.map(company => ({
    id: company.id,
    name: company.name,
    logo: company.logo,
    jobCount: company.jobs.length,
    jobs: company.jobs
  }));
};
