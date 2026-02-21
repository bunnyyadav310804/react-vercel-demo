// AI Chatbot Service - LOCAL KNOWLEDGE BASE
// No API dependency - all responses from curated technical knowledge base

const KNOWLEDGE_BASE = [
  // DATA STRUCTURES & ALGORITHMS
  {
    keywords: ['binary search', 'search', 'algorithm'],
    title: 'Binary Search',
    answer: `Binary Search is an efficient algorithm for finding a target value in a **sorted array**.

**How it works:**
- Divide the search space in half each iteration
- Compare middle element with target
- Eliminate half of remaining elements
- Repeat until found or search space is empty

**Time Complexity:** O(log n)
**Space Complexity:** O(1) iterative, O(log n) recursive

**Code Example (JavaScript):**
\`\`\`javascript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
\`\`\`

**Use Cases:**
- Searching in sorted arrays/lists
- Finding insertion positions
- Range queries

**Important:** Array MUST be sorted!`
  },
  {
    keywords: ['sorting', 'merge sort', 'quick sort', 'sort'],
    title: 'Sorting Algorithms',
    answer: `**Common Sorting Algorithms Comparison:**

**Merge Sort**
- Time: O(n log n) always
- Space: O(n)
- Stable: Yes
- Best for: Large datasets, external sorting

**Quick Sort**
- Time: O(n log n) avg, O(n²) worst
- Space: O(log n)
- Stable: No
- Best for: Average case performance

**Bubble Sort**
- Time: O(n²)
- Space: O(1)
- Stable: Yes
- Best for: Educational purposes only

**Selection Sort**
- Time: O(n²)
- Space: O(1)
- Stable: No
- Use: Minimal memory scenarios

**Insertion Sort**
- Time: O(n²)
- Space: O(1)
- Stable: Yes
- Use: Small arrays, nearly sorted data

**Heap Sort**
- Time: O(n log n)
- Space: O(1)
- Stable: No
- Use: Guaranteed O(n log n)

**Real-world choice:** Most languages use Timsort (merge+insertion hybrid)`
  },
  {
    keywords: ['data structures', 'array', 'linked list', 'stack', 'queue', 'hash', 'tree', 'graph'],
    title: 'Data Structures Overview',
    answer: `**Essential Data Structures:**

**Arrays**
- O(1) access by index
- O(n) insertion/deletion (middle)
- Fixed size (in most languages)
- Use: Index-based access

**Linked Lists**
- O(n) access
- O(1) insertion/deletion (with pointer)
- Dynamic size
- Use: Frequent insertions/deletions

**Stacks (LIFO)**
- O(1) push/pop
- Last In First Out
- Use: Function calls, expression evaluation, undo

**Queues (FIFO)**
- O(1) enqueue/dequeue
- First In First Out
- Use: Task scheduling, BFS

**Hash Tables**
- O(1) avg lookup/insert/delete
- O(n) worst case (collision)
- Use: Fast lookups, caching

**Binary Trees**
- O(log n) balanced search
- O(n) unbalanced
- Use: BST, expression trees

**Graphs**
- Adjacency list: O(V+E)
- Adjacency matrix: O(V²)
- Use: Networks, relationships`
  },
  {
    keywords: ['recursion', 'recursive'],
    title: 'Recursion Explained',
    answer: `**Recursion:** A function calling itself to solve smaller subproblems.

**Key Components:**
1. **Base Case:** Condition to stop recursion
2. **Recursive Case:** Function calls itself
3. **Progress toward base case:** Each call gets closer to base

**Example - Factorial:**
\`\`\`javascript
function factorial(n) {
  // Base case
  if (n <= 1) return 1;
  
  // Recursive case
  return n * factorial(n - 1);
}
// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
\`\`\`

**Time & Space Complexity:**
- Time: Depends on problem (e.g., fibonacci O(2^n))
- Space: O(depth) call stack

**Common Problems:**
- Factorial, Fibonacci
- Tree traversal (DFS)
- Backtracking (N-Queens)
- Divide & Conquer

**Memoization:** Cache results to avoid recalculation`
  },
  {
    keywords: ['dynamic programming', 'dp', 'memoization'],
    title: 'Dynamic Programming',
    answer: `**Dynamic Programming:** Optimization technique using **overlapping subproblems** and **optimal substructure**.

**Two Approaches:**

**1. Top-Down (Memoization)**
- Recursion + caching
- Store results to avoid recalculation
\`\`\`javascript
const memo = {};
function fib(n) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n-1) + fib(n-2);
  return memo[n];
}
\`\`\`

**2. Bottom-Up (Tabulation)**
- Iterative approach
- Build solution from base cases
\`\`\`javascript
function fib(n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
}
\`\`\`

**Classic Problems:**
- Fibonacci: O(n) vs O(2^n)
- Coin Change: Min coins needed
- Longest Common Subsequence
- 0/1 Knapsack Problem
- Edit Distance

**Space Optimization:** Often reduce 2D DP to 1D`
  },

  // PROGRAMMING LANGUAGES
  {
    keywords: ['python', 'syntax', 'basics'],
    title: 'Python Basics',
    answer: `**Python: Beginner-Friendly, Powerful Language**

**Variables & Types:**
\`\`\`python
x = 10              # int
y = 3.14            # float
name = "John"       # str
is_active = True    # bool
\`\`\`

**Common Data Structures:**
\`\`\`python
lst = [1, 2, 3]              # List (mutable)
tpl = (1, 2, 3)              # Tuple (immutable)
dct = {'a': 1, 'b': 2}       # Dictionary
st = {1, 2, 3}               # Set
\`\`\`

**Functions:**
\`\`\`python
def greet(name="World"):
    return f"Hello, {name}!"

# Default parameters, keyword arguments supported
\`\`\`

**Loops & Conditionals:**
\`\`\`python
for i in range(5):       # 0 to 4
    if i % 2 == 0:
        print(f"{i} is even")

while condition:
    # do something
\`\`\`

**List Comprehensions:**
\`\`\`python
squares = [x**2 for x in range(10)]  # [0, 1, 4, 9, ...]
\`\`\`

**Key Features:**
- Indentation-based syntax
- Dynamic typing
- Extensive standard library
- Great for DSA, ML, web development`
  },
  {
    keywords: ['javascript', 'js', 'async', 'promise', 'callback'],
    title: 'JavaScript Async Programming',
    answer: `**Handling Asynchronous Code in JavaScript**

**1. Callbacks (Older approach):**
\`\`\`javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data loaded');
  }, 1000);
}
fetchData(console.log);  // Callback Hell problems
\`\`\`

**2. Promises:**
\`\`\`javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done'), 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
\`\`\`

**3. Async/Await (Modern & Clean):**
\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage
const data = await fetchData();
\`\`\`

**Key Concepts:**
- **Synchronous:** Code executes line-by-line
- **Asynchronous:** Code doesn't block; executes when ready
- **Event Loop:** JS engine handles async operations
- **Microtask Queue:** Promises, async/await
- **Macrotask Queue:** setTimeout, setInterval

**Best Practice:** Use async/await for readability`
  },
  {
    keywords: ['java', 'oop', 'class', 'object'],
    title: 'Java OOP Concepts',
    answer: `**Object-Oriented Programming in Java**

**Classes & Objects:**
\`\`\`java
public class Person {
  private String name;
  private int age;
  
  // Constructor
  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
  
  // Method
  public void greet() {
    System.out.println("Hello, " + name);
  }
}

Person p = new Person("John", 25);
p.greet();
\`\`\`

**Pillars of OOP:**

**1. Encapsulation**
- Hide internal data with private/public
- Protect data integrity

**2. Inheritance**
\`\`\`java
class Animal { }
class Dog extends Animal { }  // Dog inherits from Animal
\`\`\`

**3. Polymorphism**
- Same interface, multiple implementations
- Method overriding, overloading

**4. Abstraction**
\`\`\`java
abstract class Shape {
  abstract double area();
}
\`\`\`

**Key Features:**
- Statically typed
- Compiled to bytecode
- JVM = platform independent
- Strong for enterprise apps`
  },

  // WEB DEVELOPMENT
  {
    keywords: ['react', 'jsx', 'hooks', 'state', 'usestate', 'useeffect'],
    title: 'React & Hooks Essentials',
    answer: `**Modern React with Hooks**

**Components:**
\`\`\`jsx
// Functional Component (modern approach)
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

**Important Hooks:**

**useState:** Manage local state
\`\`\`javascript
const [state, setState] = useState(initialValue);
\`\`\`

**useEffect:** Handle side effects
\`\`\`javascript
useEffect(() => {
  // Runs after render
  // Fetch data, setup subscriptions
  
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]);  // Run only when dependencies change
\`\`\`

**useContext:** Share data across components
\`\`\`javascript
const value = useContext(MyContext);
\`\`\`

**Best Practices:**
- Props flow down, events flow up
- Component composition > inheritance
- Keep components small and focused
- Memoize expensive computations

**Performance Tips:**
- React.memo for function components
- useMemo, useCallback for optimization
- Code splitting for large apps`
  },
  {
    keywords: ['html', 'css', 'web design', 'responsive'],
    title: 'HTML & CSS Fundamentals',
    answer: `**Building Web Foundations**

**HTML5 Semantic Tags:**
\`\`\`html
<header>Page header</header>
<nav>Navigation menu</nav>
<main>Main content</main>
<article>Independent content</article>
<section>Thematic grouping</section>
<aside>Side content</aside>
<footer>Page footer</footer>
\`\`\`

**CSS Box Model:**
\`\`\`
Margin > Border > Padding > Content
\`\`\`

**Responsive Design:**
\`\`\`css
/* Mobile First Approach */
.container { width: 100%; }

@media (min-width: 768px) {
  .container { width: 750px; }
}

@media (min-width: 1024px) {
  .container { width: 960px; }
}
\`\`\`

**Flexbox Layout:**
\`\`\`css
.container {
  display: flex;
  justify-content: center;      /* Horizontal alignment */
  align-items: center;           /* Vertical alignment */
  gap: 20px;
}
\`\`\`

**Grid Layout:**
\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
  gap: 20px;
}
\`\`\`

**Key Principles:**
- Accessibility (a11y)
- Performance (optimize images)
- SEO (proper structure)
- Cross-browser compatibility`
  },
  {
    keywords: ['rest', 'api', 'http', 'get', 'post', 'json'],
    title: 'REST APIs Explained',
    answer: `**Building and Consuming REST APIs**

**HTTP Methods:**
- **GET:** Retrieve data (safe, idempotent)
- **POST:** Create new resource
- **PUT:** Update entire resource
- **PATCH:** Partial update
- **DELETE:** Remove resource

**Example API Calls:**
\`\`\`javascript
// GET - Fetch user
fetch('/api/users/123')
  .then(res => res.json())
  .then(data => console.log(data));

// POST - Create user
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', email: 'john@example.com' })
})

// PUT - Update user
fetch('/api/users/123', {
  method: 'PUT',
  body: JSON.stringify({ name: 'Jane' })
})

// DELETE - Remove user
fetch('/api/users/123', { method: 'DELETE' })
\`\`\`

**Status Codes:**
- 2xx: Success (200 OK, 201 Created)
- 3xx: Redirection
- 4xx: Client error (400 Bad Request, 404 Not Found)
- 5xx: Server error

**Best Practices:**
- Use correct HTTP methods
- Version your APIs (/v1/users)
- Proper error handling
- Documentation (Swagger/OpenAPI)
- Authentication (JWT, OAuth)
- Rate limiting
- CORS handling`
  },

  // DATABASES
  {
    keywords: ['sql', 'database', 'query', 'select', 'insert'],
    title: 'SQL Basics',
    answer: `**Structured Query Language for Data**

**CRUD Operations:**
\`\`\`sql
-- CREATE (Insert)
INSERT INTO users (name, email, age)
VALUES ('John', 'john@example.com', 30);

-- READ (Select)
SELECT * FROM users WHERE age > 25;
SELECT name, email FROM users;
SELECT DISTINCT country FROM users;

-- UPDATE
UPDATE users SET age = 31 WHERE id = 1;

-- DELETE
DELETE FROM users WHERE id = 1;
\`\`\`

**Filtering & Sorting:**
\`\`\`sql
-- WHERE conditions
SELECT * FROM users WHERE age > 25 AND country = 'USA';

-- ORDER BY
SELECT * FROM users ORDER BY age DESC;

-- LIMIT
SELECT * FROM users LIMIT 10;

-- LIKE (pattern matching)
SELECT * FROM users WHERE name LIKE 'J%';
\`\`\`

**Joins:**
\`\`\`sql
-- INNER JOIN (matching records)
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- LEFT JOIN (all from left table)
SELECT * FROM users
LEFT JOIN orders ON users.id = orders.user_id;
\`\`\`

**Aggregations:**
\`\`\`sql
SELECT COUNT(*) FROM users;
SELECT AVG(age) FROM users;
SELECT MAX(salary) FROM employees;
SELECT SUM(total) FROM orders;

-- GROUP BY
SELECT country, COUNT(*) as count
FROM users
GROUP BY country;
\`\`\``
  },
  {
    keywords: ['mongodb', 'nosql', 'document', 'database'],
    title: 'MongoDB & NoSQL',
    answer: `**Document-Based Database**

**Key Differences from SQL:**
- Flexible schema (documents can differ)
- Stores JSON-like documents
- Horizontal scaling (sharding)
- No strict relationships

**CRUD in MongoDB:**
\`\`\`javascript
// CREATE (Insert)
db.users.insertOne({
  name: 'John',
  email: 'john@example.com',
  age: 30
});

// READ (Find)
db.users.find({ age: { $gt: 25 } });
db.users.findOne({ name: 'John' });

// UPDATE
db.users.updateOne(
  { _id: ObjectId('...') },
  { $set: { age: 31 } }
);

// DELETE
db.users.deleteOne({ _id: ObjectId('...') });
\`\`\`

**Query Operators:**
- \`$gt\` - Greater than
- \`$lt\` - Less than
- \`$eq\` - Equal to
- \`$in\` - In array
- \`$and\`, \`$or\` - Logical

**Indexes:**
\`\`\`javascript
db.users.createIndex({ email: 1 });
db.users.createIndex({ email: 1, age: -1 });
\`\`\`

**When to use MongoDB:**
- Rapid development
- Flexible/evolving schemas
- Large volumes of unstructured data
- Real-time web apps

**When to use SQL:**
- Complex relationships
- ACID transactions
- Data consistency critical`
  },

  // SYSTEM DESIGN
  {
    keywords: ['system design', 'scalability', 'architecture', 'caching', 'load balancing'],
    title: 'System Design Principles',
    answer: `**Building Scalable Systems**

**Key Concepts:**

**1. Caching**
- Reduce database queries
- Levels: Browser, CDN, Application, Database
- Tools: Redis, Memcached

**2. Load Balancing**
- Distribute requests across servers
- Round-robin, least connections, weighted
- Horizontal scaling

**3. Database Replication**
- Master-Slave: One writer, multiple readers
- Master-Master: Multiple writers (complex)
- Increases availability

**4. Sharding (Horizontal Partitioning)**
- Split data across multiple databases
- Range-based, hash-based, directory-based
- Improves scalability

**5. Message Queues**
- Async processing (RabbitMQ, Kafka)
- Decouple services
- Handle spikes

**6. CDN (Content Delivery Network)**
- Distribute static assets globally
- Reduce latency

**Scaling Strategy:**
\`\`\`
Vertical (bigger server) → Horizontal (more servers)
Monitor → Identify bottleneck → Scale appropriately
\`\`\`

**Common Patterns:**
- Microservices: Small, independent services
- API Gateway: Single entry point
- Circuit Breaker: Handle failures
- Rate Limiting: Prevent abuse

**Monitoring & Metrics:**
- Response time
- CPU/Memory usage
- Database query time
- Error rates`
  },

  // SECURITY
  {
    keywords: ['security', 'authentication', 'authorization', 'jwt', 'password', 'encryption'],
    title: 'Web Security Essentials',
    answer: `**Protecting Your Applications**

**1. Authentication (Who are you?)**
- Verify user identity
- Common methods: Username/password, OAuth, JWT

**JWT (JSON Web Token):**
\`\`\`javascript
// Structure: Header.Payload.Signature

// Creating JWT
const token = jwt.sign({ userId: 123 }, 'secret_key', { expiresIn: '24h' });

// Verifying JWT
const decoded = jwt.verify(token, 'secret_key');
\`\`\`

**2. Authorization (What can you do?)**
- Check permissions/roles
- Role-Based Access Control (RBAC)
- Attribute-Based (ABAC)

**3. Password Security:**
- Never store plaintext passwords
- Use bcrypt/scrypt/argon2
\`\`\`javascript
const hash = await bcrypt.hash('password', 10);
const match = await bcrypt.compare('password', hash);
\`\`\`

**4. HTTPS/TLS:**
- Encrypt data in transit
- Prevents man-in-the-middle attacks

**5. SQL Injection Prevention:**
\`\`\`javascript
// VULNERABLE
const query = \`SELECT * FROM users WHERE id = \${userId}\`;

// SAFE (Parameterized queries)
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
\`\`\`

**6. CORS (Cross-Origin Resource Sharing):**
\`\`\`javascript
app.use(cors({
  origin: 'https://yourdomain.com',
  credentials: true
}));
\`\`\`

**OWASP Top 10:**
1. Injection
2. Broken Authentication
3. Sensitive Data Exposure
4. XML External Entities
5. Broken Access Control
6. Security Misconfiguration
7. XSS (Cross-Site Scripting)
8. Insecure Deserialization
9. Using Components with Known Vulnerabilities
10. Insufficient Logging & Monitoring`
  },

  // DEVOPS & DEPLOYMENT
  {
    keywords: ['docker', 'container', 'deployment', 'devops'],
    title: 'Docker & Containerization',
    answer: `**Container Technology Basics**

**What is Docker?**
- Package app + dependencies in container
- "Works on my machine" → works everywhere
- Lightweight, fast startup

**Dockerfile Example:**
\`\`\`dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
\`\`\`

**Docker Commands:**
\`\`\`bash
# Build image
docker build -t myapp:1.0 .

# Run container
docker run -p 3000:3000 myapp:1.0

# List containers
docker ps

# Stop container
docker stop container_id

# Remove container
docker rm container_id
\`\`\`

**Docker Compose (Multiple containers):**
\`\`\`yaml
version: '3'
services:
  app:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:13
    environment:
      POSTGRES_PASSWORD: secret
\`\`\`

**Benefits:**
- Consistency across environments
- Easy scaling
- Fast deployment
- Resource isolation
- Microservices architecture

**CI/CD Integration:**
- Automated testing
- Build & push to registry
- Deploy to production
- Rollback if needed`
  },
  {
    keywords: ['git', 'version control', 'github', 'commit', 'branch'],
    title: 'Git & Version Control',
    answer: `**Essential Git Workflows**

**Basic Commands:**
\`\`\`bash
# Initialize repo
git init

# Clone existing repo
git clone https://github.com/user/repo.git

# Stage changes
git add .

# Commit
git commit -m "Fix login bug"

# Push to remote
git push origin main

# Pull latest changes
git pull origin main
\`\`\`

**Branching:**
\`\`\`bash
# Create & switch branch
git checkout -b feature/login

# List branches
git branch -a

# Switch branch
git checkout main

# Merge branch
git merge feature/login

# Delete branch
git branch -d feature/login
\`\`\`

**Pull Requests (Collaboration):**
1. Create feature branch
2. Make changes & commit
3. Push to remote
4. Open Pull Request
5. Code review
6. Merge to main

**Undoing Changes:**
\`\`\`bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert commit (create new commit)
git revert commit_hash
\`\`\`

**Best Practices:**
- Meaningful commit messages
- Small, focused commits
- Branch per feature
- Review before merging`
  },

  // GENERAL TECHNICAL QUESTIONS
  {
    keywords: ['time complexity', 'big o', 'space complexity', 'performance'],
    title: 'Time & Space Complexity',
    answer: `**Big O Notation - Performance Analysis**

**Time Complexity (Execution time):**

\`\`\`
O(1) - Constant: Array access by index
O(log n) - Logarithmic: Binary search
O(n) - Linear: Simple loop
O(n log n) - Linearithmic: Merge sort, Quick sort
O(n²) - Quadratic: Nested loops, Bubble sort
O(n³) - Cubic: Triple nested loops
O(2^n) - Exponential: Recursive fibonacci
O(n!) - Factorial: Permutations
\`\`\`

**Performance Ranking (Best to Worst):**
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n) < O(n!)

**Examples:**
\`\`\`javascript
// O(1) - Constant
function getFirst(arr) { return arr[0]; }

// O(n) - Linear
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// O(n²) - Quadratic
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
\`\`\`

**Space Complexity:**
- O(1): No extra space
- O(n): Extra space proportional to input
- O(n²): Extra space quadratic
- Recursive calls use O(h) call stack space

**Optimization Principle:**
Trade space for time or vice versa`
  },
  {
    keywords: ['testing', 'unit test', 'jest', 'mocha', 'test'],
    title: 'Testing & Quality Assurance',
    answer: `**Software Testing Fundamentals**

**Testing Types:**

**1. Unit Testing** (Test individual functions)
\`\`\`javascript
// Jest example
describe('Calculator', () => {
  it('should add two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });
});
\`\`\`

**2. Integration Testing** (Test component interactions)
\`\`\`javascript
// Test API endpoint with database
describe('User API', () => {
  it('should fetch user from database', async () => {
    const user = await getUser(1);
    expect(user.name).toBe('John');
  });
});
\`\`\`

**3. End-to-End (E2E) Testing** (Test entire flow)
\`\`\`javascript
// Selenium, Cypress example
describe('Login Flow', () => {
  it('should login and redirect to dashboard', () => {
    cy.visit('/login');
    cy.get('input[name=email]').type('test@example.com');
    cy.get('input[name=password]').type('password');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/dashboard');
  });
});
\`\`\`

**Test Coverage:**
- Statement coverage
- Branch coverage
- Function coverage
- Line coverage

**Best Practices:**
- Test happy path AND edge cases
- Use descriptive test names
- Don't test implementation details
- Mock external dependencies
- Keep tests fast
- One assertion per test (ideally)

**Common Tools:**
- Jest: JavaScript testing framework
- Mocha: Test runner
- Chai: Assertion library
- Cypress: E2E testing
- Selenium: Browser automation`
  },
  {
    keywords: ['oop', 'design patterns', 'solid', 'architecture'],
    title: 'OOP & Design Patterns',
    answer: `**Object-Oriented Design Principles**

**SOLID Principles:**

**S - Single Responsibility**
- Class should have ONE reason to change
\`\`\`javascript
// BAD: User class does too much
class User {
  getUser() { }
  sendEmail() { }
  log() { }
}

// GOOD: Separate concerns
class User { getUser() { } }
class EmailService { sendEmail() { } }
class Logger { log() { } }
\`\`\`

**O - Open/Closed**
- Open for extension, closed for modification

**L - Liskov Substitution**
- Derived classes should be substitutable

**I - Interface Segregation**
- Many specific interfaces > one general interface

**D - Dependency Inversion**
- Depend on abstractions, not concretions

**Common Design Patterns:**

**Singleton** - One instance only
\`\`\`javascript
class Database {
  static instance;
  static getInstance() {
    if (!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }
}
\`\`\`

**Factory** - Create objects
\`\`\`javascript
class AnimalFactory {
  static create(type) {
    if (type === 'dog') return new Dog();
    if (type === 'cat') return new Cat();
  }
}
\`\`\`

**Observer** - Notify multiple objects
\`\`\`javascript
class Subject {
  constructor() { this.observers = []; }
  subscribe(obs) { this.observers.push(obs); }
  notify(data) { this.observers.forEach(o => o.update(data)); }
}
\`\`\`

**Strategy** - Interchangeable algorithms`
  },

  // CODING PROBLEM SOLVING
  {
    keywords: ['load solution', 'solution', 'problem solving', 'approach'],
    title: 'Load Solution & Problem Solving Approach',
    answer: `**How to Load & Use Solutions**

**Finding Solutions:**
1. ✅ Click on any coding problem from the company drives
2. ✅ Read the problem statement carefully
3. ✅ Click "Load Solution" to see the approach and code
4. ✅ Understand the logic before memorizing

**Problem-Solving Approach:**
\`\`\`
1. UNDERSTAND the problem
   - Read examples
   - Identify input/output
   - Check edge cases

2. PLAN your solution
   - Discuss approach verbally
   - Write pseudocode
   - Estimate time & space complexity

3. CODE the solution
   - Write clean, readable code
   - Add comments
   - Handle edge cases

4. TEST your solution
   - Run against test cases
   - Check edge cases
   - Optimize if needed
\`\`\`

**Types of Solutions:**
- **Brute Force:** Simple, inefficient (good starting point)
- **Optimized:** Better complexity, clever tricks
- **Advanced:** Dynamic programming, greedy, etc.

**Tips for Learning:**
- 🔍 Understand the pattern (similar problems?)
- 💭 Why does this solution work?
- 🎯 Can you simplify or optimize further?
- 📝 Practice writing from scratch (don't just copy)

**Common Problem Patterns:**
- Two pointers
- Sliding window
- Binary search
- Trees/Graphs
- Dynamic programming
- Greedy algorithms`
  },

  // CODE EDITOR
  {
    keywords: ['code editor', 'editor', 'code', 'coding', 'write code'],
    title: 'Using the Code Editor',
    answer: `**Online Code Editor - Practice Coding**

**Features:**
✅ **Write Code:** Write solutions directly in the editor
✅ **Run Code:** Execute your code instantly
✅ **Check Output:** See results immediately
✅ **Test Cases:** Auto-run against provided test cases
✅ **Syntax Highlighting:** Color-coded language support
✅ **Language Support:** JavaScript, Python, Java, C++, etc.

**How to Use:**
\`\`\`
1. Select your programming language
2. Write or paste your code
3. Click "Run" to execute
4. Check the output in the console
5. Fix errors if needed
6. Submit when ready
\`\`\`

**Example: Solve Two Sum Problem**
\`\`\`javascript
// Problem: Find two numbers that sum to target
function twoSum(nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in seen) {
      return [seen[complement], i];
    }
    seen[nums[i]] = i;
  }
  return [];
}

// Test
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
\`\`\`

**Pro Tips:**
💡 **Start Simple:** Write working code first, optimize later
🧪 **Test Early:** Run code after writing a small section
🔍 **Debug:** Use console.log() to trace values
📚 **Reference:** Use "Load Solution" to compare approaches
🎯 **Practice:** Try variations of problems

**Keyboard Shortcuts:**
- \`Ctrl+Enter\` : Run code
- \`Tab\` : Indent code
- \`Ctrl+Z\` : Undo
- \`Ctrl+Shift+Z\` : Redo

**Submit Checklist:**
✓ All test cases pass
✓ Edge cases handled
✓ Code is readable
✓ Time & space complexity acceptable`
  }
];

