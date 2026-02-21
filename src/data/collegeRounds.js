// College-specific interview rounds and sample questions
// Non-copyright, synthetic practice prompts and guidance

export const collegeRounds = {
  "anurag-univ": [
    {
      round: "Online Assessment",
      type: "Aptitude / DSA",
      resources: [ { title: "DSA Practice", link: "https://leetcode.com/" } ],
      questions: [
        { question: "Array manipulation and two-pointer problems", answer: "Practice sliding window and two-pointer patterns; focus on edge cases and indices." },
        { question: "Basic combinatorics and probabilities", answer: "Brush up on counting principles and permutations/combinations for quick aptitude rounds." }
      ]
    },
    {
      round: "Technical Interview",
      type: "DSA / System Design",
      resources: [ { title: "Core CS & System Design", link: "https://www.geeksforgeeks.org/" } ],
      questions: [
        { question: "Design a URL shortener", answer: "Discuss hashing/base62 keys, DB schema, collision handling, and scaling strategy." },
        { question: "Implement efficient search in rotated sorted array", answer: "Use modified binary search to achieve O(log n) time complexity." }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [ { title: "HR Prep", link: "https://www.interviewbit.com/hr-interview-questions/" } ],
      questions: [
        { question: "Tell me about a time you led a team", answer: "Use STAR: Situation, Task, Action, Result. Quantify the impact where possible." },
        { question: "Why Anurag and why this role?", answer: "Explain motivation, alignment with company goals, and eagerness to learn." }
      ]
    }
  ],

  "srm-delhi": [
    {
      round: "Online Assessment",
      type: "Aptitude / Coding",
      resources: [ { title: "Practice Platform", link: "https://www.hackerrank.com/" } ],
      questions: [
        { question: "Time & Work and Speed problems", answer: "Speed up calculations by using LCM and efficient arithmetic handling." },
        { question: "String pattern matching", answer: "Know KMP basics and rolling-hash approaches for substring search." }
      ]
    },
    {
      round: "Technical Interview",
      type: "DSA / Practical",
      resources: [ { title: "Coding Patterns", link: "https://leetcode.com/explore/" } ],
      questions: [
        { question: "Merge k sorted lists", answer: "Use a min-heap to merge in O(N log k) time." },
        { question: "Explain RESTful design for a microservice", answer: "Discuss endpoints, statelessness, authentication, and scalability." }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [ { title: "Interview Tips", link: "https://www.geeksforgeeks.org/career-corner/" } ],
      questions: [
        { question: "Where do you see yourself in 5 years?", answer: "Describe growth path, learning objectives and alignment with company." }
      ]
    }
  ],

  "pec-chandigarh": [
    {
      round: "Online Assessment",
      type: "Aptitude / Technical",
      resources: [ { title: "Aptitude Practice", link: "https://www.indiabix.com/" } ],
      questions: [
        { question: "Number series and algebra puzzles", answer: "Practice pattern recognition and quick arithmetic shortcuts." }
      ]
    },
    {
      round: "Technical Interview",
      type: "Core CS",
      resources: [ { title: "Core Concepts", link: "https://www.geeksforgeeks.org/" } ],
      questions: [
        { question: "Explain hashing & collision resolution", answer: "Discuss chaining, open addressing, load factor and resizing." },
        { question: "Basic OS concepts: processes vs threads", answer: "Describe scheduling, context switch and synchronization primitives." }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [ { title: "HR Round Prep", link: "https://www.interviewbit.com/" } ],
      questions: [
        { question: "Describe a failure and how you handled it", answer: "Use STAR to explain learning and remediation steps." }
      ]
    }
  ],

  "vjti-mumbai": [
    {
      round: "Online Coding Test",
      type: "Coding",
      resources: [ { title: "Practice", link: "https://www.codechef.com/" } ],
      questions: [
        { question: "Graph traversal problems", answer: "Master BFS/DFS and shortest path variants for constrained graphs." }
      ]
    },
    {
      round: "Technical Interview",
      type: "System Design / Coding",
      resources: [ { title: "Design Patterns", link: "https://refactoring.guru/" } ],
      questions: [
        { question: "Design a job scheduling service", answer: "Cover persistence, retries, concurrency and failure handling." }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [ { title: "HR Prep", link: "https://www.glassdoor.co.in/Interview/index.htm" } ],
      questions: [
        { question: "Are you willing to relocate?", answer: "Answer honestly and indicate flexibility where appropriate." }
      ]
    }
  ],

  "cbit": [
    {
      round: "Online Assessment",
      type: "Aptitude / Coding",
      resources: [ { title: "Basic Coding", link: "https://www.hackerearth.com/" } ],
      questions: [
        { question: "Array rotation and modular arithmetic", answer: "Practice in-place rotations and optimal indexing." }
      ]
    },
    {
      round: "Technical Interview",
      type: "DSA / System",
      resources: [ { title: "Core CS", link: "https://www.geeksforgeeks.org/" } ],
      questions: [
        { question: "Explain binary search variations", answer: "Show variants for lower/upper bound and custom predicates." }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [ { title: "HR Questions", link: "https://www.interviewbit.com/" } ],
      questions: [
        { question: "What are your strengths?", answer: "Be specific and back with examples. Mention learning and teamwork." }
      ]
    }
  ],

  "jntu-hyderabad": [
    {
      round: "Online Assessment",
      type: "Aptitude / MCQ",
      resources: [ { title: "Practice Tests", link: "https://www.testbook.com/" } ],
      questions: [
        { question: "Probability & permutations", answer: "Translate text to formulas, compute carefully and check constraints." }
      ]
    },
    {
      round: "Technical Interview",
      type: "Coding / Systems",
      resources: [ { title: "Coding Patterns", link: "https://leetcode.com/explore/" } ],
      questions: [
        { question: "Implement LRU cache", answer: "Use a hashmap + doubly linked list; show complexity analysis." }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [ { title: "HR Prep", link: "https://www.geeksforgeeks.org/" } ],
      questions: [
        { question: "Describe a project you are proud of", answer: "Focus on impact, your role, technologies used and measurable results." }
      ]
    }
  ],

  "osmania-univ": [
    {
      round: "Online Assessment",
      type: "Aptitude / DSA",
      resources: [ { title: "DSA Practice", link: "https://leetcode.com/" } ],
      questions: [
        { question: "Basic recursion and DP problems", answer: "Practice memoization and bottom-up DP for common patterns." }
      ]
    },
    {
      round: "Technical Interview",
      type: "Core CS",
      resources: [ { title: "Core Concepts", link: "https://www.geeksforgeeks.org/" } ],
      questions: [
        { question: "Explain operating system scheduling algorithms", answer: "Discuss FIFO, Round Robin, Priority and Multi-level queues with trade-offs." }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [ { title: "HR Round Prep", link: "https://www.interviewbit.com/" } ],
      questions: [
        { question: "What motivates you?", answer: "Share genuine motivators and align with role responsibilities." }
      ]
    }
  ]
};

export default collegeRounds;
