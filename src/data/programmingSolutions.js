// Programming Language Practice Solutions Database
// Solutions for common programming concepts and problems

export const programmingSolutions = {
  "Python": {
    "Variables and Data Types": {
      problem: "Create variables of different data types and perform operations",
      solution: `# Variables and Data Types in Python

# Integer
age = 25
print(f"Age: {age}, Type: {type(age)}")

# Float
height = 5.9
print(f"Height: {height}, Type: {type(height)}")

# String
name = "John Doe"
print(f"Name: {name}, Type: {type(name)}")

# Boolean
is_student = True
print(f"Is Student: {is_student}, Type: {type(is_student)}")

# List (mutable)
numbers = [1, 2, 3, 4, 5]
print(f"Numbers: {numbers}")

# Dictionary
person = {"name": "Alice", "age": 30, "city": "NYC"}
print(f"Person: {person}")

# Type Conversion
num_str = "42"
num_int = int(num_str)
print(f"Converted: {num_int}, Type: {type(num_int)}")`
    },
    "Control Flow": {
      problem: "Practice if-else and loops",
      solution: `# Control Flow in Python

# If-Else Statement
age = 18
if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")

# For Loop
print("For Loop:")
for i in range(5):
    print(f"Number: {i}")

# While Loop
print("While Loop:")
count = 0
while count < 3:
    print(f"Count: {count}")
    count += 1

# List Comprehension
squares = [x**2 for x in range(5)]
print(f"Squares: {squares}")

# Break and Continue
print("Break and Continue:")
for i in range(10):
    if i == 3:
        continue
    if i == 7:
        break
    print(i)`
    },
    "Functions": {
      problem: "Define and use functions with parameters and return values",
      solution: `# Functions in Python

# Basic Function
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))

# Function with Multiple Parameters
def add(a, b):
    return a + b

print(f"Sum: {add(5, 3)}")

# Function with Default Parameters
def introduce(name, age=25):
    return f"{name} is {age} years old"

print(introduce("Bob"))
print(introduce("Charlie", 30))

# Function with Variable Arguments (*args)
def sum_all(*args):
    total = 0
    for num in args:
        total += num
    return total

print(f"Sum of 1,2,3,4: {sum_all(1, 2, 3, 4)}")

# Function with Keyword Arguments (**kwargs)
def display_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

display_info(name="David", age=28, city="LA")

# Lambda Functions
square = lambda x: x ** 2
print(f"Square of 5: {square(5)}")

# Map and Filter
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(f"Doubled: {doubled}")
print(f"Evens: {evens}")`
    },
    "File I/O": {
      problem: "Read and write files",
      solution: `# File I/O in Python

# Writing to a File
with open("example.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("This is a test file.\\n")

# Reading from a File
print("Reading entire file:")
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# Reading line by line
print("Reading line by line:")
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())

# Appending to a File
with open("example.txt", "a") as file:
    file.write("This is appended content.\\n")

# Using readlines()
with open("example.txt", "r") as file:
    lines = file.readlines()
    print(f"Total lines: {len(lines)}")`
    },
    "OOP - Classes": {
      problem: "Create and use classes in Python",
      solution: `# Object-Oriented Programming in Python

class Person:
    # Class variable
    species = "Homo sapiens"
    
    # Constructor
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    # Instance method
    def introduce(self):
        return f"I am {self.name}, {self.age} years old"
    
    # Instance method
    def have_birthday(self):
        self.age += 1
        return f"{self.name} is now {self.age} years old"
    
    # Class method
    @classmethod
    def from_birth_year(cls, name, birth_year):
        age = 2024 - birth_year
        return cls(name, age)
    
    # Static method
    @staticmethod
    def is_adult(age):
        return age >= 18

# Create objects
person1 = Person("Alice", 25)
print(person1.introduce())
print(person1.have_birthday())

# Using class methods
person2 = Person.from_birth_year("Bob", 1995)
print(person2.introduce())

# Using static methods
print(f"Is adult? {Person.is_adult(person1.age)}")`
    }
  },
  "JavaScript": {
    "Variables and Data Types": {
      problem: "Create variables and understand primitive types",
      solution: `// Variables and Data Types in JavaScript

// var (function-scoped)
var age = 25;
console.log("Age: " + age);

// let (block-scoped)
let name = "John Doe";
console.log("Name: " + name);

// const (block-scoped, constant)
const height = 5.9;
console.log("Height: " + height);

// Data Types
const number = 42;
const string = "Hello";
const boolean = true;
const obj = { key: "value" };
const arr = [1, 2, 3];
const nullVal = null;
const undefinedVal = undefined;

console.log("Type of number:", typeof number);
console.log("Type of string:", typeof string);
console.log("Type of boolean:", typeof boolean);
console.log("Type of obj:", typeof obj);
console.log("Type of arr:", Array.isArray(arr) ? "array" : typeof arr);

// Template Literals
const person = "Alice";
const greeting = "Hello, " + person + "!";
console.log(greeting);`
    },
    "Control Flow": {
      problem: "Master if-else and loops",
      solution: `// Control Flow in JavaScript

// If-Else Statement
const age = 18;
if (age >= 18) {
    console.log("You are an adult");
} else if (age >= 13) {
    console.log("You are a teenager");
} else {
    console.log("You are a child");
}

// Switch Statement
const day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}

// For Loop
console.log("For Loop:");
for (let i = 0; i < 5; i++) {
    console.log("Number: " + i);
}

// While Loop
console.log("While Loop:");
let count = 0;
while (count < 3) {
    console.log("Count: " + count);
    count++;
}

// Array Methods
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));

const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);
console.log("Doubled:", doubled);
console.log("Evens:", evens);`
    },
    "Functions": {
      problem: "Define and use JavaScript functions",
      solution: `// Functions in JavaScript

// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log("Sum: " + add(5, 3));

// Arrow Functions
const multiply = (a, b) => a * b;
console.log("Product: " + multiply(4, 5));

// Default Parameters
function introduce(name, age = 25) {
    return name + " is " + age + " years old";
}
console.log(introduce("Bob"));
console.log(introduce("Charlie", 30));

// Rest Parameters (...args)
function sumAll(...args) {
    return args.reduce((acc, num) => acc + num, 0);
}
console.log("Sum: " + sumAll(1, 2, 3, 4, 5));

// Destructuring
const person = { name: "David", age: 28, city: "LA" };
const { name, age, city } = person;
console.log("Name: " + name + ", Age: " + age + ", City: " + city);

// Higher Order Functions
const numbers = [1, 2, 3, 4, 5];
const result = numbers
    .map(x => x * 2)
    .filter(x => x > 4)
    .reduce((acc, x) => acc + x, 0);
console.log("Result:", result);`
    },
    "Async/Await": {
      problem: "Handle asynchronous operations",
      solution: `// Async/Await in JavaScript

// Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "John" });
        }, 1000);
    });
};

// Using Async/Await
async function getData() {
    try {
        const data = await fetchData();
        console.log("Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();

// Fetch API Example
async function getUser(id) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
        if (!response.ok) {
            throw new Error("Status: " + response.status);
        }
        const user = await response.json();
        console.log("User:", user.name);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// getUser(1);  // Uncomment to test with real API`
    },
    "DOM Manipulation": {
      problem: "Manipulate DOM elements using JavaScript",
      solution: `// DOM Manipulation in JavaScript

// Get Elements
const element = document.getElementById("myId");
const elements = document.getElementsByClassName("myClass");
const divs = document.querySelectorAll("div");
const first = document.querySelector(".myClass");

// Create and Add Elements
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, World!";
newDiv.className = "container";
newDiv.id = "newDiv";
document.body.appendChild(newDiv);

// Modify Element Properties
const button = document.querySelector("button");
button.textContent = "Click Me";
button.style.backgroundColor = "blue";
button.style.color = "white";

// Event Handling
button.addEventListener("click", function() {
    console.log("Button clicked!");
    alert("You clicked the button!");
});

// Remove Elements
const elemToRemove = document.getElementById("myId");
if (elemToRemove) {
    elemToRemove.remove();
}

// Class Manipulation
const box = document.querySelector(".box");
box.classList.add("active");
box.classList.remove("inactive");
box.classList.toggle("highlight");

// Get/Set Attributes
const link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
const href = link.getAttribute("href");`
    }
  },
  "Java": {
    "Variables and Data Types": {
      problem: "Learn Java data types and variable declaration",
      solution: `// Variables and Data Types in Java

public class DataTypes {
    public static void main(String[] args) {
        // Integer Types
        byte b = 127;  // -128 to 127
        short s = 32000;  // -32768 to 32767
        int i = 2147483647;  // 32-bit
        long l = 9223372036854775807L;  // 64-bit
        
        System.out.println("Byte: " + b);
        System.out.println("Short: " + s);
        System.out.println("Int: " + i);
        System.out.println("Long: " + l);
        
        // Floating Point
        float f = 3.14f;
        double d = 3.14159;
        
        System.out.println("Float: " + f);
        System.out.println("Double: " + d);
        
        // Boolean
        boolean flag = true;
        System.out.println("Boolean: " + flag);
        
        // Character
        char ch = 'A';
        System.out.println("Char: " + ch);
        
        // String
        String name = "John Doe";
        System.out.println("String: " + name);
    }
}`
    },
    "Control Flow": {
      problem: "Use if-else and loops in Java",
      solution: `// Control Flow in Java

public class ControlFlow {
    public static void main(String[] args) {
        // If-Else
        int age = 18;
        if (age >= 18) {
            System.out.println("You are an adult");
        } else {
            System.out.println("You are a minor");
        }
        
        // Switch
        int day = 3;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            default:
                System.out.println("Other day");
        }
        
        // For Loop
        System.out.println("For Loop:");
        for (int i = 0; i < 5; i++) {
            System.out.println("Number: " + i);
        }
        
        // While Loop
        System.out.println("While Loop:");
        int count = 0;
        while (count < 3) {
            System.out.println("Count: " + count);
            count++;
        }
        
        // Enhanced For Loop
        System.out.println("Enhanced For Loop:");
        int[] numbers = {1, 2, 3, 4, 5};
        for (int num : numbers) {
            System.out.println(num);
        }
    }
}`
    },
    "Methods": {
      problem: "Define and call methods in Java",
      solution: `// Methods in Java

public class Methods {
    // Method with no parameters
    public static void greet() {
        System.out.println("Hello, World!");
    }
    
    // Method with parameters and return value
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Method with multiple parameters
    public static double calculateArea(double length, double width) {
        return length * width;
    }
    
    // Method with default behavior simulation (overloading)
    public static String introduce(String name, int age) {
        return name + " is " + age + " years old";
    }
    
    // Method overloading (same name, different parameters)
    public static String introduce(String name) {
        return "My name is " + name;
    }
    
    // Static method example
    public static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    
    public static void main(String[] args) {
        greet();
        System.out.println("Sum: " + add(5, 3));
        System.out.println("Area: " + calculateArea(10, 5));
        System.out.println(introduce("Alice", 30));
        System.out.println(introduce("Bob"));
        System.out.println("Factorial of 5: " + factorial(5));
    }
}`
    },
    "OOP - Classes": {
      problem: "Create and use classes in Java",
      solution: `// Object-Oriented Programming in Java

public class Person {
    // Instance variables
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // Setter methods
    public void setName(String name) {
        this.name = name;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
    
    // Instance method
    public String introduce() {
        return "I am " + name + ", " + age + " years old";
    }
    
    // Static method
    public static boolean isAdult(int age) {
        return age >= 18;
    }
    
    public static void main(String[] args) {
        Person person = new Person("Alice", 25);
        System.out.println(person.introduce());
        System.out.println("Is adult? " + Person.isAdult(person.getAge()));
    }
}`
    }
  },
  "C++": {
    "Variables and Data Types": {
      problem: "Understand C++ data types and variables",
      solution: `// Variables and Data Types in C++

#include <iostream>
#include <string>
using namespace std;

int main() {
    // Integer types
    int age = 25;
    short height = 180;
    long population = 8000000000;
    
    cout << "Age: " << age << endl;
    cout << "Height: " << height << " cm" << endl;
    cout << "Population: " << population << endl;
    
    // Floating point
    float pi = 3.14f;
    double precise_pi = 3.14159265;
    
    cout << "Float Pi: " << pi << endl;
    cout << "Double Pi: " << precise_pi << endl;
    
    // Character and String
    char initial = 'A';
    string name = "John Doe";
    
    cout << "Initial: " << initial << endl;
    cout << "Name: " << name << endl;
    
    // Boolean
    bool is_student = true;
    cout << "Is Student: " << (is_student ? "Yes" : "No") << endl;
    
    return 0;
}`
    },
    "Control Flow": {
      problem: "Use conditionals and loops in C++",
      solution: `// Control Flow in C++

#include <iostream>
using namespace std;

int main() {
    // If-Else
    int age = 18;
    if (age >= 18) {
        cout << "You are an adult" << endl;
    } else {
        cout << "You are a minor" << endl;
    }
    
    // Switch
    int day = 3;
    switch (day) {
        case 1:
            cout << "Monday" << endl;
            break;
        case 3:
            cout << "Wednesday" << endl;
            break;
        default:
            cout << "Other day" << endl;
    }
    
    // For Loop
    cout << "For Loop:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "Number: " << i << endl;
    }
    
    // While Loop
    cout << "While Loop:" << endl;
    int count = 0;
    while (count < 3) {
        cout << "Count: " << count << endl;
        count++;
    }
    
    return 0;
}`
    },
    "Functions": {
      problem: "Define and use functions in C++",
      solution: `// Functions in C++

#include <iostream>
#include <vector>
using namespace std;

// Function declaration (prototype)
int add(int a, int b);
void greet(string name);
void printArray(const vector<int>& arr);

// Function definitions
int add(int a, int b) {
    return a + b;
}

void greet(string name) {
    cout << "Hello, " << name << "!" << endl;
}

void printArray(const vector<int>& arr) {
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
}

// Function with default parameters
void introduce(string name, int age = 25) {
    cout << name << " is " << age << " years old" << endl;
}

// Recursive function
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    cout << "Sum: " << add(5, 3) << endl;
    greet("Alice");
    
    vector<int> numbers = {1, 2, 3, 4, 5};
    cout << "Array: ";
    printArray(numbers);
    
    introduce("Bob");
    introduce("Charlie", 30);
    
    cout << "Factorial of 5: " << factorial(5) << endl;
    
    return 0;
}`
    }
  }
};

