window.quizData = window.quizData || {};
window.quizData.java = [
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "Java is which type of language?",
    "options": [
      "Procedural only",
      "Object-Oriented",
      "Functional only",
      "Assembly by design"
    ],
    "answer": 1,
    "explanation": "Java follows OOP principles: encapsulation, inheritance, polymorphism, abstraction."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "JVM stands for?",
    "options": [
      "Java Virtual Machine",
      "Java Variable Manager",
      "Java Version Module",
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
      "Only libraries under normal conditions",
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
      "Only compiler in most cases",
      "JVM + core libraries",
      "Only debugger in practice",
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
      "Static methods only (widely accepted)",
      "Private fields with public getters/setters",
      "Abstract classes under normal conditions",
      "Public fields in typical implementations"
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
      "Handling exceptions under normal conditions",
      "Thread creation in typical implementations",
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
      "No methods in typical implementations",
      "Same method behaves differently based on context",
      "One method one behavior as per specification",
      "Static binding always under normal conditions"
    ],
    "answer": 1,
    "explanation": "Achieved via overloading and overriding."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Easy",
    "question": "Abstraction is implemented using?",
    "options": [
      "Concrete classes only in practice",
      "Abstract classes and interfaces",
      "Variables (commonly used)",
      "Loops under normal conditions"
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
      "Different return type only (widely accepted)",
      "Same method name with different parameters",
      "Different classes (standard definition)",
      "Same name same parameters in most cases"
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
      "Different method name in typical implementations",
      "Same class different params in typical implementations",
      "Child class redefines parent method with same signature",
      "Static methods in typical implementations"
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
      "Class is loaded (typical scenario)",
      "Object is created using new keyword",
      "Method is called (default behavior)",
      "Variable is declared (widely accepted)"
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
      "Both O(1) under normal conditions",
      "LinkedList is faster (widely accepted)",
      "Both O(n) in typical implementations",
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
      "No nulls in typical implementations",
      "Multiple null keys (primary approach)",
      "One null key and multiple null values",
      "Only null values (widely accepted)"
    ],
    "answer": 2,
    "explanation": "HashMap permits one null key in its implementation."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Easy",
    "question": "HashSet stores?",
    "options": [
      "Key-value pairs based on convention",
      "Unique elements only, no duplicates",
      "Duplicates allowed in most cases",
      "Sorted elements in typical implementations"
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
      "Insertion order in most cases",
      "Reverse order by design",
      "Random order in most cases",
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
      "Insertion order (standard definition)",
      "Alphabetical only (commonly used)",
      "Random under normal conditions",
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
      "Always (except System.exit)",
      "Only on exception by design",
      "Only on success in practice",
      "Never in standard usage"
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
      "Verified at compile time",
      "OS-level errors by design",
      "Never checked (commonly used)",
      "Runtime only (primary approach)"
    ],
    "answer": 0,
    "explanation": "Must be caught or declared with throws."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Medium",
    "question": "Custom exception extends?",
    "options": [
      "Thread (commonly used)",
      "String (commonly used)",
      "Object (standard definition)",
      "Exception or RuntimeException"
    ],
    "answer": 3,
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
      "It has no methods (primary approach)",
      "It is final class in typical implementations",
      "It uses char array based on convention",
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
      "Both not thread-safe as per specification",
      "Both thread-safe as per specification",
      "StringBuffer is faster as per specification",
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
      "Only extending Thread (default behavior)",
      "Using String class in typical implementations",
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
      "Only one thread accesses block/method at a time",
      "Memory is freed in typical implementations",
      "Thread is stopped under normal conditions",
      "All threads run simultaneously in standard usage"
    ],
    "answer": 0,
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
      "File handling (commonly used)",
      "Network calls by design"
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
      "function(){} in most cases",
      "(parameters) -> expression/body",
      "method => param (general case)",
      "def func(): in typical implementations"
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
      "File I/O streaming in typical implementations",
      "Network streaming (primary approach)",
      "Functional-style operations on collections",
      "Audio streaming in typical implementations"
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
      "No methods under normal conditions",
      "Multiple abstract methods",
      "Exactly one abstract method",
      "Only default methods in practice"
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
      "OS handles it in typical implementations",
      "No memory management in typical implementations",
      "Programmer must free memory (widely accepted)",
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
      "Class definitions (default behavior)",
      "Objects only (widely accepted)",
      "Method calls and local variables",
      "Static variables only in standard usage"
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
      "Method calls (widely accepted)",
      "Objects and instance variables",
      "Local variables only (general case)",
      "Primitives only in most cases"
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
      "File contents in practice",
      "File or directory path",
      "Database connection",
      "Network socket (general case)"
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
      "It is newer in typical implementations",
      "It skips characters as per specification",
      "Larger internal buffer reduces I/O operations",
      "It uses less memory (typical scenario)"
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
      "XML only in typical implementations",
      "HTML page in typical implementations",
      "Byte stream for storage or transmission",
      "String format under normal conditions"
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
      "Belongs to instance (widely accepted)",
      "Is private in typical implementations",
      "Cannot be accessed (commonly used)"
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
      "Instantiated by design",
      "Extended/inherited",
      "Imported by design",
      "Used based on convention"
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
      "Only abstract methods in standard usage",
      "Only concrete methods (commonly used)",
      "No methods (default behavior)",
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
      "Static context (commonly used)",
      "Previous object in practice",
      "Parent class (widely accepted)",
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
      "Create new object (widely accepted)",
      "Handle exception in typical implementations",
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
      "Static method call (default behavior)",
      "Constructor call (standard definition)",
      "Runtime resolution of overridden method call",
      "Compile-time resolution (widely accepted)"
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
      "StackOverflow in practice",
      "ClassCast (commonly used)",
      "ArrayIndexOutOfBounds"
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
      "Equality checking",
      "Custom sorting logic",
      "Serialization by design",
      "Hashing by design"
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
      "Both check content in typical implementations",
      "equals() checks content equality; == checks reference",
      "Both check reference in typical implementations",
      "No difference in typical implementations"
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
      "Manual casting in typical implementations",
      "Object to primitive only under normal conditions",
      "String to int in typical implementations",
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
      "Only one instance of a class exists",
      "Multiple instances in most cases",
      "Abstract class (widely accepted)",
      "No instances (primary approach)"
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
      "Object creation without exposing instantiation logic",
      "Sorting algorithm in typical implementations",
      "Memory allocation in typical implementations",
      "Thread management in typical implementations"
    ],
    "answer": 0,
    "explanation": "Factory method returns appropriate subclass instance."
  },
  {
    "subject": "Java",
    "topic": "Java Core",
    "difficulty": "Hard",
    "question": "Design pattern: Observer implements?",
    "options": [
      "Sorting in typical implementations",
      "Tree traversal under normal conditions",
      "One-to-many dependency notification",
      "Singleton pattern (standard definition)"
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
      "Destroying objects based on convention",
      "Constructing complex objects step by step",
      "Sorting in typical implementations"
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
      "Path where JVM looks for classes and packages",
      "File system root in typical implementations",
      "Database URL in typical implementations",
      "Network path in typical implementations"
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
      "undefined",
      "null",
      "empty string",
      "0"
    ],
    "answer": 1,
    "explanation": "Uninitialized object references default to null."
  },
  {
    "subject": "Java",
    "topic": "OOP",
    "difficulty": "Medium",
    "question": "Java supports multiple inheritance through?",
    "options": [
      "Constructors",
      "Abstract classes",
      "Interfaces only",
      "Classes in most cases"
    ],
    "answer": 2,
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
      "A variable type in typical implementations",
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
      "Constant declaration (general case)",
      "Dynamic typing (standard definition)",
      "Global variable as per specification",
      "Local variable type inference"
    ],
    "answer": 3,
    "explanation": "Compiler infers type from initializer."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1087 % 49);?",
    "options": [
      "22",
      "0",
      "9",
      "12"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1087 / 49 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(388 % 10);?",
    "options": [
      "8",
      "0",
      "38",
      "11"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 388 / 10 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 171; int y = 81; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "145",
      "197",
      "81",
      "171"
    ],
    "answer": 1,
    "explanation": "Condition (171 > 81) evaluates to true. Thus z is assigned to 171 + 26 which equals 197."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 88; int y = 46; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "46",
      "81",
      "88",
      "95"
    ],
    "answer": 3,
    "explanation": "Condition (88 > 46) evaluates to true. Thus z is assigned to 88 + 7 which equals 95."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2160 % 39);?",
    "options": [
      "0",
      "18",
      "15",
      "55"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2160 / 39 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 76; int y = 184; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "211",
      "157",
      "76",
      "184"
    ],
    "answer": 1,
    "explanation": "Condition (76 > 184) evaluates to false. Thus z is assigned to 184 - 27 which equals 157."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1060 % 22);?",
    "options": [
      "0",
      "7",
      "4",
      "48"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1060 / 22 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 154; int y = 94; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "94",
      "154",
      "185",
      "123"
    ],
    "answer": 2,
    "explanation": "Condition (154 > 94) evaluates to true. Thus z is assigned to 154 + 31 which equals 185."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(71 | 5);",
    "options": [
      "69",
      "76",
      "74",
      "71"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1000111 and 101 yields decimal 71."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(65 | 45);",
    "options": [
      "112",
      "109",
      "107",
      "110"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1000001 and 101101 yields decimal 109."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(196 ^ 53);",
    "options": [
      "244",
      "241",
      "239",
      "249"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 11000100 and 110101 yields decimal 241."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 205; int y = 26; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "217",
      "205",
      "193",
      "26"
    ],
    "answer": 0,
    "explanation": "Condition (205 > 26) evaluates to true. Thus z is assigned to 205 + 12 which equals 217."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 115; int y = 165; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "196",
      "115",
      "165",
      "134"
    ],
    "answer": 3,
    "explanation": "Condition (115 > 165) evaluates to false. Thus z is assigned to 165 - 31 which equals 134."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(175 ^ 27);",
    "options": [
      "202",
      "178",
      "183",
      "180"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10101111 and 11011 yields decimal 180."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 207; int y = 172; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "212",
      "207",
      "172",
      "202"
    ],
    "answer": 0,
    "explanation": "Condition (207 > 172) evaluates to true. Thus z is assigned to 207 + 5 which equals 212."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 127; int y = 202; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "127",
      "208",
      "202",
      "196"
    ],
    "answer": 3,
    "explanation": "Condition (127 > 202) evaluates to false. Thus z is assigned to 202 - 6 which equals 196."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(106 & 61);",
    "options": [
      "167",
      "40",
      "43",
      "38"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1101010 and 111101 yields decimal 40."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(209 % 50);?",
    "options": [
      "9",
      "12",
      "0",
      "4"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 209 / 50 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4097 % 43);?",
    "options": [
      "15",
      "95",
      "12",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4097 / 43 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 28; int y = 168; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "28",
      "168",
      "149",
      "187"
    ],
    "answer": 2,
    "explanation": "Condition (28 > 168) evaluates to false. Thus z is assigned to 168 - 19 which equals 149."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 145; int y = 74; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "145",
      "133",
      "74",
      "157"
    ],
    "answer": 3,
    "explanation": "Condition (145 > 74) evaluates to true. Thus z is assigned to 145 + 12 which equals 157."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 186; int y = 153; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "220",
      "152",
      "153",
      "186"
    ],
    "answer": 0,
    "explanation": "Condition (186 > 153) evaluates to true. Thus z is assigned to 186 + 34 which equals 220."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(38 & 69);",
    "options": [
      "7",
      "107",
      "2",
      "4"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 100110 and 1000101 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3536 % 14);?",
    "options": [
      "252",
      "8",
      "11",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3536 / 14 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 208; int y = 65; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "65",
      "232",
      "208",
      "184"
    ],
    "answer": 1,
    "explanation": "Condition (208 > 65) evaluates to true. Thus z is assigned to 208 + 24 which equals 232."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 187; int y = 158; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "166",
      "208",
      "187",
      "158"
    ],
    "answer": 1,
    "explanation": "Condition (187 > 158) evaluates to true. Thus z is assigned to 187 + 21 which equals 208."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 33; int y = 53; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "33",
      "84",
      "22",
      "53"
    ],
    "answer": 2,
    "explanation": "Condition (33 > 53) evaluates to false. Thus z is assigned to 53 - 31 which equals 22."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 171; int y = 51; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "171",
      "143",
      "51",
      "199"
    ],
    "answer": 3,
    "explanation": "Condition (171 > 51) evaluates to true. Thus z is assigned to 171 + 28 which equals 199."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(155 & 83);",
    "options": [
      "19",
      "238",
      "22",
      "17"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10011011 and 1010011 yields decimal 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(150 & 37);",
    "options": [
      "7",
      "4",
      "2",
      "187"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10010110 and 100101 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(570 % 20);?",
    "options": [
      "10",
      "0",
      "13",
      "28"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 570 / 20 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 84; int y = 47; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "47",
      "54",
      "84",
      "114"
    ],
    "answer": 3,
    "explanation": "Condition (84 > 47) evaluates to true. Thus z is assigned to 84 + 30 which equals 114."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(155 | 38);",
    "options": [
      "194",
      "191",
      "193",
      "189"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10011011 and 100110 yields decimal 191."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(97 ^ 77);",
    "options": [
      "42",
      "47",
      "174",
      "44"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1100001 and 1001101 yields decimal 44."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(112 ^ 73);",
    "options": [
      "55",
      "60",
      "185",
      "57"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1110000 and 1001001 yields decimal 57."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(148 ^ 42);",
    "options": [
      "193",
      "214",
      "188",
      "190"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10010100 and 101010 yields decimal 190."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(41 | 81);",
    "options": [
      "122",
      "119",
      "124",
      "121"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 101001 and 1010001 yields decimal 121."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 126; int y = 21; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "94",
      "126",
      "158",
      "21"
    ],
    "answer": 2,
    "explanation": "Condition (126 > 21) evaluates to true. Thus z is assigned to 126 + 32 which equals 158."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 116; int y = 44; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "116",
      "137",
      "44",
      "95"
    ],
    "answer": 1,
    "explanation": "Condition (116 > 44) evaluates to true. Thus z is assigned to 116 + 21 which equals 137."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(57 & 56);",
    "options": [
      "59",
      "56",
      "113",
      "54"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 111001 and 111000 yields decimal 56."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(354 % 55);?",
    "options": [
      "27",
      "6",
      "0",
      "24"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 354 / 55 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4617 % 47);?",
    "options": [
      "14",
      "0",
      "11",
      "98"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4617 / 47 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(41 & 80);",
    "options": [
      "0",
      "121",
      "-2",
      "3"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 101001 and 1010000 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(248 % 43);?",
    "options": [
      "5",
      "0",
      "33",
      "36"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 248 / 43 leaves remainder 33."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(77 ^ 39);",
    "options": [
      "109",
      "104",
      "106",
      "116"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1001101 and 100111 yields decimal 106."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 57; int y = 130; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "158",
      "130",
      "102",
      "57"
    ],
    "answer": 2,
    "explanation": "Condition (57 > 130) evaluates to false. Thus z is assigned to 130 - 28 which equals 102."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(127 | 38);",
    "options": [
      "127",
      "130",
      "125",
      "165"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1111111 and 100110 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(36 ^ 70);",
    "options": [
      "96",
      "101",
      "106",
      "98"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 100100 and 1000110 yields decimal 98."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1505 % 38);?",
    "options": [
      "39",
      "26",
      "23",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1505 / 38 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(112 ^ 44);",
    "options": [
      "90",
      "156",
      "92",
      "95"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1110000 and 101100 yields decimal 92."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 41; int y = 160; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "160",
      "174",
      "41",
      "146"
    ],
    "answer": 3,
    "explanation": "Condition (41 > 160) evaluates to false. Thus z is assigned to 160 - 14 which equals 146."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(107 | 83);",
    "options": [
      "121",
      "190",
      "123",
      "126"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1101011 and 1010011 yields decimal 123."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5099 % 41);?",
    "options": [
      "124",
      "0",
      "18",
      "15"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 5099 / 41 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2592 % 53);?",
    "options": [
      "55",
      "0",
      "51",
      "48"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2592 / 53 leaves remainder 48."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2150 % 32);?",
    "options": [
      "0",
      "9",
      "67",
      "6"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2150 / 32 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2562 % 55);?",
    "options": [
      "0",
      "35",
      "46",
      "32"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2562 / 55 leaves remainder 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3486 % 58);?",
    "options": [
      "0",
      "6",
      "60",
      "9"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3486 / 58 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1967 % 26);?",
    "options": [
      "0",
      "17",
      "75",
      "20"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1967 / 26 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(78 | 73);",
    "options": [
      "77",
      "82",
      "79",
      "151"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1001110 and 1001001 yields decimal 79."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(138 ^ 29);",
    "options": [
      "149",
      "151",
      "154",
      "167"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10001010 and 11101 yields decimal 151."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(41 & 22);",
    "options": [
      "3",
      "0",
      "63",
      "-2"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 101001 and 10110 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(60 ^ 69);",
    "options": [
      "119",
      "129",
      "121",
      "124"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 111100 and 1000101 yields decimal 121."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4555 % 45);?",
    "options": [
      "0",
      "10",
      "101",
      "13"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4555 / 45 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(28 ^ 90);",
    "options": [
      "68",
      "70",
      "73",
      "118"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 11100 and 1011010 yields decimal 70."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2595 % 51);?",
    "options": [
      "50",
      "45",
      "48",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2595 / 51 leaves remainder 45."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(88 ^ 99);",
    "options": [
      "187",
      "62",
      "59",
      "57"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1011000 and 1100011 yields decimal 59."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(140 & 100);",
    "options": [
      "7",
      "2",
      "240",
      "4"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10001100 and 1100100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(37 | 30);",
    "options": [
      "63",
      "66",
      "67",
      "61"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 100101 and 11110 yields decimal 63."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 68; int y = 195; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "68",
      "227",
      "195",
      "163"
    ],
    "answer": 3,
    "explanation": "Condition (68 > 195) evaluates to false. Thus z is assigned to 195 - 32 which equals 163."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 131; int y = 25; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "164",
      "131",
      "25",
      "98"
    ],
    "answer": 0,
    "explanation": "Condition (131 > 25) evaluates to true. Thus z is assigned to 131 + 33 which equals 164."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(108 & 71);",
    "options": [
      "66",
      "68",
      "71",
      "179"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1101100 and 1000111 yields decimal 68."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(177 & 24);",
    "options": [
      "201",
      "16",
      "14",
      "19"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10110001 and 11000 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1760 % 45);?",
    "options": [
      "39",
      "5",
      "0",
      "8"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1760 / 45 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 128; int y = 78; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "144",
      "128",
      "78",
      "112"
    ],
    "answer": 0,
    "explanation": "Condition (128 > 78) evaluates to true. Thus z is assigned to 128 + 16 which equals 144."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(759 % 20);?",
    "options": [
      "37",
      "19",
      "0",
      "22"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 759 / 20 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 157; int y = 124; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "168",
      "146",
      "157",
      "124"
    ],
    "answer": 0,
    "explanation": "Condition (157 > 124) evaluates to true. Thus z is assigned to 157 + 11 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(691 % 27);?",
    "options": [
      "25",
      "0",
      "19",
      "16"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 691 / 27 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 66; int y = 189; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "161",
      "66",
      "189",
      "217"
    ],
    "answer": 0,
    "explanation": "Condition (66 > 189) evaluates to false. Thus z is assigned to 189 - 28 which equals 161."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(101 | 50);",
    "options": [
      "122",
      "117",
      "151",
      "119"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1100101 and 110010 yields decimal 119."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 47; int y = 12; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "30",
      "47",
      "64",
      "12"
    ],
    "answer": 2,
    "explanation": "Condition (47 > 12) evaluates to true. Thus z is assigned to 47 + 17 which equals 64."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5177 % 35);?",
    "options": [
      "147",
      "35",
      "0",
      "32"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 5177 / 35 leaves remainder 32."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(35 ^ 43);",
    "options": [
      "6",
      "8",
      "78",
      "11"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 100011 and 101011 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(12 & 82);",
    "options": [
      "3",
      "0",
      "-2",
      "94"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1100 and 1010010 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(103 & 5);",
    "options": [
      "3",
      "108",
      "8",
      "5"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1100111 and 101 yields decimal 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1518 % 18);?",
    "options": [
      "9",
      "84",
      "6",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1518 / 18 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(144 & 44);",
    "options": [
      "-2",
      "188",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10010000 and 101100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(727 % 48);?",
    "options": [
      "0",
      "10",
      "7",
      "15"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 727 / 48 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(85 ^ 27);",
    "options": [
      "112",
      "76",
      "78",
      "81"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1010101 and 11011 yields decimal 78."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 79; int y = 108; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "79",
      "108",
      "74",
      "142"
    ],
    "answer": 2,
    "explanation": "Condition (79 > 108) evaluates to false. Thus z is assigned to 108 - 34 which equals 74."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 141; int y = 14; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "158",
      "14",
      "124",
      "141"
    ],
    "answer": 0,
    "explanation": "Condition (141 > 14) evaluates to true. Thus z is assigned to 141 + 17 which equals 158."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1486 % 28);?",
    "options": [
      "0",
      "2",
      "53",
      "5"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1486 / 28 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(89 | 22);",
    "options": [
      "111",
      "98",
      "93",
      "95"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1011001 and 10110 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 173; int y = 206; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "215",
      "197",
      "173",
      "206"
    ],
    "answer": 1,
    "explanation": "Condition (173 > 206) evaluates to false. Thus z is assigned to 206 - 9 which equals 197."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 198; int y = 156; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "220",
      "176",
      "156",
      "198"
    ],
    "answer": 0,
    "explanation": "Condition (198 > 156) evaluates to true. Thus z is assigned to 198 + 22 which equals 220."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 26; int y = 49; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "26",
      "49",
      "17",
      "81"
    ],
    "answer": 2,
    "explanation": "Condition (26 > 49) evaluates to false. Thus z is assigned to 49 - 32 which equals 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(158 | 63);",
    "options": [
      "191",
      "189",
      "194",
      "221"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10011110 and 111111 yields decimal 191."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 61; int y = 161; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "182",
      "140",
      "161",
      "61"
    ],
    "answer": 1,
    "explanation": "Condition (61 > 161) evaluates to false. Thus z is assigned to 161 - 21 which equals 140."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(43 | 64);",
    "options": [
      "107",
      "105",
      "110",
      "131"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 101011 and 1000000 yields decimal 107."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(208 | 96);",
    "options": [
      "304",
      "243",
      "238",
      "240"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 11010000 and 1100000 yields decimal 240."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 110; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "88",
      "19",
      "132",
      "110"
    ],
    "answer": 0,
    "explanation": "Condition (19 > 110) evaluates to false. Thus z is assigned to 110 - 22 which equals 88."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(156 | 8);",
    "options": [
      "154",
      "159",
      "156",
      "164"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10011100 and 1000 yields decimal 156."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 43; int y = 91; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "43",
      "91",
      "86",
      "96"
    ],
    "answer": 2,
    "explanation": "Condition (43 > 91) evaluates to false. Thus z is assigned to 91 - 5 which equals 86."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(205 ^ 45);",
    "options": [
      "227",
      "250",
      "222",
      "224"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 11001101 and 101101 yields decimal 224."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4189 % 24);?",
    "options": [
      "0",
      "16",
      "13",
      "174"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4189 / 24 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2531 % 31);?",
    "options": [
      "0",
      "81",
      "20",
      "23"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2531 / 31 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(431 % 11);?",
    "options": [
      "2",
      "5",
      "39",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 431 / 11 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4883 % 21);?",
    "options": [
      "0",
      "14",
      "232",
      "11"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4883 / 21 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(65 ^ 48);",
    "options": [
      "116",
      "137",
      "113",
      "111"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1000001 and 110000 yields decimal 113."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4676 % 51);?",
    "options": [
      "35",
      "38",
      "0",
      "91"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4676 / 51 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 32; int y = 22; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "0",
      "64",
      "32",
      "22"
    ],
    "answer": 1,
    "explanation": "Condition (32 > 22) evaluates to true. Thus z is assigned to 32 + 32 which equals 64."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4809 % 15);?",
    "options": [
      "320",
      "9",
      "12",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4809 / 15 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(60 | 62);",
    "options": [
      "65",
      "122",
      "60",
      "62"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 111100 and 111110 yields decimal 62."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(172 & 51);",
    "options": [
      "30",
      "35",
      "32",
      "223"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10101100 and 110011 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(54 & 68);",
    "options": [
      "2",
      "7",
      "4",
      "122"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 110110 and 1000100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1931 % 20);?",
    "options": [
      "96",
      "11",
      "14",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1931 / 20 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 113; int y = 58; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "113",
      "58",
      "123",
      "103"
    ],
    "answer": 2,
    "explanation": "Condition (113 > 58) evaluates to true. Thus z is assigned to 113 + 10 which equals 123."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1056 % 50);?",
    "options": [
      "6",
      "0",
      "9",
      "21"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1056 / 50 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(133 | 91);",
    "options": [
      "226",
      "221",
      "223",
      "224"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10000101 and 1011011 yields decimal 223."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(143 ^ 49);",
    "options": [
      "188",
      "190",
      "192",
      "193"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10001111 and 110001 yields decimal 190."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(136 ^ 11);",
    "options": [
      "147",
      "134",
      "131",
      "129"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10001000 and 1011 yields decimal 131."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3724 % 16);?",
    "options": [
      "12",
      "232",
      "15",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3724 / 16 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(765 % 28);?",
    "options": [
      "9",
      "12",
      "27",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 765 / 28 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2805 % 51);?",
    "options": [
      "0",
      "7",
      "3",
      "55"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2805 / 51 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 41; int y = 104; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "41",
      "135",
      "104",
      "73"
    ],
    "answer": 3,
    "explanation": "Condition (41 > 104) evaluates to false. Thus z is assigned to 104 - 31 which equals 73."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 40; int y = 29; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "29",
      "33",
      "47",
      "40"
    ],
    "answer": 2,
    "explanation": "Condition (40 > 29) evaluates to true. Thus z is assigned to 40 + 7 which equals 47."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3457 % 20);?",
    "options": [
      "20",
      "17",
      "0",
      "172"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3457 / 20 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4505 % 22);?",
    "options": [
      "17",
      "20",
      "204",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4505 / 22 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4512 % 46);?",
    "options": [
      "98",
      "0",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4512 / 46 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 12; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "3",
      "21",
      "12",
      "12"
    ],
    "answer": 0,
    "explanation": "Condition (12 > 12) evaluates to false. Thus z is assigned to 12 - 9 which equals 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(32 ^ 80);",
    "options": [
      "115",
      "110",
      "136",
      "112"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 100000 and 1010000 yields decimal 112."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3169 % 44);?",
    "options": [
      "1",
      "0",
      "4",
      "72"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3169 / 44 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1615 % 30);?",
    "options": [
      "53",
      "28",
      "25",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1615 / 30 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(161 & 46);",
    "options": [
      "207",
      "32",
      "30",
      "35"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10100001 and 101110 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 181; int y = 64; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "181",
      "186",
      "64",
      "176"
    ],
    "answer": 1,
    "explanation": "Condition (181 > 64) evaluates to true. Thus z is assigned to 181 + 5 which equals 186."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4746 % 19);?",
    "options": [
      "249",
      "15",
      "0",
      "18"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4746 / 19 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(91 | 28);",
    "options": [
      "95",
      "119",
      "93",
      "98"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1011011 and 11100 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 176; int y = 136; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "159",
      "193",
      "136",
      "176"
    ],
    "answer": 1,
    "explanation": "Condition (176 > 136) evaluates to true. Thus z is assigned to 176 + 17 which equals 193."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(200 & 103);",
    "options": [
      "64",
      "67",
      "303",
      "62"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11001000 and 1100111 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 188; int y = 205; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "205",
      "211",
      "199",
      "188"
    ],
    "answer": 2,
    "explanation": "Condition (188 > 205) evaluates to false. Thus z is assigned to 205 - 6 which equals 199."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1224 % 23);?",
    "options": [
      "53",
      "8",
      "0",
      "5"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1224 / 23 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(36 | 14);",
    "options": [
      "44",
      "50",
      "46",
      "49"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 100100 and 1110 yields decimal 46."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 34; int y = 12; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "6",
      "34",
      "12",
      "62"
    ],
    "answer": 3,
    "explanation": "Condition (34 > 12) evaluates to true. Thus z is assigned to 34 + 28 which equals 62."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 54; int y = 144; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "178",
      "54",
      "144",
      "110"
    ],
    "answer": 3,
    "explanation": "Condition (54 > 144) evaluates to false. Thus z is assigned to 144 - 34 which equals 110."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3417 % 35);?",
    "options": [
      "97",
      "25",
      "22",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3417 / 35 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(145 ^ 84);",
    "options": [
      "195",
      "197",
      "229",
      "200"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10010001 and 1010100 yields decimal 197."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2250 % 30);?",
    "options": [
      "7",
      "3",
      "75",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2250 / 30 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 44; int y = 140; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "169",
      "44",
      "140",
      "111"
    ],
    "answer": 3,
    "explanation": "Condition (44 > 140) evaluates to false. Thus z is assigned to 140 - 29 which equals 111."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1118 % 57);?",
    "options": [
      "19",
      "38",
      "0",
      "35"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1118 / 57 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1408 % 51);?",
    "options": [
      "0",
      "34",
      "27",
      "31"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1408 / 51 leaves remainder 31."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(119 | 54);",
    "options": [
      "119",
      "173",
      "117",
      "122"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1110111 and 110110 yields decimal 119."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(126 ^ 31);",
    "options": [
      "100",
      "95",
      "97",
      "157"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1111110 and 11111 yields decimal 97."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4779 % 22);?",
    "options": [
      "5",
      "8",
      "217",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4779 / 22 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 189; int y = 172; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "169",
      "189",
      "209",
      "172"
    ],
    "answer": 2,
    "explanation": "Condition (189 > 172) evaluates to true. Thus z is assigned to 189 + 20 which equals 209."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(73 ^ 65);",
    "options": [
      "138",
      "6",
      "8",
      "11"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1001001 and 1000001 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1752 % 10);?",
    "options": [
      "2",
      "5",
      "0",
      "175"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1752 / 10 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(195 & 94);",
    "options": [
      "69",
      "289",
      "64",
      "66"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 11000011 and 1011110 yields decimal 66."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 122; int y = 58; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "122",
      "58",
      "114",
      "130"
    ],
    "answer": 3,
    "explanation": "Condition (122 > 58) evaluates to true. Thus z is assigned to 122 + 8 which equals 130."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(433 % 30);?",
    "options": [
      "16",
      "14",
      "0",
      "13"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 433 / 30 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1643 % 23);?",
    "options": [
      "0",
      "71",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1643 / 23 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(207 ^ 45);",
    "options": [
      "252",
      "224",
      "226",
      "229"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 11001111 and 101101 yields decimal 226."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3237 % 26);?",
    "options": [
      "13",
      "16",
      "124",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3237 / 26 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 110; int y = 78; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "110",
      "78",
      "89",
      "131"
    ],
    "answer": 3,
    "explanation": "Condition (110 > 78) evaluates to true. Thus z is assigned to 110 + 21 which equals 131."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 75; int y = 29; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "50",
      "29",
      "100",
      "75"
    ],
    "answer": 2,
    "explanation": "Condition (75 > 29) evaluates to true. Thus z is assigned to 75 + 25 which equals 100."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 | 35);",
    "options": [
      "50",
      "49",
      "47",
      "45"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1110 and 100011 yields decimal 47."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 137; int y = 174; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "174",
      "137",
      "148",
      "200"
    ],
    "answer": 2,
    "explanation": "Condition (137 > 174) evaluates to false. Thus z is assigned to 174 - 26 which equals 148."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1311 % 48);?",
    "options": [
      "18",
      "0",
      "15",
      "27"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1311 / 48 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 84; int y = 25; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "25",
      "84",
      "92",
      "76"
    ],
    "answer": 2,
    "explanation": "Condition (84 > 25) evaluates to true. Thus z is assigned to 84 + 8 which equals 92."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4037 % 50);?",
    "options": [
      "37",
      "80",
      "0",
      "40"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4037 / 50 leaves remainder 37."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2367 % 29);?",
    "options": [
      "21",
      "0",
      "18",
      "81"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2367 / 29 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(105 & 14);",
    "options": [
      "6",
      "11",
      "8",
      "119"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1101001 and 1110 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 ^ 11);",
    "options": [
      "22",
      "30",
      "24",
      "27"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10011 and 1011 yields decimal 24."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(80 | 52);",
    "options": [
      "116",
      "114",
      "119",
      "132"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1010000 and 110100 yields decimal 116."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(618 % 46);?",
    "options": [
      "23",
      "0",
      "20",
      "13"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 618 / 46 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 173; int y = 140; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "140",
      "173",
      "140",
      "206"
    ],
    "answer": 3,
    "explanation": "Condition (173 > 140) evaluates to true. Thus z is assigned to 173 + 33 which equals 206."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2010 % 16);?",
    "options": [
      "13",
      "125",
      "10",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2010 / 16 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3978 % 38);?",
    "options": [
      "26",
      "29",
      "104",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3978 / 38 leaves remainder 26."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(190 ^ 103);",
    "options": [
      "217",
      "215",
      "293",
      "220"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10111110 and 1100111 yields decimal 217."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 118; int y = 34; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "34",
      "118",
      "110",
      "126"
    ],
    "answer": 3,
    "explanation": "Condition (118 > 34) evaluates to true. Thus z is assigned to 118 + 8 which equals 126."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 152; int y = 124; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "124",
      "147",
      "152",
      "157"
    ],
    "answer": 3,
    "explanation": "Condition (152 > 124) evaluates to true. Thus z is assigned to 152 + 5 which equals 157."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3617 % 22);?",
    "options": [
      "9",
      "164",
      "0",
      "12"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3617 / 22 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1232 % 27);?",
    "options": [
      "45",
      "17",
      "0",
      "20"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1232 / 27 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(51 ^ 34);",
    "options": [
      "17",
      "15",
      "20",
      "85"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 110011 and 100010 yields decimal 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1478 % 43);?",
    "options": [
      "0",
      "34",
      "19",
      "16"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1478 / 43 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(47 ^ 67);",
    "options": [
      "106",
      "108",
      "114",
      "111"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 101111 and 1000011 yields decimal 108."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1846 % 20);?",
    "options": [
      "92",
      "6",
      "0",
      "9"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1846 / 20 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(276 % 30);?",
    "options": [
      "9",
      "9",
      "6",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 276 / 30 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(77 ^ 22);",
    "options": [
      "99",
      "89",
      "94",
      "91"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1001101 and 10110 yields decimal 91."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(141 & 14);",
    "options": [
      "12",
      "155",
      "10",
      "15"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10001101 and 1110 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(171 ^ 51);",
    "options": [
      "222",
      "152",
      "150",
      "155"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10101011 and 110011 yields decimal 152."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1008 % 56);?",
    "options": [
      "3",
      "0",
      "7",
      "18"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1008 / 56 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(679 % 30);?",
    "options": [
      "19",
      "22",
      "22",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 679 / 30 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4781 % 33);?",
    "options": [
      "0",
      "29",
      "32",
      "144"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4781 / 33 leaves remainder 29."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(121 | 19);",
    "options": [
      "121",
      "140",
      "123",
      "126"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1111001 and 10011 yields decimal 123."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 48; int y = 168; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "150",
      "168",
      "48",
      "186"
    ],
    "answer": 0,
    "explanation": "Condition (48 > 168) evaluates to false. Thus z is assigned to 168 - 18 which equals 150."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(176 & 86);",
    "options": [
      "14",
      "16",
      "19",
      "262"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10110000 and 1010110 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 159; int y = 166; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "166",
      "139",
      "159",
      "193"
    ],
    "answer": 1,
    "explanation": "Condition (159 > 166) evaluates to false. Thus z is assigned to 166 - 27 which equals 139."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(315 % 25);?",
    "options": [
      "15",
      "12",
      "18",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 315 / 25 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(114 & 32);",
    "options": [
      "30",
      "35",
      "146",
      "32"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1110010 and 100000 yields decimal 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3854 % 49);?",
    "options": [
      "32",
      "78",
      "0",
      "35"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3854 / 49 leaves remainder 32."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 144; int y = 75; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "151",
      "137",
      "75",
      "144"
    ],
    "answer": 0,
    "explanation": "Condition (144 > 75) evaluates to true. Thus z is assigned to 144 + 7 which equals 151."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(72 ^ 53);",
    "options": [
      "125",
      "149",
      "123",
      "128"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1001000 and 110101 yields decimal 125."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 109; int y = 38; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "101",
      "117",
      "38",
      "109"
    ],
    "answer": 1,
    "explanation": "Condition (109 > 38) evaluates to true. Thus z is assigned to 109 + 8 which equals 117."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1785 % 43);?",
    "options": [
      "41",
      "25",
      "0",
      "22"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1785 / 43 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(70 | 45);",
    "options": [
      "114",
      "111",
      "109",
      "115"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1000110 and 101101 yields decimal 111."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(123 | 80);",
    "options": [
      "126",
      "203",
      "121",
      "123"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1111011 and 1010000 yields decimal 123."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3944 % 32);?",
    "options": [
      "11",
      "8",
      "0",
      "123"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3944 / 32 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3393 % 41);?",
    "options": [
      "31",
      "34",
      "0",
      "82"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3393 / 41 leaves remainder 31."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(124 | 103);",
    "options": [
      "227",
      "127",
      "130",
      "125"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1111100 and 1100111 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2850 % 55);?",
    "options": [
      "51",
      "48",
      "45",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2850 / 55 leaves remainder 45."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 178; int y = 98; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "178",
      "195",
      "98",
      "161"
    ],
    "answer": 1,
    "explanation": "Condition (178 > 98) evaluates to true. Thus z is assigned to 178 + 17 which equals 195."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(176 ^ 10);",
    "options": [
      "186",
      "189",
      "210",
      "184"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10110000 and 1010 yields decimal 186."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(65 & 98);",
    "options": [
      "64",
      "67",
      "62",
      "163"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1000001 and 1100010 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(71 ^ 37);",
    "options": [
      "98",
      "108",
      "96",
      "101"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1000111 and 100101 yields decimal 98."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4412 % 28);?",
    "options": [
      "19",
      "0",
      "16",
      "157"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4412 / 28 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2397 % 43);?",
    "options": [
      "0",
      "35",
      "32",
      "55"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2397 / 43 leaves remainder 32."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3426 % 19);?",
    "options": [
      "180",
      "0",
      "6",
      "9"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3426 / 19 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(72 | 94);",
    "options": [
      "166",
      "97",
      "92",
      "94"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1001000 and 1011110 yields decimal 94."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 50; int y = 159; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "172",
      "50",
      "146",
      "159"
    ],
    "answer": 2,
    "explanation": "Condition (50 > 159) evaluates to false. Thus z is assigned to 159 - 13 which equals 146."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(28 & 55);",
    "options": [
      "23",
      "18",
      "20",
      "83"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 11100 and 110111 yields decimal 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(46 & 81);",
    "options": [
      "-2",
      "0",
      "127",
      "3"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 101110 and 1010001 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 180; int y = 144; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "210",
      "144",
      "180",
      "150"
    ],
    "answer": 0,
    "explanation": "Condition (180 > 144) evaluates to true. Thus z is assigned to 180 + 30 which equals 210."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(325 % 27);?",
    "options": [
      "4",
      "1",
      "0",
      "12"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 325 / 27 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5151 % 27);?",
    "options": [
      "190",
      "24",
      "0",
      "21"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 5151 / 27 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 192; int y = 17; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "226",
      "17",
      "192",
      "158"
    ],
    "answer": 0,
    "explanation": "Condition (192 > 17) evaluates to true. Thus z is assigned to 192 + 34 which equals 226."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 98; int y = 32; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "98",
      "32",
      "111",
      "85"
    ],
    "answer": 2,
    "explanation": "Condition (98 > 32) evaluates to true. Thus z is assigned to 98 + 13 which equals 111."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5167 % 33);?",
    "options": [
      "0",
      "19",
      "156",
      "22"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 5167 / 33 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 67; int y = 135; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "103",
      "135",
      "67",
      "167"
    ],
    "answer": 0,
    "explanation": "Condition (67 > 135) evaluates to false. Thus z is assigned to 135 - 32 which equals 103."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2952 % 48);?",
    "options": [
      "61",
      "0",
      "27",
      "24"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2952 / 48 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3773 % 10);?",
    "options": [
      "377",
      "6",
      "0",
      "3"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3773 / 10 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(371 % 16);?",
    "options": [
      "6",
      "23",
      "3",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 371 / 16 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1982 % 51);?",
    "options": [
      "44",
      "38",
      "47",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1982 / 51 leaves remainder 44."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(385 % 59);?",
    "options": [
      "6",
      "34",
      "0",
      "31"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 385 / 59 leaves remainder 31."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(51 & 67);",
    "options": [
      "118",
      "1",
      "6",
      "3"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 110011 and 1000011 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1204 % 16);?",
    "options": [
      "75",
      "4",
      "0",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1204 / 16 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 136; int y = 119; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "143",
      "129",
      "136",
      "119"
    ],
    "answer": 0,
    "explanation": "Condition (136 > 119) evaluates to true. Thus z is assigned to 136 + 7 which equals 143."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 188; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "188",
      "170",
      "14",
      "206"
    ],
    "answer": 1,
    "explanation": "Condition (14 > 188) evaluates to false. Thus z is assigned to 188 - 18 which equals 170."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(151 ^ 26);",
    "options": [
      "177",
      "139",
      "141",
      "144"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10010111 and 11010 yields decimal 141."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 176; int y = 208; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "189",
      "227",
      "208",
      "176"
    ],
    "answer": 0,
    "explanation": "Condition (176 > 208) evaluates to false. Thus z is assigned to 208 - 19 which equals 189."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4122 % 36);?",
    "options": [
      "21",
      "0",
      "114",
      "18"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4122 / 36 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 42; int y = 169; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "150",
      "42",
      "188",
      "169"
    ],
    "answer": 0,
    "explanation": "Condition (42 > 169) evaluates to false. Thus z is assigned to 169 - 19 which equals 150."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2842 % 18);?",
    "options": [
      "0",
      "19",
      "16",
      "157"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2842 / 18 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 115; int y = 182; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "182",
      "115",
      "168",
      "196"
    ],
    "answer": 2,
    "explanation": "Condition (115 > 182) evaluates to false. Thus z is assigned to 182 - 14 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1101 % 31);?",
    "options": [
      "35",
      "16",
      "0",
      "19"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1101 / 31 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 140; int y = 189; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "189",
      "140",
      "221",
      "157"
    ],
    "answer": 3,
    "explanation": "Condition (140 > 189) evaluates to false. Thus z is assigned to 189 - 32 which equals 157."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1966 % 55);?",
    "options": [
      "0",
      "35",
      "44",
      "41"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1966 / 55 leaves remainder 41."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 87; int y = 63; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "68",
      "87",
      "63",
      "106"
    ],
    "answer": 3,
    "explanation": "Condition (87 > 63) evaluates to true. Thus z is assigned to 87 + 19 which equals 106."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 156; int y = 124; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "182",
      "130",
      "156",
      "124"
    ],
    "answer": 0,
    "explanation": "Condition (156 > 124) evaluates to true. Thus z is assigned to 156 + 26 which equals 182."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(60 | 7);",
    "options": [
      "66",
      "61",
      "67",
      "63"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 111100 and 111 yields decimal 63."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3489 % 28);?",
    "options": [
      "20",
      "17",
      "124",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3489 / 28 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 151; int y = 138; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "125",
      "151",
      "138",
      "177"
    ],
    "answer": 3,
    "explanation": "Condition (151 > 138) evaluates to true. Thus z is assigned to 151 + 26 which equals 177."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(124 | 43);",
    "options": [
      "125",
      "127",
      "167",
      "130"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1111100 and 101011 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(61 & 56);",
    "options": [
      "59",
      "54",
      "56",
      "117"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 111101 and 111000 yields decimal 56."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 55; int y = 64; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "47",
      "81",
      "64",
      "55"
    ],
    "answer": 0,
    "explanation": "Condition (55 > 64) evaluates to false. Thus z is assigned to 64 - 17 which equals 47."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(33 ^ 88);",
    "options": [
      "119",
      "124",
      "121",
      "145"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 100001 and 1011000 yields decimal 121."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4942 % 55);?",
    "options": [
      "47",
      "0",
      "89",
      "50"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4942 / 55 leaves remainder 47."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(795 % 31);?",
    "options": [
      "23",
      "25",
      "20",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 795 / 31 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 45; int y = 70; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "56",
      "70",
      "84",
      "45"
    ],
    "answer": 0,
    "explanation": "Condition (45 > 70) evaluates to false. Thus z is assigned to 70 - 14 which equals 56."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(46 ^ 90);",
    "options": [
      "119",
      "116",
      "136",
      "114"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 101110 and 1011010 yields decimal 116."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(91 ^ 5);",
    "options": [
      "97",
      "96",
      "92",
      "94"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1011011 and 101 yields decimal 94."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 59; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "46",
      "59",
      "72",
      "20"
    ],
    "answer": 0,
    "explanation": "Condition (20 > 59) evaluates to false. Thus z is assigned to 59 - 13 which equals 46."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3108 % 54);?",
    "options": [
      "33",
      "57",
      "30",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3108 / 54 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 42; int y = 179; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "179",
      "198",
      "160",
      "42"
    ],
    "answer": 2,
    "explanation": "Condition (42 > 179) evaluates to false. Thus z is assigned to 179 - 19 which equals 160."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(164 | 43);",
    "options": [
      "178",
      "173",
      "207",
      "175"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10100100 and 101011 yields decimal 175."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3785 % 32);?",
    "options": [
      "0",
      "12",
      "9",
      "118"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3785 / 32 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 207; int y = 99; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "99",
      "207",
      "178",
      "236"
    ],
    "answer": 3,
    "explanation": "Condition (207 > 99) evaluates to true. Thus z is assigned to 207 + 29 which equals 236."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(22 & 65);",
    "options": [
      "-2",
      "0",
      "3",
      "87"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10110 and 1000001 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 124; int y = 57; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "100",
      "148",
      "124",
      "57"
    ],
    "answer": 1,
    "explanation": "Condition (124 > 57) evaluates to true. Thus z is assigned to 124 + 24 which equals 148."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(27 ^ 104);",
    "options": [
      "118",
      "131",
      "115",
      "113"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 11011 and 1101000 yields decimal 115."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 175; int y = 32; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "175",
      "151",
      "32",
      "199"
    ],
    "answer": 3,
    "explanation": "Condition (175 > 32) evaluates to true. Thus z is assigned to 175 + 24 which equals 199."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1259 % 21);?",
    "options": [
      "23",
      "0",
      "20",
      "59"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1259 / 21 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(88 & 36);",
    "options": [
      "0",
      "124",
      "-2",
      "3"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1011000 and 100100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 172; int y = 132; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "139",
      "205",
      "132",
      "172"
    ],
    "answer": 1,
    "explanation": "Condition (172 > 132) evaluates to true. Thus z is assigned to 172 + 33 which equals 205."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(373 % 41);?",
    "options": [
      "4",
      "9",
      "7",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 373 / 41 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 120; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "129",
      "111",
      "11",
      "120"
    ],
    "answer": 1,
    "explanation": "Condition (11 > 120) evaluates to false. Thus z is assigned to 120 - 9 which equals 111."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 138; int y = 52; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "138",
      "52",
      "153",
      "123"
    ],
    "answer": 2,
    "explanation": "Condition (138 > 52) evaluates to true. Thus z is assigned to 138 + 15 which equals 153."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3750 % 11);?",
    "options": [
      "13",
      "10",
      "340",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3750 / 11 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 175; int y = 11; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "162",
      "175",
      "188",
      "11"
    ],
    "answer": 2,
    "explanation": "Condition (175 > 11) evaluates to true. Thus z is assigned to 175 + 13 which equals 188."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 145; int y = 161; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "161",
      "149",
      "145",
      "173"
    ],
    "answer": 1,
    "explanation": "Condition (145 > 161) evaluates to false. Thus z is assigned to 161 - 12 which equals 149."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(122 | 75);",
    "options": [
      "123",
      "197",
      "126",
      "121"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1111010 and 1001011 yields decimal 123."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 102; int y = 103; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "124",
      "103",
      "102",
      "82"
    ],
    "answer": 3,
    "explanation": "Condition (102 > 103) evaluates to false. Thus z is assigned to 103 - 21 which equals 82."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(63 ^ 55);",
    "options": [
      "6",
      "118",
      "11",
      "8"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 111111 and 110111 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 | 38);",
    "options": [
      "53",
      "47",
      "45",
      "50"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1111 and 100110 yields decimal 47."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(168 ^ 27);",
    "options": [
      "177",
      "182",
      "195",
      "179"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10101000 and 11011 yields decimal 179."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1971 % 21);?",
    "options": [
      "93",
      "21",
      "18",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1971 / 21 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(25 | 30);",
    "options": [
      "29",
      "31",
      "55",
      "34"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 11001 and 11110 yields decimal 31."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(89 | 49);",
    "options": [
      "124",
      "119",
      "138",
      "121"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1011001 and 110001 yields decimal 121."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 184; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "178",
      "190",
      "21",
      "184"
    ],
    "answer": 0,
    "explanation": "Condition (21 > 184) evaluates to false. Thus z is assigned to 184 - 6 which equals 178."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 | 65);",
    "options": [
      "78",
      "75",
      "73",
      "99"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1010 and 1000001 yields decimal 75."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(115 | 66);",
    "options": [
      "115",
      "181",
      "113",
      "118"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1110011 and 1000010 yields decimal 115."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(481 % 14);?",
    "options": [
      "8",
      "0",
      "5",
      "34"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 481 / 14 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 198; int y = 156; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "156",
      "198",
      "219",
      "177"
    ],
    "answer": 2,
    "explanation": "Condition (198 > 156) evaluates to true. Thus z is assigned to 198 + 21 which equals 219."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(158 ^ 94);",
    "options": [
      "192",
      "190",
      "252",
      "195"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10011110 and 1011110 yields decimal 192."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 81; int y = 34; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "91",
      "81",
      "34",
      "71"
    ],
    "answer": 0,
    "explanation": "Condition (81 > 34) evaluates to true. Thus z is assigned to 81 + 10 which equals 91."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2526 % 55);?",
    "options": [
      "54",
      "0",
      "51",
      "45"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2526 / 55 leaves remainder 51."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 169; int y = 200; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "229",
      "200",
      "169",
      "171"
    ],
    "answer": 3,
    "explanation": "Condition (169 > 200) evaluates to false. Thus z is assigned to 200 - 29 which equals 171."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 84; int y = 59; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "108",
      "84",
      "59",
      "60"
    ],
    "answer": 0,
    "explanation": "Condition (84 > 59) evaluates to true. Thus z is assigned to 84 + 24 which equals 108."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 208; int y = 134; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "134",
      "181",
      "208",
      "235"
    ],
    "answer": 3,
    "explanation": "Condition (208 > 134) evaluates to true. Thus z is assigned to 208 + 27 which equals 235."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 29; int y = 59; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "92",
      "59",
      "26",
      "29"
    ],
    "answer": 2,
    "explanation": "Condition (29 > 59) evaluates to false. Thus z is assigned to 59 - 33 which equals 26."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(52 ^ 31);",
    "options": [
      "46",
      "43",
      "41",
      "83"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 110100 and 11111 yields decimal 43."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(182 ^ 69);",
    "options": [
      "243",
      "241",
      "251",
      "246"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10110110 and 1000101 yields decimal 243."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(28 | 42);",
    "options": [
      "65",
      "60",
      "62",
      "70"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 11100 and 101010 yields decimal 62."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(124 ^ 13);",
    "options": [
      "116",
      "111",
      "137",
      "113"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1111100 and 1101 yields decimal 113."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(224 % 29);?",
    "options": [
      "24",
      "7",
      "21",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 224 / 29 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 100; int y = 209; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "209",
      "100",
      "239",
      "179"
    ],
    "answer": 3,
    "explanation": "Condition (100 > 209) evaluates to false. Thus z is assigned to 209 - 30 which equals 179."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(364 % 21);?",
    "options": [
      "10",
      "0",
      "17",
      "7"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 364 / 21 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 151; int y = 153; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "143",
      "163",
      "153",
      "151"
    ],
    "answer": 0,
    "explanation": "Condition (151 > 153) evaluates to false. Thus z is assigned to 153 - 10 which equals 143."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 68; int y = 193; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "68",
      "223",
      "163",
      "193"
    ],
    "answer": 2,
    "explanation": "Condition (68 > 193) evaluates to false. Thus z is assigned to 193 - 30 which equals 163."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(83 | 92);",
    "options": [
      "98",
      "93",
      "175",
      "95"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1010011 and 1011100 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3121 % 32);?",
    "options": [
      "97",
      "17",
      "20",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3121 / 32 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 110; int y = 133; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "138",
      "128",
      "133",
      "110"
    ],
    "answer": 1,
    "explanation": "Condition (110 > 133) evaluates to false. Thus z is assigned to 133 - 5 which equals 128."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(64 ^ 8);",
    "options": [
      "75",
      "72",
      "70",
      "96"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1000000 and 1000 yields decimal 72."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(65 & 104);",
    "options": [
      "67",
      "169",
      "64",
      "62"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1000001 and 1101000 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(52 | 35);",
    "options": [
      "87",
      "53",
      "58",
      "55"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 110100 and 100011 yields decimal 55."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(119 & 37);",
    "options": [
      "156",
      "40",
      "37",
      "35"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1110111 and 100101 yields decimal 37."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 32; int y = 125; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "125",
      "139",
      "32",
      "111"
    ],
    "answer": 3,
    "explanation": "Condition (32 > 125) evaluates to false. Thus z is assigned to 125 - 14 which equals 111."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(25 | 40);",
    "options": [
      "57",
      "55",
      "60",
      "65"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11001 and 101000 yields decimal 57."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 204; int y = 116; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "227",
      "116",
      "204",
      "181"
    ],
    "answer": 0,
    "explanation": "Condition (204 > 116) evaluates to true. Thus z is assigned to 204 + 23 which equals 227."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 27; int y = 17; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "59",
      "27",
      "-5",
      "17"
    ],
    "answer": 0,
    "explanation": "Condition (27 > 17) evaluates to true. Thus z is assigned to 27 + 32 which equals 59."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2768 % 15);?",
    "options": [
      "184",
      "0",
      "11",
      "8"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2768 / 15 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 150; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "150",
      "12",
      "121",
      "179"
    ],
    "answer": 2,
    "explanation": "Condition (12 > 150) evaluates to false. Thus z is assigned to 150 - 29 which equals 121."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(156 ^ 19);",
    "options": [
      "143",
      "146",
      "141",
      "175"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10011100 and 10011 yields decimal 143."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 191; int y = 42; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "191",
      "158",
      "224",
      "42"
    ],
    "answer": 2,
    "explanation": "Condition (191 > 42) evaluates to true. Thus z is assigned to 191 + 33 which equals 224."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 118; int y = 126; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "155",
      "118",
      "97",
      "126"
    ],
    "answer": 2,
    "explanation": "Condition (118 > 126) evaluates to false. Thus z is assigned to 126 - 29 which equals 97."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(100 & 14);",
    "options": [
      "4",
      "114",
      "7",
      "2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1100100 and 1110 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2862 % 29);?",
    "options": [
      "23",
      "98",
      "0",
      "20"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2862 / 29 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2891 % 26);?",
    "options": [
      "111",
      "8",
      "5",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2891 / 26 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(62 ^ 77);",
    "options": [
      "139",
      "115",
      "113",
      "118"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 111110 and 1001101 yields decimal 115."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 185; int y = 97; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "179",
      "185",
      "97",
      "191"
    ],
    "answer": 3,
    "explanation": "Condition (185 > 97) evaluates to true. Thus z is assigned to 185 + 6 which equals 191."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 201; int y = 41; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "201",
      "196",
      "41",
      "206"
    ],
    "answer": 3,
    "explanation": "Condition (201 > 41) evaluates to true. Thus z is assigned to 201 + 5 which equals 206."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4339 % 56);?",
    "options": [
      "27",
      "30",
      "0",
      "77"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4339 / 56 leaves remainder 27."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(139 | 18);",
    "options": [
      "155",
      "158",
      "157",
      "153"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10001011 and 10010 yields decimal 155."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 148; int y = 128; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "143",
      "153",
      "148",
      "128"
    ],
    "answer": 1,
    "explanation": "Condition (148 > 128) evaluates to true. Thus z is assigned to 148 + 5 which equals 153."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(512 % 32);?",
    "options": [
      "16",
      "7",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 512 / 32 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(125 | 44);",
    "options": [
      "123",
      "169",
      "128",
      "125"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1111101 and 101100 yields decimal 125."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 48; int y = 15; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "20",
      "48",
      "15",
      "76"
    ],
    "answer": 3,
    "explanation": "Condition (48 > 15) evaluates to true. Thus z is assigned to 48 + 28 which equals 76."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(69 & 65);",
    "options": [
      "68",
      "134",
      "63",
      "65"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1000101 and 1000001 yields decimal 65."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(169 | 42);",
    "options": [
      "171",
      "174",
      "169",
      "211"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10101001 and 101010 yields decimal 171."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 28; int y = 93; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "93",
      "86",
      "28",
      "100"
    ],
    "answer": 1,
    "explanation": "Condition (28 > 93) evaluates to false. Thus z is assigned to 93 - 7 which equals 86."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 123; int y = 13; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "128",
      "123",
      "13",
      "118"
    ],
    "answer": 0,
    "explanation": "Condition (123 > 13) evaluates to true. Thus z is assigned to 123 + 5 which equals 128."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(158 ^ 6);",
    "options": [
      "150",
      "152",
      "155",
      "164"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10011110 and 110 yields decimal 152."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2823 % 30);?",
    "options": [
      "0",
      "3",
      "94",
      "6"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2823 / 30 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1642 % 44);?",
    "options": [
      "14",
      "37",
      "17",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1642 / 44 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4244 % 19);?",
    "options": [
      "0",
      "7",
      "10",
      "223"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4244 / 19 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(54 | 104);",
    "options": [
      "129",
      "158",
      "124",
      "126"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 110110 and 1101000 yields decimal 126."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4243 % 13);?",
    "options": [
      "0",
      "5",
      "326",
      "8"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4243 / 13 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1063 % 46);?",
    "options": [
      "23",
      "8",
      "0",
      "5"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1063 / 46 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1791 % 21);?",
    "options": [
      "9",
      "6",
      "85",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1791 / 21 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 159; int y = 102; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "150",
      "102",
      "159",
      "168"
    ],
    "answer": 3,
    "explanation": "Condition (159 > 102) evaluates to true. Thus z is assigned to 159 + 9 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 188; int y = 28; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "28",
      "222",
      "188",
      "154"
    ],
    "answer": 1,
    "explanation": "Condition (188 > 28) evaluates to true. Thus z is assigned to 188 + 34 which equals 222."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(28 | 18);",
    "options": [
      "30",
      "28",
      "46",
      "33"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11100 and 10010 yields decimal 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4379 % 46);?",
    "options": [
      "9",
      "95",
      "0",
      "12"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4379 / 46 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(110 ^ 37);",
    "options": [
      "73",
      "78",
      "75",
      "147"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1101110 and 100101 yields decimal 75."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(205 | 17);",
    "options": [
      "221",
      "219",
      "224",
      "222"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11001101 and 10001 yields decimal 221."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4902 % 15);?",
    "options": [
      "15",
      "0",
      "326",
      "12"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4902 / 15 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3690 % 45);?",
    "options": [
      "7",
      "82",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3690 / 45 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 10; int y = 46; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "10",
      "27",
      "65",
      "46"
    ],
    "answer": 1,
    "explanation": "Condition (10 > 46) evaluates to false. Thus z is assigned to 46 - 19 which equals 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 12; int y = 195; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "12",
      "188",
      "195",
      "202"
    ],
    "answer": 1,
    "explanation": "Condition (12 > 195) evaluates to false. Thus z is assigned to 195 - 7 which equals 188."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 ^ 6);",
    "options": [
      "26",
      "47",
      "21",
      "23"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10001 and 110 yields decimal 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 54; int y = 133; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "167",
      "99",
      "54",
      "133"
    ],
    "answer": 1,
    "explanation": "Condition (54 > 133) evaluates to false. Thus z is assigned to 133 - 34 which equals 99."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 69; int y = 142; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "69",
      "164",
      "120",
      "142"
    ],
    "answer": 2,
    "explanation": "Condition (69 > 142) evaluates to false. Thus z is assigned to 142 - 22 which equals 120."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 189; int y = 166; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "166",
      "209",
      "189",
      "169"
    ],
    "answer": 1,
    "explanation": "Condition (189 > 166) evaluates to true. Thus z is assigned to 189 + 20 which equals 209."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 42; int y = 186; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "186",
      "195",
      "42",
      "177"
    ],
    "answer": 3,
    "explanation": "Condition (42 > 186) evaluates to false. Thus z is assigned to 186 - 9 which equals 177."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(28 | 70);",
    "options": [
      "98",
      "92",
      "94",
      "97"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 11100 and 1000110 yields decimal 94."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2273 % 36);?",
    "options": [
      "8",
      "0",
      "63",
      "5"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2273 / 36 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(45 & 9);",
    "options": [
      "9",
      "7",
      "12",
      "54"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 101101 and 1001 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(45 ^ 43);",
    "options": [
      "9",
      "4",
      "88",
      "6"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 101101 and 101011 yields decimal 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(71 ^ 74);",
    "options": [
      "11",
      "16",
      "145",
      "13"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1000111 and 1001010 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4473 % 36);?",
    "options": [
      "12",
      "0",
      "124",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4473 / 36 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2392 % 54);?",
    "options": [
      "16",
      "0",
      "19",
      "44"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2392 / 54 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 131; int y = 112; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "131",
      "112",
      "107",
      "155"
    ],
    "answer": 3,
    "explanation": "Condition (131 > 112) evaluates to true. Thus z is assigned to 131 + 24 which equals 155."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 175; int y = 28; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "28",
      "197",
      "153",
      "175"
    ],
    "answer": 1,
    "explanation": "Condition (175 > 28) evaluates to true. Thus z is assigned to 175 + 22 which equals 197."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(76 ^ 8);",
    "options": [
      "68",
      "71",
      "66",
      "84"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1001100 and 1000 yields decimal 68."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(189 ^ 43);",
    "options": [
      "150",
      "232",
      "153",
      "148"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10111101 and 101011 yields decimal 150."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 65; int y = 200; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "200",
      "232",
      "65",
      "168"
    ],
    "answer": 3,
    "explanation": "Condition (65 > 200) evaluates to false. Thus z is assigned to 200 - 32 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(115 ^ 101);",
    "options": [
      "20",
      "22",
      "25",
      "216"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1110011 and 1100101 yields decimal 22."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3253 % 57);?",
    "options": [
      "7",
      "0",
      "4",
      "57"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3253 / 57 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(169 | 41);",
    "options": [
      "167",
      "169",
      "210",
      "172"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10101001 and 101001 yields decimal 169."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 115; int y = 114; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "86",
      "114",
      "144",
      "115"
    ],
    "answer": 2,
    "explanation": "Condition (115 > 114) evaluates to true. Thus z is assigned to 115 + 29 which equals 144."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(167 ^ 44);",
    "options": [
      "142",
      "137",
      "211",
      "139"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10100111 and 101100 yields decimal 139."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 21; int y = 140; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "117",
      "21",
      "163",
      "140"
    ],
    "answer": 0,
    "explanation": "Condition (21 > 140) evaluates to false. Thus z is assigned to 140 - 23 which equals 117."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1484 % 46);?",
    "options": [
      "32",
      "0",
      "15",
      "12"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1484 / 46 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 126; int y = 209; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "176",
      "242",
      "126",
      "209"
    ],
    "answer": 0,
    "explanation": "Condition (126 > 209) evaluates to false. Thus z is assigned to 209 - 33 which equals 176."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(20 | 14);",
    "options": [
      "33",
      "34",
      "30",
      "28"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10100 and 1110 yields decimal 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 113; int y = 134; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "153",
      "134",
      "113",
      "115"
    ],
    "answer": 3,
    "explanation": "Condition (113 > 134) evaluates to false. Thus z is assigned to 134 - 19 which equals 115."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4925 % 24);?",
    "options": [
      "205",
      "0",
      "5",
      "8"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4925 / 24 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 146; int y = 30; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "146",
      "30",
      "168",
      "124"
    ],
    "answer": 2,
    "explanation": "Condition (146 > 30) evaluates to true. Thus z is assigned to 146 + 22 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(178 | 24);",
    "options": [
      "186",
      "202",
      "184",
      "189"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10110010 and 11000 yields decimal 186."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 16; int y = 67; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "67",
      "16",
      "85",
      "49"
    ],
    "answer": 3,
    "explanation": "Condition (16 > 67) evaluates to false. Thus z is assigned to 67 - 18 which equals 49."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1765 % 25);?",
    "options": [
      "70",
      "18",
      "0",
      "15"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1765 / 25 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 95; int y = 196; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "182",
      "95",
      "196",
      "210"
    ],
    "answer": 0,
    "explanation": "Condition (95 > 196) evaluates to false. Thus z is assigned to 196 - 14 which equals 182."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 22; int y = 45; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "45",
      "22",
      "74",
      "16"
    ],
    "answer": 3,
    "explanation": "Condition (22 > 45) evaluates to false. Thus z is assigned to 45 - 29 which equals 16."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(112 | 35);",
    "options": [
      "118",
      "147",
      "113",
      "115"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1110000 and 100011 yields decimal 115."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5002 % 22);?",
    "options": [
      "227",
      "0",
      "11",
      "8"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 5002 / 22 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2937 % 10);?",
    "options": [
      "10",
      "293",
      "7",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2937 / 10 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(97 & 55);",
    "options": [
      "152",
      "33",
      "31",
      "36"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1100001 and 110111 yields decimal 33."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4342 % 13);?",
    "options": [
      "3",
      "7",
      "334",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4342 / 13 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4032 % 58);?",
    "options": [
      "0",
      "30",
      "69",
      "33"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4032 / 58 leaves remainder 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3921 % 30);?",
    "options": [
      "21",
      "0",
      "24",
      "130"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3921 / 30 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 71; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "17",
      "71",
      "38",
      "104"
    ],
    "answer": 2,
    "explanation": "Condition (17 > 71) evaluates to false. Thus z is assigned to 71 - 33 which equals 38."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 104; int y = 48; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "79",
      "48",
      "104",
      "129"
    ],
    "answer": 3,
    "explanation": "Condition (104 > 48) evaluates to true. Thus z is assigned to 104 + 25 which equals 129."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1071 % 33);?",
    "options": [
      "32",
      "18",
      "15",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1071 / 33 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4859 % 33);?",
    "options": [
      "0",
      "11",
      "8",
      "147"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4859 / 33 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 38; int y = 142; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "116",
      "168",
      "38",
      "142"
    ],
    "answer": 0,
    "explanation": "Condition (38 > 142) evaluates to false. Thus z is assigned to 142 - 26 which equals 116."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(190 | 19);",
    "options": [
      "189",
      "191",
      "209",
      "194"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10111110 and 10011 yields decimal 191."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(194 ^ 62);",
    "options": [
      "255",
      "250",
      "252",
      "256"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 11000010 and 111110 yields decimal 252."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 153; int y = 167; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "142",
      "192",
      "153",
      "167"
    ],
    "answer": 0,
    "explanation": "Condition (153 > 167) evaluates to false. Thus z is assigned to 167 - 25 which equals 142."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 93; int y = 145; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "132",
      "93",
      "158",
      "145"
    ],
    "answer": 0,
    "explanation": "Condition (93 > 145) evaluates to false. Thus z is assigned to 145 - 13 which equals 132."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 180; int y = 126; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "180",
      "172",
      "126",
      "188"
    ],
    "answer": 3,
    "explanation": "Condition (180 > 126) evaluates to true. Thus z is assigned to 180 + 8 which equals 188."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(427 % 25);?",
    "options": [
      "0",
      "17",
      "5",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 427 / 25 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2553 % 23);?",
    "options": [
      "3",
      "7",
      "111",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2553 / 23 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(156 & 82);",
    "options": [
      "16",
      "14",
      "19",
      "238"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10011100 and 1010010 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1393 % 58);?",
    "options": [
      "4",
      "24",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1393 / 58 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 76; int y = 113; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "136",
      "90",
      "113",
      "76"
    ],
    "answer": 1,
    "explanation": "Condition (76 > 113) evaluates to false. Thus z is assigned to 113 - 23 which equals 90."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(467 % 18);?",
    "options": [
      "17",
      "20",
      "0",
      "25"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 467 / 18 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(122 | 94);",
    "options": [
      "129",
      "216",
      "124",
      "126"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1111010 and 1011110 yields decimal 126."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 131; int y = 43; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "122",
      "43",
      "131",
      "140"
    ],
    "answer": 3,
    "explanation": "Condition (131 > 43) evaluates to true. Thus z is assigned to 131 + 9 which equals 140."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(53 | 34);",
    "options": [
      "53",
      "55",
      "58",
      "87"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 110101 and 100010 yields decimal 55."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1219 % 32);?",
    "options": [
      "3",
      "0",
      "6",
      "38"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1219 / 32 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 41; int y = 44; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "41",
      "76",
      "44",
      "12"
    ],
    "answer": 3,
    "explanation": "Condition (41 > 44) evaluates to false. Thus z is assigned to 44 - 32 which equals 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(122 ^ 28);",
    "options": [
      "105",
      "100",
      "150",
      "102"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1111010 and 11100 yields decimal 102."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 162; int y = 173; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "163",
      "162",
      "173",
      "183"
    ],
    "answer": 0,
    "explanation": "Condition (162 > 173) evaluates to false. Thus z is assigned to 173 - 10 which equals 163."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(102 | 46);",
    "options": [
      "113",
      "148",
      "108",
      "110"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1100110 and 101110 yields decimal 110."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4788 % 31);?",
    "options": [
      "14",
      "17",
      "154",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4788 / 31 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5196 % 30);?",
    "options": [
      "6",
      "0",
      "173",
      "9"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 5196 / 30 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 180; int y = 188; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "167",
      "180",
      "188",
      "209"
    ],
    "answer": 0,
    "explanation": "Condition (180 > 188) evaluates to false. Thus z is assigned to 188 - 21 which equals 167."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 121; int y = 36; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "121",
      "132",
      "110",
      "36"
    ],
    "answer": 1,
    "explanation": "Condition (121 > 36) evaluates to true. Thus z is assigned to 121 + 11 which equals 132."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 167; int y = 124; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "172",
      "167",
      "124",
      "162"
    ],
    "answer": 0,
    "explanation": "Condition (167 > 124) evaluates to true. Thus z is assigned to 167 + 5 which equals 172."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 118; int y = 151; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "118",
      "170",
      "151",
      "132"
    ],
    "answer": 3,
    "explanation": "Condition (118 > 151) evaluates to false. Thus z is assigned to 151 - 19 which equals 132."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 87; int y = 186; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "197",
      "87",
      "186",
      "175"
    ],
    "answer": 3,
    "explanation": "Condition (87 > 186) evaluates to false. Thus z is assigned to 186 - 11 which equals 175."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(107 ^ 41);",
    "options": [
      "64",
      "148",
      "66",
      "69"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1101011 and 101001 yields decimal 66."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 67; int y = 104; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "75",
      "104",
      "133",
      "67"
    ],
    "answer": 0,
    "explanation": "Condition (67 > 104) evaluates to false. Thus z is assigned to 104 - 29 which equals 75."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 84; int y = 201; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "201",
      "178",
      "84",
      "224"
    ],
    "answer": 1,
    "explanation": "Condition (84 > 201) evaluates to false. Thus z is assigned to 201 - 23 which equals 178."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1766 % 26);?",
    "options": [
      "27",
      "0",
      "67",
      "24"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1766 / 26 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(116 ^ 56);",
    "options": [
      "74",
      "172",
      "79",
      "76"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1110100 and 111000 yields decimal 76."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(170 ^ 84);",
    "options": [
      "257",
      "252",
      "254",
      "278"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10101010 and 1010100 yields decimal 254."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(192 ^ 89);",
    "options": [
      "153",
      "151",
      "281",
      "156"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 11000000 and 1011001 yields decimal 153."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(172 & 57);",
    "options": [
      "40",
      "38",
      "229",
      "43"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10101100 and 111001 yields decimal 40."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 104; int y = 27; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "27",
      "112",
      "104",
      "96"
    ],
    "answer": 1,
    "explanation": "Condition (104 > 27) evaluates to true. Thus z is assigned to 104 + 8 which equals 112."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 163; int y = 80; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "163",
      "155",
      "171",
      "80"
    ],
    "answer": 2,
    "explanation": "Condition (163 > 80) evaluates to true. Thus z is assigned to 163 + 8 which equals 171."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(864 % 51);?",
    "options": [
      "16",
      "51",
      "48",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 864 / 51 leaves remainder 48."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3936 % 54);?",
    "options": [
      "51",
      "0",
      "72",
      "48"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3936 / 54 leaves remainder 48."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 68; int y = 67; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "102",
      "67",
      "34",
      "68"
    ],
    "answer": 0,
    "explanation": "Condition (68 > 67) evaluates to true. Thus z is assigned to 68 + 34 which equals 102."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3905 % 43);?",
    "options": [
      "90",
      "35",
      "0",
      "38"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3905 / 43 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 195; int y = 185; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "166",
      "185",
      "195",
      "224"
    ],
    "answer": 3,
    "explanation": "Condition (195 > 185) evaluates to true. Thus z is assigned to 195 + 29 which equals 224."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(221 % 15);?",
    "options": [
      "14",
      "0",
      "11",
      "14"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 221 / 15 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(467 % 48);?",
    "options": [
      "38",
      "35",
      "9",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 467 / 48 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 207; int y = 64; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "64",
      "188",
      "226",
      "207"
    ],
    "answer": 2,
    "explanation": "Condition (207 > 64) evaluates to true. Thus z is assigned to 207 + 19 which equals 226."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 50; int y = 201; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "210",
      "201",
      "192",
      "50"
    ],
    "answer": 2,
    "explanation": "Condition (50 > 201) evaluates to false. Thus z is assigned to 201 - 9 which equals 192."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 160; int y = 182; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "182",
      "167",
      "160",
      "197"
    ],
    "answer": 1,
    "explanation": "Condition (160 > 182) evaluates to false. Thus z is assigned to 182 - 15 which equals 167."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2737 % 40);?",
    "options": [
      "68",
      "17",
      "0",
      "20"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2737 / 40 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(204 ^ 100);",
    "options": [
      "166",
      "171",
      "168",
      "304"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 11001100 and 1100100 yields decimal 168."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 105; int y = 125; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "125",
      "118",
      "132",
      "105"
    ],
    "answer": 1,
    "explanation": "Condition (105 > 125) evaluates to false. Thus z is assigned to 125 - 7 which equals 118."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 148; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "127",
      "148",
      "18",
      "169"
    ],
    "answer": 0,
    "explanation": "Condition (18 > 148) evaluates to false. Thus z is assigned to 148 - 21 which equals 127."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(19 | 29);",
    "options": [
      "48",
      "34",
      "29",
      "31"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10011 and 11101 yields decimal 31."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 20; int y = 60; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "76",
      "20",
      "44",
      "60"
    ],
    "answer": 2,
    "explanation": "Condition (20 > 60) evaluates to false. Thus z is assigned to 60 - 16 which equals 44."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(83 & 80);",
    "options": [
      "83",
      "80",
      "78",
      "163"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1010011 and 1010000 yields decimal 80."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3136 % 59);?",
    "options": [
      "9",
      "0",
      "53",
      "12"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3136 / 59 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 191; int y = 69; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "69",
      "191",
      "215",
      "167"
    ],
    "answer": 2,
    "explanation": "Condition (191 > 69) evaluates to true. Thus z is assigned to 191 + 24 which equals 215."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(85 & 67);",
    "options": [
      "63",
      "152",
      "68",
      "65"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1010101 and 1000011 yields decimal 65."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 27; int y = 32; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "27",
      "24",
      "32",
      "40"
    ],
    "answer": 1,
    "explanation": "Condition (27 > 32) evaluates to false. Thus z is assigned to 32 - 8 which equals 24."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 191; int y = 141; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "141",
      "191",
      "173",
      "209"
    ],
    "answer": 3,
    "explanation": "Condition (191 > 141) evaluates to true. Thus z is assigned to 191 + 18 which equals 209."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 139; int y = 186; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "174",
      "198",
      "139",
      "186"
    ],
    "answer": 0,
    "explanation": "Condition (139 > 186) evaluates to false. Thus z is assigned to 186 - 12 which equals 174."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(63 & 93);",
    "options": [
      "32",
      "29",
      "156",
      "27"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 111111 and 1011101 yields decimal 29."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(128 ^ 23);",
    "options": [
      "149",
      "175",
      "154",
      "151"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10000000 and 10111 yields decimal 151."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4463 % 27);?",
    "options": [
      "0",
      "165",
      "11",
      "8"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4463 / 27 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1898 % 14);?",
    "options": [
      "0",
      "135",
      "8",
      "11"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1898 / 14 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 157; int y = 23; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "163",
      "151",
      "157",
      "23"
    ],
    "answer": 0,
    "explanation": "Condition (157 > 23) evaluates to true. Thus z is assigned to 157 + 6 which equals 163."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 99; int y = 24; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "99",
      "128",
      "70",
      "24"
    ],
    "answer": 1,
    "explanation": "Condition (99 > 24) evaluates to true. Thus z is assigned to 99 + 29 which equals 128."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 | 79);",
    "options": [
      "95",
      "93",
      "96",
      "98"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10001 and 1001111 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3916 % 53);?",
    "options": [
      "0",
      "50",
      "73",
      "47"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3916 / 53 leaves remainder 47."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3584 % 52);?",
    "options": [
      "51",
      "68",
      "48",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3584 / 52 leaves remainder 48."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1909 % 36);?",
    "options": [
      "4",
      "53",
      "0",
      "1"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1909 / 36 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 103; int y = 75; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "88",
      "75",
      "118",
      "103"
    ],
    "answer": 2,
    "explanation": "Condition (103 > 75) evaluates to true. Thus z is assigned to 103 + 15 which equals 118."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 44; int y = 180; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "152",
      "180",
      "44",
      "208"
    ],
    "answer": 0,
    "explanation": "Condition (44 > 180) evaluates to false. Thus z is assigned to 180 - 28 which equals 152."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(44 | 103);",
    "options": [
      "111",
      "114",
      "109",
      "147"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 101100 and 1100111 yields decimal 111."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4023 % 40);?",
    "options": [
      "100",
      "0",
      "26",
      "23"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4023 / 40 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(122 | 65);",
    "options": [
      "126",
      "187",
      "121",
      "123"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1111010 and 1000001 yields decimal 123."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 100; int y = 75; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "81",
      "75",
      "100",
      "119"
    ],
    "answer": 3,
    "explanation": "Condition (100 > 75) evaluates to true. Thus z is assigned to 100 + 19 which equals 119."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(177 & 81);",
    "options": [
      "20",
      "258",
      "15",
      "17"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10110001 and 1010001 yields decimal 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(152 & 32);",
    "options": [
      "0",
      "184",
      "-2",
      "3"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10011000 and 100000 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 162; int y = 119; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "119",
      "184",
      "162",
      "140"
    ],
    "answer": 1,
    "explanation": "Condition (162 > 119) evaluates to true. Thus z is assigned to 162 + 22 which equals 184."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 | 36);",
    "options": [
      "77",
      "51",
      "53",
      "56"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10001 and 100100 yields decimal 53."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 62; int y = 172; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "179",
      "172",
      "165",
      "62"
    ],
    "answer": 2,
    "explanation": "Condition (62 > 172) evaluates to false. Thus z is assigned to 172 - 7 which equals 165."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(50 & 38);",
    "options": [
      "34",
      "37",
      "32",
      "88"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 110010 and 100110 yields decimal 34."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(22 ^ 71);",
    "options": [
      "84",
      "79",
      "81",
      "93"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10110 and 1000111 yields decimal 81."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 43; int y = 171; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "171",
      "153",
      "189",
      "43"
    ],
    "answer": 1,
    "explanation": "Condition (43 > 171) evaluates to false. Thus z is assigned to 171 - 18 which equals 153."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 50; int y = 113; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "98",
      "113",
      "50",
      "128"
    ],
    "answer": 0,
    "explanation": "Condition (50 > 113) evaluates to false. Thus z is assigned to 113 - 15 which equals 98."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(82 ^ 19);",
    "options": [
      "101",
      "63",
      "68",
      "65"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1010010 and 10011 yields decimal 65."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 121; int y = 17; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "106",
      "17",
      "121",
      "136"
    ],
    "answer": 3,
    "explanation": "Condition (121 > 17) evaluates to true. Thus z is assigned to 121 + 15 which equals 136."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 10; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "23",
      "48",
      "-2",
      "10"
    ],
    "answer": 1,
    "explanation": "Condition (23 > 10) evaluates to true. Thus z is assigned to 23 + 25 which equals 48."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1513 % 43);?",
    "options": [
      "11",
      "35",
      "0",
      "8"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1513 / 43 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(132 & 76);",
    "options": [
      "4",
      "7",
      "208",
      "2"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10000100 and 1001100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 163; int y = 71; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "172",
      "71",
      "163",
      "154"
    ],
    "answer": 0,
    "explanation": "Condition (163 > 71) evaluates to true. Thus z is assigned to 163 + 9 which equals 172."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 117; int y = 39; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "39",
      "149",
      "117",
      "85"
    ],
    "answer": 1,
    "explanation": "Condition (117 > 39) evaluates to true. Thus z is assigned to 117 + 32 which equals 149."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3834 % 59);?",
    "options": [
      "58",
      "64",
      "0",
      "61"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3834 / 59 leaves remainder 58."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 175; int y = 10; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "10",
      "175",
      "163",
      "187"
    ],
    "answer": 3,
    "explanation": "Condition (175 > 10) evaluates to true. Thus z is assigned to 175 + 12 which equals 187."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(87 ^ 10);",
    "options": [
      "97",
      "93",
      "91",
      "96"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1010111 and 1010 yields decimal 93."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(98 | 10);",
    "options": [
      "109",
      "104",
      "106",
      "108"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1100010 and 1010 yields decimal 106."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(23 | 53);",
    "options": [
      "55",
      "58",
      "53",
      "76"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10111 and 110101 yields decimal 55."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(148 & 94);",
    "options": [
      "18",
      "20",
      "242",
      "23"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10010100 and 1011110 yields decimal 20."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(741 % 50);?",
    "options": [
      "44",
      "0",
      "14",
      "41"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 741 / 50 leaves remainder 41."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(134 | 43);",
    "options": [
      "175",
      "173",
      "177",
      "178"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10000110 and 101011 yields decimal 175."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(209 & 38);",
    "options": [
      "247",
      "0",
      "-2",
      "3"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 11010001 and 100110 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(142 ^ 68);",
    "options": [
      "202",
      "210",
      "205",
      "200"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10001110 and 1000100 yields decimal 202."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 119; int y = 124; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "105",
      "119",
      "124",
      "143"
    ],
    "answer": 0,
    "explanation": "Condition (119 > 124) evaluates to false. Thus z is assigned to 124 - 19 which equals 105."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 19; int y = 128; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "94",
      "19",
      "162",
      "128"
    ],
    "answer": 0,
    "explanation": "Condition (19 > 128) evaluates to false. Thus z is assigned to 128 - 34 which equals 94."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3450 % 25);?",
    "options": [
      "7",
      "3",
      "0",
      "138"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3450 / 25 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(134 ^ 42);",
    "options": [
      "172",
      "170",
      "176",
      "175"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10000110 and 101010 yields decimal 172."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(473 % 58);?",
    "options": [
      "8",
      "0",
      "12",
      "9"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 473 / 58 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 205; int y = 124; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "238",
      "172",
      "205",
      "124"
    ],
    "answer": 0,
    "explanation": "Condition (205 > 124) evaluates to true. Thus z is assigned to 205 + 33 which equals 238."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 37; int y = 43; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "37",
      "43",
      "59",
      "27"
    ],
    "answer": 3,
    "explanation": "Condition (37 > 43) evaluates to false. Thus z is assigned to 43 - 16 which equals 27."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(141 ^ 53);",
    "options": [
      "194",
      "184",
      "187",
      "182"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10001101 and 110101 yields decimal 184."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(182 & 73);",
    "options": [
      "3",
      "-2",
      "0",
      "255"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10110110 and 1001001 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 169; int y = 173; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "141",
      "205",
      "173",
      "169"
    ],
    "answer": 0,
    "explanation": "Condition (169 > 173) evaluates to false. Thus z is assigned to 173 - 32 which equals 141."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 75; int y = 56; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "75",
      "97",
      "56",
      "53"
    ],
    "answer": 1,
    "explanation": "Condition (75 > 56) evaluates to true. Thus z is assigned to 75 + 22 which equals 97."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(75 | 94);",
    "options": [
      "95",
      "93",
      "169",
      "98"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1001011 and 1011110 yields decimal 95."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(169 | 88);",
    "options": [
      "249",
      "252",
      "247",
      "257"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10101001 and 1011000 yields decimal 249."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4419 % 50);?",
    "options": [
      "0",
      "19",
      "88",
      "22"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4419 / 50 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(166 ^ 5);",
    "options": [
      "163",
      "161",
      "166",
      "171"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10100110 and 101 yields decimal 163."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(108 & 76);",
    "options": [
      "76",
      "184",
      "74",
      "79"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1101100 and 1001100 yields decimal 76."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 56; int y = 27; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "66",
      "46",
      "27",
      "56"
    ],
    "answer": 0,
    "explanation": "Condition (56 > 27) evaluates to true. Thus z is assigned to 56 + 10 which equals 66."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2588 % 10);?",
    "options": [
      "8",
      "0",
      "258",
      "11"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2588 / 10 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3640 % 56);?",
    "options": [
      "7",
      "65",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3640 / 56 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 74; int y = 195; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "195",
      "171",
      "219",
      "74"
    ],
    "answer": 1,
    "explanation": "Condition (74 > 195) evaluates to false. Thus z is assigned to 195 - 24 which equals 171."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3563 % 13);?",
    "options": [
      "0",
      "4",
      "1",
      "274"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3563 / 13 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 185; int y = 19; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "185",
      "219",
      "19",
      "151"
    ],
    "answer": 1,
    "explanation": "Condition (185 > 19) evaluates to true. Thus z is assigned to 185 + 34 which equals 219."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(111 ^ 96);",
    "options": [
      "15",
      "13",
      "18",
      "207"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1101111 and 1100000 yields decimal 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 42; int y = 146; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "180",
      "112",
      "146",
      "42"
    ],
    "answer": 1,
    "explanation": "Condition (42 > 146) evaluates to false. Thus z is assigned to 146 - 34 which equals 112."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 115; int y = 104; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "90",
      "115",
      "140",
      "104"
    ],
    "answer": 2,
    "explanation": "Condition (115 > 104) evaluates to true. Thus z is assigned to 115 + 25 which equals 140."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(49 & 92);",
    "options": [
      "14",
      "16",
      "141",
      "19"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 110001 and 1011100 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 205; int y = 81; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "205",
      "210",
      "81",
      "200"
    ],
    "answer": 1,
    "explanation": "Condition (205 > 81) evaluates to true. Thus z is assigned to 205 + 5 which equals 210."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(63 ^ 101);",
    "options": [
      "88",
      "164",
      "90",
      "93"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 111111 and 1100101 yields decimal 90."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2826 % 39);?",
    "options": [
      "72",
      "18",
      "0",
      "21"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2826 / 39 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(743 % 30);?",
    "options": [
      "0",
      "26",
      "24",
      "23"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 743 / 30 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 130; int y = 16; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "130",
      "124",
      "136",
      "16"
    ],
    "answer": 2,
    "explanation": "Condition (130 > 16) evaluates to true. Thus z is assigned to 130 + 6 which equals 136."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(34 ^ 21);",
    "options": [
      "79",
      "58",
      "55",
      "53"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 100010 and 10101 yields decimal 55."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 34; int y = 151; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "117",
      "151",
      "185",
      "34"
    ],
    "answer": 0,
    "explanation": "Condition (34 > 151) evaluates to false. Thus z is assigned to 151 - 34 which equals 117."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(206 & 52);",
    "options": [
      "258",
      "4",
      "2",
      "7"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 11001110 and 110100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4992 % 41);?",
    "options": [
      "31",
      "0",
      "34",
      "121"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4992 / 41 leaves remainder 31."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(30 & 34);",
    "options": [
      "64",
      "2",
      "5",
      "0"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 11110 and 100010 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 122; int y = 32; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "32",
      "122",
      "150",
      "94"
    ],
    "answer": 2,
    "explanation": "Condition (122 > 32) evaluates to true. Thus z is assigned to 122 + 28 which equals 150."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(100 ^ 83);",
    "options": [
      "183",
      "55",
      "53",
      "58"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1100100 and 1010011 yields decimal 55."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 189; int y = 157; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "157",
      "218",
      "189",
      "160"
    ],
    "answer": 1,
    "explanation": "Condition (189 > 157) evaluates to true. Thus z is assigned to 189 + 29 which equals 218."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4049 % 33);?",
    "options": [
      "23",
      "26",
      "122",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4049 / 33 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 97; int y = 153; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "169",
      "97",
      "153",
      "137"
    ],
    "answer": 3,
    "explanation": "Condition (97 > 153) evaluates to false. Thus z is assigned to 153 - 16 which equals 137."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 93; int y = 157; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "141",
      "93",
      "157",
      "173"
    ],
    "answer": 0,
    "explanation": "Condition (93 > 157) evaluates to false. Thus z is assigned to 157 - 16 which equals 141."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(200 & 85);",
    "options": [
      "285",
      "62",
      "64",
      "67"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 11001000 and 1010101 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2944 % 29);?",
    "options": [
      "15",
      "101",
      "18",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2944 / 29 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 164; int y = 85; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "140",
      "85",
      "188",
      "164"
    ],
    "answer": 2,
    "explanation": "Condition (164 > 85) evaluates to true. Thus z is assigned to 164 + 24 which equals 188."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(190 ^ 59);",
    "options": [
      "136",
      "249",
      "131",
      "133"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10111110 and 111011 yields decimal 133."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4268 % 59);?",
    "options": [
      "20",
      "23",
      "0",
      "72"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4268 / 59 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 23; int y = 133; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "108",
      "133",
      "23",
      "158"
    ],
    "answer": 0,
    "explanation": "Condition (23 > 133) evaluates to false. Thus z is assigned to 133 - 25 which equals 108."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 196; int y = 157; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "221",
      "171",
      "196",
      "157"
    ],
    "answer": 0,
    "explanation": "Condition (196 > 157) evaluates to true. Thus z is assigned to 196 + 25 which equals 221."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(34 | 85);",
    "options": [
      "122",
      "143",
      "119",
      "117"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 100010 and 1010101 yields decimal 119."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(177 ^ 76);",
    "options": [
      "256",
      "277",
      "251",
      "253"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10110001 and 1001100 yields decimal 253."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 103; int y = 175; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "103",
      "175",
      "205",
      "145"
    ],
    "answer": 3,
    "explanation": "Condition (103 > 175) evaluates to false. Thus z is assigned to 175 - 30 which equals 145."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 35; int y = 142; int z = (x > y) ? x + 16 : y - 16;?",
    "options": [
      "126",
      "142",
      "158",
      "35"
    ],
    "answer": 0,
    "explanation": "Condition (35 > 142) evaluates to false. Thus z is assigned to 142 - 16 which equals 126."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 137; int y = 180; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "180",
      "137",
      "146",
      "214"
    ],
    "answer": 2,
    "explanation": "Condition (137 > 180) evaluates to false. Thus z is assigned to 180 - 34 which equals 146."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 148; int y = 78; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "161",
      "148",
      "135",
      "78"
    ],
    "answer": 0,
    "explanation": "Condition (148 > 78) evaluates to true. Thus z is assigned to 148 + 13 which equals 161."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4699 % 44);?",
    "options": [
      "106",
      "0",
      "35",
      "38"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4699 / 44 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 95; int y = 191; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "222",
      "95",
      "191",
      "160"
    ],
    "answer": 3,
    "explanation": "Condition (95 > 191) evaluates to false. Thus z is assigned to 191 - 31 which equals 160."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(166 ^ 30);",
    "options": [
      "182",
      "184",
      "196",
      "187"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10100110 and 11110 yields decimal 184."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(143 & 24);",
    "options": [
      "8",
      "167",
      "6",
      "11"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10001111 and 11000 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 76; int y = 95; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "76",
      "85",
      "105",
      "95"
    ],
    "answer": 1,
    "explanation": "Condition (76 > 95) evaluates to false. Thus z is assigned to 95 - 10 which equals 85."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4057 % 32);?",
    "options": [
      "28",
      "126",
      "25",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4057 / 32 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(192 ^ 60);",
    "options": [
      "276",
      "250",
      "255",
      "252"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 11000000 and 111100 yields decimal 252."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(36 & 79);",
    "options": [
      "2",
      "115",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 100100 and 1001111 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3165 % 37);?",
    "options": [
      "85",
      "0",
      "20",
      "23"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3165 / 37 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(115 ^ 67);",
    "options": [
      "46",
      "48",
      "182",
      "51"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1110011 and 1000011 yields decimal 48."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 137; int y = 29; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "168",
      "29",
      "137",
      "106"
    ],
    "answer": 0,
    "explanation": "Condition (137 > 29) evaluates to true. Thus z is assigned to 137 + 31 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5192 % 14);?",
    "options": [
      "0",
      "12",
      "15",
      "370"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 5192 / 14 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 58; int y = 133; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "166",
      "100",
      "133",
      "58"
    ],
    "answer": 1,
    "explanation": "Condition (58 > 133) evaluates to false. Thus z is assigned to 133 - 33 which equals 100."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 96; int y = 72; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "72",
      "96",
      "64",
      "128"
    ],
    "answer": 3,
    "explanation": "Condition (96 > 72) evaluates to true. Thus z is assigned to 96 + 32 which equals 128."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(188 & 39);",
    "options": [
      "227",
      "36",
      "39",
      "34"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10111100 and 100111 yields decimal 36."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(43 & 20);",
    "options": [
      "63",
      "-2",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 101011 and 10100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3230 % 53);?",
    "options": [
      "0",
      "53",
      "50",
      "60"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3230 / 53 leaves remainder 50."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4321 % 15);?",
    "options": [
      "0",
      "288",
      "1",
      "4"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4321 / 15 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(99 & 27);",
    "options": [
      "6",
      "3",
      "126",
      "1"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1100011 and 11011 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 64; int y = 62; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "64",
      "49",
      "79",
      "62"
    ],
    "answer": 2,
    "explanation": "Condition (64 > 62) evaluates to true. Thus z is assigned to 64 + 15 which equals 79."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 176; int y = 156; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "176",
      "156",
      "164",
      "188"
    ],
    "answer": 3,
    "explanation": "Condition (176 > 156) evaluates to true. Thus z is assigned to 176 + 12 which equals 188."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(84 ^ 64);",
    "options": [
      "20",
      "148",
      "18",
      "23"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1010100 and 1000000 yields decimal 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 126; int y = 59; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "59",
      "115",
      "137",
      "126"
    ],
    "answer": 2,
    "explanation": "Condition (126 > 59) evaluates to true. Thus z is assigned to 126 + 11 which equals 137."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(136 | 16);",
    "options": [
      "150",
      "155",
      "176",
      "152"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10001000 and 10000 yields decimal 152."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 119; int y = 30; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "30",
      "119",
      "126",
      "112"
    ],
    "answer": 2,
    "explanation": "Condition (119 > 30) evaluates to true. Thus z is assigned to 119 + 7 which equals 126."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2732 % 27);?",
    "options": [
      "5",
      "101",
      "8",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2732 / 27 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 170; int y = 179; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "148",
      "170",
      "179",
      "210"
    ],
    "answer": 0,
    "explanation": "Condition (170 > 179) evaluates to false. Thus z is assigned to 179 - 31 which equals 148."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(141 | 6);",
    "options": [
      "141",
      "147",
      "143",
      "146"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10001101 and 110 yields decimal 143."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(127 | 36);",
    "options": [
      "130",
      "125",
      "163",
      "127"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1111111 and 100100 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(922 % 27);?",
    "options": [
      "4",
      "34",
      "0",
      "7"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 922 / 27 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 119; int y = 195; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "195",
      "119",
      "170",
      "220"
    ],
    "answer": 2,
    "explanation": "Condition (119 > 195) evaluates to false. Thus z is assigned to 195 - 25 which equals 170."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 135; int y = 58; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "122",
      "148",
      "58",
      "135"
    ],
    "answer": 1,
    "explanation": "Condition (135 > 58) evaluates to true. Thus z is assigned to 135 + 13 which equals 148."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 145; int y = 173; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "145",
      "173",
      "180",
      "166"
    ],
    "answer": 3,
    "explanation": "Condition (145 > 173) evaluates to false. Thus z is assigned to 173 - 7 which equals 166."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1644 % 54);?",
    "options": [
      "0",
      "27",
      "24",
      "30"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1644 / 54 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3707 % 25);?",
    "options": [
      "10",
      "0",
      "7",
      "148"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3707 / 25 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(99 & 84);",
    "options": [
      "183",
      "67",
      "62",
      "64"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1100011 and 1010100 yields decimal 64."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(763 % 53);?",
    "options": [
      "14",
      "24",
      "0",
      "21"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 763 / 53 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(162 ^ 8);",
    "options": [
      "173",
      "168",
      "194",
      "170"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10100010 and 1000 yields decimal 170."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 170; int y = 58; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "181",
      "170",
      "159",
      "58"
    ],
    "answer": 0,
    "explanation": "Condition (170 > 58) evaluates to true. Thus z is assigned to 170 + 11 which equals 181."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 51; int y = 197; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "51",
      "172",
      "197",
      "222"
    ],
    "answer": 1,
    "explanation": "Condition (51 > 197) evaluates to false. Thus z is assigned to 197 - 25 which equals 172."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(141 & 16);",
    "options": [
      "157",
      "0",
      "-2",
      "3"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10001101 and 10000 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(143 & 99);",
    "options": [
      "242",
      "6",
      "1",
      "3"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10001111 and 1100011 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 26; int y = 125; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "125",
      "133",
      "117",
      "26"
    ],
    "answer": 2,
    "explanation": "Condition (26 > 125) evaluates to false. Thus z is assigned to 125 - 8 which equals 117."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 121; int y = 123; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "123",
      "92",
      "121",
      "154"
    ],
    "answer": 1,
    "explanation": "Condition (121 > 123) evaluates to false. Thus z is assigned to 123 - 31 which equals 92."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4609 % 38);?",
    "options": [
      "121",
      "11",
      "14",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4609 / 38 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1979 % 44);?",
    "options": [
      "44",
      "46",
      "0",
      "43"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1979 / 44 leaves remainder 43."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(116 & 69);",
    "options": [
      "185",
      "66",
      "71",
      "68"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 1110100 and 1000101 yields decimal 68."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 14; int y = 101; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "74",
      "101",
      "128",
      "14"
    ],
    "answer": 0,
    "explanation": "Condition (14 > 101) evaluates to false. Thus z is assigned to 101 - 27 which equals 74."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(104 & 97);",
    "options": [
      "201",
      "99",
      "96",
      "94"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1101000 and 1100001 yields decimal 96."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(59 | 85);",
    "options": [
      "130",
      "144",
      "125",
      "127"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 111011 and 1010101 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4358 % 56);?",
    "options": [
      "46",
      "49",
      "77",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4358 / 56 leaves remainder 46."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 179; int y = 30; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "179",
      "172",
      "30",
      "186"
    ],
    "answer": 3,
    "explanation": "Condition (179 > 30) evaluates to true. Thus z is assigned to 179 + 7 which equals 186."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 33; int y = 109; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "109",
      "131",
      "33",
      "87"
    ],
    "answer": 3,
    "explanation": "Condition (33 > 109) evaluates to false. Thus z is assigned to 109 - 22 which equals 87."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(103 ^ 77);",
    "options": [
      "180",
      "45",
      "40",
      "42"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1100111 and 1001101 yields decimal 42."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 147; int y = 205; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "191",
      "205",
      "147",
      "219"
    ],
    "answer": 0,
    "explanation": "Condition (147 > 205) evaluates to false. Thus z is assigned to 205 - 14 which equals 191."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(47 ^ 9);",
    "options": [
      "36",
      "56",
      "41",
      "38"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 101111 and 1001 yields decimal 38."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 27; int y = 45; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "45",
      "27",
      "513",
      "63"
    ],
    "answer": 1,
    "explanation": "Condition (27 > 45) evaluates to false. Thus z is assigned to 45 - 18 which equals 27."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 142; int y = 199; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "179",
      "219",
      "142",
      "199"
    ],
    "answer": 0,
    "explanation": "Condition (142 > 199) evaluates to false. Thus z is assigned to 199 - 20 which equals 179."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 154; int y = 175; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "154",
      "143",
      "207",
      "175"
    ],
    "answer": 1,
    "explanation": "Condition (154 > 175) evaluates to false. Thus z is assigned to 175 - 32 which equals 143."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 172; int y = 103; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "172",
      "193",
      "151",
      "103"
    ],
    "answer": 1,
    "explanation": "Condition (172 > 103) evaluates to true. Thus z is assigned to 172 + 21 which equals 193."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1195 % 59);?",
    "options": [
      "0",
      "15",
      "18",
      "20"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1195 / 59 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3651 % 55);?",
    "options": [
      "0",
      "66",
      "24",
      "21"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3651 / 55 leaves remainder 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3592 % 10);?",
    "options": [
      "2",
      "359",
      "0",
      "5"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3592 / 10 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(103 & 83);",
    "options": [
      "186",
      "65",
      "67",
      "70"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1100111 and 1010011 yields decimal 67."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(28 & 46);",
    "options": [
      "74",
      "12",
      "10",
      "15"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 11100 and 101110 yields decimal 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(25 ^ 7);",
    "options": [
      "30",
      "28",
      "33",
      "32"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 11001 and 111 yields decimal 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2021 % 19);?",
    "options": [
      "10",
      "106",
      "0",
      "7"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2021 / 19 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3535 % 11);?",
    "options": [
      "321",
      "4",
      "0",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3535 / 11 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 35; int y = 118; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "118",
      "141",
      "35",
      "95"
    ],
    "answer": 3,
    "explanation": "Condition (35 > 118) evaluates to false. Thus z is assigned to 118 - 23 which equals 95."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(102 | 73);",
    "options": [
      "111",
      "114",
      "175",
      "109"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1100110 and 1001001 yields decimal 111."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(93 | 25);",
    "options": [
      "93",
      "118",
      "96",
      "91"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1011101 and 11001 yields decimal 93."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(44 ^ 17);",
    "options": [
      "85",
      "64",
      "59",
      "61"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 101100 and 10001 yields decimal 61."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(165 ^ 104);",
    "options": [
      "208",
      "203",
      "205",
      "269"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10100101 and 1101000 yields decimal 205."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 206; int y = 60; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "60",
      "179",
      "206",
      "233"
    ],
    "answer": 3,
    "explanation": "Condition (206 > 60) evaluates to true. Thus z is assigned to 206 + 27 which equals 233."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(128 & 44);",
    "options": [
      "-2",
      "3",
      "172",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10000000 and 101100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(192 | 7);",
    "options": [
      "202",
      "197",
      "199",
      "223"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 11000000 and 111 yields decimal 199."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2630 % 54);?",
    "options": [
      "38",
      "41",
      "48",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2630 / 54 leaves remainder 38."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5171 % 52);?",
    "options": [
      "99",
      "26",
      "0",
      "23"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 5171 / 52 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 59; int y = 202; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "202",
      "209",
      "59",
      "195"
    ],
    "answer": 3,
    "explanation": "Condition (59 > 202) evaluates to false. Thus z is assigned to 202 - 7 which equals 195."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 18; int y = 158; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "158",
      "18",
      "126",
      "190"
    ],
    "answer": 2,
    "explanation": "Condition (18 > 158) evaluates to false. Thus z is assigned to 158 - 32 which equals 126."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1150 % 29);?",
    "options": [
      "19",
      "22",
      "0",
      "39"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1150 / 29 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(69 ^ 103);",
    "options": [
      "37",
      "32",
      "172",
      "34"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1000101 and 1100111 yields decimal 34."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 125; int y = 38; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "147",
      "38",
      "103",
      "125"
    ],
    "answer": 0,
    "explanation": "Condition (125 > 38) evaluates to true. Thus z is assigned to 125 + 22 which equals 147."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(436 % 40);?",
    "options": [
      "0",
      "39",
      "10",
      "36"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 436 / 40 leaves remainder 36."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4554 % 17);?",
    "options": [
      "0",
      "15",
      "18",
      "267"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4554 / 17 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 102; int y = 38; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "108",
      "38",
      "96",
      "102"
    ],
    "answer": 0,
    "explanation": "Condition (102 > 38) evaluates to true. Thus z is assigned to 102 + 6 which equals 108."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1066 % 23);?",
    "options": [
      "11",
      "8",
      "46",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1066 / 23 leaves remainder 8."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(91 & 37);",
    "options": [
      "1",
      "128",
      "-1",
      "4"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1011011 and 100101 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2354 % 50);?",
    "options": [
      "47",
      "0",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2354 / 50 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(113 | 93);",
    "options": [
      "123",
      "128",
      "206",
      "125"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1110001 and 1011101 yields decimal 125."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3010 % 25);?",
    "options": [
      "120",
      "0",
      "13",
      "10"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3010 / 25 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3251 % 58);?",
    "options": [
      "3",
      "6",
      "56",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3251 / 58 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3789 % 32);?",
    "options": [
      "13",
      "118",
      "16",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3789 / 32 leaves remainder 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 89; int y = 41; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "95",
      "41",
      "83",
      "89"
    ],
    "answer": 0,
    "explanation": "Condition (89 > 41) evaluates to true. Thus z is assigned to 89 + 6 which equals 95."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(95 ^ 64);",
    "options": [
      "34",
      "159",
      "29",
      "31"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1011111 and 1000000 yields decimal 31."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 157; int y = 27; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "157",
      "171",
      "143",
      "27"
    ],
    "answer": 1,
    "explanation": "Condition (157 > 27) evaluates to true. Thus z is assigned to 157 + 14 which equals 171."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 40; int y = 69; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "40",
      "92",
      "46",
      "69"
    ],
    "answer": 2,
    "explanation": "Condition (40 > 69) evaluates to false. Thus z is assigned to 69 - 23 which equals 46."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(158 & 94);",
    "options": [
      "28",
      "30",
      "33",
      "252"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10011110 and 1011110 yields decimal 30."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 178; int y = 195; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "201",
      "195",
      "178",
      "189"
    ],
    "answer": 3,
    "explanation": "Condition (178 > 195) evaluates to false. Thus z is assigned to 195 - 6 which equals 189."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1053 % 18);?",
    "options": [
      "9",
      "58",
      "12",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1053 / 18 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3974 % 38);?",
    "options": [
      "0",
      "104",
      "22",
      "25"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3974 / 38 leaves remainder 22."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(194 | 42);",
    "options": [
      "232",
      "236",
      "234",
      "237"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 11000010 and 101010 yields decimal 234."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5000 % 42);?",
    "options": [
      "2",
      "5",
      "119",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 5000 / 42 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 151; int y = 100; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "142",
      "160",
      "151",
      "100"
    ],
    "answer": 1,
    "explanation": "Condition (151 > 100) evaluates to true. Thus z is assigned to 151 + 9 which equals 160."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 104; int y = 122; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "122",
      "153",
      "91",
      "104"
    ],
    "answer": 2,
    "explanation": "Condition (104 > 122) evaluates to false. Thus z is assigned to 122 - 31 which equals 91."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 32; int y = 71; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "71",
      "32",
      "62",
      "80"
    ],
    "answer": 2,
    "explanation": "Condition (32 > 71) evaluates to false. Thus z is assigned to 71 - 9 which equals 62."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(337 % 44);?",
    "options": [
      "0",
      "7",
      "29",
      "32"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 337 / 44 leaves remainder 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 153; int y = 84; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "84",
      "146",
      "160",
      "153"
    ],
    "answer": 2,
    "explanation": "Condition (153 > 84) evaluates to true. Thus z is assigned to 153 + 7 which equals 160."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(137 | 7);",
    "options": [
      "141",
      "143",
      "144",
      "146"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10001001 and 111 yields decimal 143."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2603 % 26);?",
    "options": [
      "100",
      "6",
      "3",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2603 / 26 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2958 % 20);?",
    "options": [
      "18",
      "0",
      "21",
      "147"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2958 / 20 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 128; int y = 155; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "168",
      "155",
      "142",
      "128"
    ],
    "answer": 2,
    "explanation": "Condition (128 > 155) evaluates to false. Thus z is assigned to 155 - 13 which equals 142."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1213 % 34);?",
    "options": [
      "23",
      "35",
      "26",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1213 / 34 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(847 % 37);?",
    "options": [
      "22",
      "33",
      "36",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 847 / 37 leaves remainder 33."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1534 % 57);?",
    "options": [
      "26",
      "0",
      "55",
      "52"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1534 / 57 leaves remainder 52."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(176 & 88);",
    "options": [
      "264",
      "14",
      "19",
      "16"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10110000 and 1011000 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(93 | 53);",
    "options": [
      "123",
      "128",
      "125",
      "146"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1011101 and 110101 yields decimal 125."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(38 & 20);",
    "options": [
      "7",
      "2",
      "4",
      "58"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 100110 and 10100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 194; int y = 125; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "194",
      "173",
      "125",
      "215"
    ],
    "answer": 3,
    "explanation": "Condition (194 > 125) evaluates to true. Thus z is assigned to 194 + 21 which equals 215."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(209 ^ 42);",
    "options": [
      "251",
      "249",
      "254",
      "275"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 11010001 and 101010 yields decimal 251."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 154; int y = 47; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "142",
      "166",
      "47",
      "154"
    ],
    "answer": 1,
    "explanation": "Condition (154 > 47) evaluates to true. Thus z is assigned to 154 + 12 which equals 166."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(172 | 46);",
    "options": [
      "218",
      "172",
      "174",
      "177"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10101100 and 101110 yields decimal 174."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(20 | 53);",
    "options": [
      "53",
      "51",
      "73",
      "56"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10100 and 110101 yields decimal 53."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(203 | 101);",
    "options": [
      "239",
      "304",
      "242",
      "237"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11001011 and 1100101 yields decimal 239."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(152 | 13);",
    "options": [
      "155",
      "165",
      "157",
      "160"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 10011000 and 1101 yields decimal 157."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(129 ^ 33);",
    "options": [
      "162",
      "160",
      "158",
      "163"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10000001 and 100001 yields decimal 160."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(68 | 45);",
    "options": [
      "109",
      "107",
      "113",
      "112"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1000100 and 101101 yields decimal 109."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3679 % 11);?",
    "options": [
      "334",
      "5",
      "0",
      "8"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3679 / 11 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3635 % 50);?",
    "options": [
      "0",
      "38",
      "35",
      "72"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3635 / 50 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3979 % 35);?",
    "options": [
      "113",
      "0",
      "24",
      "27"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3979 / 35 leaves remainder 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4888 % 45);?",
    "options": [
      "28",
      "108",
      "0",
      "31"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4888 / 45 leaves remainder 28."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1495 % 24);?",
    "options": [
      "62",
      "10",
      "7",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1495 / 24 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(551 % 18);?",
    "options": [
      "0",
      "14",
      "11",
      "30"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 551 / 18 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 195; int y = 130; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "130",
      "195",
      "207",
      "183"
    ],
    "answer": 2,
    "explanation": "Condition (195 > 130) evaluates to true. Thus z is assigned to 195 + 12 which equals 207."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1456 % 10);?",
    "options": [
      "145",
      "0",
      "6",
      "9"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1456 / 10 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(156 ^ 11);",
    "options": [
      "167",
      "154",
      "149",
      "151"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10011100 and 1011 yields decimal 151."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3635 % 36);?",
    "options": [
      "38",
      "0",
      "100",
      "35"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3635 / 36 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 161; int y = 193; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "161",
      "218",
      "168",
      "193"
    ],
    "answer": 2,
    "explanation": "Condition (161 > 193) evaluates to false. Thus z is assigned to 193 - 25 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(111 ^ 87);",
    "options": [
      "54",
      "59",
      "56",
      "198"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1101111 and 1010111 yields decimal 56."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(99 | 63);",
    "options": [
      "127",
      "125",
      "130",
      "162"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1100011 and 111111 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(87 ^ 19);",
    "options": [
      "66",
      "68",
      "71",
      "106"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1010111 and 10011 yields decimal 68."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 182; int y = 40; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "187",
      "177",
      "182",
      "40"
    ],
    "answer": 0,
    "explanation": "Condition (182 > 40) evaluates to true. Thus z is assigned to 182 + 5 which equals 187."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3743 % 39);?",
    "options": [
      "38",
      "95",
      "0",
      "41"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 3743 / 39 leaves remainder 38."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 168; int y = 52; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "156",
      "180",
      "52",
      "168"
    ],
    "answer": 1,
    "explanation": "Condition (168 > 52) evaluates to true. Thus z is assigned to 168 + 12 which equals 180."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2934 % 41);?",
    "options": [
      "23",
      "26",
      "0",
      "71"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2934 / 41 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(158 & 101);",
    "options": [
      "259",
      "4",
      "7",
      "2"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10011110 and 1100101 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(163 ^ 11);",
    "options": [
      "171",
      "168",
      "166",
      "174"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10100011 and 1011 yields decimal 168."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 95; int y = 171; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "195",
      "147",
      "171",
      "95"
    ],
    "answer": 1,
    "explanation": "Condition (95 > 171) evaluates to false. Thus z is assigned to 171 - 24 which equals 147."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 11; int y = 199; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "199",
      "227",
      "171",
      "11"
    ],
    "answer": 2,
    "explanation": "Condition (11 > 199) evaluates to false. Thus z is assigned to 199 - 28 which equals 171."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(90 & 87);",
    "options": [
      "177",
      "82",
      "85",
      "80"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1011010 and 1010111 yields decimal 82."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 163; int y = 168; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "156",
      "168",
      "163",
      "180"
    ],
    "answer": 0,
    "explanation": "Condition (163 > 168) evaluates to false. Thus z is assigned to 168 - 12 which equals 156."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 156; int y = 116; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "116",
      "144",
      "156",
      "168"
    ],
    "answer": 3,
    "explanation": "Condition (156 > 116) evaluates to true. Thus z is assigned to 156 + 12 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5098 % 52);?",
    "options": [
      "98",
      "0",
      "2",
      "5"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 5098 / 52 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 52; int y = 203; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "180",
      "52",
      "203",
      "226"
    ],
    "answer": 0,
    "explanation": "Condition (52 > 203) evaluates to false. Thus z is assigned to 203 - 23 which equals 180."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 127; int y = 14; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "118",
      "136",
      "14",
      "127"
    ],
    "answer": 1,
    "explanation": "Condition (127 > 14) evaluates to true. Thus z is assigned to 127 + 9 which equals 136."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3139 % 42);?",
    "options": [
      "34",
      "31",
      "0",
      "74"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3139 / 42 leaves remainder 31."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4836 % 11);?",
    "options": [
      "439",
      "10",
      "7",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4836 / 11 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3586 % 11);?",
    "options": [
      "7",
      "0",
      "326",
      "3"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3586 / 11 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 142; int y = 84; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "147",
      "142",
      "137",
      "84"
    ],
    "answer": 0,
    "explanation": "Condition (142 > 84) evaluates to true. Thus z is assigned to 142 + 5 which equals 147."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3944 % 21);?",
    "options": [
      "20",
      "0",
      "17",
      "187"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3944 / 21 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(256 % 32);?",
    "options": [
      "8",
      "3",
      "0",
      "7"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 256 / 32 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(113 ^ 21);",
    "options": [
      "100",
      "134",
      "98",
      "103"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1110001 and 10101 yields decimal 100."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1590 % 25);?",
    "options": [
      "0",
      "63",
      "15",
      "18"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1590 / 25 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(11 & 36);",
    "options": [
      "-2",
      "0",
      "47",
      "3"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1011 and 100100 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(154 & 88);",
    "options": [
      "242",
      "27",
      "24",
      "22"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10011010 and 1011000 yields decimal 24."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4691 % 19);?",
    "options": [
      "246",
      "20",
      "17",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4691 / 19 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1300 % 40);?",
    "options": [
      "23",
      "20",
      "32",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1300 / 40 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 130; int y = 65; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "136",
      "124",
      "130",
      "65"
    ],
    "answer": 0,
    "explanation": "Condition (130 > 65) evaluates to true. Thus z is assigned to 130 + 6 which equals 136."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(101 ^ 104);",
    "options": [
      "205",
      "16",
      "11",
      "13"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1100101 and 1101000 yields decimal 13."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 130; int y = 136; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "136",
      "130",
      "343",
      "142"
    ],
    "answer": 1,
    "explanation": "Condition (130 > 136) evaluates to false. Thus z is assigned to 136 - 6 which equals 130."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(130 | 28);",
    "options": [
      "158",
      "156",
      "161",
      "182"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10000010 and 11100 yields decimal 158."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 184; int y = 142; int z = (x > y) ? x + 9 : y - 9;?",
    "options": [
      "142",
      "193",
      "175",
      "184"
    ],
    "answer": 1,
    "explanation": "Condition (184 > 142) evaluates to true. Thus z is assigned to 184 + 9 which equals 193."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 89; int y = 207; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "225",
      "207",
      "89",
      "189"
    ],
    "answer": 3,
    "explanation": "Condition (89 > 207) evaluates to false. Thus z is assigned to 207 - 18 which equals 189."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(829 % 52);?",
    "options": [
      "52",
      "15",
      "0",
      "49"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 829 / 52 leaves remainder 49."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(10 & 85);",
    "options": [
      "3",
      "95",
      "0",
      "-2"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1010 and 1010101 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 95; int y = 151; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "95",
      "151",
      "183",
      "119"
    ],
    "answer": 3,
    "explanation": "Condition (95 > 151) evaluates to false. Thus z is assigned to 151 - 32 which equals 119."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(105 & 27);",
    "options": [
      "7",
      "132",
      "9",
      "12"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1101001 and 11011 yields decimal 9."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 168; int y = 207; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "202",
      "212",
      "168",
      "207"
    ],
    "answer": 0,
    "explanation": "Condition (168 > 207) evaluates to false. Thus z is assigned to 207 - 5 which equals 202."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(92 & 17);",
    "options": [
      "19",
      "109",
      "16",
      "14"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1011100 and 10001 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 17; int y = 101; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "77",
      "17",
      "101",
      "125"
    ],
    "answer": 0,
    "explanation": "Condition (17 > 101) evaluates to false. Thus z is assigned to 101 - 24 which equals 77."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 37; int y = 134; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "121",
      "37",
      "134",
      "147"
    ],
    "answer": 0,
    "explanation": "Condition (37 > 134) evaluates to false. Thus z is assigned to 134 - 13 which equals 121."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(453 % 46);?",
    "options": [
      "39",
      "42",
      "9",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 453 / 46 leaves remainder 39."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 202; int y = 39; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "213",
      "39",
      "202",
      "191"
    ],
    "answer": 0,
    "explanation": "Condition (202 > 39) evaluates to true. Thus z is assigned to 202 + 11 which equals 213."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 200; int y = 152; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "207",
      "193",
      "200",
      "152"
    ],
    "answer": 0,
    "explanation": "Condition (200 > 152) evaluates to true. Thus z is assigned to 200 + 7 which equals 207."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 92; int y = 150; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "137",
      "150",
      "92",
      "163"
    ],
    "answer": 0,
    "explanation": "Condition (92 > 150) evaluates to false. Thus z is assigned to 150 - 13 which equals 137."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 67; int y = 108; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "125",
      "67",
      "91",
      "108"
    ],
    "answer": 2,
    "explanation": "Condition (67 > 108) evaluates to false. Thus z is assigned to 108 - 17 which equals 91."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(135 & 44);",
    "options": [
      "179",
      "4",
      "2",
      "7"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 10000111 and 101100 yields decimal 4."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(400 % 11);?",
    "options": [
      "36",
      "0",
      "7",
      "4"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 400 / 11 leaves remainder 4."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(183 ^ 10);",
    "options": [
      "187",
      "189",
      "192",
      "193"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 10110111 and 1010 yields decimal 189."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(109 & 69);",
    "options": [
      "72",
      "69",
      "67",
      "178"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1101101 and 1000101 yields decimal 69."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 134; int y = 110; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "116",
      "110",
      "152",
      "134"
    ],
    "answer": 2,
    "explanation": "Condition (134 > 110) evaluates to true. Thus z is assigned to 134 + 18 which equals 152."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3451 % 34);?",
    "options": [
      "101",
      "0",
      "17",
      "20"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3451 / 34 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 185; int y = 194; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "208",
      "185",
      "180",
      "194"
    ],
    "answer": 2,
    "explanation": "Condition (185 > 194) evaluates to false. Thus z is assigned to 194 - 14 which equals 180."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1781 % 51);?",
    "options": [
      "34",
      "50",
      "47",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1781 / 51 leaves remainder 47."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2628 % 59);?",
    "options": [
      "44",
      "0",
      "32",
      "35"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2628 / 59 leaves remainder 32."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(47 ^ 76);",
    "options": [
      "102",
      "123",
      "99",
      "97"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 101111 and 1001100 yields decimal 99."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 32; int y = 127; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "127",
      "138",
      "116",
      "32"
    ],
    "answer": 2,
    "explanation": "Condition (32 > 127) evaluates to false. Thus z is assigned to 127 - 11 which equals 116."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1698 % 36);?",
    "options": [
      "6",
      "0",
      "9",
      "47"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1698 / 36 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3180 % 32);?",
    "options": [
      "0",
      "12",
      "15",
      "99"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3180 / 32 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 82; int y = 12; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "102",
      "12",
      "62",
      "82"
    ],
    "answer": 0,
    "explanation": "Condition (82 > 12) evaluates to true. Thus z is assigned to 82 + 20 which equals 102."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 118; int y = 19; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "19",
      "140",
      "96",
      "118"
    ],
    "answer": 1,
    "explanation": "Condition (118 > 19) evaluates to true. Thus z is assigned to 118 + 22 which equals 140."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2004 % 29);?",
    "options": [
      "3",
      "0",
      "6",
      "69"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2004 / 29 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(53 & 41);",
    "options": [
      "31",
      "33",
      "36",
      "94"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 110101 and 101001 yields decimal 33."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(122 ^ 63);",
    "options": [
      "72",
      "67",
      "185",
      "69"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1111010 and 111111 yields decimal 69."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 45; int y = 115; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "82",
      "148",
      "115",
      "45"
    ],
    "answer": 0,
    "explanation": "Condition (45 > 115) evaluates to false. Thus z is assigned to 115 - 33 which equals 82."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 93; int y = 73; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "93",
      "105",
      "81",
      "73"
    ],
    "answer": 1,
    "explanation": "Condition (93 > 73) evaluates to true. Thus z is assigned to 93 + 12 which equals 105."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(82 | 85);",
    "options": [
      "87",
      "85",
      "90",
      "167"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1010010 and 1010101 yields decimal 87."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(355 % 12);?",
    "options": [
      "0",
      "10",
      "7",
      "29"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 355 / 12 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 55; int y = 186; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "157",
      "55",
      "215",
      "186"
    ],
    "answer": 0,
    "explanation": "Condition (55 > 186) evaluates to false. Thus z is assigned to 186 - 29 which equals 157."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 191; int y = 179; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "191",
      "167",
      "215",
      "179"
    ],
    "answer": 2,
    "explanation": "Condition (191 > 179) evaluates to true. Thus z is assigned to 191 + 24 which equals 215."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4978 % 39);?",
    "options": [
      "127",
      "0",
      "25",
      "28"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4978 / 39 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 169; int y = 203; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "183",
      "223",
      "169",
      "203"
    ],
    "answer": 0,
    "explanation": "Condition (169 > 203) evaluates to false. Thus z is assigned to 203 - 20 which equals 183."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 209; int y = 51; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "188",
      "209",
      "51",
      "230"
    ],
    "answer": 3,
    "explanation": "Condition (209 > 51) evaluates to true. Thus z is assigned to 209 + 21 which equals 230."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1964 % 54);?",
    "options": [
      "36",
      "23",
      "0",
      "20"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 1964 / 54 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(204 | 31);",
    "options": [
      "223",
      "226",
      "235",
      "221"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 11001100 and 11111 yields decimal 223."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 162; int y = 70; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "162",
      "70",
      "188",
      "136"
    ],
    "answer": 2,
    "explanation": "Condition (162 > 70) evaluates to true. Thus z is assigned to 162 + 26 which equals 188."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(17 | 5);",
    "options": [
      "21",
      "22",
      "24",
      "19"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10001 and 101 yields decimal 21."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4368 % 42);?",
    "options": [
      "104",
      "7",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4368 / 42 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(122 | 46);",
    "options": [
      "126",
      "124",
      "168",
      "129"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1111010 and 101110 yields decimal 126."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 160; int y = 192; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "166",
      "218",
      "192",
      "160"
    ],
    "answer": 0,
    "explanation": "Condition (160 > 192) evaluates to false. Thus z is assigned to 192 - 26 which equals 166."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(109 | 101);",
    "options": [
      "112",
      "210",
      "107",
      "109"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1101101 and 1100101 yields decimal 109."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(60 ^ 52);",
    "options": [
      "112",
      "6",
      "8",
      "11"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 111100 and 110100 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 183; int y = 114; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "163",
      "203",
      "114",
      "183"
    ],
    "answer": 1,
    "explanation": "Condition (183 > 114) evaluates to true. Thus z is assigned to 183 + 20 which equals 203."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(503 % 27);?",
    "options": [
      "20",
      "18",
      "0",
      "17"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 503 / 27 leaves remainder 17."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(191 | 99);",
    "options": [
      "290",
      "253",
      "258",
      "255"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10111111 and 1100011 yields decimal 255."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4533 % 23);?",
    "options": [
      "5",
      "0",
      "197",
      "2"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4533 / 23 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2635 % 11);?",
    "options": [
      "0",
      "6",
      "239",
      "9"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2635 / 11 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 97; int y = 16; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "16",
      "64",
      "97",
      "130"
    ],
    "answer": 3,
    "explanation": "Condition (97 > 16) evaluates to true. Thus z is assigned to 97 + 33 which equals 130."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 208; int y = 67; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "67",
      "216",
      "200",
      "208"
    ],
    "answer": 1,
    "explanation": "Condition (208 > 67) evaluates to true. Thus z is assigned to 208 + 8 which equals 216."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 169; int y = 205; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "227",
      "205",
      "183",
      "169"
    ],
    "answer": 2,
    "explanation": "Condition (169 > 205) evaluates to false. Thus z is assigned to 205 - 22 which equals 183."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 137; int y = 115; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "106",
      "115",
      "168",
      "137"
    ],
    "answer": 2,
    "explanation": "Condition (137 > 115) evaluates to true. Thus z is assigned to 137 + 31 which equals 168."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(147 ^ 100);",
    "options": [
      "247",
      "271",
      "245",
      "250"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10010011 and 1100100 yields decimal 247."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(142 ^ 73);",
    "options": [
      "197",
      "215",
      "199",
      "202"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10001110 and 1001001 yields decimal 199."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(138 | 27);",
    "options": [
      "155",
      "165",
      "153",
      "158"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10001010 and 11011 yields decimal 155."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 121; int y = 135; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "121",
      "113",
      "157",
      "135"
    ],
    "answer": 1,
    "explanation": "Condition (121 > 135) evaluates to false. Thus z is assigned to 135 - 22 which equals 113."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 165; int y = 97; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "97",
      "165",
      "186",
      "144"
    ],
    "answer": 2,
    "explanation": "Condition (165 > 97) evaluates to true. Thus z is assigned to 165 + 21 which equals 186."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 194; int y = 84; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "179",
      "84",
      "194",
      "209"
    ],
    "answer": 3,
    "explanation": "Condition (194 > 84) evaluates to true. Thus z is assigned to 194 + 15 which equals 209."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 73; int y = 163; int z = (x > y) ? x + 30 : y - 30;?",
    "options": [
      "73",
      "163",
      "133",
      "193"
    ],
    "answer": 2,
    "explanation": "Condition (73 > 163) evaluates to false. Thus z is assigned to 163 - 30 which equals 133."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 78; int y = 38; int z = (x > y) ? x + 33 : y - 33;?",
    "options": [
      "45",
      "111",
      "78",
      "38"
    ],
    "answer": 1,
    "explanation": "Condition (78 > 38) evaluates to true. Thus z is assigned to 78 + 33 which equals 111."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(165 | 98);",
    "options": [
      "234",
      "231",
      "263",
      "229"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10100101 and 1100010 yields decimal 231."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(139 ^ 28);",
    "options": [
      "154",
      "149",
      "151",
      "167"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 10001011 and 11100 yields decimal 151."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3821 % 13);?",
    "options": [
      "293",
      "15",
      "12",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3821 / 13 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 190; int y = 205; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "205",
      "190",
      "223",
      "187"
    ],
    "answer": 3,
    "explanation": "Condition (190 > 205) evaluates to false. Thus z is assigned to 205 - 18 which equals 187."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 54; int y = 157; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "170",
      "144",
      "157",
      "54"
    ],
    "answer": 1,
    "explanation": "Condition (54 > 157) evaluates to false. Thus z is assigned to 157 - 13 which equals 144."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(20 | 25);",
    "options": [
      "45",
      "27",
      "32",
      "29"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10100 and 11001 yields decimal 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 179; int y = 12; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "208",
      "12",
      "150",
      "179"
    ],
    "answer": 0,
    "explanation": "Condition (179 > 12) evaluates to true. Thus z is assigned to 179 + 29 which equals 208."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1833 % 44);?",
    "options": [
      "29",
      "41",
      "0",
      "32"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 1833 / 44 leaves remainder 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 205; int y = 47; int z = (x > y) ? x + 22 : y - 22;?",
    "options": [
      "205",
      "47",
      "227",
      "183"
    ],
    "answer": 2,
    "explanation": "Condition (205 > 47) evaluates to true. Thus z is assigned to 205 + 22 which equals 227."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(40 ^ 79);",
    "options": [
      "103",
      "106",
      "101",
      "119"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 101000 and 1001111 yields decimal 103."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(206 & 32);",
    "options": [
      "0",
      "-2",
      "238",
      "3"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11001110 and 100000 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(173 | 56);",
    "options": [
      "189",
      "229",
      "192",
      "187"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10101101 and 111000 yields decimal 189."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 185; int y = 100; int z = (x > y) ? x + 24 : y - 24;?",
    "options": [
      "100",
      "209",
      "161",
      "185"
    ],
    "answer": 1,
    "explanation": "Condition (185 > 100) evaluates to true. Thus z is assigned to 185 + 24 which equals 209."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(139 & 34);",
    "options": [
      "173",
      "5",
      "0",
      "2"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10001011 and 100010 yields decimal 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 83; int y = 43; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "109",
      "43",
      "57",
      "83"
    ],
    "answer": 0,
    "explanation": "Condition (83 > 43) evaluates to true. Thus z is assigned to 83 + 26 which equals 109."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 162; int y = 63; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "173",
      "162",
      "63",
      "151"
    ],
    "answer": 0,
    "explanation": "Condition (162 > 63) evaluates to true. Thus z is assigned to 162 + 11 which equals 173."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 88; int y = 164; int z = (x > y) ? x + 17 : y - 17;?",
    "options": [
      "181",
      "147",
      "164",
      "88"
    ],
    "answer": 1,
    "explanation": "Condition (88 > 164) evaluates to false. Thus z is assigned to 164 - 17 which equals 147."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(40 & 22);",
    "options": [
      "0",
      "-2",
      "62",
      "3"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 101000 and 10110 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(538 % 28);?",
    "options": [
      "19",
      "0",
      "6",
      "9"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 538 / 28 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(709 % 54);?",
    "options": [
      "7",
      "0",
      "13",
      "10"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 709 / 54 leaves remainder 7."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(40 ^ 50);",
    "options": [
      "24",
      "29",
      "90",
      "26"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 101000 and 110010 yields decimal 26."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 59; int y = 139; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "139",
      "171",
      "59",
      "107"
    ],
    "answer": 3,
    "explanation": "Condition (59 > 139) evaluates to false. Thus z is assigned to 139 - 32 which equals 107."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 172; int y = 108; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "172",
      "141",
      "108",
      "203"
    ],
    "answer": 3,
    "explanation": "Condition (172 > 108) evaluates to true. Thus z is assigned to 172 + 31 which equals 203."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4233 % 19);?",
    "options": [
      "15",
      "18",
      "0",
      "222"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4233 / 19 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(50 & 86);",
    "options": [
      "136",
      "18",
      "21",
      "16"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 110010 and 1010110 yields decimal 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(99 | 93);",
    "options": [
      "192",
      "127",
      "125",
      "130"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1100011 and 1011101 yields decimal 127."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1667 % 29);?",
    "options": [
      "0",
      "14",
      "57",
      "17"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1667 / 29 leaves remainder 14."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 163; int y = 10; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "10",
      "170",
      "163",
      "156"
    ],
    "answer": 1,
    "explanation": "Condition (163 > 10) evaluates to true. Thus z is assigned to 163 + 7 which equals 170."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(575 % 45);?",
    "options": [
      "12",
      "35",
      "38",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 575 / 45 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(100 ^ 85);",
    "options": [
      "52",
      "47",
      "185",
      "49"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 1100100 and 1010101 yields decimal 49."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2986 % 59);?",
    "options": [
      "39",
      "50",
      "0",
      "36"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2986 / 59 leaves remainder 36."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(137 ^ 62);",
    "options": [
      "186",
      "199",
      "181",
      "183"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10001001 and 111110 yields decimal 183."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3626 % 46);?",
    "options": [
      "78",
      "38",
      "0",
      "41"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 3626 / 46 leaves remainder 38."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(98 | 87);",
    "options": [
      "185",
      "117",
      "122",
      "119"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 1100010 and 1010111 yields decimal 119."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 119; int y = 132; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "132",
      "147",
      "119",
      "117"
    ],
    "answer": 3,
    "explanation": "Condition (119 > 132) evaluates to false. Thus z is assigned to 132 - 15 which equals 117."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(176 & 84);",
    "options": [
      "19",
      "14",
      "260",
      "16"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 10110000 and 1010100 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2716 % 18);?",
    "options": [
      "150",
      "0",
      "19",
      "16"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2716 / 18 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 93; int y = 25; int z = (x > y) ? x + 20 : y - 20;?",
    "options": [
      "25",
      "73",
      "93",
      "113"
    ],
    "answer": 3,
    "explanation": "Condition (93 > 25) evaluates to true. Thus z is assigned to 93 + 20 which equals 113."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(155 | 100);",
    "options": [
      "258",
      "253",
      "279",
      "255"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10011011 and 1100100 yields decimal 255."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2343 % 56);?",
    "options": [
      "41",
      "0",
      "47",
      "50"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2343 / 56 leaves remainder 47."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4286 % 43);?",
    "options": [
      "32",
      "0",
      "99",
      "29"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4286 / 43 leaves remainder 29."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 114; int y = 188; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "193",
      "188",
      "183",
      "114"
    ],
    "answer": 2,
    "explanation": "Condition (114 > 188) evaluates to false. Thus z is assigned to 188 - 5 which equals 183."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(538 % 48);?",
    "options": [
      "0",
      "11",
      "10",
      "13"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 538 / 48 leaves remainder 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(208 | 7);",
    "options": [
      "213",
      "218",
      "239",
      "215"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 11010000 and 111 yields decimal 215."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4906 % 56);?",
    "options": [
      "37",
      "0",
      "87",
      "34"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 4906 / 56 leaves remainder 34."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2484 % 37);?",
    "options": [
      "5",
      "67",
      "0",
      "8"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2484 / 37 leaves remainder 5."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(130 ^ 92);",
    "options": [
      "222",
      "220",
      "246",
      "225"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10000010 and 1011100 yields decimal 222."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 180; int y = 63; int z = (x > y) ? x + 12 : y - 12;?",
    "options": [
      "168",
      "180",
      "63",
      "192"
    ],
    "answer": 3,
    "explanation": "Condition (180 > 63) evaluates to true. Thus z is assigned to 180 + 12 which equals 192."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 118; int y = 18; int z = (x > y) ? x + 18 : y - 18;?",
    "options": [
      "136",
      "118",
      "100",
      "18"
    ],
    "answer": 0,
    "explanation": "Condition (118 > 18) evaluates to true. Thus z is assigned to 118 + 18 which equals 136."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(169 & 18);",
    "options": [
      "-2",
      "187",
      "0",
      "3"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10101001 and 10010 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5111 % 17);?",
    "options": [
      "11",
      "0",
      "300",
      "14"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 5111 / 17 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4404 % 18);?",
    "options": [
      "12",
      "0",
      "244",
      "15"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4404 / 18 leaves remainder 12."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(207 | 23);",
    "options": [
      "226",
      "230",
      "221",
      "223"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 11001111 and 10111 yields decimal 223."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(76 | 50);",
    "options": [
      "126",
      "124",
      "150",
      "129"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 1001100 and 110010 yields decimal 126."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2611 % 46);?",
    "options": [
      "35",
      "56",
      "0",
      "38"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 2611 / 46 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1330 % 37);?",
    "options": [
      "42",
      "0",
      "35",
      "38"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 1330 / 37 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(98 | 49);",
    "options": [
      "113",
      "115",
      "118",
      "147"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1100010 and 110001 yields decimal 115."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(204 ^ 77);",
    "options": [
      "281",
      "129",
      "127",
      "132"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 11001100 and 1001101 yields decimal 129."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2760 % 58);?",
    "options": [
      "0",
      "47",
      "34",
      "37"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 2760 / 58 leaves remainder 34."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 147; int y = 66; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "66",
      "147",
      "176",
      "118"
    ],
    "answer": 2,
    "explanation": "Condition (147 > 66) evaluates to true. Thus z is assigned to 147 + 29 which equals 176."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(27 & 29);",
    "options": [
      "23",
      "28",
      "56",
      "25"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 11011 and 11101 yields decimal 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(55 ^ 39);",
    "options": [
      "14",
      "94",
      "19",
      "16"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 110111 and 100111 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(23 & 27);",
    "options": [
      "19",
      "22",
      "50",
      "17"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10111 and 11011 yields decimal 19."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 107; int y = 86; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "102",
      "107",
      "112",
      "86"
    ],
    "answer": 2,
    "explanation": "Condition (107 > 86) evaluates to true. Thus z is assigned to 107 + 5 which equals 112."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3199 % 20);?",
    "options": [
      "0",
      "22",
      "159",
      "19"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3199 / 20 leaves remainder 19."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(30 & 42);",
    "options": [
      "10",
      "13",
      "8",
      "72"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11110 and 101010 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(187 & 35);",
    "options": [
      "33",
      "222",
      "35",
      "38"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 10111011 and 100011 yields decimal 35."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 146; int y = 187; int z = (x > y) ? x + 34 : y - 34;?",
    "options": [
      "187",
      "221",
      "146",
      "153"
    ],
    "answer": 3,
    "explanation": "Condition (146 > 187) evaluates to false. Thus z is assigned to 187 - 34 which equals 153."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(338 % 20);?",
    "options": [
      "16",
      "21",
      "18",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 338 / 20 leaves remainder 18."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(98 ^ 72);",
    "options": [
      "45",
      "42",
      "170",
      "40"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 1100010 and 1001000 yields decimal 42."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(145 | 78);",
    "options": [
      "247",
      "226",
      "221",
      "223"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10010001 and 1001110 yields decimal 223."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 105; int y = 187; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "105",
      "155",
      "219",
      "187"
    ],
    "answer": 1,
    "explanation": "Condition (105 > 187) evaluates to false. Thus z is assigned to 187 - 32 which equals 155."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 44; int y = 102; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "44",
      "102",
      "75",
      "129"
    ],
    "answer": 2,
    "explanation": "Condition (44 > 102) evaluates to false. Thus z is assigned to 102 - 27 which equals 75."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(57 & 24);",
    "options": [
      "27",
      "22",
      "81",
      "24"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 111001 and 11000 yields decimal 24."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(56 & 66);",
    "options": [
      "122",
      "-2",
      "3",
      "0"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 111000 and 1000010 yields decimal 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(51 ^ 23);",
    "options": [
      "74",
      "36",
      "34",
      "39"
    ],
    "answer": 1,
    "explanation": "Applying bitwise ^ between binary 110011 and 10111 yields decimal 36."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(200 & 42);",
    "options": [
      "8",
      "6",
      "242",
      "11"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 11001000 and 101010 yields decimal 8."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 197; int y = 72; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "223",
      "171",
      "72",
      "197"
    ],
    "answer": 0,
    "explanation": "Condition (197 > 72) evaluates to true. Thus z is assigned to 197 + 26 which equals 223."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4296 % 38);?",
    "options": [
      "0",
      "2",
      "5",
      "113"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4296 / 38 leaves remainder 2."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 171; int y = 40; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "145",
      "171",
      "40",
      "197"
    ],
    "answer": 3,
    "explanation": "Condition (171 > 40) evaluates to true. Thus z is assigned to 171 + 26 which equals 197."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(112 ^ 33);",
    "options": [
      "81",
      "84",
      "79",
      "145"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1110000 and 100001 yields decimal 81."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(190 | 73);",
    "options": [
      "263",
      "255",
      "258",
      "253"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 10111110 and 1001001 yields decimal 255."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(47 | 63);",
    "options": [
      "61",
      "110",
      "63",
      "66"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 101111 and 111111 yields decimal 63."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(635 % 50);?",
    "options": [
      "12",
      "35",
      "38",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 635 / 50 leaves remainder 35."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 114; int y = 152; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "114",
      "152",
      "129",
      "175"
    ],
    "answer": 2,
    "explanation": "Condition (114 > 152) evaluates to false. Thus z is assigned to 152 - 23 which equals 129."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 84; int y = 104; int z = (x > y) ? x + 26 : y - 26;?",
    "options": [
      "78",
      "130",
      "104",
      "84"
    ],
    "answer": 0,
    "explanation": "Condition (84 > 104) evaluates to false. Thus z is assigned to 104 - 26 which equals 78."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 77; int y = 101; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "76",
      "101",
      "77",
      "126"
    ],
    "answer": 0,
    "explanation": "Condition (77 > 101) evaluates to false. Thus z is assigned to 101 - 25 which equals 76."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4988 % 27);?",
    "options": [
      "184",
      "23",
      "20",
      "0"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 4988 / 27 leaves remainder 20."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(145 ^ 82);",
    "options": [
      "195",
      "227",
      "198",
      "193"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 10010001 and 1010010 yields decimal 195."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2289 % 22);?",
    "options": [
      "0",
      "1",
      "104",
      "4"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2289 / 22 leaves remainder 1."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(90 | 82);",
    "options": [
      "88",
      "172",
      "90",
      "93"
    ],
    "answer": 2,
    "explanation": "Applying bitwise | between binary 1011010 and 1010010 yields decimal 90."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 152; int y = 81; int z = (x > y) ? x + 6 : y - 6;?",
    "options": [
      "81",
      "152",
      "158",
      "146"
    ],
    "answer": 2,
    "explanation": "Condition (152 > 81) evaluates to true. Thus z is assigned to 152 + 6 which equals 158."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 209; int y = 58; int z = (x > y) ? x + 23 : y - 23;?",
    "options": [
      "209",
      "58",
      "186",
      "232"
    ],
    "answer": 3,
    "explanation": "Condition (209 > 58) evaluates to true. Thus z is assigned to 209 + 23 which equals 232."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 173; int y = 120; int z = (x > y) ? x + 29 : y - 29;?",
    "options": [
      "173",
      "120",
      "202",
      "144"
    ],
    "answer": 2,
    "explanation": "Condition (173 > 120) evaluates to true. Thus z is assigned to 173 + 29 which equals 202."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2160 % 10);?",
    "options": [
      "3",
      "0",
      "216",
      "7"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 2160 / 10 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 198; int y = 190; int z = (x > y) ? x + 21 : y - 21;?",
    "options": [
      "177",
      "190",
      "219",
      "198"
    ],
    "answer": 2,
    "explanation": "Condition (198 > 190) evaluates to true. Thus z is assigned to 198 + 21 which equals 219."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(183 | 11);",
    "options": [
      "191",
      "194",
      "194",
      "189"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10110111 and 1011 yields decimal 191."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(209 & 35);",
    "options": [
      "4",
      "-1",
      "244",
      "1"
    ],
    "answer": 3,
    "explanation": "Applying bitwise & between binary 11010001 and 100011 yields decimal 1."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3503 % 58);?",
    "options": [
      "26",
      "0",
      "23",
      "60"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3503 / 58 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 90; int y = 170; int z = (x > y) ? x + 10 : y - 10;?",
    "options": [
      "170",
      "90",
      "180",
      "160"
    ],
    "answer": 3,
    "explanation": "Condition (90 > 170) evaluates to false. Thus z is assigned to 170 - 10 which equals 160."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(14 | 28);",
    "options": [
      "42",
      "30",
      "33",
      "28"
    ],
    "answer": 1,
    "explanation": "Applying bitwise | between binary 1110 and 11100 yields decimal 30."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(2499 % 36);?",
    "options": [
      "18",
      "0",
      "69",
      "15"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 2499 / 36 leaves remainder 15."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 82; int y = 169; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "142",
      "196",
      "82",
      "169"
    ],
    "answer": 0,
    "explanation": "Condition (82 > 169) evaluates to false. Thus z is assigned to 169 - 27 which equals 142."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3138 % 21);?",
    "options": [
      "12",
      "0",
      "9",
      "149"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 3138 / 21 leaves remainder 9."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5085 % 33);?",
    "options": [
      "3",
      "6",
      "154",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 5085 / 33 leaves remainder 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1015 % 54);?",
    "options": [
      "0",
      "43",
      "18",
      "46"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1015 / 54 leaves remainder 43."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(18 ^ 68);",
    "options": [
      "84",
      "89",
      "110",
      "86"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10010 and 1000100 yields decimal 86."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 114; int y = 201; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "201",
      "208",
      "114",
      "194"
    ],
    "answer": 3,
    "explanation": "Condition (114 > 201) evaluates to false. Thus z is assigned to 201 - 7 which equals 194."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 124; int y = 73; int z = (x > y) ? x + 8 : y - 8;?",
    "options": [
      "116",
      "132",
      "73",
      "124"
    ],
    "answer": 1,
    "explanation": "Condition (124 > 73) evaluates to true. Thus z is assigned to 124 + 8 which equals 132."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(105 ^ 63);",
    "options": [
      "86",
      "168",
      "84",
      "89"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1101001 and 111111 yields decimal 86."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 125; int y = 86; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "130",
      "120",
      "86",
      "125"
    ],
    "answer": 0,
    "explanation": "Condition (125 > 86) evaluates to true. Thus z is assigned to 125 + 5 which equals 130."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(103 ^ 32);",
    "options": [
      "71",
      "69",
      "74",
      "135"
    ],
    "answer": 0,
    "explanation": "Applying bitwise ^ between binary 1100111 and 100000 yields decimal 71."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4997 % 50);?",
    "options": [
      "47",
      "99",
      "50",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4997 / 50 leaves remainder 47."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(191 & 56);",
    "options": [
      "56",
      "247",
      "54",
      "59"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 10111111 and 111000 yields decimal 56."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(208 & 24);",
    "options": [
      "232",
      "19",
      "16",
      "14"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 11010000 and 11000 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 207; int y = 35; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "207",
      "235",
      "35",
      "179"
    ],
    "answer": 1,
    "explanation": "Condition (207 > 35) evaluates to true. Thus z is assigned to 207 + 28 which equals 235."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4783 % 40);?",
    "options": [
      "26",
      "23",
      "119",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 4783 / 40 leaves remainder 23."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 82; int y = 135; int z = (x > y) ? x + 31 : y - 31;?",
    "options": [
      "82",
      "104",
      "135",
      "166"
    ],
    "answer": 1,
    "explanation": "Condition (82 > 135) evaluates to false. Thus z is assigned to 135 - 31 which equals 104."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 190; int y = 72; int z = (x > y) ? x + 27 : y - 27;?",
    "options": [
      "163",
      "72",
      "217",
      "190"
    ],
    "answer": 2,
    "explanation": "Condition (190 > 72) evaluates to true. Thus z is assigned to 190 + 27 which equals 217."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(60 & 16);",
    "options": [
      "76",
      "16",
      "19",
      "14"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 111100 and 10000 yields decimal 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 208; int y = 94; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "233",
      "94",
      "208",
      "183"
    ],
    "answer": 0,
    "explanation": "Condition (208 > 94) evaluates to true. Thus z is assigned to 208 + 25 which equals 233."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(4446 % 26);?",
    "options": [
      "0",
      "171",
      "7",
      "3"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 4446 / 26 leaves remainder 0."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(170 | 71);",
    "options": [
      "242",
      "241",
      "237",
      "239"
    ],
    "answer": 3,
    "explanation": "Applying bitwise | between binary 10101010 and 1000111 yields decimal 239."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 77; int y = 116; int z = (x > y) ? x + 19 : y - 19;?",
    "options": [
      "97",
      "77",
      "116",
      "135"
    ],
    "answer": 0,
    "explanation": "Condition (77 > 116) evaluates to false. Thus z is assigned to 116 - 19 which equals 97."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 80; int y = 155; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "180",
      "155",
      "130",
      "80"
    ],
    "answer": 2,
    "explanation": "Condition (80 > 155) evaluates to false. Thus z is assigned to 155 - 25 which equals 130."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 32; int y = 19; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "32",
      "21",
      "19",
      "43"
    ],
    "answer": 3,
    "explanation": "Condition (32 > 19) evaluates to true. Thus z is assigned to 32 + 11 which equals 43."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 96; int y = 183; int z = (x > y) ? x + 5 : y - 5;?",
    "options": [
      "183",
      "188",
      "96",
      "178"
    ],
    "answer": 3,
    "explanation": "Condition (96 > 183) evaluates to false. Thus z is assigned to 183 - 5 which equals 178."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(1873 % 33);?",
    "options": [
      "56",
      "25",
      "28",
      "0"
    ],
    "answer": 1,
    "explanation": "Modulo operator (%) returns the division remainder: 1873 / 33 leaves remainder 25."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(123 & 91);",
    "options": [
      "94",
      "91",
      "89",
      "214"
    ],
    "answer": 1,
    "explanation": "Applying bitwise & between binary 1111011 and 1011011 yields decimal 91."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(129 ^ 53);",
    "options": [
      "178",
      "183",
      "182",
      "180"
    ],
    "answer": 3,
    "explanation": "Applying bitwise ^ between binary 10000001 and 110101 yields decimal 180."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(140 | 91);",
    "options": [
      "223",
      "221",
      "226",
      "231"
    ],
    "answer": 0,
    "explanation": "Applying bitwise | between binary 10001100 and 1011011 yields decimal 223."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 103; int y = 111; int z = (x > y) ? x + 14 : y - 14;?",
    "options": [
      "103",
      "125",
      "111",
      "97"
    ],
    "answer": 3,
    "explanation": "Condition (103 > 111) evaluates to false. Thus z is assigned to 111 - 14 which equals 97."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 137; int y = 149; int z = (x > y) ? x + 11 : y - 11;?",
    "options": [
      "160",
      "149",
      "137",
      "138"
    ],
    "answer": 3,
    "explanation": "Condition (137 > 149) evaluates to false. Thus z is assigned to 149 - 11 which equals 138."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 103; int y = 91; int z = (x > y) ? x + 25 : y - 25;?",
    "options": [
      "78",
      "128",
      "91",
      "103"
    ],
    "answer": 1,
    "explanation": "Condition (103 > 91) evaluates to true. Thus z is assigned to 103 + 25 which equals 128."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(74 & 58);",
    "options": [
      "8",
      "13",
      "10",
      "132"
    ],
    "answer": 2,
    "explanation": "Applying bitwise & between binary 1001010 and 111010 yields decimal 10."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(15 ^ 12);",
    "options": [
      "1",
      "27",
      "3",
      "6"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1111 and 1100 yields decimal 3."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(221 % 43);?",
    "options": [
      "0",
      "9",
      "6",
      "5"
    ],
    "answer": 2,
    "explanation": "Modulo operator (%) returns the division remainder: 221 / 43 leaves remainder 6."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 122; int y = 146; int z = (x > y) ? x + 13 : y - 13;?",
    "options": [
      "133",
      "122",
      "159",
      "146"
    ],
    "answer": 0,
    "explanation": "Condition (122 > 146) evaluates to false. Thus z is assigned to 146 - 13 which equals 133."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(112 ^ 69);",
    "options": [
      "51",
      "56",
      "53",
      "181"
    ],
    "answer": 2,
    "explanation": "Applying bitwise ^ between binary 1110000 and 1000101 yields decimal 53."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 167; int y = 120; int z = (x > y) ? x + 7 : y - 7;?",
    "options": [
      "174",
      "167",
      "160",
      "120"
    ],
    "answer": 0,
    "explanation": "Condition (167 > 120) evaluates to true. Thus z is assigned to 167 + 7 which equals 174."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 25; int y = 90; int z = (x > y) ? x + 28 : y - 28;?",
    "options": [
      "90",
      "118",
      "25",
      "62"
    ],
    "answer": 3,
    "explanation": "Condition (25 > 90) evaluates to false. Thus z is assigned to 90 - 28 which equals 62."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 179; int y = 29; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "147",
      "211",
      "179",
      "29"
    ],
    "answer": 1,
    "explanation": "Condition (179 > 29) evaluates to true. Thus z is assigned to 179 + 32 which equals 211."
  },
  {
    "subject": "Java",
    "topic": "Bitwise Operators",
    "difficulty": "Medium",
    "question": "What will be the output of following statement in Java? System.out.println(124 & 36);",
    "options": [
      "36",
      "34",
      "160",
      "39"
    ],
    "answer": 0,
    "explanation": "Applying bitwise & between binary 1111100 and 100100 yields decimal 36."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(3032 % 19);?",
    "options": [
      "14",
      "159",
      "0",
      "11"
    ],
    "answer": 3,
    "explanation": "Modulo operator (%) returns the division remainder: 3032 / 19 leaves remainder 11."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 24; int y = 58; int z = (x > y) ? x + 15 : y - 15;?",
    "options": [
      "58",
      "24",
      "73",
      "43"
    ],
    "answer": 3,
    "explanation": "Condition (24 > 58) evaluates to false. Thus z is assigned to 58 - 15 which equals 43."
  },
  {
    "subject": "Java",
    "topic": "Java Operators",
    "difficulty": "Easy",
    "question": "What is the printed output of the Java expression: System.out.println(5026 % 30);?",
    "options": [
      "16",
      "167",
      "19",
      "0"
    ],
    "answer": 0,
    "explanation": "Modulo operator (%) returns the division remainder: 5026 / 30 leaves remainder 16."
  },
  {
    "subject": "Java",
    "topic": "Ternary Operator",
    "difficulty": "Medium",
    "question": "In Java, what is the value of variable 'z' after execution of: int x = 37; int y = 148; int z = (x > y) ? x + 32 : y - 32;?",
    "options": [
      "37",
      "180",
      "148",
      "116"
    ],
    "answer": 3,
    "explanation": "Condition (37 > 148) evaluates to false. Thus z is assigned to 148 - 32 which equals 116."
  }
];
