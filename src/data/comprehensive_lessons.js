// Comprehensive Python Course - Learn Python with Giftson
// Based on approved professional syllabus

export const comprehensiveLessons = [
  // MODULE 1: PYTHON FUNDAMENTALS
  {
    id: 1,
    level: 'beginner',
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
    level: 'beginner',
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
    level: 'beginner',
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
  }
];

// Note: This is just the first 3 lessons with 10 topics
// The complete course will have 33 lessons with 100+ topics
// Each lesson includes theory, practical examples, and assignments
