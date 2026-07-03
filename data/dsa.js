window.quizData = window.quizData || {};
window.quizData.dsa = [
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of binary search?",
    "options": [
      "O(n²)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "Binary search halves the search space each step."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What does Big O notation describe?",
    "options": [
      "Exact growth (general case)",
      "Upper bound of growth rate",
      "Lower bound (commonly used)",
      "Average case only (commonly used)"
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
      "T(n) = T(n-1) + n",
      "T(n) = n! in practice",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = 2n + 1 in practice"
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
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
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
      "Lower bound",
      "Tight bound",
      "Average case",
      "Upper bound"
    ],
    "answer": 0,
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
      "O(n²)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "Already sorted array needs only one pass."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is amortized analysis?",
    "options": [
      "Space analysis as per specification",
      "Best case only (standard definition)",
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
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n²)"
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
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Which notation is used when best and worst case are the same?",
    "options": [
      "Big O",
      "Big Omega",
      "Little o",
      "Theta (Θ)"
    ],
    "answer": 3,
    "explanation": "Θ means asymptotically tight bound."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Two Sum problem is best solved using?",
    "options": [
      "Binary Search Tree",
      "Stack",
      "Sorting",
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
      "String matching",
      "Shortest path in practice",
      "Maximum subarray sum",
      "Sorting (commonly used)"
    ],
    "answer": 2,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Sliding window technique is used for?",
    "options": [
      "Graph traversal (standard definition)",
      "Subarray/substring problems with constraints",
      "Tree balancing under normal conditions",
      "Sorting in typical implementations"
    ],
    "answer": 1,
    "explanation": "Sliding window maintains a dynamic range."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Dutch National Flag partitions array into how many parts?",
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
    "topic": "Arrays",
    "difficulty": "Medium",
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
    "difficulty": "Easy",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Minimum element",
      "Range sum queries",
      "Graph connectivity",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Best Time to Buy Stock uses which pattern?",
    "options": [
      "Two pointers in most cases",
      "Track minimum and max profit",
      "Binary search (commonly used)",
      "Sliding window by design"
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
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Product of Array Except Self avoids division by using?",
    "options": [
      "Sorting (default behavior)",
      "Stack based on convention",
      "Left and right product arrays",
      "Queue in typical implementations"
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
      "Sort by end time",
      "Use a stack by design",
      "Sort by start time",
      "Build a tree in practice"
    ],
    "answer": 2,
    "explanation": "Sorting by start allows sequential merging."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Two pointer technique works best on?",
    "options": [
      "Heaps in most cases",
      "Trees in most cases",
      "Graphs in most cases",
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
      "A balanced tree as per specification",
      "A priority queue under normal conditions",
      "A window of elements satisfying a condition",
      "A sorted subarray based on convention"
    ],
    "answer": 2,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "KMP algorithm's time complexity for pattern matching?",
    "options": [
      "O(n*m)",
      "O(n+m)",
      "O(n²)",
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
      "Backtracking",
      "Greedy",
      "Dynamic programming",
      "Hashing"
    ],
    "answer": 3,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Checking if two strings are anagrams requires?",
    "options": [
      "Sorting only (primary approach)",
      "Regular expressions in most cases",
      "Character frequency comparison",
      "Substring search (typical scenario)"
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
      "Diagonally (commonly used)",
      "Forward and backward",
      "Only forward in most cases",
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
      "Sorting based on convention",
      "Frequent modifications (mutable)",
      "Read-only access (commonly used)",
      "Hashing (typical scenario)"
    ],
    "answer": 1,
    "explanation": "StringBuilder avoids creating new String objects."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Time complexity to check if a string is palindrome?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "Compare characters from both ends in one pass."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Frequency count of characters uses?",
    "options": [
      "Array of size 26 or HashMap",
      "Stack in typical implementations",
      "Queue (default behavior)",
      "Linked List based on convention"
    ],
    "answer": 0,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Longest palindromic substring can be found in?",
    "options": [
      "O(n³) (standard definition)",
      "O(log n) (widely accepted)",
      "O(n) (standard definition)",
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
      "Queue (default behavior)",
      "Two pointers (slow and fast)",
      "Recursion only (widely accepted)",
      "Stack (widely accepted)"
    ],
    "answer": 1,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Reversing a singly linked list takes?",
    "options": [
      "O(log n) time by design",
      "O(n²) time (widely accepted)",
      "O(n) space in standard usage",
      "O(n) time, O(1) space"
    ],
    "answer": 3,
    "explanation": "Iterate once, reversing pointers in-place."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Middle of linked list found using?",
    "options": [
      "Stack in most cases",
      "Counting then traversing",
      "Recursion by design",
      "Slow and fast pointer"
    ],
    "answer": 3,
    "explanation": "When fast reaches end, slow is at middle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Merge two sorted linked lists time complexity?",
    "options": [
      "O(n+m)",
      "O(n*m)",
      "O(log(n+m))",
      "O(n²)"
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
      "Simpler implementation by design",
      "Traversal in both directions",
      "Less memory (standard definition)"
    ],
    "answer": 2,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Circular linked list last node points to?",
    "options": [
      "Itself (commonly used)",
      "First node (head)",
      "Previous node",
      "NULL in most cases"
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
      "Stack in typical implementations",
      "Sorting in typical implementations",
      "Queue in typical implementations",
      "Length difference or two-pointer approach"
    ],
    "answer": 3,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Remove Nth node from end uses?",
    "options": [
      "Stack of size N in practice",
      "Two pointers with N gap",
      "Binary search in practice",
      "Reverse list by design"
    ],
    "answer": 1,
    "explanation": "Fast pointer leads by N, both advance until fast reaches end."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack follows which principle?",
    "options": [
      "Random access (commonly used)",
      "FIFO (standard definition)",
      "LILO (widely accepted)",
      "LIFO (Last In First Out)"
    ],
    "answer": 3,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Balanced parentheses checking uses?",
    "options": [
      "Queue",
      "Stack",
      "Tree",
      "Array"
    ],
    "answer": 1,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Monotonic stack is used for?",
    "options": [
      "String matching (primary approach)",
      "Next greater/smaller element problems",
      "Sorting in typical implementations",
      "BFS in typical implementations"
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
      "Linked list in most cases",
      "Queue (default behavior)",
      "Tree (general case)",
      "Stack for operators"
    ],
    "answer": 3,
    "explanation": "Operators are pushed/popped based on precedence."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Queue is full in typical implementations",
      "Array is sorted in typical implementations",
      "Stack memory is exhausted (e.g., deep recursion)",
      "Heap is full in typical implementations"
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
      "Two stacks in most cases",
      "Tree based on convention",
      "Queue by design",
      "Stack for operands"
    ],
    "answer": 3,
    "explanation": "Push operands, pop two for each operator."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Queue follows which principle?",
    "options": [
      "Priority (general case)",
      "LIFO in most cases",
      "FIFO (First In First Out)",
      "Random access (default behavior)"
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
      "Sorting in standard usage",
      "Wasted space in linear queue",
      "Balancing (standard definition)",
      "Searching (commonly used)"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at?",
    "options": [
      "Middle only by design",
      "Only rear (commonly used)",
      "Only front by design",
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
      "Stack based on convention",
      "Heap (binary heap)",
      "Linked list by design",
      "Array (commonly used)"
    ],
    "answer": 1,
    "explanation": "Heap gives O(log n) insert and extract-min/max."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "BFS graph traversal uses?",
    "options": [
      "Deque",
      "Queue",
      "Stack",
      "Priority queue"
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
      "O(n)",
      "O(n²)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "HashMap provides average case lookup of?",
    "options": [
      "O(log n)",
      "O(n²)",
      "O(1)",
      "O(n)"
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
      "Hash table is full in most cases",
      "Duplicate keys (default behavior)",
      "Key not found (default behavior)",
      "Two keys map to same index"
    ],
    "answer": 3,
    "explanation": "Different keys producing same hash cause collision."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Chaining resolves collisions using?",
    "options": [
      "Linked list at each bucket",
      "Rehashing only in standard usage",
      "Open addressing in standard usage",
      "Sorting (widely accepted)"
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
      "Probing for next empty slot",
      "Creating new table (commonly used)",
      "Ignoring collision in most cases",
      "Using linked lists in most cases"
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
      "Load factor exceeds threshold",
      "Table is empty in standard usage",
      "After deletion only in most cases",
      "First insertion in most cases"
    ],
    "answer": 0,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "HashSet stores?",
    "options": [
      "Unique elements only",
      "Key-value pairs",
      "Sorted elements",
      "Duplicates allowed"
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
      "Always returns 0 (commonly used)",
      "Uniform distribution of keys",
      "Returns key itself in practice",
      "Ignores input in standard usage"
    ],
    "answer": 1,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Level order by design",
      "Sorted ascending order",
      "Descending order in practice",
      "Random order in most cases"
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
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "Balanced tree has logarithmic height."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n log n) by design",
      "O(1) (general case)",
      "O(h) where h is height",
      "O(n²) (typical scenario)"
    ],
    "answer": 2,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "AVL tree maintains balance by?",
    "options": [
      "Rebuilding tree in practice",
      "Using extra array by design",
      "Sorting nodes in most cases",
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
      "Greedy under normal conditions",
      "BFS in typical implementations",
      "Sorting as per specification",
      "Recursion with global max tracking"
    ],
    "answer": 3,
    "explanation": "At each node, compute max path through it."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Preorder traversal visits?",
    "options": [
      "Root, Left, Right",
      "Left, Root, Right",
      "Left, Right, Root",
      "Right, Root, Left"
    ],
    "answer": 0,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Postorder traversal visits?",
    "options": [
      "Right, Left, Root",
      "Left, Root, Right",
      "Left, Right, Root",
      "Root, Left, Right"
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
      "Queue (BFS)",
      "Sorting",
      "Recursion only",
      "Stack by design"
    ],
    "answer": 0,
    "explanation": "Process nodes level by level using queue."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Diameter of binary tree is?",
    "options": [
      "Height of tree in typical implementations",
      "Longest path between any two nodes",
      "Number of leaves (default behavior)",
      "Root to deepest node (widely accepted)"
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
      "String matching in typical implementations",
      "Sorting in typical implementations",
      "Range queries and updates efficiently",
      "Graph traversal in typical implementations"
    ],
    "answer": 2,
    "explanation": "Segment tree handles range sum/min/max in O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Equal to children as per specification",
      "Less than children (widely accepted)",
      "Random (standard definition)",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "BST search time complexity (balanced)?",
    "options": [
      "O(n²)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Balanced BST halves search space each step."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
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
    "difficulty": "Hard",
    "question": "DFS uses which data structure?",
    "options": [
      "Array by design",
      "Stack (or recursion)",
      "Heap by design",
      "Queue in practice"
    ],
    "answer": 1,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
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
    "difficulty": "Hard",
    "question": "Topological sort applies to?",
    "options": [
      "Cyclic graphs (general case)",
      "Undirected graphs in most cases",
      "Directed Acyclic Graphs (DAG)",
      "Weighted graphs only (commonly used)"
    ],
    "answer": 2,
    "explanation": "Topological ordering requires no cycles."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Union-Find is used in?",
    "options": [
      "Kruskal's MST and cycle detection",
      "String matching (default behavior)",
      "BFS under normal conditions",
      "Shortest path as per specification"
    ],
    "answer": 0,
    "explanation": "Union-Find efficiently tracks connected components."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Bellman-Ford handles?",
    "options": [
      "Only undirected in practice",
      "Negative edge weights",
      "Only trees in most cases",
      "Only positive weights"
    ],
    "answer": 1,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Dynamic programming in practice",
      "Divide and conquer in practice",
      "Greedy MST using sorted edges",
      "BFS-based in typical implementations"
    ],
    "answer": 2,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Prim's algorithm starts from?",
    "options": [
      "Leaf node by design",
      "Heaviest edge",
      "All vertices",
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
      "All-pairs shortest paths",
      "MST (standard definition)",
      "Single-source shortest path",
      "Topological order in practice"
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
      "Topological sort (commonly used)",
      "DFS with parent tracking or Union-Find",
      "BFS only in typical implementations",
      "Dijkstra under normal conditions"
    ],
    "answer": 1,
    "explanation": "Back edge to non-parent indicates cycle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
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
    "difficulty": "Hard",
    "question": "Adjacency list space complexity?",
    "options": [
      "O(V+E)",
      "O(V²)",
      "O(V)",
      "O(E²)"
    ],
    "answer": 0,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Memoization is?",
    "options": [
      "Top-down DP with caching",
      "Bottom-up approach in practice",
      "Brute force (commonly used)",
      "Greedy based on convention"
    ],
    "answer": 0,
    "explanation": "Store results of subproblems to avoid recomputation."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Tabulation is?",
    "options": [
      "Recursion (commonly used)",
      "Bottom-up DP using table",
      "Backtracking (commonly used)",
      "Top-down approach in most cases"
    ],
    "answer": 1,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "0/1 Knapsack time complexity?",
    "options": [
      "O(n²)",
      "O(n log n)",
      "O(n*W)",
      "O(2^n)"
    ],
    "answer": 2,
    "explanation": "DP table of items × capacity."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
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
    "difficulty": "Hard",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(2^n)",
      "O(m*n)",
      "O(m+n)",
      "O(m²)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Coin Change problem (min coins) is solved by?",
    "options": [
      "BFS only in typical implementations",
      "Sorting (widely accepted)",
      "DP (unbounded knapsack variant)",
      "Greedy always (general case)"
    ],
    "answer": 2,
    "explanation": "Try each coin, take minimum."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Matrix Chain Multiplication optimizes?",
    "options": [
      "Matrix dimensions (widely accepted)",
      "Matrix values (widely accepted)",
      "Matrix sorting in practice",
      "Order of matrix multiplications"
    ],
    "answer": 3,
    "explanation": "Different parenthesizations give different costs."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "DP on grids typically moves?",
    "options": [
      "Up only in most cases",
      "All 8 directions",
      "Right and down",
      "Diagonally only"
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
      "Optimal solution contains optimal sub-solutions",
      "Random solutions work (standard definition)",
      "Problem has no solution (widely accepted)",
      "Only greedy works under normal conditions"
    ],
    "answer": 0,
    "explanation": "Key property enabling DP approach."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Overlapping subproblems means?",
    "options": [
      "No subproblems exist (general case)",
      "Linear scan suffices (standard definition)",
      "Each subproblem is unique (widely accepted)",
      "Same subproblems are solved multiple times"
    ],
    "answer": 3,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Activity selection problem selects by?",
    "options": [
      "Earliest finish time",
      "Random by design",
      "Maximum duration",
      "Latest start (general case)"
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
      "Negative weights (commonly used)",
      "No items in most cases",
      "Only whole items in most cases",
      "Taking fractions of items"
    ],
    "answer": 3,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Huffman coding builds?",
    "options": [
      "Balanced BST in most cases",
      "Hash table under normal conditions",
      "Optimal prefix-free binary tree",
      "Graph (typical scenario)"
    ],
    "answer": 2,
    "explanation": "Greedy: merge two lowest-frequency nodes."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Total time",
      "Minimum cost",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Minimum platforms problem uses?",
    "options": [
      "Binary search (commonly used)",
      "Stack as per specification",
      "Queue (primary approach)",
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
      "Queens form diagonal in practice",
      "All queens are in one row by design",
      "No two queens attack each other",
      "Queens are adjacent in standard usage"
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
      "BFS only (default behavior)",
      "Dynamic programming in most cases",
      "Sorting (standard definition)",
      "Recursion and backtracking"
    ],
    "answer": 3,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Generating all permutations uses?",
    "options": [
      "Swap-based backtracking",
      "Hashing (standard definition)",
      "Sorting in standard usage",
      "Queue in most cases"
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
      "Negative numbers by design",
      "Each element used once in most cases",
      "Reusing elements to reach target",
      "Sorting only in typical implementations"
    ],
    "answer": 2,
    "explanation": "Include current element again or move to next."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n log n)",
      "O(n) by design",
      "Exponential",
      "O(n²) in practice"
    ],
    "answer": 2,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "XOR of a number with itself gives?",
    "options": [
      "1",
      "0",
      "Negative number",
      "The number itself"
    ],
    "answer": 1,
    "explanation": "x ^ x = 0 for any x."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "Complement in practice",
      "0 (standard definition)",
      "The number itself",
      "1 (standard definition)"
    ],
    "answer": 2,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
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
      "Divide by 2",
      "Add 1 (general case)",
      "Subtract 1"
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
      "Add 2 (default behavior)",
      "XOR with 1 (default behavior)",
      "Divide by 2 (integer division)",
      "Multiply by 2 in most cases"
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
      "Sorting in typical implementations",
      "Extracting or setting specific bits",
      "Graph traversal (general case)",
      "String matching in typical implementations"
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
      "Prefix-based string operations",
      "Matrix operations by design",
      "Sorting numbers (commonly used)",
      "Graph traversal in practice"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Disjoint Set Union find uses?",
    "options": [
      "Path compression and union by rank",
      "Sorting as per specification",
      "Hashing based on convention",
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
      "Graph BFS based on convention",
      "String matching (widely accepted)",
      "Sorting under normal conditions",
      "Point updates and prefix sum queries"
    ],
    "answer": 3,
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
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 7, 47, 15, 5, 24, 3, 50, 38, 11, 41], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "92",
      "109",
      "69",
      "107"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "114",
      "300",
      "151",
      "126"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 42% density, total edges = 126."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Singly Linked List?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Singly Linked List, performing a 'Search' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][11] starts at base address 1200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[3][2]?",
    "options": [
      "1294",
      "1298",
      "1212",
      "1344"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (2 * 23 + 3) * 2 = 1298."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][17] starts at base address 2900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[11][8]?",
    "options": [
      "3274",
      "3076",
      "3318",
      "3270"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (8 * 22 + 11) * 2 = 3274."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][22] starts at base address 2100 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[3][7]?",
    "options": [
      "3732",
      "3748",
      "3980",
      "2268"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2100 + (7 * 29 + 3) * 8 = 3748."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 13, 44, 50, 13], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "110",
      "127",
      "107",
      "160"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 110."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a AVL Tree?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, performing a 'Insertion' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Regular BST (worst case)?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Regular BST (worst case), performing a 'Insertion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][19] starts at base address 1600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[25][10]?",
    "options": [
      "2566",
      "2100",
      "2608",
      "2570"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (25 * 19 + 10) * 2 = 2570."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 34 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "191",
      "561",
      "140",
      "157"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 34*(33)/2 = 561. At 28% density, total edges = 157."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][33] starts at base address 1200 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[23][7]?",
    "options": [
      "2824",
      "2840",
      "2488",
      "3048"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (7 * 26 + 23) * 8 = 2840."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "325",
      "133",
      "94",
      "107"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 33% density, total edges = 107."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][29] starts at base address 2300 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[9][15]?",
    "options": [
      "4492",
      "3380",
      "4740",
      "4508"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (9 * 29 + 15) * 8 = 4508."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][34] starts at base address 2300 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[20][12]?",
    "options": [
      "5068",
      "5204",
      "5060",
      "3260"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (20 * 34 + 12) * 4 = 5068."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 25, 31, 35, 24, 26, 13, 5, 19], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "72",
      "103",
      "56",
      "89"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 72."
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
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [8, 45, 26, 13, 21, 49], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "84",
      "105",
      "109",
      "92"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Unsorted Array?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Unsorted Array, performing a 'Deletion' takes O(n)."
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
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][32] starts at base address 2300 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[17][5]?",
    "options": [
      "2800",
      "2640",
      "2808",
      "2896"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (5 * 22 + 17) * 4 = 2808."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 12, 11, 46, 3, 8, 34, 17, 14, 49], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "69",
      "161",
      "132",
      "115"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 115."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][36] starts at base address 1500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[15][28]?",
    "options": [
      "3772",
      "3764",
      "3916",
      "3180"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (15 * 36 + 28) * 4 = 3772."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "498",
      "564",
      "946",
      "520"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 55% density, total edges = 520."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][31] starts at base address 1100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[1][8]?",
    "options": [
      "1139",
      "1108",
      "1170",
      "1137"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (1 * 31 + 8) * 1 = 1139."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "496",
      "516",
      "820",
      "557"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 63% density, total edges = 516."
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
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "100",
      "73",
      "82",
      "153"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 54% density, total edges = 82."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [22, 19, 28, 13, 35, 44, 25, 35, 45, 28], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "152",
      "117",
      "134",
      "95"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 117."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 14, 14, 19, 14, 43, 37, 10, 15, 8, 13], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "151",
      "182",
      "199",
      "192"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 182."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][34] starts at base address 1600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[14][16]?",
    "options": [
      "2496",
      "3128",
      "3120",
      "3220"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (16 * 23 + 14) * 4 = 3128."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][37] starts at base address 2700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[5][26]?",
    "options": [
      "5444",
      "3740",
      "5548",
      "5428"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (26 * 13 + 5) * 8 = 5444."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 7, 15, 44, 36, 30, 40], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "102",
      "138",
      "121",
      "157"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 121."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Doubly Linked List?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "For Doubly Linked List, performing a 'Deletion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 9, 2, 40, 34, 35, 2, 44, 5, 31, 33], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "53",
      "93",
      "70",
      "51"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 53."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Doubly Linked List?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Doubly Linked List, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 4, 20, 6, 39, 25, 26, 17, 23, 27, 16], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "137",
      "180",
      "163",
      "180"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 163."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][31] starts at base address 1200 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[12][27]?",
    "options": [
      "2288",
      "2250",
      "2246",
      "1848"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (27 * 19 + 12) * 2 = 2250."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "46",
      "27",
      "78",
      "33"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 43% density, total edges = 33."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 8, 31, 40, 17, 19, 33, 12, 34, 43, 43], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "150",
      "110",
      "127",
      "79"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 110."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "386",
      "338",
      "314",
      "1128"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 30% density, total edges = 338."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Unsorted Array?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Unsorted Array, performing a 'Access' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 47%, how many edges are present in G?",
    "options": [
      "779",
      "695",
      "723",
      "1540"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 47% density, total edges = 723."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "34",
      "136",
      "42",
      "59"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 31% density, total edges = 42."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "1540",
      "523",
      "579",
      "495"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 34% density, total edges = 523."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 7, 48, 48, 41, 10, 5, 24, 37, 23], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "144",
      "147",
      "188",
      "164"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 147."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][39] starts at base address 2000 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[6][28]?",
    "options": [
      "2602",
      "2520",
      "2336",
      "2524"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (6 * 39 + 28) * 2 = 2524."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][17] starts at base address 1800 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[8][14]?",
    "options": [
      "2664",
      "2248",
      "2672",
      "2732"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (14 * 15 + 8) * 4 = 2672."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 46%, how many edges are present in G?",
    "options": [
      "87",
      "77",
      "190",
      "107"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 46% density, total edges = 87."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 39 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "741",
      "535",
      "477",
      "496"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 39*(38)/2 = 741. At 67% density, total edges = 496."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 49, 43, 10, 9, 44], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "106",
      "116",
      "123",
      "102"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 106."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "1653",
      "545",
      "603",
      "516"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 33% density, total edges = 545."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 34, 44, 42, 21, 49, 36], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "131",
      "114",
      "78",
      "158"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 114."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][31] starts at base address 2700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[1][17]?",
    "options": [
      "4188",
      "4292",
      "4204",
      "2836"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (17 * 11 + 1) * 8 = 4204."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][30] starts at base address 2300 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[3][19]?",
    "options": [
      "2439",
      "2407",
      "2357",
      "2409"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (3 * 30 + 19) * 1 = 2409."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][35] starts at base address 1800 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[7][20]?",
    "options": [
      "1940",
      "2100",
      "2063",
      "2065"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (7 * 35 + 20) * 1 = 2065."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "49",
      "66",
      "31",
      "37"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 57% density, total edges = 37."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][11] starts at base address 1100 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[3][3]?",
    "options": [
      "1412",
      "1340",
      "1172",
      "1324"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (3 * 9 + 3) * 8 = 1340."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "316",
      "368",
      "595",
      "333"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 56% density, total edges = 333."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][22] starts at base address 2700 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[25][19]?",
    "options": [
      "3882",
      "3650",
      "3838",
      "3834"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (25 * 22 + 19) * 2 = 3838."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [47, 11, 11, 40, 20, 12, 11], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "153",
      "158",
      "94",
      "141"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 141."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 3, 31, 32, 21, 43, 24, 45, 46, 3, 40, 29], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "111",
      "97",
      "80",
      "34"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 80."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Regular BST (worst case)?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Regular BST (worst case), performing a 'Deletion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][22] starts at base address 2100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[4][19]?",
    "options": [
      "2176",
      "2229",
      "2207",
      "2205"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (4 * 22 + 19) * 1 = 2207."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 1, 13, 44, 43, 20, 35], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "189",
      "186",
      "121",
      "169"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 169."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Regular BST (worst case)?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Regular BST (worst case), performing a 'Search' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][11] starts at base address 2400 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[15][1]?",
    "options": [
      "2449",
      "2432",
      "2415",
      "2430"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (1 * 17 + 15) * 1 = 2432."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 40, 5, 6, 46, 48], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "131",
      "114",
      "97",
      "160"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 114."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 15 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "105",
      "60",
      "75",
      "53"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 15*(14)/2 = 105. At 58% density, total edges = 60."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 32, 4, 38, 25, 45, 9, 41, 26, 26], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "245",
      "194",
      "204",
      "221"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 204."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][33] starts at base address 1500 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[8][19]?",
    "options": [
      "1804",
      "1956",
      "1930",
      "1934"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (19 * 11 + 8) * 2 = 1934."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Singly Linked List?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Singly Linked List, performing a 'Access' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 36, 16, 8, 33, 14, 23], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "126",
      "109",
      "142",
      "93"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 109."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][38] starts at base address 2500 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[5][36]?",
    "options": [
      "3990",
      "3946",
      "2860",
      "3950"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (36 * 20 + 5) * 2 = 3950."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "390",
      "451",
      "410",
      "820"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 50% density, total edges = 410."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 42, 29, 8, 20, 19, 19, 49, 3], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "259",
      "210",
      "227",
      "186"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 210."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "234",
      "207",
      "194",
      "351"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 59% density, total edges = 207."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 25%, how many edges are present in G?",
    "options": [
      "496",
      "124",
      "156",
      "108"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 25% density, total edges = 124."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "1275",
      "841",
      "892",
      "816"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 66% density, total edges = 841."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 18, 10, 21, 20, 12, 24, 28, 6, 37], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "171",
      "147",
      "164",
      "105"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 147."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "92",
      "105",
      "132",
      "351"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 30% density, total edges = 105."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 39 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "210",
      "268",
      "741",
      "229"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 39*(38)/2 = 741. At 31% density, total edges = 229."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][12] starts at base address 1500 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[1][3]?",
    "options": [
      "1527",
      "1513",
      "1503",
      "1515"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (1 * 12 + 3) * 1 = 1515."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 1, 18, 39, 26, 50, 40, 44, 43, 18], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "58",
      "86",
      "125",
      "103"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 86."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Sorted Array?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Sorted Array, performing a 'Deletion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 5, 48, 46, 2, 24, 11, 36, 3, 29], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "138",
      "123",
      "121",
      "101"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 121."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][12] starts at base address 1900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][2]?",
    "options": [
      "1964",
      "2300",
      "2284",
      "2396"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (4 * 12 + 2) * 8 = 2300."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][36] starts at base address 2300 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[1][32]?",
    "options": [
      "2428",
      "2716",
      "2572",
      "2564"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (1 * 36 + 32) * 4 = 2572."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 14, 23, 33, 21, 38, 36, 5, 38, 27, 8], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "222",
      "241",
      "205",
      "165"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 205."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [9, 10, 22, 40, 34, 39, 42, 20], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "72",
      "98",
      "81",
      "121"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 81."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 14, 20, 21, 32, 6], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "34",
      "70",
      "50",
      "67"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 50."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][32] starts at base address 2300 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[13][11]?",
    "options": [
      "5700",
      "5716",
      "5972",
      "3444"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (13 * 32 + 11) * 8 = 5716."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 1, 44, 46, 3, 44, 31, 1, 5, 17, 13], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "75",
      "92",
      "45",
      "119"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 75."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "855",
      "801",
      "774",
      "1431"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 56% density, total edges = 801."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "496",
      "374",
      "326",
      "342"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 69% density, total edges = 342."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Queue?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Queue, performing a 'Access' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 53 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "454",
      "507",
      "428",
      "1378"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 53*(52)/2 = 1378. At 33% density, total edges = 454."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [41, 5, 43, 33, 34], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "81",
      "155",
      "139",
      "122"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 122."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 70%, how many edges are present in G?",
    "options": [
      "990",
      "693",
      "671",
      "738"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 70% density, total edges = 693."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 59 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "1146",
      "1711",
      "1117",
      "1205"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 59*(58)/2 = 1711. At 67% density, total edges = 1146."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "573",
      "548",
      "624",
      "1275"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 45% density, total edges = 573."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Doubly Linked List?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, performing a 'Access' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "92",
      "84",
      "109",
      "136"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 68% density, total edges = 92."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][12] starts at base address 1700 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[3][6]?",
    "options": [
      "1790",
      "1804",
      "1736",
      "1786"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (6 * 7 + 3) * 2 = 1790."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 3, 4, 41, 40, 6, 22, 48, 43], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "60",
      "73",
      "56",
      "7"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 56."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 40, 21, 5, 26, 29, 6, 41, 34, 30, 40, 44], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "261",
      "244",
      "274",
      "232"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 244."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][10] starts at base address 2500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[3][8]?",
    "options": [
      "2692",
      "2652",
      "2596",
      "2644"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (3 * 10 + 8) * 4 = 2652."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "1035",
      "629",
      "698",
      "652"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 63% density, total edges = 652."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 28, 27, 42, 14, 15, 16, 38], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "130",
      "145",
      "147",
      "126"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 130."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][34] starts at base address 1600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[7][2]?",
    "options": [
      "2696",
      "2560",
      "1656",
      "2552"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (7 * 34 + 2) * 4 = 2560."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [14, 43, 17, 35, 4, 33, 21, 47, 8, 9, 3, 49], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "222",
      "208",
      "230",
      "239"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 222."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 49 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "293",
      "366",
      "317",
      "1176"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 49*(48)/2 = 1176. At 27% density, total edges = 317."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][37] starts at base address 2500 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[10][34]?",
    "options": [
      "2941",
      "2904",
      "2902",
      "2840"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (10 * 37 + 34) * 1 = 2904."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 41, 12, 23, 32], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "112",
      "135",
      "76",
      "129"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 112."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][37] starts at base address 2800 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[20][11]?",
    "options": [
      "8792",
      "8808",
      "4560",
      "9104"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (20 * 37 + 11) * 8 = 8808."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][24] starts at base address 2100 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[1][15]?",
    "options": [
      "2174",
      "2130",
      "2226",
      "2178"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (1 * 24 + 15) * 2 = 2178."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Sorted Array?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Sorted Array, performing a 'Search' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Singly Linked List?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2,
    "explanation": "For Singly Linked List, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [11, 21, 29, 16, 1, 16, 4], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "90",
      "50",
      "78",
      "61"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 61."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "1128",
      "552",
      "600",
      "528"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 49% density, total edges = 552."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 35, 15, 45, 31, 23, 36, 24, 8, 25, 41, 11], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "283",
      "242",
      "266",
      "291"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 266."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 23 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "253",
      "161",
      "195",
      "172"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 23*(22)/2 = 253. At 68% density, total edges = 172."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 32, 7, 2, 15, 36, 31, 45, 43, 31, 45, 3], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "278",
      "304",
      "261",
      "211"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 261."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "202",
      "247",
      "217",
      "435"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 50% density, total edges = 217."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 4, 9, 28, 44, 12, 8, 31, 28, 14, 12, 26], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "85",
      "144",
      "171",
      "127"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 127."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 29, 48, 20, 18, 14, 39, 11, 7, 21, 40, 1], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "166",
      "152",
      "129",
      "169"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 152."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][36] starts at base address 1800 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[16][1]?",
    "options": [
      "1854",
      "1816",
      "1833",
      "1835"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (1 * 19 + 16) * 1 = 1835."
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
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "215",
      "237",
      "282",
      "990"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 24% density, total edges = 237."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Queue?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 0,
    "explanation": "For Queue, performing a 'Search' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a AVL Tree?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 3,
    "explanation": "For AVL Tree, performing a 'Access' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][18] starts at base address 1400 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[2][16]?",
    "options": [
      "1482",
      "1432",
      "1480",
      "1487"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (16 * 5 + 2) * 1 = 1482."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][27] starts at base address 1000 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][19]?",
    "options": [
      "2524",
      "2516",
      "1076",
      "2604"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (19 * 20 + 1) * 4 = 2524."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "105",
      "190",
      "75",
      "85"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 45% density, total edges = 85."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][36] starts at base address 2900 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[9][9]?",
    "options": [
      "3696",
      "3224",
      "3620",
      "3612"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (9 * 19 + 9) * 4 = 3620."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][27] starts at base address 1700 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[10][8]?",
    "options": [
      "1978",
      "1780",
      "2005",
      "1976"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (10 * 27 + 8) * 1 = 1978."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 36, 12, 43, 44, 28, 41, 19, 38, 11, 15, 44], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "118",
      "91",
      "161",
      "135"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 118."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "255",
      "946",
      "299",
      "233"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 27% density, total edges = 255."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 12, 28, 9, 48, 41, 14, 16, 46, 48, 37, 42], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "263",
      "214",
      "280",
      "309"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 263."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "820",
      "246",
      "226",
      "287"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 30% density, total edges = 246."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][15] starts at base address 2300 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[5][8]?",
    "options": [
      "2380",
      "2472",
      "2454",
      "2450"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (8 * 9 + 5) * 2 = 2454."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][39] starts at base address 2600 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[4][18]?",
    "options": [
      "3098",
      "2672",
      "3072",
      "3070"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (18 * 26 + 4) * 1 = 3072."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "25",
      "37",
      "19",
      "66"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 38% density, total edges = 25."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [11, 39, 2, 27, 19, 12, 13, 11, 2, 41], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "123",
      "145",
      "151",
      "134"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 134."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][13] starts at base address 2900 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[12][8]?",
    "options": [
      "4836",
      "5084",
      "4852",
      "3668"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (8 * 29 + 12) * 8 = 4852."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][27] starts at base address 1400 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[11][15]?",
    "options": [
      "3648",
      "3632",
      "2720",
      "3792"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (15 * 18 + 11) * 8 = 3648."
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
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [22, 30, 18, 41, 50, 24, 8], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "161",
      "139",
      "178",
      "211"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 161."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 65%, how many edges are present in G?",
    "options": [
      "150",
      "172",
      "231",
      "139"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 65% density, total edges = 150."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 26, 50, 48, 34, 18, 26, 37, 38, 9, 34], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "248",
      "202",
      "231",
      "257"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 231."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][26] starts at base address 2600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[3][19]?",
    "options": [
      "2828",
      "4208",
      "4292",
      "4200"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (19 * 21 + 3) * 4 = 4208."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "9",
      "24",
      "45",
      "14"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 33% density, total edges = 14."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 23 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "253",
      "62",
      "73",
      "96"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 23*(22)/2 = 253. At 29% density, total edges = 73."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "318",
      "946",
      "274",
      "252"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 29% density, total edges = 274."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][21] starts at base address 2500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][11]?",
    "options": [
      "2588",
      "2712",
      "2796",
      "2704"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (2 * 21 + 11) * 4 = 2712."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 15, 44, 22, 5, 17, 3, 50, 43, 47, 7, 43], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "106",
      "129",
      "143",
      "126"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 126."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "411",
      "356",
      "1485",
      "329"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 24% density, total edges = 356."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "483",
      "507",
      "1128",
      "555"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 45% density, total edges = 507."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][11] starts at base address 2500 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[24][5]?",
    "options": [
      "2828",
      "2884",
      "2824",
      "2740"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (5 * 28 + 24) * 2 = 2828."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][17] starts at base address 1800 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[13][4]?",
    "options": [
      "2246",
      "1904",
      "2250",
      "2284"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (13 * 17 + 4) * 2 = 2250."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 16, 42, 41, 3, 7, 8, 33, 23], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "58",
      "105",
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
    "question": "A 2D array A[10][11] starts at base address 2800 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[3][5]?",
    "options": [
      "2920",
      "3208",
      "3224",
      "3304"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (5 * 10 + 3) * 8 = 3224."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "35",
      "14",
      "91",
      "21"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 24% density, total edges = 21."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 64%, how many edges are present in G?",
    "options": [
      "208",
      "195",
      "234",
      "325"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 64% density, total edges = 208."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 4, 12, 34, 10, 8, 35], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "106",
      "113",
      "96",
      "60"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 96."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][30] starts at base address 2200 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[7][28]?",
    "options": [
      "3228",
      "3236",
      "3272",
      "2984"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (28 * 9 + 7) * 4 = 3236."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][13] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[3][10]?",
    "options": [
      "2694",
      "2724",
      "2698",
      "2660"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (3 * 13 + 10) * 2 = 2698."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a Queue?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Queue, performing a 'Deletion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][35] starts at base address 2600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[3][31]?",
    "options": [
      "3284",
      "3144",
      "2972",
      "3136"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (3 * 35 + 31) * 4 = 3144."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "695",
      "638",
      "1596",
      "610"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 40% density, total edges = 638."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 40, 35, 8, 22, 9, 16, 21], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "151",
      "160",
      "168",
      "114"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 151."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][24] starts at base address 1700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[8][12]?",
    "options": [
      "2708",
      "2468",
      "2724",
      "2804"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (12 * 10 + 8) * 8 = 2724."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][17] starts at base address 2900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[4][9]?",
    "options": [
      "2972",
      "3088",
      "3084",
      "3108"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (9 * 10 + 4) * 2 = 3088."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 16, 47, 33, 11, 26, 20, 34, 8, 9], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "136",
      "107",
      "130",
      "119"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 119."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "454",
      "406",
      "382",
      "1128"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 36% density, total edges = 406."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 46%, how many edges are present in G?",
    "options": [
      "212",
      "228",
      "496",
      "260"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 46% density, total edges = 228."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 18, 15, 42, 35, 3, 29, 26, 34, 39, 12], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "33",
      "49",
      "34",
      "51"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 34."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][17] starts at base address 2300 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[20][8]?",
    "options": [
      "3580",
      "4124",
      "4332",
      "4108"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (8 * 26 + 20) * 8 = 4124."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [47, 44, 6, 1, 46, 34, 13], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "50",
      "97",
      "103",
      "114"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 97."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 4, 50, 49, 28, 21, 34, 5, 34, 23, 22], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "232",
      "220",
      "191",
      "215"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 215."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][28] starts at base address 1200 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[23][7]?",
    "options": [
      "2048",
      "2040",
      "1844",
      "2156"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (7 * 27 + 23) * 4 = 2048."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "496",
      "202",
      "218",
      "250"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 44% density, total edges = 218."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "528",
      "306",
      "339",
      "290"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 58% density, total edges = 306."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 3, 50, 43, 6, 44, 42, 45], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "232",
      "215",
      "188",
      "257"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 215."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][19] starts at base address 1500 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[8][12]?",
    "options": [
      "1596",
      "1662",
      "1683",
      "1664"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (8 * 19 + 12) * 1 = 1664."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][23] starts at base address 1700 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[2][7]?",
    "options": [
      "1852",
      "1802",
      "1806",
      "1728"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (2 * 23 + 7) * 2 = 1806."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 25, 12, 17, 46, 44], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "84",
      "54",
      "67",
      "84"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 67."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][15] starts at base address 2500 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[10][1]?",
    "options": [
      "2520",
      "2546",
      "2550",
      "2580"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (1 * 15 + 10) * 2 = 2550."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][19] starts at base address 2800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[3][7]?",
    "options": [
      "2902",
      "2890",
      "2842",
      "2886"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (7 * 6 + 3) * 2 = 2890."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 41, 24, 14, 30, 28, 38, 28, 39, 16, 13, 34], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "109",
      "149",
      "162",
      "132"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 132."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][33] starts at base address 2900 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[9][31]?",
    "options": [
      "4204",
      "4344",
      "4212",
      "4016"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (9 * 33 + 31) * 4 = 4212."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][18] starts at base address 1300 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[18][4]?",
    "options": [
      "1372",
      "1402",
      "1423",
      "1400"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (4 * 21 + 18) * 1 = 1402."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 23 vertices. If the graph connectivity density is 21%, how many edges are present in G?",
    "options": [
      "253",
      "42",
      "53",
      "76"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 23*(22)/2 = 253. At 21% density, total edges = 53."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "9",
      "45",
      "4",
      "19"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 22% density, total edges = 9."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 25, 47, 16, 16, 46, 35, 28, 44, 36, 14, 45], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "142",
      "159",
      "104",
      "158"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 142."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][27] starts at base address 2900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[11][8]?",
    "options": [
      "5556",
      "5340",
      "3604",
      "5324"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (11 * 27 + 8) * 8 = 5340."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 1, 14, 20, 18, 18, 9, 7, 20, 10, 4, 46], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "100",
      "71",
      "118",
      "117"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 100."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "666",
      "281",
      "299",
      "336"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 45% density, total edges = 299."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][17] starts at base address 2000 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[5][3]?",
    "options": [
      "2060",
      "2352",
      "2420",
      "2344"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (5 * 17 + 3) * 4 = 2352."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 9, 32, 29, 11, 29, 32, 30, 23, 43], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "62",
      "41",
      "79",
      "94"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 62."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "803",
      "755",
      "731",
      "1128"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 67% density, total edges = 755."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "64",
      "190",
      "54",
      "84"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 34% density, total edges = 64."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][35] starts at base address 2000 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[16][25]?",
    "options": [
      "3228",
      "3182",
      "3178",
      "2800"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (25 * 23 + 16) * 2 = 3182."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][28] starts at base address 2200 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[1][13]?",
    "options": [
      "2422",
      "2213",
      "2420",
      "2439"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (13 * 17 + 1) * 1 = 2422."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 12, 11, 48, 36], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "71",
      "90",
      "73",
      "121"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 73."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "946",
      "621",
      "687",
      "643"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 68% density, total edges = 643."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [22, 45, 12, 25, 31, 11, 26, 5, 17, 4, 47], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "172",
      "211",
      "211",
      "194"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 194."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [11, 25, 15, 17, 24, 1, 33, 49, 47, 32], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "85",
      "85",
      "68",
      "57"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 68."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][34] starts at base address 1100 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[3][22]?",
    "options": [
      "5684",
      "1628",
      "5700",
      "5908"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (22 * 26 + 3) * 8 = 5700."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 40, 46, 9, 22, 35, 24], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "115",
      "161",
      "86",
      "132"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 115."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "41",
      "27",
      "91",
      "20"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 30% density, total edges = 27."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 38 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "381",
      "400",
      "438",
      "703"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 38*(37)/2 = 703. At 57% density, total edges = 400."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][13] starts at base address 1000 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[1][3]?",
    "options": [
      "1056",
      "1064",
      "1116",
      "1012"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (1 * 13 + 3) * 4 = 1064."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 19, 40, 12, 19], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "59",
      "132",
      "109",
      "92"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 10, 12, 1, 15], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "26",
      "43",
      "38",
      "22"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 26."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][34] starts at base address 1500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[17][28]?",
    "options": [
      "2358",
      "2329",
      "1976",
      "2327"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (28 * 29 + 17) * 1 = 2329."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "146",
      "133",
      "325",
      "172"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 45% density, total edges = 146."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 23 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "253",
      "148",
      "159",
      "182"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 23*(22)/2 = 253. At 63% density, total edges = 159."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][26] starts at base address 1000 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[1][7]?",
    "options": [
      "1014",
      "1118",
      "1066",
      "1062"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (1 * 26 + 7) * 2 = 1066."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][21] starts at base address 2200 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[8][8]?",
    "options": [
      "2374",
      "2264",
      "2397",
      "2376"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (8 * 21 + 8) * 1 = 2376."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "61",
      "85",
      "69",
      "120"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 58% density, total edges = 69."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 3, 15, 30, 33, 30, 12, 19, 10, 33, 11, 35], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "103",
      "48",
      "116",
      "86"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 86."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 21 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "80",
      "111",
      "90",
      "210"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 21*(20)/2 = 210. At 43% density, total edges = 90."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "465",
      "291",
      "260",
      "245"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 56% density, total edges = 260."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 20%, how many edges are present in G?",
    "options": [
      "48",
      "153",
      "30",
      "21"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 20% density, total edges = 30."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][21] starts at base address 1300 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[5][11]?",
    "options": [
      "1574",
      "1528",
      "1532",
      "1410"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (5 * 21 + 11) * 2 = 1532."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 48, 38, 3, 11], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "120",
      "86",
      "141",
      "103"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 103."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "1035",
      "284",
      "215",
      "238"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 23% density, total edges = 238."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "412",
      "449",
      "394",
      "666"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 62% density, total edges = 412."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "171",
      "114",
      "105",
      "133"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 67% density, total edges = 114."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 10, 29, 29, 50, 12, 35, 24], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "221",
      "204",
      "239",
      "165"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 204."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 32, 27, 48, 29, 50, 9, 30, 50, 14], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "247",
      "195",
      "238",
      "255"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 238."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "87",
      "99",
      "300",
      "124"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 33% density, total edges = 99."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [11, 26, 34, 45, 18, 34, 2, 10, 39], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "151",
      "123",
      "152",
      "134"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 134."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 41%, how many edges are present in G?",
    "options": [
      "143",
      "170",
      "351",
      "130"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 41% density, total edges = 143."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 32, 43, 27, 7, 15, 42, 22, 22, 6], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "143",
      "109",
      "160",
      "150"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 143."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 29, 20, 48, 15, 34, 19, 40, 22], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "49",
      "83",
      "86",
      "66"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 66."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 46, 23, 46, 15, 24, 3, 42, 1, 12, 40], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "236",
      "219",
      "220",
      "200"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 219."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 12, 29, 40, 10, 15, 33, 25, 48, 44], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "126",
      "106",
      "111",
      "128"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 111."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][38] starts at base address 2100 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[16][36]?",
    "options": [
      "3252",
      "3384",
      "3464",
      "3388"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (16 * 38 + 36) * 2 = 3388."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][28] starts at base address 2300 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[7][24]?",
    "options": [
      "2468",
      "2518",
      "2548",
      "2520"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (7 * 28 + 24) * 1 = 2520."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][26] starts at base address 1300 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[16][1]?",
    "options": [
      "3072",
      "2968",
      "2960",
      "1364"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (16 * 26 + 1) * 4 = 2968."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][26] starts at base address 2000 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[12][4]?",
    "options": [
      "2127",
      "2102",
      "2048",
      "2104"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (4 * 23 + 12) * 1 = 2104."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][21] starts at base address 2100 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[17][12]?",
    "options": [
      "3576",
      "2916",
      "3660",
      "3568"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (17 * 21 + 12) * 4 = 3576."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 4, 12, 36, 14, 33, 15], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "102",
      "138",
      "52",
      "119"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 102."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 21 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "210",
      "44",
      "75",
      "54"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 21*(20)/2 = 210. At 26% density, total edges = 54."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "182",
      "435",
      "152",
      "137"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 35% density, total edges = 152."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "110",
      "152",
      "378",
      "124"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 33% density, total edges = 124."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 39 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "414",
      "395",
      "453",
      "741"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 39*(38)/2 = 741. At 56% density, total edges = 414."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][30] starts at base address 2900 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[21][22]?",
    "options": [
      "3565",
      "3537",
      "3362",
      "3535"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (22 * 28 + 21) * 1 = 3537."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "17",
      "32",
      "45",
      "22"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 51% density, total edges = 22."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 65%, how many edges are present in G?",
    "options": [
      "930",
      "903",
      "1431",
      "984"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 65% density, total edges = 930."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Stack?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For Stack, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Doubly Linked List?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For Doubly Linked List, performing a 'Search' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "33",
      "39",
      "52",
      "78"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 51% density, total edges = 39."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [8, 48, 16, 50, 9], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "139",
      "122",
      "172",
      "114"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 122."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "381",
      "528",
      "332",
      "348"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 66% density, total edges = 348."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [32, 43, 47, 19, 44, 28, 18], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "90",
      "139",
      "169",
      "122"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 122."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "232",
      "406",
      "203",
      "189"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 50% density, total edges = 203."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "150",
      "195",
      "435",
      "165"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 38% density, total edges = 165."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][36] starts at base address 1800 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[18][17]?",
    "options": [
      "2158",
      "2106",
      "2156",
      "2178"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (17 * 20 + 18) * 1 = 2158."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 7, 3, 37, 20, 6, 18, 9, 1], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "67",
      "107",
      "110",
      "90"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 90."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 33, 23, 7, 29, 39, 30, 8, 18, 50], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "67",
      "74",
      "84",
      "63"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 67."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][17] starts at base address 2000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[1][3]?",
    "options": [
      "2136",
      "2152",
      "2200",
      "2024"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (3 * 6 + 1) * 8 = 2152."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "486",
      "1081",
      "463",
      "533"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 45% density, total edges = 486."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "383",
      "343",
      "323",
      "780"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 44% density, total edges = 343."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 43, 20, 40, 35, 24, 12, 47, 8, 4, 34], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "192",
      "174",
      "197",
      "180"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 180."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 43, 48, 16, 17, 17, 23, 37, 3, 7], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "92",
      "140",
      "109",
      "91"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [22, 6, 45, 23, 25, 16, 46, 39, 18, 26, 12], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "99",
      "146",
      "138",
      "121"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 121."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "136",
      "94",
      "77",
      "69"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 57% density, total edges = 77."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "36",
      "45",
      "26",
      "21"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 58% density, total edges = 26."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 25, 7, 23, 24, 21, 6, 15], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "144",
      "151",
      "127",
      "79"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 127."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][15] starts at base address 2700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][10]?",
    "options": [
      "3740",
      "3860",
      "3756",
      "2860"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (10 * 13 + 2) * 8 = 3756."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 19, 25, 25, 15, 27, 19, 46, 13], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "98",
      "69",
      "81",
      "106"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 81."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "925",
      "983",
      "1653",
      "896"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 56% density, total edges = 925."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 21, 1, 27, 11, 23, 12, 16], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "114",
      "103",
      "120",
      "60"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 103."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][14] starts at base address 2800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[12][10]?",
    "options": [
      "3264",
      "3040",
      "3220",
      "3224"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (10 * 20 + 12) * 2 = 3224."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 50 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "697",
      "772",
      "1225",
      "722"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 50*(49)/2 = 1225. At 59% density, total edges = 722."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 9, 23, 48, 32, 5, 21, 45, 18, 6], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "194",
      "138",
      "177",
      "198"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 177."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][20] starts at base address 2000 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][3]?",
    "options": [
      "2100",
      "2132",
      "2096",
      "2012"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (3 * 16 + 2) * 2 = 2100."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][14] starts at base address 1900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[6][1]?",
    "options": [
      "1912",
      "1934",
      "1956",
      "1930"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (1 * 11 + 6) * 2 = 1934."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Deletion' operation on a AVL Tree?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "For AVL Tree, performing a 'Deletion' takes O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "177",
      "198",
      "240",
      "861"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 23% density, total edges = 198."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 6, 43, 27, 41, 4, 11, 5, 34, 18], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "179",
      "185",
      "132",
      "168"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 168."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 24 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "126",
      "90",
      "102",
      "276"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 24*(23)/2 = 276. At 37% density, total edges = 102."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "1596",
      "982",
      "897",
      "925"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 58% density, total edges = 925."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "378",
      "179",
      "151",
      "137"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 40% density, total edges = 151."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "528",
      "237",
      "253",
      "286"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 48% density, total edges = 253."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 38, 22, 8, 9, 21], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "68",
      "109",
      "100",
      "92"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 92."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 23 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "85",
      "253",
      "119",
      "96"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 23*(22)/2 = 253. At 38% density, total edges = 96."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][32] starts at base address 2600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][3]?",
    "options": [
      "2612",
      "2752",
      "2760",
      "2812"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (3 * 13 + 1) * 4 = 2760."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][26] starts at base address 1600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[16][6]?",
    "options": [
      "3280",
      "1984",
      "3288",
      "3392"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (16 * 26 + 6) * 4 = 3288."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 35, 28, 38, 36, 7, 40], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "63",
      "91",
      "108",
      "119"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 91."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][30] starts at base address 1200 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[25][16]?",
    "options": [
      "4384",
      "4256",
      "4264",
      "2800"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (25 * 30 + 16) * 4 = 4264."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 4, 48, 7, 23, 13], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "90",
      "107",
      "59",
      "97"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 90."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][19] starts at base address 1400 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[10][1]?",
    "options": [
      "1433",
      "1435",
      "1410",
      "1460"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (1 * 25 + 10) * 1 = 1435."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 3, 1, 47, 25, 8, 34], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "36",
      "20",
      "4",
      "19"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 19."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 25%, how many edges are present in G?",
    "options": [
      "183",
      "148",
      "131",
      "595"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 25% density, total edges = 148."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "72",
      "171",
      "53",
      "44"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 31% density, total edges = 53."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 24 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "128",
      "104",
      "276",
      "92"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 24*(23)/2 = 276. At 38% density, total edges = 104."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Stack?",
    "options": [
      "O(n)",
      "O(log n)",
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
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "32",
      "91",
      "25",
      "46"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 36% density, total edges = 32."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][27] starts at base address 2900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[1][20]?",
    "options": [
      "2940",
      "3364",
      "3342",
      "3338"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (20 * 11 + 1) * 2 = 3342."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 46%, how many edges are present in G?",
    "options": [
      "820",
      "377",
      "357",
      "418"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 46% density, total edges = 377."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [8, 21, 38, 17, 24, 5, 25], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "125",
      "100",
      "108",
      "132"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 108."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][39] starts at base address 1700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[13][4]?",
    "options": [
      "2116",
      "2684",
      "2492",
      "2508"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (4 * 22 + 13) * 8 = 2508."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][27] starts at base address 2400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[8][13]?",
    "options": [
      "2627",
      "2504",
      "2629",
      "2656"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (8 * 27 + 13) * 1 = 2629."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][21] starts at base address 2700 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[6][5]?",
    "options": [
      "2844",
      "2730",
      "2819",
      "2821"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (5 * 23 + 6) * 1 = 2821."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][14] starts at base address 2900 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][2]?",
    "options": [
      "2976",
      "2968",
      "3012",
      "2908"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (2 * 9 + 1) * 4 = 2976."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][32] starts at base address 1500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[3][11]?",
    "options": [
      "1533",
      "1778",
      "1803",
      "1776"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (11 * 25 + 3) * 1 = 1778."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Search' operation on a Unsorted Array?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "For Unsorted Array, performing a 'Search' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 12, 44, 49, 4, 37, 40], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "151",
      "155",
      "168",
      "109"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 151."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Queue?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Queue, performing a 'Insertion' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "217",
      "171",
      "465",
      "186"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 40% density, total edges = 186."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 5, 29, 5, 9, 44, 45, 7, 9, 9, 14, 38], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "195",
      "186",
      "203",
      "153"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 186."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 21 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "100",
      "69",
      "210",
      "79"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 21*(20)/2 = 210. At 38% density, total edges = 79."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 36, 5, 27, 15, 32, 10], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "41",
      "80",
      "97",
      "85"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 80."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 20, 34, 29, 42], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "83",
      "100",
      "54",
      "66"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 66."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "89",
      "75",
      "406",
      "118"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 22% density, total edges = 89."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][27] starts at base address 2100 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[19][9]?",
    "options": [
      "6260",
      "6276",
      "3468",
      "6492"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (19 * 27 + 9) * 8 = 6276."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 49, 40, 42, 6, 31, 42], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "177",
      "188",
      "171",
      "137"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 171."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "351",
      "305",
      "320",
      "465"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 69% density, total edges = 320."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][25] starts at base address 2600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[14][18]?",
    "options": [
      "5744",
      "4616",
      "5544",
      "5528"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (14 * 25 + 18) * 8 = 5544."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 28, 20, 14, 36, 46, 43, 34, 6, 17], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "281",
      "298",
      "264",
      "221"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 264."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 52 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "782",
      "808",
      "1326",
      "860"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 52*(51)/2 = 1326. At 61% density, total edges = 808."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 40, 35, 38, 37, 11, 25, 48, 2, 18], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "181",
      "192",
      "198",
      "161"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 181."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 41%, how many edges are present in G?",
    "options": [
      "946",
      "387",
      "431",
      "365"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 41% density, total edges = 387."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 21 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "57",
      "210",
      "67",
      "88"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 21*(20)/2 = 210. At 32% density, total edges = 67."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 30, 5, 27, 19], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "62",
      "67",
      "84",
      "94"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 67."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 38 vertices. If the graph connectivity density is 46%, how many edges are present in G?",
    "options": [
      "323",
      "703",
      "304",
      "361"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 38*(37)/2 = 703. At 46% density, total edges = 323."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 55 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "649",
      "594",
      "567",
      "1485"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 55*(54)/2 = 1485. At 40% density, total edges = 594."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][35] starts at base address 2500 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[13][20]?",
    "options": [
      "3122",
      "3156",
      "3126",
      "3020"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (20 * 15 + 13) * 2 = 3126."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "351",
      "391",
      "331",
      "780"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 45% density, total edges = 351."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "465",
      "125",
      "156",
      "110"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 27% density, total edges = 125."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 48, 11, 40, 47, 30, 30, 7, 11, 24, 3, 32], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "141",
      "101",
      "118",
      "99"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 101."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][28] starts at base address 2500 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[2][20]?",
    "options": [
      "3620",
      "2820",
      "3636",
      "3692"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (20 * 7 + 2) * 8 = 3636."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Insertion' operation on a Sorted Array?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "For Sorted Array, performing a 'Insertion' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][39] starts at base address 2900 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[2][21]?",
    "options": [
      "4000",
      "3992",
      "3068",
      "4052"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (21 * 13 + 2) * 4 = 4000."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "99",
      "113",
      "378",
      "141"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 30% density, total edges = 113."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "101",
      "351",
      "128",
      "88"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 29% density, total edges = 101."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][37] starts at base address 2700 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][28]?",
    "options": [
      "3592",
      "2812",
      "3600",
      "3632"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (28 * 8 + 1) * 4 = 3600."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 27, 24, 37, 38], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "125",
      "51",
      "101",
      "118"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 101."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 8, 18, 10, 35, 39], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "36",
      "82",
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
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "455",
      "861",
      "392",
      "413"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 48% density, total edges = 413."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [47, 18, 21, 15, 40, 22, 15], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "181",
      "158",
      "94",
      "141"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 141."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][25] starts at base address 2400 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][6]?",
    "options": [
      "2836",
      "2908",
      "2424",
      "2828"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (6 * 18 + 1) * 4 = 2836."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 39, 45, 50, 50, 50], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "171",
      "134",
      "188",
      "221"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 171."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 52 vertices. If the graph connectivity density is 46%, how many edges are present in G?",
    "options": [
      "609",
      "1326",
      "661",
      "583"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 52*(51)/2 = 1326. At 46% density, total edges = 609."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Stack?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "For Stack, performing a 'Access' takes O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 1, 45, 36, 40, 50, 34], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "199",
      "159",
      "176",
      "122"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 159."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][27] starts at base address 1000 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[3][15]?",
    "options": [
      "1180",
      "1376",
      "1384",
      "1492"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (3 * 27 + 15) * 4 = 1384."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 50 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "367",
      "442",
      "1225",
      "392"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 50*(49)/2 = 1225. At 32% density, total edges = 392."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "521",
      "584",
      "861",
      "542"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 63% density, total edges = 542."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][29] starts at base address 1100 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[7][4]?",
    "options": [
      "1348",
      "1212",
      "1304",
      "1296"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (4 * 11 + 7) * 4 = 1304."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][31] starts at base address 2700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[7][4]?",
    "options": [
      "3172",
      "2924",
      "3276",
      "3156"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (4 * 13 + 7) * 8 = 3172."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "496",
      "93",
      "109",
      "141"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 22% density, total edges = 109."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 39, 2, 1, 20, 37, 39, 31, 26, 6], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "229",
      "195",
      "238",
      "212"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 212."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][25] starts at base address 2500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[4][15]?",
    "options": [
      "2937",
      "2968",
      "2939",
      "2560"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (15 * 29 + 4) * 1 = 2939."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "404",
      "439",
      "595",
      "387"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 68% density, total edges = 404."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 49, 40, 2, 25], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "158",
      "143",
      "91",
      "141"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 141."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "488",
      "508",
      "549",
      "820"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 62% density, total edges = 508."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 35, 26, 46, 17, 24, 30, 41, 47], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "251",
      "234",
      "219",
      "275"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 234."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][10] starts at base address 1000 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[11][2]?",
    "options": [
      "1078",
      "1074",
      "1106",
      "1044"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (2 * 14 + 11) * 2 = 1078."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][16] starts at base address 1800 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[10][7]?",
    "options": [
      "2608",
      "2712",
      "2360",
      "2592"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (7 * 13 + 10) * 8 = 2608."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "24",
      "45",
      "19",
      "34"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 54% density, total edges = 24."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "780",
      "510",
      "530",
      "570"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 68% density, total edges = 530."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][33] starts at base address 2800 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][25]?",
    "options": [
      "3000",
      "3296",
      "3156",
      "3164"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (2 * 33 + 25) * 4 = 3164."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 52 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "464",
      "516",
      "438",
      "1326"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 52*(51)/2 = 1326. At 35% density, total edges = 464."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "254",
      "275",
      "317",
      "861"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 32% density, total edges = 275."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 16, 34, 4, 36, 19, 23], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "146",
      "127",
      "109",
      "144"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 127."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of performing a 'Access' operation on a Sorted Array?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "For Sorted Array, performing a 'Access' takes O(1)."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "406",
      "154",
      "111",
      "125"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 31% density, total edges = 125."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 34, 4, 44, 34, 13, 16, 11, 50, 4], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "133",
      "106",
      "82",
      "89"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 89."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "485",
      "421",
      "442",
      "903"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 49% density, total edges = 442."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "780",
      "483",
      "523",
      "463"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 62% density, total edges = 483."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "22",
      "29",
      "91",
      "43"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 32% density, total edges = 29."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [30, 10, 42, 28, 25, 11, 14, 29, 24, 20, 48, 36], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "152",
      "105",
      "135",
      "160"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 135."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 47, 46, 42, 42, 32, 1, 26, 32], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "243",
      "244",
      "210",
      "260"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 243."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 11, 49, 44, 39], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "104",
      "184",
      "157",
      "140"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 140."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][31] starts at base address 1100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[8][11]?",
    "options": [
      "1357",
      "1390",
      "1188",
      "1359"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (8 * 31 + 11) * 1 = 1359."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 43, 46, 41, 9], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "89",
      "158",
      "129",
      "112"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 112."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][27] starts at base address 2200 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[24][19]?",
    "options": [
      "3534",
      "3112",
      "3588",
      "3530"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (24 * 27 + 19) * 2 = 3534."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][15] starts at base address 1500 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[6][1]?",
    "options": [
      "1548",
      "1852",
      "1700",
      "1684"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (1 * 19 + 6) * 8 = 1700."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 30, 7, 1, 20, 48, 6, 32, 21, 6, 42], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "58",
      "71",
      "88",
      "91"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 71."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "27",
      "17",
      "12",
      "45"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 38% density, total edges = 17."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "574",
      "619",
      "990",
      "552"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 58% density, total edges = 574."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][16] starts at base address 2800 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[4][2]?",
    "options": [
      "3128",
      "2832",
      "3056",
      "3064"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (4 * 16 + 2) * 4 = 3064."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "215",
      "666",
      "233",
      "270"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 35% density, total edges = 233."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][15] starts at base address 1600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[12][6]?",
    "options": [
      "2348",
      "1888",
      "2240",
      "2248"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (6 * 25 + 12) * 4 = 2248."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "136",
      "53",
      "45",
      "70"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 39% density, total edges = 53."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][18] starts at base address 2400 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][16]?",
    "options": [
      "3248",
      "3104",
      "2912",
      "3088"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (4 * 18 + 16) * 8 = 3104."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 32, 36, 2, 7, 7, 15, 14], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "115",
      "130",
      "132",
      "99"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 115."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [9, 20, 35, 17, 21, 36, 14, 16, 42, 25], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "64",
      "99",
      "81",
      "55"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 64."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][25] starts at base address 2500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[14][10]?",
    "options": [
      "5380",
      "5580",
      "3620",
      "5364"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (14 * 25 + 10) * 8 = 5380."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 25, 33, 43, 25, 23, 31], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "159",
      "101",
      "133",
      "116"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 116."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][37] starts at base address 1000 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][1]?",
    "options": [
      "1008",
      "1300",
      "1292",
      "1448"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (2 * 37 + 1) * 4 = 1300."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 49 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "446",
      "519",
      "1176",
      "470"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 49*(48)/2 = 1176. At 40% density, total edges = 470."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][33] starts at base address 2400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[11][19]?",
    "options": [
      "2782",
      "2815",
      "2780",
      "2609"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (11 * 33 + 19) * 1 = 2782."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 29, 14, 27, 44, 12, 3], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "137",
      "70",
      "147",
      "120"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 120."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "655",
      "574",
      "601",
      "1431"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 42% density, total edges = 601."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 40, 31, 15, 50], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "71",
      "113",
      "144",
      "130"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 113."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "728",
      "1081",
      "681",
      "658"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 63% density, total edges = 681."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 49 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "340",
      "413",
      "364",
      "1176"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 49*(48)/2 = 1176. At 31% density, total edges = 364."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 43, 18, 11, 40, 50, 12, 3, 33, 8, 24, 3], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "112",
      "114",
      "131",
      "154"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 114."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 11, 21, 23, 3, 38], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "114",
      "100",
      "58",
      "97"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 97."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 35, 12, 34, 39, 46, 9, 5, 33, 12, 16, 1], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "256",
      "213",
      "223",
      "240"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 223."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][24] starts at base address 2300 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[9][3]?",
    "options": [
      "2520",
      "2408",
      "2528",
      "2592"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (3 * 16 + 9) * 4 = 2528."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 7, 18, 16, 50], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "65",
      "41",
      "82",
      "81"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 65."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 32, 48, 8, 26, 9, 44, 44], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "188",
      "162",
      "179",
      "114"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 162."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "903",
      "605",
      "584",
      "648"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 67% density, total edges = 605."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "583",
      "1596",
      "498",
      "526"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 33% density, total edges = 526."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "189",
      "351",
      "176",
      "216"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 54% density, total edges = 189."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 31 vertices. If the graph connectivity density is 53%, how many edges are present in G?",
    "options": [
      "465",
      "231",
      "246",
      "277"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 31*(30)/2 = 465. At 53% density, total edges = 246."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 24 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "117",
      "81",
      "93",
      "276"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 24*(23)/2 = 276. At 34% density, total edges = 93."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "488",
      "946",
      "554",
      "510"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 54% density, total edges = 510."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 59 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "1239",
      "1711",
      "1151",
      "1180"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 59*(58)/2 = 1711. At 69% density, total edges = 1180."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "285",
      "269",
      "528",
      "318"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 54% density, total edges = 285."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 19, 23, 14, 13, 37, 36, 17, 26, 34, 4, 22], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "69",
      "120",
      "116",
      "103"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 103."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][25] starts at base address 2900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[15][23]?",
    "options": [
      "6068",
      "5660",
      "6084",
      "6284"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (15 * 25 + 23) * 8 = 6084."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 24 vertices. If the graph connectivity density is 65%, how many edges are present in G?",
    "options": [
      "276",
      "179",
      "167",
      "203"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 24*(23)/2 = 276. At 65% density, total edges = 179."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][35] starts at base address 2600 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[15][5]?",
    "options": [
      "3165",
      "3130",
      "2675",
      "3128"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (15 * 35 + 5) * 1 = 3130."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][10] starts at base address 1700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[9][7]?",
    "options": [
      "3436",
      "2204",
      "3212",
      "3228"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (7 * 26 + 9) * 8 = 3228."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][31] starts at base address 1400 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[14][26]?",
    "options": [
      "4312",
      "5328",
      "5064",
      "5080"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (14 * 31 + 26) * 8 = 5080."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][36] starts at base address 2500 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[2][18]?",
    "options": [
      "2572",
      "2860",
      "2864",
      "2884"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (18 * 10 + 2) * 2 = 2864."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 17, 25, 40, 10, 19, 27, 8, 21, 32], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "236",
      "167",
      "232",
      "215"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 215."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 23 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "197",
      "174",
      "163",
      "253"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 23*(22)/2 = 253. At 69% density, total edges = 174."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][18] starts at base address 2900 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[18][7]?",
    "options": [
      "3249",
      "3026",
      "3231",
      "3229"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (18 * 18 + 7) * 1 = 3231."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][37] starts at base address 2800 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[17][11]?",
    "options": [
      "3696",
      "3780",
      "3548",
      "3704"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (11 * 19 + 17) * 4 = 3704."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][30] starts at base address 1800 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][18]?",
    "options": [
      "2648",
      "2232",
      "2904",
      "2664"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (3 * 30 + 18) * 8 = 2664."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][30] starts at base address 1300 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[9][8]?",
    "options": [
      "1840",
      "1848",
      "1588",
      "1912"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (8 * 16 + 9) * 4 = 1848."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 5, 25, 10, 19, 50, 9, 29], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "107",
      "100",
      "90",
      "40"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 90."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][39] starts at base address 1200 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[7][35]?",
    "options": [
      "2900",
      "2908",
      "2956",
      "2180"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (35 * 12 + 7) * 4 = 2908."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "780",
      "554",
      "494",
      "514"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 66% density, total edges = 514."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "865",
      "1596",
      "950",
      "893"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 56% density, total edges = 893."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 36, 2, 45, 44], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "83",
      "38",
      "81",
      "98"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 81."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 21%, how many edges are present in G?",
    "options": [
      "666",
      "176",
      "139",
      "121"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 21% density, total edges = 139."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "129",
      "143",
      "171",
      "378"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 38% density, total edges = 143."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][39] starts at base address 1200 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[14][37]?",
    "options": [
      "7088",
      "6936",
      "5344",
      "6920"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (37 * 19 + 14) * 8 = 6936."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 19, 11, 42, 22, 7, 7, 7, 10, 21, 41, 16], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "215",
      "187",
      "256",
      "232"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 215."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][26] starts at base address 1800 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[14][17]?",
    "options": [
      "2137",
      "2156",
      "2135",
      "2038"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (17 * 19 + 14) * 1 = 2137."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [41, 11, 2, 43, 32, 39, 2, 20], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "54",
      "56",
      "13",
      "71"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 54."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 43, 26, 12, 41, 18, 28, 38, 41], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "97",
      "114",
      "69",
      "123"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 97."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 42, 40, 39, 19, 9, 34, 12, 40, 3], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "112",
      "82",
      "135",
      "95"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 95."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][13] starts at base address 2000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[3][5]?",
    "options": [
      "2264",
      "2224",
      "2208",
      "2120"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (5 * 5 + 3) * 8 = 2224."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 25%, how many edges are present in G?",
    "options": [
      "57",
      "231",
      "46",
      "79"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 25% density, total edges = 57."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 3, 25, 2, 30, 45, 6, 15, 2], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "169",
      "184",
      "186",
      "126"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 169."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "499",
      "1128",
      "451",
      "427"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 40% density, total edges = 451."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][35] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[20][6]?",
    "options": [
      "4082",
      "4008",
      "4012",
      "2840"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (20 * 35 + 6) * 2 = 4012."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "9",
      "15",
      "27",
      "66"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 23% density, total edges = 15."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 39 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "741",
      "503",
      "542",
      "484"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 39*(38)/2 = 741. At 68% density, total edges = 503."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][12] starts at base address 1600 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[14][7]?",
    "options": [
      "1775",
      "1698",
      "1773",
      "1787"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (14 * 12 + 7) * 1 = 1775."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 39, 25, 42, 42, 17, 23, 23, 20, 26, 40], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "204",
      "165",
      "221",
      "221"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 204."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][39] starts at base address 2800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[10][28]?",
    "options": [
      "4160",
      "3360",
      "4212",
      "4164"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (28 * 24 + 10) * 2 = 4164."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][26] starts at base address 1500 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[22][12]?",
    "options": [
      "2556",
      "2788",
      "2888",
      "2780"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1500 + (12 * 25 + 22) * 4 = 2788."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 34, 29, 35, 45, 31, 23, 21, 5, 32], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "141",
      "98",
      "159",
      "124"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 124."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 47%, how many edges are present in G?",
    "options": [
      "385",
      "365",
      "820",
      "426"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 47% density, total edges = 385."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 31, 17, 41, 44, 13], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "90",
      "107",
      "48",
      "107"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 90."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][39] starts at base address 1500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[11][17]?",
    "options": [
      "3440",
      "2248",
      "3276",
      "3284"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (11 * 39 + 17) * 4 = 3284."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "445",
      "490",
      "990",
      "423"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 45% density, total edges = 445."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 15 vertices. If the graph connectivity density is 65%, how many edges are present in G?",
    "options": [
      "83",
      "68",
      "61",
      "105"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 15*(14)/2 = 105. At 65% density, total edges = 68."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 34, 31, 43, 41, 7, 18, 12, 49, 8, 49, 8], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "186",
      "234",
      "229",
      "217"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 217."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][18] starts at base address 1000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[7][2]?",
    "options": [
      "1296",
      "1200",
      "1216",
      "1112"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (2 * 10 + 7) * 8 = 1216."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [25, 2, 40, 17, 37, 36, 8, 50, 16, 45], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "107",
      "84",
      "67",
      "42"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 67."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "141",
      "174",
      "231",
      "152"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 66% density, total edges = 152."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][30] starts at base address 1800 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[16][25]?",
    "options": [
      "3178",
      "2600",
      "3236",
      "3182"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (25 * 27 + 16) * 2 = 3182."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 50, 5, 12, 10, 18, 16], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "55",
      "98",
      "81",
      "86"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 81."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 15, 3, 49, 21], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "36",
      "50",
      "18",
      "33"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 33."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][15] starts at base address 1100 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[4][4]?",
    "options": [
      "1276",
      "1164",
      "1244",
      "1236"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (4 * 8 + 4) * 4 = 1244."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 34, 37, 4, 38, 18, 41, 10, 10, 23], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "235",
      "218",
      "192",
      "228"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 218."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][25] starts at base address 2700 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[20][1]?",
    "options": [
      "3702",
      "2740",
      "3752",
      "3698"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (20 * 25 + 1) * 2 = 3702."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "826",
      "884",
      "1653",
      "797"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 50% density, total edges = 826."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 48, 7, 20, 46, 20, 7, 20], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "78",
      "95",
      "75",
      "98"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 78."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][27] starts at base address 1700 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[9][4]?",
    "options": [
      "1938",
      "1894",
      "1772",
      "1890"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (4 * 22 + 9) * 2 = 1894."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][22] starts at base address 1300 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[8][4]?",
    "options": [
      "1364",
      "1704",
      "1660",
      "1656"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (8 * 22 + 4) * 2 = 1660."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "48",
      "69",
      "55",
      "91"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 61% density, total edges = 55."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][11] starts at base address 1800 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[6][5]?",
    "options": [
      "1920",
      "2084",
      "2128",
      "2076"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (6 * 11 + 5) * 4 = 2084."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 1, 42, 47, 45, 13, 41, 43, 46, 2, 10], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "262",
      "288",
      "245",
      "232"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 245."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][31] starts at base address 2400 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[13][5]?",
    "options": [
      "2493",
      "2465",
      "2509",
      "2491"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (5 * 16 + 13) * 1 = 2493."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 50 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "760",
      "710",
      "1225",
      "685"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 50*(49)/2 = 1225. At 58% density, total edges = 710."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 53%, how many edges are present in G?",
    "options": [
      "159",
      "198",
      "325",
      "172"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 53% density, total edges = 172."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 33, 32, 13, 41, 9, 7, 22, 46], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "162",
      "119",
      "179",
      "203"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 162."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][35] starts at base address 1700 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[3][3]?",
    "options": [
      "1709",
      "1754",
      "1771",
      "1752"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (3 * 17 + 3) * 1 = 1754."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 64%, how many edges are present in G?",
    "options": [
      "406",
      "288",
      "245",
      "259"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 64% density, total edges = 259."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 17, 6, 30, 28], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "119",
      "106",
      "89",
      "53"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 89."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 19, 26, 39, 1, 32, 46, 38], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "86",
      "87",
      "103",
      "85"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 86."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][26] starts at base address 2000 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[1][20]?",
    "options": [
      "2176",
      "2184",
      "2288",
      "2080"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2000 + (1 * 26 + 20) * 4 = 2184."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "171",
      "55",
      "83",
      "64"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 38% density, total edges = 64."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "300",
      "91",
      "66",
      "54"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 22% density, total edges = 66."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][30] starts at base address 1200 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[11][1]?",
    "options": [
      "1222",
      "1858",
      "1862",
      "1922"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (11 * 30 + 1) * 2 = 1862."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 43, 44, 44, 45, 50, 24, 33], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "246",
      "296",
      "226",
      "263"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 246."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][26] starts at base address 2100 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[5][14]?",
    "options": [
      "3288",
      "3296",
      "3380",
      "2380"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2100 + (14 * 21 + 5) * 4 = 3296."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 39 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "741",
      "240",
      "298",
      "259"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 39*(38)/2 = 741. At 35% density, total edges = 259."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "1596",
      "535",
      "478",
      "450"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 30% density, total edges = 478."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][31] starts at base address 1400 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[13][13]?",
    "options": [
      "2024",
      "1738",
      "2070",
      "2020"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (13 * 23 + 13) * 2 = 2024."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 12, 12, 8, 39, 15, 46, 20, 35, 10, 32], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "149",
      "132",
      "147",
      "86"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 132."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][28] starts at base address 1400 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[11][25]?",
    "options": [
      "2500",
      "2724",
      "2732",
      "2844"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (11 * 28 + 25) * 4 = 2732."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][10] starts at base address 1400 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[13][4]?",
    "options": [
      "1608",
      "1936",
      "1928",
      "1976"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (13 * 10 + 4) * 4 = 1936."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 36 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "630",
      "281",
      "245",
      "227"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 36*(35)/2 = 630. At 39% density, total edges = 245."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 15 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "16",
      "23",
      "38",
      "105"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 15*(14)/2 = 105. At 22% density, total edges = 23."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][29] starts at base address 2900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[6][23]?",
    "options": [
      "4208",
      "3176",
      "4150",
      "4154"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (23 * 27 + 6) * 2 = 4154."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 11, 24, 1, 28, 18, 39], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "67",
      "95",
      "84",
      "64"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 67."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 21, 26, 1, 15, 21, 21, 42, 7, 37, 1], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "149",
      "166",
      "191",
      "147"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 149."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "34",
      "91",
      "27",
      "48"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 38% density, total edges = 34."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 38, 18, 50, 43, 25, 34, 11, 31, 25, 37], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "130",
      "163",
      "113",
      "106"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 113."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][17] starts at base address 1700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[3][15]?",
    "options": [
      "3772",
      "3628",
      "3644",
      "2060"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (15 * 16 + 3) * 8 = 3644."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][29] starts at base address 1400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[8][12]?",
    "options": [
      "1496",
      "1642",
      "1644",
      "1673"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (8 * 29 + 12) * 1 = 1644."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][26] starts at base address 2700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[8][5]?",
    "options": [
      "3020",
      "3772",
      "3588",
      "3604"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (5 * 21 + 8) * 8 = 3604."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 37, 18, 22, 44, 39, 2, 11, 45, 22, 32], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "142",
      "169",
      "125",
      "121"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 125."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 19, 17, 17, 49, 46, 7, 48, 42, 28, 7, 17], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "154",
      "102",
      "137",
      "186"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 137."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [34, 20, 48, 8, 48, 1, 30, 31, 6, 42], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "150",
      "68",
      "119",
      "102"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 102."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "277",
      "322",
      "990",
      "255"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 28% density, total edges = 277."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 17, 26, 1, 2], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "44",
      "103",
      "86",
      "87"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 86."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][17] starts at base address 2900 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[16][5]?",
    "options": [
      "4092",
      "3540",
      "4324",
      "4108"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (5 * 27 + 16) * 8 = 4108."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 3, 38, 29, 33, 50, 41, 37, 43], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "41",
      "102",
      "64",
      "81"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 64."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][19] starts at base address 2200 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[7][17]?",
    "options": [
      "2358",
      "2360",
      "2319",
      "2369"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (17 * 9 + 7) * 1 = 2360."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "109",
      "91",
      "153",
      "82"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 60% density, total edges = 91."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 53%, how many edges are present in G?",
    "options": [
      "812",
      "758",
      "1431",
      "731"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 53% density, total edges = 758."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 52%, how many edges are present in G?",
    "options": [
      "515",
      "538",
      "1035",
      "584"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 52% density, total edges = 538."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 35, 9, 33, 49, 31, 28, 31, 8, 42, 25, 37], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "144",
      "126",
      "176",
      "127"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 127."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][27] starts at base address 1500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[23][6]?",
    "options": [
      "4000",
      "4116",
      "4008",
      "2052"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (23 * 27 + 6) * 4 = 4008."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 37, 42, 49, 3, 27, 27], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "185",
      "168",
      "131",
      "171"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 168."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 30, 6, 25, 36, 32, 28, 45, 50, 9], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "304",
      "271",
      "252",
      "254"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 254."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][18] starts at base address 1400 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[7][2]?",
    "options": [
      "1656",
      "1428",
      "1652",
      "1692"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (7 * 18 + 2) * 2 = 1656."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 47, 7, 24, 2, 17, 41, 12], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "138",
      "210",
      "169",
      "186"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 169."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 33, 48, 12, 7, 49, 36, 40, 2, 12, 34], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "271",
      "227",
      "254",
      "256"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 254."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][31] starts at base address 2800 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[9][24]?",
    "options": [
      "3481",
      "3509",
      "3016",
      "3479"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2800 + (24 * 28 + 9) * 1 = 3481."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "327",
      "311",
      "528",
      "360"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 62% density, total edges = 327."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 28, 28, 20, 43, 22, 28, 36, 19], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "221",
      "210",
      "193",
      "169"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 193."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 49%, how many edges are present in G?",
    "options": [
      "595",
      "274",
      "326",
      "291"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 49% density, total edges = 291."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 38 vertices. If the graph connectivity density is 64%, how many edges are present in G?",
    "options": [
      "430",
      "703",
      "487",
      "449"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 38*(37)/2 = 703. At 64% density, total edges = 449."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [22, 18, 24, 26, 50, 39, 29, 44, 38, 20, 41, 4], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "351",
      "368",
      "329",
      "392"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 351."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][23] starts at base address 2400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[11][8]?",
    "options": [
      "2659",
      "2684",
      "2488",
      "2661"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (11 * 23 + 8) * 1 = 2661."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 38 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "191",
      "248",
      "703",
      "210"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 38*(37)/2 = 703. At 30% density, total edges = 210."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][36] starts at base address 1300 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[6][14]?",
    "options": [
      "1636",
      "2220",
      "2212",
      "2364"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (6 * 36 + 14) * 4 = 2220."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 14, 9, 2, 16], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "32",
      "47",
      "25",
      "30"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 30."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 9, 4, 15, 17, 24, 10, 48], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "89",
      "113",
      "69",
      "106"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 89."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][21] starts at base address 2500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[12][17]?",
    "options": [
      "2765",
      "2704",
      "2767",
      "2782"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (17 * 15 + 12) * 1 = 2767."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][23] starts at base address 2600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[5][7]?",
    "options": [
      "3760",
      "2880",
      "3560",
      "3576"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (5 * 23 + 7) * 8 = 3576."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 36, 8, 36, 21, 32, 41, 49, 33, 27], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "177",
      "160",
      "133",
      "192"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 160."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 42, 15, 45, 45, 26, 38, 19, 32, 19, 25], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "191",
      "219",
      "174",
      "147"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 174."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][33] starts at base address 1000 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][30]?",
    "options": [
      "1752",
      "1480",
      "1768",
      "2032"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (2 * 33 + 30) * 8 = 1768."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "1540",
      "757",
      "841",
      "785"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 51% density, total edges = 785."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 37, 6, 42, 25, 50, 38], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "160",
      "208",
      "241",
      "191"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 191."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "21",
      "45",
      "36",
      "26"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 59% density, total edges = 26."
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
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "34",
      "20",
      "91",
      "13"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 22% density, total edges = 20."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 14, 45, 1, 20, 32], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "81",
      "64",
      "65",
      "60"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 64."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 13, 29, 10, 21], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "52",
      "54",
      "71",
      "64"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 54."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][27] starts at base address 2700 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][24]?",
    "options": [
      "3540",
      "3276",
      "3756",
      "3524"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (3 * 27 + 24) * 8 = 3540."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 24%, how many edges are present in G?",
    "options": [
      "104",
      "134",
      "89",
      "435"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 24% density, total edges = 104."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 38 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "703",
      "255",
      "274",
      "312"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 38*(37)/2 = 703. At 39% density, total edges = 274."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 40, 13, 26, 3, 36, 10, 18, 15], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "181",
      "180",
      "163",
      "146"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 163."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][21] starts at base address 1200 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[5][10]?",
    "options": [
      "1250",
      "1325",
      "1323",
      "1337"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (10 * 12 + 5) * 1 = 1325."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 2, 1, 2, 17, 29], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "50",
      "48",
      "65",
      "5"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 48."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [11, 40, 23, 48, 44], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "63",
      "97",
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
    "question": "A 2D array A[20][29] starts at base address 1600 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[15][16]?",
    "options": [
      "2080",
      "2049",
      "1840",
      "2051"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (15 * 29 + 16) * 1 = 2051."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [6, 26, 12, 49, 10, 30, 14, 21, 39, 37], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "150",
      "133",
      "163",
      "127"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 133."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][23] starts at base address 2900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[17][7]?",
    "options": [
      "3138",
      "3318",
      "3266",
      "3270"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (7 * 24 + 17) * 2 = 3270."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][30] starts at base address 1700 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][22]?",
    "options": [
      "2028",
      "2020",
      "2148",
      "1876"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (2 * 30 + 22) * 4 = 2028."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][28] starts at base address 2300 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[7][21]?",
    "options": [
      "3168",
      "3280",
      "3160",
      "2888"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (7 * 28 + 21) * 4 = 3168."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "77",
      "58",
      "49",
      "171"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 34% density, total edges = 58."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 15, 31, 15, 10, 22], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "73",
      "87",
      "46",
      "56"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 56."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 46, 44, 32, 8, 30, 16, 19, 45, 27, 18, 23], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "160",
      "214",
      "227",
      "197"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 197."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 9, 22, 34, 6, 9, 17, 45, 18, 40, 50, 26], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "162",
      "162",
      "145",
      "97"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 145."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "356",
      "666",
      "301",
      "319"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 48% density, total edges = 319."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 11, 10, 40, 31, 26, 22, 18], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "131",
      "157",
      "118",
      "148"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 131."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [41, 49, 49, 40, 50, 35, 6], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "281",
      "299",
      "264",
      "223"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 264."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][25] starts at base address 2300 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[8][7]?",
    "options": [
      "2505",
      "2507",
      "2532",
      "2356"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (8 * 25 + 7) * 1 = 2507."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 24, 20, 11, 30], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "84",
      "55",
      "95",
      "101"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 84."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "79",
      "406",
      "122",
      "93"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 23% density, total edges = 93."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 13, 16, 15, 41, 15, 43, 6, 40, 44, 39], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "149",
      "190",
      "173",
      "179"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 173."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 27, 7, 11, 22, 33, 11, 44, 2, 46], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "172",
      "178",
      "111",
      "161"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 161."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 39, 49, 3, 46], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "112",
      "115",
      "129",
      "91"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 112."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "946",
      "223",
      "289",
      "245"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 26% density, total edges = 245."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][23] starts at base address 1000 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[1][20]?",
    "options": [
      "1141",
      "1020",
      "1139",
      "1148"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (20 * 7 + 1) * 1 = 1141."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "60",
      "231",
      "82",
      "49"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 26% density, total edges = 60."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][39] starts at base address 2400 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[19][14]?",
    "options": [
      "3054",
      "2932",
      "3050",
      "3098"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (14 * 22 + 19) * 2 = 3054."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][30] starts at base address 1800 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[22][15]?",
    "options": [
      "3210",
      "3150",
      "2460",
      "3146"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (22 * 30 + 15) * 2 = 3150."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [41, 4, 13, 49, 34, 21, 5, 48], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "141",
      "158",
      "100",
      "175"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 141."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 49, 24, 24, 10, 7, 1, 2, 46, 21, 32], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "204",
      "225",
      "184",
      "221"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 204."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][31] starts at base address 1200 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][23]?",
    "options": [
      "1752",
      "2128",
      "2112",
      "2376"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (3 * 31 + 23) * 8 = 2128."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [32, 4, 24, 39, 48, 50, 47, 16], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "261",
      "212",
      "291",
      "244"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 244."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 17, 48, 2, 19, 15, 50, 36, 18, 4, 11, 37], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "118",
      "67",
      "133",
      "116"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 116."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [19, 31, 32, 24, 35, 50, 5, 40, 23], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "63",
      "114",
      "99",
      "82"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 82."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [45, 45, 29, 1, 38, 12, 22, 15, 4, 47, 33], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "215",
      "166",
      "228",
      "211"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 211."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [32, 17, 18, 9, 14, 46, 48, 13, 26], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "90",
      "58",
      "107",
      "104"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 90."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 20, 27, 17, 15, 11, 25, 32, 41, 38], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "76",
      "93",
      "47",
      "103"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 76."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "973",
      "1431",
      "1027",
      "946"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 68% density, total edges = 973."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][29] starts at base address 2500 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[6][25]?",
    "options": [
      "2898",
      "2956",
      "2894",
      "2800"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (6 * 29 + 25) * 2 = 2898."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][18] starts at base address 2400 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[2][8]?",
    "options": [
      "2447",
      "2416",
      "2440",
      "2442"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (8 * 5 + 2) * 1 = 2442."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][28] starts at base address 1300 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[4][24]?",
    "options": [
      "1568",
      "1628",
      "1572",
      "1492"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (4 * 28 + 24) * 2 = 1572."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 65%, how many edges are present in G?",
    "options": [
      "781",
      "1128",
      "709",
      "733"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 65% density, total edges = 733."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 22, 30, 22, 48], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "119",
      "74",
      "114",
      "97"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 97."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "311",
      "352",
      "291",
      "820"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 38% density, total edges = 311."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 33%, how many edges are present in G?",
    "options": [
      "861",
      "263",
      "326",
      "284"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 33% density, total edges = 284."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "24",
      "14",
      "9",
      "45"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 32% density, total edges = 14."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][22] starts at base address 1100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[19][17]?",
    "options": [
      "1557",
      "1535",
      "1423",
      "1533"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (19 * 22 + 17) * 1 = 1535."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][27] starts at base address 2100 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[2][17]?",
    "options": [
      "2442",
      "2134",
      "2440",
      "2462"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2100 + (17 * 20 + 2) * 1 = 2442."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 29, 38, 10, 2], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "113",
      "67",
      "130",
      "151"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 113."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 29%, how many edges are present in G?",
    "options": [
      "228",
      "249",
      "291",
      "861"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 29% density, total edges = 249."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 21, 14, 14, 40], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "72",
      "35",
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
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 53%, how many edges are present in G?",
    "options": [
      "414",
      "820",
      "475",
      "434"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 53% density, total edges = 434."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 26, 11, 13, 44, 14], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "93",
      "76",
      "50",
      "89"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 76."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 12, 42, 41, 2], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "87",
      "104",
      "129",
      "54"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 87."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [4, 32, 14, 50, 46, 36, 41], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "182",
      "199",
      "178",
      "218"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 182."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][27] starts at base address 1000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[11][20]?",
    "options": [
      "5288",
      "5072",
      "2760",
      "5088"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (20 * 25 + 11) * 8 = 5088."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [29, 22, 2, 5, 13, 36, 43, 17, 20], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "75",
      "29",
      "63",
      "58"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 58."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][33] starts at base address 2700 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[7][16]?",
    "options": [
      "4632",
      "4512",
      "3148",
      "4520"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (16 * 28 + 7) * 4 = 4520."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [47, 22, 16, 49, 29, 45, 16, 38, 22, 18, 41], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "163",
      "180",
      "192",
      "116"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 163."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "213",
      "197",
      "245",
      "496"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 43% density, total edges = 213."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 67%, how many edges are present in G?",
    "options": [
      "91",
      "136",
      "83",
      "108"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 67% density, total edges = 91."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 40, 9, 15, 47, 41, 22, 15, 30, 24], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "104",
      "96",
      "49",
      "87"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 87."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "69",
      "39",
      "190",
      "49"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 26% density, total edges = 49."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][11] starts at base address 2200 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[7][9]?",
    "options": [
      "2378",
      "2376",
      "2397",
      "2263"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (9 * 19 + 7) * 1 = 2378."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 19, 35, 28, 1, 44, 23, 6, 9, 6], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "93",
      "128",
      "110",
      "54"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 93."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 39 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "459",
      "498",
      "440",
      "741"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 39*(38)/2 = 741. At 62% density, total edges = 459."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][30] starts at base address 1700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[12][21]?",
    "options": [
      "5980",
      "3716",
      "6196",
      "5996"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (21 * 25 + 12) * 8 = 5996."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 46, 44, 43, 31, 42, 50, 6, 4, 12, 33, 28], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "90",
      "176",
      "149",
      "132"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 132."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][21] starts at base address 1100 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[15][9]?",
    "options": [
      "1772",
      "1640",
      "1764",
      "1840"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (9 * 17 + 15) * 4 = 1772."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][34] starts at base address 2500 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[6][27]?",
    "options": [
      "2729",
      "2731",
      "2765",
      "2662"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (6 * 34 + 27) * 1 = 2731."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 52%, how many edges are present in G?",
    "options": [
      "226",
      "211",
      "256",
      "435"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 52% density, total edges = 226."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][11] starts at base address 1300 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[6][3]?",
    "options": [
      "1336",
      "1372",
      "1368",
      "1392"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (3 * 10 + 6) * 2 = 1372."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 49 vertices. If the graph connectivity density is 51%, how many edges are present in G?",
    "options": [
      "648",
      "1176",
      "575",
      "599"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 49*(48)/2 = 1176. At 51% density, total edges = 599."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [11, 50, 23, 10, 46], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "101",
      "73",
      "84",
      "107"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 84."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 58%, how many edges are present in G?",
    "options": [
      "282",
      "435",
      "252",
      "237"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 58% density, total edges = 252."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 4, 24, 31, 40, 38, 20, 42, 21], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "51",
      "28",
      "75",
      "68"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 51."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "322",
      "355",
      "306",
      "528"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 61% density, total edges = 322."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "553",
      "1653",
      "466",
      "495"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 30% density, total edges = 495."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][12] starts at base address 2700 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[3][5]?",
    "options": [
      "2924",
      "2908",
      "2964",
      "2820"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2700 + (5 * 5 + 3) * 8 = 2924."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "127",
      "116",
      "231",
      "149"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 55% density, total edges = 127."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][15] starts at base address 1000 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[8][1]?",
    "options": [
      "1036",
      "1034",
      "1064",
      "1008"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (1 * 28 + 8) * 1 = 1036."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 40%, how many edges are present in G?",
    "options": [
      "167",
      "351",
      "127",
      "140"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 40% density, total edges = 140."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 46, 7, 24, 43, 19, 46, 27, 50, 18], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "191",
      "139",
      "172",
      "189"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 172."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 16, 28, 16, 34, 32, 22, 24], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "98",
      "109",
      "81",
      "44"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 81."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][27] starts at base address 1900 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[13][5]?",
    "options": [
      "2030",
      "2612",
      "2608",
      "2666"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (13 * 27 + 5) * 2 = 2612."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 50 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "503",
      "453",
      "1225",
      "428"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 50*(49)/2 = 1225. At 37% density, total edges = 453."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 28, 26, 14, 28, 47, 18, 38], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "200",
      "182",
      "199",
      "161"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 182."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 42, 1, 39, 47, 7, 17, 4, 8, 21], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "166",
      "157",
      "162",
      "179"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 162."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][15] starts at base address 2400 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[18][9]?",
    "options": [
      "3508",
      "3632",
      "3048",
      "3516"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (9 * 29 + 18) * 4 = 3516."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "100",
      "139",
      "325",
      "113"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 35% density, total edges = 113."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "386",
      "431",
      "990",
      "364"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 39% density, total edges = 386."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 8, 25, 17, 30], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "92",
      "33",
      "100",
      "75"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 75."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][26] starts at base address 1900 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[8][20]?",
    "options": [
      "3180",
      "3980",
      "3868",
      "3884"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (20 * 12 + 8) * 8 = 3884."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][34] starts at base address 1400 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[23][16]?",
    "options": [
      "2330",
      "2274",
      "2278",
      "2136"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (16 * 26 + 23) * 2 = 2278."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][27] starts at base address 2600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[6][14]?",
    "options": [
      "3800",
      "2936",
      "3884",
      "3792"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (14 * 21 + 6) * 4 = 3800."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 14 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "91",
      "60",
      "53",
      "74"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 14*(13)/2 = 91. At 66% density, total edges = 60."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "217",
      "195",
      "946",
      "261"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 23% density, total edges = 217."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 5, 34, 37, 19, 41], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "74",
      "57",
      "40",
      "39"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 40."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 49 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "542",
      "493",
      "1176",
      "469"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 49*(48)/2 = 1176. At 42% density, total edges = 493."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "231",
      "102",
      "69",
      "80"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 35% density, total edges = 80."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "368",
      "351",
      "595",
      "403"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 62% density, total edges = 368."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][35] starts at base address 1400 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[17][23]?",
    "options": [
      "2964",
      "4012",
      "3864",
      "3872"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (17 * 35 + 23) * 4 = 3872."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 40 vertices. If the graph connectivity density is 65%, how many edges are present in G?",
    "options": [
      "547",
      "780",
      "487",
      "507"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 40*(39)/2 = 780. At 65% density, total edges = 507."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 2, 18, 50, 8, 36, 44], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "64",
      "47",
      "20",
      "65"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 47."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][28] starts at base address 1600 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[4][1]?",
    "options": [
      "1632",
      "1680",
      "1728",
      "1664"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (1 * 6 + 4) * 8 = 1680."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][20] starts at base address 1000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[4][5]?",
    "options": [
      "1536",
      "1160",
      "1552",
      "1656"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (5 * 13 + 4) * 8 = 1552."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "260",
      "246",
      "378",
      "288"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 69% density, total edges = 260."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 22%, how many edges are present in G?",
    "options": [
      "56",
      "171",
      "28",
      "37"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 22% density, total edges = 37."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][20] starts at base address 1700 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[1][12]?",
    "options": [
      "1796",
      "1940",
      "1956",
      "2116"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1700 + (1 * 20 + 12) * 8 = 1956."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][27] starts at base address 2800 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[6][13]?",
    "options": [
      "4184",
      "4200",
      "4416",
      "3424"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (6 * 27 + 13) * 8 = 4200."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 38, 10, 32, 1, 25, 28, 3, 30, 19], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "179",
      "137",
      "176",
      "193"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 176."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 11, 14, 43, 32, 37, 38, 48, 13, 40, 1], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "100",
      "159",
      "174",
      "142"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 142."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "1035",
      "558",
      "535",
      "604"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 54% density, total edges = 558."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][21] starts at base address 1200 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[12][6]?",
    "options": [
      "2192",
      "2208",
      "2360",
      "1776"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (6 * 19 + 12) * 8 = 2208."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 26, 41, 49, 20, 47, 9, 17, 10, 50], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "224",
      "254",
      "183",
      "207"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 207."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 28, 12, 49, 13, 48], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "144",
      "161",
      "102",
      "157"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 144."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 49, 41, 10, 33, 1, 11, 36, 6, 4, 44, 38], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "128",
      "138",
      "100",
      "145"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 128."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][15] starts at base address 2800 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[23][8]?",
    "options": [
      "3506",
      "3168",
      "3502",
      "3536"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2800 + (23 * 15 + 8) * 2 = 3506."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [36, 36, 6, 41, 14, 25, 32, 22, 43, 14, 5], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "229",
      "176",
      "234",
      "212"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 212."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][29] starts at base address 1900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[6][3]?",
    "options": [
      "1992",
      "1936",
      "1972",
      "1968"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (3 * 10 + 6) * 2 = 1972."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 21 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "102",
      "210",
      "81",
      "71"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 21*(20)/2 = 210. At 39% density, total edges = 81."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 45, 6, 49, 9, 41, 29, 5, 3, 23, 36], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "166",
      "183",
      "150",
      "207"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 166."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 13, 29, 18, 13, 23, 15], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "120",
      "96",
      "114",
      "97"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 97."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 36, 9, 46, 28, 48, 37, 21, 21, 12, 6, 5], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "280",
      "285",
      "258",
      "268"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 268."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 2, 35, 11, 27, 6, 17, 9, 33, 14], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "105",
      "88",
      "48",
      "99"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 88."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 26 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "325",
      "143",
      "182",
      "156"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 26*(25)/2 = 325. At 48% density, total edges = 156."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "95",
      "108",
      "351",
      "135"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 31% density, total edges = 108."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][25] starts at base address 2900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[9][3]?",
    "options": [
      "4924",
      "3116",
      "4708",
      "4724"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (9 * 25 + 3) * 8 = 4724."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[20][21] starts at base address 2600 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[15][4]?",
    "options": [
      "2840",
      "2972",
      "2980",
      "3060"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (4 * 20 + 15) * 4 = 2980."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "112",
      "79",
      "90",
      "231"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 39% density, total edges = 90."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 1, 9, 45, 6, 15, 46, 50], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "61",
      "84",
      "95",
      "78"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 78."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 18 vertices. If the graph connectivity density is 57%, how many edges are present in G?",
    "options": [
      "105",
      "87",
      "78",
      "153"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 18*(17)/2 = 153. At 57% density, total edges = 87."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [8, 38, 42, 20, 5], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "128",
      "125",
      "100",
      "108"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 108."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[21][21] starts at base address 1600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[2][3]?",
    "options": [
      "1772",
      "1780",
      "1864",
      "1624"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (2 * 21 + 3) * 4 = 1780."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [18, 10, 29, 15, 17, 30, 29, 33, 43, 24, 4], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "181",
      "198",
      "214",
      "163"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 181."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "600",
      "656",
      "1540",
      "572"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 39% density, total edges = 600."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][29] starts at base address 2200 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[8][14]?",
    "options": [
      "3300",
      "3176",
      "3184",
      "2648"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (8 * 29 + 14) * 4 = 3184."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][35] starts at base address 2600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][21]?",
    "options": [
      "2936",
      "3328",
      "3312",
      "3608"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (2 * 35 + 21) * 8 = 3328."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 14, 46, 1, 46, 24, 25], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "131",
      "188",
      "164",
      "181"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 164."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][18] starts at base address 1500 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[19][7]?",
    "options": [
      "2198",
      "2194",
      "2234",
      "1766"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (19 * 18 + 7) * 2 = 2198."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 46 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "1035",
      "325",
      "279",
      "256"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 46*(45)/2 = 1035. At 27% density, total edges = 279."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [8, 23, 32, 32, 6, 48, 16, 36, 45], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "165",
      "157",
      "181",
      "182"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 165."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "393",
      "595",
      "410",
      "445"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 69% density, total edges = 410."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 50%, how many edges are present in G?",
    "options": [
      "540",
      "990",
      "473",
      "495"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 50% density, total edges = 495."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][10] starts at base address 2300 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[3][2]?",
    "options": [
      "2360",
      "2384",
      "2312",
      "2364"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (3 * 10 + 2) * 2 = 2364."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 4, 21, 39, 48, 2], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "43",
      "25",
      "47",
      "26"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 26."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 28, 2, 26, 36, 27], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "83",
      "74",
      "56",
      "57"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 57."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 31, 11, 10, 27, 18, 44, 30, 21], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "171",
      "238",
      "251",
      "221"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 221."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][10] starts at base address 1000 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[1][8]?",
    "options": [
      "1128",
      "1144",
      "1224",
      "1064"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (1 * 10 + 8) * 8 = 1144."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 4, 32, 2, 15, 28, 5, 27, 13, 7, 5], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "82",
      "99",
      "81",
      "110"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 82."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][20] starts at base address 2300 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[25][17]?",
    "options": [
      "2725",
      "2817",
      "2815",
      "2837"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (25 * 20 + 17) * 1 = 2817."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[26][17] starts at base address 1500 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[1][11]?",
    "options": [
      "1544",
      "1680",
      "1612",
      "1604"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1500 + (1 * 17 + 11) * 4 = 1612."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 19, 1, 36, 10, 2, 33], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "71",
      "70",
      "20",
      "87"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 70."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][21] starts at base address 1600 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[6][11]?",
    "options": [
      "1758",
      "1666",
      "1737",
      "1735"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (6 * 21 + 11) * 1 = 1737."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 27, 26, 20, 3], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "58",
      "53",
      "75",
      "84"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 58."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][24] starts at base address 1300 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[14][20]?",
    "options": [
      "2126",
      "1860",
      "2084",
      "2088"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (20 * 19 + 14) * 2 = 2088."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[25][25] starts at base address 2900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[14][18]?",
    "options": [
      "4916",
      "6044",
      "5828",
      "5844"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2900 + (14 * 25 + 18) * 8 = 5844."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][12] starts at base address 1800 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[9][2]?",
    "options": [
      "1818",
      "1922",
      "1910",
      "1908"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (9 * 12 + 2) * 1 = 1910."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][28] starts at base address 2100 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[19][26]?",
    "options": [
      "6564",
      "6052",
      "6788",
      "6548"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (19 * 28 + 26) * 8 = 6564."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 33 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "142",
      "191",
      "528",
      "158"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 33*(32)/2 = 528. At 30% density, total edges = 158."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 46, 21, 21, 15, 28, 41, 8, 3, 18, 31, 27], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "126",
      "130",
      "109",
      "88"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 109."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [11, 3, 42, 11, 17, 34, 7], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "73",
      "98",
      "45",
      "56"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 56."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 61%, how many edges are present in G?",
    "options": [
      "593",
      "550",
      "903",
      "529"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 61% density, total edges = 550."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 43, 4, 37, 39, 27, 23, 17], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "150",
      "216",
      "189",
      "206"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 189."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 13, 9, 15, 49, 17, 29, 26], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "153",
      "153",
      "136",
      "103"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 136."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][22] starts at base address 2100 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[4][13]?",
    "options": [
      "3084",
      "2892",
      "2516",
      "2908"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2100 + (4 * 22 + 13) * 8 = 2908."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "57",
      "66",
      "39",
      "45"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 69% density, total edges = 45."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 1, 20, 39, 14, 30, 13, 11], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "104",
      "150",
      "120",
      "137"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 120."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][39] starts at base address 2400 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][20]?",
    "options": [
      "3116",
      "3160",
      "2480",
      "3124"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (20 * 9 + 1) * 4 = 3124."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [41, 38, 14, 11, 19, 18, 41, 28], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "63",
      "115",
      "121",
      "104"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 104."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [12, 13, 41, 29, 2], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "83",
      "112",
      "124",
      "95"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 95."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 51 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "370",
      "446",
      "1275",
      "395"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 51*(50)/2 = 1275. At 31% density, total edges = 395."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][37] starts at base address 1900 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[16][24]?",
    "options": [
      "3128",
      "2668",
      "3132",
      "3206"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (16 * 37 + 24) * 2 = 3132."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 27%, how many edges are present in G?",
    "options": [
      "666",
      "216",
      "179",
      "161"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 27% density, total edges = 179."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "33",
      "44",
      "28",
      "55"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 60% density, total edges = 33."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 47 vertices. If the graph connectivity density is 52%, how many edges are present in G?",
    "options": [
      "609",
      "562",
      "539",
      "1081"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 47*(46)/2 = 1081. At 52% density, total edges = 562."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][26] starts at base address 1000 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[8][1]?",
    "options": [
      "1256",
      "1064",
      "1144",
      "1160"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1000 + (1 * 12 + 8) * 8 = 1160."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 44 vertices. If the graph connectivity density is 21%, how many edges are present in G?",
    "options": [
      "242",
      "198",
      "946",
      "176"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 44*(43)/2 = 946. At 21% density, total edges = 198."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][30] starts at base address 1400 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[9][6]?",
    "options": [
      "2504",
      "2496",
      "2624",
      "1616"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1400 + (9 * 30 + 6) * 4 = 2504."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 21 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "67",
      "98",
      "77",
      "210"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 21*(20)/2 = 210. At 37% density, total edges = 77."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][39] starts at base address 1100 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[25][23]?",
    "options": [
      "3684",
      "3676",
      "3792",
      "3400"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (23 * 27 + 25) * 4 = 3684."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 48, 47, 28, 37, 43, 38, 15, 12, 31, 49, 9], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "299",
      "342",
      "373",
      "359"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 342."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 3, 18, 34, 1, 35, 42, 10, 34, 10, 48], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "158",
      "143",
      "168",
      "175"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 158."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 8, 36, 34, 1, 45, 49], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "128",
      "145",
      "79",
      "129"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 128."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 26, 35, 39, 15, 43, 16, 4, 46, 45, 1, 33], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "68",
      "85",
      "61",
      "103"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 68."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][13] starts at base address 2700 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[11][9]?",
    "options": [
      "3916",
      "3492",
      "3900",
      "4020"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2700 + (11 * 13 + 9) * 8 = 3916."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 31, 11, 8, 24, 44, 32, 44, 49], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "243",
      "287",
      "260",
      "194"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 243."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [33, 46, 2, 30, 24, 22], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "128",
      "78",
      "141",
      "111"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 111."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 20, 39, 30, 32, 6], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "96",
      "79",
      "118",
      "59"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 79."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 49 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "566",
      "493",
      "1176",
      "517"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 49*(48)/2 = 1176. At 44% density, total edges = 517."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [49, 19, 49, 44, 27], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "166",
      "134",
      "68",
      "117"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 117."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [5, 12, 39, 12, 16, 5, 31, 39], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "95",
      "51",
      "56",
      "73"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 56."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 43 vertices. If the graph connectivity density is 25%, how many edges are present in G?",
    "options": [
      "204",
      "225",
      "268",
      "903"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 43*(42)/2 = 903. At 25% density, total edges = 225."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 11, 36, 28, 42, 45, 36, 30], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "138",
      "75",
      "127",
      "110"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 110."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "23",
      "66",
      "17",
      "35"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 35% density, total edges = 23."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "29",
      "48",
      "35",
      "78"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 45% density, total edges = 35."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][21] starts at base address 1900 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[11][13]?",
    "options": [
      "4988",
      "5004",
      "5236",
      "3044"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1900 + (13 * 29 + 11) * 8 = 5004."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 23 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "75",
      "86",
      "253",
      "109"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 23*(22)/2 = 253. At 34% density, total edges = 86."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 56 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "819",
      "903",
      "847",
      "1540"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 56*(55)/2 = 1540. At 55% density, total edges = 847."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][30] starts at base address 2600 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[11][1]?",
    "options": [
      "2625",
      "2611",
      "2627",
      "2643"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (1 * 16 + 11) * 1 = 2627."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 21, 16, 2, 25, 30, 49, 27, 21, 21, 11], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "170",
      "217",
      "190",
      "207"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 190."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 49 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "740",
      "1176",
      "789",
      "716"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 49*(48)/2 = 1176. At 63% density, total edges = 740."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 12, 32, 44, 8, 43], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "136",
      "153",
      "180",
      "88"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 136."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "990",
      "520",
      "453",
      "475"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 48% density, total edges = 475."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 27 vertices. If the graph connectivity density is 46%, how many edges are present in G?",
    "options": [
      "148",
      "188",
      "161",
      "351"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 27*(26)/2 = 351. At 46% density, total edges = 161."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 16, 26, 36, 38, 22, 24, 8, 27, 7, 6, 48], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "222",
      "205",
      "204",
      "212"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 205."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][29] starts at base address 2200 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[19][10]?",
    "options": [
      "3720",
      "4376",
      "4192",
      "4176"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2200 + (10 * 23 + 19) * 8 = 4192."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][32] starts at base address 1900 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[4][27]?",
    "options": [
      "2648",
      "2512",
      "2520",
      "2332"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (4 * 32 + 27) * 4 = 2520."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "294",
      "990",
      "361",
      "316"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 32% density, total edges = 316."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][33] starts at base address 2500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[2][9]?",
    "options": [
      "3084",
      "2644",
      "3100",
      "3364"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (2 * 33 + 9) * 8 = 3100."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 32%, how many edges are present in G?",
    "options": [
      "406",
      "129",
      "158",
      "115"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 32% density, total edges = 129."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][19] starts at base address 1100 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[1][14]?",
    "options": [
      "1156",
      "1880",
      "1888",
      "1944"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1100 + (14 * 14 + 1) * 4 = 1888."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 17 vertices. If the graph connectivity density is 25%, how many edges are present in G?",
    "options": [
      "51",
      "34",
      "136",
      "26"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 17*(16)/2 = 136. At 25% density, total edges = 34."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][36] starts at base address 2400 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[16][25]?",
    "options": [
      "5600",
      "6328",
      "6480",
      "6312"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2400 + (25 * 19 + 16) * 8 = 6328."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[13][14] starts at base address 2300 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[5][6]?",
    "options": [
      "2383",
      "2396",
      "2330",
      "2381"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (6 * 13 + 5) * 1 = 2383."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[22][13] starts at base address 1200 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[14][7]?",
    "options": [
      "1389",
      "1402",
      "1387",
      "1298"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (14 * 13 + 7) * 1 = 1389."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 32 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "297",
      "281",
      "329",
      "496"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 32*(31)/2 = 496. At 60% density, total edges = 297."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 35 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "595",
      "161",
      "178",
      "213"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 35*(34)/2 = 595. At 30% density, total edges = 178."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [1, 39, 17, 36, 12, 28, 23, 13, 17], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "182",
      "168",
      "186",
      "169"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 169."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 34, 33, 44, 2, 50, 10, 37, 26, 29, 44], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "146",
      "190",
      "163",
      "111"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 146."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][35] starts at base address 1200 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[2][16]?",
    "options": [
      "1321",
      "1286",
      "1232",
      "1284"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1200 + (2 * 35 + 16) * 1 = 1286."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [39, 37, 18, 26, 48], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "146",
      "81",
      "120",
      "137"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 120."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 16 vertices. If the graph connectivity density is 43%, how many edges are present in G?",
    "options": [
      "51",
      "43",
      "120",
      "67"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 16*(15)/2 = 120. At 43% density, total edges = 51."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 50 vertices. If the graph connectivity density is 45%, how many edges are present in G?",
    "options": [
      "526",
      "601",
      "1225",
      "551"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 50*(49)/2 = 1225. At 45% density, total edges = 551."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 23, 23, 22, 17, 6, 25, 11, 12, 30], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "83",
      "46",
      "89",
      "66"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 66."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][31] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[25][5]?",
    "options": [
      "4222",
      "2850",
      "4160",
      "4156"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (25 * 31 + 5) * 2 = 4160."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 19, 33, 49, 41, 2, 49], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "115",
      "52",
      "131",
      "98"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 98."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [42, 42, 42, 7, 19, 28, 14, 12, 3], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "169",
      "110",
      "152",
      "171"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 152."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [40, 43, 46, 36, 9, 44], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "201",
      "125",
      "165",
      "182"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 165."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 25%, how many edges are present in G?",
    "options": [
      "357",
      "1431",
      "330",
      "411"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 25% density, total edges = 357."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 41 vertices. If the graph connectivity density is 26%, how many edges are present in G?",
    "options": [
      "193",
      "213",
      "820",
      "254"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 41*(40)/2 = 820. At 26% density, total edges = 213."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 47, 1, 38, 9, 46], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "95",
      "126",
      "143",
      "135"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 126."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [10, 34, 13, 49, 5, 15, 40, 36, 44, 27, 41, 48], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "47",
      "70",
      "57",
      "74"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 57."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[10][14] starts at base address 1900 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][4]?",
    "options": [
      "1996",
      "2252",
      "2268",
      "2380"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (3 * 14 + 4) * 8 = 2268."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 42, 4, 17, 19, 15, 49, 46, 43, 22], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "253",
      "207",
      "192",
      "224"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 207."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 21 vertices. If the graph connectivity density is 36%, how many edges are present in G?",
    "options": [
      "210",
      "75",
      "96",
      "65"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 21*(20)/2 = 210. At 36% density, total edges = 75."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 48%, how many edges are present in G?",
    "options": [
      "25",
      "31",
      "66",
      "43"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 48% density, total edges = 31."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [46, 40, 21, 41, 24, 40, 14, 24, 12, 38], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "267",
      "274",
      "204",
      "250"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 250."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[7][23] starts at base address 2500 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[1][7]?",
    "options": [
      "2548",
      "2507",
      "2557",
      "2550"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (7 * 7 + 1) * 1 = 2550."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 20 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "109",
      "119",
      "139",
      "190"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 20*(19)/2 = 190. At 63% density, total edges = 119."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 11 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "29",
      "55",
      "34",
      "45"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 11*(10)/2 = 55. At 63% density, total edges = 34."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [2, 22, 26, 24, 37], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "91",
      "98",
      "72",
      "74"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 74."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][19] starts at base address 1200 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[9][16]?",
    "options": [
      "4328",
      "4536",
      "2352",
      "4344"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1200 + (16 * 24 + 9) * 8 = 4344."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [25, 25, 18, 6, 21, 21, 20, 9, 24, 9], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "156",
      "153",
      "136",
      "111"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 136."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[28][38] starts at base address 1300 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][9]?",
    "options": [
      "2268",
      "2284",
      "2588",
      "1516"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1300 + (3 * 38 + 9) * 8 = 2284."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[11][28] starts at base address 1600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[8][6]?",
    "options": [
      "2632",
      "2512",
      "2520",
      "1792"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (8 * 28 + 6) * 4 = 2520."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 68%, how many edges are present in G?",
    "options": [
      "146",
      "179",
      "157",
      "231"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 68% density, total edges = 157."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "421",
      "476",
      "666",
      "439"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 66% density, total edges = 439."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [48, 26, 12, 49, 13, 10, 50, 17, 29, 17, 41], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "160",
      "225",
      "258",
      "208"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 208."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 46%, how many edges are present in G?",
    "options": [
      "231",
      "106",
      "128",
      "95"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 46% density, total edges = 106."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 12 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "18",
      "66",
      "30",
      "12"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 12*(11)/2 = 66. At 28% density, total edges = 18."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 37 vertices. If the graph connectivity density is 39%, how many edges are present in G?",
    "options": [
      "666",
      "296",
      "259",
      "241"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 37*(36)/2 = 666. At 39% density, total edges = 259."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 56%, how many edges are present in G?",
    "options": [
      "231",
      "118",
      "151",
      "129"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 56% density, total edges = 129."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 45 vertices. If the graph connectivity density is 64%, how many edges are present in G?",
    "options": [
      "678",
      "990",
      "633",
      "611"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 45*(44)/2 = 990. At 64% density, total edges = 633."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 10 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "45",
      "29",
      "24",
      "39"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 10*(9)/2 = 45. At 66% density, total edges = 29."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][34] starts at base address 1700 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[1][12]?",
    "options": [
      "1724",
      "1894",
      "1910",
      "1890"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (12 * 8 + 1) * 2 = 1894."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][20] starts at base address 2300 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[4][12]?",
    "options": [
      "2524",
      "2480",
      "2396",
      "2484"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (4 * 20 + 12) * 2 = 2484."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[15][31] starts at base address 1300 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[13][20]?",
    "options": [
      "2552",
      "2544",
      "2612",
      "2340"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (20 * 15 + 13) * 4 = 2552."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 69%, how many edges are present in G?",
    "options": [
      "1073",
      "1158",
      "1101",
      "1596"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 69% density, total edges = 1101."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][20] starts at base address 2000 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[8][4]?",
    "options": [
      "2064",
      "2112",
      "2136",
      "2108"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2000 + (4 * 12 + 8) * 2 = 2112."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[12][29] starts at base address 2600 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[9][13]?",
    "options": [
      "3206",
      "3148",
      "3144",
      "2834"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (9 * 29 + 13) * 2 = 3148."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][37] starts at base address 1800 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[13][35]?",
    "options": [
      "10024",
      "10008",
      "5440",
      "10256"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1800 + (35 * 29 + 13) * 8 = 10024."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [9, 26, 45, 30, 35, 4, 24, 12, 32, 8, 33], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "127",
      "110",
      "140",
      "101"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 110."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 6, 44, 9, 17, 1], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "50",
      "70",
      "87",
      "114"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 70."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][31] starts at base address 1000 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[18][9]?",
    "options": [
      "1648",
      "3392",
      "3268",
      "3260"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1000 + (18 * 31 + 9) * 4 = 3268."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 22, 12, 36, 46, 42, 29, 14], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "227",
      "239",
      "210",
      "187"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 210."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 15 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "38",
      "53",
      "31",
      "105"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 15*(14)/2 = 105. At 37% density, total edges = 38."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 25 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "115",
      "90",
      "78",
      "300"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 25*(24)/2 = 300. At 30% density, total edges = 90."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [17, 48, 39, 26, 14], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "87",
      "143",
      "104",
      "121"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 104."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 2, 46, 50, 1, 48, 21, 41, 5, 15], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "48",
      "63",
      "80",
      "109"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 63."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[9][22] starts at base address 1800 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[6][13]?",
    "options": [
      "1956",
      "2086",
      "2090",
      "2134"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1800 + (6 * 22 + 13) * 2 = 2090."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 57 vertices. If the graph connectivity density is 23%, how many edges are present in G?",
    "options": [
      "367",
      "339",
      "1596",
      "424"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 57*(56)/2 = 1596. At 23% density, total edges = 367."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 30, 14, 42, 37, 46, 10, 37, 2, 13, 39], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "44",
      "96",
      "99",
      "82"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 82."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [35, 4, 33, 45, 22, 24, 8, 23, 34, 11, 18], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "239",
      "256",
      "250",
      "204"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 239."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [20, 45, 17, 31, 16, 23, 15, 22, 10, 10, 38, 43], what is the prefix sum prefix[6] value (0-indexed sum from index 0 to 6)?",
    "options": [
      "167",
      "147",
      "182",
      "184"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 6 of the given array = 167."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[6][38] starts at base address 2900 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[4][34]?",
    "options": [
      "3328",
      "3312",
      "3316",
      "3172"
    ],
    "answer": 2,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2900 + (34 * 6 + 4) * 2 = 3316."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [11, 14, 26, 2, 39, 24, 15, 21, 42, 27, 21], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "40",
      "51",
      "77",
      "68"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 51."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[5][20] starts at base address 1400 with each element occupying 1 bytes. If stored in column-major order, what is the memory address of A[1][3]?",
    "options": [
      "1414",
      "1416",
      "1403",
      "1421"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1400 + (3 * 5 + 1) * 1 = 1416."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][21] starts at base address 2600 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[12][6]?",
    "options": [
      "3176",
      "4832",
      "4648",
      "4664"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2600 + (12 * 21 + 6) * 8 = 4664."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 48 vertices. If the graph connectivity density is 28%, how many edges are present in G?",
    "options": [
      "315",
      "363",
      "1128",
      "291"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 48*(47)/2 = 1128. At 28% density, total edges = 315."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 54 vertices. If the graph connectivity density is 66%, how many edges are present in G?",
    "options": [
      "917",
      "998",
      "944",
      "1431"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 54*(53)/2 = 1431. At 66% density, total edges = 944."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][20] starts at base address 2300 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[4][10]?",
    "options": [
      "2460",
      "2652",
      "2660",
      "2740"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2300 + (4 * 20 + 10) * 4 = 2660."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][38] starts at base address 1300 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[6][6]?",
    "options": [
      "1660",
      "1444",
      "1716",
      "1652"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1300 + (6 * 14 + 6) * 4 = 1660."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 28 vertices. If the graph connectivity density is 44%, how many edges are present in G?",
    "options": [
      "194",
      "166",
      "378",
      "152"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 28*(27)/2 = 378. At 44% density, total edges = 166."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 22 vertices. If the graph connectivity density is 38%, how many edges are present in G?",
    "options": [
      "87",
      "109",
      "76",
      "231"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 22*(21)/2 = 231. At 38% density, total edges = 87."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][12] starts at base address 1600 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[11][5]?",
    "options": [
      "1862",
      "1858",
      "1710",
      "1910"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1600 + (5 * 24 + 11) * 2 = 1862."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[17][22] starts at base address 2500 with each element occupying 8 bytes. If stored in row-major order, what is the memory address of A[3][11]?",
    "options": [
      "3116",
      "3100",
      "3292",
      "2764"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (3 * 22 + 11) * 8 = 3116."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 28, 28, 33, 30, 41, 37, 7, 6], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "215",
      "198",
      "160",
      "239"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 198."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[23][35] starts at base address 1100 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[2][19]?",
    "options": [
      "1187",
      "1224",
      "1138",
      "1189"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1100 + (2 * 35 + 19) * 1 = 1189."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 19 vertices. If the graph connectivity density is 62%, how many edges are present in G?",
    "options": [
      "97",
      "171",
      "106",
      "125"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 19*(18)/2 = 171. At 62% density, total edges = 106."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [28, 1, 46, 1, 18, 36, 45, 40, 26, 14, 1, 47], what is the prefix sum prefix[10] value (0-indexed sum from index 0 to 10)?",
    "options": [
      "273",
      "257",
      "256",
      "228"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 10 of the given array = 256."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [7, 31, 39, 30, 8, 35], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "70",
      "77",
      "94",
      "116"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 77."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 36 vertices. If the graph connectivity density is 63%, how many edges are present in G?",
    "options": [
      "378",
      "396",
      "630",
      "432"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 36*(35)/2 = 630. At 63% density, total edges = 396."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 42%, how many edges are present in G?",
    "options": [
      "32",
      "26",
      "78",
      "45"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 42% density, total edges = 32."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [11, 11, 5, 44, 15, 47, 35], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "44",
      "32",
      "27",
      "16"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 27."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][30] starts at base address 2500 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[14][2]?",
    "options": [
      "3404",
      "3344",
      "3340",
      "2556"
    ],
    "answer": 1,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2500 + (14 * 30 + 2) * 2 = 3344."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [21, 29, 20, 25, 43, 7, 34, 44, 49, 4], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "272",
      "289",
      "321",
      "251"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 272."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [13, 28, 8, 42, 50, 18, 39, 44, 48, 3, 43, 1], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "338",
      "307",
      "290",
      "277"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 290."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 59 vertices. If the graph connectivity density is 30%, how many edges are present in G?",
    "options": [
      "513",
      "1711",
      "484",
      "572"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 59*(58)/2 = 1711. At 30% density, total edges = 513."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 13 vertices. If the graph connectivity density is 34%, how many edges are present in G?",
    "options": [
      "39",
      "20",
      "78",
      "26"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 13*(12)/2 = 78. At 34% density, total edges = 26."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[29][29] starts at base address 2600 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[6][8]?",
    "options": [
      "4736",
      "4504",
      "4488",
      "2984"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2600 + (8 * 29 + 6) * 8 = 4504."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[8][22] starts at base address 1900 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[4][18]?",
    "options": [
      "2006",
      "2028",
      "2004",
      "1972"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1900 + (4 * 22 + 18) * 1 = 2006."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][27] starts at base address 1700 with each element occupying 2 bytes. If stored in column-major order, what is the memory address of A[10][2]?",
    "options": [
      "1740",
      "1772",
      "1804",
      "1776"
    ],
    "answer": 3,
    "explanation": "Address = Base + (j * Rows + i) * Size = 1700 + (2 * 14 + 10) * 2 = 1776."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 22, 43, 35, 20, 1, 7, 36, 49, 32], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "163",
      "146",
      "166",
      "120"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 146."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [23, 23, 16, 28, 39], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "118",
      "107",
      "67",
      "90"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 90."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[16][20] starts at base address 1600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[8][17]?",
    "options": [
      "2300",
      "2144",
      "2388",
      "2308"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (8 * 20 + 17) * 4 = 2308."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 58 vertices. If the graph connectivity density is 31%, how many edges are present in G?",
    "options": [
      "512",
      "1653",
      "483",
      "570"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 58*(57)/2 = 1653. At 31% density, total edges = 512."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [24, 16, 45, 9, 1, 29], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "112",
      "71",
      "95",
      "96"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 95."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[24][31] starts at base address 2400 with each element occupying 1 bytes. If stored in row-major order, what is the memory address of A[1][8]?",
    "options": [
      "2408",
      "2470",
      "2439",
      "2437"
    ],
    "answer": 2,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2400 + (1 * 31 + 8) * 1 = 2439."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 34 vertices. If the graph connectivity density is 35%, how many edges are present in G?",
    "options": [
      "179",
      "561",
      "196",
      "230"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 34*(33)/2 = 561. At 35% density, total edges = 196."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[14][19] starts at base address 1600 with each element occupying 4 bytes. If stored in row-major order, what is the memory address of A[1][11]?",
    "options": [
      "1720",
      "1712",
      "1796",
      "1644"
    ],
    "answer": 0,
    "explanation": "Address = Base + (i * Cols + j) * Size = 1600 + (1 * 19 + 11) * 4 = 1720."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [50, 6, 28, 34, 27, 6], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "112",
      "34",
      "84",
      "101"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 84."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 29 vertices. If the graph connectivity density is 55%, how many edges are present in G?",
    "options": [
      "406",
      "252",
      "223",
      "209"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 29*(28)/2 = 406. At 55% density, total edges = 223."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [38, 16, 22, 20, 48, 37], what is the prefix sum prefix[3] value (0-indexed sum from index 0 to 3)?",
    "options": [
      "96",
      "113",
      "58",
      "116"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 3 of the given array = 96."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [16, 31, 45, 10, 17, 36, 2, 20, 15, 14, 39], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "194",
      "197",
      "177",
      "161"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 177."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [15, 45, 42, 36, 15, 29, 10], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "167",
      "199",
      "211",
      "182"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 182."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [26, 43, 18, 3, 35], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "87",
      "61",
      "104",
      "105"
    ],
    "answer": 0,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 87."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 60%, how many edges are present in G?",
    "options": [
      "435",
      "291",
      "246",
      "261"
    ],
    "answer": 3,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 60% density, total edges = 261."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 31, 24, 44, 11, 7, 28, 5, 40, 10, 47], what is the prefix sum prefix[9] value (0-indexed sum from index 0 to 9)?",
    "options": [
      "200",
      "248",
      "231",
      "241"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 9 of the given array = 231."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 46, 2, 49, 7, 20, 36, 43, 45], what is the prefix sum prefix[5] value (0-indexed sum from index 0 to 5)?",
    "options": [
      "124",
      "127",
      "144",
      "147"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 5 of the given array = 127."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[27][21] starts at base address 2200 with each element occupying 2 bytes. If stored in row-major order, what is the memory address of A[9][13]?",
    "options": [
      "2434",
      "2646",
      "2600",
      "2604"
    ],
    "answer": 3,
    "explanation": "Address = Base + (i * Cols + j) * Size = 2200 + (9 * 21 + 13) * 2 = 2604."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [27, 33, 28, 25, 31], what is the prefix sum prefix[2] value (0-indexed sum from index 0 to 2)?",
    "options": [
      "105",
      "116",
      "88",
      "61"
    ],
    "answer": 2,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 2 of the given array = 88."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[19][32] starts at base address 2500 with each element occupying 8 bytes. If stored in column-major order, what is the memory address of A[7][11]?",
    "options": [
      "4212",
      "4228",
      "4380",
      "3116"
    ],
    "answer": 1,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2500 + (11 * 19 + 7) * 8 = 4228."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [37, 37, 11, 22, 19, 3, 21, 21, 11, 31], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "134",
      "171",
      "188",
      "192"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 171."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [43, 31, 13, 43, 5, 19, 44, 30, 2], what is the prefix sum prefix[7] value (0-indexed sum from index 0 to 7)?",
    "options": [
      "245",
      "185",
      "258",
      "228"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 7 of the given array = 228."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 23 vertices. If the graph connectivity density is 59%, how many edges are present in G?",
    "options": [
      "253",
      "149",
      "138",
      "172"
    ],
    "answer": 1,
    "explanation": "Max edges = V*(V-1)/2 = 23*(22)/2 = 253. At 59% density, total edges = 149."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 30 vertices. If the graph connectivity density is 54%, how many edges are present in G?",
    "options": [
      "234",
      "435",
      "219",
      "264"
    ],
    "answer": 0,
    "explanation": "Max edges = V*(V-1)/2 = 30*(29)/2 = 435. At 54% density, total edges = 234."
  },
  {
    "subject": "DSA",
    "topic": "Graph Theory",
    "difficulty": "Medium",
    "question": "An undirected simple graph G has 42 vertices. If the graph connectivity density is 37%, how many edges are present in G?",
    "options": [
      "360",
      "297",
      "318",
      "861"
    ],
    "answer": 2,
    "explanation": "Max edges = V*(V-1)/2 = 42*(41)/2 = 861. At 37% density, total edges = 318."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [3, 17, 43, 4, 50, 40, 44], what is the prefix sum prefix[4] value (0-indexed sum from index 0 to 4)?",
    "options": [
      "114",
      "117",
      "134",
      "167"
    ],
    "answer": 1,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 4 of the given array = 117."
  },
  {
    "subject": "DSA",
    "topic": "2D Arrays Address Mapping",
    "difficulty": "Hard",
    "question": "A 2D array A[18][27] starts at base address 2300 with each element occupying 4 bytes. If stored in column-major order, what is the memory address of A[3][10]?",
    "options": [
      "3032",
      "3024",
      "2420",
      "3104"
    ],
    "answer": 0,
    "explanation": "Address = Base + (j * Rows + i) * Size = 2300 + (10 * 18 + 3) * 4 = 3032."
  },
  {
    "subject": "DSA",
    "topic": "Prefix Sum Algorithm",
    "difficulty": "Easy",
    "question": "Given the 1D integer array [31, 28, 32, 30, 7, 31, 15, 25, 29, 16, 32], what is the prefix sum prefix[8] value (0-indexed sum from index 0 to 8)?",
    "options": [
      "197",
      "245",
      "257",
      "228"
    ],
    "answer": 3,
    "explanation": "Evaluating prefix sum: sum up indices from 0 to 8 of the given array = 228."
  }
];
