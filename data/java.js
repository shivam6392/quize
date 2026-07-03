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
      "Java Virtual Machine",
      "Java Version Module",
      "Java Variable Manager",
      "Java Visual Maker"
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
      "JRE + development tools (compiler, debugger)",
      "Only JVM in typical implementations",
      "Only libraries under normal conditions",
      "Only editor in typical implementations"
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
      "Public fields (standard definition)",
      "Static methods only (widely accepted)",
      "Abstract classes (typical scenario)",
      "Private fields with public getters/setters"
    ],
    "answer": 3,
    "explanation": "Data hiding protects internal state."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Inheritance allows?",
    "options": [
      "Handling exceptions under normal conditions",
      "Creating objects under normal conditions",
      "Thread creation in typical implementations",
      "A class to inherit properties of another class"
    ],
    "answer": 3,
    "explanation": "Child class extends parent class."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Polymorphism means?",
    "options": [
      "One method one behavior (standard definition)",
      "Static binding always as per specification",
      "No methods in typical implementations",
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
      "Loops as per specification",
      "Abstract classes and interfaces",
      "Concrete classes only in most cases",
      "Variables (general case)"
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
      "Different return type only in most cases",
      "Different classes in standard usage",
      "Same method name with different parameters",
      "Same name same parameters under normal conditions"
    ],
    "answer": 2,
    "explanation": "Compile-time (static) polymorphism."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Method overriding is?",
    "options": [
      "Same class different params (standard definition)",
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
      "Object is created using new keyword",
      "Variable is declared by design",
      "Class is loaded in most cases",
      "Method is called (primary approach)"
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
      "Constructors in typical implementations",
      "Main method in typical implementations",
      "Abstract methods (and default/static in Java 8+)",
      "Instance variables in typical implementations"
    ],
    "answer": 2,
    "explanation": "Interface defines a contract for implementing classes."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "ArrayList vs LinkedList: random access?",
    "options": [
      "LinkedList is faster (widely accepted)",
      "ArrayList is O(1), LinkedList is O(n)",
      "Both O(1) as per specification",
      "Both O(n) as per specification"
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
      "One null key and multiple null values",
      "Multiple null keys in most cases",
      "Only null values (commonly used)"
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
      "Sorted elements based on convention",
      "Duplicates allowed (general case)",
      "Key-value pairs (commonly used)",
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
      "Random order in practice",
      "Insertion order in practice",
      "Reverse order (general case)",
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
      "Insertion order (commonly used)",
      "Random in typical implementations",
      "Natural ordering or custom Comparator",
      "Alphabetical only based on convention"
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
      "Only on exception by design",
      "Always (except System.exit)",
      "Never (standard definition)",
      "Only on success in standard usage"
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
      "Runtime only in practice",
      "OS-level errors in practice",
      "Verified at compile time",
      "Never checked in standard usage"
    ],
    "answer": 2,
    "explanation": "Must be caught or declared with throws."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Custom exception extends?",
    "options": [
      "Exception or RuntimeException",
      "Thread (commonly used)",
      "String (commonly used)",
      "Object based on convention"
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
      "Same thing in typical implementations",
      "throw is for classes in typical implementations",
      "throw creates exception; throws declares it in method signature",
      "throws catches exception in typical implementations"
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
      "It has no methods (typical scenario)",
      "Its value cannot be changed after creation",
      "It is final class under normal conditions",
      "It uses char array (typical scenario)"
    ],
    "answer": 1,
    "explanation": "String pool and security require immutability."
  },
  {
    "subject": "Java",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "StringBuilder vs StringBuffer?",
    "options": [
      "Both thread-safe in typical implementations",
      "StringBuffer is faster in typical implementations",
      "StringBuilder is not thread-safe but faster",
      "Both not thread-safe under normal conditions"
    ],
    "answer": 2,
    "explanation": "StringBuffer is synchronized; StringBuilder is not."
  },
  {
    "subject": "Java",
    "topic": "Multithreading",
    "difficulty": "Easy",
    "question": "Thread can be created by?",
    "options": [
      "Using String class in typical implementations",
      "Extending Thread class or implementing Runnable",
      "Only extending Thread (default behavior)",
      "Only Runnable in typical implementations"
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
      "Thread is stopped in typical implementations",
      "Only one thread accesses block/method at a time",
      "Memory is freed in typical implementations",
      "All threads run simultaneously (default behavior)"
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
      "Database access in most cases",
      "Network calls by design",
      "File handling by design"
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
      "function(){} as per specification",
      "method => param in practice",
      "(parameters) -> expression/body",
      "def func(): (default behavior)"
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
      "Network streaming (standard definition)",
      "Audio streaming under normal conditions",
      "File I/O streaming under normal conditions"
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
      "Only default methods in practice",
      "Multiple abstract methods",
      "No methods (primary approach)"
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
      "No memory management (standard definition)",
      "OS handles it in typical implementations",
      "JVM automatically reclaims unused object memory",
      "Programmer must free memory as per specification"
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
      "Objects only under normal conditions",
      "Method calls and local variables",
      "Static variables only in practice",
      "Class definitions (primary approach)"
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
      "Objects and instance variables",
      "Local variables only (commonly used)",
      "Method calls as per specification",
      "Primitives only (general case)"
    ],
    "answer": 0,
    "explanation": "Shared heap stores dynamically allocated objects."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "File class in Java represents?",
    "options": [
      "Network socket in most cases",
      "File contents (commonly used)",
      "File or directory path",
      "Database connection"
    ],
    "answer": 2,
    "explanation": "java.io.File for file system operations."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "BufferedReader is faster than Scanner because?",
    "options": [
      "It is newer in typical implementations",
      "It uses less memory (primary approach)",
      "It skips characters as per specification",
      "Larger internal buffer reduces I/O operations"
    ],
    "answer": 3,
    "explanation": "BufferedReader reads large chunks at once."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Serialization converts object to?",
    "options": [
      "HTML page under normal conditions",
      "String format in typical implementations",
      "Byte stream for storage or transmission",
      "XML only under normal conditions"
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
      "Is private as per specification",
      "Cannot be accessed (primary approach)",
      "Belongs to instance in most cases",
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
      "Imported by design",
      "Extended/inherited",
      "Instantiated by design",
      "Used in standard usage"
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
      "No methods as per specification",
      "Only abstract methods in standard usage",
      "Both abstract and concrete methods",
      "Only concrete methods (commonly used)"
    ],
    "answer": 2,
    "explanation": "Abstract classes provide partial implementation."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "this keyword refers to?",
    "options": [
      "Current object instance",
      "Parent class by design",
      "Previous object in practice",
      "Static context in most cases"
    ],
    "answer": 0,
    "explanation": "this resolves ambiguity between fields and parameters."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "super keyword is used to?",
    "options": [
      "Create new object (standard definition)",
      "Handle exception in typical implementations",
      "Define variable based on convention",
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
      "Static method call (standard definition)",
      "Compile-time resolution (default behavior)",
      "Runtime resolution of overridden method call",
      "Constructor call under normal conditions"
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
      "StackOverflow in practice",
      "ClassCast by design"
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
      "Serialization in practice",
      "Custom sorting logic",
      "Equality checking",
      "Hashing (general case)"
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
      "No difference in typical implementations",
      "equals() checks content equality; == checks reference",
      "Both check reference in typical implementations",
      "Both check content in typical implementations"
    ],
    "answer": 1,
    "explanation": "== compares memory addresses for objects."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Autoboxing in Java is?",
    "options": [
      "String to int in typical implementations",
      "Automatic conversion of primitive to wrapper class",
      "Object to primitive only in typical implementations",
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
      "No instances as per specification",
      "Abstract class (general case)",
      "Multiple instances (widely accepted)"
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
      "Thread management in typical implementations",
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
      "Singleton pattern (general case)",
      "Sorting as per specification",
      "One-to-many dependency notification",
      "Tree traversal as per specification"
    ],
    "answer": 2,
    "explanation": "When subject changes, all observers are notified."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Design pattern: Builder is used for?",
    "options": [
      "Threading in typical implementations",
      "Constructing complex objects step by step",
      "Sorting in typical implementations",
      "Destroying objects (standard definition)"
    ],
    "answer": 1,
    "explanation": "Builder separates construction from representation."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "What is classpath in Java?",
    "options": [
      "File system root in typical implementations",
      "Path where JVM looks for classes and packages",
      "Database URL in typical implementations",
      "Network path in typical implementations"
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
      "-1",
      "null",
      "0"
    ],
    "answer": 3,
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
      "Abstract classes",
      "Constructors",
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
      "A method in typical implementations",
      "A variable type in typical implementations",
      "A special class representing a fixed set of constants",
      "A loop construct in typical implementations"
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
      "Local variable type inference",
      "Global variable (typical scenario)",
      "Constant declaration in practice",
      "Dynamic typing in most cases"
    ],
    "answer": 0,
    "explanation": "Compiler infers type from initializer."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1846 % 55);?",
    "options": [
      "34",
      "33",
      "0",
      "31"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1846 / 55 leaves remainder 31."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2422 % 59);?",
    "options": [
      "6",
      "3",
      "41",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2422 / 59 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 151; int y = 110; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "129",
      "151",
      "173",
      "110"
    ],
    "answer": 2,
    "explanation": "Condition (151 > 110) evaluates to true. Thus z is assigned to 151 + 22 which equals 173."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(23 ^ 70);",
    "options": [
      "79",
      "81",
      "93",
      "84"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10111 and 1000110 yields decimal 81."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2771 % 37);?",
    "options": [
      "0",
      "74",
      "33",
      "36"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2771 / 37 leaves remainder 33."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5132 % 37);?",
    "options": [
      "26",
      "138",
      "29",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 5132 / 37 leaves remainder 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1756 % 37);?",
    "options": [
      "0",
      "17",
      "47",
      "20"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1756 / 37 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(145 & 83);",
    "options": [
      "228",
      "15",
      "17",
      "20"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10010001 and 1010011 yields decimal 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(514 % 44);?",
    "options": [
      "0",
      "11",
      "33",
      "30"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 514 / 44 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(65 & 87);",
    "options": [
      "68",
      "65",
      "63",
      "152"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1000001 and 1010111 yields decimal 65."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 38; int y = 124; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "124",
      "149",
      "99",
      "38"
    ],
    "answer": 2,
    "explanation": "Condition (38 > 124) evaluates to false. Thus z is assigned to 124 - 25 which equals 99."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(81 & 67);",
    "options": [
      "148",
      "65",
      "68",
      "63"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1010001 and 1000011 yields decimal 65."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(137 & 75);",
    "options": [
      "212",
      "7",
      "12",
      "9"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10001001 and 1001011 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(127 | 72);",
    "options": [
      "199",
      "125",
      "127",
      "130"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1111111 and 1001000 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 194; int y = 200; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "194",
      "180",
      "200",
      "220"
    ],
    "answer": 1,
    "explanation": "Condition (194 > 200) evaluates to false. Thus z is assigned to 200 - 20 which equals 180."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 122; int y = 160; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "122",
      "192",
      "128",
      "160"
    ],
    "answer": 2,
    "explanation": "Condition (122 > 160) evaluates to false. Thus z is assigned to 160 - 32 which equals 128."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(195 ^ 102);",
    "options": [
      "163",
      "168",
      "297",
      "165"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 11000011 and 1100110 yields decimal 165."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3931 % 38);?",
    "options": [
      "17",
      "103",
      "0",
      "20"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3931 / 38 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(49 & 53);",
    "options": [
      "47",
      "49",
      "52",
      "102"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 110001 and 110101 yields decimal 49."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 56; int y = 102; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "114",
      "90",
      "56",
      "102"
    ],
    "answer": 1,
    "explanation": "Condition (56 > 102) evaluates to false. Thus z is assigned to 102 - 12 which equals 90."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(40 | 24);",
    "options": [
      "54",
      "56",
      "64",
      "59"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 101000 and 11000 yields decimal 56."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(101 & 68);",
    "options": [
      "66",
      "71",
      "68",
      "169"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1100101 and 1000100 yields decimal 68."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 133; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "133",
      "157",
      "109",
      "19"
    ],
    "answer": 2,
    "explanation": "Condition (19 > 133) evaluates to false. Thus z is assigned to 133 - 24 which equals 109."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(207 | 29);",
    "options": [
      "221",
      "223",
      "236",
      "226"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 11001111 and 11101 yields decimal 223."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2099 % 15);?",
    "options": [
      "0",
      "17",
      "139",
      "14"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2099 / 15 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(16 ^ 11);",
    "options": [
      "27",
      "30",
      "25",
      "51"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10000 and 1011 yields decimal 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 94; int y = 64; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "127",
      "64",
      "61",
      "94"
    ],
    "answer": 0,
    "explanation": "Condition (94 > 64) evaluates to true. Thus z is assigned to 94 + 33 which equals 127."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 132; int y = 108; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "132",
      "145",
      "108",
      "119"
    ],
    "answer": 1,
    "explanation": "Condition (132 > 108) evaluates to true. Thus z is assigned to 132 + 13 which equals 145."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 182; int y = 16; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "191",
      "182",
      "16",
      "173"
    ],
    "answer": 0,
    "explanation": "Condition (182 > 16) evaluates to true. Thus z is assigned to 182 + 9 which equals 191."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1273 % 29);?",
    "options": [
      "26",
      "43",
      "29",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1273 / 29 leaves remainder 26."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(161 | 93);",
    "options": [
      "251",
      "256",
      "253",
      "254"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10100001 and 1011101 yields decimal 253."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 70; int y = 164; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "164",
      "70",
      "147",
      "181"
    ],
    "answer": 2,
    "explanation": "Condition (70 > 164) evaluates to false. Thus z is assigned to 164 - 17 which equals 147."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 142; int y = 72; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "128",
      "156",
      "142",
      "72"
    ],
    "answer": 1,
    "explanation": "Condition (142 > 72) evaluates to true. Thus z is assigned to 142 + 14 which equals 156."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4458 % 10);?",
    "options": [
      "8",
      "445",
      "11",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4458 / 10 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(149 & 12);",
    "options": [
      "7",
      "161",
      "2",
      "4"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10010101 and 1100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2093 % 54);?",
    "options": [
      "44",
      "41",
      "0",
      "38"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2093 / 54 leaves remainder 41."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(175 | 51);",
    "options": [
      "194",
      "191",
      "226",
      "189"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10101111 and 110011 yields decimal 191."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 165; int y = 150; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "150",
      "134",
      "196",
      "165"
    ],
    "answer": 2,
    "explanation": "Condition (165 > 150) evaluates to true. Thus z is assigned to 165 + 31 which equals 196."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 128; int y = 117; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "117",
      "128",
      "145",
      "111"
    ],
    "answer": 2,
    "explanation": "Condition (128 > 117) evaluates to true. Thus z is assigned to 128 + 17 which equals 145."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(34 & 38);",
    "options": [
      "72",
      "34",
      "37",
      "32"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 100010 and 100110 yields decimal 34."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2026 % 42);?",
    "options": [
      "10",
      "0",
      "13",
      "48"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2026 / 42 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2986 % 10);?",
    "options": [
      "0",
      "9",
      "6",
      "298"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2986 / 10 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(188 | 70);",
    "options": [
      "252",
      "254",
      "257",
      "258"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10111100 and 1000110 yields decimal 254."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 178; int y = 23; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "178",
      "208",
      "148",
      "23"
    ],
    "answer": 1,
    "explanation": "Condition (178 > 23) evaluates to true. Thus z is assigned to 178 + 30 which equals 208."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(160 ^ 85);",
    "options": [
      "243",
      "248",
      "245",
      "269"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10100000 and 1010101 yields decimal 245."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 178; int y = 178; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "183",
      "173",
      "178",
      "178"
    ],
    "answer": 1,
    "explanation": "Condition (178 > 178) evaluates to false. Thus z is assigned to 178 - 5 which equals 173."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(67 & 85);",
    "options": [
      "63",
      "152",
      "65",
      "68"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1000011 and 1010101 yields decimal 65."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 57; int y = 121; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "57",
      "95",
      "121",
      "147"
    ],
    "answer": 1,
    "explanation": "Condition (57 > 121) evaluates to false. Thus z is assigned to 121 - 26 which equals 95."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5000 % 28);?",
    "options": [
      "178",
      "16",
      "19",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 5000 / 28 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 62; int y = 195; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "188",
      "62",
      "202",
      "195"
    ],
    "answer": 0,
    "explanation": "Condition (62 > 195) evaluates to false. Thus z is assigned to 195 - 7 which equals 188."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(164 & 33);",
    "options": [
      "32",
      "30",
      "35",
      "197"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10100100 and 100001 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(694 % 26);?",
    "options": [
      "26",
      "0",
      "21",
      "18"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 694 / 26 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(116 | 99);",
    "options": [
      "122",
      "117",
      "119",
      "215"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1110100 and 1100011 yields decimal 119."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2674 % 29);?",
    "options": [
      "6",
      "9",
      "92",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2674 / 29 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 166; int y = 74; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "166",
      "143",
      "189",
      "74"
    ],
    "answer": 2,
    "explanation": "Condition (166 > 74) evaluates to true. Thus z is assigned to 166 + 23 which equals 189."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 13; int y = 109; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "130",
      "13",
      "109",
      "88"
    ],
    "answer": 3,
    "explanation": "Condition (13 > 109) evaluates to false. Thus z is assigned to 109 - 21 which equals 88."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2061 % 38);?",
    "options": [
      "12",
      "0",
      "54",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2061 / 38 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4364 % 20);?",
    "options": [
      "218",
      "4",
      "0",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4364 / 20 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(164 ^ 81);",
    "options": [
      "269",
      "243",
      "245",
      "248"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10100100 and 1010001 yields decimal 245."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 61; int y = 68; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "61",
      "73",
      "68",
      "63"
    ],
    "answer": 3,
    "explanation": "Condition (61 > 68) evaluates to false. Thus z is assigned to 68 - 5 which equals 63."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(77 | 66);",
    "options": [
      "79",
      "77",
      "143",
      "82"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1001101 and 1000010 yields decimal 79."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 208; int y = 128; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "227",
      "208",
      "189",
      "128"
    ],
    "answer": 0,
    "explanation": "Condition (208 > 128) evaluates to true. Thus z is assigned to 208 + 19 which equals 227."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4656 % 44);?",
    "options": [
      "39",
      "0",
      "105",
      "36"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4656 / 44 leaves remainder 36."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4782 % 53);?",
    "options": [
      "12",
      "15",
      "90",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4782 / 53 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4660 % 19);?",
    "options": [
      "0",
      "5",
      "8",
      "245"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4660 / 19 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3870 % 50);?",
    "options": [
      "0",
      "20",
      "23",
      "77"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3870 / 50 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(59 ^ 27);",
    "options": [
      "35",
      "32",
      "30",
      "86"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 111011 and 11011 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2043 % 51);?",
    "options": [
      "3",
      "0",
      "6",
      "40"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2043 / 51 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2406 % 42);?",
    "options": [
      "15",
      "12",
      "57",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2406 / 42 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(91 | 48);",
    "options": [
      "121",
      "126",
      "123",
      "139"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1011011 and 110000 yields decimal 123."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(135 & 43);",
    "options": [
      "6",
      "1",
      "3",
      "178"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10000111 and 101011 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4144 % 39);?",
    "options": [
      "0",
      "106",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4144 / 39 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4067 % 10);?",
    "options": [
      "0",
      "7",
      "10",
      "406"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4067 / 10 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(83 | 39);",
    "options": [
      "122",
      "119",
      "122",
      "117"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1010011 and 100111 yields decimal 119."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 191; int y = 56; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "56",
      "191",
      "172",
      "210"
    ],
    "answer": 3,
    "explanation": "Condition (191 > 56) evaluates to true. Thus z is assigned to 191 + 19 which equals 210."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(42 & 74);",
    "options": [
      "13",
      "10",
      "116",
      "8"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 101010 and 1001010 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 184; int y = 22; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "22",
      "159",
      "209",
      "184"
    ],
    "answer": 2,
    "explanation": "Condition (184 > 22) evaluates to true. Thus z is assigned to 184 + 25 which equals 209."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3915 % 15);?",
    "options": [
      "3",
      "0",
      "261",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3915 / 15 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1755 % 50);?",
    "options": [
      "8",
      "5",
      "35",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1755 / 50 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 74; int y = 84; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "84",
      "107",
      "61",
      "74"
    ],
    "answer": 2,
    "explanation": "Condition (74 > 84) evaluates to false. Thus z is assigned to 84 - 23 which equals 61."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(141 & 50);",
    "options": [
      "191",
      "0",
      "3",
      "-2"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10001101 and 110010 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2426 % 53);?",
    "options": [
      "44",
      "0",
      "45",
      "41"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2426 / 53 leaves remainder 41."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 134; int y = 45; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "45",
      "134",
      "142",
      "126"
    ],
    "answer": 2,
    "explanation": "Condition (134 > 45) evaluates to true. Thus z is assigned to 134 + 8 which equals 142."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(209 | 33);",
    "options": [
      "241",
      "244",
      "239",
      "242"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11010001 and 100001 yields decimal 241."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 33; int y = 19; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "33",
      "19",
      "4",
      "62"
    ],
    "answer": 3,
    "explanation": "Condition (33 > 19) evaluates to true. Thus z is assigned to 33 + 29 which equals 62."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 167; int y = 51; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "157",
      "51",
      "177",
      "167"
    ],
    "answer": 2,
    "explanation": "Condition (167 > 51) evaluates to true. Thus z is assigned to 167 + 10 which equals 177."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(208 ^ 82);",
    "options": [
      "290",
      "128",
      "130",
      "133"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 11010000 and 1010010 yields decimal 130."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(176 ^ 51);",
    "options": [
      "131",
      "227",
      "134",
      "129"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10110000 and 110011 yields decimal 131."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(154 | 78);",
    "options": [
      "225",
      "220",
      "232",
      "222"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10011010 and 1001110 yields decimal 222."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(31 & 96);",
    "options": [
      "0",
      "-2",
      "127",
      "3"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11111 and 1100000 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 163; int y = 93; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "172",
      "163",
      "154",
      "93"
    ],
    "answer": 0,
    "explanation": "Condition (163 > 93) evaluates to true. Thus z is assigned to 163 + 9 which equals 172."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2189 % 48);?",
    "options": [
      "32",
      "0",
      "29",
      "45"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2189 / 48 leaves remainder 29."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4532 % 18);?",
    "options": [
      "17",
      "251",
      "14",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4532 / 18 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3476 % 33);?",
    "options": [
      "105",
      "14",
      "11",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3476 / 33 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(130 | 20);",
    "options": [
      "153",
      "148",
      "150",
      "174"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10000010 and 10100 yields decimal 150."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(30 ^ 74);",
    "options": [
      "82",
      "84",
      "104",
      "87"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 11110 and 1001010 yields decimal 84."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(112 | 84);",
    "options": [
      "119",
      "116",
      "114",
      "196"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1110000 and 1010100 yields decimal 116."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(153 | 34);",
    "options": [
      "185",
      "211",
      "190",
      "187"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10011001 and 100010 yields decimal 187."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 59; int y = 187; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "216",
      "158",
      "187",
      "59"
    ],
    "answer": 1,
    "explanation": "Condition (59 > 187) evaluates to false. Thus z is assigned to 187 - 29 which equals 158."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 132; int y = 121; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "107",
      "132",
      "157",
      "121"
    ],
    "answer": 2,
    "explanation": "Condition (132 > 121) evaluates to true. Thus z is assigned to 132 + 25 which equals 157."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(101 & 104);",
    "options": [
      "94",
      "99",
      "205",
      "96"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1100101 and 1101000 yields decimal 96."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4408 % 53);?",
    "options": [
      "83",
      "12",
      "9",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4408 / 53 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(180 ^ 16);",
    "options": [
      "167",
      "196",
      "164",
      "162"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10110100 and 10000 yields decimal 164."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 170; int y = 89; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "149",
      "191",
      "89",
      "170"
    ],
    "answer": 1,
    "explanation": "Condition (170 > 89) evaluates to true. Thus z is assigned to 170 + 21 which equals 191."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(50 & 96);",
    "options": [
      "146",
      "30",
      "35",
      "32"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 110010 and 1100000 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 163; int y = 154; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "171",
      "163",
      "154",
      "155"
    ],
    "answer": 0,
    "explanation": "Condition (163 > 154) evaluates to true. Thus z is assigned to 163 + 8 which equals 171."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(138 ^ 60);",
    "options": [
      "180",
      "185",
      "198",
      "182"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10001010 and 111100 yields decimal 182."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(61 ^ 86);",
    "options": [
      "105",
      "147",
      "107",
      "110"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 111101 and 1010110 yields decimal 107."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 178; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "171",
      "18",
      "185",
      "178"
    ],
    "answer": 0,
    "explanation": "Condition (18 > 178) evaluates to false. Thus z is assigned to 178 - 7 which equals 171."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1785 % 16);?",
    "options": [
      "111",
      "12",
      "0",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1785 / 16 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 142; int y = 114; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "114",
      "129",
      "155",
      "142"
    ],
    "answer": 2,
    "explanation": "Condition (142 > 114) evaluates to true. Thus z is assigned to 142 + 13 which equals 155."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3518 % 31);?",
    "options": [
      "0",
      "113",
      "18",
      "15"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3518 / 31 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(894 % 13);?",
    "options": [
      "0",
      "10",
      "68",
      "13"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 894 / 13 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(149 ^ 30);",
    "options": [
      "142",
      "179",
      "137",
      "139"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10010101 and 11110 yields decimal 139."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(25 & 60);",
    "options": [
      "27",
      "85",
      "24",
      "22"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 11001 and 111100 yields decimal 24."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(32 & 53);",
    "options": [
      "32",
      "85",
      "35",
      "30"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 100000 and 110101 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2398 % 17);?",
    "options": [
      "0",
      "1",
      "4",
      "141"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2398 / 17 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 129; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "113",
      "129",
      "145",
      "11"
    ],
    "answer": 0,
    "explanation": "Condition (11 > 129) evaluates to false. Thus z is assigned to 129 - 16 which equals 113."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4806 % 10);?",
    "options": [
      "480",
      "6",
      "9",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4806 / 10 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3369 % 14);?",
    "options": [
      "240",
      "9",
      "12",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3369 / 14 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 41; int y = 81; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "41",
      "50",
      "81",
      "112"
    ],
    "answer": 1,
    "explanation": "Condition (41 > 81) evaluates to false. Thus z is assigned to 81 - 31 which equals 50."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 204; int y = 181; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "223",
      "181",
      "204",
      "185"
    ],
    "answer": 0,
    "explanation": "Condition (204 > 181) evaluates to true. Thus z is assigned to 204 + 19 which equals 223."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(103 & 89);",
    "options": [
      "192",
      "68",
      "63",
      "65"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1100111 and 1011001 yields decimal 65."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 157; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "126",
      "21",
      "188",
      "157"
    ],
    "answer": 0,
    "explanation": "Condition (21 > 157) evaluates to false. Thus z is assigned to 157 - 31 which equals 126."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3414 % 18);?",
    "options": [
      "0",
      "12",
      "15",
      "189"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3414 / 18 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(156 | 95);",
    "options": [
      "221",
      "251",
      "223",
      "226"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10011100 and 1011111 yields decimal 223."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1705 % 51);?",
    "options": [
      "25",
      "22",
      "0",
      "33"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1705 / 51 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4419 % 27);?",
    "options": [
      "0",
      "18",
      "21",
      "163"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4419 / 27 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 109; int y = 116; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "126",
      "116",
      "106",
      "109"
    ],
    "answer": 2,
    "explanation": "Condition (109 > 116) evaluates to false. Thus z is assigned to 116 - 10 which equals 106."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2748 % 32);?",
    "options": [
      "0",
      "85",
      "28",
      "31"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2748 / 32 leaves remainder 28."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(59 & 104);",
    "options": [
      "43",
      "40",
      "163",
      "38"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 111011 and 1101000 yields decimal 40."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 ^ 38);",
    "options": [
      "79",
      "58",
      "53",
      "55"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10001 and 100110 yields decimal 55."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(755 % 56);?",
    "options": [
      "27",
      "13",
      "0",
      "30"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 755 / 56 leaves remainder 27."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(120 | 44);",
    "options": [
      "122",
      "127",
      "164",
      "124"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1111000 and 101100 yields decimal 124."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 117; int y = 170; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "117",
      "156",
      "184",
      "170"
    ],
    "answer": 1,
    "explanation": "Condition (117 > 170) evaluates to false. Thus z is assigned to 170 - 14 which equals 156."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(172 | 42);",
    "options": [
      "214",
      "177",
      "172",
      "174"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10101100 and 101010 yields decimal 174."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(73 & 67);",
    "options": [
      "68",
      "63",
      "65",
      "140"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1001001 and 1000011 yields decimal 65."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 62; int y = 187; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "180",
      "62",
      "187",
      "194"
    ],
    "answer": 0,
    "explanation": "Condition (62 > 187) evaluates to false. Thus z is assigned to 187 - 7 which equals 180."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4018 % 51);?",
    "options": [
      "43",
      "78",
      "40",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4018 / 51 leaves remainder 40."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(184 ^ 47);",
    "options": [
      "231",
      "154",
      "151",
      "149"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10111000 and 101111 yields decimal 151."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4836 % 17);?",
    "options": [
      "284",
      "11",
      "0",
      "8"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4836 / 17 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 45; int y = 16; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "16",
      "12",
      "45",
      "78"
    ],
    "answer": 3,
    "explanation": "Condition (45 > 16) evaluates to true. Thus z is assigned to 45 + 33 which equals 78."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 169; int y = 126; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "151",
      "169",
      "187",
      "126"
    ],
    "answer": 2,
    "explanation": "Condition (169 > 126) evaluates to true. Thus z is assigned to 169 + 18 which equals 187."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 108; int y = 16; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "136",
      "80",
      "108",
      "16"
    ],
    "answer": 0,
    "explanation": "Condition (108 > 16) evaluates to true. Thus z is assigned to 108 + 28 which equals 136."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(97 ^ 73);",
    "options": [
      "170",
      "43",
      "38",
      "40"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1100001 and 1001001 yields decimal 40."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2003 % 48);?",
    "options": [
      "35",
      "0",
      "41",
      "38"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2003 / 48 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4088 % 53);?",
    "options": [
      "0",
      "7",
      "10",
      "77"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4088 / 53 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(97 & 23);",
    "options": [
      "1",
      "-1",
      "4",
      "120"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1100001 and 10111 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 46; int y = 94; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "94",
      "46",
      "109",
      "79"
    ],
    "answer": 3,
    "explanation": "Condition (46 > 94) evaluates to false. Thus z is assigned to 94 - 15 which equals 79."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 116; int y = 170; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "116",
      "170",
      "158",
      "182"
    ],
    "answer": 2,
    "explanation": "Condition (116 > 170) evaluates to false. Thus z is assigned to 170 - 12 which equals 158."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(157 ^ 47);",
    "options": [
      "178",
      "204",
      "176",
      "181"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10011101 and 101111 yields decimal 178."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(147 & 26);",
    "options": [
      "173",
      "16",
      "21",
      "18"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10010011 and 11010 yields decimal 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(87 | 62);",
    "options": [
      "130",
      "149",
      "127",
      "125"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1010111 and 111110 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1228 % 27);?",
    "options": [
      "45",
      "0",
      "16",
      "13"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1228 / 27 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 110; int y = 51; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "51",
      "143",
      "110",
      "77"
    ],
    "answer": 1,
    "explanation": "Condition (110 > 51) evaluates to true. Thus z is assigned to 110 + 33 which equals 143."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 76; int y = 33; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "105",
      "76",
      "47",
      "33"
    ],
    "answer": 0,
    "explanation": "Condition (76 > 33) evaluates to true. Thus z is assigned to 76 + 29 which equals 105."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1132 % 57);?",
    "options": [
      "19",
      "0",
      "49",
      "52"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1132 / 57 leaves remainder 49."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(145 ^ 96);",
    "options": [
      "265",
      "244",
      "241",
      "239"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10010001 and 1100000 yields decimal 241."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 93; int y = 181; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "181",
      "165",
      "197",
      "93"
    ],
    "answer": 1,
    "explanation": "Condition (93 > 181) evaluates to false. Thus z is assigned to 181 - 16 which equals 165."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(106 ^ 99);",
    "options": [
      "205",
      "12",
      "9",
      "7"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1101010 and 1100011 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 120; int y = 51; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "99",
      "141",
      "120",
      "51"
    ],
    "answer": 1,
    "explanation": "Condition (120 > 51) evaluates to true. Thus z is assigned to 120 + 21 which equals 141."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 97; int y = 119; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "119",
      "142",
      "97",
      "96"
    ],
    "answer": 3,
    "explanation": "Condition (97 > 119) evaluates to false. Thus z is assigned to 119 - 23 which equals 96."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(812 % 37);?",
    "options": [
      "0",
      "38",
      "21",
      "35"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 812 / 37 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(154 ^ 29);",
    "options": [
      "183",
      "138",
      "135",
      "133"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10011010 and 11101 yields decimal 135."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 34; int y = 176; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "184",
      "168",
      "176",
      "34"
    ],
    "answer": 1,
    "explanation": "Condition (34 > 176) evaluates to false. Thus z is assigned to 176 - 8 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 102; int y = 88; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "85",
      "88",
      "119",
      "102"
    ],
    "answer": 2,
    "explanation": "Condition (102 > 88) evaluates to true. Thus z is assigned to 102 + 17 which equals 119."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2875 % 10);?",
    "options": [
      "5",
      "0",
      "287",
      "8"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2875 / 10 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2918 % 55);?",
    "options": [
      "0",
      "3",
      "6",
      "53"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2918 / 55 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(90 | 21);",
    "options": [
      "98",
      "95",
      "93",
      "111"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1011010 and 10101 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4632 % 50);?",
    "options": [
      "32",
      "35",
      "0",
      "92"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4632 / 50 leaves remainder 32."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(85 | 13);",
    "options": [
      "93",
      "96",
      "91",
      "98"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1010101 and 1101 yields decimal 93."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1099 % 37);?",
    "options": [
      "0",
      "29",
      "26",
      "29"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1099 / 37 leaves remainder 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4959 % 42);?",
    "options": [
      "0",
      "118",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4959 / 42 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 204; int y = 27; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "223",
      "27",
      "185",
      "204"
    ],
    "answer": 0,
    "explanation": "Condition (204 > 27) evaluates to true. Thus z is assigned to 204 + 19 which equals 223."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 | 51);",
    "options": [
      "65",
      "61",
      "63",
      "66"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1110 and 110011 yields decimal 63."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1909 % 11);?",
    "options": [
      "173",
      "9",
      "6",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1909 / 11 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1079 % 22);?",
    "options": [
      "1",
      "0",
      "4",
      "49"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1079 / 22 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(83 & 33);",
    "options": [
      "-1",
      "4",
      "1",
      "116"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1010011 and 100001 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 113; int y = 127; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "146",
      "127",
      "113",
      "108"
    ],
    "answer": 3,
    "explanation": "Condition (113 > 127) evaluates to false. Thus z is assigned to 127 - 19 which equals 108."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4938 % 45);?",
    "options": [
      "109",
      "33",
      "0",
      "36"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4938 / 45 leaves remainder 33."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2287 % 41);?",
    "options": [
      "32",
      "35",
      "0",
      "55"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2287 / 41 leaves remainder 32."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(117 & 47);",
    "options": [
      "164",
      "35",
      "37",
      "40"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1110101 and 101111 yields decimal 37."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(87 ^ 71);",
    "options": [
      "14",
      "19",
      "158",
      "16"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1010111 and 1000111 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(111 | 80);",
    "options": [
      "127",
      "191",
      "130",
      "125"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1101111 and 1010000 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(91 ^ 19);",
    "options": [
      "70",
      "72",
      "75",
      "110"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1011011 and 10011 yields decimal 72."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 54; int y = 156; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "176",
      "136",
      "54",
      "156"
    ],
    "answer": 1,
    "explanation": "Condition (54 > 156) evaluates to false. Thus z is assigned to 156 - 20 which equals 136."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(35 | 47);",
    "options": [
      "82",
      "47",
      "45",
      "50"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 100011 and 101111 yields decimal 47."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(177 & 89);",
    "options": [
      "17",
      "266",
      "15",
      "20"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10110001 and 1011001 yields decimal 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 90; int y = 118; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "118",
      "526",
      "146",
      "90"
    ],
    "answer": 3,
    "explanation": "Condition (90 > 118) evaluates to false. Thus z is assigned to 118 - 28 which equals 90."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 44; int y = 140; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "127",
      "140",
      "153",
      "44"
    ],
    "answer": 0,
    "explanation": "Condition (44 > 140) evaluates to false. Thus z is assigned to 140 - 13 which equals 127."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(149 & 10);",
    "options": [
      "0",
      "3",
      "159",
      "-2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10010101 and 1010 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 143; int y = 134; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "130",
      "156",
      "134",
      "143"
    ],
    "answer": 1,
    "explanation": "Condition (143 > 134) evaluates to true. Thus z is assigned to 143 + 13 which equals 156."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 ^ 90);",
    "options": [
      "75",
      "108",
      "70",
      "72"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10010 and 1011010 yields decimal 72."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4622 % 33);?",
    "options": [
      "5",
      "140",
      "2",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4622 / 33 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(78 & 43);",
    "options": [
      "121",
      "13",
      "10",
      "8"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1001110 and 101011 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(875 % 11);?",
    "options": [
      "9",
      "0",
      "79",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 875 / 11 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 105; int y = 65; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "105",
      "71",
      "65",
      "139"
    ],
    "answer": 3,
    "explanation": "Condition (105 > 65) evaluates to true. Thus z is assigned to 105 + 34 which equals 139."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5047 % 38);?",
    "options": [
      "34",
      "132",
      "31",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 5047 / 38 leaves remainder 31."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3502 % 11);?",
    "options": [
      "7",
      "0",
      "4",
      "318"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3502 / 11 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 56; int y = 71; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "44",
      "56",
      "98",
      "71"
    ],
    "answer": 0,
    "explanation": "Condition (56 > 71) evaluates to false. Thus z is assigned to 71 - 27 which equals 44."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 130; int y = 17; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "137",
      "123",
      "130",
      "17"
    ],
    "answer": 0,
    "explanation": "Condition (130 > 17) evaluates to true. Thus z is assigned to 130 + 7 which equals 137."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 103; int y = 78; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "103",
      "69",
      "78",
      "137"
    ],
    "answer": 3,
    "explanation": "Condition (103 > 78) evaluates to true. Thus z is assigned to 103 + 34 which equals 137."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 69; int y = 90; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "108",
      "72",
      "69",
      "90"
    ],
    "answer": 1,
    "explanation": "Condition (69 > 90) evaluates to false. Thus z is assigned to 90 - 18 which equals 72."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(168 | 54);",
    "options": [
      "193",
      "190",
      "222",
      "188"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10101000 and 110110 yields decimal 190."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 208; int y = 89; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "89",
      "208",
      "214",
      "202"
    ],
    "answer": 2,
    "explanation": "Condition (208 > 89) evaluates to true. Thus z is assigned to 208 + 6 which equals 214."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3500 % 37);?",
    "options": [
      "22",
      "0",
      "94",
      "25"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3500 / 37 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(156 & 27);",
    "options": [
      "183",
      "24",
      "22",
      "27"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10011100 and 11011 yields decimal 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4539 % 53);?",
    "options": [
      "85",
      "0",
      "37",
      "34"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4539 / 53 leaves remainder 34."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2484 % 47);?",
    "options": [
      "0",
      "52",
      "40",
      "43"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2484 / 47 leaves remainder 40."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(93 & 43);",
    "options": [
      "12",
      "136",
      "7",
      "9"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1011101 and 101011 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4606 % 15);?",
    "options": [
      "1",
      "307",
      "0",
      "4"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4606 / 15 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(137 ^ 59);",
    "options": [
      "196",
      "181",
      "176",
      "178"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10001001 and 111011 yields decimal 178."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4619 % 27);?",
    "options": [
      "5",
      "2",
      "171",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4619 / 27 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 142; int y = 162; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "142",
      "130",
      "162",
      "194"
    ],
    "answer": 1,
    "explanation": "Condition (142 > 162) evaluates to false. Thus z is assigned to 162 - 32 which equals 130."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3923 % 56);?",
    "options": [
      "6",
      "70",
      "0",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3923 / 56 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4432 % 18);?",
    "options": [
      "0",
      "7",
      "246",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4432 / 18 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 59; int y = 20; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "77",
      "59",
      "20",
      "41"
    ],
    "answer": 0,
    "explanation": "Condition (59 > 20) evaluates to true. Thus z is assigned to 59 + 18 which equals 77."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(84 ^ 34);",
    "options": [
      "121",
      "142",
      "116",
      "118"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1010100 and 100010 yields decimal 118."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2744 % 51);?",
    "options": [
      "44",
      "0",
      "41",
      "53"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2744 / 51 leaves remainder 41."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(143 & 50);",
    "options": [
      "2",
      "193",
      "5",
      "0"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10001111 and 110010 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(202 ^ 104);",
    "options": [
      "165",
      "160",
      "306",
      "162"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 11001010 and 1101000 yields decimal 162."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 180; int y = 76; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "172",
      "76",
      "188",
      "180"
    ],
    "answer": 2,
    "explanation": "Condition (180 > 76) evaluates to true. Thus z is assigned to 180 + 8 which equals 188."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(160 ^ 83);",
    "options": [
      "246",
      "267",
      "241",
      "243"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10100000 and 1010011 yields decimal 243."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 73; int y = 52; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "40",
      "73",
      "52",
      "106"
    ],
    "answer": 3,
    "explanation": "Condition (73 > 52) evaluates to true. Thus z is assigned to 73 + 33 which equals 106."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(196 | 79);",
    "options": [
      "207",
      "210",
      "275",
      "205"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11000100 and 1001111 yields decimal 207."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(88 | 74);",
    "options": [
      "88",
      "90",
      "162",
      "93"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1011000 and 1001010 yields decimal 90."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(148 | 38);",
    "options": [
      "185",
      "180",
      "186",
      "182"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10010100 and 100110 yields decimal 182."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 50; int y = 102; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "102",
      "50",
      "94",
      "110"
    ],
    "answer": 2,
    "explanation": "Condition (50 > 102) evaluates to false. Thus z is assigned to 102 - 8 which equals 94."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 125; int y = 14; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "14",
      "134",
      "125",
      "116"
    ],
    "answer": 1,
    "explanation": "Condition (125 > 14) evaluates to true. Thus z is assigned to 125 + 9 which equals 134."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 84; int y = 66; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "71",
      "97",
      "84",
      "66"
    ],
    "answer": 1,
    "explanation": "Condition (84 > 66) evaluates to true. Thus z is assigned to 84 + 13 which equals 97."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(368 % 46);?",
    "options": [
      "0",
      "8",
      "3",
      "7"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 368 / 46 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(106 & 31);",
    "options": [
      "13",
      "137",
      "8",
      "10"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1101010 and 11111 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2914 % 38);?",
    "options": [
      "26",
      "76",
      "0",
      "29"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2914 / 38 leaves remainder 26."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 137; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "130",
      "11",
      "137",
      "144"
    ],
    "answer": 0,
    "explanation": "Condition (11 > 137) evaluates to false. Thus z is assigned to 137 - 7 which equals 130."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 27; int y = 78; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "78",
      "101",
      "55",
      "27"
    ],
    "answer": 2,
    "explanation": "Condition (27 > 78) evaluates to false. Thus z is assigned to 78 - 23 which equals 55."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(32 | 81);",
    "options": [
      "116",
      "113",
      "137",
      "111"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 100000 and 1010001 yields decimal 113."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 25; int y = 159; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "180",
      "138",
      "25",
      "159"
    ],
    "answer": 1,
    "explanation": "Condition (25 > 159) evaluates to false. Thus z is assigned to 159 - 21 which equals 138."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3623 % 25);?",
    "options": [
      "144",
      "26",
      "0",
      "23"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3623 / 25 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(33 | 28);",
    "options": [
      "59",
      "85",
      "64",
      "61"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 100001 and 11100 yields decimal 61."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 159; int y = 117; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "159",
      "117",
      "139",
      "179"
    ],
    "answer": 3,
    "explanation": "Condition (159 > 117) evaluates to true. Thus z is assigned to 159 + 20 which equals 179."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 40; int y = 178; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "173",
      "178",
      "183",
      "40"
    ],
    "answer": 0,
    "explanation": "Condition (40 > 178) evaluates to false. Thus z is assigned to 178 - 5 which equals 173."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(939 % 25);?",
    "options": [
      "17",
      "37",
      "14",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 939 / 25 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(151 & 49);",
    "options": [
      "20",
      "17",
      "200",
      "15"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10010111 and 110001 yields decimal 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(63 & 33);",
    "options": [
      "36",
      "33",
      "31",
      "96"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 111111 and 100001 yields decimal 33."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(56 & 17);",
    "options": [
      "73",
      "19",
      "16",
      "14"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 111000 and 10001 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(606 % 43);?",
    "options": [
      "7",
      "4",
      "14",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 606 / 43 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(184 | 85);",
    "options": [
      "251",
      "269",
      "253",
      "256"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10111000 and 1010101 yields decimal 253."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 71; int y = 136; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "102",
      "136",
      "71",
      "170"
    ],
    "answer": 0,
    "explanation": "Condition (71 > 136) evaluates to false. Thus z is assigned to 136 - 34 which equals 102."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3821 % 49);?",
    "options": [
      "77",
      "48",
      "0",
      "51"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3821 / 49 leaves remainder 48."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 52; int y = 152; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "185",
      "152",
      "52",
      "119"
    ],
    "answer": 3,
    "explanation": "Condition (52 > 152) evaluates to false. Thus z is assigned to 152 - 33 which equals 119."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 156; int y = 89; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "89",
      "163",
      "149",
      "156"
    ],
    "answer": 1,
    "explanation": "Condition (156 > 89) evaluates to true. Thus z is assigned to 156 + 7 which equals 163."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 96; int y = 57; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "71",
      "57",
      "121",
      "96"
    ],
    "answer": 2,
    "explanation": "Condition (96 > 57) evaluates to true. Thus z is assigned to 96 + 25 which equals 121."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1909 % 44);?",
    "options": [
      "0",
      "43",
      "20",
      "17"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1909 / 44 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(192 & 8);",
    "options": [
      "200",
      "3",
      "0",
      "-2"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 11000000 and 1000 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 29; int y = 45; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "45",
      "26",
      "64",
      "29"
    ],
    "answer": 1,
    "explanation": "Condition (29 > 45) evaluates to false. Thus z is assigned to 45 - 19 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3677 % 28);?",
    "options": [
      "12",
      "9",
      "0",
      "131"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3677 / 28 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(166 | 79);",
    "options": [
      "237",
      "245",
      "239",
      "242"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10100110 and 1001111 yields decimal 239."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 68; int y = 29; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "35",
      "101",
      "68",
      "29"
    ],
    "answer": 1,
    "explanation": "Condition (68 > 29) evaluates to true. Thus z is assigned to 68 + 33 which equals 101."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 68; int y = 138; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "138",
      "68",
      "115",
      "161"
    ],
    "answer": 2,
    "explanation": "Condition (68 > 138) evaluates to false. Thus z is assigned to 138 - 23 which equals 115."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2612 % 16);?",
    "options": [
      "163",
      "0",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2612 / 16 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 73; int y = 206; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "174",
      "206",
      "73",
      "238"
    ],
    "answer": 0,
    "explanation": "Condition (73 > 206) evaluates to false. Thus z is assigned to 206 - 32 which equals 174."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(164 | 6);",
    "options": [
      "164",
      "166",
      "169",
      "170"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10100100 and 110 yields decimal 166."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4653 % 21);?",
    "options": [
      "15",
      "221",
      "12",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4653 / 21 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(38 & 98);",
    "options": [
      "32",
      "37",
      "34",
      "136"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 100110 and 1100010 yields decimal 34."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(131 ^ 79);",
    "options": [
      "210",
      "204",
      "207",
      "202"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10000011 and 1001111 yields decimal 204."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(88 ^ 34);",
    "options": [
      "146",
      "125",
      "120",
      "122"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1011000 and 100010 yields decimal 122."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2095 % 43);?",
    "options": [
      "31",
      "0",
      "34",
      "48"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2095 / 43 leaves remainder 31."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 105; int y = 47; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "105",
      "100",
      "47",
      "110"
    ],
    "answer": 3,
    "explanation": "Condition (105 > 47) evaluates to true. Thus z is assigned to 105 + 5 which equals 110."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3650 % 37);?",
    "options": [
      "24",
      "98",
      "0",
      "27"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3650 / 37 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2519 % 35);?",
    "options": [
      "0",
      "34",
      "37",
      "71"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2519 / 35 leaves remainder 34."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1266 % 27);?",
    "options": [
      "27",
      "0",
      "46",
      "24"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1266 / 27 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3971 % 12);?",
    "options": [
      "11",
      "14",
      "0",
      "330"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3971 / 12 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(280 % 40);?",
    "options": [
      "7",
      "3",
      "0",
      "7"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 280 / 40 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3888 % 19);?",
    "options": [
      "204",
      "15",
      "0",
      "12"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3888 / 19 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 71; int y = 125; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "148",
      "102",
      "125",
      "71"
    ],
    "answer": 1,
    "explanation": "Condition (71 > 125) evaluates to false. Thus z is assigned to 125 - 23 which equals 102."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(93 & 90);",
    "options": [
      "86",
      "183",
      "91",
      "88"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1011101 and 1011010 yields decimal 88."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(73 & 98);",
    "options": [
      "171",
      "62",
      "67",
      "64"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1001001 and 1100010 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3287 % 24);?",
    "options": [
      "0",
      "23",
      "26",
      "136"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3287 / 24 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4253 % 41);?",
    "options": [
      "0",
      "30",
      "103",
      "33"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4253 / 41 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 162; int y = 22; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "162",
      "156",
      "168",
      "22"
    ],
    "answer": 2,
    "explanation": "Condition (162 > 22) evaluates to true. Thus z is assigned to 162 + 6 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 130; int y = 99; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "151",
      "109",
      "99",
      "130"
    ],
    "answer": 0,
    "explanation": "Condition (130 > 99) evaluates to true. Thus z is assigned to 130 + 21 which equals 151."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 186; int y = 27; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "170",
      "202",
      "186",
      "27"
    ],
    "answer": 1,
    "explanation": "Condition (186 > 27) evaluates to true. Thus z is assigned to 186 + 16 which equals 202."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 62; int y = 107; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "81",
      "133",
      "107",
      "62"
    ],
    "answer": 0,
    "explanation": "Condition (62 > 107) evaluates to false. Thus z is assigned to 107 - 26 which equals 81."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(188 | 89);",
    "options": [
      "256",
      "251",
      "253",
      "277"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10111100 and 1011001 yields decimal 253."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2811 % 55);?",
    "options": [
      "51",
      "6",
      "0",
      "9"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2811 / 55 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 127; int y = 85; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "105",
      "127",
      "149",
      "85"
    ],
    "answer": 2,
    "explanation": "Condition (127 > 85) evaluates to true. Thus z is assigned to 127 + 22 which equals 149."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4362 % 11);?",
    "options": [
      "0",
      "9",
      "6",
      "396"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4362 / 11 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 158; int y = 171; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "189",
      "158",
      "171",
      "153"
    ],
    "answer": 3,
    "explanation": "Condition (158 > 171) evaluates to false. Thus z is assigned to 171 - 18 which equals 153."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3195 % 14);?",
    "options": [
      "0",
      "228",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3195 / 14 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 111; int y = 197; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "211",
      "197",
      "183",
      "111"
    ],
    "answer": 2,
    "explanation": "Condition (111 > 197) evaluates to false. Thus z is assigned to 197 - 14 which equals 183."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2537 % 34);?",
    "options": [
      "0",
      "74",
      "21",
      "24"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2537 / 34 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 113; int y = 137; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "137",
      "113",
      "104",
      "170"
    ],
    "answer": 2,
    "explanation": "Condition (113 > 137) evaluates to false. Thus z is assigned to 137 - 33 which equals 104."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4531 % 46);?",
    "options": [
      "0",
      "98",
      "26",
      "23"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4531 / 46 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 97; int y = 25; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "127",
      "25",
      "97",
      "67"
    ],
    "answer": 0,
    "explanation": "Condition (97 > 25) evaluates to true. Thus z is assigned to 97 + 30 which equals 127."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 47; int y = 189; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "47",
      "160",
      "218",
      "189"
    ],
    "answer": 1,
    "explanation": "Condition (47 > 189) evaluates to false. Thus z is assigned to 189 - 29 which equals 160."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(86 ^ 15);",
    "options": [
      "101",
      "89",
      "92",
      "87"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1010110 and 1111 yields decimal 89."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 194; int y = 67; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "181",
      "207",
      "194",
      "67"
    ],
    "answer": 1,
    "explanation": "Condition (194 > 67) evaluates to true. Thus z is assigned to 194 + 13 which equals 207."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(811 % 20);?",
    "options": [
      "14",
      "11",
      "0",
      "40"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 811 / 20 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3574 % 16);?",
    "options": [
      "0",
      "6",
      "223",
      "9"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3574 / 16 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4965 % 11);?",
    "options": [
      "451",
      "7",
      "0",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4965 / 11 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 106; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "106",
      "15",
      "137",
      "75"
    ],
    "answer": 3,
    "explanation": "Condition (15 > 106) evaluates to false. Thus z is assigned to 106 - 31 which equals 75."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(75 ^ 11);",
    "options": [
      "86",
      "67",
      "64",
      "62"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1001011 and 1011 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 196; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "167",
      "196",
      "225",
      "23"
    ],
    "answer": 0,
    "explanation": "Condition (23 > 196) evaluates to false. Thus z is assigned to 196 - 29 which equals 167."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(190 ^ 45);",
    "options": [
      "147",
      "235",
      "150",
      "145"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10111110 and 101101 yields decimal 147."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(96 | 86);",
    "options": [
      "116",
      "182",
      "121",
      "118"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1100000 and 1010110 yields decimal 118."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1632 % 25);?",
    "options": [
      "0",
      "10",
      "7",
      "65"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1632 / 25 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(111 ^ 97);",
    "options": [
      "12",
      "17",
      "208",
      "14"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1101111 and 1100001 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(629 % 13);?",
    "options": [
      "8",
      "0",
      "48",
      "5"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 629 / 13 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 91; int y = 41; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "41",
      "116",
      "91",
      "66"
    ],
    "answer": 1,
    "explanation": "Condition (91 > 41) evaluates to true. Thus z is assigned to 91 + 25 which equals 116."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(84 | 88);",
    "options": [
      "172",
      "90",
      "95",
      "92"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1010100 and 1011000 yields decimal 92."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 198; int y = 69; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "198",
      "175",
      "69",
      "221"
    ],
    "answer": 3,
    "explanation": "Condition (198 > 69) evaluates to true. Thus z is assigned to 198 + 23 which equals 221."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 144; int y = 166; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "196",
      "144",
      "136",
      "166"
    ],
    "answer": 2,
    "explanation": "Condition (144 > 166) evaluates to false. Thus z is assigned to 166 - 30 which equals 136."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 204; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "224",
      "204",
      "184",
      "23"
    ],
    "answer": 2,
    "explanation": "Condition (23 > 204) evaluates to false. Thus z is assigned to 204 - 20 which equals 184."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(157 & 95);",
    "options": [
      "32",
      "29",
      "27",
      "252"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10011101 and 1011111 yields decimal 29."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(182 ^ 88);",
    "options": [
      "241",
      "270",
      "236",
      "238"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10110110 and 1011000 yields decimal 238."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 185; int y = 19; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "213",
      "157",
      "185",
      "19"
    ],
    "answer": 0,
    "explanation": "Condition (185 > 19) evaluates to true. Thus z is assigned to 185 + 28 which equals 213."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(58 & 102);",
    "options": [
      "32",
      "34",
      "37",
      "160"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 111010 and 1100110 yields decimal 34."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 161; int y = 184; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "214",
      "184",
      "161",
      "154"
    ],
    "answer": 3,
    "explanation": "Condition (161 > 184) evaluates to false. Thus z is assigned to 184 - 30 which equals 154."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2638 % 41);?",
    "options": [
      "0",
      "17",
      "64",
      "14"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2638 / 41 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3506 % 20);?",
    "options": [
      "0",
      "175",
      "6",
      "9"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3506 / 20 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2252 % 29);?",
    "options": [
      "22",
      "0",
      "77",
      "19"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2252 / 29 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 46; int y = 45; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "45",
      "18",
      "46",
      "74"
    ],
    "answer": 3,
    "explanation": "Condition (46 > 45) evaluates to true. Thus z is assigned to 46 + 28 which equals 74."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 64; int y = 124; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "64",
      "116",
      "132",
      "124"
    ],
    "answer": 1,
    "explanation": "Condition (64 > 124) evaluates to false. Thus z is assigned to 124 - 8 which equals 116."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(106 ^ 66);",
    "options": [
      "43",
      "40",
      "38",
      "172"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1101010 and 1000010 yields decimal 40."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4705 % 39);?",
    "options": [
      "25",
      "120",
      "28",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4705 / 39 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(93 ^ 33);",
    "options": [
      "122",
      "127",
      "126",
      "124"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1011101 and 100001 yields decimal 124."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 | 93);",
    "options": [
      "93",
      "111",
      "98",
      "95"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10010 and 1011101 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 140; int y = 69; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "69",
      "174",
      "106",
      "140"
    ],
    "answer": 1,
    "explanation": "Condition (140 > 69) evaluates to true. Thus z is assigned to 140 + 34 which equals 174."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 82; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "67",
      "21",
      "82",
      "97"
    ],
    "answer": 0,
    "explanation": "Condition (21 > 82) evaluates to false. Thus z is assigned to 82 - 15 which equals 67."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(219 % 55);?",
    "options": [
      "0",
      "3",
      "54",
      "57"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 219 / 55 leaves remainder 54."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(182 | 40);",
    "options": [
      "193",
      "188",
      "222",
      "190"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10110110 and 101000 yields decimal 190."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(60 ^ 82);",
    "options": [
      "108",
      "110",
      "142",
      "113"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 111100 and 1010010 yields decimal 110."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 83; int y = 87; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "83",
      "95",
      "79",
      "87"
    ],
    "answer": 2,
    "explanation": "Condition (83 > 87) evaluates to false. Thus z is assigned to 87 - 8 which equals 79."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3379 % 32);?",
    "options": [
      "105",
      "19",
      "22",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3379 / 32 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(57 ^ 19);",
    "options": [
      "42",
      "76",
      "45",
      "40"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 111001 and 10011 yields decimal 42."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 134; int y = 156; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "134",
      "156",
      "169",
      "143"
    ],
    "answer": 3,
    "explanation": "Condition (134 > 156) evaluates to false. Thus z is assigned to 156 - 13 which equals 143."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1516 % 34);?",
    "options": [
      "20",
      "44",
      "0",
      "23"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1516 / 34 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(207 | 12);",
    "options": [
      "210",
      "219",
      "205",
      "207"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 11001111 and 1100 yields decimal 207."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(140 & 8);",
    "options": [
      "148",
      "8",
      "6",
      "11"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10001100 and 1000 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 140; int y = 191; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "164",
      "218",
      "140",
      "191"
    ],
    "answer": 0,
    "explanation": "Condition (140 > 191) evaluates to false. Thus z is assigned to 191 - 27 which equals 164."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(108 & 9);",
    "options": [
      "117",
      "11",
      "8",
      "6"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1101100 and 1001 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(127 | 101);",
    "options": [
      "125",
      "130",
      "127",
      "228"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1111111 and 1100101 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 100; int y = 148; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "100",
      "116",
      "148",
      "180"
    ],
    "answer": 1,
    "explanation": "Condition (100 > 148) evaluates to false. Thus z is assigned to 148 - 32 which equals 116."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(63 ^ 73);",
    "options": [
      "136",
      "121",
      "116",
      "118"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 111111 and 1001001 yields decimal 118."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(42 & 51);",
    "options": [
      "37",
      "93",
      "32",
      "34"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 101010 and 110011 yields decimal 34."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(119 | 71);",
    "options": [
      "122",
      "190",
      "117",
      "119"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1110111 and 1000111 yields decimal 119."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4296 % 44);?",
    "options": [
      "28",
      "31",
      "97",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4296 / 44 leaves remainder 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4383 % 42);?",
    "options": [
      "0",
      "18",
      "104",
      "15"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4383 / 42 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(148 | 32);",
    "options": [
      "178",
      "183",
      "204",
      "180"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10010100 and 100000 yields decimal 180."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2248 % 29);?",
    "options": [
      "0",
      "15",
      "18",
      "77"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2248 / 29 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1298 % 48);?",
    "options": [
      "2",
      "27",
      "0",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1298 / 48 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(65 ^ 66);",
    "options": [
      "6",
      "1",
      "131",
      "3"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1000001 and 1000010 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 99; int y = 88; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "82",
      "116",
      "88",
      "99"
    ],
    "answer": 1,
    "explanation": "Condition (99 > 88) evaluates to true. Thus z is assigned to 99 + 17 which equals 116."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 15; int y = 131; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "131",
      "162",
      "15",
      "100"
    ],
    "answer": 3,
    "explanation": "Condition (15 > 131) evaluates to false. Thus z is assigned to 131 - 31 which equals 100."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(190 | 16);",
    "options": [
      "188",
      "206",
      "193",
      "190"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10111110 and 10000 yields decimal 190."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 120; int y = 95; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "152",
      "120",
      "88",
      "95"
    ],
    "answer": 0,
    "explanation": "Condition (120 > 95) evaluates to true. Thus z is assigned to 120 + 32 which equals 152."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(137 | 30);",
    "options": [
      "167",
      "162",
      "157",
      "159"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10001001 and 11110 yields decimal 159."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(122 | 33);",
    "options": [
      "126",
      "155",
      "121",
      "123"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1111010 and 100001 yields decimal 123."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 188; int y = 155; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "217",
      "188",
      "155",
      "159"
    ],
    "answer": 0,
    "explanation": "Condition (188 > 155) evaluates to true. Thus z is assigned to 188 + 29 which equals 217."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(81 ^ 37);",
    "options": [
      "119",
      "114",
      "116",
      "118"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1010001 and 100101 yields decimal 116."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 96; int y = 19; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "19",
      "96",
      "112",
      "80"
    ],
    "answer": 2,
    "explanation": "Condition (96 > 19) evaluates to true. Thus z is assigned to 96 + 16 which equals 112."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 59; int y = 165; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "145",
      "165",
      "185",
      "59"
    ],
    "answer": 0,
    "explanation": "Condition (59 > 165) evaluates to false. Thus z is assigned to 165 - 20 which equals 145."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 51; int y = 190; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "218",
      "162",
      "51",
      "190"
    ],
    "answer": 1,
    "explanation": "Condition (51 > 190) evaluates to false. Thus z is assigned to 190 - 28 which equals 162."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 53; int y = 125; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "125",
      "155",
      "95",
      "53"
    ],
    "answer": 2,
    "explanation": "Condition (53 > 125) evaluates to false. Thus z is assigned to 125 - 30 which equals 95."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(161 & 96);",
    "options": [
      "32",
      "257",
      "30",
      "35"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10100001 and 1100000 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4001 % 16);?",
    "options": [
      "0",
      "4",
      "250",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4001 / 16 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3265 % 45);?",
    "options": [
      "0",
      "25",
      "28",
      "72"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3265 / 45 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 153; int y = 183; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "183",
      "170",
      "196",
      "153"
    ],
    "answer": 1,
    "explanation": "Condition (153 > 183) evaluates to false. Thus z is assigned to 183 - 13 which equals 170."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4320 % 46);?",
    "options": [
      "93",
      "42",
      "45",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4320 / 46 leaves remainder 42."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 95; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "95",
      "76",
      "114",
      "10"
    ],
    "answer": 1,
    "explanation": "Condition (10 > 95) evaluates to false. Thus z is assigned to 95 - 19 which equals 76."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(174 & 67);",
    "options": [
      "0",
      "2",
      "241",
      "5"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10101110 and 1000011 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3185 % 45);?",
    "options": [
      "38",
      "35",
      "70",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3185 / 45 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 63; int y = 160; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "63",
      "141",
      "179",
      "160"
    ],
    "answer": 1,
    "explanation": "Condition (63 > 160) evaluates to false. Thus z is assigned to 160 - 19 which equals 141."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(49 & 48);",
    "options": [
      "46",
      "51",
      "48",
      "97"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 110001 and 110000 yields decimal 48."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4624 % 35);?",
    "options": [
      "7",
      "0",
      "132",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4624 / 35 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3976 % 32);?",
    "options": [
      "124",
      "8",
      "11",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3976 / 32 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 171; int y = 35; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "205",
      "35",
      "171",
      "137"
    ],
    "answer": 0,
    "explanation": "Condition (171 > 35) evaluates to true. Thus z is assigned to 171 + 34 which equals 205."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1980 % 17);?",
    "options": [
      "8",
      "116",
      "0",
      "11"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1980 / 17 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2050 % 34);?",
    "options": [
      "60",
      "0",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2050 / 34 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1384 % 17);?",
    "options": [
      "0",
      "10",
      "7",
      "81"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1384 / 17 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(185 & 59);",
    "options": [
      "60",
      "57",
      "55",
      "244"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10111001 and 111011 yields decimal 57."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4668 % 26);?",
    "options": [
      "17",
      "0",
      "14",
      "179"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4668 / 26 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(303 % 18);?",
    "options": [
      "15",
      "16",
      "18",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 303 / 18 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(185 ^ 19);",
    "options": [
      "170",
      "173",
      "204",
      "168"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10111001 and 10011 yields decimal 170."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4648 % 22);?",
    "options": [
      "0",
      "6",
      "9",
      "211"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4648 / 22 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 51; int y = 178; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "178",
      "196",
      "160",
      "51"
    ],
    "answer": 2,
    "explanation": "Condition (51 > 178) evaluates to false. Thus z is assigned to 178 - 18 which equals 160."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 41; int y = 105; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "72",
      "105",
      "138",
      "41"
    ],
    "answer": 0,
    "explanation": "Condition (41 > 105) evaluates to false. Thus z is assigned to 105 - 33 which equals 72."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1508 % 54);?",
    "options": [
      "27",
      "50",
      "0",
      "53"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1508 / 54 leaves remainder 50."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 81; int y = 92; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "81",
      "112",
      "92",
      "72"
    ],
    "answer": 3,
    "explanation": "Condition (81 > 92) evaluates to false. Thus z is assigned to 92 - 20 which equals 72."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4519 % 37);?",
    "options": [
      "122",
      "8",
      "0",
      "5"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4519 / 37 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 52; int y = 150; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "150",
      "159",
      "141",
      "52"
    ],
    "answer": 2,
    "explanation": "Condition (52 > 150) evaluates to false. Thus z is assigned to 150 - 9 which equals 141."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 112; int y = 166; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "112",
      "166",
      "149",
      "183"
    ],
    "answer": 2,
    "explanation": "Condition (112 > 166) evaluates to false. Thus z is assigned to 166 - 17 which equals 149."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 201; int y = 84; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "84",
      "201",
      "187",
      "215"
    ],
    "answer": 3,
    "explanation": "Condition (201 > 84) evaluates to true. Thus z is assigned to 201 + 14 which equals 215."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(50 ^ 47);",
    "options": [
      "97",
      "29",
      "32",
      "27"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 110010 and 101111 yields decimal 29."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(203 | 80);",
    "options": [
      "217",
      "222",
      "283",
      "219"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 11001011 and 1010000 yields decimal 219."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 184; int y = 73; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "184",
      "73",
      "155",
      "213"
    ],
    "answer": 3,
    "explanation": "Condition (184 > 73) evaluates to true. Thus z is assigned to 184 + 29 which equals 213."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(427 % 41);?",
    "options": [
      "20",
      "10",
      "17",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 427 / 41 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 29; int y = 53; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "80",
      "29",
      "53",
      "26"
    ],
    "answer": 3,
    "explanation": "Condition (29 > 53) evaluates to false. Thus z is assigned to 53 - 27 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(164 ^ 22);",
    "options": [
      "178",
      "186",
      "176",
      "181"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10100100 and 10110 yields decimal 178."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(151 & 100);",
    "options": [
      "7",
      "4",
      "2",
      "251"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10010111 and 1100100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(181 | 60);",
    "options": [
      "189",
      "192",
      "187",
      "241"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10110101 and 111100 yields decimal 189."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(41 ^ 98);",
    "options": [
      "78",
      "139",
      "73",
      "75"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 101001 and 1100010 yields decimal 75."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(147 ^ 72);",
    "options": [
      "243",
      "219",
      "217",
      "222"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10010011 and 1001000 yields decimal 219."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3511 % 36);?",
    "options": [
      "22",
      "0",
      "97",
      "19"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3511 / 36 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(438 % 20);?",
    "options": [
      "21",
      "21",
      "0",
      "18"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 438 / 20 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 30; int y = 187; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "187",
      "153",
      "30",
      "221"
    ],
    "answer": 1,
    "explanation": "Condition (30 > 187) evaluates to false. Thus z is assigned to 187 - 34 which equals 153."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(350 % 26);?",
    "options": [
      "0",
      "12",
      "15",
      "13"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 350 / 26 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5051 % 16);?",
    "options": [
      "14",
      "315",
      "11",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 5051 / 16 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(412 % 34);?",
    "options": [
      "7",
      "12",
      "4",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 412 / 34 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(133 & 44);",
    "options": [
      "7",
      "2",
      "177",
      "4"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10000101 and 101100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 191; int y = 54; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "191",
      "54",
      "161",
      "221"
    ],
    "answer": 3,
    "explanation": "Condition (191 > 54) evaluates to true. Thus z is assigned to 191 + 30 which equals 221."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 60; int y = 26; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "44",
      "76",
      "26",
      "60"
    ],
    "answer": 1,
    "explanation": "Condition (60 > 26) evaluates to true. Thus z is assigned to 60 + 16 which equals 76."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 89; int y = 137; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "125",
      "89",
      "149",
      "137"
    ],
    "answer": 0,
    "explanation": "Condition (89 > 137) evaluates to false. Thus z is assigned to 137 - 12 which equals 125."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 57; int y = 178; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "178",
      "163",
      "57",
      "193"
    ],
    "answer": 1,
    "explanation": "Condition (57 > 178) evaluates to false. Thus z is assigned to 178 - 15 which equals 163."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 26; int y = 83; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "67",
      "99",
      "83",
      "26"
    ],
    "answer": 0,
    "explanation": "Condition (26 > 83) evaluates to false. Thus z is assigned to 83 - 16 which equals 67."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 205; int y = 177; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "205",
      "177",
      "180",
      "230"
    ],
    "answer": 3,
    "explanation": "Condition (205 > 177) evaluates to true. Thus z is assigned to 205 + 25 which equals 230."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(163 & 76);",
    "options": [
      "0",
      "239",
      "3",
      "-2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10100011 and 1001100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(56 & 57);",
    "options": [
      "113",
      "56",
      "54",
      "59"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 111000 and 111001 yields decimal 56."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(79 | 89);",
    "options": [
      "93",
      "98",
      "168",
      "95"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1001111 and 1011001 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 107; int y = 112; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "95",
      "129",
      "107",
      "112"
    ],
    "answer": 0,
    "explanation": "Condition (107 > 112) evaluates to false. Thus z is assigned to 112 - 17 which equals 95."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3593 % 12);?",
    "options": [
      "0",
      "8",
      "299",
      "5"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3593 / 12 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2723 % 36);?",
    "options": [
      "26",
      "0",
      "23",
      "75"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2723 / 36 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2605 % 46);?",
    "options": [
      "56",
      "0",
      "32",
      "29"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2605 / 46 leaves remainder 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 32; int y = 198; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "32",
      "178",
      "198",
      "218"
    ],
    "answer": 1,
    "explanation": "Condition (32 > 198) evaluates to false. Thus z is assigned to 198 - 20 which equals 178."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(56 & 54);",
    "options": [
      "110",
      "46",
      "48",
      "51"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 111000 and 110110 yields decimal 48."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 146; int y = 163; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "133",
      "163",
      "193",
      "146"
    ],
    "answer": 0,
    "explanation": "Condition (146 > 163) evaluates to false. Thus z is assigned to 163 - 30 which equals 133."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1075 % 57);?",
    "options": [
      "52",
      "18",
      "49",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1075 / 57 leaves remainder 49."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1857 % 25);?",
    "options": [
      "10",
      "0",
      "74",
      "7"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1857 / 25 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 197; int y = 28; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "28",
      "171",
      "197",
      "223"
    ],
    "answer": 3,
    "explanation": "Condition (197 > 28) evaluates to true. Thus z is assigned to 197 + 26 which equals 223."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1124 % 23);?",
    "options": [
      "23",
      "48",
      "20",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1124 / 23 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(40 ^ 52);",
    "options": [
      "92",
      "28",
      "31",
      "26"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 101000 and 110100 yields decimal 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 145; int y = 194; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "194",
      "145",
      "166",
      "222"
    ],
    "answer": 2,
    "explanation": "Condition (145 > 194) evaluates to false. Thus z is assigned to 194 - 28 which equals 166."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 140; int y = 121; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "147",
      "133",
      "121",
      "140"
    ],
    "answer": 0,
    "explanation": "Condition (140 > 121) evaluates to true. Thus z is assigned to 140 + 7 which equals 147."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1720 % 23);?",
    "options": [
      "21",
      "0",
      "74",
      "18"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1720 / 23 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 187; int y = 20; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "20",
      "181",
      "193",
      "187"
    ],
    "answer": 2,
    "explanation": "Condition (187 > 20) evaluates to true. Thus z is assigned to 187 + 6 which equals 193."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 ^ 72);",
    "options": [
      "85",
      "69",
      "67",
      "72"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1101 and 1001000 yields decimal 69."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3607 % 20);?",
    "options": [
      "0",
      "10",
      "180",
      "7"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3607 / 20 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 178; int y = 166; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "202",
      "178",
      "154",
      "166"
    ],
    "answer": 0,
    "explanation": "Condition (178 > 166) evaluates to true. Thus z is assigned to 178 + 24 which equals 202."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3870 % 16);?",
    "options": [
      "14",
      "17",
      "241",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3870 / 16 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 73; int y = 53; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "73",
      "61",
      "53",
      "85"
    ],
    "answer": 3,
    "explanation": "Condition (73 > 53) evaluates to true. Thus z is assigned to 73 + 12 which equals 85."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 203; int y = 125; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "125",
      "203",
      "229",
      "177"
    ],
    "answer": 2,
    "explanation": "Condition (203 > 125) evaluates to true. Thus z is assigned to 203 + 26 which equals 229."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(61 ^ 18);",
    "options": [
      "45",
      "79",
      "47",
      "50"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 111101 and 10010 yields decimal 47."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(206 % 41);?",
    "options": [
      "0",
      "1",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 206 / 41 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(76 & 26);",
    "options": [
      "102",
      "8",
      "6",
      "11"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1001100 and 11010 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(127 | 27);",
    "options": [
      "127",
      "130",
      "154",
      "125"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1111111 and 11011 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(151 | 42);",
    "options": [
      "189",
      "194",
      "191",
      "193"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10010111 and 101010 yields decimal 191."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(75 | 24);",
    "options": [
      "94",
      "89",
      "99",
      "91"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1001011 and 11000 yields decimal 91."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4099 % 46);?",
    "options": [
      "0",
      "8",
      "5",
      "89"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4099 / 46 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(158 & 98);",
    "options": [
      "5",
      "2",
      "256",
      "0"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10011110 and 1100010 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 97; int y = 129; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "97",
      "155",
      "129",
      "103"
    ],
    "answer": 3,
    "explanation": "Condition (97 > 129) evaluates to false. Thus z is assigned to 129 - 26 which equals 103."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(207 | 22);",
    "options": [
      "229",
      "223",
      "226",
      "221"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 11001111 and 10110 yields decimal 223."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4691 % 18);?",
    "options": [
      "260",
      "14",
      "11",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4691 / 18 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 125; int y = 21; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "21",
      "125",
      "115",
      "135"
    ],
    "answer": 3,
    "explanation": "Condition (125 > 21) evaluates to true. Thus z is assigned to 125 + 10 which equals 135."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(41 | 7);",
    "options": [
      "47",
      "45",
      "50",
      "48"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 101001 and 111 yields decimal 47."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(677 % 12);?",
    "options": [
      "0",
      "8",
      "5",
      "56"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 677 / 12 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1637 % 12);?",
    "options": [
      "5",
      "0",
      "136",
      "8"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1637 / 12 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1795 % 26);?",
    "options": [
      "0",
      "69",
      "1",
      "4"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1795 / 26 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 178; int y = 23; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "23",
      "155",
      "178",
      "201"
    ],
    "answer": 3,
    "explanation": "Condition (178 > 23) evaluates to true. Thus z is assigned to 178 + 23 which equals 201."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4983 % 32);?",
    "options": [
      "0",
      "26",
      "23",
      "155"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4983 / 32 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 34; int y = 139; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "34",
      "139",
      "148",
      "130"
    ],
    "answer": 3,
    "explanation": "Condition (34 > 139) evaluates to false. Thus z is assigned to 139 - 9 which equals 130."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2527 % 30);?",
    "options": [
      "7",
      "0",
      "84",
      "10"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2527 / 30 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1541 % 43);?",
    "options": [
      "39",
      "36",
      "0",
      "35"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1541 / 43 leaves remainder 36."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(194 ^ 12);",
    "options": [
      "230",
      "204",
      "209",
      "206"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 11000010 and 1100 yields decimal 206."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(181 | 28);",
    "options": [
      "192",
      "209",
      "189",
      "187"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10110101 and 11100 yields decimal 189."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(190 ^ 98);",
    "options": [
      "220",
      "218",
      "223",
      "288"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10111110 and 1100010 yields decimal 220."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2410 % 15);?",
    "options": [
      "160",
      "10",
      "13",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2410 / 15 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(176 & 90);",
    "options": [
      "266",
      "16",
      "19",
      "14"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10110000 and 1011010 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2790 % 28);?",
    "options": [
      "21",
      "0",
      "18",
      "99"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2790 / 28 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(177 & 98);",
    "options": [
      "275",
      "32",
      "30",
      "35"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10110001 and 1100010 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(126 & 54);",
    "options": [
      "180",
      "52",
      "57",
      "54"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1111110 and 110110 yields decimal 54."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3658 % 46);?",
    "options": [
      "24",
      "79",
      "27",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3658 / 46 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4360 % 42);?",
    "options": [
      "34",
      "103",
      "0",
      "37"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4360 / 42 leaves remainder 34."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(71 ^ 7);",
    "options": [
      "64",
      "78",
      "62",
      "67"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1000111 and 111 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2049 % 48);?",
    "options": [
      "33",
      "36",
      "0",
      "42"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2049 / 48 leaves remainder 33."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2711 % 26);?",
    "options": [
      "104",
      "0",
      "10",
      "7"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2711 / 26 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4953 % 49);?",
    "options": [
      "101",
      "4",
      "0",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4953 / 49 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(236 % 11);?",
    "options": [
      "0",
      "5",
      "21",
      "8"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 236 / 11 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3707 % 32);?",
    "options": [
      "115",
      "27",
      "30",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3707 / 32 leaves remainder 27."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(32 | 33);",
    "options": [
      "33",
      "65",
      "36",
      "31"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 100000 and 100001 yields decimal 33."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(79 ^ 99);",
    "options": [
      "47",
      "44",
      "178",
      "42"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1001111 and 1100011 yields decimal 44."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(90 ^ 50);",
    "options": [
      "140",
      "102",
      "107",
      "104"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1011010 and 110010 yields decimal 104."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(333 % 34);?",
    "options": [
      "0",
      "27",
      "9",
      "30"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 333 / 34 leaves remainder 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3202 % 27);?",
    "options": [
      "16",
      "19",
      "0",
      "118"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3202 / 27 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4897 % 54);?",
    "options": [
      "0",
      "40",
      "37",
      "90"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4897 / 54 leaves remainder 37."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4138 % 59);?",
    "options": [
      "70",
      "0",
      "11",
      "8"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4138 / 59 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 125; int y = 67; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "125",
      "134",
      "67",
      "116"
    ],
    "answer": 1,
    "explanation": "Condition (125 > 67) evaluates to true. Thus z is assigned to 125 + 9 which equals 134."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2267 % 13);?",
    "options": [
      "0",
      "8",
      "174",
      "5"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2267 / 13 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4342 % 24);?",
    "options": [
      "0",
      "25",
      "180",
      "22"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4342 / 24 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 93; int y = 24; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "93",
      "101",
      "85",
      "24"
    ],
    "answer": 1,
    "explanation": "Condition (93 > 24) evaluates to true. Thus z is assigned to 93 + 8 which equals 101."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(190 | 12);",
    "options": [
      "190",
      "193",
      "202",
      "188"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10111110 and 1100 yields decimal 190."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(206 & 29);",
    "options": [
      "12",
      "235",
      "10",
      "15"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11001110 and 11101 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 208; int y = 36; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "186",
      "36",
      "208",
      "230"
    ],
    "answer": 3,
    "explanation": "Condition (208 > 36) evaluates to true. Thus z is assigned to 208 + 22 which equals 230."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2742 % 45);?",
    "options": [
      "60",
      "0",
      "45",
      "42"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2742 / 45 leaves remainder 42."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(56 & 38);",
    "options": [
      "35",
      "32",
      "94",
      "30"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 111000 and 100110 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 47; int y = 56; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "47",
      "31",
      "81",
      "56"
    ],
    "answer": 1,
    "explanation": "Condition (47 > 56) evaluates to false. Thus z is assigned to 56 - 25 which equals 31."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 74; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "65",
      "16",
      "83",
      "74"
    ],
    "answer": 0,
    "explanation": "Condition (16 > 74) evaluates to false. Thus z is assigned to 74 - 9 which equals 65."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1966 % 16);?",
    "options": [
      "122",
      "14",
      "17",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1966 / 16 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(678 % 38);?",
    "options": [
      "35",
      "32",
      "17",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 678 / 38 leaves remainder 32."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 104; int y = 104; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "99",
      "109",
      "104",
      "104"
    ],
    "answer": 0,
    "explanation": "Condition (104 > 104) evaluates to false. Thus z is assigned to 104 - 5 which equals 99."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 123; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "19",
      "147",
      "123",
      "99"
    ],
    "answer": 3,
    "explanation": "Condition (19 > 123) evaluates to false. Thus z is assigned to 123 - 24 which equals 99."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1667 % 17);?",
    "options": [
      "4",
      "0",
      "1",
      "98"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1667 / 17 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(432 % 27);?",
    "options": [
      "16",
      "3",
      "7",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 432 / 27 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4131 % 19);?",
    "options": [
      "0",
      "8",
      "217",
      "11"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4131 / 19 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(525 % 14);?",
    "options": [
      "10",
      "37",
      "7",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 525 / 14 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 134; int y = 187; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "134",
      "187",
      "180",
      "194"
    ],
    "answer": 2,
    "explanation": "Condition (134 > 187) evaluates to false. Thus z is assigned to 187 - 7 which equals 180."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 33; int y = 130; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "101",
      "159",
      "130",
      "33"
    ],
    "answer": 0,
    "explanation": "Condition (33 > 130) evaluates to false. Thus z is assigned to 130 - 29 which equals 101."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 56; int y = 16; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "26",
      "86",
      "16",
      "56"
    ],
    "answer": 1,
    "explanation": "Condition (56 > 16) evaluates to true. Thus z is assigned to 56 + 30 which equals 86."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2736 % 30);?",
    "options": [
      "6",
      "91",
      "0",
      "9"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2736 / 30 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 27; int y = 159; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "152",
      "159",
      "166",
      "27"
    ],
    "answer": 0,
    "explanation": "Condition (27 > 159) evaluates to false. Thus z is assigned to 159 - 7 which equals 152."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(128 ^ 16);",
    "options": [
      "147",
      "144",
      "168",
      "142"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10000000 and 10000 yields decimal 144."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(36 & 67);",
    "options": [
      "-2",
      "3",
      "103",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 100100 and 1000011 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 187; int y = 93; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "187",
      "93",
      "159",
      "215"
    ],
    "answer": 3,
    "explanation": "Condition (187 > 93) evaluates to true. Thus z is assigned to 187 + 28 which equals 215."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(157 & 24);",
    "options": [
      "27",
      "22",
      "24",
      "181"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10011101 and 11000 yields decimal 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4650 % 55);?",
    "options": [
      "0",
      "33",
      "84",
      "30"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4650 / 55 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 141; int y = 193; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "159",
      "193",
      "227",
      "141"
    ],
    "answer": 0,
    "explanation": "Condition (141 > 193) evaluates to false. Thus z is assigned to 193 - 34 which equals 159."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3489 % 41);?",
    "options": [
      "85",
      "4",
      "7",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3489 / 41 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2323 % 23);?",
    "options": [
      "101",
      "7",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2323 / 23 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 127; int y = 61; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "127",
      "98",
      "156",
      "61"
    ],
    "answer": 2,
    "explanation": "Condition (127 > 61) evaluates to true. Thus z is assigned to 127 + 29 which equals 156."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(62 & 61);",
    "options": [
      "123",
      "63",
      "60",
      "58"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 111110 and 111101 yields decimal 60."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(117 & 85);",
    "options": [
      "88",
      "85",
      "83",
      "202"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1110101 and 1010101 yields decimal 85."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3664 % 54);?",
    "options": [
      "67",
      "0",
      "46",
      "49"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3664 / 54 leaves remainder 46."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4677 % 59);?",
    "options": [
      "0",
      "79",
      "19",
      "16"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4677 / 59 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 184; int y = 25; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "184",
      "173",
      "25",
      "195"
    ],
    "answer": 3,
    "explanation": "Condition (184 > 25) evaluates to true. Thus z is assigned to 184 + 11 which equals 195."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3438 % 25);?",
    "options": [
      "137",
      "16",
      "0",
      "13"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3438 / 25 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 126; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "121",
      "126",
      "23",
      "131"
    ],
    "answer": 0,
    "explanation": "Condition (23 > 126) evaluates to false. Thus z is assigned to 126 - 5 which equals 121."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(164 & 84);",
    "options": [
      "7",
      "4",
      "2",
      "248"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10100100 and 1010100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 38; int y = 150; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "150",
      "38",
      "131",
      "169"
    ],
    "answer": 2,
    "explanation": "Condition (38 > 150) evaluates to false. Thus z is assigned to 150 - 19 which equals 131."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 44; int y = 106; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "134",
      "106",
      "44",
      "78"
    ],
    "answer": 3,
    "explanation": "Condition (44 > 106) evaluates to false. Thus z is assigned to 106 - 28 which equals 78."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 89; int y = 119; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "119",
      "88",
      "89",
      "150"
    ],
    "answer": 1,
    "explanation": "Condition (89 > 119) evaluates to false. Thus z is assigned to 119 - 31 which equals 88."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(827 % 38);?",
    "options": [
      "32",
      "0",
      "29",
      "21"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 827 / 38 leaves remainder 29."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(77 ^ 54);",
    "options": [
      "121",
      "131",
      "123",
      "126"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1001101 and 110110 yields decimal 123."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(110 & 34);",
    "options": [
      "37",
      "34",
      "32",
      "144"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1101110 and 100010 yields decimal 34."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3945 % 21);?",
    "options": [
      "187",
      "21",
      "18",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3945 / 21 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(206 & 95);",
    "options": [
      "78",
      "81",
      "76",
      "301"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11001110 and 1011111 yields decimal 78."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(85 ^ 91);",
    "options": [
      "17",
      "176",
      "12",
      "14"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1010101 and 1011011 yields decimal 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3494 % 28);?",
    "options": [
      "22",
      "124",
      "0",
      "25"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3494 / 28 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2022 % 57);?",
    "options": [
      "35",
      "27",
      "0",
      "30"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2022 / 57 leaves remainder 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2715 % 34);?",
    "options": [
      "0",
      "79",
      "32",
      "29"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2715 / 34 leaves remainder 29."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(22 & 36);",
    "options": [
      "2",
      "4",
      "58",
      "7"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10110 and 100100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 66; int y = 185; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "66",
      "199",
      "171",
      "185"
    ],
    "answer": 2,
    "explanation": "Condition (66 > 185) evaluates to false. Thus z is assigned to 185 - 14 which equals 171."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(123 | 52);",
    "options": [
      "130",
      "125",
      "127",
      "175"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1111011 and 110100 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4337 % 50);?",
    "options": [
      "0",
      "37",
      "86",
      "40"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4337 / 50 leaves remainder 37."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(95 & 85);",
    "options": [
      "180",
      "85",
      "88",
      "83"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1011111 and 1010101 yields decimal 85."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 49; int y = 16; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "16",
      "49",
      "65",
      "33"
    ],
    "answer": 2,
    "explanation": "Condition (49 > 16) evaluates to true. Thus z is assigned to 49 + 16 which equals 65."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 173; int y = 167; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "167",
      "173",
      "203",
      "143"
    ],
    "answer": 2,
    "explanation": "Condition (173 > 167) evaluates to true. Thus z is assigned to 173 + 30 which equals 203."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4125 % 55);?",
    "options": [
      "75",
      "0",
      "7",
      "3"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4125 / 55 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(954 % 57);?",
    "options": [
      "0",
      "16",
      "45",
      "42"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 954 / 57 leaves remainder 42."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 129; int y = 102; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "102",
      "129",
      "112",
      "146"
    ],
    "answer": 3,
    "explanation": "Condition (129 > 102) evaluates to true. Thus z is assigned to 129 + 17 which equals 146."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4979 % 48);?",
    "options": [
      "103",
      "35",
      "0",
      "38"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4979 / 48 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(110 ^ 36);",
    "options": [
      "72",
      "77",
      "146",
      "74"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1101110 and 100100 yields decimal 74."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 193; int y = 14; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "14",
      "193",
      "214",
      "172"
    ],
    "answer": 2,
    "explanation": "Condition (193 > 14) evaluates to true. Thus z is assigned to 193 + 21 which equals 214."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 205; int y = 118; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "205",
      "179",
      "118",
      "231"
    ],
    "answer": 3,
    "explanation": "Condition (205 > 118) evaluates to true. Thus z is assigned to 205 + 26 which equals 231."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(187 & 87);",
    "options": [
      "19",
      "17",
      "22",
      "274"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10111011 and 1010111 yields decimal 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4769 % 27);?",
    "options": [
      "176",
      "0",
      "20",
      "17"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4769 / 27 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(202 & 26);",
    "options": [
      "8",
      "10",
      "13",
      "228"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 11001010 and 11010 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3088 % 36);?",
    "options": [
      "0",
      "85",
      "28",
      "31"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3088 / 36 leaves remainder 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 91; int y = 50; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "50",
      "84",
      "98",
      "91"
    ],
    "answer": 2,
    "explanation": "Condition (91 > 50) evaluates to true. Thus z is assigned to 91 + 7 which equals 98."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 143; int y = 148; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "123",
      "173",
      "148",
      "143"
    ],
    "answer": 0,
    "explanation": "Condition (143 > 148) evaluates to false. Thus z is assigned to 148 - 25 which equals 123."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(43 ^ 7);",
    "options": [
      "47",
      "50",
      "42",
      "44"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 101011 and 111 yields decimal 44."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4498 % 35);?",
    "options": [
      "18",
      "128",
      "0",
      "21"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4498 / 35 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1204 % 42);?",
    "options": [
      "35",
      "31",
      "0",
      "28"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1204 / 42 leaves remainder 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 197; int y = 96; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "197",
      "96",
      "217",
      "177"
    ],
    "answer": 2,
    "explanation": "Condition (197 > 96) evaluates to true. Thus z is assigned to 197 + 20 which equals 217."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1771 % 11);?",
    "options": [
      "0",
      "161",
      "7",
      "3"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1771 / 11 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 64; int y = 107; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "116",
      "98",
      "64",
      "107"
    ],
    "answer": 1,
    "explanation": "Condition (64 > 107) evaluates to false. Thus z is assigned to 107 - 9 which equals 98."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(133 | 6);",
    "options": [
      "135",
      "138",
      "133",
      "139"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10000101 and 110 yields decimal 135."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(13 | 85);",
    "options": [
      "98",
      "96",
      "93",
      "91"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1101 and 1010101 yields decimal 93."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3945 % 40);?",
    "options": [
      "0",
      "28",
      "25",
      "98"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3945 / 40 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 54; int y = 147; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "54",
      "181",
      "113",
      "147"
    ],
    "answer": 2,
    "explanation": "Condition (54 > 147) evaluates to false. Thus z is assigned to 147 - 34 which equals 113."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(22 & 32);",
    "options": [
      "54",
      "0",
      "-2",
      "3"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10110 and 100000 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(431 % 35);?",
    "options": [
      "12",
      "14",
      "11",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 431 / 35 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4904 % 55);?",
    "options": [
      "9",
      "0",
      "12",
      "89"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4904 / 55 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1851 % 43);?",
    "options": [
      "2",
      "5",
      "43",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1851 / 43 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 27; int y = 23; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "6",
      "48",
      "27",
      "23"
    ],
    "answer": 1,
    "explanation": "Condition (27 > 23) evaluates to true. Thus z is assigned to 27 + 21 which equals 48."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3713 % 15);?",
    "options": [
      "8",
      "11",
      "0",
      "247"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3713 / 15 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 202; int y = 94; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "234",
      "94",
      "202",
      "170"
    ],
    "answer": 0,
    "explanation": "Condition (202 > 94) evaluates to true. Thus z is assigned to 202 + 32 which equals 234."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4740 % 55);?",
    "options": [
      "10",
      "86",
      "13",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4740 / 55 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2924 % 20);?",
    "options": [
      "7",
      "0",
      "4",
      "146"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2924 / 20 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(95 ^ 12);",
    "options": [
      "86",
      "81",
      "107",
      "83"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1011111 and 1100 yields decimal 83."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 154; int y = 40; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "162",
      "146",
      "154",
      "40"
    ],
    "answer": 0,
    "explanation": "Condition (154 > 40) evaluates to true. Thus z is assigned to 154 + 8 which equals 162."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4217 % 21);?",
    "options": [
      "17",
      "0",
      "200",
      "20"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4217 / 21 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3292 % 49);?",
    "options": [
      "9",
      "0",
      "67",
      "12"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3292 / 49 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(81 & 49);",
    "options": [
      "130",
      "17",
      "20",
      "15"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1010001 and 110001 yields decimal 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 124; int y = 146; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "130",
      "146",
      "162",
      "124"
    ],
    "answer": 0,
    "explanation": "Condition (124 > 146) evaluates to false. Thus z is assigned to 146 - 16 which equals 130."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 145; int y = 112; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "112",
      "162",
      "128",
      "145"
    ],
    "answer": 1,
    "explanation": "Condition (145 > 112) evaluates to true. Thus z is assigned to 145 + 17 which equals 162."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(116 | 102);",
    "options": [
      "218",
      "121",
      "116",
      "118"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1110100 and 1100110 yields decimal 118."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5137 % 56);?",
    "options": [
      "41",
      "0",
      "44",
      "91"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 5137 / 56 leaves remainder 41."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 86; int y = 43; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "71",
      "43",
      "101",
      "86"
    ],
    "answer": 2,
    "explanation": "Condition (86 > 43) evaluates to true. Thus z is assigned to 86 + 15 which equals 101."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(52 & 10);",
    "options": [
      "0",
      "3",
      "-2",
      "62"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 110100 and 1010 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 95; int y = 202; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "214",
      "202",
      "95",
      "190"
    ],
    "answer": 3,
    "explanation": "Condition (95 > 202) evaluates to false. Thus z is assigned to 202 - 12 which equals 190."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(39 | 75);",
    "options": [
      "114",
      "111",
      "114",
      "109"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 100111 and 1001011 yields decimal 111."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 102; int y = 81; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "129",
      "81",
      "75",
      "102"
    ],
    "answer": 0,
    "explanation": "Condition (102 > 81) evaluates to true. Thus z is assigned to 102 + 27 which equals 129."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(122 ^ 23);",
    "options": [
      "112",
      "145",
      "109",
      "107"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1111010 and 10111 yields decimal 109."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2957 % 30);?",
    "options": [
      "0",
      "17",
      "20",
      "98"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2957 / 30 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1045 % 28);?",
    "options": [
      "12",
      "0",
      "9",
      "37"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1045 / 28 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4844 % 52);?",
    "options": [
      "93",
      "0",
      "11",
      "8"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4844 / 52 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2492 % 48);?",
    "options": [
      "44",
      "0",
      "47",
      "51"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2492 / 48 leaves remainder 44."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1945 % 52);?",
    "options": [
      "0",
      "24",
      "21",
      "37"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1945 / 52 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 47; int y = 97; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "47",
      "71",
      "123",
      "97"
    ],
    "answer": 1,
    "explanation": "Condition (47 > 97) evaluates to false. Thus z is assigned to 97 - 26 which equals 71."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 206; int y = 181; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "199",
      "213",
      "181",
      "206"
    ],
    "answer": 1,
    "explanation": "Condition (206 > 181) evaluates to true. Thus z is assigned to 206 + 7 which equals 213."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(126 ^ 94);",
    "options": [
      "35",
      "220",
      "32",
      "30"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1111110 and 1011110 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 179; int y = 125; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "179",
      "168",
      "125",
      "190"
    ],
    "answer": 3,
    "explanation": "Condition (179 > 125) evaluates to true. Thus z is assigned to 179 + 11 which equals 190."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(52 | 13);",
    "options": [
      "59",
      "64",
      "65",
      "61"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 110100 and 1101 yields decimal 61."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(155 ^ 15);",
    "options": [
      "151",
      "146",
      "148",
      "170"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10011011 and 1111 yields decimal 148."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 178; int y = 153; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "178",
      "153",
      "171",
      "185"
    ],
    "answer": 3,
    "explanation": "Condition (178 > 153) evaluates to true. Thus z is assigned to 178 + 7 which equals 185."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(188 & 93);",
    "options": [
      "26",
      "31",
      "281",
      "28"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10111100 and 1011101 yields decimal 28."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(205 | 79);",
    "options": [
      "210",
      "284",
      "207",
      "205"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 11001101 and 1001111 yields decimal 207."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(134 ^ 54);",
    "options": [
      "176",
      "188",
      "174",
      "179"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10000110 and 110110 yields decimal 176."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(115 ^ 58);",
    "options": [
      "173",
      "71",
      "73",
      "76"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1110011 and 111010 yields decimal 73."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4078 % 46);?",
    "options": [
      "33",
      "88",
      "30",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4078 / 46 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(208 ^ 27);",
    "options": [
      "206",
      "235",
      "201",
      "203"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 11010000 and 11011 yields decimal 203."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(757 % 28);?",
    "options": [
      "1",
      "27",
      "4",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 757 / 28 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3900 % 43);?",
    "options": [
      "90",
      "33",
      "30",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3900 / 43 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 202; int y = 72; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "232",
      "72",
      "202",
      "172"
    ],
    "answer": 0,
    "explanation": "Condition (202 > 72) evaluates to true. Thus z is assigned to 202 + 30 which equals 232."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 99; int y = 182; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "187",
      "182",
      "99",
      "177"
    ],
    "answer": 3,
    "explanation": "Condition (99 > 182) evaluates to false. Thus z is assigned to 182 - 5 which equals 177."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2485 % 53);?",
    "options": [
      "50",
      "0",
      "47",
      "46"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2485 / 53 leaves remainder 47."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(201 & 31);",
    "options": [
      "232",
      "7",
      "9",
      "12"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 11001001 and 11111 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1952 % 39);?",
    "options": [
      "50",
      "2",
      "0",
      "5"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1952 / 39 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1675 % 12);?",
    "options": [
      "10",
      "139",
      "0",
      "7"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1675 / 12 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2334 % 42);?",
    "options": [
      "55",
      "0",
      "27",
      "24"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2334 / 42 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 135; int y = 47; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "153",
      "117",
      "47",
      "135"
    ],
    "answer": 0,
    "explanation": "Condition (135 > 47) evaluates to true. Thus z is assigned to 135 + 18 which equals 153."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 190; int y = 109; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "212",
      "190",
      "109",
      "168"
    ],
    "answer": 0,
    "explanation": "Condition (190 > 109) evaluates to true. Thus z is assigned to 190 + 22 which equals 212."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(147 & 46);",
    "options": [
      "2",
      "193",
      "5",
      "0"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10010011 and 101110 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(83 ^ 18);",
    "options": [
      "65",
      "68",
      "101",
      "63"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1010011 and 10010 yields decimal 65."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 88; int y = 134; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "88",
      "166",
      "134",
      "102"
    ],
    "answer": 3,
    "explanation": "Condition (88 > 134) evaluates to false. Thus z is assigned to 134 - 32 which equals 102."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(202 & 39);",
    "options": [
      "5",
      "2",
      "241",
      "0"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 11001010 and 100111 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(199 & 71);",
    "options": [
      "74",
      "270",
      "69",
      "71"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 11000111 and 1000111 yields decimal 71."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 129; int y = 108; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "108",
      "116",
      "129",
      "142"
    ],
    "answer": 3,
    "explanation": "Condition (129 > 108) evaluates to true. Thus z is assigned to 129 + 13 which equals 142."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 47; int y = 161; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "161",
      "47",
      "134",
      "188"
    ],
    "answer": 2,
    "explanation": "Condition (47 > 161) evaluates to false. Thus z is assigned to 161 - 27 which equals 134."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(157 | 76);",
    "options": [
      "219",
      "224",
      "233",
      "221"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10011101 and 1001100 yields decimal 221."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 206; int y = 31; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "217",
      "206",
      "31",
      "195"
    ],
    "answer": 0,
    "explanation": "Condition (206 > 31) evaluates to true. Thus z is assigned to 206 + 11 which equals 217."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1992 % 45);?",
    "options": [
      "44",
      "15",
      "0",
      "12"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1992 / 45 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 185; int y = 120; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "155",
      "215",
      "120",
      "185"
    ],
    "answer": 1,
    "explanation": "Condition (185 > 120) evaluates to true. Thus z is assigned to 185 + 30 which equals 215."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 74; int y = 26; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "94",
      "26",
      "74",
      "54"
    ],
    "answer": 0,
    "explanation": "Condition (74 > 26) evaluates to true. Thus z is assigned to 74 + 20 which equals 94."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5104 % 29);?",
    "options": [
      "3",
      "176",
      "0",
      "7"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 5104 / 29 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(90 ^ 21);",
    "options": [
      "82",
      "79",
      "77",
      "111"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1011010 and 10101 yields decimal 79."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 133; int y = 154; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "168",
      "133",
      "154",
      "140"
    ],
    "answer": 3,
    "explanation": "Condition (133 > 154) evaluates to false. Thus z is assigned to 154 - 14 which equals 140."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1155 % 16);?",
    "options": [
      "6",
      "3",
      "0",
      "72"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1155 / 16 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(411 % 59);?",
    "options": [
      "0",
      "60",
      "6",
      "57"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 411 / 59 leaves remainder 57."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 73; int y = 137; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "137",
      "109",
      "165",
      "73"
    ],
    "answer": 1,
    "explanation": "Condition (73 > 137) evaluates to false. Thus z is assigned to 137 - 28 which equals 109."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1637 % 46);?",
    "options": [
      "35",
      "27",
      "30",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1637 / 46 leaves remainder 27."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(102 ^ 64);",
    "options": [
      "36",
      "38",
      "166",
      "41"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1100110 and 1000000 yields decimal 38."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 149; int y = 149; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "149",
      "149",
      "143",
      "155"
    ],
    "answer": 2,
    "explanation": "Condition (149 > 149) evaluates to false. Thus z is assigned to 149 - 6 which equals 143."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 129; int y = 149; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "122",
      "149",
      "129",
      "176"
    ],
    "answer": 0,
    "explanation": "Condition (129 > 149) evaluates to false. Thus z is assigned to 149 - 27 which equals 122."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1874 % 23);?",
    "options": [
      "81",
      "11",
      "14",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1874 / 23 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 135; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "151",
      "135",
      "14",
      "119"
    ],
    "answer": 3,
    "explanation": "Condition (14 > 135) evaluates to false. Thus z is assigned to 135 - 16 which equals 119."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(61 | 45);",
    "options": [
      "106",
      "64",
      "61",
      "59"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 111101 and 101101 yields decimal 61."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 47; int y = 102; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "121",
      "102",
      "83",
      "47"
    ],
    "answer": 2,
    "explanation": "Condition (47 > 102) evaluates to false. Thus z is assigned to 102 - 19 which equals 83."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(237 % 39);?",
    "options": [
      "0",
      "3",
      "6",
      "6"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 237 / 39 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 166; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "180",
      "152",
      "18",
      "166"
    ],
    "answer": 1,
    "explanation": "Condition (18 > 166) evaluates to false. Thus z is assigned to 166 - 14 which equals 152."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 44; int y = 114; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "44",
      "81",
      "114",
      "147"
    ],
    "answer": 1,
    "explanation": "Condition (44 > 114) evaluates to false. Thus z is assigned to 114 - 33 which equals 81."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(422 % 15);?",
    "options": [
      "2",
      "0",
      "28",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 422 / 15 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1784 % 31);?",
    "options": [
      "0",
      "20",
      "17",
      "57"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1784 / 31 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2982 % 39);?",
    "options": [
      "0",
      "76",
      "18",
      "21"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2982 / 39 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(56 ^ 55);",
    "options": [
      "13",
      "18",
      "111",
      "15"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 111000 and 110111 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(207 ^ 34);",
    "options": [
      "235",
      "237",
      "240",
      "241"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 11001111 and 100010 yields decimal 237."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(79 ^ 95);",
    "options": [
      "14",
      "174",
      "16",
      "19"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1001111 and 1011111 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 172; int y = 126; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "155",
      "189",
      "172",
      "126"
    ],
    "answer": 1,
    "explanation": "Condition (172 > 126) evaluates to true. Thus z is assigned to 172 + 17 which equals 189."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(37 ^ 70);",
    "options": [
      "102",
      "107",
      "97",
      "99"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 100101 and 1000110 yields decimal 99."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 156; int y = 72; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "141",
      "171",
      "72",
      "156"
    ],
    "answer": 1,
    "explanation": "Condition (156 > 72) evaluates to true. Thus z is assigned to 156 + 15 which equals 171."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2145 % 59);?",
    "options": [
      "0",
      "21",
      "24",
      "36"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2145 / 59 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(117 | 8);",
    "options": [
      "123",
      "149",
      "128",
      "125"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1110101 and 1000 yields decimal 125."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(70 | 82);",
    "options": [
      "152",
      "86",
      "89",
      "84"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1000110 and 1010010 yields decimal 86."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 33; int y = 114; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "103",
      "114",
      "125",
      "33"
    ],
    "answer": 0,
    "explanation": "Condition (33 > 114) evaluates to false. Thus z is assigned to 114 - 11 which equals 103."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(177 ^ 66);",
    "options": [
      "241",
      "243",
      "267",
      "246"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10110001 and 1000010 yields decimal 243."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(336 % 53);?",
    "options": [
      "21",
      "6",
      "0",
      "18"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 336 / 53 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 26; int y = 88; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "80",
      "96",
      "88",
      "26"
    ],
    "answer": 0,
    "explanation": "Condition (26 > 88) evaluates to false. Thus z is assigned to 88 - 8 which equals 80."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2648 % 14);?",
    "options": [
      "5",
      "0",
      "2",
      "189"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2648 / 14 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(188 & 87);",
    "options": [
      "18",
      "23",
      "20",
      "275"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10111100 and 1010111 yields decimal 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4300 % 11);?",
    "options": [
      "390",
      "13",
      "0",
      "10"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4300 / 11 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(84 & 42);",
    "options": [
      "-2",
      "0",
      "126",
      "3"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1010100 and 101010 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3278 % 24);?",
    "options": [
      "136",
      "14",
      "17",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3278 / 24 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3906 % 19);?",
    "options": [
      "14",
      "0",
      "205",
      "11"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3906 / 19 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(172 | 16);",
    "options": [
      "188",
      "186",
      "212",
      "191"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10101100 and 10000 yields decimal 188."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3867 % 52);?",
    "options": [
      "74",
      "22",
      "0",
      "19"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3867 / 52 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 183; int y = 186; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "186",
      "171",
      "201",
      "183"
    ],
    "answer": 1,
    "explanation": "Condition (183 > 186) evaluates to false. Thus z is assigned to 186 - 15 which equals 171."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2755 % 56);?",
    "options": [
      "11",
      "0",
      "49",
      "14"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2755 / 56 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(173 | 95);",
    "options": [
      "258",
      "255",
      "268",
      "253"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10101101 and 1011111 yields decimal 255."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4208 % 47);?",
    "options": [
      "89",
      "0",
      "28",
      "25"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4208 / 47 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(737 % 18);?",
    "options": [
      "0",
      "40",
      "20",
      "17"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 737 / 18 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4186 % 43);?",
    "options": [
      "0",
      "97",
      "18",
      "15"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4186 / 43 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(124 | 104);",
    "options": [
      "124",
      "122",
      "127",
      "228"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1111100 and 1101000 yields decimal 124."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 & 63);",
    "options": [
      "19",
      "22",
      "17",
      "82"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10011 and 111111 yields decimal 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1823 % 41);?",
    "options": [
      "44",
      "0",
      "22",
      "19"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1823 / 41 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(187 & 92);",
    "options": [
      "22",
      "279",
      "24",
      "27"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10111011 and 1011100 yields decimal 24."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(31 | 22);",
    "options": [
      "53",
      "34",
      "31",
      "29"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 11111 and 10110 yields decimal 31."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4016 % 50);?",
    "options": [
      "19",
      "0",
      "16",
      "80"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4016 / 50 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(194 | 49);",
    "options": [
      "241",
      "246",
      "243",
      "267"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 11000010 and 110001 yields decimal 243."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 29; int y = 204; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "29",
      "190",
      "204",
      "218"
    ],
    "answer": 1,
    "explanation": "Condition (29 > 204) evaluates to false. Thus z is assigned to 204 - 14 which equals 190."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(122 & 48);",
    "options": [
      "51",
      "46",
      "48",
      "170"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1111010 and 110000 yields decimal 48."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(205 ^ 41);",
    "options": [
      "226",
      "231",
      "228",
      "246"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 11001101 and 101001 yields decimal 228."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(208 ^ 104);",
    "options": [
      "184",
      "187",
      "182",
      "312"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 11010000 and 1101000 yields decimal 184."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(138 & 45);",
    "options": [
      "11",
      "8",
      "6",
      "183"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10001010 and 101101 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2834 % 21);?",
    "options": [
      "134",
      "23",
      "0",
      "20"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2834 / 21 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(180 | 77);",
    "options": [
      "257",
      "251",
      "256",
      "253"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10110100 and 1001101 yields decimal 253."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 63; int y = 79; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "79",
      "87",
      "63",
      "71"
    ],
    "answer": 3,
    "explanation": "Condition (63 > 79) evaluates to false. Thus z is assigned to 79 - 8 which equals 71."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(346 % 51);?",
    "options": [
      "40",
      "43",
      "0",
      "6"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 346 / 51 leaves remainder 40."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(128 ^ 68);",
    "options": [
      "220",
      "194",
      "199",
      "196"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10000000 and 1000100 yields decimal 196."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 124; int y = 171; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "161",
      "124",
      "181",
      "171"
    ],
    "answer": 0,
    "explanation": "Condition (124 > 171) evaluates to false. Thus z is assigned to 171 - 10 which equals 161."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 62; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "30",
      "10",
      "94",
      "62"
    ],
    "answer": 0,
    "explanation": "Condition (10 > 62) evaluates to false. Thus z is assigned to 62 - 32 which equals 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3025 % 59);?",
    "options": [
      "19",
      "51",
      "0",
      "16"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3025 / 59 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 174; int y = 118; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "191",
      "174",
      "157",
      "118"
    ],
    "answer": 0,
    "explanation": "Condition (174 > 118) evaluates to true. Thus z is assigned to 174 + 17 which equals 191."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 113; int y = 32; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "32",
      "87",
      "139",
      "113"
    ],
    "answer": 2,
    "explanation": "Condition (113 > 32) evaluates to true. Thus z is assigned to 113 + 26 which equals 139."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 149; int y = 115; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "115",
      "170",
      "128",
      "149"
    ],
    "answer": 1,
    "explanation": "Condition (149 > 115) evaluates to true. Thus z is assigned to 149 + 21 which equals 170."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 141; int y = 40; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "141",
      "40",
      "128",
      "154"
    ],
    "answer": 3,
    "explanation": "Condition (141 > 40) evaluates to true. Thus z is assigned to 141 + 13 which equals 154."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 107; int y = 207; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "207",
      "189",
      "225",
      "107"
    ],
    "answer": 1,
    "explanation": "Condition (107 > 207) evaluates to false. Thus z is assigned to 207 - 18 which equals 189."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(900 % 37);?",
    "options": [
      "0",
      "15",
      "24",
      "12"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 900 / 37 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(64 & 95);",
    "options": [
      "64",
      "62",
      "159",
      "67"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1000000 and 1011111 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(108 | 11);",
    "options": [
      "114",
      "111",
      "119",
      "109"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1101100 and 1011 yields decimal 111."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 164; int y = 37; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "37",
      "189",
      "139",
      "164"
    ],
    "answer": 1,
    "explanation": "Condition (164 > 37) evaluates to true. Thus z is assigned to 164 + 25 which equals 189."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5019 % 49);?",
    "options": [
      "24",
      "102",
      "21",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 5019 / 49 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 163; int y = 141; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "157",
      "141",
      "163",
      "169"
    ],
    "answer": 3,
    "explanation": "Condition (163 > 141) evaluates to true. Thus z is assigned to 163 + 6 which equals 169."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3842 % 15);?",
    "options": [
      "2",
      "0",
      "256",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3842 / 15 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(108 & 70);",
    "options": [
      "71",
      "66",
      "68",
      "178"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1101100 and 1000110 yields decimal 68."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 138; int y = 182; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "154",
      "210",
      "138",
      "182"
    ],
    "answer": 0,
    "explanation": "Condition (138 > 182) evaluates to false. Thus z is assigned to 182 - 28 which equals 154."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(126 | 72);",
    "options": [
      "198",
      "124",
      "126",
      "129"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1111110 and 1001000 yields decimal 126."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(97 ^ 44);",
    "options": [
      "77",
      "75",
      "80",
      "141"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1100001 and 101100 yields decimal 77."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(36 & 36);",
    "options": [
      "72",
      "36",
      "39",
      "34"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 100100 and 100100 yields decimal 36."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1360 % 57);?",
    "options": [
      "49",
      "0",
      "23",
      "52"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1360 / 57 leaves remainder 49."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 33; int y = 173; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "173",
      "139",
      "207",
      "33"
    ],
    "answer": 1,
    "explanation": "Condition (33 > 173) evaluates to false. Thus z is assigned to 173 - 34 which equals 139."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3477 % 56);?",
    "options": [
      "5",
      "62",
      "8",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3477 / 56 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(413 % 23);?",
    "options": [
      "22",
      "0",
      "25",
      "17"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 413 / 23 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2219 % 40);?",
    "options": [
      "19",
      "22",
      "55",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2219 / 40 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(81 ^ 9);",
    "options": [
      "88",
      "90",
      "86",
      "91"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1010001 and 1001 yields decimal 88."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(40 | 81);",
    "options": [
      "145",
      "119",
      "124",
      "121"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 101000 and 1010001 yields decimal 121."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 71; int y = 156; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "156",
      "71",
      "151",
      "161"
    ],
    "answer": 2,
    "explanation": "Condition (71 > 156) evaluates to false. Thus z is assigned to 156 - 5 which equals 151."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(29 & 66);",
    "options": [
      "0",
      "-2",
      "95",
      "3"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11101 and 1000010 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(155 & 73);",
    "options": [
      "9",
      "228",
      "7",
      "12"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10011011 and 1001001 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(154 ^ 72);",
    "options": [
      "208",
      "213",
      "210",
      "226"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10011010 and 1001000 yields decimal 210."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 180; int y = 144; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "180",
      "173",
      "144",
      "187"
    ],
    "answer": 3,
    "explanation": "Condition (180 > 144) evaluates to true. Thus z is assigned to 180 + 7 which equals 187."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(102 & 87);",
    "options": [
      "70",
      "73",
      "189",
      "68"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1100110 and 1010111 yields decimal 70."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(34 ^ 97);",
    "options": [
      "70",
      "67",
      "131",
      "65"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 100010 and 1100001 yields decimal 67."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2135 % 34);?",
    "options": [
      "30",
      "0",
      "27",
      "62"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2135 / 34 leaves remainder 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 158; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "158",
      "24",
      "146",
      "170"
    ],
    "answer": 2,
    "explanation": "Condition (24 > 158) evaluates to false. Thus z is assigned to 158 - 12 which equals 146."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(124 | 31);",
    "options": [
      "127",
      "125",
      "155",
      "130"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1111100 and 11111 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3192 % 48);?",
    "options": [
      "66",
      "27",
      "0",
      "24"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3192 / 48 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2287 % 21);?",
    "options": [
      "22",
      "0",
      "19",
      "108"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2287 / 21 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5069 % 19);?",
    "options": [
      "0",
      "18",
      "266",
      "15"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 5069 / 19 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1502 % 22);?",
    "options": [
      "0",
      "68",
      "9",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1502 / 22 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(177 | 103);",
    "options": [
      "250",
      "245",
      "247",
      "280"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10110001 and 1100111 yields decimal 247."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(683 % 49);?",
    "options": [
      "0",
      "13",
      "49",
      "46"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 683 / 49 leaves remainder 46."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(175 | 5);",
    "options": [
      "175",
      "173",
      "180",
      "178"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10101111 and 101 yields decimal 175."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 82; int y = 151; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "82",
      "124",
      "151",
      "178"
    ],
    "answer": 1,
    "explanation": "Condition (82 > 151) evaluates to false. Thus z is assigned to 151 - 27 which equals 124."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(108 & 88);",
    "options": [
      "75",
      "70",
      "196",
      "72"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1101100 and 1011000 yields decimal 72."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(205 | 9);",
    "options": [
      "205",
      "214",
      "208",
      "203"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11001101 and 1001 yields decimal 205."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 191; int y = 76; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "161",
      "221",
      "76",
      "191"
    ],
    "answer": 1,
    "explanation": "Condition (191 > 76) evaluates to true. Thus z is assigned to 191 + 30 which equals 221."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 18; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "-1",
      "24",
      "49",
      "18"
    ],
    "answer": 2,
    "explanation": "Condition (24 > 18) evaluates to true. Thus z is assigned to 24 + 25 which equals 49."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(872 % 36);?",
    "options": [
      "11",
      "8",
      "0",
      "24"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 872 / 36 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 123; int y = 153; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "127",
      "123",
      "153",
      "179"
    ],
    "answer": 0,
    "explanation": "Condition (123 > 153) evaluates to false. Thus z is assigned to 153 - 26 which equals 127."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 96; int y = 116; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "116",
      "97",
      "96",
      "135"
    ],
    "answer": 1,
    "explanation": "Condition (96 > 116) evaluates to false. Thus z is assigned to 116 - 19 which equals 97."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(183 & 35);",
    "options": [
      "35",
      "218",
      "33",
      "38"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10110111 and 100011 yields decimal 35."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(136 ^ 58);",
    "options": [
      "181",
      "194",
      "178",
      "176"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10001000 and 111010 yields decimal 178."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(159 ^ 24);",
    "options": [
      "183",
      "133",
      "138",
      "135"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10011111 and 11000 yields decimal 135."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3937 % 28);?",
    "options": [
      "0",
      "140",
      "20",
      "17"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3937 / 28 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1134 % 42);?",
    "options": [
      "3",
      "7",
      "27",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1134 / 42 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(207 & 44);",
    "options": [
      "15",
      "251",
      "10",
      "12"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 11001111 and 101100 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3826 % 53);?",
    "options": [
      "72",
      "10",
      "13",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3826 / 53 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 126; int y = 204; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "231",
      "204",
      "126",
      "177"
    ],
    "answer": 3,
    "explanation": "Condition (126 > 204) evaluates to false. Thus z is assigned to 204 - 27 which equals 177."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3669 % 21);?",
    "options": [
      "174",
      "0",
      "15",
      "18"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3669 / 21 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(174 ^ 83);",
    "options": [
      "251",
      "257",
      "253",
      "256"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10101110 and 1010011 yields decimal 253."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(209 ^ 31);",
    "options": [
      "206",
      "240",
      "209",
      "204"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 11010001 and 11111 yields decimal 206."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4021 % 16);?",
    "options": [
      "0",
      "5",
      "8",
      "251"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4021 / 16 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(155 | 19);",
    "options": [
      "153",
      "174",
      "155",
      "158"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10011011 and 10011 yields decimal 155."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3649 % 47);?",
    "options": [
      "0",
      "77",
      "33",
      "30"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3649 / 47 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1123 % 56);?",
    "options": [
      "6",
      "20",
      "0",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1123 / 56 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(196 | 33);",
    "options": [
      "229",
      "227",
      "253",
      "232"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11000100 and 100001 yields decimal 229."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(145 ^ 5);",
    "options": [
      "148",
      "151",
      "146",
      "150"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10010001 and 101 yields decimal 148."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(207 % 54);?",
    "options": [
      "48",
      "3",
      "45",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 207 / 54 leaves remainder 45."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 65; int y = 19; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "87",
      "19",
      "43",
      "65"
    ],
    "answer": 0,
    "explanation": "Condition (65 > 19) evaluates to true. Thus z is assigned to 65 + 22 which equals 87."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1174 % 14);?",
    "options": [
      "12",
      "83",
      "0",
      "15"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1174 / 14 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(80 ^ 98);",
    "options": [
      "53",
      "178",
      "50",
      "48"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1010000 and 1100010 yields decimal 50."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 175; int y = 47; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "47",
      "154",
      "196",
      "175"
    ],
    "answer": 2,
    "explanation": "Condition (175 > 47) evaluates to true. Thus z is assigned to 175 + 21 which equals 196."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(94 | 71);",
    "options": [
      "95",
      "93",
      "98",
      "165"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1011110 and 1000111 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 50; int y = 209; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "217",
      "50",
      "209",
      "201"
    ],
    "answer": 3,
    "explanation": "Condition (50 > 209) evaluates to false. Thus z is assigned to 209 - 8 which equals 201."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 171; int y = 38; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "38",
      "171",
      "156",
      "186"
    ],
    "answer": 3,
    "explanation": "Condition (171 > 38) evaluates to true. Thus z is assigned to 171 + 15 which equals 186."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(123 & 71);",
    "options": [
      "67",
      "70",
      "194",
      "65"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1111011 and 1000111 yields decimal 67."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1355 % 57);?",
    "options": [
      "0",
      "44",
      "47",
      "23"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1355 / 57 leaves remainder 44."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4004 % 35);?",
    "options": [
      "17",
      "114",
      "0",
      "14"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4004 / 35 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1916 % 13);?",
    "options": [
      "5",
      "147",
      "0",
      "8"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1916 / 13 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3651 % 38);?",
    "options": [
      "0",
      "6",
      "3",
      "96"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3651 / 38 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(990 % 26);?",
    "options": [
      "5",
      "2",
      "38",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 990 / 26 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 196; int y = 45; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "175",
      "196",
      "45",
      "217"
    ],
    "answer": 3,
    "explanation": "Condition (196 > 45) evaluates to true. Thus z is assigned to 196 + 21 which equals 217."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(584 % 49);?",
    "options": [
      "11",
      "0",
      "48",
      "45"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 584 / 49 leaves remainder 45."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 174; int y = 185; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "185",
      "151",
      "174",
      "219"
    ],
    "answer": 1,
    "explanation": "Condition (174 > 185) evaluates to false. Thus z is assigned to 185 - 34 which equals 151."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2437 % 52);?",
    "options": [
      "46",
      "48",
      "45",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2437 / 52 leaves remainder 45."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 58; int y = 187; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "170",
      "187",
      "58",
      "204"
    ],
    "answer": 0,
    "explanation": "Condition (58 > 187) evaluates to false. Thus z is assigned to 187 - 17 which equals 170."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 138; int y = 138; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "138",
      "110",
      "138",
      "166"
    ],
    "answer": 1,
    "explanation": "Condition (138 > 138) evaluates to false. Thus z is assigned to 138 - 28 which equals 110."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 64; int y = 56; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "56",
      "51",
      "64",
      "77"
    ],
    "answer": 3,
    "explanation": "Condition (64 > 56) evaluates to true. Thus z is assigned to 64 + 13 which equals 77."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(792 % 49);?",
    "options": [
      "8",
      "0",
      "16",
      "11"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 792 / 49 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 36; int y = 148; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "180",
      "36",
      "116",
      "148"
    ],
    "answer": 2,
    "explanation": "Condition (36 > 148) evaluates to false. Thus z is assigned to 148 - 32 which equals 116."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 200; int y = 48; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "188",
      "212",
      "200",
      "48"
    ],
    "answer": 1,
    "explanation": "Condition (200 > 48) evaluates to true. Thus z is assigned to 200 + 12 which equals 212."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(42 & 44);",
    "options": [
      "43",
      "40",
      "38",
      "86"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 101010 and 101100 yields decimal 40."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2452 % 44);?",
    "options": [
      "55",
      "35",
      "32",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2452 / 44 leaves remainder 32."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 68; int y = 66; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "99",
      "66",
      "37",
      "68"
    ],
    "answer": 0,
    "explanation": "Condition (68 > 66) evaluates to true. Thus z is assigned to 68 + 31 which equals 99."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4416 % 22);?",
    "options": [
      "200",
      "19",
      "16",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4416 / 22 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3993 % 46);?",
    "options": [
      "86",
      "0",
      "37",
      "40"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3993 / 46 leaves remainder 37."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 78; int y = 187; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "187",
      "205",
      "169",
      "78"
    ],
    "answer": 2,
    "explanation": "Condition (78 > 187) evaluates to false. Thus z is assigned to 187 - 18 which equals 169."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4560 % 28);?",
    "options": [
      "0",
      "162",
      "24",
      "27"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4560 / 28 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(82 & 55);",
    "options": [
      "137",
      "21",
      "16",
      "18"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1010010 and 110111 yields decimal 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(184 ^ 67);",
    "options": [
      "254",
      "251",
      "249",
      "275"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10111000 and 1000011 yields decimal 251."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4461 % 17);?",
    "options": [
      "10",
      "0",
      "262",
      "7"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4461 / 17 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3551 % 24);?",
    "options": [
      "147",
      "23",
      "0",
      "26"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3551 / 24 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(95 | 31);",
    "options": [
      "93",
      "126",
      "95",
      "98"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1011111 and 11111 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(86 | 47);",
    "options": [
      "130",
      "125",
      "133",
      "127"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1010110 and 101111 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4110 % 59);?",
    "options": [
      "69",
      "39",
      "0",
      "42"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4110 / 59 leaves remainder 39."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(686 % 52);?",
    "options": [
      "0",
      "10",
      "13",
      "13"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 686 / 52 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(94 & 57);",
    "options": [
      "24",
      "151",
      "27",
      "22"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1011110 and 111001 yields decimal 24."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 142; int y = 136; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "136",
      "142",
      "159",
      "125"
    ],
    "answer": 2,
    "explanation": "Condition (142 > 136) evaluates to true. Thus z is assigned to 142 + 17 which equals 159."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(193 & 52);",
    "options": [
      "3",
      "245",
      "0",
      "-2"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 11000001 and 110100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2125 % 15);?",
    "options": [
      "13",
      "0",
      "10",
      "141"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2125 / 15 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 117; int y = 184; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "117",
      "184",
      "210",
      "158"
    ],
    "answer": 3,
    "explanation": "Condition (117 > 184) evaluates to false. Thus z is assigned to 184 - 26 which equals 158."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(40 & 13);",
    "options": [
      "53",
      "8",
      "6",
      "11"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 101000 and 1101 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 113; int y = 166; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "166",
      "113",
      "134",
      "198"
    ],
    "answer": 2,
    "explanation": "Condition (113 > 166) evaluates to false. Thus z is assigned to 166 - 32 which equals 134."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3884 % 29);?",
    "options": [
      "30",
      "133",
      "27",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3884 / 29 leaves remainder 27."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(758 % 14);?",
    "options": [
      "0",
      "5",
      "54",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 758 / 14 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 181; int y = 95; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "159",
      "203",
      "95",
      "181"
    ],
    "answer": 1,
    "explanation": "Condition (181 > 95) evaluates to true. Thus z is assigned to 181 + 22 which equals 203."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3442 % 27);?",
    "options": [
      "16",
      "127",
      "0",
      "13"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3442 / 27 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 178; int y = 84; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "185",
      "84",
      "178",
      "171"
    ],
    "answer": 0,
    "explanation": "Condition (178 > 84) evaluates to true. Thus z is assigned to 178 + 7 which equals 185."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2509 % 21);?",
    "options": [
      "119",
      "10",
      "0",
      "13"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2509 / 21 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(39 ^ 85);",
    "options": [
      "114",
      "117",
      "124",
      "112"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 100111 and 1010101 yields decimal 114."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 114; int y = 91; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "128",
      "114",
      "91",
      "100"
    ],
    "answer": 0,
    "explanation": "Condition (114 > 91) evaluates to true. Thus z is assigned to 114 + 14 which equals 128."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 161; int y = 165; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "161",
      "199",
      "131",
      "165"
    ],
    "answer": 2,
    "explanation": "Condition (161 > 165) evaluates to false. Thus z is assigned to 165 - 34 which equals 131."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(162 & 98);",
    "options": [
      "37",
      "32",
      "34",
      "260"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10100010 and 1100010 yields decimal 34."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 104; int y = 169; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "141",
      "197",
      "169",
      "104"
    ],
    "answer": 0,
    "explanation": "Condition (104 > 169) evaluates to false. Thus z is assigned to 169 - 28 which equals 141."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 45; int y = 14; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "14",
      "75",
      "45",
      "15"
    ],
    "answer": 1,
    "explanation": "Condition (45 > 14) evaluates to true. Thus z is assigned to 45 + 30 which equals 75."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4295 % 40);?",
    "options": [
      "18",
      "15",
      "0",
      "107"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4295 / 40 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4831 % 55);?",
    "options": [
      "0",
      "87",
      "49",
      "46"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4831 / 55 leaves remainder 46."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2662 % 12);?",
    "options": [
      "13",
      "221",
      "0",
      "10"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2662 / 12 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3519 % 38);?",
    "options": [
      "26",
      "92",
      "23",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3519 / 38 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2853 % 31);?",
    "options": [
      "4",
      "1",
      "92",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2853 / 31 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(150 ^ 85);",
    "options": [
      "193",
      "235",
      "198",
      "195"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10010110 and 1010101 yields decimal 195."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 87; int y = 123; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "128",
      "87",
      "118",
      "123"
    ],
    "answer": 2,
    "explanation": "Condition (87 > 123) evaluates to false. Thus z is assigned to 123 - 5 which equals 118."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(86 ^ 6);",
    "options": [
      "83",
      "80",
      "92",
      "78"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1010110 and 110 yields decimal 80."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 30; int y = 116; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "122",
      "116",
      "30",
      "110"
    ],
    "answer": 3,
    "explanation": "Condition (30 > 116) evaluates to false. Thus z is assigned to 116 - 6 which equals 110."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3676 % 36);?",
    "options": [
      "102",
      "4",
      "0",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3676 / 36 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 32; int y = 137; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "122",
      "32",
      "152",
      "137"
    ],
    "answer": 0,
    "explanation": "Condition (32 > 137) evaluates to false. Thus z is assigned to 137 - 15 which equals 122."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3151 % 20);?",
    "options": [
      "14",
      "11",
      "157",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3151 / 20 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(116 | 20);",
    "options": [
      "119",
      "116",
      "136",
      "114"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1110100 and 10100 yields decimal 116."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 35; int y = 152; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "35",
      "125",
      "152",
      "179"
    ],
    "answer": 1,
    "explanation": "Condition (35 > 152) evaluates to false. Thus z is assigned to 152 - 27 which equals 125."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 138; int y = 47; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "47",
      "138",
      "113",
      "163"
    ],
    "answer": 3,
    "explanation": "Condition (138 > 47) evaluates to true. Thus z is assigned to 138 + 25 which equals 163."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(93 | 69);",
    "options": [
      "91",
      "93",
      "162",
      "96"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1011101 and 1000101 yields decimal 93."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(164 & 75);",
    "options": [
      "3",
      "-2",
      "239",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10100100 and 1001011 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(90 ^ 5);",
    "options": [
      "98",
      "93",
      "119",
      "95"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1011010 and 101 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(821 % 40);?",
    "options": [
      "0",
      "21",
      "24",
      "20"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 821 / 40 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 | 42);",
    "options": [
      "53",
      "41",
      "43",
      "46"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1011 and 101010 yields decimal 43."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(31 & 33);",
    "options": [
      "4",
      "-1",
      "64",
      "1"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 11111 and 100001 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(172 & 66);",
    "options": [
      "238",
      "-2",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10101100 and 1000010 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 70; int y = 11; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "76",
      "11",
      "64",
      "70"
    ],
    "answer": 0,
    "explanation": "Condition (70 > 11) evaluates to true. Thus z is assigned to 70 + 6 which equals 76."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 84; int y = 35; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "75",
      "93",
      "84",
      "35"
    ],
    "answer": 1,
    "explanation": "Condition (84 > 35) evaluates to true. Thus z is assigned to 84 + 9 which equals 93."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(88 | 62);",
    "options": [
      "126",
      "150",
      "129",
      "124"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1011000 and 111110 yields decimal 126."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 145; int y = 40; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "145",
      "40",
      "151",
      "139"
    ],
    "answer": 2,
    "explanation": "Condition (145 > 40) evaluates to true. Thus z is assigned to 145 + 6 which equals 151."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 112; int y = 126; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "156",
      "126",
      "96",
      "112"
    ],
    "answer": 2,
    "explanation": "Condition (112 > 126) evaluates to false. Thus z is assigned to 126 - 30 which equals 96."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(171 ^ 95);",
    "options": [
      "242",
      "266",
      "244",
      "247"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10101011 and 1011111 yields decimal 244."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 156; int y = 201; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "156",
      "176",
      "201",
      "226"
    ],
    "answer": 1,
    "explanation": "Condition (156 > 201) evaluates to false. Thus z is assigned to 201 - 25 which equals 176."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4664 % 27);?",
    "options": [
      "0",
      "20",
      "172",
      "23"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4664 / 27 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3710 % 43);?",
    "options": [
      "86",
      "15",
      "0",
      "12"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3710 / 43 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4348 % 45);?",
    "options": [
      "31",
      "28",
      "96",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4348 / 45 leaves remainder 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 30; int y = 176; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "176",
      "30",
      "150",
      "202"
    ],
    "answer": 2,
    "explanation": "Condition (30 > 176) evaluates to false. Thus z is assigned to 176 - 26 which equals 150."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(141 ^ 33);",
    "options": [
      "170",
      "175",
      "172",
      "174"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10001101 and 100001 yields decimal 172."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(129 & 102);",
    "options": [
      "0",
      "231",
      "3",
      "-2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10000001 and 1100110 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(21 | 67);",
    "options": [
      "90",
      "87",
      "88",
      "85"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10101 and 1000011 yields decimal 87."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 33; int y = 197; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "197",
      "172",
      "222",
      "33"
    ],
    "answer": 1,
    "explanation": "Condition (33 > 197) evaluates to false. Thus z is assigned to 197 - 25 which equals 172."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 190; int y = 63; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "190",
      "63",
      "156",
      "224"
    ],
    "answer": 3,
    "explanation": "Condition (190 > 63) evaluates to true. Thus z is assigned to 190 + 34 which equals 224."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 & 50);",
    "options": [
      "3",
      "0",
      "-2",
      "62"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1100 and 110010 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(205 | 29);",
    "options": [
      "221",
      "234",
      "219",
      "224"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11001101 and 11101 yields decimal 221."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(99 ^ 15);",
    "options": [
      "111",
      "114",
      "108",
      "106"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1100011 and 1111 yields decimal 108."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 106; int y = 111; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "128",
      "106",
      "94",
      "111"
    ],
    "answer": 2,
    "explanation": "Condition (106 > 111) evaluates to false. Thus z is assigned to 111 - 17 which equals 94."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(166 | 20);",
    "options": [
      "182",
      "186",
      "180",
      "185"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10100110 and 10100 yields decimal 182."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(88 | 68);",
    "options": [
      "92",
      "90",
      "156",
      "95"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1011000 and 1000100 yields decimal 92."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(90 ^ 102);",
    "options": [
      "58",
      "63",
      "192",
      "60"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1011010 and 1100110 yields decimal 60."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5047 % 44);?",
    "options": [
      "114",
      "31",
      "34",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 5047 / 44 leaves remainder 31."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1120 % 31);?",
    "options": [
      "7",
      "4",
      "0",
      "36"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1120 / 31 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(186 ^ 41);",
    "options": [
      "150",
      "227",
      "147",
      "145"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10111010 and 101001 yields decimal 147."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 178; int y = 155; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "193",
      "155",
      "178",
      "163"
    ],
    "answer": 0,
    "explanation": "Condition (178 > 155) evaluates to true. Thus z is assigned to 178 + 15 which equals 193."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4530 % 15);?",
    "options": [
      "0",
      "7",
      "3",
      "302"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4530 / 15 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(101 | 47);",
    "options": [
      "111",
      "148",
      "109",
      "114"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1100101 and 101111 yields decimal 111."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(838 % 43);?",
    "options": [
      "24",
      "21",
      "19",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 838 / 43 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 209; int y = 50; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "50",
      "236",
      "182",
      "209"
    ],
    "answer": 1,
    "explanation": "Condition (209 > 50) evaluates to true. Thus z is assigned to 209 + 27 which equals 236."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 127; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "127",
      "140",
      "17",
      "114"
    ],
    "answer": 3,
    "explanation": "Condition (17 > 127) evaluates to false. Thus z is assigned to 127 - 13 which equals 114."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3574 % 25);?",
    "options": [
      "142",
      "0",
      "24",
      "27"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3574 / 25 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1656 % 37);?",
    "options": [
      "44",
      "0",
      "31",
      "28"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1656 / 37 leaves remainder 28."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 44; int y = 105; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "128",
      "44",
      "82",
      "105"
    ],
    "answer": 2,
    "explanation": "Condition (44 > 105) evaluates to false. Thus z is assigned to 105 - 23 which equals 82."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(417 % 21);?",
    "options": [
      "19",
      "0",
      "18",
      "21"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 417 / 21 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(209 | 104);",
    "options": [
      "249",
      "313",
      "247",
      "252"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11010001 and 1101000 yields decimal 249."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 103; int y = 98; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "98",
      "103",
      "125",
      "81"
    ],
    "answer": 2,
    "explanation": "Condition (103 > 98) evaluates to true. Thus z is assigned to 103 + 22 which equals 125."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4507 % 19);?",
    "options": [
      "0",
      "4",
      "237",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4507 / 19 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 198; int y = 48; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "211",
      "48",
      "185",
      "198"
    ],
    "answer": 0,
    "explanation": "Condition (198 > 48) evaluates to true. Thus z is assigned to 198 + 13 which equals 211."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1896 % 47);?",
    "options": [
      "19",
      "16",
      "40",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1896 / 47 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(57 | 57);",
    "options": [
      "60",
      "57",
      "114",
      "55"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 111001 and 111001 yields decimal 57."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 39; int y = 162; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "192",
      "39",
      "162",
      "132"
    ],
    "answer": 3,
    "explanation": "Condition (39 > 162) evaluates to false. Thus z is assigned to 162 - 30 which equals 132."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(148 ^ 99);",
    "options": [
      "271",
      "247",
      "250",
      "245"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10010100 and 1100011 yields decimal 247."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 190; int y = 170; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "170",
      "175",
      "205",
      "190"
    ],
    "answer": 2,
    "explanation": "Condition (190 > 170) evaluates to true. Thus z is assigned to 190 + 15 which equals 205."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 170; int y = 157; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "170",
      "142",
      "157",
      "198"
    ],
    "answer": 3,
    "explanation": "Condition (170 > 157) evaluates to true. Thus z is assigned to 170 + 28 which equals 198."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4070 % 21);?",
    "options": [
      "20",
      "0",
      "193",
      "17"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4070 / 21 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2959 % 17);?",
    "options": [
      "0",
      "174",
      "1",
      "4"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2959 / 17 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 140; int y = 107; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "114",
      "166",
      "107",
      "140"
    ],
    "answer": 1,
    "explanation": "Condition (140 > 107) evaluates to true. Thus z is assigned to 140 + 26 which equals 166."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(122 ^ 49);",
    "options": [
      "75",
      "73",
      "171",
      "78"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1111010 and 110001 yields decimal 75."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 205; int y = 191; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "179",
      "191",
      "231",
      "205"
    ],
    "answer": 2,
    "explanation": "Condition (205 > 191) evaluates to true. Thus z is assigned to 205 + 26 which equals 231."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 67; int y = 165; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "185",
      "165",
      "145",
      "67"
    ],
    "answer": 2,
    "explanation": "Condition (67 > 165) evaluates to false. Thus z is assigned to 165 - 20 which equals 145."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(752 % 31);?",
    "options": [
      "8",
      "24",
      "0",
      "11"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 752 / 31 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4500 % 22);?",
    "options": [
      "12",
      "15",
      "0",
      "204"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4500 / 22 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4919 % 24);?",
    "options": [
      "0",
      "204",
      "23",
      "26"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4919 / 24 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3165 % 39);?",
    "options": [
      "9",
      "6",
      "81",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3165 / 39 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4481 % 59);?",
    "options": [
      "59",
      "0",
      "56",
      "75"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4481 / 59 leaves remainder 56."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 11; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "29",
      "3",
      "16",
      "11"
    ],
    "answer": 0,
    "explanation": "Condition (16 > 11) evaluates to true. Thus z is assigned to 16 + 13 which equals 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 62; int y = 193; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "219",
      "193",
      "167",
      "62"
    ],
    "answer": 2,
    "explanation": "Condition (62 > 193) evaluates to false. Thus z is assigned to 193 - 26 which equals 167."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3780 % 58);?",
    "options": [
      "65",
      "0",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3780 / 58 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 66; int y = 96; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "109",
      "83",
      "96",
      "66"
    ],
    "answer": 1,
    "explanation": "Condition (66 > 96) evaluates to false. Thus z is assigned to 96 - 13 which equals 83."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(88 | 40);",
    "options": [
      "128",
      "120",
      "123",
      "118"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1011000 and 101000 yields decimal 120."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 142; int y = 92; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "92",
      "142",
      "150",
      "134"
    ],
    "answer": 2,
    "explanation": "Condition (142 > 92) evaluates to true. Thus z is assigned to 142 + 8 which equals 150."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(228 % 33);?",
    "options": [
      "6",
      "33",
      "30",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 228 / 33 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(89 & 45);",
    "options": [
      "134",
      "7",
      "9",
      "12"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1011001 and 101101 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 162; int y = 88; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "162",
      "137",
      "88",
      "187"
    ],
    "answer": 3,
    "explanation": "Condition (162 > 88) evaluates to true. Thus z is assigned to 162 + 25 which equals 187."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(80 ^ 61);",
    "options": [
      "107",
      "141",
      "112",
      "109"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1010000 and 111101 yields decimal 109."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(157 ^ 18);",
    "options": [
      "143",
      "175",
      "146",
      "141"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10011101 and 10010 yields decimal 143."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 175; int y = 114; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "175",
      "152",
      "114",
      "198"
    ],
    "answer": 3,
    "explanation": "Condition (175 > 114) evaluates to true. Thus z is assigned to 175 + 23 which equals 198."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1992 % 10);?",
    "options": [
      "0",
      "5",
      "199",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1992 / 10 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 21; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "41",
      "20",
      "21",
      "1"
    ],
    "answer": 3,
    "explanation": "Condition (20 > 21) evaluates to false. Thus z is assigned to 21 - 20 which equals 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 182; int y = 156; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "197",
      "182",
      "167",
      "156"
    ],
    "answer": 0,
    "explanation": "Condition (182 > 156) evaluates to true. Thus z is assigned to 182 + 15 which equals 197."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(199 | 53);",
    "options": [
      "250",
      "245",
      "252",
      "247"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 11000111 and 110101 yields decimal 247."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(27 ^ 18);",
    "options": [
      "45",
      "12",
      "9",
      "7"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 11011 and 10010 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 167; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "135",
      "167",
      "23",
      "199"
    ],
    "answer": 0,
    "explanation": "Condition (23 > 167) evaluates to false. Thus z is assigned to 167 - 32 which equals 135."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 147; int y = 129; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "147",
      "129",
      "118",
      "176"
    ],
    "answer": 3,
    "explanation": "Condition (147 > 129) evaluates to true. Thus z is assigned to 147 + 29 which equals 176."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 207; int y = 129; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "201",
      "129",
      "213",
      "207"
    ],
    "answer": 2,
    "explanation": "Condition (207 > 129) evaluates to true. Thus z is assigned to 207 + 6 which equals 213."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(119 | 31);",
    "options": [
      "130",
      "127",
      "150",
      "125"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1110111 and 11111 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(175 ^ 61);",
    "options": [
      "144",
      "146",
      "149",
      "236"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10101111 and 111101 yields decimal 146."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2145 % 19);?",
    "options": [
      "112",
      "20",
      "17",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2145 / 19 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1088 % 17);?",
    "options": [
      "0",
      "3",
      "7",
      "64"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1088 / 17 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 106; int y = 191; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "106",
      "204",
      "178",
      "191"
    ],
    "answer": 2,
    "explanation": "Condition (106 > 191) evaluates to false. Thus z is assigned to 191 - 13 which equals 178."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 77; int y = 20; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "59",
      "95",
      "77",
      "20"
    ],
    "answer": 1,
    "explanation": "Condition (77 > 20) evaluates to true. Thus z is assigned to 77 + 18 which equals 95."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(775 % 17);?",
    "options": [
      "45",
      "0",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 775 / 17 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(171 ^ 101);",
    "options": [
      "204",
      "209",
      "272",
      "206"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10101011 and 1100101 yields decimal 206."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(22 | 97);",
    "options": [
      "143",
      "119",
      "117",
      "122"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10110 and 1100001 yields decimal 119."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 28; int y = 34; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "28",
      "25",
      "43",
      "34"
    ],
    "answer": 1,
    "explanation": "Condition (28 > 34) evaluates to false. Thus z is assigned to 34 - 9 which equals 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 151; int y = 123; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "151",
      "123",
      "169",
      "133"
    ],
    "answer": 2,
    "explanation": "Condition (151 > 123) evaluates to true. Thus z is assigned to 151 + 18 which equals 169."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 182; int y = 142; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "182",
      "142",
      "177",
      "187"
    ],
    "answer": 3,
    "explanation": "Condition (182 > 142) evaluates to true. Thus z is assigned to 182 + 5 which equals 187."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(182 ^ 37);",
    "options": [
      "147",
      "219",
      "150",
      "145"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10110110 and 100101 yields decimal 147."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(104 & 59);",
    "options": [
      "43",
      "40",
      "38",
      "163"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1101000 and 111011 yields decimal 40."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 158; int y = 163; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "158",
      "133",
      "163",
      "193"
    ],
    "answer": 1,
    "explanation": "Condition (158 > 163) evaluates to false. Thus z is assigned to 163 - 30 which equals 133."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(155 & 52);",
    "options": [
      "14",
      "16",
      "207",
      "19"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10011011 and 110100 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(84 | 45);",
    "options": [
      "128",
      "125",
      "123",
      "129"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1010100 and 101101 yields decimal 125."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 122; int y = 14; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "141",
      "122",
      "14",
      "103"
    ],
    "answer": 0,
    "explanation": "Condition (122 > 14) evaluates to true. Thus z is assigned to 122 + 19 which equals 141."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2961 % 36);?",
    "options": [
      "0",
      "12",
      "9",
      "82"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2961 / 36 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(949 % 39);?",
    "options": [
      "0",
      "24",
      "16",
      "13"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 949 / 39 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 45; int y = 97; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "45",
      "109",
      "85",
      "97"
    ],
    "answer": 2,
    "explanation": "Condition (45 > 97) evaluates to false. Thus z is assigned to 97 - 12 which equals 85."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(171 | 44);",
    "options": [
      "173",
      "175",
      "215",
      "178"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10101011 and 101100 yields decimal 175."
  }
];
