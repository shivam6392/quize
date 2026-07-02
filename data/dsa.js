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
      "O(log n)",
      "O(n log n)",
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
      "Average case only",
      "Upper bound of growth rate",
      "Exact growth",
      "Lower bound"
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
      "T(n) = 2n + 1",
      "T(n) = T(n-1) + n",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = n!"
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
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
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
      "Lower bound",
      "Tight bound"
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
      "Upper bound only",
      "Lower bound only",
      "No bound",
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
      "O(n log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
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
      "Best case only",
      "Average cost per operation over a sequence",
      "Space analysis",
      "Worst case only"
    ],
    "answer": 1,
    "explanation": "Amortized analysis averages cost across operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search?",
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
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the recurrence for merge sort?",
    "options": [
      "T(n) = T(n-1) + O(n)",
      "T(n) = T(n/2) + O(1)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = nT(n/2)"
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
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
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
    "difficulty": "Medium",
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
    "difficulty": "Medium",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Sliding window technique is used for?",
    "options": [
      "Subarray/substring problems with constraints",
      "Tree balancing",
      "Sorting",
      "Graph traversal"
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
      "Five",
      "Four",
      "Two",
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
      "O(n)",
      "O(k)",
      "O(n²)",
      "O(n*k)"
    ],
    "answer": 0,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Best Time to Buy Stock uses which pattern?",
    "options": [
      "Binary search",
      "Track minimum and max profit",
      "Two pointers",
      "Sliding window"
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
      "Middle",
      "Beginning",
      "End of array"
    ],
    "answer": 3,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Product of Array Except Self avoids division by using?",
    "options": [
      "Sorting",
      "Stack",
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
      "Sort by end time",
      "Sort by start time",
      "Build a tree",
      "Use a stack"
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
      "Heaps",
      "Trees",
      "Sorted arrays",
      "Graphs"
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
      "A balanced tree",
      "A priority queue",
      "A window of elements satisfying a condition",
      "A sorted subarray"
    ],
    "answer": 2,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "KMP algorithm's time complexity for pattern matching?",
    "options": [
      "O(m²)",
      "O(n*m)",
      "O(n+m)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "KMP uses failure function to avoid re-scanning."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Rabin-Karp uses what technique?",
    "options": [
      "Greedy",
      "Hashing",
      "Dynamic programming",
      "Backtracking"
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
      "Regular expressions",
      "Substring search",
      "Sorting only",
      "Character frequency comparison"
    ],
    "answer": 3,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "A palindrome reads the same?",
    "options": [
      "Only backward",
      "Forward and backward",
      "Diagonally",
      "Only forward"
    ],
    "answer": 1,
    "explanation": "Palindromes are symmetric strings."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "StringBuilder in Java is preferred over String for?",
    "options": [
      "Hashing",
      "Read-only access",
      "Sorting",
      "Frequent modifications (mutable)"
    ],
    "answer": 3,
    "explanation": "StringBuilder avoids creating new String objects."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Time complexity to check if a string is palindrome?",
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
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Frequency count of characters uses?",
    "options": [
      "Linked List",
      "Queue",
      "Stack",
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
      "O(n)",
      "O(log n)",
      "O(n²) using expand around center",
      "O(n³)"
    ],
    "answer": 2,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
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
      "O(n) space",
      "O(n²) time",
      "O(log n) time",
      "O(n) time, O(1) space"
    ],
    "answer": 3,
    "explanation": "Iterate once, reversing pointers in-place."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Middle of linked list found using?",
    "options": [
      "Slow and fast pointer",
      "Recursion",
      "Stack",
      "Counting then traversing"
    ],
    "answer": 0,
    "explanation": "When fast reaches end, slow is at middle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
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
    "difficulty": "Hard",
    "question": "Doubly linked list advantage over singly?",
    "options": [
      "Faster access by index",
      "Traversal in both directions",
      "Less memory",
      "Simpler implementation"
    ],
    "answer": 1,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
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
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Remove Nth node from end uses?",
    "options": [
      "Reverse list",
      "Binary search",
      "Stack of size N",
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
      "Random access",
      "LIFO (Last In First Out)",
      "LILO",
      "FIFO"
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
      "Stack",
      "Array",
      "Tree",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Monotonic stack is used for?",
    "options": [
      "BFS",
      "Sorting",
      "Next greater/smaller element problems",
      "String matching"
    ],
    "answer": 2,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Infix to postfix conversion uses?",
    "options": [
      "Stack for operators",
      "Tree",
      "Queue",
      "Linked list"
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
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "Both operations work on the top element only."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Postfix expression evaluation uses?",
    "options": [
      "Stack for operands",
      "Two stacks",
      "Queue",
      "Tree"
    ],
    "answer": 0,
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
      "FIFO (First In First Out)",
      "Random access"
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
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
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
      "Middle only",
      "Only rear",
      "Only front",
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
      "Stack",
      "Heap (binary heap)",
      "Array",
      "Linked list"
    ],
    "answer": 1,
    "explanation": "Heap gives O(log n) insert and extract-min/max."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "BFS graph traversal uses?",
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
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Time complexity of enqueue in circular queue?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "HashMap provides average case lookup of?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
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
      "Duplicate keys",
      "Two keys map to same index",
      "Key not found",
      "Hash table is full"
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
      "Linked list at each bucket",
      "Sorting",
      "Open addressing",
      "Rehashing only"
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
      "Using linked lists",
      "Probing for next empty slot",
      "Creating new table",
      "Ignoring collision"
    ],
    "answer": 1,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
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
      "Always returns 0",
      "Uniform distribution of keys",
      "Ignores input",
      "Returns key itself"
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
      "Random order",
      "Level order",
      "Descending order",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Height of a balanced BST with n nodes?",
    "options": [
      "O(n²)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "Balanced tree has logarithmic height."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(n log n)",
      "O(1)"
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
      "Rotations after insert/delete",
      "Rebuilding tree",
      "Using extra array"
    ],
    "answer": 1,
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
      "Sorting",
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
      "Right, Root, Left",
      "Left, Root, Right",
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
      "Right, Left, Root",
      "Left, Right, Root",
      "Root, Left, Right",
      "Left, Root, Right"
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
      "Queue (BFS)",
      "Sorting",
      "Stack",
      "Recursion only"
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
      "Root to deepest node",
      "Number of leaves",
      "Longest path between any two nodes",
      "Height of tree"
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
      "Range queries and updates efficiently",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "Segment tree handles range sum/min/max in O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
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
    "difficulty": "Medium",
    "question": "BFS uses which data structure?",
    "options": [
      "Array",
      "Queue",
      "Stack",
      "Heap"
    ],
    "answer": 1,
    "explanation": "BFS explores neighbors level-by-level using FIFO."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Dijkstra's algorithm fails with?",
    "options": [
      "Dense graphs",
      "Undirected graphs",
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
      "Cyclic graphs",
      "Undirected graphs",
      "Weighted graphs only",
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
      "Kruskal's MST and cycle detection",
      "String matching",
      "BFS",
      "Shortest path"
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
      "Only trees",
      "Only positive weights",
      "Only undirected",
      "Negative edge weights"
    ],
    "answer": 3,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Divide and conquer",
      "Greedy MST using sorted edges",
      "BFS-based",
      "Dynamic programming"
    ],
    "answer": 1,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Prim's algorithm starts from?",
    "options": [
      "Leaf node",
      "All vertices",
      "Any single vertex",
      "Heaviest edge"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Floyd-Warshall finds?",
    "options": [
      "Topological order",
      "Single-source shortest path",
      "All-pairs shortest paths",
      "MST"
    ],
    "answer": 2,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Cycle detection in undirected graph uses?",
    "options": [
      "Dijkstra",
      "DFS with parent tracking or Union-Find",
      "Topological sort",
      "BFS only"
    ],
    "answer": 1,
    "explanation": "Back edge to non-parent indicates cycle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
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
      "O(E²)",
      "O(V²)",
      "O(V+E)",
      "O(V)"
    ],
    "answer": 2,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Memoization is?",
    "options": [
      "Greedy",
      "Brute force",
      "Top-down DP with caching",
      "Bottom-up approach"
    ],
    "answer": 2,
    "explanation": "Store results of subproblems to avoid recomputation."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
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
      "O(n*W)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "DP table of items × capacity."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(2^n)",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m*n)",
      "O(m+n)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
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
      "Matrix sorting",
      "Matrix dimensions",
      "Matrix values"
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
      "Diagonally only",
      "Up only",
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
      "Random solutions work",
      "Problem has no solution",
      "Optimal solution contains optimal sub-solutions",
      "Only greedy works"
    ],
    "answer": 2,
    "explanation": "Key property enabling DP approach."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Overlapping subproblems means?",
    "options": [
      "Linear scan suffices",
      "Same subproblems are solved multiple times",
      "No subproblems exist",
      "Each subproblem is unique"
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
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
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
      "Negative weights",
      "No items",
      "Only whole items",
      "Taking fractions of items"
    ],
    "answer": 3,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Huffman coding builds?",
    "options": [
      "Balanced BST",
      "Graph",
      "Optimal prefix-free binary tree",
      "Hash table"
    ],
    "answer": 2,
    "explanation": "Greedy: merge two lowest-frequency nodes."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Minimum platforms problem uses?",
    "options": [
      "Sorting arrival/departure times",
      "Binary search",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Sort and count overlapping intervals."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Greedy algorithms guarantee optimal solution when?",
    "options": [
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold",
      "Only for sorting"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Sudoku solver uses?",
    "options": [
      "Greedy",
      "Sorting",
      "Backtracking with constraint checking",
      "BFS"
    ],
    "answer": 2,
    "explanation": "Try digits 1-9, backtrack if constraint violated."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Rat in Maze explores paths using?",
    "options": [
      "Recursion and backtracking",
      "BFS only",
      "Dynamic programming",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Generating all permutations uses?",
    "options": [
      "Queue",
      "Hashing",
      "Sorting",
      "Swap-based backtracking"
    ],
    "answer": 3,
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
    "difficulty": "Hard",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
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
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Check if number is power of 2 using?",
    "options": [
      "n % 2 == 0",
      "n | 1 == n",
      "n >> 1 == 0",
      "n & (n-1) == 0"
    ],
    "answer": 3,
    "explanation": "Power of 2 has single set bit; n&(n-1) clears it."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Left shift by 1 is equivalent to?",
    "options": [
      "Subtract 1",
      "Divide by 2",
      "Multiply by 2",
      "Add 1"
    ],
    "answer": 2,
    "explanation": "Shifting bits left doubles the value."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Bit masking is used for?",
    "options": [
      "Extracting or setting specific bits",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Disjoint Set Union find uses?",
    "options": [
      "Path compression and union by rank",
      "Sorting",
      "BFS",
      "Hashing"
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
      "String matching",
      "Sorting",
      "Point updates and prefix sum queries",
      "Graph BFS"
    ],
    "answer": 2,
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
      "O(n²)",
      "O(n)"
    ],
    "answer": 1,
    "explanation": "Tree structure allows logarithmic range operations."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack follows which principle?",
    "options": [
      "Random access",
      "LIFO (Last In First Out)",
      "LILO",
      "FIFO"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Check if number is power of 2 using?",
    "options": [
      "n % 2 == 0",
      "n | 1 == n",
      "n >> 1 == 0",
      "n & (n-1) == 0"
    ],
    "answer": 3,
    "explanation": "Power of 2 has single set bit; n&(n-1) clears it."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is amortized analysis?",
    "options": [
      "Best case only",
      "Average cost per operation over a sequence",
      "Space analysis",
      "Worst case only"
    ],
    "answer": 1,
    "explanation": "Amortized analysis averages cost across operations."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = 2n + 1",
      "T(n) = T(n-1) + n",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = n!"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at?",
    "options": [
      "Middle only",
      "Only rear",
      "Only front",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "AVL tree maintains balance by?",
    "options": [
      "Sorting nodes",
      "Rotations after insert/delete",
      "Rebuilding tree",
      "Using extra array"
    ],
    "answer": 1,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Deque allows operations at?",
    "options": [
      "Middle only",
      "Only rear",
      "Only front",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "DP on grids typically moves?",
    "options": [
      "Diagonally only",
      "Up only",
      "Right and down",
      "All 8 directions"
    ],
    "answer": 2,
    "explanation": "Grid DP usually considers right/down movements."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Longest palindromic substring can be found in?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²) using expand around center",
      "O(n³)"
    ],
    "answer": 2,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Five",
      "Four",
      "Two",
      "Three"
    ],
    "answer": 3,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Five",
      "Four",
      "Two",
      "Three"
    ],
    "answer": 3,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Hard",
    "question": "What is a good hash function property?",
    "options": [
      "Always returns 0",
      "Uniform distribution of keys",
      "Ignores input",
      "Returns key itself"
    ],
    "answer": 1,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
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
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Rabin-Karp uses what technique?",
    "options": [
      "Greedy",
      "Hashing",
      "Dynamic programming",
      "Backtracking"
    ],
    "answer": 1,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Fractional knapsack allows?",
    "options": [
      "Negative weights",
      "No items",
      "Only whole items",
      "Taking fractions of items"
    ],
    "answer": 3,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack follows which principle?",
    "options": [
      "Random access",
      "LIFO (Last In First Out)",
      "LILO",
      "FIFO"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
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
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "KMP algorithm's time complexity for pattern matching?",
    "options": [
      "O(m²)",
      "O(n*m)",
      "O(n+m)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "KMP uses failure function to avoid re-scanning."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(2^n)",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at?",
    "options": [
      "Middle only",
      "Only rear",
      "Only front",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the worst-case time complexity of bubble sort?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 3,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Fractional knapsack allows?",
    "options": [
      "Negative weights",
      "No items",
      "Only whole items",
      "Taking fractions of items"
    ],
    "answer": 3,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the worst-case time complexity of bubble sort?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 3,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(2^n)",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "A palindrome reads the same?",
    "options": [
      "Only backward",
      "Forward and backward",
      "Diagonally",
      "Only forward"
    ],
    "answer": 1,
    "explanation": "Palindromes are symmetric strings."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Generating all permutations uses?",
    "options": [
      "Queue",
      "Hashing",
      "Sorting",
      "Swap-based backtracking"
    ],
    "answer": 3,
    "explanation": "Swap elements, recurse, then swap back."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Floyd-Warshall finds?",
    "options": [
      "Topological order",
      "Single-source shortest path",
      "All-pairs shortest paths",
      "MST"
    ],
    "answer": 2,
    "explanation": "DP approach considers all intermediate vertices."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the worst-case time complexity of bubble sort?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 3,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Doubly linked list advantage over singly?",
    "options": [
      "Faster access by index",
      "Traversal in both directions",
      "Less memory",
      "Simpler implementation"
    ],
    "answer": 1,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Divide and conquer",
      "Greedy MST using sorted edges",
      "BFS-based",
      "Dynamic programming"
    ],
    "answer": 1,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Frequency count of characters uses?",
    "options": [
      "Linked List",
      "Queue",
      "Stack",
      "Array of size 26 or HashMap"
    ],
    "answer": 3,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity?",
    "options": [
      "O(E²)",
      "O(V²)",
      "O(V+E)",
      "O(V)"
    ],
    "answer": 2,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
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
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Doubly linked list advantage over singly?",
    "options": [
      "Faster access by index",
      "Traversal in both directions",
      "Less memory",
      "Simpler implementation"
    ],
    "answer": 1,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "DP on grids typically moves?",
    "options": [
      "Diagonally only",
      "Up only",
      "Right and down",
      "All 8 directions"
    ],
    "answer": 2,
    "explanation": "Grid DP usually considers right/down movements."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Monotonic stack is used for?",
    "options": [
      "BFS",
      "Sorting",
      "Next greater/smaller element problems",
      "String matching"
    ],
    "answer": 2,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Move Zeroes problem moves zeros to?",
    "options": [
      "Sorted position",
      "Middle",
      "Beginning",
      "End of array"
    ],
    "answer": 3,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
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
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Bellman-Ford handles?",
    "options": [
      "Only trees",
      "Only positive weights",
      "Only undirected",
      "Negative edge weights"
    ],
    "answer": 3,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Doubly linked list advantage over singly?",
    "options": [
      "Faster access by index",
      "Traversal in both directions",
      "Less memory",
      "Simpler implementation"
    ],
    "answer": 1,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m*n)",
      "O(m+n)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "A palindrome reads the same?",
    "options": [
      "Only backward",
      "Forward and backward",
      "Diagonally",
      "Only forward"
    ],
    "answer": 1,
    "explanation": "Palindromes are symmetric strings."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What does Big O notation describe?",
    "options": [
      "Average case only",
      "Upper bound of growth rate",
      "Exact growth",
      "Lower bound"
    ],
    "answer": 1,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m*n)",
      "O(m+n)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Prim's algorithm starts from?",
    "options": [
      "Leaf node",
      "All vertices",
      "Any single vertex",
      "Heaviest edge"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
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
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack follows which principle?",
    "options": [
      "Random access",
      "LIFO (Last In First Out)",
      "LILO",
      "FIFO"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "AVL tree maintains balance by?",
    "options": [
      "Sorting nodes",
      "Rotations after insert/delete",
      "Rebuilding tree",
      "Using extra array"
    ],
    "answer": 1,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Random order",
      "Level order",
      "Descending order",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
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
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Balanced parentheses checking uses?",
    "options": [
      "Stack",
      "Array",
      "Tree",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Sliding window technique is used for?",
    "options": [
      "Subarray/substring problems with constraints",
      "Tree balancing",
      "Sorting",
      "Graph traversal"
    ],
    "answer": 0,
    "explanation": "Sliding window maintains a dynamic range."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Bit masking is used for?",
    "options": [
      "Extracting or setting specific bits",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Overlapping subproblems means?",
    "options": [
      "Linear scan suffices",
      "Same subproblems are solved multiple times",
      "No subproblems exist",
      "Each subproblem is unique"
    ],
    "answer": 1,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity?",
    "options": [
      "O(E²)",
      "O(V²)",
      "O(V+E)",
      "O(V)"
    ],
    "answer": 2,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Divide and conquer",
      "Greedy MST using sorted edges",
      "BFS-based",
      "Dynamic programming"
    ],
    "answer": 1,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Five",
      "Four",
      "Two",
      "Three"
    ],
    "answer": 3,
    "explanation": "Low, mid, high pointers create 3 partitions."
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
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(2^n)",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Postfix expression evaluation uses?",
    "options": [
      "Stack for operands",
      "Two stacks",
      "Queue",
      "Tree"
    ],
    "answer": 0,
    "explanation": "Push operands, pop two for each operator."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Generating all permutations uses?",
    "options": [
      "Queue",
      "Hashing",
      "Sorting",
      "Swap-based backtracking"
    ],
    "answer": 3,
    "explanation": "Swap elements, recurse, then swap back."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Five",
      "Four",
      "Two",
      "Three"
    ],
    "answer": 3,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Checking if two strings are anagrams requires?",
    "options": [
      "Regular expressions",
      "Substring search",
      "Sorting only",
      "Character frequency comparison"
    ],
    "answer": 3,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Rabin-Karp uses what technique?",
    "options": [
      "Greedy",
      "Hashing",
      "Dynamic programming",
      "Backtracking"
    ],
    "answer": 1,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Time complexity of enqueue in circular queue?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Hard",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Rat in Maze explores paths using?",
    "options": [
      "Recursion and backtracking",
      "BFS only",
      "Dynamic programming",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Merge Intervals first step is?",
    "options": [
      "Sort by end time",
      "Sort by start time",
      "Build a tree",
      "Use a stack"
    ],
    "answer": 1,
    "explanation": "Sorting by start allows sequential merging."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "Big Theta represents?",
    "options": [
      "Upper bound only",
      "Lower bound only",
      "No bound",
      "Tight bound"
    ],
    "answer": 3,
    "explanation": "Θ gives both upper and lower bounds."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
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
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Overlapping subproblems means?",
    "options": [
      "Linear scan suffices",
      "Same subproblems are solved multiple times",
      "No subproblems exist",
      "Each subproblem is unique"
    ],
    "answer": 1,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Greedy algorithms guarantee optimal solution when?",
    "options": [
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold",
      "Only for sorting"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Adjacency list space complexity?",
    "options": [
      "O(E²)",
      "O(V²)",
      "O(V+E)",
      "O(V)"
    ],
    "answer": 2,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Time complexity of enqueue in circular queue?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 0,
    "explanation": "Direct insertion at rear pointer."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
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
    "difficulty": "Hard",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is amortized analysis?",
    "options": [
      "Best case only",
      "Average cost per operation over a sequence",
      "Space analysis",
      "Worst case only"
    ],
    "answer": 1,
    "explanation": "Amortized analysis averages cost across operations."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack follows which principle?",
    "options": [
      "Random access",
      "LIFO (Last In First Out)",
      "LILO",
      "FIFO"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(2^n)",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Time complexity to check if a string is palindrome?",
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
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Random order",
      "Level order",
      "Descending order",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Move Zeroes problem moves zeros to?",
    "options": [
      "Sorted position",
      "Middle",
      "Beginning",
      "End of array"
    ],
    "answer": 3,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Balanced parentheses checking uses?",
    "options": [
      "Stack",
      "Array",
      "Tree",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Balanced parentheses checking uses?",
    "options": [
      "Stack",
      "Array",
      "Tree",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Greedy algorithms guarantee optimal solution when?",
    "options": [
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold",
      "Only for sorting"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Deque allows operations at?",
    "options": [
      "Middle only",
      "Only rear",
      "Only front",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Five",
      "Four",
      "Two",
      "Three"
    ],
    "answer": 3,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What does Big O notation describe?",
    "options": [
      "Average case only",
      "Upper bound of growth rate",
      "Exact growth",
      "Lower bound"
    ],
    "answer": 1,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What does Big O notation describe?",
    "options": [
      "Average case only",
      "Upper bound of growth rate",
      "Exact growth",
      "Lower bound"
    ],
    "answer": 1,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Postfix expression evaluation uses?",
    "options": [
      "Stack for operands",
      "Two stacks",
      "Queue",
      "Tree"
    ],
    "answer": 0,
    "explanation": "Push operands, pop two for each operator."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
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
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Overlapping subproblems means?",
    "options": [
      "Linear scan suffices",
      "Same subproblems are solved multiple times",
      "No subproblems exist",
      "Each subproblem is unique"
    ],
    "answer": 1,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Prim's algorithm starts from?",
    "options": [
      "Leaf node",
      "All vertices",
      "Any single vertex",
      "Heaviest edge"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Merge Intervals first step is?",
    "options": [
      "Sort by end time",
      "Sort by start time",
      "Build a tree",
      "Use a stack"
    ],
    "answer": 1,
    "explanation": "Sorting by start allows sequential merging."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Random order",
      "Level order",
      "Descending order",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Deque allows operations at?",
    "options": [
      "Middle only",
      "Only rear",
      "Only front",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Deque allows operations at?",
    "options": [
      "Middle only",
      "Only rear",
      "Only front",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m*n)",
      "O(m+n)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Adjacency list space complexity?",
    "options": [
      "O(E²)",
      "O(V²)",
      "O(V+E)",
      "O(V)"
    ],
    "answer": 2,
    "explanation": "List stores only existing edges."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
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
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the recurrence for merge sort?",
    "options": [
      "T(n) = T(n-1) + O(n)",
      "T(n) = T(n/2) + O(1)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = nT(n/2)"
    ],
    "answer": 2,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Divide and conquer",
      "Greedy MST using sorted edges",
      "BFS-based",
      "Dynamic programming"
    ],
    "answer": 1,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
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
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Prim's algorithm starts from?",
    "options": [
      "Leaf node",
      "All vertices",
      "Any single vertex",
      "Heaviest edge"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "What is a good hash function property?",
    "options": [
      "Always returns 0",
      "Uniform distribution of keys",
      "Ignores input",
      "Returns key itself"
    ],
    "answer": 1,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m*n)",
      "O(m+n)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "BFS graph traversal uses?",
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
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Greedy algorithms guarantee optimal solution when?",
    "options": [
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold",
      "Only for sorting"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is amortized analysis?",
    "options": [
      "Best case only",
      "Average cost per operation over a sequence",
      "Space analysis",
      "Worst case only"
    ],
    "answer": 1,
    "explanation": "Amortized analysis averages cost across operations."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Cycle detection in undirected graph uses?",
    "options": [
      "Dijkstra",
      "DFS with parent tracking or Union-Find",
      "Topological sort",
      "BFS only"
    ],
    "answer": 1,
    "explanation": "Back edge to non-parent indicates cycle."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Merge Intervals first step is?",
    "options": [
      "Sort by end time",
      "Sort by start time",
      "Build a tree",
      "Use a stack"
    ],
    "answer": 1,
    "explanation": "Sorting by start allows sequential merging."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
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
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 3,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What does Big O notation describe?",
    "options": [
      "Average case only",
      "Upper bound of growth rate",
      "Exact growth",
      "Lower bound"
    ],
    "answer": 1,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
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
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at?",
    "options": [
      "Middle only",
      "Only rear",
      "Only front",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Prim's algorithm starts from?",
    "options": [
      "Leaf node",
      "All vertices",
      "Any single vertex",
      "Heaviest edge"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Checking if two strings are anagrams requires?",
    "options": [
      "Regular expressions",
      "Substring search",
      "Sorting only",
      "Character frequency comparison"
    ],
    "answer": 3,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Frequency count of characters uses?",
    "options": [
      "Linked List",
      "Queue",
      "Stack",
      "Array of size 26 or HashMap"
    ],
    "answer": 3,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
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
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "0/1 Knapsack time complexity?",
    "options": [
      "O(n log n)",
      "O(n*W)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "DP table of items × capacity."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Random order",
      "Level order",
      "Descending order",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What does the sliding window technique maintain?",
    "options": [
      "A balanced tree",
      "A priority queue",
      "A window of elements satisfying a condition",
      "A sorted subarray"
    ],
    "answer": 2,
    "explanation": "The window expands/contracts based on constraints."
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
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Preorder traversal visits?",
    "options": [
      "Right, Root, Left",
      "Left, Root, Right",
      "Root, Left, Right",
      "Left, Right, Root"
    ],
    "answer": 2,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "Bit masking is used for?",
    "options": [
      "Extracting or setting specific bits",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "DP on grids typically moves?",
    "options": [
      "Diagonally only",
      "Up only",
      "Right and down",
      "All 8 directions"
    ],
    "answer": 2,
    "explanation": "Grid DP usually considers right/down movements."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Checking if two strings are anagrams requires?",
    "options": [
      "Regular expressions",
      "Substring search",
      "Sorting only",
      "Character frequency comparison"
    ],
    "answer": 3,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using?",
    "options": [
      "Recursion and backtracking",
      "BFS only",
      "Dynamic programming",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
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
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "A palindrome reads the same?",
    "options": [
      "Only backward",
      "Forward and backward",
      "Diagonally",
      "Only forward"
    ],
    "answer": 1,
    "explanation": "Palindromes are symmetric strings."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Move Zeroes problem moves zeros to?",
    "options": [
      "Sorted position",
      "Middle",
      "Beginning",
      "End of array"
    ],
    "answer": 3,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Preorder traversal visits?",
    "options": [
      "Right, Root, Left",
      "Left, Root, Right",
      "Root, Left, Right",
      "Left, Right, Root"
    ],
    "answer": 2,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Balanced parentheses checking uses?",
    "options": [
      "Stack",
      "Array",
      "Tree",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Divide and conquer",
      "Greedy MST using sorted edges",
      "BFS-based",
      "Dynamic programming"
    ],
    "answer": 1,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Diameter of binary tree is?",
    "options": [
      "Root to deepest node",
      "Number of leaves",
      "Longest path between any two nodes",
      "Height of tree"
    ],
    "answer": 2,
    "explanation": "Diameter = max of left height + right height at each node."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Monotonic stack is used for?",
    "options": [
      "BFS",
      "Sorting",
      "Next greater/smaller element problems",
      "String matching"
    ],
    "answer": 2,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Disjoint Set Union find uses?",
    "options": [
      "Path compression and union by rank",
      "Sorting",
      "BFS",
      "Hashing"
    ],
    "answer": 0,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
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
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack follows which principle?",
    "options": [
      "Random access",
      "LIFO (Last In First Out)",
      "LILO",
      "FIFO"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Checking if two strings are anagrams requires?",
    "options": [
      "Regular expressions",
      "Substring search",
      "Sorting only",
      "Character frequency comparison"
    ],
    "answer": 3,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "DP on grids typically moves?",
    "options": [
      "Diagonally only",
      "Up only",
      "Right and down",
      "All 8 directions"
    ],
    "answer": 2,
    "explanation": "Grid DP usually considers right/down movements."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "AVL tree maintains balance by?",
    "options": [
      "Sorting nodes",
      "Rotations after insert/delete",
      "Rebuilding tree",
      "Using extra array"
    ],
    "answer": 1,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Checking if two strings are anagrams requires?",
    "options": [
      "Regular expressions",
      "Substring search",
      "Sorting only",
      "Character frequency comparison"
    ],
    "answer": 3,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "BFS graph traversal uses?",
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
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Binary tree maximum path sum problem uses?",
    "options": [
      "Greedy",
      "BFS",
      "Sorting",
      "Recursion with global max tracking"
    ],
    "answer": 3,
    "explanation": "At each node, compute max path through it."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "DP on grids typically moves?",
    "options": [
      "Diagonally only",
      "Up only",
      "Right and down",
      "All 8 directions"
    ],
    "answer": 2,
    "explanation": "Grid DP usually considers right/down movements."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Hard",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Frequency count of characters uses?",
    "options": [
      "Linked List",
      "Queue",
      "Stack",
      "Array of size 26 or HashMap"
    ],
    "answer": 3,
    "explanation": "Fixed-size array or map tracks counts efficiently."
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
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Overlapping subproblems means?",
    "options": [
      "Linear scan suffices",
      "Same subproblems are solved multiple times",
      "No subproblems exist",
      "Each subproblem is unique"
    ],
    "answer": 1,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
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
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Balanced parentheses checking uses?",
    "options": [
      "Stack",
      "Array",
      "Tree",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
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
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = 2n + 1",
      "T(n) = T(n-1) + n",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = n!"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Merge Intervals first step is?",
    "options": [
      "Sort by end time",
      "Sort by start time",
      "Build a tree",
      "Use a stack"
    ],
    "answer": 1,
    "explanation": "Sorting by start allows sequential merging."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "Time complexity of linear search?",
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
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = 2n + 1",
      "T(n) = T(n-1) + n",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = n!"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Overlapping subproblems means?",
    "options": [
      "Linear scan suffices",
      "Same subproblems are solved multiple times",
      "No subproblems exist",
      "Each subproblem is unique"
    ],
    "answer": 1,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(2^n)",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Hard",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Level order traversal uses?",
    "options": [
      "Queue (BFS)",
      "Sorting",
      "Stack",
      "Recursion only"
    ],
    "answer": 0,
    "explanation": "Process nodes level by level using queue."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Queue follows which principle?",
    "options": [
      "LIFO",
      "Priority",
      "FIFO (First In First Out)",
      "Random access"
    ],
    "answer": 2,
    "explanation": "First element enqueued is first dequeued."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Deque allows operations at?",
    "options": [
      "Middle only",
      "Only rear",
      "Only front",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Remove Nth node from end uses?",
    "options": [
      "Reverse list",
      "Binary search",
      "Stack of size N",
      "Two pointers with N gap"
    ],
    "answer": 3,
    "explanation": "Fast pointer leads by N, both advance until fast reaches end."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Monotonic stack is used for?",
    "options": [
      "BFS",
      "Sorting",
      "Next greater/smaller element problems",
      "String matching"
    ],
    "answer": 2,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
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
    "difficulty": "Hard",
    "question": "Move Zeroes problem moves zeros to?",
    "options": [
      "Sorted position",
      "Middle",
      "Beginning",
      "End of array"
    ],
    "answer": 3,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
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
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
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
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m*n)",
      "O(m+n)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Chaining resolves collisions using?",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Open addressing",
      "Rehashing only"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Segment tree is used for?",
    "options": [
      "Range queries and updates efficiently",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "Segment tree handles range sum/min/max in O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Binary tree maximum path sum problem uses?",
    "options": [
      "Greedy",
      "BFS",
      "Sorting",
      "Recursion with global max tracking"
    ],
    "answer": 3,
    "explanation": "At each node, compute max path through it."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Time complexity of rotating array by k positions using reversal?",
    "options": [
      "O(n)",
      "O(k)",
      "O(n²)",
      "O(n*k)"
    ],
    "answer": 0,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Sudoku solver uses?",
    "options": [
      "Greedy",
      "Sorting",
      "Backtracking with constraint checking",
      "BFS"
    ],
    "answer": 2,
    "explanation": "Try digits 1-9, backtrack if constraint violated."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Longest palindromic substring can be found in?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²) using expand around center",
      "O(n³)"
    ],
    "answer": 2,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Frequency count of characters uses?",
    "options": [
      "Linked List",
      "Queue",
      "Stack",
      "Array of size 26 or HashMap"
    ],
    "answer": 3,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Bellman-Ford handles?",
    "options": [
      "Only trees",
      "Only positive weights",
      "Only undirected",
      "Negative edge weights"
    ],
    "answer": 3,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Disjoint Set Union find uses?",
    "options": [
      "Path compression and union by rank",
      "Sorting",
      "BFS",
      "Hashing"
    ],
    "answer": 0,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Hard",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "AVL tree maintains balance by?",
    "options": [
      "Sorting nodes",
      "Rotations after insert/delete",
      "Rebuilding tree",
      "Using extra array"
    ],
    "answer": 1,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
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
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "A palindrome reads the same?",
    "options": [
      "Only backward",
      "Forward and backward",
      "Diagonally",
      "Only forward"
    ],
    "answer": 1,
    "explanation": "Palindromes are symmetric strings."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Fractional knapsack allows?",
    "options": [
      "Negative weights",
      "No items",
      "Only whole items",
      "Taking fractions of items"
    ],
    "answer": 3,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Doubly linked list advantage over singly?",
    "options": [
      "Faster access by index",
      "Traversal in both directions",
      "Less memory",
      "Simpler implementation"
    ],
    "answer": 1,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "BFS graph traversal uses?",
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
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Time complexity to check if a string is palindrome?",
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
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the worst-case time complexity of bubble sort?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 3,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Five",
      "Four",
      "Two",
      "Three"
    ],
    "answer": 3,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Preorder traversal visits?",
    "options": [
      "Right, Root, Left",
      "Left, Root, Right",
      "Root, Left, Right",
      "Left, Right, Root"
    ],
    "answer": 2,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "0/1 Knapsack time complexity?",
    "options": [
      "O(n log n)",
      "O(n*W)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "DP table of items × capacity."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "What is a good hash function property?",
    "options": [
      "Always returns 0",
      "Uniform distribution of keys",
      "Ignores input",
      "Returns key itself"
    ],
    "answer": 1,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is amortized analysis?",
    "options": [
      "Best case only",
      "Average cost per operation over a sequence",
      "Space analysis",
      "Worst case only"
    ],
    "answer": 1,
    "explanation": "Amortized analysis averages cost across operations."
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
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Postorder traversal visits?",
    "options": [
      "Right, Left, Root",
      "Left, Right, Root",
      "Root, Left, Right",
      "Left, Root, Right"
    ],
    "answer": 1,
    "explanation": "Post = root last, after children."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Level order traversal uses?",
    "options": [
      "Queue (BFS)",
      "Sorting",
      "Stack",
      "Recursion only"
    ],
    "answer": 0,
    "explanation": "Process nodes level by level using queue."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Longest palindromic substring can be found in?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²) using expand around center",
      "O(n³)"
    ],
    "answer": 2,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Rat in Maze explores paths using?",
    "options": [
      "Recursion and backtracking",
      "BFS only",
      "Dynamic programming",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Random order",
      "Level order",
      "Descending order",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "DP on grids typically moves?",
    "options": [
      "Diagonally only",
      "Up only",
      "Right and down",
      "All 8 directions"
    ],
    "answer": 2,
    "explanation": "Grid DP usually considers right/down movements."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Stack follows which principle?",
    "options": [
      "Random access",
      "LIFO (Last In First Out)",
      "LILO",
      "FIFO"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Postorder traversal visits?",
    "options": [
      "Right, Left, Root",
      "Left, Right, Root",
      "Root, Left, Right",
      "Left, Root, Right"
    ],
    "answer": 1,
    "explanation": "Post = root last, after children."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "What does the sliding window technique maintain?",
    "options": [
      "A balanced tree",
      "A priority queue",
      "A window of elements satisfying a condition",
      "A sorted subarray"
    ],
    "answer": 2,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is amortized analysis?",
    "options": [
      "Best case only",
      "Average cost per operation over a sequence",
      "Space analysis",
      "Worst case only"
    ],
    "answer": 1,
    "explanation": "Amortized analysis averages cost across operations."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Five",
      "Four",
      "Two",
      "Three"
    ],
    "answer": 3,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Reversing a singly linked list takes?",
    "options": [
      "O(n) space",
      "O(n²) time",
      "O(log n) time",
      "O(n) time, O(1) space"
    ],
    "answer": 3,
    "explanation": "Iterate once, reversing pointers in-place."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Segment tree is used for?",
    "options": [
      "Range queries and updates efficiently",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "Segment tree handles range sum/min/max in O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Random order",
      "Level order",
      "Descending order",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Monotonic stack is used for?",
    "options": [
      "BFS",
      "Sorting",
      "Next greater/smaller element problems",
      "String matching"
    ],
    "answer": 2,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
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
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
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
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the worst-case time complexity of bubble sort?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 3,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Random order",
      "Level order",
      "Descending order",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Five",
      "Four",
      "Two",
      "Three"
    ],
    "answer": 3,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m*n)",
      "O(m+n)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Postorder traversal visits?",
    "options": [
      "Right, Left, Root",
      "Left, Right, Root",
      "Root, Left, Right",
      "Left, Root, Right"
    ],
    "answer": 1,
    "explanation": "Post = root last, after children."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Rat in Maze explores paths using?",
    "options": [
      "Recursion and backtracking",
      "BFS only",
      "Dynamic programming",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Move Zeroes problem moves zeros to?",
    "options": [
      "Sorted position",
      "Middle",
      "Beginning",
      "End of array"
    ],
    "answer": 3,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Move Zeroes problem moves zeros to?",
    "options": [
      "Sorted position",
      "Middle",
      "Beginning",
      "End of array"
    ],
    "answer": 3,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Best Time to Buy Stock uses which pattern?",
    "options": [
      "Binary search",
      "Track minimum and max profit",
      "Two pointers",
      "Sliding window"
    ],
    "answer": 1,
    "explanation": "Track min price seen so far, compute max profit."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Longest palindromic substring can be found in?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²) using expand around center",
      "O(n³)"
    ],
    "answer": 2,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Big Theta represents?",
    "options": [
      "Upper bound only",
      "Lower bound only",
      "No bound",
      "Tight bound"
    ],
    "answer": 3,
    "explanation": "Θ gives both upper and lower bounds."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "KMP algorithm's time complexity for pattern matching?",
    "options": [
      "O(m²)",
      "O(n*m)",
      "O(n+m)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "KMP uses failure function to avoid re-scanning."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Five",
      "Four",
      "Two",
      "Three"
    ],
    "answer": 3,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Greedy algorithms guarantee optimal solution when?",
    "options": [
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold",
      "Only for sorting"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "BFS graph traversal uses?",
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
    "topic": "Hashing",
    "difficulty": "Hard",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
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
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the recurrence for merge sort?",
    "options": [
      "T(n) = T(n-1) + O(n)",
      "T(n) = T(n/2) + O(1)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = nT(n/2)"
    ],
    "answer": 2,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Frequency count of characters uses?",
    "options": [
      "Linked List",
      "Queue",
      "Stack",
      "Array of size 26 or HashMap"
    ],
    "answer": 3,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Bellman-Ford handles?",
    "options": [
      "Only trees",
      "Only positive weights",
      "Only undirected",
      "Negative edge weights"
    ],
    "answer": 3,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Time complexity of rotating array by k positions using reversal?",
    "options": [
      "O(n)",
      "O(k)",
      "O(n²)",
      "O(n*k)"
    ],
    "answer": 0,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Time complexity of linear search?",
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
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Cycle detection in undirected graph uses?",
    "options": [
      "Dijkstra",
      "DFS with parent tracking or Union-Find",
      "Topological sort",
      "BFS only"
    ],
    "answer": 1,
    "explanation": "Back edge to non-parent indicates cycle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Prim's algorithm starts from?",
    "options": [
      "Leaf node",
      "All vertices",
      "Any single vertex",
      "Heaviest edge"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the best case time complexity of insertion sort?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Already sorted array needs only one pass."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Fractional knapsack allows?",
    "options": [
      "Negative weights",
      "No items",
      "Only whole items",
      "Taking fractions of items"
    ],
    "answer": 3,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(2^n)",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Checking if two strings are anagrams requires?",
    "options": [
      "Regular expressions",
      "Substring search",
      "Sorting only",
      "Character frequency comparison"
    ],
    "answer": 3,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Deque allows operations at?",
    "options": [
      "Middle only",
      "Only rear",
      "Only front",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Height of a balanced BST with n nodes?",
    "options": [
      "O(n²)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "Balanced tree has logarithmic height."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Open addressing resolves collisions by?",
    "options": [
      "Using linked lists",
      "Probing for next empty slot",
      "Creating new table",
      "Ignoring collision"
    ],
    "answer": 1,
    "explanation": "Linear/quadratic probing finds alternative slots."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Hard",
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
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Checking if two strings are anagrams requires?",
    "options": [
      "Regular expressions",
      "Substring search",
      "Sorting only",
      "Character frequency comparison"
    ],
    "answer": 3,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Greedy algorithms guarantee optimal solution when?",
    "options": [
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold",
      "Only for sorting"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Disjoint Set Union find uses?",
    "options": [
      "Path compression and union by rank",
      "Sorting",
      "BFS",
      "Hashing"
    ],
    "answer": 0,
    "explanation": "Optimizations give nearly O(1) amortized operations."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Check if number is power of 2 using?",
    "options": [
      "n % 2 == 0",
      "n | 1 == n",
      "n >> 1 == 0",
      "n & (n-1) == 0"
    ],
    "answer": 3,
    "explanation": "Power of 2 has single set bit; n&(n-1) clears it."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
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
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Minimum platforms problem uses?",
    "options": [
      "Sorting arrival/departure times",
      "Binary search",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Sort and count overlapping intervals."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Bit masking is used for?",
    "options": [
      "Extracting or setting specific bits",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Prim's algorithm starts from?",
    "options": [
      "Leaf node",
      "All vertices",
      "Any single vertex",
      "Heaviest edge"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "AVL tree maintains balance by?",
    "options": [
      "Sorting nodes",
      "Rotations after insert/delete",
      "Rebuilding tree",
      "Using extra array"
    ],
    "answer": 1,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Divide and conquer",
      "Greedy MST using sorted edges",
      "BFS-based",
      "Dynamic programming"
    ],
    "answer": 1,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Cycle detection in undirected graph uses?",
    "options": [
      "Dijkstra",
      "DFS with parent tracking or Union-Find",
      "Topological sort",
      "BFS only"
    ],
    "answer": 1,
    "explanation": "Back edge to non-parent indicates cycle."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Bit masking is used for?",
    "options": [
      "Extracting or setting specific bits",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "What does the sliding window technique maintain?",
    "options": [
      "A balanced tree",
      "A priority queue",
      "A window of elements satisfying a condition",
      "A sorted subarray"
    ],
    "answer": 2,
    "explanation": "The window expands/contracts based on constraints."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Rat in Maze explores paths using?",
    "options": [
      "Recursion and backtracking",
      "BFS only",
      "Dynamic programming",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Rabin-Karp uses what technique?",
    "options": [
      "Greedy",
      "Hashing",
      "Dynamic programming",
      "Backtracking"
    ],
    "answer": 1,
    "explanation": "Rolling hash compares pattern hash with window hash."
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
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = 2n + 1",
      "T(n) = T(n-1) + n",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = n!"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "AVL tree maintains balance by?",
    "options": [
      "Sorting nodes",
      "Rotations after insert/delete",
      "Rebuilding tree",
      "Using extra array"
    ],
    "answer": 1,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Generating all permutations uses?",
    "options": [
      "Queue",
      "Hashing",
      "Sorting",
      "Swap-based backtracking"
    ],
    "answer": 3,
    "explanation": "Swap elements, recurse, then swap back."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the worst-case time complexity of bubble sort?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 3,
    "explanation": "Bubble sort compares all pairs in worst case."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Generating all permutations uses?",
    "options": [
      "Queue",
      "Hashing",
      "Sorting",
      "Swap-based backtracking"
    ],
    "answer": 3,
    "explanation": "Swap elements, recurse, then swap back."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m*n)",
      "O(m+n)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Diameter of binary tree is?",
    "options": [
      "Root to deepest node",
      "Number of leaves",
      "Longest path between any two nodes",
      "Height of tree"
    ],
    "answer": 2,
    "explanation": "Diameter = max of left height + right height at each node."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Merge Intervals first step is?",
    "options": [
      "Sort by end time",
      "Sort by start time",
      "Build a tree",
      "Use a stack"
    ],
    "answer": 1,
    "explanation": "Sorting by start allows sequential merging."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
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
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Sliding window technique is used for?",
    "options": [
      "Subarray/substring problems with constraints",
      "Tree balancing",
      "Sorting",
      "Graph traversal"
    ],
    "answer": 0,
    "explanation": "Sliding window maintains a dynamic range."
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
    "topic": "Hashing",
    "difficulty": "Hard",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = 2n + 1",
      "T(n) = T(n-1) + n",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = n!"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
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
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Five",
      "Four",
      "Two",
      "Three"
    ],
    "answer": 3,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack follows which principle?",
    "options": [
      "Random access",
      "LIFO (Last In First Out)",
      "LILO",
      "FIFO"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "DP on grids typically moves?",
    "options": [
      "Diagonally only",
      "Up only",
      "Right and down",
      "All 8 directions"
    ],
    "answer": 2,
    "explanation": "Grid DP usually considers right/down movements."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(2^n)",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Topological sort applies to?",
    "options": [
      "Cyclic graphs",
      "Undirected graphs",
      "Weighted graphs only",
      "Directed Acyclic Graphs (DAG)"
    ],
    "answer": 3,
    "explanation": "Topological ordering requires no cycles."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Rat in Maze explores paths using?",
    "options": [
      "Recursion and backtracking",
      "BFS only",
      "Dynamic programming",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Try all directions, backtrack on dead ends."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Greedy algorithms guarantee optimal solution when?",
    "options": [
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold",
      "Only for sorting"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Longest palindromic substring can be found in?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²) using expand around center",
      "O(n³)"
    ],
    "answer": 2,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Time complexity of push and pop in stack?",
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
    "question": "Huffman coding builds?",
    "options": [
      "Balanced BST",
      "Graph",
      "Optimal prefix-free binary tree",
      "Hash table"
    ],
    "answer": 2,
    "explanation": "Greedy: merge two lowest-frequency nodes."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Greedy algorithms guarantee optimal solution when?",
    "options": [
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold",
      "Only for sorting"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Bit masking is used for?",
    "options": [
      "Extracting or setting specific bits",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "AVL tree maintains balance by?",
    "options": [
      "Sorting nodes",
      "Rotations after insert/delete",
      "Rebuilding tree",
      "Using extra array"
    ],
    "answer": 1,
    "explanation": "Single/double rotations restore balance factor."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = 2n + 1",
      "T(n) = T(n-1) + n",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = n!"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Divide and conquer",
      "Greedy MST using sorted edges",
      "BFS-based",
      "Dynamic programming"
    ],
    "answer": 1,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m*n)",
      "O(m+n)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack follows which principle?",
    "options": [
      "Random access",
      "LIFO (Last In First Out)",
      "LILO",
      "FIFO"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is amortized analysis?",
    "options": [
      "Best case only",
      "Average cost per operation over a sequence",
      "Space analysis",
      "Worst case only"
    ],
    "answer": 1,
    "explanation": "Amortized analysis averages cost across operations."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Balanced parentheses checking uses?",
    "options": [
      "Stack",
      "Array",
      "Tree",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Push opening brackets, pop and match closing ones."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Medium",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
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
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Level order traversal uses?",
    "options": [
      "Queue (BFS)",
      "Sorting",
      "Stack",
      "Recursion only"
    ],
    "answer": 0,
    "explanation": "Process nodes level by level using queue."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Height of a balanced BST with n nodes?",
    "options": [
      "O(n²)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "answer": 2,
    "explanation": "Balanced tree has logarithmic height."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(2^n)",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Theta represents?",
    "options": [
      "Upper bound only",
      "Lower bound only",
      "No bound",
      "Tight bound"
    ],
    "answer": 3,
    "explanation": "Θ gives both upper and lower bounds."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Prim's algorithm starts from?",
    "options": [
      "Leaf node",
      "All vertices",
      "Any single vertex",
      "Heaviest edge"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "HashMap provides average case lookup of?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Hash function maps key directly to bucket."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Diameter of binary tree is?",
    "options": [
      "Root to deepest node",
      "Number of leaves",
      "Longest path between any two nodes",
      "Height of tree"
    ],
    "answer": 2,
    "explanation": "Diameter = max of left height + right height at each node."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Fenwick tree (BIT) supports?",
    "options": [
      "String matching",
      "Sorting",
      "Point updates and prefix sum queries",
      "Graph BFS"
    ],
    "answer": 2,
    "explanation": "Binary Indexed Tree uses bit manipulation for efficiency."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Divide and conquer",
      "Greedy MST using sorted edges",
      "BFS-based",
      "Dynamic programming"
    ],
    "answer": 1,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Disjoint Set Union find uses?",
    "options": [
      "Path compression and union by rank",
      "Sorting",
      "BFS",
      "Hashing"
    ],
    "answer": 0,
    "explanation": "Optimizations give nearly O(1) amortized operations."
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
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Cycle detection in undirected graph uses?",
    "options": [
      "Dijkstra",
      "DFS with parent tracking or Union-Find",
      "Topological sort",
      "BFS only"
    ],
    "answer": 1,
    "explanation": "Back edge to non-parent indicates cycle."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "0/1 Knapsack time complexity?",
    "options": [
      "O(n log n)",
      "O(n*W)",
      "O(2^n)",
      "O(n²)"
    ],
    "answer": 1,
    "explanation": "DP table of items × capacity."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = 2n + 1",
      "T(n) = T(n-1) + n",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = n!"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Preorder traversal visits?",
    "options": [
      "Right, Root, Left",
      "Left, Root, Right",
      "Root, Left, Right",
      "Left, Right, Root"
    ],
    "answer": 2,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Postfix expression evaluation uses?",
    "options": [
      "Stack for operands",
      "Two stacks",
      "Queue",
      "Tree"
    ],
    "answer": 0,
    "explanation": "Push operands, pop two for each operator."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m*n)",
      "O(m+n)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Random order",
      "Level order",
      "Descending order",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Memoization is?",
    "options": [
      "Greedy",
      "Brute force",
      "Top-down DP with caching",
      "Bottom-up approach"
    ],
    "answer": 2,
    "explanation": "Store results of subproblems to avoid recomputation."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Remove Nth node from end uses?",
    "options": [
      "Reverse list",
      "Binary search",
      "Stack of size N",
      "Two pointers with N gap"
    ],
    "answer": 3,
    "explanation": "Fast pointer leads by N, both advance until fast reaches end."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Hard",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal?",
    "options": [
      "O(n)",
      "O(k)",
      "O(n²)",
      "O(n*k)"
    ],
    "answer": 0,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "question": "Bit masking is used for?",
    "options": [
      "Extracting or setting specific bits",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack follows which principle?",
    "options": [
      "Random access",
      "LIFO (Last In First Out)",
      "LILO",
      "FIFO"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Sudoku solver uses?",
    "options": [
      "Greedy",
      "Sorting",
      "Backtracking with constraint checking",
      "BFS"
    ],
    "answer": 2,
    "explanation": "Try digits 1-9, backtrack if constraint violated."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "HashMap provides average case lookup of?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Hash function maps key directly to bucket."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What does Big O notation describe?",
    "options": [
      "Average case only",
      "Upper bound of growth rate",
      "Exact growth",
      "Lower bound"
    ],
    "answer": 1,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
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
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Circular linked list last node points to?",
    "options": [
      "First node (head)",
      "Itself",
      "NULL",
      "Previous node"
    ],
    "answer": 0,
    "explanation": "Circular list forms a loop back to head."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Segment tree is used for?",
    "options": [
      "Range queries and updates efficiently",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "Segment tree handles range sum/min/max in O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Trees",
    "difficulty": "Hard",
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
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Omega represents?",
    "options": [
      "Upper bound",
      "Average case",
      "Lower bound",
      "Tight bound"
    ],
    "answer": 2,
    "explanation": "Ω notation gives the best-case lower bound."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Greedy algorithms guarantee optimal solution when?",
    "options": [
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold",
      "Only for sorting"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
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
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Kruskal's algorithm is?",
    "options": [
      "Divide and conquer",
      "Greedy MST using sorted edges",
      "BFS-based",
      "Dynamic programming"
    ],
    "answer": 1,
    "explanation": "Sort edges, add if no cycle (Union-Find)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Time complexity of rotating array by k positions using reversal?",
    "options": [
      "O(n)",
      "O(k)",
      "O(n²)",
      "O(n*k)"
    ],
    "answer": 0,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Monotonic stack is used for?",
    "options": [
      "BFS",
      "Sorting",
      "Next greater/smaller element problems",
      "String matching"
    ],
    "answer": 2,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Time complexity of rotating array by k positions using reversal?",
    "options": [
      "O(n)",
      "O(k)",
      "O(n²)",
      "O(n*k)"
    ],
    "answer": 0,
    "explanation": "Three reversals each take O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
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
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the recurrence for merge sort?",
    "options": [
      "T(n) = T(n-1) + O(n)",
      "T(n) = T(n/2) + O(1)",
      "T(n) = 2T(n/2) + O(n)",
      "T(n) = nT(n/2)"
    ],
    "answer": 2,
    "explanation": "Merge sort splits in half and merges in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
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
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Fractional knapsack allows?",
    "options": [
      "Negative weights",
      "No items",
      "Only whole items",
      "Taking fractions of items"
    ],
    "answer": 3,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Monotonic stack is used for?",
    "options": [
      "BFS",
      "Sorting",
      "Next greater/smaller element problems",
      "String matching"
    ],
    "answer": 2,
    "explanation": "Maintains increasing/decreasing order of elements."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Prim's algorithm starts from?",
    "options": [
      "Leaf node",
      "All vertices",
      "Any single vertex",
      "Heaviest edge"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Easy",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Bit masking is used for?",
    "options": [
      "Extracting or setting specific bits",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Postfix expression evaluation uses?",
    "options": [
      "Stack for operands",
      "Two stacks",
      "Queue",
      "Tree"
    ],
    "answer": 0,
    "explanation": "Push operands, pop two for each operator."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What does Big O notation describe?",
    "options": [
      "Average case only",
      "Upper bound of growth rate",
      "Exact growth",
      "Lower bound"
    ],
    "answer": 1,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Huffman coding builds?",
    "options": [
      "Balanced BST",
      "Graph",
      "Optimal prefix-free binary tree",
      "Hash table"
    ],
    "answer": 2,
    "explanation": "Greedy: merge two lowest-frequency nodes."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Graph adjacency matrix space complexity?",
    "options": [
      "O(V)",
      "O(V+E)",
      "O(E)",
      "O(V²)"
    ],
    "answer": 3,
    "explanation": "V×V matrix stores all possible edges."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "question": "LIS (Longest Increasing Subsequence) optimal complexity?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(2^n)",
      "O(n log n)"
    ],
    "answer": 3,
    "explanation": "Binary search + patience sorting approach."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
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
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Time complexity to check if a string is palindrome?",
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
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Binary tree maximum path sum problem uses?",
    "options": [
      "Greedy",
      "BFS",
      "Sorting",
      "Recursion with global max tracking"
    ],
    "answer": 3,
    "explanation": "At each node, compute max path through it."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Diameter of binary tree is?",
    "options": [
      "Root to deepest node",
      "Number of leaves",
      "Longest path between any two nodes",
      "Height of tree"
    ],
    "answer": 2,
    "explanation": "Diameter = max of left height + right height at each node."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "Sudoku solver uses?",
    "options": [
      "Greedy",
      "Sorting",
      "Backtracking with constraint checking",
      "BFS"
    ],
    "answer": 2,
    "explanation": "Try digits 1-9, backtrack if constraint violated."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Dutch National Flag partitions array into how many parts?",
    "options": [
      "Five",
      "Four",
      "Two",
      "Three"
    ],
    "answer": 3,
    "explanation": "Low, mid, high pointers create 3 partitions."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Fractional knapsack allows?",
    "options": [
      "Negative weights",
      "No items",
      "Only whole items",
      "Taking fractions of items"
    ],
    "answer": 3,
    "explanation": "Sort by value/weight ratio, take fractions."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m*n)",
      "O(m+n)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
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
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Cycle detection in undirected graph uses?",
    "options": [
      "Dijkstra",
      "DFS with parent tracking or Union-Find",
      "Topological sort",
      "BFS only"
    ],
    "answer": 1,
    "explanation": "Back edge to non-parent indicates cycle."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Doubly linked list advantage over singly?",
    "options": [
      "Faster access by index",
      "Traversal in both directions",
      "Less memory",
      "Simpler implementation"
    ],
    "answer": 1,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "HashMap provides average case lookup of?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Hash function maps key directly to bucket."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Remove Nth node from end uses?",
    "options": [
      "Reverse list",
      "Binary search",
      "Stack of size N",
      "Two pointers with N gap"
    ],
    "answer": 3,
    "explanation": "Fast pointer leads by N, both advance until fast reaches end."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "What is a good hash function property?",
    "options": [
      "Always returns 0",
      "Uniform distribution of keys",
      "Ignores input",
      "Returns key itself"
    ],
    "answer": 1,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is amortized analysis?",
    "options": [
      "Best case only",
      "Average cost per operation over a sequence",
      "Space analysis",
      "Worst case only"
    ],
    "answer": 1,
    "explanation": "Amortized analysis averages cost across operations."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Diameter of binary tree is?",
    "options": [
      "Root to deepest node",
      "Number of leaves",
      "Longest path between any two nodes",
      "Height of tree"
    ],
    "answer": 2,
    "explanation": "Diameter = max of left height + right height at each node."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Product of Array Except Self avoids division by using?",
    "options": [
      "Sorting",
      "Stack",
      "Left and right product arrays",
      "Queue"
    ],
    "answer": 2,
    "explanation": "Multiply prefix and suffix products."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Medium",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "Overlapping subproblems means?",
    "options": [
      "Linear scan suffices",
      "Same subproblems are solved multiple times",
      "No subproblems exist",
      "Each subproblem is unique"
    ],
    "answer": 1,
    "explanation": "Caching avoids redundant computation."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = 2n + 1",
      "T(n) = T(n-1) + n",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = n!"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Job scheduling with deadlines maximizes?",
    "options": [
      "Total profit",
      "Minimum cost",
      "Total time",
      "Number of jobs"
    ],
    "answer": 0,
    "explanation": "Schedule highest-profit jobs first within deadlines."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "What is a good hash function property?",
    "options": [
      "Always returns 0",
      "Uniform distribution of keys",
      "Ignores input",
      "Returns key itself"
    ],
    "answer": 1,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Diameter of binary tree is?",
    "options": [
      "Root to deepest node",
      "Number of leaves",
      "Longest path between any two nodes",
      "Height of tree"
    ],
    "answer": 2,
    "explanation": "Diameter = max of left height + right height at each node."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Rabin-Karp uses what technique?",
    "options": [
      "Greedy",
      "Hashing",
      "Dynamic programming",
      "Backtracking"
    ],
    "answer": 1,
    "explanation": "Rolling hash compares pattern hash with window hash."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Diameter of binary tree is?",
    "options": [
      "Root to deepest node",
      "Number of leaves",
      "Longest path between any two nodes",
      "Height of tree"
    ],
    "answer": 2,
    "explanation": "Diameter = max of left height + right height at each node."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Segment tree is used for?",
    "options": [
      "Range queries and updates efficiently",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "Segment tree handles range sum/min/max in O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "Backtracking time complexity is typically?",
    "options": [
      "O(n²)",
      "O(n)",
      "O(n log n)",
      "Exponential"
    ],
    "answer": 3,
    "explanation": "Explores all possible configurations."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
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
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "Tabulation is?",
    "options": [
      "Top-down approach",
      "Backtracking",
      "Recursion",
      "Bottom-up DP using table"
    ],
    "answer": 3,
    "explanation": "Fill table iteratively from base cases."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Queue follows which principle?",
    "options": [
      "LIFO",
      "Priority",
      "FIFO (First In First Out)",
      "Random access"
    ],
    "answer": 2,
    "explanation": "First element enqueued is first dequeued."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Level order traversal uses?",
    "options": [
      "Queue (BFS)",
      "Sorting",
      "Stack",
      "Recursion only"
    ],
    "answer": 0,
    "explanation": "Process nodes level by level using queue."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Frequency count of characters uses?",
    "options": [
      "Linked List",
      "Queue",
      "Stack",
      "Array of size 26 or HashMap"
    ],
    "answer": 3,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = 2n + 1",
      "T(n) = T(n-1) + n",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = n!"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Doubly linked list advantage over singly?",
    "options": [
      "Faster access by index",
      "Traversal in both directions",
      "Less memory",
      "Simpler implementation"
    ],
    "answer": 1,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Chaining resolves collisions using?",
    "options": [
      "Linked list at each bucket",
      "Sorting",
      "Open addressing",
      "Rehashing only"
    ],
    "answer": 0,
    "explanation": "Each bucket holds a chain of entries."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Deque allows operations at?",
    "options": [
      "Middle only",
      "Only rear",
      "Only front",
      "Both front and rear"
    ],
    "answer": 3,
    "explanation": "Double-ended queue supports both ends."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Segment tree is used for?",
    "options": [
      "Range queries and updates efficiently",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "Segment tree handles range sum/min/max in O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Random order",
      "Level order",
      "Descending order",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
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
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Time complexity to check if a string is palindrome?",
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
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Big Theta represents?",
    "options": [
      "Upper bound only",
      "Lower bound only",
      "No bound",
      "Tight bound"
    ],
    "answer": 3,
    "explanation": "Θ gives both upper and lower bounds."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "Master theorem applies to recurrences of what form?",
    "options": [
      "T(n) = 2n + 1",
      "T(n) = T(n-1) + n",
      "T(n) = aT(n/b) + f(n)",
      "T(n) = n!"
    ],
    "answer": 2,
    "explanation": "Master theorem solves divide-and-conquer recurrences."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Random order",
      "Level order",
      "Descending order",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Doubly linked list advantage over singly?",
    "options": [
      "Faster access by index",
      "Traversal in both directions",
      "Less memory",
      "Simpler implementation"
    ],
    "answer": 1,
    "explanation": "DLL has prev pointer enabling backward traversal."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Longest palindromic substring can be found in?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²) using expand around center",
      "O(n³)"
    ],
    "answer": 2,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Medium",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What does Big O notation describe?",
    "options": [
      "Average case only",
      "Upper bound of growth rate",
      "Exact growth",
      "Lower bound"
    ],
    "answer": 1,
    "explanation": "Big O gives the worst-case upper bound."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "question": "DP on grids typically moves?",
    "options": [
      "Diagonally only",
      "Up only",
      "Right and down",
      "All 8 directions"
    ],
    "answer": 2,
    "explanation": "Grid DP usually considers right/down movements."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Medium",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Hashing",
    "difficulty": "Hard",
    "question": "HashMap provides average case lookup of?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Hash function maps key directly to bucket."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "XOR of a number with 0 gives?",
    "options": [
      "0",
      "The number itself",
      "1",
      "Complement"
    ],
    "answer": 1,
    "explanation": "x ^ 0 = x."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Medium",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "Bellman-Ford handles?",
    "options": [
      "Only trees",
      "Only positive weights",
      "Only undirected",
      "Negative edge weights"
    ],
    "answer": 3,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Move Zeroes problem moves zeros to?",
    "options": [
      "Sorted position",
      "Middle",
      "Beginning",
      "End of array"
    ],
    "answer": 3,
    "explanation": "Non-zero elements move left, zeros fill right."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Hard",
    "question": "What is the auxiliary space of quicksort (average)?",
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
    "difficulty": "Medium",
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
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "Checking if two strings are anagrams requires?",
    "options": [
      "Regular expressions",
      "Substring search",
      "Sorting only",
      "Character frequency comparison"
    ],
    "answer": 3,
    "explanation": "Same character counts means anagram."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Inorder traversal of BST gives?",
    "options": [
      "Random order",
      "Level order",
      "Descending order",
      "Sorted ascending order"
    ],
    "answer": 3,
    "explanation": "Left-Root-Right visits BST nodes in sorted order."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Queue follows which principle?",
    "options": [
      "LIFO",
      "Priority",
      "FIFO (First In First Out)",
      "Random access"
    ],
    "answer": 2,
    "explanation": "First element enqueued is first dequeued."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "What is the time complexity of the naive recursive Fibonacci?",
    "options": [
      "O(2^n)",
      "O(n²)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Each call branches into two recursive calls."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "Prefix sum array helps answer what queries efficiently?",
    "options": [
      "Graph connectivity",
      "Range sum queries",
      "Minimum element",
      "Sorting status"
    ],
    "answer": 1,
    "explanation": "Prefix sum allows O(1) range sum queries."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Time complexity of push and pop in stack?",
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
    "topic": "Queue",
    "difficulty": "Easy",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "KMP algorithm's time complexity for pattern matching?",
    "options": [
      "O(m²)",
      "O(n*m)",
      "O(n+m)",
      "O(n²)"
    ],
    "answer": 2,
    "explanation": "KMP uses failure function to avoid re-scanning."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Queue",
    "difficulty": "Hard",
    "question": "Circular queue solves which problem?",
    "options": [
      "Sorting",
      "Wasted space in linear queue",
      "Balancing",
      "Searching"
    ],
    "answer": 1,
    "explanation": "Rear wraps around to use freed front space."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Easy",
    "question": "Activity selection problem selects by?",
    "options": [
      "Latest start",
      "Random",
      "Earliest finish time",
      "Maximum duration"
    ],
    "answer": 2,
    "explanation": "Greedy: pick activity finishing earliest."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Sliding window technique is used for?",
    "options": [
      "Subarray/substring problems with constraints",
      "Tree balancing",
      "Sorting",
      "Graph traversal"
    ],
    "answer": 0,
    "explanation": "Sliding window maintains a dynamic range."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "question": "Bit masking is used for?",
    "options": [
      "Extracting or setting specific bits",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "AND/OR masks isolate or set individual bits."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack overflow occurs when?",
    "options": [
      "Array is sorted",
      "Queue is full",
      "Heap is full",
      "Stack memory is exhausted (e.g., deep recursion)"
    ],
    "answer": 3,
    "explanation": "Infinite or very deep recursion causes stack overflow."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "Bellman-Ford handles?",
    "options": [
      "Only trees",
      "Only positive weights",
      "Only undirected",
      "Negative edge weights"
    ],
    "answer": 3,
    "explanation": "Relaxes all edges V-1 times."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Middle of linked list found using?",
    "options": [
      "Slow and fast pointer",
      "Recursion",
      "Stack",
      "Counting then traversing"
    ],
    "answer": 0,
    "explanation": "When fast reaches end, slow is at middle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Hard",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Stack follows which principle?",
    "options": [
      "Random access",
      "LIFO (Last In First Out)",
      "LILO",
      "FIFO"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Longest palindromic substring can be found in?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n²) using expand around center",
      "O(n³)"
    ],
    "answer": 2,
    "explanation": "Expand from each center in O(n) time, n centers."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Easy",
    "question": "Stack follows which principle?",
    "options": [
      "Random access",
      "LIFO (Last In First Out)",
      "LILO",
      "FIFO"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Easy",
    "question": "Big Theta represents?",
    "options": [
      "Upper bound only",
      "Lower bound only",
      "No bound",
      "Tight bound"
    ],
    "answer": 3,
    "explanation": "Θ gives both upper and lower bounds."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Easy",
    "question": "Rehashing is triggered when?",
    "options": [
      "Table is empty",
      "After deletion only",
      "First insertion",
      "Load factor exceeds threshold"
    ],
    "answer": 3,
    "explanation": "High load factor degrades performance, so table resizes."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Medium",
    "question": "Preorder traversal visits?",
    "options": [
      "Right, Root, Left",
      "Left, Root, Right",
      "Root, Left, Right",
      "Left, Right, Root"
    ],
    "answer": 2,
    "explanation": "Pre = root first, then children."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Two pointer technique works best on?",
    "options": [
      "Heaps",
      "Trees",
      "Sorted arrays",
      "Graphs"
    ],
    "answer": 2,
    "explanation": "Two pointers converge from both ends of sorted data."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "Big Theta represents?",
    "options": [
      "Upper bound only",
      "Lower bound only",
      "No bound",
      "Tight bound"
    ],
    "answer": 3,
    "explanation": "Θ gives both upper and lower bounds."
  },
  {
    "subject": "DSA",
    "topic": "Advanced Topics",
    "difficulty": "Hard",
    "question": "Trie is best for?",
    "options": [
      "Prefix-based string operations",
      "Graph traversal",
      "Matrix operations",
      "Sorting numbers"
    ],
    "answer": 0,
    "explanation": "Trie stores strings character-by-character for prefix search."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Easy",
    "question": "Floyd's cycle detection uses?",
    "options": [
      "Two pointers (slow and fast)",
      "Stack",
      "Recursion only",
      "Queue"
    ],
    "answer": 0,
    "explanation": "Slow moves 1 step, fast moves 2; they meet in cycle."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Easy",
    "question": "DFS uses which data structure?",
    "options": [
      "Stack (or recursion)",
      "Heap",
      "Queue",
      "Array"
    ],
    "answer": 0,
    "explanation": "DFS goes deep first using LIFO."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Segment tree is used for?",
    "options": [
      "Range queries and updates efficiently",
      "Graph traversal",
      "Sorting",
      "String matching"
    ],
    "answer": 0,
    "explanation": "Segment tree handles range sum/min/max in O(log n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "Heap property: in a max-heap, parent is?",
    "options": [
      "Random",
      "Equal to children",
      "Less than children",
      "Greater than or equal to children"
    ],
    "answer": 3,
    "explanation": "Max-heap: parent >= children at every node."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the best case time complexity of insertion sort?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(n²)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Already sorted array needs only one pass."
  },
  {
    "subject": "DSA",
    "topic": "Complexity Analysis",
    "difficulty": "Medium",
    "question": "What is the space complexity of merge sort?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n²)",
      "O(n)"
    ],
    "answer": 3,
    "explanation": "Merge sort needs auxiliary array of size n."
  },
  {
    "subject": "DSA",
    "topic": "Backtracking",
    "difficulty": "Easy",
    "question": "N-Queens problem places N queens such that?",
    "options": [
      "All queens are in one row",
      "Queens are adjacent",
      "No two queens attack each other",
      "Queens form diagonal"
    ],
    "answer": 2,
    "explanation": "No two queens share row, column, or diagonal."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Sliding window technique is used for?",
    "options": [
      "Subarray/substring problems with constraints",
      "Tree balancing",
      "Sorting",
      "Graph traversal"
    ],
    "answer": 0,
    "explanation": "Sliding window maintains a dynamic range."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m*n)",
      "O(m+n)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "question": "Greedy algorithms guarantee optimal solution when?",
    "options": [
      "Never",
      "Always",
      "Greedy choice property and optimal substructure hold",
      "Only for sorting"
    ],
    "answer": 2,
    "explanation": "Both properties must be proven for correctness."
  },
  {
    "subject": "DSA",
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "Frequency count of characters uses?",
    "options": [
      "Linked List",
      "Queue",
      "Stack",
      "Array of size 26 or HashMap"
    ],
    "answer": 3,
    "explanation": "Fixed-size array or map tracks counts efficiently."
  },
  {
    "subject": "DSA",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "question": "Right shift by 1 is equivalent to?",
    "options": [
      "Add 2",
      "Divide by 2 (integer division)",
      "XOR with 1",
      "Multiply by 2"
    ],
    "answer": 1,
    "explanation": "Shifting bits right halves the value."
  },
  {
    "subject": "DSA",
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "Kadane's algorithm solves?",
    "options": [
      "Maximum subarray sum",
      "String matching",
      "Shortest path",
      "Sorting"
    ],
    "answer": 0,
    "explanation": "Kadane's finds max contiguous subarray in O(n)."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Hard",
    "question": "Diameter of binary tree is?",
    "options": [
      "Root to deepest node",
      "Number of leaves",
      "Longest path between any two nodes",
      "Height of tree"
    ],
    "answer": 2,
    "explanation": "Diameter = max of left height + right height at each node."
  },
  {
    "subject": "DSA",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "question": "LCS (Longest Common Subsequence) of two strings?",
    "options": [
      "O(m²)",
      "O(m*n)",
      "O(m+n)",
      "O(2^n)"
    ],
    "answer": 1,
    "explanation": "2D DP table comparing characters."
  },
  {
    "subject": "DSA",
    "topic": "Hashing",
    "difficulty": "Medium",
    "question": "What is a good hash function property?",
    "options": [
      "Always returns 0",
      "Uniform distribution of keys",
      "Ignores input",
      "Returns key itself"
    ],
    "answer": 1,
    "explanation": "Uniform distribution minimizes collisions."
  },
  {
    "subject": "DSA",
    "topic": "Stack",
    "difficulty": "Hard",
    "question": "Stack follows which principle?",
    "options": [
      "Random access",
      "LIFO (Last In First Out)",
      "LILO",
      "FIFO"
    ],
    "answer": 1,
    "explanation": "Last element pushed is first popped."
  },
  {
    "subject": "DSA",
    "topic": "Linked List",
    "difficulty": "Hard",
    "question": "Detecting intersection point of two lists uses?",
    "options": [
      "Length difference or two-pointer approach",
      "Sorting",
      "Queue",
      "Stack"
    ],
    "answer": 0,
    "explanation": "Align starts by length diff, then traverse together."
  },
  {
    "subject": "DSA",
    "topic": "Graph",
    "difficulty": "Medium",
    "question": "Prim's algorithm starts from?",
    "options": [
      "Leaf node",
      "All vertices",
      "Any single vertex",
      "Heaviest edge"
    ],
    "answer": 2,
    "explanation": "Prim grows MST from one vertex using min-edge."
  },
  {
    "subject": "DSA",
    "topic": "Trees",
    "difficulty": "Easy",
    "question": "LCA (Lowest Common Ancestor) in BST takes?",
    "options": [
      "O(n²)",
      "O(h) where h is height",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Follow BST property to find split point."
  }
];