// Get solution for a specific language and topic
export const getProgrammingSolution = (language, topic, problem) => {
  // If a specific problem is provided, look for problem-specific solution
  if (problem) {
    return getProgrammingProblemSolution(language, topic, problem);
  }

  // Otherwise, use the existing topic-based solution
  const langSolutions = programmingSolutions[language] || {};
  const topicData = langSolutions[topic];
  
  if (topicData && topicData.solution) {
    return topicData.solution;
  }
  
  // Fallback to Python if available
  if (programmingSolutions['Python'] && programmingSolutions['Python'][topic]) {
    return programmingSolutions['Python'][topic].solution;
  }
  
  // Try any available language
  for (const lang of Object.keys(programmingSolutions)) {
    if (programmingSolutions[lang][topic]) {
      return programmingSolutions[lang][topic].solution;
    }
  }
  
  // Generic fallback - generate a helpful template
  return `// Solution for ${topic} in ${language}
// Topic practice code

/* 
${topic} - Practice Problem

Topics to cover:
1. Understand the concept
2. Study the examples below
3. Practice with variations
4. Test your understanding

Example Implementation:
*/

// ===== EXAMPLE SOLUTION START =====

// Basic example for ${topic}
function solve() {
  // TODO: Implement solution
  // Your code here
  return null;
}

// Test the solution
console.log(solve());

// ===== EXAMPLE SOLUTION END =====

// TODO: Try different approaches and variations`;
};

