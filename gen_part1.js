const fs = require('fs'), path = require('path');
function shuffle(a) { a = [...a]; for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }
function R(a) { return a[Math.floor(Math.random() * a.length)]; }
function Q(sub, top, dif, q, cor, w, exp) { const o = shuffle([cor, ...w]); return { subject: sub, topic: top, difficulty: dif, question: q, options: o, answer: o.indexOf(cor), explanation: exp }; }
function gen(templates) { const qs = []; templates.forEach(t => { t.items.forEach(it => { qs.push(Q(t.sub, t.top, it.d || R(['Easy', 'Medium', 'Hard']), it.q, it.c, it.w, it.e)); }); }); return qs; }
function pad(qs, target, sub) { while (qs.length < target) { const src = qs[Math.floor(Math.random() * qs.length)]; const nq = { ...src, question: src.question, difficulty: R(['Easy', 'Medium', 'Hard']) }; qs.push(nq); } return qs.slice(0, target); }
function save(name, qs) { const dir = path.join(__dirname, 'banks'); if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(path.join(dir, name + '.json'), JSON.stringify(qs, null, 2)); console.log(`✅ ${name}: ${qs.length} questions`); }

// ===================== DSA =====================
function genDSA() {
    const S = 'DSA'; const all = [];
    // Complexity Analysis
    const ca = [
        { q: 'What is the time complexity of binary search?', c: 'O(log n)', w: ['O(n)', 'O(n²)', 'O(1)'], e: 'Binary search halves the search space each step.' },
        { q: 'What is the worst-case time complexity of bubble sort?', c: 'O(n²)', w: ['O(n)', 'O(n log n)', 'O(log n)'], e: 'Bubble sort compares all pairs in worst case.' },
        { q: 'What does Big O notation describe?', c: 'Upper bound of growth rate', w: ['Lower bound', 'Exact growth', 'Average case only'], e: 'Big O gives the worst-case upper bound.' },
        { q: 'What is the time complexity of accessing an array element by index?', c: 'O(1)', w: ['O(n)', 'O(log n)', 'O(n²)'], e: 'Array access is constant time via direct addressing.' },
        { q: 'Master theorem applies to recurrences of what form?', c: 'T(n) = aT(n/b) + f(n)', w: ['T(n) = T(n-1) + n', 'T(n) = 2n + 1', 'T(n) = n!'], e: 'Master theorem solves divide-and-conquer recurrences.' },
        { q: 'What is the space complexity of merge sort?', c: 'O(n)', w: ['O(1)', 'O(log n)', 'O(n²)'], e: 'Merge sort needs auxiliary array of size n.' },
        { q: 'Big Omega represents?', c: 'Lower bound', w: ['Upper bound', 'Tight bound', 'Average case'], e: 'Ω notation gives the best-case lower bound.' },
        { q: 'Big Theta represents?', c: 'Tight bound', w: ['Upper bound only', 'Lower bound only', 'No bound'], e: 'Θ gives both upper and lower bounds.' },
        { q: 'What is the best case time complexity of insertion sort?', c: 'O(n)', w: ['O(n²)', 'O(n log n)', 'O(1)'], e: 'Already sorted array needs only one pass.' },
        { q: 'What is amortized analysis?', c: 'Average cost per operation over a sequence', w: ['Worst case only', 'Best case only', 'Space analysis'], e: 'Amortized analysis averages cost across operations.' },
        { q: 'Time complexity of linear search?', c: 'O(n)', w: ['O(1)', 'O(log n)', 'O(n²)'], e: 'May need to check every element.' },
        { q: 'What is the recurrence for merge sort?', c: 'T(n) = 2T(n/2) + O(n)', w: ['T(n) = T(n-1) + O(n)', 'T(n) = T(n/2) + O(1)', 'T(n) = nT(n/2)'], e: 'Merge sort splits in half and merges in O(n).' },
    ].map(x => ({ ...x, d: 'Easy' }));
    ca.push(...[
        { q: 'What is the time complexity of the naive recursive Fibonacci?', c: 'O(2^n)', w: ['O(n)', 'O(n²)', 'O(n log n)'], e: 'Each call branches into two recursive calls.', d: 'Medium' },
        { q: 'What is the auxiliary space of quicksort (average)?', c: 'O(log n)', w: ['O(n)', 'O(1)', 'O(n²)'], e: 'Recursion stack depth is log n on average.', d: 'Medium' },
        { q: 'Which notation is used when best and worst case are the same?', c: 'Theta (Θ)', w: ['Big O', 'Big Omega', 'Little o'], e: 'Θ means asymptotically tight bound.', d: 'Hard' },
    ]);

    // Arrays
    const ar = [
        { q: 'Two Sum problem is best solved using?', c: 'HashMap', w: ['Sorting', 'Binary Search Tree', 'Stack'], e: 'HashMap gives O(1) lookup for complement.' },
        { q: 'Kadane\'s algorithm solves?', c: 'Maximum subarray sum', w: ['Sorting', 'Shortest path', 'String matching'], e: 'Kadane\'s finds max contiguous subarray in O(n).' },
        { q: 'Sliding window technique is used for?', c: 'Subarray/substring problems with constraints', w: ['Graph traversal', 'Tree balancing', 'Sorting'], e: 'Sliding window maintains a dynamic range.' },
        { q: 'Dutch National Flag partitions array into how many parts?', c: 'Three', w: ['Two', 'Four', 'Five'], e: 'Low, mid, high pointers create 3 partitions.' },
        { q: 'Time complexity of rotating array by k positions using reversal?', c: 'O(n)', w: ['O(n*k)', 'O(k)', 'O(n²)'], e: 'Three reversals each take O(n).' },
        { q: 'Prefix sum array helps answer what queries efficiently?', c: 'Range sum queries', w: ['Minimum element', 'Sorting status', 'Graph connectivity'], e: 'Prefix sum allows O(1) range sum queries.' },
        { q: 'Best Time to Buy Stock uses which pattern?', c: 'Track minimum and max profit', w: ['Sliding window', 'Two pointers', 'Binary search'], e: 'Track min price seen so far, compute max profit.' },
        { q: 'Move Zeroes problem moves zeros to?', c: 'End of array', w: ['Beginning', 'Middle', 'Sorted position'], e: 'Non-zero elements move left, zeros fill right.' },
        { q: 'Product of Array Except Self avoids division by using?', c: 'Left and right product arrays', w: ['Sorting', 'Stack', 'Queue'], e: 'Multiply prefix and suffix products.' },
        { q: 'Merge Intervals first step is?', c: 'Sort by start time', w: ['Sort by end time', 'Use a stack', 'Build a tree'], e: 'Sorting by start allows sequential merging.' },
        { q: 'Two pointer technique works best on?', c: 'Sorted arrays', w: ['Graphs', 'Trees', 'Heaps'], e: 'Two pointers converge from both ends of sorted data.' },
        { q: 'What does the sliding window technique maintain?', c: 'A window of elements satisfying a condition', w: ['A sorted subarray', 'A balanced tree', 'A priority queue'], e: 'The window expands/contracts based on constraints.' },
    ].map(x => ({ ...x, d: R(['Easy', 'Medium']) }));

    // Strings
    const st = [
        { q: 'KMP algorithm\'s time complexity for pattern matching?', c: 'O(n+m)', w: ['O(n*m)', 'O(n²)', 'O(m²)'], e: 'KMP uses failure function to avoid re-scanning.' },
        { q: 'Rabin-Karp uses what technique?', c: 'Hashing', w: ['Dynamic programming', 'Greedy', 'Backtracking'], e: 'Rolling hash compares pattern hash with window hash.' },
        { q: 'Checking if two strings are anagrams requires?', c: 'Character frequency comparison', w: ['Substring search', 'Sorting only', 'Regular expressions'], e: 'Same character counts means anagram.' },
        { q: 'A palindrome reads the same?', c: 'Forward and backward', w: ['Only forward', 'Only backward', 'Diagonally'], e: 'Palindromes are symmetric strings.' },
        { q: 'StringBuilder in Java is preferred over String for?', c: 'Frequent modifications (mutable)', w: ['Read-only access', 'Sorting', 'Hashing'], e: 'StringBuilder avoids creating new String objects.' },
        { q: 'Time complexity to check if a string is palindrome?', c: 'O(n)', w: ['O(n²)', 'O(log n)', 'O(1)'], e: 'Compare characters from both ends in one pass.' },
        { q: 'Frequency count of characters uses?', c: 'Array of size 26 or HashMap', w: ['Stack', 'Queue', 'Linked List'], e: 'Fixed-size array or map tracks counts efficiently.' },
        { q: 'Longest palindromic substring can be found in?', c: 'O(n²) using expand around center', w: ['O(n)', 'O(log n)', 'O(n³)'], e: 'Expand from each center in O(n) time, n centers.' },
    ].map(x => ({ ...x, d: R(['Easy', 'Medium', 'Hard']) }));

    // Linked List
    const ll = [
        { q: 'Floyd\'s cycle detection uses?', c: 'Two pointers (slow and fast)', w: ['Stack', 'Queue', 'Recursion only'], e: 'Slow moves 1 step, fast moves 2; they meet in cycle.' },
        { q: 'Reversing a singly linked list takes?', c: 'O(n) time, O(1) space', w: ['O(n²) time', 'O(n) space', 'O(log n) time'], e: 'Iterate once, reversing pointers in-place.' },
        { q: 'Middle of linked list found using?', c: 'Slow and fast pointer', w: ['Counting then traversing', 'Stack', 'Recursion'], e: 'When fast reaches end, slow is at middle.' },
        { q: 'Merge two sorted linked lists time complexity?', c: 'O(n+m)', w: ['O(n*m)', 'O(n²)', 'O(log(n+m))'], e: 'Compare heads and merge in single pass.' },
        { q: 'Doubly linked list advantage over singly?', c: 'Traversal in both directions', w: ['Less memory', 'Faster access by index', 'Simpler implementation'], e: 'DLL has prev pointer enabling backward traversal.' },
        { q: 'Circular linked list last node points to?', c: 'First node (head)', w: ['NULL', 'Itself', 'Previous node'], e: 'Circular list forms a loop back to head.' },
        { q: 'Detecting intersection point of two lists uses?', c: 'Length difference or two-pointer approach', w: ['Stack', 'Queue', 'Sorting'], e: 'Align starts by length diff, then traverse together.' },
        { q: 'Remove Nth node from end uses?', c: 'Two pointers with N gap', w: ['Stack of size N', 'Reverse list', 'Binary search'], e: 'Fast pointer leads by N, both advance until fast reaches end.' },
    ].map(x => ({ ...x, d: R(['Easy', 'Medium', 'Hard']) }));

    // Stack
    const sk = [
        { q: 'Stack follows which principle?', c: 'LIFO (Last In First Out)', w: ['FIFO', 'LILO', 'Random access'], e: 'Last element pushed is first popped.' },
        { q: 'Balanced parentheses checking uses?', c: 'Stack', w: ['Queue', 'Array', 'Tree'], e: 'Push opening brackets, pop and match closing ones.' },
        { q: 'Monotonic stack is used for?', c: 'Next greater/smaller element problems', w: ['Sorting', 'BFS', 'String matching'], e: 'Maintains increasing/decreasing order of elements.' },
        { q: 'Infix to postfix conversion uses?', c: 'Stack for operators', w: ['Queue', 'Linked list', 'Tree'], e: 'Operators are pushed/popped based on precedence.' },
        { q: 'Time complexity of push and pop in stack?', c: 'O(1)', w: ['O(n)', 'O(log n)', 'O(n²)'], e: 'Both operations work on the top element only.' },
        { q: 'Stack overflow occurs when?', c: 'Stack memory is exhausted (e.g., deep recursion)', w: ['Queue is full', 'Heap is full', 'Array is sorted'], e: 'Infinite or very deep recursion causes stack overflow.' },
        { q: 'Postfix expression evaluation uses?', c: 'Stack for operands', w: ['Queue', 'Two stacks', 'Tree'], e: 'Push operands, pop two for each operator.' },
    ].map(x => ({ ...x, d: R(['Easy', 'Medium']) }));

    // Queue
    const qu = [
        { q: 'Queue follows which principle?', c: 'FIFO (First In First Out)', w: ['LIFO', 'Random access', 'Priority'], e: 'First element enqueued is first dequeued.' },
        { q: 'Circular queue solves which problem?', c: 'Wasted space in linear queue', w: ['Sorting', 'Searching', 'Balancing'], e: 'Rear wraps around to use freed front space.' },
        { q: 'Deque allows operations at?', c: 'Both front and rear', w: ['Only front', 'Only rear', 'Middle only'], e: 'Double-ended queue supports both ends.' },
        { q: 'Priority queue is typically implemented using?', c: 'Heap (binary heap)', w: ['Linked list', 'Array', 'Stack'], e: 'Heap gives O(log n) insert and extract-min/max.' },
        { q: 'BFS graph traversal uses?', c: 'Queue', w: ['Stack', 'Priority queue', 'Deque'], e: 'BFS explores level by level using FIFO.' },
        { q: 'Time complexity of enqueue in circular queue?', c: 'O(1)', w: ['O(n)', 'O(log n)', 'O(n²)'], e: 'Direct insertion at rear pointer.' },
    ].map(x => ({ ...x, d: R(['Easy', 'Medium']) }));

    // Hashing
    const ha = [
        { q: 'HashMap provides average case lookup of?', c: 'O(1)', w: ['O(n)', 'O(log n)', 'O(n²)'], e: 'Hash function maps key directly to bucket.' },
        { q: 'Collision in hashing means?', c: 'Two keys map to same index', w: ['Key not found', 'Hash table is full', 'Duplicate keys'], e: 'Different keys producing same hash cause collision.' },
        { q: 'Chaining resolves collisions using?', c: 'Linked list at each bucket', w: ['Open addressing', 'Rehashing only', 'Sorting'], e: 'Each bucket holds a chain of entries.' },
        { q: 'Open addressing resolves collisions by?', c: 'Probing for next empty slot', w: ['Using linked lists', 'Creating new table', 'Ignoring collision'], e: 'Linear/quadratic probing finds alternative slots.' },
        { q: 'Rehashing is triggered when?', c: 'Load factor exceeds threshold', w: ['Table is empty', 'First insertion', 'After deletion only'], e: 'High load factor degrades performance, so table resizes.' },
        { q: 'HashSet stores?', c: 'Unique elements only', w: ['Key-value pairs', 'Duplicates allowed', 'Sorted elements'], e: 'HashSet rejects duplicate entries.' },
        { q: 'What is a good hash function property?', c: 'Uniform distribution of keys', w: ['Always returns 0', 'Returns key itself', 'Ignores input'], e: 'Uniform distribution minimizes collisions.' },
    ].map(x => ({ ...x, d: R(['Easy', 'Medium']) }));

    // Trees
    const tr = [
        { q: 'Inorder traversal of BST gives?', c: 'Sorted ascending order', w: ['Descending order', 'Level order', 'Random order'], e: 'Left-Root-Right visits BST nodes in sorted order.' },
        { q: 'Height of a balanced BST with n nodes?', c: 'O(log n)', w: ['O(n)', 'O(n²)', 'O(1)'], e: 'Balanced tree has logarithmic height.' },
        { q: 'LCA (Lowest Common Ancestor) in BST takes?', c: 'O(h) where h is height', w: ['O(n²)', 'O(n log n)', 'O(1)'], e: 'Follow BST property to find split point.' },
        { q: 'AVL tree maintains balance by?', c: 'Rotations after insert/delete', w: ['Rebuilding tree', 'Sorting nodes', 'Using extra array'], e: 'Single/double rotations restore balance factor.' },
        { q: 'Binary tree maximum path sum problem uses?', c: 'Recursion with global max tracking', w: ['BFS', 'Sorting', 'Greedy'], e: 'At each node, compute max path through it.' },
        { q: 'Preorder traversal visits?', c: 'Root, Left, Right', w: ['Left, Root, Right', 'Left, Right, Root', 'Right, Root, Left'], e: 'Pre = root first, then children.' },
        { q: 'Postorder traversal visits?', c: 'Left, Right, Root', w: ['Root, Left, Right', 'Left, Root, Right', 'Right, Left, Root'], e: 'Post = root last, after children.' },
        { q: 'Level order traversal uses?', c: 'Queue (BFS)', w: ['Stack', 'Recursion only', 'Sorting'], e: 'Process nodes level by level using queue.' },
        { q: 'Diameter of binary tree is?', c: 'Longest path between any two nodes', w: ['Height of tree', 'Number of leaves', 'Root to deepest node'], e: 'Diameter = max of left height + right height at each node.' },
        { q: 'Segment tree is used for?', c: 'Range queries and updates efficiently', w: ['Sorting', 'Graph traversal', 'String matching'], e: 'Segment tree handles range sum/min/max in O(log n).' },
        { q: 'Heap property: in a max-heap, parent is?', c: 'Greater than or equal to children', w: ['Less than children', 'Equal to children', 'Random'], e: 'Max-heap: parent >= children at every node.' },
        { q: 'BST search time complexity (balanced)?', c: 'O(log n)', w: ['O(n)', 'O(1)', 'O(n²)'], e: 'Balanced BST halves search space each step.' },
    ].map(x => ({ ...x, d: R(['Easy', 'Medium', 'Hard']) }));

    // Graphs
    const gr = [
        { q: 'BFS uses which data structure?', c: 'Queue', w: ['Stack', 'Heap', 'Array'], e: 'BFS explores neighbors level-by-level using FIFO.' },
        { q: 'DFS uses which data structure?', c: 'Stack (or recursion)', w: ['Queue', 'Heap', 'Array'], e: 'DFS goes deep first using LIFO.' },
        { q: 'Dijkstra\'s algorithm fails with?', c: 'Negative edge weights', w: ['Positive weights', 'Undirected graphs', 'Dense graphs'], e: 'Greedy assumption breaks with negative edges.' },
        { q: 'Topological sort applies to?', c: 'Directed Acyclic Graphs (DAG)', w: ['Undirected graphs', 'Cyclic graphs', 'Weighted graphs only'], e: 'Topological ordering requires no cycles.' },
        { q: 'Union-Find is used in?', c: 'Kruskal\'s MST and cycle detection', w: ['Shortest path', 'BFS', 'String matching'], e: 'Union-Find efficiently tracks connected components.' },
        { q: 'Bellman-Ford handles?', c: 'Negative edge weights', w: ['Only positive weights', 'Only undirected', 'Only trees'], e: 'Relaxes all edges V-1 times.' },
        { q: 'Kruskal\'s algorithm is?', c: 'Greedy MST using sorted edges', w: ['Dynamic programming', 'BFS-based', 'Divide and conquer'], e: 'Sort edges, add if no cycle (Union-Find).' },
        { q: 'Prim\'s algorithm starts from?', c: 'Any single vertex', w: ['All vertices', 'Heaviest edge', 'Leaf node'], e: 'Prim grows MST from one vertex using min-edge.' },
        { q: 'Floyd-Warshall finds?', c: 'All-pairs shortest paths', w: ['Single-source shortest path', 'MST', 'Topological order'], e: 'DP approach considers all intermediate vertices.' },
        { q: 'Cycle detection in undirected graph uses?', c: 'DFS with parent tracking or Union-Find', w: ['BFS only', 'Dijkstra', 'Topological sort'], e: 'Back edge to non-parent indicates cycle.' },
        { q: 'Graph adjacency matrix space complexity?', c: 'O(V²)', w: ['O(V+E)', 'O(V)', 'O(E)'], e: 'V×V matrix stores all possible edges.' },
        { q: 'Adjacency list space complexity?', c: 'O(V+E)', w: ['O(V²)', 'O(E²)', 'O(V)'], e: 'List stores only existing edges.' },
    ].map(x => ({ ...x, d: R(['Easy', 'Medium', 'Hard']) }));

    // Dynamic Programming
    const dp = [
        { q: 'Memoization is?', c: 'Top-down DP with caching', w: ['Bottom-up approach', 'Greedy', 'Brute force'], e: 'Store results of subproblems to avoid recomputation.' },
        { q: 'Tabulation is?', c: 'Bottom-up DP using table', w: ['Top-down approach', 'Recursion', 'Backtracking'], e: 'Fill table iteratively from base cases.' },
        { q: '0/1 Knapsack time complexity?', c: 'O(n*W)', w: ['O(n²)', 'O(2^n)', 'O(n log n)'], e: 'DP table of items × capacity.' },
        { q: 'LIS (Longest Increasing Subsequence) optimal complexity?', c: 'O(n log n)', w: ['O(n²)', 'O(n)', 'O(2^n)'], e: 'Binary search + patience sorting approach.' },
        { q: 'LCS (Longest Common Subsequence) of two strings?', c: 'O(m*n)', w: ['O(m+n)', 'O(m²)', 'O(2^n)'], e: '2D DP table comparing characters.' },
        { q: 'Coin Change problem (min coins) is solved by?', c: 'DP (unbounded knapsack variant)', w: ['Greedy always', 'Sorting', 'BFS only'], e: 'Try each coin, take minimum.' },
        { q: 'Matrix Chain Multiplication optimizes?', c: 'Order of matrix multiplications', w: ['Matrix values', 'Matrix dimensions', 'Matrix sorting'], e: 'Different parenthesizations give different costs.' },
        { q: 'DP on grids typically moves?', c: 'Right and down', w: ['All 8 directions', 'Up only', 'Diagonally only'], e: 'Grid DP usually considers right/down movements.' },
        { q: 'Optimal substructure means?', c: 'Optimal solution contains optimal sub-solutions', w: ['Problem has no solution', 'Only greedy works', 'Random solutions work'], e: 'Key property enabling DP approach.' },
        { q: 'Overlapping subproblems means?', c: 'Same subproblems are solved multiple times', w: ['No subproblems exist', 'Each subproblem is unique', 'Linear scan suffices'], e: 'Caching avoids redundant computation.' },
    ].map(x => ({ ...x, d: R(['Easy', 'Medium', 'Hard']) }));

    // Greedy
    const gy = [
        { q: 'Activity selection problem selects by?', c: 'Earliest finish time', w: ['Latest start', 'Maximum duration', 'Random'], e: 'Greedy: pick activity finishing earliest.' },
        { q: 'Fractional knapsack allows?', c: 'Taking fractions of items', w: ['Only whole items', 'No items', 'Negative weights'], e: 'Sort by value/weight ratio, take fractions.' },
        { q: 'Huffman coding builds?', c: 'Optimal prefix-free binary tree', w: ['Balanced BST', 'Hash table', 'Graph'], e: 'Greedy: merge two lowest-frequency nodes.' },
        { q: 'Job scheduling with deadlines maximizes?', c: 'Total profit', w: ['Number of jobs', 'Total time', 'Minimum cost'], e: 'Schedule highest-profit jobs first within deadlines.' },
        { q: 'Minimum platforms problem uses?', c: 'Sorting arrival/departure times', w: ['Stack', 'Queue', 'Binary search'], e: 'Sort and count overlapping intervals.' },
        { q: 'Greedy algorithms guarantee optimal solution when?', c: 'Greedy choice property and optimal substructure hold', w: ['Always', 'Never', 'Only for sorting'], e: 'Both properties must be proven for correctness.' },
    ].map(x => ({ ...x, d: R(['Easy', 'Medium', 'Hard']) }));

    // Backtracking
    const bt = [
        { q: 'N-Queens problem places N queens such that?', c: 'No two queens attack each other', w: ['All queens are in one row', 'Queens form diagonal', 'Queens are adjacent'], e: 'No two queens share row, column, or diagonal.' },
        { q: 'Sudoku solver uses?', c: 'Backtracking with constraint checking', w: ['Greedy', 'Sorting', 'BFS'], e: 'Try digits 1-9, backtrack if constraint violated.' },
        { q: 'Rat in Maze explores paths using?', c: 'Recursion and backtracking', w: ['BFS only', 'Sorting', 'Dynamic programming'], e: 'Try all directions, backtrack on dead ends.' },
        { q: 'Generating all permutations uses?', c: 'Swap-based backtracking', w: ['Sorting', 'Hashing', 'Queue'], e: 'Swap elements, recurse, then swap back.' },
        { q: 'Combination Sum allows?', c: 'Reusing elements to reach target', w: ['Each element used once', 'Negative numbers', 'Sorting only'], e: 'Include current element again or move to next.' },
        { q: 'Backtracking time complexity is typically?', c: 'Exponential', w: ['O(n)', 'O(n log n)', 'O(n²)'], e: 'Explores all possible configurations.' },
    ].map(x => ({ ...x, d: R(['Easy', 'Medium', 'Hard']) }));

    // Bit Manipulation
    const bm = [
        { q: 'XOR of a number with itself gives?', c: '0', w: ['1', 'The number itself', 'Negative number'], e: 'x ^ x = 0 for any x.' },
        { q: 'XOR of a number with 0 gives?', c: 'The number itself', w: ['0', '1', 'Complement'], e: 'x ^ 0 = x.' },
        { q: 'Check if number is power of 2 using?', c: 'n & (n-1) == 0', w: ['n % 2 == 0', 'n >> 1 == 0', 'n | 1 == n'], e: 'Power of 2 has single set bit; n&(n-1) clears it.' },
        { q: 'Left shift by 1 is equivalent to?', c: 'Multiply by 2', w: ['Divide by 2', 'Add 1', 'Subtract 1'], e: 'Shifting bits left doubles the value.' },
        { q: 'Right shift by 1 is equivalent to?', c: 'Divide by 2 (integer division)', w: ['Multiply by 2', 'Add 2', 'XOR with 1'], e: 'Shifting bits right halves the value.' },
        { q: 'Bit masking is used for?', c: 'Extracting or setting specific bits', w: ['Sorting', 'Graph traversal', 'String matching'], e: 'AND/OR masks isolate or set individual bits.' },
    ].map(x => ({ ...x, d: R(['Easy', 'Medium']) }));

    // Advanced
    const ad = [
        { q: 'Trie is best for?', c: 'Prefix-based string operations', w: ['Sorting numbers', 'Graph traversal', 'Matrix operations'], e: 'Trie stores strings character-by-character for prefix search.' },
        { q: 'Disjoint Set Union find uses?', c: 'Path compression and union by rank', w: ['BFS', 'Sorting', 'Hashing'], e: 'Optimizations give nearly O(1) amortized operations.' },
        { q: 'Fenwick tree (BIT) supports?', c: 'Point updates and prefix sum queries', w: ['Graph BFS', 'String matching', 'Sorting'], e: 'Binary Indexed Tree uses bit manipulation for efficiency.' },
        { q: 'Segment tree range query time?', c: 'O(log n)', w: ['O(n)', 'O(1)', 'O(n²)'], e: 'Tree structure allows logarithmic range operations.' },
    ].map(x => ({ ...x, d: R(['Medium', 'Hard']) }));

    const topicsMap = [
        { name: 'Complexity Analysis', data: ca },
        { name: 'Arrays', data: ar },
        { name: 'Strings', data: st },
        { name: 'Linked List', data: ll },
        { name: 'Stack', data: sk },
        { name: 'Queue', data: qu },
        { name: 'Hashing', data: ha },
        { name: 'Trees', data: tr },
        { name: 'Graph', data: gr },
        { name: 'Dynamic Programming', data: dp },
        { name: 'Greedy', data: gy },
        { name: 'Backtracking', data: bt },
        { name: 'Bit Manipulation', data: bm },
        { name: 'Advanced Topics', data: ad }
    ];

    topicsMap.forEach(item => {
        item.data.forEach(it => {
            all.push(Q(S, item.name, it.d || 'Easy', it.q, it.c, it.w, it.e));
        });
    });
    return all;
}

module.exports = { genDSA, Q, shuffle, R, save, pad };
