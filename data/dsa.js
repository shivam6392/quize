window.quizData = window.quizData || {};
window.quizData.dsa = [
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "Binary search halves the search space each step."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 3,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What does Big O notation describe?",
    "options": [
      "Upper bound of growth rate",
      "Lower bound (general case)",
      "Average case only in most cases",
      "Exact growth (typical scenario)"
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
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1 by design",
      "T(n) = n! (widely accepted)",
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
      "O(log n)",
      "O(1)"
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
      "Average case",
      "Lower bound",
      "Upper bound",
      "Tight bound"
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
      "Upper bound only",
      "Tight bound",
      "Lower bound only",
      "No bound"
    ],
    "answer": 1,
    "explanation": "Θ gives both upper and lower bounds."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the best case time complexity of insertion sort?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n²)",
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
      "Worst case only as per specification",
      "Best case only (standard definition)",
      "Space analysis in typical implementations",
      "Average cost per operation over a sequence"
    ],
    "answer": 3,
    "explanation": "Amortized analysis averages cost across operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
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
      "T(n) = nT(n/2) by design",
      "T(n) = T(n-1) + O(n)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = T(n/2) + O(1)"
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
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same?",
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
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Two Sum problem is best solved using?",
    "options": [
      "Sorting",
      "Binary Search Tree",
      "Stack",
      "HashMap"
    ],
    "answer": 3,
    "explanation": "HashMap gives O(1) lookup for complement."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path in practice",
      "Sorting (widely accepted)"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Sliding window technique is used for?",
    "options": [
      "Sorting in typical implementations",
      "Graph traversal in typical implementations",
      "Tree balancing in typical implementations",
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
    "difficulty": "Medium",
    "question": "Time complexity of rotating array by k positions using reversal?",
    "options": [
      "O(n*k)",
      "O(n)",
      "O(k)",
      "O(n²)"
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
      "Binary search (general case)",
      "Sliding window (general case)",
      "Two pointers based on convention",
      "Track minimum and max profit"
    ],
    "answer": 3,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Move Zeroes problem moves zeros to?",
    "options": [
      "Beginning",
      "End of array",
      "Middle in practice",
      "Sorted position"
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
      "Queue as per specification",
      "Left and right product arrays",
      "Sorting (general case)",
      "Stack (typical scenario)"
    ],
    "answer": 1,
    "explanation": "Multiply prefix and suffix products."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Merge Intervals first step is?",
    "options": [
      "Build a tree by design",
      "Sort by end time",
      "Use a stack in most cases",
      "Sort by start time"
    ],
    "answer": 3,
    "explanation": "Sorting by start allows sequential merging."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Two pointer technique works best on?",
    "options": [
      "Heaps in practice",
      "Trees (general case)",
      "Sorted arrays",
      "Graphs in most cases"
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
      "A window of elements satisfying a condition",
      "A balanced tree under normal conditions",
      "A priority queue (standard definition)",
      "A sorted subarray (typical scenario)"
    ],
    "answer": 0,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "KMP algorithm's time complexity for pattern matching?",
    "options": [
      "O(n*m)",
      "O(n²)",
      "O(n+m)",
      "O(m²)"
    ],
    "answer": 2,
    "explanation": "KMP uses failure function to avoid re-scanning."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Rabin-Karp uses what technique?",
    "options": [
      "Backtracking",
      "Hashing",
      "Dynamic programming",
      "Greedy"
    ],
    "answer": 1,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Checking if two strings are anagrams requires?",
    "options": [
      "Substring search based on convention",
      "Sorting only (default behavior)",
      "Regular expressions (commonly used)",
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
      "Only forward (general case)",
      "Forward and backward",
      "Diagonally by design",
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
      "Hashing (default behavior)",
      "Sorting (standard definition)",
      "Frequent modifications (mutable)",
      "Read-only access based on convention"
    ],
    "answer": 2,
    "explanation": "StringBuilder avoids creating new String objects."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Time complexity to check if a string is palindrome?",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(1)",
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
      "Stack (standard definition)",
      "Linked List (default behavior)",
      "Queue (general case)",
      "Array of size 26 or HashMap"
    ],
    "answer": 3,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Longest palindromic substring can be found in?",
    "options": [
      "O(log n) under normal conditions",
      "O(n³) as per specification",
      "O(n) as per specification",
      "O(n²) using expand around center"
    ],
    "answer": 3,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Stack (standard definition)",
      "Recursion only (widely accepted)",
      "Two pointers (slow and fast)",
      "Queue in typical implementations"
    ],
    "answer": 2,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Reversing a singly linked list takes?",
    "options": [
      "O(n) time, O(1) space",
      "O(n) space in practice",
      "O(log n) time (general case)",
      "O(n²) time (general case)"
    ],
    "answer": 0,
    "explanation": "Iterate once, reversing pointers in-place."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Middle of linked list found using?",
    "options": [
      "Stack (typical scenario)",
      "Counting then traversing",
      "Slow and fast pointer",
      "Recursion (widely accepted)"
    ],
    "answer": 2,
    "explanation": "When fast reaches end, slow is at middle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Merge two sorted linked lists time complexity?",
    "options": [
      "O(n+m)",
      "O(n²)",
      "O(log(n+m))",
      "O(n*m)"
    ],
    "answer": 0,
    "explanation": "Compare heads and merge in single pass."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Doubly linked list advantage over singly?",
    "options": [
      "Faster access by index by design",
      "Traversal in both directions",
      "Less memory by design",
      "Simpler implementation by design"
    ],
    "answer": 1,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Circular linked list last node points to?",
    "options": [
      "Previous node",
      "Itself by design",
      "NULL (default behavior)",
      "First node (head)"
    ],
    "answer": 3,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Stack in typical implementations",
      "Length difference or two-pointer approach",
      "Queue in typical implementations",
      "Sorting in typical implementations"
    ],
    "answer": 1,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Remove Nth node from end uses?",
    "options": [
      "Binary search (commonly used)",
      "Reverse list by design",
      "Two pointers with N gap",
      "Stack of size N in most cases"
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
      "FIFO (commonly used)",
      "LILO (typical scenario)",
      "Random access (commonly used)",
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
      "Queue",
      "Array",
      "Stack",
      "Tree"
    ],
    "answer": 2,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Monotonic stack is used for?",
    "options": [
      "String matching based on convention",
      "BFS in typical implementations",
      "Sorting in typical implementations",
      "Next greater/smaller element problems"
    ],
    "answer": 3,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Infix to postfix conversion uses?",
    "options": [
      "Linked list in most cases",
      "Tree in practice",
      "Stack for operators",
      "Queue (default behavior)"
    ],
    "answer": 2,
    "explanation": "Operators are pushed/popped based on precedence."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Time complexity of push and pop in stack?",
    "options": [
      "O(1)",
      "O(n²)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Queue is full in typical implementations",
      "Heap is full in typical implementations",
      "Stack memory is exhausted (e.g., deep recursion)",
      "Array is sorted in typical implementations"
    ],
    "answer": 2,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Postfix expression evaluation uses?",
    "options": [
      "Queue (widely accepted)",
      "Stack for operands",
      "Two stacks (general case)",
      "Tree (widely accepted)"
    ],
    "answer": 1,
    "explanation": "Push operands, pop two for each operator."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Queue follows which principle?",
    "options": [
      "Random access (typical scenario)",
      "Priority (primary approach)",
      "LIFO in typical implementations",
      "FIFO (First In First Out)"
    ],
    "answer": 3,
    "explanation": "First element enqueued is first dequeued."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Circular queue solves which problem?",
    "options": [
      "Searching based on convention",
      "Balancing under normal conditions",
      "Sorting as per specification",
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
      "Only rear in most cases",
      "Only front in most cases",
      "Middle only in most cases",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Priority queue is typically implemented using?",
    "options": [
      "Heap (binary heap)",
      "Array by design",
      "Linked list in practice",
      "Stack in most cases"
    ],
    "answer": 0,
    "explanation": "Heap gives O(log n) insert and extract-min/max."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "BFS graph traversal uses?",
    "options": [
      "Deque",
      "Queue",
      "Priority queue",
      "Stack"
    ],
    "answer": 1,
    "explanation": "BFS explores level by level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Time complexity of enqueue in circular queue?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "HashMap provides average case lookup of?",
    "options": [
      "O(log n)",
      "O(n²)",
      "O(n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Hash function maps key directly to bucket."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Collision in hashing means?",
    "options": [
      "Two keys map to same index",
      "Duplicate keys (general case)",
      "Hash table is full by design",
      "Key not found (default behavior)"
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
      "Sorting (general case)",
      "Rehashing only (general case)",
      "Open addressing (general case)"
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
      "Creating new table in most cases",
      "Using linked lists in practice",
      "Ignoring collision in practice",
      "Probing for next empty slot"
    ],
    "answer": 3,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Rehashing is triggered when?",
    "options": [
      "After deletion only by design",
      "First insertion by design",
      "Table is empty in practice",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "HashSet stores?",
    "options": [
      "Sorted elements",
      "Duplicates allowed",
      "Unique elements only",
      "Key-value pairs"
    ],
    "answer": 2,
    "explanation": "HashSet rejects duplicate entries."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "What is a good hash function property?",
    "options": [
      "Returns key itself (commonly used)",
      "Uniform distribution of keys",
      "Always returns 0 (commonly used)",
      "Ignores input in standard usage"
    ],
    "answer": 1,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Sorted ascending order",
      "Level order in standard usage",
      "Descending order by design",
      "Random order (general case)"
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
      "O(n²)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "Balanced tree has logarithmic height."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(1) (standard definition)",
      "O(n log n) (typical scenario)",
      "O(h) where h is height",
      "O(n²) (widely accepted)"
    ],
    "answer": 2,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "AVL tree maintains balance by?",
    "options": [
      "Sorting nodes (general case)",
      "Rebuilding tree (primary approach)",
      "Using extra array (default behavior)",
      "Rotations after insert/delete"
    ],
    "answer": 3,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Binary tree maximum path sum problem uses?",
    "options": [
      "Sorting in typical implementations",
      "Recursion with global max tracking",
      "Greedy (standard definition)",
      "BFS under normal conditions"
    ],
    "answer": 1,
    "explanation": "At each node, compute max path through it."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
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
    "difficulty": "Easy",
    "question": "Postorder traversal visits?",
    "options": [
      "Root, Left, Right",
      "Right, Left, Root",
      "Left, Right, Root",
      "Left, Root, Right"
    ],
    "answer": 2,
    "explanation": "Post = root last, after children."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Level order traversal uses?",
    "options": [
      "Sorting",
      "Queue (BFS)",
      "Recursion only",
      "Stack in practice"
    ],
    "answer": 1,
    "explanation": "Process nodes level by level using queue."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Diameter of binary tree is?",
    "options": [
      "Number of leaves (widely accepted)",
      "Longest path between any two nodes",
      "Height of tree as per specification",
      "Root to deepest node (primary approach)"
    ],
    "answer": 1,
    "explanation": "Diameter = max of left height + right height at each node."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Segment tree is used for?",
    "options": [
      "Graph traversal as per specification",
      "Range queries and updates efficiently",
      "String matching as per specification",
      "Sorting under normal conditions"
    ],
    "answer": 1,
    "explanation": "Segment tree handles range sum/min/max in O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Equal to children (general case)",
      "Less than children in most cases",
      "Greater than or equal to children",
      "Random in typical implementations"
    ],
    "answer": 2,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "BST search time complexity (balanced)?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "Balanced BST halves search space each step."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "BFS uses which data structure?",
    "options": [
      "Stack",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 2,
    "explanation": "BFS explores neighbors level-by-level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "DFS uses which data structure?",
    "options": [
      "Array based on convention",
      "Heap in standard usage",
      "Stack (or recursion)",
      "Queue in most cases"
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
      "Positive weights",
      "Undirected graphs",
      "Dense graphs by design",
      "Negative edge weights"
    ],
    "answer": 3,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Topological sort applies to?",
    "options": [
      "Cyclic graphs (primary approach)",
      "Weighted graphs only in practice",
      "Undirected graphs (primary approach)",
      "Directed Acyclic Graphs (DAG)"
    ],
    "answer": 3,
    "explanation": "Topological ordering requires no cycles."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Union-Find is used in?",
    "options": [
      "Kruskal's MST and cycle detection",
      "Shortest path based on convention",
      "BFS in typical implementations",
      "String matching (primary approach)"
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
      "Only trees by design",
      "Negative edge weights",
      "Only undirected by design"
    ],
    "answer": 2,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Greedy MST using sorted edges",
      "Divide and conquer (general case)",
      "Dynamic programming in practice",
      "BFS-based (default behavior)"
    ],
    "answer": 0,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Prim's algorithm starts from?",
    "options": [
      "All vertices",
      "Any single vertex",
      "Heaviest edge",
      "Leaf node (general case)"
    ],
    "answer": 1,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Floyd-Warshall finds?",
    "options": [
      "All-pairs shortest paths",
      "Single-source shortest path",
      "MST (default behavior)",
      "Topological order by design"
    ],
    "answer": 0,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Cycle detection in undirected graph uses?",
    "options": [
      "Topological sort (general case)",
      "BFS only under normal conditions",
      "Dijkstra in typical implementations",
      "DFS with parent tracking or Union-Find"
    ],
    "answer": 3,
    "explanation": "Back edge to non-parent indicates cycle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(E)",
      "O(V+E)",
      "O(V)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity?",
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
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Memoization is?",
    "options": [
      "Greedy in standard usage",
      "Bottom-up approach by design",
      "Brute force in standard usage",
      "Top-down DP with caching"
    ],
    "answer": 3,
    "explanation": "Store results of subproblems to avoid recomputation."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Tabulation is?",
    "options": [
      "Bottom-up DP using table",
      "Recursion (widely accepted)",
      "Backtracking (widely accepted)",
      "Top-down approach in most cases"
    ],
    "answer": 0,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "0/1 Knapsack time complexity?",
    "options": [
      "O(n*W)",
      "O(2^n)",
      "O(n log n)",
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
      "O(n) in practice",
      "O(2^n)",
      "O(n²)",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m+n)",
      "O(m*n)",
      "O(2^n)"
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
      "DP (unbounded knapsack variant)",
      "Sorting (default behavior)",
      "Greedy always in standard usage",
      "BFS only (default behavior)"
    ],
    "answer": 0,
    "explanation": "Try each coin, take minimum."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Matrix Chain Multiplication optimizes?",
    "options": [
      "Matrix sorting in practice",
      "Order of matrix multiplications",
      "Matrix values in most cases",
      "Matrix dimensions by design"
    ],
    "answer": 1,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "DP on grids typically moves?",
    "options": [
      "Up only in practice",
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
    "difficulty": "Hard",
    "question": "Optimal substructure means?",
    "options": [
      "Random solutions work (typical scenario)",
      "Optimal solution contains optimal sub-solutions",
      "Only greedy works under normal conditions",
      "Problem has no solution in standard usage"
    ],
    "answer": 1,
    "explanation": "Key property enabling DP approach."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Overlapping subproblems means?",
    "options": [
      "Linear scan suffices as per specification",
      "Same subproblems are solved multiple times",
      "No subproblems exist as per specification",
      "Each subproblem is unique (general case)"
    ],
    "answer": 1,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Activity selection problem selects by?",
    "options": [
      "Maximum duration",
      "Earliest finish time",
      "Latest start in most cases",
      "Random (primary approach)"
    ],
    "answer": 1,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Fractional knapsack allows?",
    "options": [
      "Negative weights (general case)",
      "Taking fractions of items",
      "No items (typical scenario)",
      "Only whole items in most cases"
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
      "Hash table (commonly used)",
      "Optimal prefix-free binary tree",
      "Balanced BST in most cases",
      "Graph in typical implementations"
    ],
    "answer": 1,
    "explanation": "Greedy: merge two lowest-frequency nodes."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Job scheduling with deadlines maximizes?",
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
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Minimum platforms problem uses?",
    "options": [
      "Stack (typical scenario)",
      "Binary search in most cases",
      "Queue (typical scenario)",
      "Sorting arrival/departure times"
    ],
    "answer": 3,
    "explanation": "Sort and count overlapping intervals."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Greedy algorithms guarantee optimal solution when?",
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
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row in practice",
      "Queens are adjacent by design",
      "No two queens attack each other",
      "Queens form diagonal in practice"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Sudoku solver uses?",
    "options": [
      "Greedy in typical implementations",
      "Backtracking with constraint checking",
      "BFS in typical implementations",
      "Sorting under normal conditions"
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
      "Sorting in standard usage",
      "Recursion and backtracking",
      "Dynamic programming in practice",
      "BFS only (general case)"
    ],
    "answer": 1,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Generating all permutations uses?",
    "options": [
      "Queue (widely accepted)",
      "Hashing (widely accepted)",
      "Swap-based backtracking",
      "Sorting (standard definition)"
    ],
    "answer": 2,
    "explanation": "Swap elements, recurse, then swap back."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Combination Sum allows?",
    "options": [
      "Reusing elements to reach target",
      "Each element used once (general case)",
      "Negative numbers as per specification",
      "Sorting only (commonly used)"
    ],
    "answer": 0,
    "explanation": "Include current element again or move to next."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n) in practice",
      "Exponential",
      "O(n log n)",
      "O(n²) by design"
    ],
    "answer": 1,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with itself gives?",
    "options": [
      "0",
      "Negative number",
      "The number itself",
      "1"
    ],
    "answer": 0,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "1 (commonly used)",
      "0 by design",
      "The number itself",
      "Complement in most cases"
    ],
    "answer": 2,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
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
      "Add 1 in practice",
      "Subtract 1",
      "Divide by 2",
      "Multiply by 2"
    ],
    "answer": 3,
    "explanation": "Shifting bits left doubles the value."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2 (primary approach)",
      "XOR with 1 in standard usage",
      "Multiply by 2 by design",
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
      "Extracting or setting specific bits",
      "String matching (commonly used)",
      "Graph traversal in standard usage"
    ],
    "answer": 1,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Trie is best for?",
    "options": [
      "Graph traversal by design",
      "Sorting numbers in practice",
      "Matrix operations in practice",
      "Prefix-based string operations"
    ],
    "answer": 3,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Disjoint Set Union find uses?",
    "options": [
      "Path compression and union by rank",
      "Sorting based on convention",
      "Hashing in typical implementations",
      "BFS under normal conditions"
    ],
    "answer": 0,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Fenwick tree (BIT) supports?",
    "options": [
      "Point updates and prefix sum queries",
      "Graph BFS (standard definition)",
      "String matching as per specification",
      "Sorting under normal conditions"
    ],
    "answer": 0,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Segment tree range query time?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Tree structure allows logarithmic range operations."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][16] starts at base address 2300 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[5][10]?",
    "options": [
      "4628",
      "2700",
      "4404",
      "4420"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (10 * 26 + 5) * 8 = 4420."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 9, 7, 20, 37, 46, 32, 40, 39, 12], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "287",
      "230",
      "270",
      "309"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 270."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][17] starts at base address 2700 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[4][14]?",
    "options": [
      "2756",
      "2780",
      "2782",
      "2799"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (4 * 17 + 14) * 1 = 2782."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Sorted Array?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Sorted Array, performing a 'Insertion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [14, 2, 3, 19, 33, 7], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "55",
      "57",
      "38",
      "24"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 38."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Singly Linked List?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, performing a 'Deletion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 43, 33, 33, 18, 11, 21, 42], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "132",
      "109",
      "148",
      "115"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 115."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [41, 26, 15, 3, 38, 49, 20, 47], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "140",
      "82",
      "123",
      "161"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 123."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Stack?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, performing a 'Deletion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 33, 1, 25, 27, 48, 27, 23, 44, 16, 27], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "262",
      "244",
      "278",
      "279"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 262."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][11] starts at base address 2700 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][6]?",
    "options": [
      "3100",
      "2996",
      "3012",
      "2844"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (3 * 11 + 6) * 8 = 3012."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Regular BST (worst case)?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Regular BST (worst case), performing a 'Insertion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "903",
      "368",
      "304",
      "325"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 36% density, total edges = 325."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Singly Linked List?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, performing a 'Access' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 20%, how many edges are present in G?",
    "options": [
      "61",
      "103",
      "75",
      "378"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 20% density, total edges = 75."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Queue?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Queue, performing a 'Search' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "841",
      "1275",
      "790",
      "765"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 62% density, total edges = 790."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "861",
      "463",
      "400",
      "421"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 49% density, total edges = 421."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 29, 22, 42, 8, 40, 18], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "196",
      "156",
      "173",
      "141"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 156."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "120",
      "19",
      "27",
      "43"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 23% density, total edges = 27."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][33] starts at base address 2200 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[11][4]?",
    "options": [
      "2376",
      "3800",
      "3668",
      "3660"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (11 * 33 + 4) * 4 = 3668."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Stack?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 41, 6, 21, 29], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "116",
      "112",
      "68",
      "95"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 95."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 46, 48, 25, 42, 33, 17, 32, 41], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "119",
      "152",
      "135",
      "160"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 135."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "120",
      "50",
      "58",
      "74"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 49% density, total edges = 58."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 16, 19, 19, 34, 23, 25, 11, 20, 28, 26, 11], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "170",
      "111",
      "176",
      "153"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 153."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][15] starts at base address 1600 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][12]?",
    "options": [
      "2344",
      "2288",
      "1792",
      "2272"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (12 * 7 + 2) * 8 = 2288."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "903",
      "231",
      "252",
      "295"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 28% density, total edges = 252."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "153",
      "59",
      "68",
      "86"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 45% density, total edges = 68."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][25] starts at base address 1800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[6][21]?",
    "options": [
      "2052",
      "2186",
      "2190",
      "2208"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (21 * 9 + 6) * 2 = 2190."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 26, 36, 12, 46, 42, 14, 25, 30, 21, 35, 16], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "74",
      "120",
      "125",
      "108"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 108."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "65",
      "153",
      "56",
      "83"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 43% density, total edges = 65."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "11",
      "27",
      "16",
      "55"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 30% density, total edges = 16."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][16] starts at base address 2100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[2][1]?",
    "options": [
      "2102",
      "2149",
      "2131",
      "2133"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (2 * 16 + 1) * 1 = 2133."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 33, 32, 28, 20, 7, 20, 4, 22, 24, 19, 50], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "125",
      "97",
      "114",
      "93"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 97."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Sorted Array?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Sorted Array, performing a 'Access' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][14] starts at base address 1300 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[14][12]?",
    "options": [
      "1508",
      "1468",
      "1506",
      "1522"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (14 * 14 + 12) * 1 = 1508."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 16, 2, 14, 29, 19, 4, 10, 50, 37, 35, 11], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "216",
      "181",
      "199",
      "236"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 199."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Regular BST (worst case)?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Regular BST (worst case), performing a 'Deletion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][32] starts at base address 1900 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[8][19]?",
    "options": [
      "2514",
      "2204",
      "2450",
      "2446"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (8 * 32 + 19) * 2 = 2450."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][29] starts at base address 2700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[7][19]?",
    "options": [
      "7076",
      "6860",
      "3764",
      "6844"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (19 * 27 + 7) * 8 = 6860."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][11] starts at base address 1400 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[7][7]?",
    "options": [
      "1728",
      "1736",
      "1596",
      "1780"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (7 * 11 + 7) * 4 = 1736."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][34] starts at base address 1200 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[2][20]?",
    "options": [
      "1280",
      "1376",
      "1372",
      "1444"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (2 * 34 + 20) * 2 = 1376."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][28] starts at base address 1700 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][10]?",
    "options": [
      "2788",
      "2796",
      "2904",
      "1860"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (10 * 27 + 4) * 4 = 2796."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 7, 32, 28, 12], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "77",
      "94",
      "39",
      "109"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 77."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][16] starts at base address 1300 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[13][3]?",
    "options": [
      "1612",
      "2332",
      "2100",
      "2084"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (3 * 29 + 13) * 8 = 2100."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Doubly Linked List?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][28] starts at base address 1500 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][15]?",
    "options": [
      "2208",
      "2164",
      "2160",
      "1560"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (15 * 22 + 2) * 2 = 2164."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "1485",
      "893",
      "975",
      "920"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 62% density, total edges = 920."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a AVL Tree?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, performing a 'Search' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][15] starts at base address 1800 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[6][7]?",
    "options": [
      "1842",
      "1912",
      "1897",
      "1895"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (6 * 15 + 7) * 1 = 1897."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Sorted Array?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Sorted Array, performing a 'Search' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][36] starts at base address 2600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][31]?",
    "options": [
      "4000",
      "3712",
      "3696",
      "3344"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (3 * 36 + 31) * 8 = 3712."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Regular BST (worst case)?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Regular BST (worst case), performing a 'Access' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][17] starts at base address 2400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[15][9]?",
    "options": [
      "2535",
      "2662",
      "2664",
      "2681"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (15 * 17 + 9) * 1 = 2664."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][37] starts at base address 2800 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[14][29]?",
    "options": [
      "7176",
      "7160",
      "6048",
      "7472"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (14 * 37 + 29) * 8 = 7176."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 23, 4, 41, 41, 47, 46, 19, 33], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "264",
      "235",
      "202",
      "218"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 218."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Singly Linked List?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Unsorted Array?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Unsorted Array, performing a 'Deletion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "548",
      "523",
      "599",
      "1275"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 43% density, total edges = 548."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Unsorted Array?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Unsorted Array, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "688",
      "739",
      "663",
      "1275"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 54% density, total edges = 688."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 9, 34, 21, 12, 33, 22], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "109",
      "164",
      "147",
      "180"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 147."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 20, 27, 3, 12], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "47",
      "76",
      "93",
      "103"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 76."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 23 vertices. If the graph connectivity density is 47%, how many edges are present in G?",
    "options": [
      "141",
      "118",
      "253",
      "107"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 23*(22)/2 = 253. At 47% density, total edges = 118."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "406",
      "183",
      "154",
      "140"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 38% density, total edges = 154."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 31, 26, 5, 1, 30, 46, 40, 43, 48], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "81",
      "57",
      "64",
      "90"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 64."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][37] starts at base address 2800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[14][25]?",
    "options": [
      "4232",
      "3500",
      "4174",
      "4178"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (25 * 27 + 14) * 2 = 4178."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][25] starts at base address 2500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[3][12]?",
    "options": [
      "2948",
      "2848",
      "2840",
      "2644"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (3 * 25 + 12) * 4 = 2848."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][39] starts at base address 1000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[1][32]?",
    "options": [
      "5088",
      "5104",
      "5232",
      "1256"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (32 * 16 + 1) * 8 = 5104."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Queue?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Queue, performing a 'Deletion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][35] starts at base address 2000 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[15][20]?",
    "options": [
      "3190",
      "2600",
      "3186",
      "3248"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (20 * 29 + 15) * 2 = 3190."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "50",
      "43",
      "64",
      "91"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 55% density, total edges = 50."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][31] starts at base address 1000 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][21]?",
    "options": [
      "1664",
      "1912",
      "1336",
      "1648"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (2 * 31 + 21) * 8 = 1664."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "153",
      "90",
      "81",
      "108"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 59% density, total edges = 90."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "351",
      "80",
      "67",
      "107"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 23% density, total edges = 80."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 20, 20, 26, 17, 39, 50, 1, 23, 22, 40, 24], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "186",
      "185",
      "202",
      "173"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 185."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "1485",
      "559",
      "477",
      "504"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 34% density, total edges = 504."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [8, 29, 25, 47, 4, 15], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "101",
      "126",
      "109",
      "156"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 109."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 48, 31, 20, 26, 24, 6, 14], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "184",
      "190",
      "155",
      "201"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 184."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "418",
      "1596",
      "446",
      "503"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 28% density, total edges = 446."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 36 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "328",
      "630",
      "382",
      "346"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 36*(35)/2 = 630. At 55% density, total edges = 346."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a AVL Tree?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, performing a 'Access' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][34] starts at base address 1200 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[7][16]?",
    "options": [
      "2208",
      "2216",
      "2352",
      "1648"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (7 * 34 + 16) * 4 = 2216."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][17] starts at base address 2200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[8][7]?",
    "options": [
      "2424",
      "2312",
      "2398",
      "2394"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (7 * 13 + 8) * 2 = 2398."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 52 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "491",
      "1326",
      "517",
      "569"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 52*(51)/2 = 1326. At 39% density, total edges = 517."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "159",
      "185",
      "146",
      "325"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 49% density, total edges = 159."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 24, 23, 15, 40, 12, 34, 37, 11, 25, 43, 39], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "74",
      "97",
      "47",
      "91"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 74."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 40, 13, 17, 13, 2, 1, 14, 7, 4], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "135",
      "128",
      "145",
      "107"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 128."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][16] starts at base address 2700 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[1][7]?",
    "options": [
      "2742",
      "2746",
      "2714",
      "2778"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (1 * 16 + 7) * 2 = 2746."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][38] starts at base address 1300 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[9][31]?",
    "options": [
      "2013",
      "1579",
      "1989",
      "1991"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (31 * 22 + 9) * 1 = 1991."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Stack?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Stack, performing a 'Access' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][38] starts at base address 2500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][5]?",
    "options": [
      "3756",
      "2660",
      "4060",
      "3740"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (4 * 38 + 5) * 8 = 3756."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "1085",
      "1057",
      "1142",
      "1596"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 68% density, total edges = 1085."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 37, 25, 36, 3, 38, 48, 33, 15, 27, 18], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "101",
      "153",
      "139",
      "136"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 136."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Unsorted Array?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Unsorted Array, performing a 'Search' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][20] starts at base address 2400 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[5][1]?",
    "options": [
      "2420",
      "2476",
      "2440",
      "2448"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (1 * 7 + 5) * 4 = 2448."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "67",
      "136",
      "50",
      "42"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 37% density, total edges = 50."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][34] starts at base address 2100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[6][4]?",
    "options": [
      "2308",
      "2124",
      "2306",
      "2342"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (6 * 34 + 4) * 1 = 2308."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 31, 5, 9, 35, 11, 31, 7, 21, 33, 39], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "238",
      "254",
      "221",
      "183"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 221."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "496",
      "165",
      "117",
      "133"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 27% density, total edges = 133."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][37] starts at base address 2700 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][17]?",
    "options": [
      "3724",
      "4020",
      "3708",
      "3108"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (3 * 37 + 17) * 8 = 3724."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][31] starts at base address 1300 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[6][1]?",
    "options": [
      "1319",
      "1321",
      "1336",
      "1306"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (1 * 15 + 6) * 1 = 1321."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][34] starts at base address 2900 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[6][17]?",
    "options": [
      "3308",
      "3920",
      "3776",
      "3784"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (6 * 34 + 17) * 4 = 3784."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "528",
      "232",
      "265",
      "216"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 44% density, total edges = 232."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][34] starts at base address 1000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][3]?",
    "options": [
      "1048",
      "1244",
      "1236",
      "1320"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (3 * 19 + 4) * 4 = 1244."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][34] starts at base address 2900 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][14]?",
    "options": [
      "3364",
      "3012",
      "3228",
      "3220"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (2 * 34 + 14) * 4 = 3228."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "51",
      "231",
      "84",
      "62"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 27% density, total edges = 62."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 53%, how many edges are present in G?",
    "options": [
      "263",
      "279",
      "312",
      "528"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 53% density, total edges = 279."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][35] starts at base address 1500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][22]?",
    "options": [
      "2796",
      "2780",
      "3076",
      "2204"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (4 * 35 + 22) * 8 = 2796."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][16] starts at base address 1200 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][4]?",
    "options": [
      "1344",
      "1408",
      "1336",
      "1232"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (2 * 16 + 4) * 4 = 1344."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 6, 23, 42, 31, 40, 9, 48], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "56",
      "62",
      "39",
      "29"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 39."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 15 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "50",
      "35",
      "105",
      "28"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 15*(14)/2 = 105. At 34% density, total edges = 35."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][34] starts at base address 2100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[3][9]?",
    "options": [
      "2182",
      "2193",
      "2184",
      "2127"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2100 + (9 * 9 + 3) * 1 = 2184."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][14] starts at base address 2700 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[20][10]?",
    "options": [
      "3039",
      "3008",
      "2900",
      "3010"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (10 * 29 + 20) * 1 = 3010."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 49, 45, 15, 23, 6, 12, 16, 36, 7, 9, 19], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "139",
      "156",
      "145",
      "138"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 139."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 10, 46, 32, 44, 10], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "135",
      "118",
      "150",
      "88"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][32] starts at base address 1700 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[13][6]?",
    "options": [
      "1926",
      "1930",
      "1964",
      "1856"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (6 * 17 + 13) * 2 = 1930."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 52%, how many edges are present in G?",
    "options": [
      "666",
      "383",
      "346",
      "328"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 52% density, total edges = 346."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][11] starts at base address 2400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[2][9]?",
    "options": [
      "2431",
      "2418",
      "2442",
      "2429"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (2 * 11 + 9) * 1 = 2431."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 30, 27, 5, 17, 25, 2], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "108",
      "57",
      "81",
      "98"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 81."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][31] starts at base address 2000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[6][28]?",
    "options": [
      "5632",
      "3344",
      "5760",
      "5616"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (28 * 16 + 6) * 8 = 5632."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 41, 19, 10, 8, 41, 24, 48, 33, 16, 27, 26], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "78",
      "118",
      "135",
      "126"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Doubly Linked List?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, performing a 'Access' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "454",
      "367",
      "1653",
      "396"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 24% density, total edges = 396."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 38 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "386",
      "367",
      "703",
      "424"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 38*(37)/2 = 703. At 55% density, total edges = 386."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Queue?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, performing a 'Access' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][14] starts at base address 1800 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[12][4]?",
    "options": [
      "1848",
      "1970",
      "1986",
      "1972"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (12 * 14 + 4) * 1 = 1972."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [41, 29, 28, 41, 40, 43, 49, 6, 28], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "138",
      "219",
      "196",
      "179"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 179."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "690",
      "1128",
      "618",
      "642"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 57% density, total edges = 642."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [45, 29, 14, 11, 41, 11], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "43",
      "105",
      "102",
      "88"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 88."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [44, 50, 38, 7, 6, 8, 44, 1, 3, 38, 47], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "277",
      "256",
      "239",
      "195"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 239."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [32, 28, 7, 3, 37, 25, 21, 38, 3, 11, 36, 37], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "208",
      "229",
      "159",
      "191"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 191."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][29] starts at base address 2600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[5][8]?",
    "options": [
      "2760",
      "3204",
      "3328",
      "3212"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (5 * 29 + 8) * 4 = 3212."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][27] starts at base address 2400 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[9][8]?",
    "options": [
      "3736",
      "3752",
      "2976",
      "3912"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (8 * 20 + 9) * 8 = 3752."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "189",
      "595",
      "137",
      "154"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 26% density, total edges = 154."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][14] starts at base address 2900 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[6][10]?",
    "options": [
      "3588",
      "3380",
      "3652",
      "3572"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (10 * 8 + 6) * 8 = 3588."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][11] starts at base address 1900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][7]?",
    "options": [
      "1928",
      "2064",
      "2040",
      "2044"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (7 * 10 + 2) * 2 = 2044."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][36] starts at base address 1100 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[4][18]?",
    "options": [
      "1244",
      "1392",
      "1396",
      "1412"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (18 * 8 + 4) * 2 = 1396."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 33, 19, 40, 29, 21, 11, 33, 8, 28, 29, 14], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "135",
      "95",
      "92",
      "112"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 95."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 38, 31, 45, 39, 14, 10, 42, 5, 28, 18], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "170",
      "167",
      "187",
      "184"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 170."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "861",
      "403",
      "340",
      "361"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 42% density, total edges = 361."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "66",
      "171",
      "85",
      "57"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 39% density, total edges = 66."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "767",
      "712",
      "1485",
      "685"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 48% density, total edges = 712."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Unsorted Array?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Unsorted Array, performing a 'Access' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][39] starts at base address 2600 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[8][10]?",
    "options": [
      "4408",
      "3240",
      "4424",
      "4600"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (10 * 22 + 8) * 8 = 4424."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 10, 24, 41, 29, 11, 42, 15, 45, 49, 20, 7], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "301",
      "321",
      "318",
      "286"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 301."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Singly Linked List?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, performing a 'Search' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 44, 48, 43, 6, 9, 44, 3], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "150",
      "172",
      "163",
      "180"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 163."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][21] starts at base address 2300 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[2][2]?",
    "options": [
      "2384",
      "2430",
      "2308",
      "2388"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (2 * 21 + 2) * 2 = 2388."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 46%, how many edges are present in G?",
    "options": [
      "173",
      "201",
      "378",
      "159"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 46% density, total edges = 173."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 13, 44, 5, 35], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "93",
      "98",
      "110",
      "62"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 93."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][12] starts at base address 2900 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[16][3]?",
    "options": [
      "3680",
      "3092",
      "3728",
      "3672"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (16 * 12 + 3) * 4 = 3680."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 21, 26, 8, 5, 2], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "69",
      "78",
      "47",
      "52"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 52."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "221",
      "182",
      "325",
      "195"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 60% density, total edges = 195."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 41%, how many edges are present in G?",
    "options": [
      "336",
      "377",
      "820",
      "316"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 41% density, total edges = 336."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "846",
      "901",
      "819",
      "1485"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 57% density, total edges = 846."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 49, 34, 49, 35, 47, 23], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "110",
      "144",
      "83",
      "127"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 110."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][25] starts at base address 1100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[2][11]?",
    "options": [
      "1355",
      "1378",
      "1122",
      "1353"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (11 * 23 + 2) * 1 = 1355."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 49 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "716",
      "789",
      "1176",
      "740"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 49*(48)/2 = 1176. At 63% density, total edges = 740."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][13] starts at base address 1000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[18][6]?",
    "options": [
      "1432",
      "1660",
      "1568",
      "1576"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (6 * 21 + 18) * 4 = 1576."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Regular BST (worst case)?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Regular BST (worst case), performing a 'Search' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 30, 29, 35, 27, 47, 14], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "173",
      "190",
      "168",
      "220"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 173."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][21] starts at base address 1000 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[11][19]?",
    "options": [
      "2672",
      "2984",
      "3168",
      "3000"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (11 * 21 + 19) * 8 = 3000."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "625",
      "1035",
      "579",
      "556"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 56% density, total edges = 579."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 4, 7, 21, 4, 36, 44], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "74",
      "110",
      "72",
      "91"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 74."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "42",
      "28",
      "91",
      "21"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 31% density, total edges = 28."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 47, 18, 44, 25, 49, 14, 26, 17, 4, 49], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "157",
      "140",
      "165",
      "134"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 140."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][24] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[4][22]?",
    "options": [
      "2836",
      "2884",
      "2832",
      "2776"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (4 * 24 + 22) * 2 = 2836."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][15] starts at base address 2200 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[8][1]?",
    "options": [
      "2321",
      "2319",
      "2336",
      "2208"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (8 * 15 + 1) * 1 = 2321."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 21 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "78",
      "210",
      "109",
      "88"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 21*(20)/2 = 210. At 42% density, total edges = 88."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "76",
      "118",
      "378",
      "90"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 24% density, total edges = 90."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "211",
      "406",
      "168",
      "182"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 45% density, total edges = 182."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Doubly Linked List?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, performing a 'Search' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "459",
      "820",
      "439",
      "500"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 56% density, total edges = 459."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][36] starts at base address 2100 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[11][4]?",
    "options": [
      "2452",
      "5284",
      "5300",
      "5588"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (11 * 36 + 4) * 8 = 5300."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "231",
      "127",
      "116",
      "149"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 55% density, total edges = 127."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][11] starts at base address 2000 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[9][3]?",
    "options": [
      "2132",
      "2128",
      "2170",
      "2054"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (3 * 19 + 9) * 2 = 2132."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 21, 45, 11, 37, 50, 25, 50], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "229",
      "189",
      "221",
      "204"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 204."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "352",
      "304",
      "1128",
      "280"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 27% density, total edges = 304."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 11, 1, 5, 21, 21, 26, 45, 16, 23], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "178",
      "133",
      "130",
      "150"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 133."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "333",
      "368",
      "316",
      "595"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 56% density, total edges = 333."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 3, 24, 36, 11, 13, 45, 10, 20, 31, 46], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "112",
      "129",
      "148",
      "63"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 112."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 17, 39, 48, 30, 22], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "173",
      "125",
      "142",
      "104"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 125."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][29] starts at base address 1300 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[7][7]?",
    "options": [
      "2980",
      "2964",
      "1692",
      "3212"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (7 * 29 + 7) * 8 = 2980."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Sorted Array?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Sorted Array, performing a 'Deletion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 42, 14, 44, 7, 8, 16, 9], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "76",
      "56",
      "93",
      "90"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 76."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 34, 16, 49, 17, 12, 23, 36, 20, 13, 2, 13], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "252",
      "267",
      "222",
      "250"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 250."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][26] starts at base address 1000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][10]?",
    "options": [
      "1160",
      "1496",
      "1544",
      "1488"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (10 * 12 + 4) * 4 = 1496."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][13] starts at base address 1400 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][2]?",
    "options": [
      "1712",
      "1728",
      "1832",
      "1448"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (3 * 13 + 2) * 8 = 1728."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 28, 19, 46, 2, 24, 8, 30, 22], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "139",
      "185",
      "156",
      "93"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 139."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "212",
      "258",
      "465",
      "227"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 49% density, total edges = 227."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 52 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "795",
      "847",
      "1326",
      "769"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 52*(51)/2 = 1326. At 60% density, total edges = 795."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 16, 16, 2, 49, 6, 46, 33, 39], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "89",
      "115",
      "132",
      "121"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 115."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "166",
      "179",
      "351",
      "206"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 51% density, total edges = 179."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 25%, how many edges are present in G?",
    "options": [
      "903",
      "204",
      "268",
      "225"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 25% density, total edges = 225."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "690",
      "760",
      "713",
      "1081"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 66% density, total edges = 713."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 38, 5, 14, 31, 43, 49], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "88",
      "131",
      "148",
      "162"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 131."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "300",
      "75",
      "87",
      "112"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 29% density, total edges = 87."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 15 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "30",
      "45",
      "105",
      "23"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 15*(14)/2 = 105. At 29% density, total edges = 30."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 20, 12, 32, 19, 2, 48], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "92",
      "109",
      "94",
      "85"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [44, 19, 43, 16, 20, 40, 38, 14, 4, 7, 34, 11], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "255",
      "194",
      "238",
      "242"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 238."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [45, 25, 24, 2, 12], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "113",
      "51",
      "96",
      "98"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 96."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 39, 42, 11, 15, 16, 39, 46, 36, 36, 8], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "167",
      "150",
      "165",
      "107"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 150."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "265",
      "250",
      "435",
      "295"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 61% density, total edges = 265."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 24, 20, 29, 44], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "129",
      "117",
      "100",
      "73"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 100."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][27] starts at base address 1600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[10][10]?",
    "options": [
      "2156",
      "1800",
      "2160",
      "2214"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (10 * 27 + 10) * 2 = 2160."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "1081",
      "511",
      "441",
      "464"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 43% density, total edges = 464."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 9, 13, 36, 4, 43, 40, 7, 28, 43, 35], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "223",
      "257",
      "240",
      "283"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 240."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][36] starts at base address 2400 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[6][20]?",
    "options": [
      "2880",
      "3336",
      "3344",
      "3488"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (6 * 36 + 20) * 4 = 3344."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [9, 12, 9, 46, 42, 47, 2, 35, 12, 36], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "237",
      "219",
      "202",
      "193"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 202."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 49, 48, 2, 45, 49, 20, 2, 44, 9, 24], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "270",
      "255",
      "215",
      "253"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 253."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 34 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "134",
      "185",
      "151",
      "561"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 34*(33)/2 = 561. At 27% density, total edges = 151."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][18] starts at base address 1400 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[10][6]?",
    "options": [
      "2520",
      "2712",
      "1880",
      "2536"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (6 * 22 + 10) * 8 = 2536."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "886",
      "1485",
      "831",
      "804"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 56% density, total edges = 831."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][39] starts at base address 1900 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[8][17]?",
    "options": [
      "3372",
      "2444",
      "3216",
      "3208"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (8 * 39 + 17) * 4 = 3216."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 28, 23, 45, 48, 10, 39, 7, 32, 39], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "144",
      "156",
      "204",
      "173"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 156."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 17, 19, 14, 21, 44, 17], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "99",
      "50",
      "116",
      "113"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 99."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 45, 48, 45, 14, 50, 10, 11, 2], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "152",
      "187",
      "201",
      "204"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 187."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 20, 46, 31, 20, 50, 30, 42], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "197",
      "240",
      "270",
      "257"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 240."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 64%, how many edges are present in G?",
    "options": [
      "45",
      "28",
      "23",
      "38"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 64% density, total edges = 28."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][15] starts at base address 1900 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][7]?",
    "options": [
      "2404",
      "2492",
      "2012",
      "2420"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (7 * 9 + 2) * 8 = 2420."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][19] starts at base address 1300 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[9][5]?",
    "options": [
      "2692",
      "1660",
      "2708",
      "2860"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (9 * 19 + 5) * 8 = 2708."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][21] starts at base address 1300 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[3][4]?",
    "options": [
      "1381",
      "1312",
      "1383",
      "1403"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (4 * 20 + 3) * 1 = 1383."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 18, 50, 48, 34, 35, 31, 50, 18, 27], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "323",
      "284",
      "322",
      "305"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 305."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][13] starts at base address 2400 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[1][2]?",
    "options": [
      "2456",
      "2426",
      "2404",
      "2430"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (1 * 13 + 2) * 2 = 2430."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 21%, how many edges are present in G?",
    "options": [
      "1431",
      "273",
      "354",
      "300"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 21% density, total edges = 300."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][10] starts at base address 2000 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[10][3]?",
    "options": [
      "2113",
      "2030",
      "2103",
      "2101"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (10 * 10 + 3) * 1 = 2103."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 20, 27, 42, 20, 30], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "109",
      "156",
      "139",
      "159"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 139."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 34, 22, 46, 31, 20, 28, 33, 18, 38, 27, 36], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "309",
      "297",
      "326",
      "336"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 309."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 38 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "248",
      "267",
      "703",
      "305"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 38*(37)/2 = 703. At 38% density, total edges = 267."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "714",
      "1035",
      "691",
      "760"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 69% density, total edges = 714."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][16] starts at base address 2600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[11][6]?",
    "options": [
      "3372",
      "2864",
      "3268",
      "3260"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (6 * 26 + 11) * 4 = 3268."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][35] starts at base address 2700 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[9][31]?",
    "options": [
      "4844",
      "3816",
      "4912",
      "4836"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (31 * 17 + 9) * 4 = 4844."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 17, 21, 41, 4, 46, 18, 25], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "58",
      "38",
      "62",
      "41"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 41."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "73",
      "190",
      "43",
      "53"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 28% density, total edges = 53."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][19] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[3][15]?",
    "options": [
      "2782",
      "2744",
      "2690",
      "2740"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (3 * 19 + 15) * 2 = 2744."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 7, 38, 46, 43, 42, 16, 40, 8], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "192",
      "213",
      "197",
      "214"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 197."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "595",
      "303",
      "338",
      "286"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 51% density, total edges = 303."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 4, 28, 5, 20, 46, 1, 13, 9, 15], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "47",
      "37",
      "42",
      "59"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 42."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][35] starts at base address 1100 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[12][29]?",
    "options": [
      "2896",
      "2492",
      "3036",
      "2888"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (12 * 35 + 29) * 4 = 2896."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "166",
      "465",
      "181",
      "212"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 39% density, total edges = 181."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][39] starts at base address 1600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[16][19]?",
    "options": [
      "3504",
      "3412",
      "2816",
      "3404"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (19 * 23 + 16) * 4 = 3412."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "250",
      "211",
      "325",
      "224"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 69% density, total edges = 224."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 15, 8, 20, 49, 36, 38], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "75",
      "55",
      "43",
      "72"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 55."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [44, 48, 35, 22, 25, 32, 12, 22], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "127",
      "83",
      "144",
      "162"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 127."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][29] starts at base address 2400 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[6][8]?",
    "options": [
      "2822",
      "2496",
      "2760",
      "2764"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (6 * 29 + 8) * 2 = 2764."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][33] starts at base address 2700 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[3][13]?",
    "options": [
      "2739",
      "2820",
      "2829",
      "2818"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (13 * 9 + 3) * 1 = 2820."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "151",
      "496",
      "103",
      "119"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 24% density, total edges = 119."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 23 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "80",
      "253",
      "69",
      "103"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 23*(22)/2 = 253. At 32% density, total edges = 80."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "1485",
      "460",
      "515",
      "433"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 31% density, total edges = 460."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "47",
      "66",
      "38",
      "171"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 28% density, total edges = 47."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][16] starts at base address 1800 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[4][3]?",
    "options": [
      "1865",
      "1812",
      "1867",
      "1883"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (4 * 16 + 3) * 1 = 1867."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 16, 14, 43, 42, 3], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "94",
      "73",
      "111",
      "137"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 94."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 47%, how many edges are present in G?",
    "options": [
      "171",
      "80",
      "99",
      "71"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 47% density, total edges = 80."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 3, 21, 16, 1, 41, 17], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "77",
      "94",
      "93",
      "40"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 77."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][34] starts at base address 1000 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[14][24]?",
    "options": [
      "2036",
      "1672",
      "2078",
      "2032"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (24 * 21 + 14) * 2 = 2036."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 29, 47, 1, 25, 14, 6], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "130",
      "77",
      "113",
      "114"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 113."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][30] starts at base address 2300 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[6][18]?",
    "options": [
      "3092",
      "3212",
      "3084",
      "2732"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (6 * 30 + 18) * 4 = 3092."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 23, 43, 19, 7, 13, 18, 4, 32, 43, 7, 32], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "229",
      "219",
      "212",
      "209"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 212."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][18] starts at base address 2600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][2]?",
    "options": [
      "2712",
      "2632",
      "2680",
      "2672"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (2 * 8 + 4) * 4 = 2680."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 65%, how many edges are present in G?",
    "options": [
      "136",
      "88",
      "80",
      "105"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 65% density, total edges = 88."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][33] starts at base address 1400 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[5][5]?",
    "options": [
      "1600",
      "3024",
      "2760",
      "2744"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (5 * 33 + 5) * 8 = 2760."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][14] starts at base address 2400 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][11]?",
    "options": [
      "2936",
      "2808",
      "2664",
      "2824"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (3 * 14 + 11) * 8 = 2824."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 50, 15, 25, 22, 43], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "143",
      "160",
      "165",
      "112"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 143."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 9, 32, 50, 31, 23, 9, 12], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "151",
      "122",
      "182",
      "168"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 151."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][39] starts at base address 2700 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][29]?",
    "options": [
      "3392",
      "2816",
      "3424",
      "3400"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (29 * 6 + 1) * 4 = 3400."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 5, 11, 8, 26, 5, 6, 32], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "104",
      "95",
      "78",
      "50"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 78."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 17, 45, 14, 31, 1, 5, 6, 20, 39], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "142",
      "173",
      "159",
      "107"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 142."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 39 vertices. If the graph connectivity density is 70%, how many edges are present in G?",
    "options": [
      "557",
      "499",
      "518",
      "741"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 39*(38)/2 = 741. At 70% density, total edges = 518."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "946",
      "510",
      "488",
      "554"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 54% density, total edges = 510."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Stack?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Stack, performing a 'Search' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 52 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "265",
      "343",
      "1326",
      "291"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 52*(51)/2 = 1326. At 22% density, total edges = 291."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a AVL Tree?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, performing a 'Insertion' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "33",
      "45",
      "66",
      "27"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 50% density, total edges = 33."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 18, 37, 50, 42], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "70",
      "55",
      "107",
      "87"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 70."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][26] starts at base address 2700 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][19]?",
    "options": [
      "2776",
      "3046",
      "3042",
      "3064"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (19 * 9 + 2) * 2 = 3046."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "780",
      "530",
      "510",
      "570"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 68% density, total edges = 530."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][33] starts at base address 2200 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[14][27]?",
    "options": [
      "3174",
      "3178",
      "2956",
      "3244"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (14 * 33 + 27) * 2 = 3178."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 18, 6, 30, 40, 14, 45, 8, 13, 13, 16], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "239",
      "187",
      "226",
      "243"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 226."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "39",
      "52",
      "78",
      "33"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 51% density, total edges = 39."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][23] starts at base address 1200 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[5][12]?",
    "options": [
      "1800",
      "1708",
      "1700",
      "1440"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (5 * 23 + 12) * 4 = 1708."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][15] starts at base address 2100 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[1][1]?",
    "options": [
      "2104",
      "2224",
      "2156",
      "2164"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (1 * 15 + 1) * 4 = 2164."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][20] starts at base address 2400 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[12][16]?",
    "options": [
      "5624",
      "5440",
      "3936",
      "5424"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (16 * 23 + 12) * 8 = 5440."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 38, 18, 32, 17, 23, 24, 38, 10, 11, 27], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "211",
      "241",
      "230",
      "247"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 230."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][11] starts at base address 2100 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[3][8]?",
    "options": [
      "2256",
      "2264",
      "2196",
      "2308"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (3 * 11 + 8) * 4 = 2264."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 37, 30, 43, 37], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "148",
      "131",
      "174",
      "110"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 131."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 45, 46, 12, 50, 22, 23, 14, 15, 42], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "292",
      "277",
      "294",
      "227"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 277."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][29] starts at base address 2500 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[15][4]?",
    "options": [
      "2939",
      "2968",
      "2560",
      "2937"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (15 * 29 + 4) * 1 = 2939."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][13] starts at base address 2200 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[20][9]?",
    "options": [
      "3144",
      "2920",
      "3240",
      "3136"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (9 * 24 + 20) * 4 = 3144."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][30] starts at base address 2500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][2]?",
    "options": [
      "2516",
      "2748",
      "2868",
      "2740"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (2 * 30 + 2) * 4 = 2748."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 8, 38, 24, 45, 29, 9, 25], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "115",
      "98",
      "122",
      "70"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 98."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 52%, how many edges are present in G?",
    "options": [
      "535",
      "469",
      "946",
      "491"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 52% density, total edges = 491."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][38] starts at base address 2500 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[20][30]?",
    "options": [
      "4900",
      "6176",
      "6060",
      "6052"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (30 * 29 + 20) * 4 = 6060."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][35] starts at base address 1200 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[8][7]?",
    "options": [
      "2488",
      "2348",
      "2340",
      "1424"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (8 * 35 + 7) * 4 = 2348."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "41",
      "171",
      "32",
      "60"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 24% density, total edges = 41."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][27] starts at base address 1200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][11]?",
    "options": [
      "1244",
      "1336",
      "1348",
      "1332"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (11 * 6 + 2) * 2 = 1336."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 21%, how many edges are present in G?",
    "options": [
      "903",
      "189",
      "168",
      "232"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 21% density, total edges = 189."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 45, 47, 2, 48, 15, 8, 19, 37, 11, 6, 22], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "238",
      "261",
      "250",
      "244"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 244."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "445",
      "526",
      "1431",
      "472"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 33% density, total edges = 472."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "26",
      "66",
      "8",
      "14"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 22% density, total edges = 14."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 41, 25, 25, 22, 20, 32, 9], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "194",
      "226",
      "165",
      "211"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 194."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "412",
      "476",
      "433",
      "903"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 48% density, total edges = 433."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][10] starts at base address 1200 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][4]?",
    "options": [
      "1296",
      "1336",
      "1232",
      "1288"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (2 * 10 + 4) * 4 = 1296."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Doubly Linked List?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, performing a 'Deletion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "322",
      "990",
      "277",
      "255"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 28% density, total edges = 277."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "321",
      "291",
      "435",
      "276"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 67% density, total edges = 291."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 41%, how many edges are present in G?",
    "options": [
      "1275",
      "573",
      "497",
      "522"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 41% density, total edges = 522."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][24] starts at base address 1900 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[13][14]?",
    "options": [
      "3512",
      "3520",
      "2628",
      "3632"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (14 * 28 + 13) * 4 = 3520."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 39 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "320",
      "262",
      "741",
      "281"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 39*(38)/2 = 741. At 38% density, total edges = 281."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 32, 12, 12, 47, 19, 50, 46, 26, 36, 29, 48], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "96",
      "113",
      "56",
      "108"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 96."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][14] starts at base address 1100 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[13][4]?",
    "options": [
      "1836",
      "1900",
      "1308",
      "1844"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (13 * 14 + 4) * 4 = 1844."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 42, 7, 38, 30, 35, 8, 8, 26], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "152",
      "229",
      "194",
      "211"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 194."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][36] starts at base address 2700 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][27]?",
    "options": [
      "3348",
      "4068",
      "3780",
      "3764"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (3 * 36 + 27) * 8 = 3780."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 23 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "70",
      "253",
      "59",
      "93"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 23*(22)/2 = 253. At 28% density, total edges = 70."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "666",
      "159",
      "141",
      "196"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 24% density, total edges = 159."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][35] starts at base address 1200 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[5][1]?",
    "options": [
      "2592",
      "2608",
      "2888",
      "1240"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (5 * 35 + 1) * 8 = 2608."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][39] starts at base address 2300 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[9][18]?",
    "options": [
      "3128",
      "3120",
      "3172",
      "2948"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (18 * 11 + 9) * 4 = 3128."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 50 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "648",
      "723",
      "1225",
      "673"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 50*(49)/2 = 1225. At 55% density, total edges = 673."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 12, 8, 29, 18, 23, 1, 15, 19, 9], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "67",
      "100",
      "83",
      "101"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 83."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 11, 15, 33, 39, 13, 16, 21, 11, 26, 33], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "82",
      "65",
      "59",
      "98"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 65."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 46, 3, 9, 5, 47, 35, 49, 20], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "151",
      "168",
      "145",
      "186"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 151."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 13, 4, 24, 7, 38, 19, 33, 7, 50, 37, 41], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "41",
      "61",
      "85",
      "78"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 61."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][18] starts at base address 1700 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[14][6]?",
    "options": [
      "1868",
      "1870",
      "1784",
      "1896"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (6 * 26 + 14) * 1 = 1870."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][36] starts at base address 1500 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[4][19]?",
    "options": [
      "4724",
      "4892",
      "2108",
      "4708"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (19 * 21 + 4) * 8 = 4724."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 12, 7, 15, 1], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "34",
      "57",
      "55",
      "40"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 40."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][35] starts at base address 1500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][8]?",
    "options": [
      "2964",
      "1756",
      "2684",
      "2668"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (4 * 35 + 8) * 8 = 2684."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][21] starts at base address 1500 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[7][6]?",
    "options": [
      "1760",
      "1668",
      "1808",
      "1768"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (6 * 10 + 7) * 4 = 1768."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 29, 28, 44, 50, 44, 45, 17], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "301",
      "240",
      "256",
      "273"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 256."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "45",
      "10",
      "5",
      "20"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 23% density, total edges = 10."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][32] starts at base address 1100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[7][10]?",
    "options": [
      "1170",
      "1261",
      "1247",
      "1245"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (10 * 14 + 7) * 1 = 1247."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "39",
      "69",
      "49",
      "190"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 26% density, total edges = 49."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "356",
      "312",
      "290",
      "946"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 33% density, total edges = 312."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][37] starts at base address 1900 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[12][16]?",
    "options": [
      "2360",
      "2397",
      "2358",
      "2092"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (12 * 37 + 16) * 1 = 2360."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][39] starts at base address 2500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[2][17]?",
    "options": [
      "2704",
      "2718",
      "2706",
      "2534"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (17 * 12 + 2) * 1 = 2706."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 24, 22, 25, 21, 47, 35], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "105",
      "113",
      "88",
      "71"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 88."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "1596",
      "663",
      "578",
      "606"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 38% density, total edges = 606."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "944",
      "1431",
      "917",
      "998"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 66% density, total edges = 944."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][21] starts at base address 2400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[7][5]?",
    "options": [
      "2573",
      "2552",
      "2550",
      "2435"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (7 * 21 + 5) * 1 = 2552."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "39",
      "78",
      "58",
      "45"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 58% density, total edges = 45."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [8, 11, 42, 23, 16, 20, 50, 23, 3, 40, 11, 7], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "258",
      "264",
      "239",
      "247"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 247."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "104",
      "325",
      "143",
      "117"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 36% density, total edges = 117."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "13",
      "55",
      "18",
      "29"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 33% density, total edges = 18."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 46%, how many edges are present in G?",
    "options": [
      "228",
      "260",
      "212",
      "496"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 46% density, total edges = 228."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][13] starts at base address 2400 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[15][5]?",
    "options": [
      "2610",
      "2550",
      "2646",
      "2606"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (5 * 18 + 15) * 2 = 2610."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][16] starts at base address 1200 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[17][3]?",
    "options": [
      "3528",
      "3384",
      "1608",
      "3400"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (17 * 16 + 3) * 8 = 3400."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][26] starts at base address 2600 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[4][6]?",
    "options": [
      "2704",
      "2700",
      "2648",
      "2720"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (6 * 8 + 4) * 2 = 2704."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 27, 50, 31, 15, 27, 45, 35], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "160",
      "129",
      "146",
      "108"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 129."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][18] starts at base address 2700 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[23][2]?",
    "options": [
      "2884",
      "3016",
      "3140",
      "3024"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (2 * 29 + 23) * 4 = 3024."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 20, 28, 13, 5, 18, 40, 3], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "207",
      "184",
      "167",
      "124"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 167."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][38] starts at base address 2900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[7][8]?",
    "options": [
      "5092",
      "3348",
      "5396",
      "5076"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (7 * 38 + 8) * 8 = 5092."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 3, 19, 38, 29, 6, 44, 30, 12, 17, 1], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "198",
      "254",
      "237",
      "254"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 237."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "25",
      "78",
      "19",
      "38"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 33% density, total edges = 25."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "24",
      "13",
      "8",
      "55"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 24% density, total edges = 13."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "670",
      "647",
      "1081",
      "717"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 62% density, total edges = 670."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "214",
      "237",
      "284",
      "1081"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 22% density, total edges = 237."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 35, 3, 22, 41, 7, 2, 10, 11, 24, 33, 20], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "144",
      "146",
      "110",
      "161"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 144."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 52 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "716",
      "742",
      "1326",
      "794"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 52*(51)/2 = 1326. At 56% density, total edges = 742."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][12] starts at base address 1300 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[11][8]?",
    "options": [
      "1652",
      "1852",
      "1860",
      "1908"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (11 * 12 + 8) * 4 = 1860."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 17, 14, 12, 2, 25], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "64",
      "43",
      "76",
      "81"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 64."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 41%, how many edges are present in G?",
    "options": [
      "49",
      "41",
      "120",
      "65"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 41% density, total edges = 49."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "126",
      "406",
      "83",
      "97"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 24% density, total edges = 97."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 50 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "465",
      "540",
      "490",
      "1225"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 50*(49)/2 = 1225. At 40% density, total edges = 490."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 2, 10, 37, 45, 44, 7, 22, 22, 9, 17, 50], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "207",
      "167",
      "224",
      "229"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 207."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 11, 1, 33, 12, 47], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "98",
      "114",
      "45",
      "81"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 81."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 14, 43, 35, 19, 40, 37, 8], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "92",
      "138",
      "173",
      "155"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 138."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][12] starts at base address 2000 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[17][7]?",
    "options": [
      "2193",
      "2119",
      "2171",
      "2169"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (7 * 22 + 17) * 1 = 2171."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "785",
      "757",
      "841",
      "1540"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 51% density, total edges = 785."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 37, 33, 40, 43, 21, 6, 40, 22], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "233",
      "153",
      "190",
      "207"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 190."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 21 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "86",
      "55",
      "65",
      "210"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 21*(20)/2 = 210. At 31% density, total edges = 65."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 21%, how many edges are present in G?",
    "options": [
      "335",
      "392",
      "307",
      "1596"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 21% density, total edges = 335."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "65",
      "136",
      "48",
      "40"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 36% density, total edges = 48."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][12] starts at base address 1300 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[12][3]?",
    "options": [
      "1618",
      "1594",
      "1590",
      "1372"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (12 * 12 + 3) * 2 = 1594."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][12] starts at base address 1700 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][6]?",
    "options": [
      "2228",
      "2132",
      "1892",
      "2116"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (4 * 12 + 6) * 8 = 2132."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "46",
      "120",
      "62",
      "38"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 39% density, total edges = 46."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "264",
      "219",
      "435",
      "234"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 54% density, total edges = 234."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][27] starts at base address 1000 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[16][7]?",
    "options": [
      "1437",
      "1439",
      "1112",
      "1466"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (16 * 27 + 7) * 1 = 1439."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 45, 7, 14, 20, 26, 20, 3, 10], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "132",
      "169",
      "172",
      "152"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 152."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][11] starts at base address 1200 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][6]?",
    "options": [
      "1456",
      "1496",
      "1440",
      "1296"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (6 * 5 + 2) * 8 = 1456."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 8, 35, 48, 28, 45, 9, 9, 7, 31], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "237",
      "254",
      "189",
      "244"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 237."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][38] starts at base address 1300 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[1][12]?",
    "options": [
      "1610",
      "1614",
      "1640",
      "1324"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (12 * 13 + 1) * 2 = 1614."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "373",
      "393",
      "820",
      "434"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 48% density, total edges = 393."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 24, 25, 27, 22], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "92",
      "49",
      "117",
      "109"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 13, 6, 40, 19, 27, 41, 43], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "79",
      "96",
      "119",
      "59"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 79."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][28] starts at base address 1400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[3][15]?",
    "options": [
      "1497",
      "1445",
      "1527",
      "1499"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (3 * 28 + 15) * 1 = 1499."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 34, 48, 25, 6, 20], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "161",
      "169",
      "107",
      "144"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 144."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "351",
      "334",
      "386",
      "595"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 59% density, total edges = 351."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 50 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "1225",
      "685",
      "760",
      "710"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 50*(49)/2 = 1225. At 58% density, total edges = 710."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "325",
      "107",
      "94",
      "133"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 33% density, total edges = 107."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 70%, how many edges are present in G?",
    "options": [
      "1094",
      "1039",
      "1485",
      "1012"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 70% density, total edges = 1039."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [44, 14, 49, 47, 23], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "201",
      "171",
      "110",
      "154"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 154."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][39] starts at base address 2200 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[6][30]?",
    "options": [
      "2826",
      "2380",
      "2804",
      "2806"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (30 * 20 + 6) * 1 = 2806."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 45, 45, 35, 38], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "196",
      "125",
      "161",
      "178"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 161."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][21] starts at base address 2800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][11]?",
    "options": [
      "2976",
      "2996",
      "2980",
      "2844"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (11 * 8 + 2) * 2 = 2980."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 27, 45, 45, 29, 12, 27, 44], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "72",
      "114",
      "159",
      "131"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 114."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "271",
      "334",
      "292",
      "861"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 34% density, total edges = 292."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][32] starts at base address 2800 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[1][5]?",
    "options": [
      "2874",
      "2870",
      "2810",
      "2938"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (1 * 32 + 5) * 2 = 2874."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 50, 39, 17, 8, 6, 47, 12, 29, 12, 1, 44], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "111",
      "128",
      "128",
      "106"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 111."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 29, 13, 2, 13, 9, 3, 1], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "69",
      "107",
      "90",
      "93"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 90."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][13] starts at base address 2700 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[11][1]?",
    "options": [
      "2732",
      "2757",
      "2711",
      "2734"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (1 * 23 + 11) * 1 = 2734."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 7, 22, 31, 5, 7], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "103",
      "60",
      "134",
      "120"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 103."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][13] starts at base address 1900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[7][2]?",
    "options": [
      "1950",
      "1968",
      "1946",
      "1928"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (2 * 9 + 7) * 2 = 1950."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 17, 35, 41, 21, 26], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "121",
      "103",
      "86",
      "52"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 86."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][33] starts at base address 2300 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[20][21]?",
    "options": [
      "4724",
      "3980",
      "4844",
      "4732"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (21 * 28 + 20) * 4 = 4732."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "378",
      "288",
      "246",
      "260"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 69% density, total edges = 260."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][38] starts at base address 1400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[4][17]?",
    "options": [
      "1468",
      "1567",
      "1607",
      "1569"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (4 * 38 + 17) * 1 = 1569."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][30] starts at base address 1300 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[8][16]?",
    "options": [
      "2324",
      "3332",
      "3348",
      "3588"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (8 * 30 + 16) * 8 = 3348."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 20, 33, 46, 39, 43, 10, 33, 19, 18, 16], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "155",
      "99",
      "109",
      "126"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 109."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 9, 3, 33, 12, 22, 16, 30, 32], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "125",
      "161",
      "178",
      "191"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 161."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 3, 29, 42, 15, 30], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "32",
      "89",
      "101",
      "72"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 72."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 47, 2, 36, 35, 36, 14, 48], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "85",
      "148",
      "129",
      "112"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 112."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][21] starts at base address 2700 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[2][4]?",
    "options": [
      "2834",
      "2788",
      "2792",
      "2716"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (2 * 21 + 4) * 2 = 2792."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][26] starts at base address 2500 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[6][12]?",
    "options": [
      "2644",
      "2836",
      "2888",
      "2832"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (6 * 26 + 12) * 2 = 2836."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][38] starts at base address 2500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[18][6]?",
    "options": [
      "5412",
      "5260",
      "2932",
      "5252"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (18 * 38 + 6) * 4 = 5260."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 34, 2, 8, 36, 36, 20, 46, 21, 38, 47, 17], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "36",
      "39",
      "41",
      "56"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 39."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "171",
      "143",
      "129",
      "378"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 38% density, total edges = 143."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 20, 18, 50, 17, 4, 27], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "105",
      "123",
      "123",
      "106"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 106."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 10, 48, 26, 16, 5, 26], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "129",
      "120",
      "103",
      "84"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 103."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][30] starts at base address 2300 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[6][23]?",
    "options": [
      "2852",
      "3112",
      "3232",
      "3104"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (6 * 30 + 23) * 4 = 3112."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][11] starts at base address 1300 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[5][3]?",
    "options": [
      "1628",
      "1420",
      "1724",
      "1612"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (3 * 12 + 5) * 8 = 1628."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 6, 23, 4, 45, 47, 33, 44, 28, 2, 36], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "74",
      "80",
      "29",
      "57"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 57."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][21] starts at base address 2200 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[11][16]?",
    "options": [
      "4160",
      "4344",
      "4176",
      "3608"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (11 * 21 + 16) * 8 = 4176."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 49 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "682",
      "658",
      "731",
      "1176"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 49*(48)/2 = 1176. At 58% density, total edges = 682."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 24, 33, 2, 13, 27, 50, 46, 6, 41, 46, 30], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "61",
      "59",
      "78",
      "63"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 61."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][36] starts at base address 2900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[10][9]?",
    "options": [
      "3620",
      "5836",
      "5852",
      "6140"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (10 * 36 + 9) * 8 = 5852."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][21] starts at base address 1100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[3][16]?",
    "options": [
      "1200",
      "1179",
      "1177",
      "1148"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (3 * 21 + 16) * 1 = 1179."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "378",
      "258",
      "216",
      "230"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 61% density, total edges = 230."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "67",
      "153",
      "58",
      "85"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 44% density, total edges = 67."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 34, 34, 42, 3, 4, 45, 50, 31, 32, 24], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "117",
      "118",
      "135",
      "122"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "397",
      "364",
      "348",
      "528"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 69% density, total edges = 364."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 19, 42, 9, 12, 35, 20, 34, 26], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "70",
      "118",
      "109",
      "126"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 109."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][36] starts at base address 1800 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[6][19]?",
    "options": [
      "3976",
      "2712",
      "3960",
      "4088"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (19 * 14 + 6) * 8 = 3976."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][12] starts at base address 2300 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[5][1]?",
    "options": [
      "2354",
      "2332",
      "2310",
      "2328"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (1 * 11 + 5) * 2 = 2332."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 45, 24, 26, 7, 24, 18, 6, 11, 3, 37], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "220",
      "164",
      "203",
      "206"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 203."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 8, 2, 44, 16, 8, 33, 33, 15, 43, 37], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "111",
      "164",
      "180",
      "147"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 147."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][20] starts at base address 2400 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[7][12]?",
    "options": [
      "2568",
      "2770",
      "2774",
      "2804"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (12 * 15 + 7) * 2 = 2774."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "1275",
      "816",
      "740",
      "765"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 60% density, total edges = 765."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 14, 35, 34, 50, 25, 1, 6, 27, 38], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "244",
      "192",
      "227",
      "254"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 227."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "933",
      "1540",
      "877",
      "849"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 57% density, total edges = 877."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 29, 31, 13, 6], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "92",
      "109",
      "73",
      "105"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 38, 48, 32, 35, 28, 24, 46, 40, 38, 13], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "395",
      "329",
      "378",
      "416"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 378."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 28, 3, 28, 13, 20, 9], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "97",
      "84",
      "101",
      "72"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 84."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][33] starts at base address 1600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[5][19]?",
    "options": [
      "3336",
      "2360",
      "3056",
      "3072"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (5 * 33 + 19) * 8 = 3072."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 48, 47, 50, 14, 20, 39, 14, 31, 3, 29], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "242",
      "218",
      "281",
      "259"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 242."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][24] starts at base address 2900 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[2][21]?",
    "options": [
      "2993",
      "2967",
      "2942",
      "2969"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (2 * 24 + 21) * 1 = 2969."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][17] starts at base address 1500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[11][8]?",
    "options": [
      "2348",
      "2272",
      "1852",
      "2280"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (11 * 17 + 8) * 4 = 2280."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][23] starts at base address 1900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[11][14]?",
    "options": [
      "3132",
      "4220",
      "4036",
      "4020"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (11 * 23 + 14) * 8 = 4036."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [22, 44, 34, 5, 22, 34, 37], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "117",
      "134",
      "78",
      "100"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 100."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 11, 33, 38, 39, 5, 27, 13, 31, 15, 7, 7], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "197",
      "207",
      "180",
      "153"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 180."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "412",
      "346",
      "368",
      "946"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 39% density, total edges = 368."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [14, 42, 16, 47, 38, 36, 33, 36, 42, 41, 25, 5], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "212",
      "259",
      "243",
      "226"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 226."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 37, 18, 26, 10, 38, 41, 40, 26, 15], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "248",
      "265",
      "210",
      "288"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 248."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "382",
      "331",
      "306",
      "1275"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 26% density, total edges = 331."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "464",
      "548",
      "492",
      "1540"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 32% density, total edges = 492."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][23] starts at base address 1100 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[3][20]?",
    "options": [
      "1278",
      "1274",
      "1324",
      "1220"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (3 * 23 + 20) * 2 = 1278."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][32] starts at base address 1100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[4][25]?",
    "options": [
      "1279",
      "1277",
      "1200",
      "1286"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (25 * 7 + 4) * 1 = 1279."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 48, 19, 29, 6], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "67",
      "79",
      "98",
      "96"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 79."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [32, 42, 8, 24, 14, 49], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "90",
      "99",
      "82",
      "50"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 82."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 34, 28, 19, 1, 29, 40], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "117",
      "128",
      "62",
      "100"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 100."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 34, 6, 13, 23], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "106",
      "40",
      "89",
      "95"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 89."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 9, 3, 18, 17, 24], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "12",
      "61",
      "75",
      "58"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 58."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "1431",
      "883",
      "802",
      "829"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 58% density, total edges = 829."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][19] starts at base address 1300 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[13][2]?",
    "options": [
      "1544",
      "1480",
      "1472",
      "1404"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (2 * 16 + 13) * 4 = 1480."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][22] starts at base address 1400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[14][9]?",
    "options": [
      "1739",
      "1717",
      "1715",
      "1526"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (14 * 22 + 9) * 1 = 1717."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][15] starts at base address 1500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][11]?",
    "options": [
      "1932",
      "2068",
      "1764",
      "1948"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (3 * 15 + 11) * 8 = 1948."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][15] starts at base address 2100 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[11][5]?",
    "options": [
      "3460",
      "3444",
      "3580",
      "2540"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (11 * 15 + 5) * 8 = 3460."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 35, 2, 14, 35], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "37",
      "68",
      "85",
      "70"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 68."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][13] starts at base address 1400 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[8][11]?",
    "options": [
      "2104",
      "2608",
      "2712",
      "2592"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (11 * 13 + 8) * 8 = 2608."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 44, 13, 23, 9], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "99",
      "116",
      "122",
      "80"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 99."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][27] starts at base address 1300 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][11]?",
    "options": [
      "1388",
      "1668",
      "1552",
      "1560"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (2 * 27 + 11) * 4 = 1560."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][21] starts at base address 1100 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][4]?",
    "options": [
      "1388",
      "1456",
      "1380",
      "1164"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (4 * 17 + 4) * 4 = 1388."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 47%, how many edges are present in G?",
    "options": [
      "1431",
      "645",
      "726",
      "672"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 47% density, total edges = 672."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][22] starts at base address 2900 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[2][12]?",
    "options": [
      "2996",
      "3272",
      "3244",
      "3236"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (12 * 7 + 2) * 4 = 3244."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 14, 4, 49, 15, 27], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "109",
      "111",
      "94",
      "82"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 94."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "958",
      "1431",
      "931",
      "1012"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 67% density, total edges = 958."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 13, 18, 34, 37, 39, 24, 5], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "31",
      "71",
      "89",
      "88"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 71."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 46%, how many edges are present in G?",
    "options": [
      "30",
      "45",
      "20",
      "15"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 46% density, total edges = 20."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 64%, how many edges are present in G?",
    "options": [
      "530",
      "551",
      "861",
      "593"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 64% density, total edges = 551."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 16, 50, 48, 37, 36, 15, 42, 2], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "284",
      "244",
      "301",
      "326"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 284."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 12, 39, 12, 12, 41, 29, 18, 36], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "116",
      "158",
      "117",
      "134"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 117."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 36 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "170",
      "630",
      "152",
      "206"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 36*(35)/2 = 630. At 27% density, total edges = 170."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "64",
      "171",
      "92",
      "73"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 43% density, total edges = 73."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 3, 23, 5, 32, 14, 8, 38, 10, 9, 8, 30], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "152",
      "169",
      "142",
      "161"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 152."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "487",
      "403",
      "431",
      "1540"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 28% density, total edges = 431."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][18] starts at base address 2600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[5][16]?",
    "options": [
      "3096",
      "3024",
      "3016",
      "2920"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (5 * 18 + 16) * 4 = 3024."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 52%, how many edges are present in G?",
    "options": [
      "772",
      "745",
      "827",
      "1485"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 52% density, total edges = 772."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 10, 36, 34, 44, 32, 1], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "146",
      "80",
      "129",
      "163"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 129."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 38, 49, 17, 39, 4, 47], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "147",
      "168",
      "164",
      "181"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 164."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "310",
      "279",
      "264",
      "465"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 60% density, total edges = 279."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "841",
      "787",
      "760",
      "1431"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 55% density, total edges = 787."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][21] starts at base address 2000 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][6]?",
    "options": [
      "2704",
      "2888",
      "2192",
      "2720"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (4 * 21 + 6) * 8 = 2720."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][11] starts at base address 1600 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][4]?",
    "options": [
      "1664",
      "1776",
      "1760",
      "1816"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (4 * 5 + 2) * 8 = 1776."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [44, 12, 48, 4, 21, 33, 40], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "108",
      "112",
      "64",
      "125"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 108."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "314",
      "861",
      "377",
      "335"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 39% density, total edges = 335."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "154",
      "181",
      "351",
      "141"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 44% density, total edges = 154."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][12] starts at base address 2200 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[5][4]?",
    "options": [
      "2220",
      "2262",
      "2264",
      "2276"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (5 * 12 + 4) * 1 = 2264."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 30, 27, 41, 23, 30], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "98",
      "138",
      "179",
      "155"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 138."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "382",
      "406",
      "454",
      "1128"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 36% density, total edges = 406."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][26] starts at base address 1000 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[3][12]?",
    "options": [
      "1352",
      "1464",
      "1144",
      "1360"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (3 * 26 + 12) * 4 = 1360."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [47, 16, 36, 38, 42, 28, 49, 32, 9, 39, 41], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "221",
      "179",
      "196",
      "132"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 179."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 50, 48, 20, 5, 23, 3, 44], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "170",
      "153",
      "158",
      "123"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 153."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][14] starts at base address 1200 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[5][6]?",
    "options": [
      "1484",
      "1528",
      "1320",
      "1476"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (6 * 11 + 5) * 4 = 1484."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "537",
      "1485",
      "619",
      "564"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 38% density, total edges = 564."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 8, 43, 16, 35, 37], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "82",
      "125",
      "99",
      "51"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 82."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][38] starts at base address 1500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[7][27]?",
    "options": [
      "2672",
      "2256",
      "2824",
      "2664"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (7 * 38 + 27) * 4 = 2672."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 29, 26, 43, 3, 26, 48, 40, 9], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "120",
      "55",
      "94",
      "111"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 94."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 49, 13, 7, 49, 42, 10, 11, 26], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "184",
      "152",
      "135",
      "118"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 135."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 48, 25, 50, 13, 11, 28, 17], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "143",
      "136",
      "156",
      "160"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 143."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][36] starts at base address 1000 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[14][17]?",
    "options": [
      "3084",
      "3228",
      "3076",
      "1952"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (14 * 36 + 17) * 4 = 3084."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "172",
      "496",
      "220",
      "188"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 38% density, total edges = 188."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][10] starts at base address 1900 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[9][8]?",
    "options": [
      "1995",
      "2008",
      "1997",
      "1972"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (8 * 11 + 9) * 1 = 1997."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][21] starts at base address 2400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[9][16]?",
    "options": [
      "2605",
      "2544",
      "2626",
      "2603"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (9 * 21 + 16) * 1 = 2605."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][31] starts at base address 1400 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[23][3]?",
    "options": [
      "1604",
      "1538",
      "1662",
      "1608"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (3 * 27 + 23) * 2 = 1608."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "55",
      "9",
      "25",
      "14"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 27% density, total edges = 14."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 42, 44, 5, 27], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "91",
      "151",
      "134",
      "139"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 134."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 13, 24, 27, 1], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "100",
      "64",
      "110",
      "83"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 83."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "97",
      "136",
      "80",
      "72"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 59% density, total edges = 80."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 29, 27, 46, 7, 45], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "56",
      "86",
      "103",
      "113"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 86."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 1, 50, 2, 24, 14, 45, 38, 18, 35, 27], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "170",
      "215",
      "136",
      "187"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 170."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 31, 20, 10, 47, 31, 35, 45], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "207",
      "176",
      "139",
      "193"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 176."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 53%, how many edges are present in G?",
    "options": [
      "228",
      "200",
      "378",
      "186"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 53% density, total edges = 200."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][18] starts at base address 1000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[3][10]?",
    "options": [
      "1984",
      "1968",
      "2080",
      "1240"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (10 * 12 + 3) * 8 = 1984."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "55",
      "35",
      "19",
      "24"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 44% density, total edges = 24."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "107",
      "126",
      "98",
      "171"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 63% density, total edges = 107."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 33, 42, 29, 26, 39, 12, 14, 23, 38], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "140",
      "115",
      "98",
      "75"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 98."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 19, 17, 30, 10, 31, 13, 45], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "155",
      "172",
      "120",
      "168"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 155."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 8, 46, 37, 5, 11, 2, 31, 48], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "113",
      "133",
      "96",
      "91"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 96."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 50 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "417",
      "342",
      "367",
      "1225"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 50*(49)/2 = 1225. At 30% density, total edges = 367."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][16] starts at base address 2100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[12][14]?",
    "options": [
      "2490",
      "2268",
      "2517",
      "2488"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2100 + (14 * 27 + 12) * 1 = 2490."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 41, 30, 30, 21, 36, 50, 39, 6, 43, 27, 24], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "122",
      "71",
      "92",
      "109"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 46%, how many edges are present in G?",
    "options": [
      "153",
      "88",
      "61",
      "70"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 46% density, total edges = 70."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "7",
      "12",
      "23",
      "55"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 23% density, total edges = 12."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][18] starts at base address 2000 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[11][11]?",
    "options": [
      "2242",
      "2454",
      "2418",
      "2414"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (11 * 18 + 11) * 2 = 2418."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][37] starts at base address 2400 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[4][5]?",
    "options": [
      "2440",
      "2706",
      "2702",
      "2780"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (4 * 37 + 5) * 2 = 2706."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "352",
      "331",
      "395",
      "903"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 39% density, total edges = 352."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][30] starts at base address 2800 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[1][11]?",
    "options": [
      "2811",
      "2871",
      "2839",
      "2841"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (1 * 30 + 11) * 1 = 2841."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "1540",
      "939",
      "995",
      "911"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 61% density, total edges = 939."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "820",
      "541",
      "500",
      "480"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 61% density, total edges = 500."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 8, 5, 17, 31, 43, 24, 48, 21, 9, 10], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "97",
      "61",
      "80",
      "111"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 80."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 31, 49, 14, 30, 40, 32, 50, 13, 7, 29, 20], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "132",
      "94",
      "118",
      "135"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][11] starts at base address 2600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[15][2]?",
    "options": [
      "3312",
      "3268",
      "2720",
      "3260"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (15 * 11 + 2) * 4 = 3268."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 24, 42, 15, 6, 9, 29, 20, 44, 10, 32, 39], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "135",
      "66",
      "110",
      "93"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 93."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 15 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "72",
      "87",
      "65",
      "105"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 15*(14)/2 = 105. At 69% density, total edges = 72."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 29, 40, 50, 27, 49, 25, 18, 12, 35, 23], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "298",
      "250",
      "303",
      "286"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 286."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][36] starts at base address 2400 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][22]?",
    "options": [
      "4688",
      "4704",
      "2752",
      "4808"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (22 * 13 + 2) * 8 = 4704."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 36 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "630",
      "321",
      "357",
      "303"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 36*(35)/2 = 630. At 51% density, total edges = 321."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "465",
      "319",
      "288",
      "273"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 62% density, total edges = 288."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 36, 25, 45, 8, 46, 14, 15, 18, 39, 15, 3], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "207",
      "174",
      "204",
      "190"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 190."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 9, 41, 5, 26, 36, 32, 29, 30, 23, 34, 38], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "138",
      "121",
      "81",
      "147"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 121."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 10, 28, 11, 48], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "99",
      "88",
      "105",
      "49"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 88."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][14] starts at base address 2100 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[18][1]?",
    "options": [
      "2404",
      "2244",
      "2388",
      "2564"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2100 + (1 * 20 + 18) * 8 = 2404."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "903",
      "404",
      "361",
      "340"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 40% density, total edges = 361."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 33, 18, 27, 35, 12, 20, 17], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "80",
      "81",
      "63",
      "51"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 63."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][17] starts at base address 2200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[1][7]?",
    "options": [
      "2272",
      "2268",
      "2282",
      "2214"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (7 * 5 + 1) * 2 = 2272."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 27, 17, 6, 40, 40, 46, 7, 35, 37, 21, 45], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "130",
      "142",
      "182",
      "159"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 142."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a AVL Tree?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, performing a 'Deletion' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 34 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "280",
      "229",
      "246",
      "561"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 34*(33)/2 = 561. At 44% density, total edges = 246."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][13] starts at base address 1500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][6]?",
    "options": [
      "1860",
      "1596",
      "1740",
      "1756"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (2 * 13 + 6) * 8 = 1756."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 41, 37, 36, 39, 12, 9, 41, 46], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "208",
      "200",
      "191",
      "174"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 191."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 32, 19, 22, 7, 48, 36, 43, 45, 11, 2, 3], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "98",
      "105",
      "80",
      "115"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 98."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][16] starts at base address 1100 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[3][13]?",
    "options": [
      "1284",
      "1302",
      "1178",
      "1288"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (13 * 7 + 3) * 2 = 1288."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 21 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "84",
      "105",
      "210",
      "74"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 21*(20)/2 = 210. At 40% density, total edges = 84."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "855",
      "1596",
      "798",
      "770"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 50% density, total edges = 798."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "581",
      "603",
      "648",
      "990"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 61% density, total edges = 603."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 23 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "174",
      "253",
      "163",
      "197"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 23*(22)/2 = 253. At 69% density, total edges = 174."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][21] starts at base address 2600 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[5][19]?",
    "options": [
      "2695",
      "2724",
      "2745",
      "2722"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (5 * 21 + 19) * 1 = 2724."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Queue?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 11, 19, 12, 2, 44, 39, 44, 9, 9, 17], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "44",
      "56",
      "73",
      "58"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 56."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][19] starts at base address 2900 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[1][17]?",
    "options": [
      "2968",
      "3120",
      "3036",
      "3044"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (1 * 19 + 17) * 4 = 3044."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 52%, how many edges are present in G?",
    "options": [
      "53",
      "78",
      "34",
      "40"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 52% density, total edges = 40."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][14] starts at base address 1600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[14][5]?",
    "options": [
      "3320",
      "2160",
      "3192",
      "3208"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (14 * 14 + 5) * 8 = 3208."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][31] starts at base address 1100 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[9][16]?",
    "options": [
      "2272",
      "2280",
      "2404",
      "1676"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (9 * 31 + 16) * 4 = 2280."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [47, 35, 1, 41, 25, 47, 40, 41], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "166",
      "174",
      "102",
      "149"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 149."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 27, 27, 30, 26], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "84",
      "135",
      "118",
      "148"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 37, 28, 40, 7, 10], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "106",
      "146",
      "105",
      "123"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 106."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 10, 50, 50, 17, 48, 27, 10, 36, 38, 13], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "131",
      "81",
      "60",
      "98"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 81."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "65",
      "82",
      "136",
      "57"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 48% density, total edges = 65."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][16] starts at base address 2500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[5][3]?",
    "options": [
      "2824",
      "2832",
      "2560",
      "2896"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (5 * 16 + 3) * 4 = 2832."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 21%, how many edges are present in G?",
    "options": [
      "284",
      "311",
      "366",
      "1485"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 21% density, total edges = 311."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][36] starts at base address 2000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[12][14]?",
    "options": [
      "5096",
      "4880",
      "3344",
      "4896"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (14 * 25 + 12) * 8 = 4896."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "386",
      "1485",
      "441",
      "359"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 26% density, total edges = 386."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 33, 43, 10, 32, 29, 8, 2, 8, 27], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "123",
      "130",
      "86",
      "113"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 113."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][35] starts at base address 1800 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][5]?",
    "options": [
      "2100",
      "2240",
      "2092",
      "1840"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (2 * 35 + 5) * 4 = 2100."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 44, 37, 44, 4], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "125",
      "153",
      "170",
      "197"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 153."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][15] starts at base address 2200 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][7]?",
    "options": [
      "2348",
      "2408",
      "2256",
      "2340"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (2 * 15 + 7) * 4 = 2348."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "743",
      "801",
      "714",
      "1653"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 45% density, total edges = 743."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [47, 25, 50, 42, 9, 4, 42, 2], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "122",
      "75",
      "172",
      "139"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 122."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][24] starts at base address 1200 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[1][19]?",
    "options": [
      "1238",
      "1282",
      "1334",
      "1286"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (1 * 24 + 19) * 2 = 1286."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "9",
      "25",
      "55",
      "14"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 26% density, total edges = 14."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 25, 1, 11, 45, 45, 3, 7, 11, 25, 33], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "95",
      "82",
      "112",
      "140"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 95."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][12] starts at base address 2100 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[14][9]?",
    "options": [
      "2808",
      "2856",
      "2604",
      "2800"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (14 * 12 + 9) * 4 = 2808."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "300",
      "105",
      "93",
      "130"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 35% density, total edges = 105."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][18] starts at base address 1200 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[5][1]?",
    "options": [
      "1440",
      "1240",
      "1424",
      "1640"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (1 * 25 + 5) * 8 = 1440."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][26] starts at base address 1900 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[20][23]?",
    "options": [
      "2820",
      "3038",
      "2982",
      "2986"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (20 * 26 + 23) * 2 = 2986."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][15] starts at base address 2100 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[11][3]?",
    "options": [
      "3444",
      "3564",
      "2364",
      "3428"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (11 * 15 + 3) * 8 = 3444."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][31] starts at base address 1500 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[9][8]?",
    "options": [
      "1787",
      "1572",
      "1818",
      "1785"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (9 * 31 + 8) * 1 = 1787."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 49, 19, 9, 3, 48], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "92",
      "73",
      "90",
      "68"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 73."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "406",
      "150",
      "179",
      "136"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 37% density, total edges = 150."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 15, 14, 25, 1, 31, 7, 45, 18, 14, 29], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "110",
      "124",
      "86",
      "93"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 93."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][34] starts at base address 2700 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[10][4]?",
    "options": [
      "2860",
      "4076",
      "4068",
      "4212"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (10 * 34 + 4) * 4 = 4076."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "1275",
      "624",
      "548",
      "573"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 45% density, total edges = 573."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][21] starts at base address 2100 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[1][5]?",
    "options": [
      "2204",
      "2196",
      "2288",
      "2120"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (1 * 21 + 5) * 4 = 2204."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "535",
      "484",
      "459",
      "1275"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 38% density, total edges = 484."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "414",
      "344",
      "1081",
      "367"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 34% density, total edges = 367."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "329",
      "383",
      "1431",
      "302"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 23% density, total edges = 329."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "417",
      "446",
      "1653",
      "504"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 27% density, total edges = 446."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][39] starts at base address 1200 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[8][34]?",
    "options": [
      "2056",
      "2083",
      "1472",
      "2058"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (34 * 25 + 8) * 1 = 2058."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][20] starts at base address 1100 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[9][15]?",
    "options": [
      "1630",
      "1594",
      "1598",
      "1370"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (15 * 16 + 9) * 2 = 1598."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 39, 48, 17, 15, 23, 18, 36], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "191",
      "173",
      "160",
      "190"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 173."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 44, 22, 41, 4, 35], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "66",
      "98",
      "93",
      "76"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 76."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [32, 21, 44, 50, 15, 27, 16, 8, 41, 6, 34, 5], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "222",
      "254",
      "271",
      "295"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 254."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "276",
      "340",
      "903",
      "297"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 33% density, total edges = 297."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "35",
      "25",
      "20",
      "45"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 57% density, total edges = 25."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][26] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[3][20]?",
    "options": [
      "2720",
      "2796",
      "2848",
      "2792"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (3 * 26 + 20) * 2 = 2796."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][12] starts at base address 2800 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[3][4]?",
    "options": [
      "3008",
      "2952",
      "2960",
      "2848"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (3 * 12 + 4) * 4 = 2960."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 38, 6, 34, 1, 16, 22, 35, 15, 34, 45], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "189",
      "191",
      "174",
      "167"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 174."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][33] starts at base address 2600 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[22][22]?",
    "options": [
      "7512",
      "6472",
      "7528",
      "7744"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (22 * 27 + 22) * 8 = 7528."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][33] starts at base address 2200 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[17][13]?",
    "options": [
      "4920",
      "4936",
      "3968",
      "5136"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (13 * 25 + 17) * 8 = 4936."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][16] starts at base address 1900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[8][11]?",
    "options": [
      "2468",
      "2076",
      "2422",
      "2418"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (11 * 23 + 8) * 2 = 2422."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "569",
      "615",
      "1035",
      "546"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 55% density, total edges = 569."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "327",
      "496",
      "359",
      "311"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 66% density, total edges = 327."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 26, 18, 29, 30, 9, 4], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "112",
      "133",
      "141",
      "124"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 124."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [9, 42, 6, 24, 12, 27], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "93",
      "110",
      "105",
      "84"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 93."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 26, 3, 47, 5, 22, 19, 37], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "151",
      "168",
      "122",
      "170"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 151."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 37, 45, 16, 36, 33, 38, 50], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "150",
      "149",
      "133",
      "98"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 133."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][15] starts at base address 1300 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[16][9]?",
    "options": [
      "2288",
      "2296",
      "2356",
      "1876"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (16 * 15 + 9) * 4 = 2296."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][16] starts at base address 2700 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[5][8]?",
    "options": [
      "2939",
      "2913",
      "2911",
      "2740"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (8 * 26 + 5) * 1 = 2913."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][24] starts at base address 2300 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][19]?",
    "options": [
      "3900",
      "3892",
      "3984",
      "2376"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (19 * 21 + 1) * 4 = 3900."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][33] starts at base address 2600 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[24][21]?",
    "options": [
      "3240",
      "3104",
      "3210",
      "3212"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (21 * 28 + 24) * 1 = 3212."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "231",
      "300",
      "206",
      "194"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 69% density, total edges = 206."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 44, 37, 24, 25, 48, 9, 41, 46], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "307",
      "266",
      "228",
      "283"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 266."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][33] starts at base address 2700 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[8][28]?",
    "options": [
      "3596",
      "3860",
      "4000",
      "3868"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (8 * 33 + 28) * 4 = 3868."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [14, 46, 5, 48, 4, 23, 21], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "126",
      "157",
      "140",
      "163"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 140."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][24] starts at base address 1600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][5]?",
    "options": [
      "1760",
      "2392",
      "2408",
      "2600"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (4 * 24 + 5) * 8 = 2408."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [32, 19, 37, 13, 48], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "105",
      "88",
      "125",
      "56"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 88."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 33, 24, 44, 34, 11, 41, 29, 39, 29, 6], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "101",
      "105",
      "149",
      "122"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 105."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][29] starts at base address 1300 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][10]?",
    "options": [
      "1460",
      "2328",
      "2228",
      "2236"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (10 * 23 + 4) * 4 = 2236."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 39, 31, 1, 40, 35, 44], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "164",
      "124",
      "111",
      "141"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 124."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 11, 11, 17, 30, 30, 44, 47, 12, 21], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "190",
      "240",
      "223",
      "270"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 223."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][26] starts at base address 2600 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[10][21]?",
    "options": [
      "7784",
      "4280",
      "7536",
      "7552"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (21 * 29 + 10) * 8 = 7552."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 34, 16, 17, 15, 20, 11, 13, 34, 7], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "135",
      "118",
      "102",
      "138"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 31, 17, 32, 26, 17, 17, 15, 9, 43, 22], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "91",
      "48",
      "91",
      "74"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 74."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][11] starts at base address 2500 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[11][9]?",
    "options": [
      "4084",
      "4100",
      "4268",
      "3292"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (9 * 21 + 11) * 8 = 4100."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][20] starts at base address 2500 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[8][13]?",
    "options": [
      "3428",
      "3364",
      "2916",
      "3356"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (13 * 16 + 8) * 4 = 3364."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][26] starts at base address 2000 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[15][15]?",
    "options": [
      "5448",
      "3800",
      "5240",
      "5224"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (15 * 26 + 15) * 8 = 5240."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 37, 32, 16, 15, 24, 39, 7, 5, 30, 4], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "150",
      "149",
      "85",
      "133"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 133."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "1485",
      "801",
      "774",
      "856"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 54% density, total edges = 801."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "1026",
      "942",
      "1540",
      "970"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 63% density, total edges = 970."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "496",
      "152",
      "200",
      "168"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 34% density, total edges = 168."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 30, 9, 1, 27, 9, 21, 43, 40], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "203",
      "140",
      "160",
      "177"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 160."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "45",
      "32",
      "26",
      "78"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 42% density, total edges = 32."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 18, 7, 21, 30, 50, 6], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "173",
      "126",
      "206",
      "156"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 156."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "600",
      "528",
      "552",
      "1128"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 49% density, total edges = 552."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "66",
      "29",
      "23",
      "41"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 45% density, total edges = 29."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "471",
      "446",
      "522",
      "1275"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 37% density, total edges = 471."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 22, 6, 12, 6, 4, 8, 8, 25, 32], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "75",
      "67",
      "84",
      "66"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 67."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][15] starts at base address 2400 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[8][2]?",
    "options": [
      "2736",
      "2528",
      "2720",
      "2872"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (2 * 17 + 8) * 8 = 2736."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "95",
      "136",
      "70",
      "78"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 58% density, total edges = 78."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "77",
      "85",
      "102",
      "136"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 63% density, total edges = 85."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 45, 41, 10, 15, 9, 19, 35, 3, 32], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "203",
      "174",
      "186",
      "221"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 186."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 19, 43, 21, 8, 8], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "127",
      "110",
      "131",
      "83"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 110."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][33] starts at base address 2700 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[25][24]?",
    "options": [
      "5500",
      "5384",
      "5392",
      "5100"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (24 * 27 + 25) * 4 = 5392."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 34 vertices. If the graph connectivity density is 70%, how many edges are present in G?",
    "options": [
      "561",
      "375",
      "426",
      "392"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 34*(33)/2 = 561. At 70% density, total edges = 392."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "45",
      "25",
      "30",
      "40"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 67% density, total edges = 30."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "302",
      "279",
      "1081",
      "349"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 28% density, total edges = 302."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 24, 31, 46, 43, 28, 50, 49, 32, 17, 23, 44], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "352",
      "320",
      "335",
      "352"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 335."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 47, 24, 33, 30, 27, 16, 21, 34, 8, 14, 34], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "249",
      "198",
      "253",
      "232"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 232."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "698",
      "631",
      "653",
      "990"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 66% density, total edges = 653."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 44, 12, 6, 17, 40, 33, 5, 39, 28], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "152",
      "192",
      "119",
      "169"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 152."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "780",
      "182",
      "202",
      "242"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 26% density, total edges = 202."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 70%, how many edges are present in G?",
    "options": [
      "675",
      "903",
      "611",
      "632"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 70% density, total edges = 632."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 26, 12, 43, 48, 33, 42], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "130",
      "87",
      "81",
      "104"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 87."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][22] starts at base address 2900 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[20][18]?",
    "options": [
      "3812",
      "3860",
      "3816",
      "3620"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (20 * 22 + 18) * 2 = 3816."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [44, 5, 49, 1, 18, 26, 27, 9, 15], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "197",
      "126",
      "187",
      "170"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 170."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][22] starts at base address 1700 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[5][10]?",
    "options": [
      "1940",
      "1936",
      "1800",
      "1984"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (5 * 22 + 10) * 2 = 1940."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 6, 26, 8, 50, 47, 43, 47, 20], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "274",
      "227",
      "304",
      "257"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 257."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 15, 26, 31, 21, 50, 18, 39, 29, 16, 20], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "283",
      "266",
      "245",
      "282"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 266."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][36] starts at base address 2000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[6][17]?",
    "options": [
      "2560",
      "2568",
      "2600",
      "2408"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (17 * 8 + 6) * 4 = 2568."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][29] starts at base address 2800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[1][4]?",
    "options": [
      "3002",
      "2998",
      "2808",
      "3052"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (4 * 25 + 1) * 2 = 3002."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][24] starts at base address 2900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][10]?",
    "options": [
      "3540",
      "3140",
      "3748",
      "3556"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (3 * 24 + 10) * 8 = 3556."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "445",
      "990",
      "490",
      "423"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 45% density, total edges = 445."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "53",
      "36",
      "28",
      "136"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 27% density, total edges = 36."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [11, 3, 2, 25, 29, 37, 2, 16, 38, 41], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "5",
      "33",
      "16",
      "18"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 16."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "537",
      "820",
      "598",
      "557"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 68% density, total edges = 557."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "223",
      "289",
      "245",
      "946"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 26% density, total edges = 245."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][26] starts at base address 2100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[12][9]?",
    "options": [
      "2208",
      "2447",
      "2421",
      "2419"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (12 * 26 + 9) * 1 = 2421."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][26] starts at base address 2800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[3][4]?",
    "options": [
      "2870",
      "2824",
      "2886",
      "2866"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (4 * 8 + 3) * 2 = 2870."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 49 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "705",
      "729",
      "778",
      "1176"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 49*(48)/2 = 1176. At 62% density, total edges = 729."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][32] starts at base address 1900 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[7][5]?",
    "options": [
      "1970",
      "1972",
      "1985",
      "1935"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (5 * 13 + 7) * 1 = 1972."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][35] starts at base address 2400 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][23]?",
    "options": [
      "3144",
      "2768",
      "3424",
      "3128"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (2 * 35 + 23) * 8 = 3144."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "103",
      "125",
      "231",
      "92"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 45% density, total edges = 103."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 20%, how many edges are present in G?",
    "options": [
      "136",
      "780",
      "156",
      "196"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 20% density, total edges = 156."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "165",
      "204",
      "178",
      "325"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 55% density, total edges = 178."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][31] starts at base address 2800 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[20][2]?",
    "options": [
      "7776",
      "8024",
      "7760",
      "3120"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (20 * 31 + 2) * 8 = 7776."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 21%, how many edges are present in G?",
    "options": [
      "16",
      "10",
      "78",
      "29"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 21% density, total edges = 16."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [25, 21, 35, 21, 24, 17, 37, 25, 20, 12], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "143",
      "126",
      "101",
      "150"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 126."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 41%, how many edges are present in G?",
    "options": [
      "654",
      "711",
      "1596",
      "626"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 41% density, total edges = 654."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 12, 27, 9, 34, 9, 37, 50], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "123",
      "140",
      "106",
      "82"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 106."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "442",
      "1128",
      "394",
      "370"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 35% density, total edges = 394."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][13] starts at base address 2100 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[10][10]?",
    "options": [
      "2852",
      "2860",
      "2932",
      "2500"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2100 + (10 * 18 + 10) * 4 = 2860."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 9, 1, 49, 8, 28, 8, 9, 6, 11, 49], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "178",
      "195",
      "189",
      "129"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 178."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 13, 50, 24, 17, 26, 24, 12], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "174",
      "154",
      "181",
      "157"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 157."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "1035",
      "227",
      "204",
      "273"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 22% density, total edges = 227."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "638",
      "693",
      "1485",
      "611"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 43% density, total edges = 638."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "590",
      "820",
      "529",
      "549"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 67% density, total edges = 549."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 45, 8, 47, 20, 27], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "100",
      "171",
      "124",
      "141"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 124."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][18] starts at base address 1700 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][6]?",
    "options": [
      "1796",
      "2036",
      "2020",
      "2180"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (2 * 18 + 6) * 8 = 2036."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 59 vertices. If the graph connectivity density is 53%, how many edges are present in G?",
    "options": [
      "965",
      "877",
      "906",
      "1711"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 59*(58)/2 = 1711. At 53% density, total edges = 906."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "516",
      "495",
      "861",
      "558"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 60% density, total edges = 516."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 40, 22, 17, 45, 1, 6, 34, 40], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "144",
      "127",
      "79",
      "144"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 127."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 35, 4, 45, 1, 16, 2, 36], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "85",
      "123",
      "139",
      "122"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 122."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 32, 37, 8, 40, 13, 49, 1, 27], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "185",
      "145",
      "117",
      "162"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 145."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 27, 23, 10, 50, 11, 9, 23, 33, 2, 1], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "171",
      "160",
      "177",
      "121"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 160."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 4, 11, 32, 30], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "15",
      "60",
      "54",
      "43"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 43."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "797",
      "826",
      "884",
      "1653"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 50% density, total edges = 826."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 64%, how many edges are present in G?",
    "options": [
      "300",
      "217",
      "180",
      "192"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 64% density, total edges = 192."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 3, 42, 42, 24], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "177",
      "152",
      "87",
      "135"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 135."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][16] starts at base address 2100 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[14][13]?",
    "options": [
      "2606",
      "2464",
      "2570",
      "2574"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (14 * 16 + 13) * 2 = 2574."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][33] starts at base address 2000 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[12][12]?",
    "options": [
      "3632",
      "3764",
      "2576",
      "3624"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (12 * 33 + 12) * 4 = 3632."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 13, 10, 4, 12, 18, 46, 49, 13, 46], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "192",
      "188",
      "175",
      "165"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 175."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "42",
      "49",
      "91",
      "63"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 54% density, total edges = 49."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][21] starts at base address 2500 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[4][8]?",
    "options": [
      "2620",
      "2616",
      "2564",
      "2634"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (8 * 7 + 4) * 2 = 2620."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 23, 20, 48, 12], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "91",
      "97",
      "114",
      "145"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 97."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [44, 6, 37, 28, 8, 46, 10, 16, 9], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "43",
      "124",
      "104",
      "87"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 87."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 46, 6, 17, 28, 10, 10, 34, 42, 9, 17, 32], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "107",
      "133",
      "150",
      "143"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 133."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 44, 15, 50, 34, 33, 24], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "113",
      "109",
      "130",
      "163"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 113."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 53 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "482",
      "456",
      "1378",
      "535"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 53*(52)/2 = 1378. At 35% density, total edges = 482."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 15 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "42",
      "27",
      "105",
      "20"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 15*(14)/2 = 105. At 26% density, total edges = 27."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "231",
      "196",
      "179",
      "595"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 33% density, total edges = 196."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][30] starts at base address 1800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[4][25]?",
    "options": [
      "2554",
      "2558",
      "2588",
      "2000"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (25 * 15 + 4) * 2 = 2558."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "351",
      "160",
      "120",
      "133"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 38% density, total edges = 133."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "469",
      "409",
      "429",
      "780"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 55% density, total edges = 429."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 21, 43, 21, 18], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "118",
      "139",
      "85",
      "135"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][27] starts at base address 1900 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[18][13]?",
    "options": [
      "3064",
      "3148",
      "2836",
      "3056"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (13 * 21 + 18) * 4 = 3064."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "337",
      "271",
      "293",
      "946"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 31% density, total edges = 293."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 25, 19, 1, 12, 33], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "77",
      "45",
      "76",
      "93"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 76."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 53%, how many edges are present in G?",
    "options": [
      "902",
      "1596",
      "845",
      "817"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 53% density, total edges = 845."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][14] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[14][4]?",
    "options": [
      "2712",
      "3028",
      "2996",
      "3000"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (14 * 14 + 4) * 2 = 3000."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "755",
      "803",
      "731",
      "1128"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 67% density, total edges = 755."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "153",
      "120",
      "231",
      "131"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 57% density, total edges = 131."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][16] starts at base address 2900 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[2][2]?",
    "options": [
      "2928",
      "2930",
      "2944",
      "2904"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (2 * 14 + 2) * 1 = 2930."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][14] starts at base address 2200 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[11][7]?",
    "options": [
      "2375",
      "2361",
      "2277",
      "2359"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (11 * 14 + 7) * 1 = 2361."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 35, 42, 40, 15], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "169",
      "129",
      "117",
      "146"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 129."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "201",
      "149",
      "595",
      "166"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 28% density, total edges = 166."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][37] starts at base address 1500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[20][20]?",
    "options": [
      "7876",
      "7580",
      "7564",
      "4700"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (20 * 37 + 20) * 8 = 7580."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [9, 34, 45, 6, 13, 36, 18, 32, 5], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "111",
      "85",
      "94",
      "100"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 94."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "269",
      "318",
      "528",
      "285"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 54% density, total edges = 285."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][20] starts at base address 2200 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[12][2]?",
    "options": [
      "3248",
      "3168",
      "2296",
      "3160"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (12 * 20 + 2) * 4 = 3168."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][30] starts at base address 1200 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[6][13]?",
    "options": [
      "1581",
      "1583",
      "1612",
      "1278"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (13 * 29 + 6) * 1 = 1583."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][27] starts at base address 1600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[6][16]?",
    "options": [
      "2896",
      "1984",
      "2984",
      "2904"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (16 * 20 + 6) * 4 = 2904."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][13] starts at base address 2000 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[17][6]?",
    "options": [
      "2167",
      "2165",
      "2192",
      "2102"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (6 * 25 + 17) * 1 = 2167."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][18] starts at base address 1000 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[1][7]?",
    "options": [
      "1200",
      "1184",
      "1344",
      "1056"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (1 * 18 + 7) * 8 = 1200."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 47, 30, 22, 22, 31, 46, 45, 31, 32, 41, 11], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "279",
      "233",
      "250",
      "198"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 233."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][11] starts at base address 2300 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[1][2]?",
    "options": [
      "2313",
      "2315",
      "2322",
      "2302"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (2 * 7 + 1) * 1 = 2315."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [14, 15, 9, 35, 44, 38, 9], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "108",
      "59",
      "90",
      "73"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 73."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "528",
      "105",
      "154",
      "121"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 23% density, total edges = 121."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 10, 33, 35, 22, 20, 47, 25, 23, 25, 27], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "106",
      "89",
      "122",
      "43"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 89."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 28, 36, 24, 17, 46, 24, 40, 22, 37, 42, 42], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "258",
      "263",
      "241",
      "237"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 241."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "98",
      "128",
      "190",
      "108"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 57% density, total edges = 108."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 3, 12, 16, 12, 26, 22, 3], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "61",
      "31",
      "44",
      "60"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 44."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][15] starts at base address 1800 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][13]?",
    "options": [
      "2992",
      "3092",
      "3000",
      "1852"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (13 * 23 + 1) * 4 = 3000."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 3, 6, 2, 9, 3, 14, 44], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "23",
      "68",
      "54",
      "51"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 51."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][13] starts at base address 2600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[5][4]?",
    "options": [
      "3136",
      "3256",
      "2760",
      "3152"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (5 * 13 + 4) * 8 = 3152."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 40, 30, 30, 50, 24, 7, 37], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "231",
      "150",
      "181",
      "198"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 181."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 5, 28, 13, 34, 33, 39, 1], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "151",
      "118",
      "135",
      "113"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "339",
      "595",
      "374",
      "322"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 57% density, total edges = 339."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 24 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "131",
      "107",
      "95",
      "276"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 24*(23)/2 = 276. At 39% density, total edges = 107."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][10] starts at base address 2800 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[3][3]?",
    "options": [
      "2836",
      "2920",
      "2956",
      "2912"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (3 * 9 + 3) * 4 = 2920."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][28] starts at base address 2900 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[6][14]?",
    "options": [
      "3620",
      "3740",
      "3628",
      "3236"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (6 * 28 + 14) * 4 = 3628."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "34",
      "45",
      "29",
      "55"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 62% density, total edges = 34."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 53 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "521",
      "468",
      "442",
      "1378"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 53*(52)/2 = 1378. At 34% density, total edges = 468."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 43, 16, 21, 23, 50, 33, 49, 38], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "326",
      "235",
      "294",
      "277"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 277."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 9, 50, 13, 46, 23, 22, 25, 23, 16, 27, 12], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "211",
      "242",
      "259",
      "265"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 242."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [11, 38, 27, 20, 33, 12, 39, 34], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "85",
      "96",
      "116",
      "113"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 96."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "518",
      "1081",
      "495",
      "565"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 48% density, total edges = 518."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [25, 36, 37, 16, 38, 36, 47, 29, 50, 12, 23], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "293",
      "281",
      "239",
      "264"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 264."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "55",
      "23",
      "18",
      "34"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 43% density, total edges = 23."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [14, 37, 11, 29, 25, 19, 3, 8, 46, 42], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "77",
      "120",
      "108",
      "91"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 91."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][22] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[10][14]?",
    "options": [
      "3068",
      "2880",
      "3064",
      "3112"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (10 * 22 + 14) * 2 = 3068."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][22] starts at base address 2400 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[3][1]?",
    "options": [
      "2424",
      "2616",
      "2808",
      "2600"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (1 * 24 + 3) * 8 = 2616."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][25] starts at base address 2100 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[10][23]?",
    "options": [
      "3940",
      "4484",
      "4268",
      "4284"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (10 * 25 + 23) * 8 = 4284."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 49 vertices. If the graph connectivity density is 52%, how many edges are present in G?",
    "options": [
      "587",
      "660",
      "611",
      "1176"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 49*(48)/2 = 1176. At 52% density, total edges = 611."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 49, 19, 13, 33, 8], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "125",
      "123",
      "68",
      "106"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 106."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "383",
      "343",
      "780",
      "323"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 44% density, total edges = 343."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "30",
      "41",
      "55",
      "25"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 56% density, total edges = 30."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][16] starts at base address 2900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[5][2]?",
    "options": [
      "3540",
      "2980",
      "3556",
      "3684"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (5 * 16 + 2) * 8 = 3556."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [32, 13, 13, 4, 39, 28, 11], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "26",
      "58",
      "75",
      "71"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 58."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][20] starts at base address 1200 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[7][9]?",
    "options": [
      "2120",
      "2104",
      "2216",
      "1704"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (9 * 12 + 7) * 8 = 2120."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "990",
      "314",
      "381",
      "336"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 34% density, total edges = 336."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 36, 29, 31, 40, 33, 15, 32], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "133",
      "147",
      "96",
      "116"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 116."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "1275",
      "434",
      "459",
      "510"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 36% density, total edges = 459."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 34, 50, 14, 1, 5, 47, 49], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "157",
      "169",
      "152",
      "104"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 152."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 15, 1, 28, 7], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "46",
      "30",
      "29",
      "16"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 29."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "486",
      "459",
      "540",
      "1431"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 34% density, total edges = 486."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "861",
      "288",
      "351",
      "309"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 36% density, total edges = 309."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 50, 12, 50, 3, 36, 13, 48], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "174",
      "160",
      "157",
      "115"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 157."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][20] starts at base address 1600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[3][7]?",
    "options": [
      "1868",
      "1684",
      "1948",
      "1860"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (3 * 20 + 7) * 4 = 1868."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][27] starts at base address 2100 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[5][4]?",
    "options": [
      "2392",
      "2460",
      "2180",
      "2384"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2100 + (4 * 17 + 5) * 4 = 2392."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 36, 12, 40, 30, 31, 21, 33, 27, 15, 13], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "250",
      "267",
      "230",
      "277"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 250."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][38] starts at base address 2300 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[18][11]?",
    "options": [
      "2591",
      "2618",
      "2498",
      "2593"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (11 * 25 + 18) * 1 = 2593."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 20, 38, 34, 5], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "139",
      "122",
      "92",
      "105"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 105."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 40, 39, 38, 5, 34, 10], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "117",
      "154",
      "192",
      "171"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 154."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][39] starts at base address 2800 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[14][16]?",
    "options": [
      "7608",
      "7296",
      "4592",
      "7280"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (14 * 39 + 16) * 8 = 7296."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "153",
      "137",
      "186",
      "528"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 29% density, total edges = 153."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "300",
      "105",
      "117",
      "142"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 39% density, total edges = 117."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 7, 16, 24, 12], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "73",
      "23",
      "89",
      "90"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 73."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "120",
      "88",
      "64",
      "72"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 60% density, total edges = 72."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 25, 18, 25, 17, 45, 13], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "68",
      "129",
      "104",
      "121"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 104."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][39] starts at base address 1000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[15][5]?",
    "options": [
      "2416",
      "1600",
      "2184",
      "2200"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (5 * 27 + 15) * 8 = 2200."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 47, 20, 33, 49, 45, 50, 1, 30, 8, 25], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "290",
      "340",
      "307",
      "244"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 290."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "268",
      "465",
      "237",
      "222"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 51% density, total edges = 237."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][29] starts at base address 1500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[12][22]?",
    "options": [
      "4692",
      "3612",
      "4460",
      "4444"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (12 * 29 + 22) * 8 = 4460."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "142",
      "126",
      "175",
      "528"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 27% density, total edges = 142."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [41, 23, 15, 38, 40, 7], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "157",
      "174",
      "197",
      "116"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 157."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][20] starts at base address 1100 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[14][14]?",
    "options": [
      "2276",
      "1884",
      "2356",
      "2268"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (14 * 20 + 14) * 4 = 2276."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 49, 43, 8, 30, 22, 8, 20, 1, 31], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "183",
      "160",
      "200",
      "191"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 183."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 1, 46, 46, 40, 4, 9, 9, 3], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "183",
      "137",
      "170",
      "166"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 166."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "55",
      "190",
      "45",
      "75"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 29% density, total edges = 55."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "106",
      "378",
      "120",
      "148"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 32% density, total edges = 120."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 21%, how many edges are present in G?",
    "options": [
      "94",
      "68",
      "55",
      "325"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 21% density, total edges = 68."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][10] starts at base address 1500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[3][5]?",
    "options": [
      "1632",
      "1680",
      "1560",
      "1640"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (3 * 10 + 5) * 4 = 1640."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][27] starts at base address 1300 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[26][3]?",
    "options": [
      "2032",
      "2005",
      "1378",
      "2003"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (26 * 27 + 3) * 1 = 2005."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 70%, how many edges are present in G?",
    "options": [
      "264",
      "378",
      "250",
      "292"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 70% density, total edges = 264."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][34] starts at base address 1800 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][4]?",
    "options": [
      "1864",
      "2144",
      "2152",
      "2236"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (4 * 21 + 4) * 4 = 2152."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][27] starts at base address 1700 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[22][18]?",
    "options": [
      "3284",
      "4140",
      "4148",
      "4256"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (22 * 27 + 18) * 4 = 4148."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][36] starts at base address 2400 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[5][29]?",
    "options": [
      "2980",
      "3236",
      "3228",
      "3380"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (5 * 36 + 29) * 4 = 3236."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 34 vertices. If the graph connectivity density is 64%, how many edges are present in G?",
    "options": [
      "342",
      "393",
      "561",
      "359"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 34*(33)/2 = 561. At 64% density, total edges = 359."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [14, 49, 21, 4, 41, 27, 33, 23, 10, 10, 11], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "105",
      "88",
      "92",
      "74"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 88."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][15] starts at base address 1400 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[12][10]?",
    "options": [
      "1720",
      "1690",
      "1520",
      "1692"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (10 * 28 + 12) * 1 = 1692."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [25, 30, 6, 38, 8], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "116",
      "137",
      "74",
      "99"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 99."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 6, 38, 37, 23, 16], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "139",
      "104",
      "116",
      "133"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 116."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][37] starts at base address 1400 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[18][7]?",
    "options": [
      "1904",
      "2060",
      "2144",
      "2052"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (7 * 21 + 18) * 4 = 2060."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][28] starts at base address 2500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[2][24]?",
    "options": [
      "2884",
      "2886",
      "2548",
      "2902"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (24 * 16 + 2) * 1 = 2886."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 1, 14, 31, 11, 40, 11], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "89",
      "72",
      "57",
      "83"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 72."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 59 vertices. If the graph connectivity density is 21%, how many edges are present in G?",
    "options": [
      "359",
      "1711",
      "418",
      "330"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 59*(58)/2 = 1711. At 21% density, total edges = 359."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 47, 44, 50, 18, 14, 25, 9, 21, 14, 39], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "247",
      "264",
      "261",
      "242"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 247."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "36",
      "50",
      "29",
      "91"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 40% density, total edges = 36."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 44, 27, 38, 34, 44, 24, 36, 49, 49, 42, 6], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "162",
      "141",
      "124",
      "109"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 124."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "913",
      "942",
      "1000",
      "1653"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 57% density, total edges = 942."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][14] starts at base address 2900 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[2][1]?",
    "options": [
      "2908",
      "3016",
      "3124",
      "3008"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (1 * 27 + 2) * 4 = 3016."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "49",
      "31",
      "66",
      "37"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 57% density, total edges = 37."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 24 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "145",
      "121",
      "109",
      "276"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 24*(23)/2 = 276. At 44% density, total edges = 121."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][35] starts at base address 2300 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[5][14]?",
    "options": [
      "2487",
      "2370",
      "2489",
      "2524"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (5 * 35 + 14) * 1 = 2489."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][17] starts at base address 1100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[3][7]?",
    "options": [
      "1243",
      "1121",
      "1263",
      "1241"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (7 * 20 + 3) * 1 = 1243."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 1, 6, 31, 40], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "115",
      "84",
      "38",
      "101"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 84."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [9, 46, 24, 6, 17, 42, 42, 26, 16], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "161",
      "144",
      "186",
      "135"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 144."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 3, 29, 6, 33, 16, 15, 30, 2, 17], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "168",
      "134",
      "153",
      "151"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 151."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [25, 9, 3, 6, 18, 15, 2, 34, 47], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "95",
      "78",
      "80",
      "53"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 78."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 36 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "221",
      "239",
      "630",
      "275"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 36*(35)/2 = 630. At 38% density, total edges = 239."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [22, 3, 41, 41, 48, 10, 14, 45], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "155",
      "172",
      "203",
      "133"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 155."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 1, 39, 31, 48, 7, 1, 24, 22], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "186",
      "210",
      "151",
      "203"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 186."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][24] starts at base address 1900 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[13][12]?",
    "options": [
      "3188",
      "3292",
      "2524",
      "3196"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (13 * 24 + 12) * 4 = 3196."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "990",
      "304",
      "326",
      "371"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 33% density, total edges = 326."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 22, 25, 46, 40], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "97",
      "93",
      "114",
      "143"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 97."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][37] starts at base address 1600 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[15][27]?",
    "options": [
      "2005",
      "2219",
      "2182",
      "2180"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (15 * 37 + 27) * 1 = 2182."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 13, 47, 33, 42], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "156",
      "123",
      "140",
      "93"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 123."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][28] starts at base address 1700 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[1][1]?",
    "options": [
      "1704",
      "1928",
      "1808",
      "1816"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (1 * 28 + 1) * 4 = 1816."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 64%, how many edges are present in G?",
    "options": [
      "72",
      "58",
      "91",
      "51"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 64% density, total edges = 58."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][24] starts at base address 1800 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][6]?",
    "options": [
      "2616",
      "1992",
      "2600",
      "2808"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (4 * 24 + 6) * 8 = 2616."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][27] starts at base address 1900 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][13]?",
    "options": [
      "2252",
      "2108",
      "2220",
      "2228"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (13 * 6 + 4) * 4 = 2228."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][22] starts at base address 1800 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[13][2]?",
    "options": [
      "4088",
      "2008",
      "4280",
      "4104"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (13 * 22 + 2) * 8 = 4104."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][32] starts at base address 1100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[7][20]?",
    "options": [
      "1653",
      "1240",
      "1627",
      "1625"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (20 * 26 + 7) * 1 = 1627."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][29] starts at base address 2600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[13][10]?",
    "options": [
      "4148",
      "4140",
      "4264",
      "3120"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (13 * 29 + 10) * 4 = 4148."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "1540",
      "418",
      "446",
      "502"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 29% density, total edges = 446."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 36, 42, 31, 28, 26], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "189",
      "200",
      "137",
      "172"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 172."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][10] starts at base address 1600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[14][7]?",
    "options": [
      "2152",
      "2160",
      "1992",
      "2232"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (7 * 18 + 14) * 4 = 2160."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 49, 17, 9, 35, 29, 9, 45, 9, 36, 48, 36], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "238",
      "275",
      "292",
      "311"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 275."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 16, 9, 14, 40], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "25",
      "52",
      "35",
      "44"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 35."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [9, 41, 17, 9, 45, 47], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "67",
      "84",
      "58",
      "84"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 67."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 19, 14, 23, 26, 21, 29, 5, 13, 32], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "164",
      "152",
      "132",
      "135"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 135."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 44, 26, 36, 21, 31, 11], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "174",
      "178",
      "157",
      "127"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 157."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "639",
      "594",
      "990",
      "572"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 60% density, total edges = 594."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 37, 26, 48, 35, 47, 8], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "229",
      "246",
      "193",
      "276"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 229."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 24 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "276",
      "73",
      "85",
      "109"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 24*(23)/2 = 276. At 31% density, total edges = 85."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 53%, how many edges are present in G?",
    "options": [
      "524",
      "569",
      "990",
      "502"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 53% density, total edges = 524."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 24, 8, 34, 43, 28, 2, 31, 46], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "178",
      "152",
      "135",
      "109"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 135."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][22] starts at base address 1100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[10][10]?",
    "options": [
      "1352",
      "1200",
      "1328",
      "1330"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (10 * 22 + 10) * 1 = 1330."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 7, 40, 10, 8, 47, 11], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "118",
      "135",
      "165",
      "112"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 24, 15, 32, 8, 35, 46, 11, 6, 12, 30, 32], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "240",
      "253",
      "219",
      "223"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 223."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "211",
      "151",
      "780",
      "171"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 22% density, total edges = 171."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][32] starts at base address 1700 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[2][4]?",
    "options": [
      "1800",
      "1768",
      "1766",
      "1708"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (2 * 32 + 4) * 1 = 1768."
  }
];
