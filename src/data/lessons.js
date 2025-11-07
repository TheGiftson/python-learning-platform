// Complete Python Course - Learn Python with Giftson
// Unified course from beginner to advanced

export const lessons = [
  {
    id: 1,
    title: 'Introduction to Python & First Program',
    description: 'Start your Python journey - learn what Python is and write your first program',
    topics: [
      {
        id: 1,
        title: 'What is Python?',
        content: `# Welcome to Python Programming!

## What is Python?
Python is a high-level, interpreted programming language created by Guido van Rossum in 1991.

### Why Learn Python?
- **Easy to Learn**: Clean, readable syntax
- **Versatile**: Web development, data science, AI, automation
- **Popular**: Used by Google, Netflix, NASA, Instagram
- **Great Community**: Millions of developers worldwide
- **High Demand**: Top-paying programming skill

### Python is Used For:
- Web Development (Django, Flask)
- Data Science & Machine Learning
- Automation & Scripting
- Game Development
- Desktop Applications
- Scientific Computing

Let's start coding!`,
        starterCode: '# This is a comment\n# Comments start with #\n# They help explain your code\n\nprint("Welcome to Python!")',
        hints: [
          'Comments start with # and are ignored by Python',
          'print() displays text on the screen',
          'Text must be in quotes'
        ]
      },
      {
        id: 2,
        title: 'Your First Python Program - Hello World',
        content: `# The print() Function

The most basic Python program uses the print() function to display text.

## Syntax:
\`\`\`python
print("Hello, World!")
\`\`\`

## Multiple Prints:
\`\`\`python
print("Line 1")
print("Line 2")
print("Line 3")
\`\`\`

## Print Numbers:
\`\`\`python
print(42)
print(3.14)
\`\`\`

## Print Multiple Items:
\`\`\`python
print("My age is", 25)
print("Python", "is", "awesome!")
\`\`\`

**Assignment**: Write a program that prints your name, age, and favorite hobby on separate lines.`,
        starterCode: '# Write your first Python program\nprint("Hello, World!")\n\n# Now print your name\n\n# Print your age\n\n# Print your hobby',
        hints: [
          'Use print() for each line',
          'Put text in quotes: "text"',
          'Numbers don\'t need quotes',
          'You can print multiple items: print("Name:", "John")'
        ]
      },
      {
        id: 3,
        title: 'Print Formatting & Special Characters',
        content: `# Advanced Printing

## New Lines:
\`\`\`python
print("Line 1\\nLine 2")  # \\n creates a new line
\`\`\`

## Tabs:
\`\`\`python
print("Name:\\tJohn")  # \\t creates a tab
\`\`\`

## Multiple Lines:
\`\`\`python
print("""This is
a multi-line
string""")
\`\`\`

## Separators:
\`\`\`python
print("A", "B", "C", sep="-")  # Output: A-B-C
\`\`\`

## End Parameter:
\`\`\`python
print("Hello", end=" ")
print("World")  # Output: Hello World (same line)
\`\`\`

**Assignment**: Create a formatted receipt using print statements with tabs and new lines.`,
        starterCode: '# Create a formatted receipt\nprint("===== RECEIPT =====")\nprint("Item\\t\\tPrice")\nprint("Apple\\t\\t$1.50")\n# Add more items',
        hints: [
          'Use \\n for new lines',
          'Use \\t for tabs',
          'Use sep= to change separator',
          'Use end= to change line ending'
        ]
      }
    ]
  },
  
  {
    id: 2,
    title: 'Variables & Data Types',
    description: 'Learn to store and manipulate data using variables',
    topics: [
      {
        id: 4,
        title: 'Variables - Storing Data',
        content: `# Variables

Variables are containers for storing data values.

## Creating Variables:
\`\`\`python
name = "Alice"
age = 25
height = 5.6
is_student = True
\`\`\`

## Variable Naming Rules:
- Must start with letter or underscore
- Can contain letters, numbers, underscores
- Case-sensitive (age ≠ Age)
- Cannot use Python keywords

## Good Names:
\`\`\`python
user_name = "John"
total_price = 99.99
is_valid = True
\`\`\`

## Bad Names:
\`\`\`python
1name = "John"  # Starts with number
my-name = "John"  # Contains hyphen
class = "Python"  # Python keyword
\`\`\`

**Assignment**: Create variables for a person's profile (name, age, city, email, is_employed).`,
        starterCode: '# Create profile variables\nname = ""\nage = 0\ncity = ""\n\n# Print the profile\nprint("Name:", name)\nprint("Age:", age)\nprint("City:", city)',
        hints: [
          'Use descriptive variable names',
          'Strings use quotes',
          'Numbers don\'t use quotes',
          'Use underscores for multi-word names'
        ]
      },
      {
        id: 5,
        title: 'Data Types - Numbers',
        content: `# Numeric Data Types

Python has three numeric types:

## 1. Integers (int):
\`\`\`python
age = 25
year = 2024
negative = -10
\`\`\`

## 2. Floating Point (float):
\`\`\`python
price = 19.99
temperature = -5.5
pi = 3.14159
\`\`\`

## 3. Complex Numbers:
\`\`\`python
complex_num = 3 + 4j
\`\`\`

## Checking Type:
\`\`\`python
x = 5
print(type(x))  # <class 'int'>

y = 5.0
print(type(y))  # <class 'float'>
\`\`\`

## Type Conversion:
\`\`\`python
x = int(5.9)    # 5
y = float(5)    # 5.0
z = str(5)      # "5"
\`\`\`

**Assignment**: Create a program that converts temperatures between Celsius and Fahrenheit.`,
        starterCode: '# Temperature Converter\ncelsius = 25\n\n# Formula: F = (C * 9/5) + 32\nfahrenheit = 0  # Calculate this\n\nprint(celsius, "°C is", fahrenheit, "°F")',
        hints: [
          'Use the formula: F = (C * 9/5) + 32',
          'Multiply celsius by 9/5',
          'Then add 32',
          'Store result in fahrenheit variable'
        ]
      },
      {
        id: 6,
        title: 'Data Types - Strings',
        content: `# Strings

Strings are sequences of characters.

## Creating Strings:
\`\`\`python
name = "Alice"
message = 'Hello World'
multi = """Multiple
lines"""
\`\`\`

## String Operations:
\`\`\`python
# Concatenation
first = "John"
last = "Doe"
full = first + " " + last

# Repetition
laugh = "Ha" * 3  # "HaHaHa"

# Length
name = "Alice"
length = len(name)  # 5
\`\`\`

## String Indexing:
\`\`\`python
text = "Python"
print(text[0])   # P
print(text[-1])  # n
\`\`\`

## String Slicing:
\`\`\`python
text = "Python"
print(text[0:3])   # Pyt
print(text[2:])    # thon
print(text[:4])    # Pyth
\`\`\`

## String Methods:
\`\`\`python
text = "hello world"
print(text.upper())      # HELLO WORLD
print(text.capitalize()) # Hello world
print(text.title())      # Hello World
print(text.replace("world", "Python"))
\`\`\`

**Assignment**: Create a program that manipulates a user's name (uppercase, lowercase, initials).`,
        starterCode: '# String Manipulation\nfull_name = "john doe"\n\n# Convert to title case\ntitle_case = full_name.title()\nprint("Title Case:", title_case)\n\n# Get initials\n# Split the name and get first letter of each part\n',
        hints: [
          'Use .title() for title case',
          'Use .upper() for uppercase',
          'Use .split() to separate words',
          'Access first character with [0]'
        ]
      },
      {
        id: 7,
        title: 'Data Types - Booleans',
        content: `# Boolean Data Type

Booleans represent True or False values.

## Boolean Values:
\`\`\`python
is_student = True
is_employed = False
has_license = True
\`\`\`

## Boolean from Comparisons:
\`\`\`python
age = 18
is_adult = age >= 18  # True

score = 75
passed = score >= 60  # True
\`\`\`

## Boolean Operations:
\`\`\`python
# and - both must be True
print(True and True)   # True
print(True and False)  # False

# or - at least one must be True
print(True or False)   # True
print(False or False)  # False

# not - inverts the value
print(not True)   # False
print(not False)  # True
\`\`\`

## Practical Example:
\`\`\`python
age = 20
has_id = True
can_enter = age >= 18 and has_id
print("Can enter:", can_enter)
\`\`\`

**Assignment**: Create an eligibility checker for voting (age >= 18 and is_citizen).`,
        starterCode: '# Voting Eligibility Checker\nage = 20\nis_citizen = True\n\n# Check eligibility\ncan_vote = False  # Calculate this\n\nprint("Can vote:", can_vote)\nprint("Age requirement met:", age >= 18)\nprint("Citizenship requirement met:", is_citizen)',
        hints: [
          'Use the and operator',
          'Both conditions must be True',
          'age >= 18 checks age',
          'is_citizen checks citizenship'
        ]
      }
    ]
  },

  {
    id: 3,
    title: 'Operators & Expressions',
    description: 'Master Python operators for calculations and comparisons',
    topics: [
      {
        id: 8,
        title: 'Arithmetic Operators',
        content: `# Arithmetic Operators

Python supports all standard math operations.

## Basic Operations:
\`\`\`python
# Addition
result = 10 + 5  # 15

# Subtraction
result = 10 - 5  # 5

# Multiplication
result = 10 * 5  # 50

# Division (always returns float)
result = 10 / 3  # 3.3333...

# Floor Division (rounds down)
result = 10 // 3  # 3

# Modulus (remainder)
result = 10 % 3  # 1

# Exponentiation (power)
result = 2 ** 3  # 8
\`\`\`

## Order of Operations (PEMDAS):
\`\`\`python
result = 2 + 3 * 4  # 14 (not 20)
result = (2 + 3) * 4  # 20 (parentheses first)
\`\`\`

## Practical Examples:
\`\`\`python
# Calculate area of rectangle
length = 10
width = 5
area = length * width

# Calculate average
total = 85 + 90 + 78
average = total / 3

# Check if number is even
number = 10
is_even = number % 2 == 0
\`\`\`

**Assignment**: Create a calculator that performs all arithmetic operations on two numbers.`,
        starterCode: '# Simple Calculator\nnum1 = 10\nnum2 = 3\n\nprint("Addition:", num1 + num2)\nprint("Subtraction:", num1 - num2)\n# Add more operations\n',
        hints: [
          'Use + for addition',
          'Use - for subtraction',
          'Use * for multiplication',
          'Use / for division',
          'Use // for floor division',
          'Use % for modulus',
          'Use ** for power'
        ]
      },
      {
        id: 9,
        title: 'Comparison Operators',
        content: `# Comparison Operators

Compare values and get True/False results.

## Comparison Operators:
\`\`\`python
# Equal to
5 == 5   # True
5 == 3   # False

# Not equal to
5 != 3   # True
5 != 5   # False

# Greater than
10 > 5   # True
5 > 10   # False

# Less than
5 < 10   # True
10 < 5   # False

# Greater than or equal
10 >= 10  # True
10 >= 5   # True

# Less than or equal
5 <= 10   # True
5 <= 5    # True
\`\`\`

## String Comparisons:
\`\`\`python
"apple" == "apple"  # True
"Apple" == "apple"  # False (case-sensitive)
"apple" < "banana"  # True (alphabetical)
\`\`\`

## Chaining Comparisons:
\`\`\`python
age = 25
is_adult = 18 <= age < 65  # True
\`\`\`

**Assignment**: Create an age category classifier (child, teen, adult, senior).`,
        starterCode: '# Age Category Classifier\nage = 25\n\nis_child = age < 13\nis_teen = 13 <= age < 20\nis_adult = 20 <= age < 65\nis_senior = age >= 65\n\nprint("Child:", is_child)\nprint("Teen:", is_teen)\nprint("Adult:", is_adult)\nprint("Senior:", is_senior)',
        hints: [
          'Use < for less than',
          'Use >= for greater than or equal',
          'Chain comparisons: 13 <= age < 20',
          'Each category should be mutually exclusive'
        ]
      },
      {
        id: 10,
        title: 'Logical Operators',
        content: `# Logical Operators

Combine multiple conditions.

## The 'and' Operator:
Both conditions must be True
\`\`\`python
age = 25
has_license = True
can_drive = age >= 18 and has_license  # True
\`\`\`

## The 'or' Operator:
At least one condition must be True
\`\`\`python
is_weekend = True
is_holiday = False
can_relax = is_weekend or is_holiday  # True
\`\`\`

## The 'not' Operator:
Inverts the boolean value
\`\`\`python
is_raining = False
go_outside = not is_raining  # True
\`\`\`

## Complex Conditions:
\`\`\`python
age = 25
income = 50000
has_job = True

loan_approved = (age >= 21 and income >= 30000) or has_job
\`\`\`

## Truth Tables:
\`\`\`
AND:
True and True = True
True and False = False
False and False = False

OR:
True or True = True
True or False = True
False or False = False

NOT:
not True = False
not False = True
\`\`\`

**Assignment**: Create a movie ticket eligibility checker (age, has_ticket, not_banned).`,
        starterCode: '# Movie Ticket Checker\nage = 16\nhas_ticket = True\nis_banned = False\n\n# Check if can watch R-rated movie\ncan_watch_r_rated = age >= 17 and has_ticket and not is_banned\n\nprint("Can watch R-rated:", can_watch_r_rated)\nprint("Age requirement:", age >= 17)\nprint("Has ticket:", has_ticket)\nprint("Not banned:", not is_banned)',
        hints: [
          'Use and to combine conditions',
          'Use not to invert a boolean',
          'All conditions must be True for and',
          'At least one must be True for or'
        ]
      }
    ]
  },

  // LESSON 4: LOOPS
  {
    id: 4,
    title: 'Loops - Repeating Actions',
    description: 'Master for loops, while loops, and iteration techniques',
    topics: [
      {
        id: 11,
        title: 'For Loops',
        content: `# For Loops

Repeat code a specific number of times.

## Basic For Loop:
\`\`\`python
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4
\`\`\`

## Range with Start and Stop:
\`\`\`python
for i in range(1, 6):
    print(i)  # 1, 2, 3, 4, 5
\`\`\`

## Range with Step:
\`\`\`python
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8
\`\`\``,
        starterCode: '# Print multiplication table\nfor i in range(1, 11):\n    print(f"5 x {i} = {5 * i}")',
        hints: ['range(n) goes 0 to n-1', 'range(start, stop)', 'range(start, stop, step)']
      },
      {
        id: 12,
        title: 'While Loops',
        content: `# While Loops

Repeat while a condition is True.

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

## User Input Loop:
\`\`\`python
password = ""
while password != "secret":
    password = input("Enter password: ")
print("Access granted!")
\`\`\``,
        starterCode: '# Countdown\ncount = 10\nwhile count > 0:\n    print(count)\n    count -= 1\nprint("Blast off!")',
        hints: ['Condition checked before each iteration', 'Update variable to avoid infinite loop', 'Use break to exit']
      },
      {
        id: 13,
        title: 'Break and Continue',
        content: `# Loop Control

## Break - Exit Loop:
\`\`\`python
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4
\`\`\`

## Continue - Skip Iteration:
\`\`\`python
for i in range(5):
    if i == 2:
        continue
    print(i)  # 0, 1, 3, 4
\`\`\``,
        starterCode: '# Find first even number\nfor num in [1, 3, 5, 8, 9, 10]:\n    if num % 2 == 0:\n        print(f"Found even: {num}")\n        break',
        hints: ['break exits loop completely', 'continue skips to next iteration']
      }
    ]
  },

  // LESSON 5: LISTS
  {
    id: 5,
    title: 'Lists - Collections of Data',
    description: 'Store and manipulate multiple values with lists',
    topics: [
      {
        id: 14,
        title: 'Creating and Accessing Lists',
        content: `# Lists

Store multiple items in one variable.

\`\`\`python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]
\`\`\`

## Accessing Items:
\`\`\`python
print(fruits[0])   # apple
print(fruits[-1])  # cherry (last)
print(len(fruits)) # 3
\`\`\``,
        starterCode: 'colors = ["red", "green", "blue", "yellow"]\nprint("First:", colors[0])\nprint("Last:", colors[-1])\nprint("Total:", len(colors))\n\nfor color in colors:\n    print(color)',
        hints: ['Index starts at 0', 'Negative index from end', 'len() for length']
      },
      {
        id: 15,
        title: 'List Methods',
        content: `# List Operations

\`\`\`python
fruits = ["apple", "banana"]
fruits.append("cherry")    # Add to end
fruits.insert(0, "mango")  # Insert at position
fruits.remove("banana")    # Remove by value
fruits.pop()               # Remove last
fruits.sort()              # Sort
fruits.reverse()           # Reverse
\`\`\``,
        starterCode: 'numbers = [3, 1, 4, 1, 5, 9]\nprint("Original:", numbers)\n\nnumbers.append(2)\nprint("After append:", numbers)\n\nnumbers.sort()\nprint("After sort:", numbers)\n\nnumbers.reverse()\nprint("After reverse:", numbers)',
        hints: ['append() adds to end', 'sort() arranges in order', 'remove() deletes by value']
      },
      {
        id: 16,
        title: 'List Slicing',
        content: `# List Slicing

Get portions of a list.

\`\`\`python
numbers = [0, 1, 2, 3, 4, 5]
print(numbers[1:4])   # [1, 2, 3]
print(numbers[:3])    # [0, 1, 2]
print(numbers[3:])    # [3, 4, 5]
print(numbers[::2])   # [0, 2, 4] (every 2nd)
\`\`\``,
        starterCode: 'letters = ["a", "b", "c", "d", "e", "f"]\nprint("First 3:", letters[:3])\nprint("Last 3:", letters[-3:])\nprint("Middle:", letters[2:4])\nprint("Every 2nd:", letters[::2])',
        hints: ['[start:stop]', '[:n] first n items', '[n:] from n to end']
      }
    ]
  },

  // LESSON 6: DICTIONARIES
  {
    id: 6,
    title: 'Dictionaries - Key-Value Pairs',
    description: 'Store data with keys and values',
    topics: [
      {
        id: 17,
        title: 'Creating Dictionaries',
        content: `# Dictionaries

Store data as key-value pairs.

\`\`\`python
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

print(person["name"])  # Alice
person["age"] = 26     # Update
person["job"] = "Engineer"  # Add new
\`\`\``,
        starterCode: 'student = {\n    "name": "John",\n    "grade": "A",\n    "subjects": ["Math", "Science"]\n}\n\nprint("Name:", student["name"])\nprint("Grade:", student["grade"])\n\nstudent["age"] = 20\nprint("Updated:", student)',
        hints: ['Use {} for dictionaries', 'Access with [key]', 'Keys must be unique']
      },
      {
        id: 18,
        title: 'Dictionary Methods',
        content: `# Dictionary Operations

\`\`\`python
person = {"name": "Alice", "age": 25}

person.keys()      # Get all keys
person.values()    # Get all values
person.items()     # Get key-value pairs
person.get("name") # Safe access
\`\`\`

## Looping:
\`\`\`python
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\``,
        starterCode: 'scores = {"Math": 90, "English": 85, "Science": 92}\n\nprint("Subjects:", list(scores.keys()))\nprint("Scores:", list(scores.values()))\n\nfor subject, score in scores.items():\n    print(f"{subject}: {score}")',
        hints: ['.keys() for keys', '.values() for values', '.items() for both']
      }
    ]
  },

  // LESSON 7: FUNCTIONS
  {
    id: 7,
    title: 'Functions - Reusable Code',
    description: 'Create your own functions to organize code',
    topics: [
      {
        id: 19,
        title: 'Defining Functions',
        content: `# Functions

Create reusable blocks of code.

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")

def add(a, b):
    return a + b

greet("Alice")
result = add(5, 3)
\`\`\``,
        starterCode: 'def calculate_area(length, width):\n    area = length * width\n    return area\n\ndef greet(name):\n    print(f"Welcome, {name}!")\n\ngreet("Alice")\narea = calculate_area(5, 3)\nprint("Area:", area)',
        hints: ['def to define', 'return sends value back', 'Call with ()']
      },
      {
        id: 20,
        title: 'Function Parameters',
        content: `# Parameters and Arguments

\`\`\`python
# Default parameters
def power(base, exponent=2):
    return base ** exponent

print(power(5))      # 25
print(power(5, 3))   # 125

# Multiple returns
def min_max(numbers):
    return min(numbers), max(numbers)
\`\`\``,
        starterCode: 'def introduce(name, age, city="Unknown"):\n    print(f"I am {name}, {age} years old")\n    print(f"From {city}")\n\nintroduce("Alice", 25)\nintroduce("Bob", 30, "NYC")',
        hints: ['Default values with =', 'Required params first', 'Can return multiple values']
      }
    ]
  },

  // LESSON 8: STRING MANIPULATION
  {
    id: 8,
    title: 'Advanced String Operations',
    description: 'Master string methods and formatting',
    topics: [
      {
        id: 21,
        title: 'String Methods',
        content: `# String Methods

\`\`\`python
text = "  Hello World  "
text.strip()       # Remove whitespace
text.split()       # Split into list
text.replace("Hello", "Hi")
text.startswith("Hello")
text.endswith("World")
text.find("World") # Find position
\`\`\``,
        starterCode: 'sentence = "python is awesome"\nprint("Upper:", sentence.upper())\nprint("Title:", sentence.title())\nprint("Words:", sentence.split())\nprint("Replace:", sentence.replace("awesome", "great"))',
        hints: ['strip() removes spaces', 'split() creates list', 'Many useful methods']
      },
      {
        id: 22,
        title: 'String Formatting',
        content: `# F-Strings

Modern string formatting.

\`\`\`python
name = "Alice"
age = 25
print(f"My name is {name} and I am {age}")

# Expressions
print(f"Next year: {age + 1}")

# Formatting numbers
pi = 3.14159
print(f"Pi: {pi:.2f}")  # 3.14
\`\`\``,
        starterCode: 'name = "John"\nage = 30\nsalary = 50000\n\nprint(f"Name: {name}")\nprint(f"Age: {age}")\nprint(f"Salary: ${salary:,}")\nprint(f"In 5 years: {age + 5}")',
        hints: ['f"text {variable}"', 'Can use expressions', ':.2f for decimals']
      }
    ]
  },

  // LESSON 9: FILE HANDLING
  {
    id: 9,
    title: 'Working with Files',
    description: 'Read from and write to files',
    topics: [
      {
        id: 23,
        title: 'Reading Files',
        content: `# File Reading

\`\`\`python
# Read entire file
with open("file.txt", "r") as file:
    content = file.read()

# Read line by line
with open("file.txt", "r") as file:
    for line in file:
        print(line)
\`\`\``,
        starterCode: '# File reading demo\nprint("Reading files in Python:")\nprint("with open(\'file.txt\', \'r\') as f:")\nprint("    content = f.read()")\nprint("\\nFile automatically closes!"),',
        hints: ['with open() is safe', 'Mode "r" for reading', 'Auto closes file']
      },
      {
        id: 24,
        title: 'Writing Files',
        content: `# File Writing

\`\`\`python
# Write (overwrites)
with open("output.txt", "w") as file:
    file.write("Hello\\n")
    file.write("World")

# Append
with open("output.txt", "a") as file:
    file.write("\\nNew line")
\`\`\``,
        starterCode: '# File writing demo\ndata = ["Line 1", "Line 2", "Line 3"]\n\nprint("Writing to file:")\nfor line in data:\n    print(f"  {line}")\n\nprint("\\nUse mode \'w\' to write")\nprint("Use mode \'a\' to append")',
        hints: ['Mode "w" overwrites', 'Mode "a" appends', 'Use \\n for newline']
      }
    ]
  },

  // LESSON 10: ERROR HANDLING
  {
    id: 10,
    title: 'Exception Handling',
    description: 'Handle errors gracefully',
    topics: [
      {
        id: 25,
        title: 'Try-Except Blocks',
        content: `# Error Handling

\`\`\`python
try:
    number = int(input("Enter number: "))
    result = 10 / number
except ValueError:
    print("Invalid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\``,
        starterCode: 'try:\n    num = int("abc")\nexcept ValueError:\n    print("Error: Cannot convert to number")\n\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Error: Cannot divide by zero")\n\nprint("Program continues...")',
        hints: ['try contains risky code', 'except catches errors', 'Program continues']
      },
      {
        id: 26,
        title: 'Finally and Else',
        content: `# Complete Error Handling

\`\`\`python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Error!")
else:
    print("Success!")  # Runs if no error
finally:
    print("Always runs")  # Cleanup
\`\`\``,
        starterCode: 'def divide(a, b):\n    try:\n        result = a / b\n    except ZeroDivisionError:\n        print("Cannot divide by zero")\n        return None\n    else:\n        print("Division successful")\n        return result\n    finally:\n        print("Operation completed")\n\nprint(divide(10, 2))\nprint(divide(10, 0))',
        hints: ['else runs if no error', 'finally always runs', 'Use for cleanup']
      },
      {
        id: 27,
        title: 'Raising Exceptions',
        content: `# Raising Exceptions

Create your own errors.

\`\`\`python
def check_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age < 18:
        raise Exception("Must be 18 or older")
    return True

try:
    check_age(-5)
except ValueError as e:
    print(f"Error: {e}")
\`\`\``,
        starterCode: 'def validate_score(score):\n    if score < 0 or score > 100:\n        raise ValueError("Score must be 0-100")\n    return True\n\ntry:\n    validate_score(150)\nexcept ValueError as e:\n    print(f"Invalid: {e}")\n\ntry:\n    validate_score(85)\n    print("Valid score!")\nexcept ValueError as e:\n    print(f"Invalid: {e}")',
        hints: ['raise to create error', 'Use built-in exceptions', 'Add error messages']
      }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: 'Guided Project: To-Do List Manager',
    description: 'Build a task management system with step-by-step guidance',
    requirements: [
      'Create a menu system (Add, View, Complete, Delete, Quit)',
      'Store tasks in a list',
      'Mark tasks as complete',
      'Delete tasks by number',
      'Display all tasks with status'
    ],
    starterCode: `# To-Do List Manager - Guided Project
# Follow the hints to build this step by step!

tasks = []

def show_menu():
    print("\\n=== TO-DO LIST ===")
    print("1. Add Task")
    print("2. View Tasks")
    print("3. Complete Task")
    print("4. Delete Task")
    print("5. Quit")

# TODO: Implement the functions below

def add_task():
    # Hint: Get task from user and add to tasks list
    pass

def view_tasks():
    # Hint: Loop through tasks and display with numbers
    pass

def complete_task():
    # Hint: Mark a task as completed
    pass

def delete_task():
    # Hint: Remove task from list by index
    pass

# Main program loop
while True:
    show_menu()
    choice = input("\\nChoose option: ")
    # TODO: Call appropriate function based on choice
    if choice == "5":
        print("Goodbye!")
        break`,
    hints: [
      '**Step 1**: Implement add_task() - use input() to get task name and tasks.append()',
      '**Step 2**: Implement view_tasks() - use enumerate() to show numbered list',
      '**Step 3**: Store tasks as dictionaries: {"name": "task", "done": False}',
      '**Step 4**: Implement complete_task() - change "done" to True',
      '**Step 5**: Implement delete_task() - use tasks.pop(index)',
      '**Step 6**: In main loop, use if-elif to call functions based on choice',
      '**Bonus**: Add input validation and error handling'
    ],
    guided: true
  },
  {
    id: 2,
    title: 'Guided Project 2: Contact Book Manager',
    description: 'Build a contact management system with step-by-step guidance',
    requirements: [
      'Add new contacts (name, phone, email)',
      'View all contacts',
      'Search contacts by name',
      'Update contact information',
      'Delete contacts',
      'Save contacts to a list'
    ],
    starterCode: `# Contact Book Manager - Guided Project
# Build a simple contact management system

contacts = []

def show_menu():
    print("\\n=== CONTACT BOOK ===")
    print("1. Add Contact")
    print("2. View All Contacts")
    print("3. Search Contact")
    print("4. Update Contact")
    print("5. Delete Contact")
    print("6. Exit")

# TODO: Implement the functions below

def add_contact():
    # Hint: Get name, phone, email and add to contacts list
    pass

def view_contacts():
    # Hint: Loop through contacts and display each one
    pass

def search_contact():
    # Hint: Search by name and display matching contacts
    pass

def update_contact():
    # Hint: Find contact and update their information
    pass

def delete_contact():
    # Hint: Remove contact from list
    pass

# Main program loop
while True:
    show_menu()
    choice = input("\\nChoose option: ")
    # TODO: Call appropriate function based on choice
    if choice == "6":
        print("Goodbye!")
        break`,
    hints: [
      '**Step 1**: Store contacts as dictionaries: {"name": "John", "phone": "123", "email": "john@email.com"}',
      '**Step 2**: In add_contact(), get user input for name, phone, email',
      '**Step 3**: Append the contact dictionary to contacts list',
      '**Step 4**: In view_contacts(), use enumerate() to show numbered list',
      '**Step 5**: In search_contact(), use .lower() for case-insensitive search',
      '**Step 6**: In update_contact(), find contact by name and modify fields',
      '**Step 7**: In delete_contact(), use list.pop() or list.remove()',
      '**Step 8**: Add input validation (check for empty fields)',
      '**Bonus**: Add option to save contacts to a file'
    ],
    guided: true
  },
  {
    id: 3,
    title: 'Final Project: Student Grade Management System',
    description: 'Build a complete student management system independently (Required for certificate)',
    requirements: [
      'Create a Student class with name, ID, and grades dictionary',
      'Add new students to the system',
      'Record grades for multiple subjects (Math, English, Science, etc.)',
      'Calculate average grade for each student',
      'Display student report cards',
      'Find and display top performing students',
      'Handle errors gracefully (invalid input, student not found)',
      'Save student data to a file (optional bonus)',
      'Load student data from file on startup (optional bonus)'
    ],
    starterCode: `# Student Grade Management System - Final Project
# Build this independently to demonstrate your Python skills!

class Student:
    def __init__(self, name, student_id):
        # TODO: Initialize student with name, ID, and empty grades dict
        pass
    
    def add_grade(self, subject, grade):
        # TODO: Add a grade for a subject
        pass
    
    def get_average(self):
        # TODO: Calculate and return average of all grades
        pass
    
    def display_report(self):
        # TODO: Display student info and all grades
        pass

# TODO: Create functions to:
# - Add new student
# - Record grade for a student
# - Display all students
# - Find top students
# - Main menu system

students = []

# Your code here...`,
    hints: [
      'This is your final assessment - build it independently!',
      'Review lessons on: Classes, Dictionaries, Lists, Functions, Loops, Error Handling',
      'Test your code thoroughly before submission',
      'Make sure all requirements are met'
    ],
    guided: false,
    isFinal: true
  }
];

export const assignments = [
  {
    id: 1,
    title: 'Challenge 1: Sum Calculator',
    description: 'Create a simple program that adds two numbers and displays the result',
    type: 'coding',
    requiredLessons: 4, // Must complete first 4 lessons
    difficulty: 'Easy',
    starterCode: '# Sum Calculator\n# Ask user for two numbers and display their sum\n\n# Get first number\nnum1 = int(input("Enter first number: "))\n\n# Get second number\nnum2 = int(input("Enter second number: "))\n\n# Calculate sum\ntotal = num1 + num2\n\n# Display result\nprint("The sum is:", total)',
    hints: [
      'Use input() to get user input',
      'Convert input to integer with int()',
      'Use + operator to add numbers',
      'Use print() to show the result'
    ],
    testCases: []
  },
  {
    id: 2,
    title: 'Challenge 2: Even or Odd Checker',
    description: 'Write a program that checks if a number is even or odd',
    type: 'coding',
    requiredLessons: 7, // Must complete up to Functions
    difficulty: 'Easy',
    starterCode: '# Even or Odd Checker\n# Check if a number is even or odd\n\n# Get number from user\nnumber = int(input("Enter a number: "))\n\n# Check if even or odd\nif number % 2 == 0:\n    print(number, "is even")\nelse:\n    print(number, "is odd")',
    hints: [
      'Use % (modulus) operator to find remainder',
      'If number % 2 equals 0, it\'s even',
      'Otherwise, it\'s odd',
      'Use if-else statement'
    ],
    testCases: []
  },
  {
    id: 3,
    title: 'Challenge 3: Simple Grade Calculator',
    description: 'Create a program that converts a numeric score to a letter grade',
    type: 'coding',
    requiredLessons: 10, // Must complete all lessons
    difficulty: 'Easy',
    starterCode: '# Grade Calculator\n# Convert numeric score to letter grade\n\n# Get score from user\nscore = int(input("Enter your score (0-100): "))\n\n# Determine grade\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelif score >= 60:\n    grade = "D"\nelse:\n    grade = "F"\n\n# Display result\nprint("Your grade is:", grade)',
    hints: [
      'Use if-elif-else for multiple conditions',
      'Check from highest score to lowest',
      'A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60',
      'Use >= operator for comparisons'
    ],
    testCases: []
  },
  {
    id: 4,
    title: 'Theory Assignment 1: Python Basics',
    description: 'Test your understanding of Python fundamentals (Complete Lessons 1-3 first)',
    type: 'theory',
    requiredLessons: 3, // Must complete first 3 lessons
    questions: [
      {
        id: 1,
        question: 'What is the output of: print(type(5.0))?',
        options: ['int', 'float', 'str', 'bool'],
        correctAnswer: 1,
        points: 2
      },
      {
        id: 2,
        question: 'Which operator is used for exponentiation in Python?',
        options: ['^', '**', 'exp', 'pow'],
        correctAnswer: 1,
        points: 2
      },
      {
        id: 3,
        question: 'What does the len() function return?',
        options: ['The type of object', 'The length/size of object', 'The value of object', 'The memory address'],
        correctAnswer: 1,
        points: 2
      },
      {
        id: 4,
        question: 'Which of these is a valid variable name in Python?',
        options: ['2variable', 'my-variable', 'my_variable', 'my variable'],
        correctAnswer: 2,
        points: 2
      },
      {
        id: 5,
        question: 'What is the result of: "Hello" + "World"?',
        options: ['Hello World', 'HelloWorld', 'Error', 'Hello+World'],
        correctAnswer: 1,
        points: 2
      }
    ],
    totalPoints: 10
  },
  {
    id: 5,
    title: 'Theory Assignment 2: Control Flow & Loops',
    description: 'Test your knowledge of if statements and loops (Complete Lessons 1-5 first)',
    type: 'theory',
    requiredLessons: 5, // Must complete first 5 lessons
    questions: [
      {
        id: 1,
        question: 'What does "break" do in a loop?',
        options: ['Skips current iteration', 'Exits the loop', 'Pauses the loop', 'Restarts the loop'],
        correctAnswer: 1,
        points: 2
      },
      {
        id: 2,
        question: 'What is the output of: range(5)?',
        options: ['[1,2,3,4,5]', '[0,1,2,3,4]', '5', 'range object'],
        correctAnswer: 3,
        points: 2
      },
      {
        id: 3,
        question: 'Which keyword is used for multiple conditions?',
        options: ['else', 'elif', 'elseif', 'switch'],
        correctAnswer: 1,
        points: 2
      },
      {
        id: 4,
        question: 'What does "continue" do in a loop?',
        options: ['Exits loop', 'Skips to next iteration', 'Breaks loop', 'Does nothing'],
        correctAnswer: 1,
        points: 2
      },
      {
        id: 5,
        question: 'What is the correct syntax for a while loop?',
        options: ['while (condition):', 'while condition:', 'while: condition', 'loop while condition:'],
        correctAnswer: 1,
        points: 2
      }
    ],
    totalPoints: 10
  },
  {
    id: 6,
    title: 'Theory Assignment 3: Data Structures',
    description: 'Test your understanding of lists and dictionaries (Complete Lessons 1-7 first)',
    type: 'theory',
    requiredLessons: 7, // Must complete first 7 lessons
    questions: [
      {
        id: 1,
        question: 'How do you access the last item in a list?',
        options: ['list[last]', 'list[-1]', 'list[end]', 'list.last()'],
        correctAnswer: 1,
        points: 2
      },
      {
        id: 2,
        question: 'Which method adds an item to the end of a list?',
        options: ['add()', 'append()', 'insert()', 'push()'],
        correctAnswer: 1,
        points: 2
      },
      {
        id: 3,
        question: 'What are dictionary keys?',
        options: ['Must be numbers', 'Must be strings', 'Must be immutable', 'Can be anything'],
        correctAnswer: 2,
        points: 2
      },
      {
        id: 4,
        question: 'What does list[1:3] return?',
        options: ['Items at index 1,2,3', 'Items at index 1,2', 'Items at index 0,1,2', 'Error'],
        correctAnswer: 1,
        points: 2
      },
      {
        id: 5,
        question: 'How do you get all keys from a dictionary?',
        options: ['dict.keys()', 'dict.getKeys()', 'keys(dict)', 'dict[keys]'],
        correctAnswer: 0,
        points: 2
      }
    ],
    totalPoints: 10
  }
];

// FINAL THEORY EXAM - 50 Marks
export const theoryExam = {
  title: 'Final Theory Examination',
  description: 'Comprehensive theory test covering all Python concepts (50 marks)',
  totalMarks: 50,
  passingMarks: 45, // 90% required for certificate
  timeLimit: 60, // minutes
  requiredLessons: 10, // Must complete all lessons
  requiredAssignments: [4, 5, 6], // Must complete all 3 theory assignments
  questions: [
    // SECTION 1: Python Basics (10 marks)
    {
      id: 1,
      section: 'Python Basics',
      question: 'What is Python?',
      options: [
        'A compiled programming language',
        'An interpreted high-level programming language',
        'A database management system',
        'An operating system'
      ],
      correctAnswer: 1,
      points: 2
    },
    {
      id: 2,
      section: 'Python Basics',
      question: 'Which of the following is NOT a valid Python data type?',
      options: ['int', 'float', 'char', 'str'],
      correctAnswer: 2,
      points: 2
    },
    {
      id: 3,
      section: 'Python Basics',
      question: 'What is the output of: print(10 // 3)?',
      options: ['3.33', '3', '3.0', '4'],
      correctAnswer: 1,
      points: 2
    },
    {
      id: 4,
      section: 'Python Basics',
      question: 'Which symbol is used for comments in Python?',
      options: ['//', '/*', '#', '--'],
      correctAnswer: 2,
      points: 2
    },
    {
      id: 5,
      section: 'Python Basics',
      question: 'What does the input() function return?',
      options: ['Integer', 'Float', 'String', 'Boolean'],
      correctAnswer: 2,
      points: 2
    },

    // SECTION 2: Control Flow (10 marks)
    {
      id: 6,
      section: 'Control Flow',
      question: 'What is the correct syntax for an if statement?',
      options: ['if x > 5:', 'if (x > 5)', 'if x > 5 then:', 'if x > 5 {'],
      correctAnswer: 0,
      points: 2
    },
    {
      id: 7,
      section: 'Control Flow',
      question: 'What does "and" operator return if both conditions are True?',
      options: ['False', 'True', '1', 'None'],
      correctAnswer: 1,
      points: 2
    },
    {
      id: 8,
      section: 'Control Flow',
      question: 'Which operator checks if two values are NOT equal?',
      options: ['!==', '<>', '!=', 'not='],
      correctAnswer: 2,
      points: 2
    },
    {
      id: 9,
      section: 'Control Flow',
      question: 'What is the purpose of elif?',
      options: ['End if statement', 'Else if condition', 'Error handling', 'Loop control'],
      correctAnswer: 1,
      points: 2
    },
    {
      id: 10,
      section: 'Control Flow',
      question: 'What does "not True" evaluate to?',
      options: ['True', 'False', '0', 'Error'],
      correctAnswer: 1,
      points: 2
    },

    // SECTION 3: Loops (8 marks)
    {
      id: 11,
      section: 'Loops',
      question: 'How many times does this loop run? for i in range(5):',
      options: ['4', '5', '6', 'Infinite'],
      correctAnswer: 1,
      points: 2
    },
    {
      id: 12,
      section: 'Loops',
      question: 'What is the difference between break and continue?',
      options: [
        'No difference',
        'break exits loop, continue skips iteration',
        'continue exits loop, break skips iteration',
        'Both exit the loop'
      ],
      correctAnswer: 1,
      points: 2
    },
    {
      id: 13,
      section: 'Loops',
      question: 'What does range(2, 10, 2) generate?',
      options: ['[2,4,6,8,10]', '[2,4,6,8]', '[2,3,4,5,6,7,8,9]', '[0,2,4,6,8]'],
      correctAnswer: 1,
      points: 2
    },
    {
      id: 14,
      section: 'Loops',
      question: 'When should you use a while loop instead of a for loop?',
      options: [
        'When you know exact iterations',
        'When condition-based repetition is needed',
        'Never, for is always better',
        'Only for infinite loops'
      ],
      correctAnswer: 1,
      points: 2
    },

    // SECTION 4: Data Structures (10 marks)
    {
      id: 15,
      section: 'Data Structures',
      question: 'Which data structure is ordered and mutable?',
      options: ['Tuple', 'Set', 'List', 'String'],
      correctAnswer: 2,
      points: 2
    },
    {
      id: 16,
      section: 'Data Structures',
      question: 'What does list.pop() do?',
      options: [
        'Adds item to end',
        'Removes and returns last item',
        'Sorts the list',
        'Clears the list'
      ],
      correctAnswer: 1,
      points: 2
    },
    {
      id: 17,
      section: 'Data Structures',
      question: 'How do you create an empty dictionary?',
      options: ['dict[]', '{}', 'dict()', 'Both {} and dict()'],
      correctAnswer: 3,
      points: 2
    },
    {
      id: 18,
      section: 'Data Structures',
      question: 'What is list slicing?',
      options: [
        'Deleting a list',
        'Extracting portion of list',
        'Sorting a list',
        'Combining lists'
      ],
      correctAnswer: 1,
      points: 2
    },
    {
      id: 19,
      section: 'Data Structures',
      question: 'Which method returns all values from a dictionary?',
      options: ['dict.values()', 'dict.getValues()', 'values(dict)', 'dict.vals()'],
      correctAnswer: 0,
      points: 2
    },

    // SECTION 5: Functions (6 marks)
    {
      id: 20,
      section: 'Functions',
      question: 'What keyword is used to define a function?',
      options: ['function', 'def', 'func', 'define'],
      correctAnswer: 1,
      points: 2
    },
    {
      id: 21,
      section: 'Functions',
      question: 'What does return do in a function?',
      options: [
        'Prints output',
        'Sends value back to caller',
        'Ends program',
        'Creates variable'
      ],
      correctAnswer: 1,
      points: 2
    },
    {
      id: 22,
      section: 'Functions',
      question: 'What are default parameters?',
      options: [
        'Required parameters',
        'Parameters with preset values',
        'First parameter',
        'Return values'
      ],
      correctAnswer: 1,
      points: 2
    },

    // SECTION 6: Error Handling (6 marks)
    {
      id: 23,
      section: 'Error Handling',
      question: 'What is the purpose of try-except?',
      options: [
        'Speed up code',
        'Handle errors gracefully',
        'Test code',
        'Debug code'
      ],
      correctAnswer: 1,
      points: 2
    },
    {
      id: 24,
      section: 'Error Handling',
      question: 'When does the finally block execute?',
      options: [
        'Only if error occurs',
        'Only if no error',
        'Always',
        'Never'
      ],
      correctAnswer: 2,
      points: 2
    },
    {
      id: 25,
      section: 'Error Handling',
      question: 'What keyword is used to manually raise an exception?',
      options: ['throw', 'raise', 'error', 'exception'],
      correctAnswer: 1,
      points: 2
    }
  ]
};
