export const programmingLanguages = [
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#3776AB',
    difficulty: 'Beginner-Friendly',
    description: 'Most popular language for beginners and data science',
    topics: [
      {
        level: 'Basics',
        content: [
          'Variables, Data Types & Operators',
          'Control Flow (if-else, loops)',
          'Functions & Scope',
          'Lists, Tuples, Dictionaries',
          'String Manipulation'
        ],
        mcqs: [
          {
            question: 'What is the output of print(2 ** 3)?',
            options: ['6', '8', '9', 'Error'],
            answer: 1,
            explanation: '** is the exponentiation operator. 2**3 = 2*2*2 = 8'
          },
          {
            question: 'Which data type is mutable in Python?',
            options: ['String', 'Tuple', 'List', 'Integer'],
            answer: 2,
            explanation: 'Lists are mutable - their elements can be changed. Strings, tuples, and integers are immutable.'
          },
          {
            question: 'What does the len() function return?',
            options: ['Memory size', 'Number of elements', 'Data type', 'None'],
            answer: 1,
            explanation: 'len() returns the number of elements in a sequence (list, string, tuple, etc.)'
          },
          {
            question: 'Which keyword is used to create a function in Python?',
            options: ['define', 'function', 'def', 'func'],
            answer: 2,
            explanation: 'The "def" keyword is used to define a function in Python'
          },
          {
            question: 'What is the output of 5 // 2?',
            options: ['2.5', '2', '3', 'Error'],
            answer: 1,
            explanation: '// is floor division operator. 5 // 2 = 2 (integer division)'
          },
          {
            question: 'Which of the following is NOT a Python data type?',
            options: ['dict', 'list', 'array', 'tuple'],
            answer: 2,
            explanation: 'array is not a built-in Python type. Use list instead or import from numpy module'
          },
          {
            question: 'What is the range of indices in a list with 5 elements?',
            options: ['0 to 5', '1 to 5', '0 to 4', '1 to 4'],
            answer: 2,
            explanation: 'List indices in Python are 0-based, so a 5-element list has indices 0, 1, 2, 3, 4'
          },
          {
            question: 'How do you create an empty dictionary in Python?',
            options: ['{}', 'dict()', 'Both {} and dict()', 'Neither'],
            answer: 2,
            explanation: 'Both {} and dict() create an empty dictionary'
          },
          {
            question: 'What is the output of "hello"[1]?',
            options: ['h', 'e', 'l', 'Error'],
            answer: 1,
            explanation: 'String indexing is 0-based, so "hello"[1] = "e"'
          },
          {
            question: 'Which operator is used for string concatenation?',
            options: ['.', '+', '*', '&'],
            answer: 1,
            explanation: 'The + operator concatenates strings. * repeats strings'
          },
          {
            question: 'What does the print() function do?',
            options: ['Prints to a file', 'Displays output to console', 'Both', 'Neither'],
            answer: 1,
            explanation: 'print() outputs text to the console/standard output'
          },
          {
            question: 'How do you check if a key exists in a dictionary?',
            options: ['key in dict', 'dict.has_key(key)', 'key exists dict', 'None'],
            answer: 0,
            explanation: 'Use "key in dict" to check if a key exists in a dictionary'
          },
          {
            question: 'What is the purpose of the if __name__ == "__main__": block?',
            options: ['Check file name', 'Run code only when script is executed directly', 'Check variable name', 'None'],
            answer: 1,
            explanation: 'This block runs only when the script is executed directly, not when imported'
          },
          {
            question: 'Which loop is used to iterate through a sequence?',
            options: ['while loop', 'for loop', 'do-while', 'None'],
            answer: 1,
            explanation: 'The for loop is used to iterate through sequences in Python'
          },
          {
            question: 'What is the difference between == and is?',
            options: ['No difference', '== checks value, is checks identity', 'is checks value', 'None'],
            answer: 1,
            explanation: '== checks if values are equal; is checks if objects are the same (same memory location)'
          },
          {
            question: 'How do you add an element to a list?',
            options: ['list.add()', 'list.append()', 'list.insert()', 'Both append and insert'],
            answer: 3,
            explanation: 'Use append() to add to end or insert(index, value) to add at specific position'
          },
          {
            question: 'What is a tuple in Python?',
            options: ['Mutable sequence', 'Immutable sequence', 'Dictionary', 'Set'],
            answer: 1,
            explanation: 'A tuple is an immutable sequence - its elements cannot be changed after creation'
          },
          {
            question: 'Which method removes and returns the last element of a list?',
            options: ['remove()', 'pop()', 'delete()', 'shift()'],
            answer: 1,
            explanation: 'pop() removes and returns the last element; pop(index) removes element at index'
          },
          {
            question: 'What is the output of list(range(5))?',
            options: ['[0, 1, 2, 3, 4]', '[1, 2, 3, 4, 5]', '[0, 1, 2, 3, 4, 5]', 'Error'],
            answer: 0,
            explanation: 'range(5) generates 0, 1, 2, 3, 4 (exclusive of end)'
          },
          {
            question: 'How do you create a list with 5 zeros?',
            options: ['[0] * 5', '[0, 0, 0, 0, 0]', 'list(5)', 'Both first and second'],
            answer: 3,
            explanation: 'Both [0] * 5 and explicit list creation work'
          },
          {
            question: 'What does input() function do?',
            options: ['Takes file input', 'Gets user input from console', 'Checks input validity', 'None'],
            answer: 1,
            explanation: 'input() reads a line from the user and returns it as a string'
          },
          {
            question: 'Which data type can store decimal numbers?',
            options: ['int', 'float', 'decimal', 'Both float and decimal'],
            answer: 3,
            explanation: 'Use float for standard decimals or decimal module for precise decimal arithmetic'
          }
        ],
        problems: [
          'Write a program to check if a number is prime',
          'Reverse a string without using built-in functions',
          'Find all palindromes in a list'
        ]
      },
      {
        level: 'Intermediate',
        content: [
          'File I/O & Exception Handling',
          'Object-Oriented Programming (OOP)',
          'Modules & Packages',
          'List Comprehension',
          'Decorators & Generators'
        ],
        mcqs: [
          {
            question: 'What is the output of [x**2 for x in range(3)]?',
            options: ['[0, 1, 4]', '[1, 2, 3]', '[0, 1, 2]', 'Error'],
            answer: 0,
            explanation: 'List comprehension: x ranges from 0,1,2. So x**2 = 0,1,4'
          },
          {
            question: 'Which keyword is used to create a function that returns multiple values one at a time?',
            options: ['return', 'yield', 'next', 'iter'],
            answer: 1,
            explanation: 'yield creates a generator function that returns values one at a time.'
          },
          {
            question: 'What is a decorator in Python?',
            options: ['A function that modifies another function', 'A CSS style', 'A variable type', 'None'],
            answer: 0,
            explanation: 'A decorator is a function that wraps/modifies another function or class'
          },
          {
            question: 'What is the __init__ method?',
            options: ['Initialize module', 'Constructor for a class', 'Main function', 'None'],
            answer: 1,
            explanation: '__init__ is the constructor called when an object is created'
          },
          {
            question: 'What does self represent in a class?',
            options: ['The class', 'The current object instance', 'A global variable', 'None'],
            answer: 1,
            explanation: 'self represents the instance of the class being used'
          },
          {
            question: 'What is the purpose of try-except?',
            options: ['Testing', 'Exception handling', 'Function definition', 'None'],
            answer: 1,
            explanation: 'try-except is used to handle exceptions/errors in Python'
          },
          {
            question: 'How do you read a file in Python?',
            options: ['open() and read()', 'read_file()', 'load()', 'None'],
            answer: 0,
            explanation: 'Use open(filename) and then read() method to read file contents'
          },
          {
            question: 'What is the difference between append and extend for lists?',
            options: [
              'append adds element, extend adds list',
              'No difference',
              'extend removes, append adds',
              'None'
            ],
            answer: 0,
            explanation: 'append() adds single element; extend() adds all elements from another list'
          },
          {
            question: 'What is a lambda function?',
            options: ['A function with a name', 'An anonymous function', 'A class method', 'None'],
            answer: 1,
            explanation: 'lambda creates an anonymous function with minimal syntax'
          },
          {
            question: 'What does map() function do?',
            options: ['Creates a map', 'Applies function to each element', 'Sorts items', 'None'],
            answer: 1,
            explanation: 'map(func, iterable) applies function to each item and returns iterator'
          },
          {
            question: 'What does filter() function do?',
            options: ['Removes duplicates', 'Applies function returning filtered elements', 'Sorts', 'None'],
            answer: 1,
            explanation: 'filter(func, iterable) returns elements where func returns True'
          },
          {
            question: 'What is __name__ variable?',
            options: ['Class name', 'Module name', 'Function name', 'Variable name'],
            answer: 1,
            explanation: '__name__ is "main" when script is run directly, module name when imported'
          },
          {
            question: 'What is inheritance in OOP?',
            options: [
              'Getting properties from parent class',
              'Creating objects',
              'Storing data',
              'None'
            ],
            answer: 0,
            explanation: 'Inheritance allows a class to get properties and methods from parent class'
          },
          {
            question: 'What is polymorphism?',
            options: [
              'Multiple forms of same function',
              'Creating multiple objects',
              'Data storage',
              'None'
            ],
            answer: 0,
            explanation: 'Polymorphism means same function name with different behaviors'
          },
          {
            question: 'What is the purpose of with statement?',
            options: ['Loop statement', 'Automatic resource management', 'Conditional', 'None'],
            answer: 1,
            explanation: 'with statement ensures proper cleanup of resources (like file closing)'
          },
          {
            question: 'What does *args mean?',
            options: ['Arguments object', 'Variable length positional arguments', 'Fixed args', 'None'],
            answer: 1,
            explanation: '*args allows function to accept variable number of positional arguments'
          },
          {
            question: 'What does **kwargs mean?',
            options: ['Keyword object', 'Variable length keyword arguments', 'Fixed kwargs', 'None'],
            answer: 1,
            explanation: '**kwargs allows function to accept variable keyword arguments as dictionary'
          },
          {
            question: 'What is the purpose of __str__ method?',
            options: ['Convert to string representation', 'Store string', 'Check type', 'None'],
            answer: 0,
            explanation: '__str__ returns string representation of object (used by print())'
          },
          {
            question: 'What is import used for?',
            options: ['Import data', 'Load modules/libraries', 'Create variables', 'None'],
            answer: 1,
            explanation: 'import loads modules and libraries to use their functionality'
          },
          {
            question: 'What is the output of "hello" * 3?',
            options: ['"hello" "hello" "hello"', '"hellohellohello"', 'Error', 'None'],
            answer: 1,
            explanation: 'String * int repeats the string that many times'
          },
          {
            question: 'What is enumerate() used for?',
            options: [
              'Counts items',
              'Gets index and value while looping',
              'Sorts items',
              'None'
            ],
            answer: 1,
            explanation: 'enumerate() returns (index, value) pairs for items in sequence'
          },
          {
            question: 'What is the difference between list and dictionary?',
            options: [
              'No difference',
              'List is ordered collection, dictionary is key-value pairs',
              'Dictionary is ordered',
              'None'
            ],
            answer: 1,
            explanation: 'Lists access by index; dictionaries access by key'
          }
        ],
        problems: [
          'Create a class for a bank account with deposit/withdraw methods',
          'Implement file reading and writing operations',
          'Build a decorator to measure function execution time'
        ]
      },
      {
        level: 'Advanced',
        content: [
          'Multithreading & Multiprocessing',
          'Asynchronous Programming (async/await)',
          'Metaclasses & Descriptors',
          'Performance Optimization',
          'Design Patterns'
        ],
        mcqs: [
          {
            question: 'What is GIL in Python?',
            options: ['Global Information List', 'Global Interpreter Lock', 'Global Input Library', 'None'],
            answer: 1,
            explanation: 'GIL is Global Interpreter Lock - prevents true parallel execution of threads in CPython'
          },
          {
            question: 'What is the purpose of async/await?',
            options: ['Make code faster', 'Handle asynchronous operations', 'Create loops', 'None'],
            answer: 1,
            explanation: 'async/await allows writing asynchronous code that looks synchronous'
          },
          {
            question: 'What is a coroutine?',
            options: ['A regular function', 'Async function that can pause and resume', 'A loop', 'None'],
            answer: 1,
            explanation: 'A coroutine is a function that can suspend and resume execution'
          },
          {
            question: 'What does multiprocessing module do?',
            options: [
              'Manages threads',
              'Bypasses GIL using separate processes',
              'Handles I/O',
              'None'
            ],
            answer: 1,
            explanation: 'multiprocessing creates separate processes, avoiding GIL limitations'
          },
          {
            question: 'What is a metaclass?',
            options: [
              'A meta description',
              'Class of a class',
              'Parent class',
              'None'
            ],
            answer: 1,
            explanation: 'A metaclass is a class whose instances are classes'
          },
          {
            question: 'What is the descriptor protocol?',
            options: [
              'File format',
              '__get__, __set__ methods for attribute access control',
              'Data structure',
              'None'
            ],
            answer: 1,
            explanation: 'Descriptors control attribute access through __get__, __set__, __delete__'
          },
          {
            question: 'What is the purpose of functools.lru_cache?',
            options: ['Load cache', 'Least Recently Used caching decorator', 'Memory management', 'None'],
            answer: 1,
            explanation: 'lru_cache caches function results to avoid recomputation'
          },
          {
            question: 'What is context manager?',
            options: [
              'Manages contexts',
              'Handles resource setup/cleanup via __enter__/__exit__',
              'Stores data',
              'None'
            ],
            answer: 1,
            explanation: 'Context managers ensure proper resource management (e.g., file handling)'
          },
          {
            question: 'What is monkey patching?',
            options: [
              'Patching code',
              'Modifying code at runtime',
              'Testing patch',
              'None'
            ],
            answer: 1,
            explanation: 'Monkey patching modifies classes/modules at runtime'
          },
          {
            question: 'What does weakref module do?',
            options: [
              'Creates weak links',
              'Allows references without preventing garbage collection',
              'Stores weak data',
              'None'
            ],
            answer: 1,
            explanation: 'weakref creates references that don\'t prevent object deletion'
          },
          {
            question: 'What is the purpose of property decorator?',
            options: [
              'Mark as important',
              'Turn method into attribute access',
              'Decorate properties',
              'None'
            ],
            answer: 1,
            explanation: '@property allows calling methods like attributes (obj.value instead of obj.value())'
          },
          {
            question: 'What is staticmethod?',
            options: [
              'Static content',
              'Method that doesn\'t receive self/cls',
              'Fixed method',
              'None'
            ],
            answer: 1,
            explanation: '@staticmethod creates methods that don\'t receive self/cls parameter'
          },
          {
            question: 'What is classmethod?',
            options: [
              'Class-based method',
              'Method receiving cls instead of self',
              'Static method',
              'None'
            ],
            answer: 1,
            explanation: '@classmethod receives cls parameter instead of self'
          },
          {
            question: 'What is the purpose of setattr/getattr?',
            options: [
              'Set/get static attributes',
              'Dynamically get/set object attributes',
              'Store data',
              'None'
            ],
            answer: 1,
            explanation: 'getattr/setattr access object attributes dynamically by name'
          },
          {
            question: 'What is the __slots__ attribute?',
            options: [
              'List of methods',
              'Restricts attributes, saves memory',
              'Slot allocation',
              'None'
            ],
            answer: 1,
            explanation: '__slots__ restricts allowed attributes and reduces memory usage'
          },
          {
            question: 'What is the purpose of inspect module?',
            options: [
              'Inspects code visually',
              'Provides runtime introspection of objects',
              'Checks code quality',
              'None'
            ],
            answer: 1,
            explanation: 'inspect module provides tools for examining classes, functions, and modules'
          },
          {
            question: 'What is the difference between args and *args?',
            options: [
              'No difference',
              'args is list of arguments, *args unpacks them',
              'Same thing',
              'None'
            ],
            answer: 1,
            explanation: '*args unpacks arguments into a tuple'
          },
          {
            question: 'What is abstract base class (ABC)?',
            options: [
              'Base class for data',
              'Class with abstract methods that must be implemented',
              'Main class',
              'None'
            ],
            answer: 1,
            explanation: 'ABC defines interface that subclasses must implement'
          },
          {
            question: 'What is the purpose of pickle module?',
            options: [
              'Processes pickled data',
              'Serializes/deserializes Python objects',
              'Preserves data',
              'None'
            ],
            answer: 1,
            explanation: 'pickle converts Python objects to/from byte streams'
          },
          {
            question: 'What is Python\'s MRO?',
            options: [
              'Method Return Order',
              'Method Resolution Order for inheritance',
              'Memory Resource Order',
              'None'
            ],
            answer: 1,
            explanation: 'MRO determines the order of method lookup in multiple inheritance'
          },
          {
            question: 'What is the purpose of logging module?',
            options: [
              'Logs into a file',
              'Records application events with levels',
              'Stores logs',
              'None'
            ],
            answer: 1,
            explanation: 'logging provides structured event recording with levels (debug, info, error)'
          },
          {
            question: 'What is itertools module used for?',
            options: [
              'Iterates through tools',
              'Creates iterators for efficient loops',
              'Tool iteration',
              'None'
            ],
            answer: 1,
            explanation: 'itertools provides fast and memory-efficient iterators for loops'
          }
        ],
        problems: [
          'Implement a thread-safe cache system',
          'Create an async web scraper',
          'Build a custom metaclass for validation'
        ]
      }
    ],
    resources: {
      documentation: 'https://docs.python.org/3/',
      practiceLinks: [
        { title: 'LeetCode Python', url: 'https://leetcode.com/problemset/all/?topicSlugs=python' },
        { title: 'HackerRank Python', url: 'https://www.hackerrank.com/domains/python' },
        { title: 'Codewars', url: 'https://www.codewars.com/kata/latest?q=python' }
      ]
    }
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '⚡',
    color: '#F7DF1E',
    difficulty: 'Beginner-Friendly',
    description: 'Essential for web development and modern applications',
    topics: [
      {
        level: 'Basics',
        content: [
          'Variables (var, let, const)',
          'Data Types & Type Coercion',
          'Functions & Scope',
          'Arrays & Objects',
          'DOM Manipulation'
        ],
        mcqs: [
          {
            question: 'What is the difference between let and var?',
            options: ['No difference', 'let is function-scoped', 'let is block-scoped', 'None'],
            answer: 2,
            explanation: 'let is block-scoped (within {}) while var is function-scoped. This makes let safer to use.'
          },
          {
            question: 'What is the output of console.log(typeof null)?',
            options: ['null', 'object', 'undefined', 'error'],
            answer: 1,
            explanation: 'typeof null returns "object" - this is actually a bug in JavaScript but is maintained for compatibility.'
          },
          {
            question: 'What is the difference between == and ===?',
            options: [
              'No difference',
              '== does type coercion, === compares both value and type',
              '=== does type coercion, == compares value only',
              'They are used in different contexts'
            ],
            answer: 1,
            explanation: '== performs type coercion (5 == "5" is true), while === requires same type (5 === "5" is false)'
          },
          {
            question: 'What does const prevent?',
            options: [
              'Variable redeclaration only',
              'Variable reassignment and redeclaration',
              'Function calls',
              'All of the above'
            ],
            answer: 1,
            explanation: 'const prevents reassignment and redeclaration, but object properties can still be modified'
          },
          {
            question: 'How do you declare an arrow function?',
            options: [
              'function => () {}',
              '() => {}',
              'arrow function () {}',
              'function arrow() {}'
            ],
            answer: 1,
            explanation: 'Arrow functions use the syntax: const func = () => { ... }'
          },
          {
            question: 'What is hoisting in JavaScript?',
            options: [
              'Lifting objects',
              'Moving declarations to top of scope',
              'Iterating over elements',
              'None'
            ],
            answer: 1,
            explanation: 'Hoisting moves function declarations and variable declarations to the top of their scope'
          },
          {
            question: 'What does the spread operator do?',
            options: [
              'Spreads butter',
              'Expands arrays/objects into individual elements',
              'Creates a new array',
              'Filters elements'
            ],
            answer: 1,
            explanation: 'The spread operator (...) expands arrays and objects: [...arr] or {...obj}'
          },
          {
            question: 'What is destructuring?',
            options: [
              'Breaking things',
              'Unpacking values from arrays/objects into distinct variables',
              'Restructuring code',
              'None'
            ],
            answer: 1,
            explanation: 'Destructuring: const {a, b} = obj; or const [x, y] = arr;'
          },
          {
            question: 'What is the difference between null and undefined?',
            options: [
              'No difference',
              'null is intentional absence, undefined is uninitialized',
              'undefined is intentional, null is uninitialized',
              'They cannot be used'
            ],
            answer: 1,
            explanation: 'null is an assigned value (no value), undefined means variable declared but not initialized'
          },
          {
            question: 'How do you check if a variable is undefined?',
            options: [
              'if (var == undefined)',
              'if (typeof var === "undefined")',
              'if (var === undefined)',
              'Both B and C are correct'
            ],
            answer: 3,
            explanation: 'Both typeof and direct comparison work, but typeof is safer for undeclared variables'
          },
          {
            question: 'What is an array method that adds elements at the end?',
            options: ['shift()', 'push()', 'unshift()', 'pop()'],
            answer: 1,
            explanation: 'push() adds elements to end of array and returns new length'
          },
          {
            question: 'What does the map() method return?',
            options: [
              'A map object',
              'A new array with transformed elements',
              'Boolean value',
              'The original array'
            ],
            answer: 1,
            explanation: 'map() creates a new array by applying a function to each element'
          },
          {
            question: 'What is the difference between find() and filter()?',
            options: [
              'No difference',
              'find() returns first match, filter() returns all matches',
              'filter() returns first match, find() returns all',
              'They work on different data types'
            ],
            answer: 1,
            explanation: 'find() returns first element matching condition, filter() returns array of all matches'
          },
          {
            question: 'What does reduce() method do?',
            options: [
              'Reduces file size',
              'Executes a function on accumulator and each array element',
              'Reduces array length',
              'None'
            ],
            answer: 1,
            explanation: 'reduce() accumulates values: arr.reduce((acc, val) => acc + val, 0)'
          },
          {
            question: 'What is JSON.stringify() used for?',
            options: [
              'Make strings strict',
              'Convert JavaScript object to JSON string',
              'Parse JSON',
              'None'
            ],
            answer: 1,
            explanation: 'JSON.stringify() converts JavaScript objects to JSON string format'
          },
          {
            question: 'What does JSON.parse() do?',
            options: [
              'Parses files',
              'Converts JSON string to JavaScript object',
              'Validates JSON',
              'None'
            ],
            answer: 1,
            explanation: 'JSON.parse() converts JSON string back to JavaScript object'
          },
          {
            question: 'What is template literal syntax?',
            options: [
              'Using double quotes ""',
              'Using backticks `` with ${} for variables',
              'Using single quotes \'\'',
              'Using triple quotes'
            ],
            answer: 1,
            explanation: 'Template literals use backticks: `Hello ${name}` instead of string concatenation'
          },
          {
            question: 'What does document.getElementById() return?',
            options: [
              'An array of elements',
              'A single element with given ID',
              'Multiple elements',
              'A string'
            ],
            answer: 1,
            explanation: 'getElementById() returns the element with specified ID, or null if not found'
          },
          {
            question: 'What is the difference between innerHTML and textContent?',
            options: [
              'No difference',
              'innerHTML interprets HTML tags, textContent returns plain text',
              'textContent interprets HTML, innerHTML returns text',
              'They work on different elements'
            ],
            answer: 1,
            explanation: 'innerHTML sets/gets HTML including tags, textContent sets/gets plain text only'
          },
          {
            question: 'What is event bubbling?',
            options: [
              'Bubble events',
              'Events propagate from child to parent element',
              'Events propagate from parent to child',
              'Events don\'t propagate'
            ],
            answer: 1,
            explanation: 'Event bubbling means events start at target element and propagate up to ancestors'
          },
          {
            question: 'What does addEventListener() do?',
            options: [
              'Adds list to event',
              'Attaches event handler to element',
              'Creates new event',
              'None'
            ],
            answer: 1,
            explanation: 'addEventListener() attaches event listener: element.addEventListener("click", handler)'
          },
          {
            question: 'What does preventDefault() do?',
            options: [
              'Prevents event bubbling',
              'Prevents default browser action for the event',
              'Prevents function execution',
              'None'
            ],
            answer: 1,
            explanation: 'preventDefault() stops default action like form submission or link navigation'
          }
        ],
        problems: [
          'Create a calculator with add, subtract, multiply, divide functions',
          'Build a todo list app with DOM manipulation',
          'Implement a simple countdown timer'
        ]
      },
      {
        level: 'Intermediate',
        content: [
          'Callbacks, Promises & Async/Await',
          'ES6 Features (Arrow functions, Destructuring)',
          'Closures & Scope Chain',
          'Prototypes & Inheritance',
          'Event Handling'
        ],
        mcqs: [
          {
            question: 'What is a closure in JavaScript?',
            options: [
              'A function that returns nothing',
              'A function that has access to outer function variables',
              'A loop that terminates',
              'An error handler'
            ],
            answer: 1,
            explanation: 'A closure is a function that has access to variables from another function scope.'
          },
          {
            question: 'What is a callback function?',
            options: [
              'A function that calls back to original function',
              'A function passed as argument to another function',
              'A function that returns a value',
              'None'
            ],
            answer: 1,
            explanation: 'Callback is a function passed to another function, called when operation completes'
          },
          {
            question: 'What is a Promise in JavaScript?',
            options: [
              'A guarantee',
              'Object representing eventual completion of async operation',
              'A promise to return a value',
              'None'
            ],
            answer: 1,
            explanation: 'Promise represents eventual result (success/failure) of async operation with .then() and .catch()'
          },
          {
            question: 'What are the three states of a Promise?',
            options: [
              'Active, Inactive, Terminated',
              'Pending, Fulfilled, Rejected',
              'Success, Failure, Waiting',
              'None'
            ],
            answer: 1,
            explanation: 'Promise starts as Pending, then becomes Fulfilled (resolved) or Rejected'
          },
          {
            question: 'What does async keyword do?',
            options: [
              'Makes function asynchronous',
              'Makes function return a Promise automatically',
              'Allows await usage',
              'All of the above'
            ],
            answer: 3,
            explanation: 'async makes function always return Promise and allows await inside'
          },
          {
            question: 'What does await do?',
            options: [
              'Waits for time',
              'Pauses execution until Promise resolves',
              'Waits for user input',
              'None'
            ],
            answer: 1,
            explanation: 'await pauses async function until Promise settles, can only be used in async function'
          },
          {
            question: 'What is .then() method?',
            options: [
              'Runs code after then',
              'Handles Promise fulfillment',
              'Runs code in sequence',
              'None'
            ],
            answer: 1,
            explanation: '.then() handles Promise resolution: promise.then(success, error)'
          },
          {
            question: 'What is .catch() method?',
            options: [
              'Catches exceptions',
              'Handles Promise rejection',
              'Stops code execution',
              'None'
            ],
            answer: 1,
            explanation: '.catch() handles Promise rejection and errors: promise.catch(errorHandler)'
          },
          {
            question: 'What is .finally() method?',
            options: [
              'Runs at the end',
              'Executes code whether Promise resolves or rejects',
              'Finally completes operation',
              'None'
            ],
            answer: 1,
            explanation: '.finally() always executes regardless of Promise outcome'
          },
          {
            question: 'What is the event loop?',
            options: [
              'A loop for DOM events',
              'Mechanism that handles async operations and event execution',
              'A function loop',
              'Infinite loop'
            ],
            answer: 1,
            explanation: 'Event loop continuously checks call stack and callback queue'
          },
          {
            question: 'What is the difference between microtask and macrotask queues?',
            options: [
              'No difference',
              'Microtasks execute before macrotasks',
              'Macrotasks execute before microtasks',
              'They are the same'
            ],
            answer: 1,
            explanation: 'Microtask queue (Promises, queueMicrotask) executes before macrotask queue (setTimeout, events)'
          },
          {
            question: 'What is this keyword?',
            options: [
              'This value',
              'Reference to object it belongs to',
              'Previous object',
              'Current scope'
            ],
            answer: 1,
            explanation: 'this refers to the object that owns the method, context dependent'
          },
          {
            question: 'What does .call() method do?',
            options: [
              'Calls a function',
              'Calls function with specified this value and arguments',
              'Calls function later',
              'None'
            ],
            answer: 1,
            explanation: 'func.call(thisArg, arg1, arg2) calls function with specific this context'
          },
          {
            question: 'What does .apply() method do?',
            options: [
              'Applies changes',
              'Calls function with specified this and array of arguments',
              'Applies function to array',
              'None'
            ],
            answer: 1,
            explanation: 'func.apply(thisArg, [args]) calls function with this context and args as array'
          },
          {
            question: 'What does .bind() method do?',
            options: [
              'Binds variables',
              'Creates new function with fixed this value',
              'Binds events',
              'None'
            ],
            answer: 1,
            explanation: 'func.bind(thisArg) returns new function with permanently bound this context'
          },
          {
            question: 'What is prototype inheritance?',
            options: [
              'Parent-child relationship',
              'Objects inherit properties from prototype object',
              'Inheritance hierarchy',
              'None'
            ],
            answer: 1,
            explanation: 'Objects have [[Prototype]] linking to prototype object, enabling property lookup chain'
          },
          {
            question: 'What is the prototype chain?',
            options: [
              'Chain of links',
              'Series of objects linked through [[Prototype]]',
              'Chain of functions',
              'None'
            ],
            answer: 1,
            explanation: 'Prototype chain is lookup path: object -> prototype -> prototype.prototype -> null'
          },
          {
            question: 'What is Object.create()?',
            options: [
              'Creates new object',
              'Creates object with specified prototype',
              'Creates copy of object',
              'None'
            ],
            answer: 1,
            explanation: 'Object.create(proto) creates new object with proto as [[Prototype]]'
          },
          {
            question: 'What is a pure function?',
            options: [
              'Function without impurities',
              'Function with no side effects, same input always gives same output',
              'Clean function',
              'None'
            ],
            answer: 1,
            explanation: 'Pure function has no side effects and is deterministic'
          },
          {
            question: 'What is higher-order function?',
            options: [
              'Function that is higher',
              'Function that takes function as argument or returns function',
              'Function with higher priority',
              'None'
            ],
            answer: 1,
            explanation: 'Higher-order function operates on other functions: map, filter, reduce'
          },
          {
            question: 'What is currying?',
            options: [
              'Cooking function',
              'Transforming function to accept args one at a time',
              'Calling function multiple times',
              'None'
            ],
            answer: 1,
            explanation: 'Currying converts f(a,b,c) to f(a)(b)(c)'
          },
          {
            question: 'What is memoization?',
            options: [
              'Memory function',
              'Caching function results based on arguments',
              'Remembering values',
              'None'
            ],
            answer: 1,
            explanation: 'Memoization caches results of expensive functions to avoid recomputation'
          }
        ],
        problems: [
          'Create a promise-based delay function',
          'Build a fetch API call to get data from an API',
          'Implement event delegation for a dynamic list'
        ]
      },
      {
        level: 'Advanced',
        content: [
          'Modules (CommonJS, ES6 Modules)',
          'Testing (Jest, Mocha)',
          'Performance Optimization',
          'Security Best Practices',
          'Web APIs & Service Workers'
        ],
        mcqs: [
          {
            question: 'What is the event loop in JavaScript?',
            options: [
              'A loop for DOM events',
              'Mechanism for handling async operations',
              'A function loop',
              'Error handling mechanism'
            ],
            answer: 1,
            explanation: 'The event loop processes the call stack, microtask queue, and macrotask queue to handle async operations.'
          },
          {
            question: 'What is CommonJS module?',
            options: [
              'Common JavaScript',
              'require() for importing, module.exports for exporting',
              'Module system',
              'None'
            ],
            answer: 1,
            explanation: 'CommonJS: const mod = require("./module"); module.exports = value;'
          },
          {
            question: 'What is ES6 Module?',
            options: [
              'ES6 module system',
              'import/export for modules',
              'ECMAScript 6 modules',
              'All of the above'
            ],
            answer: 3,
            explanation: 'ES6 Modules: import { func } from "./module.js"; export const func = () => {};'
          },
          {
            question: 'What is default export?',
            options: [
              'Export by default',
              'export default value; can import with any name',
              'Primary export',
              'None'
            ],
            answer: 1,
            explanation: 'export default only one per module, imported as: import Name from "./module"'
          },
          {
            question: 'What is named export?',
            options: [
              'Export with name',
              'export { var }; imported with { var }',
              'Specific export',
              'None'
            ],
            answer: 1,
            explanation: 'Named export: export const var = 5; import { var } from "./module"'
          },
          {
            question: 'What is tree shaking?',
            options: [
              'Shaking trees',
              'Removing unused code in modules',
              'Optimizing trees',
              'None'
            ],
            answer: 1,
            explanation: 'Tree shaking removes unused exports during bundling (ES6 modules support this)'
          },
          {
            question: 'What is Jest in JavaScript?',
            options: [
              'Testing framework',
              'Provides testing utilities for unit testing',
              'JavaScript test runner',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Jest is testing framework: describe(), test(), expect() for assertions'
          },
          {
            question: 'What is a mock function?',
            options: [
              'Function that mocks',
              'Tracks calls/args for testing',
              'Fake function',
              'None'
            ],
            answer: 1,
            explanation: 'Mock function: jest.fn() tracks calls, arguments, return values'
          },
          {
            question: 'What is Object.defineProperty()?',
            options: [
              'Defines property',
              'Defines or modifies object property with descriptor',
              'Property definition',
              'None'
            ],
            answer: 1,
            explanation: 'Object.defineProperty(obj, "prop", { value: 5, writable: false })'
          },
          {
            question: 'What is a getter in JavaScript?',
            options: [
              'Function that gets',
              'get keyword to define property accessor',
              'Gets values',
              'None'
            ],
            answer: 1,
            explanation: 'Getter: get prop() { return this._prop; } - accessed as obj.prop'
          },
          {
            question: 'What is a setter in JavaScript?',
            options: [
              'Function that sets',
              'set keyword to define property modifier',
              'Sets values',
              'None'
            ],
            answer: 1,
            explanation: 'Setter: set prop(v) { this._prop = v; } - accessed as obj.prop = value'
          },
          {
            question: 'What is Symbol in JavaScript?',
            options: [
              'Symbolic value',
              'Primitive type for unique identifiers',
              'Unique symbol',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Symbol(): typeof Symbol() === "symbol", each symbol is unique'
          },
          {
            question: 'What is WeakMap?',
            options: [
              'Weak mapping',
              'Map with weakly referenced keys, keys must be objects',
              'Weak reference map',
              'None'
            ],
            answer: 1,
            explanation: 'WeakMap: keys are objects, allow garbage collection when key no longer referenced'
          },
          {
            question: 'What is WeakSet?',
            options: [
              'Weak set',
              'Set with weakly referenced values, values must be objects',
              'Weak object set',
              'None'
            ],
            answer: 1,
            explanation: 'WeakSet: stores objects, values can be garbage collected'
          },
          {
            question: 'What is Proxy in JavaScript?',
            options: [
              'Proxy server',
              'Object intercepting operations on another object',
              'Wrapper object',
              'None'
            ],
            answer: 1,
            explanation: 'new Proxy(target, handler) intercepts get, set, apply operations'
          },
          {
            question: 'What is Reflect API?',
            options: [
              'API for reflection',
              'Provides methods for interceptable JavaScript operations',
              'Object reflection',
              'None'
            ],
            answer: 1,
            explanation: 'Reflect provides methods: get(), set(), apply(), construct(), etc.'
          },
          {
            question: 'What is Web Worker?',
            options: [
              'Worker for web',
              'Separate thread for running JavaScript',
              'Background worker',
              'None'
            ],
            answer: 1,
            explanation: 'Web Worker runs script in background thread: new Worker("script.js")'
          },
          {
            question: 'What is Service Worker?',
            options: [
              'Worker for service',
              'Proxy between app and network for offline support, caching',
              'Background service',
              'None'
            ],
            answer: 1,
            explanation: 'Service Worker enables offline-first apps with caching and background sync'
          },
          {
            question: 'What is requestAnimationFrame?',
            options: [
              'Requests animation',
              'Schedules animation callback for browser repaint',
              'Animation request',
              'None'
            ],
            answer: 1,
            explanation: 'requestAnimationFrame(callback) syncs with browser refresh rate ~60fps'
          },
          {
            question: 'What is debouncing?',
            options: [
              'Removing bounces',
              'Delaying function call until specified time after last call',
              'Bounce removal',
              'None'
            ],
            answer: 1,
            explanation: 'Debouncing: func called once after 500ms of inactivity (search, resize)'
          },
          {
            question: 'What is throttling?',
            options: [
              'Limiting function calls',
              'Function called at most once per specified interval',
              'Rate limiting',
              'None'
            ],
            answer: 1,
            explanation: 'Throttling: func called max once per 1000ms (scroll, mouse movement)'
          },
          {
            question: 'What is Content Security Policy (CSP)?',
            options: [
              'Policy for content',
              'Security policy restricting resource loading',
              'Security header',
              'None'
            ],
            answer: 1,
            explanation: 'CSP: header controls which resources can be loaded (scripts, stylesheets, etc.)'
          }
        ],
        problems: [
          'Build a custom event emitter class',
          'Implement a rate limiter function',
          'Create a web worker for heavy computations'
        ]
      }
    ],
    resources: {
      documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      practiceLinks: [
        { title: 'LeetCode JavaScript', url: 'https://leetcode.com/problemset/all/?topicSlugs=javascript' },
        { title: 'HackerRank JavaScript', url: 'https://www.hackerrank.com/domains/javascript' },
        { title: 'Codewars JavaScript', url: 'https://www.codewars.com/kata/latest?q=javascript' }
      ]
    }
  },
  {
    id: 'java',
    name: 'Java',
    icon: '☕',
    color: '#007396',
    difficulty: 'Intermediate',
    description: 'Enterprise-grade language for large-scale applications',
    topics: [
      {
        level: 'Basics',
        content: [
          'Classes & Objects',
          'Variables & Data Types',
          'Control Flow Statements',
          'Arrays & Collections',
          'String Handling'
        ],
        mcqs: [
          {
            question: 'What is the default value of a boolean variable in Java?',
            options: ['null', 'false', 'true', 'undefined'],
            answer: 1,
            explanation: 'The default value of a boolean is false in Java.'
          },
          {
            question: 'What are the primitive data types in Java?',
            options: [
              'int, float, double, String',
              'byte, short, int, long, float, double, boolean, char',
              'Only numbers',
              'Objects'
            ],
            answer: 1,
            explanation: '8 primitive types: byte, short, int, long, float, double, boolean, char'
          },
          {
            question: 'What is the difference between == and .equals()?',
            options: [
              'No difference',
              '== compares reference, .equals() compares value',
              '.equals() compares reference',
              'They are the same'
            ],
            answer: 1,
            explanation: '== checks if objects are same instance, .equals() checks if content is equal'
          },
          {
            question: 'What is a class in Java?',
            options: [
              'A group of students',
              'Blueprint for creating objects',
              'A function',
              'A loop'
            ],
            answer: 1,
            explanation: 'Class is a template/blueprint for creating objects with properties and methods'
          },
          {
            question: 'What is an object in Java?',
            options: [
              'Same as class',
              'Instance of a class',
              'A blueprint',
              'None'
            ],
            answer: 1,
            explanation: 'Object is an instance of a class created with new keyword'
          },
          {
            question: 'What are access modifiers in Java?',
            options: [
              'public, private, protected, default',
              'public, private',
              'Only public',
              'None'
            ],
            answer: 0,
            explanation: '4 access levels: public (everywhere), protected (subclass), default (same package), private (class)'
          },
          {
            question: 'What is a constructor?',
            options: [
              'Constructs class',
              'Special method called when object is created',
              'Initializes variables',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Constructor initializes object state, called automatically with new keyword'
          },
          {
            question: 'What is method overloading?',
            options: [
              'Multiple methods with different names',
              'Multiple methods with same name but different parameters',
              'Calling method multiple times',
              'None'
            ],
            answer: 1,
            explanation: 'Overloading: multiple methods same name, different parameter count/types'
          },
          {
            question: 'What is static keyword?',
            options: [
              'Fixed value',
              'Belongs to class not instance',
              'Cannot change',
              'All of the above'
            ],
            answer: 1,
            explanation: 'static members belong to class, shared among all instances'
          },
          {
            question: 'What is final keyword?',
            options: [
              'Last thing',
              'Cannot be modified, subclassed or overridden',
              'End of program',
              'None'
            ],
            answer: 1,
            explanation: 'final: variable cannot be reassigned, class cannot be subclassed, method cannot be overridden'
          },
          {
            question: 'What is this keyword?',
            options: [
              'Current context',
              'Reference to current object',
              'This instance',
              'All of the above'
            ],
            answer: 3,
            explanation: 'this refers to current object, used to access instance variables and methods'
          },
          {
            question: 'What is super keyword?',
            options: [
              'Superior class',
              'Reference to parent class',
              'Call parent methods',
              'All of the above'
            ],
            answer: 3,
            explanation: 'super accesses parent class methods and constructor'
          },
          {
            question: 'What are arrays in Java?',
            options: [
              'Lists of similar data',
              'Fixed-size collection of same type elements',
              'Dynamic collection',
              'None'
            ],
            answer: 1,
            explanation: 'Arrays store multiple elements of same type in fixed size: int[] arr = new int[10];'
          },
          {
            question: 'What is ArrayList?',
            options: [
              'Array list',
              'Dynamic resizable collection (List implementation)',
              'Fixed array',
              'None'
            ],
            answer: 1,
            explanation: 'ArrayList: dynamic array, grows automatically, ArrayList<Integer> list = new ArrayList<>();'
          },
          {
            question: 'What is HashMap?',
            options: [
              'Map of hash',
              'Key-value collection (key -> value)',
              'Hash function',
              'None'
            ],
            answer: 1,
            explanation: 'HashMap stores key-value pairs, HashMap<String, Integer> map = new HashMap<>();'
          },
          {
            question: 'What is String in Java?',
            options: [
              'String of characters',
              'Immutable sequence of characters',
              'String class',
              'All of the above'
            ],
            answer: 3,
            explanation: 'String is immutable (cannot be changed after creation) sequence of characters'
          },
          {
            question: 'What is difference between String and StringBuffer?',
            options: [
              'No difference',
              'StringBuffer is mutable, String is immutable',
              'String is mutable, StringBuffer is immutable',
              'They are same'
            ],
            answer: 1,
            explanation: 'StringBuffer allows modification, String does not - StringBuffer is more efficient for concatenation'
          },
          {
            question: 'What are loops in Java?',
            options: [
              'Circular motion',
              'for, while, do-while for repetition',
              'Looping code',
              'None'
            ],
            answer: 1,
            explanation: '3 loops: for (fixed iterations), while (condition), do-while (at least once)'
          },
          {
            question: 'What is for-each loop?',
            options: [
              'Loop for each item',
              'Enhanced for loop for collections: for(type var: collection)',
              'Advanced loop',
              'None'
            ],
            answer: 1,
            explanation: 'for(int num : arr) iterates through array/collection without index'
          },
          {
            question: 'What are control statements?',
            options: [
              'if, else, switch, break, continue',
              'Control program flow',
              'Decision making',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Control statements: if/else (condition), switch (multiple choices), break/continue'
          },
          {
            question: 'What is exception handling?',
            options: [
              'Handling exceptions',
              'try-catch-finally to handle errors gracefully',
              'Error management',
              'All of the above'
            ],
            answer: 3,
            explanation: 'try catches error, catch handles it, finally cleanup (executes always)'
          },
          {
            question: 'What is an interface?',
            options: [
              'User interface',
              'Contract with abstract methods',
              'Abstract class',
              'None'
            ],
            answer: 1,
            explanation: 'Interface defines contract: public abstract methods, classes implement with all methods'
          }
        ],
        problems: [
          'Create a Student class with getters and setters',
          'Implement a binary search algorithm',
          'Build a simple calculator using methods'
        ]
      },
      {
        level: 'Intermediate',
        content: [
          'Inheritance & Polymorphism',
          'Exception Handling',
          'Collections Framework',
          'File I/O & Serialization',
          'Multithreading'
        ],
        mcqs: [
          {
            question: 'What is method overloading?',
            options: [
              'Using same method name with different parameters',
              'Using different method names',
              'Overriding parent method',
              'None'
            ],
            answer: 0,
            explanation: 'Method overloading is having multiple methods with same name but different parameters/types.'
          },
          {
            question: 'What is method overriding?',
            options: [
              'Same as overloading',
              'Subclass provides implementation of parent\'s method',
              'Using different method',
              'None'
            ],
            answer: 1,
            explanation: 'Overriding: child class redefines parent method with @Override annotation'
          },
          {
            question: 'What is inheritance?',
            options: [
              'Inheriting money',
              'Class extends another class to reuse code',
              'Parent-child relationship',
              'All of the above'
            ],
            answer: 3,
            explanation: 'class Child extends Parent: Child inherits Parent\'s members'
          },
          {
            question: 'What is polymorphism?',
            options: [
              'Many forms',
              'Object behavior depends on context',
              'Same method, different behavior',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Polymorphism: same interface, different implementations (method overriding)'
          },
          {
            question: 'What is an abstract class?',
            options: [
              'Abstract concept',
              'Cannot be instantiated, can have abstract methods',
              'Blueprint',
              'All of the above'
            ],
            answer: 3,
            explanation: 'abstract class: cannot create object, subclass must implement abstract methods'
          },
          {
            question: 'What is abstract method?',
            options: [
              'Method without implementation',
              'declared with abstract, no body, subclass must override',
              'Method to implement',
              'None'
            ],
            answer: 1,
            explanation: 'public abstract void method(); - must be implemented by subclass'
          },
          {
            question: 'What is encapsulation?',
            options: [
              'Encapsulating data',
              'Bundling data with methods, hiding internal details',
              'Data hiding',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Encapsulation: private variables, public getters/setters for controlled access'
          },
          {
            question: 'What is checked exception?',
            options: [
              'Exception we check',
              'IOException, SQLException - checked at compile time',
              'Checked error',
              'None'
            ],
            answer: 1,
            explanation: 'Checked exception: must catch or throw, compiler enforces handling'
          },
          {
            question: 'What is unchecked exception?',
            options: [
              'Exception without check',
              'RuntimeException (NullPointerException, ArrayIndexOutOfBoundsException)',
              'Runtime error',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Unchecked exception: extends RuntimeException, compiler doesn\'t require handling'
          },
          {
            question: 'What is throws keyword?',
            options: [
              'Throws exception',
              'Declares method throws exception to caller',
              'Exception declaration',
              'None'
            ],
            answer: 1,
            explanation: 'public void method() throws IOException: method caller must handle'
          },
          {
            question: 'What is Collections Framework?',
            options: [
              'Framework for collections',
              'Set, List, Map interfaces with implementations',
              'Data structure framework',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Collections Framework: interfaces (Collection, List, Set, Map) with implementations'
          },
          {
            question: 'What is List?',
            options: [
              'List of items',
              'Ordered collection allowing duplicates',
              'ArrayList, LinkedList are implementations',
              'All of the above'
            ],
            answer: 3,
            explanation: 'List interface: ordered, allows duplicates, index-based access'
          },
          {
            question: 'What is Set?',
            options: [
              'Set of items',
              'Unordered collection without duplicates',
              'HashSet, TreeSet are implementations',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Set interface: no duplicates, unordered (HashSet) or sorted (TreeSet)'
          },
          {
            question: 'What is Stream API?',
            options: [
              'Stream of data',
              'Functional programming for collections (filter, map, reduce)',
              'Java 8+ feature',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Stream API: list.stream().filter(x -> x > 5).map(x -> x*2).collect(Collectors.toList())'
          },
          {
            question: 'What is lambda expression?',
            options: [
              'Expression with lambda',
              'Anonymous function: (parameters) -> { body }',
              'Java 8+ feature',
              'All of the above'
            ],
            answer: 3,
            explanation: '(x, y) -> x + y: shorter syntax than anonymous classes'
          },
          {
            question: 'What is functional interface?',
            options: [
              'Interface for functions',
              'Interface with exactly one abstract method',
              '@FunctionalInterface annotation',
              'All of the above'
            ],
            answer: 3,
            explanation: '@FunctionalInterface: single abstract method, can use lambda'
          },
          {
            question: 'What is Thread?',
            options: [
              'Line of thread',
              'Lightweight process for concurrent execution',
              'Parallel execution',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Thread extends Thread or implements Runnable, run() executes code'
          },
          {
            question: 'What is synchronization?',
            options: [
              'Synchronize timing',
              'synchronized keyword to ensure one thread accesses resource',
              'Thread safety',
              'All of the above'
            ],
            answer: 3,
            explanation: 'synchronized method/block prevents race conditions'
          },
          {
            question: 'What is File I/O?',
            options: [
              'Input/Output operations',
              'FileReader, FileWriter, FileInputStream, FileOutputStream',
              'Reading/writing files',
              'All of the above'
            ],
            answer: 3,
            explanation: 'File I/O: FileInputStream (read), FileOutputStream (write), Streams'
          },
          {
            question: 'What is Serialization?',
            options: [
              'Serial process',
              'Converting object to byte stream for storage/transmission',
              'Implements Serializable interface',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Serialization: object.writeObject() saves to file, readObject() loads'
          },
          {
            question: 'What is Deserialization?',
            options: [
              'Reverse of serialization',
              'Converting byte stream back to object',
              'Loading saved object',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Deserialization: ObjectInputStream.readObject() restores object from bytes'
          },
          {
            question: 'What is Package?',
            options: [
              'Package of items',
              'Directory structure organizing classes',
              'Namespace for classes',
              'All of the above'
            ],
            answer: 3,
            explanation: 'package com.example.app; first line, prevents name conflicts'
          }
        ],
        problems: [
          'Implement an interface for different shapes (Circle, Rectangle)',
          'Create a custom exception for invalid age',
          'Build a thread-safe counter'
        ]
      },
      {
        level: 'Advanced',
        content: [
          'Design Patterns (Singleton, Factory, Observer)',
          'Streams API & Functional Programming',
          'Reflection & Annotations',
          'JVM Internals & Performance',
          'Concurrency & Thread Pools'
        ],
        mcqs: [
          {
            question: 'What is a lambda expression in Java?',
            options: [
              'Anonymous function implementation',
              'A loop construct',
              'Exception handling',
              'None'
            ],
            answer: 0,
            explanation: 'Lambda expressions provide a way to write anonymous functions in Java 8+.'
          },
          {
            question: 'What is Stream API?',
            options: [
              'API for streams',
              'Functional programming on collections with filter, map, reduce',
              'Java 8+ feature',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Stream: list.stream().filter().map().collect() for functional data processing'
          },
          {
            question: 'What is Singleton pattern?',
            options: [
              'Single class',
              'Class with only one instance globally',
              'Design pattern',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Singleton: private constructor, static instance, getInstance() method'
          },
          {
            question: 'What is Factory pattern?',
            options: [
              'Factory method',
              'Creates objects without specifying exact classes',
              'Abstracts object creation',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Factory: method returns objects, hides instantiation details'
          },
          {
            question: 'What is Observer pattern?',
            options: [
              'Observing pattern',
              'Subject notifies observers of state changes',
              'Event-driven pattern',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Observer: subject.attach(observer), subject.notifyObservers() when state changes'
          },
          {
            question: 'What is Reflection API?',
            options: [
              'Reflecting code',
              'Runtime inspection of classes, methods, fields',
              'Meta-programming',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Reflection: Class.forName(), getMethod(), invoke() - inspect/modify at runtime'
          },
          {
            question: 'What is Annotation?',
            options: [
              'Code annotation',
              '@Override, @FunctionalInterface - metadata for compiler/runtime',
              'Provides information without affecting code',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Annotation: @Override, @Deprecated, @SuppressWarnings, custom @Interface'
          },
          {
            question: 'What is Generics?',
            options: [
              'Generic classes',
              'Type parameters: List<String>, <T extends Number>',
              'Type safety',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Generics: <T> allows type-safe reusable code, ArrayList<Integer> vs ArrayList<String>'
          },
          {
            question: 'What is type erasure?',
            options: [
              'Removing types',
              'Generics removed at runtime for backward compatibility',
              'Type information erased',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Type erasure: List<String> becomes List at runtime, generics compile-time only'
          },
          {
            question: 'What is wildcard in Generics?',
            options: [
              'Wildcard character',
              '? for unknown type: List<?>, List<? extends Number>',
              'Flexibility in types',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Wildcard: List<?> any type, List<? extends Number> subtypes of Number'
          },
          {
            question: 'What is ThreadPool?',
            options: [
              'Pool of threads',
              'ExecutorService managing fixed number of reusable threads',
              'Concurrency optimization',
              'All of the above'
            ],
            answer: 3,
            explanation: 'ThreadPool: Executors.newFixedThreadPool(5) for task execution'
          },
          {
            question: 'What is Callable?',
            options: [
              'Can call interface',
              'Like Runnable but returns result, throws exception',
              'Parameterized<V> call() returns V',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Callable<Integer> call() returns value unlike Runnable.run() which returns void'
          },
          {
            question: 'What is Future?',
            options: [
              'Future concept',
              'Represents result of async computation',
              'get() blocks until result available',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Future: executor.submit(callable) returns Future, future.get() retrieves result'
          },
          {
            question: 'What is volatile keyword?',
            options: [
              'Volatile data',
              'Variable value always read from main memory in threads',
              'Thread safety',
              'All of the above'
            ],
            answer: 3,
            explanation: 'volatile: prevents caching, multiple threads see latest value'
          },
          {
            question: 'What is Immutable class?',
            options: [
              'Cannot be changed',
              'final class, private fields, no setters',
              'Thread-safe without synchronization',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Immutable: final class, private final fields, defensive copies in constructor'
          },
          {
            question: 'What is HashMap vs HashTable?',
            options: [
              'No difference',
              'HashMap not synchronized, HashTable synchronized',
              'HashMap modern, HashTable legacy',
              'All of the above'
            ],
            answer: 3,
            explanation: 'HashMap unsynchronized (better performance), HashTable synchronized (thread-safe)'
          },
          {
            question: 'What is ConcurrentHashMap?',
            options: [
              'Concurrent HashMap',
              'Thread-safe without locking entire map',
              'Segment-based locking',
              'All of the above'
            ],
            answer: 3,
            explanation: 'ConcurrentHashMap: locks only segments for better concurrency than HashTable'
          },
          {
            question: 'What is try-with-resources?',
            options: [
              'Try with resources',
              'try(Resource r = new Resource()) - auto closes',
              'Automatic resource management',
              'All of the above'
            ],
            answer: 3,
            explanation: 'try(FileInputStream fis = new FileInputStream(...)) auto-closes resource'
          },
          {
            question: 'What is Custom Exception?',
            options: [
              'Exception we create',
              'extends Exception or RuntimeException',
              'Domain-specific errors',
              'All of the above'
            ],
            answer: 3,
            explanation: 'class InvalidAgeException extends Exception: throw new InvalidAgeException("Age < 0")'
          },
          {
            question: 'What is Method Reference?',
            options: [
              'Reference to method',
              'Shorthand for lambda: ClassName::methodName',
              'Java 8+ feature',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Method reference: list.forEach(System.out::println) instead of list.forEach(x -> System.out.println(x))'
          },
          {
            question: 'What is Optional?',
            options: [
              'Optional container',
              'Container for null-safe value: Optional<T>',
              'Prevents NullPointerException',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Optional: Optional<String> value; value.ifPresent(v -> {}); value.orElse(default)'
          },
          {
            question: 'What is JVM?',
            options: [
              'Java Virtual Machine',
              'Executes Java bytecode platform-independently',
              'Runtime environment',
              'All of the above'
            ],
            answer: 3,
            explanation: 'JVM: Write once, run anywhere. Java code -> bytecode -> JVM interprets'
          }
        ],
        problems: [
          'Implement Singleton pattern correctly',
          'Create a stream pipeline for data transformation',
          'Build a thread pool executor'
        ]
      }
    ],
    resources: {
      documentation: 'https://docs.oracle.com/en/java/',
      practiceLinks: [
        { title: 'LeetCode Java', url: 'https://leetcode.com/problemset/all/?topicSlugs=java' },
        { title: 'HackerRank Java', url: 'https://www.hackerrank.com/domains/java' },
        { title: 'GeeksforGeeks Java', url: 'https://www.geeksforgeeks.org/java/' }
      ]
    }
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: '⚙️',
    color: '#00599C',
    difficulty: 'Intermediate-Advanced',
    description: 'High-performance language for system programming and competitive programming',
    topics: [
      {
        level: 'Basics',
        content: [
          'Variables & Data Types',
          'Pointers & References',
          'Arrays & Strings',
          'Functions & Scope',
          'Input/Output Streams'
        ],
        mcqs: [
          {
            question: 'What is the difference between pass by value and pass by reference?',
            options: [
              'No difference',
              'Pass by value copies data, pass by reference uses reference',
              'Pass by reference is slower',
              'None'
            ],
            answer: 1,
            explanation: 'Pass by value copies the data; pass by reference accesses the original variable through a reference.'
          },
          {
            question: 'What is a pointer in C++?',
            options: [
              'Pointing device',
              'Variable storing memory address',
              'int *ptr = &var;',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Pointer: int *p = &x; stores address of x, *p accesses value'
          },
          {
            question: 'What is a reference in C++?',
            options: [
              'Reference material',
              'Alias to another variable, cannot be null/reassigned',
              'int &ref = x;',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Reference: int &ref = x; ref is alias for x, safer than pointer'
          },
          {
            question: 'What is the difference between pointer and reference?',
            options: [
              'No difference',
              'Pointer can be null/reassigned, reference cannot',
              'Reference safer than pointer',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Pointer can be reassigned/null, reference is permanent alias, need dereferencing'
          },
          {
            question: 'What is dereferencing?',
            options: [
              'Removing reference',
              'Accessing value through pointer using *',
              '*ptr gives value',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Dereferencing: int *ptr = &x; int y = *ptr; gets value from address'
          },
          {
            question: 'What is & operator?',
            options: [
              'And operator',
              'Address-of operator, gets address of variable',
              'int *p = &x;',
              'All of the above'
            ],
            answer: 3,
            explanation: '&x gives memory address of x, used to get pointer value'
          },
          {
            question: 'What is * operator?',
            options: [
              'Multiply operator',
              'Dereference operator, accesses value at address',
              'Pointer declaration',
              'All of the above'
            ],
            answer: 3,
            explanation: '*ptr accesses value at address, int *ptr declares pointer'
          },
          {
            question: 'What is array in C++?',
            options: [
              'Array of items',
              'Fixed-size collection of same type',
              'int arr[10];',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Array: int arr[10] creates 10 integers, arr[0] to arr[9]'
          },
          {
            question: 'What is string in C++?',
            options: [
              'String data',
              'std::string for text',
              'char array or std::string',
              'All of the above'
            ],
            answer: 3,
            explanation: 'string: std::string name = "John"; more convenient than char[]'
          },
          {
            question: 'What is function in C++?',
            options: [
              'Function definition',
              'Reusable block of code',
              'int add(int a, int b) { return a+b; }',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Function: code reuse, parameters, return value'
          },
          {
            question: 'What is function prototype?',
            options: [
              'Prototype function',
              'Declaration before main, definition later',
              'int add(int, int);',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Prototype: declare before use, define later, int add(int a, int b);'
          },
          {
            question: 'What is inline function?',
            options: [
              'Function in line',
              'inline keyword for compiler to replace call with body',
              'Performance optimization',
              'All of the above'
            ],
            answer: 3,
            explanation: 'inline: compiler substitutes function call with body (less function call overhead)'
          },
          {
            question: 'What is local variable?',
            options: [
              'Variable in locality',
              'Declared inside function, exists only in function',
              'Scope limited to block',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Local: declared in function, not accessible outside'
          },
          {
            question: 'What is global variable?',
            options: [
              'Variable globally',
              'Declared outside function, accessible everywhere',
              'extern for external linkage',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Global: declared outside all functions, accessible by all'
          },
          {
            question: 'What is static variable?',
            options: [
              'Static content',
              'Retains value between function calls',
              'Initialized once',
              'All of the above'
            ],
            answer: 3,
            explanation: 'static: value persists, initialized once, helpful for counters'
          },
          {
            question: 'What is const keyword?',
            options: [
              'Constant declaration',
              'Variable cannot be modified after initialization',
              'const int x = 5;',
              'All of the above'
            ],
            answer: 3,
            explanation: 'const: makes variable immutable, compiler error if modified'
          },
          {
            question: 'What is namespace in C++?',
            options: [
              'Namespace organization',
              'Prevents name conflicts',
              'std::cout, std::string',
              'All of the above'
            ],
            answer: 3,
            explanation: 'namespace: std::cout, or using namespace std; using std::cout;'
          },
          {
            question: 'What is iostream?',
            options: [
              'Input output stream',
              'Header for cin, cout',
              '#include <iostream>',
              'All of the above'
            ],
            answer: 3,
            explanation: 'iostream: std::cin (input), std::cout (output), std::cerr'
          },
          {
            question: 'What is cin vs cout?',
            options: [
              'Both input',
              'cin for input, cout for output',
              'cin >> x; cout << x;',
              'All of the above'
            ],
            answer: 3,
            explanation: 'cin: reads from keyboard, cout: outputs to screen'
          },
          {
            question: 'What is memory leak?',
            options: [
              'Memory leaking',
              'Memory allocated but not freed',
              'new without delete',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Memory leak: int *p = new int; but never delete p; wastes memory'
          },
          {
            question: 'What is dynamic memory?',
            options: [
              'Dynamic allocation',
              'new for allocation, delete for deallocation',
              'Heap memory',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Dynamic: int *p = new int[10]; later delete[] p; for runtime allocation'
          },
          {
            question: 'What is stack vs heap?',
            options: [
              'Stack for stack, heap for heap',
              'Stack: automatic, fast, limited; Heap: dynamic, slower',
              'Local vars on stack, dynamic on heap',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Stack: LIFO, function variables; Heap: manual management, larger'
          }
        ],
        problems: [
          'Implement a simple calculator',
          'Reverse an array',
          'Find maximum element in an array'
        ]
      },
      {
        level: 'Intermediate',
        content: [
          'Object-Oriented Programming',
          'Inheritance & Polymorphism',
          'Templates & STL',
          'Exception Handling',
          'Memory Management'
        ],
        mcqs: [
          {
            question: 'What are STL containers?',
            options: [
              'Storage for template classes',
              'Standard Template Library data structures',
              'Conditional statements',
              'None'
            ],
            answer: 1,
            explanation: 'STL containers like vector, map, set, queue are predefined data structures in C++ Standard Template Library.'
          },
          {
            question: 'What is vector in STL?',
            options: [
              'Vector in physics',
              'Dynamic array, std::vector<int> v;',
              'Resizable collection',
              'All of the above'
            ],
            answer: 3,
            explanation: 'vector: growable array, v.push_back(5), v[0], v.size()'
          },
          {
            question: 'What is map in STL?',
            options: [
              'Geographic map',
              'Key-value pairs, std::map<string, int>',
              'Sorted by key',
              'All of the above'
            ],
            answer: 3,
            explanation: 'map: ordered key-value, m[key] = value, sorted'
          },
          {
            question: 'What is set in STL?',
            options: [
              'Set theory',
              'Unique elements, std::set<int>',
              'Sorted, no duplicates',
              'All of the above'
            ],
            answer: 3,
            explanation: 'set: unique sorted elements, s.insert(5), duplicates ignored'
          },
          {
            question: 'What is queue in STL?',
            options: [
              'Waiting queue',
              'FIFO: std::queue<int>',
              'push back, pop front',
              'All of the above'
            ],
            answer: 3,
            explanation: 'queue: FIFO, q.push(5) back, q.pop() front'
          },
          {
            question: 'What is stack in STL?',
            options: [
              'Stack books',
              'LIFO: std::stack<int>',
              'push/pop top',
              'All of the above'
            ],
            answer: 3,
            explanation: 'stack: LIFO, s.push(5) top, s.pop() top'
          },
          {
            question: 'What is iterator in STL?',
            options: [
              'Iterator over',
              'Pointer-like object traversing containers',
              'for(auto it = v.begin(); it != v.end(); ++it)',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Iterator: traverses container, v.begin(), v.end()'
          },
          {
            question: 'What is algorithm in STL?',
            options: [
              'Algorithm concept',
              'sort, find, transform functions',
              '#include <algorithm>',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Algorithms: sort(v.begin(), v.end()), find(), transform()'
          },
          {
            question: 'What is class in C++?',
            options: [
              'Class of students',
              'User-defined type with members and methods',
              'class Name { private: int x; public: void foo(); };',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Class: blueprint for objects, members (variables), methods (functions)'
          },
          {
            question: 'What is constructor in C++?',
            options: [
              'Construction method',
              'Special member function, initializes object',
              'ClassName() { initialization }',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Constructor: called when object created, initializes members'
          },
          {
            question: 'What is destructor in C++?',
            options: [
              'Destructs object',
              'Special member function called when object destroyed',
              '~ClassName() { cleanup }',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Destructor: cleanup, releases resources, ~ClassName()'
          },
          {
            question: 'What is encapsulation in C++?',
            options: [
              'Encapsulating data',
              'private, protected, public access levels',
              'Data hiding',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Encapsulation: private (class only), protected (subclass), public (all)'
          },
          {
            question: 'What is inheritance in C++?',
            options: [
              'Inheritance concept',
              'class Child : public Parent { };',
              'Inherits parent members',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Inheritance: child extends parent, reuses parent members'
          },
          {
            question: 'What is polymorphism in C++?',
            options: [
              'Many forms',
              'virtual function overriding',
              'Same function, different behavior',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Polymorphism: virtual void foo() in parent, override in child'
          },
          {
            question: 'What is virtual function?',
            options: [
              'Virtual concept',
              'virtual keyword for dynamic dispatch',
              'Overridden in derived class',
              'All of the above'
            ],
            answer: 3,
            explanation: 'virtual: runtime polymorphism, correct function called based on object type'
          },
          {
            question: 'What is template in C++?',
            options: [
              'Template pattern',
              'Generic programming: template<typename T>',
              'Code reuse for different types',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Template: template<typename T> class Box { T data; }; generic code'
          },
          {
            question: 'What is exception handling in C++?',
            options: [
              'Exception handling',
              'try-catch-throw for error management',
              'try { throw exception(msg); } catch(exception &e) { }',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Exception: try { risky code } catch(exception &e) { handle }'
          },
          {
            question: 'What is throw?',
            options: [
              'Throwing object',
              'throw keyword to raise exception',
              'throw std::invalid_argument("error");',
              'All of the above'
            ],
            answer: 3,
            explanation: 'throw: raises exception, caught by catch block'
          },
          {
            question: 'What is catch?',
            options: [
              'Catching error',
              'catch block handles thrown exception',
              'catch(exception &e) { cout << e.what(); }',
              'All of the above'
            ],
            answer: 3,
            explanation: 'catch: catches exception type, e.what() gets message'
          },
          {
            question: 'What is try?',
            options: [
              'Trying something',
              'try block for code that might throw',
              'try { risky_operation(); }',
              'All of the above'
            ],
            answer: 3,
            explanation: 'try: surrounds code that might throw exception'
          },
          {
            question: 'What is operator overloading?',
            options: [
              'Overloading operator',
              'Redefining +, -, * etc for custom types',
              'Vector operator+(Vector &a, Vector &b);',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Overloading: operator+(Vector &a, Vector &b) for custom addition'
          },
          {
            question: 'What is new vs malloc?',
            options: [
              'Both allocate memory',
              'new is C++ (calls constructor), malloc is C',
              'new returns typed pointer',
              'All of the above'
            ],
            answer: 3,
            explanation: 'new: C++, type-safe, calls constructor; malloc: C, needs cast'
          }
        ],
        problems: [
          'Create a bank account class with deposit/withdraw',
          'Implement a vector-based dynamic array',
          'Build a tree traversal algorithm'
        ]
      },
      {
        level: 'Advanced',
        content: [
          'Smart Pointers & RAII',
          'Move Semantics & Perfect Forwarding',
          'Concurrency & Multithreading',
          'Advanced Templates & Metaprogramming',
          'Performance Optimization'
        ],
        mcqs: [
          {
            question: 'What is RAII in C++?',
            options: [
              'Random Access Initialization',
              'Resource Acquisition Is Initialization',
              'Rapid Application Interface',
              'None'
            ],
            answer: 1,
            explanation: 'RAII is a programming idiom where resources are acquired and released based on object lifetime.'
          },
          {
            question: 'What is smart pointer?',
            options: [
              'Intelligent pointer',
              'unique_ptr, shared_ptr for automatic memory management',
              'Avoids manual delete',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Smart pointers: unique_ptr (exclusive ownership), shared_ptr (reference counting)'
          },
          {
            question: 'What is unique_ptr?',
            options: [
              'Unique pointer',
              'Exclusive ownership, auto delete when out of scope',
              'std::unique_ptr<int> p(new int(5));',
              'All of the above'
            ],
            answer: 3,
            explanation: 'unique_ptr: only one owner, move semantics, auto cleanup'
          },
          {
            question: 'What is shared_ptr?',
            options: [
              'Shared pointer',
              'Multiple owners, reference counting, delete when count = 0',
              'std::shared_ptr<int> p(new int(5));',
              'All of the above'
            ],
            answer: 3,
            explanation: 'shared_ptr: multiple owners, uses ref counting for auto cleanup'
          },
          {
            question: 'What is weak_ptr?',
            options: [
              'Weak pointer',
              'Non-owning reference to shared_ptr, prevents circular references',
              'std::weak_ptr<int> wp;',
              'All of the above'
            ],
            answer: 3,
            explanation: 'weak_ptr: breaks circular dependencies without owning'
          },
          {
            question: 'What is move semantics?',
            options: [
              'Moving objects',
              'Transfer ownership instead of copying',
              'Efficient for large objects',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Move semantics: && allows stealing resources, avoids copies'
          },
          {
            question: 'What is rvalue reference?',
            options: [
              'Reference to right value',
              '&& for temporary objects',
              'Used in move semantics',
              'All of the above'
            ],
            answer: 3,
            explanation: 'rvalue reference: T&& for temporaries, enables move constructors'
          },
          {
            question: 'What is perfect forwarding?',
            options: [
              'Forwarding perfectly',
              'template<typename T> f(T&& x) preserves argument type',
              'Avoids unnecessary copies',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Perfect forwarding: std::forward<T>(x) preserves lvalue/rvalue'
          },
          {
            question: 'What is variadic templates?',
            options: [
              'Variable templates',
              'template<typename... Args> for variable arguments',
              'Args... unpacks parameters',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Variadic: template<typename... Args> void f(Args... args)'
          },
          {
            question: 'What is SFINAE?',
            options: [
              'SFINAE technique',
              'Substitution Failure Is Not An Error',
              'Enables template specialization',
              'All of the above'
            ],
            answer: 3,
            explanation: 'SFINAE: invalid substitution doesn\'t cause error, just disables template'
          },
          {
            question: 'What is constexpr?',
            options: [
              'Constant expression',
              'Evaluates at compile time',
              'constexpr int add(int a, int b) { return a+b; }',
              'All of the above'
            ],
            answer: 3,
            explanation: 'constexpr: compile-time evaluation, better performance'
          },
          {
            question: 'What is lambda in C++?',
            options: [
              'Lambda function',
              'Anonymous function: [](int x) { return x*2; }',
              'Closure with capture list',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Lambda: [captures](params) { body }, great for STL algorithms'
          },
          {
            question: 'What is thread in C++?',
            options: [
              'Thread of execution',
              'std::thread for concurrent execution',
              '#include <thread>',
              'All of the above'
            ],
            answer: 3,
            explanation: 'std::thread: std::thread t([]() { code }); t.join();'
          },
          {
            question: 'What is mutex?',
            options: [
              'Mutual exclusion',
              'std::mutex for thread synchronization',
              'Prevents race conditions',
              'All of the above'
            ],
            answer: 3,
            explanation: 'mutex: lock guards access, std::lock_guard<std::mutex> lock(m);'
          },
          {
            question: 'What is condition variable?',
            options: [
              'Condition variable',
              'std::condition_variable for thread coordination',
              'wait() and notify() methods',
              'All of the above'
            ],
            answer: 3,
            explanation: 'condition_variable: threads wait for condition, one notifies'
          },
          {
            question: 'What is atomic?',
            options: [
              'Atomic operation',
              'std::atomic<T> for thread-safe operations',
              'No locks needed',
              'All of the above'
            ],
            answer: 3,
            explanation: 'atomic: std::atomic<int> x; lock-free operations'
          },
          {
            question: 'What is decltype?',
            options: [
              'Declare type',
              'Deduces type of expression',
              'auto x = 5; decltype(x) y;',
              'All of the above'
            ],
            answer: 3,
            explanation: 'decltype: gets type of expression at compile time'
          },
          {
            question: 'What is static_cast?',
            options: [
              'Static type cast',
              'Compile-time type conversion',
              'int x = static_cast<int>(3.14);',
              'All of the above'
            ],
            answer: 3,
            explanation: 'static_cast: safe conversions, checked at compile time'
          },
          {
            question: 'What is dynamic_cast?',
            options: [
              'Dynamic type cast',
              'Runtime type conversion for polymorphic types',
              'Safe downcasting with pointer/reference',
              'All of the above'
            ],
            answer: 3,
            explanation: 'dynamic_cast: runtime check, returns null if invalid'
          },
          {
            question: 'What is type_traits?',
            options: [
              'Type traits header',
              'std::is_same<T, U>, std::enable_if',
              'Compile-time type information',
              'All of the above'
            ],
            answer: 3,
            explanation: 'type_traits: metadata about types for metaprogramming'
          },
          {
            question: 'What is inline assembly?',
            options: [
              'Inline code assembly',
              'asm("mov ...") for low-level operations',
              'Performance optimization',
              'All of the above'
            ],
            answer: 3,
            explanation: 'inline asm: write assembly within C++ for critical sections'
          },
          {
            question: 'What is copy-and-swap idiom?',
            options: [
              'Copy and swap technique',
              'Exception-safe assignment operator',
              'Swap temp with this',
              'All of the above'
            ],
            answer: 3,
            explanation: 'Copy-and-swap: temp = copy(source); swap(temp, this);'
          }
        ],
        problems: [
          'Implement unique_ptr and shared_ptr',
          'Create a thread-safe queue',
          'Build a custom memory allocator'
        ]
      }
    ],
    resources: {
      documentation: 'https://cplusplus.com/',
      practiceLinks: [
        { title: 'LeetCode C++', url: 'https://leetcode.com/problemset/all/?topicSlugs=cpp' },
        { title: 'HackerRank C++', url: 'https://www.hackerrank.com/domains/cpp' },
        { title: 'Codeforces', url: 'https://codeforces.com/' }
      ]
    }
  },
  {
    id: 'webdev',
    name: 'Web Development',
    icon: '🌐',
    color: '#FF9900',
    difficulty: 'Beginner-Intermediate',
    description: 'Frontend and Backend web development technologies',
    topics: [
      {
        level: 'Frontend Basics',
        content: [
          'HTML Structure & Semantics',
          'CSS Styling & Layouts (Flexbox, Grid)',
          'JavaScript DOM Manipulation',
          'Responsive Design',
          'Forms & Validation'
        ],
        mcqs: [
          {
            question: 'What does CSS Flexbox do?',
            options: [
              'Creates flexible box layouts',
              'Manages JavaScript functions',
              'Handles server requests',
              'None'
            ],
            answer: 0,
            explanation: 'Flexbox is a CSS layout model for creating flexible, responsive layouts with alignment control.'
          }
        ],
        problems: [
          'Build a responsive navbar',
          'Create a card-based product layout',
          'Implement a dark/light mode toggle'
        ]
      },
      {
        level: 'Frontend Advanced',
        content: [
          'React.js Fundamentals',
          'State Management (Redux)',
          'API Integration & Fetch',
          'Testing React Components',
          'Performance Optimization'
        ],
        mcqs: [
          {
            question: 'What is JSX in React?',
            options: [
              'A JavaScript extension to write HTML-like code',
              'A database language',
              'A server framework',
              'None'
            ],
            answer: 0,
            explanation: 'JSX is a syntax extension that allows writing HTML-like code in JavaScript.'
          }
        ],
        problems: [
          'Build a todo list app with React',
          'Create a weather app using API calls',
          'Implement a multi-page app with routing'
        ]
      },
      {
        level: 'Backend Basics',
        content: [
          'Node.js & Express.js',
          'REST APIs & HTTP Methods',
          'Database Design (SQL/NoSQL)',
          'Authentication & Authorization',
          'Server-Side Rendering'
        ],
        mcqs: [
          {
            question: 'What is Express.js?',
            options: [
              'A frontend framework',
              'A Node.js web application framework',
              'A database tool',
              'None'
            ],
            answer: 1,
            explanation: 'Express.js is a minimal and flexible Node.js web application framework for building APIs and web servers.'
          }
        ],
        problems: [
          'Create a RESTful API for a blog',
          'Build user authentication with JWT',
          'Implement database CRUD operations'
        ]
      }
    ],
    resources: {
      documentation: 'https://developer.mozilla.org/en-US/docs/Learn',
      practiceLinks: [
        { title: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/' },
        { title: 'Frontend Mentor', url: 'https://www.frontendmentor.io/' },
        { title: 'LeetCode Frontend', url: 'https://leetcode.com/discuss/interview-question/frontend' }
      ]
    }
  },
  {
    id: 'sql',
    name: 'SQL & Database',
    icon: '🗄️',
    color: '#336791',
    difficulty: 'Intermediate',
    description: 'Database design, querying, and management',
    topics: [
      {
        level: 'Basics',
        content: [
          'SELECT & WHERE Clauses',
          'JOIN Operations',
          'Aggregate Functions',
          'ORDER BY & GROUP BY',
          'INSERT, UPDATE, DELETE'
        ],
        mcqs: [
          {
            question: 'What is the difference between INNER JOIN and LEFT JOIN?',
            options: [
              'No difference',
              'INNER JOIN returns matched rows, LEFT JOIN includes unmatched from left table',
              'LEFT JOIN is faster',
              'None'
            ],
            answer: 1,
            explanation: 'INNER JOIN returns only rows with matches in both tables; LEFT JOIN includes all rows from left table.'
          }
        ],
        problems: [
          'Write a query to find employees earning above average',
          'Join multiple tables to get customer order details',
          'Group data by department and count employees'
        ]
      },
      {
        level: 'Intermediate',
        content: [
          'Subqueries & CTEs',
          'Indexes & Performance',
          'Transactions & ACID',
          'Normalization (1NF to 3NF)',
          'Views & Stored Procedures'
        ],
        mcqs: [
          {
            question: 'What is database normalization?',
            options: [
              'Sorting data',
              'Process of organizing data to reduce redundancy',
              'Creating backups',
              'None'
            ],
            answer: 1,
            explanation: 'Normalization is the process of structuring a database to reduce redundancy and improve data integrity.'
          }
        ],
        problems: [
          'Optimize slow queries with indexes',
          'Create a stored procedure for data retrieval',
          'Design a normalized database schema'
        ]
      },
      {
        level: 'Advanced',
        content: [
          'Query Optimization',
          'Window Functions',
          'Partitioning & Sharding',
          'Advanced Indexing',
          'NoSQL vs SQL'
        ],
        mcqs: [
          {
            question: 'What are window functions in SQL?',
            options: [
              'Functions in UI windows',
              'Functions that perform calculations on a set of rows',
              'Database backup functions',
              'None'
            ],
            answer: 1,
            explanation: 'Window functions perform calculations across a set of rows related to the current row.'
          }
        ],
        problems: [
          'Use window functions for ranking',
          'Partition data for parallel processing',
          'Optimize complex queries'
        ]
      }
    ],
    resources: {
      documentation: 'https://www.postgresql.org/docs/',
      practiceLinks: [
        { title: 'LeetCode Database', url: 'https://leetcode.com/problemset/all/?topicSlugs=database' },
        { title: 'HackerRank SQL', url: 'https://www.hackerrank.com/domains/sql' },
        { title: 'Mode Analytics SQL', url: 'https://mode.com/sql-tutorial/' }
      ]
    }
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    icon: '🏗️',
    color: '#FF6B6B',
    difficulty: 'Intermediate-Advanced',
    description: 'Core concepts for problem-solving and interviews',
    topics: [
      {
        level: 'Basics',
        content: [
          'Arrays & Linked Lists',
          'Stacks & Queues',
          'Searching & Sorting',
          'Hash Tables',
          'Recursion Basics'
        ],
        mcqs: [
          {
            question: 'What is the time complexity of binary search?',
            options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
            answer: 1,
            explanation: 'Binary search divides the search space in half each time, resulting in O(log n) time complexity.'
          }
        ],
        problems: [
          'Implement merge sort algorithm',
          'Find two numbers that add up to target',
          'Reverse a linked list'
        ]
      },
      {
        level: 'Intermediate',
        content: [
          'Trees & BST',
          'Graphs & Traversals',
          'Dynamic Programming',
          'Greedy Algorithms',
          'Bit Manipulation'
        ],
        mcqs: [
          {
            question: 'What is the difference between BFS and DFS?',
            options: [
              'No difference',
              'BFS uses queue, DFS uses stack',
              'DFS is always faster',
              'None'
            ],
            answer: 1,
            explanation: 'BFS uses a queue and explores level by level; DFS uses a stack and explores depth-first.'
          }
        ],
        problems: [
          'Find maximum path sum in binary tree',
          'Detect cycle in undirected graph',
          'Solve 0/1 knapsack problem'
        ]
      },
      {
        level: 'Advanced',
        content: [
          'Segment Trees & Fenwick Trees',
          'Tries & Suffix Arrays',
          'Network Flow Algorithms',
          'String Matching Algorithms',
          'Game Theory'
        ],
        mcqs: [
          {
            question: 'What is a segment tree used for?',
            options: [
              'Storing segments',
              'Range queries and updates efficiently',
              'Sorting segments',
              'None'
            ],
            answer: 1,
            explanation: 'Segment trees are used to efficiently answer range queries and perform range updates in O(log n).'
          }
        ],
        problems: [
          'Build a segment tree for range sum queries',
          'Implement KMP string matching algorithm',
          'Solve maximum flow problem'
        ]
      }
    ],
    resources: {
      documentation: 'https://www.geeksforgeeks.org/data-structures/',
      practiceLinks: [
        { title: 'LeetCode DSA', url: 'https://leetcode.com/' },
        { title: 'GeeksforGeeks DSA', url: 'https://www.geeksforgeeks.org/' },
        { title: 'InterviewBit', url: 'https://www.interviewbit.com/' }
      ]
    }
  }
];