// Scoring algorithm for relevance
function calculateRelevance(query, keywords) {
  const queryLower = query.toLowerCase();
  let score = 0;
  
  keywords.forEach(keyword => {
    if (queryLower === keyword) score += 10; // Exact match
    else if (queryLower.includes(keyword)) score += 5; // Partial match
    else if (keyword.includes(queryLower)) score += 3; // Keyword contains query
  });
  
  return score;
}
// Helper: Format a matched article into a friendly markdown response
function formatArticleResponse(article, query) {
  // Keep the article.answer as-is (it contains markdown/code blocks)
  const header = `📚 **${article.title}**`;
  const suggestion = `\n---\n💡 You can ask follow-ups: "Explain in simple terms", "Show code example", or "Compare with X"`;

  // Related topics: find other article titles that share keywords
  const related = KNOWLEDGE_BASE
    .filter(a => a !== article && a.keywords.some(k => article.keywords.includes(k)))
    .slice(0, 4)
    .map(a => a.title);

  const relatedLine = related.length ? `\n🔎 Related topics: ${related.join(' • ')}` : '';

  return `${header}\n\n${article.answer}${relatedLine}${suggestion}`;
}

// Helper: Formatted generic fallback
function formatGenericResponse(query) {
  return `I don't have a direct article for "${query}". Here are helpful suggestions and related topics you can ask about:\n\n- **Algorithms & DSA:** binary search, sorting, dynamic programming\n- **Programming Languages:** Python, JavaScript, Java\n- **Web & Backend:** React, REST APIs, Databases (SQL/MongoDB)\n- **System Design & DevOps:** caching, load balancing, Docker\n\nTip: Ask specifics (e.g., "Explain merge sort with code" or "Compare quicksort vs mergesort").`;
}

export const chatWithAI = async (userMessage) => {
  try {
    console.log('🤖 Searching knowledge base:', userMessage.substring(0, 50) + '...');
    const query = (userMessage || '').trim();
    if (!query) return 'Please provide a question or topic to search.';

    // Find best matching article
    let bestMatch = null;
    let bestScore = 0;
    KNOWLEDGE_BASE.forEach(article => {
      const score = calculateRelevance(query, article.keywords);
      if (score > bestScore) {
        bestScore = score;
        bestMatch = article;
      }
    });

    if (bestMatch && bestScore > 0) {
      console.log('✅ Found relevant article:', bestMatch.title, 'score=', bestScore);
      return formatArticleResponse(bestMatch, query);
    }

    console.log('⚠️ No specific match found; returning helpful fallback');
    return formatGenericResponse(query);
  } catch (error) {
    console.error('❌ Chatbot Error:', error.message);
    return `Sorry, I encountered an error: ${error.message}\n\nPlease try asking a different question or refresh the page.`;
  }
};

// Export for generating contextual responses
export const generateContextualResponse = async (userMessage) => {
  return await chatWithAI(userMessage);
};