// Get all topics for a language
export const getLanguageTopics = (language) => {
  return Object.keys(programmingSolutions[language] || {});
};

// Get problem description
export const getProgrammingProblem = (language, topic) => {
  const langSolutions = programmingSolutions[language] || {};
  const topicData = langSolutions[topic] || null;
  return topicData ? topicData.problem : "Problem not found.";
};

// Get solution for a specific practice problem
export const getProgrammingProblemSolution = (language, topic, problemName) => {
  // Create a mapping of common problems to solutions
  const problemSolutions = {
    "Python": {
      "Basics": {
        "Write a program to check if a number is prime": `# Check if a number is prime in Python

def is_prime(n):
    """Check if a number is prime"""
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    
    # Check odd divisors up to sqrt(n)
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    return True

# Test the function
test_numbers = [2, 3, 4, 15, 17, 20, 29]
for num in test_numbers:
    print(f"{num} is prime: {is_prime(num)}")

# Get prime numbers in a range
def get_primes_in_range(start, end):
    """Get all prime numbers in a range"""
    primes = []
    for n in range(start, end + 1):
        if is_prime(n):
            primes.append(n)
    return primes

# Example: Get primes from 1 to 50
primes = get_primes_in_range(1, 50)
print(f"Primes from 1 to 50: {primes}")`,
        "Reverse a string without using built-in functions": `# Reverse a string without built-in functions in Python

def reverse_string(s):
    """Reverse a string manually"""
    reversed_str = ""
    for char in s:
        reversed_str = char + reversed_str
    return reversed_str

# Test
original = "Hello World"
print(f"Original: {original}")
print(f"Reversed: {reverse_string(original)}")

# Alternative using indexing
def reverse_string_v2(s):
    """Reverse using negative indexing"""
    result = ""
    length = len(s)
    for i in range(length - 1, -1, -1):
        result += s[i]
    return result

# Alternative using recursion
def reverse_string_recursive(s):
    """Reverse using recursion"""
    if len(s) == 0:
        return s
    return reverse_string_recursive(s[1:]) + s[0]

# Test all methods
test_string = "Python"
print(f"\\nString: {test_string}")
print(f"Method 1: {reverse_string(test_string)}")
print(f"Method 2: {reverse_string_v2(test_string)}")
print(f"Method 3: {reverse_string_recursive(test_string)}")`,
        "Find all palindromes in a list": `# Find all palindromes in a list in Python

def is_palindrome(s):
    """Check if a string is a palindrome (ignoring spaces and case)"""
    # Remove spaces and convert to lowercase
    cleaned = s.replace(" ", "").lower()
    return cleaned == cleaned[::-1]

def find_palindromes(words):
    """Find all palindromes in a list"""
    palindromes = []
    for word in words:
        if is_palindrome(word):
            palindromes.append(word)
    return palindromes

# Test with list of words
words = ["racecar", "hello", "level", "world", "noon", "python", "radar"]
result = find_palindromes(words)
print(f"Palindromes in {words}:")
print(result)

# Test with phrases
phrases = ["A man a plan a canal Panama", "hello world", "madam", "Was it a car or a cat I saw"]
print(f"\\nPalindromes in phrases:")
for phrase in phrases:
    if is_palindrome(phrase):
        print(f"✓ {phrase}")

# Count and analyze
palindrome_count = len(find_palindromes(words))
print(f"\\nTotal palindromes found: {palindrome_count} out of {len(words)} words")`
      }
    },
    "JavaScript": {
      "Basics": {
        "Write a program to check if a number is prime": `// Check if a number is prime in JavaScript

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  // Check odd divisors up to sqrt(n)
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Test the function
const testNumbers = [2, 3, 4, 15, 17, 20, 29];
testNumbers.forEach(num => {
  console.log(\`\${num} is prime: \${isPrime(num)}\`);
});

// Get prime numbers in a range
function getPrimesInRange(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// Example: Get primes from 1 to 50
const primes = getPrimesInRange(1, 50);
console.log(\`Primes from 1 to 50: \${primes.join(", ")}\`);`,
        "Reverse a string without using built-in functions": `// Reverse a string without built-in functions in JavaScript

function reverseString(s) {
  let reversed = "";
  for (let i = 0; i < s.length; i++) {
    reversed = s[i] + reversed;
  }
  return reversed;
}

// Test
const original = "Hello World";
console.log(\`Original: \${original}\`);
console.log(\`Reversed: \${reverseString(original)}\`);

// Alternative using loop from end
function reverseStringV2(s) {
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
}

// Alternative using recursion
function reverseStringRecursive(s) {
  if (s.length === 0) return s;
  return reverseStringRecursive(s.slice(1)) + s[0];
}

// Test all methods
const testString = "JavaScript";
console.log(\`\\nString: \${testString}\`);
console.log(\`Method 1: \${reverseString(testString)}\`);
console.log(\`Method 2: \${reverseStringV2(testString)}\`);
console.log(\`Method 3: \${reverseStringRecursive(testString)}\`);`,
        "Find all palindromes in a list": `// Find all palindromes in a list in JavaScript

function isPalindrome(s) {
  // Remove spaces and convert to lowercase
  const cleaned = s.replace(/\\s/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

function findPalindromes(words) {
  return words.filter(word => isPalindrome(word));
}

// Test with list of words
const words = ["racecar", "hello", "level", "world", "noon", "javascript", "radar"];
const result = findPalindromes(words);
console.log(\`Palindromes in \${JSON.stringify(words)}:\`);
console.log(result);

// Test with phrases
const phrases = ["A man a plan a canal Panama", "hello world", "madam", "Was it a car or a cat I saw"];
console.log(\`\\nPalindromes in phrases:\`);
phrases.forEach(phrase => {
  if (isPalindrome(phrase)) {
    console.log(\`✓ \${phrase}\`);
  }
});

// Count and analyze
const palindromeCount = findPalindromes(words).length;
console.log(\`\\nTotal palindromes found: \${palindromeCount} out of \${words.length} words\`);`
      }
    },
    "Java": {
      "Basics": {
        "Write a program to check if a number is prime": `// Check if a number is prime in Java

public class PrimeChecker {
    // Check if a number is prime
    static boolean isPrime(int n) {
        if (n < 2) return false;
        if (n == 2) return true;
        if (n % 2 == 0) return false;
        
        // Check odd divisors up to sqrt(n)
        for (int i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) return false;
        }
        return true;
    }
    
    // Get primes in range
    static java.util.List<Integer> getPrimesInRange(int start, int end) {
        java.util.List<Integer> primes = new java.util.ArrayList<>();
        for (int i = start; i <= end; i++) {
            if (isPrime(i)) {
                primes.add(i);
            }
        }
        return primes;
    }
    
    public static void main(String[] args) {
        // Test
        int[] testNumbers = {2, 3, 4, 15, 17, 20, 29};
        for (int num : testNumbers) {
            System.out.println(num + " is prime: " + isPrime(num));
        }
        
        // Get primes from 1 to 50
        java.util.List<Integer> primes = getPrimesInRange(1, 50);
        System.out.println("Primes from 1 to 50: " + primes);
    }
}`,
        "Reverse a string without using built-in functions": `// Reverse a string without built-in functions in Java

public class StringReversal {
    // Method 1: Using loop from end
    static String reverseString(String s) {
        String reversed = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            reversed += s.charAt(i);
        }
        return reversed;
    }
    
    // Method 2: Using StringBuilder
    static String reverseStringV2(String s) {
        StringBuilder sb = new StringBuilder();
        for (int i = s.length() - 1; i >= 0; i--) {
            sb.append(s.charAt(i));
        }
        return sb.toString();
    }
    
    // Method 3: Using recursion
    static String reverseStringRecursive(String s) {
        if (s.length() == 0) return s;
        return reverseStringRecursive(s.substring(1)) + s.charAt(0);
    }
    
    public static void main(String[] args) {
        String testString = "Hello Java";
        System.out.println("Original: " + testString);
        System.out.println("Method 1: " + reverseString(testString));
        System.out.println("Method 2: " + reverseStringV2(testString));
        System.out.println("Method 3: " + reverseStringRecursive(testString));
    }
}`,
        "Find all palindromes in a list": `// Find all palindromes in a list in Java

import java.util.*;

public class PalindromeChecker {
    static boolean isPalindrome(String s) {
        String cleaned = s.replaceAll("\\\\s", "").toLowerCase();
        String reversed = new StringBuilder(cleaned).reverse().toString();
        return cleaned.equals(reversed);
    }
    
    static List<String> findPalindromes(List<String> words) {
        List<String> palindromes = new ArrayList<>();
        for (String word : words) {
            if (isPalindrome(word)) {
                palindromes.add(word);
            }
        }
        return palindromes;
    }
    
    public static void main(String[] args) {
        List<String> words = Arrays.asList(
            "racecar", "hello", "level", "world", "noon", "java", "radar"
        );
        
        List<String> result = findPalindromes(words);
        System.out.println("Palindromes in " + words + ":");
        System.out.println(result);
        
        System.out.println("\\nTotal: " + result.size() + "/" + words.size());
    }
}`
      }
    },
    "C++": {
      "Basics": {
        "Write a program to check if a number is prime": `// Check if a number is prime in C++

#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

bool isPrime(int n) {
    if (n < 2) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    
    for (int i = 3; i <= sqrt(n); i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}

vector<int> getPrimesInRange(int start, int end) {
    vector<int> primes;
    for (int i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push_back(i);
        }
    }
    return primes;
}

int main() {
    int testNumbers[] = {2, 3, 4, 15, 17, 20, 29};
    
    for (int num : testNumbers) {
        cout << num << " is prime: " << (isPrime(num) ? "true" : "false") << endl;
    }
    
    vector<int> primes = getPrimesInRange(1, 50);
    cout << "Primes from 1 to 50: ";
    for (int p : primes) {
        cout << p << " ";
    }
    cout << endl;
    
    return 0;
}`,
        "Reverse a string without using built-in functions": `// Reverse a string without built-in functions in C++

#include <iostream>
#include <string>
using namespace std;

// Method 1: Loop from end
string reverseString(string s) {
    string reversed = "";
    for (int i = s.length() - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}

// Method 2: Using character array
string reverseStringV2(string s) {
    for (int i = 0; i < s.length() / 2; i++) {
        swap(s[i], s[s.length() - 1 - i]);
    }
    return s;
}

// Method 3: Recursion
string reverseStringRecursive(string s, int start, int end) {
    if (start >= end) return s;
    swap(s[start], s[end]);
    return reverseStringRecursive(s, start + 1, end - 1);
}

int main() {
    string testString = "Hello C++";
    
    cout << "Original: " << testString << endl;
    cout << "Method 1: " << reverseString(testString) << endl;
    cout << "Method 2: " << reverseStringV2(testString) << endl;
    cout << "Method 3: " << reverseStringRecursive(testString, 0, testString.length() - 1) << endl;
    
    return 0;
}`,
        "Find all palindromes in a list": `// Find all palindromes in a list in C++

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

bool isPalindrome(string s) {
    string cleaned = "";
    for (char c : s) {
        if (c != ' ') {
            cleaned += tolower(c);
        }
    }
    string reversed = cleaned;
    reverse(reversed.begin(), reversed.end());
    return cleaned == reversed;
}

vector<string> findPalindromes(vector<string>& words) {
    vector<string> palindromes;
    for (const auto& word : words) {
        if (isPalindrome(word)) {
            palindromes.push_back(word);
        }
    }
    return palindromes;
}

int main() {
    vector<string> words = {
        "racecar", "hello", "level", "world", "noon", "C++", "radar"
    };
    
    vector<string> result = findPalindromes(words);
    
    cout << "Palindromes found: " << endl;
    for (const auto& pal : result) {
        cout << "✓ " << pal << endl;
    }
    
    cout << "\\nTotal: " << result.size() << "/" << words.size() << endl;
    
    return 0;
}`
      }
    }
  };

  // Look up the problem solution
  if (problemSolutions[language] && 
      problemSolutions[language][topic] && 
      problemSolutions[language][topic][problemName]) {
    return problemSolutions[language][topic][problemName];
  }

  // If not found in the language, try to get from other languages
  for (const lang of Object.keys(problemSolutions)) {
    if (problemSolutions[lang][topic] && problemSolutions[lang][topic][problemName]) {
      return problemSolutions[lang][topic][problemName];
    }
  }

  // Fallback - return a template
  return `// Solution for: ${problemName}
// Language: ${language}
// Topic: ${topic}

/*
Problem: ${problemName}

Write your solution below:
*/

function solve() {
  // TODO: Implement solution
  return null;
}

// Test your solution
console.log(solve());`;
};
