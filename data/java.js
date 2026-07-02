window.quizData = window.quizData || {};
window.quizData.java = [
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Java is which type of language?",
    "options": [
      "Procedural only",
      "Assembly",
      "Functional only",
      "Object-Oriented"
    ],
    "answer": 3,
    "explanation": "Java follows OOP principles: encapsulation, inheritance, polymorphism, abstraction."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JVM stands for?",
    "options": [
      "Java Variable Manager",
      "Java Visual Maker",
      "Java Virtual Machine",
      "Java Version Module"
    ],
    "answer": 2,
    "explanation": "JVM executes Java bytecode on any platform."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JDK includes?",
    "options": [
      "JRE + development tools (compiler, debugger)",
      "Only JVM",
      "Only editor",
      "Only libraries"
    ],
    "answer": 0,
    "explanation": "JDK is the full development kit."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JRE includes?",
    "options": [
      "Only source code",
      "Only compiler",
      "Only debugger",
      "JVM + core libraries"
    ],
    "answer": 3,
    "explanation": "JRE is needed to run Java applications."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Encapsulation is achieved by?",
    "options": [
      "Public fields",
      "Private fields with public getters/setters",
      "Abstract classes",
      "Static methods only"
    ],
    "answer": 1,
    "explanation": "Data hiding protects internal state."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Inheritance allows?",
    "options": [
      "A class to inherit properties of another class",
      "Creating objects",
      "Handling exceptions",
      "Thread creation"
    ],
    "answer": 0,
    "explanation": "Child class extends parent class."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Polymorphism means?",
    "options": [
      "Same method behaves differently based on context",
      "Static binding always",
      "One method one behavior",
      "No methods"
    ],
    "answer": 0,
    "explanation": "Achieved via overloading and overriding."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Abstraction is implemented using?",
    "options": [
      "Loops",
      "Abstract classes and interfaces",
      "Variables",
      "Concrete classes only"
    ],
    "answer": 1,
    "explanation": "Hides implementation, shows only functionality."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Method overloading is?",
    "options": [
      "Different classes",
      "Same method name with different parameters",
      "Different return type only",
      "Same name same parameters"
    ],
    "answer": 1,
    "explanation": "Compile-time (static) polymorphism."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Method overriding is?",
    "options": [
      "Different method name",
      "Static methods",
      "Same class different params",
      "Child class redefines parent method with same signature"
    ],
    "answer": 3,
    "explanation": "Runtime (dynamic) polymorphism."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Constructor is called when?",
    "options": [
      "Object is created using new keyword",
      "Variable is declared",
      "Method is called",
      "Class is loaded"
    ],
    "answer": 0,
    "explanation": "Constructors initialize object state."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Interface in Java contains?",
    "options": [
      "Main method",
      "Abstract methods (and default/static in Java 8+)",
      "Instance variables",
      "Constructors"
    ],
    "answer": 1,
    "explanation": "Interface defines a contract for implementing classes."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "ArrayList vs LinkedList: random access?",
    "options": [
      "ArrayList is O(1), LinkedList is O(n)",
      "Both O(1)",
      "LinkedList is faster",
      "Both O(n)"
    ],
    "answer": 0,
    "explanation": "ArrayList uses contiguous array; LinkedList traverses nodes."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "HashMap allows?",
    "options": [
      "No nulls",
      "One null key and multiple null values",
      "Only null values",
      "Multiple null keys"
    ],
    "answer": 1,
    "explanation": "HashMap permits one null key in its implementation."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "HashSet stores?",
    "options": [
      "Duplicates allowed",
      "Unique elements only, no duplicates",
      "Key-value pairs",
      "Sorted elements"
    ],
    "answer": 1,
    "explanation": "Internally uses HashMap; add returns false for duplicates."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "TreeMap stores keys in?",
    "options": [
      "Insertion order",
      "Random order",
      "Reverse order",
      "Sorted (natural) order"
    ],
    "answer": 3,
    "explanation": "Red-black tree implementation maintains sorted keys."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "PriorityQueue orders elements by?",
    "options": [
      "Alphabetical only",
      "Natural ordering or custom Comparator",
      "Insertion order",
      "Random"
    ],
    "answer": 1,
    "explanation": "Min-heap by default in Java."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "try-catch-finally: finally block runs?",
    "options": [
      "Always (except System.exit)",
      "Only on success",
      "Never",
      "Only on exception"
    ],
    "answer": 0,
    "explanation": "Finally ensures cleanup code executes."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Checked exceptions are?",
    "options": [
      "OS-level errors",
      "Verified at compile time",
      "Runtime only",
      "Never checked"
    ],
    "answer": 1,
    "explanation": "Must be caught or declared with throws."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Custom exception extends?",
    "options": [
      "Exception or RuntimeException",
      "Object",
      "String",
      "Thread"
    ],
    "answer": 0,
    "explanation": "Custom exceptions inherit from exception hierarchy."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "throw vs throws?",
    "options": [
      "throws catches exception",
      "Same thing",
      "throw creates exception; throws declares it in method signature",
      "throw is for classes"
    ],
    "answer": 2,
    "explanation": "throw is used in body; throws in declaration."
  },
  {
    "subject": "Java",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "String is immutable in Java because?",
    "options": [
      "Its value cannot be changed after creation",
      "It is final class",
      "It uses char array",
      "It has no methods"
    ],
    "answer": 0,
    "explanation": "String pool and security require immutability."
  },
  {
    "subject": "Java",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "StringBuilder vs StringBuffer?",
    "options": [
      "Both thread-safe",
      "StringBuffer is faster",
      "Both not thread-safe",
      "StringBuilder is not thread-safe but faster"
    ],
    "answer": 3,
    "explanation": "StringBuffer is synchronized; StringBuilder is not."
  },
  {
    "subject": "Java",
    "topic": "Multithreading",
    "difficulty": "Easy",
    "question": "Thread can be created by?",
    "options": [
      "Only Runnable",
      "Only extending Thread",
      "Using String class",
      "Extending Thread class or implementing Runnable"
    ],
    "answer": 3,
    "explanation": "Two standard approaches to multithreading."
  },
  {
    "subject": "Java",
    "topic": "Multithreading",
    "difficulty": "Medium",
    "question": "synchronized keyword ensures?",
    "options": [
      "Thread is stopped",
      "Only one thread accesses block/method at a time",
      "Memory is freed",
      "All threads run simultaneously"
    ],
    "answer": 1,
    "explanation": "Mutual exclusion for thread safety."
  },
  {
    "subject": "Java",
    "topic": "Multithreading",
    "difficulty": "Medium",
    "question": "Executor framework provides?",
    "options": [
      "File handling",
      "Thread pool management",
      "Network calls",
      "Database access"
    ],
    "answer": 1,
    "explanation": "Manages thread lifecycle efficiently."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Lambda expression syntax?",
    "options": [
      "def func():",
      "(parameters) -> expression/body",
      "function(){}",
      "method => param"
    ],
    "answer": 1,
    "explanation": "Java 8 functional programming feature."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Stream API is used for?",
    "options": [
      "Network streaming",
      "File I/O streaming",
      "Functional-style operations on collections",
      "Audio streaming"
    ],
    "answer": 2,
    "explanation": "map, filter, reduce operations on data."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Functional interface has?",
    "options": [
      "No methods",
      "Only default methods",
      "Exactly one abstract method",
      "Multiple abstract methods"
    ],
    "answer": 2,
    "explanation": "@FunctionalInterface annotation enforces this."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Garbage collection in Java?",
    "options": [
      "OS handles it",
      "No memory management",
      "JVM automatically reclaims unused object memory",
      "Programmer must free memory"
    ],
    "answer": 2,
    "explanation": "GC runs in background; objects without references are collected."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Stack memory stores?",
    "options": [
      "Objects only",
      "Static variables only",
      "Method calls and local variables",
      "Class definitions"
    ],
    "answer": 2,
    "explanation": "Stack is LIFO; each thread has its own."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Heap memory stores?",
    "options": [
      "Local variables only",
      "Objects and instance variables",
      "Method calls",
      "Primitives only"
    ],
    "answer": 1,
    "explanation": "Shared heap stores dynamically allocated objects."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "File class in Java represents?",
    "options": [
      "File or directory path",
      "File contents",
      "Network socket",
      "Database connection"
    ],
    "answer": 0,
    "explanation": "java.io.File for file system operations."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "BufferedReader is faster than Scanner because?",
    "options": [
      "Larger internal buffer reduces I/O operations",
      "It uses less memory",
      "It skips characters",
      "It is newer"
    ],
    "answer": 0,
    "explanation": "BufferedReader reads large chunks at once."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Serialization converts object to?",
    "options": [
      "Byte stream for storage or transmission",
      "XML only",
      "String format",
      "HTML page"
    ],
    "answer": 0,
    "explanation": "Implements Serializable interface."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "static keyword means?",
    "options": [
      "Is private",
      "Cannot be accessed",
      "Belongs to instance",
      "Belongs to class, not instance"
    ],
    "answer": 3,
    "explanation": "Static members shared across all instances."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "final class cannot be?",
    "options": [
      "Extended/inherited",
      "Used",
      "Imported",
      "Instantiated"
    ],
    "answer": 0,
    "explanation": "final prevents subclassing."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "abstract class can have?",
    "options": [
      "Only abstract methods",
      "Both abstract and concrete methods",
      "Only concrete methods",
      "No methods"
    ],
    "answer": 1,
    "explanation": "Abstract classes provide partial implementation."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "this keyword refers to?",
    "options": [
      "Previous object",
      "Current object instance",
      "Static context",
      "Parent class"
    ],
    "answer": 1,
    "explanation": "this resolves ambiguity between fields and parameters."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "super keyword is used to?",
    "options": [
      "Handle exception",
      "Create new object",
      "Define variable",
      "Call parent class constructor or method"
    ],
    "answer": 3,
    "explanation": "super() invokes parent constructor."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Hard",
    "question": "Dynamic method dispatch is?",
    "options": [
      "Compile-time resolution",
      "Runtime resolution of overridden method call",
      "Static method call",
      "Constructor call"
    ],
    "answer": 1,
    "explanation": "JVM determines which overridden method to call at runtime."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Optional class in Java 8 helps avoid?",
    "options": [
      "ArrayIndexOutOfBounds",
      "NullPointerException",
      "ClassCast",
      "StackOverflow"
    ],
    "answer": 1,
    "explanation": "Optional wraps nullable value with safe methods."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Comparator interface is used for?",
    "options": [
      "Custom sorting logic",
      "Equality checking",
      "Hashing",
      "Serialization"
    ],
    "answer": 0,
    "explanation": "compare() method defines custom ordering."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "equals() vs == in Java?",
    "options": [
      "Both check content",
      "No difference",
      "equals() checks content equality; == checks reference",
      "Both check reference"
    ],
    "answer": 2,
    "explanation": "== compares memory addresses for objects."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Autoboxing in Java is?",
    "options": [
      "String to int",
      "Automatic conversion of primitive to wrapper class",
      "Object to primitive only",
      "Manual casting"
    ],
    "answer": 1,
    "explanation": "int to Integer happens automatically."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Design pattern: Singleton ensures?",
    "options": [
      "Abstract class",
      "Multiple instances",
      "No instances",
      "Only one instance of a class exists"
    ],
    "answer": 3,
    "explanation": "Private constructor + static instance."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Design pattern: Factory provides?",
    "options": [
      "Sorting algorithm",
      "Memory allocation",
      "Thread management",
      "Object creation without exposing instantiation logic"
    ],
    "answer": 3,
    "explanation": "Factory method returns appropriate subclass instance."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Hard",
    "question": "Design pattern: Observer implements?",
    "options": [
      "Singleton pattern",
      "One-to-many dependency notification",
      "Tree traversal",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "When subject changes, all observers are notified."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Design pattern: Builder is used for?",
    "options": [
      "Sorting",
      "Threading",
      "Constructing complex objects step by step",
      "Destroying objects"
    ],
    "answer": 2,
    "explanation": "Builder separates construction from representation."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "What is classpath in Java?",
    "options": [
      "Database URL",
      "File system root",
      "Path where JVM looks for classes and packages",
      "Network path"
    ],
    "answer": 2,
    "explanation": "Set via -cp flag or CLASSPATH environment variable."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "What is the default value of an int in Java?",
    "options": [
      "0",
      "null",
      "undefined",
      "-1"
    ],
    "answer": 0,
    "explanation": "Primitive int defaults to 0 in Java."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "What is the default value of an Object reference?",
    "options": [
      "undefined",
      "empty string",
      "0",
      "null"
    ],
    "answer": 3,
    "explanation": "Uninitialized object references default to null."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Java supports multiple inheritance through?",
    "options": [
      "Classes",
      "Interfaces only",
      "Constructors",
      "Abstract classes"
    ],
    "answer": 1,
    "explanation": "Java avoids diamond problem by restricting class inheritance."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Enum in Java is?",
    "options": [
      "A method",
      "A loop construct",
      "A variable type",
      "A special class representing a fixed set of constants"
    ],
    "answer": 3,
    "explanation": "Enums provide type-safe constant definitions."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "var keyword in Java 10+?",
    "options": [
      "Local variable type inference",
      "Global variable",
      "Constant declaration",
      "Dynamic typing"
    ],
    "answer": 0,
    "explanation": "Compiler infers type from initializer."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 % 3);?",
    "options": [
      "1",
      "5",
      "2",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 3);?",
    "options": [
      "14",
      "7",
      "6",
      "10"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 << 1);?",
    "options": [
      "60",
      "33",
      "30",
      "29"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 >> 1);?",
    "options": [
      "18",
      "8",
      "9",
      "12"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 3);?",
    "options": [
      "0",
      "1",
      "4",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 5);?",
    "options": [
      "15",
      "18",
      "14",
      "30"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 << 1);?",
    "options": [
      "38",
      "76",
      "41",
      "37"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 38."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 3);?",
    "options": [
      "14",
      "7",
      "6",
      "10"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 >> 1);?",
    "options": [
      "5",
      "9",
      "12",
      "6"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 >> 1);?",
    "options": [
      "4",
      "7",
      "3",
      "8"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 >> 1);?",
    "options": [
      "14",
      "22",
      "10",
      "11"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 4);?",
    "options": [
      "23",
      "46",
      "22",
      "26"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 << 1);?",
    "options": [
      "15",
      "12",
      "11",
      "24"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 4);?",
    "options": [
      "2",
      "5",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 >> 1);?",
    "options": [
      "5",
      "4",
      "8",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 2);?",
    "options": [
      "1",
      "0",
      "2",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 6);?",
    "options": [
      "19",
      "32",
      "15",
      "16"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 >> 1);?",
    "options": [
      "11",
      "24",
      "15",
      "12"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 2);?",
    "options": [
      "69",
      "3",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 6);?",
    "options": [
      "36",
      "21",
      "18",
      "17"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 2);?",
    "options": [
      "16",
      "26",
      "12",
      "13"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 >> 1);?",
    "options": [
      "10",
      "8",
      "4",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 6);?",
    "options": [
      "4",
      "1",
      "0",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 2);?",
    "options": [
      "26",
      "23",
      "22",
      "46"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 3);?",
    "options": [
      "-1",
      "0",
      "62",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 5);?",
    "options": [
      "3",
      "-1",
      "55",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 << 1);?",
    "options": [
      "49",
      "92",
      "45",
      "46"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 46."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 3);?",
    "options": [
      "19",
      "32",
      "15",
      "16"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 3);?",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 >> 1);?",
    "options": [
      "9",
      "10",
      "20",
      "13"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 5);?",
    "options": [
      "14",
      "28",
      "17",
      "13"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 << 1);?",
    "options": [
      "40",
      "23",
      "19",
      "20"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 5);?",
    "options": [
      "42",
      "20",
      "21",
      "24"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 & 4);?",
    "options": [
      "79",
      "0",
      "3",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);?",
    "options": [
      "9",
      "6",
      "5",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 4);?",
    "options": [
      "0",
      "3",
      "-1",
      "77"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 5);?",
    "options": [
      "4",
      "8",
      "3",
      "7"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 3);?",
    "options": [
      "5",
      "1",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 << 1);?",
    "options": [
      "88",
      "44",
      "47",
      "43"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 44."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 4);?",
    "options": [
      "11",
      "15",
      "12",
      "24"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 4);?",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 << 1);?",
    "options": [
      "23",
      "24",
      "27",
      "48"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 >> 1);?",
    "options": [
      "4",
      "7",
      "3",
      "8"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 >> 1);?",
    "options": [
      "3",
      "6",
      "6",
      "2"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 4);?",
    "options": [
      "7",
      "6",
      "10",
      "14"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 6);?",
    "options": [
      "3",
      "8",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 << 1);?",
    "options": [
      "22",
      "44",
      "25",
      "21"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 2);?",
    "options": [
      "-1",
      "0",
      "3",
      "63"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 >> 1);?",
    "options": [
      "7",
      "8",
      "16",
      "11"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 5);?",
    "options": [
      "4",
      "10",
      "8",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 6);?",
    "options": [
      "44",
      "25",
      "21",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 >> 1);?",
    "options": [
      "2",
      "3",
      "6",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 4);?",
    "options": [
      "0",
      "3",
      "-1",
      "57"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 4);?",
    "options": [
      "-1",
      "59",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 2);?",
    "options": [
      "14",
      "15",
      "18",
      "30"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 6);?",
    "options": [
      "0",
      "3",
      "53",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 2);?",
    "options": [
      "-1",
      "73",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 5);?",
    "options": [
      "6",
      "2",
      "6",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 4);?",
    "options": [
      "4",
      "1",
      "2",
      "0"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 3);?",
    "options": [
      "89",
      "0",
      "-1",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 2);?",
    "options": [
      "-1",
      "0",
      "3",
      "50"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 3);?",
    "options": [
      "1",
      "4",
      "2",
      "5"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 6);?",
    "options": [
      "8",
      "4",
      "7",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 | 5);?",
    "options": [
      "28",
      "58",
      "32",
      "29"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 29."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 3);?",
    "options": [
      "55",
      "-1",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 3);?",
    "options": [
      "1",
      "0",
      "4",
      "2"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 3);?",
    "options": [
      "19",
      "18",
      "38",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 5);?",
    "options": [
      "4",
      "0",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 >> 1);?",
    "options": [
      "6",
      "10",
      "14",
      "7"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 5);?",
    "options": [
      "13",
      "26",
      "12",
      "16"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 5);?",
    "options": [
      "3",
      "-1",
      "51",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 5);?",
    "options": [
      "20",
      "19",
      "40",
      "23"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 5);?",
    "options": [
      "1",
      "4",
      "2",
      "0"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 6);?",
    "options": [
      "22",
      "23",
      "26",
      "46"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 6);?",
    "options": [
      "1",
      "4",
      "0",
      "2"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 2);?",
    "options": [
      "66",
      "-1",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 6);?",
    "options": [
      "28",
      "13",
      "17",
      "14"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 6);?",
    "options": [
      "11",
      "22",
      "14",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 << 1);?",
    "options": [
      "20",
      "9",
      "10",
      "13"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 >> 1);?",
    "options": [
      "6",
      "12",
      "5",
      "9"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 >> 1);?",
    "options": [
      "14",
      "22",
      "10",
      "11"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 | 6);?",
    "options": [
      "33",
      "30",
      "60",
      "29"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 6);?",
    "options": [
      "13",
      "14",
      "17",
      "28"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 2);?",
    "options": [
      "2",
      "1",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 3);?",
    "options": [
      "2",
      "1",
      "5",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 3);?",
    "options": [
      "22",
      "38",
      "18",
      "19"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 4);?",
    "options": [
      "3",
      "79",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 6);?",
    "options": [
      "42",
      "20",
      "24",
      "21"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 6);?",
    "options": [
      "12",
      "26",
      "16",
      "13"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 >> 1);?",
    "options": [
      "10",
      "14",
      "6",
      "7"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 2);?",
    "options": [
      "10",
      "11",
      "22",
      "14"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 2);?",
    "options": [
      "2",
      "1",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 6);?",
    "options": [
      "4",
      "5",
      "10",
      "8"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 3);?",
    "options": [
      "12",
      "13",
      "16",
      "26"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 2);?",
    "options": [
      "24",
      "11",
      "15",
      "12"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 4);?",
    "options": [
      "0",
      "-1",
      "3",
      "87"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 6);?",
    "options": [
      "8",
      "4",
      "7",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 5);?",
    "options": [
      "24",
      "15",
      "12",
      "11"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 6);?",
    "options": [
      "13",
      "28",
      "14",
      "17"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 5);?",
    "options": [
      "0",
      "3",
      "-1",
      "59"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 & 6);?",
    "options": [
      "5",
      "12",
      "6",
      "9"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 5);?",
    "options": [
      "5",
      "1",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 4);?",
    "options": [
      "6",
      "2",
      "6",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 5);?",
    "options": [
      "46",
      "22",
      "23",
      "26"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 3);?",
    "options": [
      "0",
      "2",
      "4",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 4);?",
    "options": [
      "13",
      "14",
      "17",
      "28"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 2);?",
    "options": [
      "10",
      "22",
      "11",
      "14"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 << 1);?",
    "options": [
      "45",
      "84",
      "42",
      "41"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 42."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 & 5);?",
    "options": [
      "4",
      "5",
      "10",
      "8"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 4);?",
    "options": [
      "46",
      "26",
      "23",
      "22"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 2);?",
    "options": [
      "4",
      "5",
      "1",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 3);?",
    "options": [
      "1",
      "2",
      "5",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 6);?",
    "options": [
      "4",
      "2",
      "1",
      "0"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 5);?",
    "options": [
      "17",
      "16",
      "34",
      "20"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 5);?",
    "options": [
      "8",
      "5",
      "4",
      "10"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 3);?",
    "options": [
      "14",
      "30",
      "15",
      "18"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 2);?",
    "options": [
      "18",
      "17",
      "21",
      "36"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 5);?",
    "options": [
      "6",
      "2",
      "6",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 6);?",
    "options": [
      "30",
      "14",
      "18",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 4);?",
    "options": [
      "51",
      "-1",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 4);?",
    "options": [
      "42",
      "20",
      "21",
      "24"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 6);?",
    "options": [
      "20",
      "17",
      "34",
      "16"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 2);?",
    "options": [
      "32",
      "15",
      "16",
      "19"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 2);?",
    "options": [
      "26",
      "23",
      "22",
      "46"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 << 1);?",
    "options": [
      "26",
      "25",
      "29",
      "52"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 4);?",
    "options": [
      "56",
      "27",
      "31",
      "28"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 3);?",
    "options": [
      "5",
      "6",
      "12",
      "9"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 6);?",
    "options": [
      "12",
      "6",
      "5",
      "9"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 3);?",
    "options": [
      "3",
      "2",
      "6",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 2);?",
    "options": [
      "4",
      "1",
      "5",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 >> 1);?",
    "options": [
      "2",
      "5",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 4);?",
    "options": [
      "8",
      "7",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 2);?",
    "options": [
      "4",
      "1",
      "2",
      "0"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 4);?",
    "options": [
      "21",
      "24",
      "42",
      "20"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 6);?",
    "options": [
      "12",
      "6",
      "9",
      "5"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 2);?",
    "options": [
      "10",
      "6",
      "14",
      "7"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 2);?",
    "options": [
      "13",
      "17",
      "14",
      "28"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 2);?",
    "options": [
      "17",
      "18",
      "36",
      "21"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 5);?",
    "options": [
      "46",
      "22",
      "26",
      "23"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 2);?",
    "options": [
      "1",
      "2",
      "5",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 5);?",
    "options": [
      "18",
      "12",
      "9",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 4);?",
    "options": [
      "1",
      "4",
      "2",
      "5"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 3);?",
    "options": [
      "46",
      "22",
      "26",
      "23"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 2);?",
    "options": [
      "3",
      "0",
      "73",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 6);?",
    "options": [
      "22",
      "23",
      "46",
      "26"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 4);?",
    "options": [
      "5",
      "6",
      "12",
      "9"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 3);?",
    "options": [
      "38",
      "19",
      "22",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 2);?",
    "options": [
      "-1",
      "3",
      "0",
      "51"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 << 1);?",
    "options": [
      "36",
      "39",
      "72",
      "35"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 36."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 2);?",
    "options": [
      "8",
      "5",
      "10",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 5);?",
    "options": [
      "14",
      "18",
      "30",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 5);?",
    "options": [
      "3",
      "7",
      "8",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 & 2);?",
    "options": [
      "1",
      "5",
      "2",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 5);?",
    "options": [
      "12",
      "13",
      "16",
      "26"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 5);?",
    "options": [
      "8",
      "3",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 4);?",
    "options": [
      "36",
      "21",
      "17",
      "18"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 << 1);?",
    "options": [
      "33",
      "37",
      "34",
      "68"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 34."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 6);?",
    "options": [
      "4",
      "2",
      "5",
      "1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 4);?",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 << 1);?",
    "options": [
      "16",
      "32",
      "19",
      "15"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 5);?",
    "options": [
      "24",
      "42",
      "21",
      "20"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 << 1);?",
    "options": [
      "27",
      "28",
      "31",
      "56"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 2);?",
    "options": [
      "7",
      "6",
      "14",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 6);?",
    "options": [
      "7",
      "4",
      "8",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 4);?",
    "options": [
      "12",
      "24",
      "11",
      "15"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 5);?",
    "options": [
      "16",
      "11",
      "8",
      "7"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 4);?",
    "options": [
      "14",
      "28",
      "13",
      "17"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 6);?",
    "options": [
      "5",
      "4",
      "1",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 5);?",
    "options": [
      "8",
      "3",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 6);?",
    "options": [
      "16",
      "7",
      "11",
      "8"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 6);?",
    "options": [
      "10",
      "20",
      "9",
      "13"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 2);?",
    "options": [
      "0",
      "2",
      "1",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 6);?",
    "options": [
      "22",
      "25",
      "21",
      "44"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 >> 1);?",
    "options": [
      "8",
      "16",
      "7",
      "11"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 & 5);?",
    "options": [
      "3",
      "0",
      "70",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 2);?",
    "options": [
      "20",
      "10",
      "13",
      "9"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 6);?",
    "options": [
      "87",
      "3",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 >> 1);?",
    "options": [
      "18",
      "12",
      "8",
      "9"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 5);?",
    "options": [
      "26",
      "22",
      "46",
      "23"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 3);?",
    "options": [
      "11",
      "10",
      "22",
      "14"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 3);?",
    "options": [
      "17",
      "13",
      "14",
      "28"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 4);?",
    "options": [
      "3",
      "-1",
      "77",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 4);?",
    "options": [
      "14",
      "17",
      "28",
      "13"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 3);?",
    "options": [
      "22",
      "10",
      "11",
      "14"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 4);?",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 4);?",
    "options": [
      "23",
      "19",
      "40",
      "20"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 6);?",
    "options": [
      "-1",
      "3",
      "83",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 2);?",
    "options": [
      "14",
      "18",
      "15",
      "30"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 3);?",
    "options": [
      "10",
      "4",
      "5",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 4);?",
    "options": [
      "24",
      "11",
      "12",
      "15"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 5);?",
    "options": [
      "58",
      "32",
      "29",
      "28"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 29."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 3);?",
    "options": [
      "0",
      "81",
      "-1",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 3);?",
    "options": [
      "0",
      "4",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 3);?",
    "options": [
      "2",
      "5",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 6);?",
    "options": [
      "3",
      "64",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 & 6);?",
    "options": [
      "4",
      "5",
      "2",
      "1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 6);?",
    "options": [
      "3",
      "6",
      "6",
      "2"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 5);?",
    "options": [
      "19",
      "32",
      "16",
      "15"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 % 2);?",
    "options": [
      "1",
      "4",
      "2",
      "0"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 2);?",
    "options": [
      "18",
      "22",
      "19",
      "38"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 2);?",
    "options": [
      "21",
      "25",
      "44",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 3);?",
    "options": [
      "2",
      "6",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 << 1);?",
    "options": [
      "39",
      "43",
      "80",
      "40"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 40."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 % 2);?",
    "options": [
      "2",
      "1",
      "4",
      "0"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 6);?",
    "options": [
      "22",
      "26",
      "23",
      "46"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 6);?",
    "options": [
      "3",
      "-1",
      "62",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 4);?",
    "options": [
      "8",
      "7",
      "16",
      "11"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 4);?",
    "options": [
      "8",
      "3",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 3);?",
    "options": [
      "22",
      "25",
      "21",
      "44"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 2);?",
    "options": [
      "3",
      "63",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 2);?",
    "options": [
      "78",
      "3",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 2);?",
    "options": [
      "14",
      "7",
      "6",
      "10"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 6);?",
    "options": [
      "2",
      "5",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 % 6);?",
    "options": [
      "0",
      "4",
      "1",
      "2"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 6);?",
    "options": [
      "30",
      "15",
      "18",
      "14"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 6);?",
    "options": [
      "3",
      "-1",
      "0",
      "61"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 5);?",
    "options": [
      "13",
      "12",
      "16",
      "26"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 6);?",
    "options": [
      "7",
      "3",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 6);?",
    "options": [
      "9",
      "12",
      "6",
      "5"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 << 1);?",
    "options": [
      "36",
      "18",
      "17",
      "21"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 >> 1);?",
    "options": [
      "13",
      "10",
      "20",
      "9"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 | 4);?",
    "options": [
      "28",
      "27",
      "31",
      "56"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 5);?",
    "options": [
      "2",
      "4",
      "1",
      "0"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 3);?",
    "options": [
      "2",
      "0",
      "1",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 5);?",
    "options": [
      "8",
      "5",
      "10",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 5);?",
    "options": [
      "0",
      "4",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 5);?",
    "options": [
      "2",
      "0",
      "4",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 % 3);?",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 2);?",
    "options": [
      "26",
      "25",
      "52",
      "29"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 5);?",
    "options": [
      "8",
      "7",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 5);?",
    "options": [
      "8",
      "10",
      "5",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 2);?",
    "options": [
      "71",
      "-1",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 3);?",
    "options": [
      "23",
      "40",
      "19",
      "20"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 2);?",
    "options": [
      "4",
      "1",
      "2",
      "5"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 5);?",
    "options": [
      "-1",
      "3",
      "52",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 3);?",
    "options": [
      "88",
      "0",
      "-1",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 5);?",
    "options": [
      "6",
      "3",
      "2",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 & 3);?",
    "options": [
      "5",
      "2",
      "1",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 3);?",
    "options": [
      "14",
      "10",
      "11",
      "22"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 3);?",
    "options": [
      "15",
      "30",
      "18",
      "14"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 2);?",
    "options": [
      "40",
      "20",
      "19",
      "23"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 5);?",
    "options": [
      "1",
      "4",
      "2",
      "0"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 4);?",
    "options": [
      "2",
      "1",
      "0",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 4);?",
    "options": [
      "4",
      "0",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 4);?",
    "options": [
      "8",
      "7",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 5);?",
    "options": [
      "3",
      "4",
      "7",
      "8"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 5);?",
    "options": [
      "22",
      "23",
      "26",
      "46"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 2);?",
    "options": [
      "0",
      "3",
      "84",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 5);?",
    "options": [
      "18",
      "30",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 6);?",
    "options": [
      "14",
      "28",
      "13",
      "17"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 % 4);?",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 4);?",
    "options": [
      "22",
      "21",
      "25",
      "44"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 4);?",
    "options": [
      "18",
      "14",
      "15",
      "30"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 6);?",
    "options": [
      "-1",
      "3",
      "0",
      "59"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 4);?",
    "options": [
      "16",
      "12",
      "13",
      "26"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 3);?",
    "options": [
      "2",
      "5",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 5);?",
    "options": [
      "10",
      "14",
      "7",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 2);?",
    "options": [
      "14",
      "10",
      "11",
      "22"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 5);?",
    "options": [
      "14",
      "6",
      "7",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 2);?",
    "options": [
      "89",
      "-1",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 6);?",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 5);?",
    "options": [
      "5",
      "2",
      "1",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 4);?",
    "options": [
      "8",
      "3",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 4);?",
    "options": [
      "19",
      "40",
      "23",
      "20"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 3);?",
    "options": [
      "0",
      "86",
      "-1",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 4);?",
    "options": [
      "-1",
      "59",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 3);?",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 5);?",
    "options": [
      "14",
      "15",
      "30",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 5);?",
    "options": [
      "7",
      "8",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 4);?",
    "options": [
      "18",
      "12",
      "8",
      "9"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 4);?",
    "options": [
      "26",
      "13",
      "12",
      "16"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 6);?",
    "options": [
      "3",
      "0",
      "60",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 << 1);?",
    "options": [
      "35",
      "32",
      "64",
      "31"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 5);?",
    "options": [
      "6",
      "3",
      "2",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 5);?",
    "options": [
      "3",
      "67",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 3);?",
    "options": [
      "2",
      "1",
      "5",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 3);?",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 2);?",
    "options": [
      "2",
      "5",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 << 1);?",
    "options": [
      "14",
      "13",
      "17",
      "28"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 5);?",
    "options": [
      "26",
      "16",
      "12",
      "13"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 4);?",
    "options": [
      "7",
      "8",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 6);?",
    "options": [
      "25",
      "21",
      "44",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 6);?",
    "options": [
      "0",
      "3",
      "-1",
      "56"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 2);?",
    "options": [
      "3",
      "-1",
      "57",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 3);?",
    "options": [
      "1",
      "5",
      "2",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 5);?",
    "options": [
      "0",
      "-1",
      "57",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 3);?",
    "options": [
      "14",
      "10",
      "7",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 6);?",
    "options": [
      "5",
      "1",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 2);?",
    "options": [
      "9",
      "5",
      "6",
      "12"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 4);?",
    "options": [
      "15",
      "14",
      "30",
      "18"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 2);?",
    "options": [
      "34",
      "16",
      "17",
      "20"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 4);?",
    "options": [
      "2",
      "4",
      "5",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 6);?",
    "options": [
      "4",
      "2",
      "5",
      "1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 4);?",
    "options": [
      "21",
      "22",
      "25",
      "44"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 << 1);?",
    "options": [
      "47",
      "96",
      "48",
      "51"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 48."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 6);?",
    "options": [
      "38",
      "18",
      "22",
      "19"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 4);?",
    "options": [
      "1",
      "0",
      "2",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 5);?",
    "options": [
      "21",
      "44",
      "25",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 3);?",
    "options": [
      "-1",
      "3",
      "73",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 % 4);?",
    "options": [
      "6",
      "3",
      "6",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 5);?",
    "options": [
      "24",
      "20",
      "42",
      "21"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 % 6);?",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 & 3);?",
    "options": [
      "2",
      "6",
      "6",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 2);?",
    "options": [
      "3",
      "-1",
      "0",
      "61"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 5);?",
    "options": [
      "23",
      "26",
      "46",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 6);?",
    "options": [
      "2",
      "1",
      "5",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 4);?",
    "options": [
      "19",
      "23",
      "40",
      "20"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 3);?",
    "options": [
      "22",
      "19",
      "18",
      "38"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 | 2);?",
    "options": [
      "52",
      "26",
      "25",
      "29"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 6);?",
    "options": [
      "10",
      "4",
      "8",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 6);?",
    "options": [
      "23",
      "46",
      "22",
      "26"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 6);?",
    "options": [
      "10",
      "4",
      "8",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 4);?",
    "options": [
      "24",
      "21",
      "42",
      "20"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 6);?",
    "options": [
      "23",
      "26",
      "46",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 6);?",
    "options": [
      "3",
      "0",
      "66",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 5);?",
    "options": [
      "22",
      "38",
      "18",
      "19"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 5);?",
    "options": [
      "42",
      "21",
      "24",
      "20"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 3);?",
    "options": [
      "8",
      "4",
      "3",
      "7"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 3);?",
    "options": [
      "8",
      "11",
      "7",
      "16"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 5);?",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 6);?",
    "options": [
      "22",
      "44",
      "25",
      "21"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 4);?",
    "options": [
      "38",
      "22",
      "18",
      "19"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 4);?",
    "options": [
      "3",
      "64",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 2);?",
    "options": [
      "53",
      "0",
      "3",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 4);?",
    "options": [
      "19",
      "16",
      "32",
      "15"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 6);?",
    "options": [
      "21",
      "22",
      "25",
      "44"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 4);?",
    "options": [
      "26",
      "22",
      "46",
      "23"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 & 4);?",
    "options": [
      "7",
      "4",
      "3",
      "8"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 2);?",
    "options": [
      "9",
      "10",
      "20",
      "13"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 6);?",
    "options": [
      "24",
      "15",
      "12",
      "11"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 6);?",
    "options": [
      "10",
      "7",
      "14",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 5);?",
    "options": [
      "18",
      "30",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 % 6);?",
    "options": [
      "10",
      "8",
      "4",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 2);?",
    "options": [
      "4",
      "7",
      "8",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 4);?",
    "options": [
      "3",
      "2",
      "6",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 3);?",
    "options": [
      "46",
      "23",
      "26",
      "22"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 3);?",
    "options": [
      "9",
      "20",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 6);?",
    "options": [
      "14",
      "28",
      "17",
      "13"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);?",
    "options": [
      "25",
      "22",
      "44",
      "21"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 4);?",
    "options": [
      "11",
      "14",
      "22",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 2);?",
    "options": [
      "0",
      "77",
      "-1",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 % 3);?",
    "options": [
      "77",
      "0",
      "3",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 5);?",
    "options": [
      "21",
      "18",
      "17",
      "36"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 2);?",
    "options": [
      "30",
      "15",
      "14",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 4);?",
    "options": [
      "5",
      "2",
      "4",
      "1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 3);?",
    "options": [
      "18",
      "21",
      "36",
      "17"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 2);?",
    "options": [
      "13",
      "28",
      "14",
      "17"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 3);?",
    "options": [
      "6",
      "3",
      "2",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 6);?",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 6);?",
    "options": [
      "29",
      "30",
      "60",
      "33"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 3);?",
    "options": [
      "2",
      "4",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 6);?",
    "options": [
      "15",
      "30",
      "14",
      "18"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 6);?",
    "options": [
      "8",
      "9",
      "18",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 4);?",
    "options": [
      "4",
      "1",
      "5",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 4);?",
    "options": [
      "3",
      "55",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 4);?",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 4);?",
    "options": [
      "8",
      "7",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 4);?",
    "options": [
      "5",
      "10",
      "4",
      "8"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 2);?",
    "options": [
      "22",
      "25",
      "44",
      "21"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 3);?",
    "options": [
      "12",
      "15",
      "24",
      "11"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 2);?",
    "options": [
      "19",
      "18",
      "22",
      "38"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 3);?",
    "options": [
      "2",
      "1",
      "4",
      "0"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 5);?",
    "options": [
      "24",
      "42",
      "21",
      "20"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 4);?",
    "options": [
      "16",
      "17",
      "34",
      "20"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 3);?",
    "options": [
      "11",
      "10",
      "22",
      "14"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 6);?",
    "options": [
      "7",
      "3",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 3);?",
    "options": [
      "0",
      "4",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 2);?",
    "options": [
      "14",
      "13",
      "17",
      "28"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 % 5);?",
    "options": [
      "7",
      "3",
      "8",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 2);?",
    "options": [
      "-1",
      "55",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 3);?",
    "options": [
      "30",
      "54",
      "27",
      "26"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 4);?",
    "options": [
      "78",
      "0",
      "3",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 3);?",
    "options": [
      "63",
      "-1",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 2);?",
    "options": [
      "0",
      "1",
      "4",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 4);?",
    "options": [
      "6",
      "3",
      "2",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 4);?",
    "options": [
      "12",
      "16",
      "26",
      "13"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 4);?",
    "options": [
      "7",
      "4",
      "3",
      "8"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 2);?",
    "options": [
      "-1",
      "88",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 5);?",
    "options": [
      "1",
      "2",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 | 3);?",
    "options": [
      "26",
      "30",
      "27",
      "54"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 % 2);?",
    "options": [
      "0",
      "4",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 5);?",
    "options": [
      "3",
      "0",
      "59",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 4);?",
    "options": [
      "7",
      "3",
      "8",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 6);?",
    "options": [
      "30",
      "15",
      "18",
      "14"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 5);?",
    "options": [
      "-1",
      "58",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 3);?",
    "options": [
      "3",
      "87",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 2);?",
    "options": [
      "2",
      "4",
      "5",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 3);?",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 3);?",
    "options": [
      "46",
      "23",
      "22",
      "26"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 5);?",
    "options": [
      "22",
      "14",
      "10",
      "11"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 3);?",
    "options": [
      "46",
      "26",
      "23",
      "22"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 2);?",
    "options": [
      "23",
      "26",
      "22",
      "46"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 3);?",
    "options": [
      "24",
      "21",
      "42",
      "20"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 6);?",
    "options": [
      "6",
      "14",
      "7",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 5);?",
    "options": [
      "64",
      "0",
      "3",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 4);?",
    "options": [
      "13",
      "20",
      "10",
      "9"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 3);?",
    "options": [
      "9",
      "8",
      "12",
      "18"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 5);?",
    "options": [
      "5",
      "4",
      "8",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 3);?",
    "options": [
      "4",
      "0",
      "1",
      "2"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 6);?",
    "options": [
      "3",
      "4",
      "8",
      "7"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 6);?",
    "options": [
      "4",
      "8",
      "7",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 2);?",
    "options": [
      "18",
      "9",
      "8",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 4);?",
    "options": [
      "5",
      "2",
      "4",
      "1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 2);?",
    "options": [
      "8",
      "11",
      "16",
      "7"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 2);?",
    "options": [
      "-1",
      "0",
      "3",
      "54"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 5);?",
    "options": [
      "2",
      "5",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 % 5);?",
    "options": [
      "2",
      "1",
      "4",
      "0"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 5);?",
    "options": [
      "8",
      "5",
      "10",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 3);?",
    "options": [
      "5",
      "4",
      "2",
      "1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 & 2);?",
    "options": [
      "5",
      "4",
      "2",
      "1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 2);?",
    "options": [
      "3",
      "-1",
      "51",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 5);?",
    "options": [
      "9",
      "13",
      "20",
      "10"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 3);?",
    "options": [
      "5",
      "2",
      "1",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 2);?",
    "options": [
      "19",
      "22",
      "18",
      "38"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 2);?",
    "options": [
      "10",
      "20",
      "13",
      "9"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 2);?",
    "options": [
      "0",
      "2",
      "1",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 6);?",
    "options": [
      "6",
      "9",
      "5",
      "12"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 3);?",
    "options": [
      "0",
      "3",
      "73",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 3);?",
    "options": [
      "16",
      "34",
      "20",
      "17"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 3);?",
    "options": [
      "22",
      "26",
      "23",
      "46"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 4);?",
    "options": [
      "0",
      "84",
      "-1",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 5);?",
    "options": [
      "12",
      "26",
      "16",
      "13"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 % 4);?",
    "options": [
      "1",
      "0",
      "4",
      "2"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 3);?",
    "options": [
      "0",
      "4",
      "1",
      "2"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 5);?",
    "options": [
      "3",
      "6",
      "6",
      "2"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 6);?",
    "options": [
      "6",
      "3",
      "6",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 6);?",
    "options": [
      "40",
      "19",
      "20",
      "23"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 2);?",
    "options": [
      "1",
      "2",
      "0",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 2);?",
    "options": [
      "21",
      "36",
      "17",
      "18"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 % 5);?",
    "options": [
      "5",
      "1",
      "2",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 3);?",
    "options": [
      "14",
      "22",
      "11",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 5);?",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 2);?",
    "options": [
      "24",
      "42",
      "20",
      "21"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 2);?",
    "options": [
      "21",
      "25",
      "22",
      "44"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 2);?",
    "options": [
      "1",
      "4",
      "0",
      "2"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 3);?",
    "options": [
      "-1",
      "77",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 4);?",
    "options": [
      "3",
      "0",
      "-1",
      "88"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 3);?",
    "options": [
      "18",
      "38",
      "22",
      "19"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 4);?",
    "options": [
      "2",
      "4",
      "1",
      "0"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 6);?",
    "options": [
      "12",
      "5",
      "6",
      "9"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 3);? (Set 1)",
    "options": [
      "46",
      "23",
      "22",
      "26"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 3);? (Set 2)",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Interface in Java contains? (Set 3)",
    "options": [
      "Main method",
      "Abstract methods (and default/static in Java 8+)",
      "Instance variables",
      "Constructors"
    ],
    "answer": 1,
    "explanation": "Interface defines a contract for implementing classes."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 5);? (Set 4)",
    "options": [
      "3",
      "-1",
      "51",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 3);? (Set 5)",
    "options": [
      "14",
      "30",
      "15",
      "18"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 4);? (Set 6)",
    "options": [
      "24",
      "21",
      "42",
      "20"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 5);? (Set 7)",
    "options": [
      "4",
      "10",
      "8",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 2);? (Set 8)",
    "options": [
      "2",
      "4",
      "5",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "try-catch-finally: finally block runs? (Set 9)",
    "options": [
      "Always (except System.exit)",
      "Only on success",
      "Never",
      "Only on exception"
    ],
    "answer": 0,
    "explanation": "Finally ensures cleanup code executes."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 6);? (Set 10)",
    "options": [
      "25",
      "21",
      "44",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 4);? (Set 11)",
    "options": [
      "8",
      "3",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 2);? (Set 12)",
    "options": [
      "0",
      "1",
      "4",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 4);? (Set 13)",
    "options": [
      "0",
      "84",
      "-1",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 5);? (Set 14)",
    "options": [
      "2",
      "5",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 6);? (Set 15)",
    "options": [
      "25",
      "21",
      "44",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 5);? (Set 16)",
    "options": [
      "14",
      "15",
      "30",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 2);? (Set 17)",
    "options": [
      "1",
      "2",
      "0",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 5);? (Set 18)",
    "options": [
      "3",
      "67",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 6);? (Set 19)",
    "options": [
      "6",
      "14",
      "7",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 3);? (Set 20)",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 6);? (Set 21)",
    "options": [
      "3",
      "-1",
      "62",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 4);? (Set 22)",
    "options": [
      "21",
      "24",
      "42",
      "20"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 4);? (Set 23)",
    "options": [
      "3",
      "2",
      "6",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 4);? (Set 24)",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Java supports multiple inheritance through? (Set 25)",
    "options": [
      "Classes",
      "Interfaces only",
      "Constructors",
      "Abstract classes"
    ],
    "answer": 1,
    "explanation": "Java avoids diamond problem by restricting class inheritance."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 4);? (Set 26)",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 4);? (Set 27)",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 6);? (Set 28)",
    "options": [
      "13",
      "14",
      "17",
      "28"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 5);? (Set 29)",
    "options": [
      "17",
      "16",
      "34",
      "20"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 5);? (Set 30)",
    "options": [
      "6",
      "3",
      "2",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Design pattern: Singleton ensures? (Set 31)",
    "options": [
      "Abstract class",
      "Multiple instances",
      "No instances",
      "Only one instance of a class exists"
    ],
    "answer": 3,
    "explanation": "Private constructor + static instance."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 2);? (Set 32)",
    "options": [
      "40",
      "20",
      "19",
      "23"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 6);? (Set 33)",
    "options": [
      "22",
      "25",
      "21",
      "44"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "What is the default value of an int in Java? (Set 34)",
    "options": [
      "0",
      "null",
      "undefined",
      "-1"
    ],
    "answer": 0,
    "explanation": "Primitive int defaults to 0 in Java."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 4);? (Set 35)",
    "options": [
      "18",
      "14",
      "15",
      "30"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JDK includes? (Set 36)",
    "options": [
      "JRE + development tools (compiler, debugger)",
      "Only JVM",
      "Only editor",
      "Only libraries"
    ],
    "answer": 0,
    "explanation": "JDK is the full development kit."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 4);? (Set 37)",
    "options": [
      "15",
      "14",
      "30",
      "18"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 4);? (Set 38)",
    "options": [
      "21",
      "24",
      "42",
      "20"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 6);? (Set 39)",
    "options": [
      "5",
      "1",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 6);? (Set 40)",
    "options": [
      "2",
      "1",
      "5",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 6);? (Set 41)",
    "options": [
      "25",
      "21",
      "44",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 2);? (Set 42)",
    "options": [
      "2",
      "4",
      "5",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 6);? (Set 43)",
    "options": [
      "8",
      "4",
      "7",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 3);? (Set 1) (Set 44)",
    "options": [
      "46",
      "23",
      "22",
      "26"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 2);? (Set 45)",
    "options": [
      "8",
      "11",
      "16",
      "7"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 4);? (Set 46)",
    "options": [
      "8",
      "7",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 << 1);? (Set 47)",
    "options": [
      "20",
      "9",
      "10",
      "13"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 5);? (Set 48)",
    "options": [
      "8",
      "10",
      "5",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 6);? (Set 49)",
    "options": [
      "-1",
      "3",
      "0",
      "59"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 3);? (Set 50)",
    "options": [
      "11",
      "10",
      "22",
      "14"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 6);? (Set 19) (Set 51)",
    "options": [
      "6",
      "14",
      "7",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 3);? (Set 52)",
    "options": [
      "2",
      "6",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 6);? (Set 53)",
    "options": [
      "-1",
      "3",
      "0",
      "59"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 6);? (Set 54)",
    "options": [
      "4",
      "5",
      "10",
      "8"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 5);? (Set 55)",
    "options": [
      "22",
      "23",
      "26",
      "46"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 6);? (Set 56)",
    "options": [
      "22",
      "25",
      "21",
      "44"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 4);? (Set 57)",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 2);? (Set 58)",
    "options": [
      "30",
      "15",
      "14",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);? (Set 59)",
    "options": [
      "9",
      "6",
      "5",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 4);? (Set 60)",
    "options": [
      "5",
      "10",
      "4",
      "8"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 4);? (Set 61)",
    "options": [
      "-1",
      "59",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 2);? (Set 62)",
    "options": [
      "2",
      "1",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 5);? (Set 63)",
    "options": [
      "4",
      "8",
      "3",
      "7"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);? (Set 59) (Set 64)",
    "options": [
      "9",
      "6",
      "5",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 4);? (Set 61) (Set 65)",
    "options": [
      "-1",
      "59",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 3);? (Set 66)",
    "options": [
      "88",
      "0",
      "-1",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 3);? (Set 67)",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 4);? (Set 68)",
    "options": [
      "4",
      "1",
      "2",
      "0"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 5);? (Set 69)",
    "options": [
      "8",
      "7",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 5);? (Set 70)",
    "options": [
      "3",
      "67",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "throw vs throws? (Set 71)",
    "options": [
      "throws catches exception",
      "Same thing",
      "throw creates exception; throws declares it in method signature",
      "throw is for classes"
    ],
    "answer": 2,
    "explanation": "throw is used in body; throws in declaration."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 << 1);? (Set 72)",
    "options": [
      "60",
      "33",
      "30",
      "29"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 6);? (Set 73)",
    "options": [
      "9",
      "12",
      "6",
      "5"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 5);? (Set 74)",
    "options": [
      "42",
      "20",
      "21",
      "24"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 3);? (Set 75)",
    "options": [
      "18",
      "21",
      "36",
      "17"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 >> 1);? (Set 76)",
    "options": [
      "7",
      "8",
      "16",
      "11"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Constructor is called when? (Set 77)",
    "options": [
      "Object is created using new keyword",
      "Variable is declared",
      "Method is called",
      "Class is loaded"
    ],
    "answer": 0,
    "explanation": "Constructors initialize object state."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 >> 1);? (Set 76) (Set 78)",
    "options": [
      "7",
      "8",
      "16",
      "11"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 3);? (Set 79)",
    "options": [
      "89",
      "0",
      "-1",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 4);? (Set 80)",
    "options": [
      "78",
      "0",
      "3",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 5);? (Set 81)",
    "options": [
      "22",
      "14",
      "10",
      "11"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 2);? (Set 32) (Set 82)",
    "options": [
      "40",
      "20",
      "19",
      "23"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Comparator interface is used for? (Set 83)",
    "options": [
      "Custom sorting logic",
      "Equality checking",
      "Hashing",
      "Serialization"
    ],
    "answer": 0,
    "explanation": "compare() method defines custom ordering."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Comparator interface is used for? (Set 84)",
    "options": [
      "Custom sorting logic",
      "Equality checking",
      "Hashing",
      "Serialization"
    ],
    "answer": 0,
    "explanation": "compare() method defines custom ordering."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 6);? (Set 19) (Set 51) (Set 85)",
    "options": [
      "6",
      "14",
      "7",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 4);? (Set 86)",
    "options": [
      "3",
      "55",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 << 1);? (Set 87)",
    "options": [
      "15",
      "12",
      "11",
      "24"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 2);? (Set 88)",
    "options": [
      "-1",
      "88",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 6);? (Set 89)",
    "options": [
      "23",
      "26",
      "46",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 3);? (Set 90)",
    "options": [
      "22",
      "10",
      "11",
      "14"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 3);? (Set 91)",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 4);? (Set 92)",
    "options": [
      "16",
      "12",
      "13",
      "26"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 % 2);? (Set 93)",
    "options": [
      "0",
      "4",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 4);? (Set 11) (Set 94)",
    "options": [
      "8",
      "3",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 5);? (Set 81) (Set 95)",
    "options": [
      "22",
      "14",
      "10",
      "11"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 2);? (Set 96)",
    "options": [
      "9",
      "10",
      "20",
      "13"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "super keyword is used to? (Set 97)",
    "options": [
      "Handle exception",
      "Create new object",
      "Define variable",
      "Call parent class constructor or method"
    ],
    "answer": 3,
    "explanation": "super() invokes parent constructor."
  },
  {
    "subject": "Java",
    "topic": "Multithreading",
    "difficulty": "Medium",
    "question": "Executor framework provides? (Set 98)",
    "options": [
      "File handling",
      "Thread pool management",
      "Network calls",
      "Database access"
    ],
    "answer": 1,
    "explanation": "Manages thread lifecycle efficiently."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 5);? (Set 99)",
    "options": [
      "21",
      "44",
      "25",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 4);? (Set 26) (Set 100)",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 4);? (Set 101)",
    "options": [
      "26",
      "22",
      "46",
      "23"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 5);? (Set 102)",
    "options": [
      "23",
      "26",
      "46",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 4);? (Set 35) (Set 103)",
    "options": [
      "18",
      "14",
      "15",
      "30"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 5);? (Set 81) (Set 95) (Set 104)",
    "options": [
      "22",
      "14",
      "10",
      "11"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 % 4);? (Set 105)",
    "options": [
      "6",
      "3",
      "6",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Encapsulation is achieved by? (Set 106)",
    "options": [
      "Public fields",
      "Private fields with public getters/setters",
      "Abstract classes",
      "Static methods only"
    ],
    "answer": 1,
    "explanation": "Data hiding protects internal state."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 << 1);? (Set 107)",
    "options": [
      "45",
      "84",
      "42",
      "41"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 42."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Interface in Java contains? (Set 3) (Set 108)",
    "options": [
      "Main method",
      "Abstract methods (and default/static in Java 8+)",
      "Instance variables",
      "Constructors"
    ],
    "answer": 1,
    "explanation": "Interface defines a contract for implementing classes."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 3);? (Set 109)",
    "options": [
      "0",
      "4",
      "1",
      "2"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 6);? (Set 110)",
    "options": [
      "0",
      "3",
      "53",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 6);? (Set 111)",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 6);? (Set 112)",
    "options": [
      "-1",
      "3",
      "0",
      "59"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JVM stands for? (Set 113)",
    "options": [
      "Java Variable Manager",
      "Java Visual Maker",
      "Java Virtual Machine",
      "Java Version Module"
    ],
    "answer": 2,
    "explanation": "JVM executes Java bytecode on any platform."
  },
  {
    "subject": "Java",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "String is immutable in Java because? (Set 114)",
    "options": [
      "Its value cannot be changed after creation",
      "It is final class",
      "It uses char array",
      "It has no methods"
    ],
    "answer": 0,
    "explanation": "String pool and security require immutability."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 5);? (Set 115)",
    "options": [
      "8",
      "3",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 4);? (Set 22) (Set 116)",
    "options": [
      "21",
      "24",
      "42",
      "20"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 4);? (Set 101) (Set 117)",
    "options": [
      "26",
      "22",
      "46",
      "23"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 4);? (Set 118)",
    "options": [
      "19",
      "23",
      "40",
      "20"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 3);? (Set 119)",
    "options": [
      "14",
      "10",
      "7",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 2);? (Set 120)",
    "options": [
      "0",
      "77",
      "-1",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 3);? (Set 121)",
    "options": [
      "2",
      "4",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "throw vs throws? (Set 122)",
    "options": [
      "throws catches exception",
      "Same thing",
      "throw creates exception; throws declares it in method signature",
      "throw is for classes"
    ],
    "answer": 2,
    "explanation": "throw is used in body; throws in declaration."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 5);? (Set 123)",
    "options": [
      "6",
      "3",
      "2",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 6);? (Set 124)",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 5);? (Set 7) (Set 125)",
    "options": [
      "4",
      "10",
      "8",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "equals() vs == in Java? (Set 126)",
    "options": [
      "Both check content",
      "No difference",
      "equals() checks content equality; == checks reference",
      "Both check reference"
    ],
    "answer": 2,
    "explanation": "== compares memory addresses for objects."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 6);? (Set 10) (Set 127)",
    "options": [
      "25",
      "21",
      "44",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);? (Set 128)",
    "options": [
      "25",
      "22",
      "44",
      "21"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 5);? (Set 129)",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 << 1);? (Set 130)",
    "options": [
      "40",
      "23",
      "19",
      "20"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 4);? (Set 131)",
    "options": [
      "3",
      "64",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Java is which type of language? (Set 132)",
    "options": [
      "Procedural only",
      "Assembly",
      "Functional only",
      "Object-Oriented"
    ],
    "answer": 3,
    "explanation": "Java follows OOP principles: encapsulation, inheritance, polymorphism, abstraction."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 3);? (Set 133)",
    "options": [
      "46",
      "23",
      "26",
      "22"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 3);? (Set 134)",
    "options": [
      "9",
      "20",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 3);? (Set 135)",
    "options": [
      "30",
      "54",
      "27",
      "26"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 5);? (Set 136)",
    "options": [
      "2",
      "0",
      "4",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 2);? (Set 137)",
    "options": [
      "19",
      "18",
      "22",
      "38"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Java supports multiple inheritance through? (Set 25) (Set 138)",
    "options": [
      "Classes",
      "Interfaces only",
      "Constructors",
      "Abstract classes"
    ],
    "answer": 1,
    "explanation": "Java avoids diamond problem by restricting class inheritance."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 4);? (Set 139)",
    "options": [
      "3",
      "0",
      "-1",
      "88"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 3);? (Set 140)",
    "options": [
      "-1",
      "3",
      "73",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 4);? (Set 26) (Set 141)",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 4);? (Set 142)",
    "options": [
      "5",
      "2",
      "4",
      "1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 2);? (Set 143)",
    "options": [
      "24",
      "11",
      "15",
      "12"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 5);? (Set 144)",
    "options": [
      "58",
      "32",
      "29",
      "28"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 29."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 6);? (Set 145)",
    "options": [
      "38",
      "18",
      "22",
      "19"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 5);? (Set 146)",
    "options": [
      "24",
      "20",
      "42",
      "21"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 3);? (Set 134) (Set 147)",
    "options": [
      "9",
      "20",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 4);? (Set 148)",
    "options": [
      "13",
      "20",
      "10",
      "9"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 3);? (Set 149)",
    "options": [
      "14",
      "10",
      "11",
      "22"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 5);? (Set 150)",
    "options": [
      "8",
      "5",
      "10",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 6);? (Set 151)",
    "options": [
      "4",
      "1",
      "0",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 3);? (Set 90) (Set 152)",
    "options": [
      "22",
      "10",
      "11",
      "14"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 2);? (Set 153)",
    "options": [
      "17",
      "18",
      "36",
      "21"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 3);? (Set 154)",
    "options": [
      "15",
      "30",
      "18",
      "14"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 4);? (Set 155)",
    "options": [
      "-1",
      "59",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 6);? (Set 156)",
    "options": [
      "9",
      "12",
      "6",
      "5"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 3);? (Set 157)",
    "options": [
      "22",
      "25",
      "21",
      "44"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 5);? (Set 18) (Set 158)",
    "options": [
      "3",
      "67",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 4);? (Set 159)",
    "options": [
      "4",
      "0",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 6);? (Set 112) (Set 160)",
    "options": [
      "-1",
      "3",
      "0",
      "59"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 2);? (Set 58) (Set 161)",
    "options": [
      "30",
      "15",
      "14",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 3);? (Set 162)",
    "options": [
      "5",
      "2",
      "1",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 4);? (Set 163)",
    "options": [
      "51",
      "-1",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 4);? (Set 164)",
    "options": [
      "1",
      "0",
      "2",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 6);? (Set 165)",
    "options": [
      "29",
      "30",
      "60",
      "33"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 4);? (Set 166)",
    "options": [
      "24",
      "21",
      "42",
      "20"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 3);? (Set 167)",
    "options": [
      "89",
      "0",
      "-1",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 4);? (Set 61) (Set 168)",
    "options": [
      "-1",
      "59",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 5);? (Set 169)",
    "options": [
      "8",
      "5",
      "10",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 6);? (Set 170)",
    "options": [
      "23",
      "26",
      "46",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 2);? (Set 171)",
    "options": [
      "1",
      "2",
      "0",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 << 1);? (Set 172)",
    "options": [
      "33",
      "37",
      "34",
      "68"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 34."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 >> 1);? (Set 173)",
    "options": [
      "9",
      "10",
      "20",
      "13"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 5);? (Set 174)",
    "options": [
      "5",
      "4",
      "8",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 3);? (Set 175)",
    "options": [
      "46",
      "26",
      "23",
      "22"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 3);? (Set 176)",
    "options": [
      "8",
      "4",
      "3",
      "7"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 6);? (Set 124) (Set 177)",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 4);? (Set 178)",
    "options": [
      "4",
      "0",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 3);? (Set 119) (Set 179)",
    "options": [
      "14",
      "10",
      "7",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 5);? (Set 55) (Set 180)",
    "options": [
      "22",
      "23",
      "26",
      "46"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Abstraction is implemented using? (Set 181)",
    "options": [
      "Loops",
      "Abstract classes and interfaces",
      "Variables",
      "Concrete classes only"
    ],
    "answer": 1,
    "explanation": "Hides implementation, shows only functionality."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "try-catch-finally: finally block runs? (Set 182)",
    "options": [
      "Always (except System.exit)",
      "Only on success",
      "Never",
      "Only on exception"
    ],
    "answer": 0,
    "explanation": "Finally ensures cleanup code executes."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 6);? (Set 28) (Set 183)",
    "options": [
      "13",
      "14",
      "17",
      "28"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 6);? (Set 124) (Set 177) (Set 184)",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 3);? (Set 91) (Set 185)",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 << 1);? (Set 186)",
    "options": [
      "27",
      "28",
      "31",
      "56"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 28."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Design pattern: Singleton ensures? (Set 31) (Set 187)",
    "options": [
      "Abstract class",
      "Multiple instances",
      "No instances",
      "Only one instance of a class exists"
    ],
    "answer": 3,
    "explanation": "Private constructor + static instance."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 5);? (Set 69) (Set 188)",
    "options": [
      "8",
      "7",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 4);? (Set 189)",
    "options": [
      "8",
      "7",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 6);? (Set 190)",
    "options": [
      "7",
      "3",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 6);? (Set 41) (Set 191)",
    "options": [
      "25",
      "21",
      "44",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 5);? (Set 192)",
    "options": [
      "6",
      "3",
      "2",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 4);? (Set 193)",
    "options": [
      "2",
      "1",
      "0",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 << 1);? (Set 194)",
    "options": [
      "88",
      "44",
      "47",
      "43"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 44."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 2);? (Set 195)",
    "options": [
      "10",
      "11",
      "22",
      "14"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 4);? (Set 86) (Set 196)",
    "options": [
      "3",
      "55",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 5);? (Set 197)",
    "options": [
      "2",
      "4",
      "1",
      "0"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 5);? (Set 198)",
    "options": [
      "13",
      "12",
      "16",
      "26"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 6);? (Set 43) (Set 199)",
    "options": [
      "8",
      "4",
      "7",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "throw vs throws? (Set 200)",
    "options": [
      "throws catches exception",
      "Same thing",
      "throw creates exception; throws declares it in method signature",
      "throw is for classes"
    ],
    "answer": 2,
    "explanation": "throw is used in body; throws in declaration."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 2);? (Set 42) (Set 201)",
    "options": [
      "2",
      "4",
      "5",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 2);? (Set 202)",
    "options": [
      "14",
      "15",
      "18",
      "30"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Optional class in Java 8 helps avoid? (Set 203)",
    "options": [
      "ArrayIndexOutOfBounds",
      "NullPointerException",
      "ClassCast",
      "StackOverflow"
    ],
    "answer": 1,
    "explanation": "Optional wraps nullable value with safe methods."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 5);? (Set 204)",
    "options": [
      "3",
      "4",
      "7",
      "8"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 4);? (Set 193) (Set 205)",
    "options": [
      "2",
      "1",
      "0",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 5);? (Set 206)",
    "options": [
      "4",
      "0",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 4);? (Set 207)",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 3);? (Set 134) (Set 208)",
    "options": [
      "9",
      "20",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 6);? (Set 209)",
    "options": [
      "13",
      "28",
      "14",
      "17"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 5);? (Set 210)",
    "options": [
      "42",
      "21",
      "24",
      "20"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 3);? (Set 211)",
    "options": [
      "14",
      "22",
      "11",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 2);? (Set 42) (Set 212)",
    "options": [
      "2",
      "4",
      "5",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 3);? (Set 5) (Set 213)",
    "options": [
      "14",
      "30",
      "15",
      "18"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 3);? (Set 214)",
    "options": [
      "2",
      "1",
      "5",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 2);? (Set 215)",
    "options": [
      "23",
      "26",
      "22",
      "46"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 5);? (Set 16) (Set 216)",
    "options": [
      "14",
      "15",
      "30",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 6);? (Set 49) (Set 217)",
    "options": [
      "-1",
      "3",
      "0",
      "59"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 3);? (Set 218)",
    "options": [
      "89",
      "0",
      "-1",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "try-catch-finally: finally block runs? (Set 219)",
    "options": [
      "Always (except System.exit)",
      "Only on success",
      "Never",
      "Only on exception"
    ],
    "answer": 0,
    "explanation": "Finally ensures cleanup code executes."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 2);? (Set 220)",
    "options": [
      "17",
      "18",
      "36",
      "21"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 4);? (Set 221)",
    "options": [
      "15",
      "14",
      "30",
      "18"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 3);? (Set 222)",
    "options": [
      "22",
      "25",
      "21",
      "44"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 6);? (Set 223)",
    "options": [
      "13",
      "28",
      "14",
      "17"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 4);? (Set 23) (Set 224)",
    "options": [
      "3",
      "2",
      "6",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 3);? (Set 225)",
    "options": [
      "6",
      "3",
      "2",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 5);? (Set 226)",
    "options": [
      "7",
      "8",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 3);? (Set 227)",
    "options": [
      "0",
      "2",
      "4",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 2);? (Set 195) (Set 228)",
    "options": [
      "10",
      "11",
      "22",
      "14"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "super keyword is used to? (Set 97) (Set 229)",
    "options": [
      "Handle exception",
      "Create new object",
      "Define variable",
      "Call parent class constructor or method"
    ],
    "answer": 3,
    "explanation": "super() invokes parent constructor."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 4);? (Set 230)",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 5);? (Set 192) (Set 231)",
    "options": [
      "6",
      "3",
      "2",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 4);? (Set 232)",
    "options": [
      "26",
      "13",
      "12",
      "16"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "File class in Java represents? (Set 233)",
    "options": [
      "File or directory path",
      "File contents",
      "Network socket",
      "Database connection"
    ],
    "answer": 0,
    "explanation": "java.io.File for file system operations."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 5);? (Set 29) (Set 234)",
    "options": [
      "17",
      "16",
      "34",
      "20"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 3);? (Set 235)",
    "options": [
      "1",
      "2",
      "5",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 4);? (Set 236)",
    "options": [
      "4",
      "1",
      "2",
      "0"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 5);? (Set 237)",
    "options": [
      "0",
      "-1",
      "57",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 6);? (Set 238)",
    "options": [
      "25",
      "21",
      "44",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 2);? (Set 215) (Set 239)",
    "options": [
      "23",
      "26",
      "22",
      "46"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 5);? (Set 240)",
    "options": [
      "6",
      "3",
      "2",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 5);? (Set 146) (Set 241)",
    "options": [
      "24",
      "20",
      "42",
      "21"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 6);? (Set 41) (Set 242)",
    "options": [
      "25",
      "21",
      "44",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 2);? (Set 243)",
    "options": [
      "2",
      "1",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 2);? (Set 244)",
    "options": [
      "16",
      "26",
      "12",
      "13"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 << 1);? (Set 72) (Set 245)",
    "options": [
      "60",
      "33",
      "30",
      "29"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 3);? (Set 246)",
    "options": [
      "1",
      "0",
      "4",
      "2"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 3);? (Set 247)",
    "options": [
      "14",
      "10",
      "7",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 5);? (Set 248)",
    "options": [
      "3",
      "7",
      "8",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 3);? (Set 249)",
    "options": [
      "5",
      "4",
      "2",
      "1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 6);? (Set 250)",
    "options": [
      "15",
      "30",
      "14",
      "18"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 5);? (Set 251)",
    "options": [
      "8",
      "3",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 3);? (Set 252)",
    "options": [
      "2",
      "1",
      "5",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 2);? (Set 253)",
    "options": [
      "21",
      "25",
      "22",
      "44"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 6);? (Set 254)",
    "options": [
      "8",
      "9",
      "18",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 >> 1);? (Set 255)",
    "options": [
      "6",
      "12",
      "5",
      "9"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 4);? (Set 86) (Set 196) (Set 256)",
    "options": [
      "3",
      "55",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 4);? (Set 257)",
    "options": [
      "1",
      "4",
      "2",
      "5"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 << 1);? (Set 258)",
    "options": [
      "15",
      "12",
      "11",
      "24"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 2);? (Set 259)",
    "options": [
      "26",
      "23",
      "22",
      "46"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 5);? (Set 260)",
    "options": [
      "13",
      "26",
      "12",
      "16"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 >> 1);? (Set 261)",
    "options": [
      "9",
      "10",
      "20",
      "13"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 3);? (Set 262)",
    "options": [
      "46",
      "26",
      "23",
      "22"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "What is the default value of an int in Java? (Set 34) (Set 263)",
    "options": [
      "0",
      "null",
      "undefined",
      "-1"
    ],
    "answer": 0,
    "explanation": "Primitive int defaults to 0 in Java."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 2);? (Set 264)",
    "options": [
      "1",
      "2",
      "0",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 2);? (Set 265)",
    "options": [
      "0",
      "2",
      "1",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 5);? (Set 266)",
    "options": [
      "4",
      "0",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 << 1);? (Set 130) (Set 267)",
    "options": [
      "40",
      "23",
      "19",
      "20"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 3);? (Set 268)",
    "options": [
      "23",
      "40",
      "19",
      "20"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 5);? (Set 18) (Set 158) (Set 269)",
    "options": [
      "3",
      "67",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 2);? (Set 270)",
    "options": [
      "2",
      "1",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 3);? (Set 271)",
    "options": [
      "10",
      "4",
      "5",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Constructor is called when? (Set 272)",
    "options": [
      "Object is created using new keyword",
      "Variable is declared",
      "Method is called",
      "Class is loaded"
    ],
    "answer": 0,
    "explanation": "Constructors initialize object state."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 5);? (Set 273)",
    "options": [
      "14",
      "6",
      "7",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 2);? (Set 274)",
    "options": [
      "20",
      "10",
      "13",
      "9"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 3);? (Set 75) (Set 275)",
    "options": [
      "18",
      "21",
      "36",
      "17"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 2);? (Set 276)",
    "options": [
      "53",
      "0",
      "3",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 2);? (Set 277)",
    "options": [
      "14",
      "15",
      "18",
      "30"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 6);? (Set 10) (Set 127) (Set 278)",
    "options": [
      "25",
      "21",
      "44",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 6);? (Set 279)",
    "options": [
      "29",
      "30",
      "60",
      "33"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 6);? (Set 280)",
    "options": [
      "22",
      "44",
      "25",
      "21"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 2);? (Set 42) (Set 201) (Set 281)",
    "options": [
      "2",
      "4",
      "5",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 2);? (Set 282)",
    "options": [
      "4",
      "7",
      "8",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 2);? (Set 42) (Set 283)",
    "options": [
      "2",
      "4",
      "5",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 3);? (Set 284)",
    "options": [
      "2",
      "5",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 6);? (Set 170) (Set 285)",
    "options": [
      "23",
      "26",
      "46",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 2);? (Set 286)",
    "options": [
      "8",
      "5",
      "10",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 6);? (Set 124) (Set 287)",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 2);? (Set 288)",
    "options": [
      "16",
      "26",
      "12",
      "13"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 2);? (Set 276) (Set 289)",
    "options": [
      "53",
      "0",
      "3",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 6);? (Set 290)",
    "options": [
      "12",
      "26",
      "16",
      "13"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "try-catch-finally: finally block runs? (Set 219) (Set 291)",
    "options": [
      "Always (except System.exit)",
      "Only on success",
      "Never",
      "Only on exception"
    ],
    "answer": 0,
    "explanation": "Finally ensures cleanup code executes."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 6);? (Set 292)",
    "options": [
      "7",
      "3",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 2);? (Set 195) (Set 228) (Set 293)",
    "options": [
      "10",
      "11",
      "22",
      "14"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 6);? (Set 294)",
    "options": [
      "38",
      "18",
      "22",
      "19"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 3);? (Set 295)",
    "options": [
      "14",
      "22",
      "11",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 2);? (Set 296)",
    "options": [
      "34",
      "16",
      "17",
      "20"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 4);? (Set 297)",
    "options": [
      "14",
      "28",
      "13",
      "17"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 4);? (Set 298)",
    "options": [
      "11",
      "15",
      "12",
      "24"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 6);? (Set 299)",
    "options": [
      "2",
      "1",
      "5",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 5);? (Set 29) (Set 234) (Set 300)",
    "options": [
      "17",
      "16",
      "34",
      "20"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 4);? (Set 24) (Set 301)",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 2);? (Set 302)",
    "options": [
      "10",
      "20",
      "13",
      "9"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 5);? (Set 69) (Set 188) (Set 303)",
    "options": [
      "8",
      "7",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 4);? (Set 304)",
    "options": [
      "7",
      "8",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 5);? (Set 305)",
    "options": [
      "5",
      "1",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 3);? (Set 306)",
    "options": [
      "10",
      "4",
      "5",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 6);? (Set 307)",
    "options": [
      "6",
      "3",
      "6",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 2);? (Set 308)",
    "options": [
      "7",
      "6",
      "14",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 3);? (Set 309)",
    "options": [
      "5",
      "6",
      "12",
      "9"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 6);? (Set 310)",
    "options": [
      "44",
      "25",
      "21",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 4);? (Set 311)",
    "options": [
      "13",
      "14",
      "17",
      "28"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 5);? (Set 197) (Set 312)",
    "options": [
      "2",
      "4",
      "1",
      "0"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 4);? (Set 313)",
    "options": [
      "51",
      "-1",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 5);? (Set 314)",
    "options": [
      "42",
      "21",
      "24",
      "20"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 5);? (Set 315)",
    "options": [
      "10",
      "14",
      "7",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 3);? (Set 316)",
    "options": [
      "14",
      "7",
      "6",
      "10"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 5);? (Set 317)",
    "options": [
      "1",
      "4",
      "2",
      "0"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 3);? (Set 225) (Set 318)",
    "options": [
      "6",
      "3",
      "2",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 3);? (Set 319)",
    "options": [
      "14",
      "22",
      "11",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 2);? (Set 320)",
    "options": [
      "26",
      "23",
      "22",
      "46"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 3);? (Set 321)",
    "options": [
      "12",
      "15",
      "24",
      "11"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 5);? (Set 322)",
    "options": [
      "8",
      "5",
      "10",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 3);? (Set 284) (Set 323)",
    "options": [
      "2",
      "5",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 2);? (Set 324)",
    "options": [
      "10",
      "20",
      "13",
      "9"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 4);? (Set 325)",
    "options": [
      "3",
      "0",
      "-1",
      "88"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 2);? (Set 42) (Set 326)",
    "options": [
      "2",
      "4",
      "5",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 2);? (Set 327)",
    "options": [
      "78",
      "3",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 4);? (Set 236) (Set 328)",
    "options": [
      "4",
      "1",
      "2",
      "0"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 2);? (Set 329)",
    "options": [
      "2",
      "1",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 3);? (Set 330)",
    "options": [
      "46",
      "23",
      "26",
      "22"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "throw vs throws? (Set 71) (Set 331)",
    "options": [
      "throws catches exception",
      "Same thing",
      "throw creates exception; throws declares it in method signature",
      "throw is for classes"
    ],
    "answer": 2,
    "explanation": "throw is used in body; throws in declaration."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 3);? (Set 332)",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 2);? (Set 333)",
    "options": [
      "0",
      "2",
      "1",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 2);? (Set 276) (Set 334)",
    "options": [
      "53",
      "0",
      "3",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 2);? (Set 220) (Set 335)",
    "options": [
      "17",
      "18",
      "36",
      "21"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 3);? (Set 134) (Set 147) (Set 336)",
    "options": [
      "9",
      "20",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Stream API is used for? (Set 337)",
    "options": [
      "Network streaming",
      "File I/O streaming",
      "Functional-style operations on collections",
      "Audio streaming"
    ],
    "answer": 2,
    "explanation": "map, filter, reduce operations on data."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 2);? (Set 274) (Set 338)",
    "options": [
      "20",
      "10",
      "13",
      "9"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 >> 1);? (Set 76) (Set 339)",
    "options": [
      "7",
      "8",
      "16",
      "11"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 6);? (Set 292) (Set 340)",
    "options": [
      "7",
      "3",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 3);? (Set 341)",
    "options": [
      "14",
      "7",
      "6",
      "10"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 6);? (Set 190) (Set 342)",
    "options": [
      "7",
      "3",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 5);? (Set 146) (Set 343)",
    "options": [
      "24",
      "20",
      "42",
      "21"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 2);? (Set 42) (Set 326) (Set 344)",
    "options": [
      "2",
      "4",
      "5",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);? (Set 345)",
    "options": [
      "9",
      "6",
      "5",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 3);? (Set 346)",
    "options": [
      "55",
      "-1",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 << 1);? (Set 130) (Set 347)",
    "options": [
      "40",
      "23",
      "19",
      "20"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Constructor is called when? (Set 77) (Set 348)",
    "options": [
      "Object is created using new keyword",
      "Variable is declared",
      "Method is called",
      "Class is loaded"
    ],
    "answer": 0,
    "explanation": "Constructors initialize object state."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 3);? (Set 349)",
    "options": [
      "0",
      "3",
      "73",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 4);? (Set 350)",
    "options": [
      "8",
      "7",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 2);? (Set 215) (Set 351)",
    "options": [
      "23",
      "26",
      "22",
      "46"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 2);? (Set 352)",
    "options": [
      "24",
      "42",
      "20",
      "21"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 2);? (Set 353)",
    "options": [
      "18",
      "17",
      "21",
      "36"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 6);? (Set 223) (Set 354)",
    "options": [
      "13",
      "28",
      "14",
      "17"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 5);? (Set 355)",
    "options": [
      "12",
      "26",
      "16",
      "13"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 4);? (Set 356)",
    "options": [
      "11",
      "15",
      "12",
      "24"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 3);? (Set 357)",
    "options": [
      "14",
      "22",
      "11",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 2);? (Set 282) (Set 358)",
    "options": [
      "4",
      "7",
      "8",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 >> 1);? (Set 359)",
    "options": [
      "10",
      "8",
      "4",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 4);? (Set 360)",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 2);? (Set 361)",
    "options": [
      "-1",
      "0",
      "3",
      "54"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 3);? (Set 362)",
    "options": [
      "46",
      "22",
      "26",
      "23"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 >> 1);? (Set 363)",
    "options": [
      "5",
      "4",
      "8",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 3);? (Set 364)",
    "options": [
      "88",
      "0",
      "-1",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 4);? (Set 221) (Set 365)",
    "options": [
      "15",
      "14",
      "30",
      "18"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 6);? (Set 110) (Set 366)",
    "options": [
      "0",
      "3",
      "53",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 4);? (Set 367)",
    "options": [
      "7",
      "8",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 4);? (Set 368)",
    "options": [
      "3",
      "79",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 6);? (Set 19) (Set 369)",
    "options": [
      "6",
      "14",
      "7",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 5);? (Set 16) (Set 216) (Set 370)",
    "options": [
      "14",
      "15",
      "30",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 2);? (Set 171) (Set 371)",
    "options": [
      "1",
      "2",
      "0",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 6);? (Set 124) (Set 177) (Set 372)",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 6);? (Set 10) (Set 373)",
    "options": [
      "25",
      "21",
      "44",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "String is immutable in Java because? (Set 374)",
    "options": [
      "Its value cannot be changed after creation",
      "It is final class",
      "It uses char array",
      "It has no methods"
    ],
    "answer": 0,
    "explanation": "String pool and security require immutability."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 2);? (Set 143) (Set 375)",
    "options": [
      "24",
      "11",
      "15",
      "12"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 2);? (Set 376)",
    "options": [
      "32",
      "15",
      "16",
      "19"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 2);? (Set 377)",
    "options": [
      "9",
      "5",
      "6",
      "12"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);? (Set 59) (Set 64) (Set 378)",
    "options": [
      "9",
      "6",
      "5",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 2);? (Set 379)",
    "options": [
      "30",
      "15",
      "14",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 5);? (Set 174) (Set 380)",
    "options": [
      "5",
      "4",
      "8",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 6);? (Set 190) (Set 342) (Set 381)",
    "options": [
      "7",
      "3",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);? (Set 382)",
    "options": [
      "25",
      "22",
      "44",
      "21"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 6);? (Set 383)",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 4);? (Set 11) (Set 94) (Set 384)",
    "options": [
      "8",
      "3",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 6);? (Set 385)",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 6);? (Set 386)",
    "options": [
      "0",
      "3",
      "-1",
      "56"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 2);? (Set 387)",
    "options": [
      "66",
      "-1",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 3);? (Set 133) (Set 388)",
    "options": [
      "46",
      "23",
      "26",
      "22"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 3);? (Set 121) (Set 389)",
    "options": [
      "2",
      "4",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 6);? (Set 89) (Set 390)",
    "options": [
      "23",
      "26",
      "46",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 3);? (Set 391)",
    "options": [
      "38",
      "19",
      "22",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 5);? (Set 174) (Set 380) (Set 392)",
    "options": [
      "5",
      "4",
      "8",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);? (Set 59) (Set 64) (Set 378) (Set 393)",
    "options": [
      "9",
      "6",
      "5",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 << 1);? (Set 394)",
    "options": [
      "36",
      "39",
      "72",
      "35"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 36."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 5);? (Set 395)",
    "options": [
      "18",
      "12",
      "9",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 3);? (Set 396)",
    "options": [
      "2",
      "5",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 6);? (Set 397)",
    "options": [
      "24",
      "15",
      "12",
      "11"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 6);? (Set 398)",
    "options": [
      "0",
      "3",
      "53",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 2);? (Set 399)",
    "options": [
      "0",
      "3",
      "84",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 5);? (Set 400)",
    "options": [
      "15",
      "18",
      "14",
      "30"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 6);? (Set 290) (Set 401)",
    "options": [
      "12",
      "26",
      "16",
      "13"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JDK includes? (Set 36) (Set 402)",
    "options": [
      "JRE + development tools (compiler, debugger)",
      "Only JVM",
      "Only editor",
      "Only libraries"
    ],
    "answer": 0,
    "explanation": "JDK is the full development kit."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 3);? (Set 403)",
    "options": [
      "22",
      "25",
      "21",
      "44"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 3);? (Set 252) (Set 404)",
    "options": [
      "2",
      "1",
      "5",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);? (Set 59) (Set 64) (Set 378) (Set 405)",
    "options": [
      "9",
      "6",
      "5",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 3);? (Set 252) (Set 404) (Set 406)",
    "options": [
      "2",
      "1",
      "5",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 >> 1);? (Set 359) (Set 407)",
    "options": [
      "10",
      "8",
      "4",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 5);? (Set 408)",
    "options": [
      "42",
      "21",
      "24",
      "20"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 2);? (Set 243) (Set 409)",
    "options": [
      "2",
      "1",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 2);? (Set 171) (Set 410)",
    "options": [
      "1",
      "2",
      "0",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 6);? (Set 411)",
    "options": [
      "8",
      "4",
      "7",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 & 3);? (Set 412)",
    "options": [
      "5",
      "2",
      "1",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 2);? (Set 62) (Set 413)",
    "options": [
      "2",
      "1",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 % 2);? (Set 414)",
    "options": [
      "1",
      "4",
      "2",
      "0"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);? (Set 128) (Set 415)",
    "options": [
      "25",
      "22",
      "44",
      "21"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 5);? (Set 416)",
    "options": [
      "8",
      "3",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);? (Set 59) (Set 64) (Set 378) (Set 393) (Set 417)",
    "options": [
      "9",
      "6",
      "5",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 6);? (Set 385) (Set 418)",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 2);? (Set 215) (Set 419)",
    "options": [
      "23",
      "26",
      "22",
      "46"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Comparator interface is used for? (Set 420)",
    "options": [
      "Custom sorting logic",
      "Equality checking",
      "Hashing",
      "Serialization"
    ],
    "answer": 0,
    "explanation": "compare() method defines custom ordering."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 6);? (Set 190) (Set 342) (Set 381) (Set 421)",
    "options": [
      "7",
      "3",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Garbage collection in Java? (Set 422)",
    "options": [
      "OS handles it",
      "No memory management",
      "JVM automatically reclaims unused object memory",
      "Programmer must free memory"
    ],
    "answer": 2,
    "explanation": "GC runs in background; objects without references are collected."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 6);? (Set 156) (Set 423)",
    "options": [
      "9",
      "12",
      "6",
      "5"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 2);? (Set 424)",
    "options": [
      "8",
      "5",
      "10",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Design pattern: Singleton ensures? (Set 31) (Set 187) (Set 425)",
    "options": [
      "Abstract class",
      "Multiple instances",
      "No instances",
      "Only one instance of a class exists"
    ],
    "answer": 3,
    "explanation": "Private constructor + static instance."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 3);? (Set 306) (Set 426)",
    "options": [
      "10",
      "4",
      "5",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Optional class in Java 8 helps avoid? (Set 427)",
    "options": [
      "ArrayIndexOutOfBounds",
      "NullPointerException",
      "ClassCast",
      "StackOverflow"
    ],
    "answer": 1,
    "explanation": "Optional wraps nullable value with safe methods."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 2);? (Set 428)",
    "options": [
      "-1",
      "0",
      "3",
      "50"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 2);? (Set 429)",
    "options": [
      "26",
      "25",
      "52",
      "29"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 4);? (Set 207) (Set 430)",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 2);? (Set 286) (Set 431)",
    "options": [
      "8",
      "5",
      "10",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 6);? (Set 112) (Set 432)",
    "options": [
      "-1",
      "3",
      "0",
      "59"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 2);? (Set 433)",
    "options": [
      "21",
      "25",
      "44",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 2);? (Set 215) (Set 419) (Set 434)",
    "options": [
      "23",
      "26",
      "22",
      "46"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 3);? (Set 5) (Set 435)",
    "options": [
      "14",
      "30",
      "15",
      "18"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "String is immutable in Java because? (Set 114) (Set 436)",
    "options": [
      "Its value cannot be changed after creation",
      "It is final class",
      "It uses char array",
      "It has no methods"
    ],
    "answer": 0,
    "explanation": "String pool and security require immutability."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 4);? (Set 189) (Set 437)",
    "options": [
      "8",
      "7",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 >> 1);? (Set 438)",
    "options": [
      "5",
      "9",
      "12",
      "6"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 2);? (Set 12) (Set 439)",
    "options": [
      "0",
      "1",
      "4",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 5);? (Set 440)",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 3);? (Set 441)",
    "options": [
      "-1",
      "0",
      "62",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 3);? (Set 1) (Set 44) (Set 442)",
    "options": [
      "46",
      "23",
      "22",
      "26"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 2);? (Set 42) (Set 443)",
    "options": [
      "2",
      "4",
      "5",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "var keyword in Java 10+? (Set 444)",
    "options": [
      "Local variable type inference",
      "Global variable",
      "Constant declaration",
      "Dynamic typing"
    ],
    "answer": 0,
    "explanation": "Compiler infers type from initializer."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 5);? (Set 445)",
    "options": [
      "1",
      "4",
      "2",
      "0"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Encapsulation is achieved by? (Set 446)",
    "options": [
      "Public fields",
      "Private fields with public getters/setters",
      "Abstract classes",
      "Static methods only"
    ],
    "answer": 1,
    "explanation": "Data hiding protects internal state."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 6);? (Set 53) (Set 447)",
    "options": [
      "-1",
      "3",
      "0",
      "59"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 3);? (Set 448)",
    "options": [
      "38",
      "19",
      "22",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Polymorphism means? (Set 449)",
    "options": [
      "Same method behaves differently based on context",
      "Static binding always",
      "One method one behavior",
      "No methods"
    ],
    "answer": 0,
    "explanation": "Achieved via overloading and overriding."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 3);? (Set 450)",
    "options": [
      "5",
      "2",
      "1",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);? (Set 59) (Set 451)",
    "options": [
      "9",
      "6",
      "5",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 6);? (Set 452)",
    "options": [
      "12",
      "5",
      "6",
      "9"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 5);? (Set 453)",
    "options": [
      "20",
      "19",
      "40",
      "23"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 5);? (Set 454)",
    "options": [
      "8",
      "3",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Java is which type of language? (Set 455)",
    "options": [
      "Procedural only",
      "Assembly",
      "Functional only",
      "Object-Oriented"
    ],
    "answer": 3,
    "explanation": "Java follows OOP principles: encapsulation, inheritance, polymorphism, abstraction."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 6);? (Set 310) (Set 456)",
    "options": [
      "44",
      "25",
      "21",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 4);? (Set 189) (Set 457)",
    "options": [
      "8",
      "7",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 4);? (Set 24) (Set 458)",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 4);? (Set 459)",
    "options": [
      "1",
      "0",
      "2",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 3);? (Set 309) (Set 460)",
    "options": [
      "5",
      "6",
      "12",
      "9"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 4);? (Set 461)",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 3);? (Set 462)",
    "options": [
      "0",
      "4",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 5);? (Set 463)",
    "options": [
      "3",
      "7",
      "8",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Comparator interface is used for? (Set 83) (Set 464)",
    "options": [
      "Custom sorting logic",
      "Equality checking",
      "Hashing",
      "Serialization"
    ],
    "answer": 0,
    "explanation": "compare() method defines custom ordering."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Design pattern: Singleton ensures? (Set 31) (Set 187) (Set 465)",
    "options": [
      "Abstract class",
      "Multiple instances",
      "No instances",
      "Only one instance of a class exists"
    ],
    "answer": 3,
    "explanation": "Private constructor + static instance."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 3);? (Set 466)",
    "options": [
      "9",
      "20",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 2);? (Set 42) (Set 326) (Set 467)",
    "options": [
      "2",
      "4",
      "5",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 3);? (Set 468)",
    "options": [
      "9",
      "20",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 2);? (Set 469)",
    "options": [
      "40",
      "20",
      "19",
      "23"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 4);? (Set 470)",
    "options": [
      "6",
      "2",
      "6",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 2);? (Set 471)",
    "options": [
      "1",
      "0",
      "2",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 3);? (Set 284) (Set 472)",
    "options": [
      "2",
      "5",
      "4",
      "1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 3);? (Set 140) (Set 473)",
    "options": [
      "-1",
      "3",
      "73",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 6);? (Set 112) (Set 474)",
    "options": [
      "-1",
      "3",
      "0",
      "59"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 6);? (Set 475)",
    "options": [
      "7",
      "3",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 6);? (Set 110) (Set 476)",
    "options": [
      "0",
      "3",
      "53",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 5);? (Set 463) (Set 477)",
    "options": [
      "3",
      "7",
      "8",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 6);? (Set 478)",
    "options": [
      "10",
      "7",
      "14",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 3);? (Set 479)",
    "options": [
      "8",
      "11",
      "7",
      "16"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 4);? (Set 480)",
    "options": [
      "4",
      "0",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 2);? (Set 424) (Set 481)",
    "options": [
      "8",
      "5",
      "10",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 2);? (Set 376) (Set 482)",
    "options": [
      "32",
      "15",
      "16",
      "19"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);? (Set 128) (Set 483)",
    "options": [
      "25",
      "22",
      "44",
      "21"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 6);? (Set 484)",
    "options": [
      "28",
      "13",
      "17",
      "14"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 3);? (Set 485)",
    "options": [
      "88",
      "0",
      "-1",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 2);? (Set 428) (Set 486)",
    "options": [
      "-1",
      "0",
      "3",
      "50"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 5);? (Set 487)",
    "options": [
      "8",
      "10",
      "5",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 5);? (Set 99) (Set 488)",
    "options": [
      "21",
      "44",
      "25",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 5);? (Set 489)",
    "options": [
      "4",
      "8",
      "3",
      "7"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);? (Set 59) (Set 64) (Set 378) (Set 490)",
    "options": [
      "9",
      "6",
      "5",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 >> 1);? (Set 491)",
    "options": [
      "5",
      "9",
      "12",
      "6"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 2);? (Set 202) (Set 492)",
    "options": [
      "14",
      "15",
      "18",
      "30"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 << 1);? (Set 493)",
    "options": [
      "45",
      "84",
      "42",
      "41"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 42."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 6);? (Set 280) (Set 494)",
    "options": [
      "22",
      "44",
      "25",
      "21"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 >> 1);? (Set 76) (Set 339) (Set 495)",
    "options": [
      "7",
      "8",
      "16",
      "11"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 6);? (Set 496)",
    "options": [
      "40",
      "19",
      "20",
      "23"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 6);? (Set 223) (Set 354) (Set 497)",
    "options": [
      "13",
      "28",
      "14",
      "17"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 << 1);? (Set 172) (Set 498)",
    "options": [
      "33",
      "37",
      "34",
      "68"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 34."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 6);? (Set 111) (Set 499)",
    "options": [
      "30",
      "18",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 3);? (Set 500)",
    "options": [
      "6",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 4);? (Set 350) (Set 501)",
    "options": [
      "8",
      "7",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 5);? (Set 226) (Set 502)",
    "options": [
      "7",
      "8",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 6);? (Set 190) (Set 503)",
    "options": [
      "7",
      "3",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 4);? (Set 504)",
    "options": [
      "4",
      "0",
      "2",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 3);? (Set 479) (Set 505)",
    "options": [
      "8",
      "11",
      "7",
      "16"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  }
];
