window.quizData = window.quizData || {};
window.quizData.java = [
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Java is which type of language?",
    "options": [
      "Procedural only",
      "Functional only",
      "Assembly in most cases",
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
      "Java Visual Maker",
      "Java Variable Manager",
      "Java Version Module",
      "Java Virtual Machine"
    ],
    "answer": 3,
    "explanation": "JVM executes Java bytecode on any platform."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JDK includes?",
    "options": [
      "Only libraries in typical implementations",
      "JRE + development tools (compiler, debugger)",
      "Only JVM in typical implementations",
      "Only editor in typical implementations"
    ],
    "answer": 1,
    "explanation": "JDK is the full development kit."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JRE includes?",
    "options": [
      "Only debugger in practice",
      "JVM + core libraries",
      "Only compiler by design",
      "Only source code"
    ],
    "answer": 1,
    "explanation": "JRE is needed to run Java applications."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Encapsulation is achieved by?",
    "options": [
      "Abstract classes in typical implementations",
      "Private fields with public getters/setters",
      "Public fields under normal conditions",
      "Static methods only (primary approach)"
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
      "Handling exceptions based on convention",
      "A class to inherit properties of another class",
      "Thread creation under normal conditions",
      "Creating objects under normal conditions"
    ],
    "answer": 1,
    "explanation": "Child class extends parent class."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Polymorphism means?",
    "options": [
      "Static binding always in typical implementations",
      "No methods in typical implementations",
      "One method one behavior under normal conditions",
      "Same method behaves differently based on context"
    ],
    "answer": 3,
    "explanation": "Achieved via overloading and overriding."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Abstraction is implemented using?",
    "options": [
      "Variables (general case)",
      "Abstract classes and interfaces",
      "Loops (default behavior)",
      "Concrete classes only in practice"
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
      "Different return type only by design",
      "Same name same parameters (standard definition)",
      "Different classes under normal conditions",
      "Same method name with different parameters"
    ],
    "answer": 3,
    "explanation": "Compile-time (static) polymorphism."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Method overriding is?",
    "options": [
      "Child class redefines parent method with same signature",
      "Static methods in typical implementations",
      "Same class different params (standard definition)",
      "Different method name in typical implementations"
    ],
    "answer": 0,
    "explanation": "Runtime (dynamic) polymorphism."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Constructor is called when?",
    "options": [
      "Method is called (general case)",
      "Object is created using new keyword",
      "Variable is declared (commonly used)",
      "Class is loaded as per specification"
    ],
    "answer": 1,
    "explanation": "Constructors initialize object state."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Interface in Java contains?",
    "options": [
      "Abstract methods (and default/static in Java 8+)",
      "Instance variables in typical implementations",
      "Constructors in typical implementations",
      "Main method in typical implementations"
    ],
    "answer": 0,
    "explanation": "Interface defines a contract for implementing classes."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "ArrayList vs LinkedList: random access?",
    "options": [
      "LinkedList is faster (standard definition)",
      "Both O(n) as per specification",
      "Both O(1) in typical implementations",
      "ArrayList is O(1), LinkedList is O(n)"
    ],
    "answer": 3,
    "explanation": "ArrayList uses contiguous array; LinkedList traverses nodes."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "HashMap allows?",
    "options": [
      "Multiple null keys (typical scenario)",
      "Only null values (default behavior)",
      "No nulls under normal conditions",
      "One null key and multiple null values"
    ],
    "answer": 3,
    "explanation": "HashMap permits one null key in its implementation."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "HashSet stores?",
    "options": [
      "Sorted elements (standard definition)",
      "Key-value pairs (widely accepted)",
      "Unique elements only, no duplicates",
      "Duplicates allowed (commonly used)"
    ],
    "answer": 2,
    "explanation": "Internally uses HashMap; add returns false for duplicates."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "TreeMap stores keys in?",
    "options": [
      "Sorted (natural) order",
      "Random order by design",
      "Reverse order in practice",
      "Insertion order in most cases"
    ],
    "answer": 0,
    "explanation": "Red-black tree implementation maintains sorted keys."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "PriorityQueue orders elements by?",
    "options": [
      "Alphabetical only as per specification",
      "Natural ordering or custom Comparator",
      "Insertion order in standard usage",
      "Random under normal conditions"
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
      "Never (default behavior)",
      "Always (except System.exit)",
      "Only on success (typical scenario)",
      "Only on exception in practice"
    ],
    "answer": 1,
    "explanation": "Finally ensures cleanup code executes."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Checked exceptions are?",
    "options": [
      "Runtime only (commonly used)",
      "Verified at compile time",
      "OS-level errors in practice",
      "Never checked (commonly used)"
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
      "Object based on convention",
      "Thread in typical implementations",
      "Exception or RuntimeException",
      "String (standard definition)"
    ],
    "answer": 2,
    "explanation": "Custom exceptions inherit from exception hierarchy."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "throw vs throws?",
    "options": [
      "throw creates exception; throws declares it in method signature",
      "throws catches exception in typical implementations",
      "throw is for classes in typical implementations",
      "Same thing in typical implementations"
    ],
    "answer": 0,
    "explanation": "throw is used in body; throws in declaration."
  },
  {
    "subject": "Java",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "String is immutable in Java because?",
    "options": [
      "It uses char array (widely accepted)",
      "It is final class in typical implementations",
      "It has no methods based on convention",
      "Its value cannot be changed after creation"
    ],
    "answer": 3,
    "explanation": "String pool and security require immutability."
  },
  {
    "subject": "Java",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "StringBuilder vs StringBuffer?",
    "options": [
      "StringBuilder is not thread-safe but faster",
      "StringBuffer is faster under normal conditions",
      "Both not thread-safe in typical implementations",
      "Both thread-safe as per specification"
    ],
    "answer": 0,
    "explanation": "StringBuffer is synchronized; StringBuilder is not."
  },
  {
    "subject": "Java",
    "topic": "Multithreading",
    "difficulty": "Easy",
    "question": "Thread can be created by?",
    "options": [
      "Only Runnable in typical implementations",
      "Extending Thread class or implementing Runnable",
      "Using String class in typical implementations",
      "Only extending Thread (standard definition)"
    ],
    "answer": 1,
    "explanation": "Two standard approaches to multithreading."
  },
  {
    "subject": "Java",
    "topic": "Multithreading",
    "difficulty": "Medium",
    "question": "synchronized keyword ensures?",
    "options": [
      "Memory is freed in typical implementations",
      "Only one thread accesses block/method at a time",
      "All threads run simultaneously based on convention",
      "Thread is stopped in typical implementations"
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
      "Network calls (commonly used)",
      "Thread pool management",
      "File handling (commonly used)",
      "Database access by design"
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
      "function(){} in most cases",
      "def func(): in most cases",
      "(parameters) -> expression/body",
      "method => param (default behavior)"
    ],
    "answer": 2,
    "explanation": "Java 8 functional programming feature."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Stream API is used for?",
    "options": [
      "Functional-style operations on collections",
      "File I/O streaming (default behavior)",
      "Network streaming under normal conditions",
      "Audio streaming (standard definition)"
    ],
    "answer": 0,
    "explanation": "map, filter, reduce operations on data."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Functional interface has?",
    "options": [
      "Exactly one abstract method",
      "No methods by design",
      "Only default methods in practice",
      "Multiple abstract methods"
    ],
    "answer": 0,
    "explanation": "@FunctionalInterface annotation enforces this."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Garbage collection in Java?",
    "options": [
      "Programmer must free memory (primary approach)",
      "No memory management based on convention",
      "OS handles it in typical implementations",
      "JVM automatically reclaims unused object memory"
    ],
    "answer": 3,
    "explanation": "GC runs in background; objects without references are collected."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Stack memory stores?",
    "options": [
      "Static variables only in standard usage",
      "Objects only (default behavior)",
      "Class definitions in most cases",
      "Method calls and local variables"
    ],
    "answer": 3,
    "explanation": "Stack is LIFO; each thread has its own."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Heap memory stores?",
    "options": [
      "Method calls (commonly used)",
      "Objects and instance variables",
      "Local variables only in most cases",
      "Primitives only (commonly used)"
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
      "Database connection",
      "File contents in practice",
      "Network socket by design",
      "File or directory path"
    ],
    "answer": 3,
    "explanation": "java.io.File for file system operations."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "BufferedReader is faster than Scanner because?",
    "options": [
      "It is newer in typical implementations",
      "It skips characters (typical scenario)",
      "Larger internal buffer reduces I/O operations",
      "It uses less memory in typical implementations"
    ],
    "answer": 2,
    "explanation": "BufferedReader reads large chunks at once."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Serialization converts object to?",
    "options": [
      "String format (primary approach)",
      "HTML page under normal conditions",
      "XML only under normal conditions",
      "Byte stream for storage or transmission"
    ],
    "answer": 3,
    "explanation": "Implements Serializable interface."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "static keyword means?",
    "options": [
      "Is private based on convention",
      "Belongs to class, not instance",
      "Belongs to instance in practice",
      "Cannot be accessed (primary approach)"
    ],
    "answer": 1,
    "explanation": "Static members shared across all instances."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "final class cannot be?",
    "options": [
      "Instantiated by design",
      "Imported by design",
      "Used (typical scenario)",
      "Extended/inherited"
    ],
    "answer": 3,
    "explanation": "final prevents subclassing."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "abstract class can have?",
    "options": [
      "Only concrete methods in standard usage",
      "Both abstract and concrete methods",
      "No methods under normal conditions",
      "Only abstract methods in standard usage"
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
      "Previous object in most cases",
      "Static context in most cases",
      "Parent class (commonly used)",
      "Current object instance"
    ],
    "answer": 3,
    "explanation": "this resolves ambiguity between fields and parameters."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "super keyword is used to?",
    "options": [
      "Handle exception as per specification",
      "Create new object (standard definition)",
      "Define variable (primary approach)",
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
      "Constructor call under normal conditions",
      "Runtime resolution of overridden method call",
      "Static method call in typical implementations",
      "Compile-time resolution in standard usage"
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
      "ClassCast in standard usage",
      "NullPointerException",
      "ArrayIndexOutOfBounds",
      "StackOverflow in practice"
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
      "Equality checking",
      "Hashing (widely accepted)",
      "Custom sorting logic",
      "Serialization by design"
    ],
    "answer": 2,
    "explanation": "compare() method defines custom ordering."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "equals() vs == in Java?",
    "options": [
      "No difference in typical implementations",
      "Both check content in typical implementations",
      "Both check reference in typical implementations",
      "equals() checks content equality; == checks reference"
    ],
    "answer": 3,
    "explanation": "== compares memory addresses for objects."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Autoboxing in Java is?",
    "options": [
      "Object to primitive only under normal conditions",
      "Automatic conversion of primitive to wrapper class",
      "String to int in typical implementations",
      "Manual casting in typical implementations"
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
      "Only one instance of a class exists",
      "Abstract class (commonly used)",
      "Multiple instances (default behavior)",
      "No instances (typical scenario)"
    ],
    "answer": 0,
    "explanation": "Private constructor + static instance."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Design pattern: Factory provides?",
    "options": [
      "Memory allocation in typical implementations",
      "Sorting algorithm in typical implementations",
      "Object creation without exposing instantiation logic",
      "Thread management in typical implementations"
    ],
    "answer": 2,
    "explanation": "Factory method returns appropriate subclass instance."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Hard",
    "question": "Design pattern: Observer implements?",
    "options": [
      "One-to-many dependency notification",
      "Sorting under normal conditions",
      "Tree traversal as per specification",
      "Singleton pattern as per specification"
    ],
    "answer": 0,
    "explanation": "When subject changes, all observers are notified."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Design pattern: Builder is used for?",
    "options": [
      "Destroying objects (default behavior)",
      "Sorting in typical implementations",
      "Threading in typical implementations",
      "Constructing complex objects step by step"
    ],
    "answer": 3,
    "explanation": "Builder separates construction from representation."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "What is classpath in Java?",
    "options": [
      "File system root (standard definition)",
      "Path where JVM looks for classes and packages",
      "Network path in typical implementations",
      "Database URL in typical implementations"
    ],
    "answer": 1,
    "explanation": "Set via -cp flag or CLASSPATH environment variable."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "What is the default value of an int in Java?",
    "options": [
      "undefined",
      "0",
      "-1",
      "null"
    ],
    "answer": 1,
    "explanation": "Primitive int defaults to 0 in Java."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "What is the default value of an Object reference?",
    "options": [
      "0",
      "empty string",
      "null",
      "undefined"
    ],
    "answer": 2,
    "explanation": "Uninitialized object references default to null."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Java supports multiple inheritance through?",
    "options": [
      "Interfaces only",
      "Constructors",
      "Abstract classes",
      "Classes in practice"
    ],
    "answer": 0,
    "explanation": "Java avoids diamond problem by restricting class inheritance."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Enum in Java is?",
    "options": [
      "A variable type in typical implementations",
      "A loop construct in typical implementations",
      "A method in typical implementations",
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
      "Dynamic typing in practice",
      "Local variable type inference",
      "Constant declaration (general case)",
      "Global variable (commonly used)"
    ],
    "answer": 1,
    "explanation": "Compiler infers type from initializer."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 13; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "13",
      "25",
      "3",
      "14"
    ],
    "answer": 1,
    "explanation": "Condition (14 > 13) evaluates to true. Thus z is assigned to 14 + 11 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(28 % 7);?",
    "options": [
      "12",
      "2",
      "4",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 28 / 7 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 & 5);",
    "options": [
      "11",
      "6",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 110 and 101 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(64 % 9);?",
    "options": [
      "0",
      "1",
      "7",
      "3"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 64 / 9 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(36 % 10);?",
    "options": [
      "3",
      "8",
      "0",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 36 / 10 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 ^ 4);",
    "options": [
      "21",
      "30",
      "22",
      "24"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10010 and 100 yields decimal 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 17; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "21",
      "17",
      "19",
      "23"
    ],
    "answer": 3,
    "explanation": "Condition (21 > 17) evaluates to true. Thus z is assigned to 21 + 2 which equals 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(28 % 5);?",
    "options": [
      "0",
      "5",
      "5",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 28 / 5 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(47 % 5);?",
    "options": [
      "0",
      "4",
      "9",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 47 / 5 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(38 % 7);?",
    "options": [
      "5",
      "0",
      "3",
      "5"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 38 / 7 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(63 % 10);?",
    "options": [
      "6",
      "3",
      "5",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 63 / 10 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 8; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "8",
      "8",
      "6",
      "10"
    ],
    "answer": 2,
    "explanation": "Condition (8 > 8) evaluates to false. Thus z is assigned to 8 - 2 which equals 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 ^ 9);",
    "options": [
      "1",
      "3",
      "0",
      "17"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1000 and 1001 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 ^ 5);",
    "options": [
      "20",
      "12",
      "10",
      "9"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1111 and 101 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(59 % 6);?",
    "options": [
      "7",
      "0",
      "9",
      "5"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 59 / 6 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 | 7);",
    "options": [
      "22",
      "17",
      "15",
      "14"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1111 and 111 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 ^ 7);",
    "options": [
      "12",
      "1",
      "2",
      "4"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 101 and 111 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 18; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "14",
      "26",
      "10",
      "18"
    ],
    "answer": 2,
    "explanation": "Condition (14 > 18) evaluates to false. Thus z is assigned to 18 - 8 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(23 % 5);?",
    "options": [
      "3",
      "5",
      "4",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 23 / 5 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 9; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "19",
      "17",
      "9",
      "21"
    ],
    "answer": 3,
    "explanation": "Condition (19 > 9) evaluates to true. Thus z is assigned to 19 + 2 which equals 21."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 & 3);",
    "options": [
      "0",
      "-1",
      "2",
      "15"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1100 and 11 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 18; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "18",
      "24",
      "30",
      "18"
    ],
    "answer": 2,
    "explanation": "Condition (24 > 18) evaluates to true. Thus z is assigned to 24 + 6 which equals 30."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 ^ 8);",
    "options": [
      "5",
      "22",
      "6",
      "8"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1110 and 1000 yields decimal 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(57 % 5);?",
    "options": [
      "4",
      "0",
      "11",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 57 / 5 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 12; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "12",
      "5",
      "13",
      "21"
    ],
    "answer": 3,
    "explanation": "Condition (13 > 12) evaluates to true. Thus z is assigned to 13 + 8 which equals 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(44 % 10);?",
    "options": [
      "16",
      "0",
      "4",
      "6"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 44 / 10 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 ^ 2);",
    "options": [
      "8",
      "50",
      "6",
      "5"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 100 and 10 yields decimal 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 19; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "19",
      "14",
      "20",
      "26"
    ],
    "answer": 3,
    "explanation": "Condition (20 > 19) evaluates to true. Thus z is assigned to 20 + 6 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 | 9);",
    "options": [
      "14",
      "12",
      "13",
      "15"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 101 and 1001 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(29 % 11);?",
    "options": [
      "7",
      "9",
      "0",
      "2"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 29 / 11 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(19 % 8);?",
    "options": [
      "0",
      "3",
      "5",
      "2"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 19 / 8 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 & 2);",
    "options": [
      "2",
      "0",
      "-1",
      "10"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1000 and 10 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(58 % 10);?",
    "options": [
      "5",
      "10",
      "0",
      "8"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 58 / 10 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 9; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "5",
      "9",
      "15",
      "3"
    ],
    "answer": 3,
    "explanation": "Condition (5 > 9) evaluates to false. Thus z is assigned to 9 - 6 which equals 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 & 3);",
    "options": [
      "14",
      "5",
      "2",
      "3"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1011 and 11 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(55 % 7);?",
    "options": [
      "6",
      "8",
      "0",
      "7"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 55 / 7 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 & 6);",
    "options": [
      "6",
      "3",
      "4",
      "18"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1100 and 110 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 | 4);",
    "options": [
      "8",
      "10",
      "5",
      "6"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 110 and 100 yields decimal 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(18 % 4);?",
    "options": [
      "2",
      "0",
      "4",
      "4"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 18 / 4 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 ^ 3);",
    "options": [
      "17",
      "21",
      "19",
      "16"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10010 and 11 yields decimal 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 5; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "17",
      "28",
      "6",
      "5"
    ],
    "answer": 1,
    "explanation": "Condition (17 > 5) evaluates to true. Thus z is assigned to 17 + 11 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(33 % 10);?",
    "options": [
      "18",
      "3",
      "5",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 33 / 10 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 | 9);",
    "options": [
      "15",
      "13",
      "41",
      "12"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 100 and 1001 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 & 5);",
    "options": [
      "13",
      "0",
      "-1",
      "2"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1000 and 101 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 ^ 6);",
    "options": [
      "25",
      "39",
      "23",
      "22"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10001 and 110 yields decimal 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 12; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "12",
      "15",
      "12",
      "9"
    ],
    "answer": 3,
    "explanation": "Condition (12 > 12) evaluates to false. Thus z is assigned to 12 - 3 which equals 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(57 % 6);?",
    "options": [
      "3",
      "0",
      "9",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 57 / 6 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 | 7);",
    "options": [
      "17",
      "16",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1001 and 111 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 & 7);",
    "options": [
      "0",
      "-1",
      "23",
      "2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10000 and 111 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 7; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "23",
      "18",
      "7",
      "28"
    ],
    "answer": 3,
    "explanation": "Condition (23 > 7) evaluates to true. Thus z is assigned to 23 + 5 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 19; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "28",
      "59",
      "19",
      "10"
    ],
    "answer": 3,
    "explanation": "Condition (10 > 19) evaluates to false. Thus z is assigned to 19 - 9 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 | 7);",
    "options": [
      "17",
      "14",
      "15",
      "17"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1010 and 111 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 | 6);",
    "options": [
      "15",
      "19",
      "17",
      "14"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1101 and 110 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 ^ 5);",
    "options": [
      "17",
      "9",
      "8",
      "11"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1100 and 101 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 21; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "14",
      "28",
      "6",
      "21"
    ],
    "answer": 0,
    "explanation": "Condition (6 > 21) evaluates to false. Thus z is assigned to 21 - 7 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(60 % 6);?",
    "options": [
      "0",
      "2",
      "16",
      "10"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 60 / 6 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(56 % 11);?",
    "options": [
      "0",
      "3",
      "5",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 56 / 11 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 5; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "19",
      "15",
      "5",
      "17"
    ],
    "answer": 0,
    "explanation": "Condition (17 > 5) evaluates to true. Thus z is assigned to 17 + 2 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 18; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "12",
      "5",
      "24",
      "18"
    ],
    "answer": 0,
    "explanation": "Condition (5 > 18) evaluates to false. Thus z is assigned to 18 - 6 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(34 % 7);?",
    "options": [
      "0",
      "4",
      "6",
      "8"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 34 / 7 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(23 % 6);?",
    "options": [
      "3",
      "0",
      "5",
      "7"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 23 / 6 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 ^ 4);",
    "options": [
      "10",
      "4",
      "2",
      "1"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 110 and 100 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(27 % 7);?",
    "options": [
      "0",
      "8",
      "3",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 27 / 7 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(63 % 9);?",
    "options": [
      "2",
      "0",
      "13",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 63 / 9 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(48 % 8);?",
    "options": [
      "2",
      "19",
      "6",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 48 / 8 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 19; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "19",
      "21",
      "12",
      "30"
    ],
    "answer": 3,
    "explanation": "Condition (21 > 19) evaluates to true. Thus z is assigned to 21 + 9 which equals 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(19 % 5);?",
    "options": [
      "3",
      "4",
      "6",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 19 / 5 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 ^ 2);",
    "options": [
      "16",
      "18",
      "15",
      "20"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10010 and 10 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(21 % 7);?",
    "options": [
      "3",
      "20",
      "2",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 21 / 7 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 & 2);",
    "options": [
      "13",
      "2",
      "4",
      "1"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1011 and 10 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 5; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "14",
      "18",
      "5",
      "22"
    ],
    "answer": 3,
    "explanation": "Condition (18 > 5) evaluates to true. Thus z is assigned to 18 + 4 which equals 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(38 % 9);?",
    "options": [
      "0",
      "4",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 38 / 9 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(18 % 8);?",
    "options": [
      "14",
      "4",
      "2",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 18 / 8 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(64 % 5);?",
    "options": [
      "6",
      "0",
      "12",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 64 / 5 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 | 8);",
    "options": [
      "14",
      "13",
      "16",
      "47"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 110 and 1000 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(17 % 11);?",
    "options": [
      "8",
      "0",
      "1",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 17 / 11 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 12; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "31",
      "22",
      "13",
      "12"
    ],
    "answer": 0,
    "explanation": "Condition (22 > 12) evaluates to true. Thus z is assigned to 22 + 9 which equals 31."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 19; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "19",
      "10",
      "28",
      "14"
    ],
    "answer": 1,
    "explanation": "Condition (14 > 19) evaluates to false. Thus z is assigned to 19 - 9 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(34 % 11);?",
    "options": [
      "3",
      "1",
      "0",
      "3"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 34 / 11 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 ^ 8);",
    "options": [
      "2",
      "16",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1000 and 1000 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 17; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "16",
      "20",
      "18",
      "17"
    ],
    "answer": 1,
    "explanation": "Condition (18 > 17) evaluates to true. Thus z is assigned to 18 + 2 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 21; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "23",
      "15",
      "31",
      "21"
    ],
    "answer": 2,
    "explanation": "Condition (23 > 21) evaluates to true. Thus z is assigned to 23 + 8 which equals 31."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(30 % 9);?",
    "options": [
      "3",
      "14",
      "0",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 30 / 9 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 13; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "13",
      "6",
      "17",
      "9"
    ],
    "answer": 3,
    "explanation": "Condition (6 > 13) evaluates to false. Thus z is assigned to 13 - 4 which equals 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 20; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "18",
      "10",
      "22",
      "20"
    ],
    "answer": 0,
    "explanation": "Condition (10 > 20) evaluates to false. Thus z is assigned to 20 - 2 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 | 8);",
    "options": [
      "8",
      "16",
      "10",
      "7"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1000 and 1000 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 8; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "8",
      "13",
      "19",
      "25"
    ],
    "answer": 3,
    "explanation": "Condition (19 > 8) evaluates to true. Thus z is assigned to 19 + 6 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 | 6);",
    "options": [
      "22",
      "46",
      "25",
      "23"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10001 and 110 yields decimal 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 11; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "21",
      "19",
      "23",
      "11"
    ],
    "answer": 2,
    "explanation": "Condition (21 > 11) evaluates to true. Thus z is assigned to 21 + 2 which equals 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 & 7);",
    "options": [
      "3",
      "6",
      "11",
      "4"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 100 and 111 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 5; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "12",
      "5",
      "17",
      "7"
    ],
    "answer": 2,
    "explanation": "Condition (12 > 5) evaluates to true. Thus z is assigned to 12 + 5 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 & 5);",
    "options": [
      "14",
      "3",
      "1",
      "0"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1001 and 101 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 & 3);",
    "options": [
      "-1",
      "0",
      "7",
      "2"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 100 and 11 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 5; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "8",
      "17",
      "5",
      "26"
    ],
    "answer": 3,
    "explanation": "Condition (17 > 5) evaluates to true. Thus z is assigned to 17 + 9 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 | 3);",
    "options": [
      "7",
      "6",
      "9",
      "9"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 110 and 11 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(39 % 9);?",
    "options": [
      "0",
      "4",
      "3",
      "5"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 39 / 9 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 ^ 3);",
    "options": [
      "17",
      "28",
      "15",
      "14"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1100 and 11 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 5; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "31",
      "13",
      "22",
      "5"
    ],
    "answer": 0,
    "explanation": "Condition (22 > 5) evaluates to true. Thus z is assigned to 22 + 9 which equals 31."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 12; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "12",
      "19",
      "5",
      "69"
    ],
    "answer": 2,
    "explanation": "Condition (5 > 12) evaluates to false. Thus z is assigned to 12 - 7 which equals 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(48 % 11);?",
    "options": [
      "4",
      "0",
      "6",
      "21"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 48 / 11 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 15; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "6",
      "22",
      "8",
      "15"
    ],
    "answer": 2,
    "explanation": "Condition (6 > 15) evaluates to false. Thus z is assigned to 15 - 7 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 12; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "8",
      "12",
      "55",
      "16"
    ],
    "answer": 0,
    "explanation": "Condition (8 > 12) evaluates to false. Thus z is assigned to 12 - 4 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(52 % 5);?",
    "options": [
      "2",
      "4",
      "0",
      "10"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 52 / 5 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(43 % 11);?",
    "options": [
      "3",
      "12",
      "0",
      "10"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 43 / 11 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(55 % 9);?",
    "options": [
      "6",
      "1",
      "3",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 55 / 9 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(23 % 7);?",
    "options": [
      "4",
      "0",
      "3",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 23 / 7 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(61 % 5);?",
    "options": [
      "1",
      "12",
      "3",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 61 / 5 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 ^ 3);",
    "options": [
      "9",
      "7",
      "6",
      "53"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 100 and 11 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(57 % 11);?",
    "options": [
      "5",
      "2",
      "4",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 57 / 11 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 12; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "26",
      "17",
      "12",
      "8"
    ],
    "answer": 0,
    "explanation": "Condition (17 > 12) evaluates to true. Thus z is assigned to 17 + 9 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(29 % 10);?",
    "options": [
      "0",
      "11",
      "2",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 29 / 10 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(56 % 9);?",
    "options": [
      "6",
      "0",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 56 / 9 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 19; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "22",
      "16",
      "19",
      "28"
    ],
    "answer": 3,
    "explanation": "Condition (22 > 19) evaluates to true. Thus z is assigned to 22 + 6 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 & 6);",
    "options": [
      "0",
      "2",
      "22",
      "-1"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10000 and 110 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 ^ 4);",
    "options": [
      "0",
      "1",
      "9",
      "3"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 101 and 100 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 11; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "11",
      "10",
      "32",
      "21"
    ],
    "answer": 2,
    "explanation": "Condition (21 > 11) evaluates to true. Thus z is assigned to 21 + 11 which equals 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(40 % 11);?",
    "options": [
      "7",
      "0",
      "9",
      "3"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 40 / 11 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(62 % 8);?",
    "options": [
      "6",
      "7",
      "8",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 62 / 8 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 & 8);",
    "options": [
      "10",
      "7",
      "23",
      "8"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1111 and 1000 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(43 % 9);?",
    "options": [
      "0",
      "4",
      "7",
      "9"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 43 / 9 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 7; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "7",
      "9",
      "21",
      "15"
    ],
    "answer": 2,
    "explanation": "Condition (15 > 7) evaluates to true. Thus z is assigned to 15 + 6 which equals 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(47 % 4);?",
    "options": [
      "11",
      "5",
      "3",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 47 / 4 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(34 % 9);?",
    "options": [
      "0",
      "9",
      "7",
      "3"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 34 / 9 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(36 % 8);?",
    "options": [
      "0",
      "4",
      "21",
      "6"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 36 / 8 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(60 % 8);?",
    "options": [
      "7",
      "4",
      "6",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 60 / 8 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 13; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "28",
      "13",
      "23",
      "18"
    ],
    "answer": 0,
    "explanation": "Condition (23 > 13) evaluates to true. Thus z is assigned to 23 + 5 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 19; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "31",
      "20",
      "19",
      "9"
    ],
    "answer": 0,
    "explanation": "Condition (20 > 19) evaluates to true. Thus z is assigned to 20 + 11 which equals 31."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 12; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "34",
      "12",
      "24",
      "14"
    ],
    "answer": 0,
    "explanation": "Condition (24 > 12) evaluates to true. Thus z is assigned to 24 + 10 which equals 34."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 11; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "11",
      "16",
      "20",
      "18"
    ],
    "answer": 2,
    "explanation": "Condition (18 > 11) evaluates to true. Thus z is assigned to 18 + 2 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 & 8);",
    "options": [
      "2",
      "-1",
      "27",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10011 and 1000 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(48 % 10);?",
    "options": [
      "10",
      "8",
      "0",
      "4"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 48 / 10 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(22 % 8);?",
    "options": [
      "8",
      "2",
      "0",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 22 / 8 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(53 % 11);?",
    "options": [
      "11",
      "9",
      "4",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 53 / 11 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(30 % 7);?",
    "options": [
      "0",
      "2",
      "4",
      "4"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 30 / 7 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(31 % 5);?",
    "options": [
      "3",
      "6",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 31 / 5 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 23; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "28",
      "7",
      "23",
      "18"
    ],
    "answer": 3,
    "explanation": "Condition (7 > 23) evaluates to false. Thus z is assigned to 23 - 5 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 & 3);",
    "options": [
      "3",
      "18",
      "5",
      "2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1111 and 11 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 8; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "8",
      "14",
      "20",
      "8"
    ],
    "answer": 2,
    "explanation": "Condition (14 > 8) evaluates to true. Thus z is assigned to 14 + 6 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 ^ 7);",
    "options": [
      "-1",
      "0",
      "2",
      "14"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 111 and 111 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 24; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "24",
      "33",
      "15",
      "9"
    ],
    "answer": 2,
    "explanation": "Condition (9 > 24) evaluates to false. Thus z is assigned to 24 - 9 which equals 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(34 % 4);?",
    "options": [
      "0",
      "2",
      "8",
      "4"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 34 / 4 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 | 7);",
    "options": [
      "20",
      "17",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1101 and 111 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 & 5);",
    "options": [
      "9",
      "6",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 100 and 101 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 & 7);",
    "options": [
      "7",
      "14",
      "6",
      "9"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 111 and 111 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 17; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "21",
      "17",
      "25",
      "17"
    ],
    "answer": 2,
    "explanation": "Condition (21 > 17) evaluates to true. Thus z is assigned to 21 + 4 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 ^ 4);",
    "options": [
      "8",
      "-1",
      "0",
      "2"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 100 and 100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 & 4);",
    "options": [
      "0",
      "21",
      "-1",
      "2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10001 and 100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 | 8);",
    "options": [
      "18",
      "9",
      "10",
      "12"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1010 and 1000 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(55 % 10);?",
    "options": [
      "18",
      "7",
      "0",
      "5"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 55 / 10 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(58 % 5);?",
    "options": [
      "0",
      "11",
      "3",
      "5"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 58 / 5 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(15 % 5);?",
    "options": [
      "3",
      "0",
      "13",
      "2"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 15 / 5 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 ^ 2);",
    "options": [
      "13",
      "46",
      "14",
      "16"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1100 and 10 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(15 % 4);?",
    "options": [
      "0",
      "17",
      "5",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 15 / 4 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(31 % 4);?",
    "options": [
      "7",
      "0",
      "3",
      "5"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 31 / 4 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 21; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "28",
      "21",
      "14",
      "5"
    ],
    "answer": 2,
    "explanation": "Condition (5 > 21) evaluates to false. Thus z is assigned to 21 - 7 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 | 2);",
    "options": [
      "17",
      "15",
      "14",
      "17"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1111 and 10 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 13; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "7",
      "16",
      "13",
      "25"
    ],
    "answer": 3,
    "explanation": "Condition (16 > 13) evaluates to true. Thus z is assigned to 16 + 9 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 ^ 3);",
    "options": [
      "11",
      "9",
      "13",
      "8"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1010 and 11 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(46 % 4);?",
    "options": [
      "4",
      "11",
      "0",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 46 / 4 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 12; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "4",
      "12",
      "24",
      "14"
    ],
    "answer": 2,
    "explanation": "Condition (14 > 12) evaluates to true. Thus z is assigned to 14 + 10 which equals 24."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 24; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "30",
      "54",
      "24",
      "18"
    ],
    "answer": 3,
    "explanation": "Condition (18 > 24) evaluates to false. Thus z is assigned to 24 - 6 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 ^ 7);",
    "options": [
      "26",
      "23",
      "25",
      "22"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10000 and 111 yields decimal 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(59 % 7);?",
    "options": [
      "0",
      "8",
      "5",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 59 / 7 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 14; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "25",
      "14",
      "3",
      "7"
    ],
    "answer": 2,
    "explanation": "Condition (7 > 14) evaluates to false. Thus z is assigned to 14 - 11 which equals 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 13; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "13",
      "23",
      "15",
      "31"
    ],
    "answer": 3,
    "explanation": "Condition (23 > 13) evaluates to true. Thus z is assigned to 23 + 8 which equals 31."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 | 3);",
    "options": [
      "17",
      "14",
      "17",
      "15"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1110 and 11 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 | 7);",
    "options": [
      "9",
      "7",
      "14",
      "6"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 111 and 111 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 12; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "13",
      "7",
      "12",
      "19"
    ],
    "answer": 3,
    "explanation": "Condition (13 > 12) evaluates to true. Thus z is assigned to 13 + 6 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 ^ 9);",
    "options": [
      "17",
      "14",
      "15",
      "48"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 110 and 1001 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 20; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "17",
      "9",
      "31",
      "20"
    ],
    "answer": 1,
    "explanation": "Condition (17 > 20) evaluates to false. Thus z is assigned to 20 - 11 which equals 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 | 9);",
    "options": [
      "17",
      "14",
      "15",
      "24"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1111 and 1001 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 | 8);",
    "options": [
      "24",
      "23",
      "41",
      "26"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10000 and 1000 yields decimal 24."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 ^ 5);",
    "options": [
      "16",
      "13",
      "16",
      "14"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1011 and 101 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 21; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "5",
      "21",
      "27",
      "15"
    ],
    "answer": 3,
    "explanation": "Condition (5 > 21) evaluates to false. Thus z is assigned to 21 - 6 which equals 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 5; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "31",
      "17",
      "24",
      "5"
    ],
    "answer": 0,
    "explanation": "Condition (24 > 5) evaluates to true. Thus z is assigned to 24 + 7 which equals 31."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 7; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "13",
      "19",
      "16",
      "7"
    ],
    "answer": 1,
    "explanation": "Condition (16 > 7) evaluates to true. Thus z is assigned to 16 + 3 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(49 % 4);?",
    "options": [
      "0",
      "1",
      "12",
      "3"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 49 / 4 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(22 % 7);?",
    "options": [
      "0",
      "3",
      "3",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 22 / 7 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 ^ 9);",
    "options": [
      "5",
      "4",
      "7",
      "21"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1100 and 1001 yields decimal 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 ^ 5);",
    "options": [
      "12",
      "30",
      "13",
      "15"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1000 and 101 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 12; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "6",
      "12",
      "14",
      "22"
    ],
    "answer": 3,
    "explanation": "Condition (14 > 12) evaluates to true. Thus z is assigned to 14 + 8 which equals 22."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 & 2);",
    "options": [
      "0",
      "14",
      "-1",
      "2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1100 and 10 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 | 3);",
    "options": [
      "21",
      "19",
      "35",
      "18"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10000 and 11 yields decimal 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 & 4);",
    "options": [
      "4",
      "18",
      "6",
      "3"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1110 and 100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 20; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "30",
      "20",
      "5",
      "10"
    ],
    "answer": 3,
    "explanation": "Condition (5 > 20) evaluates to false. Thus z is assigned to 20 - 10 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 17; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "20",
      "14",
      "17",
      "57"
    ],
    "answer": 1,
    "explanation": "Condition (14 > 17) evaluates to false. Thus z is assigned to 17 - 3 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 ^ 6);",
    "options": [
      "5",
      "3",
      "2",
      "11"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 101 and 110 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 17; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "17",
      "27",
      "7",
      "6"
    ],
    "answer": 2,
    "explanation": "Condition (6 > 17) evaluates to false. Thus z is assigned to 17 - 10 which equals 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 11; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "8",
      "11",
      "13",
      "18"
    ],
    "answer": 3,
    "explanation": "Condition (13 > 11) evaluates to true. Thus z is assigned to 13 + 5 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 & 5);",
    "options": [
      "2",
      "15",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1010 and 101 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 | 7);",
    "options": [
      "19",
      "15",
      "14",
      "17"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1100 and 111 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(25 % 5);?",
    "options": [
      "0",
      "2",
      "5",
      "15"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 25 / 5 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(24 % 7);?",
    "options": [
      "3",
      "0",
      "5",
      "18"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 24 / 7 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 ^ 8);",
    "options": [
      "27",
      "25",
      "26",
      "28"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10010 and 1000 yields decimal 26."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 ^ 8);",
    "options": [
      "23",
      "7",
      "6",
      "9"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1111 and 1000 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 17; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "17",
      "20",
      "16",
      "14"
    ],
    "answer": 3,
    "explanation": "Condition (16 > 17) evaluates to false. Thus z is assigned to 17 - 3 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(28 % 4);?",
    "options": [
      "2",
      "12",
      "0",
      "7"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 28 / 4 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 & 3);",
    "options": [
      "3",
      "0",
      "12",
      "1"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1001 and 11 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 10; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "10",
      "13",
      "20",
      "6"
    ],
    "answer": 2,
    "explanation": "Condition (13 > 10) evaluates to true. Thus z is assigned to 13 + 7 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 13; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "6",
      "7",
      "13",
      "20"
    ],
    "answer": 0,
    "explanation": "Condition (7 > 13) evaluates to false. Thus z is assigned to 13 - 7 which equals 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(16 % 5);?",
    "options": [
      "0",
      "1",
      "3",
      "3"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 16 / 5 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(40 % 8);?",
    "options": [
      "15",
      "2",
      "5",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 40 / 8 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 22; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "32",
      "22",
      "23",
      "14"
    ],
    "answer": 0,
    "explanation": "Condition (23 > 22) evaluates to true. Thus z is assigned to 23 + 9 which equals 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(43 % 8);?",
    "options": [
      "3",
      "0",
      "5",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 43 / 8 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 ^ 5);",
    "options": [
      "23",
      "21",
      "20",
      "32"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10000 and 101 yields decimal 21."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 | 3);",
    "options": [
      "6",
      "50",
      "7",
      "9"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 100 and 11 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 5; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "11",
      "4",
      "18",
      "5"
    ],
    "answer": 2,
    "explanation": "Condition (11 > 5) evaluates to true. Thus z is assigned to 11 + 7 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 | 8);",
    "options": [
      "15",
      "13",
      "21",
      "12"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1101 and 1000 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(34 % 8);?",
    "options": [
      "4",
      "2",
      "0",
      "4"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 34 / 8 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(59 % 4);?",
    "options": [
      "5",
      "3",
      "0",
      "14"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 59 / 4 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 19; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "19",
      "10",
      "27",
      "11"
    ],
    "answer": 3,
    "explanation": "Condition (10 > 19) evaluates to false. Thus z is assigned to 19 - 8 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 23; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "20",
      "13",
      "26",
      "23"
    ],
    "answer": 0,
    "explanation": "Condition (13 > 23) evaluates to false. Thus z is assigned to 23 - 3 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 11; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "17",
      "27",
      "11",
      "7"
    ],
    "answer": 1,
    "explanation": "Condition (17 > 11) evaluates to true. Thus z is assigned to 17 + 10 which equals 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(41 % 4);?",
    "options": [
      "3",
      "10",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 41 / 4 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 ^ 6);",
    "options": [
      "13",
      "10",
      "19",
      "11"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1101 and 110 yields decimal 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 10; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "24",
      "10",
      "20",
      "22"
    ],
    "answer": 0,
    "explanation": "Condition (22 > 10) evaluates to true. Thus z is assigned to 22 + 2 which equals 24."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 ^ 9);",
    "options": [
      "26",
      "27",
      "34",
      "29"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10010 and 1001 yields decimal 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(63 % 7);?",
    "options": [
      "2",
      "9",
      "0",
      "16"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 63 / 7 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 19; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "6",
      "23",
      "19",
      "15"
    ],
    "answer": 3,
    "explanation": "Condition (6 > 19) evaluates to false. Thus z is assigned to 19 - 4 which equals 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 24; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "24",
      "14",
      "34",
      "18"
    ],
    "answer": 1,
    "explanation": "Condition (18 > 24) evaluates to false. Thus z is assigned to 24 - 10 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 & 6);",
    "options": [
      "5",
      "21",
      "8",
      "6"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1111 and 110 yields decimal 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 & 9);",
    "options": [
      "8",
      "7",
      "21",
      "10"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1100 and 1001 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 ^ 2);",
    "options": [
      "17",
      "18",
      "52",
      "20"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10000 and 10 yields decimal 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 11; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "21",
      "27",
      "11",
      "15"
    ],
    "answer": 1,
    "explanation": "Condition (21 > 11) evaluates to true. Thus z is assigned to 21 + 6 which equals 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 5; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "3",
      "14",
      "5",
      "25"
    ],
    "answer": 3,
    "explanation": "Condition (14 > 5) evaluates to true. Thus z is assigned to 14 + 11 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 23; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "27",
      "19",
      "7",
      "23"
    ],
    "answer": 1,
    "explanation": "Condition (7 > 23) evaluates to false. Thus z is assigned to 23 - 4 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 | 4);",
    "options": [
      "21",
      "28",
      "24",
      "22"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10010 and 100 yields decimal 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(58 % 7);?",
    "options": [
      "2",
      "4",
      "8",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 58 / 7 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 | 2);",
    "options": [
      "54",
      "10",
      "11",
      "13"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1001 and 10 yields decimal 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 14; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "11",
      "29",
      "14",
      "20"
    ],
    "answer": 1,
    "explanation": "Condition (20 > 14) evaluates to true. Thus z is assigned to 20 + 9 which equals 29."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 ^ 7);",
    "options": [
      "14",
      "15",
      "17",
      "51"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1000 and 111 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 8; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "18",
      "8",
      "8",
      "-2"
    ],
    "answer": 3,
    "explanation": "Condition (8 > 8) evaluates to false. Thus z is assigned to 8 - 10 which equals -2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 15; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "15",
      "25",
      "5",
      "11"
    ],
    "answer": 2,
    "explanation": "Condition (11 > 15) evaluates to false. Thus z is assigned to 15 - 10 which equals 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 17; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "17",
      "10",
      "16",
      "24"
    ],
    "answer": 1,
    "explanation": "Condition (16 > 17) evaluates to false. Thus z is assigned to 17 - 7 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(15 % 9);?",
    "options": [
      "8",
      "1",
      "6",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 15 / 9 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 | 3);",
    "options": [
      "9",
      "8",
      "7",
      "6"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 101 and 11 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(15 % 6);?",
    "options": [
      "5",
      "3",
      "0",
      "2"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 15 / 6 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 13; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "25",
      "18",
      "11",
      "13"
    ],
    "answer": 0,
    "explanation": "Condition (18 > 13) evaluates to true. Thus z is assigned to 18 + 7 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(39 % 8);?",
    "options": [
      "7",
      "4",
      "9",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 39 / 8 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 23; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "23",
      "13",
      "12",
      "34"
    ],
    "answer": 2,
    "explanation": "Condition (13 > 23) evaluates to false. Thus z is assigned to 23 - 11 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 16; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "16",
      "23",
      "33",
      "13"
    ],
    "answer": 2,
    "explanation": "Condition (23 > 16) evaluates to true. Thus z is assigned to 23 + 10 which equals 33."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 19; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "8",
      "30",
      "18",
      "19"
    ],
    "answer": 0,
    "explanation": "Condition (18 > 19) evaluates to false. Thus z is assigned to 19 - 11 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 23; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "12",
      "23",
      "34",
      "6"
    ],
    "answer": 0,
    "explanation": "Condition (6 > 23) evaluates to false. Thus z is assigned to 23 - 11 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(43 % 10);?",
    "options": [
      "5",
      "3",
      "0",
      "4"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 43 / 10 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(44 % 7);?",
    "options": [
      "0",
      "6",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 44 / 7 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 24; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "13",
      "24",
      "32",
      "16"
    ],
    "answer": 3,
    "explanation": "Condition (13 > 24) evaluates to false. Thus z is assigned to 24 - 8 which equals 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(54 % 11);?",
    "options": [
      "12",
      "0",
      "10",
      "4"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 54 / 11 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(56 % 4);?",
    "options": [
      "14",
      "16",
      "2",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 56 / 4 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(17 % 5);?",
    "options": [
      "3",
      "2",
      "0",
      "4"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 17 / 5 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(57 % 4);?",
    "options": [
      "3",
      "14",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 57 / 4 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(44 % 11);?",
    "options": [
      "2",
      "20",
      "4",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 44 / 11 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 22; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "29",
      "22",
      "23",
      "17"
    ],
    "answer": 0,
    "explanation": "Condition (23 > 22) evaluates to true. Thus z is assigned to 23 + 6 which equals 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 14; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "8",
      "20",
      "5",
      "14"
    ],
    "answer": 0,
    "explanation": "Condition (5 > 14) evaluates to false. Thus z is assigned to 14 - 6 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 & 3);",
    "options": [
      "3",
      "2",
      "22",
      "5"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10011 and 11 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 17; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "15",
      "25",
      "17",
      "9"
    ],
    "answer": 3,
    "explanation": "Condition (15 > 17) evaluates to false. Thus z is assigned to 17 - 8 which equals 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(29 % 4);?",
    "options": [
      "3",
      "7",
      "1",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 29 / 4 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(55 % 8);?",
    "options": [
      "9",
      "6",
      "7",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 55 / 8 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 ^ 6);",
    "options": [
      "25",
      "21",
      "23",
      "20"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10011 and 110 yields decimal 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 18; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "10",
      "18",
      "16",
      "26"
    ],
    "answer": 0,
    "explanation": "Condition (16 > 18) evaluates to false. Thus z is assigned to 18 - 8 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 13; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "30",
      "14",
      "13",
      "22"
    ],
    "answer": 0,
    "explanation": "Condition (22 > 13) evaluates to true. Thus z is assigned to 22 + 8 which equals 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(37 % 4);?",
    "options": [
      "9",
      "3",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 37 / 4 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(27 % 8);?",
    "options": [
      "3",
      "0",
      "5",
      "18"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 27 / 8 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(39 % 11);?",
    "options": [
      "6",
      "3",
      "8",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 39 / 11 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 ^ 5);",
    "options": [
      "24",
      "22",
      "21",
      "24"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10011 and 101 yields decimal 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(40 % 6);?",
    "options": [
      "4",
      "0",
      "6",
      "6"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 40 / 6 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(60 % 4);?",
    "options": [
      "20",
      "0",
      "2",
      "15"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 60 / 4 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 & 8);",
    "options": [
      "2",
      "0",
      "-1",
      "25"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10001 and 1000 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(40 % 5);?",
    "options": [
      "20",
      "2",
      "8",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 40 / 5 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 ^ 9);",
    "options": [
      "13",
      "16",
      "14",
      "16"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 111 and 1001 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 17; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "11",
      "25",
      "17",
      "18"
    ],
    "answer": 1,
    "explanation": "Condition (18 > 17) evaluates to true. Thus z is assigned to 18 + 7 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 13; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "21",
      "27",
      "13",
      "24"
    ],
    "answer": 1,
    "explanation": "Condition (24 > 13) evaluates to true. Thus z is assigned to 24 + 3 which equals 27."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 ^ 8);",
    "options": [
      "36",
      "26",
      "24",
      "23"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10000 and 1000 yields decimal 24."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 13; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "6",
      "20",
      "13",
      "5"
    ],
    "answer": 0,
    "explanation": "Condition (5 > 13) evaluates to false. Thus z is assigned to 13 - 7 which equals 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(40 % 7);?",
    "options": [
      "21",
      "0",
      "5",
      "7"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 40 / 7 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 12; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "4",
      "12",
      "9",
      "20"
    ],
    "answer": 0,
    "explanation": "Condition (9 > 12) evaluates to false. Thus z is assigned to 12 - 8 which equals 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(47 % 8);?",
    "options": [
      "9",
      "7",
      "5",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 47 / 8 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(50 % 11);?",
    "options": [
      "0",
      "8",
      "4",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 50 / 11 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 15; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "15",
      "9",
      "24",
      "6"
    ],
    "answer": 3,
    "explanation": "Condition (9 > 15) evaluates to false. Thus z is assigned to 15 - 9 which equals 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 20; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "9",
      "31",
      "10",
      "20"
    ],
    "answer": 0,
    "explanation": "Condition (10 > 20) evaluates to false. Thus z is assigned to 20 - 11 which equals 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(21 % 10);?",
    "options": [
      "0",
      "3",
      "1",
      "2"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 21 / 10 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 & 2);",
    "options": [
      "-1",
      "0",
      "2",
      "7"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 101 and 10 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 | 8);",
    "options": [
      "14",
      "12",
      "35",
      "11"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 100 and 1000 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(38 % 6);?",
    "options": [
      "2",
      "0",
      "4",
      "6"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 38 / 6 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 8; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "8",
      "25",
      "22",
      "19"
    ],
    "answer": 1,
    "explanation": "Condition (22 > 8) evaluates to true. Thus z is assigned to 22 + 3 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(42 % 5);?",
    "options": [
      "4",
      "2",
      "8",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 42 / 5 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(16 % 4);?",
    "options": [
      "16",
      "0",
      "2",
      "4"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 16 / 4 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 15; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "26",
      "8",
      "15",
      "4"
    ],
    "answer": 3,
    "explanation": "Condition (8 > 15) evaluates to false. Thus z is assigned to 15 - 11 which equals 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(24 % 8);?",
    "options": [
      "2",
      "0",
      "20",
      "3"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 24 / 8 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 21; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "27",
      "15",
      "11",
      "21"
    ],
    "answer": 1,
    "explanation": "Condition (11 > 21) evaluates to false. Thus z is assigned to 21 - 6 which equals 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 | 7);",
    "options": [
      "12",
      "7",
      "9",
      "6"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 101 and 111 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 ^ 4);",
    "options": [
      "10",
      "16",
      "8",
      "7"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1100 and 100 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(26 % 8);?",
    "options": [
      "2",
      "4",
      "0",
      "3"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 26 / 8 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 & 2);",
    "options": [
      "15",
      "-1",
      "2",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1101 and 10 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 5; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "18",
      "8",
      "28",
      "5"
    ],
    "answer": 2,
    "explanation": "Condition (18 > 5) evaluates to true. Thus z is assigned to 18 + 10 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(61 % 7);?",
    "options": [
      "7",
      "5",
      "0",
      "8"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 61 / 7 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 21; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "21",
      "26",
      "22",
      "18"
    ],
    "answer": 1,
    "explanation": "Condition (22 > 21) evaluates to true. Thus z is assigned to 22 + 4 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 24; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "11",
      "19",
      "24",
      "29"
    ],
    "answer": 1,
    "explanation": "Condition (11 > 24) evaluates to false. Thus z is assigned to 24 - 5 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 | 4);",
    "options": [
      "11",
      "14",
      "12",
      "16"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1100 and 100 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 16; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "20",
      "58",
      "12",
      "16"
    ],
    "answer": 2,
    "explanation": "Condition (12 > 16) evaluates to false. Thus z is assigned to 16 - 4 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(24 % 10);?",
    "options": [
      "6",
      "4",
      "0",
      "2"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 24 / 10 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(32 % 4);?",
    "options": [
      "0",
      "8",
      "2",
      "16"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 32 / 4 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 | 7);",
    "options": [
      "23",
      "22",
      "42",
      "25"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10000 and 111 yields decimal 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 24; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 1,
    "explanation": "Condition (21 > 24) evaluates to false. Thus z is assigned to 24 - 5 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 & 9);",
    "options": [
      "24",
      "8",
      "11",
      "9"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1111 and 1001 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 | 8);",
    "options": [
      "27",
      "51",
      "24",
      "25"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10001 and 1000 yields decimal 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 | 5);",
    "options": [
      "47",
      "22",
      "23",
      "25"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10010 and 101 yields decimal 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(40 % 10);?",
    "options": [
      "2",
      "0",
      "19",
      "4"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 40 / 10 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 ^ 3);",
    "options": [
      "14",
      "16",
      "13",
      "16"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1101 and 11 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(39 % 6);?",
    "options": [
      "6",
      "5",
      "3",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 39 / 6 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(46 % 10);?",
    "options": [
      "0",
      "8",
      "4",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 46 / 10 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(41 % 5);?",
    "options": [
      "0",
      "3",
      "1",
      "8"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 41 / 5 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 23; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "8",
      "13",
      "23",
      "33"
    ],
    "answer": 1,
    "explanation": "Condition (8 > 23) evaluates to false. Thus z is assigned to 23 - 10 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 17; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "20",
      "24",
      "17",
      "28"
    ],
    "answer": 3,
    "explanation": "Condition (24 > 17) evaluates to true. Thus z is assigned to 24 + 4 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 17; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "26",
      "18",
      "22",
      "17"
    ],
    "answer": 0,
    "explanation": "Condition (22 > 17) evaluates to true. Thus z is assigned to 22 + 4 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(16 % 11);?",
    "options": [
      "5",
      "0",
      "7",
      "1"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 16 / 11 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 13; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "17",
      "13",
      "15",
      "19"
    ],
    "answer": 3,
    "explanation": "Condition (17 > 13) evaluates to true. Thus z is assigned to 17 + 2 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(49 % 7);?",
    "options": [
      "0",
      "21",
      "7",
      "2"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 49 / 7 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 14; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "9",
      "16",
      "14",
      "12"
    ],
    "answer": 3,
    "explanation": "Condition (9 > 14) evaluates to false. Thus z is assigned to 14 - 2 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(45 % 7);?",
    "options": [
      "3",
      "6",
      "0",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 45 / 7 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(62 % 9);?",
    "options": [
      "8",
      "10",
      "6",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 62 / 9 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 11; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "9",
      "11",
      "11",
      "13"
    ],
    "answer": 0,
    "explanation": "Condition (11 > 11) evaluates to false. Thus z is assigned to 11 - 2 which equals 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 10; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "20",
      "14",
      "17",
      "10"
    ],
    "answer": 0,
    "explanation": "Condition (17 > 10) evaluates to true. Thus z is assigned to 17 + 3 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 | 4);",
    "options": [
      "38",
      "22",
      "19",
      "20"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10000 and 100 yields decimal 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 9; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "9",
      "9",
      "15",
      "12"
    ],
    "answer": 2,
    "explanation": "Condition (12 > 9) evaluates to true. Thus z is assigned to 12 + 3 which equals 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 22; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "22",
      "9",
      "30",
      "14"
    ],
    "answer": 3,
    "explanation": "Condition (9 > 22) evaluates to false. Thus z is assigned to 22 - 8 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 & 4);",
    "options": [
      "0",
      "-1",
      "15",
      "2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1011 and 100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 18; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "18",
      "9",
      "27",
      "5"
    ],
    "answer": 1,
    "explanation": "Condition (5 > 18) evaluates to false. Thus z is assigned to 18 - 9 which equals 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 6; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "6",
      "25",
      "19",
      "13"
    ],
    "answer": 1,
    "explanation": "Condition (19 > 6) evaluates to true. Thus z is assigned to 19 + 6 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 16; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "10",
      "13",
      "16",
      "19"
    ],
    "answer": 1,
    "explanation": "Condition (10 > 16) evaluates to false. Thus z is assigned to 16 - 3 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 | 2);",
    "options": [
      "9",
      "12",
      "10",
      "54"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1000 and 10 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 12; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "17",
      "8",
      "12",
      "7"
    ],
    "answer": 3,
    "explanation": "Condition (8 > 12) evaluates to false. Thus z is assigned to 12 - 5 which equals 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 23; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "30",
      "16",
      "23",
      "5"
    ],
    "answer": 1,
    "explanation": "Condition (5 > 23) evaluates to false. Thus z is assigned to 23 - 7 which equals 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(58 % 6);?",
    "options": [
      "0",
      "9",
      "4",
      "6"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 58 / 6 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 13; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "6",
      "11",
      "15",
      "13"
    ],
    "answer": 1,
    "explanation": "Condition (6 > 13) evaluates to false. Thus z is assigned to 13 - 2 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 & 2);",
    "options": [
      "1",
      "2",
      "21",
      "4"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10011 and 10 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 ^ 2);",
    "options": [
      "9",
      "13",
      "11",
      "8"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1011 and 10 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(41 % 8);?",
    "options": [
      "0",
      "5",
      "1",
      "3"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 41 / 8 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 18; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "14",
      "25",
      "18",
      "11"
    ],
    "answer": 3,
    "explanation": "Condition (14 > 18) evaluates to false. Thus z is assigned to 18 - 7 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(28 % 8);?",
    "options": [
      "0",
      "3",
      "4",
      "6"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 28 / 8 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 & 9);",
    "options": [
      "11",
      "9",
      "8",
      "22"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1101 and 1001 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(62 % 4);?",
    "options": [
      "2",
      "0",
      "15",
      "4"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 62 / 4 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 12; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "14",
      "12",
      "10",
      "7"
    ],
    "answer": 2,
    "explanation": "Condition (7 > 12) evaluates to false. Thus z is assigned to 12 - 2 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(20 % 8);?",
    "options": [
      "6",
      "4",
      "0",
      "2"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 20 / 8 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 12; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "6",
      "12",
      "18",
      "12"
    ],
    "answer": 0,
    "explanation": "Condition (12 > 12) evaluates to false. Thus z is assigned to 12 - 6 which equals 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(31 % 11);?",
    "options": [
      "0",
      "2",
      "11",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 31 / 11 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(19 % 7);?",
    "options": [
      "0",
      "2",
      "5",
      "7"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 19 / 7 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 & 4);",
    "options": [
      "6",
      "4",
      "3",
      "19"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1111 and 100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(44 % 9);?",
    "options": [
      "10",
      "0",
      "4",
      "8"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 44 / 9 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 22; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "24",
      "30",
      "18",
      "22"
    ],
    "answer": 1,
    "explanation": "Condition (24 > 22) evaluates to true. Thus z is assigned to 24 + 6 which equals 30."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 ^ 3);",
    "options": [
      "5",
      "6",
      "8",
      "8"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 101 and 11 yields decimal 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 | 4);",
    "options": [
      "5",
      "7",
      "9",
      "4"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 101 and 100 yields decimal 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 10; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "4",
      "24",
      "10",
      "14"
    ],
    "answer": 1,
    "explanation": "Condition (14 > 10) evaluates to true. Thus z is assigned to 14 + 10 which equals 24."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 23; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "19",
      "23",
      "42",
      "27"
    ],
    "answer": 0,
    "explanation": "Condition (19 > 23) evaluates to false. Thus z is assigned to 23 - 4 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 & 3);",
    "options": [
      "21",
      "1",
      "2",
      "4"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10010 and 11 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 18; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "18",
      "21",
      "32",
      "10"
    ],
    "answer": 2,
    "explanation": "Condition (21 > 18) evaluates to true. Thus z is assigned to 21 + 11 which equals 32."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 18; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "22",
      "18",
      "18",
      "20"
    ],
    "answer": 0,
    "explanation": "Condition (20 > 18) evaluates to true. Thus z is assigned to 20 + 2 which equals 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 24; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "20",
      "14",
      "28",
      "24"
    ],
    "answer": 0,
    "explanation": "Condition (14 > 24) evaluates to false. Thus z is assigned to 24 - 4 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 | 8);",
    "options": [
      "9",
      "11",
      "17",
      "8"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1001 and 1000 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 ^ 7);",
    "options": [
      "23",
      "20",
      "21",
      "25"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10010 and 111 yields decimal 21."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 & 6);",
    "options": [
      "0",
      "-1",
      "2",
      "23"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10001 and 110 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(15 % 10);?",
    "options": [
      "5",
      "7",
      "1",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 15 / 10 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(35 % 8);?",
    "options": [
      "4",
      "3",
      "5",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 35 / 8 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 19; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "24",
      "19",
      "14",
      "13"
    ],
    "answer": 2,
    "explanation": "Condition (13 > 19) evaluates to false. Thus z is assigned to 19 - 5 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 & 7);",
    "options": [
      "4",
      "5",
      "20",
      "7"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1101 and 111 yields decimal 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 ^ 5);",
    "options": [
      "11",
      "14",
      "14",
      "12"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1001 and 101 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 ^ 9);",
    "options": [
      "8",
      "6",
      "24",
      "5"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1111 and 1001 yields decimal 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 & 8);",
    "options": [
      "8",
      "7",
      "10",
      "16"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1000 and 1000 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 15; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "15",
      "14",
      "19",
      "24"
    ],
    "answer": 3,
    "explanation": "Condition (19 > 15) evaluates to true. Thus z is assigned to 19 + 5 which equals 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(39 % 7);?",
    "options": [
      "5",
      "6",
      "0",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 39 / 7 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 | 8);",
    "options": [
      "11",
      "12",
      "20",
      "14"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1100 and 1000 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 22; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "17",
      "16",
      "22",
      "27"
    ],
    "answer": 0,
    "explanation": "Condition (16 > 22) evaluates to false. Thus z is assigned to 22 - 5 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 & 4);",
    "options": [
      "3",
      "4",
      "6",
      "11"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 111 and 100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 ^ 6);",
    "options": [
      "9",
      "12",
      "10",
      "18"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1100 and 110 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 11; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "13",
      "11",
      "6",
      "9"
    ],
    "answer": 3,
    "explanation": "Condition (6 > 11) evaluates to false. Thus z is assigned to 11 - 2 which equals 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(33 % 11);?",
    "options": [
      "2",
      "3",
      "15",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 33 / 11 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 11; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "1",
      "11",
      "21",
      "8"
    ],
    "answer": 0,
    "explanation": "Condition (8 > 11) evaluates to false. Thus z is assigned to 11 - 10 which equals 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 5; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "14",
      "7",
      "5",
      "21"
    ],
    "answer": 3,
    "explanation": "Condition (14 > 5) evaluates to true. Thus z is assigned to 14 + 7 which equals 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 21; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "18",
      "5",
      "21",
      "24"
    ],
    "answer": 0,
    "explanation": "Condition (5 > 21) evaluates to false. Thus z is assigned to 21 - 3 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 & 7);",
    "options": [
      "3",
      "1",
      "0",
      "24"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10001 and 111 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 | 8);",
    "options": [
      "48",
      "28",
      "25",
      "26"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10010 and 1000 yields decimal 26."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 9; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "24",
      "15",
      "9",
      "6"
    ],
    "answer": 0,
    "explanation": "Condition (15 > 9) evaluates to true. Thus z is assigned to 15 + 9 which equals 24."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 21; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "11",
      "21",
      "31",
      "9"
    ],
    "answer": 0,
    "explanation": "Condition (9 > 21) evaluates to false. Thus z is assigned to 21 - 10 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(18 % 6);?",
    "options": [
      "2",
      "3",
      "17",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 18 / 6 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 | 2);",
    "options": [
      "26",
      "20",
      "18",
      "17"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10000 and 10 yields decimal 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 & 4);",
    "options": [
      "3",
      "4",
      "9",
      "6"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 101 and 100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 & 5);",
    "options": [
      "0",
      "2",
      "-1",
      "21"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10000 and 101 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(44 % 8);?",
    "options": [
      "5",
      "0",
      "6",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 44 / 8 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(34 % 5);?",
    "options": [
      "6",
      "4",
      "6",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 34 / 5 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 22; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "11",
      "22",
      "30",
      "14"
    ],
    "answer": 3,
    "explanation": "Condition (11 > 22) evaluates to false. Thus z is assigned to 22 - 8 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(47 % 6);?",
    "options": [
      "5",
      "0",
      "7",
      "7"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 47 / 6 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(64 % 7);?",
    "options": [
      "3",
      "0",
      "9",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 64 / 7 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 24; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "9",
      "28",
      "20",
      "24"
    ],
    "answer": 2,
    "explanation": "Condition (9 > 24) evaluates to false. Thus z is assigned to 24 - 4 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 ^ 5);",
    "options": [
      "3",
      "11",
      "5",
      "2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 110 and 101 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 | 6);",
    "options": [
      "16",
      "48",
      "14",
      "13"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1000 and 110 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 & 6);",
    "options": [
      "2",
      "25",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10011 and 110 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 ^ 3);",
    "options": [
      "45",
      "10",
      "13",
      "11"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1000 and 11 yields decimal 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(50 % 5);?",
    "options": [
      "10",
      "13",
      "2",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 50 / 5 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 7; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "12",
      "23",
      "34",
      "7"
    ],
    "answer": 2,
    "explanation": "Condition (23 > 7) evaluates to true. Thus z is assigned to 23 + 11 which equals 34."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(26 % 9);?",
    "options": [
      "8",
      "0",
      "2",
      "10"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 26 / 9 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(25 % 11);?",
    "options": [
      "5",
      "3",
      "2",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 25 / 11 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 & 4);",
    "options": [
      "-1",
      "2",
      "0",
      "12"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1000 and 100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(54 % 7);?",
    "options": [
      "5",
      "0",
      "7",
      "7"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 54 / 7 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(41 % 9);?",
    "options": [
      "4",
      "5",
      "7",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 41 / 9 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 13; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "21",
      "13",
      "13",
      "29"
    ],
    "answer": 3,
    "explanation": "Condition (21 > 13) evaluates to true. Thus z is assigned to 21 + 8 which equals 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 5; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "5",
      "15",
      "25",
      "5"
    ],
    "answer": 2,
    "explanation": "Condition (15 > 5) evaluates to true. Thus z is assigned to 15 + 10 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 23; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "23",
      "21",
      "25",
      "10"
    ],
    "answer": 1,
    "explanation": "Condition (10 > 23) evaluates to false. Thus z is assigned to 23 - 2 which equals 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(52 % 9);?",
    "options": [
      "7",
      "5",
      "9",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 52 / 9 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 | 6);",
    "options": [
      "11",
      "7",
      "9",
      "6"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 101 and 110 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(29 % 8);?",
    "options": [
      "5",
      "0",
      "3",
      "7"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 29 / 8 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 & 7);",
    "options": [
      "5",
      "4",
      "7",
      "12"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 101 and 111 yields decimal 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 & 6);",
    "options": [
      "1",
      "24",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10010 and 110 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 5; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "4",
      "5",
      "15",
      "26"
    ],
    "answer": 3,
    "explanation": "Condition (15 > 5) evaluates to true. Thus z is assigned to 15 + 11 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(46 % 11);?",
    "options": [
      "2",
      "4",
      "0",
      "4"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 46 / 11 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 ^ 9);",
    "options": [
      "26",
      "28",
      "28",
      "25"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10011 and 1001 yields decimal 26."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 ^ 3);",
    "options": [
      "3",
      "10",
      "4",
      "6"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 111 and 11 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 7; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "6",
      "7",
      "1",
      "13"
    ],
    "answer": 2,
    "explanation": "Condition (6 > 7) evaluates to false. Thus z is assigned to 7 - 6 which equals 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 20; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "17",
      "20",
      "19",
      "23"
    ],
    "answer": 0,
    "explanation": "Condition (19 > 20) evaluates to false. Thus z is assigned to 20 - 3 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(38 % 4);?",
    "options": [
      "9",
      "4",
      "2",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 38 / 4 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 23; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "23",
      "25",
      "21",
      "23"
    ],
    "answer": 2,
    "explanation": "Condition (23 > 23) evaluates to false. Thus z is assigned to 23 - 2 which equals 21."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 | 2);",
    "options": [
      "21",
      "19",
      "21",
      "18"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10011 and 10 yields decimal 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(59 % 10);?",
    "options": [
      "9",
      "5",
      "11",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 59 / 10 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 ^ 2);",
    "options": [
      "3",
      "6",
      "8",
      "4"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 110 and 10 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 9; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "5",
      "9",
      "11",
      "17"
    ],
    "answer": 3,
    "explanation": "Condition (11 > 9) evaluates to true. Thus z is assigned to 11 + 6 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 6; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "24",
      "6",
      "21",
      "27"
    ],
    "answer": 3,
    "explanation": "Condition (24 > 6) evaluates to true. Thus z is assigned to 24 + 3 which equals 27."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 & 5);",
    "options": [
      "4",
      "12",
      "7",
      "5"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 111 and 101 yields decimal 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 24; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "18",
      "24",
      "20",
      "28"
    ],
    "answer": 2,
    "explanation": "Condition (18 > 24) evaluates to false. Thus z is assigned to 24 - 4 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 21; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "15",
      "31",
      "11",
      "21"
    ],
    "answer": 2,
    "explanation": "Condition (15 > 21) evaluates to false. Thus z is assigned to 21 - 10 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 10; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "10",
      "-1",
      "21",
      "5"
    ],
    "answer": 1,
    "explanation": "Condition (5 > 10) evaluates to false. Thus z is assigned to 10 - 11 which equals -1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 ^ 3);",
    "options": [
      "20",
      "18",
      "20",
      "17"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10001 and 11 yields decimal 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 | 9);",
    "options": [
      "11",
      "13",
      "10",
      "19"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1010 and 1001 yields decimal 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 13; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "13",
      "13",
      "6",
      "20"
    ],
    "answer": 2,
    "explanation": "Condition (13 > 13) evaluates to false. Thus z is assigned to 13 - 7 which equals 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(19 % 9);?",
    "options": [
      "1",
      "2",
      "0",
      "3"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 19 / 9 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(50 % 7);?",
    "options": [
      "1",
      "0",
      "3",
      "7"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 50 / 7 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 24; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "24",
      "28",
      "20",
      "10"
    ],
    "answer": 2,
    "explanation": "Condition (10 > 24) evaluates to false. Thus z is assigned to 24 - 4 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 ^ 5);",
    "options": [
      "48",
      "15",
      "14",
      "17"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1010 and 101 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(62 % 6);?",
    "options": [
      "4",
      "0",
      "10",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 62 / 6 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(33 % 5);?",
    "options": [
      "5",
      "3",
      "0",
      "6"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 33 / 5 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(26 % 11);?",
    "options": [
      "2",
      "4",
      "0",
      "6"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 26 / 11 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 15; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "23",
      "17",
      "29",
      "15"
    ],
    "answer": 2,
    "explanation": "Condition (23 > 15) evaluates to true. Thus z is assigned to 23 + 6 which equals 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 22; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "26",
      "18",
      "22",
      "9"
    ],
    "answer": 1,
    "explanation": "Condition (9 > 22) evaluates to false. Thus z is assigned to 22 - 4 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 23; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "20",
      "15",
      "31",
      "23"
    ],
    "answer": 1,
    "explanation": "Condition (20 > 23) evaluates to false. Thus z is assigned to 23 - 8 which equals 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 | 7);",
    "options": [
      "48",
      "14",
      "15",
      "17"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1000 and 111 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 11; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "22",
      "24",
      "11",
      "20"
    ],
    "answer": 1,
    "explanation": "Condition (22 > 11) evaluates to true. Thus z is assigned to 22 + 2 which equals 24."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 19; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "19",
      "17",
      "21",
      "7"
    ],
    "answer": 1,
    "explanation": "Condition (7 > 19) evaluates to false. Thus z is assigned to 19 - 2 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 5; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "15",
      "5",
      "11",
      "13"
    ],
    "answer": 0,
    "explanation": "Condition (13 > 5) evaluates to true. Thus z is assigned to 13 + 2 which equals 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 19; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "29",
      "9",
      "19",
      "11"
    ],
    "answer": 1,
    "explanation": "Condition (11 > 19) evaluates to false. Thus z is assigned to 19 - 10 which equals 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(56 % 6);?",
    "options": [
      "0",
      "4",
      "9",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 56 / 6 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(42 % 7);?",
    "options": [
      "17",
      "0",
      "2",
      "6"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 42 / 7 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 16; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "16",
      "22",
      "19",
      "16"
    ],
    "answer": 1,
    "explanation": "Condition (19 > 16) evaluates to true. Thus z is assigned to 19 + 3 which equals 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(15 % 8);?",
    "options": [
      "7",
      "1",
      "9",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 15 / 8 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 16; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "18",
      "8",
      "16",
      "28"
    ],
    "answer": 3,
    "explanation": "Condition (18 > 16) evaluates to true. Thus z is assigned to 18 + 10 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(50 % 6);?",
    "options": [
      "0",
      "2",
      "8",
      "4"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 50 / 6 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(62 % 11);?",
    "options": [
      "9",
      "0",
      "7",
      "5"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 62 / 11 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 7; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "14",
      "12",
      "10",
      "7"
    ],
    "answer": 0,
    "explanation": "Condition (12 > 7) evaluates to true. Thus z is assigned to 12 + 2 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(61 % 6);?",
    "options": [
      "1",
      "0",
      "10",
      "3"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 61 / 6 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 & 2);",
    "options": [
      "1",
      "17",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1111 and 10 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(32 % 5);?",
    "options": [
      "2",
      "6",
      "4",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 32 / 5 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 19; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "15",
      "17",
      "21",
      "19"
    ],
    "answer": 1,
    "explanation": "Condition (15 > 19) evaluates to false. Thus z is assigned to 19 - 2 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(25 % 9);?",
    "options": [
      "0",
      "9",
      "2",
      "7"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 25 / 9 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 | 4);",
    "options": [
      "23",
      "22",
      "25",
      "41"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10011 and 100 yields decimal 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 20; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "6",
      "14",
      "20",
      "26"
    ],
    "answer": 1,
    "explanation": "Condition (6 > 20) evaluates to false. Thus z is assigned to 20 - 6 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(27 % 4);?",
    "options": [
      "3",
      "5",
      "6",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 27 / 4 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 17; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "8",
      "17",
      "17",
      "26"
    ],
    "answer": 0,
    "explanation": "Condition (17 > 17) evaluates to false. Thus z is assigned to 17 - 9 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 13; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "20",
      "11",
      "6",
      "13"
    ],
    "answer": 2,
    "explanation": "Condition (11 > 13) evaluates to false. Thus z is assigned to 13 - 7 which equals 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 | 5);",
    "options": [
      "12",
      "7",
      "6",
      "9"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 111 and 101 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(24 % 4);?",
    "options": [
      "0",
      "15",
      "6",
      "2"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 24 / 4 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(47 % 7);?",
    "options": [
      "0",
      "5",
      "7",
      "6"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 47 / 7 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 5; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "5",
      "22",
      "16",
      "28"
    ],
    "answer": 3,
    "explanation": "Condition (22 > 5) evaluates to true. Thus z is assigned to 22 + 6 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 ^ 7);",
    "options": [
      "0",
      "13",
      "1",
      "3"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 110 and 111 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 22; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "22",
      "16",
      "15",
      "29"
    ],
    "answer": 2,
    "explanation": "Condition (16 > 22) evaluates to false. Thus z is assigned to 22 - 7 which equals 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(51 % 9);?",
    "options": [
      "8",
      "5",
      "6",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 51 / 9 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(37 % 10);?",
    "options": [
      "3",
      "0",
      "7",
      "9"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 37 / 10 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(38 % 8);?",
    "options": [
      "4",
      "6",
      "0",
      "8"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 38 / 8 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 | 4);",
    "options": [
      "11",
      "6",
      "7",
      "9"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 111 and 100 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(58 % 11);?",
    "options": [
      "5",
      "5",
      "3",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 58 / 11 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 & 7);",
    "options": [
      "5",
      "8",
      "6",
      "13"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 110 and 111 yields decimal 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 | 4);",
    "options": [
      "13",
      "14",
      "42",
      "16"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1010 and 100 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 | 9);",
    "options": [
      "14",
      "51",
      "15",
      "17"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 110 and 1001 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 14; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "8",
      "20",
      "14",
      "14"
    ],
    "answer": 0,
    "explanation": "Condition (14 > 14) evaluates to false. Thus z is assigned to 14 - 6 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(53 % 10);?",
    "options": [
      "3",
      "0",
      "5",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 53 / 10 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 | 4);",
    "options": [
      "15",
      "13",
      "12",
      "39"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1001 and 100 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 ^ 9);",
    "options": [
      "19",
      "3",
      "2",
      "5"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1010 and 1001 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 & 8);",
    "options": [
      "8",
      "10",
      "21",
      "7"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1101 and 1000 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(22 % 5);?",
    "options": [
      "0",
      "2",
      "4",
      "4"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 22 / 5 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(30 % 8);?",
    "options": [
      "3",
      "0",
      "6",
      "8"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 30 / 8 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 ^ 4);",
    "options": [
      "23",
      "22",
      "38",
      "25"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10011 and 100 yields decimal 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 ^ 9);",
    "options": [
      "48",
      "24",
      "25",
      "27"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10000 and 1001 yields decimal 25."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(30 % 5);?",
    "options": [
      "2",
      "0",
      "6",
      "19"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 30 / 5 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(24 % 6);?",
    "options": [
      "0",
      "2",
      "4",
      "16"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 24 / 6 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 9; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "13",
      "24",
      "2",
      "9"
    ],
    "answer": 1,
    "explanation": "Condition (13 > 9) evaluates to true. Thus z is assigned to 13 + 11 which equals 24."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 9; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "20",
      "9",
      "16",
      "18"
    ],
    "answer": 0,
    "explanation": "Condition (18 > 9) evaluates to true. Thus z is assigned to 18 + 2 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 7; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "17",
      "7",
      "23",
      "11"
    ],
    "answer": 2,
    "explanation": "Condition (17 > 7) evaluates to true. Thus z is assigned to 17 + 6 which equals 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 | 7);",
    "options": [
      "17",
      "21",
      "14",
      "15"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1110 and 111 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 18; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "18",
      "18",
      "26",
      "22"
    ],
    "answer": 2,
    "explanation": "Condition (22 > 18) evaluates to true. Thus z is assigned to 22 + 4 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 14; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "14",
      "14",
      "22",
      "6"
    ],
    "answer": 3,
    "explanation": "Condition (14 > 14) evaluates to false. Thus z is assigned to 14 - 8 which equals 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(20 % 4);?",
    "options": [
      "14",
      "2",
      "0",
      "5"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 20 / 4 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 22; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "17",
      "22",
      "31",
      "13"
    ],
    "answer": 3,
    "explanation": "Condition (17 > 22) evaluates to false. Thus z is assigned to 22 - 9 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(47 % 9);?",
    "options": [
      "2",
      "4",
      "0",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 47 / 9 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 | 5);",
    "options": [
      "36",
      "15",
      "13",
      "12"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1000 and 101 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(20 % 6);?",
    "options": [
      "0",
      "2",
      "4",
      "3"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 20 / 6 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 & 6);",
    "options": [
      "4",
      "3",
      "6",
      "19"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1101 and 110 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 | 5);",
    "options": [
      "7",
      "5",
      "10",
      "4"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 101 and 101 yields decimal 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 24; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "24",
      "18",
      "30",
      "19"
    ],
    "answer": 1,
    "explanation": "Condition (19 > 24) evaluates to false. Thus z is assigned to 24 - 6 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 & 2);",
    "options": [
      "2",
      "1",
      "4",
      "20"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10010 and 10 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(53 % 5);?",
    "options": [
      "3",
      "0",
      "10",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 53 / 5 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 & 7);",
    "options": [
      "9",
      "6",
      "22",
      "7"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1111 and 111 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 | 3);",
    "options": [
      "13",
      "12",
      "10",
      "11"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1001 and 11 yields decimal 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 ^ 4);",
    "options": [
      "12",
      "27",
      "15",
      "13"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1001 and 100 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 15; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "30",
      "14",
      "15",
      "22"
    ],
    "answer": 0,
    "explanation": "Condition (22 > 15) evaluates to true. Thus z is assigned to 22 + 8 which equals 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 21; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "31",
      "8",
      "21",
      "11"
    ],
    "answer": 3,
    "explanation": "Condition (8 > 21) evaluates to false. Thus z is assigned to 21 - 10 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(55 % 6);?",
    "options": [
      "0",
      "1",
      "3",
      "9"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 55 / 6 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 ^ 7);",
    "options": [
      "16",
      "13",
      "16",
      "14"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1001 and 111 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 | 2);",
    "options": [
      "14",
      "15",
      "17",
      "47"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1101 and 10 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 23; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "17",
      "23",
      "6",
      "29"
    ],
    "answer": 0,
    "explanation": "Condition (6 > 23) evaluates to false. Thus z is assigned to 23 - 6 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 10; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "19",
      "10",
      "11",
      "27"
    ],
    "answer": 3,
    "explanation": "Condition (19 > 10) evaluates to true. Thus z is assigned to 19 + 8 which equals 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 17; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "12",
      "23",
      "11",
      "17"
    ],
    "answer": 2,
    "explanation": "Condition (12 > 17) evaluates to false. Thus z is assigned to 17 - 6 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 12; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "12",
      "16",
      "18",
      "20"
    ],
    "answer": 3,
    "explanation": "Condition (18 > 12) evaluates to true. Thus z is assigned to 18 + 2 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(23 % 4);?",
    "options": [
      "5",
      "5",
      "3",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 23 / 4 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 22; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "22",
      "14",
      "17",
      "30"
    ],
    "answer": 1,
    "explanation": "Condition (17 > 22) evaluates to false. Thus z is assigned to 22 - 8 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 11; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "11",
      "21",
      "25",
      "17"
    ],
    "answer": 2,
    "explanation": "Condition (21 > 11) evaluates to true. Thus z is assigned to 21 + 4 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 | 3);",
    "options": [
      "21",
      "21",
      "18",
      "19"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10010 and 11 yields decimal 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 17; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "22",
      "14",
      "17",
      "30"
    ],
    "answer": 3,
    "explanation": "Condition (22 > 17) evaluates to true. Thus z is assigned to 22 + 8 which equals 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 23; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "23",
      "14",
      "16",
      "32"
    ],
    "answer": 1,
    "explanation": "Condition (16 > 23) evaluates to false. Thus z is assigned to 23 - 9 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 19; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "14",
      "24",
      "19",
      "19"
    ],
    "answer": 0,
    "explanation": "Condition (19 > 19) evaluates to false. Thus z is assigned to 19 - 5 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(64 % 6);?",
    "options": [
      "4",
      "10",
      "6",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 64 / 6 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(57 % 8);?",
    "options": [
      "0",
      "3",
      "1",
      "7"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 57 / 8 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 | 2);",
    "options": [
      "7",
      "6",
      "49",
      "9"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 101 and 10 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 | 4);",
    "options": [
      "19",
      "14",
      "15",
      "17"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1111 and 100 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 17; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "27",
      "21",
      "15",
      "17"
    ],
    "answer": 0,
    "explanation": "Condition (21 > 17) evaluates to true. Thus z is assigned to 21 + 6 which equals 27."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 ^ 7);",
    "options": [
      "10",
      "8",
      "7",
      "22"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1111 and 111 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 ^ 3);",
    "options": [
      "14",
      "10",
      "8",
      "7"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1011 and 11 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(31 % 7);?",
    "options": [
      "5",
      "0",
      "4",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 31 / 7 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 16; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "16",
      "7",
      "15",
      "25"
    ],
    "answer": 1,
    "explanation": "Condition (15 > 16) evaluates to false. Thus z is assigned to 16 - 9 which equals 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 13; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "16",
      "13",
      "9",
      "23"
    ],
    "answer": 3,
    "explanation": "Condition (16 > 13) evaluates to true. Thus z is assigned to 16 + 7 which equals 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 24; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "33",
      "24",
      "16",
      "15"
    ],
    "answer": 3,
    "explanation": "Condition (16 > 24) evaluates to false. Thus z is assigned to 24 - 9 which equals 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(36 % 11);?",
    "options": [
      "0",
      "3",
      "5",
      "20"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 36 / 11 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 & 9);",
    "options": [
      "23",
      "10",
      "8",
      "7"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1110 and 1001 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 13; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "13",
      "24",
      "29",
      "19"
    ],
    "answer": 2,
    "explanation": "Condition (24 > 13) evaluates to true. Thus z is assigned to 24 + 5 which equals 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 5; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "17",
      "5",
      "20",
      "14"
    ],
    "answer": 2,
    "explanation": "Condition (17 > 5) evaluates to true. Thus z is assigned to 17 + 3 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 ^ 3);",
    "options": [
      "12",
      "11",
      "14",
      "18"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1111 and 11 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(52 % 8);?",
    "options": [
      "0",
      "4",
      "6",
      "6"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 52 / 8 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(60 % 11);?",
    "options": [
      "17",
      "5",
      "7",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 60 / 11 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 18; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "15",
      "13",
      "18",
      "23"
    ],
    "answer": 1,
    "explanation": "Condition (15 > 18) evaluates to false. Thus z is assigned to 18 - 5 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 14; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "6",
      "14",
      "24",
      "4"
    ],
    "answer": 3,
    "explanation": "Condition (6 > 14) evaluates to false. Thus z is assigned to 14 - 10 which equals 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 & 7);",
    "options": [
      "4",
      "6",
      "3",
      "19"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1100 and 111 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 20; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "11",
      "6",
      "20",
      "29"
    ],
    "answer": 0,
    "explanation": "Condition (6 > 20) evaluates to false. Thus z is assigned to 20 - 9 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 19; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "19",
      "6",
      "16",
      "22"
    ],
    "answer": 2,
    "explanation": "Condition (6 > 19) evaluates to false. Thus z is assigned to 19 - 3 which equals 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(16 % 6);?",
    "options": [
      "6",
      "0",
      "2",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 16 / 6 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 23; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "28",
      "20",
      "18",
      "23"
    ],
    "answer": 2,
    "explanation": "Condition (20 > 23) evaluates to false. Thus z is assigned to 23 - 5 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 ^ 7);",
    "options": [
      "24",
      "22",
      "21",
      "24"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10001 and 111 yields decimal 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(41 % 11);?",
    "options": [
      "8",
      "3",
      "0",
      "10"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 41 / 11 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(52 % 11);?",
    "options": [
      "0",
      "10",
      "8",
      "4"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 52 / 11 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 6; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "8",
      "6",
      "16",
      "24"
    ],
    "answer": 3,
    "explanation": "Condition (16 > 6) evaluates to true. Thus z is assigned to 16 + 8 which equals 24."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 & 3);",
    "options": [
      "1",
      "13",
      "2",
      "4"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1010 and 11 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(18 % 11);?",
    "options": [
      "9",
      "7",
      "0",
      "1"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 18 / 11 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 & 2);",
    "options": [
      "6",
      "0",
      "2",
      "-1"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 100 and 10 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 16; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "21",
      "11",
      "16",
      "10"
    ],
    "answer": 1,
    "explanation": "Condition (10 > 16) evaluates to false. Thus z is assigned to 16 - 5 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 19; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "28",
      "18",
      "23",
      "19"
    ],
    "answer": 0,
    "explanation": "Condition (23 > 19) evaluates to true. Thus z is assigned to 23 + 5 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 & 8);",
    "options": [
      "8",
      "22",
      "7",
      "10"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1110 and 1000 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(44 % 5);?",
    "options": [
      "8",
      "4",
      "0",
      "6"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 44 / 5 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 | 8);",
    "options": [
      "27",
      "26",
      "29",
      "52"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10011 and 1000 yields decimal 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 17; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "17",
      "26",
      "15",
      "8"
    ],
    "answer": 3,
    "explanation": "Condition (15 > 17) evaluates to false. Thus z is assigned to 17 - 9 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 | 5);",
    "options": [
      "13",
      "14",
      "15",
      "12"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1001 and 101 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 16; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "10",
      "16",
      "22",
      "13"
    ],
    "answer": 0,
    "explanation": "Condition (13 > 16) evaluates to false. Thus z is assigned to 16 - 6 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 ^ 5);",
    "options": [
      "9",
      "3",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 100 and 101 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 14; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "8",
      "18",
      "14",
      "28"
    ],
    "answer": 3,
    "explanation": "Condition (18 > 14) evaluates to true. Thus z is assigned to 18 + 10 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 9; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "17",
      "25",
      "21",
      "9"
    ],
    "answer": 1,
    "explanation": "Condition (21 > 9) evaluates to true. Thus z is assigned to 21 + 4 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 | 7);",
    "options": [
      "23",
      "25",
      "25",
      "22"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10010 and 111 yields decimal 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 & 9);",
    "options": [
      "7",
      "19",
      "8",
      "10"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1010 and 1001 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 11; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "6",
      "11",
      "20",
      "2"
    ],
    "answer": 3,
    "explanation": "Condition (6 > 11) evaluates to false. Thus z is assigned to 11 - 9 which equals 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(60 % 9);?",
    "options": [
      "0",
      "6",
      "8",
      "21"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 60 / 9 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 | 5);",
    "options": [
      "7",
      "9",
      "11",
      "6"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 110 and 101 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(21 % 11);?",
    "options": [
      "0",
      "12",
      "1",
      "10"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 21 / 11 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 & 4);",
    "options": [
      "-1",
      "2",
      "20",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10000 and 100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 12; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "12",
      "10",
      "6",
      "14"
    ],
    "answer": 1,
    "explanation": "Condition (6 > 12) evaluates to false. Thus z is assigned to 12 - 2 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 | 5);",
    "options": [
      "20",
      "21",
      "22",
      "23"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10001 and 101 yields decimal 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 8; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "16",
      "26",
      "8",
      "6"
    ],
    "answer": 1,
    "explanation": "Condition (16 > 8) evaluates to true. Thus z is assigned to 16 + 10 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 19; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "12",
      "5",
      "26",
      "19"
    ],
    "answer": 0,
    "explanation": "Condition (5 > 19) evaluates to false. Thus z is assigned to 19 - 7 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 16; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "22",
      "32",
      "16",
      "12"
    ],
    "answer": 1,
    "explanation": "Condition (22 > 16) evaluates to true. Thus z is assigned to 22 + 10 which equals 32."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 7; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "17",
      "7",
      "31",
      "24"
    ],
    "answer": 2,
    "explanation": "Condition (24 > 7) evaluates to true. Thus z is assigned to 24 + 7 which equals 31."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 11; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "21",
      "11",
      "3",
      "12"
    ],
    "answer": 0,
    "explanation": "Condition (12 > 11) evaluates to true. Thus z is assigned to 12 + 9 which equals 21."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 ^ 6);",
    "options": [
      "24",
      "21",
      "22",
      "28"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10000 and 110 yields decimal 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 5; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "8",
      "-3",
      "19",
      "5"
    ],
    "answer": 2,
    "explanation": "Condition (8 > 5) evaluates to true. Thus z is assigned to 8 + 11 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 & 6);",
    "options": [
      "0",
      "14",
      "-1",
      "2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1000 and 110 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 23; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "13",
      "15",
      "23",
      "33"
    ],
    "answer": 0,
    "explanation": "Condition (15 > 23) evaluates to false. Thus z is assigned to 23 - 10 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 15; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "15",
      "6",
      "19",
      "11"
    ],
    "answer": 3,
    "explanation": "Condition (6 > 15) evaluates to false. Thus z is assigned to 15 - 4 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 & 2);",
    "options": [
      "2",
      "18",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10000 and 10 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 19; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "26",
      "8",
      "19",
      "12"
    ],
    "answer": 3,
    "explanation": "Condition (8 > 19) evaluates to false. Thus z is assigned to 19 - 7 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 23; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "20",
      "13",
      "23",
      "33"
    ],
    "answer": 1,
    "explanation": "Condition (20 > 23) evaluates to false. Thus z is assigned to 23 - 10 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 ^ 8);",
    "options": [
      "4",
      "6",
      "3",
      "20"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1100 and 1000 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 & 4);",
    "options": [
      "-1",
      "2",
      "0",
      "23"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10011 and 100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(59 % 8);?",
    "options": [
      "5",
      "0",
      "7",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 59 / 8 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 24; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "8",
      "16",
      "32",
      "24"
    ],
    "answer": 1,
    "explanation": "Condition (8 > 24) evaluates to false. Thus z is assigned to 24 - 8 which equals 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(43 % 4);?",
    "options": [
      "10",
      "3",
      "0",
      "5"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 43 / 4 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 19; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "20",
      "24",
      "28",
      "19"
    ],
    "answer": 2,
    "explanation": "Condition (24 > 19) evaluates to true. Thus z is assigned to 24 + 4 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(58 % 4);?",
    "options": [
      "2",
      "0",
      "14",
      "4"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 58 / 4 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(22 % 6);?",
    "options": [
      "6",
      "4",
      "3",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 22 / 6 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 18; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "18",
      "16",
      "13",
      "20"
    ],
    "answer": 1,
    "explanation": "Condition (13 > 18) evaluates to false. Thus z is assigned to 18 - 2 which equals 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(26 % 7);?",
    "options": [
      "5",
      "0",
      "3",
      "7"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 26 / 7 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 & 5);",
    "options": [
      "5",
      "20",
      "4",
      "7"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1111 and 101 yields decimal 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 18; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "22",
      "14",
      "18",
      "44"
    ],
    "answer": 1,
    "explanation": "Condition (14 > 18) evaluates to false. Thus z is assigned to 18 - 4 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 23; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "28",
      "14",
      "23",
      "18"
    ],
    "answer": 3,
    "explanation": "Condition (14 > 23) evaluates to false. Thus z is assigned to 23 - 5 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 14; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "12",
      "28",
      "20",
      "14"
    ],
    "answer": 1,
    "explanation": "Condition (20 > 14) evaluates to true. Thus z is assigned to 20 + 8 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 5; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "17",
      "23",
      "5",
      "20"
    ],
    "answer": 1,
    "explanation": "Condition (20 > 5) evaluates to true. Thus z is assigned to 20 + 3 which equals 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 18; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "9",
      "18",
      "8",
      "28"
    ],
    "answer": 2,
    "explanation": "Condition (9 > 18) evaluates to false. Thus z is assigned to 18 - 10 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(33 % 4);?",
    "options": [
      "0",
      "8",
      "1",
      "3"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 33 / 4 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 ^ 6);",
    "options": [
      "20",
      "7",
      "10",
      "8"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1110 and 110 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 6; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "1",
      "6",
      "19",
      "10"
    ],
    "answer": 2,
    "explanation": "Condition (10 > 6) evaluates to true. Thus z is assigned to 10 + 9 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 20; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "26",
      "20",
      "14",
      "7"
    ],
    "answer": 2,
    "explanation": "Condition (7 > 20) evaluates to false. Thus z is assigned to 20 - 6 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 18; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "18",
      "30",
      "19",
      "8"
    ],
    "answer": 1,
    "explanation": "Condition (19 > 18) evaluates to true. Thus z is assigned to 19 + 11 which equals 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 13; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "13",
      "32",
      "24",
      "16"
    ],
    "answer": 1,
    "explanation": "Condition (24 > 13) evaluates to true. Thus z is assigned to 24 + 8 which equals 32."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 11; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "14",
      "10",
      "11",
      "12"
    ],
    "answer": 0,
    "explanation": "Condition (12 > 11) evaluates to true. Thus z is assigned to 12 + 2 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(53 % 7);?",
    "options": [
      "7",
      "6",
      "4",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 53 / 7 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 6; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "19",
      "-1",
      "6",
      "9"
    ],
    "answer": 0,
    "explanation": "Condition (9 > 6) evaluates to true. Thus z is assigned to 9 + 10 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 10; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "12",
      "6",
      "10",
      "8"
    ],
    "answer": 3,
    "explanation": "Condition (6 > 10) evaluates to false. Thus z is assigned to 10 - 2 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 | 5);",
    "options": [
      "5",
      "7",
      "9",
      "4"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 100 and 101 yields decimal 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 20; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "31",
      "24",
      "20",
      "17"
    ],
    "answer": 0,
    "explanation": "Condition (24 > 20) evaluates to true. Thus z is assigned to 24 + 7 which equals 31."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(35 % 10);?",
    "options": [
      "0",
      "5",
      "3",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 35 / 10 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 6; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "12",
      "0",
      "6",
      "6"
    ],
    "answer": 1,
    "explanation": "Condition (6 > 6) evaluates to false. Thus z is assigned to 6 - 6 which equals 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(42 % 10);?",
    "options": [
      "0",
      "4",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 42 / 10 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(43 % 5);?",
    "options": [
      "8",
      "0",
      "5",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 43 / 5 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 18; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "14",
      "18",
      "28",
      "8"
    ],
    "answer": 3,
    "explanation": "Condition (14 > 18) evaluates to false. Thus z is assigned to 18 - 10 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(63 % 11);?",
    "options": [
      "10",
      "5",
      "8",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 63 / 11 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 14; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "5",
      "23",
      "14",
      "9"
    ],
    "answer": 0,
    "explanation": "Condition (9 > 14) evaluates to false. Thus z is assigned to 14 - 9 which equals 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 19; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "21",
      "19",
      "18",
      "24"
    ],
    "answer": 3,
    "explanation": "Condition (21 > 19) evaluates to true. Thus z is assigned to 21 + 3 which equals 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(27 % 11);?",
    "options": [
      "2",
      "5",
      "0",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 27 / 11 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 16; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "13",
      "16",
      "14",
      "18"
    ],
    "answer": 2,
    "explanation": "Condition (13 > 16) evaluates to false. Thus z is assigned to 16 - 2 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(52 % 10);?",
    "options": [
      "4",
      "2",
      "5",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 52 / 10 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 10; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "1",
      "9",
      "10",
      "19"
    ],
    "answer": 0,
    "explanation": "Condition (9 > 10) evaluates to false. Thus z is assigned to 10 - 9 which equals 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 8; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "8",
      "14",
      "6",
      "10"
    ],
    "answer": 1,
    "explanation": "Condition (10 > 8) evaluates to true. Thus z is assigned to 10 + 4 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 21; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "10",
      "21",
      "30",
      "12"
    ],
    "answer": 3,
    "explanation": "Condition (10 > 21) evaluates to false. Thus z is assigned to 21 - 9 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 | 6);",
    "options": [
      "8",
      "6",
      "10",
      "5"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 100 and 110 yields decimal 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 17; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "17",
      "28",
      "7",
      "6"
    ],
    "answer": 3,
    "explanation": "Condition (7 > 17) evaluates to false. Thus z is assigned to 17 - 11 which equals 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 ^ 2);",
    "options": [
      "8",
      "12",
      "7",
      "10"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1010 and 10 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(55 % 11);?",
    "options": [
      "5",
      "19",
      "0",
      "2"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 55 / 11 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 ^ 6);",
    "options": [
      "11",
      "21",
      "9",
      "8"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1111 and 110 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(33 % 7);?",
    "options": [
      "4",
      "0",
      "7",
      "5"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 33 / 7 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 7; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "4",
      "7",
      "12",
      "20"
    ],
    "answer": 3,
    "explanation": "Condition (12 > 7) evaluates to true. Thus z is assigned to 12 + 8 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 | 3);",
    "options": [
      "36",
      "13",
      "10",
      "11"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1000 and 11 yields decimal 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(35 % 4);?",
    "options": [
      "3",
      "0",
      "5",
      "8"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 35 / 4 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 5; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "19",
      "5",
      "24",
      "14"
    ],
    "answer": 2,
    "explanation": "Condition (19 > 5) evaluates to true. Thus z is assigned to 19 + 5 which equals 24."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 | 5);",
    "options": [
      "14",
      "20",
      "15",
      "17"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1111 and 101 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 18; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "18",
      "24",
      "10",
      "12"
    ],
    "answer": 3,
    "explanation": "Condition (10 > 18) evaluates to false. Thus z is assigned to 18 - 6 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 6; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "-3",
      "17",
      "7",
      "6"
    ],
    "answer": 1,
    "explanation": "Condition (7 > 6) evaluates to true. Thus z is assigned to 7 + 10 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(8 & 9);",
    "options": [
      "7",
      "10",
      "17",
      "8"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1000 and 1001 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 12; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "15",
      "31",
      "23",
      "12"
    ],
    "answer": 1,
    "explanation": "Condition (23 > 12) evaluates to true. Thus z is assigned to 23 + 8 which equals 31."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 15; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "13",
      "23",
      "18",
      "15"
    ],
    "answer": 1,
    "explanation": "Condition (18 > 15) evaluates to true. Thus z is assigned to 18 + 5 which equals 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(20 % 10);?",
    "options": [
      "0",
      "19",
      "2",
      "2"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 20 / 10 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 12; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "12",
      "31",
      "11",
      "21"
    ],
    "answer": 1,
    "explanation": "Condition (21 > 12) evaluates to true. Thus z is assigned to 21 + 10 which equals 31."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(39 % 5);?",
    "options": [
      "7",
      "6",
      "0",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 39 / 5 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(33 % 9);?",
    "options": [
      "3",
      "0",
      "6",
      "8"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 33 / 9 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 21; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "5",
      "13",
      "21",
      "29"
    ],
    "answer": 1,
    "explanation": "Condition (5 > 21) evaluates to false. Thus z is assigned to 21 - 8 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 8; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "8",
      "12",
      "15",
      "9"
    ],
    "answer": 2,
    "explanation": "Condition (12 > 8) evaluates to true. Thus z is assigned to 12 + 3 which equals 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 | 5);",
    "options": [
      "14",
      "15",
      "19",
      "17"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1110 and 101 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 & 5);",
    "options": [
      "3",
      "0",
      "1",
      "22"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10001 and 101 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(36 % 9);?",
    "options": [
      "0",
      "15",
      "2",
      "4"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 36 / 9 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 & 8);",
    "options": [
      "0",
      "-1",
      "26",
      "2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10010 and 1000 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 21; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "21",
      "25",
      "17",
      "13"
    ],
    "answer": 2,
    "explanation": "Condition (13 > 21) evaluates to false. Thus z is assigned to 21 - 4 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 17; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "14",
      "17",
      "23",
      "32"
    ],
    "answer": 3,
    "explanation": "Condition (23 > 17) evaluates to true. Thus z is assigned to 23 + 9 which equals 32."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 ^ 5);",
    "options": [
      "18",
      "10",
      "8",
      "7"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1101 and 101 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 12; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "12",
      "12",
      "3",
      "21"
    ],
    "answer": 2,
    "explanation": "Condition (12 > 12) evaluates to false. Thus z is assigned to 12 - 9 which equals 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 9; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "14",
      "7",
      "21",
      "9"
    ],
    "answer": 2,
    "explanation": "Condition (14 > 9) evaluates to true. Thus z is assigned to 14 + 7 which equals 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 10; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "6",
      "10",
      "28",
      "17"
    ],
    "answer": 2,
    "explanation": "Condition (17 > 10) evaluates to true. Thus z is assigned to 17 + 11 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 ^ 8);",
    "options": [
      "17",
      "15",
      "44",
      "14"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 111 and 1000 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 9; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "12",
      "28",
      "20",
      "9"
    ],
    "answer": 1,
    "explanation": "Condition (20 > 9) evaluates to true. Thus z is assigned to 20 + 8 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 13; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "2",
      "13",
      "24",
      "13"
    ],
    "answer": 0,
    "explanation": "Condition (13 > 13) evaluates to false. Thus z is assigned to 13 - 11 which equals 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 23; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "34",
      "23",
      "12",
      "10"
    ],
    "answer": 2,
    "explanation": "Condition (10 > 23) evaluates to false. Thus z is assigned to 23 - 11 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 18; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "22",
      "18",
      "25",
      "19"
    ],
    "answer": 2,
    "explanation": "Condition (22 > 18) evaluates to true. Thus z is assigned to 22 + 3 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 24; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "16",
      "24",
      "31",
      "17"
    ],
    "answer": 3,
    "explanation": "Condition (16 > 24) evaluates to false. Thus z is assigned to 24 - 7 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(28 % 11);?",
    "options": [
      "6",
      "0",
      "2",
      "8"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 28 / 11 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 17; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "19",
      "25",
      "13",
      "17"
    ],
    "answer": 1,
    "explanation": "Condition (19 > 17) evaluates to true. Thus z is assigned to 19 + 6 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 8; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "14",
      "10",
      "8",
      "18"
    ],
    "answer": 3,
    "explanation": "Condition (14 > 8) evaluates to true. Thus z is assigned to 14 + 4 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 12; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "6",
      "23",
      "12",
      "1"
    ],
    "answer": 3,
    "explanation": "Condition (6 > 12) evaluates to false. Thus z is assigned to 12 - 11 which equals 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(64 % 4);?",
    "options": [
      "0",
      "2",
      "16",
      "13"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 64 / 4 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(21 % 4);?",
    "options": [
      "1",
      "3",
      "0",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 21 / 4 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 21; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "13",
      "21",
      "29",
      "12"
    ],
    "answer": 0,
    "explanation": "Condition (12 > 21) evaluates to false. Thus z is assigned to 21 - 8 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 8; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "8",
      "6",
      "28",
      "17"
    ],
    "answer": 2,
    "explanation": "Condition (17 > 8) evaluates to true. Thus z is assigned to 17 + 11 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 8; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "1",
      "19",
      "8",
      "10"
    ],
    "answer": 1,
    "explanation": "Condition (10 > 8) evaluates to true. Thus z is assigned to 10 + 9 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 17; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "15",
      "19",
      "5",
      "17"
    ],
    "answer": 0,
    "explanation": "Condition (5 > 17) evaluates to false. Thus z is assigned to 17 - 2 which equals 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 6; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "15",
      "-1",
      "6",
      "7"
    ],
    "answer": 0,
    "explanation": "Condition (7 > 6) evaluates to true. Thus z is assigned to 7 + 8 which equals 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 15; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "15",
      "7",
      "22",
      "8"
    ],
    "answer": 3,
    "explanation": "Condition (7 > 15) evaluates to false. Thus z is assigned to 15 - 7 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 9; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "14",
      "9",
      "9",
      "4"
    ],
    "answer": 3,
    "explanation": "Condition (9 > 9) evaluates to false. Thus z is assigned to 9 - 5 which equals 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 | 2);",
    "options": [
      "10",
      "11",
      "13",
      "13"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1011 and 10 yields decimal 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(22 % 9);?",
    "options": [
      "0",
      "6",
      "4",
      "2"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 22 / 9 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 20; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "22",
      "7",
      "20",
      "18"
    ],
    "answer": 3,
    "explanation": "Condition (7 > 20) evaluates to false. Thus z is assigned to 20 - 2 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 18; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "21",
      "23",
      "25",
      "18"
    ],
    "answer": 2,
    "explanation": "Condition (23 > 18) evaluates to true. Thus z is assigned to 23 + 2 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 22; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "22",
      "33",
      "15",
      "24"
    ],
    "answer": 1,
    "explanation": "Condition (24 > 22) evaluates to true. Thus z is assigned to 24 + 9 which equals 33."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 14; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "4",
      "24",
      "8",
      "14"
    ],
    "answer": 0,
    "explanation": "Condition (8 > 14) evaluates to false. Thus z is assigned to 14 - 10 which equals 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 & 6);",
    "options": [
      "5",
      "6",
      "13",
      "8"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 111 and 110 yields decimal 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(39 % 4);?",
    "options": [
      "3",
      "5",
      "0",
      "9"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 39 / 4 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(35 % 5);?",
    "options": [
      "0",
      "17",
      "2",
      "7"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 35 / 5 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(27 % 6);?",
    "options": [
      "3",
      "4",
      "0",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 27 / 6 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 | 9);",
    "options": [
      "17",
      "15",
      "16",
      "14"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 111 and 1001 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 19; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "13",
      "35",
      "19",
      "24"
    ],
    "answer": 1,
    "explanation": "Condition (24 > 19) evaluates to true. Thus z is assigned to 24 + 11 which equals 35."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(36 % 7);?",
    "options": [
      "5",
      "3",
      "1",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 36 / 7 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 5; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "10",
      "30",
      "5",
      "20"
    ],
    "answer": 1,
    "explanation": "Condition (20 > 5) evaluates to true. Thus z is assigned to 20 + 10 which equals 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 16; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "12",
      "7",
      "20",
      "16"
    ],
    "answer": 0,
    "explanation": "Condition (7 > 16) evaluates to false. Thus z is assigned to 16 - 4 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 | 7);",
    "options": [
      "9",
      "6",
      "11",
      "7"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 100 and 111 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 & 9);",
    "options": [
      "3",
      "0",
      "26",
      "1"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10001 and 1001 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(42 % 6);?",
    "options": [
      "0",
      "2",
      "7",
      "12"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 42 / 6 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 | 3);",
    "options": [
      "15",
      "17",
      "14",
      "16"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1101 and 11 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 20; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "20",
      "12",
      "28",
      "19"
    ],
    "answer": 1,
    "explanation": "Condition (19 > 20) evaluates to false. Thus z is assigned to 20 - 8 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 17; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "20",
      "17",
      "14",
      "17"
    ],
    "answer": 2,
    "explanation": "Condition (17 > 17) evaluates to false. Thus z is assigned to 17 - 3 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(60 % 5);?",
    "options": [
      "0",
      "2",
      "19",
      "12"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 60 / 5 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 ^ 9);",
    "options": [
      "23",
      "24",
      "26",
      "26"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10001 and 1001 yields decimal 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(49 % 9);?",
    "options": [
      "6",
      "4",
      "5",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 49 / 9 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 12; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "12",
      "4",
      "20",
      "12"
    ],
    "answer": 1,
    "explanation": "Condition (12 > 12) evaluates to false. Thus z is assigned to 12 - 8 which equals 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 5; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "5",
      "15",
      "18",
      "12"
    ],
    "answer": 2,
    "explanation": "Condition (15 > 5) evaluates to true. Thus z is assigned to 15 + 3 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 & 3);",
    "options": [
      "16",
      "3",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1101 and 11 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 15; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "6",
      "23",
      "15",
      "7"
    ],
    "answer": 3,
    "explanation": "Condition (6 > 15) evaluates to false. Thus z is assigned to 15 - 8 which equals 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 13; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "23",
      "15",
      "19",
      "13"
    ],
    "answer": 0,
    "explanation": "Condition (19 > 13) evaluates to true. Thus z is assigned to 19 + 4 which equals 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 24; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "17",
      "24",
      "31",
      "14"
    ],
    "answer": 0,
    "explanation": "Condition (14 > 24) evaluates to false. Thus z is assigned to 24 - 7 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 ^ 7);",
    "options": [
      "15",
      "17",
      "12",
      "13"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1010 and 111 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 14; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "19",
      "9",
      "14",
      "29"
    ],
    "answer": 3,
    "explanation": "Condition (19 > 14) evaluates to true. Thus z is assigned to 19 + 10 which equals 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 22; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "58",
      "11",
      "33",
      "22"
    ],
    "answer": 1,
    "explanation": "Condition (11 > 22) evaluates to false. Thus z is assigned to 22 - 11 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(62 % 7);?",
    "options": [
      "8",
      "8",
      "6",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 62 / 7 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 22; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "10",
      "22",
      "33",
      "11"
    ],
    "answer": 3,
    "explanation": "Condition (10 > 22) evaluates to false. Thus z is assigned to 22 - 11 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 ^ 5);",
    "options": [
      "25",
      "54",
      "23",
      "22"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10010 and 101 yields decimal 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 21; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "17",
      "25",
      "21",
      "10"
    ],
    "answer": 0,
    "explanation": "Condition (10 > 21) evaluates to false. Thus z is assigned to 21 - 4 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 12; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "13",
      "12",
      "4",
      "22"
    ],
    "answer": 3,
    "explanation": "Condition (13 > 12) evaluates to true. Thus z is assigned to 13 + 9 which equals 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 22; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "14",
      "22",
      "6",
      "30"
    ],
    "answer": 0,
    "explanation": "Condition (6 > 22) evaluates to false. Thus z is assigned to 22 - 8 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 8; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "12",
      "8",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Condition (8 > 8) evaluates to false. Thus z is assigned to 8 - 4 which equals 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 | 9);",
    "options": [
      "26",
      "27",
      "28",
      "29"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10011 and 1001 yields decimal 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 23; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "23",
      "22",
      "20",
      "26"
    ],
    "answer": 2,
    "explanation": "Condition (22 > 23) evaluates to false. Thus z is assigned to 23 - 3 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 | 6);",
    "options": [
      "20",
      "16",
      "14",
      "13"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1110 and 110 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 13; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "29",
      "13",
      "7",
      "18"
    ],
    "answer": 0,
    "explanation": "Condition (18 > 13) evaluates to true. Thus z is assigned to 18 + 11 which equals 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 12; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "11",
      "12",
      "29",
      "20"
    ],
    "answer": 2,
    "explanation": "Condition (20 > 12) evaluates to true. Thus z is assigned to 20 + 9 which equals 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 14; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "19",
      "14",
      "26",
      "12"
    ],
    "answer": 2,
    "explanation": "Condition (19 > 14) evaluates to true. Thus z is assigned to 19 + 7 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 18; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "25",
      "8",
      "11",
      "18"
    ],
    "answer": 2,
    "explanation": "Condition (8 > 18) evaluates to false. Thus z is assigned to 18 - 7 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 8; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "8",
      "30",
      "21",
      "12"
    ],
    "answer": 1,
    "explanation": "Condition (21 > 8) evaluates to true. Thus z is assigned to 21 + 9 which equals 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 6; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "29",
      "24",
      "19",
      "6"
    ],
    "answer": 0,
    "explanation": "Condition (24 > 6) evaluates to true. Thus z is assigned to 24 + 5 which equals 29."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 ^ 4);",
    "options": [
      "16",
      "13",
      "14",
      "25"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1010 and 100 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 ^ 4);",
    "options": [
      "15",
      "42",
      "14",
      "17"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1011 and 100 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(25 % 7);?",
    "options": [
      "0",
      "3",
      "4",
      "6"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 25 / 7 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 19; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "27",
      "11",
      "19",
      "19"
    ],
    "answer": 1,
    "explanation": "Condition (19 > 19) evaluates to false. Thus z is assigned to 19 - 8 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 15; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "15",
      "8",
      "13",
      "17"
    ],
    "answer": 2,
    "explanation": "Condition (8 > 15) evaluates to false. Thus z is assigned to 15 - 2 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 13; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "13",
      "24",
      "2",
      "9"
    ],
    "answer": 2,
    "explanation": "Condition (9 > 13) evaluates to false. Thus z is assigned to 13 - 11 which equals 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(29 % 5);?",
    "options": [
      "4",
      "0",
      "6",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 29 / 5 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 6; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "8",
      "6",
      "14",
      "2"
    ],
    "answer": 2,
    "explanation": "Condition (8 > 6) evaluates to true. Thus z is assigned to 8 + 6 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 14; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "33",
      "22",
      "14",
      "11"
    ],
    "answer": 0,
    "explanation": "Condition (22 > 14) evaluates to true. Thus z is assigned to 22 + 11 which equals 33."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 20; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "23",
      "10",
      "20",
      "17"
    ],
    "answer": 3,
    "explanation": "Condition (10 > 20) evaluates to false. Thus z is assigned to 20 - 3 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(22 % 11);?",
    "options": [
      "0",
      "19",
      "2",
      "2"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 22 / 11 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 23; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "15",
      "29",
      "17",
      "23"
    ],
    "answer": 2,
    "explanation": "Condition (15 > 23) evaluates to false. Thus z is assigned to 23 - 6 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 21; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "16",
      "18",
      "24",
      "21"
    ],
    "answer": 1,
    "explanation": "Condition (16 > 21) evaluates to false. Thus z is assigned to 21 - 3 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 21; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "21",
      "16",
      "15",
      "26"
    ],
    "answer": 1,
    "explanation": "Condition (15 > 21) evaluates to false. Thus z is assigned to 21 - 5 which equals 16."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 ^ 2);",
    "options": [
      "15",
      "13",
      "12",
      "17"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1111 and 10 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(38 % 5);?",
    "options": [
      "3",
      "5",
      "0",
      "7"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 38 / 5 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 24; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "24",
      "17",
      "6",
      "31"
    ],
    "answer": 1,
    "explanation": "Condition (6 > 24) evaluates to false. Thus z is assigned to 24 - 7 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 18; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "25",
      "6",
      "11",
      "18"
    ],
    "answer": 2,
    "explanation": "Condition (6 > 18) evaluates to false. Thus z is assigned to 18 - 7 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(31 % 9);?",
    "options": [
      "4",
      "3",
      "6",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 31 / 9 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(19 % 4);?",
    "options": [
      "4",
      "3",
      "5",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 19 / 4 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 & 6);",
    "options": [
      "-1",
      "15",
      "0",
      "2"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1001 and 110 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 ^ 9);",
    "options": [
      "6",
      "3",
      "22",
      "4"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1101 and 1001 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 12; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "14",
      "10",
      "12",
      "12"
    ],
    "answer": 1,
    "explanation": "Condition (12 > 12) evaluates to false. Thus z is assigned to 12 - 2 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(54 % 4);?",
    "options": [
      "4",
      "0",
      "2",
      "13"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 54 / 4 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 10; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "10",
      "7",
      "1",
      "19"
    ],
    "answer": 2,
    "explanation": "Condition (7 > 10) evaluates to false. Thus z is assigned to 10 - 9 which equals 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 11; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "11",
      "5",
      "19",
      "3"
    ],
    "answer": 3,
    "explanation": "Condition (5 > 11) evaluates to false. Thus z is assigned to 11 - 8 which equals 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 14; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "12",
      "4",
      "14",
      "24"
    ],
    "answer": 1,
    "explanation": "Condition (12 > 14) evaluates to false. Thus z is assigned to 14 - 10 which equals 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 24; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "32",
      "50",
      "16",
      "24"
    ],
    "answer": 2,
    "explanation": "Condition (16 > 24) evaluates to false. Thus z is assigned to 24 - 8 which equals 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 21; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "14",
      "21",
      "23",
      "32"
    ],
    "answer": 3,
    "explanation": "Condition (23 > 21) evaluates to true. Thus z is assigned to 23 + 9 which equals 32."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(4 ^ 8);",
    "options": [
      "12",
      "45",
      "11",
      "14"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 100 and 1000 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(43 % 6);?",
    "options": [
      "7",
      "1",
      "0",
      "3"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 43 / 6 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 10; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "10",
      "18",
      "8",
      "2"
    ],
    "answer": 3,
    "explanation": "Condition (8 > 10) evaluates to false. Thus z is assigned to 10 - 8 which equals 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 15; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "9",
      "21",
      "15",
      "15"
    ],
    "answer": 0,
    "explanation": "Condition (15 > 15) evaluates to false. Thus z is assigned to 15 - 6 which equals 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 9; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "7",
      "16",
      "9",
      "25"
    ],
    "answer": 3,
    "explanation": "Condition (16 > 9) evaluates to true. Thus z is assigned to 16 + 9 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 ^ 6);",
    "options": [
      "12",
      "13",
      "17",
      "15"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1011 and 110 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 & 5);",
    "options": [
      "4",
      "18",
      "5",
      "7"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1101 and 101 yields decimal 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 & 8);",
    "options": [
      "7",
      "8",
      "10",
      "18"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1010 and 1000 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(48 % 5);?",
    "options": [
      "0",
      "3",
      "9",
      "5"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 48 / 5 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 14; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "18",
      "14",
      "9",
      "10"
    ],
    "answer": 3,
    "explanation": "Condition (9 > 14) evaluates to false. Thus z is assigned to 14 - 4 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 13; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "13",
      "11",
      "22",
      "4"
    ],
    "answer": 3,
    "explanation": "Condition (11 > 13) evaluates to false. Thus z is assigned to 13 - 9 which equals 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 ^ 2);",
    "options": [
      "21",
      "16",
      "17",
      "19"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10011 and 10 yields decimal 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(32 % 6);?",
    "options": [
      "4",
      "2",
      "5",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 32 / 6 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 | 3);",
    "options": [
      "13",
      "11",
      "10",
      "14"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1011 and 11 yields decimal 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 18; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "29",
      "15",
      "7",
      "18"
    ],
    "answer": 2,
    "explanation": "Condition (15 > 18) evaluates to false. Thus z is assigned to 18 - 11 which equals 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 11; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "20",
      "25",
      "15",
      "11"
    ],
    "answer": 1,
    "explanation": "Condition (20 > 11) evaluates to true. Thus z is assigned to 20 + 5 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 18; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "18",
      "16",
      "10",
      "20"
    ],
    "answer": 1,
    "explanation": "Condition (10 > 18) evaluates to false. Thus z is assigned to 18 - 2 which equals 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 24; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "35",
      "13",
      "24",
      "7"
    ],
    "answer": 1,
    "explanation": "Condition (7 > 24) evaluates to false. Thus z is assigned to 24 - 11 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(49 % 5);?",
    "options": [
      "9",
      "6",
      "0",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 49 / 5 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 11; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "11",
      "15",
      "12",
      "9"
    ],
    "answer": 1,
    "explanation": "Condition (12 > 11) evaluates to true. Thus z is assigned to 12 + 3 which equals 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 | 9);",
    "options": [
      "24",
      "26",
      "25",
      "27"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10001 and 1001 yields decimal 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 15; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "15",
      "10",
      "6",
      "24"
    ],
    "answer": 2,
    "explanation": "Condition (10 > 15) evaluates to false. Thus z is assigned to 15 - 9 which equals 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 22; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "22",
      "17",
      "27",
      "22"
    ],
    "answer": 1,
    "explanation": "Condition (22 > 22) evaluates to false. Thus z is assigned to 22 - 5 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(40 % 9);?",
    "options": [
      "14",
      "0",
      "6",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 40 / 9 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 6; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "24",
      "6",
      "31",
      "17"
    ],
    "answer": 2,
    "explanation": "Condition (24 > 6) evaluates to true. Thus z is assigned to 24 + 7 which equals 31."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 7; int y = 13; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "7",
      "13",
      "69",
      "19"
    ],
    "answer": 0,
    "explanation": "Condition (7 > 13) evaluates to false. Thus z is assigned to 13 - 6 which equals 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 9; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "9",
      "5",
      "11",
      "7"
    ],
    "answer": 3,
    "explanation": "Condition (5 > 9) evaluates to false. Thus z is assigned to 9 - 2 which equals 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(17 % 4);?",
    "options": [
      "4",
      "1",
      "3",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 17 / 4 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 12; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "12",
      "18",
      "10",
      "26"
    ],
    "answer": 3,
    "explanation": "Condition (18 > 12) evaluates to true. Thus z is assigned to 18 + 8 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(29 % 9);?",
    "options": [
      "0",
      "3",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 29 / 9 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(54 % 5);?",
    "options": [
      "4",
      "0",
      "10",
      "6"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 54 / 5 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(51 % 4);?",
    "options": [
      "5",
      "0",
      "12",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 51 / 4 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(46 % 6);?",
    "options": [
      "4",
      "7",
      "6",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 46 / 6 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 & 5);",
    "options": [
      "3",
      "1",
      "24",
      "0"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10011 and 101 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 12; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "20",
      "23",
      "12",
      "26"
    ],
    "answer": 3,
    "explanation": "Condition (23 > 12) evaluates to true. Thus z is assigned to 23 + 3 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(32 % 8);?",
    "options": [
      "16",
      "4",
      "0",
      "2"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 32 / 8 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 10; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "5",
      "10",
      "19",
      "12"
    ],
    "answer": 2,
    "explanation": "Condition (12 > 10) evaluates to true. Thus z is assigned to 12 + 7 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(54 % 8);?",
    "options": [
      "6",
      "8",
      "0",
      "13"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 54 / 8 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(24 % 9);?",
    "options": [
      "8",
      "0",
      "2",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 24 / 9 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 15; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "15",
      "16",
      "22",
      "28"
    ],
    "answer": 3,
    "explanation": "Condition (22 > 15) evaluates to true. Thus z is assigned to 22 + 6 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 5; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "21",
      "13",
      "5",
      "5"
    ],
    "answer": 0,
    "explanation": "Condition (13 > 5) evaluates to true. Thus z is assigned to 13 + 8 which equals 21."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 & 6);",
    "options": [
      "6",
      "4",
      "3",
      "11"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 101 and 110 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(5 & 3);",
    "options": [
      "3",
      "0",
      "1",
      "8"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 101 and 11 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 19; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "26",
      "12",
      "19",
      "6"
    ],
    "answer": 1,
    "explanation": "Condition (6 > 19) evaluates to false. Thus z is assigned to 19 - 7 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 13; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "8",
      "13",
      "28",
      "18"
    ],
    "answer": 2,
    "explanation": "Condition (18 > 13) evaluates to true. Thus z is assigned to 18 + 10 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 24; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "19",
      "22",
      "26",
      "24"
    ],
    "answer": 1,
    "explanation": "Condition (19 > 24) evaluates to false. Thus z is assigned to 24 - 2 which equals 22."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 ^ 2);",
    "options": [
      "18",
      "21",
      "19",
      "28"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10001 and 10 yields decimal 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 | 6);",
    "options": [
      "21",
      "17",
      "15",
      "14"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1111 and 110 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 18; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "18",
      "24",
      "34",
      "14"
    ],
    "answer": 2,
    "explanation": "Condition (24 > 18) evaluates to true. Thus z is assigned to 24 + 10 which equals 34."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 18; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "29",
      "7",
      "18",
      "17"
    ],
    "answer": 1,
    "explanation": "Condition (17 > 18) evaluates to false. Thus z is assigned to 18 - 11 which equals 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 12; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "29",
      "22",
      "15",
      "12"
    ],
    "answer": 0,
    "explanation": "Condition (22 > 12) evaluates to true. Thus z is assigned to 22 + 7 which equals 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 20; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "26",
      "20",
      "14",
      "20"
    ],
    "answer": 2,
    "explanation": "Condition (20 > 20) evaluates to false. Thus z is assigned to 20 - 6 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 ^ 4);",
    "options": [
      "12",
      "10",
      "9",
      "18"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1110 and 100 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(43 % 7);?",
    "options": [
      "1",
      "3",
      "6",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 43 / 7 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(25 % 4);?",
    "options": [
      "1",
      "0",
      "3",
      "6"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 25 / 4 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(22 % 4);?",
    "options": [
      "4",
      "5",
      "0",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 22 / 4 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 & 8);",
    "options": [
      "14",
      "2",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 110 and 1000 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 20; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "13",
      "27",
      "9",
      "20"
    ],
    "answer": 0,
    "explanation": "Condition (9 > 20) evaluates to false. Thus z is assigned to 20 - 7 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(35 % 7);?",
    "options": [
      "0",
      "19",
      "5",
      "2"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 35 / 7 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(45 % 4);?",
    "options": [
      "0",
      "1",
      "11",
      "3"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 45 / 4 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(46 % 7);?",
    "options": [
      "4",
      "6",
      "0",
      "6"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 46 / 7 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 22; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "18",
      "32",
      "22",
      "12"
    ],
    "answer": 3,
    "explanation": "Condition (18 > 22) evaluates to false. Thus z is assigned to 22 - 10 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 11; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "11",
      "10",
      "3",
      "19"
    ],
    "answer": 2,
    "explanation": "Condition (10 > 11) evaluates to false. Thus z is assigned to 11 - 8 which equals 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 20; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "9",
      "15",
      "31",
      "20"
    ],
    "answer": 0,
    "explanation": "Condition (15 > 20) evaluates to false. Thus z is assigned to 20 - 11 which equals 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(56 % 7);?",
    "options": [
      "2",
      "8",
      "12",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 56 / 7 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 13; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "16",
      "9",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Condition (9 > 13) evaluates to false. Thus z is assigned to 13 - 3 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(59 % 11);?",
    "options": [
      "5",
      "4",
      "6",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 59 / 11 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(51 % 7);?",
    "options": [
      "7",
      "4",
      "2",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 51 / 7 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 24; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "28",
      "19",
      "20",
      "24"
    ],
    "answer": 2,
    "explanation": "Condition (19 > 24) evaluates to false. Thus z is assigned to 24 - 4 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 | 8);",
    "options": [
      "15",
      "17",
      "23",
      "14"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1111 and 1000 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 19; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "9",
      "13",
      "19",
      "29"
    ],
    "answer": 0,
    "explanation": "Condition (13 > 19) evaluates to false. Thus z is assigned to 19 - 10 which equals 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 | 6);",
    "options": [
      "17",
      "14",
      "17",
      "15"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1011 and 110 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 14; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "18",
      "14",
      "14",
      "10"
    ],
    "answer": 3,
    "explanation": "Condition (14 > 14) evaluates to false. Thus z is assigned to 14 - 4 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 | 8);",
    "options": [
      "17",
      "14",
      "33",
      "15"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 111 and 1000 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(37 % 11);?",
    "options": [
      "4",
      "6",
      "0",
      "3"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 37 / 11 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 | 3);",
    "options": [
      "21",
      "19",
      "22",
      "18"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10011 and 11 yields decimal 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(23 % 10);?",
    "options": [
      "3",
      "0",
      "2",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 23 / 10 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(6 ^ 6);",
    "options": [
      "2",
      "-1",
      "12",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 110 and 110 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(49 % 10);?",
    "options": [
      "0",
      "11",
      "9",
      "4"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 49 / 10 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(29 % 7);?",
    "options": [
      "3",
      "0",
      "1",
      "4"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 29 / 7 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(64 % 10);?",
    "options": [
      "6",
      "4",
      "6",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 64 / 10 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 11; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "17",
      "21",
      "11",
      "19"
    ],
    "answer": 1,
    "explanation": "Condition (19 > 11) evaluates to true. Thus z is assigned to 19 + 2 which equals 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 14; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "6",
      "16",
      "14",
      "12"
    ],
    "answer": 3,
    "explanation": "Condition (6 > 14) evaluates to false. Thus z is assigned to 14 - 2 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 6; int y = 20; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "20",
      "30",
      "10",
      "6"
    ],
    "answer": 2,
    "explanation": "Condition (6 > 20) evaluates to false. Thus z is assigned to 20 - 10 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(25 % 10);?",
    "options": [
      "5",
      "0",
      "2",
      "7"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 25 / 10 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(35 % 6);?",
    "options": [
      "14",
      "5",
      "7",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 35 / 6 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 & 7);",
    "options": [
      "4",
      "2",
      "1",
      "17"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1010 and 111 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 10; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "10",
      "27",
      "21",
      "24"
    ],
    "answer": 1,
    "explanation": "Condition (24 > 10) evaluates to true. Thus z is assigned to 24 + 3 which equals 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 24; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "26",
      "16",
      "24",
      "22"
    ],
    "answer": 3,
    "explanation": "Condition (16 > 24) evaluates to false. Thus z is assigned to 24 - 2 which equals 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 8; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "8",
      "20",
      "27",
      "13"
    ],
    "answer": 2,
    "explanation": "Condition (20 > 8) evaluates to true. Thus z is assigned to 20 + 7 which equals 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 7; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "19",
      "21",
      "7",
      "17"
    ],
    "answer": 1,
    "explanation": "Condition (19 > 7) evaluates to true. Thus z is assigned to 19 + 2 which equals 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 22; int z = (x > y) ? x + 2 : y - 2;?",
    "options": [
      "24",
      "20",
      "22",
      "22"
    ],
    "answer": 1,
    "explanation": "Condition (22 > 22) evaluates to false. Thus z is assigned to 22 - 2 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 & 3);",
    "options": [
      "-1",
      "2",
      "0",
      "19"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10000 and 11 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 15; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "15",
      "11",
      "23",
      "7"
    ],
    "answer": 3,
    "explanation": "Condition (11 > 15) evaluates to false. Thus z is assigned to 15 - 8 which equals 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(22 % 10);?",
    "options": [
      "4",
      "2",
      "18",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 22 / 10 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 16; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "16",
      "19",
      "13",
      "16"
    ],
    "answer": 2,
    "explanation": "Condition (16 > 16) evaluates to false. Thus z is assigned to 16 - 3 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(19 % 11);?",
    "options": [
      "10",
      "0",
      "8",
      "1"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 19 / 11 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 21; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "19",
      "21",
      "16",
      "26"
    ],
    "answer": 2,
    "explanation": "Condition (19 > 21) evaluates to false. Thus z is assigned to 21 - 5 which equals 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 14; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "4",
      "24",
      "9",
      "14"
    ],
    "answer": 0,
    "explanation": "Condition (9 > 14) evaluates to false. Thus z is assigned to 14 - 10 which equals 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 6; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "10",
      "14",
      "6",
      "6"
    ],
    "answer": 1,
    "explanation": "Condition (10 > 6) evaluates to true. Thus z is assigned to 10 + 4 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 ^ 3);",
    "options": [
      "10",
      "12",
      "12",
      "9"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1001 and 11 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 | 8);",
    "options": [
      "10",
      "13",
      "11",
      "19"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1011 and 1000 yields decimal 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(23 % 9);?",
    "options": [
      "0",
      "5",
      "2",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 23 / 9 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 7; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "7",
      "11",
      "4",
      "18"
    ],
    "answer": 3,
    "explanation": "Condition (11 > 7) evaluates to true. Thus z is assigned to 11 + 7 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 & 6);",
    "options": [
      "2",
      "4",
      "16",
      "1"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1010 and 110 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 6; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "14",
      "11",
      "8",
      "6"
    ],
    "answer": 0,
    "explanation": "Condition (11 > 6) evaluates to true. Thus z is assigned to 11 + 3 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 13; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "16",
      "13",
      "28",
      "22"
    ],
    "answer": 2,
    "explanation": "Condition (22 > 13) evaluates to true. Thus z is assigned to 22 + 6 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(48 % 6);?",
    "options": [
      "0",
      "8",
      "2",
      "19"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 48 / 6 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 17; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "31",
      "17",
      "24",
      "17"
    ],
    "answer": 0,
    "explanation": "Condition (24 > 17) evaluates to true. Thus z is assigned to 24 + 7 which equals 31."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(50 % 8);?",
    "options": [
      "6",
      "0",
      "2",
      "4"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 50 / 8 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 & 8);",
    "options": [
      "7",
      "10",
      "20",
      "8"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1100 and 1000 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 & 2);",
    "options": [
      "4",
      "1",
      "16",
      "2"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1110 and 10 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(57 % 9);?",
    "options": [
      "0",
      "5",
      "6",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 57 / 9 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 24; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "24",
      "69",
      "19",
      "29"
    ],
    "answer": 2,
    "explanation": "Condition (19 > 24) evaluates to false. Thus z is assigned to 24 - 5 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 19; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "24",
      "10",
      "14",
      "19"
    ],
    "answer": 2,
    "explanation": "Condition (10 > 19) evaluates to false. Thus z is assigned to 19 - 5 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(17 % 6);?",
    "options": [
      "0",
      "7",
      "5",
      "2"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 17 / 6 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(55 % 5);?",
    "options": [
      "11",
      "0",
      "2",
      "15"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 55 / 5 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 | 9);",
    "options": [
      "27",
      "26",
      "34",
      "29"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10010 and 1001 yields decimal 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(16 % 9);?",
    "options": [
      "0",
      "7",
      "9",
      "1"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 16 / 9 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 6; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "22",
      "6",
      "4",
      "13"
    ],
    "answer": 0,
    "explanation": "Condition (13 > 6) evaluates to true. Thus z is assigned to 13 + 9 which equals 22."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 | 5);",
    "options": [
      "41",
      "21",
      "20",
      "23"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10000 and 101 yields decimal 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(41 % 7);?",
    "options": [
      "0",
      "8",
      "6",
      "5"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 41 / 7 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(48 % 9);?",
    "options": [
      "5",
      "5",
      "0",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 48 / 9 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(61 % 9);?",
    "options": [
      "0",
      "9",
      "7",
      "6"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 61 / 9 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 5; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "5",
      "8",
      "13",
      "18"
    ],
    "answer": 3,
    "explanation": "Condition (13 > 5) evaluates to true. Thus z is assigned to 13 + 5 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(27 % 10);?",
    "options": [
      "9",
      "7",
      "0",
      "2"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 27 / 10 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 6; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "6",
      "22",
      "19",
      "25"
    ],
    "answer": 3,
    "explanation": "Condition (22 > 6) evaluates to true. Thus z is assigned to 22 + 3 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 7; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "7",
      "28",
      "17",
      "6"
    ],
    "answer": 1,
    "explanation": "Condition (17 > 7) evaluates to true. Thus z is assigned to 17 + 11 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 10; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "26",
      "12",
      "19",
      "10"
    ],
    "answer": 0,
    "explanation": "Condition (19 > 10) evaluates to true. Thus z is assigned to 19 + 7 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 14; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "9",
      "20",
      "14",
      "8"
    ],
    "answer": 3,
    "explanation": "Condition (9 > 14) evaluates to false. Thus z is assigned to 14 - 6 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(27 % 5);?",
    "options": [
      "0",
      "4",
      "5",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 27 / 5 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 7; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "-1",
      "5",
      "7",
      "15"
    ],
    "answer": 0,
    "explanation": "Condition (5 > 7) evaluates to false. Thus z is assigned to 7 - 8 which equals -1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 24; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "23",
      "20",
      "28",
      "24"
    ],
    "answer": 1,
    "explanation": "Condition (23 > 24) evaluates to false. Thus z is assigned to 24 - 4 which equals 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(35 % 11);?",
    "options": [
      "3",
      "2",
      "0",
      "4"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 35 / 11 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 16; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "16",
      "28",
      "18",
      "23"
    ],
    "answer": 1,
    "explanation": "Condition (23 > 16) evaluates to true. Thus z is assigned to 23 + 5 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(20 % 11);?",
    "options": [
      "1",
      "0",
      "9",
      "11"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 20 / 11 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 | 7);",
    "options": [
      "14",
      "15",
      "18",
      "17"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1011 and 111 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 16; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "16",
      "16",
      "8",
      "24"
    ],
    "answer": 2,
    "explanation": "Condition (16 > 16) evaluates to false. Thus z is assigned to 16 - 8 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(35 % 9);?",
    "options": [
      "3",
      "8",
      "0",
      "10"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 35 / 9 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 8; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "3",
      "11",
      "8",
      "19"
    ],
    "answer": 3,
    "explanation": "Condition (11 > 8) evaluates to true. Thus z is assigned to 11 + 8 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 21; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "26",
      "21",
      "17",
      "16"
    ],
    "answer": 3,
    "explanation": "Condition (17 > 21) evaluates to false. Thus z is assigned to 21 - 5 which equals 16."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(9 | 6);",
    "options": [
      "14",
      "15",
      "33",
      "17"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1001 and 110 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 24; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "24",
      "21",
      "17",
      "31"
    ],
    "answer": 2,
    "explanation": "Condition (21 > 24) evaluates to false. Thus z is assigned to 24 - 7 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 ^ 4);",
    "options": [
      "19",
      "22",
      "20",
      "53"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10000 and 100 yields decimal 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(56 % 10);?",
    "options": [
      "0",
      "5",
      "6",
      "8"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 56 / 10 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 23; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "23",
      "18",
      "28",
      "10"
    ],
    "answer": 1,
    "explanation": "Condition (10 > 23) evaluates to false. Thus z is assigned to 23 - 5 which equals 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 24; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "27",
      "21",
      "24",
      "17"
    ],
    "answer": 1,
    "explanation": "Condition (17 > 24) evaluates to false. Thus z is assigned to 24 - 3 which equals 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(34 % 6);?",
    "options": [
      "4",
      "6",
      "0",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 34 / 6 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 6; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "23",
      "13",
      "3",
      "6"
    ],
    "answer": 0,
    "explanation": "Condition (13 > 6) evaluates to true. Thus z is assigned to 13 + 10 which equals 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(18 % 10);?",
    "options": [
      "0",
      "10",
      "1",
      "8"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 18 / 10 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 & 8);",
    "options": [
      "24",
      "-1",
      "2",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10000 and 1000 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 7; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "8",
      "26",
      "7",
      "17"
    ],
    "answer": 1,
    "explanation": "Condition (17 > 7) evaluates to true. Thus z is assigned to 17 + 9 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 19; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "16",
      "25",
      "13",
      "19"
    ],
    "answer": 2,
    "explanation": "Condition (16 > 19) evaluates to false. Thus z is assigned to 19 - 6 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 10; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "23",
      "10",
      "32",
      "14"
    ],
    "answer": 2,
    "explanation": "Condition (23 > 10) evaluates to true. Thus z is assigned to 23 + 9 which equals 32."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 ^ 6);",
    "options": [
      "24",
      "22",
      "20",
      "19"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10010 and 110 yields decimal 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 16; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "8",
      "15",
      "16",
      "24"
    ],
    "answer": 0,
    "explanation": "Condition (15 > 16) evaluates to false. Thus z is assigned to 16 - 8 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(45 % 11);?",
    "options": [
      "4",
      "1",
      "0",
      "3"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 45 / 11 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 20; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "11",
      "29",
      "48",
      "20"
    ],
    "answer": 0,
    "explanation": "Condition (11 > 20) evaluates to false. Thus z is assigned to 20 - 9 which equals 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(37 % 6);?",
    "options": [
      "6",
      "0",
      "3",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 37 / 6 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 & 5);",
    "options": [
      "23",
      "2",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10010 and 101 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 11; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "25",
      "3",
      "11",
      "14"
    ],
    "answer": 0,
    "explanation": "Condition (14 > 11) evaluates to true. Thus z is assigned to 14 + 11 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 | 6);",
    "options": [
      "16",
      "14",
      "13",
      "16"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1010 and 110 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 8; int y = 11; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "6",
      "8",
      "16",
      "11"
    ],
    "answer": 0,
    "explanation": "Condition (8 > 11) evaluates to false. Thus z is assigned to 11 - 5 which equals 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 15; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "20",
      "15",
      "10",
      "14"
    ],
    "answer": 2,
    "explanation": "Condition (14 > 15) evaluates to false. Thus z is assigned to 15 - 5 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(56 % 5);?",
    "options": [
      "3",
      "11",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 56 / 5 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 17; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "26",
      "8",
      "17",
      "10"
    ],
    "answer": 1,
    "explanation": "Condition (10 > 17) evaluates to false. Thus z is assigned to 17 - 9 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 15; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "17",
      "23",
      "15",
      "11"
    ],
    "answer": 1,
    "explanation": "Condition (17 > 15) evaluates to true. Thus z is assigned to 17 + 6 which equals 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 | 9);",
    "options": [
      "13",
      "15",
      "22",
      "12"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1101 and 1001 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 15; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "18",
      "15",
      "26",
      "10"
    ],
    "answer": 2,
    "explanation": "Condition (18 > 15) evaluates to true. Thus z is assigned to 18 + 8 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 & 4);",
    "options": [
      "16",
      "6",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1100 and 100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(7 & 9);",
    "options": [
      "1",
      "0",
      "3",
      "16"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 111 and 1001 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 | 9);",
    "options": [
      "20",
      "11",
      "13",
      "10"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1011 and 1001 yields decimal 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 11; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "19",
      "25",
      "11",
      "22"
    ],
    "answer": 1,
    "explanation": "Condition (22 > 11) evaluates to true. Thus z is assigned to 22 + 3 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 16; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "25",
      "19",
      "13",
      "16"
    ],
    "answer": 0,
    "explanation": "Condition (19 > 16) evaluates to true. Thus z is assigned to 19 + 6 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 16; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "23",
      "13",
      "18",
      "16"
    ],
    "answer": 0,
    "explanation": "Condition (18 > 16) evaluates to true. Thus z is assigned to 18 + 5 which equals 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(51 % 8);?",
    "options": [
      "6",
      "5",
      "3",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 51 / 8 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 9; int y = 11; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "6",
      "11",
      "9",
      "16"
    ],
    "answer": 0,
    "explanation": "Condition (9 > 11) evaluates to false. Thus z is assigned to 11 - 5 which equals 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 5; int y = 10; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "17",
      "5",
      "3",
      "10"
    ],
    "answer": 2,
    "explanation": "Condition (5 > 10) evaluates to false. Thus z is assigned to 10 - 7 which equals 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 19; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "19",
      "14",
      "24",
      "62"
    ],
    "answer": 1,
    "explanation": "Condition (14 > 19) evaluates to false. Thus z is assigned to 19 - 5 which equals 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 ^ 3);",
    "options": [
      "21",
      "30",
      "18",
      "19"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10000 and 11 yields decimal 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(45 % 6);?",
    "options": [
      "7",
      "0",
      "5",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 45 / 6 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 11; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "11",
      "21",
      "28",
      "14"
    ],
    "answer": 2,
    "explanation": "Condition (21 > 11) evaluates to true. Thus z is assigned to 21 + 7 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 & 2);",
    "options": [
      "2",
      "4",
      "1",
      "12"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1010 and 10 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 22; int z = (x > y) ? x + 3 : y - 3;?",
    "options": [
      "22",
      "25",
      "19",
      "13"
    ],
    "answer": 2,
    "explanation": "Condition (13 > 22) evaluates to false. Thus z is assigned to 22 - 3 which equals 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 13; int z = (x > y) ? x + 4 : y - 4;?",
    "options": [
      "9",
      "13",
      "17",
      "13"
    ],
    "answer": 0,
    "explanation": "Condition (13 > 13) evaluates to false. Thus z is assigned to 13 - 4 which equals 9."
  }
];
