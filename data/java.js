window.quizData = window.quizData || {};
window.quizData.java = [
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Java is which type of language?",
    "options": [
      "Assembly in practice",
      "Functional only",
      "Object-Oriented",
      "Procedural only"
    ],
    "answer": 2,
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
      "Only libraries in typical implementations",
      "Only editor in typical implementations",
      "Only JVM in typical implementations",
      "JRE + development tools (compiler, debugger)"
    ],
    "answer": 3,
    "explanation": "JDK is the full development kit."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JRE includes?",
    "options": [
      "Only debugger in most cases",
      "Only source code",
      "JVM + core libraries",
      "Only compiler in practice"
    ],
    "answer": 2,
    "explanation": "JRE is needed to run Java applications."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Encapsulation is achieved by?",
    "options": [
      "Static methods only (typical scenario)",
      "Abstract classes based on convention",
      "Private fields with public getters/setters",
      "Public fields (standard definition)"
    ],
    "answer": 2,
    "explanation": "Data hiding protects internal state."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Inheritance allows?",
    "options": [
      "A class to inherit properties of another class",
      "Thread creation in typical implementations",
      "Creating objects in typical implementations",
      "Handling exceptions in typical implementations"
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
      "No methods in typical implementations",
      "One method one behavior based on convention",
      "Static binding always as per specification",
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
      "Abstract classes and interfaces",
      "Variables (typical scenario)",
      "Loops (standard definition)",
      "Concrete classes only in most cases"
    ],
    "answer": 0,
    "explanation": "Hides implementation, shows only functionality."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Method overloading is?",
    "options": [
      "Different return type only (typical scenario)",
      "Same method name with different parameters",
      "Different classes in standard usage",
      "Same name same parameters (widely accepted)"
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
      "Same class different params (standard definition)",
      "Child class redefines parent method with same signature",
      "Static methods in typical implementations",
      "Different method name in typical implementations"
    ],
    "answer": 1,
    "explanation": "Runtime (dynamic) polymorphism."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Constructor is called when?",
    "options": [
      "Object is created using new keyword",
      "Variable is declared by design",
      "Class is loaded (default behavior)",
      "Method is called (standard definition)"
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
      "Instance variables in typical implementations",
      "Abstract methods (and default/static in Java 8+)",
      "Constructors in typical implementations",
      "Main method in typical implementations"
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
      "Both O(1) (standard definition)",
      "ArrayList is O(1), LinkedList is O(n)",
      "LinkedList is faster (typical scenario)",
      "Both O(n) under normal conditions"
    ],
    "answer": 1,
    "explanation": "ArrayList uses contiguous array; LinkedList traverses nodes."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "HashMap allows?",
    "options": [
      "No nulls (standard definition)",
      "Only null values (primary approach)",
      "Multiple null keys (commonly used)",
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
      "Key-value pairs (general case)",
      "Unique elements only, no duplicates",
      "Sorted elements based on convention",
      "Duplicates allowed under normal conditions"
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
      "Reverse order (general case)",
      "Sorted (natural) order",
      "Random order (general case)",
      "Insertion order in most cases"
    ],
    "answer": 1,
    "explanation": "Red-black tree implementation maintains sorted keys."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "PriorityQueue orders elements by?",
    "options": [
      "Insertion order in standard usage",
      "Random under normal conditions",
      "Alphabetical only (general case)",
      "Natural ordering or custom Comparator"
    ],
    "answer": 3,
    "explanation": "Min-heap by default in Java."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "try-catch-finally: finally block runs?",
    "options": [
      "Only on success (primary approach)",
      "Never based on convention",
      "Always (except System.exit)",
      "Only on exception by design"
    ],
    "answer": 2,
    "explanation": "Finally ensures cleanup code executes."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Checked exceptions are?",
    "options": [
      "OS-level errors in practice",
      "Runtime only (commonly used)",
      "Never checked (widely accepted)",
      "Verified at compile time"
    ],
    "answer": 3,
    "explanation": "Must be caught or declared with throws."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Custom exception extends?",
    "options": [
      "Exception or RuntimeException",
      "Object based on convention",
      "String based on convention",
      "Thread in typical implementations"
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
      "throw creates exception; throws declares it in method signature",
      "Same thing in typical implementations",
      "throw is for classes in typical implementations",
      "throws catches exception in typical implementations"
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
      "It has no methods (widely accepted)",
      "It uses char array based on convention",
      "Its value cannot be changed after creation",
      "It is final class in standard usage"
    ],
    "answer": 2,
    "explanation": "String pool and security require immutability."
  },
  {
    "subject": "Java",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "StringBuilder vs StringBuffer?",
    "options": [
      "StringBuilder is not thread-safe but faster",
      "Both thread-safe (standard definition)",
      "Both not thread-safe (default behavior)",
      "StringBuffer is faster (typical scenario)"
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
      "Only extending Thread (primary approach)",
      "Using String class (standard definition)",
      "Only Runnable in typical implementations",
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
      "Thread is stopped under normal conditions",
      "Only one thread accesses block/method at a time",
      "Memory is freed in typical implementations",
      "All threads run simultaneously in practice"
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
      "Thread pool management",
      "File handling (general case)",
      "Network calls by design",
      "Database access by design"
    ],
    "answer": 0,
    "explanation": "Manages thread lifecycle efficiently."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Lambda expression syntax?",
    "options": [
      "(parameters) -> expression/body",
      "function(){} (widely accepted)",
      "def func(): (typical scenario)",
      "method => param as per specification"
    ],
    "answer": 0,
    "explanation": "Java 8 functional programming feature."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Stream API is used for?",
    "options": [
      "Functional-style operations on collections",
      "File I/O streaming in typical implementations",
      "Audio streaming under normal conditions",
      "Network streaming in standard usage"
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
      "Multiple abstract methods",
      "Only default methods in most cases",
      "No methods (typical scenario)",
      "Exactly one abstract method"
    ],
    "answer": 3,
    "explanation": "@FunctionalInterface annotation enforces this."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Garbage collection in Java?",
    "options": [
      "OS handles it in typical implementations",
      "JVM automatically reclaims unused object memory",
      "No memory management in typical implementations",
      "Programmer must free memory (widely accepted)"
    ],
    "answer": 1,
    "explanation": "GC runs in background; objects without references are collected."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Stack memory stores?",
    "options": [
      "Class definitions (typical scenario)",
      "Static variables only by design",
      "Objects only as per specification",
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
      "Local variables only in practice",
      "Objects and instance variables",
      "Primitives only (general case)",
      "Method calls (standard definition)"
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
      "File contents in most cases",
      "File or directory path",
      "Network socket by design",
      "Database connection"
    ],
    "answer": 1,
    "explanation": "java.io.File for file system operations."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "BufferedReader is faster than Scanner because?",
    "options": [
      "It uses less memory based on convention",
      "Larger internal buffer reduces I/O operations",
      "It skips characters based on convention",
      "It is newer in typical implementations"
    ],
    "answer": 1,
    "explanation": "BufferedReader reads large chunks at once."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Serialization converts object to?",
    "options": [
      "Byte stream for storage or transmission",
      "String format in typical implementations",
      "HTML page in typical implementations",
      "XML only in typical implementations"
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
      "Belongs to instance (commonly used)",
      "Is private (default behavior)",
      "Cannot be accessed by design",
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
      "Imported in most cases",
      "Extended/inherited",
      "Instantiated by design",
      "Used (commonly used)"
    ],
    "answer": 1,
    "explanation": "final prevents subclassing."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "abstract class can have?",
    "options": [
      "Only abstract methods (widely accepted)",
      "No methods (widely accepted)",
      "Only concrete methods (widely accepted)",
      "Both abstract and concrete methods"
    ],
    "answer": 3,
    "explanation": "Abstract classes provide partial implementation."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "this keyword refers to?",
    "options": [
      "Parent class (general case)",
      "Current object instance",
      "Static context (general case)",
      "Previous object (general case)"
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
      "Handle exception (typical scenario)",
      "Define variable as per specification",
      "Create new object (default behavior)",
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
      "Static method call under normal conditions",
      "Compile-time resolution (typical scenario)",
      "Runtime resolution of overridden method call",
      "Constructor call in typical implementations"
    ],
    "answer": 2,
    "explanation": "JVM determines which overridden method to call at runtime."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Optional class in Java 8 helps avoid?",
    "options": [
      "StackOverflow in most cases",
      "NullPointerException",
      "ArrayIndexOutOfBounds",
      "ClassCast (general case)"
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
      "Serialization in most cases",
      "Hashing in most cases",
      "Custom sorting logic"
    ],
    "answer": 3,
    "explanation": "compare() method defines custom ordering."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "equals() vs == in Java?",
    "options": [
      "No difference in typical implementations",
      "Both check reference in typical implementations",
      "equals() checks content equality; == checks reference",
      "Both check content in typical implementations"
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
      "Object to primitive only (standard definition)",
      "String to int in typical implementations",
      "Manual casting in typical implementations",
      "Automatic conversion of primitive to wrapper class"
    ],
    "answer": 3,
    "explanation": "int to Integer happens automatically."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Design pattern: Singleton ensures?",
    "options": [
      "Abstract class (standard definition)",
      "No instances in typical implementations",
      "Multiple instances based on convention",
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
      "Memory allocation in typical implementations",
      "Object creation without exposing instantiation logic",
      "Sorting algorithm in typical implementations",
      "Thread management in typical implementations"
    ],
    "answer": 1,
    "explanation": "Factory method returns appropriate subclass instance."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Hard",
    "question": "Design pattern: Observer implements?",
    "options": [
      "One-to-many dependency notification",
      "Sorting in typical implementations",
      "Tree traversal in standard usage",
      "Singleton pattern (standard definition)"
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
      "Constructing complex objects step by step",
      "Sorting in typical implementations",
      "Destroying objects (standard definition)",
      "Threading in typical implementations"
    ],
    "answer": 0,
    "explanation": "Builder separates construction from representation."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "What is classpath in Java?",
    "options": [
      "Path where JVM looks for classes and packages",
      "Network path in typical implementations",
      "File system root in typical implementations",
      "Database URL in typical implementations"
    ],
    "answer": 0,
    "explanation": "Set via -cp flag or CLASSPATH environment variable."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "What is the default value of an int in Java?",
    "options": [
      "null",
      "undefined",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Primitive int defaults to 0 in Java."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "What is the default value of an Object reference?",
    "options": [
      "empty string",
      "undefined",
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
      "Interfaces only",
      "Classes (general case)",
      "Abstract classes",
      "Constructors"
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
      "A method in typical implementations",
      "A loop construct in typical implementations",
      "A special class representing a fixed set of constants",
      "A variable type in typical implementations"
    ],
    "answer": 2,
    "explanation": "Enums provide type-safe constant definitions."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "var keyword in Java 10+?",
    "options": [
      "Global variable in most cases",
      "Local variable type inference",
      "Constant declaration in most cases",
      "Dynamic typing as per specification"
    ],
    "answer": 1,
    "explanation": "Compiler infers type from initializer."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1985 % 30);?",
    "options": [
      "66",
      "8",
      "5",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1985 / 30 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 189; int y = 189; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "189",
      "183",
      "195",
      "189"
    ],
    "answer": 1,
    "explanation": "Condition (189 > 189) evaluates to false. Thus z is assigned to 189 - 6 which equals 183."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3549 % 15);?",
    "options": [
      "236",
      "9",
      "12",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3549 / 15 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4235 % 38);?",
    "options": [
      "0",
      "111",
      "20",
      "17"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4235 / 38 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1664 % 58);?",
    "options": [
      "43",
      "0",
      "40",
      "28"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1664 / 58 leaves remainder 40."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(169 ^ 36);",
    "options": [
      "141",
      "139",
      "205",
      "144"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10101001 and 100100 yields decimal 141."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2827 % 19);?",
    "options": [
      "148",
      "0",
      "18",
      "15"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2827 / 19 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 75; int y = 197; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "178",
      "197",
      "75",
      "216"
    ],
    "answer": 0,
    "explanation": "Condition (75 > 197) evaluates to false. Thus z is assigned to 197 - 19 which equals 178."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 60; int y = 33; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "33",
      "48",
      "72",
      "60"
    ],
    "answer": 2,
    "explanation": "Condition (60 > 33) evaluates to true. Thus z is assigned to 60 + 12 which equals 72."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(92 ^ 104);",
    "options": [
      "50",
      "196",
      "52",
      "55"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1011100 and 1101000 yields decimal 52."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4347 % 35);?",
    "options": [
      "7",
      "10",
      "124",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4347 / 35 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3912 % 29);?",
    "options": [
      "29",
      "0",
      "134",
      "26"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3912 / 29 leaves remainder 26."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(130 ^ 36);",
    "options": [
      "190",
      "164",
      "169",
      "166"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10000010 and 100100 yields decimal 166."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(200 | 79);",
    "options": [
      "210",
      "205",
      "279",
      "207"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 11001000 and 1001111 yields decimal 207."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(101 ^ 38);",
    "options": [
      "70",
      "65",
      "67",
      "139"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1100101 and 100110 yields decimal 67."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1828 % 29);?",
    "options": [
      "4",
      "0",
      "63",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1828 / 29 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2570 % 42);?",
    "options": [
      "0",
      "61",
      "11",
      "8"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2570 / 42 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(29 | 31);",
    "options": [
      "34",
      "29",
      "60",
      "31"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 11101 and 11111 yields decimal 31."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1001 % 33);?",
    "options": [
      "11",
      "30",
      "0",
      "14"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1001 / 33 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(84 & 92);",
    "options": [
      "82",
      "176",
      "87",
      "84"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1010100 and 1011100 yields decimal 84."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3177 % 18);?",
    "options": [
      "176",
      "0",
      "9",
      "12"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3177 / 18 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 46; int y = 84; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "84",
      "99",
      "69",
      "46"
    ],
    "answer": 2,
    "explanation": "Condition (46 > 84) evaluates to false. Thus z is assigned to 84 - 15 which equals 69."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 40; int y = 209; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "40",
      "200",
      "218",
      "209"
    ],
    "answer": 1,
    "explanation": "Condition (40 > 209) evaluates to false. Thus z is assigned to 209 - 9 which equals 200."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4255 % 10);?",
    "options": [
      "8",
      "5",
      "425",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4255 / 10 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(22 & 29);",
    "options": [
      "18",
      "51",
      "23",
      "20"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10110 and 11101 yields decimal 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 101; int y = 46; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "96",
      "101",
      "106",
      "46"
    ],
    "answer": 2,
    "explanation": "Condition (101 > 46) evaluates to true. Thus z is assigned to 101 + 5 which equals 106."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 163; int y = 157; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "157",
      "142",
      "184",
      "163"
    ],
    "answer": 2,
    "explanation": "Condition (163 > 157) evaluates to true. Thus z is assigned to 163 + 21 which equals 184."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 93; int y = 160; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "93",
      "166",
      "154",
      "160"
    ],
    "answer": 2,
    "explanation": "Condition (93 > 160) evaluates to false. Thus z is assigned to 160 - 6 which equals 154."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 49; int y = 157; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "171",
      "49",
      "143",
      "157"
    ],
    "answer": 2,
    "explanation": "Condition (49 > 157) evaluates to false. Thus z is assigned to 157 - 14 which equals 143."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2048 % 14);?",
    "options": [
      "7",
      "4",
      "0",
      "146"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2048 / 14 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 82; int y = 114; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "308",
      "146",
      "114",
      "82"
    ],
    "answer": 3,
    "explanation": "Condition (82 > 114) evaluates to false. Thus z is assigned to 114 - 32 which equals 82."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 148; int y = 165; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "148",
      "142",
      "165",
      "188"
    ],
    "answer": 1,
    "explanation": "Condition (148 > 165) evaluates to false. Thus z is assigned to 165 - 23 which equals 142."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 201; int y = 127; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "127",
      "224",
      "201",
      "178"
    ],
    "answer": 1,
    "explanation": "Condition (201 > 127) evaluates to true. Thus z is assigned to 201 + 23 which equals 224."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 192; int y = 46; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "175",
      "209",
      "46",
      "192"
    ],
    "answer": 1,
    "explanation": "Condition (192 > 46) evaluates to true. Thus z is assigned to 192 + 17 which equals 209."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(113 ^ 43);",
    "options": [
      "93",
      "88",
      "156",
      "90"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1110001 and 101011 yields decimal 90."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(45 & 17);",
    "options": [
      "62",
      "-1",
      "1",
      "4"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 101101 and 10001 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2323 % 13);?",
    "options": [
      "0",
      "12",
      "178",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2323 / 13 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2170 % 21);?",
    "options": [
      "103",
      "10",
      "7",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2170 / 21 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 136; int y = 30; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "136",
      "144",
      "30",
      "128"
    ],
    "answer": 1,
    "explanation": "Condition (136 > 30) evaluates to true. Thus z is assigned to 136 + 8 which equals 144."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(70 ^ 27);",
    "options": [
      "96",
      "93",
      "97",
      "91"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1000110 and 11011 yields decimal 93."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 142; int y = 160; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "143",
      "160",
      "142",
      "177"
    ],
    "answer": 0,
    "explanation": "Condition (142 > 160) evaluates to false. Thus z is assigned to 160 - 17 which equals 143."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(69 | 13);",
    "options": [
      "80",
      "77",
      "75",
      "82"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1000101 and 1101 yields decimal 77."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(81 | 100);",
    "options": [
      "181",
      "120",
      "117",
      "115"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1010001 and 1100100 yields decimal 117."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 131; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "160",
      "22",
      "102",
      "131"
    ],
    "answer": 2,
    "explanation": "Condition (22 > 131) evaluates to false. Thus z is assigned to 131 - 29 which equals 102."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4268 % 35);?",
    "options": [
      "121",
      "33",
      "36",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4268 / 35 leaves remainder 33."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 30; int y = 96; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "96",
      "116",
      "30",
      "76"
    ],
    "answer": 3,
    "explanation": "Condition (30 > 96) evaluates to false. Thus z is assigned to 96 - 20 which equals 76."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 129; int y = 75; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "159",
      "75",
      "129",
      "99"
    ],
    "answer": 0,
    "explanation": "Condition (129 > 75) evaluates to true. Thus z is assigned to 129 + 30 which equals 159."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1694 % 55);?",
    "options": [
      "47",
      "0",
      "44",
      "30"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1694 / 55 leaves remainder 44."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 126; int y = 152; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "152",
      "161",
      "126",
      "143"
    ],
    "answer": 3,
    "explanation": "Condition (126 > 152) evaluates to false. Thus z is assigned to 152 - 9 which equals 143."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(107 ^ 39);",
    "options": [
      "76",
      "74",
      "79",
      "146"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1101011 and 100111 yields decimal 76."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 65; int y = 195; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "65",
      "195",
      "186",
      "204"
    ],
    "answer": 2,
    "explanation": "Condition (65 > 195) evaluates to false. Thus z is assigned to 195 - 9 which equals 186."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 173; int y = 183; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "155",
      "211",
      "183",
      "173"
    ],
    "answer": 0,
    "explanation": "Condition (173 > 183) evaluates to false. Thus z is assigned to 183 - 28 which equals 155."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 118; int y = 85; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "125",
      "111",
      "85",
      "118"
    ],
    "answer": 0,
    "explanation": "Condition (118 > 85) evaluates to true. Thus z is assigned to 118 + 7 which equals 125."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 82; int y = 129; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "137",
      "82",
      "129",
      "121"
    ],
    "answer": 3,
    "explanation": "Condition (82 > 129) evaluates to false. Thus z is assigned to 129 - 8 which equals 121."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 27; int y = 188; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "27",
      "181",
      "188",
      "195"
    ],
    "answer": 1,
    "explanation": "Condition (27 > 188) evaluates to false. Thus z is assigned to 188 - 7 which equals 181."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(37 | 49);",
    "options": [
      "53",
      "86",
      "56",
      "51"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 100101 and 110001 yields decimal 53."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3776 % 41);?",
    "options": [
      "7",
      "4",
      "92",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3776 / 41 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2672 % 14);?",
    "options": [
      "190",
      "12",
      "0",
      "15"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2672 / 14 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3418 % 31);?",
    "options": [
      "0",
      "110",
      "11",
      "8"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3418 / 31 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 108; int y = 15; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "108",
      "15",
      "127",
      "89"
    ],
    "answer": 2,
    "explanation": "Condition (108 > 15) evaluates to true. Thus z is assigned to 108 + 19 which equals 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2855 % 41);?",
    "options": [
      "26",
      "69",
      "29",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2855 / 41 leaves remainder 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3243 % 37);?",
    "options": [
      "87",
      "27",
      "24",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3243 / 37 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2051 % 24);?",
    "options": [
      "85",
      "14",
      "11",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2051 / 24 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(193 | 72);",
    "options": [
      "204",
      "199",
      "265",
      "201"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 11000001 and 1001000 yields decimal 201."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(149 | 89);",
    "options": [
      "221",
      "238",
      "219",
      "224"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10010101 and 1011001 yields decimal 221."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2411 % 15);?",
    "options": [
      "0",
      "160",
      "11",
      "14"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2411 / 15 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 65; int y = 26; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "26",
      "65",
      "98",
      "32"
    ],
    "answer": 2,
    "explanation": "Condition (65 > 26) evaluates to true. Thus z is assigned to 65 + 33 which equals 98."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 83; int y = 156; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "188",
      "83",
      "156",
      "124"
    ],
    "answer": 3,
    "explanation": "Condition (83 > 156) evaluates to false. Thus z is assigned to 156 - 32 which equals 124."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 77; int y = 142; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "77",
      "148",
      "142",
      "136"
    ],
    "answer": 3,
    "explanation": "Condition (77 > 142) evaluates to false. Thus z is assigned to 142 - 6 which equals 136."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 176; int y = 17; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "146",
      "206",
      "17",
      "176"
    ],
    "answer": 1,
    "explanation": "Condition (176 > 17) evaluates to true. Thus z is assigned to 176 + 30 which equals 206."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(174 ^ 77);",
    "options": [
      "251",
      "227",
      "225",
      "230"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10101110 and 1001101 yields decimal 227."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 182; int y = 35; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "172",
      "182",
      "192",
      "35"
    ],
    "answer": 2,
    "explanation": "Condition (182 > 35) evaluates to true. Thus z is assigned to 182 + 10 which equals 192."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(54 ^ 24);",
    "options": [
      "78",
      "44",
      "46",
      "49"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 110110 and 11000 yields decimal 46."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(202 & 55);",
    "options": [
      "2",
      "257",
      "0",
      "5"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11001010 and 110111 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3472 % 46);?",
    "options": [
      "75",
      "22",
      "25",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3472 / 46 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2290 % 13);?",
    "options": [
      "0",
      "5",
      "2",
      "176"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2290 / 13 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(117 | 69);",
    "options": [
      "117",
      "120",
      "115",
      "186"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1110101 and 1000101 yields decimal 117."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 67; int y = 13; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "94",
      "40",
      "13",
      "67"
    ],
    "answer": 0,
    "explanation": "Condition (67 > 13) evaluates to true. Thus z is assigned to 67 + 27 which equals 94."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4412 % 16);?",
    "options": [
      "12",
      "275",
      "0",
      "15"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4412 / 16 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 125; int y = 103; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "114",
      "136",
      "125",
      "103"
    ],
    "answer": 1,
    "explanation": "Condition (125 > 103) evaluates to true. Thus z is assigned to 125 + 11 which equals 136."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(89 ^ 93);",
    "options": [
      "182",
      "4",
      "2",
      "7"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1011001 and 1011101 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1209 % 20);?",
    "options": [
      "60",
      "9",
      "12",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1209 / 20 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 153; int y = 151; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "184",
      "153",
      "151",
      "122"
    ],
    "answer": 0,
    "explanation": "Condition (153 > 151) evaluates to true. Thus z is assigned to 153 + 31 which equals 184."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 87; int y = 28; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "28",
      "87",
      "113",
      "61"
    ],
    "answer": 2,
    "explanation": "Condition (87 > 28) evaluates to true. Thus z is assigned to 87 + 26 which equals 113."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 150; int y = 200; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "200",
      "150",
      "177",
      "223"
    ],
    "answer": 2,
    "explanation": "Condition (150 > 200) evaluates to false. Thus z is assigned to 200 - 23 which equals 177."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(113 & 98);",
    "options": [
      "96",
      "94",
      "211",
      "99"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1110001 and 1100010 yields decimal 96."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(75 & 57);",
    "options": [
      "12",
      "132",
      "7",
      "9"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1001011 and 111001 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(26 & 84);",
    "options": [
      "19",
      "110",
      "14",
      "16"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 11010 and 1010100 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4969 % 29);?",
    "options": [
      "171",
      "13",
      "0",
      "10"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4969 / 29 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2742 % 57);?",
    "options": [
      "0",
      "6",
      "48",
      "9"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2742 / 57 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3221 % 27);?",
    "options": [
      "8",
      "11",
      "0",
      "119"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3221 / 27 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(79 | 96);",
    "options": [
      "114",
      "175",
      "109",
      "111"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1001111 and 1100000 yields decimal 111."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 42; int y = 122; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "122",
      "42",
      "98",
      "146"
    ],
    "answer": 2,
    "explanation": "Condition (42 > 122) evaluates to false. Thus z is assigned to 122 - 24 which equals 98."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 116; int y = 171; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "154",
      "188",
      "116",
      "171"
    ],
    "answer": 0,
    "explanation": "Condition (116 > 171) evaluates to false. Thus z is assigned to 171 - 17 which equals 154."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 160; int y = 88; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "88",
      "191",
      "160",
      "129"
    ],
    "answer": 1,
    "explanation": "Condition (160 > 88) evaluates to true. Thus z is assigned to 160 + 31 which equals 191."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 160; int y = 187; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "154",
      "220",
      "187",
      "160"
    ],
    "answer": 0,
    "explanation": "Condition (160 > 187) evaluates to false. Thus z is assigned to 187 - 33 which equals 154."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3557 % 37);?",
    "options": [
      "8",
      "0",
      "96",
      "5"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3557 / 37 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(812 % 58);?",
    "options": [
      "0",
      "3",
      "14",
      "7"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 812 / 58 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 96; int y = 59; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "59",
      "63",
      "96",
      "129"
    ],
    "answer": 3,
    "explanation": "Condition (96 > 59) evaluates to true. Thus z is assigned to 96 + 33 which equals 129."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(535 % 58);?",
    "options": [
      "9",
      "16",
      "0",
      "13"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 535 / 58 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(646 % 27);?",
    "options": [
      "0",
      "25",
      "23",
      "28"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 646 / 27 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(193 ^ 86);",
    "options": [
      "279",
      "149",
      "154",
      "151"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 11000001 and 1010110 yields decimal 151."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(495 % 11);?",
    "options": [
      "45",
      "0",
      "3",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 495 / 11 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(182 & 83);",
    "options": [
      "265",
      "16",
      "21",
      "18"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10110110 and 1010011 yields decimal 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(140 & 95);",
    "options": [
      "235",
      "15",
      "12",
      "10"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10001100 and 1011111 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 163; int y = 30; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "163",
      "135",
      "30",
      "191"
    ],
    "answer": 3,
    "explanation": "Condition (163 > 30) evaluates to true. Thus z is assigned to 163 + 28 which equals 191."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(172 ^ 20);",
    "options": [
      "184",
      "192",
      "187",
      "182"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10101100 and 10100 yields decimal 184."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3271 % 53);?",
    "options": [
      "0",
      "38",
      "61",
      "41"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3271 / 53 leaves remainder 38."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(160 ^ 92);",
    "options": [
      "276",
      "252",
      "250",
      "255"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10100000 and 1011100 yields decimal 252."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4202 % 35);?",
    "options": [
      "120",
      "5",
      "2",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4202 / 35 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(49 & 41);",
    "options": [
      "31",
      "33",
      "90",
      "36"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 110001 and 101001 yields decimal 33."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(75 ^ 27);",
    "options": [
      "80",
      "83",
      "78",
      "102"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1001011 and 11011 yields decimal 80."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3317 % 19);?",
    "options": [
      "14",
      "0",
      "11",
      "174"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3317 / 19 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 87; int y = 36; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "87",
      "56",
      "118",
      "36"
    ],
    "answer": 2,
    "explanation": "Condition (87 > 36) evaluates to true. Thus z is assigned to 87 + 31 which equals 118."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(131 | 38);",
    "options": [
      "167",
      "170",
      "165",
      "169"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10000011 and 100110 yields decimal 167."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2129 % 20);?",
    "options": [
      "12",
      "9",
      "106",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2129 / 20 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3350 % 34);?",
    "options": [
      "98",
      "0",
      "18",
      "21"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3350 / 34 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(209 | 26);",
    "options": [
      "217",
      "235",
      "222",
      "219"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 11010001 and 11010 yields decimal 219."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3010 % 59);?",
    "options": [
      "51",
      "4",
      "1",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3010 / 59 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(36 | 23);",
    "options": [
      "53",
      "55",
      "58",
      "59"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 100100 and 10111 yields decimal 55."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3072 % 12);?",
    "options": [
      "7",
      "0",
      "256",
      "3"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3072 / 12 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2840 % 43);?",
    "options": [
      "0",
      "66",
      "2",
      "5"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2840 / 43 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3579 % 45);?",
    "options": [
      "79",
      "24",
      "0",
      "27"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3579 / 45 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1160 % 40);?",
    "options": [
      "7",
      "0",
      "3",
      "29"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1160 / 40 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(100 | 30);",
    "options": [
      "126",
      "130",
      "129",
      "124"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1100100 and 11110 yields decimal 126."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 104; int y = 15; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "127",
      "81",
      "104",
      "15"
    ],
    "answer": 0,
    "explanation": "Condition (104 > 15) evaluates to true. Thus z is assigned to 104 + 23 which equals 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4535 % 45);?",
    "options": [
      "0",
      "38",
      "35",
      "100"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4535 / 45 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 163; int y = 141; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "154",
      "163",
      "172",
      "141"
    ],
    "answer": 2,
    "explanation": "Condition (163 > 141) evaluates to true. Thus z is assigned to 163 + 9 which equals 172."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 95; int y = 162; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "142",
      "182",
      "95",
      "162"
    ],
    "answer": 0,
    "explanation": "Condition (95 > 162) evaluates to false. Thus z is assigned to 162 - 20 which equals 142."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 37; int y = 91; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "125",
      "57",
      "37",
      "91"
    ],
    "answer": 1,
    "explanation": "Condition (37 > 91) evaluates to false. Thus z is assigned to 91 - 34 which equals 57."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(178 | 61);",
    "options": [
      "194",
      "191",
      "239",
      "189"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10110010 and 111101 yields decimal 191."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4463 % 52);?",
    "options": [
      "43",
      "85",
      "0",
      "46"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4463 / 52 leaves remainder 43."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3846 % 43);?",
    "options": [
      "89",
      "22",
      "0",
      "19"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3846 / 43 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 62; int y = 88; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "62",
      "88",
      "59",
      "117"
    ],
    "answer": 2,
    "explanation": "Condition (62 > 88) evaluates to false. Thus z is assigned to 88 - 29 which equals 59."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(36 ^ 91);",
    "options": [
      "127",
      "130",
      "125",
      "151"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 100100 and 1011011 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2758 % 46);?",
    "options": [
      "0",
      "47",
      "44",
      "59"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2758 / 46 leaves remainder 44."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2600 % 22);?",
    "options": [
      "118",
      "0",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2600 / 22 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2269 % 22);?",
    "options": [
      "6",
      "0",
      "103",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2269 / 22 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1249 % 25);?",
    "options": [
      "24",
      "27",
      "0",
      "49"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1249 / 25 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 206; int y = 20; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "234",
      "206",
      "20",
      "178"
    ],
    "answer": 0,
    "explanation": "Condition (206 > 20) evaluates to true. Thus z is assigned to 206 + 28 which equals 234."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1076 % 54);?",
    "options": [
      "50",
      "19",
      "0",
      "53"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1076 / 54 leaves remainder 50."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 70; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "56",
      "84",
      "23",
      "70"
    ],
    "answer": 0,
    "explanation": "Condition (23 > 70) evaluates to false. Thus z is assigned to 70 - 14 which equals 56."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 176; int y = 95; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "95",
      "143",
      "176",
      "209"
    ],
    "answer": 3,
    "explanation": "Condition (176 > 95) evaluates to true. Thus z is assigned to 176 + 33 which equals 209."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 203; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "234",
      "10",
      "203",
      "172"
    ],
    "answer": 3,
    "explanation": "Condition (10 > 203) evaluates to false. Thus z is assigned to 203 - 31 which equals 172."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 56; int y = 12; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "75",
      "12",
      "37",
      "56"
    ],
    "answer": 0,
    "explanation": "Condition (56 > 12) evaluates to true. Thus z is assigned to 56 + 19 which equals 75."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(62 | 85);",
    "options": [
      "127",
      "125",
      "147",
      "130"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 111110 and 1010101 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(631 % 50);?",
    "options": [
      "31",
      "34",
      "12",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 631 / 50 leaves remainder 31."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(137 | 13);",
    "options": [
      "144",
      "139",
      "150",
      "141"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10001001 and 1101 yields decimal 141."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1991 % 34);?",
    "options": [
      "22",
      "58",
      "0",
      "19"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1991 / 34 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1826 % 40);?",
    "options": [
      "29",
      "0",
      "45",
      "26"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1826 / 40 leaves remainder 26."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(123 ^ 5);",
    "options": [
      "124",
      "128",
      "126",
      "129"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1111011 and 101 yields decimal 126."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2682 % 38);?",
    "options": [
      "25",
      "70",
      "0",
      "22"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2682 / 38 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 104; int y = 191; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "104",
      "191",
      "216",
      "166"
    ],
    "answer": 3,
    "explanation": "Condition (104 > 191) evaluates to false. Thus z is assigned to 191 - 25 which equals 166."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1144 % 36);?",
    "options": [
      "31",
      "31",
      "28",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1144 / 36 leaves remainder 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(650 % 24);?",
    "options": [
      "5",
      "2",
      "0",
      "27"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 650 / 24 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 202; int y = 135; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "170",
      "202",
      "135",
      "234"
    ],
    "answer": 3,
    "explanation": "Condition (202 > 135) evaluates to true. Thus z is assigned to 202 + 32 which equals 234."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(617 % 16);?",
    "options": [
      "38",
      "12",
      "0",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 617 / 16 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(32 & 17);",
    "options": [
      "3",
      "0",
      "-2",
      "49"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 100000 and 10001 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 102; int y = 37; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "122",
      "37",
      "82",
      "102"
    ],
    "answer": 0,
    "explanation": "Condition (102 > 37) evaluates to true. Thus z is assigned to 102 + 20 which equals 122."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2886 % 10);?",
    "options": [
      "9",
      "0",
      "6",
      "288"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2886 / 10 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 128; int y = 39; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "140",
      "39",
      "128",
      "116"
    ],
    "answer": 0,
    "explanation": "Condition (128 > 39) evaluates to true. Thus z is assigned to 128 + 12 which equals 140."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(77 & 81);",
    "options": [
      "68",
      "65",
      "158",
      "63"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1001101 and 1010001 yields decimal 65."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(53 | 54);",
    "options": [
      "53",
      "55",
      "58",
      "107"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 110101 and 110110 yields decimal 55."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 33; int y = 94; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "33",
      "101",
      "94",
      "87"
    ],
    "answer": 3,
    "explanation": "Condition (33 > 94) evaluates to false. Thus z is assigned to 94 - 7 which equals 87."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 171; int y = 99; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "99",
      "171",
      "201",
      "141"
    ],
    "answer": 2,
    "explanation": "Condition (171 > 99) evaluates to true. Thus z is assigned to 171 + 30 which equals 201."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4098 % 10);?",
    "options": [
      "8",
      "11",
      "0",
      "409"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4098 / 10 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(875 % 19);?",
    "options": [
      "4",
      "1",
      "46",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 875 / 19 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4029 % 36);?",
    "options": [
      "111",
      "33",
      "0",
      "36"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4029 / 36 leaves remainder 33."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 53; int y = 144; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "178",
      "110",
      "53",
      "144"
    ],
    "answer": 1,
    "explanation": "Condition (53 > 144) evaluates to false. Thus z is assigned to 144 - 34 which equals 110."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3451 % 16);?",
    "options": [
      "215",
      "11",
      "14",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3451 / 16 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2728 % 40);?",
    "options": [
      "0",
      "8",
      "68",
      "11"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2728 / 40 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 80; int y = 10; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "80",
      "10",
      "113",
      "47"
    ],
    "answer": 2,
    "explanation": "Condition (80 > 10) evaluates to true. Thus z is assigned to 80 + 33 which equals 113."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2777 % 14);?",
    "options": [
      "8",
      "198",
      "0",
      "5"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2777 / 14 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1519 % 49);?",
    "options": [
      "31",
      "0",
      "3",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1519 / 49 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 67; int y = 125; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "67",
      "120",
      "125",
      "130"
    ],
    "answer": 1,
    "explanation": "Condition (67 > 125) evaluates to false. Thus z is assigned to 125 - 5 which equals 120."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(141 & 63);",
    "options": [
      "204",
      "16",
      "13",
      "11"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10001101 and 111111 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1959 % 37);?",
    "options": [
      "0",
      "52",
      "35",
      "38"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1959 / 37 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4483 % 58);?",
    "options": [
      "0",
      "77",
      "17",
      "20"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4483 / 58 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(199 ^ 94);",
    "options": [
      "293",
      "156",
      "153",
      "151"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 11000111 and 1011110 yields decimal 153."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4966 % 40);?",
    "options": [
      "0",
      "9",
      "6",
      "124"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4966 / 40 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 57; int y = 114; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "96",
      "57",
      "114",
      "132"
    ],
    "answer": 0,
    "explanation": "Condition (57 > 114) evaluates to false. Thus z is assigned to 114 - 18 which equals 96."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1574 % 13);?",
    "options": [
      "121",
      "4",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1574 / 13 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 136; int y = 169; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "136",
      "151",
      "169",
      "187"
    ],
    "answer": 1,
    "explanation": "Condition (136 > 169) evaluates to false. Thus z is assigned to 169 - 18 which equals 151."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 204; int y = 152; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "209",
      "152",
      "204",
      "199"
    ],
    "answer": 0,
    "explanation": "Condition (204 > 152) evaluates to true. Thus z is assigned to 204 + 5 which equals 209."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1593 % 11);?",
    "options": [
      "0",
      "12",
      "144",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1593 / 11 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 109; int y = 201; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "201",
      "207",
      "109",
      "195"
    ],
    "answer": 3,
    "explanation": "Condition (109 > 201) evaluates to false. Thus z is assigned to 201 - 6 which equals 195."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3940 % 29);?",
    "options": [
      "25",
      "28",
      "135",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3940 / 29 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(175 ^ 97);",
    "options": [
      "204",
      "206",
      "209",
      "272"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10101111 and 1100001 yields decimal 206."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4652 % 36);?",
    "options": [
      "129",
      "8",
      "11",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4652 / 36 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(41 & 72);",
    "options": [
      "113",
      "8",
      "6",
      "11"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 101001 and 1001000 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(45 ^ 51);",
    "options": [
      "96",
      "33",
      "28",
      "30"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 101101 and 110011 yields decimal 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 110; int y = 124; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "145",
      "110",
      "103",
      "124"
    ],
    "answer": 2,
    "explanation": "Condition (110 > 124) evaluates to false. Thus z is assigned to 124 - 21 which equals 103."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 & 78);",
    "options": [
      "90",
      "15",
      "10",
      "12"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1100 and 1001110 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(71 ^ 47);",
    "options": [
      "102",
      "118",
      "107",
      "104"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1000111 and 101111 yields decimal 104."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 145; int y = 115; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "133",
      "145",
      "157",
      "115"
    ],
    "answer": 2,
    "explanation": "Condition (145 > 115) evaluates to true. Thus z is assigned to 145 + 12 which equals 157."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1979 % 12);?",
    "options": [
      "0",
      "11",
      "14",
      "164"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1979 / 12 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(144 | 70);",
    "options": [
      "214",
      "238",
      "212",
      "217"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10010000 and 1000110 yields decimal 214."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(915 % 27);?",
    "options": [
      "0",
      "33",
      "27",
      "24"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 915 / 27 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(377 % 46);?",
    "options": [
      "12",
      "8",
      "9",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 377 / 46 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1014 % 15);?",
    "options": [
      "0",
      "67",
      "9",
      "12"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1014 / 15 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5140 % 30);?",
    "options": [
      "171",
      "13",
      "10",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 5140 / 30 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(135 ^ 46);",
    "options": [
      "167",
      "181",
      "169",
      "172"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10000111 and 101110 yields decimal 169."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(42 & 84);",
    "options": [
      "-2",
      "126",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 101010 and 1010100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3384 % 39);?",
    "options": [
      "30",
      "86",
      "0",
      "33"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3384 / 39 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(447 % 31);?",
    "options": [
      "14",
      "0",
      "16",
      "13"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 447 / 31 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2860 % 19);?",
    "options": [
      "150",
      "10",
      "0",
      "13"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2860 / 19 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1286 % 52);?",
    "options": [
      "0",
      "41",
      "24",
      "38"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1286 / 52 leaves remainder 38."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 63; int y = 78; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "49",
      "78",
      "107",
      "63"
    ],
    "answer": 0,
    "explanation": "Condition (63 > 78) evaluates to false. Thus z is assigned to 78 - 29 which equals 49."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(115 ^ 34);",
    "options": [
      "79",
      "81",
      "84",
      "149"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1110011 and 100010 yields decimal 81."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 31; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "31",
      "40",
      "23",
      "22"
    ],
    "answer": 3,
    "explanation": "Condition (23 > 31) evaluates to false. Thus z is assigned to 31 - 9 which equals 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 147; int y = 151; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "177",
      "125",
      "151",
      "147"
    ],
    "answer": 1,
    "explanation": "Condition (147 > 151) evaluates to false. Thus z is assigned to 151 - 26 which equals 125."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 70; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "38",
      "10",
      "102",
      "70"
    ],
    "answer": 0,
    "explanation": "Condition (10 > 70) evaluates to false. Thus z is assigned to 70 - 32 which equals 38."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(76 ^ 54);",
    "options": [
      "122",
      "125",
      "120",
      "130"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1001100 and 110110 yields decimal 122."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(137 & 86);",
    "options": [
      "0",
      "223",
      "3",
      "-2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10001001 and 1010110 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(159 & 33);",
    "options": [
      "1",
      "-1",
      "4",
      "192"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10011111 and 100001 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(171 & 26);",
    "options": [
      "197",
      "13",
      "8",
      "10"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10101011 and 11010 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2585 % 45);?",
    "options": [
      "57",
      "23",
      "20",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2585 / 45 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(96 | 92);",
    "options": [
      "127",
      "124",
      "188",
      "122"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1100000 and 1011100 yields decimal 124."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 197; int y = 161; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "197",
      "161",
      "205",
      "189"
    ],
    "answer": 2,
    "explanation": "Condition (197 > 161) evaluates to true. Thus z is assigned to 197 + 8 which equals 205."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(28 ^ 56);",
    "options": [
      "39",
      "84",
      "34",
      "36"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 11100 and 111000 yields decimal 36."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(882 % 14);?",
    "options": [
      "7",
      "0",
      "63",
      "3"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 882 / 14 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(169 & 12);",
    "options": [
      "6",
      "8",
      "181",
      "11"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10101001 and 1100 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5168 % 54);?",
    "options": [
      "0",
      "95",
      "38",
      "41"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 5168 / 54 leaves remainder 38."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 89; int y = 133; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "133",
      "89",
      "102",
      "164"
    ],
    "answer": 2,
    "explanation": "Condition (89 > 133) evaluates to false. Thus z is assigned to 133 - 31 which equals 102."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(185 & 62);",
    "options": [
      "247",
      "56",
      "54",
      "59"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10111001 and 111110 yields decimal 56."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1927 % 50);?",
    "options": [
      "30",
      "38",
      "27",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1927 / 50 leaves remainder 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 160; int y = 204; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "160",
      "204",
      "223",
      "185"
    ],
    "answer": 3,
    "explanation": "Condition (160 > 204) evaluates to false. Thus z is assigned to 204 - 19 which equals 185."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4456 % 47);?",
    "options": [
      "94",
      "0",
      "38",
      "41"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4456 / 47 leaves remainder 38."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3012 % 41);?",
    "options": [
      "0",
      "73",
      "19",
      "22"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3012 / 41 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(67 ^ 49);",
    "options": [
      "116",
      "112",
      "117",
      "114"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1000011 and 110001 yields decimal 114."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(80 & 17);",
    "options": [
      "16",
      "19",
      "14",
      "97"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1010000 and 10001 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2685 % 57);?",
    "options": [
      "9",
      "0",
      "6",
      "47"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2685 / 57 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(125 | 16);",
    "options": [
      "125",
      "128",
      "123",
      "141"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1111101 and 10000 yields decimal 125."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4954 % 44);?",
    "options": [
      "26",
      "112",
      "29",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4954 / 44 leaves remainder 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2260 % 14);?",
    "options": [
      "0",
      "6",
      "161",
      "9"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2260 / 14 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 164; int y = 110; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "154",
      "174",
      "164",
      "110"
    ],
    "answer": 1,
    "explanation": "Condition (164 > 110) evaluates to true. Thus z is assigned to 164 + 10 which equals 174."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5034 % 27);?",
    "options": [
      "0",
      "15",
      "186",
      "12"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 5034 / 27 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 164; int y = 132; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "136",
      "192",
      "132",
      "164"
    ],
    "answer": 1,
    "explanation": "Condition (164 > 132) evaluates to true. Thus z is assigned to 164 + 28 which equals 192."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(130 ^ 32);",
    "options": [
      "165",
      "160",
      "186",
      "162"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10000010 and 100000 yields decimal 162."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3996 % 30);?",
    "options": [
      "6",
      "0",
      "9",
      "133"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3996 / 30 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1235 % 33);?",
    "options": [
      "17",
      "14",
      "0",
      "37"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1235 / 33 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2667 % 51);?",
    "options": [
      "52",
      "0",
      "15",
      "18"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2667 / 51 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(86 | 42);",
    "options": [
      "126",
      "128",
      "124",
      "129"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1010110 and 101010 yields decimal 126."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(90 | 19);",
    "options": [
      "94",
      "91",
      "109",
      "89"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1011010 and 10011 yields decimal 91."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 138; int y = 123; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "168",
      "123",
      "138",
      "108"
    ],
    "answer": 0,
    "explanation": "Condition (138 > 123) evaluates to true. Thus z is assigned to 138 + 30 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(62 & 27);",
    "options": [
      "89",
      "24",
      "26",
      "29"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 111110 and 11011 yields decimal 26."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 ^ 33);",
    "options": [
      "46",
      "42",
      "44",
      "47"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1101 and 100001 yields decimal 44."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4894 % 20);?",
    "options": [
      "244",
      "17",
      "14",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4894 / 20 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1962 % 21);?",
    "options": [
      "93",
      "12",
      "0",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1962 / 21 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 167; int y = 112; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "112",
      "154",
      "167",
      "180"
    ],
    "answer": 3,
    "explanation": "Condition (167 > 112) evaluates to true. Thus z is assigned to 167 + 13 which equals 180."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(190 | 77);",
    "options": [
      "255",
      "267",
      "258",
      "253"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10111110 and 1001101 yields decimal 255."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 121; int y = 43; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "121",
      "43",
      "131",
      "111"
    ],
    "answer": 2,
    "explanation": "Condition (121 > 43) evaluates to true. Thus z is assigned to 121 + 10 which equals 131."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(76 | 26);",
    "options": [
      "92",
      "97",
      "94",
      "102"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1001100 and 11010 yields decimal 94."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(168 & 96);",
    "options": [
      "264",
      "32",
      "30",
      "35"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10101000 and 1100000 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 80; int y = 89; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "73",
      "89",
      "105",
      "80"
    ],
    "answer": 0,
    "explanation": "Condition (80 > 89) evaluates to false. Thus z is assigned to 89 - 16 which equals 73."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(780 % 38);?",
    "options": [
      "0",
      "20",
      "23",
      "27"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 780 / 38 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 144; int y = 17; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "17",
      "144",
      "121",
      "167"
    ],
    "answer": 3,
    "explanation": "Condition (144 > 17) evaluates to true. Thus z is assigned to 144 + 23 which equals 167."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(117 ^ 41);",
    "options": [
      "158",
      "90",
      "95",
      "92"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1110101 and 101001 yields decimal 92."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(207 | 24);",
    "options": [
      "223",
      "231",
      "226",
      "221"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11001111 and 11000 yields decimal 223."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1407 % 59);?",
    "options": [
      "23",
      "0",
      "53",
      "50"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1407 / 59 leaves remainder 50."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3187 % 58);?",
    "options": [
      "54",
      "58",
      "0",
      "55"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3187 / 58 leaves remainder 55."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 139; int y = 40; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "149",
      "40",
      "139",
      "129"
    ],
    "answer": 0,
    "explanation": "Condition (139 > 40) evaluates to true. Thus z is assigned to 139 + 10 which equals 149."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(154 & 46);",
    "options": [
      "8",
      "10",
      "13",
      "200"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10011010 and 101110 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(208 | 60);",
    "options": [
      "252",
      "268",
      "255",
      "250"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11010000 and 111100 yields decimal 252."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(96 ^ 18);",
    "options": [
      "112",
      "114",
      "138",
      "117"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1100000 and 10010 yields decimal 114."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 62; int y = 167; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "134",
      "200",
      "167",
      "62"
    ],
    "answer": 0,
    "explanation": "Condition (62 > 167) evaluates to false. Thus z is assigned to 167 - 33 which equals 134."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 70; int y = 136; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "146",
      "126",
      "70",
      "136"
    ],
    "answer": 1,
    "explanation": "Condition (70 > 136) evaluates to false. Thus z is assigned to 136 - 10 which equals 126."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 68; int y = 106; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "125",
      "87",
      "68",
      "106"
    ],
    "answer": 1,
    "explanation": "Condition (68 > 106) evaluates to false. Thus z is assigned to 106 - 19 which equals 87."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 | 104);",
    "options": [
      "106",
      "109",
      "104",
      "114"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1010 and 1101000 yields decimal 106."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2250 % 59);?",
    "options": [
      "0",
      "11",
      "8",
      "38"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2250 / 59 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4170 % 41);?",
    "options": [
      "32",
      "101",
      "0",
      "29"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4170 / 41 leaves remainder 29."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(206 ^ 39);",
    "options": [
      "231",
      "233",
      "245",
      "236"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 11001110 and 100111 yields decimal 233."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 34; int y = 38; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "34",
      "43",
      "33",
      "38"
    ],
    "answer": 2,
    "explanation": "Condition (34 > 38) evaluates to false. Thus z is assigned to 38 - 5 which equals 33."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 163; int y = 58; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "193",
      "133",
      "58",
      "163"
    ],
    "answer": 0,
    "explanation": "Condition (163 > 58) evaluates to true. Thus z is assigned to 163 + 30 which equals 193."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(209 & 39);",
    "options": [
      "248",
      "-1",
      "4",
      "1"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 11010001 and 100111 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 82; int y = 205; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "82",
      "184",
      "205",
      "226"
    ],
    "answer": 1,
    "explanation": "Condition (82 > 205) evaluates to false. Thus z is assigned to 205 - 21 which equals 184."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(134 ^ 26);",
    "options": [
      "154",
      "160",
      "159",
      "156"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10000110 and 11010 yields decimal 156."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(162 ^ 92);",
    "options": [
      "278",
      "254",
      "252",
      "257"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10100010 and 1011100 yields decimal 254."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(562 % 30);?",
    "options": [
      "18",
      "22",
      "0",
      "25"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 562 / 30 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 203; int y = 39; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "172",
      "234",
      "39",
      "203"
    ],
    "answer": 1,
    "explanation": "Condition (203 > 39) evaluates to true. Thus z is assigned to 203 + 31 which equals 234."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 136; int y = 98; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "145",
      "98",
      "136",
      "127"
    ],
    "answer": 0,
    "explanation": "Condition (136 > 98) evaluates to true. Thus z is assigned to 136 + 9 which equals 145."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(73 ^ 9);",
    "options": [
      "82",
      "62",
      "64",
      "67"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1001001 and 1001 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 56; int y = 132; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "132",
      "104",
      "160",
      "56"
    ],
    "answer": 1,
    "explanation": "Condition (56 > 132) evaluates to false. Thus z is assigned to 132 - 28 which equals 104."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 81; int y = 63; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "111",
      "81",
      "63",
      "51"
    ],
    "answer": 0,
    "explanation": "Condition (81 > 63) evaluates to true. Thus z is assigned to 81 + 30 which equals 111."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 115; int y = 203; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "203",
      "115",
      "179",
      "227"
    ],
    "answer": 2,
    "explanation": "Condition (115 > 203) evaluates to false. Thus z is assigned to 203 - 24 which equals 179."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 166; int y = 120; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "196",
      "166",
      "136",
      "120"
    ],
    "answer": 0,
    "explanation": "Condition (166 > 120) evaluates to true. Thus z is assigned to 166 + 30 which equals 196."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 125; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "102",
      "148",
      "10",
      "125"
    ],
    "answer": 0,
    "explanation": "Condition (10 > 125) evaluates to false. Thus z is assigned to 125 - 23 which equals 102."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(129 & 42);",
    "options": [
      "171",
      "3",
      "-2",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10000001 and 101010 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(74 & 40);",
    "options": [
      "114",
      "11",
      "8",
      "6"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1001010 and 101000 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1036 % 56);?",
    "options": [
      "31",
      "28",
      "18",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1036 / 56 leaves remainder 28."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(63 ^ 93);",
    "options": [
      "101",
      "156",
      "98",
      "96"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 111111 and 1011101 yields decimal 98."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4684 % 32);?",
    "options": [
      "0",
      "146",
      "12",
      "15"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4684 / 32 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(100 | 82);",
    "options": [
      "118",
      "121",
      "182",
      "116"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1100100 and 1010010 yields decimal 118."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2238 % 52);?",
    "options": [
      "5",
      "0",
      "43",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2238 / 52 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(120 ^ 40);",
    "options": [
      "80",
      "160",
      "83",
      "78"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1111000 and 101000 yields decimal 80."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 122; int y = 102; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "153",
      "102",
      "122",
      "91"
    ],
    "answer": 0,
    "explanation": "Condition (122 > 102) evaluates to true. Thus z is assigned to 122 + 31 which equals 153."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 157; int y = 63; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "190",
      "157",
      "124",
      "63"
    ],
    "answer": 0,
    "explanation": "Condition (157 > 63) evaluates to true. Thus z is assigned to 157 + 33 which equals 190."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(106 | 66);",
    "options": [
      "104",
      "172",
      "106",
      "109"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1101010 and 1000010 yields decimal 106."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3810 % 49);?",
    "options": [
      "40",
      "77",
      "37",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3810 / 49 leaves remainder 37."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1545 % 41);?",
    "options": [
      "0",
      "28",
      "37",
      "31"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1545 / 41 leaves remainder 28."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(140 & 5);",
    "options": [
      "145",
      "4",
      "2",
      "7"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10001100 and 101 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4461 % 25);?",
    "options": [
      "14",
      "0",
      "178",
      "11"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4461 / 25 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3778 % 22);?",
    "options": [
      "19",
      "16",
      "0",
      "171"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3778 / 22 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3941 % 22);?",
    "options": [
      "179",
      "3",
      "0",
      "6"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3941 / 22 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(199 & 67);",
    "options": [
      "70",
      "65",
      "266",
      "67"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 11000111 and 1000011 yields decimal 67."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 53; int y = 100; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "100",
      "69",
      "53",
      "131"
    ],
    "answer": 1,
    "explanation": "Condition (53 > 100) evaluates to false. Thus z is assigned to 100 - 31 which equals 69."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2799 % 37);?",
    "options": [
      "0",
      "24",
      "27",
      "75"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2799 / 37 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(152 | 38);",
    "options": [
      "193",
      "188",
      "214",
      "190"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10011000 and 100110 yields decimal 190."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 42; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "74",
      "11",
      "42",
      "10"
    ],
    "answer": 3,
    "explanation": "Condition (11 > 42) evaluates to false. Thus z is assigned to 42 - 32 which equals 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 195; int y = 61; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "168",
      "195",
      "222",
      "61"
    ],
    "answer": 2,
    "explanation": "Condition (195 > 61) evaluates to true. Thus z is assigned to 195 + 27 which equals 222."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(459 % 22);?",
    "options": [
      "20",
      "22",
      "0",
      "19"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 459 / 22 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3067 % 13);?",
    "options": [
      "0",
      "12",
      "235",
      "15"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3067 / 13 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 34; int y = 51; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "34",
      "51",
      "67",
      "35"
    ],
    "answer": 3,
    "explanation": "Condition (34 > 51) evaluates to false. Thus z is assigned to 51 - 16 which equals 35."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1474 % 11);?",
    "options": [
      "3",
      "0",
      "7",
      "134"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1474 / 11 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2421 % 57);?",
    "options": [
      "27",
      "0",
      "30",
      "42"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2421 / 57 leaves remainder 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 205; int y = 174; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "175",
      "205",
      "174",
      "235"
    ],
    "answer": 3,
    "explanation": "Condition (205 > 174) evaluates to true. Thus z is assigned to 205 + 30 which equals 235."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2628 % 36);?",
    "options": [
      "0",
      "7",
      "73",
      "3"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2628 / 36 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(148 & 85);",
    "options": [
      "18",
      "233",
      "23",
      "20"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10010100 and 1010101 yields decimal 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(23 | 71);",
    "options": [
      "90",
      "87",
      "85",
      "94"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10111 and 1000111 yields decimal 87."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(186 | 86);",
    "options": [
      "272",
      "254",
      "252",
      "257"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10111010 and 1010110 yields decimal 254."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(145 ^ 39);",
    "options": [
      "184",
      "180",
      "185",
      "182"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10010001 and 100111 yields decimal 182."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2084 % 24);?",
    "options": [
      "20",
      "86",
      "23",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2084 / 24 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3842 % 45);?",
    "options": [
      "85",
      "0",
      "20",
      "17"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3842 / 45 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(98 | 10);",
    "options": [
      "109",
      "108",
      "104",
      "106"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1100010 and 1010 yields decimal 106."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1870 % 25);?",
    "options": [
      "20",
      "23",
      "0",
      "74"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1870 / 25 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4917 % 48);?",
    "options": [
      "24",
      "21",
      "102",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4917 / 48 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 157; int y = 75; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "177",
      "137",
      "75",
      "157"
    ],
    "answer": 0,
    "explanation": "Condition (157 > 75) evaluates to true. Thus z is assigned to 157 + 20 which equals 177."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(117 | 47);",
    "options": [
      "164",
      "125",
      "127",
      "130"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1110101 and 101111 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(137 ^ 24);",
    "options": [
      "161",
      "145",
      "143",
      "148"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10001001 and 11000 yields decimal 145."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 196; int y = 159; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "222",
      "159",
      "170",
      "196"
    ],
    "answer": 0,
    "explanation": "Condition (196 > 159) evaluates to true. Thus z is assigned to 196 + 26 which equals 222."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(114 | 83);",
    "options": [
      "115",
      "118",
      "197",
      "113"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1110010 and 1010011 yields decimal 115."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 95; int y = 19; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "95",
      "19",
      "103",
      "87"
    ],
    "answer": 2,
    "explanation": "Condition (95 > 19) evaluates to true. Thus z is assigned to 95 + 8 which equals 103."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 196; int y = 22; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "22",
      "196",
      "178",
      "214"
    ],
    "answer": 3,
    "explanation": "Condition (196 > 22) evaluates to true. Thus z is assigned to 196 + 18 which equals 214."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(625 % 33);?",
    "options": [
      "0",
      "18",
      "31",
      "34"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 625 / 33 leaves remainder 31."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 177; int y = 132; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "164",
      "190",
      "177",
      "132"
    ],
    "answer": 1,
    "explanation": "Condition (177 > 132) evaluates to true. Thus z is assigned to 177 + 13 which equals 190."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1030 % 54);?",
    "options": [
      "19",
      "4",
      "7",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1030 / 54 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 78; int y = 127; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "78",
      "104",
      "127",
      "150"
    ],
    "answer": 1,
    "explanation": "Condition (78 > 127) evaluates to false. Thus z is assigned to 127 - 23 which equals 104."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 117; int y = 123; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "123",
      "146",
      "117",
      "100"
    ],
    "answer": 3,
    "explanation": "Condition (117 > 123) evaluates to false. Thus z is assigned to 123 - 23 which equals 100."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(914 % 21);?",
    "options": [
      "43",
      "11",
      "0",
      "14"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 914 / 21 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 82; int y = 149; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "134",
      "149",
      "82",
      "164"
    ],
    "answer": 0,
    "explanation": "Condition (82 > 149) evaluates to false. Thus z is assigned to 149 - 15 which equals 134."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(155 | 13);",
    "options": [
      "168",
      "157",
      "159",
      "162"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10011011 and 1101 yields decimal 159."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 35; int y = 198; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "198",
      "35",
      "169",
      "227"
    ],
    "answer": 2,
    "explanation": "Condition (35 > 198) evaluates to false. Thus z is assigned to 198 - 29 which equals 169."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 205; int y = 191; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "232",
      "191",
      "178",
      "205"
    ],
    "answer": 0,
    "explanation": "Condition (205 > 191) evaluates to true. Thus z is assigned to 205 + 27 which equals 232."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 184; int y = 23; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "23",
      "205",
      "184",
      "163"
    ],
    "answer": 1,
    "explanation": "Condition (184 > 23) evaluates to true. Thus z is assigned to 184 + 21 which equals 205."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(27 & 13);",
    "options": [
      "40",
      "9",
      "12",
      "7"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 11011 and 1101 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2792 % 51);?",
    "options": [
      "38",
      "0",
      "54",
      "41"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2792 / 51 leaves remainder 38."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 185; int y = 167; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "167",
      "213",
      "157",
      "185"
    ],
    "answer": 1,
    "explanation": "Condition (185 > 167) evaluates to true. Thus z is assigned to 185 + 28 which equals 213."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 55; int y = 160; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "127",
      "160",
      "55",
      "193"
    ],
    "answer": 0,
    "explanation": "Condition (55 > 160) evaluates to false. Thus z is assigned to 160 - 33 which equals 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4338 % 48);?",
    "options": [
      "18",
      "90",
      "0",
      "21"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4338 / 48 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(141 ^ 102);",
    "options": [
      "243",
      "233",
      "238",
      "235"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10001101 and 1100110 yields decimal 235."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(74 ^ 45);",
    "options": [
      "119",
      "106",
      "101",
      "103"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1001010 and 101101 yields decimal 103."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 155; int y = 27; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "184",
      "155",
      "126",
      "27"
    ],
    "answer": 0,
    "explanation": "Condition (155 > 27) evaluates to true. Thus z is assigned to 155 + 29 which equals 184."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3151 % 10);?",
    "options": [
      "1",
      "315",
      "4",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3151 / 10 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 115; int y = 96; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "115",
      "110",
      "120",
      "96"
    ],
    "answer": 2,
    "explanation": "Condition (115 > 96) evaluates to true. Thus z is assigned to 115 + 5 which equals 120."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4380 % 49);?",
    "options": [
      "22",
      "0",
      "19",
      "89"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4380 / 49 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(129 ^ 46);",
    "options": [
      "173",
      "178",
      "199",
      "175"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10000001 and 101110 yields decimal 175."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2984 % 28);?",
    "options": [
      "106",
      "19",
      "0",
      "16"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2984 / 28 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 83; int y = 102; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "102",
      "83",
      "124",
      "80"
    ],
    "answer": 3,
    "explanation": "Condition (83 > 102) evaluates to false. Thus z is assigned to 102 - 22 which equals 80."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(94 ^ 25);",
    "options": [
      "74",
      "119",
      "71",
      "69"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1011110 and 11001 yields decimal 71."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 123; int y = 128; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "150",
      "106",
      "123",
      "128"
    ],
    "answer": 1,
    "explanation": "Condition (123 > 128) evaluates to false. Thus z is assigned to 128 - 22 which equals 106."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(166 & 71);",
    "options": [
      "4",
      "237",
      "9",
      "6"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10100110 and 1000111 yields decimal 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3109 % 29);?",
    "options": [
      "9",
      "0",
      "107",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3109 / 29 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 185; int y = 175; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "157",
      "213",
      "175",
      "185"
    ],
    "answer": 1,
    "explanation": "Condition (185 > 175) evaluates to true. Thus z is assigned to 185 + 28 which equals 213."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1077 % 14);?",
    "options": [
      "76",
      "0",
      "16",
      "13"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1077 / 14 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(85 | 20);",
    "options": [
      "105",
      "83",
      "88",
      "85"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1010101 and 10100 yields decimal 85."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(138 ^ 65);",
    "options": [
      "201",
      "203",
      "206",
      "227"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10001010 and 1000001 yields decimal 203."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3564 % 37);?",
    "options": [
      "15",
      "96",
      "12",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3564 / 37 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 102; int y = 25; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "73",
      "25",
      "102",
      "131"
    ],
    "answer": 3,
    "explanation": "Condition (102 > 25) evaluates to true. Thus z is assigned to 102 + 29 which equals 131."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1354 % 30);?",
    "options": [
      "45",
      "0",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1354 / 30 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2944 % 23);?",
    "options": [
      "7",
      "3",
      "128",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2944 / 23 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2623 % 28);?",
    "options": [
      "19",
      "22",
      "93",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2623 / 28 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5102 % 33);?",
    "options": [
      "23",
      "154",
      "0",
      "20"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 5102 / 33 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 89; int y = 111; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "135",
      "111",
      "89",
      "87"
    ],
    "answer": 3,
    "explanation": "Condition (89 > 111) evaluates to false. Thus z is assigned to 111 - 24 which equals 87."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 99; int y = 169; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "169",
      "190",
      "99",
      "148"
    ],
    "answer": 3,
    "explanation": "Condition (99 > 169) evaluates to false. Thus z is assigned to 169 - 21 which equals 148."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(300 % 10);?",
    "options": [
      "7",
      "30",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 300 / 10 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(201 ^ 36);",
    "options": [
      "237",
      "240",
      "261",
      "235"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 11001001 and 100100 yields decimal 237."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 148; int y = 18; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "156",
      "18",
      "140",
      "148"
    ],
    "answer": 0,
    "explanation": "Condition (148 > 18) evaluates to true. Thus z is assigned to 148 + 8 which equals 156."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(21 | 47);",
    "options": [
      "61",
      "63",
      "68",
      "66"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10101 and 101111 yields decimal 63."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(55 ^ 15);",
    "options": [
      "54",
      "56",
      "70",
      "59"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 110111 and 1111 yields decimal 56."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(69 ^ 14);",
    "options": [
      "83",
      "78",
      "75",
      "73"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1000101 and 1110 yields decimal 75."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(84 | 21);",
    "options": [
      "105",
      "85",
      "83",
      "88"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1010100 and 10101 yields decimal 85."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(100 ^ 89);",
    "options": [
      "64",
      "61",
      "189",
      "59"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1100100 and 1011001 yields decimal 61."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2447 % 17);?",
    "options": [
      "143",
      "16",
      "0",
      "19"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2447 / 17 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(362 % 56);?",
    "options": [
      "29",
      "6",
      "26",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 362 / 56 leaves remainder 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1419 % 11);?",
    "options": [
      "7",
      "129",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1419 / 11 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(606 % 20);?",
    "options": [
      "30",
      "0",
      "9",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 606 / 20 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 72; int y = 48; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "82",
      "62",
      "72",
      "48"
    ],
    "answer": 0,
    "explanation": "Condition (72 > 48) evaluates to true. Thus z is assigned to 72 + 10 which equals 82."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(182 & 94);",
    "options": [
      "25",
      "22",
      "20",
      "276"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10110110 and 1011110 yields decimal 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 128; int y = 145; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "128",
      "161",
      "129",
      "145"
    ],
    "answer": 2,
    "explanation": "Condition (128 > 145) evaluates to false. Thus z is assigned to 145 - 16 which equals 129."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2131 % 39);?",
    "options": [
      "54",
      "28",
      "25",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2131 / 39 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 38; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "13",
      "48",
      "38",
      "28"
    ],
    "answer": 3,
    "explanation": "Condition (13 > 38) evaluates to false. Thus z is assigned to 38 - 10 which equals 28."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(175 ^ 50);",
    "options": [
      "160",
      "155",
      "157",
      "225"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10101111 and 110010 yields decimal 157."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 181; int y = 98; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "98",
      "172",
      "181",
      "190"
    ],
    "answer": 3,
    "explanation": "Condition (181 > 98) evaluates to true. Thus z is assigned to 181 + 9 which equals 190."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(103 ^ 65);",
    "options": [
      "36",
      "41",
      "38",
      "168"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1100111 and 1000001 yields decimal 38."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(207 ^ 15);",
    "options": [
      "190",
      "222",
      "192",
      "195"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 11001111 and 1111 yields decimal 192."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(54 & 62);",
    "options": [
      "54",
      "52",
      "116",
      "57"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 110110 and 111110 yields decimal 54."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1187 % 11);?",
    "options": [
      "13",
      "107",
      "0",
      "10"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1187 / 11 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3434 % 12);?",
    "options": [
      "286",
      "0",
      "5",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3434 / 12 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 176; int y = 51; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "176",
      "182",
      "170",
      "51"
    ],
    "answer": 1,
    "explanation": "Condition (176 > 51) evaluates to true. Thus z is assigned to 176 + 6 which equals 182."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 169; int y = 34; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "201",
      "169",
      "34",
      "137"
    ],
    "answer": 0,
    "explanation": "Condition (169 > 34) evaluates to true. Thus z is assigned to 169 + 32 which equals 201."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(206 & 27);",
    "options": [
      "10",
      "13",
      "233",
      "8"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11001110 and 11011 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 131; int y = 163; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "155",
      "131",
      "163",
      "171"
    ],
    "answer": 0,
    "explanation": "Condition (131 > 163) evaluates to false. Thus z is assigned to 163 - 8 which equals 155."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2374 % 39);?",
    "options": [
      "34",
      "60",
      "0",
      "37"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2374 / 39 leaves remainder 34."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(69 ^ 55);",
    "options": [
      "117",
      "112",
      "124",
      "114"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1000101 and 110111 yields decimal 114."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(63 & 62);",
    "options": [
      "65",
      "60",
      "125",
      "62"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 111111 and 111110 yields decimal 62."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(154 ^ 13);",
    "options": [
      "154",
      "151",
      "167",
      "149"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10011010 and 1101 yields decimal 151."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(205 & 65);",
    "options": [
      "63",
      "68",
      "270",
      "65"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 11001101 and 1000001 yields decimal 65."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(64 & 82);",
    "options": [
      "62",
      "64",
      "146",
      "67"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1000000 and 1010010 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5179 % 37);?",
    "options": [
      "36",
      "0",
      "139",
      "39"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 5179 / 37 leaves remainder 36."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 120; int y = 85; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "120",
      "108",
      "132",
      "85"
    ],
    "answer": 2,
    "explanation": "Condition (120 > 85) evaluates to true. Thus z is assigned to 120 + 12 which equals 132."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3009 % 39);?",
    "options": [
      "9",
      "77",
      "0",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3009 / 39 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3463 % 58);?",
    "options": [
      "0",
      "59",
      "41",
      "44"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3463 / 58 leaves remainder 41."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 46; int y = 176; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "183",
      "176",
      "169",
      "46"
    ],
    "answer": 2,
    "explanation": "Condition (46 > 176) evaluates to false. Thus z is assigned to 176 - 7 which equals 169."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4450 % 58);?",
    "options": [
      "76",
      "0",
      "42",
      "45"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4450 / 58 leaves remainder 42."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 195; int y = 103; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "195",
      "228",
      "103",
      "162"
    ],
    "answer": 1,
    "explanation": "Condition (195 > 103) evaluates to true. Thus z is assigned to 195 + 33 which equals 228."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 195; int y = 113; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "221",
      "169",
      "113",
      "195"
    ],
    "answer": 0,
    "explanation": "Condition (195 > 113) evaluates to true. Thus z is assigned to 195 + 26 which equals 221."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(162 | 13);",
    "options": [
      "178",
      "199",
      "175",
      "173"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10100010 and 1101 yields decimal 175."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1352 % 59);?",
    "options": [
      "54",
      "57",
      "0",
      "22"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1352 / 59 leaves remainder 54."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1527 % 31);?",
    "options": [
      "0",
      "49",
      "11",
      "8"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1527 / 31 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3135 % 25);?",
    "options": [
      "0",
      "10",
      "125",
      "13"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3135 / 25 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 105; int y = 127; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "140",
      "105",
      "127",
      "114"
    ],
    "answer": 3,
    "explanation": "Condition (105 > 127) evaluates to false. Thus z is assigned to 127 - 13 which equals 114."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(54 & 27);",
    "options": [
      "18",
      "81",
      "21",
      "16"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 110110 and 11011 yields decimal 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 205; int y = 53; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "205",
      "185",
      "225",
      "53"
    ],
    "answer": 2,
    "explanation": "Condition (205 > 53) evaluates to true. Thus z is assigned to 205 + 20 which equals 225."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1508 % 13);?",
    "options": [
      "7",
      "116",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1508 / 13 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(65 ^ 71);",
    "options": [
      "136",
      "4",
      "9",
      "6"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1000001 and 1000111 yields decimal 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 114; int y = 203; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "176",
      "114",
      "203",
      "230"
    ],
    "answer": 0,
    "explanation": "Condition (114 > 203) evaluates to false. Thus z is assigned to 203 - 27 which equals 176."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(160 | 43);",
    "options": [
      "203",
      "171",
      "169",
      "174"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10100000 and 101011 yields decimal 171."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 71; int y = 108; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "129",
      "71",
      "87",
      "108"
    ],
    "answer": 2,
    "explanation": "Condition (71 > 108) evaluates to false. Thus z is assigned to 108 - 21 which equals 87."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(703 % 10);?",
    "options": [
      "0",
      "3",
      "70",
      "6"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 703 / 10 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2763 % 39);?",
    "options": [
      "33",
      "36",
      "0",
      "70"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2763 / 39 leaves remainder 33."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(185 & 46);",
    "options": [
      "231",
      "40",
      "38",
      "43"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10111001 and 101110 yields decimal 40."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1257 % 18);?",
    "options": [
      "69",
      "15",
      "18",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1257 / 18 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(86 & 42);",
    "options": [
      "128",
      "0",
      "5",
      "2"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1010110 and 101010 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3466 % 20);?",
    "options": [
      "6",
      "0",
      "173",
      "9"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3466 / 20 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 35; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "43",
      "20",
      "35",
      "27"
    ],
    "answer": 3,
    "explanation": "Condition (20 > 35) evaluates to false. Thus z is assigned to 35 - 8 which equals 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 134; int y = 103; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "155",
      "134",
      "113",
      "103"
    ],
    "answer": 0,
    "explanation": "Condition (134 > 103) evaluates to true. Thus z is assigned to 134 + 21 which equals 155."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3230 % 16);?",
    "options": [
      "0",
      "201",
      "14",
      "17"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3230 / 16 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 204; int y = 114; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "204",
      "114",
      "193",
      "215"
    ],
    "answer": 3,
    "explanation": "Condition (204 > 114) evaluates to true. Thus z is assigned to 204 + 11 which equals 215."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4651 % 59);?",
    "options": [
      "0",
      "49",
      "78",
      "52"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4651 / 59 leaves remainder 49."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 156; int y = 158; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "189",
      "156",
      "127",
      "158"
    ],
    "answer": 2,
    "explanation": "Condition (156 > 158) evaluates to false. Thus z is assigned to 158 - 31 which equals 127."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 50; int y = 141; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "168",
      "114",
      "141",
      "50"
    ],
    "answer": 1,
    "explanation": "Condition (50 > 141) evaluates to false. Thus z is assigned to 141 - 27 which equals 114."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 94; int y = 200; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "234",
      "200",
      "94",
      "166"
    ],
    "answer": 3,
    "explanation": "Condition (94 > 200) evaluates to false. Thus z is assigned to 200 - 34 which equals 166."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 202; int y = 114; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "179",
      "225",
      "114",
      "202"
    ],
    "answer": 1,
    "explanation": "Condition (202 > 114) evaluates to true. Thus z is assigned to 202 + 23 which equals 225."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 207; int y = 80; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "236",
      "207",
      "178",
      "80"
    ],
    "answer": 0,
    "explanation": "Condition (207 > 80) evaluates to true. Thus z is assigned to 207 + 29 which equals 236."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2438 % 26);?",
    "options": [
      "23",
      "20",
      "0",
      "93"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2438 / 26 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 42; int y = 127; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "106",
      "148",
      "127",
      "42"
    ],
    "answer": 0,
    "explanation": "Condition (42 > 127) evaluates to false. Thus z is assigned to 127 - 21 which equals 106."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5102 % 24);?",
    "options": [
      "212",
      "0",
      "14",
      "17"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 5102 / 24 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(108 ^ 7);",
    "options": [
      "115",
      "110",
      "105",
      "107"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1101100 and 111 yields decimal 107."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 134; int y = 91; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "91",
      "104",
      "134",
      "164"
    ],
    "answer": 3,
    "explanation": "Condition (134 > 91) evaluates to true. Thus z is assigned to 134 + 30 which equals 164."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(117 ^ 13);",
    "options": [
      "120",
      "130",
      "123",
      "118"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1110101 and 1101 yields decimal 120."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(112 ^ 80);",
    "options": [
      "30",
      "35",
      "32",
      "192"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1110000 and 1010000 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4295 % 13);?",
    "options": [
      "330",
      "8",
      "0",
      "5"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4295 / 13 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3439 % 32);?",
    "options": [
      "0",
      "15",
      "18",
      "107"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3439 / 32 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2889 % 19);?",
    "options": [
      "0",
      "1",
      "152",
      "4"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2889 / 19 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 106; int y = 107; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "135",
      "79",
      "106",
      "107"
    ],
    "answer": 1,
    "explanation": "Condition (106 > 107) evaluates to false. Thus z is assigned to 107 - 28 which equals 79."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4412 % 19);?",
    "options": [
      "7",
      "4",
      "232",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4412 / 19 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 202; int y = 206; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "188",
      "206",
      "202",
      "224"
    ],
    "answer": 0,
    "explanation": "Condition (202 > 206) evaluates to false. Thus z is assigned to 206 - 18 which equals 188."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(124 & 16);",
    "options": [
      "14",
      "140",
      "19",
      "16"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1111100 and 10000 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(158 & 10);",
    "options": [
      "168",
      "13",
      "8",
      "10"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10011110 and 1010 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1341 % 52);?",
    "options": [
      "25",
      "41",
      "44",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1341 / 52 leaves remainder 41."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(31 | 70);",
    "options": [
      "101",
      "98",
      "95",
      "93"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 11111 and 1000110 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1991 % 51);?",
    "options": [
      "39",
      "0",
      "5",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1991 / 51 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3962 % 50);?",
    "options": [
      "15",
      "79",
      "12",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3962 / 50 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(418 % 25);?",
    "options": [
      "16",
      "18",
      "21",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 418 / 25 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(159 & 14);",
    "options": [
      "12",
      "14",
      "173",
      "17"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10011111 and 1110 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(63 & 39);",
    "options": [
      "37",
      "39",
      "102",
      "42"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 111111 and 100111 yields decimal 39."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(132 | 71);",
    "options": [
      "203",
      "197",
      "202",
      "199"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10000100 and 1000111 yields decimal 199."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 53; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "53",
      "26",
      "12",
      "80"
    ],
    "answer": 1,
    "explanation": "Condition (12 > 53) evaluates to false. Thus z is assigned to 53 - 27 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1933 % 33);?",
    "options": [
      "58",
      "0",
      "22",
      "19"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1933 / 33 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3005 % 16);?",
    "options": [
      "16",
      "187",
      "13",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3005 / 16 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2688 % 43);?",
    "options": [
      "62",
      "25",
      "0",
      "22"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2688 / 43 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1123 % 20);?",
    "options": [
      "0",
      "3",
      "56",
      "6"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1123 / 20 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3532 % 34);?",
    "options": [
      "0",
      "33",
      "30",
      "103"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3532 / 34 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 80; int y = 196; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "215",
      "196",
      "80",
      "177"
    ],
    "answer": 3,
    "explanation": "Condition (80 > 196) evaluates to false. Thus z is assigned to 196 - 19 which equals 177."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2729 % 54);?",
    "options": [
      "50",
      "0",
      "32",
      "29"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2729 / 54 leaves remainder 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 60; int y = 90; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "60",
      "56",
      "90",
      "124"
    ],
    "answer": 1,
    "explanation": "Condition (60 > 90) evaluates to false. Thus z is assigned to 90 - 34 which equals 56."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 55; int y = 11; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "11",
      "36",
      "74",
      "55"
    ],
    "answer": 2,
    "explanation": "Condition (55 > 11) evaluates to true. Thus z is assigned to 55 + 19 which equals 74."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2445 % 43);?",
    "options": [
      "0",
      "40",
      "37",
      "56"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2445 / 43 leaves remainder 37."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 82; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "51",
      "82",
      "113",
      "18"
    ],
    "answer": 0,
    "explanation": "Condition (18 > 82) evaluates to false. Thus z is assigned to 82 - 31 which equals 51."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3453 % 13);?",
    "options": [
      "8",
      "0",
      "11",
      "265"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3453 / 13 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(34 ^ 22);",
    "options": [
      "56",
      "52",
      "55",
      "50"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 100010 and 10110 yields decimal 52."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 147; int y = 112; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "147",
      "130",
      "164",
      "112"
    ],
    "answer": 2,
    "explanation": "Condition (147 > 112) evaluates to true. Thus z is assigned to 147 + 17 which equals 164."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1710 % 41);?",
    "options": [
      "29",
      "0",
      "32",
      "41"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1710 / 41 leaves remainder 29."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4821 % 45);?",
    "options": [
      "107",
      "6",
      "0",
      "9"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4821 / 45 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(159 ^ 56);",
    "options": [
      "167",
      "215",
      "170",
      "165"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10011111 and 111000 yields decimal 167."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 176; int y = 32; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "167",
      "176",
      "32",
      "185"
    ],
    "answer": 3,
    "explanation": "Condition (176 > 32) evaluates to true. Thus z is assigned to 176 + 9 which equals 185."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1127 % 52);?",
    "options": [
      "38",
      "35",
      "21",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1127 / 52 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4004 % 17);?",
    "options": [
      "12",
      "0",
      "235",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4004 / 17 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(750 % 23);?",
    "options": [
      "32",
      "17",
      "14",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 750 / 23 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(654 % 52);?",
    "options": [
      "33",
      "0",
      "30",
      "12"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 654 / 52 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 28; int y = 44; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "50",
      "44",
      "28",
      "38"
    ],
    "answer": 3,
    "explanation": "Condition (28 > 44) evaluates to false. Thus z is assigned to 44 - 6 which equals 38."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(108 ^ 17);",
    "options": [
      "125",
      "149",
      "123",
      "128"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1101100 and 10001 yields decimal 125."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 88; int y = 181; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "168",
      "88",
      "181",
      "194"
    ],
    "answer": 0,
    "explanation": "Condition (88 > 181) evaluates to false. Thus z is assigned to 181 - 13 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4278 % 36);?",
    "options": [
      "30",
      "118",
      "0",
      "33"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4278 / 36 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 | 53);",
    "options": [
      "64",
      "66",
      "61",
      "59"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1101 and 110101 yields decimal 61."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(121 ^ 56);",
    "options": [
      "63",
      "177",
      "68",
      "65"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1111001 and 111000 yields decimal 65."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 93; int y = 63; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "93",
      "71",
      "63",
      "115"
    ],
    "answer": 3,
    "explanation": "Condition (93 > 63) evaluates to true. Thus z is assigned to 93 + 22 which equals 115."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2536 % 33);?",
    "options": [
      "76",
      "0",
      "31",
      "28"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2536 / 33 leaves remainder 28."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(107 & 40);",
    "options": [
      "147",
      "38",
      "43",
      "40"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1101011 and 101000 yields decimal 40."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(108 & 58);",
    "options": [
      "40",
      "43",
      "166",
      "38"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1101100 and 111010 yields decimal 40."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 141; int y = 152; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "141",
      "171",
      "152",
      "133"
    ],
    "answer": 3,
    "explanation": "Condition (141 > 152) evaluates to false. Thus z is assigned to 152 - 19 which equals 133."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 47; int y = 145; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "118",
      "172",
      "47",
      "145"
    ],
    "answer": 0,
    "explanation": "Condition (47 > 145) evaluates to false. Thus z is assigned to 145 - 27 which equals 118."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4924 % 13);?",
    "options": [
      "0",
      "378",
      "10",
      "13"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4924 / 13 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 174; int y = 121; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "161",
      "187",
      "121",
      "174"
    ],
    "answer": 1,
    "explanation": "Condition (174 > 121) evaluates to true. Thus z is assigned to 174 + 13 which equals 187."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(74 ^ 46);",
    "options": [
      "98",
      "103",
      "100",
      "120"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1001010 and 101110 yields decimal 100."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4329 % 18);?",
    "options": [
      "12",
      "9",
      "240",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4329 / 18 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(59 & 95);",
    "options": [
      "154",
      "27",
      "25",
      "30"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 111011 and 1011111 yields decimal 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 57; int y = 127; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "94",
      "127",
      "57",
      "160"
    ],
    "answer": 0,
    "explanation": "Condition (57 > 127) evaluates to false. Thus z is assigned to 127 - 33 which equals 94."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 44; int y = 192; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "197",
      "44",
      "192",
      "187"
    ],
    "answer": 3,
    "explanation": "Condition (44 > 192) evaluates to false. Thus z is assigned to 192 - 5 which equals 187."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1160 % 38);?",
    "options": [
      "23",
      "20",
      "0",
      "30"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1160 / 38 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4262 % 14);?",
    "options": [
      "0",
      "6",
      "9",
      "304"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4262 / 14 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(380 % 51);?",
    "options": [
      "0",
      "26",
      "23",
      "7"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 380 / 51 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(24 | 44);",
    "options": [
      "60",
      "68",
      "63",
      "58"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11000 and 101100 yields decimal 60."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 133; int y = 55; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "55",
      "166",
      "133",
      "100"
    ],
    "answer": 1,
    "explanation": "Condition (133 > 55) evaluates to true. Thus z is assigned to 133 + 33 which equals 166."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3401 % 34);?",
    "options": [
      "1",
      "0",
      "4",
      "100"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3401 / 34 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4958 % 31);?",
    "options": [
      "29",
      "159",
      "0",
      "32"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4958 / 31 leaves remainder 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 200; int y = 154; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "222",
      "200",
      "154",
      "178"
    ],
    "answer": 0,
    "explanation": "Condition (200 > 154) evaluates to true. Thus z is assigned to 200 + 22 which equals 222."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1351 % 20);?",
    "options": [
      "11",
      "0",
      "67",
      "14"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1351 / 20 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 120; int y = 204; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "204",
      "192",
      "120",
      "216"
    ],
    "answer": 1,
    "explanation": "Condition (120 > 204) evaluates to false. Thus z is assigned to 204 - 12 which equals 192."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(108 ^ 33);",
    "options": [
      "80",
      "141",
      "77",
      "75"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1101100 and 100001 yields decimal 77."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2181 % 20);?",
    "options": [
      "4",
      "0",
      "109",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2181 / 20 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 122; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "108",
      "12",
      "122",
      "136"
    ],
    "answer": 0,
    "explanation": "Condition (12 > 122) evaluates to false. Thus z is assigned to 122 - 14 which equals 108."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(40 | 39);",
    "options": [
      "47",
      "45",
      "50",
      "79"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 101000 and 100111 yields decimal 47."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(21 | 30);",
    "options": [
      "51",
      "31",
      "29",
      "34"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10101 and 11110 yields decimal 31."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(46 | 97);",
    "options": [
      "109",
      "114",
      "111",
      "143"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 101110 and 1100001 yields decimal 111."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(41 | 14);",
    "options": [
      "45",
      "55",
      "47",
      "50"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 101001 and 1110 yields decimal 47."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(59 ^ 68);",
    "options": [
      "125",
      "130",
      "127",
      "151"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 111011 and 1000100 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1139 % 29);?",
    "options": [
      "39",
      "8",
      "11",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1139 / 29 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 118; int y = 173; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "182",
      "173",
      "164",
      "118"
    ],
    "answer": 2,
    "explanation": "Condition (118 > 173) evaluates to false. Thus z is assigned to 173 - 9 which equals 164."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(137 | 31);",
    "options": [
      "162",
      "168",
      "159",
      "157"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10001001 and 11111 yields decimal 159."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 40; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "48",
      "40",
      "32",
      "21"
    ],
    "answer": 2,
    "explanation": "Condition (21 > 40) evaluates to false. Thus z is assigned to 40 - 8 which equals 32."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(196 & 83);",
    "options": [
      "67",
      "279",
      "64",
      "62"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 11000100 and 1010011 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4582 % 52);?",
    "options": [
      "6",
      "9",
      "88",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4582 / 52 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4925 % 39);?",
    "options": [
      "14",
      "11",
      "0",
      "126"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4925 / 39 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 44; int y = 90; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "90",
      "117",
      "44",
      "63"
    ],
    "answer": 3,
    "explanation": "Condition (44 > 90) evaluates to false. Thus z is assigned to 90 - 27 which equals 63."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4597 % 27);?",
    "options": [
      "170",
      "7",
      "0",
      "10"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4597 / 27 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(207 ^ 60);",
    "options": [
      "243",
      "246",
      "267",
      "241"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 11001111 and 111100 yields decimal 243."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(53 & 35);",
    "options": [
      "88",
      "33",
      "36",
      "31"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 110101 and 100011 yields decimal 33."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 186; int y = 114; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "160",
      "186",
      "212",
      "114"
    ],
    "answer": 2,
    "explanation": "Condition (186 > 114) evaluates to true. Thus z is assigned to 186 + 26 which equals 212."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 107; int y = 158; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "139",
      "177",
      "158",
      "107"
    ],
    "answer": 0,
    "explanation": "Condition (107 > 158) evaluates to false. Thus z is assigned to 158 - 19 which equals 139."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 169; int y = 140; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "169",
      "150",
      "140",
      "188"
    ],
    "answer": 3,
    "explanation": "Condition (169 > 140) evaluates to true. Thus z is assigned to 169 + 19 which equals 188."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1197 % 37);?",
    "options": [
      "13",
      "16",
      "0",
      "32"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1197 / 37 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(41 ^ 22);",
    "options": [
      "87",
      "61",
      "63",
      "66"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 101001 and 10110 yields decimal 63."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(749 % 37);?",
    "options": [
      "20",
      "9",
      "12",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 749 / 37 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 42; int y = 196; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "165",
      "42",
      "196",
      "227"
    ],
    "answer": 0,
    "explanation": "Condition (42 > 196) evaluates to false. Thus z is assigned to 196 - 31 which equals 165."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 167; int y = 72; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "187",
      "147",
      "167",
      "72"
    ],
    "answer": 0,
    "explanation": "Condition (167 > 72) evaluates to true. Thus z is assigned to 167 + 20 which equals 187."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2688 % 22);?",
    "options": [
      "4",
      "122",
      "0",
      "7"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2688 / 22 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 205; int y = 176; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "176",
      "205",
      "197",
      "213"
    ],
    "answer": 3,
    "explanation": "Condition (205 > 176) evaluates to true. Thus z is assigned to 205 + 8 which equals 213."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1918 % 31);?",
    "options": [
      "0",
      "61",
      "30",
      "27"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1918 / 31 leaves remainder 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4043 % 22);?",
    "options": [
      "17",
      "0",
      "20",
      "183"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4043 / 22 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1099 % 42);?",
    "options": [
      "7",
      "26",
      "10",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1099 / 42 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(757 % 18);?",
    "options": [
      "0",
      "42",
      "4",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 757 / 18 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3636 % 24);?",
    "options": [
      "12",
      "151",
      "15",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3636 / 24 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(89 ^ 76);",
    "options": [
      "21",
      "165",
      "24",
      "19"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1011001 and 1001100 yields decimal 21."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 & 89);",
    "options": [
      "9",
      "12",
      "7",
      "104"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1111 and 1011001 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 46; int y = 28; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "28",
      "46",
      "73",
      "19"
    ],
    "answer": 2,
    "explanation": "Condition (46 > 28) evaluates to true. Thus z is assigned to 46 + 27 which equals 73."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 69; int y = 58; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "69",
      "82",
      "58",
      "56"
    ],
    "answer": 1,
    "explanation": "Condition (69 > 58) evaluates to true. Thus z is assigned to 69 + 13 which equals 82."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(854 % 12);?",
    "options": [
      "5",
      "71",
      "2",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 854 / 12 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(89 ^ 85);",
    "options": [
      "12",
      "174",
      "15",
      "10"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1011001 and 1010101 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(123 | 7);",
    "options": [
      "125",
      "130",
      "127",
      "130"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1111011 and 111 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 184; int y = 108; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "184",
      "108",
      "205",
      "163"
    ],
    "answer": 2,
    "explanation": "Condition (184 > 108) evaluates to true. Thus z is assigned to 184 + 21 which equals 205."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 51; int y = 175; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "196",
      "175",
      "154",
      "51"
    ],
    "answer": 2,
    "explanation": "Condition (51 > 175) evaluates to false. Thus z is assigned to 175 - 21 which equals 154."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4628 % 52);?",
    "options": [
      "3",
      "7",
      "89",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4628 / 52 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(194 | 85);",
    "options": [
      "215",
      "218",
      "279",
      "213"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11000010 and 1010101 yields decimal 215."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 132; int y = 202; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "182",
      "222",
      "132",
      "202"
    ],
    "answer": 0,
    "explanation": "Condition (132 > 202) evaluates to false. Thus z is assigned to 202 - 20 which equals 182."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(151 ^ 9);",
    "options": [
      "156",
      "160",
      "161",
      "158"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10010111 and 1001 yields decimal 158."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4768 % 19);?",
    "options": [
      "21",
      "18",
      "0",
      "250"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4768 / 19 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(89 ^ 99);",
    "options": [
      "58",
      "56",
      "61",
      "188"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1011001 and 1100011 yields decimal 58."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 36; int y = 87; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "81",
      "87",
      "36",
      "93"
    ],
    "answer": 0,
    "explanation": "Condition (36 > 87) evaluates to false. Thus z is assigned to 87 - 6 which equals 81."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 79; int y = 149; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "139",
      "79",
      "159",
      "149"
    ],
    "answer": 0,
    "explanation": "Condition (79 > 149) evaluates to false. Thus z is assigned to 149 - 10 which equals 139."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(96 | 70);",
    "options": [
      "105",
      "102",
      "100",
      "166"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1100000 and 1000110 yields decimal 102."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 51; int y = 65; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "36",
      "65",
      "94",
      "51"
    ],
    "answer": 0,
    "explanation": "Condition (51 > 65) evaluates to false. Thus z is assigned to 65 - 29 which equals 36."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 180; int y = 46; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "148",
      "180",
      "46",
      "212"
    ],
    "answer": 3,
    "explanation": "Condition (180 > 46) evaluates to true. Thus z is assigned to 180 + 32 which equals 212."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(167 & 75);",
    "options": [
      "3",
      "1",
      "242",
      "6"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10100111 and 1001011 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(175 & 65);",
    "options": [
      "1",
      "240",
      "4",
      "-1"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10101111 and 1000001 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 97; int y = 110; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "126",
      "110",
      "94",
      "97"
    ],
    "answer": 2,
    "explanation": "Condition (97 > 110) evaluates to false. Thus z is assigned to 110 - 16 which equals 94."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(192 | 17);",
    "options": [
      "209",
      "212",
      "207",
      "233"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11000000 and 10001 yields decimal 209."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1176 % 54);?",
    "options": [
      "45",
      "21",
      "0",
      "42"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1176 / 54 leaves remainder 42."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 84; int y = 157; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "148",
      "157",
      "166",
      "84"
    ],
    "answer": 0,
    "explanation": "Condition (84 > 157) evaluates to false. Thus z is assigned to 157 - 9 which equals 148."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(187 & 77);",
    "options": [
      "12",
      "7",
      "264",
      "9"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10111011 and 1001101 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(53 & 51);",
    "options": [
      "47",
      "52",
      "49",
      "104"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 110101 and 110011 yields decimal 49."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(77 & 24);",
    "options": [
      "101",
      "6",
      "11",
      "8"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1001101 and 11000 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(89 ^ 68);",
    "options": [
      "27",
      "157",
      "29",
      "32"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1011001 and 1000100 yields decimal 29."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(78 & 20);",
    "options": [
      "98",
      "4",
      "2",
      "7"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1001110 and 10100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(146 | 31);",
    "options": [
      "157",
      "159",
      "177",
      "162"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10010010 and 11111 yields decimal 159."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(938 % 21);?",
    "options": [
      "0",
      "44",
      "17",
      "14"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 938 / 21 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3988 % 56);?",
    "options": [
      "0",
      "12",
      "15",
      "71"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3988 / 56 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(51 ^ 19);",
    "options": [
      "70",
      "35",
      "32",
      "30"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 110011 and 10011 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2573 % 50);?",
    "options": [
      "51",
      "26",
      "23",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2573 / 50 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(114 & 95);",
    "options": [
      "209",
      "85",
      "80",
      "82"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1110010 and 1011111 yields decimal 82."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(92 ^ 91);",
    "options": [
      "183",
      "5",
      "10",
      "7"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1011100 and 1011011 yields decimal 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 | 48);",
    "options": [
      "58",
      "84",
      "63",
      "60"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1100 and 110000 yields decimal 60."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3555 % 18);?",
    "options": [
      "0",
      "12",
      "197",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3555 / 18 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 170; int y = 95; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "170",
      "194",
      "146",
      "95"
    ],
    "answer": 1,
    "explanation": "Condition (170 > 95) evaluates to true. Thus z is assigned to 170 + 24 which equals 194."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3709 % 30);?",
    "options": [
      "0",
      "19",
      "22",
      "123"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3709 / 30 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1919 % 36);?",
    "options": [
      "11",
      "53",
      "14",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1919 / 36 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(127 | 49);",
    "options": [
      "130",
      "125",
      "176",
      "127"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1111111 and 110001 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 188; int y = 205; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "188",
      "185",
      "205",
      "225"
    ],
    "answer": 1,
    "explanation": "Condition (188 > 205) evaluates to false. Thus z is assigned to 205 - 20 which equals 185."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1784 % 43);?",
    "options": [
      "21",
      "0",
      "24",
      "41"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1784 / 43 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(110 & 91);",
    "options": [
      "77",
      "72",
      "74",
      "201"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1101110 and 1011011 yields decimal 74."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(173 & 99);",
    "options": [
      "272",
      "33",
      "36",
      "31"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10101101 and 1100011 yields decimal 33."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 121; int y = 177; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "169",
      "185",
      "121",
      "177"
    ],
    "answer": 0,
    "explanation": "Condition (121 > 177) evaluates to false. Thus z is assigned to 177 - 8 which equals 169."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 162; int y = 69; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "69",
      "162",
      "132",
      "192"
    ],
    "answer": 3,
    "explanation": "Condition (162 > 69) evaluates to true. Thus z is assigned to 162 + 30 which equals 192."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(135 & 101);",
    "options": [
      "236",
      "3",
      "8",
      "5"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10000111 and 1100101 yields decimal 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 66; int y = 23; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "33",
      "66",
      "99",
      "23"
    ],
    "answer": 2,
    "explanation": "Condition (66 > 23) evaluates to true. Thus z is assigned to 66 + 33 which equals 99."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 187; int y = 144; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "144",
      "221",
      "187",
      "153"
    ],
    "answer": 1,
    "explanation": "Condition (187 > 144) evaluates to true. Thus z is assigned to 187 + 34 which equals 221."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 64; int y = 74; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "74",
      "86",
      "64",
      "62"
    ],
    "answer": 3,
    "explanation": "Condition (64 > 74) evaluates to false. Thus z is assigned to 74 - 12 which equals 62."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 80; int y = 143; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "80",
      "143",
      "123",
      "163"
    ],
    "answer": 2,
    "explanation": "Condition (80 > 143) evaluates to false. Thus z is assigned to 143 - 20 which equals 123."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4947 % 18);?",
    "options": [
      "274",
      "0",
      "15",
      "18"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4947 / 18 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 154; int y = 208; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "197",
      "219",
      "154",
      "208"
    ],
    "answer": 0,
    "explanation": "Condition (154 > 208) evaluates to false. Thus z is assigned to 208 - 11 which equals 197."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1962 % 41);?",
    "options": [
      "38",
      "35",
      "47",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1962 / 41 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 139; int y = 43; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "161",
      "117",
      "43",
      "139"
    ],
    "answer": 0,
    "explanation": "Condition (139 > 43) evaluates to true. Thus z is assigned to 139 + 22 which equals 161."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(182 | 79);",
    "options": [
      "255",
      "261",
      "253",
      "258"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10110110 and 1001111 yields decimal 255."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 44; int y = 84; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "104",
      "84",
      "64",
      "44"
    ],
    "answer": 2,
    "explanation": "Condition (44 > 84) evaluates to false. Thus z is assigned to 84 - 20 which equals 64."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 109; int y = 192; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "192",
      "222",
      "109",
      "162"
    ],
    "answer": 3,
    "explanation": "Condition (109 > 192) evaluates to false. Thus z is assigned to 192 - 30 which equals 162."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(93 ^ 54);",
    "options": [
      "105",
      "147",
      "107",
      "110"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1011101 and 110110 yields decimal 107."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(182 & 89);",
    "options": [
      "14",
      "19",
      "16",
      "271"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10110110 and 1011001 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1163 % 19);?",
    "options": [
      "0",
      "61",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1163 / 19 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(140 ^ 65);",
    "options": [
      "229",
      "205",
      "208",
      "203"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10001100 and 1000001 yields decimal 205."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1675 % 58);?",
    "options": [
      "28",
      "0",
      "51",
      "54"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1675 / 58 leaves remainder 51."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5172 % 10);?",
    "options": [
      "5",
      "0",
      "517",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 5172 / 10 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1705 % 19);?",
    "options": [
      "89",
      "17",
      "14",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1705 / 19 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(41 | 46);",
    "options": [
      "50",
      "87",
      "45",
      "47"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 101001 and 101110 yields decimal 47."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(314 % 54);?",
    "options": [
      "44",
      "47",
      "0",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 314 / 54 leaves remainder 44."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 209; int y = 96; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "209",
      "204",
      "96",
      "214"
    ],
    "answer": 3,
    "explanation": "Condition (209 > 96) evaluates to true. Thus z is assigned to 209 + 5 which equals 214."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3094 % 45);?",
    "options": [
      "37",
      "34",
      "68",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3094 / 45 leaves remainder 34."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2200 % 35);?",
    "options": [
      "33",
      "30",
      "62",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2200 / 35 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 | 36);",
    "options": [
      "49",
      "46",
      "44",
      "70"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1010 and 100100 yields decimal 46."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(806 % 40);?",
    "options": [
      "0",
      "20",
      "9",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 806 / 40 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4100 % 30);?",
    "options": [
      "136",
      "23",
      "20",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4100 / 30 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(161 & 100);",
    "options": [
      "35",
      "261",
      "30",
      "32"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10100001 and 1100100 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2137 % 47);?",
    "options": [
      "22",
      "45",
      "0",
      "25"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2137 / 47 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 54; int y = 103; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "54",
      "117",
      "89",
      "103"
    ],
    "answer": 2,
    "explanation": "Condition (54 > 103) evaluates to false. Thus z is assigned to 103 - 14 which equals 89."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(173 ^ 66);",
    "options": [
      "263",
      "237",
      "242",
      "239"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10101101 and 1000010 yields decimal 239."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(207 & 79);",
    "options": [
      "77",
      "79",
      "82",
      "286"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 11001111 and 1001111 yields decimal 79."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2496 % 36);?",
    "options": [
      "69",
      "15",
      "12",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2496 / 36 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1968 % 18);?",
    "options": [
      "0",
      "109",
      "6",
      "9"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1968 / 18 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1255 % 26);?",
    "options": [
      "7",
      "10",
      "48",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1255 / 26 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 90; int y = 70; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "90",
      "70",
      "61",
      "119"
    ],
    "answer": 3,
    "explanation": "Condition (90 > 70) evaluates to true. Thus z is assigned to 90 + 29 which equals 119."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(119 | 96);",
    "options": [
      "117",
      "122",
      "215",
      "119"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1110111 and 1100000 yields decimal 119."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1645 % 34);?",
    "options": [
      "13",
      "16",
      "48",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1645 / 34 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(139 | 64);",
    "options": [
      "227",
      "203",
      "201",
      "206"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10001011 and 1000000 yields decimal 203."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4173 % 25);?",
    "options": [
      "23",
      "0",
      "26",
      "166"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4173 / 25 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 57; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "35",
      "79",
      "10",
      "57"
    ],
    "answer": 0,
    "explanation": "Condition (10 > 57) evaluates to false. Thus z is assigned to 57 - 22 which equals 35."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2972 % 12);?",
    "options": [
      "8",
      "0",
      "247",
      "11"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2972 / 12 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(91 & 42);",
    "options": [
      "13",
      "10",
      "8",
      "133"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1011011 and 101010 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(56 ^ 43);",
    "options": [
      "19",
      "22",
      "17",
      "99"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 111000 and 101011 yields decimal 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 126; int y = 10; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "159",
      "126",
      "93",
      "10"
    ],
    "answer": 0,
    "explanation": "Condition (126 > 10) evaluates to true. Thus z is assigned to 126 + 33 which equals 159."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 169; int y = 76; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "169",
      "148",
      "76",
      "190"
    ],
    "answer": 3,
    "explanation": "Condition (169 > 76) evaluates to true. Thus z is assigned to 169 + 21 which equals 190."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 92; int y = 87; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "83",
      "101",
      "92",
      "87"
    ],
    "answer": 1,
    "explanation": "Condition (92 > 87) evaluates to true. Thus z is assigned to 92 + 9 which equals 101."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(135 ^ 64);",
    "options": [
      "223",
      "202",
      "197",
      "199"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10000111 and 1000000 yields decimal 199."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2882 % 44);?",
    "options": [
      "65",
      "0",
      "22",
      "25"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2882 / 44 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 36; int y = 181; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "165",
      "197",
      "36",
      "181"
    ],
    "answer": 0,
    "explanation": "Condition (36 > 181) evaluates to false. Thus z is assigned to 181 - 16 which equals 165."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4920 % 28);?",
    "options": [
      "175",
      "0",
      "23",
      "20"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4920 / 28 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(27 ^ 49);",
    "options": [
      "45",
      "76",
      "42",
      "40"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 11011 and 110001 yields decimal 42."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(195 | 5);",
    "options": [
      "199",
      "202",
      "200",
      "197"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11000011 and 101 yields decimal 199."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(148 ^ 11);",
    "options": [
      "159",
      "162",
      "183",
      "157"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10010100 and 1011 yields decimal 159."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2427 % 18);?",
    "options": [
      "134",
      "0",
      "15",
      "18"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2427 / 18 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(56 | 20);",
    "options": [
      "63",
      "60",
      "76",
      "58"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 111000 and 10100 yields decimal 60."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(33 | 39);",
    "options": [
      "72",
      "39",
      "37",
      "42"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 100001 and 100111 yields decimal 39."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4165 % 38);?",
    "options": [
      "23",
      "26",
      "109",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4165 / 38 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(109 & 42);",
    "options": [
      "40",
      "151",
      "43",
      "38"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1101101 and 101010 yields decimal 40."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 176; int y = 198; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "193",
      "198",
      "203",
      "176"
    ],
    "answer": 0,
    "explanation": "Condition (176 > 198) evaluates to false. Thus z is assigned to 198 - 5 which equals 193."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(141 & 53);",
    "options": [
      "5",
      "3",
      "8",
      "194"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10001101 and 110101 yields decimal 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(199 ^ 100);",
    "options": [
      "163",
      "166",
      "299",
      "161"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 11000111 and 1100100 yields decimal 163."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1016 % 51);?",
    "options": [
      "47",
      "19",
      "0",
      "50"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1016 / 51 leaves remainder 47."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 167; int y = 109; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "109",
      "148",
      "167",
      "186"
    ],
    "answer": 3,
    "explanation": "Condition (167 > 109) evaluates to true. Thus z is assigned to 167 + 19 which equals 186."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1525 % 49);?",
    "options": [
      "31",
      "9",
      "6",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1525 / 49 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2288 % 31);?",
    "options": [
      "25",
      "0",
      "28",
      "73"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2288 / 31 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 158; int y = 16; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "158",
      "145",
      "16",
      "171"
    ],
    "answer": 3,
    "explanation": "Condition (158 > 16) evaluates to true. Thus z is assigned to 158 + 13 which equals 171."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 200; int y = 207; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "230",
      "207",
      "200",
      "184"
    ],
    "answer": 3,
    "explanation": "Condition (200 > 207) evaluates to false. Thus z is assigned to 207 - 23 which equals 184."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 85; int y = 16; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "85",
      "79",
      "16",
      "91"
    ],
    "answer": 3,
    "explanation": "Condition (85 > 16) evaluates to true. Thus z is assigned to 85 + 6 which equals 91."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 83; int y = 128; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "94",
      "162",
      "128",
      "83"
    ],
    "answer": 0,
    "explanation": "Condition (83 > 128) evaluates to false. Thus z is assigned to 128 - 34 which equals 94."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 140; int y = 107; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "107",
      "108",
      "172",
      "140"
    ],
    "answer": 2,
    "explanation": "Condition (140 > 107) evaluates to true. Thus z is assigned to 140 + 32 which equals 172."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 205; int y = 47; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "47",
      "226",
      "205",
      "184"
    ],
    "answer": 1,
    "explanation": "Condition (205 > 47) evaluates to true. Thus z is assigned to 205 + 21 which equals 226."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(96 | 63);",
    "options": [
      "125",
      "130",
      "159",
      "127"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1100000 and 111111 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2214 % 59);?",
    "options": [
      "34",
      "31",
      "37",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2214 / 59 leaves remainder 31."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(38 & 71);",
    "options": [
      "6",
      "9",
      "4",
      "109"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 100110 and 1000111 yields decimal 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 187; int y = 61; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "175",
      "199",
      "61",
      "187"
    ],
    "answer": 1,
    "explanation": "Condition (187 > 61) evaluates to true. Thus z is assigned to 187 + 12 which equals 199."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(127 ^ 99);",
    "options": [
      "31",
      "28",
      "26",
      "226"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1111111 and 1100011 yields decimal 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2358 % 46);?",
    "options": [
      "51",
      "12",
      "15",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2358 / 46 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4963 % 58);?",
    "options": [
      "36",
      "85",
      "33",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4963 / 58 leaves remainder 33."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 207; int y = 35; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "207",
      "202",
      "212",
      "35"
    ],
    "answer": 2,
    "explanation": "Condition (207 > 35) evaluates to true. Thus z is assigned to 207 + 5 which equals 212."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4380 % 46);?",
    "options": [
      "95",
      "13",
      "10",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4380 / 46 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(571 % 10);?",
    "options": [
      "1",
      "57",
      "0",
      "4"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 571 / 10 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2660 % 45);?",
    "options": [
      "59",
      "8",
      "5",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2660 / 45 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(87 & 23);",
    "options": [
      "110",
      "23",
      "21",
      "26"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1010111 and 10111 yields decimal 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(199 ^ 73);",
    "options": [
      "272",
      "140",
      "142",
      "145"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 11000111 and 1001001 yields decimal 142."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(125 ^ 44);",
    "options": [
      "81",
      "84",
      "79",
      "169"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1111101 and 101100 yields decimal 81."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1230 % 52);?",
    "options": [
      "23",
      "37",
      "34",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1230 / 52 leaves remainder 34."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(143 ^ 8);",
    "options": [
      "133",
      "151",
      "138",
      "135"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10001111 and 1000 yields decimal 135."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 167; int y = 141; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "147",
      "187",
      "141",
      "167"
    ],
    "answer": 1,
    "explanation": "Condition (167 > 141) evaluates to true. Thus z is assigned to 167 + 20 which equals 187."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1228 % 56);?",
    "options": [
      "52",
      "21",
      "0",
      "55"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1228 / 56 leaves remainder 52."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(654 % 15);?",
    "options": [
      "0",
      "12",
      "43",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 654 / 15 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(146 ^ 34);",
    "options": [
      "174",
      "176",
      "180",
      "179"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10010010 and 100010 yields decimal 176."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(97 & 19);",
    "options": [
      "1",
      "4",
      "116",
      "-1"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1100001 and 10011 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3329 % 15);?",
    "options": [
      "14",
      "221",
      "17",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3329 / 15 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(55 | 12);",
    "options": [
      "61",
      "66",
      "63",
      "67"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 110111 and 1100 yields decimal 63."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 204; int y = 70; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "215",
      "204",
      "193",
      "70"
    ],
    "answer": 0,
    "explanation": "Condition (204 > 70) evaluates to true. Thus z is assigned to 204 + 11 which equals 215."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 94; int y = 28; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "28",
      "94",
      "67",
      "121"
    ],
    "answer": 3,
    "explanation": "Condition (94 > 28) evaluates to true. Thus z is assigned to 94 + 27 which equals 121."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 166; int y = 63; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "63",
      "154",
      "178",
      "166"
    ],
    "answer": 2,
    "explanation": "Condition (166 > 63) evaluates to true. Thus z is assigned to 166 + 12 which equals 178."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 152; int y = 127; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "152",
      "163",
      "127",
      "141"
    ],
    "answer": 1,
    "explanation": "Condition (152 > 127) evaluates to true. Thus z is assigned to 152 + 11 which equals 163."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(440 % 25);?",
    "options": [
      "15",
      "18",
      "17",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 440 / 25 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(156 | 6);",
    "options": [
      "161",
      "158",
      "156",
      "162"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10011100 and 110 yields decimal 158."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(25 ^ 104);",
    "options": [
      "129",
      "113",
      "116",
      "111"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 11001 and 1101000 yields decimal 113."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(92 ^ 13);",
    "options": [
      "81",
      "79",
      "105",
      "84"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1011100 and 1101 yields decimal 81."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 25; int y = 133; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "100",
      "133",
      "166",
      "25"
    ],
    "answer": 0,
    "explanation": "Condition (25 > 133) evaluates to false. Thus z is assigned to 133 - 33 which equals 100."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(21 & 68);",
    "options": [
      "4",
      "89",
      "2",
      "7"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10101 and 1000100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(179 | 45);",
    "options": [
      "191",
      "194",
      "189",
      "224"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10110011 and 101101 yields decimal 191."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 63; int y = 53; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "72",
      "53",
      "63",
      "54"
    ],
    "answer": 0,
    "explanation": "Condition (63 > 53) evaluates to true. Thus z is assigned to 63 + 9 which equals 72."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2899 % 20);?",
    "options": [
      "0",
      "19",
      "22",
      "144"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2899 / 20 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 202; int y = 142; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "178",
      "226",
      "202",
      "142"
    ],
    "answer": 1,
    "explanation": "Condition (202 > 142) evaluates to true. Thus z is assigned to 202 + 24 which equals 226."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(69 & 89);",
    "options": [
      "65",
      "158",
      "63",
      "68"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1000101 and 1011001 yields decimal 65."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(146 & 20);",
    "options": [
      "16",
      "19",
      "14",
      "166"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10010010 and 10100 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 154; int y = 35; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "178",
      "154",
      "35",
      "130"
    ],
    "answer": 0,
    "explanation": "Condition (154 > 35) evaluates to true. Thus z is assigned to 154 + 24 which equals 178."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 152; int y = 133; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "133",
      "130",
      "152",
      "174"
    ],
    "answer": 3,
    "explanation": "Condition (152 > 133) evaluates to true. Thus z is assigned to 152 + 22 which equals 174."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4132 % 35);?",
    "options": [
      "2",
      "0",
      "5",
      "118"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4132 / 35 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(105 | 45);",
    "options": [
      "150",
      "107",
      "109",
      "112"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1101001 and 101101 yields decimal 109."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3045 % 40);?",
    "options": [
      "8",
      "76",
      "5",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3045 / 40 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(833 % 17);?",
    "options": [
      "7",
      "3",
      "49",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 833 / 17 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(129 & 99);",
    "options": [
      "-1",
      "4",
      "228",
      "1"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10000001 and 1100011 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3069 % 22);?",
    "options": [
      "0",
      "14",
      "11",
      "139"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3069 / 22 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(59 & 15);",
    "options": [
      "9",
      "74",
      "14",
      "11"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 111011 and 1111 yields decimal 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(200 & 46);",
    "options": [
      "8",
      "11",
      "246",
      "6"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11001000 and 101110 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 155; int y = 115; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "115",
      "182",
      "128",
      "155"
    ],
    "answer": 1,
    "explanation": "Condition (155 > 115) evaluates to true. Thus z is assigned to 155 + 27 which equals 182."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3531 % 23);?",
    "options": [
      "153",
      "15",
      "12",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3531 / 23 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(30 | 28);",
    "options": [
      "30",
      "28",
      "58",
      "33"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11110 and 11100 yields decimal 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 144; int y = 87; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "111",
      "87",
      "177",
      "144"
    ],
    "answer": 2,
    "explanation": "Condition (144 > 87) evaluates to true. Thus z is assigned to 144 + 33 which equals 177."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 114; int y = 71; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "129",
      "99",
      "71",
      "114"
    ],
    "answer": 0,
    "explanation": "Condition (114 > 71) evaluates to true. Thus z is assigned to 114 + 15 which equals 129."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2319 % 15);?",
    "options": [
      "12",
      "154",
      "0",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2319 / 15 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(173 ^ 84);",
    "options": [
      "252",
      "257",
      "247",
      "249"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10101101 and 1010100 yields decimal 249."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 86; int y = 189; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "157",
      "221",
      "86",
      "189"
    ],
    "answer": 0,
    "explanation": "Condition (86 > 189) evaluates to false. Thus z is assigned to 189 - 32 which equals 157."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(133 ^ 79);",
    "options": [
      "202",
      "200",
      "212",
      "205"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10000101 and 1001111 yields decimal 202."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(109 ^ 96);",
    "options": [
      "11",
      "205",
      "16",
      "13"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1101101 and 1100000 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3199 % 22);?",
    "options": [
      "12",
      "9",
      "0",
      "145"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3199 / 22 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(45 | 85);",
    "options": [
      "128",
      "125",
      "130",
      "123"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 101101 and 1010101 yields decimal 125."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3822 % 30);?",
    "options": [
      "12",
      "0",
      "127",
      "15"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3822 / 30 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(98 ^ 16);",
    "options": [
      "117",
      "112",
      "138",
      "114"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1100010 and 10000 yields decimal 114."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(172 & 72);",
    "options": [
      "6",
      "11",
      "244",
      "8"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10101100 and 1001000 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1003 % 35);?",
    "options": [
      "26",
      "23",
      "0",
      "28"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1003 / 35 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(83 ^ 45);",
    "options": [
      "124",
      "126",
      "129",
      "128"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1010011 and 101101 yields decimal 126."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 181; int y = 161; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "181",
      "205",
      "157",
      "161"
    ],
    "answer": 1,
    "explanation": "Condition (181 > 161) evaluates to true. Thus z is assigned to 181 + 24 which equals 205."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4358 % 58);?",
    "options": [
      "8",
      "75",
      "0",
      "11"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4358 / 58 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4381 % 24);?",
    "options": [
      "182",
      "0",
      "16",
      "13"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4381 / 24 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1529 % 39);?",
    "options": [
      "8",
      "11",
      "39",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1529 / 39 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(45 ^ 20);",
    "options": [
      "55",
      "57",
      "60",
      "65"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 101101 and 10100 yields decimal 57."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(59 & 12);",
    "options": [
      "8",
      "11",
      "6",
      "71"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 111011 and 1100 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 179; int y = 30; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "30",
      "191",
      "179",
      "167"
    ],
    "answer": 1,
    "explanation": "Condition (179 > 30) evaluates to true. Thus z is assigned to 179 + 12 which equals 191."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(147 & 26);",
    "options": [
      "18",
      "173",
      "21",
      "16"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10010011 and 11010 yields decimal 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(709 % 18);?",
    "options": [
      "39",
      "7",
      "10",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 709 / 18 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 68; int y = 96; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "74",
      "68",
      "96",
      "118"
    ],
    "answer": 0,
    "explanation": "Condition (68 > 96) evaluates to false. Thus z is assigned to 96 - 22 which equals 74."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 162; int y = 136; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "131",
      "193",
      "162",
      "136"
    ],
    "answer": 1,
    "explanation": "Condition (162 > 136) evaluates to true. Thus z is assigned to 162 + 31 which equals 193."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3823 % 23);?",
    "options": [
      "166",
      "5",
      "0",
      "8"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3823 / 23 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4026 % 11);?",
    "options": [
      "7",
      "3",
      "0",
      "366"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4026 / 11 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(158 | 58);",
    "options": [
      "193",
      "190",
      "188",
      "216"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10011110 and 111010 yields decimal 190."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(54 | 85);",
    "options": [
      "122",
      "117",
      "119",
      "139"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 110110 and 1010101 yields decimal 119."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 200; int y = 155; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "155",
      "178",
      "222",
      "200"
    ],
    "answer": 2,
    "explanation": "Condition (200 > 155) evaluates to true. Thus z is assigned to 200 + 22 which equals 222."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(86 | 70);",
    "options": [
      "156",
      "89",
      "84",
      "86"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1010110 and 1000110 yields decimal 86."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 114; int y = 191; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "114",
      "191",
      "172",
      "210"
    ],
    "answer": 2,
    "explanation": "Condition (114 > 191) evaluates to false. Thus z is assigned to 191 - 19 which equals 172."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(34 ^ 8);",
    "options": [
      "66",
      "45",
      "42",
      "40"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 100010 and 1000 yields decimal 42."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4122 % 51);?",
    "options": [
      "42",
      "45",
      "0",
      "80"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4122 / 51 leaves remainder 42."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 50; int y = 91; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "91",
      "119",
      "63",
      "50"
    ],
    "answer": 2,
    "explanation": "Condition (50 > 91) evaluates to false. Thus z is assigned to 91 - 28 which equals 63."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(138 & 98);",
    "options": [
      "0",
      "5",
      "2",
      "236"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10001010 and 1100010 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 113; int y = 38; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "38",
      "139",
      "87",
      "113"
    ],
    "answer": 1,
    "explanation": "Condition (113 > 38) evaluates to true. Thus z is assigned to 113 + 26 which equals 139."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 201; int y = 177; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "187",
      "201",
      "177",
      "215"
    ],
    "answer": 3,
    "explanation": "Condition (201 > 177) evaluates to true. Thus z is assigned to 201 + 14 which equals 215."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1646 % 21);?",
    "options": [
      "0",
      "11",
      "8",
      "78"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1646 / 21 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(24 & 19);",
    "options": [
      "43",
      "14",
      "19",
      "16"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 11000 and 10011 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 73; int y = 94; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "106",
      "73",
      "82",
      "94"
    ],
    "answer": 2,
    "explanation": "Condition (73 > 94) evaluates to false. Thus z is assigned to 94 - 12 which equals 82."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(43 & 65);",
    "options": [
      "4",
      "1",
      "108",
      "-1"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 101011 and 1000001 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(91 & 7);",
    "options": [
      "3",
      "6",
      "1",
      "98"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1011011 and 111 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(123 ^ 30);",
    "options": [
      "101",
      "104",
      "153",
      "99"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1111011 and 11110 yields decimal 101."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 177; int y = 164; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "165",
      "189",
      "177",
      "164"
    ],
    "answer": 1,
    "explanation": "Condition (177 > 164) evaluates to true. Thus z is assigned to 177 + 12 which equals 189."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4627 % 54);?",
    "options": [
      "0",
      "40",
      "37",
      "85"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4627 / 54 leaves remainder 37."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1426 % 50);?",
    "options": [
      "29",
      "28",
      "0",
      "26"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1426 / 50 leaves remainder 26."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(80 ^ 43);",
    "options": [
      "121",
      "147",
      "123",
      "126"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1010000 and 101011 yields decimal 123."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2296 % 36);?",
    "options": [
      "63",
      "0",
      "31",
      "28"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2296 / 36 leaves remainder 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2979 % 37);?",
    "options": [
      "80",
      "22",
      "0",
      "19"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2979 / 37 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(85 & 55);",
    "options": [
      "21",
      "24",
      "140",
      "19"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1010101 and 110111 yields decimal 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3735 % 41);?",
    "options": [
      "91",
      "0",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3735 / 41 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(90 ^ 60);",
    "options": [
      "100",
      "150",
      "105",
      "102"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1011010 and 111100 yields decimal 102."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 50; int y = 123; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "123",
      "141",
      "50",
      "105"
    ],
    "answer": 3,
    "explanation": "Condition (50 > 123) evaluates to false. Thus z is assigned to 123 - 18 which equals 105."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 | 88);",
    "options": [
      "94",
      "89",
      "107",
      "91"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10011 and 1011000 yields decimal 91."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1045 % 55);?",
    "options": [
      "19",
      "3",
      "7",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1045 / 55 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 109; int y = 187; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "187",
      "206",
      "168",
      "109"
    ],
    "answer": 2,
    "explanation": "Condition (109 > 187) evaluates to false. Thus z is assigned to 187 - 19 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 28; int y = 20; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "44",
      "12",
      "20",
      "28"
    ],
    "answer": 0,
    "explanation": "Condition (28 > 20) evaluates to true. Thus z is assigned to 28 + 16 which equals 44."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4065 % 58);?",
    "options": [
      "70",
      "8",
      "5",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4065 / 58 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 202; int y = 153; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "215",
      "202",
      "153",
      "189"
    ],
    "answer": 0,
    "explanation": "Condition (202 > 153) evaluates to true. Thus z is assigned to 202 + 13 which equals 215."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(193 & 43);",
    "options": [
      "1",
      "-1",
      "236",
      "4"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11000001 and 101011 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1142 % 23);?",
    "options": [
      "15",
      "18",
      "49",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1142 / 23 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(159 & 89);",
    "options": [
      "23",
      "248",
      "25",
      "28"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10011111 and 1011001 yields decimal 25."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(779 % 56);?",
    "options": [
      "0",
      "13",
      "51",
      "54"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 779 / 56 leaves remainder 51."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(173 | 37);",
    "options": [
      "171",
      "210",
      "176",
      "173"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10101101 and 100101 yields decimal 173."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(116 | 93);",
    "options": [
      "209",
      "125",
      "123",
      "128"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1110100 and 1011101 yields decimal 125."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 166; int y = 184; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "184",
      "160",
      "208",
      "166"
    ],
    "answer": 1,
    "explanation": "Condition (166 > 184) evaluates to false. Thus z is assigned to 184 - 24 which equals 160."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 | 65);",
    "options": [
      "84",
      "81",
      "79",
      "105"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10000 and 1000001 yields decimal 81."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 87; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "12",
      "114",
      "60",
      "87"
    ],
    "answer": 2,
    "explanation": "Condition (12 > 87) evaluates to false. Thus z is assigned to 87 - 27 which equals 60."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3481 % 18);?",
    "options": [
      "10",
      "0",
      "193",
      "7"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3481 / 18 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 & 37);",
    "options": [
      "0",
      "47",
      "3",
      "-2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1010 and 100101 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1430 % 46);?",
    "options": [
      "31",
      "0",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1430 / 46 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1770 % 17);?",
    "options": [
      "0",
      "2",
      "5",
      "104"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1770 / 17 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 108; int y = 187; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "108",
      "187",
      "213",
      "161"
    ],
    "answer": 3,
    "explanation": "Condition (108 > 187) evaluates to false. Thus z is assigned to 187 - 26 which equals 161."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(124 ^ 25);",
    "options": [
      "149",
      "101",
      "99",
      "104"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1111100 and 11001 yields decimal 101."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(20 | 98);",
    "options": [
      "142",
      "116",
      "118",
      "121"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10100 and 1100010 yields decimal 118."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1657 % 21);?",
    "options": [
      "78",
      "19",
      "0",
      "22"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1657 / 21 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 70; int y = 37; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "92",
      "48",
      "70",
      "37"
    ],
    "answer": 0,
    "explanation": "Condition (70 > 37) evaluates to true. Thus z is assigned to 70 + 22 which equals 92."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4075 % 59);?",
    "options": [
      "69",
      "4",
      "0",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4075 / 59 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 36; int y = 44; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "64",
      "36",
      "24",
      "44"
    ],
    "answer": 2,
    "explanation": "Condition (36 > 44) evaluates to false. Thus z is assigned to 44 - 20 which equals 24."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(181 ^ 93);",
    "options": [
      "232",
      "274",
      "235",
      "230"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10110101 and 1011101 yields decimal 232."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 135; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "135",
      "160",
      "20",
      "110"
    ],
    "answer": 3,
    "explanation": "Condition (20 > 135) evaluates to false. Thus z is assigned to 135 - 25 which equals 110."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(123 ^ 49);",
    "options": [
      "74",
      "77",
      "72",
      "172"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1111011 and 110001 yields decimal 74."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 193; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "193",
      "183",
      "203",
      "20"
    ],
    "answer": 1,
    "explanation": "Condition (20 > 193) evaluates to false. Thus z is assigned to 193 - 10 which equals 183."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(145 ^ 5);",
    "options": [
      "151",
      "148",
      "150",
      "146"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10010001 and 101 yields decimal 148."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(630 % 44);?",
    "options": [
      "0",
      "21",
      "17",
      "14"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 630 / 44 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 124; int y = 177; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "144",
      "124",
      "177",
      "210"
    ],
    "answer": 0,
    "explanation": "Condition (124 > 177) evaluates to false. Thus z is assigned to 177 - 33 which equals 144."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 195; int y = 119; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "119",
      "168",
      "195",
      "222"
    ],
    "answer": 3,
    "explanation": "Condition (195 > 119) evaluates to true. Thus z is assigned to 195 + 27 which equals 222."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(193 ^ 58);",
    "options": [
      "254",
      "251",
      "275",
      "249"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 11000001 and 111010 yields decimal 251."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 143; int y = 168; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "168",
      "202",
      "134",
      "143"
    ],
    "answer": 2,
    "explanation": "Condition (143 > 168) evaluates to false. Thus z is assigned to 168 - 34 which equals 134."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 205; int y = 171; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "205",
      "217",
      "171",
      "193"
    ],
    "answer": 1,
    "explanation": "Condition (205 > 171) evaluates to true. Thus z is assigned to 205 + 12 which equals 217."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5074 % 27);?",
    "options": [
      "0",
      "187",
      "28",
      "25"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 5074 / 27 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2800 % 39);?",
    "options": [
      "71",
      "34",
      "0",
      "31"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2800 / 39 leaves remainder 31."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 105; int y = 82; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "127",
      "83",
      "82",
      "105"
    ],
    "answer": 0,
    "explanation": "Condition (105 > 82) evaluates to true. Thus z is assigned to 105 + 22 which equals 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3598 % 50);?",
    "options": [
      "71",
      "0",
      "51",
      "48"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3598 / 50 leaves remainder 48."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2385 % 11);?",
    "options": [
      "216",
      "9",
      "0",
      "12"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2385 / 11 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(749 % 18);?",
    "options": [
      "11",
      "0",
      "14",
      "41"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 749 / 18 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(244 % 17);?",
    "options": [
      "14",
      "9",
      "6",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 244 / 17 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(156 & 87);",
    "options": [
      "23",
      "20",
      "18",
      "243"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10011100 and 1010111 yields decimal 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(82 | 31);",
    "options": [
      "93",
      "98",
      "113",
      "95"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1010010 and 11111 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4303 % 18);?",
    "options": [
      "4",
      "1",
      "239",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4303 / 18 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2872 % 46);?",
    "options": [
      "20",
      "0",
      "23",
      "62"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2872 / 46 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1562 % 52);?",
    "options": [
      "30",
      "5",
      "2",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1562 / 52 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(323 % 59);?",
    "options": [
      "5",
      "31",
      "28",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 323 / 59 leaves remainder 28."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(187 | 37);",
    "options": [
      "189",
      "194",
      "191",
      "224"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10111011 and 100101 yields decimal 191."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3443 % 48);?",
    "options": [
      "35",
      "0",
      "38",
      "71"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3443 / 48 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 181; int y = 95; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "181",
      "159",
      "203",
      "95"
    ],
    "answer": 2,
    "explanation": "Condition (181 > 95) evaluates to true. Thus z is assigned to 181 + 22 which equals 203."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 & 71);",
    "options": [
      "0",
      "2",
      "81",
      "5"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1010 and 1000111 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(29 | 98);",
    "options": [
      "130",
      "127",
      "125",
      "151"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 11101 and 1100010 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 68; int y = 140; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "68",
      "152",
      "128",
      "140"
    ],
    "answer": 2,
    "explanation": "Condition (68 > 140) evaluates to false. Thus z is assigned to 140 - 12 which equals 128."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4032 % 50);?",
    "options": [
      "0",
      "80",
      "35",
      "32"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4032 / 50 leaves remainder 32."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(136 ^ 24);",
    "options": [
      "144",
      "142",
      "147",
      "160"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10001000 and 11000 yields decimal 144."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(24 ^ 9);",
    "options": [
      "33",
      "20",
      "17",
      "15"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 11000 and 1001 yields decimal 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 103; int y = 114; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "135",
      "114",
      "103",
      "93"
    ],
    "answer": 3,
    "explanation": "Condition (103 > 114) evaluates to false. Thus z is assigned to 114 - 21 which equals 93."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4434 % 10);?",
    "options": [
      "0",
      "4",
      "443",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4434 / 10 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(206 | 73);",
    "options": [
      "207",
      "210",
      "279",
      "205"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11001110 and 1001001 yields decimal 207."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(93 & 90);",
    "options": [
      "86",
      "88",
      "91",
      "183"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1011101 and 1011010 yields decimal 88."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3039 % 13);?",
    "options": [
      "233",
      "13",
      "10",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3039 / 13 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 160; int y = 23; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "23",
      "160",
      "150",
      "170"
    ],
    "answer": 3,
    "explanation": "Condition (160 > 23) evaluates to true. Thus z is assigned to 160 + 10 which equals 170."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(208 & 99);",
    "options": [
      "62",
      "64",
      "307",
      "67"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 11010000 and 1100011 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1833 % 52);?",
    "options": [
      "35",
      "13",
      "0",
      "16"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1833 / 52 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1500 % 53);?",
    "options": [
      "0",
      "16",
      "19",
      "28"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1500 / 53 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 37; int y = 73; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "73",
      "37",
      "105",
      "41"
    ],
    "answer": 3,
    "explanation": "Condition (37 > 73) evaluates to false. Thus z is assigned to 73 - 32 which equals 41."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 131; int y = 59; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "157",
      "105",
      "131",
      "59"
    ],
    "answer": 0,
    "explanation": "Condition (131 > 59) evaluates to true. Thus z is assigned to 131 + 26 which equals 157."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 34; int y = 34; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "55",
      "13",
      "34",
      "34"
    ],
    "answer": 1,
    "explanation": "Condition (34 > 34) evaluates to false. Thus z is assigned to 34 - 21 which equals 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(621 % 16);?",
    "options": [
      "38",
      "0",
      "16",
      "13"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 621 / 16 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 87; int y = 52; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "57",
      "117",
      "87",
      "52"
    ],
    "answer": 1,
    "explanation": "Condition (87 > 52) evaluates to true. Thus z is assigned to 87 + 30 which equals 117."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 41; int y = 38; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "58",
      "41",
      "38",
      "24"
    ],
    "answer": 0,
    "explanation": "Condition (41 > 38) evaluates to true. Thus z is assigned to 41 + 17 which equals 58."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3866 % 17);?",
    "options": [
      "0",
      "10",
      "7",
      "227"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3866 / 17 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(151 ^ 32);",
    "options": [
      "186",
      "181",
      "183",
      "207"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10010111 and 100000 yields decimal 183."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 59; int y = 142; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "174",
      "110",
      "59",
      "142"
    ],
    "answer": 1,
    "explanation": "Condition (59 > 142) evaluates to false. Thus z is assigned to 142 - 32 which equals 110."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(190 | 89);",
    "options": [
      "258",
      "279",
      "253",
      "255"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10111110 and 1011001 yields decimal 255."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 207; int y = 85; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "229",
      "185",
      "85",
      "207"
    ],
    "answer": 0,
    "explanation": "Condition (207 > 85) evaluates to true. Thus z is assigned to 207 + 22 which equals 229."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1368 % 36);?",
    "options": [
      "7",
      "3",
      "38",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1368 / 36 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 62; int y = 85; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "99",
      "71",
      "62",
      "85"
    ],
    "answer": 1,
    "explanation": "Condition (62 > 85) evaluates to false. Thus z is assigned to 85 - 14 which equals 71."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1816 % 52);?",
    "options": [
      "0",
      "51",
      "34",
      "48"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1816 / 52 leaves remainder 48."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(32 ^ 24);",
    "options": [
      "54",
      "59",
      "80",
      "56"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 100000 and 11000 yields decimal 56."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(915 % 29);?",
    "options": [
      "19",
      "16",
      "31",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 915 / 29 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(33 | 43);",
    "options": [
      "41",
      "43",
      "46",
      "76"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 100001 and 101011 yields decimal 43."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(81 | 48);",
    "options": [
      "111",
      "116",
      "129",
      "113"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1010001 and 110000 yields decimal 113."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 93; int y = 155; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "187",
      "93",
      "155",
      "123"
    ],
    "answer": 3,
    "explanation": "Condition (93 > 155) evaluates to false. Thus z is assigned to 155 - 32 which equals 123."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(74 & 88);",
    "options": [
      "75",
      "162",
      "72",
      "70"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1001010 and 1011000 yields decimal 72."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(45 & 43);",
    "options": [
      "44",
      "39",
      "41",
      "88"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 101101 and 101011 yields decimal 41."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(101 & 60);",
    "options": [
      "34",
      "161",
      "39",
      "36"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1100101 and 111100 yields decimal 36."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1628 % 53);?",
    "options": [
      "41",
      "38",
      "30",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1628 / 53 leaves remainder 38."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(204 & 34);",
    "options": [
      "3",
      "0",
      "238",
      "-2"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 11001100 and 100010 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3655 % 33);?",
    "options": [
      "0",
      "110",
      "25",
      "28"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3655 / 33 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 49; int y = 88; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "88",
      "64",
      "49",
      "112"
    ],
    "answer": 1,
    "explanation": "Condition (49 > 88) evaluates to false. Thus z is assigned to 88 - 24 which equals 64."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1495 % 11);?",
    "options": [
      "10",
      "13",
      "135",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1495 / 11 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(81 & 98);",
    "options": [
      "67",
      "62",
      "64",
      "179"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1010001 and 1100010 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 58; int y = 48; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "80",
      "58",
      "36",
      "48"
    ],
    "answer": 0,
    "explanation": "Condition (58 > 48) evaluates to true. Thus z is assigned to 58 + 22 which equals 80."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 ^ 28);",
    "options": [
      "10",
      "12",
      "15",
      "44"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10000 and 11100 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4804 % 49);?",
    "options": [
      "2",
      "0",
      "5",
      "98"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4804 / 49 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1263 % 20);?",
    "options": [
      "63",
      "3",
      "6",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1263 / 20 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3381 % 33);?",
    "options": [
      "18",
      "102",
      "15",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3381 / 33 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 137; int y = 162; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "180",
      "144",
      "162",
      "137"
    ],
    "answer": 1,
    "explanation": "Condition (137 > 162) evaluates to false. Thus z is assigned to 162 - 18 which equals 144."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 125; int y = 152; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "172",
      "152",
      "125",
      "132"
    ],
    "answer": 3,
    "explanation": "Condition (125 > 152) evaluates to false. Thus z is assigned to 152 - 20 which equals 132."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 29; int y = 29; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "29",
      "8",
      "29",
      "50"
    ],
    "answer": 1,
    "explanation": "Condition (29 > 29) evaluates to false. Thus z is assigned to 29 - 21 which equals 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2911 % 42);?",
    "options": [
      "16",
      "13",
      "0",
      "69"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2911 / 42 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 71; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "39",
      "23",
      "71",
      "103"
    ],
    "answer": 0,
    "explanation": "Condition (23 > 71) evaluates to false. Thus z is assigned to 71 - 32 which equals 39."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 116; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "116",
      "130",
      "102",
      "21"
    ],
    "answer": 2,
    "explanation": "Condition (21 > 116) evaluates to false. Thus z is assigned to 116 - 14 which equals 102."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1911 % 38);?",
    "options": [
      "11",
      "0",
      "50",
      "14"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1911 / 38 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3232 % 25);?",
    "options": [
      "129",
      "7",
      "10",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3232 / 25 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 44; int y = 56; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "70",
      "56",
      "42",
      "44"
    ],
    "answer": 2,
    "explanation": "Condition (44 > 56) evaluates to false. Thus z is assigned to 56 - 14 which equals 42."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(78 & 77);",
    "options": [
      "79",
      "74",
      "155",
      "76"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1001110 and 1001101 yields decimal 76."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(209 % 32);?",
    "options": [
      "20",
      "17",
      "6",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 209 / 32 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(63 ^ 66);",
    "options": [
      "129",
      "123",
      "128",
      "125"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 111111 and 1000010 yields decimal 125."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1043 % 56);?",
    "options": [
      "35",
      "18",
      "38",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1043 / 56 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(91 | 10);",
    "options": [
      "89",
      "101",
      "91",
      "94"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1011011 and 1010 yields decimal 91."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(207 ^ 56);",
    "options": [
      "263",
      "250",
      "245",
      "247"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 11001111 and 111000 yields decimal 247."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2039 % 16);?",
    "options": [
      "0",
      "10",
      "127",
      "7"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2039 / 16 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(48 ^ 37);",
    "options": [
      "21",
      "24",
      "85",
      "19"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 110000 and 100101 yields decimal 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4424 % 46);?",
    "options": [
      "0",
      "8",
      "11",
      "96"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4424 / 46 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4822 % 30);?",
    "options": [
      "0",
      "22",
      "25",
      "160"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4822 / 30 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 79; int y = 194; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "188",
      "79",
      "194",
      "200"
    ],
    "answer": 0,
    "explanation": "Condition (79 > 194) evaluates to false. Thus z is assigned to 194 - 6 which equals 188."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5163 % 42);?",
    "options": [
      "39",
      "122",
      "42",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 5163 / 42 leaves remainder 39."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(102 | 46);",
    "options": [
      "108",
      "148",
      "110",
      "113"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1100110 and 101110 yields decimal 110."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 150; int y = 20; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "20",
      "150",
      "173",
      "127"
    ],
    "answer": 2,
    "explanation": "Condition (150 > 20) evaluates to true. Thus z is assigned to 150 + 23 which equals 173."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(143 & 46);",
    "options": [
      "12",
      "14",
      "189",
      "17"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10001111 and 101110 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 107; int y = 154; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "154",
      "120",
      "188",
      "107"
    ],
    "answer": 1,
    "explanation": "Condition (107 > 154) evaluates to false. Thus z is assigned to 154 - 34 which equals 120."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 122; int y = 66; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "139",
      "105",
      "122",
      "66"
    ],
    "answer": 0,
    "explanation": "Condition (122 > 66) evaluates to true. Thus z is assigned to 122 + 17 which equals 139."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(194 | 35);",
    "options": [
      "230",
      "225",
      "229",
      "227"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 11000010 and 100011 yields decimal 227."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(36 ^ 37);",
    "options": [
      "-1",
      "73",
      "4",
      "1"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 100100 and 100101 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 177; int y = 11; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "177",
      "183",
      "171",
      "11"
    ],
    "answer": 1,
    "explanation": "Condition (177 > 11) evaluates to true. Thus z is assigned to 177 + 6 which equals 183."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3902 % 58);?",
    "options": [
      "16",
      "19",
      "67",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3902 / 58 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 112; int y = 178; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "186",
      "178",
      "170",
      "112"
    ],
    "answer": 2,
    "explanation": "Condition (112 > 178) evaluates to false. Thus z is assigned to 178 - 8 which equals 170."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 39; int y = 163; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "163",
      "156",
      "170",
      "39"
    ],
    "answer": 1,
    "explanation": "Condition (39 > 163) evaluates to false. Thus z is assigned to 163 - 7 which equals 156."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2321 % 54);?",
    "options": [
      "53",
      "42",
      "0",
      "56"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2321 / 54 leaves remainder 53."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(80 & 13);",
    "options": [
      "-2",
      "3",
      "93",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1010000 and 1101 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 203; int y = 194; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "192",
      "194",
      "203",
      "214"
    ],
    "answer": 3,
    "explanation": "Condition (203 > 194) evaluates to true. Thus z is assigned to 203 + 11 which equals 214."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(143 | 101);",
    "options": [
      "244",
      "237",
      "239",
      "242"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10001111 and 1100101 yields decimal 239."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4746 % 26);?",
    "options": [
      "0",
      "14",
      "17",
      "182"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4746 / 26 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(24 & 18);",
    "options": [
      "16",
      "42",
      "14",
      "19"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11000 and 10010 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 84; int y = 21; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "61",
      "107",
      "84",
      "21"
    ],
    "answer": 1,
    "explanation": "Condition (84 > 21) evaluates to true. Thus z is assigned to 84 + 23 which equals 107."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 71; int y = 72; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "72",
      "45",
      "99",
      "71"
    ],
    "answer": 1,
    "explanation": "Condition (71 > 72) evaluates to false. Thus z is assigned to 72 - 27 which equals 45."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(208 & 28);",
    "options": [
      "16",
      "14",
      "236",
      "19"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11010000 and 11100 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(856 % 28);?",
    "options": [
      "30",
      "19",
      "0",
      "16"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 856 / 28 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4893 % 56);?",
    "options": [
      "24",
      "21",
      "87",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4893 / 56 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4553 % 22);?",
    "options": [
      "206",
      "21",
      "24",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4553 / 22 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 68; int y = 201; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "219",
      "183",
      "201",
      "68"
    ],
    "answer": 1,
    "explanation": "Condition (68 > 201) evaluates to false. Thus z is assigned to 201 - 18 which equals 183."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 72; int y = 159; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "139",
      "179",
      "72",
      "159"
    ],
    "answer": 0,
    "explanation": "Condition (72 > 159) evaluates to false. Thus z is assigned to 159 - 20 which equals 139."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3093 % 21);?",
    "options": [
      "9",
      "147",
      "6",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3093 / 21 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3251 % 41);?",
    "options": [
      "12",
      "79",
      "15",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3251 / 41 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 159; int y = 182; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "182",
      "395",
      "205",
      "159"
    ],
    "answer": 3,
    "explanation": "Condition (159 > 182) evaluates to false. Thus z is assigned to 182 - 23 which equals 159."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 135; int y = 130; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "135",
      "130",
      "105",
      "165"
    ],
    "answer": 3,
    "explanation": "Condition (135 > 130) evaluates to true. Thus z is assigned to 135 + 30 which equals 165."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(117 ^ 21);",
    "options": [
      "99",
      "96",
      "94",
      "138"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1110101 and 10101 yields decimal 96."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(40 & 73);",
    "options": [
      "11",
      "8",
      "113",
      "6"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 101000 and 1001001 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(185 | 76);",
    "options": [
      "251",
      "256",
      "253",
      "261"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10111001 and 1001100 yields decimal 253."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(116 | 56);",
    "options": [
      "127",
      "172",
      "122",
      "124"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1110100 and 111000 yields decimal 124."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 154; int y = 93; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "93",
      "154",
      "129",
      "179"
    ],
    "answer": 3,
    "explanation": "Condition (154 > 93) evaluates to true. Thus z is assigned to 154 + 25 which equals 179."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(33 ^ 103);",
    "options": [
      "68",
      "70",
      "136",
      "73"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 100001 and 1100111 yields decimal 70."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(71 | 26);",
    "options": [
      "98",
      "95",
      "97",
      "93"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1000111 and 11010 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(205 ^ 49);",
    "options": [
      "254",
      "255",
      "252",
      "250"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 11001101 and 110001 yields decimal 252."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(331 % 43);?",
    "options": [
      "33",
      "0",
      "7",
      "30"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 331 / 43 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3011 % 47);?",
    "options": [
      "64",
      "6",
      "0",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3011 / 47 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(180 | 25);",
    "options": [
      "187",
      "189",
      "192",
      "205"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10110100 and 11001 yields decimal 189."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(266 % 39);?",
    "options": [
      "0",
      "6",
      "32",
      "35"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 266 / 39 leaves remainder 32."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 199; int y = 125; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "220",
      "178",
      "199",
      "125"
    ],
    "answer": 0,
    "explanation": "Condition (199 > 125) evaluates to true. Thus z is assigned to 199 + 21 which equals 220."
  }
];
