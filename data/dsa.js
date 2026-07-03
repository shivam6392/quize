window.quizData = window.quizData || {};
window.quizData.dsa = [
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Binary search halves the search space each step."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
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
      "Upper bound of growth rate",
      "Average case only (commonly used)",
      "Exact growth in most cases",
      "Lower bound by design"
    ],
    "answer": 0,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of accessing an array element by index?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Array access is constant time via direct addressing."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1 in practice",
      "T(n) = n! in most cases",
      "T(n) = T(n-1) + n"
    ],
    "answer": 0,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Omega represents?",
    "options": [
      "Tight bound",
      "Lower bound",
      "Upper bound",
      "Average case"
    ],
    "answer": 1,
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
      "Upper bound only",
      "Tight bound"
    ],
    "answer": 3,
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
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Already sorted array needs only one pass."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is amortized analysis?",
    "options": [
      "Space analysis (standard definition)",
      "Best case only as per specification",
      "Average cost per operation over a sequence",
      "Worst case only as per specification"
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
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort?",
    "options": [
      "T(n) = T(n/2) + O(1)",
      "T(n) = T(n-1) + O(n)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = nT(n/2) in practice"
    ],
    "answer": 2,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(n)",
      "O(n²)",
      "O(n log n)",
      "O(2^n)"
    ],
    "answer": 3,
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
      "Big Omega",
      "Theta (Θ)",
      "Big O",
      "Little o"
    ],
    "answer": 1,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Two Sum problem is best solved using?",
    "options": [
      "Stack",
      "Sorting",
      "HashMap",
      "Binary Search Tree"
    ],
    "answer": 2,
    "explanation": "HashMap gives O(1) lookup for complement."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves?",
    "options": [
      "String matching",
      "Shortest path in most cases",
      "Sorting (typical scenario)",
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
      "Tree balancing in typical implementations",
      "Graph traversal under normal conditions",
      "Sorting in typical implementations",
      "Subarray/substring problems with constraints"
    ],
    "answer": 3,
    "explanation": "Sliding window maintains a dynamic range."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Three",
      "Four",
      "Two",
      "Five"
    ],
    "answer": 0,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(k)",
      "O(n*k)"
    ],
    "answer": 1,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Minimum element",
      "Sorting status",
      "Graph connectivity",
      "Range sum queries"
    ],
    "answer": 3,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Best Time to Buy Stock uses which pattern?",
    "options": [
      "Two pointers (standard definition)",
      "Track minimum and max profit",
      "Sliding window (commonly used)",
      "Binary search as per specification"
    ],
    "answer": 1,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Move Zeroes problem moves zeros to?",
    "options": [
      "Sorted position",
      "Beginning",
      "End of array",
      "Middle in practice"
    ],
    "answer": 2,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Product of Array Except Self avoids division by using?",
    "options": [
      "Left and right product arrays",
      "Sorting (standard definition)",
      "Stack based on convention",
      "Queue (default behavior)"
    ],
    "answer": 0,
    "explanation": "Multiply prefix and suffix products."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Merge Intervals first step is?",
    "options": [
      "Use a stack in most cases",
      "Sort by end time",
      "Sort by start time",
      "Build a tree in practice"
    ],
    "answer": 2,
    "explanation": "Sorting by start allows sequential merging."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Two pointer technique works best on?",
    "options": [
      "Graphs by design",
      "Trees (general case)",
      "Sorted arrays",
      "Heaps in most cases"
    ],
    "answer": 2,
    "explanation": "Two pointers converge from both ends of sorted data."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "What does the sliding window technique maintain?",
    "options": [
      "A balanced tree as per specification",
      "A sorted subarray (primary approach)",
      "A priority queue in typical implementations",
      "A window of elements satisfying a condition"
    ],
    "answer": 3,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "KMP algorithm's time complexity for pattern matching?",
    "options": [
      "O(m²)",
      "O(n²)",
      "O(n*m)",
      "O(n+m)"
    ],
    "answer": 3,
    "explanation": "KMP uses failure function to avoid re-scanning."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Rabin-Karp uses what technique?",
    "options": [
      "Backtracking",
      "Hashing",
      "Greedy",
      "Dynamic programming"
    ],
    "answer": 1,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Checking if two strings are anagrams requires?",
    "options": [
      "Substring search by design",
      "Sorting only under normal conditions",
      "Regular expressions (general case)",
      "Character frequency comparison"
    ],
    "answer": 3,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "A palindrome reads the same?",
    "options": [
      "Only forward by design",
      "Forward and backward",
      "Diagonally in most cases",
      "Only backward in practice"
    ],
    "answer": 1,
    "explanation": "Palindromes are symmetric strings."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "StringBuilder in Java is preferred over String for?",
    "options": [
      "Frequent modifications (mutable)",
      "Sorting in typical implementations",
      "Read-only access by design",
      "Hashing (standard definition)"
    ],
    "answer": 0,
    "explanation": "StringBuilder avoids creating new String objects."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Time complexity to check if a string is palindrome?",
    "options": [
      "O(n²)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Compare characters from both ends in one pass."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Frequency count of characters uses?",
    "options": [
      "Stack based on convention",
      "Linked List as per specification",
      "Array of size 26 or HashMap",
      "Queue (commonly used)"
    ],
    "answer": 2,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Longest palindromic substring can be found in?",
    "options": [
      "O(n) in typical implementations",
      "O(n³) in typical implementations",
      "O(n²) using expand around center",
      "O(log n) (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Recursion only based on convention",
      "Stack (primary approach)",
      "Two pointers (slow and fast)",
      "Queue (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Reversing a singly linked list takes?",
    "options": [
      "O(log n) time by design",
      "O(n²) time in practice",
      "O(n) time, O(1) space",
      "O(n) space by design"
    ],
    "answer": 2,
    "explanation": "Iterate once, reversing pointers in-place."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Middle of linked list found using?",
    "options": [
      "Counting then traversing",
      "Recursion (typical scenario)",
      "Stack (commonly used)",
      "Slow and fast pointer"
    ],
    "answer": 3,
    "explanation": "When fast reaches end, slow is at middle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Merge two sorted linked lists time complexity?",
    "options": [
      "O(n*m)",
      "O(log(n+m))",
      "O(n+m)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Compare heads and merge in single pass."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Doubly linked list advantage over singly?",
    "options": [
      "Less memory (primary approach)",
      "Simpler implementation in practice",
      "Traversal in both directions",
      "Faster access by index in practice"
    ],
    "answer": 2,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself (general case)",
      "NULL (typical scenario)",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Queue in typical implementations",
      "Stack in typical implementations",
      "Length difference or two-pointer approach",
      "Sorting in typical implementations"
    ],
    "answer": 2,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Remove Nth node from end uses?",
    "options": [
      "Reverse list (commonly used)",
      "Binary search by design",
      "Stack of size N in practice",
      "Two pointers with N gap"
    ],
    "answer": 3,
    "explanation": "Fast pointer leads by N, both advance until fast reaches end."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack follows which principle?",
    "options": [
      "LILO in typical implementations",
      "FIFO under normal conditions",
      "Random access by design",
      "LIFO (Last In First Out)"
    ],
    "answer": 3,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Balanced parentheses checking uses?",
    "options": [
      "Array",
      "Queue",
      "Tree",
      "Stack"
    ],
    "answer": 3,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Monotonic stack is used for?",
    "options": [
      "Next greater/smaller element problems",
      "String matching (commonly used)",
      "BFS in typical implementations",
      "Sorting in typical implementations"
    ],
    "answer": 0,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Infix to postfix conversion uses?",
    "options": [
      "Linked list by design",
      "Queue in practice",
      "Stack for operators",
      "Tree by design"
    ],
    "answer": 2,
    "explanation": "Operators are pushed/popped based on precedence."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Stack memory is exhausted (e.g., deep recursion)",
      "Array is sorted in typical implementations",
      "Queue is full in typical implementations",
      "Heap is full in typical implementations"
    ],
    "answer": 0,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Postfix expression evaluation uses?",
    "options": [
      "Two stacks by design",
      "Tree (general case)",
      "Queue (general case)",
      "Stack for operands"
    ],
    "answer": 3,
    "explanation": "Push operands, pop two for each operator."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Queue follows which principle?",
    "options": [
      "Random access (commonly used)",
      "FIFO (First In First Out)",
      "LIFO (default behavior)",
      "Priority (widely accepted)"
    ],
    "answer": 1,
    "explanation": "First element enqueued is first dequeued."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Circular queue solves which problem?",
    "options": [
      "Wasted space in linear queue",
      "Searching (standard definition)",
      "Balancing (widely accepted)",
      "Sorting (default behavior)"
    ],
    "answer": 0,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at?",
    "options": [
      "Middle only in practice",
      "Only front by design",
      "Both front and rear",
      "Only rear (commonly used)"
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
      "Heap (binary heap)",
      "Linked list in most cases",
      "Array (widely accepted)",
      "Stack (primary approach)"
    ],
    "answer": 0,
    "explanation": "Heap gives O(log n) insert and extract-min/max."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "BFS graph traversal uses?",
    "options": [
      "Priority queue",
      "Deque",
      "Stack",
      "Queue"
    ],
    "answer": 3,
    "explanation": "BFS explores level by level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Time complexity of enqueue in circular queue?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "HashMap provides average case lookup of?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Hash function maps key directly to bucket."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Collision in hashing means?",
    "options": [
      "Duplicate keys by design",
      "Two keys map to same index",
      "Key not found in standard usage",
      "Hash table is full by design"
    ],
    "answer": 1,
    "explanation": "Different keys producing same hash cause collision."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using?",
    "options": [
      "Sorting (standard definition)",
      "Linked list at each bucket",
      "Open addressing (widely accepted)",
      "Rehashing only (commonly used)"
    ],
    "answer": 1,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by?",
    "options": [
      "Using linked lists in most cases",
      "Ignoring collision (commonly used)",
      "Probing for next empty slot",
      "Creating new table by design"
    ],
    "answer": 2,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when?",
    "options": [
      "After deletion only by design",
      "Table is empty based on convention",
      "Load factor exceeds threshold",
      "First insertion (typical scenario)"
    ],
    "answer": 2,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "HashSet stores?",
    "options": [
      "Duplicates allowed",
      "Sorted elements",
      "Key-value pairs",
      "Unique elements only"
    ],
    "answer": 3,
    "explanation": "HashSet rejects duplicate entries."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "What is a good hash function property?",
    "options": [
      "Uniform distribution of keys",
      "Always returns 0 (typical scenario)",
      "Ignores input (commonly used)",
      "Returns key itself in most cases"
    ],
    "answer": 0,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Sorted ascending order",
      "Random order in most cases",
      "Level order by design",
      "Descending order by design"
    ],
    "answer": 0,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Height of a balanced BST with n nodes?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "Balanced tree has logarithmic height."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(h) where h is height",
      "O(n log n) in standard usage",
      "O(1) under normal conditions",
      "O(n²) (primary approach)"
    ],
    "answer": 0,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "AVL tree maintains balance by?",
    "options": [
      "Rotations after insert/delete",
      "Using extra array in practice",
      "Rebuilding tree (widely accepted)",
      "Sorting nodes (standard definition)"
    ],
    "answer": 0,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Binary tree maximum path sum problem uses?",
    "options": [
      "Recursion with global max tracking",
      "Greedy (standard definition)",
      "BFS in typical implementations",
      "Sorting (standard definition)"
    ],
    "answer": 0,
    "explanation": "At each node, compute max path through it."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Preorder traversal visits?",
    "options": [
      "Left, Root, Right",
      "Right, Root, Left",
      "Root, Left, Right",
      "Left, Right, Root"
    ],
    "answer": 2,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Postorder traversal visits?",
    "options": [
      "Left, Root, Right",
      "Left, Right, Root",
      "Root, Left, Right",
      "Right, Left, Root"
    ],
    "answer": 1,
    "explanation": "Post = root last, after children."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Level order traversal uses?",
    "options": [
      "Stack by design",
      "Sorting",
      "Recursion only",
      "Queue (BFS)"
    ],
    "answer": 3,
    "explanation": "Process nodes level by level using queue."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Diameter of binary tree is?",
    "options": [
      "Height of tree (general case)",
      "Longest path between any two nodes",
      "Number of leaves based on convention",
      "Root to deepest node in standard usage"
    ],
    "answer": 1,
    "explanation": "Diameter = max of left height + right height at each node."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Segment tree is used for?",
    "options": [
      "Range queries and updates efficiently",
      "String matching (primary approach)",
      "Sorting in typical implementations",
      "Graph traversal under normal conditions"
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
      "Equal to children in most cases",
      "Random under normal conditions",
      "Less than children (widely accepted)",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "BST search time complexity (balanced)?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n²)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Balanced BST halves search space each step."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "BFS uses which data structure?",
    "options": [
      "Queue",
      "Heap",
      "Stack",
      "Array"
    ],
    "answer": 0,
    "explanation": "BFS explores neighbors level-by-level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "DFS uses which data structure?",
    "options": [
      "Heap (commonly used)",
      "Array by design",
      "Queue (default behavior)",
      "Stack (or recursion)"
    ],
    "answer": 3,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Dijkstra's algorithm fails with?",
    "options": [
      "Positive weights",
      "Negative edge weights",
      "Dense graphs (commonly used)",
      "Undirected graphs"
    ],
    "answer": 1,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Topological sort applies to?",
    "options": [
      "Directed Acyclic Graphs (DAG)",
      "Cyclic graphs (default behavior)",
      "Undirected graphs in standard usage",
      "Weighted graphs only (commonly used)"
    ],
    "answer": 0,
    "explanation": "Topological ordering requires no cycles."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Union-Find is used in?",
    "options": [
      "Kruskal's MST and cycle detection",
      "String matching based on convention",
      "Shortest path in most cases",
      "BFS under normal conditions"
    ],
    "answer": 0,
    "explanation": "Union-Find efficiently tracks connected components."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Bellman-Ford handles?",
    "options": [
      "Only positive weights",
      "Negative edge weights",
      "Only trees in standard usage",
      "Only undirected in practice"
    ],
    "answer": 1,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Divide and conquer in standard usage",
      "Dynamic programming in practice",
      "BFS-based (primary approach)",
      "Greedy MST using sorted edges"
    ],
    "answer": 3,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Prim's algorithm starts from?",
    "options": [
      "All vertices",
      "Leaf node (general case)",
      "Heaviest edge",
      "Any single vertex"
    ],
    "answer": 3,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Floyd-Warshall finds?",
    "options": [
      "Topological order in most cases",
      "All-pairs shortest paths",
      "Single-source shortest path",
      "MST (widely accepted)"
    ],
    "answer": 1,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Cycle detection in undirected graph uses?",
    "options": [
      "DFS with parent tracking or Union-Find",
      "Topological sort (commonly used)",
      "BFS only in typical implementations",
      "Dijkstra in typical implementations"
    ],
    "answer": 0,
    "explanation": "Back edge to non-parent indicates cycle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V²)",
      "O(E)",
      "O(V+E)"
    ],
    "answer": 1,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity?",
    "options": [
      "O(V²)",
      "O(V)",
      "O(E²)",
      "O(V+E)"
    ],
    "answer": 3,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Memoization is?",
    "options": [
      "Top-down DP with caching",
      "Brute force by design",
      "Bottom-up approach in practice",
      "Greedy (standard definition)"
    ],
    "answer": 0,
    "explanation": "Store results of subproblems to avoid recomputation."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Tabulation is?",
    "options": [
      "Backtracking in most cases",
      "Top-down approach in most cases",
      "Recursion (general case)",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "0/1 Knapsack time complexity?",
    "options": [
      "O(n log n)",
      "O(2^n)",
      "O(n*W)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "DP table of items × capacity."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
    "options": [
      "O(n log n)",
      "O(2^n)",
      "O(n) in practice",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(2^n)",
      "O(m*n)",
      "O(m+n)"
    ],
    "answer": 2,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Coin Change problem (min coins) is solved by?",
    "options": [
      "Greedy always (widely accepted)",
      "DP (unbounded knapsack variant)",
      "Sorting under normal conditions",
      "BFS only as per specification"
    ],
    "answer": 1,
    "explanation": "Try each coin, take minimum."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Matrix Chain Multiplication optimizes?",
    "options": [
      "Matrix values as per specification",
      "Matrix sorting in standard usage",
      "Matrix dimensions in most cases",
      "Order of matrix multiplications"
    ],
    "answer": 3,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "DP on grids typically moves?",
    "options": [
      "Diagonally only",
      "All 8 directions",
      "Right and down",
      "Up only by design"
    ],
    "answer": 2,
    "explanation": "Grid DP usually considers right/down movements."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Optimal substructure means?",
    "options": [
      "Only greedy works under normal conditions",
      "Random solutions work (primary approach)",
      "Optimal solution contains optimal sub-solutions",
      "Problem has no solution in typical implementations"
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
      "Same subproblems are solved multiple times",
      "No subproblems exist (primary approach)",
      "Linear scan suffices (standard definition)",
      "Each subproblem is unique by design"
    ],
    "answer": 0,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by?",
    "options": [
      "Earliest finish time",
      "Random in standard usage",
      "Latest start by design",
      "Maximum duration"
    ],
    "answer": 0,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Fractional knapsack allows?",
    "options": [
      "Only whole items (general case)",
      "Taking fractions of items",
      "No items (primary approach)",
      "Negative weights in most cases"
    ],
    "answer": 1,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Huffman coding builds?",
    "options": [
      "Graph as per specification",
      "Optimal prefix-free binary tree",
      "Balanced BST (typical scenario)",
      "Hash table as per specification"
    ],
    "answer": 1,
    "explanation": "Greedy: merge two lowest-frequency nodes."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
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
    "difficulty": "Easy",
    "question": "Minimum platforms problem uses?",
    "options": [
      "Stack (typical scenario)",
      "Queue based on convention",
      "Sorting arrival/departure times",
      "Binary search as per specification"
    ],
    "answer": 2,
    "explanation": "Sort and count overlapping intervals."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Greedy algorithms guarantee optimal solution when?",
    "options": [
      "Always in typical implementations",
      "Never in typical implementations",
      "Greedy choice property and optimal substructure hold",
      "Only for sorting in typical implementations"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "Queens form diagonal (general case)",
      "All queens are in one row in practice",
      "Queens are adjacent (widely accepted)",
      "No two queens attack each other"
    ],
    "answer": 3,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Sudoku solver uses?",
    "options": [
      "Sorting under normal conditions",
      "BFS in typical implementations",
      "Backtracking with constraint checking",
      "Greedy under normal conditions"
    ],
    "answer": 2,
    "explanation": "Try digits 1-9, backtrack if constraint violated."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using?",
    "options": [
      "Dynamic programming in practice",
      "Sorting in practice",
      "BFS only as per specification",
      "Recursion and backtracking"
    ],
    "answer": 3,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Generating all permutations uses?",
    "options": [
      "Sorting in practice",
      "Hashing (widely accepted)",
      "Queue (widely accepted)",
      "Swap-based backtracking"
    ],
    "answer": 3,
    "explanation": "Swap elements, recurse, then swap back."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Combination Sum allows?",
    "options": [
      "Sorting only (primary approach)",
      "Each element used once in practice",
      "Negative numbers based on convention",
      "Reusing elements to reach target"
    ],
    "answer": 3,
    "explanation": "Include current element again or move to next."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n) in most cases",
      "O(n²) by design",
      "Exponential",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives?",
    "options": [
      "1",
      "The number itself",
      "0",
      "Negative number"
    ],
    "answer": 2,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "The number itself",
      "Complement by design",
      "1 based on convention",
      "0 in most cases"
    ],
    "answer": 0,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Check if number is power of 2 using?",
    "options": [
      "n & (n-1) == 0",
      "n >> 1 == 0",
      "n | 1 == n",
      "n % 2 == 0"
    ],
    "answer": 0,
    "explanation": "Power of 2 has single set bit; n&(n-1) clears it."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Left shift by 1 is equivalent to?",
    "options": [
      "Multiply by 2",
      "Divide by 2",
      "Subtract 1",
      "Add 1 in most cases"
    ],
    "answer": 0,
    "explanation": "Shifting bits left doubles the value."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Multiply by 2 (commonly used)",
      "XOR with 1 as per specification",
      "Add 2 (default behavior)",
      "Divide by 2 (integer division)"
    ],
    "answer": 3,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Bit masking is used for?",
    "options": [
      "Sorting (standard definition)",
      "String matching (widely accepted)",
      "Extracting or setting specific bits",
      "Graph traversal as per specification"
    ],
    "answer": 2,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Trie is best for?",
    "options": [
      "Sorting numbers (primary approach)",
      "Graph traversal by design",
      "Matrix operations based on convention",
      "Prefix-based string operations"
    ],
    "answer": 3,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Disjoint Set Union find uses?",
    "options": [
      "Sorting as per specification",
      "Path compression and union by rank",
      "Hashing in typical implementations",
      "BFS under normal conditions"
    ],
    "answer": 1,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Fenwick tree (BIT) supports?",
    "options": [
      "String matching in standard usage",
      "Graph BFS in typical implementations",
      "Point updates and prefix sum queries",
      "Sorting (standard definition)"
    ],
    "answer": 2,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Segment tree range query time?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "Tree structure allows logarithmic range operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Doubly Linked List?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Stack?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Insertion under Best Case takes O(1)."
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
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a BST?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Min Heap?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Max Heap?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a BST?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For BST, a Deletion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (sorted)?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Singly Linked List?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Red-Black Tree?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Stack?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Singly Linked List?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Array (unsorted)?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Singly Linked List?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a AVL Tree?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Access under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Singly Linked List?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Queue?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a BST?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap?",
    "options": [
      "O(n)",
      "O(1)",
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
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (sorted)?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Array (sorted), a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Array (sorted)?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Red-Black Tree?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Access under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Min Heap?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Stack?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
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
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Stack?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Doubly Linked List?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Queue?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Doubly Linked List?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Array (unsorted)?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Min Heap?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a AVL Tree?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Singly Linked List?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Array (sorted)?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (unsorted)?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (sorted)?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Array (sorted), a Insertion under Best Case takes O(n)."
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
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Array (unsorted)?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Stack?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Doubly Linked List?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Stack?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (sorted)?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Queue?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Queue?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Search under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Red-Black Tree?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Access under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Queue?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Array (sorted)?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Deletion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Min Heap?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Doubly Linked List?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Stack?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Deletion under Best Case takes O(1)."
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
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Queue?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Doubly Linked List?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Red-Black Tree?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
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
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a AVL Tree?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Red-Black Tree?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a AVL Tree?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Min Heap?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Min Heap?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Max Heap?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Max Heap?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Red-Black Tree?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Red-Black Tree, a Insertion under Worst Case takes O(log n)."
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
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Stack?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (unsorted)?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a BST?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For BST, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Min Heap?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Red-Black Tree?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Red-Black Tree?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Max Heap?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Stack?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a BST?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a BST?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Doubly Linked List?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Red-Black Tree?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a AVL Tree?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Singly Linked List?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Array (sorted)?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Doubly Linked List?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Insertion under Average Case takes O(1)."
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
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Stack?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a AVL Tree?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Singly Linked List?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Min Heap?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Doubly Linked List?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Singly Linked List?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (sorted)?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Array (sorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Min Heap?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Array (unsorted)?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Deletion under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Stack?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Search under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a BST?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For BST, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a BST?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a BST?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Queue?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a BST?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For BST, a Access under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Array (unsorted)?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Deletion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a BST?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Max Heap?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Max Heap?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Max Heap?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Singly Linked List?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Queue?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Red-Black Tree?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a AVL Tree?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Doubly Linked List?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Max Heap?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Min Heap?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Doubly Linked List?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Doubly Linked List?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Queue?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Min Heap?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Array (sorted)?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Array (sorted), a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a AVL Tree?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (unsorted)?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a AVL Tree?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Array (unsorted)?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a BST?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For BST, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Max Heap?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Singly Linked List?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a AVL Tree?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, a Access under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Detecting intersection point of two lists uses? (Set 1)",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting in typical implementations",
      "Stack in typical implementations",
      "Queue in typical implementations"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 2)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Greedy algorithms guarantee optimal solution when? (Set 4)",
    "options": [
      "Always in typical implementations",
      "Greedy choice property and optimal substructure hold",
      "Never in typical implementations",
      "Only for sorting in typical implementations"
    ],
    "answer": 1,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Prim's algorithm starts from? (Set 5)",
    "options": [
      "All vertices",
      "Heaviest edge",
      "Any single vertex",
      "Leaf node in most cases"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 6)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 7)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 8)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when? (Set 9)",
    "options": [
      "Load factor exceeds threshold",
      "First insertion as per specification",
      "After deletion only in most cases",
      "Table is empty based on convention"
    ],
    "answer": 0,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Stack? (Set 10)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity? (Set 12)",
    "options": [
      "O(V+E)",
      "O(V²)",
      "O(E²)",
      "O(V)"
    ],
    "answer": 0,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Check if number is power of 2 using? (Set 13)",
    "options": [
      "n & (n-1) == 0",
      "n | 1 == n",
      "n % 2 == 0",
      "n >> 1 == 0"
    ],
    "answer": 0,
    "explanation": "Power of 2 has single set bit; n&(n-1) clears it."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Min Heap? (Set 14)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Min Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 15)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Remove Nth node from end uses? (Set 16)",
    "options": [
      "Two pointers with N gap",
      "Reverse list (general case)",
      "Binary search by design",
      "Stack of size N by design"
    ],
    "answer": 0,
    "explanation": "Fast pointer leads by N, both advance until fast reaches end."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Stack? (Set 17)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 18)",
    "options": [
      "Probing for next empty slot",
      "Creating new table in practice",
      "Ignoring collision in most cases",
      "Using linked lists in practice"
    ],
    "answer": 0,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 18) (Set 19)",
    "options": [
      "Creating new table (general case)",
      "Ignoring collision (commonly used)",
      "Using linked lists in most cases",
      "Probing for next empty slot"
    ],
    "answer": 3,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that? (Set 20)",
    "options": [
      "No two queens attack each other",
      "All queens are in one row in practice",
      "Queens form diagonal in most cases",
      "Queens are adjacent (primary approach)"
    ],
    "answer": 0,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 21)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Preorder traversal visits? (Set 22)",
    "options": [
      "Left, Right, Root",
      "Left, Root, Right",
      "Root, Left, Right",
      "Right, Root, Left"
    ],
    "answer": 2,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Disjoint Set Union find uses? (Set 23)",
    "options": [
      "Sorting under normal conditions",
      "Hashing (standard definition)",
      "Path compression and union by rank",
      "BFS under normal conditions"
    ],
    "answer": 2,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Job scheduling with deadlines maximizes? (Set 24)",
    "options": [
      "Total profit",
      "Number of jobs",
      "Minimum cost",
      "Total time"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11) (Set 25)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is? (Set 26)",
    "options": [
      "Less than children (typical scenario)",
      "Equal to children (default behavior)",
      "Random in typical implementations",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Postfix expression evaluation uses? (Set 27)",
    "options": [
      "Tree (typical scenario)",
      "Two stacks (general case)",
      "Queue (primary approach)",
      "Stack for operands"
    ],
    "answer": 3,
    "explanation": "Push operands, pop two for each operator."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 28)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 7) (Set 29)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 30)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Matrix Chain Multiplication optimizes? (Set 31)",
    "options": [
      "Matrix values under normal conditions",
      "Matrix dimensions as per specification",
      "Matrix sorting as per specification",
      "Order of matrix multiplications"
    ],
    "answer": 3,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 32)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 33)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Red-Black Tree? (Set 34)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Array (unsorted)? (Set 35)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 36)",
    "options": [
      "Probing for next empty slot",
      "Creating new table in most cases",
      "Using linked lists by design",
      "Ignoring collision in practice"
    ],
    "answer": 0,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Tabulation is? (Set 37)",
    "options": [
      "Top-down approach in practice",
      "Backtracking in standard usage",
      "Bottom-up DP using table",
      "Recursion in most cases"
    ],
    "answer": 2,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11) (Set 25) (Set 38)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 39)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)? (Set 40)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "Recursion stack depth is log n on average."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity? (Set 12) (Set 41)",
    "options": [
      "O(E²)",
      "O(V+E)",
      "O(V)",
      "O(V²)"
    ],
    "answer": 1,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of binary search? (Set 42)",
    "options": [
      "O(n)",
      "O(n²)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Binary search halves the search space each step."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Detecting intersection point of two lists uses? (Set 1) (Set 43)",
    "options": [
      "Length difference or two-pointer approach",
      "Stack in typical implementations",
      "Sorting in typical implementations",
      "Queue in typical implementations"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 44)",
    "options": [
      "Linked list at each bucket",
      "Sorting (typical scenario)",
      "Rehashing only (primary approach)",
      "Open addressing in most cases"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Greedy algorithms guarantee optimal solution when? (Set 45)",
    "options": [
      "Never in typical implementations",
      "Only for sorting in typical implementations",
      "Always in typical implementations",
      "Greedy choice property and optimal substructure hold"
    ],
    "answer": 3,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a BST? (Set 46)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that? (Set 20) (Set 47)",
    "options": [
      "No two queens attack each other",
      "Queens form diagonal (general case)",
      "Queens are adjacent in standard usage",
      "All queens are in one row by design"
    ],
    "answer": 0,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 48)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves? (Set 49)",
    "options": [
      "Shortest path in practice",
      "String matching",
      "Maximum subarray sum",
      "Sorting in most cases"
    ],
    "answer": 2,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 50)",
    "options": [
      "Dynamic programming in practice",
      "BFS only (default behavior)",
      "Sorting (standard definition)",
      "Recursion and backtracking"
    ],
    "answer": 3,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 51)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Deletion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Memoization is? (Set 52)",
    "options": [
      "Bottom-up approach by design",
      "Top-down DP with caching",
      "Brute force (general case)",
      "Greedy (general case)"
    ],
    "answer": 1,
    "explanation": "Store results of subproblems to avoid recomputation."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 53)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 54)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "0/1 Knapsack time complexity? (Set 55)",
    "options": [
      "O(n log n)",
      "O(n*W)",
      "O(n²)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "DP table of items × capacity."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56)",
    "options": [
      "Middle only (general case)",
      "Only rear (general case)",
      "Both front and rear",
      "Only front (commonly used)"
    ],
    "answer": 2,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 30) (Set 57)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Min Heap? (Set 14) (Set 58)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Min Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Doubly Linked List? (Set 59)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Max Heap? (Set 60)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 61)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Deletion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Two Sum problem is best solved using? (Set 62)",
    "options": [
      "Binary Search Tree",
      "HashMap",
      "Sorting",
      "Stack"
    ],
    "answer": 1,
    "explanation": "HashMap gives O(1) lookup for complement."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Red-Black Tree? (Set 63)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of accessing an array element by index? (Set 64)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n²)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "Array access is constant time via direct addressing."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (unsorted)? (Set 65)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Combination Sum allows? (Set 66)",
    "options": [
      "Negative numbers (widely accepted)",
      "Reusing elements to reach target",
      "Sorting only (typical scenario)",
      "Each element used once in practice"
    ],
    "answer": 1,
    "explanation": "Include current element again or move to next."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci? (Set 67)",
    "options": [
      "O(n²)",
      "O(n log n)",
      "O(n)",
      "O(2^n)"
    ],
    "answer": 3,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Stack? (Set 68)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Stack? (Set 69)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Min Heap? (Set 70)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a BST? (Set 71)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Time complexity to check if a string is palindrome? (Set 72)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Compare characters from both ends in one pass."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 73)",
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
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Min Heap? (Set 70) (Set 74)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is? (Set 75)",
    "options": [
      "Less than children based on convention",
      "Greater than or equal to children",
      "Equal to children (standard definition)",
      "Random as per specification"
    ],
    "answer": 1,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Topological sort applies to? (Set 76)",
    "options": [
      "Weighted graphs only (commonly used)",
      "Directed Acyclic Graphs (DAG)",
      "Undirected graphs (default behavior)",
      "Cyclic graphs (typical scenario)"
    ],
    "answer": 1,
    "explanation": "Topological ordering requires no cycles."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves? (Set 49) (Set 77)",
    "options": [
      "String matching",
      "Shortest path in practice",
      "Sorting (default behavior)",
      "Maximum subarray sum"
    ],
    "answer": 3,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 78)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Overlapping subproblems means? (Set 79)",
    "options": [
      "Linear scan suffices as per specification",
      "Each subproblem is unique in practice",
      "Same subproblems are solved multiple times",
      "No subproblems exist in typical implementations"
    ],
    "answer": 2,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Dijkstra's algorithm fails with? (Set 80)",
    "options": [
      "Positive weights",
      "Negative edge weights",
      "Undirected graphs",
      "Dense graphs in most cases"
    ],
    "answer": 1,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 81)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Postfix expression evaluation uses? (Set 27) (Set 82)",
    "options": [
      "Two stacks (general case)",
      "Stack for operands",
      "Tree as per specification",
      "Queue (primary approach)"
    ],
    "answer": 1,
    "explanation": "Push operands, pop two for each operator."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a BST? (Set 83)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For BST, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Greedy algorithms guarantee optimal solution when? (Set 4) (Set 84)",
    "options": [
      "Only for sorting in typical implementations",
      "Never in typical implementations",
      "Always in typical implementations",
      "Greedy choice property and optimal substructure hold"
    ],
    "answer": 3,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LCS (Longest Common Subsequence) of two strings? (Set 85)",
    "options": [
      "O(m*n)",
      "O(m+n)",
      "O(m²)",
      "O(2^n)"
    ],
    "answer": 0,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 86)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 87)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Max Heap? (Set 88)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 32) (Set 89)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 15) (Set 90)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Matrix Chain Multiplication optimizes? (Set 31) (Set 91)",
    "options": [
      "Order of matrix multiplications",
      "Matrix sorting (commonly used)",
      "Matrix dimensions in most cases",
      "Matrix values (commonly used)"
    ],
    "answer": 0,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Left shift by 1 is equivalent to? (Set 92)",
    "options": [
      "Subtract 1",
      "Divide by 2",
      "Multiply by 2",
      "Add 1 by design"
    ],
    "answer": 2,
    "explanation": "Shifting bits left doubles the value."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 15) (Set 93)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n²)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Stack? (Set 94)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Queue? (Set 95)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 50) (Set 96)",
    "options": [
      "Recursion and backtracking",
      "BFS only (commonly used)",
      "Dynamic programming in most cases",
      "Sorting in standard usage"
    ],
    "answer": 0,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Preorder traversal visits? (Set 22) (Set 97)",
    "options": [
      "Left, Right, Root",
      "Left, Root, Right",
      "Root, Left, Right",
      "Right, Root, Left"
    ],
    "answer": 2,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 50) (Set 96) (Set 98)",
    "options": [
      "BFS only (commonly used)",
      "Recursion and backtracking",
      "Sorting (commonly used)",
      "Dynamic programming by design"
    ],
    "answer": 1,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Detecting intersection point of two lists uses? (Set 1) (Set 43) (Set 99)",
    "options": [
      "Stack in typical implementations",
      "Sorting in typical implementations",
      "Length difference or two-pointer approach",
      "Queue in typical implementations"
    ],
    "answer": 2,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 100)",
    "options": [
      "O(log n)",
      "O(n log n)",
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
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 101)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Postfix expression evaluation uses? (Set 27) (Set 82) (Set 102)",
    "options": [
      "Stack for operands",
      "Tree (primary approach)",
      "Queue (general case)",
      "Two stacks (general case)"
    ],
    "answer": 0,
    "explanation": "Push operands, pop two for each operator."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 103)",
    "options": [
      "Probing for next empty slot",
      "Using linked lists (general case)",
      "Creating new table (general case)",
      "Ignoring collision by design"
    ],
    "answer": 0,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a BST? (Set 104)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Stack? (Set 105)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Min Heap? (Set 14) (Set 106)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Graph adjacency matrix space complexity? (Set 107)",
    "options": [
      "O(E)",
      "O(V²)",
      "O(V+E)",
      "O(V)"
    ],
    "answer": 1,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a BST? (Set 108)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56) (Set 109)",
    "options": [
      "Both front and rear",
      "Only rear (commonly used)",
      "Only front in most cases",
      "Middle only (general case)"
    ],
    "answer": 0,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)? (Set 110)",
    "options": [
      "O(n)",
      "O(n²)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "Recursion stack depth is log n on average."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Red-Black Tree? (Set 111)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap? (Set 112)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Queue? (Set 113)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Dijkstra's algorithm fails with? (Set 114)",
    "options": [
      "Undirected graphs",
      "Dense graphs (commonly used)",
      "Negative edge weights",
      "Positive weights"
    ],
    "answer": 2,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 115)",
    "options": [
      "O(n²)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Stack? (Set 116)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Move Zeroes problem moves zeros to? (Set 117)",
    "options": [
      "End of array",
      "Middle in practice",
      "Beginning",
      "Sorted position"
    ],
    "answer": 0,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack? (Set 118)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Preorder traversal visits? (Set 22) (Set 119)",
    "options": [
      "Left, Right, Root",
      "Root, Left, Right",
      "Left, Root, Right",
      "Right, Root, Left"
    ],
    "answer": 1,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Queue? (Set 120)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves? (Set 49) (Set 121)",
    "options": [
      "String matching",
      "Maximum subarray sum",
      "Shortest path by design",
      "Sorting (primary approach)"
    ],
    "answer": 1,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Disjoint Set Union find uses? (Set 122)",
    "options": [
      "Sorting in typical implementations",
      "Hashing (standard definition)",
      "Path compression and union by rank",
      "BFS in typical implementations"
    ],
    "answer": 2,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a AVL Tree? (Set 123)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What does Big O notation describe? (Set 124)",
    "options": [
      "Exact growth as per specification",
      "Average case only (general case)",
      "Lower bound (primary approach)",
      "Upper bound of growth rate"
    ],
    "answer": 3,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Min Heap? (Set 125)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Min Heap, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 126)",
    "options": [
      "Two pointers (slow and fast)",
      "Queue (widely accepted)",
      "Stack in standard usage",
      "Recursion only (primary approach)"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 127)",
    "options": [
      "Recursion only in standard usage",
      "Two pointers (slow and fast)",
      "Queue (commonly used)",
      "Stack in standard usage"
    ],
    "answer": 1,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 128)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 129)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Union-Find is used in? (Set 130)",
    "options": [
      "BFS in typical implementations",
      "String matching (default behavior)",
      "Kruskal's MST and cycle detection",
      "Shortest path as per specification"
    ],
    "answer": 2,
    "explanation": "Union-Find efficiently tracks connected components."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Floyd-Warshall finds? (Set 131)",
    "options": [
      "MST (commonly used)",
      "All-pairs shortest paths",
      "Topological order by design",
      "Single-source shortest path"
    ],
    "answer": 1,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a AVL Tree? (Set 132)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Access under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives? (Set 133)",
    "options": [
      "Level order in standard usage",
      "Random order in most cases",
      "Sorted ascending order",
      "Descending order in practice"
    ],
    "answer": 2,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a BST? (Set 134)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11) (Set 135)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 126) (Set 136)",
    "options": [
      "Recursion only (commonly used)",
      "Stack in typical implementations",
      "Queue (widely accepted)",
      "Two pointers (slow and fast)"
    ],
    "answer": 3,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11) (Set 25) (Set 38) (Set 137)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Prim's algorithm starts from? (Set 138)",
    "options": [
      "Leaf node in most cases",
      "Heaviest edge",
      "All vertices",
      "Any single vertex"
    ],
    "answer": 3,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Min Heap? (Set 139)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "AVL tree maintains balance by? (Set 140)",
    "options": [
      "Rotations after insert/delete",
      "Using extra array (widely accepted)",
      "Sorting nodes (primary approach)",
      "Rebuilding tree (general case)"
    ],
    "answer": 0,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 141)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Monotonic stack is used for? (Set 142)",
    "options": [
      "Next greater/smaller element problems",
      "BFS in typical implementations",
      "String matching in typical implementations",
      "Sorting under normal conditions"
    ],
    "answer": 0,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 143)",
    "options": [
      "Both front and rear",
      "Only rear in most cases",
      "Only front (general case)",
      "Middle only in most cases"
    ],
    "answer": 0,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 141) (Set 144)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Array (sorted)? (Set 145)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)? (Set 146)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "Recursion stack depth is log n on average."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Circular queue solves which problem? (Set 147)",
    "options": [
      "Balancing (widely accepted)",
      "Sorting (commonly used)",
      "Wasted space in linear queue",
      "Searching (primary approach)"
    ],
    "answer": 2,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Best Time to Buy Stock uses which pattern? (Set 148)",
    "options": [
      "Two pointers by design",
      "Track minimum and max profit",
      "Sliding window (general case)",
      "Binary search by design"
    ],
    "answer": 1,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Stack? (Set 149)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Search under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (unsorted)? (Set 150)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Red-Black Tree? (Set 151)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Stack? (Set 152)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Max Heap? (Set 60) (Set 153)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Merge Intervals first step is? (Set 154)",
    "options": [
      "Build a tree by design",
      "Sort by start time",
      "Use a stack in most cases",
      "Sort by end time"
    ],
    "answer": 1,
    "explanation": "Sorting by start allows sequential merging."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 36) (Set 155)",
    "options": [
      "Ignoring collision in most cases",
      "Creating new table in practice",
      "Probing for next empty slot",
      "Using linked lists (general case)"
    ],
    "answer": 2,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Greedy algorithms guarantee optimal solution when? (Set 4) (Set 84) (Set 156)",
    "options": [
      "Always in typical implementations",
      "Greedy choice property and optimal substructure hold",
      "Never in typical implementations",
      "Only for sorting in typical implementations"
    ],
    "answer": 1,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Floyd-Warshall finds? (Set 131) (Set 157)",
    "options": [
      "MST in typical implementations",
      "All-pairs shortest paths",
      "Topological order in practice",
      "Single-source shortest path"
    ],
    "answer": 1,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 158)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Min Heap? (Set 14) (Set 159)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Queue? (Set 160)",
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
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 161)",
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
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)? (Set 40) (Set 162)",
    "options": [
      "O(n²)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Recursion stack depth is log n on average."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a BST? (Set 163)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For BST, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap? (Set 164)",
    "options": [
      "O(n log n)",
      "O(n)",
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
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 165)",
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
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 166)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Greedy algorithms guarantee optimal solution when? (Set 4) (Set 84) (Set 156) (Set 167)",
    "options": [
      "Always in typical implementations",
      "Only for sorting in typical implementations",
      "Greedy choice property and optimal substructure hold",
      "Never in typical implementations"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 168)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Combination Sum allows? (Set 66) (Set 169)",
    "options": [
      "Each element used once (commonly used)",
      "Reusing elements to reach target",
      "Negative numbers as per specification",
      "Sorting only under normal conditions"
    ],
    "answer": 1,
    "explanation": "Include current element again or move to next."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11) (Set 135) (Set 170)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 48) (Set 171)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56) (Set 109) (Set 172)",
    "options": [
      "Only front by design",
      "Middle only (general case)",
      "Only rear in practice",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Red-Black Tree? (Set 151) (Set 173)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Checking if two strings are anagrams requires? (Set 174)",
    "options": [
      "Sorting only (commonly used)",
      "Character frequency comparison",
      "Substring search as per specification",
      "Regular expressions in practice"
    ],
    "answer": 1,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Rabin-Karp uses what technique? (Set 175)",
    "options": [
      "Hashing",
      "Backtracking",
      "Greedy",
      "Dynamic programming"
    ],
    "answer": 0,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Longest palindromic substring can be found in? (Set 176)",
    "options": [
      "O(n²) using expand around center",
      "O(log n) based on convention",
      "O(n) (standard definition)",
      "O(n³) (standard definition)"
    ],
    "answer": 0,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack? (Set 177)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 178)",
    "options": [
      "Creating new table in most cases",
      "Using linked lists (general case)",
      "Ignoring collision (general case)",
      "Probing for next empty slot"
    ],
    "answer": 3,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Checking if two strings are anagrams requires? (Set 179)",
    "options": [
      "Character frequency comparison",
      "Regular expressions in practice",
      "Substring search (general case)",
      "Sorting only in practice"
    ],
    "answer": 0,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Kruskal's algorithm is? (Set 180)",
    "options": [
      "Dynamic programming (general case)",
      "Greedy MST using sorted edges",
      "BFS-based in standard usage",
      "Divide and conquer in standard usage"
    ],
    "answer": 1,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Max Heap? (Set 181)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 165) (Set 182)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Stack? (Set 94) (Set 183)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 184)",
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
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 185)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 186)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a BST? (Set 187)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For BST, a Insertion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 101) (Set 188)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Min Heap? (Set 14) (Set 58) (Set 189)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a AVL Tree? (Set 190)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Tabulation is? (Set 37) (Set 191)",
    "options": [
      "Bottom-up DP using table",
      "Top-down approach in practice",
      "Recursion (default behavior)",
      "Backtracking (typical scenario)"
    ],
    "answer": 0,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Fenwick tree (BIT) supports? (Set 192)",
    "options": [
      "Sorting in typical implementations",
      "String matching (standard definition)",
      "Graph BFS under normal conditions",
      "Point updates and prefix sum queries"
    ],
    "answer": 3,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives? (Set 193)",
    "options": [
      "Negative number",
      "0",
      "The number itself",
      "1"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives? (Set 194)",
    "options": [
      "Descending order in practice",
      "Random order by design",
      "Sorted ascending order",
      "Level order in practice"
    ],
    "answer": 2,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Doubly Linked List? (Set 59) (Set 195)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 36) (Set 155) (Set 196)",
    "options": [
      "Creating new table (commonly used)",
      "Ignoring collision in most cases",
      "Probing for next empty slot",
      "Using linked lists in most cases"
    ],
    "answer": 2,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 197)",
    "options": [
      "O(n²)",
      "O(n) in practice",
      "O(n log n)",
      "O(2^n)"
    ],
    "answer": 2,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity? (Set 12) (Set 198)",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E²)",
      "O(V²)"
    ],
    "answer": 1,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity? (Set 12) (Set 41) (Set 199)",
    "options": [
      "O(E²)",
      "O(V+E)",
      "O(V²)",
      "O(V)"
    ],
    "answer": 1,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 200)",
    "options": [
      "Queue based on convention",
      "Recursion only in standard usage",
      "Stack as per specification",
      "Two pointers (slow and fast)"
    ],
    "answer": 3,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Queue? (Set 201)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 202)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Middle of linked list found using? (Set 203)",
    "options": [
      "Recursion (widely accepted)",
      "Stack based on convention",
      "Slow and fast pointer",
      "Counting then traversing"
    ],
    "answer": 2,
    "explanation": "When fast reaches end, slow is at middle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Stack? (Set 68) (Set 204)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 8) (Set 205)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Queue? (Set 206)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "A palindrome reads the same? (Set 207)",
    "options": [
      "Only backward in most cases",
      "Forward and backward",
      "Diagonally (general case)",
      "Only forward in practice"
    ],
    "answer": 1,
    "explanation": "Palindromes are symmetric strings."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Kruskal's algorithm is? (Set 180) (Set 208)",
    "options": [
      "Greedy MST using sorted edges",
      "Divide and conquer (commonly used)",
      "Dynamic programming by design",
      "BFS-based based on convention"
    ],
    "answer": 0,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Greedy algorithms guarantee optimal solution when? (Set 4) (Set 84) (Set 156) (Set 167) (Set 209)",
    "options": [
      "Only for sorting in typical implementations",
      "Never in typical implementations",
      "Greedy choice property and optimal substructure hold",
      "Always in typical implementations"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 210)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Queue? (Set 120) (Set 211)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Fractional knapsack allows? (Set 212)",
    "options": [
      "Only whole items in practice",
      "No items (default behavior)",
      "Negative weights in practice",
      "Taking fractions of items"
    ],
    "answer": 3,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 39) (Set 213)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Array (sorted)? (Set 214)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Postfix expression evaluation uses? (Set 27) (Set 82) (Set 215)",
    "options": [
      "Stack for operands",
      "Tree as per specification",
      "Two stacks in most cases",
      "Queue in practice"
    ],
    "answer": 0,
    "explanation": "Push operands, pop two for each operator."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Priority queue is typically implemented using? (Set 216)",
    "options": [
      "Array (primary approach)",
      "Heap (binary heap)",
      "Linked list in most cases",
      "Stack in practice"
    ],
    "answer": 1,
    "explanation": "Heap gives O(log n) insert and extract-min/max."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same? (Set 217)",
    "options": [
      "Little o",
      "Big O",
      "Theta (Θ)",
      "Big Omega"
    ],
    "answer": 2,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Middle of linked list found using? (Set 203) (Set 218)",
    "options": [
      "Counting then traversing",
      "Stack (typical scenario)",
      "Recursion (widely accepted)",
      "Slow and fast pointer"
    ],
    "answer": 3,
    "explanation": "When fast reaches end, slow is at middle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (unsorted)? (Set 65) (Set 219)",
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
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Job scheduling with deadlines maximizes? (Set 220)",
    "options": [
      "Minimum cost",
      "Total time",
      "Total profit",
      "Number of jobs"
    ],
    "answer": 2,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Array (sorted)? (Set 221)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 100) (Set 222)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Detecting intersection point of two lists uses? (Set 1) (Set 43) (Set 99) (Set 223)",
    "options": [
      "Queue in typical implementations",
      "Sorting in typical implementations",
      "Length difference or two-pointer approach",
      "Stack in typical implementations"
    ],
    "answer": 2,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (unsorted)? (Set 224)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Array (sorted)? (Set 225)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (sorted), a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (unsorted)? (Set 224) (Set 226)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Queue? (Set 227)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "What is a good hash function property? (Set 228)",
    "options": [
      "Uniform distribution of keys",
      "Always returns 0 in standard usage",
      "Returns key itself in most cases",
      "Ignores input (default behavior)"
    ],
    "answer": 0,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 229)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Red-Black Tree, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 127) (Set 230)",
    "options": [
      "Recursion only in practice",
      "Queue (commonly used)",
      "Stack based on convention",
      "Two pointers (slow and fast)"
    ],
    "answer": 3,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap? (Set 231)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when? (Set 232)",
    "options": [
      "Table is empty in practice",
      "First insertion (default behavior)",
      "Load factor exceeds threshold",
      "After deletion only (commonly used)"
    ],
    "answer": 2,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Stack? (Set 94) (Set 233)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What does Big O notation describe? (Set 234)",
    "options": [
      "Average case only in practice",
      "Exact growth (commonly used)",
      "Lower bound in most cases",
      "Upper bound of growth rate"
    ],
    "answer": 3,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 100) (Set 235)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 127) (Set 230) (Set 236)",
    "options": [
      "Stack in typical implementations",
      "Two pointers (slow and fast)",
      "Queue in standard usage",
      "Recursion only (general case)"
    ],
    "answer": 1,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Stack? (Set 237)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 238)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "HashSet stores? (Set 239)",
    "options": [
      "Key-value pairs",
      "Sorted elements",
      "Duplicates allowed",
      "Unique elements only"
    ],
    "answer": 3,
    "explanation": "HashSet rejects duplicate entries."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Doubly linked list advantage over singly? (Set 240)",
    "options": [
      "Faster access by index by design",
      "Traversal in both directions",
      "Simpler implementation by design",
      "Less memory based on convention"
    ],
    "answer": 1,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 241)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Array (sorted), a Deletion under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 184) (Set 242)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 243)",
    "options": [
      "O(n²)",
      "O(2^n)",
      "O(n) in practice",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 244)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Max Heap? (Set 60) (Set 153) (Set 245)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack? (Set 177) (Set 246)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by? (Set 247)",
    "options": [
      "Maximum duration",
      "Random by design",
      "Earliest finish time",
      "Latest start in practice"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Max Heap? (Set 248)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Merge two sorted linked lists time complexity? (Set 249)",
    "options": [
      "O(n+m)",
      "O(n*m)",
      "O(n²)",
      "O(log(n+m))"
    ],
    "answer": 0,
    "explanation": "Compare heads and merge in single pass."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Two pointer technique works best on? (Set 250)",
    "options": [
      "Sorted arrays",
      "Graphs by design",
      "Heaps (general case)",
      "Trees by design"
    ],
    "answer": 0,
    "explanation": "Two pointers converge from both ends of sorted data."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 251)",
    "options": [
      "Both front and rear",
      "Only rear (general case)",
      "Middle only (general case)",
      "Only front (general case)"
    ],
    "answer": 0,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Stack? (Set 252)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Stack? (Set 253)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Memoization is? (Set 52) (Set 254)",
    "options": [
      "Greedy (general case)",
      "Top-down DP with caching",
      "Brute force in practice",
      "Bottom-up approach by design"
    ],
    "answer": 1,
    "explanation": "Store results of subproblems to avoid recomputation."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Stack? (Set 255)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a BST? (Set 83) (Set 256)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For BST, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56) (Set 109) (Set 257)",
    "options": [
      "Only rear in practice",
      "Middle only in practice",
      "Only front (general case)",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Max Heap? (Set 60) (Set 258)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 127) (Set 230) (Set 259)",
    "options": [
      "Stack (typical scenario)",
      "Queue as per specification",
      "Recursion only in standard usage",
      "Two pointers (slow and fast)"
    ],
    "answer": 3,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a BST? (Set 260)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 6) (Set 261)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Graph adjacency matrix space complexity? (Set 107) (Set 262)",
    "options": [
      "O(V²)",
      "O(E)",
      "O(V+E)",
      "O(V)"
    ],
    "answer": 0,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same? (Set 263)",
    "options": [
      "Theta (Θ)",
      "Big O",
      "Big Omega",
      "Little o"
    ],
    "answer": 0,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 264)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 265)",
    "options": [
      "O(n)",
      "O(1)",
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
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Red-Black Tree? (Set 34) (Set 266)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Red-Black Tree, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Segment tree range query time? (Set 267)",
    "options": [
      "O(n)",
      "O(n²)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Tree structure allows logarithmic range operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 268)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 33) (Set 269)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Min Heap? (Set 70) (Set 74) (Set 270)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 33) (Set 269) (Set 271)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (sorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Stack? (Set 237) (Set 272)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap? (Set 273)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Tabulation is? (Set 274)",
    "options": [
      "Bottom-up DP using table",
      "Top-down approach by design",
      "Backtracking by design",
      "Recursion (primary approach)"
    ],
    "answer": 0,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap? (Set 273) (Set 275)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 87) (Set 276)",
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
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 241) (Set 277)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (sorted), a Deletion under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci? (Set 278)",
    "options": [
      "O(2^n)",
      "O(n log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack? (Set 279)",
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
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 280)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 281)",
    "options": [
      "Dynamic programming in practice",
      "Sorting (widely accepted)",
      "Recursion and backtracking",
      "BFS only (typical scenario)"
    ],
    "answer": 2,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 39) (Set 213) (Set 282)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Array (sorted)? (Set 145) (Set 283)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Array (sorted), a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Preorder traversal visits? (Set 22) (Set 284)",
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
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Stack? (Set 285)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 101) (Set 286)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56) (Set 109) (Set 257) (Set 287)",
    "options": [
      "Both front and rear",
      "Middle only (general case)",
      "Only front in most cases",
      "Only rear (commonly used)"
    ],
    "answer": 0,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 288)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 289)",
    "options": [
      "Probing for next empty slot",
      "Using linked lists (general case)",
      "Ignoring collision in practice",
      "Creating new table (general case)"
    ],
    "answer": 0,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 280) (Set 290)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 291)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 292)",
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
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Rabin-Karp uses what technique? (Set 175) (Set 293)",
    "options": [
      "Backtracking",
      "Dynamic programming",
      "Hashing",
      "Greedy"
    ],
    "answer": 2,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "What does the sliding window technique maintain? (Set 294)",
    "options": [
      "A priority queue under normal conditions",
      "A sorted subarray as per specification",
      "A window of elements satisfying a condition",
      "A balanced tree under normal conditions"
    ],
    "answer": 2,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort? (Set 295)",
    "options": [
      "T(n) = T(n/2) + O(1)",
      "T(n) = T(n-1) + O(n)",
      "T(n) = nT(n/2) in practice",
      "T(n) = 2T(n/2) + O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Overlapping subproblems means? (Set 296)",
    "options": [
      "No subproblems exist (commonly used)",
      "Each subproblem is unique based on convention",
      "Same subproblems are solved multiple times",
      "Linear scan suffices (default behavior)"
    ],
    "answer": 2,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when? (Set 232) (Set 297)",
    "options": [
      "First insertion (primary approach)",
      "Load factor exceeds threshold",
      "After deletion only (general case)",
      "Table is empty as per specification"
    ],
    "answer": 1,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 298)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a AVL Tree? (Set 299)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 141) (Set 300)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11) (Set 301)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Stack? (Set 237) (Set 272) (Set 302)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort? (Set 295) (Set 303)",
    "options": [
      "T(n) = nT(n/2) by design",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = T(n-1) + O(n)",
      "T(n) = T(n/2) + O(1)"
    ],
    "answer": 1,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Prim's algorithm starts from? (Set 5) (Set 304)",
    "options": [
      "Leaf node in practice",
      "All vertices",
      "Any single vertex",
      "Heaviest edge"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 305)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Memoization is? (Set 306)",
    "options": [
      "Greedy (widely accepted)",
      "Top-down DP with caching",
      "Bottom-up approach by design",
      "Brute force (general case)"
    ],
    "answer": 1,
    "explanation": "Store results of subproblems to avoid recomputation."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 100) (Set 235) (Set 307)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Red-Black Tree? (Set 63) (Set 308)",
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
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 309)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Stack? (Set 310)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a BST? (Set 311)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For BST, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same? (Set 217) (Set 312)",
    "options": [
      "Little o",
      "Big Omega",
      "Big O",
      "Theta (Θ)"
    ],
    "answer": 3,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same? (Set 217) (Set 312) (Set 313)",
    "options": [
      "Big O",
      "Little o",
      "Big Omega",
      "Theta (Θ)"
    ],
    "answer": 3,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a BST? (Set 314)",
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
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 315)",
    "options": [
      "Only rear in most cases",
      "Middle only by design",
      "Only front in most cases",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)? (Set 40) (Set 162) (Set 316)",
    "options": [
      "O(log n)",
      "O(n²)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Recursion stack depth is log n on average."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves? (Set 49) (Set 121) (Set 317)",
    "options": [
      "Shortest path by design",
      "String matching",
      "Maximum subarray sum",
      "Sorting based on convention"
    ],
    "answer": 2,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11) (Set 135) (Set 170) (Set 318)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Segment tree is used for? (Set 319)",
    "options": [
      "Graph traversal (widely accepted)",
      "String matching in standard usage",
      "Sorting under normal conditions",
      "Range queries and updates efficiently"
    ],
    "answer": 3,
    "explanation": "Segment tree handles range sum/min/max in O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 126) (Set 136) (Set 320)",
    "options": [
      "Stack as per specification",
      "Recursion only as per specification",
      "Two pointers (slow and fast)",
      "Queue under normal conditions"
    ],
    "answer": 2,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 321)",
    "options": [
      "Stack in standard usage",
      "Queue (typical scenario)",
      "Recursion only by design",
      "Two pointers (slow and fast)"
    ],
    "answer": 3,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Longest palindromic substring can be found in? (Set 322)",
    "options": [
      "O(log n) based on convention",
      "O(n³) (standard definition)",
      "O(n²) using expand around center",
      "O(n) as per specification"
    ],
    "answer": 2,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 36) (Set 155) (Set 323)",
    "options": [
      "Probing for next empty slot",
      "Creating new table (commonly used)",
      "Using linked lists in most cases",
      "Ignoring collision in practice"
    ],
    "answer": 0,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Array (unsorted)? (Set 324)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 325)",
    "options": [
      "T(n) = aT(n/b) + f(n)",
      "T(n) = T(n-1) + n",
      "T(n) = n! in most cases",
      "T(n) = 2n + 1 in practice"
    ],
    "answer": 0,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Union-Find is used in? (Set 326)",
    "options": [
      "Kruskal's MST and cycle detection",
      "BFS under normal conditions",
      "String matching (widely accepted)",
      "Shortest path based on convention"
    ],
    "answer": 0,
    "explanation": "Union-Find efficiently tracks connected components."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 241) (Set 277) (Set 327)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Array (sorted), a Deletion under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that? (Set 20) (Set 47) (Set 328)",
    "options": [
      "All queens are in one row in practice",
      "Queens form diagonal (general case)",
      "No two queens attack each other",
      "Queens are adjacent in most cases"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Trie is best for? (Set 329)",
    "options": [
      "Sorting numbers (default behavior)",
      "Matrix operations by design",
      "Prefix-based string operations",
      "Graph traversal (commonly used)"
    ],
    "answer": 2,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Stack? (Set 330)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Overlapping subproblems means? (Set 331)",
    "options": [
      "Each subproblem is unique (widely accepted)",
      "Linear scan suffices under normal conditions",
      "No subproblems exist (typical scenario)",
      "Same subproblems are solved multiple times"
    ],
    "answer": 3,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 50) (Set 332)",
    "options": [
      "Dynamic programming by design",
      "BFS only (typical scenario)",
      "Sorting as per specification",
      "Recursion and backtracking"
    ],
    "answer": 3,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Stack? (Set 333)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Checking if two strings are anagrams requires? (Set 174) (Set 334)",
    "options": [
      "Substring search (general case)",
      "Regular expressions in practice",
      "Sorting only in most cases",
      "Character frequency comparison"
    ],
    "answer": 3,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Matrix Chain Multiplication optimizes? (Set 31) (Set 335)",
    "options": [
      "Order of matrix multiplications",
      "Matrix values (typical scenario)",
      "Matrix sorting in most cases",
      "Matrix dimensions (widely accepted)"
    ],
    "answer": 0,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Doubly Linked List? (Set 336)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Stack? (Set 252) (Set 337)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Min Heap? (Set 338)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Min Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves? (Set 49) (Set 121) (Set 317) (Set 339)",
    "options": [
      "String matching",
      "Maximum subarray sum",
      "Shortest path in most cases",
      "Sorting (widely accepted)"
    ],
    "answer": 1,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when? (Set 232) (Set 297) (Set 340)",
    "options": [
      "Load factor exceeds threshold",
      "First insertion as per specification",
      "After deletion only in most cases",
      "Table is empty (typical scenario)"
    ],
    "answer": 0,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)? (Set 146) (Set 341)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Recursion stack depth is log n on average."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 342)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56) (Set 343)",
    "options": [
      "Both front and rear",
      "Only rear in most cases",
      "Only front by design",
      "Middle only in most cases"
    ],
    "answer": 0,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Min Heap? (Set 344)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 7) (Set 29) (Set 345)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 346)",
    "options": [
      "O(n log n)",
      "O(n) in practice",
      "O(n²)",
      "O(2^n)"
    ],
    "answer": 0,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Coin Change problem (min coins) is solved by? (Set 347)",
    "options": [
      "Greedy always (primary approach)",
      "BFS only (default behavior)",
      "DP (unbounded knapsack variant)",
      "Sorting (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Try each coin, take minimum."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Time complexity of enqueue in circular queue? (Set 348)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n²)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Checking if two strings are anagrams requires? (Set 174) (Set 334) (Set 349)",
    "options": [
      "Character frequency comparison",
      "Substring search by design",
      "Sorting only as per specification",
      "Regular expressions (widely accepted)"
    ],
    "answer": 0,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Sudoku solver uses? (Set 350)",
    "options": [
      "Greedy in typical implementations",
      "BFS in typical implementations",
      "Sorting in typical implementations",
      "Backtracking with constraint checking"
    ],
    "answer": 3,
    "explanation": "Try digits 1-9, backtrack if constraint violated."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 351)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Disjoint Set Union find uses? (Set 352)",
    "options": [
      "Sorting under normal conditions",
      "Hashing in typical implementations",
      "Path compression and union by rank",
      "BFS under normal conditions"
    ],
    "answer": 2,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Stack? (Set 353)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 342) (Set 354)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Stack? (Set 149) (Set 355)",
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
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 166) (Set 356)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Stack? (Set 310) (Set 357)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity? (Set 12) (Set 41) (Set 358)",
    "options": [
      "O(V²)",
      "O(E²)",
      "O(V+E)",
      "O(V)"
    ],
    "answer": 2,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Dijkstra's algorithm fails with? (Set 80) (Set 359)",
    "options": [
      "Dense graphs by design",
      "Negative edge weights",
      "Positive weights",
      "Undirected graphs"
    ],
    "answer": 1,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 360)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "StringBuilder in Java is preferred over String for? (Set 361)",
    "options": [
      "Sorting as per specification",
      "Frequent modifications (mutable)",
      "Hashing as per specification",
      "Read-only access in most cases"
    ],
    "answer": 1,
    "explanation": "StringBuilder avoids creating new String objects."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Move Zeroes problem moves zeros to? (Set 117) (Set 362)",
    "options": [
      "Middle in practice",
      "Sorted position",
      "End of array",
      "Beginning"
    ],
    "answer": 2,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 363)",
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
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Stack? (Set 364)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Middle of linked list found using? (Set 203) (Set 365)",
    "options": [
      "Recursion (typical scenario)",
      "Stack in standard usage",
      "Counting then traversing",
      "Slow and fast pointer"
    ],
    "answer": 3,
    "explanation": "When fast reaches end, slow is at middle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Queue? (Set 366)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 21) (Set 367)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Greedy algorithms guarantee optimal solution when? (Set 45) (Set 368)",
    "options": [
      "Never in typical implementations",
      "Only for sorting in typical implementations",
      "Greedy choice property and optimal substructure hold",
      "Always in typical implementations"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "BFS uses which data structure? (Set 369)",
    "options": [
      "Heap",
      "Array",
      "Stack",
      "Queue"
    ],
    "answer": 3,
    "explanation": "BFS explores neighbors level-by-level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 370)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 185) (Set 371)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Min Heap? (Set 14) (Set 58) (Set 372)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Min Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 288) (Set 373)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 309) (Set 374)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Max Heap? (Set 88) (Set 375)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a BST? (Set 376)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Bellman-Ford handles? (Set 377)",
    "options": [
      "Negative edge weights",
      "Only trees by design",
      "Only undirected in practice",
      "Only positive weights"
    ],
    "answer": 0,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "HashMap provides average case lookup of? (Set 378)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n²)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "Hash function maps key directly to bucket."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Min Heap? (Set 379)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Left shift by 1 is equivalent to? (Set 92) (Set 380)",
    "options": [
      "Subtract 1",
      "Add 1 in most cases",
      "Divide by 2",
      "Multiply by 2"
    ],
    "answer": 3,
    "explanation": "Shifting bits left doubles the value."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 103) (Set 381)",
    "options": [
      "Using linked lists by design",
      "Creating new table (commonly used)",
      "Ignoring collision (commonly used)",
      "Probing for next empty slot"
    ],
    "answer": 3,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Reversing a singly linked list takes? (Set 382)",
    "options": [
      "O(n) time, O(1) space",
      "O(log n) time in practice",
      "O(n) space in practice",
      "O(n²) time (general case)"
    ],
    "answer": 0,
    "explanation": "Iterate once, reversing pointers in-place."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 383)",
    "options": [
      "Dynamic programming in practice",
      "Recursion and backtracking",
      "Sorting under normal conditions",
      "BFS only as per specification"
    ],
    "answer": 1,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 186) (Set 384)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives? (Set 385)",
    "options": [
      "Random order (general case)",
      "Level order (commonly used)",
      "Descending order by design",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "What is a good hash function property? (Set 386)",
    "options": [
      "Uniform distribution of keys",
      "Returns key itself in most cases",
      "Ignores input in practice",
      "Always returns 0 (typical scenario)"
    ],
    "answer": 0,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Red-Black Tree? (Set 387)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Red-Black Tree, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Level order traversal uses? (Set 388)",
    "options": [
      "Sorting",
      "Recursion only",
      "Stack by design",
      "Queue (BFS)"
    ],
    "answer": 3,
    "explanation": "Process nodes level by level using queue."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "What is a good hash function property? (Set 386) (Set 389)",
    "options": [
      "Ignores input in most cases",
      "Uniform distribution of keys",
      "Always returns 0 (typical scenario)",
      "Returns key itself by design"
    ],
    "answer": 1,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (sorted)? (Set 87) (Set 390)",
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
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 391)",
    "options": [
      "O(n²)",
      "O(2^n)",
      "O(n log n)",
      "O(n) by design"
    ],
    "answer": 2,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a AVL Tree? (Set 392)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 393)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a BST? (Set 46) (Set 394)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Array (sorted)? (Set 214) (Set 395)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Array (sorted), a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 396)",
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
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 298) (Set 397)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Union-Find is used in? (Set 326) (Set 398)",
    "options": [
      "String matching (typical scenario)",
      "Shortest path as per specification",
      "BFS under normal conditions",
      "Kruskal's MST and cycle detection"
    ],
    "answer": 3,
    "explanation": "Union-Find efficiently tracks connected components."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Combination Sum allows? (Set 66) (Set 399)",
    "options": [
      "Reusing elements to reach target",
      "Negative numbers (standard definition)",
      "Each element used once by design",
      "Sorting only (default behavior)"
    ],
    "answer": 0,
    "explanation": "Include current element again or move to next."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Queue? (Set 400)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Frequency count of characters uses? (Set 401)",
    "options": [
      "Queue (commonly used)",
      "Array of size 26 or HashMap",
      "Linked List in practice",
      "Stack (standard definition)"
    ],
    "answer": 1,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 33) (Set 269) (Set 271) (Set 402)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (sorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Circular queue solves which problem? (Set 147) (Set 403)",
    "options": [
      "Balancing (standard definition)",
      "Searching (general case)",
      "Sorting (widely accepted)",
      "Wasted space in linear queue"
    ],
    "answer": 3,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Stack? (Set 10) (Set 404)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 141) (Set 144) (Set 405)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Stack? (Set 406)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "HashMap provides average case lookup of? (Set 407)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Hash function maps key directly to bucket."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Queue? (Set 160) (Set 408)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Search under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Left shift by 1 is equivalent to? (Set 92) (Set 409)",
    "options": [
      "Add 1 in practice",
      "Multiply by 2",
      "Divide by 2",
      "Subtract 1"
    ],
    "answer": 1,
    "explanation": "Shifting bits left doubles the value."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 15) (Set 90) (Set 410)",
    "options": [
      "O(1)",
      "O(n²)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 411)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Stack? (Set 412)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 363) (Set 413)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Min Heap, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Matrix Chain Multiplication optimizes? (Set 31) (Set 91) (Set 414)",
    "options": [
      "Matrix dimensions (typical scenario)",
      "Order of matrix multiplications",
      "Matrix values (commonly used)",
      "Matrix sorting under normal conditions"
    ],
    "answer": 1,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 396) (Set 415)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 129) (Set 416)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Max Heap? (Set 417)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 53) (Set 418)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Greedy algorithms guarantee optimal solution when? (Set 45) (Set 419)",
    "options": [
      "Only for sorting in typical implementations",
      "Never in typical implementations",
      "Always in typical implementations",
      "Greedy choice property and optimal substructure hold"
    ],
    "answer": 3,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 420)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a BST? (Set 421)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 422)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 185) (Set 423)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Stack? (Set 424)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Max Heap? (Set 425)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Deletion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Stack? (Set 255) (Set 426)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a BST? (Set 46) (Set 394) (Set 427)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 48) (Set 428)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Checking if two strings are anagrams requires? (Set 179) (Set 429)",
    "options": [
      "Sorting only (standard definition)",
      "Character frequency comparison",
      "Regular expressions in practice",
      "Substring search (commonly used)"
    ],
    "answer": 1,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a BST? (Set 108) (Set 430)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 346) (Set 431)",
    "options": [
      "O(n²)",
      "O(n log n)",
      "O(n) in practice",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap? (Set 231) (Set 432)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Min Heap? (Set 433)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56) (Set 109) (Set 257) (Set 287) (Set 434)",
    "options": [
      "Only rear by design",
      "Middle only (general case)",
      "Both front and rear",
      "Only front (commonly used)"
    ],
    "answer": 2,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Coin Change problem (min coins) is solved by? (Set 435)",
    "options": [
      "Greedy always (standard definition)",
      "DP (unbounded knapsack variant)",
      "Sorting (primary approach)",
      "BFS only (primary approach)"
    ],
    "answer": 1,
    "explanation": "Try each coin, take minimum."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Queue? (Set 160) (Set 436)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Search under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Dijkstra's algorithm fails with? (Set 80) (Set 437)",
    "options": [
      "Positive weights",
      "Dense graphs (general case)",
      "Negative edge weights",
      "Undirected graphs"
    ],
    "answer": 2,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 15) (Set 90) (Set 410) (Set 438)",
    "options": [
      "O(n)",
      "O(n²)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Stack? (Set 152) (Set 439)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 440)",
    "options": [
      "Recursion only as per specification",
      "Two pointers (slow and fast)",
      "Stack (primary approach)",
      "Queue (primary approach)"
    ],
    "answer": 1,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Max Heap? (Set 181) (Set 441)",
    "options": [
      "O(1)",
      "O(n log n)",
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
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Min Heap? (Set 442)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Floyd-Warshall finds? (Set 443)",
    "options": [
      "Topological order in most cases",
      "MST (standard definition)",
      "Single-source shortest path",
      "All-pairs shortest paths"
    ],
    "answer": 3,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 33) (Set 444)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves? (Set 49) (Set 121) (Set 445)",
    "options": [
      "Maximum subarray sum",
      "Shortest path in most cases",
      "String matching",
      "Sorting (default behavior)"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 128) (Set 446)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity? (Set 12) (Set 447)",
    "options": [
      "O(V)",
      "O(E²)",
      "O(V²)",
      "O(V+E)"
    ],
    "answer": 3,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Postorder traversal visits? (Set 448)",
    "options": [
      "Root, Left, Right",
      "Right, Left, Root",
      "Left, Root, Right",
      "Left, Right, Root"
    ],
    "answer": 3,
    "explanation": "Post = root last, after children."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 185) (Set 449)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 101) (Set 188) (Set 450)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 44) (Set 451)",
    "options": [
      "Rehashing only in practice",
      "Linked list at each bucket",
      "Sorting under normal conditions",
      "Open addressing (commonly used)"
    ],
    "answer": 1,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Collision in hashing means? (Set 452)",
    "options": [
      "Two keys map to same index",
      "Hash table is full in most cases",
      "Duplicate keys in practice",
      "Key not found (default behavior)"
    ],
    "answer": 0,
    "explanation": "Different keys producing same hash cause collision."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 453)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 305) (Set 454)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 455)",
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
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using? (Set 44) (Set 456)",
    "options": [
      "Open addressing (widely accepted)",
      "Sorting (widely accepted)",
      "Rehashing only (general case)",
      "Linked list at each bucket"
    ],
    "answer": 3,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Disjoint Set Union find uses? (Set 122) (Set 457)",
    "options": [
      "BFS under normal conditions",
      "Hashing under normal conditions",
      "Sorting based on convention",
      "Path compression and union by rank"
    ],
    "answer": 3,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a BST? (Set 458)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 459)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Red-Black Tree, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Stack? (Set 364) (Set 460)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Stack? (Set 252) (Set 337) (Set 461)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 241) (Set 277) (Set 462)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Array (sorted), a Deletion under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56) (Set 343) (Set 463)",
    "options": [
      "Only rear in practice",
      "Only front (general case)",
      "Middle only in practice",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Red-Black Tree? (Set 464)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "What is a good hash function property? (Set 386) (Set 389) (Set 465)",
    "options": [
      "Returns key itself by design",
      "Uniform distribution of keys",
      "Ignores input (commonly used)",
      "Always returns 0 in most cases"
    ],
    "answer": 1,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Time complexity of enqueue in circular queue? (Set 348) (Set 466)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Max Heap? (Set 60) (Set 258) (Set 467)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 185) (Set 449) (Set 468)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Omega represents? (Set 469)",
    "options": [
      "Tight bound",
      "Average case",
      "Upper bound",
      "Lower bound"
    ],
    "answer": 3,
    "explanation": "Ω notation gives the best-case lower bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 101) (Set 188) (Set 470)",
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
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Max Heap? (Set 88) (Set 471)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Coin Change problem (min coins) is solved by? (Set 472)",
    "options": [
      "BFS only as per specification",
      "Greedy always (commonly used)",
      "Sorting (widely accepted)",
      "DP (unbounded knapsack variant)"
    ],
    "answer": 3,
    "explanation": "Try each coin, take minimum."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 238) (Set 473)",
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
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Stack? (Set 94) (Set 233) (Set 474)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Fenwick tree (BIT) supports? (Set 192) (Set 475)",
    "options": [
      "Sorting (standard definition)",
      "Graph BFS (standard definition)",
      "String matching as per specification",
      "Point updates and prefix sum queries"
    ],
    "answer": 3,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 476)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "What is a good hash function property? (Set 228) (Set 477)",
    "options": [
      "Always returns 0 in standard usage",
      "Returns key itself (general case)",
      "Ignores input by design",
      "Uniform distribution of keys"
    ],
    "answer": 3,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 478)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Deletion under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 141) (Set 300) (Set 479)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 298) (Set 480)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56) (Set 109) (Set 172) (Set 481)",
    "options": [
      "Only front (commonly used)",
      "Both front and rear",
      "Middle only in most cases",
      "Only rear in most cases"
    ],
    "answer": 1,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "BFS graph traversal uses? (Set 482)",
    "options": [
      "Queue",
      "Stack",
      "Deque",
      "Priority queue"
    ],
    "answer": 0,
    "explanation": "BFS explores level by level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 440) (Set 483)",
    "options": [
      "Two pointers (slow and fast)",
      "Stack (widely accepted)",
      "Recursion only (general case)",
      "Queue (widely accepted)"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Preorder traversal visits? (Set 484)",
    "options": [
      "Right, Root, Left",
      "Root, Left, Right",
      "Left, Right, Root",
      "Left, Root, Right"
    ],
    "answer": 1,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Queue? (Set 201) (Set 485)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Doubly Linked List? (Set 453) (Set 486)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Fenwick tree (BIT) supports? (Set 192) (Set 487)",
    "options": [
      "Point updates and prefix sum queries",
      "Graph BFS as per specification",
      "String matching as per specification",
      "Sorting in typical implementations"
    ],
    "answer": 0,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Deletion' operation on a Singly Linked List? (Set 488)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Deletion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56) (Set 109) (Set 257) (Set 489)",
    "options": [
      "Both front and rear",
      "Only front in most cases",
      "Only rear by design",
      "Middle only (general case)"
    ],
    "answer": 0,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Red-Black Tree? (Set 490)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Insertion under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a BST? (Set 46) (Set 394) (Set 491)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For BST, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 238) (Set 473) (Set 492)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Optimal substructure means? (Set 493)",
    "options": [
      "Random solutions work under normal conditions",
      "Optimal solution contains optimal sub-solutions",
      "Problem has no solution in typical implementations",
      "Only greedy works under normal conditions"
    ],
    "answer": 1,
    "explanation": "Key property enabling DP approach."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Checking if two strings are anagrams requires? (Set 174) (Set 334) (Set 494)",
    "options": [
      "Sorting only in practice",
      "Regular expressions (commonly used)",
      "Substring search in standard usage",
      "Character frequency comparison"
    ],
    "answer": 3,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 36) (Set 155) (Set 196) (Set 495)",
    "options": [
      "Probing for next empty slot",
      "Using linked lists in practice",
      "Ignoring collision in most cases",
      "Creating new table in practice"
    ],
    "answer": 0,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 100) (Set 235) (Set 307) (Set 496)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Dijkstra's algorithm fails with? (Set 114) (Set 497)",
    "options": [
      "Undirected graphs",
      "Positive weights",
      "Negative edge weights",
      "Dense graphs by design"
    ],
    "answer": 2,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same? (Set 263) (Set 498)",
    "options": [
      "Little o",
      "Theta (Θ)",
      "Big O",
      "Big Omega"
    ],
    "answer": 1,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11) (Set 25) (Set 38) (Set 499)",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56) (Set 500)",
    "options": [
      "Only front in most cases",
      "Only rear (commonly used)",
      "Middle only by design",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a BST? (Set 501)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For BST, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a BST? (Set 104) (Set 502)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 363) (Set 503)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11) (Set 25) (Set 38) (Set 499) (Set 504)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when? (Set 232) (Set 297) (Set 505)",
    "options": [
      "First insertion by design",
      "Load factor exceeds threshold",
      "After deletion only in practice",
      "Table is empty as per specification"
    ],
    "answer": 1,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 36) (Set 155) (Set 196) (Set 495) (Set 506)",
    "options": [
      "Using linked lists by design",
      "Ignoring collision in most cases",
      "Creating new table by design",
      "Probing for next empty slot"
    ],
    "answer": 3,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack? (Set 177) (Set 246) (Set 507)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Theta represents? (Set 508)",
    "options": [
      "Upper bound only",
      "No bound",
      "Lower bound only",
      "Tight bound"
    ],
    "answer": 3,
    "explanation": "Θ gives both upper and lower bounds."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 241) (Set 277) (Set 509)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Deletion under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Checking if two strings are anagrams requires? (Set 174) (Set 334) (Set 510)",
    "options": [
      "Regular expressions in practice",
      "Sorting only (general case)",
      "Character frequency comparison",
      "Substring search in standard usage"
    ],
    "answer": 2,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 141) (Set 300) (Set 511)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 36) (Set 512)",
    "options": [
      "Creating new table by design",
      "Using linked lists (commonly used)",
      "Probing for next empty slot",
      "Ignoring collision (commonly used)"
    ],
    "answer": 2,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 513)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a BST? (Set 46) (Set 394) (Set 427) (Set 514)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Trie is best for? (Set 329) (Set 515)",
    "options": [
      "Sorting numbers (commonly used)",
      "Prefix-based string operations",
      "Graph traversal based on convention",
      "Matrix operations (general case)"
    ],
    "answer": 1,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Queue? (Set 120) (Set 211) (Set 516)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Stack? (Set 517)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11) (Set 25) (Set 38) (Set 518)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Stack? (Set 519)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Graph adjacency matrix space complexity? (Set 107) (Set 262) (Set 520)",
    "options": [
      "O(V²)",
      "O(V+E)",
      "O(V)",
      "O(E)"
    ],
    "answer": 0,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives? (Set 194) (Set 521)",
    "options": [
      "Sorted ascending order",
      "Level order (general case)",
      "Descending order by design",
      "Random order (commonly used)"
    ],
    "answer": 0,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Doubly Linked List? (Set 522)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 39) (Set 523)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Dijkstra's algorithm fails with? (Set 80) (Set 524)",
    "options": [
      "Undirected graphs",
      "Positive weights",
      "Dense graphs (general case)",
      "Negative edge weights"
    ],
    "answer": 3,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 48) (Set 525)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)? (Set 110) (Set 526)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Recursion stack depth is log n on average."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci? (Set 67) (Set 527)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(2^n)"
    ],
    "answer": 3,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci? (Set 67) (Set 528)",
    "options": [
      "O(2^n)",
      "O(n log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "0/1 Knapsack time complexity? (Set 529)",
    "options": [
      "O(n*W)",
      "O(n log n)",
      "O(n²)",
      "O(2^n)"
    ],
    "answer": 0,
    "explanation": "DP table of items × capacity."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a BST? (Set 530)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For BST, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "BFS uses which data structure? (Set 369) (Set 531)",
    "options": [
      "Queue",
      "Array",
      "Stack",
      "Heap"
    ],
    "answer": 0,
    "explanation": "BFS explores neighbors level-by-level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 48) (Set 428) (Set 532)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 2) (Set 533)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Dijkstra's algorithm fails with? (Set 80) (Set 534)",
    "options": [
      "Undirected graphs",
      "Positive weights",
      "Dense graphs (commonly used)",
      "Negative edge weights"
    ],
    "answer": 3,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 342) (Set 354) (Set 535)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 78) (Set 536)",
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
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Detecting intersection point of two lists uses? (Set 1) (Set 43) (Set 99) (Set 537)",
    "options": [
      "Sorting in typical implementations",
      "Stack in typical implementations",
      "Length difference or two-pointer approach",
      "Queue in typical implementations"
    ],
    "answer": 2,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort? (Set 538)",
    "options": [
      "T(n) = T(n/2) + O(1)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = T(n-1) + O(n)",
      "T(n) = nT(n/2) by design"
    ],
    "answer": 1,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity? (Set 12) (Set 41) (Set 199) (Set 539)",
    "options": [
      "O(E²)",
      "O(V)",
      "O(V²)",
      "O(V+E)"
    ],
    "answer": 3,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 141) (Set 300) (Set 479) (Set 540)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Array (unsorted), a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 541)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Checking if two strings are anagrams requires? (Set 179) (Set 542)",
    "options": [
      "Regular expressions in most cases",
      "Sorting only (primary approach)",
      "Substring search by design",
      "Character frequency comparison"
    ],
    "answer": 3,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 543)",
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
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Array (unsorted)? (Set 544)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 54) (Set 545)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a BST? (Set 46) (Set 546)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Theta represents? (Set 547)",
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
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Array (sorted)? (Set 225) (Set 548)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Array (sorted), a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a BST? (Set 163) (Set 549)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For BST, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 550)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 186) (Set 384) (Set 551)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity? (Set 12) (Set 41) (Set 358) (Set 552)",
    "options": [
      "O(V²)",
      "O(V)",
      "O(E²)",
      "O(V+E)"
    ],
    "answer": 3,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Two Sum problem is best solved using? (Set 553)",
    "options": [
      "Stack",
      "Binary Search Tree",
      "Sorting",
      "HashMap"
    ],
    "answer": 3,
    "explanation": "HashMap gives O(1) lookup for complement."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Stack? (Set 353) (Set 554)",
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
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Stack? (Set 152) (Set 555)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Singly Linked List? (Set 556)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "What is a good hash function property? (Set 386) (Set 389) (Set 465) (Set 557)",
    "options": [
      "Always returns 0 (typical scenario)",
      "Ignores input (commonly used)",
      "Returns key itself by design",
      "Uniform distribution of keys"
    ],
    "answer": 3,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Stack? (Set 68) (Set 558)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form? (Set 325) (Set 559)",
    "options": [
      "T(n) = aT(n/b) + f(n)",
      "T(n) = n! (widely accepted)",
      "T(n) = 2n + 1 by design",
      "T(n) = T(n-1) + n"
    ],
    "answer": 0,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives? (Set 194) (Set 521) (Set 560)",
    "options": [
      "Level order (widely accepted)",
      "Descending order in practice",
      "Random order by design",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Stack? (Set 364) (Set 460) (Set 561)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LCS (Longest Common Subsequence) of two strings? (Set 562)",
    "options": [
      "O(m*n)",
      "O(m²)",
      "O(2^n)",
      "O(m+n)"
    ],
    "answer": 0,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 126) (Set 136) (Set 563)",
    "options": [
      "Recursion only (typical scenario)",
      "Two pointers (slow and fast)",
      "Stack (primary approach)",
      "Queue as per specification"
    ],
    "answer": 1,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Binary tree maximum path sum problem uses? (Set 564)",
    "options": [
      "Recursion with global max tracking",
      "Greedy (standard definition)",
      "BFS in typical implementations",
      "Sorting based on convention"
    ],
    "answer": 0,
    "explanation": "At each node, compute max path through it."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap? (Set 164) (Set 565)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Max Heap? (Set 566)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort? (Set 567)",
    "options": [
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = T(n-1) + O(n)",
      "T(n) = T(n/2) + O(1)",
      "T(n) = nT(n/2) in most cases"
    ],
    "answer": 0,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Time complexity of enqueue in circular queue? (Set 568)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is? (Set 569)",
    "options": [
      "Greater than or equal to children",
      "Equal to children (widely accepted)",
      "Less than children (default behavior)",
      "Random in typical implementations"
    ],
    "answer": 0,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Stack? (Set 353) (Set 570)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a BST? (Set 83) (Set 571)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 363) (Set 413) (Set 572)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11) (Set 25) (Set 38) (Set 137) (Set 573)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "BFS uses which data structure? (Set 574)",
    "options": [
      "Heap",
      "Array",
      "Stack",
      "Queue"
    ],
    "answer": 3,
    "explanation": "BFS explores neighbors level-by-level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 459) (Set 575)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Dutch National Flag partitions array into how many parts? (Set 576)",
    "options": [
      "Five",
      "Three",
      "Two",
      "Four"
    ],
    "answer": 1,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 298) (Set 577)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "What does the sliding window technique maintain? (Set 294) (Set 578)",
    "options": [
      "A window of elements satisfying a condition",
      "A sorted subarray based on convention",
      "A priority queue (standard definition)",
      "A balanced tree in typical implementations"
    ],
    "answer": 0,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Combination Sum allows? (Set 579)",
    "options": [
      "Each element used once (commonly used)",
      "Negative numbers as per specification",
      "Sorting only (typical scenario)",
      "Reusing elements to reach target"
    ],
    "answer": 3,
    "explanation": "Include current element again or move to next."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Stack? (Set 580)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a AVL Tree? (Set 581)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Access under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 184) (Set 242) (Set 582)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Preorder traversal visits? (Set 22) (Set 583)",
    "options": [
      "Root, Left, Right",
      "Left, Right, Root",
      "Right, Root, Left",
      "Left, Root, Right"
    ],
    "answer": 0,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "BFS graph traversal uses? (Set 482) (Set 584)",
    "options": [
      "Queue",
      "Stack",
      "Priority queue",
      "Deque"
    ],
    "answer": 0,
    "explanation": "BFS explores level by level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Stack? (Set 406) (Set 585)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 103) (Set 381) (Set 586)",
    "options": [
      "Using linked lists (general case)",
      "Probing for next empty slot",
      "Creating new table (general case)",
      "Ignoring collision (commonly used)"
    ],
    "answer": 1,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a BST? (Set 104) (Set 587)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For BST, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11) (Set 301) (Set 588)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Stack? (Set 69) (Set 589)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Max Heap? (Set 88) (Set 590)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Circular linked list last node points to? (Set 591)",
    "options": [
      "NULL (primary approach)",
      "Previous node",
      "Itself by design",
      "First node (head)"
    ],
    "answer": 3,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is? (Set 26) (Set 592)",
    "options": [
      "Random in typical implementations",
      "Less than children by design",
      "Equal to children (standard definition)",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 321) (Set 593)",
    "options": [
      "Stack in standard usage",
      "Two pointers (slow and fast)",
      "Recursion only (general case)",
      "Queue in standard usage"
    ],
    "answer": 1,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Max Heap? (Set 60) (Set 258) (Set 594)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Max Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves? (Set 49) (Set 121) (Set 317) (Set 339) (Set 595)",
    "options": [
      "Sorting in most cases",
      "Shortest path in most cases",
      "String matching",
      "Maximum subarray sum"
    ],
    "answer": 3,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Max Heap? (Set 596)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Greedy algorithms guarantee optimal solution when? (Set 4) (Set 84) (Set 156) (Set 167) (Set 597)",
    "options": [
      "Greedy choice property and optimal substructure hold",
      "Always in typical implementations",
      "Only for sorting in typical implementations",
      "Never in typical implementations"
    ],
    "answer": 0,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (sorted)? (Set 455) (Set 598)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Array (sorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Max Heap? (Set 101) (Set 599)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Insertion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Max Heap? (Set 88) (Set 471) (Set 600)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when? (Set 9) (Set 601)",
    "options": [
      "Load factor exceeds threshold",
      "First insertion (primary approach)",
      "Table is empty (typical scenario)",
      "After deletion only by design"
    ],
    "answer": 0,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (unsorted)? (Set 224) (Set 226) (Set 602)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "What does the sliding window technique maintain? (Set 294) (Set 578) (Set 603)",
    "options": [
      "A sorted subarray based on convention",
      "A window of elements satisfying a condition",
      "A priority queue (standard definition)",
      "A balanced tree in typical implementations"
    ],
    "answer": 1,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 363) (Set 413) (Set 572) (Set 604)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 605)",
    "options": [
      "O(n²)",
      "O(n) by design",
      "O(2^n)",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Bit masking is used for? (Set 606)",
    "options": [
      "Sorting under normal conditions",
      "Extracting or setting specific bits",
      "String matching (commonly used)",
      "Graph traversal in most cases"
    ],
    "answer": 1,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Check if number is power of 2 using? (Set 607)",
    "options": [
      "n | 1 == n",
      "n >> 1 == 0",
      "n & (n-1) == 0",
      "n % 2 == 0"
    ],
    "answer": 2,
    "explanation": "Power of 2 has single set bit; n&(n-1) clears it."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Level order traversal uses? (Set 608)",
    "options": [
      "Recursion only",
      "Queue (BFS)",
      "Sorting",
      "Stack in practice"
    ],
    "answer": 1,
    "explanation": "Process nodes level by level using queue."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Union-Find is used in? (Set 609)",
    "options": [
      "Shortest path (primary approach)",
      "String matching (typical scenario)",
      "BFS in typical implementations",
      "Kruskal's MST and cycle detection"
    ],
    "answer": 3,
    "explanation": "Union-Find efficiently tracks connected components."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack? (Set 279) (Set 610)",
    "options": [
      "O(log n)",
      "O(n²)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Dijkstra's algorithm fails with? (Set 80) (Set 524) (Set 611)",
    "options": [
      "Negative edge weights",
      "Dense graphs (general case)",
      "Positive weights",
      "Undirected graphs"
    ],
    "answer": 0,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 238) (Set 473) (Set 612)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when? (Set 613)",
    "options": [
      "Load factor exceeds threshold",
      "Table is empty in most cases",
      "After deletion only (general case)",
      "First insertion (general case)"
    ],
    "answer": 0,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Time complexity of enqueue in circular queue? (Set 568) (Set 614)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n²)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Huffman coding builds? (Set 615)",
    "options": [
      "Balanced BST (typical scenario)",
      "Hash table (widely accepted)",
      "Optimal prefix-free binary tree",
      "Graph (standard definition)"
    ],
    "answer": 2,
    "explanation": "Greedy: merge two lowest-frequency nodes."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 281) (Set 616)",
    "options": [
      "Sorting (standard definition)",
      "BFS only in standard usage",
      "Recursion and backtracking",
      "Dynamic programming in practice"
    ],
    "answer": 2,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same? (Set 217) (Set 312) (Set 313) (Set 617)",
    "options": [
      "Big Omega",
      "Theta (Θ)",
      "Big O",
      "Little o"
    ],
    "answer": 1,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "BFS graph traversal uses? (Set 618)",
    "options": [
      "Priority queue",
      "Queue",
      "Deque",
      "Stack"
    ],
    "answer": 1,
    "explanation": "BFS explores level by level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Red-Black Tree? (Set 34) (Set 266) (Set 619)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For Red-Black Tree, a Access under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "StringBuilder in Java is preferred over String for? (Set 361) (Set 620)",
    "options": [
      "Read-only access (typical scenario)",
      "Frequent modifications (mutable)",
      "Hashing (default behavior)",
      "Sorting (widely accepted)"
    ],
    "answer": 1,
    "explanation": "StringBuilder avoids creating new String objects."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "What is a good hash function property? (Set 386) (Set 389) (Set 621)",
    "options": [
      "Returns key itself in practice",
      "Uniform distribution of keys",
      "Always returns 0 (widely accepted)",
      "Ignores input (general case)"
    ],
    "answer": 1,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 622)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56) (Set 623)",
    "options": [
      "Only rear by design",
      "Both front and rear",
      "Middle only in most cases",
      "Only front in most cases"
    ],
    "answer": 1,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 50) (Set 96) (Set 624)",
    "options": [
      "Recursion and backtracking",
      "Dynamic programming in practice",
      "BFS only based on convention",
      "Sorting in most cases"
    ],
    "answer": 0,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Matrix Chain Multiplication optimizes? (Set 31) (Set 91) (Set 625)",
    "options": [
      "Matrix values in practice",
      "Order of matrix multiplications",
      "Matrix dimensions in most cases",
      "Matrix sorting (standard definition)"
    ],
    "answer": 1,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Doubly Linked List? (Set 626)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, a Insertion under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Frequency count of characters uses? (Set 401) (Set 627)",
    "options": [
      "Queue (standard definition)",
      "Linked List in standard usage",
      "Array of size 26 or HashMap",
      "Stack as per specification"
    ],
    "answer": 2,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 6) (Set 261) (Set 628)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56) (Set 500) (Set 629)",
    "options": [
      "Only front in most cases",
      "Both front and rear",
      "Middle only in practice",
      "Only rear in practice"
    ],
    "answer": 1,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 127) (Set 230) (Set 259) (Set 630)",
    "options": [
      "Recursion only based on convention",
      "Two pointers (slow and fast)",
      "Queue in standard usage",
      "Stack (typical scenario)"
    ],
    "answer": 1,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses? (Set 126) (Set 136) (Set 631)",
    "options": [
      "Queue (default behavior)",
      "Two pointers (slow and fast)",
      "Recursion only (primary approach)",
      "Stack under normal conditions"
    ],
    "answer": 1,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity? (Set 12) (Set 41) (Set 632)",
    "options": [
      "O(V+E)",
      "O(E²)",
      "O(V)",
      "O(V²)"
    ],
    "answer": 0,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 513) (Set 633)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Level order traversal uses? (Set 608) (Set 634)",
    "options": [
      "Stack by design",
      "Sorting",
      "Recursion only",
      "Queue (BFS)"
    ],
    "answer": 3,
    "explanation": "Process nodes level by level using queue."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Floyd-Warshall finds? (Set 131) (Set 635)",
    "options": [
      "MST based on convention",
      "All-pairs shortest paths",
      "Single-source shortest path",
      "Topological order in most cases"
    ],
    "answer": 1,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Huffman coding builds? (Set 615) (Set 636)",
    "options": [
      "Balanced BST based on convention",
      "Graph based on convention",
      "Hash table under normal conditions",
      "Optimal prefix-free binary tree"
    ],
    "answer": 3,
    "explanation": "Greedy: merge two lowest-frequency nodes."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Stack? (Set 637)",
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
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort? (Set 295) (Set 638)",
    "options": [
      "T(n) = nT(n/2) in practice",
      "T(n) = T(n/2) + O(1)",
      "T(n) = T(n-1) + O(n)",
      "T(n) = 2T(n/2) + O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of accessing an array element by index? (Set 64) (Set 639)",
    "options": [
      "O(n)",
      "O(n²)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "Array access is constant time via direct addressing."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is? (Set 26) (Set 592) (Set 640)",
    "options": [
      "Equal to children (typical scenario)",
      "Less than children (commonly used)",
      "Random based on convention",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 641)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 298) (Set 480) (Set 642)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Doubly Linked List? (Set 298) (Set 577) (Set 643)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "BFS graph traversal uses? (Set 618) (Set 644)",
    "options": [
      "Queue",
      "Deque",
      "Stack",
      "Priority queue"
    ],
    "answer": 0,
    "explanation": "BFS explores level by level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Insertion' operation on a Stack? (Set 285) (Set 645)",
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
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same? (Set 217) (Set 312) (Set 313) (Set 617) (Set 646)",
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
    "question": "What is the recurrence for merge sort? (Set 567) (Set 647)",
    "options": [
      "T(n) = T(n-1) + O(n)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = nT(n/2) in practice",
      "T(n) = T(n/2) + O(1)"
    ],
    "answer": 1,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Longest palindromic substring can be found in? (Set 322) (Set 648)",
    "options": [
      "O(n²) using expand around center",
      "O(n) in typical implementations",
      "O(n³) based on convention",
      "O(log n) in standard usage"
    ],
    "answer": 0,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 39) (Set 213) (Set 282) (Set 649)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Circular queue solves which problem? (Set 650)",
    "options": [
      "Balancing as per specification",
      "Sorting in most cases",
      "Searching (general case)",
      "Wasted space in linear queue"
    ],
    "answer": 3,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a AVL Tree? (Set 651)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Min Heap? (Set 14) (Set 159) (Set 652)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 342) (Set 653)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when? (Set 9) (Set 601) (Set 654)",
    "options": [
      "Table is empty by design",
      "First insertion in most cases",
      "Load factor exceeds threshold",
      "After deletion only in most cases"
    ],
    "answer": 2,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Combination Sum allows? (Set 66) (Set 655)",
    "options": [
      "Reusing elements to reach target",
      "Each element used once (general case)",
      "Negative numbers as per specification",
      "Sorting only (widely accepted)"
    ],
    "answer": 0,
    "explanation": "Include current element again or move to next."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of binary search? (Set 42) (Set 656)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "Binary search halves the search space each step."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 36) (Set 155) (Set 323) (Set 657)",
    "options": [
      "Creating new table (commonly used)",
      "Using linked lists (general case)",
      "Ignoring collision in most cases",
      "Probing for next empty slot"
    ],
    "answer": 3,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 396) (Set 658)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at? (Set 56) (Set 623) (Set 659)",
    "options": [
      "Both front and rear",
      "Only front by design",
      "Only rear in practice",
      "Middle only in most cases"
    ],
    "answer": 0,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a BST? (Set 660)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For BST, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Floyd-Warshall finds? (Set 131) (Set 661)",
    "options": [
      "Topological order by design",
      "Single-source shortest path",
      "All-pairs shortest paths",
      "MST in standard usage"
    ],
    "answer": 2,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 305) (Set 662)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Red-Black Tree? (Set 663)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 197) (Set 664)",
    "options": [
      "O(n log n)",
      "O(n²)",
      "O(n) by design",
      "O(2^n)"
    ],
    "answer": 0,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Best Time to Buy Stock uses which pattern? (Set 148) (Set 665)",
    "options": [
      "Sliding window based on convention",
      "Track minimum and max profit",
      "Two pointers (commonly used)",
      "Binary search (standard definition)"
    ],
    "answer": 1,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 6) (Set 666)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity? (Set 667)",
    "options": [
      "O(n²)",
      "O(n log n)",
      "O(n) in practice",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 6) (Set 261) (Set 668)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 342) (Set 669)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Union-Find is used in? (Set 609) (Set 670)",
    "options": [
      "Shortest path under normal conditions",
      "String matching (primary approach)",
      "Kruskal's MST and cycle detection",
      "BFS under normal conditions"
    ],
    "answer": 2,
    "explanation": "Union-Find efficiently tracks connected components."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Stack? (Set 252) (Set 337) (Set 461) (Set 671)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Search under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Stack? (Set 672)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Stack, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Monotonic stack is used for? (Set 673)",
    "options": [
      "String matching in typical implementations",
      "Next greater/smaller element problems",
      "BFS in typical implementations",
      "Sorting under normal conditions"
    ],
    "answer": 1,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Memoization is? (Set 306) (Set 674)",
    "options": [
      "Greedy (primary approach)",
      "Top-down DP with caching",
      "Bottom-up approach in practice",
      "Brute force (primary approach)"
    ],
    "answer": 1,
    "explanation": "Store results of subproblems to avoid recomputation."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 184) (Set 675)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Level order traversal uses? (Set 608) (Set 634) (Set 676)",
    "options": [
      "Stack by design",
      "Queue (BFS)",
      "Recursion only",
      "Sorting"
    ],
    "answer": 1,
    "explanation": "Process nodes level by level using queue."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Huffman coding builds? (Set 615) (Set 677)",
    "options": [
      "Balanced BST (default behavior)",
      "Optimal prefix-free binary tree",
      "Hash table based on convention",
      "Graph in typical implementations"
    ],
    "answer": 1,
    "explanation": "Greedy: merge two lowest-frequency nodes."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 36) (Set 155) (Set 196) (Set 495) (Set 506) (Set 678)",
    "options": [
      "Creating new table in most cases",
      "Probing for next empty slot",
      "Ignoring collision (general case)",
      "Using linked lists in practice"
    ],
    "answer": 1,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 73) (Set 679)",
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
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Middle of linked list found using? (Set 680)",
    "options": [
      "Recursion (typical scenario)",
      "Slow and fast pointer",
      "Counting then traversing",
      "Stack (standard definition)"
    ],
    "answer": 1,
    "explanation": "When fast reaches end, slow is at middle."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Left shift by 1 is equivalent to? (Set 92) (Set 409) (Set 681)",
    "options": [
      "Subtract 1",
      "Add 1 (general case)",
      "Multiply by 2",
      "Divide by 2"
    ],
    "answer": 2,
    "explanation": "Shifting bits left doubles the value."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Min Heap? (Set 682)",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Array (sorted)? (Set 683)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Array (sorted), a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Union-Find is used in? (Set 609) (Set 670) (Set 684)",
    "options": [
      "String matching (widely accepted)",
      "Shortest path in typical implementations",
      "Kruskal's MST and cycle detection",
      "BFS under normal conditions"
    ],
    "answer": 2,
    "explanation": "Union-Find efficiently tracks connected components."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a Array (unsorted)? (Set 32) (Set 685)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Insertion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Bellman-Ford handles? (Set 686)",
    "options": [
      "Only trees (commonly used)",
      "Only undirected by design",
      "Negative edge weights",
      "Only positive weights"
    ],
    "answer": 2,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Array (unsorted)? (Set 65) (Set 219) (Set 687)",
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
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap? (Set 273) (Set 275) (Set 688)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when? (Set 232) (Set 297) (Set 689)",
    "options": [
      "First insertion as per specification",
      "After deletion only (general case)",
      "Table is empty in most cases",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Collision in hashing means? (Set 452) (Set 690)",
    "options": [
      "Key not found (typical scenario)",
      "Hash table is full by design",
      "Duplicate keys in most cases",
      "Two keys map to same index"
    ],
    "answer": 3,
    "explanation": "Different keys producing same hash cause collision."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort? (Set 295) (Set 691)",
    "options": [
      "T(n) = nT(n/2) by design",
      "T(n) = T(n/2) + O(1)",
      "T(n) = T(n-1) + O(n)",
      "T(n) = 2T(n/2) + O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Singly Linked List? (Set 8) (Set 692)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Access under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 48) (Set 693)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LCS (Longest Common Subsequence) of two strings? (Set 694)",
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
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Min Heap? (Set 14) (Set 58) (Set 189) (Set 695)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)? (Set 40) (Set 162) (Set 696)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "Recursion stack depth is log n on average."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same? (Set 217) (Set 312) (Set 313) (Set 617) (Set 697)",
    "options": [
      "Theta (Θ)",
      "Big Omega",
      "Big O",
      "Little o"
    ],
    "answer": 0,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Floyd-Warshall finds? (Set 131) (Set 698)",
    "options": [
      "All-pairs shortest paths",
      "MST under normal conditions",
      "Topological order in most cases",
      "Single-source shortest path"
    ],
    "answer": 0,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Min Heap? (Set 442) (Set 699)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Min Heap, a Access under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves? (Set 700)",
    "options": [
      "Shortest path in practice",
      "String matching",
      "Maximum subarray sum",
      "Sorting (primary approach)"
    ],
    "answer": 2,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Stack? (Set 149) (Set 355) (Set 701)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Search under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Red-Black Tree? (Set 702)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Red-Black Tree, a Access under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Array (sorted)? (Set 214) (Set 395) (Set 703)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Array (sorted), a Search under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Max Heap? (Set 88) (Set 375) (Set 704)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Max Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Dijkstra's algorithm fails with? (Set 80) (Set 359) (Set 705)",
    "options": [
      "Positive weights",
      "Dense graphs (general case)",
      "Negative edge weights",
      "Undirected graphs"
    ],
    "answer": 2,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Queue? (Set 120) (Set 211) (Set 706)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Queue, a Deletion under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Max Heap? (Set 707)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Search under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Stack? (Set 519) (Set 708)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 15) (Set 93) (Set 709)",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 48) (Set 428) (Set 532) (Set 710)",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a AVL Tree? (Set 711)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, a Search under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 3) (Set 6) (Set 712)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, a Search under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Stack? (Set 517) (Set 713)",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using? (Set 281) (Set 714)",
    "options": [
      "Recursion and backtracking",
      "Sorting (general case)",
      "Dynamic programming in most cases",
      "BFS only (typical scenario)"
    ],
    "answer": 0,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort? (Set 715)",
    "options": [
      "T(n) = T(n/2) + O(1)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = nT(n/2) in most cases",
      "T(n) = T(n-1) + O(n)"
    ],
    "answer": 1,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack? (Set 177) (Set 246) (Set 507) (Set 716)",
    "options": [
      "O(n²)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Insertion' operation on a AVL Tree? (Set 393) (Set 717)",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Insertion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search? (Set 15) (Set 90) (Set 718)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "May need to check every element."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Stack? (Set 149) (Set 355) (Set 719)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Search under Best Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Best Time to Buy Stock uses which pattern? (Set 148) (Set 665) (Set 720)",
    "options": [
      "Binary search as per specification",
      "Two pointers in standard usage",
      "Track minimum and max profit",
      "Sliding window in practice"
    ],
    "answer": 2,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Max Heap? (Set 60) (Set 153) (Set 245) (Set 721)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Min Heap? (Set 722)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Min Heap, a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Stack? (Set 69) (Set 589) (Set 723)",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Search under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "0/1 Knapsack time complexity? (Set 55) (Set 724)",
    "options": [
      "O(2^n)",
      "O(n log n)",
      "O(n²)",
      "O(n*W)"
    ],
    "answer": 3,
    "explanation": "DP table of items × capacity."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Memoization is? (Set 52) (Set 254) (Set 725)",
    "options": [
      "Greedy (commonly used)",
      "Brute force in standard usage",
      "Bottom-up approach in practice",
      "Top-down DP with caching"
    ],
    "answer": 3,
    "explanation": "Store results of subproblems to avoid recomputation."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Insertion' operation on a Queue? (Set 11) (Set 25) (Set 726)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Queue, a Insertion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Max Heap? (Set 231) (Set 432) (Set 727)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Max Heap, a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Dijkstra's algorithm fails with? (Set 114) (Set 497) (Set 728)",
    "options": [
      "Negative edge weights",
      "Dense graphs (commonly used)",
      "Positive weights",
      "Undirected graphs"
    ],
    "answer": 0,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Middle of linked list found using? (Set 729)",
    "options": [
      "Recursion in most cases",
      "Stack by design",
      "Counting then traversing",
      "Slow and fast pointer"
    ],
    "answer": 3,
    "explanation": "When fast reaches end, slow is at middle."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 513) (Set 730)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Deletion under Average Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by? (Set 36) (Set 155) (Set 323) (Set 657) (Set 731)",
    "options": [
      "Creating new table by design",
      "Using linked lists (general case)",
      "Probing for next empty slot",
      "Ignoring collision by design"
    ],
    "answer": 2,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the best case time complexity of performing a 'Deletion' operation on a Min Heap? (Set 363) (Set 413) (Set 732)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Min Heap, a Deletion under Best Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Array (unsorted)? (Set 733)",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (unsorted), a Access under Worst Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Array (unsorted)? (Set 342) (Set 354) (Set 535) (Set 734)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Array (unsorted), a Deletion under Average Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Stack? (Set 412) (Set 735)",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Stack, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Prim's algorithm starts from? (Set 5) (Set 304) (Set 736)",
    "options": [
      "Heaviest edge",
      "Leaf node (general case)",
      "Any single vertex",
      "All vertices"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves? (Set 49) (Set 737)",
    "options": [
      "Maximum subarray sum",
      "Sorting based on convention",
      "Shortest path by design",
      "String matching"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Search' operation on a Doubly Linked List? (Set 48) (Set 428) (Set 532) (Set 738)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, a Search under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Deletion' operation on a Queue? (Set 100) (Set 235) (Set 307) (Set 739)",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, a Deletion under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a AVL Tree? (Set 651) (Set 740)",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Access' operation on a Queue? (Set 741)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Queue, a Access under Worst Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Checking if two strings are anagrams requires? (Set 174) (Set 334) (Set 510) (Set 742)",
    "options": [
      "Character frequency comparison",
      "Substring search (primary approach)",
      "Regular expressions in practice",
      "Sorting only (widely accepted)"
    ],
    "answer": 0,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "BFS graph traversal uses? (Set 618) (Set 644) (Set 743)",
    "options": [
      "Deque",
      "Priority queue",
      "Stack",
      "Queue"
    ],
    "answer": 3,
    "explanation": "BFS explores level by level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the worst case time complexity of performing a 'Search' operation on a AVL Tree? (Set 651) (Set 744)",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, a Search under Worst Case takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Prim's algorithm starts from? (Set 745)",
    "options": [
      "All vertices",
      "Heaviest edge",
      "Leaf node by design",
      "Any single vertex"
    ],
    "answer": 3,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)? (Set 40) (Set 746)",
    "options": [
      "O(n²)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Recursion stack depth is log n on average."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the best case time complexity of performing a 'Access' operation on a Stack? (Set 747)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Stack, a Access under Best Case takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Easy",
    "question": "In DSA, what is the average case time complexity of performing a 'Access' operation on a Array (sorted)? (Set 748)",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Array (sorted), a Access under Average Case takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexities",
    "difficulty": "Medium",
    "question": "In DSA, what is the average case time complexity of performing a 'Search' operation on a Singly Linked List? (Set 749)",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, a Search under Average Case takes O(n)."
  }
];
