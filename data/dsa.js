window.quizData = window.quizData || {};
window.quizData.dsa = [
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Binary search halves the search space each step."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort?",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What does Big O notation describe?",
    "options": [
      "Lower bound",
      "Exact growth",
      "Upper bound of growth rate",
      "Average case only"
    ],
    "answer": 2,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of accessing an array element by index?",
    "options": [
      "O(1)",
      "O(n²)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "Array access is constant time via direct addressing."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = T(n-1) + n",
      "T(n) = n!",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Omega represents?",
    "options": [
      "Upper bound",
      "Average case",
      "Tight bound",
      "Lower bound"
    ],
    "answer": 3,
    "explanation": "Ω notation gives the best-case lower bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Theta represents?",
    "options": [
      "No bound",
      "Lower bound only",
      "Tight bound",
      "Upper bound only"
    ],
    "answer": 2,
    "explanation": "Θ gives both upper and lower bounds."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the best case time complexity of insertion sort?",
    "options": [
      "O(n²)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "Already sorted array needs only one pass."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is amortized analysis?",
    "options": [
      "Space analysis",
      "Best case only",
      "Average cost per operation over a sequence",
      "Worst case only"
    ],
    "answer": 2,
    "explanation": "Amortized analysis averages cost across operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort?",
    "options": [
      "T(n) = T(n/2) + O(1)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = T(n-1) + O(n)",
      "T(n) = nT(n/2)"
    ],
    "answer": 1,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(n log n)",
      "O(2^n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)?",
    "options": [
      "O(n²)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "Recursion stack depth is log n on average."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same?",
    "options": [
      "Big O",
      "Little o",
      "Theta (Θ)",
      "Big Omega"
    ],
    "answer": 2,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Two Sum problem is best solved using?",
    "options": [
      "Sorting",
      "HashMap",
      "Stack",
      "Binary Search Tree"
    ],
    "answer": 1,
    "explanation": "HashMap gives O(1) lookup for complement."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Shortest path",
      "Sorting",
      "String matching",
      "Maximum subarray sum"
    ],
    "answer": 3,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Sliding window technique is used for?",
    "options": [
      "Tree balancing",
      "Graph traversal",
      "Subarray/substring problems with constraints",
      "Sorting"
    ],
    "answer": 2,
    "explanation": "Sliding window maintains a dynamic range."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Four",
      "Two",
      "Five",
      "Three"
    ],
    "answer": 3,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal?",
    "options": [
      "O(n*k)",
      "O(k)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Sorting status",
      "Graph connectivity",
      "Minimum element",
      "Range sum queries"
    ],
    "answer": 3,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Best Time to Buy Stock uses which pattern?",
    "options": [
      "Sliding window",
      "Two pointers",
      "Binary search",
      "Track minimum and max profit"
    ],
    "answer": 3,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Move Zeroes problem moves zeros to?",
    "options": [
      "Sorted position",
      "End of array",
      "Middle",
      "Beginning"
    ],
    "answer": 1,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Product of Array Except Self avoids division by using?",
    "options": [
      "Stack",
      "Sorting",
      "Left and right product arrays",
      "Queue"
    ],
    "answer": 2,
    "explanation": "Multiply prefix and suffix products."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Merge Intervals first step is?",
    "options": [
      "Use a stack",
      "Sort by start time",
      "Sort by end time",
      "Build a tree"
    ],
    "answer": 1,
    "explanation": "Sorting by start allows sequential merging."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Two pointer technique works best on?",
    "options": [
      "Trees",
      "Graphs",
      "Sorted arrays",
      "Heaps"
    ],
    "answer": 2,
    "explanation": "Two pointers converge from both ends of sorted data."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What does the sliding window technique maintain?",
    "options": [
      "A balanced tree",
      "A window of elements satisfying a condition",
      "A priority queue",
      "A sorted subarray"
    ],
    "answer": 1,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "KMP algorithm's time complexity for pattern matching?",
    "options": [
      "O(n+m)",
      "O(n*m)",
      "O(m²)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "KMP uses failure function to avoid re-scanning."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Rabin-Karp uses what technique?",
    "options": [
      "Greedy",
      "Backtracking",
      "Dynamic programming",
      "Hashing"
    ],
    "answer": 3,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Checking if two strings are anagrams requires?",
    "options": [
      "Regular expressions",
      "Substring search",
      "Character frequency comparison",
      "Sorting only"
    ],
    "answer": 2,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "A palindrome reads the same?",
    "options": [
      "Only backward",
      "Diagonally",
      "Forward and backward",
      "Only forward"
    ],
    "answer": 2,
    "explanation": "Palindromes are symmetric strings."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "StringBuilder in Java is preferred over String for?",
    "options": [
      "Hashing",
      "Read-only access",
      "Frequent modifications (mutable)",
      "Sorting"
    ],
    "answer": 2,
    "explanation": "StringBuilder avoids creating new String objects."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Time complexity to check if a string is palindrome?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Compare characters from both ends in one pass."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Frequency count of characters uses?",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Array of size 26 or HashMap"
    ],
    "answer": 3,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Longest palindromic substring can be found in?",
    "options": [
      "O(n)",
      "O(n³)",
      "O(log n)",
      "O(n²) using expand around center"
    ],
    "answer": 3,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Queue",
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only"
    ],
    "answer": 1,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Reversing a singly linked list takes?",
    "options": [
      "O(n) space",
      "O(n) time, O(1) space",
      "O(log n) time",
      "O(n²) time"
    ],
    "answer": 1,
    "explanation": "Iterate once, reversing pointers in-place."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Middle of linked list found using?",
    "options": [
      "Recursion",
      "Slow and fast pointer",
      "Stack",
      "Counting then traversing"
    ],
    "answer": 1,
    "explanation": "When fast reaches end, slow is at middle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Merge two sorted linked lists time complexity?",
    "options": [
      "O(log(n+m))",
      "O(n*m)",
      "O(n+m)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Compare heads and merge in single pass."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Doubly linked list advantage over singly?",
    "options": [
      "Simpler implementation",
      "Faster access by index",
      "Traversal in both directions",
      "Less memory"
    ],
    "answer": 2,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Circular linked list last node points to?",
    "options": [
      "Previous node",
      "First node (head)",
      "Itself",
      "NULL"
    ],
    "answer": 1,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Stack",
      "Sorting",
      "Length difference or two-pointer approach",
      "Queue"
    ],
    "answer": 2,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Remove Nth node from end uses?",
    "options": [
      "Stack of size N",
      "Binary search",
      "Two pointers with N gap",
      "Reverse list"
    ],
    "answer": 2,
    "explanation": "Fast pointer leads by N, both advance until fast reaches end."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack follows which principle?",
    "options": [
      "FIFO",
      "LIFO (Last In First Out)",
      "LILO",
      "Random access"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Balanced parentheses checking uses?",
    "options": [
      "Array",
      "Tree",
      "Stack",
      "Queue"
    ],
    "answer": 2,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Monotonic stack is used for?",
    "options": [
      "String matching",
      "Sorting",
      "Next greater/smaller element problems",
      "BFS"
    ],
    "answer": 2,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Infix to postfix conversion uses?",
    "options": [
      "Stack for operators",
      "Linked list",
      "Tree",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Operators are pushed/popped based on precedence."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Stack memory is exhausted (e.g., deep recursion)",
      "Array is sorted",
      "Queue is full",
      "Heap is full"
    ],
    "answer": 0,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Postfix expression evaluation uses?",
    "options": [
      "Queue",
      "Tree",
      "Stack for operands",
      "Two stacks"
    ],
    "answer": 2,
    "explanation": "Push operands, pop two for each operator."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Queue follows which principle?",
    "options": [
      "LIFO",
      "Priority",
      "Random access",
      "FIFO (First In First Out)"
    ],
    "answer": 3,
    "explanation": "First element enqueued is first dequeued."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Searching",
      "Balancing",
      "Wasted space in linear queue"
    ],
    "answer": 3,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at?",
    "options": [
      "Middle only",
      "Only rear",
      "Both front and rear",
      "Only front"
    ],
    "answer": 2,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Priority queue is typically implemented using?",
    "options": [
      "Stack",
      "Array",
      "Linked list",
      "Heap (binary heap)"
    ],
    "answer": 3,
    "explanation": "Heap gives O(log n) insert and extract-min/max."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "BFS graph traversal uses?",
    "options": [
      "Queue",
      "Priority queue",
      "Stack",
      "Deque"
    ],
    "answer": 0,
    "explanation": "BFS explores level by level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Time complexity of enqueue in circular queue?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "HashMap provides average case lookup of?",
    "options": [
      "O(n)",
      "O(n²)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "Hash function maps key directly to bucket."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Collision in hashing means?",
    "options": [
      "Two keys map to same index",
      "Duplicate keys",
      "Key not found",
      "Hash table is full"
    ],
    "answer": 0,
    "explanation": "Different keys producing same hash cause collision."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using?",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Open addressing resolves collisions by?",
    "options": [
      "Ignoring collision",
      "Using linked lists",
      "Probing for next empty slot",
      "Creating new table"
    ],
    "answer": 2,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Rehashing is triggered when?",
    "options": [
      "Load factor exceeds threshold",
      "Table is empty",
      "After deletion only",
      "First insertion"
    ],
    "answer": 0,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "HashSet stores?",
    "options": [
      "Unique elements only",
      "Key-value pairs",
      "Duplicates allowed",
      "Sorted elements"
    ],
    "answer": 0,
    "explanation": "HashSet rejects duplicate entries."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "What is a good hash function property?",
    "options": [
      "Returns key itself",
      "Uniform distribution of keys",
      "Ignores input",
      "Always returns 0"
    ],
    "answer": 1,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Sorted ascending order",
      "Random order",
      "Level order",
      "Descending order"
    ],
    "answer": 0,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Height of a balanced BST with n nodes?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n²)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Balanced tree has logarithmic height."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "AVL tree maintains balance by?",
    "options": [
      "Sorting nodes",
      "Rebuilding tree",
      "Using extra array",
      "Rotations after insert/delete"
    ],
    "answer": 3,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Binary tree maximum path sum problem uses?",
    "options": [
      "Greedy",
      "BFS",
      "Recursion with global max tracking",
      "Sorting"
    ],
    "answer": 2,
    "explanation": "At each node, compute max path through it."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Preorder traversal visits?",
    "options": [
      "Left, Root, Right",
      "Root, Left, Right",
      "Right, Root, Left",
      "Left, Right, Root"
    ],
    "answer": 1,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Postorder traversal visits?",
    "options": [
      "Root, Left, Right",
      "Left, Root, Right",
      "Left, Right, Root",
      "Right, Left, Root"
    ],
    "answer": 2,
    "explanation": "Post = root last, after children."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Level order traversal uses?",
    "options": [
      "Stack",
      "Recursion only",
      "Queue (BFS)",
      "Sorting"
    ],
    "answer": 2,
    "explanation": "Process nodes level by level using queue."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Diameter of binary tree is?",
    "options": [
      "Number of leaves",
      "Longest path between any two nodes",
      "Height of tree",
      "Root to deepest node"
    ],
    "answer": 1,
    "explanation": "Diameter = max of left height + right height at each node."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Segment tree is used for?",
    "options": [
      "Range queries and updates efficiently",
      "Sorting",
      "String matching",
      "Graph traversal"
    ],
    "answer": 0,
    "explanation": "Segment tree handles range sum/min/max in O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Greater than or equal to children",
      "Equal to children",
      "Less than children"
    ],
    "answer": 1,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "BST search time complexity (balanced)?",
    "options": [
      "O(n²)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Balanced BST halves search space each step."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "BFS uses which data structure?",
    "options": [
      "Heap",
      "Queue",
      "Stack",
      "Array"
    ],
    "answer": 1,
    "explanation": "BFS explores neighbors level-by-level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "DFS uses which data structure?",
    "options": [
      "Heap",
      "Queue",
      "Stack (or recursion)",
      "Array"
    ],
    "answer": 2,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Dijkstra's algorithm fails with?",
    "options": [
      "Undirected graphs",
      "Dense graphs",
      "Negative edge weights",
      "Positive weights"
    ],
    "answer": 2,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Topological sort applies to?",
    "options": [
      "Undirected graphs",
      "Directed Acyclic Graphs (DAG)",
      "Cyclic graphs",
      "Weighted graphs only"
    ],
    "answer": 1,
    "explanation": "Topological ordering requires no cycles."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Union-Find is used in?",
    "options": [
      "String matching",
      "BFS",
      "Kruskal's MST and cycle detection",
      "Shortest path"
    ],
    "answer": 2,
    "explanation": "Union-Find efficiently tracks connected components."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Bellman-Ford handles?",
    "options": [
      "Only trees",
      "Negative edge weights",
      "Only positive weights",
      "Only undirected"
    ],
    "answer": 1,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Greedy MST using sorted edges",
      "Dynamic programming",
      "Divide and conquer",
      "BFS-based"
    ],
    "answer": 0,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Prim's algorithm starts from?",
    "options": [
      "Any single vertex",
      "All vertices",
      "Leaf node",
      "Heaviest edge"
    ],
    "answer": 0,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Floyd-Warshall finds?",
    "options": [
      "Topological order",
      "MST",
      "All-pairs shortest paths",
      "Single-source shortest path"
    ],
    "answer": 2,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Cycle detection in undirected graph uses?",
    "options": [
      "Topological sort",
      "Dijkstra",
      "BFS only",
      "DFS with parent tracking or Union-Find"
    ],
    "answer": 3,
    "explanation": "Back edge to non-parent indicates cycle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(E)",
      "O(V)",
      "O(V+E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Adjacency list space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(V²)",
      "O(E²)"
    ],
    "answer": 1,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Memoization is?",
    "options": [
      "Bottom-up approach",
      "Greedy",
      "Brute force",
      "Top-down DP with caching"
    ],
    "answer": 3,
    "explanation": "Store results of subproblems to avoid recomputation."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Tabulation is?",
    "options": [
      "Backtracking",
      "Bottom-up DP using table",
      "Recursion",
      "Top-down approach"
    ],
    "answer": 1,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "0/1 Knapsack time complexity?",
    "options": [
      "O(n*W)",
      "O(n log n)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "DP table of items × capacity."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(2^n)",
      "O(m+n)",
      "O(m*n)",
      "O(m²)"
    ],
    "answer": 2,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Coin Change problem (min coins) is solved by?",
    "options": [
      "Greedy always",
      "DP (unbounded knapsack variant)",
      "BFS only",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Try each coin, take minimum."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Matrix Chain Multiplication optimizes?",
    "options": [
      "Order of matrix multiplications",
      "Matrix dimensions",
      "Matrix values",
      "Matrix sorting"
    ],
    "answer": 0,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "DP on grids typically moves?",
    "options": [
      "Up only",
      "Diagonally only",
      "All 8 directions",
      "Right and down"
    ],
    "answer": 3,
    "explanation": "Grid DP usually considers right/down movements."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Optimal substructure means?",
    "options": [
      "Only greedy works",
      "Random solutions work",
      "Optimal solution contains optimal sub-solutions",
      "Problem has no solution"
    ],
    "answer": 2,
    "explanation": "Key property enabling DP approach."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Overlapping subproblems means?",
    "options": [
      "No subproblems exist",
      "Linear scan suffices",
      "Same subproblems are solved multiple times",
      "Each subproblem is unique"
    ],
    "answer": 2,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by?",
    "options": [
      "Random",
      "Maximum duration",
      "Latest start",
      "Earliest finish time"
    ],
    "answer": 3,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Fractional knapsack allows?",
    "options": [
      "Negative weights",
      "Taking fractions of items",
      "Only whole items",
      "No items"
    ],
    "answer": 1,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Huffman coding builds?",
    "options": [
      "Optimal prefix-free binary tree",
      "Balanced BST",
      "Graph",
      "Hash table"
    ],
    "answer": 0,
    "explanation": "Greedy: merge two lowest-frequency nodes."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Minimum cost",
      "Total profit",
      "Number of jobs",
      "Total time"
    ],
    "answer": 1,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Minimum platforms problem uses?",
    "options": [
      "Queue",
      "Binary search",
      "Sorting arrival/departure times",
      "Stack"
    ],
    "answer": 2,
    "explanation": "Sort and count overlapping intervals."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Greedy algorithms guarantee optimal solution when?",
    "options": [
      "Only for sorting",
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold"
    ],
    "answer": 3,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "No two queens attack each other",
      "All queens are in one row",
      "Queens are adjacent",
      "Queens form diagonal"
    ],
    "answer": 0,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Sudoku solver uses?",
    "options": [
      "BFS",
      "Backtracking with constraint checking",
      "Greedy",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Try digits 1-9, backtrack if constraint violated."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using?",
    "options": [
      "Dynamic programming",
      "Sorting",
      "Recursion and backtracking",
      "BFS only"
    ],
    "answer": 2,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Generating all permutations uses?",
    "options": [
      "Hashing",
      "Swap-based backtracking",
      "Sorting",
      "Queue"
    ],
    "answer": 1,
    "explanation": "Swap elements, recurse, then swap back."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Combination Sum allows?",
    "options": [
      "Reusing elements to reach target",
      "Each element used once",
      "Sorting only",
      "Negative numbers"
    ],
    "answer": 0,
    "explanation": "Include current element again or move to next."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "Exponential",
      "O(n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives?",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "Complement",
      "1",
      "The number itself"
    ],
    "answer": 3,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Check if number is power of 2 using?",
    "options": [
      "n % 2 == 0",
      "n & (n-1) == 0",
      "n >> 1 == 0",
      "n | 1 == n"
    ],
    "answer": 1,
    "explanation": "Power of 2 has single set bit; n&(n-1) clears it."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Left shift by 1 is equivalent to?",
    "options": [
      "Divide by 2",
      "Multiply by 2",
      "Add 1",
      "Subtract 1"
    ],
    "answer": 1,
    "explanation": "Shifting bits left doubles the value."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "XOR with 1",
      "Divide by 2 (integer division)",
      "Multiply by 2"
    ],
    "answer": 2,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Bit masking is used for?",
    "options": [
      "Graph traversal",
      "Sorting",
      "String matching",
      "Extracting or setting specific bits"
    ],
    "answer": 3,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Trie is best for?",
    "options": [
      "Sorting numbers",
      "Prefix-based string operations",
      "Matrix operations",
      "Graph traversal"
    ],
    "answer": 1,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Disjoint Set Union find uses?",
    "options": [
      "Sorting",
      "Hashing",
      "BFS",
      "Path compression and union by rank"
    ],
    "answer": 3,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Fenwick tree (BIT) supports?",
    "options": [
      "Graph BFS",
      "Point updates and prefix sum queries",
      "String matching",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Segment tree range query time?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Tree structure allows logarithmic range operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Queue?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Min Heap?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Queue?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Array (sorted)?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Deletion under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a BST?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For BST, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Stack?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Stack?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Queue?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Stack?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (sorted)?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Singly Linked List?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Doubly Linked List?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Max Heap?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a BST?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Array (unsorted)?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Deletion under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Queue?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Red-Black Tree?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Red-Black Tree, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Queue?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Stack?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a BST?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Doubly Linked List?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Stack?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Stack?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Search under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a BST?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For BST, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Doubly Linked List?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Array (unsorted)?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Deletion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Array (sorted)?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Insertion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Red-Black Tree?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a BST?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (unsorted)?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a AVL Tree?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Doubly Linked List?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Array (unsorted)?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Min Heap?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (sorted)?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Array (sorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Red-Black Tree?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Max Heap?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Stack?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Queue?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Array (unsorted)?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Red-Black Tree?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a AVL Tree?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a AVL Tree?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Min Heap?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Max Heap?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Array (unsorted)?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Max Heap?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a AVL Tree?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Red-Black Tree?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (unsorted)?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a AVL Tree?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Access under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Min Heap?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Min Heap?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Red-Black Tree?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (sorted)?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a BST?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Deletion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a AVL Tree?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Access under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Singly Linked List?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Red-Black Tree?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Min Heap?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Min Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Singly Linked List?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Doubly Linked List?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a BST?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Stack?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a AVL Tree?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Array (sorted)?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Array (sorted), a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Min Heap?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Min Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Doubly Linked List?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Min Heap?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Array (sorted)?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Deletion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a AVL Tree?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (sorted)?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Array (sorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a BST?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Max Heap?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Red-Black Tree?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Red-Black Tree, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a AVL Tree?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Singly Linked List?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Doubly Linked List?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a AVL Tree?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Min Heap?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Max Heap?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Singly Linked List?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Red-Black Tree?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Red-Black Tree, a Access under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Max Heap?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Red-Black Tree?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Access under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (sorted)?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Array (sorted), a Insertion under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Queue?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Search under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Stack?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Singly Linked List?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a BST?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For BST, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Queue?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Array (sorted)?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Red-Black Tree?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Doubly Linked List?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Doubly Linked List?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a BST?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Access under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Queue?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Singly Linked List?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Singly Linked List?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a BST?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Stack?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Max Heap?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a AVL Tree?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Stack?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Doubly Linked List?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Doubly Linked List?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Array (unsorted)?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Min Heap?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (unsorted)?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Array (sorted)?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Array (sorted), a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Min Heap?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Singly Linked List?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a BST?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Queue?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Red-Black Tree?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Singly Linked List?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Stack?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Stack? (Set 1)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Best Time to Buy Stock uses which pattern? (Set 2)",
    "options": [
      "Sliding window",
      "Two pointers",
      "Binary search",
      "Track minimum and max profit"
    ],
    "answer": 3,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 3)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Right shift by 1 is equivalent to? (Set 4)",
    "options": [
      "Add 2",
      "XOR with 1",
      "Divide by 2 (integer division)",
      "Multiply by 2"
    ],
    "answer": 2,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "LCA (Lowest Common Ancestor) in BST takes? (Set 5)",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is? (Set 6)",
    "options": [
      "Random",
      "Greater than or equal to children",
      "Equal to children",
      "Less than children"
    ],
    "answer": 1,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the space complexity of merge sort? (Set 7)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a AVL Tree? (Set 8)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Height of a balanced BST with n nodes? (Set 9)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n²)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Balanced tree has logarithmic height."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Omega represents? (Set 10)",
    "options": [
      "Upper bound",
      "Average case",
      "Tight bound",
      "Lower bound"
    ],
    "answer": 3,
    "explanation": "Ω notation gives the best-case lower bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a BST? (Set 11)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort? (Set 12)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 13)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 14)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 15)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 16)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Time complexity to check if a string is palindrome? (Set 17)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Compare characters from both ends in one pass."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Red-Black Tree? (Set 18)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 19)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Memoization is? (Set 20)",
    "options": [
      "Bottom-up approach",
      "Greedy",
      "Brute force",
      "Top-down DP with caching"
    ],
    "answer": 3,
    "explanation": "Store results of subproblems to avoid recomputation."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 21)",
    "options": [
      "Dynamic programming",
      "Sorting",
      "Recursion and backtracking",
      "BFS only"
    ],
    "answer": 2,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 22)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LCS (Longest Common Subsequence) of two strings? (Set 23)",
    "options": [
      "O(2^n)",
      "O(m+n)",
      "O(m*n)",
      "O(m²)"
    ],
    "answer": 2,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 24)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 25)",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal? (Set 26)",
    "options": [
      "O(n*k)",
      "O(k)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Postorder traversal visits? (Set 27)",
    "options": [
      "Root, Left, Right",
      "Left, Root, Right",
      "Left, Right, Root",
      "Right, Left, Root"
    ],
    "answer": 2,
    "explanation": "Post = root last, after children."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 28)",
    "options": [
      "T(n) = T(n-1) + n",
      "T(n) = n!",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Queue? (Set 29)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "DFS uses which data structure? (Set 30)",
    "options": [
      "Heap",
      "Queue",
      "Stack (or recursion)",
      "Array"
    ],
    "answer": 2,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 19) (Set 31)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 32)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Max Heap? (Set 33)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "HashSet stores? (Set 34)",
    "options": [
      "Unique elements only",
      "Key-value pairs",
      "Duplicates allowed",
      "Sorted elements"
    ],
    "answer": 0,
    "explanation": "HashSet rejects duplicate entries."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Minimum platforms problem uses? (Set 35)",
    "options": [
      "Queue",
      "Binary search",
      "Sorting arrival/departure times",
      "Stack"
    ],
    "answer": 2,
    "explanation": "Sort and count overlapping intervals."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 21) (Set 36)",
    "options": [
      "Dynamic programming",
      "Sorting",
      "Recursion and backtracking",
      "BFS only"
    ],
    "answer": 2,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 37)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Bellman-Ford handles? (Set 38)",
    "options": [
      "Only trees",
      "Negative edge weights",
      "Only positive weights",
      "Only undirected"
    ],
    "answer": 1,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 39)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 40)",
    "options": [
      "T(n) = T(n-1) + n",
      "T(n) = n!",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a BST? (Set 41)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For BST, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 42)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Sliding window technique is used for? (Set 43)",
    "options": [
      "Tree balancing",
      "Graph traversal",
      "Subarray/substring problems with constraints",
      "Sorting"
    ],
    "answer": 2,
    "explanation": "Sliding window maintains a dynamic range."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 19) (Set 44)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 45)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 46)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Move Zeroes problem moves zeros to? (Set 47)",
    "options": [
      "Sorted position",
      "End of array",
      "Middle",
      "Beginning"
    ],
    "answer": 1,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Min Heap? (Set 48)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Rabin-Karp uses what technique? (Set 49)",
    "options": [
      "Greedy",
      "Backtracking",
      "Dynamic programming",
      "Hashing"
    ],
    "answer": 3,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 50)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 51)",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 45) (Set 52)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (sorted)? (Set 53)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 54)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 55)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Segment tree range query time? (Set 56)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Tree structure allows logarithmic range operations."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "AVL tree maintains balance by? (Set 57)",
    "options": [
      "Sorting nodes",
      "Rebuilding tree",
      "Using extra array",
      "Rotations after insert/delete"
    ],
    "answer": 3,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 42) (Set 58)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 24) (Set 59)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "LCA (Lowest Common Ancestor) in BST takes? (Set 60)",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 61)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a BST? (Set 62)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 63)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Max Heap? (Set 64)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Red-Black Tree? (Set 18) (Set 65)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 66)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 67)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 68)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Adjacency list space complexity? (Set 69)",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(V²)",
      "O(E²)"
    ],
    "answer": 1,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Product of Array Except Self avoids division by using? (Set 70)",
    "options": [
      "Stack",
      "Sorting",
      "Left and right product arrays",
      "Queue"
    ],
    "answer": 2,
    "explanation": "Multiply prefix and suffix products."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Floyd-Warshall finds? (Set 71)",
    "options": [
      "Topological order",
      "MST",
      "All-pairs shortest paths",
      "Single-source shortest path"
    ],
    "answer": 2,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 72)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a BST? (Set 73)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Deletion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a AVL Tree? (Set 8) (Set 74)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Bellman-Ford handles? (Set 75)",
    "options": [
      "Only trees",
      "Negative edge weights",
      "Only positive weights",
      "Only undirected"
    ],
    "answer": 1,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 76)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Doubly linked list advantage over singly? (Set 77)",
    "options": [
      "Simpler implementation",
      "Faster access by index",
      "Traversal in both directions",
      "Less memory"
    ],
    "answer": 2,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Collision in hashing means? (Set 78)",
    "options": [
      "Two keys map to same index",
      "Duplicate keys",
      "Key not found",
      "Hash table is full"
    ],
    "answer": 0,
    "explanation": "Different keys producing same hash cause collision."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 79)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 80)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Fenwick tree (BIT) supports? (Set 81)",
    "options": [
      "Graph BFS",
      "Point updates and prefix sum queries",
      "String matching",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (unsorted)? (Set 82)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 83)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Kruskal's algorithm is? (Set 84)",
    "options": [
      "Greedy MST using sorted edges",
      "Dynamic programming",
      "Divide and conquer",
      "BFS-based"
    ],
    "answer": 0,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a AVL Tree? (Set 85)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Right shift by 1 is equivalent to? (Set 86)",
    "options": [
      "Add 2",
      "XOR with 1",
      "Divide by 2 (integer division)",
      "Multiply by 2"
    ],
    "answer": 2,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Array (sorted)? (Set 87)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Reversing a singly linked list takes? (Set 88)",
    "options": [
      "O(n) space",
      "O(n) time, O(1) space",
      "O(log n) time",
      "O(n²) time"
    ],
    "answer": 1,
    "explanation": "Iterate once, reversing pointers in-place."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap? (Set 89)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 19) (Set 31) (Set 90)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 91)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Overlapping subproblems means? (Set 92)",
    "options": [
      "No subproblems exist",
      "Linear scan suffices",
      "Same subproblems are solved multiple times",
      "Each subproblem is unique"
    ],
    "answer": 2,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 93)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 32) (Set 94)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 54) (Set 95)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a AVL Tree? (Set 96)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Access under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 61) (Set 97)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Move Zeroes problem moves zeros to? (Set 98)",
    "options": [
      "Sorted position",
      "End of array",
      "Middle",
      "Beginning"
    ],
    "answer": 1,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 25) (Set 99)",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 61) (Set 97) (Set 100)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Stack? (Set 101)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 61) (Set 97) (Set 100) (Set 102)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort? (Set 103)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Stack? (Set 104)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Merge Intervals first step is? (Set 105)",
    "options": [
      "Use a stack",
      "Sort by start time",
      "Sort by end time",
      "Build a tree"
    ],
    "answer": 1,
    "explanation": "Sorting by start allows sequential merging."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci? (Set 106)",
    "options": [
      "O(n log n)",
      "O(2^n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Disjoint Set Union find uses? (Set 107)",
    "options": [
      "Sorting",
      "Hashing",
      "BFS",
      "Path compression and union by rank"
    ],
    "answer": 3,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)? (Set 108)",
    "options": [
      "O(n²)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "Recursion stack depth is log n on average."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 109)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort? (Set 110)",
    "options": [
      "T(n) = T(n/2) + O(1)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = T(n-1) + O(n)",
      "T(n) = nT(n/2)"
    ],
    "answer": 1,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 45) (Set 111)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Array (sorted)? (Set 112)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 19) (Set 44) (Set 113)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Greedy algorithms guarantee optimal solution when? (Set 114)",
    "options": [
      "Only for sorting",
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold"
    ],
    "answer": 3,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 40) (Set 115)",
    "options": [
      "T(n) = T(n-1) + n",
      "T(n) = n!",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 42) (Set 58) (Set 116)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Best Time to Buy Stock uses which pattern? (Set 117)",
    "options": [
      "Sliding window",
      "Two pointers",
      "Binary search",
      "Track minimum and max profit"
    ],
    "answer": 3,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort? (Set 118)",
    "options": [
      "T(n) = T(n/2) + O(1)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = T(n-1) + O(n)",
      "T(n) = nT(n/2)"
    ],
    "answer": 1,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 119)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 120)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What does Big O notation describe? (Set 121)",
    "options": [
      "Lower bound",
      "Exact growth",
      "Upper bound of growth rate",
      "Average case only"
    ],
    "answer": 2,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 122)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Detecting intersection point of two lists uses? (Set 123)",
    "options": [
      "Stack",
      "Sorting",
      "Length difference or two-pointer approach",
      "Queue"
    ],
    "answer": 2,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a BST? (Set 124)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Bellman-Ford handles? (Set 75) (Set 125)",
    "options": [
      "Only trees",
      "Negative edge weights",
      "Only positive weights",
      "Only undirected"
    ],
    "answer": 1,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Min Heap? (Set 126)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Prim's algorithm starts from? (Set 127)",
    "options": [
      "Any single vertex",
      "All vertices",
      "Leaf node",
      "Heaviest edge"
    ],
    "answer": 0,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What does the sliding window technique maintain? (Set 128)",
    "options": [
      "A balanced tree",
      "A window of elements satisfying a condition",
      "A priority queue",
      "A sorted subarray"
    ],
    "answer": 1,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives? (Set 129)",
    "options": [
      "0",
      "Complement",
      "1",
      "The number itself"
    ],
    "answer": 3,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Fractional knapsack allows? (Set 130)",
    "options": [
      "Negative weights",
      "Taking fractions of items",
      "Only whole items",
      "No items"
    ],
    "answer": 1,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 66) (Set 131)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 132)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 133)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 134)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 66) (Set 135)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 136)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Optimal substructure means? (Set 137)",
    "options": [
      "Only greedy works",
      "Random solutions work",
      "Optimal solution contains optimal sub-solutions",
      "Problem has no solution"
    ],
    "answer": 2,
    "explanation": "Key property enabling DP approach."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 136) (Set 138)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 139)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Disjoint Set Union find uses? (Set 107) (Set 140)",
    "options": [
      "Sorting",
      "Hashing",
      "BFS",
      "Path compression and union by rank"
    ],
    "answer": 3,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 32) (Set 94) (Set 141)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Min Heap? (Set 142)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Optimal substructure means? (Set 143)",
    "options": [
      "Only greedy works",
      "Random solutions work",
      "Optimal solution contains optimal sub-solutions",
      "Problem has no solution"
    ],
    "answer": 2,
    "explanation": "Key property enabling DP approach."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 66) (Set 135) (Set 144)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a AVL Tree? (Set 145)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Remove Nth node from end uses? (Set 146)",
    "options": [
      "Stack of size N",
      "Binary search",
      "Two pointers with N gap",
      "Reverse list"
    ],
    "answer": 2,
    "explanation": "Fast pointer leads by N, both advance until fast reaches end."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Min Heap? (Set 147)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Matrix Chain Multiplication optimizes? (Set 148)",
    "options": [
      "Order of matrix multiplications",
      "Matrix dimensions",
      "Matrix values",
      "Matrix sorting"
    ],
    "answer": 0,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Red-Black Tree? (Set 149)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Red-Black Tree, a Access under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Longest palindromic substring can be found in? (Set 150)",
    "options": [
      "O(n)",
      "O(n³)",
      "O(log n)",
      "O(n²) using expand around center"
    ],
    "answer": 3,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 151)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 152)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 153)",
    "options": [
      "T(n) = T(n-1) + n",
      "T(n) = n!",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 154)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 32) (Set 94) (Set 155)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives? (Set 156)",
    "options": [
      "0",
      "Complement",
      "1",
      "The number itself"
    ],
    "answer": 3,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 157)",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a BST? (Set 158)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Best Time to Buy Stock uses which pattern? (Set 159)",
    "options": [
      "Sliding window",
      "Two pointers",
      "Binary search",
      "Track minimum and max profit"
    ],
    "answer": 3,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "DFS uses which data structure? (Set 30) (Set 160)",
    "options": [
      "Heap",
      "Queue",
      "Stack (or recursion)",
      "Array"
    ],
    "answer": 2,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 161)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "AVL tree maintains balance by? (Set 162)",
    "options": [
      "Sorting nodes",
      "Rebuilding tree",
      "Using extra array",
      "Rotations after insert/delete"
    ],
    "answer": 3,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Move Zeroes problem moves zeros to? (Set 163)",
    "options": [
      "Sorted position",
      "End of array",
      "Middle",
      "Beginning"
    ],
    "answer": 1,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 164)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 24) (Set 59) (Set 165)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Stack? (Set 1) (Set 166)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 51) (Set 167)",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Doubly Linked List? (Set 168)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives? (Set 156) (Set 169)",
    "options": [
      "0",
      "Complement",
      "1",
      "The number itself"
    ],
    "answer": 3,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a BST? (Set 170)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Access under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Doubly Linked List? (Set 171)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 136) (Set 172)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Stack? (Set 173)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 174)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Red-Black Tree, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 175)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 42) (Set 58) (Set 176)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 68) (Set 177)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What does Big O notation describe? (Set 178)",
    "options": [
      "Lower bound",
      "Exact growth",
      "Upper bound of growth rate",
      "Average case only"
    ],
    "answer": 2,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 15) (Set 179)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by? (Set 180)",
    "options": [
      "Random",
      "Maximum duration",
      "Latest start",
      "Earliest finish time"
    ],
    "answer": 3,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 181)",
    "options": [
      "Middle only",
      "Only rear",
      "Both front and rear",
      "Only front"
    ],
    "answer": 2,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 182)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 66) (Set 131) (Set 183)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of accessing an array element by index? (Set 184)",
    "options": [
      "O(1)",
      "O(n²)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "Array access is constant time via direct addressing."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 14) (Set 185)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 40) (Set 186)",
    "options": [
      "T(n) = T(n-1) + n",
      "T(n) = n!",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 24) (Set 187)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Doubly linked list advantage over singly? (Set 77) (Set 188)",
    "options": [
      "Simpler implementation",
      "Faster access by index",
      "Traversal in both directions",
      "Less memory"
    ],
    "answer": 2,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Graph adjacency matrix space complexity? (Set 189)",
    "options": [
      "O(E)",
      "O(V)",
      "O(V+E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 190)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 164) (Set 191)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Move Zeroes problem moves zeros to? (Set 163) (Set 192)",
    "options": [
      "Sorted position",
      "End of array",
      "Middle",
      "Beginning"
    ],
    "answer": 1,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 193)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Min Heap? (Set 142) (Set 194)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "AVL tree maintains balance by? (Set 195)",
    "options": [
      "Sorting nodes",
      "Rebuilding tree",
      "Using extra array",
      "Rotations after insert/delete"
    ],
    "answer": 3,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Circular queue solves which problem? (Set 196)",
    "options": [
      "Sorting",
      "Searching",
      "Balancing",
      "Wasted space in linear queue"
    ],
    "answer": 3,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 45) (Set 52) (Set 197)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 198)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Array (sorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a BST? (Set 199)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 40) (Set 200)",
    "options": [
      "T(n) = T(n-1) + n",
      "T(n) = n!",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 136) (Set 138) (Set 201)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 202)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Minimum platforms problem uses? (Set 35) (Set 203)",
    "options": [
      "Queue",
      "Binary search",
      "Sorting arrival/departure times",
      "Stack"
    ],
    "answer": 2,
    "explanation": "Sort and count overlapping intervals."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Theta represents? (Set 204)",
    "options": [
      "No bound",
      "Lower bound only",
      "Tight bound",
      "Upper bound only"
    ],
    "answer": 2,
    "explanation": "Θ gives both upper and lower bounds."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 205)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Deletion under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 206)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Cycle detection in undirected graph uses? (Set 207)",
    "options": [
      "Topological sort",
      "Dijkstra",
      "BFS only",
      "DFS with parent tracking or Union-Find"
    ],
    "answer": 3,
    "explanation": "Back edge to non-parent indicates cycle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 42) (Set 58) (Set 116) (Set 208)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Overlapping subproblems means? (Set 209)",
    "options": [
      "No subproblems exist",
      "Linear scan suffices",
      "Same subproblems are solved multiple times",
      "Each subproblem is unique"
    ],
    "answer": 2,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Red-Black Tree? (Set 210)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 134) (Set 211)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 205) (Set 212)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Deletion under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the space complexity of merge sort? (Set 213)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort? (Set 12) (Set 214)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Right shift by 1 is equivalent to? (Set 4) (Set 215)",
    "options": [
      "Add 2",
      "XOR with 1",
      "Divide by 2 (integer division)",
      "Multiply by 2"
    ],
    "answer": 2,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 136) (Set 216)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Fenwick tree (BIT) supports? (Set 81) (Set 217)",
    "options": [
      "Graph BFS",
      "Point updates and prefix sum queries",
      "String matching",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a BST? (Set 62) (Set 218)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "BFS uses which data structure? (Set 219)",
    "options": [
      "Heap",
      "Queue",
      "Stack",
      "Array"
    ],
    "answer": 1,
    "explanation": "BFS explores neighbors level-by-level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Binary tree maximum path sum problem uses? (Set 220)",
    "options": [
      "Greedy",
      "BFS",
      "Recursion with global max tracking",
      "Sorting"
    ],
    "answer": 2,
    "explanation": "At each node, compute max path through it."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Kruskal's algorithm is? (Set 221)",
    "options": [
      "Greedy MST using sorted edges",
      "Dynamic programming",
      "Divide and conquer",
      "BFS-based"
    ],
    "answer": 0,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Stack? (Set 222)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 223)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Two Sum problem is best solved using? (Set 224)",
    "options": [
      "Sorting",
      "HashMap",
      "Stack",
      "Binary Search Tree"
    ],
    "answer": 1,
    "explanation": "HashMap gives O(1) lookup for complement."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "LCA (Lowest Common Ancestor) in BST takes? (Set 60) (Set 225)",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 91) (Set 226)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 153) (Set 227)",
    "options": [
      "T(n) = T(n-1) + n",
      "T(n) = n!",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Longest palindromic substring can be found in? (Set 228)",
    "options": [
      "O(n)",
      "O(n³)",
      "O(log n)",
      "O(n²) using expand around center"
    ],
    "answer": 3,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Minimum platforms problem uses? (Set 229)",
    "options": [
      "Queue",
      "Binary search",
      "Sorting arrival/departure times",
      "Stack"
    ],
    "answer": 2,
    "explanation": "Sort and count overlapping intervals."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Min Heap? (Set 142) (Set 194) (Set 230)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "N-Queens problem places N queens such that? (Set 231)",
    "options": [
      "No two queens attack each other",
      "All queens are in one row",
      "Queens are adjacent",
      "Queens form diagonal"
    ],
    "answer": 0,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a BST? (Set 199) (Set 232)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a BST? (Set 233)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 136) (Set 138) (Set 234)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 22) (Set 235)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 236)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Graph adjacency matrix space complexity? (Set 189) (Set 237)",
    "options": [
      "O(E)",
      "O(V)",
      "O(V+E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Postorder traversal visits? (Set 238)",
    "options": [
      "Root, Left, Right",
      "Left, Root, Right",
      "Left, Right, Root",
      "Right, Left, Root"
    ],
    "answer": 2,
    "explanation": "Post = root last, after children."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Stack? (Set 239)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 15) (Set 240)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Segment tree range query time? (Set 241)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Tree structure allows logarithmic range operations."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Rabin-Karp uses what technique? (Set 49) (Set 242)",
    "options": [
      "Greedy",
      "Backtracking",
      "Dynamic programming",
      "Hashing"
    ],
    "answer": 3,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 190) (Set 243)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Postorder traversal visits? (Set 244)",
    "options": [
      "Root, Left, Right",
      "Left, Root, Right",
      "Left, Right, Root",
      "Right, Left, Root"
    ],
    "answer": 2,
    "explanation": "Post = root last, after children."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 45) (Set 52) (Set 197) (Set 245)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 19) (Set 246)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Stack? (Set 247)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Min Heap? (Set 248)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Sudoku solver uses? (Set 249)",
    "options": [
      "BFS",
      "Backtracking with constraint checking",
      "Greedy",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Try digits 1-9, backtrack if constraint violated."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort? (Set 12) (Set 250)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Rabin-Karp uses what technique? (Set 49) (Set 242) (Set 251)",
    "options": [
      "Greedy",
      "Backtracking",
      "Dynamic programming",
      "Hashing"
    ],
    "answer": 3,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack? (Set 252)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently? (Set 253)",
    "options": [
      "Sorting status",
      "Graph connectivity",
      "Minimum element",
      "Range sum queries"
    ],
    "answer": 3,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Max Heap? (Set 64) (Set 254)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 255)",
    "options": [
      "Dynamic programming",
      "Sorting",
      "Recursion and backtracking",
      "BFS only"
    ],
    "answer": 2,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 76) (Set 256)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Balanced parentheses checking uses? (Set 257)",
    "options": [
      "Array",
      "Tree",
      "Stack",
      "Queue"
    ],
    "answer": 2,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Combination Sum allows? (Set 258)",
    "options": [
      "Reusing elements to reach target",
      "Each element used once",
      "Sorting only",
      "Negative numbers"
    ],
    "answer": 0,
    "explanation": "Include current element again or move to next."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Rehashing is triggered when? (Set 259)",
    "options": [
      "Load factor exceeds threshold",
      "Table is empty",
      "After deletion only",
      "First insertion"
    ],
    "answer": 0,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 260)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Binary tree maximum path sum problem uses? (Set 220) (Set 261)",
    "options": [
      "Greedy",
      "BFS",
      "Recursion with global max tracking",
      "Sorting"
    ],
    "answer": 2,
    "explanation": "At each node, compute max path through it."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 46) (Set 262)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 22) (Set 263)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What does Big O notation describe? (Set 264)",
    "options": [
      "Lower bound",
      "Exact growth",
      "Upper bound of growth rate",
      "Average case only"
    ],
    "answer": 2,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 265)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 266)",
    "options": [
      "Middle only",
      "Only rear",
      "Both front and rear",
      "Only front"
    ],
    "answer": 2,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Kruskal's algorithm is? (Set 267)",
    "options": [
      "Greedy MST using sorted edges",
      "Dynamic programming",
      "Divide and conquer",
      "BFS-based"
    ],
    "answer": 0,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Stack? (Set 268)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Bellman-Ford handles? (Set 75) (Set 269)",
    "options": [
      "Only trees",
      "Negative edge weights",
      "Only positive weights",
      "Only undirected"
    ],
    "answer": 1,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Rabin-Karp uses what technique? (Set 49) (Set 242) (Set 251) (Set 270)",
    "options": [
      "Greedy",
      "Backtracking",
      "Dynamic programming",
      "Hashing"
    ],
    "answer": 3,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 271)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a AVL Tree? (Set 8) (Set 74) (Set 272)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 260) (Set 273)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 109) (Set 274)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 14) (Set 275)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Stack? (Set 276)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Search under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 277)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 278)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Array (sorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Priority queue is typically implemented using? (Set 279)",
    "options": [
      "Stack",
      "Array",
      "Linked list",
      "Heap (binary heap)"
    ],
    "answer": 3,
    "explanation": "Heap gives O(log n) insert and extract-min/max."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Queue? (Set 29) (Set 280)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 277) (Set 281)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 282)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Red-Black Tree, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 283)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Fractional knapsack allows? (Set 284)",
    "options": [
      "Negative weights",
      "Taking fractions of items",
      "Only whole items",
      "No items"
    ],
    "answer": 1,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same? (Set 285)",
    "options": [
      "Big O",
      "Little o",
      "Theta (Θ)",
      "Big Omega"
    ],
    "answer": 2,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Fenwick tree (BIT) supports? (Set 286)",
    "options": [
      "Graph BFS",
      "Point updates and prefix sum queries",
      "String matching",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Floyd-Warshall finds? (Set 71) (Set 287)",
    "options": [
      "Topological order",
      "MST",
      "All-pairs shortest paths",
      "Single-source shortest path"
    ],
    "answer": 2,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort? (Set 12) (Set 250) (Set 288)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 289)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "AVL tree maintains balance by? (Set 57) (Set 290)",
    "options": [
      "Sorting nodes",
      "Rebuilding tree",
      "Using extra array",
      "Rotations after insert/delete"
    ],
    "answer": 3,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a BST? (Set 199) (Set 232) (Set 291)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 266) (Set 292)",
    "options": [
      "Middle only",
      "Only rear",
      "Both front and rear",
      "Only front"
    ],
    "answer": 2,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Kruskal's algorithm is? (Set 84) (Set 293)",
    "options": [
      "Greedy MST using sorted edges",
      "Dynamic programming",
      "Divide and conquer",
      "BFS-based"
    ],
    "answer": 0,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 134) (Set 211) (Set 294)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 295)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Disjoint Set Union find uses? (Set 107) (Set 296)",
    "options": [
      "Sorting",
      "Hashing",
      "BFS",
      "Path compression and union by rank"
    ],
    "answer": 3,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 297)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Min Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Cycle detection in undirected graph uses? (Set 298)",
    "options": [
      "Topological sort",
      "Dijkstra",
      "BFS only",
      "DFS with parent tracking or Union-Find"
    ],
    "answer": 3,
    "explanation": "Back edge to non-parent indicates cycle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a BST? (Set 62) (Set 299)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "HashSet stores? (Set 300)",
    "options": [
      "Unique elements only",
      "Key-value pairs",
      "Duplicates allowed",
      "Sorted elements"
    ],
    "answer": 0,
    "explanation": "HashSet rejects duplicate entries."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 54) (Set 95) (Set 301)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 66) (Set 131) (Set 302)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 16) (Set 303)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Theta represents? (Set 204) (Set 304)",
    "options": [
      "No bound",
      "Lower bound only",
      "Tight bound",
      "Upper bound only"
    ],
    "answer": 2,
    "explanation": "Θ gives both upper and lower bounds."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a BST? (Set 170) (Set 305)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Access under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Collision in hashing means? (Set 306)",
    "options": [
      "Two keys map to same index",
      "Duplicate keys",
      "Key not found",
      "Hash table is full"
    ],
    "answer": 0,
    "explanation": "Different keys producing same hash cause collision."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Max Heap? (Set 307)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a AVL Tree? (Set 96) (Set 308)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Access under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (unsorted)? (Set 82) (Set 309)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves? (Set 310)",
    "options": [
      "Shortest path",
      "Sorting",
      "String matching",
      "Maximum subarray sum"
    ],
    "answer": 3,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "AVL tree maintains balance by? (Set 195) (Set 311)",
    "options": [
      "Sorting nodes",
      "Rebuilding tree",
      "Using extra array",
      "Rotations after insert/delete"
    ],
    "answer": 3,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Stack? (Set 312)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What does the sliding window technique maintain? (Set 313)",
    "options": [
      "A balanced tree",
      "A window of elements satisfying a condition",
      "A priority queue",
      "A sorted subarray"
    ],
    "answer": 1,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal? (Set 26) (Set 314)",
    "options": [
      "O(n*k)",
      "O(k)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a BST? (Set 315)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For BST, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a AVL Tree? (Set 96) (Set 316)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Access under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 154) (Set 317)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 76) (Set 256) (Set 318)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Rehashing is triggered when? (Set 319)",
    "options": [
      "Load factor exceeds threshold",
      "Table is empty",
      "After deletion only",
      "First insertion"
    ],
    "answer": 0,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Disjoint Set Union find uses? (Set 320)",
    "options": [
      "Sorting",
      "Hashing",
      "BFS",
      "Path compression and union by rank"
    ],
    "answer": 3,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 266) (Set 321)",
    "options": [
      "Middle only",
      "Only rear",
      "Both front and rear",
      "Only front"
    ],
    "answer": 2,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Fenwick tree (BIT) supports? (Set 81) (Set 217) (Set 322)",
    "options": [
      "Graph BFS",
      "Point updates and prefix sum queries",
      "String matching",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 14) (Set 185) (Set 323)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 133) (Set 324)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 282) (Set 325)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Red-Black Tree, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Min Heap? (Set 147) (Set 326)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "LCA (Lowest Common Ancestor) in BST takes? (Set 60) (Set 327)",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives? (Set 129) (Set 328)",
    "options": [
      "0",
      "Complement",
      "1",
      "The number itself"
    ],
    "answer": 3,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Segment tree range query time? (Set 56) (Set 329)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Tree structure allows logarithmic range operations."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Overlapping subproblems means? (Set 92) (Set 330)",
    "options": [
      "No subproblems exist",
      "Linear scan suffices",
      "Same subproblems are solved multiple times",
      "Each subproblem is unique"
    ],
    "answer": 2,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 40) (Set 186) (Set 331)",
    "options": [
      "T(n) = T(n-1) + n",
      "T(n) = n!",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 134) (Set 211) (Set 332)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 51) (Set 167) (Set 333)",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 14) (Set 275) (Set 334)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 76) (Set 256) (Set 318) (Set 335)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 336)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 193) (Set 337)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Kruskal's algorithm is? (Set 267) (Set 338)",
    "options": [
      "Greedy MST using sorted edges",
      "Dynamic programming",
      "Divide and conquer",
      "BFS-based"
    ],
    "answer": 0,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Two Sum problem is best solved using? (Set 224) (Set 339)",
    "options": [
      "Sorting",
      "HashMap",
      "Stack",
      "Binary Search Tree"
    ],
    "answer": 1,
    "explanation": "HashMap gives O(1) lookup for complement."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Greedy algorithms guarantee optimal solution when? (Set 114) (Set 340)",
    "options": [
      "Only for sorting",
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold"
    ],
    "answer": 3,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 182) (Set 341)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 265) (Set 342)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a BST? (Set 343)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Max Heap? (Set 344)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 345)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Min Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives? (Set 156) (Set 346)",
    "options": [
      "0",
      "Complement",
      "1",
      "The number itself"
    ],
    "answer": 3,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal? (Set 26) (Set 314) (Set 347)",
    "options": [
      "O(n*k)",
      "O(k)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Best Time to Buy Stock uses which pattern? (Set 2) (Set 348)",
    "options": [
      "Sliding window",
      "Two pointers",
      "Binary search",
      "Track minimum and max profit"
    ],
    "answer": 3,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Queue? (Set 349)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives? (Set 129) (Set 328) (Set 350)",
    "options": [
      "0",
      "Complement",
      "1",
      "The number itself"
    ],
    "answer": 3,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Time complexity of enqueue in circular queue? (Set 351)",
    "options": [
      "O(n²)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Queue? (Set 352)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 120) (Set 353)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Remove Nth node from end uses? (Set 354)",
    "options": [
      "Stack of size N",
      "Binary search",
      "Two pointers with N gap",
      "Reverse list"
    ],
    "answer": 2,
    "explanation": "Fast pointer leads by N, both advance until fast reaches end."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives? (Set 156) (Set 169) (Set 355)",
    "options": [
      "0",
      "Complement",
      "1",
      "The number itself"
    ],
    "answer": 3,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 63) (Set 356)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 136) (Set 138) (Set 234) (Set 357)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Fenwick tree (BIT) supports? (Set 286) (Set 358)",
    "options": [
      "Graph BFS",
      "Point updates and prefix sum queries",
      "String matching",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Job scheduling with deadlines maximizes? (Set 359)",
    "options": [
      "Minimum cost",
      "Total profit",
      "Number of jobs",
      "Total time"
    ],
    "answer": 1,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Segment tree range query time? (Set 360)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Tree structure allows logarithmic range operations."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal? (Set 361)",
    "options": [
      "O(n*k)",
      "O(k)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by? (Set 362)",
    "options": [
      "Random",
      "Maximum duration",
      "Latest start",
      "Earliest finish time"
    ],
    "answer": 3,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Max Heap? (Set 363)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "LCA (Lowest Common Ancestor) in BST takes? (Set 60) (Set 225) (Set 364)",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 42) (Set 58) (Set 176) (Set 365)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What does Big O notation describe? (Set 178) (Set 366)",
    "options": [
      "Lower bound",
      "Exact growth",
      "Upper bound of growth rate",
      "Average case only"
    ],
    "answer": 2,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 277) (Set 367)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 42) (Set 58) (Set 176) (Set 365) (Set 368)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal? (Set 369)",
    "options": [
      "O(n*k)",
      "O(k)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Queue? (Set 370)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 371)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Fractional knapsack allows? (Set 284) (Set 372)",
    "options": [
      "Negative weights",
      "Taking fractions of items",
      "Only whole items",
      "No items"
    ],
    "answer": 1,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 136) (Set 373)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Min Heap? (Set 374)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 51) (Set 167) (Set 375)",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Binary tree maximum path sum problem uses? (Set 220) (Set 261) (Set 376)",
    "options": [
      "Greedy",
      "BFS",
      "Recursion with global max tracking",
      "Sorting"
    ],
    "answer": 2,
    "explanation": "At each node, compute max path through it."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Red-Black Tree? (Set 18) (Set 65) (Set 377)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Remove Nth node from end uses? (Set 146) (Set 378)",
    "options": [
      "Stack of size N",
      "Binary search",
      "Two pointers with N gap",
      "Reverse list"
    ],
    "answer": 2,
    "explanation": "Fast pointer leads by N, both advance until fast reaches end."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 206) (Set 379)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 54) (Set 95) (Set 301) (Set 380)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 120) (Set 381)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same? (Set 382)",
    "options": [
      "Big O",
      "Little o",
      "Theta (Θ)",
      "Big Omega"
    ],
    "answer": 2,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Disjoint Set Union find uses? (Set 320) (Set 383)",
    "options": [
      "Sorting",
      "Hashing",
      "BFS",
      "Path compression and union by rank"
    ],
    "answer": 3,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives? (Set 384)",
    "options": [
      "Sorted ascending order",
      "Random order",
      "Level order",
      "Descending order"
    ],
    "answer": 0,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a AVL Tree? (Set 385)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 260) (Set 386)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a BST? (Set 387)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For BST, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 266) (Set 321) (Set 388)",
    "options": [
      "Middle only",
      "Only rear",
      "Both front and rear",
      "Only front"
    ],
    "answer": 2,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 389)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Right shift by 1 is equivalent to? (Set 390)",
    "options": [
      "Add 2",
      "XOR with 1",
      "Divide by 2 (integer division)",
      "Multiply by 2"
    ],
    "answer": 2,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 63) (Set 356) (Set 391)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 164) (Set 392)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 154) (Set 393)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 175) (Set 394)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 395)",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Best Time to Buy Stock uses which pattern? (Set 117) (Set 396)",
    "options": [
      "Sliding window",
      "Two pointers",
      "Binary search",
      "Track minimum and max profit"
    ],
    "answer": 3,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 19) (Set 44) (Set 397)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack follows which principle? (Set 398)",
    "options": [
      "FIFO",
      "LIFO (Last In First Out)",
      "LILO",
      "Random access"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 80) (Set 399)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal? (Set 26) (Set 400)",
    "options": [
      "O(n*k)",
      "O(k)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Minimum platforms problem uses? (Set 401)",
    "options": [
      "Queue",
      "Binary search",
      "Sorting arrival/departure times",
      "Stack"
    ],
    "answer": 2,
    "explanation": "Sort and count overlapping intervals."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What does Big O notation describe? (Set 178) (Set 402)",
    "options": [
      "Lower bound",
      "Exact growth",
      "Upper bound of growth rate",
      "Average case only"
    ],
    "answer": 2,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives? (Set 156) (Set 403)",
    "options": [
      "0",
      "Complement",
      "1",
      "The number itself"
    ],
    "answer": 3,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "HashMap provides average case lookup of? (Set 404)",
    "options": [
      "O(n)",
      "O(n²)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "Hash function maps key directly to bucket."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort? (Set 12) (Set 214) (Set 405)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 42) (Set 58) (Set 176) (Set 406)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives? (Set 407)",
    "options": [
      "Sorted ascending order",
      "Random order",
      "Level order",
      "Descending order"
    ],
    "answer": 0,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Graph adjacency matrix space complexity? (Set 189) (Set 408)",
    "options": [
      "O(E)",
      "O(V)",
      "O(V+E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Doubly Linked List? (Set 168) (Set 409)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Graph adjacency matrix space complexity? (Set 189) (Set 237) (Set 410)",
    "options": [
      "O(E)",
      "O(V)",
      "O(V+E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 22) (Set 235) (Set 411)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Max Heap? (Set 412)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Fenwick tree (BIT) supports? (Set 413)",
    "options": [
      "Graph BFS",
      "Point updates and prefix sum queries",
      "String matching",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 414)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Diameter of binary tree is? (Set 415)",
    "options": [
      "Number of leaves",
      "Longest path between any two nodes",
      "Height of tree",
      "Root to deepest node"
    ],
    "answer": 1,
    "explanation": "Diameter = max of left height + right height at each node."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 39) (Set 416)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 32) (Set 94) (Set 155) (Set 417)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 154) (Set 393) (Set 418)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 153) (Set 227) (Set 419)",
    "options": [
      "T(n) = T(n-1) + n",
      "T(n) = n!",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Queue? (Set 370) (Set 420)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Rabin-Karp uses what technique? (Set 49) (Set 421)",
    "options": [
      "Greedy",
      "Backtracking",
      "Dynamic programming",
      "Hashing"
    ],
    "answer": 3,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a BST? (Set 422)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Preorder traversal visits? (Set 423)",
    "options": [
      "Left, Root, Right",
      "Root, Left, Right",
      "Right, Root, Left",
      "Left, Right, Root"
    ],
    "answer": 1,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 61) (Set 424)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Graph adjacency matrix space complexity? (Set 189) (Set 408) (Set 425)",
    "options": [
      "O(E)",
      "O(V)",
      "O(V+E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 266) (Set 321) (Set 426)",
    "options": [
      "Middle only",
      "Only rear",
      "Both front and rear",
      "Only front"
    ],
    "answer": 2,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 427)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 154) (Set 393) (Set 428)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 206) (Set 429)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives? (Set 430)",
    "options": [
      "Sorted ascending order",
      "Random order",
      "Level order",
      "Descending order"
    ],
    "answer": 0,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Disjoint Set Union find uses? (Set 107) (Set 431)",
    "options": [
      "Sorting",
      "Hashing",
      "BFS",
      "Path compression and union by rank"
    ],
    "answer": 3,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Collision in hashing means? (Set 306) (Set 432)",
    "options": [
      "Two keys map to same index",
      "Duplicate keys",
      "Key not found",
      "Hash table is full"
    ],
    "answer": 0,
    "explanation": "Different keys producing same hash cause collision."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 66) (Set 131) (Set 433)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "AVL tree maintains balance by? (Set 195) (Set 434)",
    "options": [
      "Sorting nodes",
      "Rebuilding tree",
      "Using extra array",
      "Rotations after insert/delete"
    ],
    "answer": 3,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Longest palindromic substring can be found in? (Set 228) (Set 435)",
    "options": [
      "O(n)",
      "O(n³)",
      "O(log n)",
      "O(n²) using expand around center"
    ],
    "answer": 3,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Red-Black Tree? (Set 436)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 205) (Set 437)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Deletion under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 438)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 271) (Set 439)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives? (Set 156) (Set 440)",
    "options": [
      "0",
      "Complement",
      "1",
      "The number itself"
    ],
    "answer": 3,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 441)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "N-Queens problem places N queens such that? (Set 442)",
    "options": [
      "No two queens attack each other",
      "All queens are in one row",
      "Queens are adjacent",
      "Queens form diagonal"
    ],
    "answer": 0,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort? (Set 443)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 444)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 445)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Red-Black Tree? (Set 18) (Set 65) (Set 446)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a BST? (Set 422) (Set 447)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 80) (Set 399) (Set 448)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Open addressing resolves collisions by? (Set 449)",
    "options": [
      "Ignoring collision",
      "Using linked lists",
      "Probing for next empty slot",
      "Creating new table"
    ],
    "answer": 2,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 91) (Set 450)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 39) (Set 451)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 122) (Set 452)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "A palindrome reads the same? (Set 453)",
    "options": [
      "Only backward",
      "Diagonally",
      "Forward and backward",
      "Only forward"
    ],
    "answer": 2,
    "explanation": "Palindromes are symmetric strings."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Matrix Chain Multiplication optimizes? (Set 454)",
    "options": [
      "Order of matrix multiplications",
      "Matrix dimensions",
      "Matrix values",
      "Matrix sorting"
    ],
    "answer": 0,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort? (Set 12) (Set 455)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort? (Set 12) (Set 250) (Set 288) (Set 456)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "HashSet stores? (Set 300) (Set 457)",
    "options": [
      "Unique elements only",
      "Key-value pairs",
      "Duplicates allowed",
      "Sorted elements"
    ],
    "answer": 0,
    "explanation": "HashSet rejects duplicate entries."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 16) (Set 458)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Min Heap? (Set 459)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Preorder traversal visits? (Set 460)",
    "options": [
      "Left, Root, Right",
      "Root, Left, Right",
      "Right, Root, Left",
      "Left, Right, Root"
    ],
    "answer": 1,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 63) (Set 356) (Set 461)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 63) (Set 356) (Set 462)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 463)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a BST? (Set 422) (Set 464)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Queue follows which principle? (Set 465)",
    "options": [
      "LIFO",
      "Priority",
      "Random access",
      "FIFO (First In First Out)"
    ],
    "answer": 3,
    "explanation": "First element enqueued is first dequeued."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Segment tree range query time? (Set 360) (Set 466)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Tree structure allows logarithmic range operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 371) (Set 467)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 109) (Set 468)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 164) (Set 469)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 134) (Set 211) (Set 332) (Set 470)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Max Heap? (Set 64) (Set 254) (Set 471)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Circular linked list last node points to? (Set 472)",
    "options": [
      "Previous node",
      "First node (head)",
      "Itself",
      "NULL"
    ],
    "answer": 1,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 63) (Set 356) (Set 461) (Set 473)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "AVL tree maintains balance by? (Set 195) (Set 311) (Set 474)",
    "options": [
      "Sorting nodes",
      "Rebuilding tree",
      "Using extra array",
      "Rotations after insert/delete"
    ],
    "answer": 3,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 475)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 122) (Set 452) (Set 476)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort? (Set 477)",
    "options": [
      "T(n) = T(n/2) + O(1)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = T(n-1) + O(n)",
      "T(n) = nT(n/2)"
    ],
    "answer": 1,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Min Heap? (Set 478)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Longest palindromic substring can be found in? (Set 479)",
    "options": [
      "O(n)",
      "O(n³)",
      "O(log n)",
      "O(n²) using expand around center"
    ],
    "answer": 3,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Min Heap? (Set 48) (Set 480)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Coin Change problem (min coins) is solved by? (Set 481)",
    "options": [
      "Greedy always",
      "DP (unbounded knapsack variant)",
      "BFS only",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Try each coin, take minimum."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Rabin-Karp uses what technique? (Set 49) (Set 421) (Set 482)",
    "options": [
      "Greedy",
      "Backtracking",
      "Dynamic programming",
      "Hashing"
    ],
    "answer": 3,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Min Heap? (Set 374) (Set 483)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same? (Set 285) (Set 484)",
    "options": [
      "Big O",
      "Little o",
      "Theta (Θ)",
      "Big Omega"
    ],
    "answer": 2,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 445) (Set 485)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 486)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Queue? (Set 487)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a BST? (Set 170) (Set 488)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Access under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 24) (Set 59) (Set 165) (Set 489)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 61) (Set 490)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a AVL Tree? (Set 491)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 153) (Set 227) (Set 419) (Set 492)",
    "options": [
      "T(n) = T(n-1) + n",
      "T(n) = n!",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a AVL Tree? (Set 8) (Set 74) (Set 272) (Set 493)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Max Heap? (Set 64) (Set 494)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 37) (Set 495)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 496)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Matrix Chain Multiplication optimizes? (Set 148) (Set 497)",
    "options": [
      "Order of matrix multiplications",
      "Matrix dimensions",
      "Matrix values",
      "Matrix sorting"
    ],
    "answer": 0,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 498)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Stack? (Set 499)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Balanced parentheses checking uses? (Set 500)",
    "options": [
      "Array",
      "Tree",
      "Stack",
      "Queue"
    ],
    "answer": 2,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What does Big O notation describe? (Set 264) (Set 501)",
    "options": [
      "Lower bound",
      "Exact growth",
      "Upper bound of growth rate",
      "Average case only"
    ],
    "answer": 2,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Stack? (Set 312) (Set 502)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "AVL tree maintains balance by? (Set 162) (Set 503)",
    "options": [
      "Sorting nodes",
      "Rebuilding tree",
      "Using extra array",
      "Rotations after insert/delete"
    ],
    "answer": 3,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack follows which principle? (Set 398) (Set 504)",
    "options": [
      "FIFO",
      "LIFO (Last In First Out)",
      "LILO",
      "Random access"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 154) (Set 393) (Set 418) (Set 505)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Matrix Chain Multiplication optimizes? (Set 148) (Set 497) (Set 506)",
    "options": [
      "Order of matrix multiplications",
      "Matrix dimensions",
      "Matrix values",
      "Matrix sorting"
    ],
    "answer": 0,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 206) (Set 379) (Set 507)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What does the sliding window technique maintain? (Set 508)",
    "options": [
      "A balanced tree",
      "A window of elements satisfying a condition",
      "A priority queue",
      "A sorted subarray"
    ],
    "answer": 1,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 509)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Remove Nth node from end uses? (Set 354) (Set 510)",
    "options": [
      "Stack of size N",
      "Binary search",
      "Two pointers with N gap",
      "Reverse list"
    ],
    "answer": 2,
    "explanation": "Fast pointer leads by N, both advance until fast reaches end."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack follows which principle? (Set 398) (Set 511)",
    "options": [
      "FIFO",
      "LIFO (Last In First Out)",
      "LILO",
      "Random access"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (sorted)? (Set 53) (Set 512)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Monotonic stack is used for? (Set 513)",
    "options": [
      "String matching",
      "Sorting",
      "Next greater/smaller element problems",
      "BFS"
    ],
    "answer": 2,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Stack? (Set 312) (Set 514)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 266) (Set 321) (Set 388) (Set 515)",
    "options": [
      "Middle only",
      "Only rear",
      "Both front and rear",
      "Only front"
    ],
    "answer": 2,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Queue? (Set 516)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 153) (Set 227) (Set 419) (Set 492) (Set 517)",
    "options": [
      "T(n) = T(n-1) + n",
      "T(n) = n!",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "AVL tree maintains balance by? (Set 195) (Set 311) (Set 474) (Set 518)",
    "options": [
      "Sorting nodes",
      "Rebuilding tree",
      "Using extra array",
      "Rotations after insert/delete"
    ],
    "answer": 3,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What does the sliding window technique maintain? (Set 508) (Set 519)",
    "options": [
      "A balanced tree",
      "A window of elements satisfying a condition",
      "A priority queue",
      "A sorted subarray"
    ],
    "answer": 1,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 164) (Set 191) (Set 520)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 271) (Set 521)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 61) (Set 97) (Set 100) (Set 102) (Set 522)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack? (Set 252) (Set 523)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 136) (Set 138) (Set 524)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Product of Array Except Self avoids division by using? (Set 70) (Set 525)",
    "options": [
      "Stack",
      "Sorting",
      "Left and right product arrays",
      "Queue"
    ],
    "answer": 2,
    "explanation": "Multiply prefix and suffix products."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 24) (Set 526)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Stack? (Set 239) (Set 527)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 67) (Set 528)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 66) (Set 529)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Monotonic stack is used for? (Set 513) (Set 530)",
    "options": [
      "String matching",
      "Sorting",
      "Next greater/smaller element problems",
      "BFS"
    ],
    "answer": 2,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Queue? (Set 352) (Set 531)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 206) (Set 429) (Set 532)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Fractional knapsack allows? (Set 130) (Set 533)",
    "options": [
      "Negative weights",
      "Taking fractions of items",
      "Only whole items",
      "No items"
    ],
    "answer": 1,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 164) (Set 191) (Set 534)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Detecting intersection point of two lists uses? (Set 535)",
    "options": [
      "Stack",
      "Sorting",
      "Length difference or two-pointer approach",
      "Queue"
    ],
    "answer": 2,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 13) (Set 536)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 190) (Set 243) (Set 537)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Queue? (Set 538)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Infix to postfix conversion uses? (Set 539)",
    "options": [
      "Stack for operators",
      "Linked list",
      "Tree",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Operators are pushed/popped based on precedence."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "HashSet stores? (Set 300) (Set 457) (Set 540)",
    "options": [
      "Unique elements only",
      "Key-value pairs",
      "Duplicates allowed",
      "Sorted elements"
    ],
    "answer": 0,
    "explanation": "HashSet rejects duplicate entries."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort? (Set 12) (Set 250) (Set 288) (Set 541)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Right shift by 1 is equivalent to? (Set 86) (Set 542)",
    "options": [
      "Add 2",
      "XOR with 1",
      "Divide by 2 (integer division)",
      "Multiply by 2"
    ],
    "answer": 2,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 277) (Set 543)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 16) (Set 544)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Array (sorted)? (Set 112) (Set 545)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by? (Set 546)",
    "options": [
      "Random",
      "Maximum duration",
      "Latest start",
      "Earliest finish time"
    ],
    "answer": 3,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 547)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Deletion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of accessing an array element by index? (Set 184) (Set 548)",
    "options": [
      "O(1)",
      "O(n²)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "Array access is constant time via direct addressing."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Rehashing is triggered when? (Set 549)",
    "options": [
      "Load factor exceeds threshold",
      "Table is empty",
      "After deletion only",
      "First insertion"
    ],
    "answer": 0,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 345) (Set 550)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Min Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Frequency count of characters uses? (Set 551)",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Array of size 26 or HashMap"
    ],
    "answer": 3,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 91) (Set 226) (Set 552)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Stack? (Set 553)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap? (Set 554)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 55) (Set 555)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a BST? (Set 556)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Max Heap? (Set 33) (Set 557)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal? (Set 26) (Set 314) (Set 347) (Set 558)",
    "options": [
      "O(n*k)",
      "O(k)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "AVL tree maintains balance by? (Set 195) (Set 559)",
    "options": [
      "Sorting nodes",
      "Rebuilding tree",
      "Using extra array",
      "Rotations after insert/delete"
    ],
    "answer": 3,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Dijkstra's algorithm fails with? (Set 560)",
    "options": [
      "Undirected graphs",
      "Dense graphs",
      "Negative edge weights",
      "Positive weights"
    ],
    "answer": 2,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 93) (Set 561)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 562)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Max Heap? (Set 363) (Set 563)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 37) (Set 495) (Set 564)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Segment tree range query time? (Set 56) (Set 565)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Tree structure allows logarithmic range operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 566)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Max Heap? (Set 363) (Set 567)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (unsorted)? (Set 568)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Queue? (Set 569)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (sorted)? (Set 53) (Set 512) (Set 570)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "BST search time complexity (balanced)? (Set 571)",
    "options": [
      "O(n²)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Balanced BST halves search space each step."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Overlapping subproblems means? (Set 572)",
    "options": [
      "No subproblems exist",
      "Linear scan suffices",
      "Same subproblems are solved multiple times",
      "Each subproblem is unique"
    ],
    "answer": 2,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives? (Set 430) (Set 573)",
    "options": [
      "Sorted ascending order",
      "Random order",
      "Level order",
      "Descending order"
    ],
    "answer": 0,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by? (Set 362) (Set 574)",
    "options": [
      "Random",
      "Maximum duration",
      "Latest start",
      "Earliest finish time"
    ],
    "answer": 3,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 289) (Set 575)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Binary tree maximum path sum problem uses? (Set 220) (Set 261) (Set 576)",
    "options": [
      "Greedy",
      "BFS",
      "Recursion with global max tracking",
      "Sorting"
    ],
    "answer": 2,
    "explanation": "At each node, compute max path through it."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Combination Sum allows? (Set 258) (Set 577)",
    "options": [
      "Reusing elements to reach target",
      "Each element used once",
      "Sorting only",
      "Negative numbers"
    ],
    "answer": 0,
    "explanation": "Include current element again or move to next."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Stack? (Set 239) (Set 527) (Set 578)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal? (Set 369) (Set 579)",
    "options": [
      "O(n*k)",
      "O(k)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap? (Set 89) (Set 580)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 21) (Set 36) (Set 581)",
    "options": [
      "Dynamic programming",
      "Sorting",
      "Recursion and backtracking",
      "BFS only"
    ],
    "answer": 2,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Graph adjacency matrix space complexity? (Set 189) (Set 237) (Set 582)",
    "options": [
      "O(E)",
      "O(V)",
      "O(V+E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 25) (Set 99) (Set 583)",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 132) (Set 584)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 24) (Set 59) (Set 585)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Best Time to Buy Stock uses which pattern? (Set 159) (Set 586)",
    "options": [
      "Sliding window",
      "Two pointers",
      "Binary search",
      "Track minimum and max profit"
    ],
    "answer": 3,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Postorder traversal visits? (Set 244) (Set 587)",
    "options": [
      "Root, Left, Right",
      "Left, Root, Right",
      "Left, Right, Root",
      "Right, Left, Root"
    ],
    "answer": 2,
    "explanation": "Post = root last, after children."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "DP on grids typically moves? (Set 588)",
    "options": [
      "Up only",
      "Diagonally only",
      "All 8 directions",
      "Right and down"
    ],
    "answer": 3,
    "explanation": "Grid DP usually considers right/down movements."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 589)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 590)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Stack? (Set 268) (Set 591)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 592)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Doubly Linked List? (Set 168) (Set 409) (Set 593)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Level order traversal uses? (Set 594)",
    "options": [
      "Stack",
      "Recursion only",
      "Queue (BFS)",
      "Sorting"
    ],
    "answer": 2,
    "explanation": "Process nodes level by level using queue."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 42) (Set 58) (Set 595)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 42) (Set 58) (Set 176) (Set 365) (Set 368) (Set 596)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (sorted)? (Set 53) (Set 512) (Set 597)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "HashSet stores? (Set 300) (Set 457) (Set 540) (Set 598)",
    "options": [
      "Unique elements only",
      "Key-value pairs",
      "Duplicates allowed",
      "Sorted elements"
    ],
    "answer": 0,
    "explanation": "HashSet rejects duplicate entries."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 46) (Set 599)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 55) (Set 555) (Set 600)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 37) (Set 495) (Set 601)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Queue? (Set 602)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 24) (Set 526) (Set 603)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 37) (Set 604)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 605)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 37) (Set 495) (Set 601) (Set 606)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Min Heap? (Set 607)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 608)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal? (Set 26) (Set 314) (Set 347) (Set 558) (Set 609)",
    "options": [
      "O(n*k)",
      "O(k)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 175) (Set 394) (Set 610)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 91) (Set 450) (Set 611)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Min Heap? (Set 48) (Set 612)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 613)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Move Zeroes problem moves zeros to? (Set 163) (Set 192) (Set 614)",
    "options": [
      "Sorted position",
      "End of array",
      "Middle",
      "Beginning"
    ],
    "answer": 1,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by? (Set 362) (Set 615)",
    "options": [
      "Random",
      "Maximum duration",
      "Latest start",
      "Earliest finish time"
    ],
    "answer": 3,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Matrix Chain Multiplication optimizes? (Set 454) (Set 616)",
    "options": [
      "Order of matrix multiplications",
      "Matrix dimensions",
      "Matrix values",
      "Matrix sorting"
    ],
    "answer": 0,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Greedy algorithms guarantee optimal solution when? (Set 617)",
    "options": [
      "Only for sorting",
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold"
    ],
    "answer": 3,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 133) (Set 324) (Set 618)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Product of Array Except Self avoids division by using? (Set 70) (Set 619)",
    "options": [
      "Stack",
      "Sorting",
      "Left and right product arrays",
      "Queue"
    ],
    "answer": 2,
    "explanation": "Multiply prefix and suffix products."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 620)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 61) (Set 97) (Set 100) (Set 102) (Set 621)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 622)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 190) (Set 243) (Set 537) (Set 623)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Rabin-Karp uses what technique? (Set 624)",
    "options": [
      "Greedy",
      "Backtracking",
      "Dynamic programming",
      "Hashing"
    ],
    "answer": 3,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a AVL Tree? (Set 145) (Set 625)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "BST search time complexity (balanced)? (Set 626)",
    "options": [
      "O(n²)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Balanced BST halves search space each step."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 22) (Set 263) (Set 627)",
    "options": [
      "The number itself",
      "0",
      "1",
      "Negative number"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 608) (Set 628)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Graph adjacency matrix space complexity? (Set 189) (Set 237) (Set 582) (Set 629)",
    "options": [
      "O(E)",
      "O(V)",
      "O(V+E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Stack? (Set 312) (Set 502) (Set 630)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a BST? (Set 124) (Set 631)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Min Heap? (Set 374) (Set 632)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Stack? (Set 633)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort? (Set 12) (Set 634)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Balanced parentheses checking uses? (Set 257) (Set 635)",
    "options": [
      "Array",
      "Tree",
      "Stack",
      "Queue"
    ],
    "answer": 2,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Fractional knapsack allows? (Set 284) (Set 372) (Set 636)",
    "options": [
      "Negative weights",
      "Taking fractions of items",
      "Only whole items",
      "No items"
    ],
    "answer": 1,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Preorder traversal visits? (Set 423) (Set 637)",
    "options": [
      "Left, Root, Right",
      "Root, Left, Right",
      "Right, Root, Left",
      "Left, Right, Root"
    ],
    "answer": 1,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "LCA (Lowest Common Ancestor) in BST takes? (Set 60) (Set 638)",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap? (Set 89) (Set 639)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Stack? (Set 640)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 51) (Set 641)",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 14) (Set 185) (Set 642)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Time complexity of enqueue in circular queue? (Set 351) (Set 643)",
    "options": [
      "O(n²)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 589) (Set 644)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Height of a balanced BST with n nodes? (Set 645)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n²)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Balanced tree has logarithmic height."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a BST? (Set 233) (Set 646)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Priority queue is typically implemented using? (Set 279) (Set 647)",
    "options": [
      "Stack",
      "Array",
      "Linked list",
      "Heap (binary heap)"
    ],
    "answer": 3,
    "explanation": "Heap gives O(log n) insert and extract-min/max."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 132) (Set 648)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 164) (Set 191) (Set 520) (Set 649)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 76) (Set 256) (Set 650)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 42) (Set 58) (Set 176) (Set 365) (Set 368) (Set 651)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 68) (Set 652)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 21) (Set 36) (Set 653)",
    "options": [
      "Dynamic programming",
      "Sorting",
      "Recursion and backtracking",
      "BFS only"
    ],
    "answer": 2,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives? (Set 129) (Set 328) (Set 350) (Set 654)",
    "options": [
      "0",
      "Complement",
      "1",
      "The number itself"
    ],
    "answer": 3,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack? (Set 655)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 63) (Set 356) (Set 462) (Set 656)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Floyd-Warshall finds? (Set 657)",
    "options": [
      "Topological order",
      "MST",
      "All-pairs shortest paths",
      "Single-source shortest path"
    ],
    "answer": 2,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 154) (Set 393) (Set 658)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 42) (Set 58) (Set 176) (Set 365) (Set 659)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 14) (Set 185) (Set 642) (Set 660)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives? (Set 407) (Set 661)",
    "options": [
      "Sorted ascending order",
      "Random order",
      "Level order",
      "Descending order"
    ],
    "answer": 0,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Queue? (Set 29) (Set 280) (Set 662)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 663)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Min Heap? (Set 374) (Set 632) (Set 664)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 13) (Set 536) (Set 665)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 277) (Set 281) (Set 666)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 164) (Set 191) (Set 520) (Set 649) (Set 667)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What does Big O notation describe? (Set 178) (Set 366) (Set 668)",
    "options": [
      "Lower bound",
      "Exact growth",
      "Upper bound of growth rate",
      "Average case only"
    ],
    "answer": 2,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a BST? (Set 62) (Set 218) (Set 669)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a BST? (Set 233) (Set 670)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 40) (Set 200) (Set 671)",
    "options": [
      "T(n) = T(n-1) + n",
      "T(n) = n!",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Minimum platforms problem uses? (Set 229) (Set 672)",
    "options": [
      "Queue",
      "Binary search",
      "Sorting arrival/departure times",
      "Stack"
    ],
    "answer": 2,
    "explanation": "Sort and count overlapping intervals."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 414) (Set 673)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 674)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 190) (Set 243) (Set 675)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Fenwick tree (BIT) supports? (Set 286) (Set 676)",
    "options": [
      "Graph BFS",
      "Point updates and prefix sum queries",
      "String matching",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 389) (Set 677)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Bellman-Ford handles? (Set 75) (Set 269) (Set 678)",
    "options": [
      "Only trees",
      "Negative edge weights",
      "Only positive weights",
      "Only undirected"
    ],
    "answer": 1,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives? (Set 156) (Set 403) (Set 679)",
    "options": [
      "0",
      "Complement",
      "1",
      "The number itself"
    ],
    "answer": 3,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 164) (Set 191) (Set 520) (Set 680)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 681)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 682)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives? (Set 407) (Set 683)",
    "options": [
      "Sorted ascending order",
      "Random order",
      "Level order",
      "Descending order"
    ],
    "answer": 0,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 190) (Set 243) (Set 684)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Red-Black Tree? (Set 18) (Set 65) (Set 685)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Reversing a singly linked list takes? (Set 88) (Set 686)",
    "options": [
      "O(n) space",
      "O(n) time, O(1) space",
      "O(log n) time",
      "O(n²) time"
    ],
    "answer": 1,
    "explanation": "Iterate once, reversing pointers in-place."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Kruskal's algorithm is? (Set 687)",
    "options": [
      "Greedy MST using sorted edges",
      "Dynamic programming",
      "Divide and conquer",
      "BFS-based"
    ],
    "answer": 0,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Minimum platforms problem uses? (Set 35) (Set 203) (Set 688)",
    "options": [
      "Queue",
      "Binary search",
      "Sorting arrival/departure times",
      "Stack"
    ],
    "answer": 2,
    "explanation": "Sort and count overlapping intervals."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 689)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "AVL tree maintains balance by? (Set 162) (Set 690)",
    "options": [
      "Sorting nodes",
      "Rebuilding tree",
      "Using extra array",
      "Rotations after insert/delete"
    ],
    "answer": 3,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 45) (Set 52) (Set 197) (Set 245) (Set 691)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Sudoku solver uses? (Set 692)",
    "options": [
      "BFS",
      "Backtracking with constraint checking",
      "Greedy",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Try digits 1-9, backtrack if constraint violated."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Queue? (Set 693)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 205) (Set 694)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Deletion under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Rehashing is triggered when? (Set 549) (Set 695)",
    "options": [
      "Load factor exceeds threshold",
      "Table is empty",
      "After deletion only",
      "First insertion"
    ],
    "answer": 0,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is? (Set 6) (Set 696)",
    "options": [
      "Random",
      "Greater than or equal to children",
      "Equal to children",
      "Less than children"
    ],
    "answer": 1,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Kruskal's algorithm is? (Set 267) (Set 338) (Set 697)",
    "options": [
      "Greedy MST using sorted edges",
      "Dynamic programming",
      "Divide and conquer",
      "BFS-based"
    ],
    "answer": 0,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Matrix Chain Multiplication optimizes? (Set 698)",
    "options": [
      "Order of matrix multiplications",
      "Matrix dimensions",
      "Matrix values",
      "Matrix sorting"
    ],
    "answer": 0,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 699)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Insertion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Two Sum problem is best solved using? (Set 700)",
    "options": [
      "Sorting",
      "HashMap",
      "Stack",
      "Binary Search Tree"
    ],
    "answer": 1,
    "explanation": "HashMap gives O(1) lookup for complement."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 206) (Set 379) (Set 701)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort? (Set 477) (Set 702)",
    "options": [
      "T(n) = T(n/2) + O(1)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = T(n-1) + O(n)",
      "T(n) = nT(n/2)"
    ],
    "answer": 1,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Queue? (Set 352) (Set 531) (Set 703)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Best Time to Buy Stock uses which pattern? (Set 704)",
    "options": [
      "Sliding window",
      "Two pointers",
      "Binary search",
      "Track minimum and max profit"
    ],
    "answer": 3,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives? (Set 407) (Set 705)",
    "options": [
      "Sorted ascending order",
      "Random order",
      "Level order",
      "Descending order"
    ],
    "answer": 0,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 120) (Set 706)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a AVL Tree? (Set 96) (Set 316) (Set 707)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, a Access under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "N-Queens problem places N queens such that? (Set 231) (Set 708)",
    "options": [
      "No two queens attack each other",
      "All queens are in one row",
      "Queens are adjacent",
      "Queens form diagonal"
    ],
    "answer": 0,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Min Heap? (Set 709)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Frequency count of characters uses? (Set 710)",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Array of size 26 or HashMap"
    ],
    "answer": 3,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 42) (Set 58) (Set 176) (Set 365) (Set 368) (Set 651) (Set 711)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 136) (Set 138) (Set 234) (Set 357) (Set 712)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 713)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 68) (Set 177) (Set 714)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 157) (Set 715)",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "0/1 Knapsack time complexity? (Set 716)",
    "options": [
      "O(n*W)",
      "O(n log n)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "DP table of items × capacity."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 663) (Set 717)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 718)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 51) (Set 641) (Set 719)",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "LCA (Lowest Common Ancestor) in BST takes? (Set 60) (Set 638) (Set 720)",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 371) (Set 467) (Set 721)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Circular queue solves which problem? (Set 196) (Set 722)",
    "options": [
      "Sorting",
      "Searching",
      "Balancing",
      "Wasted space in linear queue"
    ],
    "answer": 3,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 61) (Set 97) (Set 723)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort? (Set 103) (Set 724)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 63) (Set 356) (Set 391) (Set 725)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 371) (Set 467) (Set 721) (Set 726)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Stack? (Set 727)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of accessing an array element by index? (Set 184) (Set 728)",
    "options": [
      "O(1)",
      "O(n²)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "Array access is constant time via direct addressing."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Middle of linked list found using? (Set 729)",
    "options": [
      "Recursion",
      "Slow and fast pointer",
      "Stack",
      "Counting then traversing"
    ],
    "answer": 1,
    "explanation": "When fast reaches end, slow is at middle."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack? (Set 252) (Set 730)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 681) (Set 731)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 282) (Set 325) (Set 732)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Red-Black Tree, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap? (Set 733)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the space complexity of merge sort? (Set 213) (Set 734)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "N-Queens problem places N queens such that? (Set 735)",
    "options": [
      "No two queens attack each other",
      "All queens are in one row",
      "Queens are adjacent",
      "Queens form diagonal"
    ],
    "answer": 0,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a BST? (Set 233) (Set 670) (Set 736)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 737)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Open addressing resolves collisions by? (Set 449) (Set 738)",
    "options": [
      "Ignoring collision",
      "Using linked lists",
      "Probing for next empty slot",
      "Creating new table"
    ],
    "answer": 2,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 122) (Set 452) (Set 476) (Set 739)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Disjoint Set Union find uses? (Set 107) (Set 296) (Set 740)",
    "options": [
      "Sorting",
      "Hashing",
      "BFS",
      "Path compression and union by rank"
    ],
    "answer": 3,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the space complexity of merge sort? (Set 213) (Set 741)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Dijkstra's algorithm fails with? (Set 742)",
    "options": [
      "Undirected graphs",
      "Dense graphs",
      "Negative edge weights",
      "Positive weights"
    ],
    "answer": 2,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 743)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 744)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Time complexity of enqueue in circular queue? (Set 745)",
    "options": [
      "O(n²)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 51) (Set 641) (Set 746)",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Rehashing only",
      "Open addressing"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Kruskal's algorithm is? (Set 221) (Set 747)",
    "options": [
      "Greedy MST using sorted edges",
      "Dynamic programming",
      "Divide and conquer",
      "BFS-based"
    ],
    "answer": 0,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LCS (Longest Common Subsequence) of two strings? (Set 748)",
    "options": [
      "O(2^n)",
      "O(m+n)",
      "O(m*n)",
      "O(m²)"
    ],
    "answer": 2,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 83) (Set 749)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  }
];
