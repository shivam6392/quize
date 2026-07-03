window.quizData = window.quizData || {};
window.quizData.dsa = [
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n)",
      "O(n²)",
      "O(log n)",
      "O(1)"
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
      "O(n)",
      "O(n²)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What does Big O notation describe?",
    "options": [
      "Exact growth in standard usage",
      "Upper bound of growth rate",
      "Average case only (general case)",
      "Lower bound (widely accepted)"
    ],
    "answer": 1,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of accessing an array element by index?",
    "options": [
      "O(n)",
      "O(n²)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Array access is constant time via direct addressing."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = n! (general case)",
      "T(n) = 2n + 1 by design",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = T(n-1) + n"
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
      "O(n)",
      "O(n²)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Omega represents?",
    "options": [
      "Average case",
      "Tight bound",
      "Lower bound",
      "Upper bound"
    ],
    "answer": 2,
    "explanation": "Ω notation gives the best-case lower bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Theta represents?",
    "options": [
      "Lower bound only",
      "No bound",
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
      "O(n log n)",
      "O(1)",
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
      "Average cost per operation over a sequence",
      "Worst case only in typical implementations",
      "Space analysis under normal conditions",
      "Best case only as per specification"
    ],
    "answer": 0,
    "explanation": "Amortized analysis averages cost across operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 0,
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
      "T(n) = nT(n/2) in most cases"
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
      "O(n)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 2,
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
      "O(n²)",
      "O(1)"
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
      "Theta (Θ)",
      "Little o",
      "Big Omega",
      "Big O"
    ],
    "answer": 0,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Two Sum problem is best solved using?",
    "options": [
      "HashMap",
      "Stack",
      "Sorting",
      "Binary Search Tree"
    ],
    "answer": 0,
    "explanation": "HashMap gives O(1) lookup for complement."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Shortest path by design",
      "Maximum subarray sum",
      "Sorting (primary approach)",
      "String matching"
    ],
    "answer": 1,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Sliding window technique is used for?",
    "options": [
      "Subarray/substring problems with constraints",
      "Graph traversal in typical implementations",
      "Tree balancing under normal conditions",
      "Sorting in typical implementations"
    ],
    "answer": 0,
    "explanation": "Sliding window maintains a dynamic range."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "answer": 1,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal?",
    "options": [
      "O(n*k)",
      "O(n²)",
      "O(k)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Range sum queries",
      "Minimum element",
      "Sorting status",
      "Graph connectivity"
    ],
    "answer": 0,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Best Time to Buy Stock uses which pattern?",
    "options": [
      "Binary search (typical scenario)",
      "Track minimum and max profit",
      "Sliding window in practice",
      "Two pointers based on convention"
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
      "Middle by design",
      "Sorted position",
      "End of array",
      "Beginning"
    ],
    "answer": 2,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Product of Array Except Self avoids division by using?",
    "options": [
      "Left and right product arrays",
      "Stack (standard definition)",
      "Queue under normal conditions",
      "Sorting (primary approach)"
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
      "Sort by start time",
      "Sort by end time",
      "Use a stack in most cases",
      "Build a tree in practice"
    ],
    "answer": 0,
    "explanation": "Sorting by start allows sequential merging."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Two pointer technique works best on?",
    "options": [
      "Heaps in practice",
      "Graphs by design",
      "Trees in most cases",
      "Sorted arrays"
    ],
    "answer": 3,
    "explanation": "Two pointers converge from both ends of sorted data."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "What does the sliding window technique maintain?",
    "options": [
      "A sorted subarray as per specification",
      "A priority queue under normal conditions",
      "A balanced tree as per specification",
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
      "O(n²)",
      "O(n+m)",
      "O(n*m)",
      "O(m²)"
    ],
    "answer": 1,
    "explanation": "KMP uses failure function to avoid re-scanning."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Rabin-Karp uses what technique?",
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
    "question": "Checking if two strings are anagrams requires?",
    "options": [
      "Character frequency comparison",
      "Substring search as per specification",
      "Sorting only in practice",
      "Regular expressions by design"
    ],
    "answer": 0,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "A palindrome reads the same?",
    "options": [
      "Only backward in practice",
      "Forward and backward",
      "Diagonally (commonly used)",
      "Only forward (general case)"
    ],
    "answer": 1,
    "explanation": "Palindromes are symmetric strings."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "StringBuilder in Java is preferred over String for?",
    "options": [
      "Read-only access (typical scenario)",
      "Sorting based on convention",
      "Hashing (typical scenario)",
      "Frequent modifications (mutable)"
    ],
    "answer": 3,
    "explanation": "StringBuilder avoids creating new String objects."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Time complexity to check if a string is palindrome?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n²)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "Compare characters from both ends in one pass."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Frequency count of characters uses?",
    "options": [
      "Linked List in standard usage",
      "Stack (default behavior)",
      "Queue (widely accepted)",
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
      "O(n³) in typical implementations",
      "O(n) under normal conditions",
      "O(n²) using expand around center",
      "O(log n) as per specification"
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
      "Two pointers (slow and fast)",
      "Stack in standard usage",
      "Recursion only (commonly used)",
      "Queue in standard usage"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Reversing a singly linked list takes?",
    "options": [
      "O(n) time, O(1) space",
      "O(n²) time (commonly used)",
      "O(log n) time (general case)",
      "O(n) space in standard usage"
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
      "Recursion in standard usage",
      "Slow and fast pointer",
      "Stack (typical scenario)",
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
      "O(n²)",
      "O(n*m)",
      "O(n+m)"
    ],
    "answer": 3,
    "explanation": "Compare heads and merge in single pass."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Doubly linked list advantage over singly?",
    "options": [
      "Traversal in both directions",
      "Faster access by index by design",
      "Less memory (typical scenario)",
      "Simpler implementation in practice"
    ],
    "answer": 0,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Previous node",
      "NULL based on convention",
      "Itself (general case)"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Queue in typical implementations",
      "Length difference or two-pointer approach",
      "Sorting in typical implementations",
      "Stack in typical implementations"
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
      "Binary search (general case)",
      "Two pointers with N gap",
      "Stack of size N (general case)",
      "Reverse list (commonly used)"
    ],
    "answer": 1,
    "explanation": "Fast pointer leads by N, both advance until fast reaches end."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack follows which principle?",
    "options": [
      "LILO (typical scenario)",
      "LIFO (Last In First Out)",
      "FIFO as per specification",
      "Random access in standard usage"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Balanced parentheses checking uses?",
    "options": [
      "Queue",
      "Array",
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
      "BFS in typical implementations",
      "Next greater/smaller element problems",
      "String matching in typical implementations",
      "Sorting in typical implementations"
    ],
    "answer": 1,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Infix to postfix conversion uses?",
    "options": [
      "Stack for operators",
      "Linked list (general case)",
      "Tree in most cases",
      "Queue by design"
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
      "O(n²)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted in typical implementations",
      "Heap is full in typical implementations",
      "Stack memory is exhausted (e.g., deep recursion)",
      "Queue is full in typical implementations"
    ],
    "answer": 2,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Postfix expression evaluation uses?",
    "options": [
      "Queue (commonly used)",
      "Stack for operands",
      "Tree based on convention",
      "Two stacks in practice"
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
      "Random access by design",
      "Priority (primary approach)",
      "FIFO (First In First Out)",
      "LIFO (commonly used)"
    ],
    "answer": 2,
    "explanation": "First element enqueued is first dequeued."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting as per specification",
      "Searching (default behavior)",
      "Wasted space in linear queue",
      "Balancing as per specification"
    ],
    "answer": 2,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Deque allows operations at?",
    "options": [
      "Only rear by design",
      "Only front (general case)",
      "Both front and rear",
      "Middle only in most cases"
    ],
    "answer": 2,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Priority queue is typically implemented using?",
    "options": [
      "Heap (binary heap)",
      "Stack (general case)",
      "Array based on convention",
      "Linked list by design"
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
      "Queue",
      "Deque",
      "Priority queue",
      "Stack"
    ],
    "answer": 0,
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
      "O(n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "HashMap provides average case lookup of?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Hash function maps key directly to bucket."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Collision in hashing means?",
    "options": [
      "Duplicate keys (typical scenario)",
      "Hash table is full by design",
      "Two keys map to same index",
      "Key not found based on convention"
    ],
    "answer": 2,
    "explanation": "Different keys producing same hash cause collision."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Chaining resolves collisions using?",
    "options": [
      "Rehashing only (commonly used)",
      "Linked list at each bucket",
      "Sorting as per specification",
      "Open addressing in practice"
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
      "Probing for next empty slot",
      "Creating new table in most cases",
      "Ignoring collision in practice",
      "Using linked lists by design"
    ],
    "answer": 0,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Rehashing is triggered when?",
    "options": [
      "First insertion by design",
      "Load factor exceeds threshold",
      "After deletion only (commonly used)",
      "Table is empty by design"
    ],
    "answer": 1,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "HashSet stores?",
    "options": [
      "Duplicates allowed",
      "Sorted elements",
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
      "Returns key itself (general case)",
      "Ignores input in most cases",
      "Always returns 0 in most cases",
      "Uniform distribution of keys"
    ],
    "answer": 3,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Level order (widely accepted)",
      "Sorted ascending order",
      "Random order in most cases",
      "Descending order in practice"
    ],
    "answer": 1,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Height of a balanced BST with n nodes?",
    "options": [
      "O(n)",
      "O(n²)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Balanced tree has logarithmic height."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n log n) (typical scenario)",
      "O(1) in practice",
      "O(h) where h is height",
      "O(n²) in standard usage"
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
      "Sorting nodes (primary approach)",
      "Rebuilding tree (general case)",
      "Using extra array (primary approach)",
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
      "BFS in typical implementations",
      "Greedy (standard definition)",
      "Recursion with global max tracking",
      "Sorting as per specification"
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
      "Right, Root, Left",
      "Left, Right, Root",
      "Left, Root, Right",
      "Root, Left, Right"
    ],
    "answer": 3,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Postorder traversal visits?",
    "options": [
      "Left, Root, Right",
      "Root, Left, Right",
      "Right, Left, Root",
      "Left, Right, Root"
    ],
    "answer": 3,
    "explanation": "Post = root last, after children."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
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
    "difficulty": "Easy",
    "question": "Diameter of binary tree is?",
    "options": [
      "Root to deepest node by design",
      "Number of leaves (primary approach)",
      "Longest path between any two nodes",
      "Height of tree under normal conditions"
    ],
    "answer": 2,
    "explanation": "Diameter = max of left height + right height at each node."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Segment tree is used for?",
    "options": [
      "Sorting under normal conditions",
      "String matching (general case)",
      "Range queries and updates efficiently",
      "Graph traversal under normal conditions"
    ],
    "answer": 2,
    "explanation": "Segment tree handles range sum/min/max in O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Greater than or equal to children",
      "Random under normal conditions",
      "Less than children (typical scenario)",
      "Equal to children as per specification"
    ],
    "answer": 0,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "BST search time complexity (balanced)?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "Balanced BST halves search space each step."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "BFS uses which data structure?",
    "options": [
      "Stack",
      "Queue",
      "Heap",
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
      "Queue by design",
      "Stack (or recursion)",
      "Heap as per specification",
      "Array by design"
    ],
    "answer": 1,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Dijkstra's algorithm fails with?",
    "options": [
      "Negative edge weights",
      "Undirected graphs",
      "Positive weights",
      "Dense graphs (commonly used)"
    ],
    "answer": 0,
    "explanation": "Greedy assumption breaks with negative edges."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Topological sort applies to?",
    "options": [
      "Undirected graphs (default behavior)",
      "Cyclic graphs by design",
      "Weighted graphs only (commonly used)",
      "Directed Acyclic Graphs (DAG)"
    ],
    "answer": 3,
    "explanation": "Topological ordering requires no cycles."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Union-Find is used in?",
    "options": [
      "BFS under normal conditions",
      "Kruskal's MST and cycle detection",
      "String matching (commonly used)",
      "Shortest path in standard usage"
    ],
    "answer": 1,
    "explanation": "Union-Find efficiently tracks connected components."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Bellman-Ford handles?",
    "options": [
      "Only undirected in practice",
      "Only trees (widely accepted)",
      "Negative edge weights",
      "Only positive weights"
    ],
    "answer": 2,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Divide and conquer (widely accepted)",
      "BFS-based (primary approach)",
      "Dynamic programming in practice",
      "Greedy MST using sorted edges"
    ],
    "answer": 3,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Prim's algorithm starts from?",
    "options": [
      "All vertices",
      "Leaf node in practice",
      "Any single vertex",
      "Heaviest edge"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Floyd-Warshall finds?",
    "options": [
      "MST (general case)",
      "All-pairs shortest paths",
      "Single-source shortest path",
      "Topological order by design"
    ],
    "answer": 1,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Cycle detection in undirected graph uses?",
    "options": [
      "BFS only in typical implementations",
      "Dijkstra in typical implementations",
      "DFS with parent tracking or Union-Find",
      "Topological sort (primary approach)"
    ],
    "answer": 2,
    "explanation": "Back edge to non-parent indicates cycle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V²)",
      "O(V+E)",
      "O(E)",
      "O(V)"
    ],
    "answer": 0,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity?",
    "options": [
      "O(V²)",
      "O(E²)",
      "O(V)",
      "O(V+E)"
    ],
    "answer": 3,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Memoization is?",
    "options": [
      "Top-down DP with caching",
      "Brute force in practice",
      "Greedy (widely accepted)",
      "Bottom-up approach by design"
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
      "Bottom-up DP using table",
      "Backtracking in standard usage",
      "Top-down approach in most cases",
      "Recursion by design"
    ],
    "answer": 0,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "0/1 Knapsack time complexity?",
    "options": [
      "O(2^n)",
      "O(n log n)",
      "O(n*W)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "DP table of items × capacity."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
    "options": [
      "O(n²)",
      "O(n) in practice",
      "O(2^n)",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LCS (Longest Common Subsequence) of two strings?",
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
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Coin Change problem (min coins) is solved by?",
    "options": [
      "BFS only (commonly used)",
      "DP (unbounded knapsack variant)",
      "Sorting (standard definition)",
      "Greedy always as per specification"
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
      "Matrix sorting (standard definition)",
      "Matrix dimensions as per specification",
      "Matrix values (general case)",
      "Order of matrix multiplications"
    ],
    "answer": 3,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "DP on grids typically moves?",
    "options": [
      "Up only by design",
      "Diagonally only",
      "Right and down",
      "All 8 directions"
    ],
    "answer": 2,
    "explanation": "Grid DP usually considers right/down movements."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Optimal substructure means?",
    "options": [
      "Random solutions work (typical scenario)",
      "Problem has no solution based on convention",
      "Optimal solution contains optimal sub-solutions",
      "Only greedy works under normal conditions"
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
      "No subproblems exist (commonly used)",
      "Same subproblems are solved multiple times",
      "Linear scan suffices under normal conditions",
      "Each subproblem is unique (widely accepted)"
    ],
    "answer": 1,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start in practice",
      "Maximum duration",
      "Earliest finish time",
      "Random (primary approach)"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Fractional knapsack allows?",
    "options": [
      "Negative weights by design",
      "No items in standard usage",
      "Taking fractions of items",
      "Only whole items (commonly used)"
    ],
    "answer": 2,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Huffman coding builds?",
    "options": [
      "Optimal prefix-free binary tree",
      "Graph (standard definition)",
      "Hash table under normal conditions",
      "Balanced BST under normal conditions"
    ],
    "answer": 0,
    "explanation": "Greedy: merge two lowest-frequency nodes."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total time",
      "Total profit",
      "Minimum cost",
      "Number of jobs"
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
      "Binary search in standard usage",
      "Stack (primary approach)",
      "Queue (default behavior)",
      "Sorting arrival/departure times"
    ],
    "answer": 3,
    "explanation": "Sort and count overlapping intervals."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Greedy algorithms guarantee optimal solution when?",
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
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "Queens form diagonal (commonly used)",
      "All queens are in one row by design",
      "Queens are adjacent in standard usage",
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
      "Backtracking with constraint checking",
      "Sorting under normal conditions",
      "BFS in typical implementations",
      "Greedy under normal conditions"
    ],
    "answer": 0,
    "explanation": "Try digits 1-9, backtrack if constraint violated."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using?",
    "options": [
      "Recursion and backtracking",
      "Sorting (primary approach)",
      "Dynamic programming in practice",
      "BFS only as per specification"
    ],
    "answer": 0,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Generating all permutations uses?",
    "options": [
      "Swap-based backtracking",
      "Queue (widely accepted)",
      "Sorting (commonly used)",
      "Hashing by design"
    ],
    "answer": 0,
    "explanation": "Swap elements, recurse, then swap back."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Combination Sum allows?",
    "options": [
      "Sorting only as per specification",
      "Each element used once in practice",
      "Negative numbers (primary approach)",
      "Reusing elements to reach target"
    ],
    "answer": 3,
    "explanation": "Include current element again or move to next."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "Exponential",
      "O(n) by design",
      "O(n²) by design",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "XOR of a number with itself gives?",
    "options": [
      "Negative number",
      "1",
      "The number itself",
      "0"
    ],
    "answer": 3,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "Complement by design",
      "The number itself",
      "0 based on convention",
      "1 (typical scenario)"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Check if number is power of 2 using?",
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
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Left shift by 1 is equivalent to?",
    "options": [
      "Multiply by 2",
      "Add 1 (general case)",
      "Subtract 1",
      "Divide by 2"
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
      "Add 2 (primary approach)",
      "Multiply by 2 (widely accepted)",
      "Divide by 2 (integer division)",
      "XOR with 1 (standard definition)"
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
      "Graph traversal (widely accepted)",
      "String matching (primary approach)",
      "Extracting or setting specific bits",
      "Sorting in typical implementations"
    ],
    "answer": 2,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Trie is best for?",
    "options": [
      "Matrix operations (widely accepted)",
      "Prefix-based string operations",
      "Sorting numbers in standard usage",
      "Graph traversal in most cases"
    ],
    "answer": 1,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Disjoint Set Union find uses?",
    "options": [
      "Hashing in typical implementations",
      "Sorting (standard definition)",
      "BFS under normal conditions",
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
      "Point updates and prefix sum queries",
      "Graph BFS in typical implementations",
      "String matching in most cases",
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
      "O(1)",
      "O(n²)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Tree structure allows logarithmic range operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Stack?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Stack, performing a 'Deletion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "44",
      "37",
      "91",
      "58"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 49% density, total edges = 44."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 52%, how many edges are present in G?",
    "options": [
      "406",
      "240",
      "211",
      "197"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 52% density, total edges = 211."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "519",
      "1485",
      "574",
      "492"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 35% density, total edges = 519."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 21%, how many edges are present in G?",
    "options": [
      "143",
      "780",
      "203",
      "163"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 21% density, total edges = 163."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Unsorted Array?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Unsorted Array, performing a 'Search' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "213",
      "820",
      "254",
      "193"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 26% density, total edges = 213."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "542",
      "861",
      "521",
      "584"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 63% density, total edges = 542."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 25, 18, 15, 5, 2], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "58",
      "118",
      "116",
      "101"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 101."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][33] starts at base address 1200 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[6][17]?",
    "options": [
      "1448",
      "1302",
      "1413",
      "1415"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (6 * 33 + 17) * 1 = 1415."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Doubly Linked List?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 24, 27, 20, 31, 29, 50, 41, 50], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "173",
      "161",
      "131",
      "144"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 144."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 41, 21, 20, 14, 10, 49, 12, 37, 46], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "176",
      "208",
      "159",
      "155"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 159."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "202",
      "247",
      "435",
      "217"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 50% density, total edges = 217."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 22, 21, 37, 47, 26], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "135",
      "80",
      "115",
      "98"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 98."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][32] starts at base address 1400 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[16][22]?",
    "options": [
      "2468",
      "2464",
      "2532",
      "2104"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (16 * 32 + 22) * 2 = 2468."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "302",
      "346",
      "946",
      "280"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 32% density, total edges = 302."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][28] starts at base address 1300 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][15]?",
    "options": [
      "2316",
      "2392",
      "1360",
      "2324"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (15 * 17 + 1) * 4 = 2324."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Queue?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, performing a 'Access' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 38, 25, 19, 35, 47, 24, 16, 2, 31, 19, 45], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "137",
      "117",
      "154",
      "172"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 137."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "472",
      "544",
      "496",
      "1128"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 44% density, total edges = 496."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 22, 23, 11, 20, 12], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "56",
      "83",
      "89",
      "72"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 72."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 36 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "428",
      "630",
      "410",
      "464"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 36*(35)/2 = 630. At 68% density, total edges = 428."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Doubly Linked List?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Doubly Linked List, performing a 'Search' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][15] starts at base address 1400 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[17][8]?",
    "options": [
      "1878",
      "1882",
      "1672",
      "1938"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (8 * 28 + 17) * 2 = 1882."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][29] starts at base address 1700 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[4][8]?",
    "options": [
      "1996",
      "1964",
      "1764",
      "1960"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (8 * 16 + 4) * 2 = 1964."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 70%, how many edges are present in G?",
    "options": [
      "586",
      "546",
      "526",
      "780"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 70% density, total edges = 546."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a AVL Tree?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For AVL Tree, performing a 'Insertion' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Unsorted Array?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Unsorted Array, performing a 'Access' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 11, 34, 11, 4, 28], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "111",
      "60",
      "94",
      "98"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 94."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [14, 31, 25, 28, 40, 18, 40, 44, 41, 40], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "70",
      "56",
      "87",
      "95"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 70."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "136",
      "54",
      "71",
      "46"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 40% density, total edges = 54."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 15, 8, 45, 17, 42, 42, 38, 21, 4], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "169",
      "232",
      "215",
      "257"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 215."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][30] starts at base address 2300 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][23]?",
    "options": [
      "3036",
      "3684",
      "3444",
      "3428"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (4 * 30 + 23) * 8 = 3444."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][30] starts at base address 2300 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][28]?",
    "options": [
      "3420",
      "3436",
      "2748",
      "3476"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (28 * 5 + 2) * 8 = 3436."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][14] starts at base address 1000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[4][3]?",
    "options": [
      "1488",
      "1472",
      "1640",
      "1096"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (3 * 19 + 4) * 8 = 1488."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][19] starts at base address 1800 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[22][17]?",
    "options": [
      "2670",
      "2666",
      "2708",
      "2548"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (22 * 19 + 17) * 2 = 2670."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][27] starts at base address 1200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[18][17]?",
    "options": [
      "1812",
      "1984",
      "1980",
      "2028"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (17 * 22 + 18) * 2 = 1984."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Queue?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Queue, performing a 'Deletion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][29] starts at base address 2100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[1][11]?",
    "options": [
      "2169",
      "2111",
      "2138",
      "2140"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (1 * 29 + 11) * 1 = 2140."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 40, 30, 45, 19, 36, 28, 30], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "170",
      "237",
      "256",
      "220"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 220."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Regular BST (worst case)?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Regular BST (worst case), performing a 'Insertion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Singly Linked List?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, performing a 'Search' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][34] starts at base address 1600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[4][25]?",
    "options": [
      "1990",
      "1800",
      "1918",
      "1922"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (4 * 34 + 25) * 2 = 1922."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 19, 24, 39, 19, 8], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "82",
      "125",
      "164",
      "142"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 125."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "258",
      "903",
      "322",
      "279"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 31% density, total edges = 279."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Doubly Linked List?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, performing a 'Deletion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [47, 3, 6, 18, 39, 31, 7, 13, 5, 50, 34], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "158",
      "168",
      "104",
      "151"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 151."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 53 vertices. If the graph connectivity density is 52%, how many edges are present in G?",
    "options": [
      "716",
      "690",
      "1378",
      "769"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 53*(52)/2 = 1378. At 52% density, total edges = 716."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][14] starts at base address 1200 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][2]?",
    "options": [
      "1552",
      "1664",
      "1536",
      "1248"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (3 * 14 + 2) * 8 = 1552."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 22, 32, 37, 17, 3, 34, 18], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "136",
      "91",
      "156",
      "119"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 119."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][14] starts at base address 1000 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[9][6]?",
    "options": [
      "1130",
      "1146",
      "1132",
      "1054"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (9 * 14 + 6) * 1 = 1132."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Singly Linked List?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "282",
      "252",
      "435",
      "237"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 58% density, total edges = 252."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][24] starts at base address 2600 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[7][1]?",
    "options": [
      "2621",
      "2607",
      "2623",
      "2639"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (1 * 16 + 7) * 1 = 2623."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][27] starts at base address 2500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[4][25]?",
    "options": [
      "2600",
      "2877",
      "2879",
      "2894"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (25 * 15 + 4) * 1 = 2879."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][38] starts at base address 1200 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[2][11]?",
    "options": [
      "1287",
      "1325",
      "1285",
      "1222"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (2 * 38 + 11) * 1 = 1287."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "312",
      "946",
      "290",
      "356"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 33% density, total edges = 312."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 36, 32, 7, 11, 20], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "104",
      "93",
      "86",
      "110"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 93."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "212",
      "163",
      "179",
      "528"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 34% density, total edges = 179."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][11] starts at base address 2200 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[1][7]?",
    "options": [
      "2214",
      "2236",
      "2258",
      "2232"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (1 * 11 + 7) * 2 = 2236."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][24] starts at base address 1800 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[7][15]?",
    "options": [
      "2007",
      "1905",
      "1983",
      "1981"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (7 * 24 + 15) * 1 = 1983."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][31] starts at base address 1500 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][20]?",
    "options": [
      "6388",
      "6140",
      "6156",
      "1820"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (20 * 29 + 2) * 8 = 6156."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][33] starts at base address 2600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][26]?",
    "options": [
      "3016",
      "3336",
      "3320",
      "3600"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (2 * 33 + 26) * 8 = 3336."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][18] starts at base address 1400 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[19][15]?",
    "options": [
      "1685",
      "1771",
      "1749",
      "1747"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (15 * 22 + 19) * 1 = 1749."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][11] starts at base address 1800 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[2][7]?",
    "options": [
      "1968",
      "1994",
      "1814",
      "1970"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (7 * 24 + 2) * 1 = 1970."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 41%, how many edges are present in G?",
    "options": [
      "946",
      "431",
      "387",
      "365"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 41% density, total edges = 387."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "378",
      "136",
      "164",
      "122"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 36% density, total edges = 136."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][29] starts at base address 1300 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[16][1]?",
    "options": [
      "3160",
      "3152",
      "1364",
      "3276"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (16 * 29 + 1) * 4 = 3160."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 18, 46, 6, 42, 47, 22, 31, 33], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "208",
      "181",
      "213",
      "191"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 191."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 14, 1, 23, 11, 36, 15, 6, 42, 25, 22], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "227",
      "202",
      "148",
      "185"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 185."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Sorted Array?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Sorted Array, performing a 'Access' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 19, 28, 2, 20], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "80",
      "82",
      "97",
      "49"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 80."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "139",
      "169",
      "435",
      "124"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 32% density, total edges = 139."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "550",
      "903",
      "529",
      "593"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 61% density, total edges = 550."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Queue?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Queue, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][10] starts at base address 2700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][2]?",
    "options": [
      "3036",
      "2732",
      "3196",
      "3020"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (2 * 20 + 2) * 8 = 3036."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 47%, how many edges are present in G?",
    "options": [
      "807",
      "750",
      "1596",
      "722"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 47% density, total edges = 750."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [32, 18, 10, 44, 49, 29, 49], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "182",
      "150",
      "211",
      "199"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 182."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "162",
      "148",
      "406",
      "191"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 40% density, total edges = 162."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a AVL Tree?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, performing a 'Search' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 36, 8, 46, 45, 45, 29], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "90",
      "107",
      "153",
      "124"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 107."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][31] starts at base address 1300 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[22][8]?",
    "options": [
      "1554",
      "1583",
      "1552",
      "1476"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (8 * 29 + 22) * 1 = 1554."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][28] starts at base address 2700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][23]?",
    "options": [
      "3068",
      "8036",
      "8052",
      "8284"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (23 * 29 + 2) * 8 = 8052."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][37] starts at base address 2100 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][30]?",
    "options": [
      "3212",
      "3228",
      "3524",
      "2820"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (3 * 37 + 30) * 8 = 3228."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 48, 40, 33, 13], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "163",
      "121",
      "196",
      "180"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 163."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "15",
      "9",
      "27",
      "66"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 24% density, total edges = 15."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 33, 49, 6, 48, 4, 45, 31, 25, 12, 6], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "245",
      "262",
      "241",
      "270"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 245."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 38 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "417",
      "703",
      "379",
      "360"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 38*(37)/2 = 703. At 54% density, total edges = 379."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][15] starts at base address 1500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[1][5]?",
    "options": [
      "1660",
      "1540",
      "1644",
      "1780"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (1 * 15 + 5) * 8 = 1660."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][11] starts at base address 1700 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[5][5]?",
    "options": [
      "1820",
      "1750",
      "1816",
      "1842"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (5 * 11 + 5) * 2 = 1820."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "219",
      "666",
      "256",
      "201"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 33% density, total edges = 219."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 1, 11, 38, 42, 36, 38, 33, 1], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "272",
      "239",
      "199",
      "256"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 239."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Queue?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Queue, performing a 'Search' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 33, 10, 33, 3, 31, 26, 39, 36], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "210",
      "249",
      "175",
      "227"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 210."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "212",
      "258",
      "227",
      "465"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 49% density, total edges = 227."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 32, 15, 24, 11], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "89",
      "47",
      "74",
      "91"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 74."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 48, 35, 45, 32], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "83",
      "154",
      "136",
      "119"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 119."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 20, 31, 48, 22, 21, 48, 40, 22, 48, 26, 4], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "116",
      "130",
      "99",
      "51"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 99."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 39, 48, 41, 4, 47, 21, 45], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "241",
      "245",
      "224",
      "200"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 224."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 50 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "269",
      "294",
      "1225",
      "344"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 50*(49)/2 = 1225. At 24% density, total edges = 294."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 3, 31, 50, 32, 16, 33, 46, 30, 41, 4, 24], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "163",
      "113",
      "84",
      "130"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 113."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 18, 42, 34, 28, 3, 6, 41, 3, 23, 11, 45], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "79",
      "62",
      "60",
      "104"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 62."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Stack?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Stack, performing a 'Access' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][19] starts at base address 1600 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[17][16]?",
    "options": [
      "2238",
      "2144",
      "2280",
      "2242"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (16 * 19 + 17) * 2 = 2242."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][32] starts at base address 1700 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[4][25]?",
    "options": [
      "1885",
      "1853",
      "1800",
      "1851"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (4 * 32 + 25) * 1 = 1853."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Singly Linked List?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, performing a 'Access' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 45, 4, 38, 45, 21, 8, 5, 20], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "185",
      "168",
      "176",
      "161"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 168."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 38 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "154",
      "703",
      "135",
      "192"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 38*(37)/2 = 703. At 22% density, total edges = 154."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][28] starts at base address 2500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[9][22]?",
    "options": [
      "3708",
      "3292",
      "3596",
      "3588"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (9 * 28 + 22) * 4 = 3596."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][36] starts at base address 1100 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[8][34]?",
    "options": [
      "5076",
      "5192",
      "2188",
      "5068"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (34 * 29 + 8) * 4 = 5076."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][20] starts at base address 1900 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][7]?",
    "options": [
      "1956",
      "2080",
      "2088",
      "2168"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (2 * 20 + 7) * 4 = 2088."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Stack?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Stack, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][35] starts at base address 1400 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[2][32]?",
    "options": [
      "1562",
      "1464",
      "1567",
      "1560"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (32 * 5 + 2) * 1 = 1562."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][38] starts at base address 1900 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[15][16]?",
    "options": [
      "2860",
      "4244",
      "4396",
      "4236"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (15 * 38 + 16) * 4 = 4244."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][25] starts at base address 2800 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[5][12]?",
    "options": [
      "2935",
      "2937",
      "2962",
      "2860"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (5 * 25 + 12) * 1 = 2937."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [32, 10, 38, 21, 44, 26, 9], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "101",
      "69",
      "122",
      "118"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 101."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "69",
      "378",
      "111",
      "83"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 22% density, total edges = 83."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "129",
      "300",
      "117",
      "154"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 43% density, total edges = 129."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][29] starts at base address 2200 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][12]?",
    "options": [
      "3208",
      "3456",
      "3224",
      "2584"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (4 * 29 + 12) * 8 = 3224."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][37] starts at base address 1300 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[15][27]?",
    "options": [
      "1909",
      "1907",
      "1705",
      "1931"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (27 * 22 + 15) * 1 = 1909."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 19, 33, 43, 18, 20, 30, 30, 45], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "136",
      "119",
      "113",
      "137"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 119."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][27] starts at base address 1100 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[10][18]?",
    "options": [
      "3756",
      "2540",
      "3916",
      "3772"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (18 * 18 + 10) * 8 = 3772."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][25] starts at base address 1800 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[9][11]?",
    "options": [
      "2051",
      "2049",
      "1899",
      "2073"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (11 * 22 + 9) * 1 = 2051."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][12] starts at base address 1600 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[5][8]?",
    "options": [
      "2504",
      "2408",
      "1920",
      "2392"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (8 * 12 + 5) * 8 = 2408."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 41%, how many edges are present in G?",
    "options": [
      "300",
      "110",
      "122",
      "147"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 41% density, total edges = 122."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][23] starts at base address 2400 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[6][15]?",
    "options": [
      "3608",
      "3624",
      "3120",
      "3808"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (6 * 23 + 15) * 8 = 3624."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [14, 50, 46, 33, 42, 48, 5, 37, 14], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "224",
      "243",
      "238",
      "255"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 238."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][18] starts at base address 2600 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[4][3]?",
    "options": [
      "2772",
      "2776",
      "2624",
      "2832"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (3 * 28 + 4) * 2 = 2776."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "120",
      "42",
      "66",
      "50"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 42% density, total edges = 50."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][21] starts at base address 2100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[3][16]?",
    "options": [
      "2293",
      "2295",
      "2307",
      "2148"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2100 + (16 * 12 + 3) * 1 = 2295."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 12, 27, 24, 19, 12], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "90",
      "97",
      "73",
      "63"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 73."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "254",
      "205",
      "221",
      "528"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 42% density, total edges = 221."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Regular BST (worst case)?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For Regular BST (worst case), performing a 'Deletion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 65%, how many edges are present in G?",
    "options": [
      "903",
      "629",
      "586",
      "565"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 65% density, total edges = 586."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][36] starts at base address 2800 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[21][5]?",
    "options": [
      "3010",
      "4322",
      "4318",
      "4394"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (21 * 36 + 5) * 2 = 4322."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 7, 41, 34, 20, 44, 33, 3, 24], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "236",
      "209",
      "192",
      "146"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 192."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Stack?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, performing a 'Search' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "224",
      "325",
      "198",
      "185"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 61% density, total edges = 198."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 9, 49, 44, 6, 29, 47, 19, 30, 5], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "203",
      "248",
      "246",
      "229"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 229."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][33] starts at base address 1000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[8][18]?",
    "options": [
      "2544",
      "2628",
      "2536",
      "1576"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (18 * 21 + 8) * 4 = 2544."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "908",
      "964",
      "1540",
      "880"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 59% density, total edges = 908."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][15] starts at base address 1600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[22][5]?",
    "options": [
      "2940",
      "2040",
      "3000",
      "2932"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (22 * 15 + 5) * 4 = 2940."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "309",
      "277",
      "496",
      "261"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 56% density, total edges = 277."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Unsorted Array?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Unsorted Array, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 39, 50, 43, 11, 9, 5, 18, 23, 11, 11, 11], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "176",
      "132",
      "133",
      "150"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 133."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][20] starts at base address 2500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[8][18]?",
    "options": [
      "3908",
      "3924",
      "3652",
      "4084"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (8 * 20 + 18) * 8 = 3924."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 1, 17, 27, 27, 9, 32, 9, 30], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "81",
      "131",
      "148",
      "140"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 131."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Regular BST (worst case)?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Regular BST (worst case), performing a 'Search' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][18] starts at base address 2100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[13][16]?",
    "options": [
      "2368",
      "2348",
      "2350",
      "2308"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (13 * 18 + 16) * 1 = 2350."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][39] starts at base address 1900 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[8][24]?",
    "options": [
      "2220",
      "2233",
      "2218",
      "2092"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (24 * 13 + 8) * 1 = 2220."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 59 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "552",
      "1711",
      "581",
      "640"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 59*(58)/2 = 1711. At 34% density, total edges = 581."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 22, 10, 33, 3, 39, 13, 4, 2], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "142",
      "124",
      "159",
      "146"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 142."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 38 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "471",
      "452",
      "509",
      "703"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 38*(37)/2 = 703. At 67% density, total edges = 471."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][36] starts at base address 1800 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[6][7]?",
    "options": [
      "2246",
      "2318",
      "2242",
      "1884"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (6 * 36 + 7) * 2 = 2246."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 29, 48, 13, 5], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "92",
      "109",
      "140",
      "77"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [44, 1, 30, 42, 16, 32, 46], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "159",
      "134",
      "117",
      "73"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 117."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Regular BST (worst case)?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Regular BST (worst case), performing a 'Access' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "1485",
      "396",
      "314",
      "341"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 23% density, total edges = 341."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][31] starts at base address 1400 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[12][18]?",
    "options": [
      "2736",
      "2744",
      "2264",
      "2816"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (18 * 18 + 12) * 4 = 2744."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Sorted Array?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Sorted Array, performing a 'Search' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 30, 27, 28, 4, 27, 40], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "116",
      "122",
      "149",
      "139"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 122."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 30, 16, 23, 16], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "46",
      "104",
      "88",
      "105"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 88."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][37] starts at base address 1500 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][34]?",
    "options": [
      "2588",
      "2592",
      "1636",
      "2624"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (34 * 16 + 2) * 2 = 2592."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 34, 4, 27, 50], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "88",
      "38",
      "71",
      "75"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 71."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a AVL Tree?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For AVL Tree, performing a 'Deletion' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 3, 2, 29, 46], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "84",
      "101",
      "113",
      "34"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 84."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 21%, how many edges are present in G?",
    "options": [
      "110",
      "94",
      "143",
      "528"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 21% density, total edges = 110."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][25] starts at base address 1200 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[1][9]?",
    "options": [
      "1209",
      "1264",
      "1271",
      "1262"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (9 * 7 + 1) * 1 = 1264."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][13] starts at base address 1000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][6]?",
    "options": [
      "1352",
      "1336",
      "1408",
      "1096"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (6 * 7 + 2) * 8 = 1352."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 32, 32, 18, 21, 15, 14, 25], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "159",
      "138",
      "155",
      "103"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 138."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][28] starts at base address 1600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[1][14]?",
    "options": [
      "1760",
      "1880",
      "1656",
      "1768"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (1 * 28 + 14) * 4 = 1768."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "139",
      "106",
      "117",
      "231"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 51% density, total edges = 117."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 38 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "459",
      "478",
      "703",
      "516"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 38*(37)/2 = 703. At 68% density, total edges = 478."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][26] starts at base address 2000 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[14][5]?",
    "options": [
      "2367",
      "2070",
      "2369",
      "2395"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (14 * 26 + 5) * 1 = 2369."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [22, 13, 21, 30, 6, 49, 34], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "70",
      "98",
      "92",
      "109"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "352",
      "280",
      "1128",
      "304"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 27% density, total edges = 304."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "425",
      "469",
      "946",
      "403"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 45% density, total edges = 425."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 26, 32, 10, 19, 39, 4, 8, 4], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "117",
      "134",
      "68",
      "127"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 117."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][19] starts at base address 2200 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[3][16]?",
    "options": [
      "2392",
      "2568",
      "2484",
      "2492"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (3 * 19 + 16) * 4 = 2492."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "24",
      "45",
      "39",
      "29"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 66% density, total edges = 29."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "503",
      "903",
      "439",
      "460"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 51% density, total edges = 460."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][35] starts at base address 1600 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[3][8]?",
    "options": [
      "2264",
      "2344",
      "1792",
      "2248"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (8 * 10 + 3) * 8 = 2264."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 50 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "1225",
      "416",
      "391",
      "466"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 50*(49)/2 = 1225. At 34% density, total edges = 416."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 4, 17, 2, 16, 46, 18, 2, 40, 44], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "106",
      "152",
      "85",
      "123"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 106."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][36] starts at base address 1000 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[6][19]?",
    "options": [
      "1316",
      "1312",
      "1332",
      "1228"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (19 * 8 + 6) * 2 = 1316."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 4, 22, 37, 9, 20, 48, 27, 5, 7, 9, 20], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "98",
      "118",
      "63",
      "81"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 81."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 27, 1, 22, 16, 46, 6], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "109",
      "114",
      "92",
      "50"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "28",
      "39",
      "23",
      "55"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 51% density, total edges = 28."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Singly Linked List?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "For Singly Linked List, performing a 'Deletion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "64",
      "120",
      "40",
      "48"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 40% density, total edges = 48."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "679",
      "1596",
      "594",
      "622"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 39% density, total edges = 622."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][32] starts at base address 2900 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[18][11]?",
    "options": [
      "4070",
      "4138",
      "3296",
      "4074"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (18 * 32 + 11) * 2 = 4074."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 39, 17, 12, 5, 28, 46, 34, 22, 9, 36, 22], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "243",
      "209",
      "226",
      "181"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 209."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a AVL Tree?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, performing a 'Access' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [25, 39, 28, 12, 27, 23], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "116",
      "79",
      "121",
      "104"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 104."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][37] starts at base address 2200 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[13][16]?",
    "options": [
      "3276",
      "3268",
      "3032",
      "3340"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (16 * 16 + 13) * 4 = 3276."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][30] starts at base address 1100 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[2][11]?",
    "options": [
      "1588",
      "1188",
      "1548",
      "1540"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (11 * 10 + 2) * 4 = 1548."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "204",
      "174",
      "435",
      "159"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 40% density, total edges = 174."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 8, 5, 29, 6, 39, 21, 34, 12, 20], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "42",
      "55",
      "84",
      "72"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 55."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 5, 5, 14, 4, 16, 43, 8, 44], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "141",
      "95",
      "132",
      "124"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 124."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 50 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "895",
      "845",
      "820",
      "1225"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 50*(49)/2 = 1225. At 69% density, total edges = 845."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 42, 28, 45, 12, 42, 29, 34, 45], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "185",
      "127",
      "190",
      "173"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 173."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 13, 27, 14, 42, 31, 23, 49, 18, 18, 13], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "40",
      "84",
      "74",
      "57"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 57."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 9, 48, 26, 18, 45], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "77",
      "57",
      "94",
      "125"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 77."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 6, 18, 31, 39, 37], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "137",
      "94",
      "159",
      "120"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 120."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][12] starts at base address 2100 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[24][1]?",
    "options": [
      "2200",
      "2148",
      "2252",
      "2196"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2100 + (1 * 26 + 24) * 2 = 2200."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 43, 30, 33, 42, 30, 1, 38], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "254",
      "224",
      "178",
      "241"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 224."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][20] starts at base address 2600 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[2][5]?",
    "options": [
      "2665",
      "2643",
      "2645",
      "2610"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (2 * 20 + 5) * 1 = 2645."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "161",
      "465",
      "207",
      "176"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 38% density, total edges = 176."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [45, 36, 31, 34, 38], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "163",
      "146",
      "101",
      "180"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 146."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 53 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "1378",
      "358",
      "332",
      "411"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 53*(52)/2 = 1378. At 26% density, total edges = 358."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][26] starts at base address 2700 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[12][3]?",
    "options": [
      "3041",
      "2736",
      "3015",
      "3013"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (12 * 26 + 3) * 1 = 3015."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 18, 22, 33, 15, 35, 42, 5, 44], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "156",
      "123",
      "139",
      "174"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 139."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 46, 29, 49, 3, 45, 25, 40, 21, 8, 3, 10], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "148",
      "134",
      "131",
      "127"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 131."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][15] starts at base address 1500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][1]?",
    "options": [
      "1516",
      "1748",
      "1732",
      "1868"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (2 * 15 + 1) * 8 = 1748."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 24, 36, 30, 45, 40, 32], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "81",
      "64",
      "100",
      "60"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 64."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][12] starts at base address 1500 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[4][8]?",
    "options": [
      "1608",
      "1612",
      "1636",
      "1564"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (4 * 12 + 8) * 2 = 1612."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "325",
      "172",
      "185",
      "211"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 57% density, total edges = 185."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 53 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "797",
      "744",
      "1378",
      "718"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 53*(52)/2 = 1378. At 54% density, total edges = 744."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "52",
      "78",
      "39",
      "33"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 51% density, total edges = 39."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "34",
      "47",
      "78",
      "28"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 44% density, total edges = 34."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 16, 36, 17, 37, 40], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "156",
      "173",
      "193",
      "106"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 156."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [47, 6, 41, 37, 19, 45, 38, 29, 8, 26, 26, 11], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "287",
      "278",
      "223",
      "270"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 270."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][24] starts at base address 1200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[9][18]?",
    "options": [
      "1524",
      "1650",
      "1674",
      "1646"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (18 * 12 + 9) * 2 = 1650."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 23 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "60",
      "253",
      "83",
      "49"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 23*(22)/2 = 253. At 24% density, total edges = 60."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][34] starts at base address 2600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][7]?",
    "options": [
      "2736",
      "2628",
      "2744",
      "2764"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (7 * 5 + 1) * 4 = 2744."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 25, 42, 49, 9, 16, 8, 26, 39], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "191",
      "175",
      "208",
      "217"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 191."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][34] starts at base address 2700 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[8][6]?",
    "options": [
      "3116",
      "3108",
      "2892",
      "3180"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (6 * 16 + 8) * 4 = 3116."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 47, 19, 40, 8, 41], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "96",
      "113",
      "115",
      "66"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 96."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][33] starts at base address 2200 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[3][26]?",
    "options": [
      "2278",
      "2986",
      "2955",
      "2957"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (26 * 29 + 3) * 1 = 2957."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 38, 16, 4, 12, 32, 6, 13, 10, 38, 37, 24], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "157",
      "144",
      "161",
      "121"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 144."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 8, 6, 30, 17, 49, 4], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "26",
      "37",
      "20",
      "14"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 20."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [8, 12, 23, 48, 31, 44, 11, 21], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "153",
      "139",
      "122",
      "114"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 122."
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
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 35, 27, 10, 10, 44, 13, 26], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "126",
      "180",
      "163",
      "207"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 163."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][15] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[5][2]?",
    "options": [
      "2620",
      "2754",
      "2750",
      "2784"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (5 * 15 + 2) * 2 = 2754."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][20] starts at base address 2900 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[22][5]?",
    "options": [
      "3120",
      "3830",
      "3786",
      "3790"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (22 * 20 + 5) * 2 = 3790."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 65%, how many edges are present in G?",
    "options": [
      "749",
      "702",
      "1081",
      "679"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 65% density, total edges = 702."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][22] starts at base address 1800 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[5][10]?",
    "options": [
      "1900",
      "2040",
      "2084",
      "2036"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (5 * 22 + 10) * 2 = 2040."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][29] starts at base address 1100 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[13][17]?",
    "options": [
      "1542",
      "1946",
      "1884",
      "1888"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (13 * 29 + 17) * 2 = 1888."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 22, 1, 28, 17, 40, 17, 28, 25, 11, 9], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "189",
      "216",
      "205",
      "222"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 205."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][21] starts at base address 2700 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[13][19]?",
    "options": [
      "2947",
      "3036",
      "3053",
      "3034"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (19 * 17 + 13) * 1 = 3036."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 34 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "404",
      "353",
      "370",
      "561"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 34*(33)/2 = 561. At 66% density, total edges = 370."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][12] starts at base address 1500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[14][6]?",
    "options": [
      "2172",
      "2988",
      "2876",
      "2892"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (14 * 12 + 6) * 8 = 2892."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][10] starts at base address 1000 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[5][6]?",
    "options": [
      "1528",
      "1432",
      "1448",
      "1240"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (5 * 10 + 6) * 8 = 1448."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][12] starts at base address 1500 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[13][8]?",
    "options": [
      "2332",
      "2972",
      "2820",
      "2804"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (8 * 19 + 13) * 8 = 2820."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 6, 26, 3, 50, 15], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "130",
      "163",
      "113",
      "85"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 113."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "49",
      "91",
      "63",
      "42"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 54% density, total edges = 49."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "300",
      "54",
      "91",
      "66"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 22% density, total edges = 66."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 16, 32, 42, 11, 47, 15], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "106",
      "148",
      "123",
      "90"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 106."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][33] starts at base address 2300 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[8][15]?",
    "options": [
      "5004",
      "3260",
      "4988",
      "5180"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (15 * 22 + 8) * 8 = 5004."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "141",
      "113",
      "99",
      "378"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 30% density, total edges = 113."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "36",
      "47",
      "55",
      "31"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 66% density, total edges = 36."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][32] starts at base address 1900 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[2][2]?",
    "options": [
      "1972",
      "1916",
      "1964",
      "2004"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (2 * 8 + 2) * 4 = 1972."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "990",
      "272",
      "205",
      "227"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 23% density, total edges = 227."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][19] starts at base address 1400 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[6][6]?",
    "options": [
      "1436",
      "1452",
      "1454",
      "1462"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (6 * 8 + 6) * 1 = 1454."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "397",
      "348",
      "528",
      "364"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 69% density, total edges = 364."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][25] starts at base address 2100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[3][5]?",
    "options": [
      "2178",
      "2205",
      "2180",
      "2115"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (3 * 25 + 5) * 1 = 2180."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][39] starts at base address 1000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[9][29]?",
    "options": [
      "7552",
      "7320",
      "3088",
      "7336"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (29 * 27 + 9) * 8 = 7336."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][26] starts at base address 1000 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[13][13]?",
    "options": [
      "2352",
      "4016",
      "3808",
      "3792"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (13 * 26 + 13) * 8 = 3808."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 50, 4, 3, 6, 40, 33, 29], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "73",
      "54",
      "60",
      "56"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 56."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 13, 8, 7, 5, 20, 7, 40, 49, 50, 48], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "86",
      "60",
      "79",
      "96"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 79."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 28, 30, 49, 34], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "107",
      "163",
      "114",
      "131"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 114."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][34] starts at base address 1000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][32]?",
    "options": [
      "2720",
      "1128",
      "2660",
      "2668"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (32 * 13 + 1) * 4 = 2668."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 49, 17, 47, 24, 42, 17, 25], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "251",
      "196",
      "251",
      "234"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 234."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 4, 49, 50, 40, 26], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "103",
      "53",
      "152",
      "120"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 103."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][24] starts at base address 2600 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[11][16]?",
    "options": [
      "2880",
      "2776",
      "2878",
      "2904"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (11 * 24 + 16) * 1 = 2880."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][20] starts at base address 1900 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[12][4]?",
    "options": [
      "2012",
      "1948",
      "2037",
      "2010"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (4 * 25 + 12) * 1 = 2012."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][35] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[22][14]?",
    "options": [
      "3216",
      "4238",
      "4168",
      "4164"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (22 * 35 + 14) * 2 = 4168."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "820",
      "410",
      "390",
      "451"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 50% density, total edges = 410."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "210",
      "496",
      "162",
      "178"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 36% density, total edges = 178."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 7, 2, 15, 2, 1, 4, 25], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "49",
      "66",
      "51",
      "26"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 49."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][29] starts at base address 1800 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[3][9]?",
    "options": [
      "2624",
      "2528",
      "2544",
      "2016"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (9 * 10 + 3) * 8 = 2544."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][38] starts at base address 2500 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[13][29]?",
    "options": [
      "3254",
      "3914",
      "3918",
      "3966"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (29 * 24 + 13) * 2 = 3918."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][23] starts at base address 1900 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[12][15]?",
    "options": [
      "2900",
      "2972",
      "2908",
      "2620"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (15 * 16 + 12) * 4 = 2908."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "360",
      "401",
      "340",
      "820"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 44% density, total edges = 360."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][26] starts at base address 1100 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][18]?",
    "options": [
      "1868",
      "1388",
      "1660",
      "1644"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (2 * 26 + 18) * 8 = 1660."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][32] starts at base address 2300 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[5][13]?",
    "options": [
      "2711",
      "2680",
      "2365",
      "2682"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (13 * 29 + 5) * 1 = 2682."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][30] starts at base address 2200 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[7][15]?",
    "options": [
      "2620",
      "3100",
      "3220",
      "3092"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (7 * 30 + 15) * 4 = 3100."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "255",
      "238",
      "595",
      "290"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 43% density, total edges = 255."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 48, 13, 30, 31, 28, 19, 8, 27, 7, 43], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "244",
      "261",
      "211",
      "251"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 244."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][21] starts at base address 2000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[9][5]?",
    "options": [
      "2636",
      "2528",
      "2536",
      "2180"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (5 * 25 + 9) * 4 = 2536."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 41, 35, 21, 28, 30, 10, 8, 46, 22], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "229",
      "173",
      "212",
      "220"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 212."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 41, 15, 37, 2, 15], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "132",
      "130",
      "95",
      "147"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 130."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 38, 37, 35, 23], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "75",
      "126",
      "146",
      "109"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 109."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 38, 1, 4, 8, 39, 17, 25, 8, 25], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "127",
      "110",
      "90",
      "149"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 110."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][32] starts at base address 1000 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[2][16]?",
    "options": [
      "1466",
      "1495",
      "1464",
      "1032"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (16 * 29 + 2) * 1 = 1466."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][28] starts at base address 1600 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[1][9]?",
    "options": [
      "1609",
      "1741",
      "1727",
      "1725"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (9 * 14 + 1) * 1 = 1727."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 10, 48, 33, 5, 20, 50, 36, 40, 41], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "147",
      "116",
      "164",
      "167"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 147."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 41, 48, 21, 33, 50], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "110",
      "140",
      "161",
      "157"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 140."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 8, 45, 30, 17], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "119",
      "106",
      "83",
      "89"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 89."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "59",
      "120",
      "83",
      "67"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 56% density, total edges = 67."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "666",
      "153",
      "190",
      "135"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 23% density, total edges = 153."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][12] starts at base address 2500 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[3][5]?",
    "options": [
      "2772",
      "2560",
      "2764",
      "2824"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (5 * 13 + 3) * 4 = 2772."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "483",
      "442",
      "422",
      "820"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 54% density, total edges = 442."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][17] starts at base address 2000 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[22][6]?",
    "options": [
      "2264",
      "2388",
      "2450",
      "2392"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (6 * 29 + 22) * 2 = 2392."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 10, 24, 50, 8, 21, 33], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "84",
      "168",
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
    "question": "A 2D array A[5][34] starts at base address 1200 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[3][5]?",
    "options": [
      "1215",
      "1233",
      "1226",
      "1228"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (5 * 5 + 3) * 1 = 1228."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "95",
      "104",
      "171",
      "123"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 61% density, total edges = 104."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 27, 15, 38, 43, 45, 21], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "103",
      "80",
      "141",
      "120"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 103."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][36] starts at base address 2200 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[7][32]?",
    "options": [
      "3328",
      "3096",
      "3336",
      "3480"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (7 * 36 + 32) * 4 = 3336."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 12, 13, 26, 5, 30, 3, 42, 43, 40, 3, 8], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "217",
      "255",
      "272",
      "258"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 255."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [47, 42, 16, 14, 30, 14, 33, 25, 45, 48], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "166",
      "102",
      "149",
      "179"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 149."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 20, 11, 14, 29, 3, 24, 42], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "111",
      "77",
      "108",
      "125"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 108."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 18, 25, 33, 32, 20, 23], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "94",
      "76",
      "110",
      "77"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 77."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "487",
      "400",
      "429",
      "1653"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 26% density, total edges = 429."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "24",
      "34",
      "45",
      "19"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 55% density, total edges = 24."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][36] starts at base address 2600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][4]?",
    "options": [
      "4072",
      "3768",
      "3784",
      "2728"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (4 * 36 + 4) * 8 = 3784."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][33] starts at base address 2000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[3][1]?",
    "options": [
      "2248",
      "2136",
      "2024",
      "2120"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (1 * 14 + 3) * 8 = 2136."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][21] starts at base address 1100 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[1][8]?",
    "options": [
      "1684",
      "1620",
      "1604",
      "1164"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (8 * 8 + 1) * 8 = 1620."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][31] starts at base address 2900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][28]?",
    "options": [
      "3620",
      "3868",
      "3604",
      "3348"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (2 * 31 + 28) * 8 = 3620."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "944",
      "917",
      "998",
      "1431"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 66% density, total edges = 944."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][15] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[1][5]?",
    "options": [
      "2610",
      "2636",
      "2640",
      "2670"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (1 * 15 + 5) * 2 = 2640."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "1128",
      "675",
      "747",
      "699"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 62% density, total edges = 699."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 7, 44, 33, 17, 15, 31, 16, 12, 28, 8], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "243",
      "254",
      "226",
      "203"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 226."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "528",
      "353",
      "337",
      "386"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 67% density, total edges = 353."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 38, 43, 38, 11, 23, 6, 37], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "165",
      "159",
      "130",
      "148"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 148."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 47, 35, 23, 6, 49, 28, 49, 1, 45], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "145",
      "111",
      "128",
      "134"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 128."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][26] starts at base address 1200 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[10][14]?",
    "options": [
      "2128",
      "2200",
      "2136",
      "1760"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (14 * 16 + 10) * 4 = 2136."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 41, 20, 7, 9, 4, 47, 5, 34], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "85",
      "81",
      "102",
      "89"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 85."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "21",
      "31",
      "45",
      "16"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 48% density, total edges = 21."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 53 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "854",
      "907",
      "828",
      "1378"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 53*(52)/2 = 1378. At 62% density, total edges = 854."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "494",
      "563",
      "1035",
      "517"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 50% density, total edges = 517."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 25, 29, 35, 41, 37, 35, 40, 44, 31], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "239",
      "204",
      "202",
      "221"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 204."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 49 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "529",
      "1176",
      "578",
      "505"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 49*(48)/2 = 1176. At 45% density, total edges = 529."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Unsorted Array?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "For Unsorted Array, performing a 'Deletion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "231",
      "102",
      "113",
      "135"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 49% density, total edges = 113."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 34, 28, 19, 12, 4, 15, 34, 35, 18], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "193",
      "159",
      "176",
      "146"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 159."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 19, 19, 13, 13, 44, 38, 32, 35, 49], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "226",
      "258",
      "178",
      "243"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 226."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][28] starts at base address 2500 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[13][5]?",
    "options": [
      "2867",
      "2565",
      "2869",
      "2897"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (13 * 28 + 5) * 1 = 2869."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "406",
      "91",
      "105",
      "134"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 26% density, total edges = 105."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 4, 34, 17, 9, 29, 11, 24, 33, 7], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "179",
      "128",
      "172",
      "155"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 155."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 34 vertices. If the graph connectivity density is 20%, how many edges are present in G?",
    "options": [
      "112",
      "146",
      "95",
      "561"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 34*(33)/2 = 561. At 20% density, total edges = 112."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "139",
      "124",
      "170",
      "465"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 30% density, total edges = 139."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][29] starts at base address 2500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[12][2]?",
    "options": [
      "2558",
      "2584",
      "2560",
      "2524"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (2 * 24 + 12) * 1 = 2560."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][11] starts at base address 1100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[5][8]?",
    "options": [
      "1140",
      "1174",
      "1161",
      "1163"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (5 * 11 + 8) * 1 = 1163."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [44, 16, 6, 39, 1, 2, 22], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "64",
      "110",
      "108",
      "125"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 108."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][20] starts at base address 2700 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[1][9]?",
    "options": [
      "2808",
      "2896",
      "2816",
      "2736"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (1 * 20 + 9) * 4 = 2816."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 24 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "276",
      "84",
      "60",
      "48"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 24*(23)/2 = 276. At 22% density, total edges = 60."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [41, 4, 5, 10, 48, 4, 32, 49, 16, 21, 31, 45], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "67",
      "108",
      "156",
      "125"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 108."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][34] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[17][8]?",
    "options": [
      "3772",
      "3768",
      "2872",
      "3840"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (17 * 34 + 8) * 2 = 3772."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][19] starts at base address 2900 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[21][8]?",
    "options": [
      "4716",
      "4732",
      "4244",
      "4940"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (8 * 26 + 21) * 8 = 4732."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 13, 17, 21, 46, 27], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "51",
      "96",
      "75",
      "92"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 75."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][30] starts at base address 1800 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[9][1]?",
    "options": [
      "1984",
      "2096",
      "1968",
      "1872"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (1 * 14 + 9) * 8 = 1984."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "262",
      "217",
      "195",
      "990"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 22% density, total edges = 217."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][29] starts at base address 1400 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[17][20]?",
    "options": [
      "2080",
      "2274",
      "2270",
      "2316"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (20 * 21 + 17) * 2 = 2274."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][14] starts at base address 2200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[5][3]?",
    "options": [
      "2230",
      "2252",
      "2266",
      "2248"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (3 * 7 + 5) * 2 = 2252."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "66",
      "37",
      "25",
      "19"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 38% density, total edges = 25."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [22, 49, 43, 19, 15, 7, 47, 43, 8, 13], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "162",
      "172",
      "133",
      "155"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 155."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][33] starts at base address 2400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[4][17]?",
    "options": [
      "2549",
      "2547",
      "2468",
      "2582"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (4 * 33 + 17) * 1 = 2549."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][12] starts at base address 1600 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[4][4]?",
    "options": [
      "1650",
      "1616",
      "1652",
      "1664"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (4 * 12 + 4) * 1 = 1652."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 27, 34, 10, 22, 16], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "134",
      "112",
      "93",
      "129"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 112."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 30, 45, 9, 28, 43], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "75",
      "112",
      "129",
      "157"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 112."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][32] starts at base address 1300 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][26]?",
    "options": [
      "2532",
      "2516",
      "2132",
      "2788"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (4 * 32 + 26) * 8 = 2532."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "461",
      "421",
      "780",
      "401"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 54% density, total edges = 421."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "120",
      "55",
      "39",
      "31"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 33% density, total edges = 39."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][29] starts at base address 2100 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[5][13]?",
    "options": [
      "3348",
      "3596",
      "3364",
      "2620"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (5 * 29 + 13) * 8 = 3364."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][26] starts at base address 1700 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[24][15]?",
    "options": [
      "4360",
      "4256",
      "3140",
      "4248"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (24 * 26 + 15) * 4 = 4256."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "43",
      "27",
      "120",
      "19"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 23% density, total edges = 27."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][20] starts at base address 1700 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[1][2]?",
    "options": [
      "2036",
      "1876",
      "1716",
      "1860"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (1 * 20 + 2) * 8 = 1876."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 52 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "716",
      "1326",
      "690",
      "768"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 52*(51)/2 = 1326. At 54% density, total edges = 716."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][14] starts at base address 2800 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[14][12]?",
    "options": [
      "3212",
      "3244",
      "3216",
      "3136"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (14 * 14 + 12) * 2 = 3216."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][13] starts at base address 2500 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[23][7]?",
    "options": [
      "2934",
      "2994",
      "2822",
      "2938"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (7 * 28 + 23) * 2 = 2938."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][32] starts at base address 2200 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[8][8]?",
    "options": [
      "2408",
      "2406",
      "2264",
      "2433"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (8 * 25 + 8) * 1 = 2408."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][17] starts at base address 1800 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[5][1]?",
    "options": [
      "1884",
      "1844",
      "1820",
      "1852"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (1 * 8 + 5) * 4 = 1852."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "231",
      "903",
      "295",
      "252"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 28% density, total edges = 252."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "265",
      "202",
      "861",
      "223"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 26% density, total edges = 223."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "102",
      "122",
      "92",
      "190"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 54% density, total edges = 102."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][25] starts at base address 1800 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[7][2]?",
    "options": [
      "1912",
      "2128",
      "2144",
      "2288"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (2 * 18 + 7) * 8 = 2144."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][21] starts at base address 1200 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[4][1]?",
    "options": [
      "1344",
      "1272",
      "1232",
      "1288"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (1 * 7 + 4) * 8 = 1288."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "333",
      "368",
      "595",
      "316"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 56% density, total edges = 333."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 50 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "1225",
      "674",
      "624",
      "599"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 50*(49)/2 = 1225. At 51% density, total edges = 624."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [45, 24, 15, 25, 48], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "64",
      "109",
      "134",
      "126"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 109."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][35] starts at base address 2100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[1][3]?",
    "options": [
      "2120",
      "2103",
      "2122",
      "2129"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2100 + (3 * 7 + 1) * 1 = 2122."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [9, 12, 40, 47, 20, 14, 46, 30], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "156",
      "159",
      "133",
      "142"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 142."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][36] starts at base address 2900 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[7][31]?",
    "options": [
      "5152",
      "5160",
      "5232",
      "3768"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (31 * 18 + 7) * 4 = 5160."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 40, 25, 18, 45, 27, 31, 20, 28, 3, 46], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "289",
      "272",
      "234",
      "300"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 272."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][38] starts at base address 2300 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[1][22]?",
    "options": [
      "4244",
      "2476",
      "4228",
      "4332"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (22 * 11 + 1) * 8 = 4244."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 16, 24, 41, 32, 9, 21], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "110",
      "40",
      "86",
      "103"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 86."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 21, 49, 25, 10, 38, 46, 34, 50], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "242",
      "259",
      "225",
      "223"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 225."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][38] starts at base address 1300 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[8][14]?",
    "options": [
      "1596",
      "1524",
      "1616",
      "1592"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (14 * 10 + 8) * 2 = 1596."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][33] starts at base address 2800 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][4]?",
    "options": [
      "3272",
      "3396",
      "2864",
      "3280"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (4 * 29 + 4) * 4 = 3280."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][35] starts at base address 1200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[1][31]?",
    "options": [
      "1570",
      "1586",
      "1262",
      "1574"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (31 * 6 + 1) * 2 = 1574."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Sorted Array?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Sorted Array, performing a 'Insertion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][21] starts at base address 1600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[18][5]?",
    "options": [
      "4648",
      "4832",
      "2320",
      "4664"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (18 * 21 + 5) * 8 = 4664."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "183",
      "666",
      "128",
      "146"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 22% density, total edges = 146."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][27] starts at base address 2900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[11][5]?",
    "options": [
      "3222",
      "3168",
      "3010",
      "3172"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (5 * 25 + 11) * 2 = 3172."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][10] starts at base address 2200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[9][3]?",
    "options": [
      "2326",
      "2322",
      "2362",
      "2254"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (3 * 18 + 9) * 2 = 2326."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][10] starts at base address 1600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[18][2]?",
    "options": [
      "3040",
      "3056",
      "1888",
      "3136"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (18 * 10 + 2) * 8 = 3056."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][16] starts at base address 2500 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][10]?",
    "options": [
      "3028",
      "2660",
      "3036",
      "3088"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (10 * 13 + 4) * 4 = 3036."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 48, 40, 39, 36, 44, 4, 11], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "277",
      "211",
      "264",
      "260"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 260."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "485",
      "463",
      "530",
      "990"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 49% density, total edges = 485."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "700",
      "727",
      "782",
      "1485"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 49% density, total edges = 727."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "73",
      "91",
      "153",
      "64"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 48% density, total edges = 73."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 44, 9, 47, 9, 15, 32, 42], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "53",
      "65",
      "56",
      "73"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 56."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [47, 6, 28, 21, 48, 6, 28, 11], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "198",
      "150",
      "167",
      "103"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 150."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][22] starts at base address 2000 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[7][19]?",
    "options": [
      "2171",
      "2195",
      "2173",
      "2133"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (7 * 22 + 19) * 1 = 2173."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 43, 11, 3, 11, 50, 13, 40, 37, 37, 38, 15], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "84",
      "90",
      "73",
      "54"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 73."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "918",
      "834",
      "862",
      "1540"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 56% density, total edges = 862."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][23] starts at base address 2400 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[10][21]?",
    "options": [
      "3240",
      "3396",
      "3404",
      "3496"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (10 * 23 + 21) * 4 = 3404."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "666",
      "368",
      "386",
      "423"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 58% density, total edges = 386."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][23] starts at base address 2100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[7][13]?",
    "options": [
      "2339",
      "2191",
      "2359",
      "2341"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2100 + (13 * 18 + 7) * 1 = 2341."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][23] starts at base address 1100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[11][15]?",
    "options": [
      "1447",
      "1265",
      "1426",
      "1424"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (15 * 21 + 11) * 1 = 1426."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "48",
      "136",
      "31",
      "23"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 23% density, total edges = 31."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 5, 16, 37, 1, 24], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "64",
      "81",
      "59",
      "65"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 64."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][28] starts at base address 2700 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[2][10]?",
    "options": [
      "2888",
      "2740",
      "2832",
      "2828"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (2 * 28 + 10) * 2 = 2832."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][31] starts at base address 2300 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[5][1]?",
    "options": [
      "2340",
      "3532",
      "3796",
      "3548"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (5 * 31 + 1) * 8 = 3548."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 20, 21, 41, 24], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "149",
      "82",
      "125",
      "108"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 108."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 2, 34, 48, 46, 40, 2, 49, 34, 45, 38], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "227",
      "250",
      "170",
      "210"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 210."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "780",
      "475",
      "515",
      "455"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 61% density, total edges = 475."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][20] starts at base address 1100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[9][11]?",
    "options": [
      "1263",
      "1277",
      "1199",
      "1261"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (11 * 14 + 9) * 1 = 1263."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [32, 23, 4, 48, 24, 36, 7, 10, 22], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "135",
      "203",
      "167",
      "184"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 167."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][23] starts at base address 2400 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][20]?",
    "options": [
      "2720",
      "3376",
      "3424",
      "3368"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (20 * 12 + 4) * 4 = 3376."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [14, 19, 40, 25, 6, 39, 50, 23, 15, 43, 16, 30], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "216",
      "202",
      "239",
      "233"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 216."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][35] starts at base address 1200 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[10][23]?",
    "options": [
      "1946",
      "1942",
      "2016",
      "1660"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (10 * 35 + 23) * 2 = 1946."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 25, 9, 7, 8, 21, 9], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "96",
      "70",
      "75",
      "92"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 75."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "332",
      "280",
      "297",
      "595"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 50% density, total edges = 297."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "295",
      "1081",
      "248",
      "225"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 23% density, total edges = 248."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "1126",
      "1069",
      "1596",
      "1041"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 67% density, total edges = 1069."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "31",
      "66",
      "49",
      "37"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 57% density, total edges = 37."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "35",
      "16",
      "78",
      "22"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 29% density, total edges = 22."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 52 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "1326",
      "411",
      "437",
      "489"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 52*(51)/2 = 1326. At 33% density, total edges = 437."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][10] starts at base address 2500 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[2][5]?",
    "options": [
      "2570",
      "2546",
      "2550",
      "2520"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (2 * 10 + 5) * 2 = 2550."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][28] starts at base address 1700 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[3][18]?",
    "options": [
      "2200",
      "1808",
      "2174",
      "2170"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (18 * 13 + 3) * 2 = 2174."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][36] starts at base address 1100 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[19][10]?",
    "options": [
      "2620",
      "6940",
      "6652",
      "6636"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (19 * 36 + 10) * 8 = 6652."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "328",
      "1081",
      "281",
      "258"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 26% density, total edges = 281."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 42, 11, 31, 4, 1, 44, 20, 49, 29], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "100",
      "117",
      "84",
      "131"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 100."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "582",
      "820",
      "521",
      "541"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 66% density, total edges = 541."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 45, 29, 22, 9, 12, 10, 30, 21], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "130",
      "113",
      "142",
      "74"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 113."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "425",
      "1081",
      "378",
      "355"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 35% density, total edges = 378."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "40",
      "22",
      "66",
      "28"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 43% density, total edges = 28."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 46, 34, 38, 49, 9, 48, 7, 15, 8], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "227",
      "167",
      "210",
      "259"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 210."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][17] starts at base address 2200 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[9][9]?",
    "options": [
      "3496",
      "2848",
      "3632",
      "3480"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (9 * 17 + 9) * 8 = 3496."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][10] starts at base address 1200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][4]?",
    "options": [
      "1348",
      "1216",
      "1384",
      "1344"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (4 * 18 + 2) * 2 = 1348."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 22, 49, 50, 29, 7, 8, 48], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "71",
      "159",
      "127",
      "110"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 110."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "1081",
      "236",
      "306",
      "259"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 24% density, total edges = 259."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "136",
      "39",
      "47",
      "64"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 35% density, total edges = 47."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][16] starts at base address 1900 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[1][14]?",
    "options": [
      "1928",
      "1930",
      "1946",
      "1914"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (1 * 16 + 14) * 1 = 1930."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][32] starts at base address 1600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[7][15]?",
    "options": [
      "2684",
      "2548",
      "2020",
      "2556"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (7 * 32 + 15) * 4 = 2556."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 15 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "86",
      "105",
      "64",
      "71"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 15*(14)/2 = 105. At 68% density, total edges = 71."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 15, 12, 20, 35], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "80",
      "83",
      "47",
      "63"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 63."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 35, 7, 43, 28, 16], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "180",
      "163",
      "113",
      "191"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 163."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 48, 15, 45, 42, 27, 4, 33, 32, 8], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "237",
      "253",
      "220",
      "214"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 220."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][12] starts at base address 1900 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[6][4]?",
    "options": [
      "1988",
      "1976",
      "1924",
      "1974"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (6 * 12 + 4) * 1 = 1976."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 43, 25, 37, 37, 15, 39, 5], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "201",
      "157",
      "186",
      "203"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 186."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 46%, how many edges are present in G?",
    "options": [
      "595",
      "273",
      "256",
      "308"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 46% density, total edges = 273."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "88",
      "153",
      "79",
      "106"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 58% density, total edges = 88."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][33] starts at base address 2800 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[9][23]?",
    "options": [
      "3292",
      "3007",
      "3290",
      "3313"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (23 * 21 + 9) * 1 = 3292."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 64%, how many edges are present in G?",
    "options": [
      "479",
      "499",
      "539",
      "780"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 64% density, total edges = 499."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 5, 41, 47, 22, 2, 22], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "79",
      "96",
      "120",
      "46"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 79."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][31] starts at base address 2200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[13][2]?",
    "options": [
      "2302",
      "2252",
      "2346",
      "2306"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (2 * 20 + 13) * 2 = 2306."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 33, 5, 36, 43, 18, 30, 6, 23, 17, 2, 16], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "211",
      "231",
      "214",
      "231"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 214."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][12] starts at base address 2500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][4]?",
    "options": [
      "2612",
      "2604",
      "2660",
      "2532"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (2 * 12 + 4) * 4 = 2612."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "328",
      "288",
      "780",
      "268"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 37% density, total edges = 288."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 3, 18, 48, 8, 36], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "77",
      "97",
      "114",
      "105"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 97."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][39] starts at base address 2700 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][33]?",
    "options": [
      "3628",
      "3620",
      "2832",
      "3656"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (33 * 7 + 1) * 4 = 3628."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "52",
      "68",
      "120",
      "44"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 44% density, total edges = 52."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "441",
      "511",
      "1081",
      "464"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 43% density, total edges = 464."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "243",
      "285",
      "257",
      "378"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 68% density, total edges = 257."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][28] starts at base address 2300 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[9][13]?",
    "options": [
      "2417",
      "2563",
      "2593",
      "2565"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (9 * 28 + 13) * 1 = 2565."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 8, 41, 24, 21, 34, 14, 24, 32, 29, 9, 19], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "210",
      "217",
      "166",
      "193"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 193."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "149",
      "100",
      "528",
      "116"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 22% density, total edges = 116."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 25, 33, 28, 27, 46, 14, 3, 28, 43, 1], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "214",
      "231",
      "176",
      "217"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 214."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "162",
      "129",
      "231",
      "140"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 61% density, total edges = 140."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 65%, how many edges are present in G?",
    "options": [
      "469",
      "666",
      "432",
      "414"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 65% density, total edges = 432."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 52%, how many edges are present in G?",
    "options": [
      "584",
      "515",
      "538",
      "1035"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 52% density, total edges = 538."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "130",
      "100",
      "85",
      "435"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 23% density, total edges = 100."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "57",
      "91",
      "71",
      "50"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 63% density, total edges = 57."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][10] starts at base address 2200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][4]?",
    "options": [
      "2216",
      "2340",
      "2374",
      "2336"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (4 * 17 + 2) * 2 = 2340."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "267",
      "288",
      "331",
      "903"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 32% density, total edges = 288."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "903",
      "207",
      "250",
      "186"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 23% density, total edges = 207."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [9, 19, 46, 38, 35, 30], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "138",
      "164",
      "182",
      "147"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 147."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "903",
      "638",
      "574",
      "595"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 66% density, total edges = 595."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 19, 41, 8, 39, 2, 21], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "125",
      "68",
      "108",
      "116"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 108."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][35] starts at base address 1800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][1]?",
    "options": [
      "1852",
      "1804",
      "1824",
      "1828"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (1 * 12 + 2) * 2 = 1828."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 4, 40, 11, 44], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "44",
      "94",
      "117",
      "77"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 77."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 40, 28, 22, 15, 19, 44], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "149",
      "132",
      "147",
      "105"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 132."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 11, 7, 42, 31, 23, 34], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "173",
      "179",
      "114",
      "156"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 156."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "47",
      "66",
      "35",
      "29"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 54% density, total edges = 35."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "21",
      "15",
      "66",
      "33"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 32% density, total edges = 21."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 43, 45, 8, 42, 41, 1, 15, 41, 43, 47, 2], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "377",
      "326",
      "347",
      "330"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 330."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][25] starts at base address 1000 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[9][23]?",
    "options": [
      "1492",
      "1546",
      "1414",
      "1496"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (9 * 25 + 23) * 2 = 1496."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 53 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "675",
      "649",
      "1378",
      "728"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 53*(52)/2 = 1378. At 49% density, total edges = 675."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 40, 8, 27, 46, 16], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "105",
      "48",
      "97",
      "114"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 97."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "120",
      "325",
      "81",
      "94"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 29% density, total edges = 94."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "52",
      "34",
      "40",
      "66"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 62% density, total edges = 40."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 35, 5, 46, 41, 47, 9, 25, 44, 41, 3], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "241",
      "232",
      "183",
      "249"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 232."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 21, 33, 1, 9, 26, 19], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "137",
      "121",
      "104",
      "54"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 104."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "780",
      "374",
      "354",
      "414"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 48% density, total edges = 374."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][13] starts at base address 1400 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[5][1]?",
    "options": [
      "1912",
      "2032",
      "1928",
      "1440"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (5 * 13 + 1) * 8 = 1928."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [45, 35, 26, 3, 21, 29], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "151",
      "147",
      "85",
      "130"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 130."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "43",
      "190",
      "53",
      "73"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 28% density, total edges = 53."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 26, 15, 9, 22, 10, 50, 12], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "90",
      "107",
      "99",
      "50"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 90."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 14, 19, 20, 47], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "52",
      "33",
      "71",
      "69"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 52."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][33] starts at base address 2200 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[6][3]?",
    "options": [
      "2218",
      "2285",
      "2287",
      "2314"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (3 * 27 + 6) * 1 = 2287."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 47, 10, 28, 31, 45, 23, 16, 26, 17], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "262",
      "253",
      "226",
      "236"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 236."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 2, 16, 47, 18, 35, 16, 26, 32, 27], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "213",
      "204",
      "160",
      "187"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 187."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 49, 30, 20, 41, 21, 40, 40, 18, 21, 48, 42], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "211",
      "251",
      "201",
      "228"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 211."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [44, 14, 43, 19, 34, 39, 46], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "118",
      "144",
      "101",
      "57"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 101."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 25, 4, 28, 48, 11, 14], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "77",
      "94",
      "81",
      "29"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 77."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][37] starts at base address 1300 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[1][14]?",
    "options": [
      "1812",
      "1774",
      "1328",
      "1778"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (14 * 17 + 1) * 2 = 1778."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "277",
      "378",
      "249",
      "235"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 66% density, total edges = 249."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][17] starts at base address 2100 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[5][1]?",
    "options": [
      "2348",
      "2588",
      "2140",
      "2364"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2100 + (1 * 28 + 5) * 8 = 2364."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 45, 30, 14, 44, 19], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "118",
      "75",
      "135",
      "148"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 31, 27, 2, 23], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "91",
      "60",
      "89",
      "106"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 89."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 15 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "105",
      "28",
      "35",
      "50"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 15*(14)/2 = 105. At 34% density, total edges = 35."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][20] starts at base address 1800 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[9][12]?",
    "options": [
      "3336",
      "3320",
      "2664",
      "3496"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (9 * 20 + 12) * 8 = 3336."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 17, 16, 11, 31, 9, 14, 45, 14, 45, 37, 25], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "98",
      "138",
      "135",
      "121"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 121."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "470",
      "388",
      "415",
      "1485"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 28% density, total edges = 415."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][14] starts at base address 1200 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][7]?",
    "options": [
      "1536",
      "1312",
      "1496",
      "1480"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (7 * 5 + 2) * 8 = 1496."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][36] starts at base address 2000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[1][21]?",
    "options": [
      "3944",
      "3856",
      "3840",
      "2168"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (21 * 11 + 1) * 8 = 3856."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "45",
      "39",
      "78",
      "58"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 58% density, total edges = 45."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 25%, how many edges are present in G?",
    "options": [
      "344",
      "371",
      "1485",
      "426"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 25% density, total edges = 371."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [45, 39, 32, 16, 31, 4, 44, 15, 35, 4, 29], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "171",
      "122",
      "167",
      "184"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 167."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Sorted Array?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Sorted Array, performing a 'Deletion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [8, 40, 11, 4, 4, 13, 19, 44, 10], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "91",
      "118",
      "99",
      "116"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 99."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "1485",
      "418",
      "500",
      "445"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 30% density, total edges = 445."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][24] starts at base address 1800 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[7][4]?",
    "options": [
      "2268",
      "2180",
      "1912",
      "2172"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (4 * 22 + 7) * 4 = 2180."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "380",
      "438",
      "351",
      "1653"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 23% density, total edges = 380."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][37] starts at base address 1800 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[9][16]?",
    "options": [
      "3196",
      "3188",
      "2376",
      "3344"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (9 * 37 + 16) * 4 = 3196."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][12] starts at base address 1700 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[21][1]?",
    "options": [
      "1742",
      "2202",
      "2206",
      "2230"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (21 * 12 + 1) * 2 = 2206."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "728",
      "658",
      "681",
      "1081"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 63% density, total edges = 681."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 4, 25, 26, 14, 3, 16, 24, 37], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "131",
      "117",
      "114",
      "72"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 114."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "559",
      "477",
      "504",
      "1485"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 34% density, total edges = 504."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "29",
      "45",
      "14",
      "19"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 43% density, total edges = 19."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 25%, how many edges are present in G?",
    "options": [
      "190",
      "67",
      "47",
      "37"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 25% density, total edges = 47."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][36] starts at base address 2200 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][22]?",
    "options": [
      "3492",
      "3436",
      "3428",
      "2288"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (22 * 14 + 1) * 4 = 3436."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 46%, how many edges are present in G?",
    "options": [
      "818",
      "731",
      "760",
      "1653"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 46% density, total edges = 760."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "378",
      "260",
      "288",
      "246"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 69% density, total edges = 260."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "144",
      "351",
      "157",
      "184"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 45% density, total edges = 157."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 41%, how many edges are present in G?",
    "options": [
      "13",
      "45",
      "18",
      "28"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 41% density, total edges = 18."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "973",
      "1596",
      "945",
      "1030"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 61% density, total edges = 973."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][21] starts at base address 1000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][2]?",
    "options": [
      "1148",
      "1156",
      "1232",
      "1008"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (2 * 19 + 1) * 4 = 1156."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 46, 29, 7, 7], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "102",
      "75",
      "114",
      "85"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 85."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 13, 20, 36, 24, 2], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "118",
      "94",
      "111",
      "93"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 94."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 41, 36, 21, 18, 29, 41, 32, 9, 24, 31, 24], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "278",
      "271",
      "251",
      "254"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 254."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][38] starts at base address 1900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[21][14]?",
    "options": [
      "2582",
      "2632",
      "2586",
      "2488"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (14 * 23 + 21) * 2 = 2586."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 34 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "241",
      "561",
      "207",
      "190"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 34*(33)/2 = 561. At 37% density, total edges = 207."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][22] starts at base address 1000 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[1][17]?",
    "options": [
      "1235",
      "1220",
      "1017",
      "1222"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (17 * 13 + 1) * 1 = 1222."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 13, 13, 4, 12, 4, 14, 38, 27, 3, 10, 48], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "138",
      "187",
      "177",
      "194"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 177."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 47, 6, 7, 47, 16, 48, 14, 15, 20, 25], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "120",
      "103",
      "53",
      "109"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 103."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "448",
      "508",
      "780",
      "468"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 60% density, total edges = 468."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 46, 37, 15, 8, 14], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "120",
      "122",
      "98",
      "105"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 105."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "480",
      "1035",
      "411",
      "434"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 42% density, total edges = 434."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [8, 2, 36, 36, 15, 7, 49, 20, 12, 20], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "96",
      "111",
      "104",
      "121"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 104."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "66",
      "43",
      "37",
      "55"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 66% density, total edges = 43."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][28] starts at base address 2500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[15][22]?",
    "options": [
      "3820",
      "4380",
      "4260",
      "4268"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (15 * 28 + 22) * 4 = 4268."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][33] starts at base address 1500 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[6][22]?",
    "options": [
      "5420",
      "5404",
      "2556",
      "5596"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (22 * 22 + 6) * 8 = 5420."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][13] starts at base address 1200 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][3]?",
    "options": [
      "1640",
      "1536",
      "1272",
      "1520"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (3 * 13 + 3) * 8 = 1536."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [45, 41, 17, 36, 40, 30], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "219",
      "179",
      "134",
      "196"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 179."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 42, 32, 40, 3, 35, 25, 40, 9, 50, 1, 43], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "283",
      "300",
      "277",
      "284"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 283."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][12] starts at base address 1500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[7][6]?",
    "options": [
      "1542",
      "1609",
      "1607",
      "1626"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (6 * 17 + 7) * 1 = 1609."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "94",
      "76",
      "153",
      "67"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 50% density, total edges = 76."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 37, 35, 14, 17, 5, 31], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "125",
      "72",
      "107",
      "90"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 90."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][25] starts at base address 1700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[12][13]?",
    "options": [
      "3340",
      "3356",
      "3476",
      "2948"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (13 * 15 + 12) * 8 = 3356."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "240",
      "192",
      "208",
      "496"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 42% density, total edges = 208."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "719",
      "1653",
      "661",
      "632"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 40% density, total edges = 661."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][13] starts at base address 2700 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[8][4]?",
    "options": [
      "2732",
      "2808",
      "2821",
      "2806"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (8 * 13 + 4) * 1 = 2808."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 31, 17, 47, 12, 6, 8, 34, 7], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "150",
      "167",
      "158",
      "121"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 150."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][28] starts at base address 1300 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[1][7]?",
    "options": [
      "1356",
      "1580",
      "1564",
      "1804"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (1 * 28 + 7) * 8 = 1580."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][25] starts at base address 2200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][23]?",
    "options": [
      "2292",
      "2710",
      "2732",
      "2706"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (23 * 11 + 2) * 2 = 2710."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 4, 33, 11, 8, 10, 36, 50, 35], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "44",
      "61",
      "77",
      "37"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 44."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 59 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "914",
      "826",
      "1711",
      "855"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 59*(58)/2 = 1711. At 50% density, total edges = 855."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][16] starts at base address 2200 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[2][7]?",
    "options": [
      "2237",
      "2214",
      "2239",
      "2255"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (2 * 16 + 7) * 1 = 2239."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][20] starts at base address 2100 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[7][5]?",
    "options": [
      "2240",
      "2672",
      "2760",
      "2680"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (7 * 20 + 5) * 4 = 2680."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 30, 27, 38, 31, 18, 30, 21, 5, 13, 4, 43], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "76",
      "86",
      "59",
      "57"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 59."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 38 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "283",
      "302",
      "340",
      "703"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 38*(37)/2 = 703. At 43% density, total edges = 302."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 1, 9, 40, 31, 34, 25, 24, 49, 34], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "50",
      "95",
      "118",
      "78"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 78."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 39, 20, 5, 28], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "97",
      "77",
      "94",
      "59"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 77."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "232",
      "496",
      "280",
      "248"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 50% density, total edges = 248."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 38, 39, 48, 2, 31, 13], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "151",
      "112",
      "129",
      "77"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 112."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 38, 19, 50, 28, 34, 43, 34, 50, 31], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "159",
      "109",
      "107",
      "126"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 109."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 43, 13, 31, 50, 4, 20, 24, 37], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "161",
      "181",
      "184",
      "164"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 164."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [45, 44, 11, 3, 21, 22, 36, 11, 47, 15, 23], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "148",
      "210",
      "193",
      "204"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 193."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 13, 1, 8, 15], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "14",
      "64",
      "63",
      "80"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 63."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][36] starts at base address 2500 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[18][20]?",
    "options": [
      "3836",
      "3908",
      "3220",
      "3832"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (18 * 36 + 20) * 2 = 3836."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 11, 27, 29, 18, 8, 46, 36, 15], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "64",
      "91",
      "38",
      "81"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 64."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][27] starts at base address 2800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[4][8]?",
    "options": [
      "3048",
      "3044",
      "2864",
      "3078"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (8 * 15 + 4) * 2 = 3048."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 19, 41, 16, 37, 49, 4, 1], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "193",
      "210",
      "197",
      "166"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 193."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "990",
      "334",
      "356",
      "401"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 36% density, total edges = 356."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 4, 35, 22, 42, 20, 6], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "157",
      "174",
      "123",
      "177"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 157."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "780",
      "296",
      "336",
      "276"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 38% density, total edges = 296."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 4, 36, 40, 25, 3, 8, 9], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "113",
      "130",
      "108",
      "116"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 113."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][29] starts at base address 1600 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][15]?",
    "options": [
      "1814",
      "1660",
      "1828",
      "1810"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (15 * 7 + 2) * 2 = 1814."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "378",
      "201",
      "215",
      "243"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 57% density, total edges = 215."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 15, 17, 2, 28, 44, 41, 24], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "66",
      "51",
      "34",
      "49"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 49."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][38] starts at base address 2800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][17]?",
    "options": [
      "2868",
      "3344",
      "3348",
      "3380"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (17 * 16 + 2) * 2 = 3348."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][37] starts at base address 2500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[1][10]?",
    "options": [
      "2688",
      "2540",
      "2836",
      "2680"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (1 * 37 + 10) * 4 = 2688."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "13",
      "29",
      "18",
      "55"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 33% density, total edges = 18."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "344",
      "820",
      "385",
      "324"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 42% density, total edges = 344."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "321",
      "291",
      "276",
      "435"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 67% density, total edges = 291."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 65%, how many edges are present in G?",
    "options": [
      "120",
      "94",
      "78",
      "70"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 65% density, total edges = 78."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][25] starts at base address 1300 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[16][5]?",
    "options": [
      "1940",
      "2676",
      "2468",
      "2452"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (5 * 26 + 16) * 8 = 2468."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "171",
      "95",
      "67",
      "76"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 45% density, total edges = 76."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "780",
      "570",
      "530",
      "510"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 68% density, total edges = 530."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "666",
      "173",
      "155",
      "210"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 26% density, total edges = 173."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "195",
      "666",
      "213",
      "250"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 32% density, total edges = 213."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 26, 25, 14, 9], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "98",
      "84",
      "101",
      "65"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 84."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "780",
      "335",
      "315",
      "375"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 43% density, total edges = 335."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 4, 34, 20, 50, 23, 41, 37], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "38",
      "78",
      "61",
      "95"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 61."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 12, 15, 3, 22, 21, 28, 28, 19], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "30",
      "80",
      "63",
      "66"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 63."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][28] starts at base address 1900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[13][14]?",
    "options": [
      "4924",
      "3356",
      "5148",
      "4908"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (13 * 28 + 14) * 8 = 4924."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 24 vertices. If the graph connectivity density is 47%, how many edges are present in G?",
    "options": [
      "117",
      "129",
      "276",
      "153"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 24*(23)/2 = 276. At 47% density, total edges = 129."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][11] starts at base address 1100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[26][9]?",
    "options": [
      "1406",
      "1334",
      "1376",
      "1378"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (9 * 28 + 26) * 1 = 1378."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 49, 10, 4, 15, 27, 2, 47, 44, 21, 12], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "88",
      "81",
      "59",
      "71"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 71."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "602",
      "538",
      "559",
      "903"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 62% density, total edges = 559."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 48, 12, 49, 41, 42, 1], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "163",
      "180",
      "150",
      "204"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 163."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 11, 30, 25, 43, 26, 23, 15], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "81",
      "41",
      "98",
      "111"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 81."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][14] starts at base address 1200 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[2][2]?",
    "options": [
      "1256",
      "1288",
      "1260",
      "1208"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (2 * 14 + 2) * 2 = 1260."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "406",
      "231",
      "260",
      "217"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 57% density, total edges = 231."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "503",
      "446",
      "1596",
      "418"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 28% density, total edges = 446."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 27, 33, 25, 16, 14, 13, 10], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "101",
      "152",
      "135",
      "151"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 135."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 38 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "421",
      "703",
      "402",
      "459"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 38*(37)/2 = 703. At 60% density, total edges = 421."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "55",
      "91",
      "76",
      "62"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 69% density, total edges = 62."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 38, 35, 2, 27], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "103",
      "120",
      "105",
      "75"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 103."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "129",
      "149",
      "190",
      "119"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 68% density, total edges = 129."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][15] starts at base address 1100 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[22][3]?",
    "options": [
      "1604",
      "1364",
      "1500",
      "1492"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (3 * 26 + 22) * 4 = 1500."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "646",
      "618",
      "1540",
      "702"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 42% density, total edges = 646."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 20%, how many edges are present in G?",
    "options": [
      "340",
      "286",
      "259",
      "1431"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 20% density, total edges = 286."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 25%, how many edges are present in G?",
    "options": [
      "94",
      "378",
      "122",
      "80"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 25% density, total edges = 94."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "465",
      "237",
      "222",
      "268"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 51% density, total edges = 237."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][21] starts at base address 1500 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[8][19]?",
    "options": [
      "5668",
      "2716",
      "5652",
      "5884"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (19 * 27 + 8) * 8 = 5668."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "219",
      "205",
      "406",
      "248"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 54% density, total edges = 219."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][28] starts at base address 2600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[6][20]?",
    "options": [
      "3080",
      "3464",
      "3352",
      "3344"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (6 * 28 + 20) * 4 = 3352."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 50, 10, 42, 7, 31], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "176",
      "166",
      "109",
      "159"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 159."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "653",
      "595",
      "1653",
      "566"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 36% density, total edges = 595."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 15, 48, 25, 15, 47, 37, 8, 13, 4, 37], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "247",
      "230",
      "234",
      "212"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 230."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [11, 42, 24, 28, 43, 29], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "122",
      "105",
      "94",
      "133"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 105."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "171",
      "92",
      "64",
      "73"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 43% density, total edges = 73."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][38] starts at base address 2600 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[4][24]?",
    "options": [
      "7240",
      "7432",
      "7224",
      "3368"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (24 * 24 + 4) * 8 = 7240."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][11] starts at base address 2400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[14][2]?",
    "options": [
      "2556",
      "2554",
      "2428",
      "2567"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (14 * 11 + 2) * 1 = 2556."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [14, 22, 15, 30, 11, 16], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "66",
      "37",
      "51",
      "68"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 51."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [32, 47, 12, 48, 29, 3, 26, 18, 41, 20, 43, 29], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "91",
      "103",
      "59",
      "108"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 91."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "173",
      "595",
      "225",
      "190"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 32% density, total edges = 190."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 39 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "418",
      "437",
      "741",
      "476"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 39*(38)/2 = 741. At 59% density, total edges = 437."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][14] starts at base address 2700 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][3]?",
    "options": [
      "2824",
      "2880",
      "2816",
      "2724"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (2 * 14 + 3) * 4 = 2824."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][26] starts at base address 1000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][6]?",
    "options": [
      "1172",
      "1200",
      "1164",
      "1024"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (6 * 7 + 1) * 4 = 1172."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 41, 6, 7, 43, 44, 18], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "99",
      "109",
      "54",
      "92"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][15] starts at base address 1100 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[5][8]?",
    "options": [
      "1492",
      "1432",
      "1260",
      "1424"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (5 * 15 + 8) * 4 = 1432."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][12] starts at base address 2200 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[8][7]?",
    "options": [
      "2301",
      "2256",
      "2315",
      "2303"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (8 * 12 + 7) * 1 = 2303."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "300",
      "178",
      "153",
      "141"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 51% density, total edges = 153."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 12, 7, 25, 23, 33, 19, 35], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "46",
      "63",
      "19",
      "53"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 46."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][21] starts at base address 1000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[12][10]?",
    "options": [
      "1480",
      "1888",
      "1880",
      "1972"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (10 * 21 + 12) * 4 = 1888."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "309",
      "375",
      "331",
      "946"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 35% density, total edges = 331."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][36] starts at base address 2000 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[15][22]?",
    "options": [
      "4240",
      "4248",
      "4392",
      "3320"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (15 * 36 + 22) * 4 = 4248."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 16, 16, 44, 41, 30, 25, 22, 41], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "123",
      "164",
      "117",
      "140"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 123."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][13] starts at base address 2000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[2][3]?",
    "options": [
      "2024",
      "2164",
      "2216",
      "2156"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (3 * 13 + 2) * 4 = 2164."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][33] starts at base address 1600 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[13][25]?",
    "options": [
      "2087",
      "2052",
      "2054",
      "1925"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (13 * 33 + 25) * 1 = 2054."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "331",
      "306",
      "382",
      "1275"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 26% density, total edges = 331."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 5, 3, 33, 26], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "41",
      "47",
      "80",
      "64"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 47."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 59 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "1043",
      "1014",
      "1711",
      "1102"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 59*(58)/2 = 1711. At 61% density, total edges = 1043."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 29, 30, 45, 36, 45, 22], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "90",
      "59",
      "107",
      "120"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 90."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 25, 35, 10, 41, 5, 40], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "78",
      "113",
      "60",
      "95"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 78."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 41, 36, 10, 9, 46, 45], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "77",
      "136",
      "119",
      "155"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 119."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 15, 33, 47, 31, 40, 10, 4, 10, 20, 4], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "146",
      "129",
      "160",
      "126"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 129."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 41%, how many edges are present in G?",
    "options": [
      "490",
      "420",
      "443",
      "1081"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 41% density, total edges = 443."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 47, 14, 7, 37], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "68",
      "92",
      "75",
      "82"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 75."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 24 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "115",
      "103",
      "139",
      "276"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 24*(23)/2 = 276. At 42% density, total edges = 115."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][13] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[8][11]?",
    "options": [
      "2776",
      "2856",
      "2830",
      "2826"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (8 * 13 + 11) * 2 = 2830."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 39, 25, 8, 26, 11, 16, 30, 38], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "212",
      "199",
      "182",
      "155"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 182."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][11] starts at base address 1900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[5][8]?",
    "options": [
      "2220",
      "2404",
      "2492",
      "2388"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (5 * 11 + 8) * 8 = 2404."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 39 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "425",
      "741",
      "444",
      "483"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 39*(38)/2 = 741. At 60% density, total edges = 444."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 59 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "555",
      "1711",
      "467",
      "496"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 59*(58)/2 = 1711. At 29% density, total edges = 496."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "658",
      "1596",
      "743",
      "686"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 43% density, total edges = 686."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "19",
      "4",
      "9",
      "45"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 22% density, total edges = 9."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][37] starts at base address 1100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[11][18]?",
    "options": [
      "1523",
      "1298",
      "1525",
      "1562"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (11 * 37 + 18) * 1 = 1525."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][30] starts at base address 1000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[11][9]?",
    "options": [
      "1828",
      "1836",
      "1396",
      "1924"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (9 * 22 + 11) * 4 = 1836."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "59",
      "46",
      "40",
      "78"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 59% density, total edges = 46."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 5, 30, 18, 7, 36, 38, 16, 23, 3, 34, 26], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "176",
      "210",
      "224",
      "207"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 207."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "351",
      "220",
      "180",
      "193"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 55% density, total edges = 193."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 21, 7, 14, 27], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "28",
      "71",
      "61",
      "54"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 54."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "186",
      "300",
      "198",
      "223"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 66% density, total edges = 198."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 26, 36, 23, 36, 36, 38], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "169",
      "205",
      "186",
      "121"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 169."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 9, 33, 19, 27, 6, 47], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "61",
      "110",
      "91",
      "108"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 91."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][27] starts at base address 2400 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[2][22]?",
    "options": [
      "4248",
      "2576",
      "4168",
      "4160"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (22 * 20 + 2) * 4 = 4168."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "82",
      "49",
      "60",
      "231"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 26% density, total edges = 60."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [8, 3, 36, 9, 4, 41, 20, 23, 45], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "142",
      "118",
      "101",
      "93"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 101."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [41, 40, 19, 42, 9, 17, 35, 33, 30, 39, 41], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "203",
      "238",
      "162",
      "220"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 203."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][36] starts at base address 2500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[11][10]?",
    "options": [
      "2771",
      "2797",
      "2610",
      "2769"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (10 * 26 + 11) * 1 = 2771."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 40, 23, 45, 4, 45, 48, 8, 7, 15], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "164",
      "147",
      "112",
      "151"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 147."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][11] starts at base address 2000 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[8][6]?",
    "options": [
      "2096",
      "2188",
      "2184",
      "2210"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (8 * 11 + 6) * 2 = 2188."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][37] starts at base address 2200 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[25][10]?",
    "options": [
      "2522",
      "2450",
      "2493",
      "2495"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (10 * 27 + 25) * 1 = 2495."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 49, 42, 4, 38, 5, 41, 11], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "133",
      "159",
      "197",
      "176"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 159."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "206",
      "861",
      "248",
      "185"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 24% density, total edges = 206."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [45, 15, 32, 34, 36, 5, 18, 2, 34, 5], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "185",
      "202",
      "203",
      "140"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 185."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][22] starts at base address 2300 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[19][17]?",
    "options": [
      "3116",
      "2946",
      "3120",
      "3166"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (17 * 23 + 19) * 2 = 3120."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 23, 32, 33, 7, 36, 10], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "138",
      "148",
      "95",
      "131"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 131."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 41%, how many edges are present in G?",
    "options": [
      "30",
      "51",
      "91",
      "37"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 41% density, total edges = 37."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "184",
      "465",
      "230",
      "199"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 43% density, total edges = 199."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 3, 24, 2, 16, 30, 42], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "73",
      "45",
      "74",
      "57"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 57."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][26] starts at base address 2300 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[18][11]?",
    "options": [
      "3508",
      "3092",
      "3620",
      "3516"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (11 * 26 + 18) * 4 = 3516."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][39] starts at base address 2500 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[10][17]?",
    "options": [
      "3026",
      "2840",
      "3030",
      "3060"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (17 * 15 + 10) * 2 = 3030."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [44, 16, 19, 32, 5, 5, 8], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "126",
      "121",
      "77",
      "138"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 121."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][37] starts at base address 2200 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][27]?",
    "options": [
      "2632",
      "3304",
      "2992",
      "3008"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (2 * 37 + 27) * 8 = 3008."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][16] starts at base address 2400 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[11][11]?",
    "options": [
      "2774",
      "2806",
      "2642",
      "2770"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (11 * 16 + 11) * 2 = 2774."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 3, 1, 33, 44, 34, 46, 38, 10], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "191",
      "115",
      "157",
      "174"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 157."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 47, 21, 31, 43, 48, 48, 28, 31, 40, 36], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "243",
      "190",
      "195",
      "212"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 195."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "492",
      "452",
      "432",
      "780"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 58% density, total edges = 452."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 17, 46, 2, 16], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "151",
      "63",
      "105",
      "122"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 105."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 17, 6, 9, 18, 5, 33, 2, 45, 35], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "131",
      "88",
      "114",
      "147"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 114."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 29, 40, 13, 2, 11, 30, 44, 42, 28, 14], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "243",
      "169",
      "216",
      "199"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 199."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][31] starts at base address 1000 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[4][17]?",
    "options": [
      "1136",
      "2052",
      "1990",
      "1994"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (17 * 29 + 4) * 2 = 1994."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 24, 7, 17, 30, 27, 32, 36], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "75",
      "75",
      "48",
      "58"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 58."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "431",
      "1081",
      "501",
      "454"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 42% density, total edges = 454."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 1, 28, 5, 33, 10], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "81",
      "34",
      "93",
      "76"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 76."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "68",
      "50",
      "153",
      "41"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 33% density, total edges = 50."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 52 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "542",
      "490",
      "464",
      "1326"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 52*(51)/2 = 1326. At 37% density, total edges = 490."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][13] starts at base address 1100 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[12][11]?",
    "options": [
      "2436",
      "2420",
      "2540",
      "2156"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (12 * 13 + 11) * 8 = 2436."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 21%, how many edges are present in G?",
    "options": [
      "392",
      "307",
      "1596",
      "335"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 21% density, total edges = 335."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 14, 2, 33, 5, 4, 7, 25], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "92",
      "54",
      "75",
      "80"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 75."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][34] starts at base address 1600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[8][26]?",
    "options": [
      "2432",
      "3036",
      "2984",
      "2976"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (26 * 13 + 8) * 4 = 2984."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 65%, how many edges are present in G?",
    "options": [
      "113",
      "123",
      "143",
      "190"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 65% density, total edges = 123."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 19, 29, 5, 21, 20, 42, 7, 13, 40, 41, 6], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "237",
      "247",
      "288",
      "264"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 247."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [14, 1, 32, 40, 36, 30, 22], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "170",
      "139",
      "153",
      "183"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 153."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "522",
      "1275",
      "471",
      "446"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 37% density, total edges = 471."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][34] starts at base address 1400 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[1][30]?",
    "options": [
      "1912",
      "2184",
      "1896",
      "1640"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (1 * 34 + 30) * 8 = 1912."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 16, 22, 27, 9, 22, 21, 6, 22, 37, 13, 38], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "77",
      "94",
      "99",
      "38"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 77."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "457",
      "387",
      "410",
      "1081"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 38% density, total edges = 410."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][37] starts at base address 2900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[6][30]?",
    "options": [
      "3752",
      "3748",
      "3780",
      "3260"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (30 * 14 + 6) * 2 = 3752."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 52 vertices. If the graph connectivity density is 65%, how many edges are present in G?",
    "options": [
      "913",
      "835",
      "1326",
      "861"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 52*(51)/2 = 1326. At 65% density, total edges = 861."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 49 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "352",
      "1176",
      "401",
      "328"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 49*(48)/2 = 1176. At 30% density, total edges = 352."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "318",
      "1035",
      "341",
      "387"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 33% density, total edges = 341."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 12, 24, 24, 34], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "72",
      "89",
      "60",
      "96"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 72."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][38] starts at base address 1400 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][17]?",
    "options": [
      "2856",
      "2768",
      "1672",
      "2776"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (17 * 20 + 4) * 4 = 2776."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "261",
      "903",
      "240",
      "304"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 29% density, total edges = 261."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][15] starts at base address 1900 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[3][11]?",
    "options": [
      "1954",
      "1971",
      "1956",
      "1933"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (3 * 15 + 11) * 1 = 1956."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 53%, how many edges are present in G?",
    "options": [
      "41",
      "78",
      "54",
      "35"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 53% density, total edges = 41."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][29] starts at base address 1900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[8][3]?",
    "options": [
      "2012",
      "1984",
      "1948",
      "1988"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (3 * 12 + 8) * 2 = 1988."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "143",
      "104",
      "117",
      "325"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 36% density, total edges = 117."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 6, 50, 27, 14, 28, 45, 11, 9, 9, 43, 42], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "257",
      "274",
      "300",
      "242"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 257."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 34, 20, 23, 21, 14, 6, 49], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "118",
      "135",
      "132",
      "112"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 47%, how many edges are present in G?",
    "options": [
      "300",
      "166",
      "129",
      "141"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 47% density, total edges = 141."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [47, 23, 35, 48, 30, 40, 48, 28, 10, 42], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "183",
      "136",
      "213",
      "200"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 183."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][16] starts at base address 1800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[8][14]?",
    "options": [
      "2116",
      "2024",
      "2096",
      "2092"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (14 * 10 + 8) * 2 = 2096."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 24, 18, 24, 27, 21, 37, 39, 20], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "42",
      "105",
      "106",
      "88"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 88."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "332",
      "528",
      "365",
      "316"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 63% density, total edges = 332."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 20, 19, 11, 16, 12, 32, 35, 5, 41], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "40",
      "59",
      "57",
      "39"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 40."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [9, 11, 34, 16, 7, 41], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "61",
      "86",
      "70",
      "87"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 70."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 14, 46, 23, 38, 44], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "148",
      "121",
      "165",
      "186"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 148."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 15 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "40",
      "25",
      "105",
      "18"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 15*(14)/2 = 105. At 24% density, total edges = 25."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 24 vertices. If the graph connectivity density is 64%, how many edges are present in G?",
    "options": [
      "164",
      "200",
      "176",
      "276"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 24*(23)/2 = 276. At 64% density, total edges = 176."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "223",
      "666",
      "186",
      "168"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 28% density, total edges = 186."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][16] starts at base address 1500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[13][13]?",
    "options": [
      "1773",
      "1669",
      "1793",
      "1771"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (13 * 20 + 13) * 1 = 1773."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 17, 11, 19, 24, 44, 6, 26, 2, 48], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "170",
      "149",
      "185",
      "168"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 168."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "73",
      "46",
      "55",
      "153"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 36% density, total edges = 55."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 22, 29, 19, 33], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "70",
      "122",
      "103",
      "120"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 103."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 20, 3, 40, 44, 22, 30], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "187",
      "143",
      "160",
      "107"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 143."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 43, 39, 44, 34], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "82",
      "100",
      "122",
      "83"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 83."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 11, 49, 49, 48], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "192",
      "143",
      "160",
      "109"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 143."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][32] starts at base address 1900 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[5][20]?",
    "options": [
      "2000",
      "2080",
      "2112",
      "2078"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (5 * 32 + 20) * 1 = 2080."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 39 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "447",
      "466",
      "741",
      "505"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 39*(38)/2 = 741. At 63% density, total edges = 466."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 47, 38, 4, 37, 30], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "166",
      "146",
      "129",
      "126"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 129."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][21] starts at base address 2300 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[5][13]?",
    "options": [
      "3572",
      "3684",
      "2820",
      "3588"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (13 * 12 + 5) * 8 = 3588."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "646",
      "600",
      "1035",
      "577"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 58% density, total edges = 600."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "91",
      "118",
      "78",
      "351"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 26% density, total edges = 91."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][36] starts at base address 2500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[15][26]?",
    "options": [
      "3163",
      "3165",
      "3190",
      "2890"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (26 * 25 + 15) * 1 = 3165."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "55",
      "33",
      "22",
      "17"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 40% density, total edges = 22."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "1081",
      "376",
      "446",
      "399"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 37% density, total edges = 399."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][35] starts at base address 1400 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[11][4]?",
    "options": [
      "2948",
      "1576",
      "2956",
      "3096"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (11 * 35 + 4) * 4 = 2956."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][17] starts at base address 1500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][4]?",
    "options": [
      "1788",
      "1940",
      "1804",
      "1564"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (2 * 17 + 4) * 8 = 1804."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "132",
      "300",
      "157",
      "120"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 44% density, total edges = 132."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][13] starts at base address 2000 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[9][3]?",
    "options": [
      "2054",
      "2236",
      "2240",
      "2266"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (9 * 13 + 3) * 2 = 2240."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 44, 22, 36, 45, 11], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "155",
      "119",
      "136",
      "102"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 119."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 34, 38, 32, 9, 2, 20, 3, 30, 15, 31, 41], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "177",
      "174",
      "191",
      "138"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 174."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][31] starts at base address 2400 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[17][2]?",
    "options": [
      "2480",
      "2457",
      "2459",
      "2434"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (2 * 21 + 17) * 1 = 2459."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][25] starts at base address 1400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[26][5]?",
    "options": [
      "2080",
      "2053",
      "2055",
      "1530"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (26 * 25 + 5) * 1 = 2055."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "549",
      "522",
      "604",
      "1485"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 37% density, total edges = 549."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "231",
      "109",
      "87",
      "76"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 38% density, total edges = 87."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][16] starts at base address 1600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][5]?",
    "options": [
      "1680",
      "2024",
      "1896",
      "1880"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (2 * 16 + 5) * 8 = 1896."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 36 vertices. If the graph connectivity density is 64%, how many edges are present in G?",
    "options": [
      "385",
      "439",
      "630",
      "403"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 36*(35)/2 = 630. At 64% density, total edges = 403."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "55",
      "32",
      "43",
      "27"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 59% density, total edges = 32."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][26] starts at base address 1800 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[1][3]?",
    "options": [
      "1968",
      "1912",
      "1824",
      "1928"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (3 * 5 + 1) * 8 = 1928."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "989",
      "1596",
      "1046",
      "961"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 62% density, total edges = 989."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 30, 34, 7, 9, 26], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "81",
      "98",
      "71",
      "88"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 81."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 36 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "353",
      "371",
      "630",
      "407"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 36*(35)/2 = 630. At 59% density, total edges = 371."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [8, 30, 20, 1, 15, 19, 32], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "112",
      "110",
      "93",
      "85"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 93."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][19] starts at base address 2300 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[14][13]?",
    "options": [
      "2664",
      "2804",
      "2770",
      "2766"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (13 * 17 + 14) * 2 = 2770."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 31, 4, 5, 43, 13], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "83",
      "89",
      "106",
      "132"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 89."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 23, 4, 10, 9, 11, 19, 33, 10, 19, 21, 9], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "147",
      "109",
      "131",
      "114"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 114."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 31, 13, 29, 32, 28, 19], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "135",
      "118",
      "150",
      "105"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][28] starts at base address 2400 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[21][20]?",
    "options": [
      "4080",
      "4404",
      "4396",
      "4500"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (20 * 24 + 21) * 4 = 4404."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 20, 12, 37, 45, 47, 41, 26, 30], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "293",
      "252",
      "202",
      "269"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 252."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [22, 48, 9, 11, 16], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "107",
      "101",
      "90",
      "68"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 90."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 48, 17, 22, 26], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "92",
      "114",
      "109",
      "87"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [45, 16, 21, 24, 43, 2, 13, 15, 24, 5], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "103",
      "37",
      "99",
      "82"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 82."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][32] starts at base address 2000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[17][22]?",
    "options": [
      "6184",
      "6368",
      "4992",
      "6168"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (22 * 23 + 17) * 8 = 6184."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 13, 20, 8, 48], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "81",
      "64",
      "41",
      "72"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 64."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][34] starts at base address 1000 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[7][14]?",
    "options": [
      "1196",
      "1504",
      "1572",
      "1500"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (7 * 34 + 14) * 2 = 1504."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][37] starts at base address 1800 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[1][1]?",
    "options": [
      "1838",
      "1875",
      "1801",
      "1836"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (1 * 37 + 1) * 1 = 1838."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "278",
      "237",
      "217",
      "820"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 29% density, total edges = 237."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [47, 50, 21, 48, 37, 1, 17], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "71",
      "139",
      "135",
      "118"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "507",
      "486",
      "861",
      "549"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 59% density, total edges = 507."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 39, 3, 31, 4, 25, 8, 25, 30], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "165",
      "135",
      "157",
      "140"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 140."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][24] starts at base address 1000 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[9][7]?",
    "options": [
      "1161",
      "1185",
      "1163",
      "1063"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (7 * 22 + 9) * 1 = 1163."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 33, 4, 25, 28, 43, 44, 20, 44, 26, 14], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "151",
      "140",
      "90",
      "123"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 123."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][13] starts at base address 1900 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[23][10]?",
    "options": [
      "3024",
      "2820",
      "3032",
      "3136"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (10 * 26 + 23) * 4 = 3032."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 2, 32, 41, 15], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "75",
      "91",
      "108",
      "132"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 91."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][28] starts at base address 2500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[24][18]?",
    "options": [
      "8020",
      "8244",
      "8004",
      "5956"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (24 * 28 + 18) * 8 = 8020."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "1128",
      "338",
      "386",
      "314"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 30% density, total edges = 338."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][32] starts at base address 1600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[9][26]?",
    "options": [
      "2536",
      "3196",
      "3256",
      "3188"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (26 * 15 + 9) * 4 = 3196."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][36] starts at base address 1300 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[1][21]?",
    "options": [
      "1393",
      "1321",
      "1355",
      "1357"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (1 * 36 + 21) * 1 = 1357."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 34, 24, 37, 8, 25, 6, 4], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "145",
      "95",
      "125",
      "108"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 108."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][18] starts at base address 1500 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[2][14]?",
    "options": [
      "1548",
      "1550",
      "1568",
      "1528"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (2 * 18 + 14) * 1 = 1550."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 7, 12, 29, 32, 33, 1], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "148",
      "113",
      "164",
      "131"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 131."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 7, 7, 38, 18], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "25",
      "18",
      "14",
      "35"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 18."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][28] starts at base address 1700 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[2][20]?",
    "options": [
      "1804",
      "1774",
      "1740",
      "1776"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (2 * 28 + 20) * 1 = 1776."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][22] starts at base address 2900 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[20][14]?",
    "options": [
      "4716",
      "4708",
      "4804",
      "4020"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (20 * 22 + 14) * 4 = 4716."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][34] starts at base address 1000 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[20][26]?",
    "options": [
      "6648",
      "5160",
      "6920",
      "6632"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (20 * 34 + 26) * 8 = 6648."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 21, 40, 22, 50, 49, 17, 5, 34, 49], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "83",
      "121",
      "143",
      "138"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 121."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 10, 13, 37, 40, 17, 15, 4, 3, 42, 8], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "198",
      "181",
      "240",
      "215"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 198."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [25, 40, 25, 17, 49, 18, 42, 23, 34, 1, 34], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "291",
      "249",
      "275",
      "274"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 274."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][31] starts at base address 1900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[7][27]?",
    "options": [
      "2882",
      "2278",
      "2886",
      "2922"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (27 * 18 + 7) * 2 = 2886."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][38] starts at base address 1700 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[24][31]?",
    "options": [
      "9228",
      "7652",
      "9244",
      "9548"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (24 * 38 + 31) * 8 = 9244."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 15, 22, 11, 19, 49, 44, 14, 12, 4], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "115",
      "113",
      "67",
      "96"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 96."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][23] starts at base address 1400 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[8][20]?",
    "options": [
      "2308",
      "2208",
      "2040",
      "2216"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (8 * 23 + 20) * 4 = 2216."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][36] starts at base address 1500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[11][17]?",
    "options": [
      "1970",
      "1968",
      "1687",
      "1997"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (17 * 27 + 11) * 1 = 1970."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][34] starts at base address 2500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[11][30]?",
    "options": [
      "2830",
      "2899",
      "2914",
      "2901"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (30 * 13 + 11) * 1 = 2901."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [41, 46, 12, 29, 16], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "116",
      "111",
      "58",
      "99"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 99."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "325",
      "397",
      "349",
      "1128"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 31% density, total edges = 349."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][33] starts at base address 2500 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[4][26]?",
    "options": [
      "8148",
      "3332",
      "8364",
      "8132"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (26 * 27 + 4) * 8 = 8148."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 29, 38, 33, 6, 35], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "100",
      "159",
      "142",
      "175"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 142."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 64%, how many edges are present in G?",
    "options": [
      "1275",
      "867",
      "816",
      "791"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 64% density, total edges = 816."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "384",
      "946",
      "318",
      "340"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 36% density, total edges = 340."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][34] starts at base address 1500 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[17][25]?",
    "options": [
      "2784",
      "2350",
      "2834",
      "2780"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (25 * 25 + 17) * 2 = 2784."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][24] starts at base address 2900 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[2][17]?",
    "options": [
      "3078",
      "2968",
      "3026",
      "3030"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (2 * 24 + 17) * 2 = 3030."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 19, 20, 34, 46, 49, 13], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "203",
      "235",
      "186",
      "168"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 186."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 53 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "745",
      "824",
      "1378",
      "771"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 53*(52)/2 = 1378. At 56% density, total edges = 771."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][28] starts at base address 2800 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[1][15]?",
    "options": [
      "2942",
      "2882",
      "2830",
      "2886"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (1 * 28 + 15) * 2 = 2886."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][26] starts at base address 1000 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[12][8]?",
    "options": [
      "3544",
      "1768",
      "3560",
      "3768"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (12 * 26 + 8) * 8 = 3560."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][37] starts at base address 1300 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[16][17]?",
    "options": [
      "6172",
      "3476",
      "6468",
      "6156"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (16 * 37 + 17) * 8 = 6172."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 12, 21, 46, 18, 13], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "97",
      "79",
      "126",
      "80"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 80."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "150",
      "165",
      "195",
      "435"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 38% density, total edges = 165."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 36 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "630",
      "270",
      "306",
      "252"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 36*(35)/2 = 630. At 43% density, total edges = 270."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "326",
      "342",
      "374",
      "496"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 69% density, total edges = 342."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 45, 41, 12, 31, 7, 20, 1], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "149",
      "129",
      "166",
      "180"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 149."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "511",
      "903",
      "532",
      "575"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 59% density, total edges = 532."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [22, 38, 9, 43, 5, 3, 28, 24, 26, 11, 11, 46], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "134",
      "117",
      "95",
      "122"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 117."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][34] starts at base address 2000 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[4][29]?",
    "options": [
      "2326",
      "2232",
      "2330",
      "2398"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (4 * 34 + 29) * 2 = 2330."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "213",
      "197",
      "496",
      "245"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 43% density, total edges = 213."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 39 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "237",
      "741",
      "218",
      "276"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 39*(38)/2 = 741. At 32% density, total edges = 237."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][17] starts at base address 1500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][10]?",
    "options": [
      "2260",
      "2124",
      "2108",
      "1820"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (4 * 17 + 10) * 8 = 2124."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][16] starts at base address 1400 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][1]?",
    "options": [
      "1536",
      "1416",
      "1468",
      "1476"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (1 * 15 + 4) * 4 = 1476."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][23] starts at base address 1300 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[15][5]?",
    "options": [
      "1582",
      "1540",
      "1536",
      "1450"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (5 * 21 + 15) * 2 = 1540."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 19, 7, 46, 30, 16, 46, 6, 50, 50, 29], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "191",
      "185",
      "170",
      "202"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 185."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 52 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "807",
      "729",
      "1326",
      "755"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 52*(51)/2 = 1326. At 57% density, total edges = 755."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 4, 48, 50, 29, 35, 46, 12, 39, 18], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "166",
      "202",
      "237",
      "219"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 202."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "102",
      "115",
      "351",
      "142"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 33% density, total edges = 115."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 13, 29, 40, 15, 27], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "42",
      "101",
      "84",
      "113"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 84."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 22, 24, 45, 45, 11, 37, 21, 26], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "199",
      "171",
      "154",
      "136"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 154."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 28, 12, 26, 39, 14, 8, 16], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "127",
      "147",
      "156",
      "139"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 139."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 27, 3, 9, 21, 28, 39, 4, 21], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "78",
      "82",
      "61",
      "60"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 61."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 41%, how many edges are present in G?",
    "options": [
      "510",
      "1128",
      "438",
      "462"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 41% density, total edges = 462."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][13] starts at base address 2300 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[5][6]?",
    "options": [
      "2420",
      "2576",
      "2584",
      "2636"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (5 * 13 + 6) * 4 = 2584."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][27] starts at base address 2500 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[5][21]?",
    "options": [
      "2920",
      "3224",
      "3192",
      "3184"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (21 * 8 + 5) * 4 = 3192."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 26, 39, 5, 43, 30, 18, 10, 14, 34, 9, 4], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "143",
      "177",
      "160",
      "190"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 160."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 50, 28, 15, 38, 13], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "206",
      "168",
      "185",
      "131"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 168."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "47",
      "68",
      "54",
      "91"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 60% density, total edges = 54."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 21 vertices. If the graph connectivity density is 41%, how many edges are present in G?",
    "options": [
      "76",
      "107",
      "86",
      "210"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 21*(20)/2 = 210. At 41% density, total edges = 86."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 30, 37, 11, 22, 27, 35, 47], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "144",
      "171",
      "161",
      "127"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 144."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][26] starts at base address 1400 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[23][17]?",
    "options": [
      "5328",
      "4528",
      "5104",
      "5120"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (17 * 26 + 23) * 8 = 5120."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][24] starts at base address 1900 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[3][1]?",
    "options": [
      "1903",
      "1910",
      "1908",
      "1917"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (1 * 7 + 3) * 1 = 1910."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][37] starts at base address 1200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[23][16]?",
    "options": [
      "2174",
      "2170",
      "2232",
      "1936"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (16 * 29 + 23) * 2 = 2174."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][34] starts at base address 2700 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[6][10]?",
    "options": [
      "2940",
      "3644",
      "3736",
      "3636"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (10 * 23 + 6) * 4 = 3644."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 3, 5, 37, 24, 32, 35], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "105",
      "137",
      "122",
      "101"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 105."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][25] starts at base address 1400 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][18]?",
    "options": [
      "2128",
      "2344",
      "2144",
      "1832"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (3 * 25 + 18) * 8 = 2144."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [8, 13, 6, 35, 32], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "54",
      "62",
      "79",
      "97"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 62."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 39 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "741",
      "422",
      "461",
      "403"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 39*(38)/2 = 741. At 57% density, total edges = 422."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][16] starts at base address 1900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][14]?",
    "options": [
      "2252",
      "2124",
      "2268",
      "2396"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (2 * 16 + 14) * 8 = 2268."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 2, 18, 26, 45, 30], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "79",
      "70",
      "53",
      "46"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 53."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "121",
      "154",
      "528",
      "105"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 23% density, total edges = 121."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][27] starts at base address 1500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[16][1]?",
    "options": [
      "1628",
      "4964",
      "4948",
      "5180"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (16 * 27 + 1) * 8 = 4964."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][22] starts at base address 1100 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][3]?",
    "options": [
      "1308",
      "1244",
      "1148",
      "1260"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (3 * 6 + 2) * 8 = 1260."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 16, 42, 30, 12], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "134",
      "109",
      "92",
      "58"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][34] starts at base address 2500 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[1][14]?",
    "options": [
      "2514",
      "2546",
      "2582",
      "2548"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (1 * 34 + 14) * 1 = 2548."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][39] starts at base address 1000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[17][9]?",
    "options": [
      "1868",
      "1788",
      "1780",
      "1612"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (9 * 20 + 17) * 4 = 1788."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][21] starts at base address 2700 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[4][19]?",
    "options": [
      "3004",
      "3104",
      "3112",
      "3196"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (4 * 21 + 19) * 4 = 3112."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [11, 30, 36, 6, 19, 22, 23], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "91",
      "119",
      "102",
      "121"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 102."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][13] starts at base address 2200 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[3][2]?",
    "options": [
      "2212",
      "2308",
      "2282",
      "2278"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (3 * 13 + 2) * 2 = 2282."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][14] starts at base address 2300 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[10][7]?",
    "options": [
      "2370",
      "2406",
      "2394",
      "2392"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (7 * 12 + 10) * 1 = 2394."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 35, 43, 35, 19, 10, 32, 11, 21, 39, 26, 3], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "271",
      "290",
      "299",
      "273"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 273."
  }
];
