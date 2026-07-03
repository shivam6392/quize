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
      "Assembly by design",
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
      "Java Virtual Machine",
      "Java Visual Maker",
      "Java Variable Manager",
      "Java Version Module"
    ],
    "answer": 0,
    "explanation": "JVM executes Java bytecode on any platform."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JDK includes?",
    "options": [
      "Only editor in typical implementations",
      "Only libraries in typical implementations",
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
      "Only compiler in practice",
      "Only source code",
      "Only debugger in practice",
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
      "Private fields with public getters/setters",
      "Abstract classes under normal conditions",
      "Public fields in typical implementations",
      "Static methods only (default behavior)"
    ],
    "answer": 0,
    "explanation": "Data hiding protects internal state."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Inheritance allows?",
    "options": [
      "Thread creation under normal conditions",
      "Handling exceptions in typical implementations",
      "A class to inherit properties of another class",
      "Creating objects under normal conditions"
    ],
    "answer": 2,
    "explanation": "Child class extends parent class."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Polymorphism means?",
    "options": [
      "Static binding always (standard definition)",
      "One method one behavior based on convention",
      "Same method behaves differently based on context",
      "No methods in typical implementations"
    ],
    "answer": 2,
    "explanation": "Achieved via overloading and overriding."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Abstraction is implemented using?",
    "options": [
      "Concrete classes only (commonly used)",
      "Variables (general case)",
      "Abstract classes and interfaces",
      "Loops based on convention"
    ],
    "answer": 2,
    "explanation": "Hides implementation, shows only functionality."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Method overloading is?",
    "options": [
      "Different classes based on convention",
      "Different return type only in most cases",
      "Same name same parameters under normal conditions",
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
      "Same class different params as per specification",
      "Static methods in typical implementations",
      "Child class redefines parent method with same signature",
      "Different method name in typical implementations"
    ],
    "answer": 2,
    "explanation": "Runtime (dynamic) polymorphism."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Constructor is called when?",
    "options": [
      "Method is called in standard usage",
      "Variable is declared (general case)",
      "Object is created using new keyword",
      "Class is loaded (commonly used)"
    ],
    "answer": 2,
    "explanation": "Constructors initialize object state."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Interface in Java contains?",
    "options": [
      "Abstract methods (and default/static in Java 8+)",
      "Constructors in typical implementations",
      "Main method in typical implementations",
      "Instance variables under normal conditions"
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
      "ArrayList is O(1), LinkedList is O(n)",
      "Both O(n) in typical implementations",
      "Both O(1) as per specification",
      "LinkedList is faster (default behavior)"
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
      "Multiple null keys (commonly used)",
      "No nulls under normal conditions",
      "Only null values (typical scenario)",
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
      "Key-value pairs (standard definition)",
      "Duplicates allowed as per specification",
      "Sorted elements in most cases",
      "Unique elements only, no duplicates"
    ],
    "answer": 3,
    "explanation": "Internally uses HashMap; add returns false for duplicates."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "TreeMap stores keys in?",
    "options": [
      "Reverse order in practice",
      "Insertion order in most cases",
      "Random order (commonly used)",
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
      "Insertion order (widely accepted)",
      "Alphabetical only as per specification",
      "Natural ordering or custom Comparator",
      "Random in typical implementations"
    ],
    "answer": 2,
    "explanation": "Min-heap by default in Java."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "try-catch-finally: finally block runs?",
    "options": [
      "Only on success (default behavior)",
      "Never as per specification",
      "Only on exception by design",
      "Always (except System.exit)"
    ],
    "answer": 3,
    "explanation": "Finally ensures cleanup code executes."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Checked exceptions are?",
    "options": [
      "OS-level errors in most cases",
      "Never checked by design",
      "Runtime only (typical scenario)",
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
      "String (standard definition)",
      "Object in typical implementations",
      "Exception or RuntimeException",
      "Thread (default behavior)"
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
      "Same thing in typical implementations",
      "throws catches exception in typical implementations",
      "throw creates exception; throws declares it in method signature",
      "throw is for classes in typical implementations"
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
      "It has no methods (standard definition)",
      "It uses char array as per specification",
      "It is final class in typical implementations",
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
      "Both thread-safe in typical implementations",
      "StringBuffer is faster (default behavior)",
      "Both not thread-safe based on convention"
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
      "Extending Thread class or implementing Runnable",
      "Only Runnable in typical implementations",
      "Only extending Thread (typical scenario)",
      "Using String class (standard definition)"
    ],
    "answer": 0,
    "explanation": "Two standard approaches to multithreading."
  },
  {
    "subject": "Java",
    "topic": "Multithreading",
    "difficulty": "Medium",
    "question": "synchronized keyword ensures?",
    "options": [
      "All threads run simultaneously (commonly used)",
      "Memory is freed in typical implementations",
      "Thread is stopped under normal conditions",
      "Only one thread accesses block/method at a time"
    ],
    "answer": 3,
    "explanation": "Mutual exclusion for thread safety."
  },
  {
    "subject": "Java",
    "topic": "Multithreading",
    "difficulty": "Medium",
    "question": "Executor framework provides?",
    "options": [
      "Network calls in most cases",
      "Thread pool management",
      "Database access by design",
      "File handling in practice"
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
      "(parameters) -> expression/body",
      "method => param as per specification",
      "def func(): under normal conditions",
      "function(){} in standard usage"
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
      "Audio streaming as per specification",
      "Network streaming based on convention",
      "File I/O streaming under normal conditions",
      "Functional-style operations on collections"
    ],
    "answer": 3,
    "explanation": "map, filter, reduce operations on data."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Functional interface has?",
    "options": [
      "No methods in practice",
      "Only default methods in practice",
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
      "No memory management based on convention",
      "Programmer must free memory in standard usage",
      "JVM automatically reclaims unused object memory",
      "OS handles it in typical implementations"
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
      "Class definitions (commonly used)",
      "Method calls and local variables",
      "Static variables only in practice",
      "Objects only in standard usage"
    ],
    "answer": 1,
    "explanation": "Stack is LIFO; each thread has its own."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Heap memory stores?",
    "options": [
      "Method calls (general case)",
      "Primitives only in most cases",
      "Objects and instance variables",
      "Local variables only (general case)"
    ],
    "answer": 2,
    "explanation": "Shared heap stores dynamically allocated objects."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "File class in Java represents?",
    "options": [
      "Database connection",
      "File or directory path",
      "Network socket by design",
      "File contents in most cases"
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
      "Larger internal buffer reduces I/O operations",
      "It is newer in typical implementations",
      "It skips characters (primary approach)",
      "It uses less memory (default behavior)"
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
      "HTML page under normal conditions",
      "XML only under normal conditions",
      "Byte stream for storage or transmission",
      "String format in typical implementations"
    ],
    "answer": 2,
    "explanation": "Implements Serializable interface."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "static keyword means?",
    "options": [
      "Belongs to class, not instance",
      "Cannot be accessed (typical scenario)",
      "Belongs to instance by design",
      "Is private under normal conditions"
    ],
    "answer": 0,
    "explanation": "Static members shared across all instances."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "final class cannot be?",
    "options": [
      "Instantiated in practice",
      "Extended/inherited",
      "Used (primary approach)",
      "Imported (commonly used)"
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
      "Only concrete methods by design",
      "Only abstract methods (general case)",
      "No methods in typical implementations",
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
      "Parent class in most cases",
      "Previous object in most cases",
      "Static context in practice",
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
      "Create new object (standard definition)",
      "Define variable based on convention",
      "Call parent class constructor or method",
      "Handle exception in standard usage"
    ],
    "answer": 2,
    "explanation": "super() invokes parent constructor."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Hard",
    "question": "Dynamic method dispatch is?",
    "options": [
      "Constructor call under normal conditions",
      "Static method call based on convention",
      "Runtime resolution of overridden method call",
      "Compile-time resolution in most cases"
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
      "NullPointerException",
      "ArrayIndexOutOfBounds",
      "ClassCast by design",
      "StackOverflow in practice"
    ],
    "answer": 0,
    "explanation": "Optional wraps nullable value with safe methods."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Comparator interface is used for?",
    "options": [
      "Hashing (default behavior)",
      "Custom sorting logic",
      "Serialization by design",
      "Equality checking"
    ],
    "answer": 1,
    "explanation": "compare() method defines custom ordering."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "equals() vs == in Java?",
    "options": [
      "equals() checks content equality; == checks reference",
      "Both check reference in typical implementations",
      "Both check content in typical implementations",
      "No difference in typical implementations"
    ],
    "answer": 0,
    "explanation": "== compares memory addresses for objects."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Autoboxing in Java is?",
    "options": [
      "String to int in typical implementations",
      "Manual casting in typical implementations",
      "Object to primitive only in typical implementations",
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
      "No instances based on convention",
      "Abstract class (primary approach)",
      "Multiple instances (general case)",
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
      "Sorting as per specification",
      "One-to-many dependency notification",
      "Tree traversal (default behavior)",
      "Singleton pattern (typical scenario)"
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
      "Destroying objects (primary approach)",
      "Threading in typical implementations",
      "Sorting in typical implementations",
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
      "Database URL in typical implementations",
      "File system root (standard definition)",
      "Path where JVM looks for classes and packages",
      "Network path in typical implementations"
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
      "-1",
      "null",
      "0",
      "undefined"
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
      "Constructors",
      "Classes in most cases",
      "Abstract classes"
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
      "A special class representing a fixed set of constants",
      "A method in typical implementations",
      "A loop construct in typical implementations",
      "A variable type in typical implementations"
    ],
    "answer": 0,
    "explanation": "Enums provide type-safe constant definitions."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "var keyword in Java 10+?",
    "options": [
      "Local variable type inference",
      "Constant declaration by design",
      "Dynamic typing in standard usage",
      "Global variable (default behavior)"
    ],
    "answer": 0,
    "explanation": "Compiler infers type from initializer."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 >> 1);?",
    "options": [
      "4",
      "8",
      "5",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 6);?",
    "options": [
      "3",
      "2",
      "6",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 3);?",
    "options": [
      "15",
      "16",
      "19",
      "32"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 3);?",
    "options": [
      "76",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 5);?",
    "options": [
      "12",
      "11",
      "15",
      "24"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 | 6);?",
    "options": [
      "29",
      "33",
      "60",
      "30"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 3);?",
    "options": [
      "26",
      "46",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 6);?",
    "options": [
      "-1",
      "3",
      "72",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 << 1);?",
    "options": [
      "38",
      "37",
      "76",
      "41"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 38."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 2);?",
    "options": [
      "82",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 4);?",
    "options": [
      "0",
      "83",
      "3",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 6);?",
    "options": [
      "25",
      "21",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 5);?",
    "options": [
      "0",
      "-1",
      "3",
      "88"
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
      "34",
      "20",
      "16",
      "17"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 5);?",
    "options": [
      "-1",
      "84",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 >> 1);?",
    "options": [
      "4",
      "5",
      "1",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 >> 1);?",
    "options": [
      "13",
      "20",
      "9",
      "10"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 2);?",
    "options": [
      "1",
      "5",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 2);?",
    "options": [
      "58",
      "3",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 >> 1);?",
    "options": [
      "7",
      "8",
      "11",
      "16"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 >> 1);?",
    "options": [
      "15",
      "24",
      "11",
      "12"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(7 >> 1);?",
    "options": [
      "3",
      "2",
      "6",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 6);?",
    "options": [
      "14",
      "13",
      "28",
      "17"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 << 1);?",
    "options": [
      "96",
      "47",
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 5);?",
    "options": [
      "2",
      "3",
      "6",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 >> 1);?",
    "options": [
      "4",
      "8",
      "3",
      "7"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 % 3);?",
    "options": [
      "4",
      "2",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 2);?",
    "options": [
      "52",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 4);?",
    "options": [
      "7",
      "16",
      "8",
      "11"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 5);?",
    "options": [
      "56",
      "3",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 4);?",
    "options": [
      "7",
      "8",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 4);?",
    "options": [
      "14",
      "30",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 6);?",
    "options": [
      "18",
      "38",
      "19",
      "22"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 % 5);?",
    "options": [
      "4",
      "3",
      "7",
      "8"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 3);?",
    "options": [
      "3",
      "53",
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 6);?",
    "options": [
      "5",
      "4",
      "8",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 5);?",
    "options": [
      "18",
      "14",
      "15",
      "30"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 << 1);?",
    "options": [
      "80",
      "40",
      "39",
      "43"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 40."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 6);?",
    "options": [
      "15",
      "14",
      "18",
      "30"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 >> 1);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 & 4);?",
    "options": [
      "-1",
      "3",
      "66",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 >> 1);?",
    "options": [
      "9",
      "12",
      "8",
      "18"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 << 1);?",
    "options": [
      "19",
      "40",
      "23",
      "20"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 << 1);?",
    "options": [
      "84",
      "41",
      "42",
      "45"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 42."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 << 1);?",
    "options": [
      "60",
      "29",
      "30",
      "33"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 6);?",
    "options": [
      "14",
      "13",
      "28",
      "17"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 4);?",
    "options": [
      "14",
      "18",
      "15",
      "30"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 << 1);?",
    "options": [
      "88",
      "47",
      "44",
      "43"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 44."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 4);?",
    "options": [
      "2",
      "4",
      "1",
      "5"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 2);?",
    "options": [
      "14",
      "10",
      "22",
      "11"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 4);?",
    "options": [
      "3",
      "2",
      "6",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 6);?",
    "options": [
      "26",
      "22",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 5);?",
    "options": [
      "-1",
      "58",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 3);?",
    "options": [
      "10",
      "14",
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
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 2);?",
    "options": [
      "0",
      "3",
      "68",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 3);?",
    "options": [
      "3",
      "6",
      "6",
      "2"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 << 1);?",
    "options": [
      "36",
      "72",
      "35",
      "39"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 36."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 6);?",
    "options": [
      "15",
      "11",
      "24",
      "12"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 4);?",
    "options": [
      "13",
      "17",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 >> 1);?",
    "options": [
      "10",
      "14",
      "22",
      "11"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 << 1);?",
    "options": [
      "33",
      "34",
      "68",
      "37"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 34."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 >> 1);?",
    "options": [
      "3",
      "7",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 5);?",
    "options": [
      "-1",
      "0",
      "71",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 3);?",
    "options": [
      "25",
      "21",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 2);?",
    "options": [
      "84",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 3);?",
    "options": [
      "36",
      "18",
      "17",
      "21"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 3);?",
    "options": [
      "18",
      "22",
      "38",
      "19"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 % 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 << 1);?",
    "options": [
      "31",
      "64",
      "35",
      "32"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 << 1);?",
    "options": [
      "21",
      "17",
      "36",
      "18"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 18."
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 6);?",
    "options": [
      "17",
      "36",
      "18",
      "21"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 & 2);?",
    "options": [
      "5",
      "2",
      "4",
      "1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 5);?",
    "options": [
      "10",
      "22",
      "14",
      "11"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 4);?",
    "options": [
      "20",
      "19",
      "23",
      "40"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 >> 1);?",
    "options": [
      "10",
      "8",
      "5",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 >> 1);?",
    "options": [
      "6",
      "7",
      "14",
      "10"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 6);?",
    "options": [
      "26",
      "46",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 << 1);?",
    "options": [
      "52",
      "25",
      "29",
      "26"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 << 1);?",
    "options": [
      "92",
      "45",
      "49",
      "46"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 46."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 5);?",
    "options": [
      "8",
      "3",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 << 1);?",
    "options": [
      "11",
      "15",
      "24",
      "12"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 6);?",
    "options": [
      "10",
      "6",
      "7",
      "14"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 5);?",
    "options": [
      "18",
      "14",
      "15",
      "30"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 << 1);?",
    "options": [
      "20",
      "13",
      "10",
      "9"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 5);?",
    "options": [
      "4",
      "3",
      "7",
      "8"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 3);?",
    "options": [
      "11",
      "14",
      "10",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 % 5);?",
    "options": [
      "2",
      "1",
      "0",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 3);?",
    "options": [
      "22",
      "26",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 << 1);?",
    "options": [
      "56",
      "28",
      "27",
      "31"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 >> 1);?",
    "options": [
      "9",
      "12",
      "6",
      "5"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 5);?",
    "options": [
      "20",
      "24",
      "21",
      "42"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 5);?",
    "options": [
      "20",
      "42",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 2);?",
    "options": [
      "29",
      "52",
      "26",
      "25"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 2);?",
    "options": [
      "11",
      "12",
      "15",
      "24"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 4);?",
    "options": [
      "3",
      "0",
      "79",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 5);?",
    "options": [
      "8",
      "7",
      "11",
      "16"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 2);?",
    "options": [
      "16",
      "20",
      "17",
      "34"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 % 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 2);?",
    "options": [
      "1",
      "2",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 2);?",
    "options": [
      "-1",
      "83",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 & 5);?",
    "options": [
      "77",
      "3",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 2);?",
    "options": [
      "51",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 4);?",
    "options": [
      "0",
      "2",
      "4",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 << 1);?",
    "options": [
      "44",
      "22",
      "21",
      "25"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 << 1);?",
    "options": [
      "23",
      "27",
      "24",
      "48"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 4);?",
    "options": [
      "40",
      "20",
      "23",
      "19"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 6);?",
    "options": [
      "4",
      "7",
      "8",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 & 5);?",
    "options": [
      "4",
      "8",
      "10",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 3);?",
    "options": [
      "11",
      "22",
      "10",
      "14"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 & 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 3);?",
    "options": [
      "9",
      "12",
      "18",
      "8"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 6);?",
    "options": [
      "5",
      "8",
      "10",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 5);?",
    "options": [
      "34",
      "17",
      "16",
      "20"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 4);?",
    "options": [
      "-1",
      "3",
      "0",
      "73"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 5);?",
    "options": [
      "36",
      "17",
      "18",
      "21"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 << 1);?",
    "options": [
      "14",
      "17",
      "13",
      "28"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 6);?",
    "options": [
      "87",
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
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 3);?",
    "options": [
      "6",
      "2",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 >> 1);?",
    "options": [
      "9",
      "12",
      "6",
      "5"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 3);?",
    "options": [
      "3",
      "78",
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 2);?",
    "options": [
      "3",
      "0",
      "-1",
      "50"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 6);?",
    "options": [
      "5",
      "6",
      "12",
      "9"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 >> 1);?",
    "options": [
      "14",
      "10",
      "7",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 5);?",
    "options": [
      "5",
      "1",
      "2",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 2."
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 5);?",
    "options": [
      "26",
      "46",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 5);?",
    "options": [
      "22",
      "46",
      "23",
      "26"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 2);?",
    "options": [
      "16",
      "8",
      "7",
      "11"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 | 5);?",
    "options": [
      "29",
      "28",
      "32",
      "58"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 29."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 5);?",
    "options": [
      "12",
      "16",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 4);?",
    "options": [
      "12",
      "8",
      "18",
      "9"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 5);?",
    "options": [
      "52",
      "-1",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 5);?",
    "options": [
      "3",
      "6",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 6);?",
    "options": [
      "-1",
      "0",
      "66",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 2);?",
    "options": [
      "9",
      "13",
      "20",
      "10"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 2);?",
    "options": [
      "21",
      "18",
      "36",
      "17"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 4);?",
    "options": [
      "16",
      "12",
      "13",
      "26"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 2);?",
    "options": [
      "-1",
      "3",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 2);?",
    "options": [
      "4",
      "0",
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
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 >> 1);?",
    "options": [
      "6",
      "6",
      "2",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 5);?",
    "options": [
      "30",
      "15",
      "14",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 & 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 5);?",
    "options": [
      "-1",
      "0",
      "67",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 4);?",
    "options": [
      "54",
      "-1",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 3);?",
    "options": [
      "-1",
      "3",
      "0",
      "79"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 % 3);?",
    "options": [
      "66",
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 >> 1);?",
    "options": [
      "10",
      "22",
      "11",
      "14"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 4);?",
    "options": [
      "6",
      "12",
      "9",
      "5"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 6."
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 5);?",
    "options": [
      "22",
      "23",
      "46",
      "26"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 6);?",
    "options": [
      "0",
      "-1",
      "3",
      "60"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 6);?",
    "options": [
      "32",
      "15",
      "19",
      "16"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 4);?",
    "options": [
      "2",
      "6",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 4);?",
    "options": [
      "8",
      "7",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 4);?",
    "options": [
      "44",
      "22",
      "21",
      "25"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 6);?",
    "options": [
      "11",
      "8",
      "16",
      "7"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 2);?",
    "options": [
      "1",
      "2",
      "4",
      "0"
    ],
    "answer": 0,
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 4);?",
    "options": [
      "21",
      "42",
      "20",
      "24"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 5);?",
    "options": [
      "21",
      "42",
      "24",
      "20"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 6);?",
    "options": [
      "12",
      "16",
      "13",
      "26"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 6);?",
    "options": [
      "22",
      "46",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 3);?",
    "options": [
      "-1",
      "0",
      "51",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 2);?",
    "options": [
      "18",
      "36",
      "17",
      "21"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 % 6);?",
    "options": [
      "2",
      "3",
      "6",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 2);?",
    "options": [
      "3",
      "-1",
      "0",
      "50"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 2);?",
    "options": [
      "8",
      "3",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 2);?",
    "options": [
      "3",
      "-1",
      "0",
      "72"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 3);?",
    "options": [
      "-1",
      "3",
      "57",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 4);?",
    "options": [
      "3",
      "8",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 4);?",
    "options": [
      "28",
      "13",
      "14",
      "17"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 3);?",
    "options": [
      "12",
      "15",
      "11",
      "24"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 4);?",
    "options": [
      "4",
      "5",
      "1",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 2);?",
    "options": [
      "11",
      "22",
      "10",
      "14"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 3);?",
    "options": [
      "5",
      "12",
      "6",
      "9"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 4);?",
    "options": [
      "24",
      "12",
      "15",
      "11"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 6);?",
    "options": [
      "4",
      "10",
      "5",
      "8"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 2);?",
    "options": [
      "5",
      "1",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 | 3);?",
    "options": [
      "30",
      "26",
      "54",
      "27"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 5);?",
    "options": [
      "1",
      "2",
      "4",
      "0"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 | 2);?",
    "options": [
      "26",
      "25",
      "29",
      "52"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 5);?",
    "options": [
      "14",
      "13",
      "28",
      "17"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 4);?",
    "options": [
      "6",
      "7",
      "14",
      "10"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 4);?",
    "options": [
      "16",
      "19",
      "15",
      "32"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 5);?",
    "options": [
      "26",
      "12",
      "13",
      "16"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 3);?",
    "options": [
      "38",
      "18",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 6);?",
    "options": [
      "3",
      "0",
      "-1",
      "78"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 >> 1);?",
    "options": [
      "8",
      "12",
      "9",
      "18"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 3);?",
    "options": [
      "-1",
      "0",
      "74",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 5);?",
    "options": [
      "9",
      "12",
      "18",
      "8"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 4);?",
    "options": [
      "81",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 5);?",
    "options": [
      "4",
      "8",
      "10",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 2);?",
    "options": [
      "-1",
      "3",
      "88",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 | 4);?",
    "options": [
      "56",
      "28",
      "27",
      "31"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 5);?",
    "options": [
      "18",
      "14",
      "15",
      "30"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 3);?",
    "options": [
      "22",
      "23",
      "46",
      "26"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 5);?",
    "options": [
      "5",
      "10",
      "8",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 3);?",
    "options": [
      "6",
      "10",
      "7",
      "14"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 4);?",
    "options": [
      "64",
      "3",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 2);?",
    "options": [
      "52",
      "3",
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
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 6);?",
    "options": [
      "5",
      "9",
      "6",
      "12"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 5);?",
    "options": [
      "40",
      "19",
      "23",
      "20"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 3);?",
    "options": [
      "1",
      "5",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 2);?",
    "options": [
      "-1",
      "3",
      "61",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 2);?",
    "options": [
      "44",
      "21",
      "22",
      "25"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 5);?",
    "options": [
      "10",
      "9",
      "20",
      "13"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 5);?",
    "options": [
      "26",
      "13",
      "16",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 3);?",
    "options": [
      "16",
      "11",
      "7",
      "8"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 6);?",
    "options": [
      "21",
      "44",
      "22",
      "25"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 4);?",
    "options": [
      "-1",
      "0",
      "64",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 6);?",
    "options": [
      "18",
      "30",
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
    "question": "What will be the output of the Java printing statement: System.out.println(7 % 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 4);?",
    "options": [
      "1",
      "5",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 % 6);?",
    "options": [
      "8",
      "10",
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
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 4);?",
    "options": [
      "24",
      "12",
      "11",
      "15"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 2);?",
    "options": [
      "13",
      "16",
      "12",
      "26"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 % 4);?",
    "options": [
      "3",
      "6",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 3);?",
    "options": [
      "46",
      "26",
      "22",
      "23"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 4);?",
    "options": [
      "3",
      "8",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 2);?",
    "options": [
      "85",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 3);?",
    "options": [
      "3",
      "8",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 6);?",
    "options": [
      "14",
      "13",
      "28",
      "17"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 2);?",
    "options": [
      "6",
      "10",
      "7",
      "14"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 3);?",
    "options": [
      "0",
      "1",
      "4",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 5);?",
    "options": [
      "22",
      "44",
      "21",
      "25"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 5);?",
    "options": [
      "8",
      "4",
      "10",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 3);?",
    "options": [
      "46",
      "23",
      "22",
      "26"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 4);?",
    "options": [
      "-1",
      "0",
      "3",
      "87"
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
      "46",
      "26",
      "23"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 5);?",
    "options": [
      "5",
      "10",
      "4",
      "8"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 3);?",
    "options": [
      "22",
      "18",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(7 % 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 5);?",
    "options": [
      "5",
      "8",
      "4",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 & 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 5);?",
    "options": [
      "26",
      "23",
      "46",
      "22"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 & 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 6);?",
    "options": [
      "21",
      "24",
      "42",
      "20"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 2);?",
    "options": [
      "30",
      "14",
      "18",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 2);?",
    "options": [
      "13",
      "20",
      "9",
      "10"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 2);?",
    "options": [
      "21",
      "17",
      "18",
      "36"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 4);?",
    "options": [
      "17",
      "18",
      "21",
      "36"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 6);?",
    "options": [
      "22",
      "26",
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
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 6);?",
    "options": [
      "68",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 2);?",
    "options": [
      "44",
      "21",
      "22",
      "25"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 5);?",
    "options": [
      "26",
      "46",
      "22",
      "23"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 5);?",
    "options": [
      "8",
      "3",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 2);?",
    "options": [
      "0",
      "86",
      "3",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 5);?",
    "options": [
      "3",
      "4",
      "8",
      "7"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 5);?",
    "options": [
      "4",
      "5",
      "2",
      "1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 5);?",
    "options": [
      "19",
      "18",
      "38",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 << 1);?",
    "options": [
      "32",
      "15",
      "19",
      "16"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 2);?",
    "options": [
      "5",
      "4",
      "8",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(7 % 5);?",
    "options": [
      "2",
      "1",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 5);?",
    "options": [
      "2",
      "0",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 6);?",
    "options": [
      "15",
      "14",
      "18",
      "30"
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 3);?",
    "options": [
      "27",
      "54",
      "30",
      "26"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 6);?",
    "options": [
      "74",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 6);?",
    "options": [
      "3",
      "0",
      "82",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 5);?",
    "options": [
      "3",
      "0",
      "-1",
      "81"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 2);?",
    "options": [
      "0",
      "84",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 2);?",
    "options": [
      "28",
      "13",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 % 2);?",
    "options": [
      "1",
      "2",
      "4",
      "0"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 4);?",
    "options": [
      "46",
      "22",
      "23",
      "26"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 3);?",
    "options": [
      "5",
      "1",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 4);?",
    "options": [
      "1",
      "4",
      "5",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 2);?",
    "options": [
      "14",
      "10",
      "6",
      "7"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 2);?",
    "options": [
      "50",
      "-1",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 2);?",
    "options": [
      "23",
      "26",
      "46",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 3);?",
    "options": [
      "1",
      "5",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 4);?",
    "options": [
      "15",
      "24",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 6);?",
    "options": [
      "17",
      "34",
      "16",
      "20"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 3);?",
    "options": [
      "30",
      "14",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 2);?",
    "options": [
      "3",
      "-1",
      "0",
      "53"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 5);?",
    "options": [
      "3",
      "-1",
      "84",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 5);?",
    "options": [
      "5",
      "4",
      "2",
      "1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 2);?",
    "options": [
      "14",
      "11",
      "22",
      "10"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 6);?",
    "options": [
      "7",
      "8",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 6);?",
    "options": [
      "13",
      "17",
      "28",
      "14"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 5);?",
    "options": [
      "3",
      "8",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 3);?",
    "options": [
      "68",
      "-1",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 % 2);?",
    "options": [
      "2",
      "0",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 5);?",
    "options": [
      "7",
      "4",
      "8",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 & 6);?",
    "options": [
      "5",
      "6",
      "9",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 3);?",
    "options": [
      "0",
      "-1",
      "85",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 6);?",
    "options": [
      "30",
      "29",
      "33",
      "60"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 3);?",
    "options": [
      "28",
      "13",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 4);?",
    "options": [
      "13",
      "28",
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 3);?",
    "options": [
      "4",
      "2",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 6);?",
    "options": [
      "0",
      "-1",
      "84",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 6);?",
    "options": [
      "4",
      "1",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 4);?",
    "options": [
      "3",
      "-1",
      "67",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 3);?",
    "options": [
      "42",
      "24",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 2);?",
    "options": [
      "17",
      "13",
      "28",
      "14"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 & 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 4);?",
    "options": [
      "23",
      "19",
      "20",
      "40"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 6);?",
    "options": [
      "44",
      "22",
      "21",
      "25"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 4);?",
    "options": [
      "14",
      "18",
      "15",
      "30"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 6);?",
    "options": [
      "22",
      "44",
      "21",
      "25"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 6);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 3);?",
    "options": [
      "10",
      "4",
      "8",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 4);?",
    "options": [
      "0",
      "-1",
      "3",
      "51"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 4);?",
    "options": [
      "18",
      "19",
      "22",
      "38"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 2);?",
    "options": [
      "20",
      "21",
      "42",
      "24"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 5);?",
    "options": [
      "15",
      "19",
      "32",
      "16"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 2);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 6);?",
    "options": [
      "6",
      "12",
      "5",
      "9"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 3);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 6);?",
    "options": [
      "86",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 4);?",
    "options": [
      "5",
      "4",
      "1",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 4);?",
    "options": [
      "26",
      "46",
      "22",
      "23"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 3);?",
    "options": [
      "58",
      "3",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 4);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 2);?",
    "options": [
      "13",
      "17",
      "28",
      "14"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 6);?",
    "options": [
      "2",
      "6",
      "6",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 3);?",
    "options": [
      "0",
      "86",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 3);?",
    "options": [
      "13",
      "26",
      "12",
      "16"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 4);?",
    "options": [
      "4",
      "1",
      "5",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 3);?",
    "options": [
      "22",
      "14",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 4);?",
    "options": [
      "53",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 5);?",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);?",
    "options": [
      "25",
      "44",
      "22",
      "21"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);?",
    "options": [
      "6",
      "9",
      "5",
      "12"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 2);?",
    "options": [
      "40",
      "19",
      "23",
      "20"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 2);?",
    "options": [
      "2",
      "4",
      "1",
      "5"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 3);?",
    "options": [
      "4",
      "2",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 4);?",
    "options": [
      "3",
      "51",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 3);?",
    "options": [
      "18",
      "15",
      "14",
      "30"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 5);?",
    "options": [
      "16",
      "12",
      "26",
      "13"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 & 4);? (Set 1)",
    "options": [
      "4",
      "7",
      "8",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Garbage collection in Java? (Set 2)",
    "options": [
      "OS handles it in typical implementations",
      "Programmer must free memory (standard definition)",
      "JVM automatically reclaims unused object memory",
      "No memory management based on convention"
    ],
    "answer": 2,
    "explanation": "GC runs in background; objects without references are collected."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 << 1);? (Set 3)",
    "options": [
      "56",
      "31",
      "28",
      "27"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 6);? (Set 4)",
    "options": [
      "19",
      "16",
      "15",
      "32"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Enum in Java is? (Set 5)",
    "options": [
      "A special class representing a fixed set of constants",
      "A loop construct in typical implementations",
      "A variable type in typical implementations",
      "A method in typical implementations"
    ],
    "answer": 0,
    "explanation": "Enums provide type-safe constant definitions."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Method overriding is? (Set 6)",
    "options": [
      "Different method name in typical implementations",
      "Child class redefines parent method with same signature",
      "Static methods in typical implementations",
      "Same class different params as per specification"
    ],
    "answer": 1,
    "explanation": "Runtime (dynamic) polymorphism."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 5);? (Set 7)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 2);? (Set 8)",
    "options": [
      "7",
      "16",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 6);? (Set 9)",
    "options": [
      "8",
      "18",
      "9",
      "12"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 5);? (Set 10)",
    "options": [
      "32",
      "29",
      "28",
      "58"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 29."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 2);? (Set 11)",
    "options": [
      "3",
      "-1",
      "0",
      "52"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 6);? (Set 12)",
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
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "static keyword means? (Set 13)",
    "options": [
      "Belongs to class, not instance",
      "Belongs to instance by design",
      "Is private (general case)",
      "Cannot be accessed (primary approach)"
    ],
    "answer": 0,
    "explanation": "Static members shared across all instances."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 % 4);? (Set 14)",
    "options": [
      "4",
      "2",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 6);? (Set 15)",
    "options": [
      "2",
      "3",
      "6",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 2);? (Set 16)",
    "options": [
      "18",
      "8",
      "12",
      "9"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 4);? (Set 17)",
    "options": [
      "16",
      "26",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 5);? (Set 18)",
    "options": [
      "20",
      "24",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 4);? (Set 19)",
    "options": [
      "-1",
      "81",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 6);? (Set 20)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 5);? (Set 21)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 3);? (Set 22)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 2);? (Set 23)",
    "options": [
      "24",
      "12",
      "11",
      "15"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 5);? (Set 24)",
    "options": [
      "6",
      "7",
      "10",
      "14"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 4);? (Set 25)",
    "options": [
      "15",
      "14",
      "18",
      "30"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 4);? (Set 26)",
    "options": [
      "2",
      "0",
      "1",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 6);? (Set 27)",
    "options": [
      "3",
      "-1",
      "78",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 5);? (Set 28)",
    "options": [
      "8",
      "4",
      "5",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 % 6);? (Set 29)",
    "options": [
      "-1",
      "0",
      "3",
      "74"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 5);? (Set 30)",
    "options": [
      "8",
      "7",
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
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 5);? (Set 31)",
    "options": [
      "13",
      "16",
      "12",
      "26"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 6);? (Set 32)",
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
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Checked exceptions are? (Set 33)",
    "options": [
      "Verified at compile time",
      "OS-level errors (commonly used)",
      "Runtime only in most cases",
      "Never checked by design"
    ],
    "answer": 0,
    "explanation": "Must be caught or declared with throws."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 4);? (Set 34)",
    "options": [
      "64",
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
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 4);? (Set 35)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 4);? (Set 36)",
    "options": [
      "12",
      "16",
      "26",
      "13"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 4);? (Set 37)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 2);? (Set 38)",
    "options": [
      "17",
      "14",
      "28",
      "13"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 5);? (Set 39)",
    "options": [
      "46",
      "22",
      "23",
      "26"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 2);? (Set 40)",
    "options": [
      "3",
      "-1",
      "51",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 3);? (Set 41)",
    "options": [
      "3",
      "6",
      "6",
      "2"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 3);? (Set 42)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 6);? (Set 43)",
    "options": [
      "3",
      "4",
      "7",
      "8"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 4);? (Set 44)",
    "options": [
      "26",
      "12",
      "16",
      "13"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 2);? (Set 45)",
    "options": [
      "-1",
      "3",
      "72",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 << 1);? (Set 46)",
    "options": [
      "84",
      "45",
      "41",
      "42"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 42."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 6);? (Set 47)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 5);? (Set 48)",
    "options": [
      "26",
      "22",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 2);? (Set 49)",
    "options": [
      "14",
      "10",
      "7",
      "6"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 3);? (Set 50)",
    "options": [
      "6",
      "6",
      "2",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 4);? (Set 51)",
    "options": [
      "7",
      "4",
      "8",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 2);? (Set 52)",
    "options": [
      "20",
      "13",
      "10",
      "9"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 5);? (Set 53)",
    "options": [
      "11",
      "7",
      "16",
      "8"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 5);? (Set 54)",
    "options": [
      "6",
      "6",
      "3",
      "2"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 6);? (Set 55)",
    "options": [
      "18",
      "14",
      "30",
      "15"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 3);? (Set 56)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 3);? (Set 57)",
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
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Functional interface has? (Set 58)",
    "options": [
      "No methods (widely accepted)",
      "Exactly one abstract method",
      "Only default methods in practice",
      "Multiple abstract methods"
    ],
    "answer": 1,
    "explanation": "@FunctionalInterface annotation enforces this."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 6);? (Set 59)",
    "options": [
      "2",
      "0",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 5);? (Set 60)",
    "options": [
      "22",
      "26",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 6);? (Set 61)",
    "options": [
      "23",
      "22",
      "26",
      "46"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 2);? (Set 62)",
    "options": [
      "11",
      "12",
      "15",
      "24"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "ArrayList vs LinkedList: random access? (Set 63)",
    "options": [
      "LinkedList is faster (general case)",
      "ArrayList is O(1), LinkedList is O(n)",
      "Both O(n) under normal conditions",
      "Both O(1) (standard definition)"
    ],
    "answer": 1,
    "explanation": "ArrayList uses contiguous array; LinkedList traverses nodes."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 2);? (Set 64)",
    "options": [
      "22",
      "19",
      "38",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 6);? (Set 4) (Set 65)",
    "options": [
      "15",
      "19",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 2);? (Set 40) (Set 66)",
    "options": [
      "-1",
      "51",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 2);? (Set 67)",
    "options": [
      "14",
      "17",
      "13",
      "28"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 4);? (Set 19) (Set 68)",
    "options": [
      "81",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 3);? (Set 69)",
    "options": [
      "27",
      "26",
      "30",
      "54"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 4);? (Set 70)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 5);? (Set 71)",
    "options": [
      "20",
      "19",
      "23",
      "40"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 5);? (Set 72)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 5);? (Set 73)",
    "options": [
      "18",
      "8",
      "12",
      "9"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "ArrayList vs LinkedList: random access? (Set 74)",
    "options": [
      "LinkedList is faster (primary approach)",
      "Both O(n) (standard definition)",
      "Both O(1) under normal conditions",
      "ArrayList is O(1), LinkedList is O(n)"
    ],
    "answer": 3,
    "explanation": "ArrayList uses contiguous array; LinkedList traverses nodes."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 6);? (Set 75)",
    "options": [
      "4",
      "0",
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 | 5);? (Set 76)",
    "options": [
      "23",
      "22",
      "46",
      "26"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 2);? (Set 77)",
    "options": [
      "21",
      "44",
      "22",
      "25"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 6);? (Set 78)",
    "options": [
      "86",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 3);? (Set 79)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 >> 1);? (Set 80)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 3);? (Set 81)",
    "options": [
      "-1",
      "0",
      "85",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 5);? (Set 82)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 6);? (Set 83)",
    "options": [
      "14",
      "22",
      "11",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 4);? (Set 84)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 2);? (Set 85)",
    "options": [
      "23",
      "22",
      "26",
      "46"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 5);? (Set 86)",
    "options": [
      "81",
      "3",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 2);? (Set 87)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 4);? (Set 88)",
    "options": [
      "31",
      "27",
      "28",
      "56"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 3);? (Set 89)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 2);? (Set 90)",
    "options": [
      "3",
      "0",
      "63",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 5);? (Set 71) (Set 91)",
    "options": [
      "23",
      "19",
      "20",
      "40"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 5);? (Set 92)",
    "options": [
      "6",
      "7",
      "14",
      "10"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 4);? (Set 93)",
    "options": [
      "44",
      "22",
      "25",
      "21"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 5);? (Set 71) (Set 91) (Set 94)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 >> 1);? (Set 95)",
    "options": [
      "10",
      "20",
      "13",
      "9"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);? (Set 96)",
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
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Checked exceptions are? (Set 97)",
    "options": [
      "OS-level errors by design",
      "Runtime only in standard usage",
      "Never checked (commonly used)",
      "Verified at compile time"
    ],
    "answer": 3,
    "explanation": "Must be caught or declared with throws."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 4);? (Set 98)",
    "options": [
      "28",
      "14",
      "17",
      "13"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 2);? (Set 99)",
    "options": [
      "10",
      "7",
      "6",
      "14"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 | 4);? (Set 100)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 5);? (Set 101)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 4);? (Set 102)",
    "options": [
      "11",
      "24",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 5);? (Set 103)",
    "options": [
      "18",
      "15",
      "14",
      "30"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 4);? (Set 104)",
    "options": [
      "4",
      "7",
      "8",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 6);? (Set 105)",
    "options": [
      "14",
      "10",
      "11",
      "22"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 6);? (Set 106)",
    "options": [
      "3",
      "8",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 6);? (Set 55) (Set 107)",
    "options": [
      "15",
      "18",
      "30",
      "14"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 6);? (Set 108)",
    "options": [
      "22",
      "46",
      "23",
      "26"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Method overriding is? (Set 6) (Set 109)",
    "options": [
      "Child class redefines parent method with same signature",
      "Static methods in typical implementations",
      "Same class different params in typical implementations",
      "Different method name in typical implementations"
    ],
    "answer": 0,
    "explanation": "Runtime (dynamic) polymorphism."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 5);? (Set 24) (Set 110)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 2);? (Set 111)",
    "options": [
      "6",
      "12",
      "5",
      "9"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 6);? (Set 83) (Set 112)",
    "options": [
      "11",
      "10",
      "14",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 5);? (Set 30) (Set 113)",
    "options": [
      "3",
      "8",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "HashMap allows? (Set 114)",
    "options": [
      "No nulls under normal conditions",
      "Multiple null keys (primary approach)",
      "Only null values (typical scenario)",
      "One null key and multiple null values"
    ],
    "answer": 3,
    "explanation": "HashMap permits one null key in its implementation."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 2);? (Set 115)",
    "options": [
      "0",
      "-1",
      "3",
      "72"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 3);? (Set 116)",
    "options": [
      "2",
      "3",
      "6",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 6);? (Set 105) (Set 117)",
    "options": [
      "14",
      "10",
      "22",
      "11"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 3);? (Set 118)",
    "options": [
      "2",
      "4",
      "1",
      "5"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 >> 1);? (Set 119)",
    "options": [
      "6",
      "2",
      "6",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 5);? (Set 120)",
    "options": [
      "26",
      "13",
      "16",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 6);? (Set 121)",
    "options": [
      "3",
      "72",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 3);? (Set 122)",
    "options": [
      "6",
      "10",
      "14",
      "7"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Multithreading",
    "difficulty": "Medium",
    "question": "Executor framework provides? (Set 123)",
    "options": [
      "File handling (commonly used)",
      "Thread pool management",
      "Network calls in most cases",
      "Database access in practice"
    ],
    "answer": 1,
    "explanation": "Manages thread lifecycle efficiently."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 2);? (Set 124)",
    "options": [
      "3",
      "-1",
      "0",
      "72"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 5);? (Set 125)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(7 << 1);? (Set 126)",
    "options": [
      "28",
      "14",
      "13",
      "17"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 2);? (Set 127)",
    "options": [
      "0",
      "53",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 6);? (Set 128)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 2);? (Set 129)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 3);? (Set 130)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 4);? (Set 131)",
    "options": [
      "0",
      "-1",
      "64",
      "3"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Garbage collection in Java? (Set 132)",
    "options": [
      "Programmer must free memory (standard definition)",
      "OS handles it in typical implementations",
      "JVM automatically reclaims unused object memory",
      "No memory management as per specification"
    ],
    "answer": 2,
    "explanation": "GC runs in background; objects without references are collected."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 5);? (Set 125) (Set 133)",
    "options": [
      "6",
      "14",
      "10",
      "7"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 % 2);? (Set 134)",
    "options": [
      "61",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 2);? (Set 135)",
    "options": [
      "3",
      "-1",
      "0",
      "51"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 >> 1);? (Set 136)",
    "options": [
      "9",
      "13",
      "10",
      "20"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 3);? (Set 137)",
    "options": [
      "11",
      "12",
      "15",
      "24"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 3);? (Set 138)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 2);? (Set 139)",
    "options": [
      "0",
      "-1",
      "3",
      "53"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 4);? (Set 140)",
    "options": [
      "23",
      "20",
      "19",
      "40"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 4);? (Set 141)",
    "options": [
      "6",
      "6",
      "3",
      "2"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 6);? (Set 142)",
    "options": [
      "30",
      "29",
      "60",
      "33"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 30."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JDK includes? (Set 143)",
    "options": [
      "Only libraries under normal conditions",
      "JRE + development tools (compiler, debugger)",
      "Only editor in typical implementations",
      "Only JVM in typical implementations"
    ],
    "answer": 1,
    "explanation": "JDK is the full development kit."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Constructor is called when? (Set 144)",
    "options": [
      "Method is called (primary approach)",
      "Class is loaded under normal conditions",
      "Variable is declared (typical scenario)",
      "Object is created using new keyword"
    ],
    "answer": 3,
    "explanation": "Constructors initialize object state."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 3);? (Set 145)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 2);? (Set 146)",
    "options": [
      "58",
      "-1",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 2);? (Set 147)",
    "options": [
      "36",
      "17",
      "18",
      "21"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 5);? (Set 148)",
    "options": [
      "12",
      "26",
      "13",
      "16"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 4);? (Set 149)",
    "options": [
      "12",
      "24",
      "15",
      "11"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 6);? (Set 150)",
    "options": [
      "28",
      "14",
      "13",
      "17"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 5);? (Set 125) (Set 151)",
    "options": [
      "6",
      "14",
      "10",
      "7"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JVM stands for? (Set 152)",
    "options": [
      "Java Virtual Machine",
      "Java Visual Maker",
      "Java Version Module",
      "Java Variable Manager"
    ],
    "answer": 0,
    "explanation": "JVM executes Java bytecode on any platform."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 2);? (Set 90) (Set 153)",
    "options": [
      "63",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 << 1);? (Set 154)",
    "options": [
      "45",
      "42",
      "84",
      "41"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 42."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 2);? (Set 124) (Set 155)",
    "options": [
      "0",
      "3",
      "72",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 % 5);? (Set 156)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 4);? (Set 34) (Set 157)",
    "options": [
      "3",
      "0",
      "-1",
      "64"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 3);? (Set 158)",
    "options": [
      "11",
      "22",
      "14",
      "10"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 2);? (Set 159)",
    "options": [
      "14",
      "10",
      "6",
      "7"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 ^ 6);? (Set 160)",
    "options": [
      "1",
      "0",
      "2",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 2);? (Set 161)",
    "options": [
      "3",
      "0",
      "-1",
      "50"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 4);? (Set 162)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 5);? (Set 92) (Set 163)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 2);? (Set 164)",
    "options": [
      "-1",
      "0",
      "3",
      "83"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 5);? (Set 71) (Set 91) (Set 165)",
    "options": [
      "20",
      "19",
      "23",
      "40"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 6);? (Set 166)",
    "options": [
      "87",
      "-1",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 << 1);? (Set 167)",
    "options": [
      "28",
      "27",
      "56",
      "31"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 3);? (Set 168)",
    "options": [
      "18",
      "19",
      "38",
      "22"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 5);? (Set 103) (Set 169)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 4);? (Set 26) (Set 170)",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 2);? (Set 52) (Set 171)",
    "options": [
      "20",
      "13",
      "10",
      "9"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 | 2);? (Set 172)",
    "options": [
      "52",
      "29",
      "25",
      "26"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 5);? (Set 173)",
    "options": [
      "22",
      "26",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 2);? (Set 67) (Set 174)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 5);? (Set 31) (Set 175)",
    "options": [
      "16",
      "13",
      "26",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JVM stands for? (Set 152) (Set 176)",
    "options": [
      "Java Variable Manager",
      "Java Virtual Machine",
      "Java Version Module",
      "Java Visual Maker"
    ],
    "answer": 1,
    "explanation": "JVM executes Java bytecode on any platform."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Polymorphism means? (Set 177)",
    "options": [
      "No methods in typical implementations",
      "Static binding always based on convention",
      "One method one behavior as per specification",
      "Same method behaves differently based on context"
    ],
    "answer": 3,
    "explanation": "Achieved via overloading and overriding."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 6);? (Set 178)",
    "options": [
      "4",
      "3",
      "7",
      "8"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Multithreading",
    "difficulty": "Medium",
    "question": "Executor framework provides? (Set 123) (Set 179)",
    "options": [
      "Thread pool management",
      "File handling (general case)",
      "Network calls (general case)",
      "Database access in practice"
    ],
    "answer": 0,
    "explanation": "Manages thread lifecycle efficiently."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 6);? (Set 180)",
    "options": [
      "7",
      "8",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 4);? (Set 181)",
    "options": [
      "20",
      "19",
      "23",
      "40"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 >> 1);? (Set 182)",
    "options": [
      "6",
      "9",
      "5",
      "12"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 6);? (Set 12) (Set 183)",
    "options": [
      "30",
      "18",
      "15",
      "14"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 2);? (Set 184)",
    "options": [
      "32",
      "16",
      "15",
      "19"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 5);? (Set 185)",
    "options": [
      "16",
      "13",
      "26",
      "12"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 6);? (Set 186)",
    "options": [
      "5",
      "1",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 6);? (Set 187)",
    "options": [
      "2",
      "5",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 2);? (Set 188)",
    "options": [
      "3",
      "85",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 4);? (Set 189)",
    "options": [
      "24",
      "11",
      "15",
      "12"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 4);? (Set 141) (Set 190)",
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
    "question": "Polymorphism means? (Set 191)",
    "options": [
      "One method one behavior in typical implementations",
      "Static binding always (standard definition)",
      "Same method behaves differently based on context",
      "No methods in typical implementations"
    ],
    "answer": 2,
    "explanation": "Achieved via overloading and overriding."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 4);? (Set 192)",
    "options": [
      "18",
      "14",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 6);? (Set 193)",
    "options": [
      "2",
      "6",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 6);? (Set 194)",
    "options": [
      "3",
      "-1",
      "66",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 5);? (Set 195)",
    "options": [
      "6",
      "2",
      "6",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 % 2);? (Set 40) (Set 196)",
    "options": [
      "-1",
      "51",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Enum in Java is? (Set 197)",
    "options": [
      "A special class representing a fixed set of constants",
      "A variable type in typical implementations",
      "A method in typical implementations",
      "A loop construct in typical implementations"
    ],
    "answer": 0,
    "explanation": "Enums provide type-safe constant definitions."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 6);? (Set 198)",
    "options": [
      "0",
      "84",
      "3",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 2);? (Set 45) (Set 199)",
    "options": [
      "3",
      "0",
      "-1",
      "72"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 4);? (Set 36) (Set 200)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 2);? (Set 201)",
    "options": [
      "-1",
      "3",
      "0",
      "52"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 2);? (Set 202)",
    "options": [
      "36",
      "17",
      "18",
      "21"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 6);? (Set 203)",
    "options": [
      "20",
      "34",
      "16",
      "17"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 4);? (Set 204)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 6);? (Set 205)",
    "options": [
      "3",
      "82",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 2);? (Set 87) (Set 206)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 2);? (Set 85) (Set 207)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 5);? (Set 208)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 2);? (Set 209)",
    "options": [
      "12",
      "5",
      "9",
      "6"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 & 3);? (Set 210)",
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
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Inheritance allows? (Set 211)",
    "options": [
      "A class to inherit properties of another class",
      "Creating objects in typical implementations",
      "Thread creation in typical implementations",
      "Handling exceptions (standard definition)"
    ],
    "answer": 0,
    "explanation": "Child class extends parent class."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "static keyword means? (Set 13) (Set 212)",
    "options": [
      "Is private (widely accepted)",
      "Belongs to class, not instance",
      "Cannot be accessed (general case)",
      "Belongs to instance (commonly used)"
    ],
    "answer": 1,
    "explanation": "Static members shared across all instances."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 4);? (Set 162) (Set 213)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 4);? (Set 44) (Set 214)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 5);? (Set 39) (Set 215)",
    "options": [
      "46",
      "22",
      "26",
      "23"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 6);? (Set 180) (Set 216)",
    "options": [
      "8",
      "7",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 << 1);? (Set 217)",
    "options": [
      "17",
      "21",
      "18",
      "36"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 5);? (Set 218)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 << 1);? (Set 3) (Set 219)",
    "options": [
      "28",
      "31",
      "27",
      "56"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 % 2);? (Set 220)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 3);? (Set 221)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 2);? (Set 147) (Set 222)",
    "options": [
      "18",
      "17",
      "21",
      "36"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 5);? (Set 223)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 6);? (Set 78) (Set 224)",
    "options": [
      "-1",
      "3",
      "86",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 ^ 4);? (Set 26) (Set 170) (Set 225)",
    "options": [
      "1",
      "4",
      "2",
      "0"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 & 3);? (Set 226)",
    "options": [
      "6",
      "6",
      "2",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 3);? (Set 56) (Set 227)",
    "options": [
      "1",
      "5",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 << 1);? (Set 228)",
    "options": [
      "11",
      "12",
      "15",
      "24"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);? (Set 96) (Set 229)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 >> 1);? (Set 136) (Set 230)",
    "options": [
      "10",
      "9",
      "20",
      "13"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 >> 1);? (Set 231)",
    "options": [
      "16",
      "7",
      "11",
      "8"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 >> 1);? (Set 232)",
    "options": [
      "7",
      "10",
      "14",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 5);? (Set 233)",
    "options": [
      "8",
      "10",
      "5",
      "4"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 6);? (Set 234)",
    "options": [
      "8",
      "3",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 4);? (Set 235)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 6);? (Set 236)",
    "options": [
      "22",
      "21",
      "44",
      "25"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 4);? (Set 237)",
    "options": [
      "18",
      "15",
      "30",
      "14"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 6);? (Set 83) (Set 238)",
    "options": [
      "14",
      "22",
      "11",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 3);? (Set 239)",
    "options": [
      "25",
      "44",
      "22",
      "21"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "ArrayList vs LinkedList: random access? (Set 63) (Set 240)",
    "options": [
      "LinkedList is faster (default behavior)",
      "Both O(1) under normal conditions",
      "ArrayList is O(1), LinkedList is O(n)",
      "Both O(n) in typical implementations"
    ],
    "answer": 2,
    "explanation": "ArrayList uses contiguous array; LinkedList traverses nodes."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 4);? (Set 241)",
    "options": [
      "10",
      "14",
      "6",
      "7"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 % 2);? (Set 242)",
    "options": [
      "84",
      "0",
      "3",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Abstraction is implemented using? (Set 243)",
    "options": [
      "Variables (typical scenario)",
      "Concrete classes only by design",
      "Abstract classes and interfaces",
      "Loops (default behavior)"
    ],
    "answer": 2,
    "explanation": "Hides implementation, shows only functionality."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 3);? (Set 138) (Set 244)",
    "options": [
      "1",
      "4",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 2);? (Set 245)",
    "options": [
      "-1",
      "3",
      "58",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 3);? (Set 246)",
    "options": [
      "38",
      "18",
      "19",
      "22"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 4);? (Set 247)",
    "options": [
      "51",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 5);? (Set 248)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 3);? (Set 145) (Set 249)",
    "options": [
      "23",
      "46",
      "26",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 3);? (Set 250)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 6);? (Set 9) (Set 251)",
    "options": [
      "9",
      "18",
      "12",
      "8"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 4);? (Set 192) (Set 252)",
    "options": [
      "18",
      "15",
      "30",
      "14"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 3);? (Set 122) (Set 253)",
    "options": [
      "7",
      "10",
      "14",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 4);? (Set 254)",
    "options": [
      "4",
      "2",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 2);? (Set 255)",
    "options": [
      "0",
      "-1",
      "3",
      "85"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 3);? (Set 168) (Set 256)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 4);? (Set 257)",
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
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "ArrayList vs LinkedList: random access? (Set 74) (Set 258)",
    "options": [
      "ArrayList is O(1), LinkedList is O(n)",
      "LinkedList is faster (typical scenario)",
      "Both O(n) as per specification",
      "Both O(1) (standard definition)"
    ],
    "answer": 0,
    "explanation": "ArrayList uses contiguous array; LinkedList traverses nodes."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 3);? (Set 239) (Set 259)",
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
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Garbage collection in Java? (Set 132) (Set 260)",
    "options": [
      "JVM automatically reclaims unused object memory",
      "Programmer must free memory (standard definition)",
      "No memory management (standard definition)",
      "OS handles it in typical implementations"
    ],
    "answer": 0,
    "explanation": "GC runs in background; objects without references are collected."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 6);? (Set 108) (Set 261)",
    "options": [
      "26",
      "23",
      "46",
      "22"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JVM stands for? (Set 262)",
    "options": [
      "Java Variable Manager",
      "Java Version Module",
      "Java Virtual Machine",
      "Java Visual Maker"
    ],
    "answer": 2,
    "explanation": "JVM executes Java bytecode on any platform."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 2);? (Set 263)",
    "options": [
      "52",
      "3",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 3);? (Set 264)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 3);? (Set 42) (Set 265)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 3);? (Set 266)",
    "options": [
      "2",
      "1",
      "0",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 4);? (Set 51) (Set 267)",
    "options": [
      "8",
      "7",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 2);? (Set 87) (Set 268)",
    "options": [
      "2",
      "0",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 | 2);? (Set 269)",
    "options": [
      "44",
      "25",
      "22",
      "21"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 6);? (Set 198) (Set 270)",
    "options": [
      "-1",
      "0",
      "3",
      "84"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 6);? (Set 178) (Set 271)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 3);? (Set 272)",
    "options": [
      "20",
      "9",
      "10",
      "13"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 6);? (Set 273)",
    "options": [
      "44",
      "22",
      "21",
      "25"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 6);? (Set 203) (Set 274)",
    "options": [
      "16",
      "20",
      "34",
      "17"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 3);? (Set 79) (Set 275)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 6);? (Set 32) (Set 276)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 6);? (Set 47) (Set 277)",
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
    "question": "this keyword refers to? (Set 278)",
    "options": [
      "Previous object by design",
      "Static context in most cases",
      "Parent class in standard usage",
      "Current object instance"
    ],
    "answer": 3,
    "explanation": "this resolves ambiguity between fields and parameters."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 << 1);? (Set 279)",
    "options": [
      "56",
      "27",
      "31",
      "28"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 2);? (Set 280)",
    "options": [
      "13",
      "28",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 6);? (Set 142) (Set 281)",
    "options": [
      "33",
      "60",
      "30",
      "29"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);? (Set 96) (Set 282)",
    "options": [
      "44",
      "22",
      "21",
      "25"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 5);? (Set 283)",
    "options": [
      "6",
      "6",
      "2",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 5);? (Set 284)",
    "options": [
      "42",
      "24",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 6);? (Set 285)",
    "options": [
      "4",
      "5",
      "8",
      "10"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 ^ 5);? (Set 195) (Set 286)",
    "options": [
      "3",
      "6",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 3);? (Set 287)",
    "options": [
      "-1",
      "3",
      "58",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 5);? (Set 288)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 5);? (Set 39) (Set 289)",
    "options": [
      "46",
      "23",
      "26",
      "22"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JVM stands for? (Set 290)",
    "options": [
      "Java Visual Maker",
      "Java Version Module",
      "Java Variable Manager",
      "Java Virtual Machine"
    ],
    "answer": 3,
    "explanation": "JVM executes Java bytecode on any platform."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 3);? (Set 291)",
    "options": [
      "38",
      "18",
      "19",
      "22"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "What is the default value of an int in Java? (Set 292)",
    "options": [
      "undefined",
      "-1",
      "0",
      "null"
    ],
    "answer": 2,
    "explanation": "Primitive int defaults to 0 in Java."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 2);? (Set 8) (Set 293)",
    "options": [
      "7",
      "8",
      "11",
      "16"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Functional interface has? (Set 58) (Set 294)",
    "options": [
      "Multiple abstract methods",
      "Exactly one abstract method",
      "Only default methods by design",
      "No methods in standard usage"
    ],
    "answer": 1,
    "explanation": "@FunctionalInterface annotation enforces this."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 2);? (Set 295)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 >> 1);? (Set 296)",
    "options": [
      "10",
      "5",
      "8",
      "4"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 3);? (Set 116) (Set 297)",
    "options": [
      "6",
      "6",
      "2",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 2);? (Set 67) (Set 298)",
    "options": [
      "17",
      "28",
      "14",
      "13"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 2);? (Set 299)",
    "options": [
      "34",
      "16",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 4);? (Set 300)",
    "options": [
      "26",
      "16",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 4);? (Set 192) (Set 301)",
    "options": [
      "30",
      "14",
      "15",
      "18"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);? (Set 96) (Set 282) (Set 302)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 3);? (Set 116) (Set 303)",
    "options": [
      "6",
      "3",
      "6",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 6);? (Set 304)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 5);? (Set 39) (Set 305)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 5);? (Set 306)",
    "options": [
      "8",
      "4",
      "10",
      "5"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 2);? (Set 307)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 % 6);? (Set 75) (Set 308)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 6);? (Set 309)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 5);? (Set 148) (Set 310)",
    "options": [
      "26",
      "13",
      "12",
      "16"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 2);? (Set 311)",
    "options": [
      "1",
      "5",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JVM stands for? (Set 262) (Set 312)",
    "options": [
      "Java Version Module",
      "Java Virtual Machine",
      "Java Visual Maker",
      "Java Variable Manager"
    ],
    "answer": 1,
    "explanation": "JVM executes Java bytecode on any platform."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 << 1);? (Set 313)",
    "options": [
      "36",
      "21",
      "17",
      "18"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 4);? (Set 314)",
    "options": [
      "17",
      "28",
      "14",
      "13"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 2);? (Set 315)",
    "options": [
      "36",
      "21",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 3);? (Set 57) (Set 316)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 2);? (Set 311) (Set 317)",
    "options": [
      "1",
      "4",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 5);? (Set 53) (Set 318)",
    "options": [
      "8",
      "16",
      "11",
      "7"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 2);? (Set 319)",
    "options": [
      "16",
      "19",
      "15",
      "32"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 6);? (Set 4) (Set 65) (Set 320)",
    "options": [
      "16",
      "19",
      "32",
      "15"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 6);? (Set 43) (Set 321)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 6);? (Set 273) (Set 322)",
    "options": [
      "21",
      "44",
      "22",
      "25"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 3);? (Set 246) (Set 323)",
    "options": [
      "22",
      "19",
      "38",
      "18"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 5);? (Set 101) (Set 324)",
    "options": [
      "20",
      "42",
      "24",
      "21"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 5);? (Set 325)",
    "options": [
      "25",
      "44",
      "21",
      "22"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 6);? (Set 326)",
    "options": [
      "5",
      "10",
      "8",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 4);? (Set 327)",
    "options": [
      "16",
      "32",
      "19",
      "15"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 6);? (Set 328)",
    "options": [
      "7",
      "8",
      "4",
      "3"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 % 2);? (Set 329)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 3);? (Set 116) (Set 297) (Set 330)",
    "options": [
      "6",
      "3",
      "6",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 >> 1);? (Set 331)",
    "options": [
      "11",
      "16",
      "8",
      "7"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 << 1);? (Set 332)",
    "options": [
      "96",
      "47",
      "51",
      "48"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 48."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 6);? (Set 333)",
    "options": [
      "8",
      "12",
      "9",
      "18"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 ^ 5);? (Set 71) (Set 91) (Set 165) (Set 334)",
    "options": [
      "23",
      "19",
      "20",
      "40"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 2);? (Set 124) (Set 155) (Set 335)",
    "options": [
      "72",
      "3",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Method overriding is? (Set 336)",
    "options": [
      "Static methods in typical implementations",
      "Same class different params (standard definition)",
      "Different method name in typical implementations",
      "Child class redefines parent method with same signature"
    ],
    "answer": 3,
    "explanation": "Runtime (dynamic) polymorphism."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 5);? (Set 24) (Set 337)",
    "options": [
      "14",
      "7",
      "10",
      "6"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);? (Set 338)",
    "options": [
      "6",
      "9",
      "5",
      "12"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 2);? (Set 124) (Set 155) (Set 335) (Set 339)",
    "options": [
      "72",
      "3",
      "-1",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Heap memory stores? (Set 340)",
    "options": [
      "Method calls (primary approach)",
      "Primitives only (standard definition)",
      "Objects and instance variables",
      "Local variables only (general case)"
    ],
    "answer": 2,
    "explanation": "Shared heap stores dynamically allocated objects."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 & 5);? (Set 341)",
    "options": [
      "0",
      "3",
      "-1",
      "56"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Java is which type of language? (Set 342)",
    "options": [
      "Functional only",
      "Object-Oriented",
      "Assembly by design",
      "Procedural only"
    ],
    "answer": 1,
    "explanation": "Java follows OOP principles: encapsulation, inheritance, polymorphism, abstraction."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 2);? (Set 52) (Set 171) (Set 343)",
    "options": [
      "13",
      "10",
      "20",
      "9"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 6);? (Set 344)",
    "options": [
      "18",
      "17",
      "36",
      "21"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 18."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "ArrayList vs LinkedList: random access? (Set 63) (Set 240) (Set 345)",
    "options": [
      "Both O(n) (standard definition)",
      "LinkedList is faster in practice",
      "Both O(1) under normal conditions",
      "ArrayList is O(1), LinkedList is O(n)"
    ],
    "answer": 3,
    "explanation": "ArrayList uses contiguous array; LinkedList traverses nodes."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 4);? (Set 300) (Set 346)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 6);? (Set 105) (Set 117) (Set 347)",
    "options": [
      "14",
      "10",
      "11",
      "22"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 5);? (Set 30) (Set 348)",
    "options": [
      "7",
      "4",
      "8",
      "3"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "this keyword refers to? (Set 278) (Set 349)",
    "options": [
      "Previous object by design",
      "Parent class in most cases",
      "Current object instance",
      "Static context in most cases"
    ],
    "answer": 2,
    "explanation": "this resolves ambiguity between fields and parameters."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Design pattern: Builder is used for? (Set 350)",
    "options": [
      "Destroying objects in standard usage",
      "Constructing complex objects step by step",
      "Sorting in typical implementations",
      "Threading in typical implementations"
    ],
    "answer": 1,
    "explanation": "Builder separates construction from representation."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 4);? (Set 351)",
    "options": [
      "15",
      "12",
      "11",
      "24"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 4);? (Set 141) (Set 352)",
    "options": [
      "3",
      "2",
      "6",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 4);? (Set 19) (Set 353)",
    "options": [
      "0",
      "81",
      "3",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 | 4);? (Set 354)",
    "options": [
      "26",
      "16",
      "13",
      "12"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 << 1);? (Set 332) (Set 355)",
    "options": [
      "48",
      "96",
      "47",
      "51"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 48."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 4);? (Set 356)",
    "options": [
      "0",
      "-1",
      "3",
      "81"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 3);? (Set 357)",
    "options": [
      "11",
      "10",
      "14",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 3);? (Set 358)",
    "options": [
      "4",
      "2",
      "1",
      "5"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 2);? (Set 127) (Set 359)",
    "options": [
      "53",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 2);? (Set 360)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 3);? (Set 266) (Set 361)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 6);? (Set 362)",
    "options": [
      "13",
      "17",
      "28",
      "14"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 6);? (Set 363)",
    "options": [
      "28",
      "17",
      "14",
      "13"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 2);? (Set 360) (Set 364)",
    "options": [
      "3",
      "0",
      "53",
      "-1"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 6);? (Set 365)",
    "options": [
      "3",
      "-1",
      "87",
      "0"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 & 3);? (Set 57) (Set 316) (Set 366)",
    "options": [
      "2",
      "5",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 5);? (Set 367)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 2);? (Set 263) (Set 368)",
    "options": [
      "-1",
      "3",
      "0",
      "52"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 >> 1);? (Set 369)",
    "options": [
      "8",
      "4",
      "3",
      "7"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 4);? (Set 327) (Set 370)",
    "options": [
      "32",
      "19",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 2);? (Set 371)",
    "options": [
      "28",
      "14",
      "13",
      "17"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 & 2);? (Set 201) (Set 372)",
    "options": [
      "52",
      "3",
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
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 2);? (Set 373)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 6);? (Set 273) (Set 322) (Set 374)",
    "options": [
      "44",
      "21",
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 3);? (Set 56) (Set 227) (Set 375)",
    "options": [
      "5",
      "4",
      "1",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 | 6);? (Set 12) (Set 183) (Set 376)",
    "options": [
      "18",
      "15",
      "30",
      "14"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 2);? (Set 299) (Set 377)",
    "options": [
      "17",
      "34",
      "20",
      "16"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 ^ 3);? (Set 378)",
    "options": [
      "14",
      "22",
      "11",
      "10"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Method overriding is? (Set 6) (Set 109) (Set 379)",
    "options": [
      "Child class redefines parent method with same signature",
      "Same class different params under normal conditions",
      "Static methods in typical implementations",
      "Different method name in typical implementations"
    ],
    "answer": 0,
    "explanation": "Runtime (dynamic) polymorphism."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "this keyword refers to? (Set 278) (Set 349) (Set 380)",
    "options": [
      "Static context (commonly used)",
      "Current object instance",
      "Parent class in standard usage",
      "Previous object (general case)"
    ],
    "answer": 1,
    "explanation": "this resolves ambiguity between fields and parameters."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 | 6);? (Set 381)",
    "options": [
      "7",
      "10",
      "14",
      "6"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 ^ 5);? (Set 382)",
    "options": [
      "44",
      "21",
      "22",
      "25"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 2);? (Set 383)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 3);? (Set 384)",
    "options": [
      "4",
      "2",
      "1",
      "5"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 << 1);? (Set 332) (Set 355) (Set 385)",
    "options": [
      "48",
      "96",
      "47",
      "51"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 48."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 5);? (Set 103) (Set 386)",
    "options": [
      "18",
      "30",
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
    "question": "What will be the output of the Java printing statement: System.out.println(9 ^ 4);? (Set 36) (Set 200) (Set 387)",
    "options": [
      "26",
      "12",
      "13",
      "16"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 ^ 6);? (Set 388)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 4);? (Set 189) (Set 389)",
    "options": [
      "12",
      "15",
      "11",
      "24"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 4);? (Set 104) (Set 390)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 ^ 6);? (Set 391)",
    "options": [
      "8",
      "7",
      "11",
      "16"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 2);? (Set 245) (Set 392)",
    "options": [
      "58",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 4);? (Set 356) (Set 393)",
    "options": [
      "0",
      "3",
      "-1",
      "81"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 2);? (Set 394)",
    "options": [
      "25",
      "44",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 3);? (Set 138) (Set 244) (Set 395)",
    "options": [
      "1",
      "5",
      "4",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 | 6);? (Set 396)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 5);? (Set 101) (Set 397)",
    "options": [
      "21",
      "24",
      "20",
      "42"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 3);? (Set 398)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 5);? (Set 223) (Set 399)",
    "options": [
      "22",
      "23",
      "26",
      "46"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 5);? (Set 173) (Set 400)",
    "options": [
      "46",
      "23",
      "26",
      "22"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 | 3);? (Set 401)",
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
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "ArrayList vs LinkedList: random access? (Set 402)",
    "options": [
      "LinkedList is faster (primary approach)",
      "Both O(n) in typical implementations",
      "Both O(1) under normal conditions",
      "ArrayList is O(1), LinkedList is O(n)"
    ],
    "answer": 3,
    "explanation": "ArrayList uses contiguous array; LinkedList traverses nodes."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 5);? (Set 284) (Set 403)",
    "options": [
      "21",
      "20",
      "42",
      "24"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 6);? (Set 404)",
    "options": [
      "11",
      "24",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 3);? (Set 405)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(8 % 3);? (Set 406)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(17 % 2);? (Set 87) (Set 407)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 6);? (Set 408)",
    "options": [
      "30",
      "60",
      "29",
      "33"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 4);? (Set 34) (Set 409)",
    "options": [
      "0",
      "3",
      "64",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 >> 1);? (Set 410)",
    "options": [
      "9",
      "20",
      "10",
      "13"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 5);? (Set 367) (Set 411)",
    "options": [
      "21",
      "20",
      "42",
      "24"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 5);? (Set 412)",
    "options": [
      "13",
      "16",
      "12",
      "26"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 | 5);? (Set 208) (Set 413)",
    "options": [
      "24",
      "21",
      "20",
      "42"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 5);? (Set 414)",
    "options": [
      "0",
      "81",
      "3",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 2);? (Set 415)",
    "options": [
      "-1",
      "3",
      "0",
      "72"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 2);? (Set 416)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 3);? (Set 122) (Set 417)",
    "options": [
      "6",
      "7",
      "14",
      "10"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 5);? (Set 418)",
    "options": [
      "4",
      "0",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 % 6);? (Set 419)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 4);? (Set 420)",
    "options": [
      "0",
      "73",
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
    "question": "What will be the output of the Java printing statement: System.out.println(20 ^ 2);? (Set 77) (Set 421)",
    "options": [
      "25",
      "22",
      "44",
      "21"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 << 1);? (Set 422)",
    "options": [
      "37",
      "33",
      "34",
      "68"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 34."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "static keyword means? (Set 423)",
    "options": [
      "Is private (standard definition)",
      "Belongs to class, not instance",
      "Cannot be accessed (primary approach)",
      "Belongs to instance (widely accepted)"
    ],
    "answer": 1,
    "explanation": "Static members shared across all instances."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);? (Set 96) (Set 282) (Set 302) (Set 424)",
    "options": [
      "21",
      "44",
      "22",
      "25"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);? (Set 96) (Set 229) (Set 425)",
    "options": [
      "44",
      "22",
      "21",
      "25"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(9 & 6);? (Set 121) (Set 426)",
    "options": [
      "0",
      "3",
      "72",
      "-1"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 3);? (Set 69) (Set 427)",
    "options": [
      "30",
      "54",
      "26",
      "27"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 & 6);? (Set 428)",
    "options": [
      "84",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 3);? (Set 429)",
    "options": [
      "5",
      "4",
      "2",
      "1"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 | 6);? (Set 430)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 ^ 3);? (Set 431)",
    "options": [
      "12",
      "11",
      "24",
      "15"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 % 4);? (Set 420) (Set 432)",
    "options": [
      "3",
      "73",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 >> 1);? (Set 433)",
    "options": [
      "16",
      "11",
      "8",
      "7"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 3);? (Set 130) (Set 434)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 4);? (Set 93) (Set 435)",
    "options": [
      "22",
      "44",
      "25",
      "21"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 << 1);? (Set 436)",
    "options": [
      "22",
      "25",
      "44",
      "21"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 6);? (Set 362) (Set 437)",
    "options": [
      "13",
      "17",
      "28",
      "14"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(17 & 5);? (Set 438)",
    "options": [
      "1",
      "2",
      "4",
      "0"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 & 3);? (Set 116) (Set 303) (Set 439)",
    "options": [
      "3",
      "6",
      "6",
      "2"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 4);? (Set 351) (Set 440)",
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
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Design pattern: Builder is used for? (Set 441)",
    "options": [
      "Destroying objects as per specification",
      "Constructing complex objects step by step",
      "Threading in typical implementations",
      "Sorting in typical implementations"
    ],
    "answer": 1,
    "explanation": "Builder separates construction from representation."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 & 2);? (Set 188) (Set 442)",
    "options": [
      "0",
      "-1",
      "3",
      "85"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);? (Set 96) (Set 229) (Set 443)",
    "options": [
      "25",
      "44",
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
    "question": "What will be the output of the Java printing statement: System.out.println(22 | 5);? (Set 248) (Set 444)",
    "options": [
      "22",
      "46",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 2);? (Set 90) (Set 153) (Set 445)",
    "options": [
      "0",
      "63",
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
    "question": "What will be the output of the Java printing statement: System.out.println(24 << 1);? (Set 332) (Set 446)",
    "options": [
      "51",
      "48",
      "47",
      "96"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 48."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Heap memory stores? (Set 340) (Set 447)",
    "options": [
      "Local variables only by design",
      "Method calls in practice",
      "Objects and instance variables",
      "Primitives only (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Shared heap stores dynamically allocated objects."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "throw vs throws? (Set 448)",
    "options": [
      "throw creates exception; throws declares it in method signature",
      "throw is for classes in typical implementations",
      "Same thing in typical implementations",
      "throws catches exception in typical implementations"
    ],
    "answer": 0,
    "explanation": "throw is used in body; throws in declaration."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(8 | 6);? (Set 150) (Set 449)",
    "options": [
      "28",
      "17",
      "13",
      "14"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 5);? (Set 73) (Set 450)",
    "options": [
      "18",
      "9",
      "12",
      "8"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 ^ 2);? (Set 451)",
    "options": [
      "26",
      "52",
      "29",
      "25"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 3);? (Set 452)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 4);? (Set 51) (Set 453)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(10 & 6);? (Set 187) (Set 454)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 ^ 3);? (Set 455)",
    "options": [
      "14",
      "15",
      "18",
      "30"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);? (Set 96) (Set 282) (Set 456)",
    "options": [
      "22",
      "44",
      "25",
      "21"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 & 2);? (Set 127) (Set 457)",
    "options": [
      "-1",
      "53",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 % 4);? (Set 458)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 | 5);? (Set 284) (Set 403) (Set 459)",
    "options": [
      "20",
      "21",
      "24",
      "42"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 21."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Stack memory stores? (Set 460)",
    "options": [
      "Class definitions (widely accepted)",
      "Method calls and local variables",
      "Static variables only in practice",
      "Objects only (standard definition)"
    ],
    "answer": 1,
    "explanation": "Stack is LIFO; each thread has its own."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(19 % 5);? (Set 461)",
    "options": [
      "8",
      "4",
      "3",
      "7"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 6);? (Set 83) (Set 238) (Set 462)",
    "options": [
      "11",
      "10",
      "14",
      "22"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(12 << 1);? (Set 463)",
    "options": [
      "27",
      "24",
      "23",
      "48"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(22 ^ 6);? (Set 4) (Set 65) (Set 464)",
    "options": [
      "15",
      "19",
      "16",
      "32"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 | 4);? (Set 235) (Set 465)",
    "options": [
      "14",
      "18",
      "15",
      "30"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 ^ 2);? (Set 184) (Set 466)",
    "options": [
      "16",
      "32",
      "15",
      "19"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 16."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "static keyword means? (Set 13) (Set 467)",
    "options": [
      "Is private (primary approach)",
      "Cannot be accessed (commonly used)",
      "Belongs to class, not instance",
      "Belongs to instance in practice"
    ],
    "answer": 2,
    "explanation": "Static members shared across all instances."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "File class in Java represents? (Set 468)",
    "options": [
      "Database connection",
      "File contents by design",
      "File or directory path",
      "Network socket (general case)"
    ],
    "answer": 2,
    "explanation": "java.io.File for file system operations."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 6);? (Set 469)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 % 2);? (Set 383) (Set 470)",
    "options": [
      "50",
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
    "question": "What will be the output of the Java printing statement: System.out.println(5 | 2);? (Set 471)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 % 4);? (Set 141) (Set 352) (Set 472)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 3);? (Set 405) (Set 473)",
    "options": [
      "2",
      "5",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(18 | 4);? (Set 96) (Set 282) (Set 302) (Set 424) (Set 474)",
    "options": [
      "22",
      "44",
      "21",
      "25"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 3);? (Set 475)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);? (Set 476)",
    "options": [
      "9",
      "12",
      "5",
      "6"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(24 >> 1);? (Set 477)",
    "options": [
      "15",
      "24",
      "12",
      "11"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 << 1);? (Set 228) (Set 478)",
    "options": [
      "12",
      "11",
      "15",
      "24"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(15 % 6);? (Set 469) (Set 479)",
    "options": [
      "6",
      "6",
      "2",
      "3"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 | 2);? (Set 480)",
    "options": [
      "13",
      "17",
      "28",
      "14"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 4);? (Set 37) (Set 481)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 5);? (Set 482)",
    "options": [
      "8",
      "7",
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
    "question": "What will be the output of the Java printing statement: System.out.println(11 ^ 4);? (Set 483)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(16 & 3);? (Set 484)",
    "options": [
      "3",
      "0",
      "-1",
      "58"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 0."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Method overloading is? (Set 485)",
    "options": [
      "Same name same parameters under normal conditions",
      "Same method name with different parameters",
      "Different return type only by design",
      "Different classes (standard definition)"
    ],
    "answer": 1,
    "explanation": "Compile-time (static) polymorphism."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 << 1);? (Set 486)",
    "options": [
      "32",
      "31",
      "64",
      "35"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(16 ^ 6);? (Set 273) (Set 322) (Set 374) (Set 487)",
    "options": [
      "25",
      "21",
      "22",
      "44"
    ],
    "answer": 2,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(11 & 5);? (Set 218) (Set 488)",
    "options": [
      "1",
      "0",
      "2",
      "4"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(20 & 4);? (Set 104) (Set 390) (Set 489)",
    "options": [
      "4",
      "3",
      "7",
      "8"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 4."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Serialization converts object to? (Set 490)",
    "options": [
      "Byte stream for storage or transmission",
      "String format (default behavior)",
      "XML only under normal conditions",
      "HTML page under normal conditions"
    ],
    "answer": 0,
    "explanation": "Implements Serializable interface."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(10 ^ 6);? (Set 491)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(23 ^ 3);? (Set 492)",
    "options": [
      "20",
      "23",
      "19",
      "40"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(21 << 1);? (Set 154) (Set 493)",
    "options": [
      "84",
      "41",
      "45",
      "42"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator << on targets matches standard Java JVM specification. Result is 42."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 2);? (Set 494)",
    "options": [
      "15",
      "18",
      "14",
      "30"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 ^ 6);? (Set 495)",
    "options": [
      "14",
      "11",
      "10",
      "22"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator ^ on targets matches standard Java JVM specification. Result is 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 >> 1);? (Set 496)",
    "options": [
      "6",
      "3",
      "6",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator >> on targets matches standard Java JVM specification. Result is 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(14 % 4);? (Set 497)",
    "options": [
      "1",
      "4",
      "5",
      "2"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 5);? (Set 92) (Set 163) (Set 498)",
    "options": [
      "14",
      "6",
      "10",
      "7"
    ],
    "answer": 3,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(7 & 3);? (Set 499)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(6 | 5);? (Set 125) (Set 151) (Set 500)",
    "options": [
      "6",
      "10",
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
    "question": "What will be the output of the Java printing statement: System.out.println(15 & 3);? (Set 250) (Set 501)",
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
    "question": "What will be the output of the Java printing statement: System.out.println(14 & 6);? (Set 476) (Set 502)",
    "options": [
      "12",
      "9",
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
    "question": "What will be the output of the Java printing statement: System.out.println(12 | 4);? (Set 351) (Set 503)",
    "options": [
      "12",
      "11",
      "15",
      "24"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator | on targets matches standard Java JVM specification. Result is 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(13 & 3);? (Set 475) (Set 504)",
    "options": [
      "4",
      "1",
      "0",
      "2"
    ],
    "answer": 1,
    "explanation": "Running bitwise/arithmetic operator & on targets matches standard Java JVM specification. Result is 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What will be the output of the Java printing statement: System.out.println(5 % 4);? (Set 505)",
    "options": [
      "1",
      "4",
      "0",
      "2"
    ],
    "answer": 0,
    "explanation": "Running bitwise/arithmetic operator % on targets matches standard Java JVM specification. Result is 1."
  }
];
