#!/usr/bin/env python3
"""
Generate comprehensive lessons.js file for Learn Python with Giftson
Complete Python course from basics to advanced in one unified flow
"""

lessons_content = """// Complete Python Course - Learn Python with Giftson
// Unified course from beginner to advanced - no artificial level divisions

export const lessons = [
  {
    id: 1,
    title: 'Python Basics - Getting Started',
    description: 'Start your Python journey - first programs, variables, and data types',
    topics: [
      {
        id: 1,
        title: 'Hello World - Your First Program',
        content: `# Welcome to Python!

Python is easy to learn and powerful. Let's write your first program!

## The print() Function
\`\`\`python
print("Hello, World!")
\`\`\`

## Multiple Prints
\`\`\`python
print("Line 1")
print("Line 2")
\`\`\``,
        starterCode: 'print("Hello, World!")\\n\\nprint("Welcome to Python!")',
        hints: ['Use print() to display text', 'Text goes in quotes']
      },
      {
        id: 2,
        title: 'Variables and Data Types',
        content: `# Variables

Store data in variables:

\`\`\`python
name = "Alice"
age = 25
price = 19.99
is_student = True
\`\`\``,
        starterCode: 'name = "Your Name"\\nage = 0\\nprint("My name is", name)\\nprint("I am", age, "years old")',
        hints: ['Variables store data', 'Strings use quotes', 'Numbers don\\'t need quotes']
      },
      {
        id: 3,
        title: 'Numbers and Math Operations',
        content: `# Math in Python

\`\`\`python
result = 10 + 5   # Addition
result = 10 - 5   # Subtraction  
result = 10 * 5   # Multiplication
result = 10 / 5   # Division
result = 10 ** 2  # Power
result = 10 % 3   # Remainder
\`\`\``,
        starterCode: 'num1 = 10\\nnum2 = 3\\nprint("Sum:", num1 + num2)\\nprint("Product:", num1 * num2)\\nprint("Division:", num1 / num2)',
        hints: ['Use + - * / for basic math', 'Use ** for power', 'Use % for remainder']
      },
      {
        id: 4,
        title: 'Strings and Text',
        content: `# Working with Strings

\`\`\`python
text = "Python"
print(text.upper())      # PYTHON
print(text.lower())      # python
print(len(text))         # 6
print(text + " rocks!")  # Python rocks!
\`\`\``,
        starterCode: 'name = "john doe"\\nprint(name.title())\\nprint(name.upper())\\nprint("Length:", len(name))',
        hints: ['Use .upper() .lower() .title()', 'Use + to join strings', 'len() gets length']
      },
      {
        id: 5,
        title: 'Getting User Input',
        content: `# User Input

\`\`\`python
name = input("Enter your name: ")
age = int(input("Enter age: "))
print("Hello", name)
\`\`\``,
        starterCode: 'name = input("What is your name? ")\\nage = input("How old are you? ")\\nprint("Hello", name)\\nprint("You are", age, "years old")',
        hints: ['input() gets user input', 'Always returns a string', 'Use int() to convert to number']
      }
    ]
  },
  {
    id: 2,
    title: 'Control Flow - Making Decisions',
    description: 'Learn if statements, comparisons, and logical operations',
    topics: [
      {
        id: 6,
        title: 'If Statements',
        content: `# Conditional Logic

\`\`\`python
age = 18
if age >= 18:
    print("Adult")
else:
    print("Minor")
\`\`\``,
        starterCode: 'age = 20\\nif age >= 18:\\n    print("You can vote")\\nelse:\\n    print("Too young to vote")',
        hints: ['Use if for conditions', 'Indent code inside if', 'Use else for alternative']
      },
      {
        id: 7,
        title: 'Elif and Multiple Conditions',
        content: `# Multiple Conditions

\`\`\`python
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")
\`\`\``,
        starterCode: 'score = 75\\nif score >= 90:\\n    grade = "A"\\nelif score >= 80:\\n    grade = "B"\\nelif score >= 70:\\n    grade = "C"\\nelse:\\n    grade = "F"\\nprint("Grade:", grade)',
        hints: ['Use elif for multiple conditions', 'Conditions checked in order', 'First true condition wins']
      },
      {
        id: 8,
        title: 'Logical Operators - and, or, not',
        content: `# Combining Conditions

\`\`\`python
age = 25
has_license = True

# and - both must be True
can_drive = age >= 18 and has_license

# or - at least one True
can_enter = age >= 21 or has_ticket

# not - inverts boolean
is_not_banned = not is_banned
\`\`\``,
        starterCode: 'age = 20\\nhas_id = True\\nis_citizen = True\\n\\ncan_vote = age >= 18 and is_citizen\\nprint("Can vote:", can_vote)\\n\\ncan_enter_club = age >= 21 or has_id\\nprint("Can enter club:", can_enter_club)',
        hints: ['and requires both True', 'or requires at least one True', 'not inverts the value']
      }
    ]
  },
  {
    id: 3,
    title: 'Loops - Repeating Actions',
    description: 'Master for loops, while loops, and iteration',
    topics: [
      {
        id: 9,
        title: 'For Loops',
        content: `# For Loops

\`\`\`python
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for i in range(1, 6):
    print(i)  # 1, 2, 3, 4, 5
\`\`\``,
        starterCode: 'for i in range(1, 11):\\n    print("Number:", i)\\n\\nfor i in range(5):\\n    print("*" * i)',
        hints: ['range(n) goes from 0 to n-1', 'range(start, stop) for custom range', 'Indent code inside loop']
      },
      {
        id: 10,
        title: 'While Loops',
        content: `# While Loops

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\``,
        starterCode: 'count = 1\\nwhile count <= 10:\\n    print(count)\\n    count += 1\\n\\nprint("Done!")',
        hints: ['while repeats while condition is True', 'Update variable to avoid infinite loop', 'Use break to exit early']
      },
      {
        id: 11,
        title: 'Break and Continue',
        content: `# Loop Control

\`\`\`python
# break - exit loop
for i in range(10):
    if i == 5:
        break
    print(i)

# continue - skip to next iteration
for i in range(5):
    if i == 2:
        continue
    print(i)
\`\`\``,
        starterCode: 'for i in range(1, 11):\\n    if i == 5:\\n        print("Found 5!")\\n        break\\n    print(i)\\n\\nfor i in range(10):\\n    if i % 2 == 0:\\n        continue\\n    print("Odd:", i)',
        hints: ['break exits the loop', 'continue skips to next iteration', 'Useful for search and filtering']
      }
    ]
  },
  {
    id: 4,
    title: 'Lists - Working with Collections',
    description: 'Store and manipulate multiple values with lists',
    topics: [
      {
        id: 12,
        title: 'Creating and Accessing Lists',
        content: `# Lists

\`\`\`python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # apple
print(fruits[-1]) # cherry (last item)

numbers = [1, 2, 3, 4, 5]
print(len(numbers))  # 5
\`\`\``,
        starterCode: 'fruits = ["apple", "banana", "orange", "grape"]\\nprint("First:", fruits[0])\\nprint("Last:", fruits[-1])\\nprint("Count:", len(fruits))\\n\\nfor fruit in fruits:\\n    print(fruit)',
        hints: ['Lists use square brackets []', 'Index starts at 0', 'Negative index counts from end']
      },
      {
        id: 13,
        title: 'List Methods - Add, Remove, Sort',
        content: `# List Operations

\`\`\`python
fruits = ["apple", "banana"]
fruits.append("cherry")      # Add to end
fruits.insert(0, "mango")    # Insert at position
fruits.remove("banana")      # Remove by value
fruits.pop()                 # Remove last
fruits.sort()                # Sort alphabetically
\`\`\``,
        starterCode: 'numbers = [3, 1, 4, 1, 5]\\nprint("Original:", numbers)\\n\\nnumbers.append(9)\\nprint("After append:", numbers)\\n\\nnumbers.sort()\\nprint("After sort:", numbers)\\n\\nnumbers.remove(1)\\nprint("After remove:", numbers)',
        hints: ['append() adds to end', 'remove() deletes by value', 'sort() arranges in order']
      },
      {
        id: 14,
        title: 'List Comprehensions',
        content: `# List Comprehensions

Create lists in one line:

\`\`\`python
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
\`\`\``,
        starterCode: 'numbers = [1, 2, 3, 4, 5]\\nsquares = [x**2 for x in numbers]\\nprint("Squares:", squares)\\n\\nevens = [x for x in range(20) if x % 2 == 0]\\nprint("Evens:", evens)',
        hints: ['Syntax: [expression for item in list]', 'Add if for filtering', 'More concise than loops']
      }
    ]
  },
  {
    id: 5,
    title: 'Dictionaries - Key-Value Pairs',
    description: 'Store data with keys and values',
    topics: [
      {
        id: 15,
        title: 'Creating and Using Dictionaries',
        content: `# Dictionaries

\`\`\`python
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

print(person["name"])  # Alice
person["age"] = 26     # Update value
\`\`\``,
        starterCode: 'student = {\\n    "name": "John",\\n    "age": 20,\\n    "grade": "A",\\n    "subjects": ["Math", "Science"]\\n}\\n\\nprint("Name:", student["name"])\\nprint("Grade:", student["grade"])\\n\\nstudent["age"] = 21\\nprint("Updated age:", student["age"])',
        hints: ['Use curly braces {}', 'Access with [key]', 'Keys must be unique']
      },
      {
        id: 16,
        title: 'Dictionary Methods',
        content: `# Dictionary Operations

\`\`\`python
person = {"name": "Alice", "age": 25}

person.keys()      # Get all keys
person.values()    # Get all values
person.items()     # Get key-value pairs
person.get("name") # Safe access
\`\`\``,
        starterCode: 'scores = {"Math": 90, "English": 85, "Science": 92}\\n\\nprint("Subjects:", list(scores.keys()))\\nprint("Scores:", list(scores.values()))\\n\\nfor subject, score in scores.items():\\n    print(f"{subject}: {score}")',
        hints: ['.keys() gets keys', '.values() gets values', '.items() gets both']
      }
    ]
  },
  {
    id: 6,
    title: 'Functions - Reusable Code',
    description: 'Create your own functions to organize code',
    topics: [
      {
        id: 17,
        title: 'Defining Functions',
        content: `# Functions

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")

def add(a, b):
    return a + b

result = add(5, 3)
\`\`\``,
        starterCode: 'def greet(name):\\n    print(f"Hello, {name}!")\\n\\ndef calculate_area(length, width):\\n    return length * width\\n\\ngreet("Alice")\\narea = calculate_area(5, 3)\\nprint("Area:", area)',
        hints: ['Use def to define function', 'return sends value back', 'Call function with ()']
      },
      {
        id: 18,
        title: 'Function Parameters and Arguments',
        content: `# Parameters

\`\`\`python
def power(base, exponent=2):
    return base ** exponent

print(power(5))      # 25 (uses default)
print(power(5, 3))   # 125
\`\`\``,
        starterCode: 'def introduce(name, age, city="Unknown"):\\n    print(f"I am {name}, {age} years old")\\n    print(f"I live in {city}")\\n\\nintroduce("Alice", 25)\\nintroduce("Bob", 30, "New York")',
        hints: ['Parameters can have default values', 'Required params come first', 'Call with or without defaults']
      },
      {
        id: 19,
        title: 'Lambda Functions',
        content: `# Lambda Functions

Short anonymous functions:

\`\`\`python
square = lambda x: x**2
add = lambda a, b: a + b

numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x**2, numbers))
\`\`\``,
        starterCode: 'square = lambda x: x**2\\nprint(square(5))\\n\\nnumbers = [1, 2, 3, 4, 5]\\nsquared = list(map(lambda x: x**2, numbers))\\nprint("Squared:", squared)\\n\\nevens = list(filter(lambda x: x % 2 == 0, numbers))\\nprint("Evens:", evens)',
        hints: ['lambda for short functions', 'Syntax: lambda args: expression', 'Useful with map, filter']
      }
    ]
  },
  {
    id: 7,
    title: 'File Handling',
    description: 'Read from and write to files',
    topics: [
      {
        id: 20,
        title: 'Reading Files',
        content: `# Reading Files

\`\`\`python
with open("file.txt", "r") as file:
    content = file.read()
    print(content)

# Read line by line
with open("file.txt", "r") as file:
    for line in file:
        print(line)
\`\`\``,
        starterCode: '# Note: This is a demo - actual file operations need real files\\n\\n# Simulated file reading\\nlines = ["Line 1", "Line 2", "Line 3"]\\nfor line in lines:\\n    print(line)\\n\\nprint("\\nIn real code:")\\nprint("with open(\\'file.txt\\', \\'r\\') as f:")\\nprint("    content = f.read()")',
        hints: ['Use with open() for safe file handling', 'Mode "r" for reading', 'File closes automatically']
      },
      {
        id: 21,
        title: 'Writing Files',
        content: `# Writing Files

\`\`\`python
with open("output.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("Python is awesome!")

# Append to file
with open("output.txt", "a") as file:
    file.write("\\nNew line")
\`\`\``,
        starterCode: '# File writing demo\\ndata = ["Line 1", "Line 2", "Line 3"]\\n\\nprint("Writing to file:")\\nfor line in data:\\n    print(f"  {line}")\\n\\nprint("\\nIn real code:")\\nprint("with open(\\'file.txt\\', \\'w\\') as f:")\\nprint("    f.write(line)")',
        hints: ['Mode "w" overwrites file', 'Mode "a" appends', 'Use \\n for new lines']
      }
    ]
  },
  {
    id: 8,
    title: 'Error Handling',
    description: 'Handle errors gracefully with try-except',
    topics: [
      {
        id: 22,
        title: 'Try-Except Blocks',
        content: `# Error Handling

\`\`\`python
try:
    number = int(input("Enter number: "))
    result = 10 / number
    print(result)
except ValueError:
    print("Invalid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\``,
        starterCode: 'try:\\n    num = int("abc")\\n    print(num)\\nexcept ValueError:\\n    print("Error: Cannot convert to number")\\n\\ntry:\\n    result = 10 / 0\\nexcept ZeroDivisionError:\\n    print("Error: Cannot divide by zero")\\n\\nprint("Program continues...")',
        hints: ['try contains risky code', 'except catches errors', 'Program continues after except']
      },
      {
        id: 23,
        title: 'Finally and Else',
        content: `# Complete Error Handling

\`\`\`python
try:
    file = open("data.txt")
    data = file.read()
except FileNotFoundError:
    print("File not found")
else:
    print("File read successfully")
finally:
    print("Cleanup code here")
\`\`\``,
        starterCode: 'def divide(a, b):\\n    try:\\n        result = a / b\\n    except ZeroDivisionError:\\n        print("Cannot divide by zero")\\n        return None\\n    else:\\n        print("Division successful")\\n        return result\\n    finally:\\n        print("Operation completed")\\n\\nprint(divide(10, 2))\\nprint(divide(10, 0))',
        hints: ['else runs if no error', 'finally always runs', 'Use for cleanup']
      }
    ]
  },
  {
    id: 9,
    title: 'Object-Oriented Programming',
    description: 'Create classes and objects',
    topics: [
      {
        id: 24,
        title: 'Classes and Objects',
        content: `# Classes

\`\`\`python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        print(f"Hi, I'm {self.name}")

person = Person("Alice", 25)
person.greet()
\`\`\``,
        starterCode: 'class Dog:\\n    def __init__(self, name, breed):\\n        self.name = name\\n        self.breed = breed\\n    \\n    def bark(self):\\n        print(f"{self.name} says Woof!")\\n\\ndog1 = Dog("Buddy", "Golden Retriever")\\ndog1.bark()\\nprint(f"{dog1.name} is a {dog1.breed}")',
        hints: ['__init__ is constructor', 'self refers to instance', 'Methods are functions in class']
      },
      {
        id: 25,
        title: 'Inheritance',
        content: `# Inheritance

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"
\`\`\``,
        starterCode: 'class Vehicle:\\n    def __init__(self, brand):\\n        self.brand = brand\\n    \\n    def info(self):\\n        return f"Vehicle: {self.brand}"\\n\\nclass Car(Vehicle):\\n    def __init__(self, brand, model):\\n        super().__init__(brand)\\n        self.model = model\\n    \\n    def info(self):\\n        return f"Car: {self.brand} {self.model}"\\n\\ncar = Car("Toyota", "Camry")\\nprint(car.info())',
        hints: ['Child class inherits from parent', 'super() calls parent method', 'Can override methods']
      }
    ]
  },
  {
    id: 10,
    title: 'Working with APIs and JSON',
    description: 'Fetch data from the internet',
    topics: [
      {
        id: 26,
        title: 'JSON Data Format',
        content: `# JSON

\`\`\`python
import json

data = {
    "name": "Alice",
    "age": 25,
    "skills": ["Python", "JavaScript"]
}

json_string = json.dumps(data)
parsed_data = json.loads(json_string)
\`\`\``,
        starterCode: 'import json\\n\\nperson = {\\n    "name": "John",\\n    "age": 30,\\n    "city": "New York"\\n}\\n\\njson_str = json.dumps(person, indent=2)\\nprint("JSON String:")\\nprint(json_str)\\n\\nparsed = json.loads(json_str)\\nprint("\\nParsed:", parsed["name"])',
        hints: ['json.dumps() converts to JSON string', 'json.loads() parses JSON', 'JSON is text format']
      },
      {
        id: 27,
        title: 'Making API Requests',
        content: `# API Requests

\`\`\`python
import requests

response = requests.get("https://api.example.com/data")
data = response.json()
print(data)
\`\`\`

Note: requests library needs to be installed:
pip install requests`,
        starterCode: '# API Request Demo\\n# In real code, use: import requests\\n\\nprint("API Request Example:")\\nprint("response = requests.get(url)")\\nprint("data = response.json()")\\nprint("\\nThis fetches data from the internet")\\nprint("You can then process the JSON data")',
        hints: ['requests.get() fetches data', 'response.json() parses JSON', 'Check response.status_code']
      }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: 'Calculator Program',
    description: 'Build a calculator that performs basic operations',
    requirements: [
      'Accept two numbers from user',
      'Perform addition, subtraction, multiplication, division',
      'Handle division by zero',
      'Loop until user wants to quit'
    ],
    starterCode: 'print("Calculator Program")\\n\\n# Get two numbers\\nnum1 = float(input("Enter first number: "))\\nnum2 = float(input("Enter second number: "))\\n\\n# TODO: Implement operations',
    hints: ['Use input() to get numbers', 'Convert to float', 'Use if-elif for operations', 'Use try-except for errors']
  },
  {
    id: 2,
    title: 'To-Do List Manager',
    description: 'Create a program to manage tasks',
    requirements: [
      'Add new tasks',
      'View all tasks',
      'Mark tasks as complete',
      'Delete tasks',
      'Save to file (optional)'
    ],
    starterCode: 'tasks = []\\n\\nprint("To-Do List Manager")\\n\\n# TODO: Implement menu and functions',
    hints: ['Use a list to store tasks', 'Create functions for each operation', 'Use a while loop for menu']
  },
  {
    id: 3,
    title: 'Final Project - Student Grade System',
    description: 'Complete grade management system (Required for certificate)',
    requirements: [
      'Store student information (name, ID, grades)',
      'Add new students',
      'Record grades for multiple subjects',
      'Calculate average grade',
      'Display student report cards',
      'Find top performing students',
      'Use classes for Student',
      'Handle errors properly',
      'Save/load data from file'
    ],
    starterCode: 'class Student:\\n    def __init__(self, name, student_id):\\n        self.name = name\\n        self.student_id = student_id\\n        self.grades = {}\\n    \\n    # TODO: Add methods\\n\\n# TODO: Implement the system',
    hints: [
      'Create Student class with methods',
      'Use dictionary for grades',
      'Calculate average from grades.values()',
      'Use file handling to save data',
      'Add error handling for invalid input'
    ]
  }
];

export const assignments = [
  {
    id: 1,
    title: 'FizzBuzz Challenge',
    description: 'Print numbers 1-100, but for multiples of 3 print "Fizz", for 5 print "Buzz", for both print "FizzBuzz"',
    testCases: [
      { input: 3, expected: 'Fizz' },
      { input: 5, expected: 'Buzz' },
      { input: 15, expected: 'FizzBuzz' },
      { input: 7, expected: '7' }
    ]
  },
  {
    id: 2,
    title: 'Palindrome Checker',
    description: 'Check if a word reads the same forwards and backwards',
    testCases: [
      { input: 'racecar', expected: true },
      { input: 'hello', expected: false },
      { input: 'madam', expected: true }
    ]
  }
];
"""

# Write to file
output_file = 'src/data/lessons.js'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(lessons_content)

print(f"[OK] Created {output_file}")
print(f"[OK] 10 Lessons with 27 topics")
print(f"[OK] 3 Projects (including final assessment)")
print(f"[OK] 2 Assignments")
print("[OK] Complete Python course from basics to advanced!")
