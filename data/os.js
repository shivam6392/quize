window.quizData = window.quizData || {};
window.quizData.os = [
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Process is?",
    "options": [
      "Static code (commonly used)",
      "Stored file in practice",
      "Program in execution",
      "Hardware component"
    ],
    "answer": 2,
    "explanation": "Process = program + execution context."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thread vs Process?",
    "options": [
      "Thread is heavier in typical implementations",
      "Thread shares process memory; process has own address space",
      "Process shares memory in typical implementations",
      "Same thing in typical implementations"
    ],
    "answer": 1,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "PCB contains?",
    "options": [
      "Process state, PID, registers, memory info",
      "Only memory in typical implementations",
      "Only CPU info (standard definition)",
      "Only PID in typical implementations"
    ],
    "answer": 0,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Context switching involves?",
    "options": [
      "Creating new memory (standard definition)",
      "Deleting process in typical implementations",
      "Formatting disk in typical implementations",
      "Saving current process state and loading another"
    ],
    "answer": 3,
    "explanation": "OS saves/restores PCB during context switch."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is?",
    "options": [
      "First Come First Served — non-preemptive",
      "Preemptive under normal conditions",
      "Random in typical implementations",
      "Priority-based (primary approach)"
    ],
    "answer": 0,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SJF scheduling selects?",
    "options": [
      "Process with shortest burst time",
      "Random (default behavior)",
      "Highest priority in practice",
      "Longest burst in standard usage"
    ],
    "answer": 0,
    "explanation": "Minimizes average waiting time (optimal for non-preemptive)."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Round Robin uses?",
    "options": [
      "Burst time (typical scenario)",
      "Priority only (general case)",
      "Time quantum for preemption",
      "No preemption (primary approach)"
    ],
    "answer": 2,
    "explanation": "Each process gets equal CPU time slice."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Deadlock always in typical implementations",
      "Starvation of low-priority processes",
      "Too fast execution based on convention",
      "Memory overflow (widely accepted)"
    ],
    "answer": 1,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Semaphore is?",
    "options": [
      "Integer variable for process synchronization",
      "Memory address under normal conditions",
      "Process ID in typical implementations",
      "File descriptor in typical implementations"
    ],
    "answer": 0,
    "explanation": "wait() decrements; signal() increments."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Mutex is?",
    "options": [
      "Binary semaphore for mutual exclusion",
      "Counting semaphore (widely accepted)",
      "File lock under normal conditions",
      "Memory segment (widely accepted)"
    ],
    "answer": 0,
    "explanation": "Only owner thread can release mutex."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Deadlock conditions (all four)?",
    "options": [
      "Only hold and wait in typical implementations",
      "Only mutual exclusion in typical implementations",
      "Mutual exclusion, Hold & wait, No preemption, Circular wait",
      "Only circular wait in typical implementations"
    ],
    "answer": 2,
    "explanation": "All four Coffman conditions must hold simultaneously."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Banker's algorithm is for?",
    "options": [
      "Deadlock avoidance",
      "Deadlock prevention",
      "Deadlock recovery",
      "Deadlock detection"
    ],
    "answer": 0,
    "explanation": "Checks safe state before granting resources."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Logical memory into fixed-size pages",
      "Files into blocks (primary approach)",
      "Physical memory into segments in most cases",
      "CPU into cores in standard usage"
    ],
    "answer": 0,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Segmentation divides memory by?",
    "options": [
      "Equal partitions under normal conditions",
      "Random blocks (primary approach)",
      "Logical segments (code, data, stack)",
      "Fixed-size pages (commonly used)"
    ],
    "answer": 2,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Virtual memory allows?",
    "options": [
      "Better graphics in typical implementations",
      "More RAM in typical implementations",
      "Faster CPU in typical implementations",
      "Execution of processes larger than physical memory"
    ],
    "answer": 3,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Disk is full in typical implementations",
      "CPU is idle in typical implementations",
      "Memory is empty under normal conditions",
      "Excessive page faults slow system drastically"
    ],
    "answer": 3,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "First loaded page in practice",
      "Random page by design",
      "Most recently used by design",
      "Least Recently Used page"
    ],
    "answer": 3,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FIFO page replacement?",
    "options": [
      "Newest page (standard definition)",
      "Least used page based on convention",
      "Most used page (standard definition)",
      "Evicts the oldest page in memory"
    ],
    "answer": 3,
    "explanation": "Simple but can suffer Belady's anomaly."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Evicts page not used for longest future time",
      "Oldest page in typical implementations",
      "Most used page under normal conditions",
      "Random page in typical implementations"
    ],
    "answer": 0,
    "explanation": "Theoretical best; requires future knowledge."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "TLB (Translation Lookaside Buffer) is?",
    "options": [
      "CPU register in most cases",
      "Main memory under normal conditions",
      "Disk cache (default behavior)",
      "Cache for page table entries"
    ],
    "answer": 3,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "File allocation methods include?",
    "options": [
      "Only indexed in standard usage",
      "Only contiguous (default behavior)",
      "Contiguous, Linked, Indexed",
      "Only linked based on convention"
    ],
    "answer": 2,
    "explanation": "Each has trade-offs in speed and fragmentation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "File content only (default behavior)",
      "File metadata (size, permissions, pointers)",
      "Network addresses in typical implementations",
      "User passwords under normal conditions"
    ],
    "answer": 1,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Disk scheduling SCAN (elevator)?",
    "options": [
      "Random access (widely accepted)",
      "Always starts from 0 as per specification",
      "Moves in one direction then reverses",
      "Shortest seek first as per specification"
    ],
    "answer": 2,
    "explanation": "Like an elevator, services requests in one direction."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Reverse order in practice",
      "FIFO in typical implementations",
      "Random order in practice",
      "Shortest Seek Time First"
    ],
    "answer": 3,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "System call is?",
    "options": [
      "Software bug in typical implementations",
      "Network protocol (standard definition)",
      "Hardware interrupt (typical scenario)",
      "Interface between user program and OS kernel"
    ],
    "answer": 3,
    "explanation": "Programs request OS services via system calls."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "fork() system call creates?",
    "options": [
      "New device (general case)",
      "New file in practice",
      "New thread (general case)",
      "A new child process"
    ],
    "answer": 3,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "File I/O only (default behavior)",
      "Semaphores or mutex with bounded buffer",
      "Sorting in typical implementations",
      "CPU scheduling in standard usage"
    ],
    "answer": 1,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Dining Philosophers problem illustrates?",
    "options": [
      "Deadlock and synchronization challenges",
      "File systems in typical implementations",
      "Sorting efficiency in most cases",
      "Memory allocation (standard definition)"
    ],
    "answer": 0,
    "explanation": "Five philosophers, five forks, potential circular wait."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Readers-Writers problem addresses?",
    "options": [
      "CPU scheduling as per specification",
      "Concurrent access to shared data",
      "File compression (standard definition)",
      "Memory allocation (default behavior)"
    ],
    "answer": 1,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "No allocation (general case)",
      "Stack memory in practice",
      "Variable-size allocation in practice",
      "Fixed-size allocation (paging)"
    ],
    "answer": 3,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Cache memory based on convention",
      "CPU registers in typical implementations",
      "Variable-size allocation (segmentation)",
      "Fixed-size allocation (primary approach)"
    ],
    "answer": 2,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Demand paging loads pages?",
    "options": [
      "All at program start as per specification",
      "In sorted order based on convention",
      "Only when they are accessed (on demand)",
      "Randomly in typical implementations"
    ],
    "answer": 2,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Set of pages a process is currently using",
      "All system pages (default behavior)",
      "Disk blocks in typical implementations",
      "CPU instructions (typical scenario)"
    ],
    "answer": 0,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Belady's Anomaly?",
    "options": [
      "More frames can cause more page faults in FIFO",
      "LRU anomaly in typical implementations",
      "Optimal anomaly in typical implementations",
      "Fewer frames always worse in most cases"
    ],
    "answer": 0,
    "explanation": "Counter-intuitive: more memory can degrade FIFO performance."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Multithreading model: many-to-one?",
    "options": [
      "One-to-one in typical implementations",
      "Many user threads map to one kernel thread",
      "One-to-many under normal conditions",
      "Many-to-many under normal conditions"
    ],
    "answer": 1,
    "explanation": "Efficient but one block stops all."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Multithreading model: one-to-one?",
    "options": [
      "Many-to-many in typical implementations",
      "Many-to-one in typical implementations",
      "None in typical implementations",
      "Each user thread maps to one kernel thread"
    ],
    "answer": 3,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Starvation vs Deadlock?",
    "options": [
      "Same thing in typical implementations",
      "Starvation is worse in typical implementations",
      "Starvation: indefinite wait; Deadlock: permanent block",
      "Deadlock is temporary in typical implementations"
    ],
    "answer": 2,
    "explanation": "Starvation can be resolved; deadlock requires intervention."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "Disk management tool in typical implementations",
      "High-level synchronization construct with mutual exclusion",
      "Network monitor in typical implementations",
      "Hardware device in typical implementations"
    ],
    "answer": 1,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Spooling is?",
    "options": [
      "Memory management (standard definition)",
      "Network protocol based on convention",
      "CPU scheduling (standard definition)",
      "Simultaneous Peripheral Operation On-Line"
    ],
    "answer": 3,
    "explanation": "Buffers data for slow devices like printers."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 9ms, P2 = 13ms, and P3 = 8ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.33 ms",
      "7.00 ms",
      "10.00 ms",
      "7.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 9, P2 at 22, P3 at 30. Avg Turnaround = (9 + 22 + 30) / 3 = 20.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 39ms, P2 = 17ms, and P3 = 40ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "32.00 ms",
      "63.67 ms",
      "18.67 ms",
      "19.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 39, P2 at 56, P3 at 96. Avg Turnaround = (39 + 56 + 96) / 3 = 63.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 1, 3, 2, 1, 2, 4, 6]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "5 page faults",
      "7 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 3➔1➔3➔2➔1➔2➔4➔6. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 34ms, P2 = 36ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "59.67 ms",
      "25.00 ms",
      "13.67 ms",
      "23.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 34, P2 at 70, P3 at 75. Avg Turnaround = (34 + 70 + 75) / 3 = 59.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 7ms, P2 = 6ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "4.33 ms",
      "6.00 ms",
      "12.67 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 7, P2 at 13, P3 at 18. Avg Turnaround = (7 + 13 + 18) / 3 = 12.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 234 KB memory. Block chunks available are [174, 264, 354, 219] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "264 KB partition",
      "219 KB partition",
      "174 KB partition",
      "354 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 234 KB), which selects 264 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 4, 4, 7, 2, 5, 5, 1]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔4➔4➔7➔2➔5➔5➔1. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 130 KB memory. Block chunks available are [70, 160, 250, 115] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "160 KB partition",
      "250 KB partition",
      "70 KB partition",
      "115 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 130 KB), which selects 160 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 15ms, P2 = 19ms, and P3 = 37ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "18.67 ms",
      "23.67 ms",
      "11.33 ms",
      "40.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 15, P2 at 34, P3 at 71. Avg Turnaround = (15 + 34 + 71) / 3 = 40.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 7, 7, 6, 5, 6, 6, 1]?",
    "options": [
      "3 page faults",
      "8 page faults",
      "4 page faults",
      "6 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 1➔7➔7➔6➔5➔6➔6➔1. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 41ms, P2 = 11ms, and P3 = 42ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "62.33 ms",
      "17.67 ms",
      "17.33 ms",
      "31.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 41, P2 at 52, P3 at 94. Avg Turnaround = (41 + 52 + 94) / 3 = 62.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 303 KB memory. Block chunks available are [243, 333, 423, 288] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "423 KB partition",
      "288 KB partition",
      "243 KB partition",
      "333 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 303 KB), which selects 333 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 3, 2, 3, 2, 6, 5, 4]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔3➔2➔3➔2➔6➔5➔4. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 539 KB memory. Block chunks available are [479, 569, 659, 524] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "659 KB partition",
      "569 KB partition",
      "479 KB partition",
      "524 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 539 KB), which selects 569 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 19ms, P2 = 44ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.33 ms",
      "21.00 ms",
      "50.00 ms",
      "22.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 19, P2 at 63, P3 at 68. Avg Turnaround = (19 + 63 + 68) / 3 = 50.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 20ms, P2 = 6ms, and P3 = 32ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.33 ms",
      "8.67 ms",
      "34.67 ms",
      "12.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 20, P2 at 26, P3 at 58. Avg Turnaround = (20 + 26 + 58) / 3 = 34.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 42ms, P2 = 14ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "6.33 ms",
      "20.33 ms",
      "53.00 ms",
      "18.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 42, P2 at 56, P3 at 61. Avg Turnaround = (42 + 56 + 61) / 3 = 53.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 21ms, P2 = 42ms, and P3 = 30ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "31.00 ms",
      "24.00 ms",
      "59.00 ms",
      "21.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 21, P2 at 63, P3 at 93. Avg Turnaround = (21 + 63 + 93) / 3 = 59.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 4, 6, 4, 4, 1, 6, 6]?",
    "options": [
      "5 page faults",
      "3 page faults",
      "8 page faults",
      "2 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 1➔4➔6➔4➔4➔1➔6➔6. Cache slots = 4. Total page fault hits = 3 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 572 KB memory. Block chunks available are [512, 602, 692, 557] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "692 KB partition",
      "602 KB partition",
      "512 KB partition",
      "557 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 572 KB), which selects 602 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 43ms, P2 = 37ms, and P3 = 39ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.33 ms",
      "39.67 ms",
      "80.67 ms",
      "26.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 43, P2 at 80, P3 at 119. Avg Turnaround = (43 + 80 + 119) / 3 = 80.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 7, 4, 5, 2, 5, 4, 3]?",
    "options": [
      "7 page faults",
      "4 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔7➔4➔5➔2➔5➔4➔3. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 491 KB memory. Block chunks available are [431, 521, 611, 476] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "431 KB partition",
      "521 KB partition",
      "476 KB partition",
      "611 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 491 KB), which selects 521 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 4, 3, 3, 3, 5, 7, 5]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "3 page faults",
      "6 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 3➔4➔3➔3➔3➔5➔7➔5. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 6ms, P2 = 21ms, and P3 = 17ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "12.67 ms",
      "9.00 ms",
      "14.67 ms",
      "25.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 6, P2 at 27, P3 at 44. Avg Turnaround = (6 + 27 + 44) / 3 = 25.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 23ms, P2 = 42ms, and P3 = 31ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "21.67 ms",
      "32.00 ms",
      "24.33 ms",
      "61.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 23, P2 at 65, P3 at 96. Avg Turnaround = (23 + 65 + 96) / 3 = 61.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 548 KB memory. Block chunks available are [488, 578, 668, 533] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "488 KB partition",
      "578 KB partition",
      "668 KB partition",
      "533 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 548 KB), which selects 578 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 21ms, P2 = 41ms, and P3 = 37ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "26.00 ms",
      "20.67 ms",
      "33.00 ms",
      "60.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 21, P2 at 62, P3 at 99. Avg Turnaround = (21 + 62 + 99) / 3 = 60.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 28ms, P2 = 33ms, and P3 = 11ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "24.00 ms",
      "53.67 ms",
      "14.67 ms",
      "20.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 28, P2 at 61, P3 at 72. Avg Turnaround = (28 + 61 + 72) / 3 = 53.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 14ms, P2 = 34ms, and P3 = 27ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.33 ms",
      "45.67 ms",
      "25.00 ms",
      "16.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 14, P2 at 48, P3 at 75. Avg Turnaround = (14 + 48 + 75) / 3 = 45.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 2, 7, 2, 3, 1, 4, 4]?",
    "options": [
      "8 page faults",
      "8 page faults",
      "6 page faults",
      "5 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 6➔2➔7➔2➔3➔1➔4➔4. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 495 KB memory. Block chunks available are [435, 525, 615, 480] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "480 KB partition",
      "525 KB partition",
      "435 KB partition",
      "615 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 495 KB), which selects 525 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 427 KB memory. Block chunks available are [367, 457, 547, 412] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "457 KB partition",
      "367 KB partition",
      "547 KB partition",
      "412 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 427 KB), which selects 457 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 192 KB memory. Block chunks available are [132, 222, 312, 177] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "132 KB partition",
      "177 KB partition",
      "312 KB partition",
      "222 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 192 KB), which selects 222 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 490 KB memory. Block chunks available are [430, 520, 610, 475] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "520 KB partition",
      "475 KB partition",
      "610 KB partition",
      "430 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 490 KB), which selects 520 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 300 KB memory. Block chunks available are [240, 330, 420, 285] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "285 KB partition",
      "420 KB partition",
      "240 KB partition",
      "330 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 300 KB), which selects 330 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 530 KB memory. Block chunks available are [470, 560, 650, 515] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "470 KB partition",
      "515 KB partition",
      "560 KB partition",
      "650 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 530 KB), which selects 560 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 528 KB memory. Block chunks available are [468, 558, 648, 513] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "468 KB partition",
      "558 KB partition",
      "513 KB partition",
      "648 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 528 KB), which selects 558 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 8ms, P2 = 19ms, and P3 = 37ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "21.33 ms",
      "33.00 ms",
      "9.00 ms",
      "18.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 8, P2 at 27, P3 at 64. Avg Turnaround = (8 + 27 + 64) / 3 = 33.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 33ms, P2 = 24ms, and P3 = 19ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.00 ms",
      "14.33 ms",
      "55.33 ms",
      "25.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 33, P2 at 57, P3 at 76. Avg Turnaround = (33 + 57 + 76) / 3 = 55.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 24ms, P2 = 17ms, and P3 = 23ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "13.67 ms",
      "43.00 ms",
      "21.33 ms",
      "13.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 24, P2 at 41, P3 at 64. Avg Turnaround = (24 + 41 + 64) / 3 = 43.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 7ms, and P3 = 24ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.00 ms",
      "50.67 ms",
      "10.33 ms",
      "15.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 45, P3 at 69. Avg Turnaround = (38 + 45 + 69) / 3 = 50.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 17ms, P2 = 30ms, and P3 = 28ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.33 ms",
      "15.67 ms",
      "46.33 ms",
      "25.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 17, P2 at 47, P3 at 75. Avg Turnaround = (17 + 47 + 75) / 3 = 46.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 27ms, P2 = 10ms, and P3 = 44ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "18.00 ms",
      "27.00 ms",
      "12.33 ms",
      "48.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 27, P2 at 37, P3 at 81. Avg Turnaround = (27 + 37 + 81) / 3 = 48.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 3, 6, 7, 5, 1, 4, 7]?",
    "options": [
      "8 page faults",
      "8 page faults",
      "5 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔3➔6➔7➔5➔1➔4➔7. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 3, 4, 6, 3, 1, 4, 4]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 5➔3➔4➔6➔3➔1➔4➔4. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 1, 5, 6, 1, 2, 3, 4]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 5➔1➔5➔6➔1➔2➔3➔4. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 29ms, P2 = 14ms, and P3 = 8ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.33 ms",
      "17.00 ms",
      "7.33 ms",
      "41.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 29, P2 at 43, P3 at 51. Avg Turnaround = (29 + 43 + 51) / 3 = 41.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 36ms, P2 = 37ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "24.33 ms",
      "37.00 ms",
      "73.33 ms",
      "25.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 36, P2 at 73, P3 at 111. Avg Turnaround = (36 + 73 + 111) / 3 = 73.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 196 KB memory. Block chunks available are [136, 226, 316, 181] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "316 KB partition",
      "136 KB partition",
      "226 KB partition",
      "181 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 196 KB), which selects 226 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 5ms, P2 = 20ms, and P3 = 41ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "32.00 ms",
      "22.00 ms",
      "8.33 ms",
      "20.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 5, P2 at 25, P3 at 66. Avg Turnaround = (5 + 25 + 66) / 3 = 32.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 1, 4, 5, 7, 3, 5, 3]?",
    "options": [
      "4 page faults",
      "7 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 4➔1➔4➔5➔7➔3➔5➔3. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 17ms, P2 = 35ms, and P3 = 43ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "31.67 ms",
      "26.00 ms",
      "54.67 ms",
      "17.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 17, P2 at 52, P3 at 95. Avg Turnaround = (17 + 52 + 95) / 3 = 54.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 25ms, and P3 = 24ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.00 ms",
      "16.33 ms",
      "50.67 ms",
      "17.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 51, P3 at 75. Avg Turnaround = (26 + 51 + 75) / 3 = 50.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 375 KB memory. Block chunks available are [315, 405, 495, 360] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "360 KB partition",
      "495 KB partition",
      "315 KB partition",
      "405 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 375 KB), which selects 405 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 117 KB memory. Block chunks available are [57, 147, 237, 102] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "102 KB partition",
      "57 KB partition",
      "147 KB partition",
      "237 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 117 KB), which selects 147 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 5, 1, 2, 5, 4, 5, 6]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 6➔5➔1➔2➔5➔4➔5➔6. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 14ms, P2 = 24ms, and P3 = 10ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "11.33 ms",
      "16.00 ms",
      "33.33 ms",
      "12.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 14, P2 at 38, P3 at 48. Avg Turnaround = (14 + 38 + 48) / 3 = 33.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 351 KB memory. Block chunks available are [291, 381, 471, 336] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "471 KB partition",
      "291 KB partition",
      "336 KB partition",
      "381 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 351 KB), which selects 381 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [1, 3, 2, 6, 5, 3, 4, 4]?",
    "options": [
      "6 page faults",
      "9 page faults",
      "8 page faults",
      "7 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 1➔3➔2➔6➔5➔3➔4➔4. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 31ms, P2 = 39ms, and P3 = 9ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "60.00 ms",
      "16.00 ms",
      "26.33 ms",
      "23.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 31, P2 at 70, P3 at 79. Avg Turnaround = (31 + 70 + 79) / 3 = 60.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 562 KB memory. Block chunks available are [502, 592, 682, 547] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "502 KB partition",
      "547 KB partition",
      "592 KB partition",
      "682 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 562 KB), which selects 592 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [2, 3, 4, 4, 5, 2, 1, 7]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 2➔3➔4➔4➔5➔2➔1➔7. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 109 KB memory. Block chunks available are [49, 139, 229, 94] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "229 KB partition",
      "139 KB partition",
      "49 KB partition",
      "94 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 109 KB), which selects 139 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 29ms, P2 = 42ms, and P3 = 37ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.67 ms",
      "26.33 ms",
      "69.33 ms",
      "36.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 29, P2 at 71, P3 at 108. Avg Turnaround = (29 + 71 + 108) / 3 = 69.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 2, 6, 1, 4, 2, 3, 5]?",
    "options": [
      "10 page faults",
      "8 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔2➔6➔1➔4➔2➔3➔5. Cache slots = 3. Total page fault hits = 8 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 126 KB memory. Block chunks available are [66, 156, 246, 111] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "66 KB partition",
      "246 KB partition",
      "156 KB partition",
      "111 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 126 KB), which selects 156 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 41ms, P2 = 37ms, and P3 = 33ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "26.00 ms",
      "23.33 ms",
      "37.00 ms",
      "76.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 41, P2 at 78, P3 at 111. Avg Turnaround = (41 + 78 + 111) / 3 = 76.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 42ms, and P3 = 23ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "73.67 ms",
      "34.33 ms",
      "21.67 ms",
      "26.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 80, P3 at 103. Avg Turnaround = (38 + 80 + 103) / 3 = 73.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 43ms, P2 = 12ms, and P3 = 12ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "18.33 ms",
      "8.00 ms",
      "22.33 ms",
      "55.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 43, P2 at 55, P3 at 67. Avg Turnaround = (43 + 55 + 67) / 3 = 55.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 2, 4, 4, 1, 3, 7, 2]?",
    "options": [
      "6 page faults",
      "7 page faults",
      "9 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 6➔2➔4➔4➔1➔3➔7➔2. Cache slots = 4. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 5, 6, 2, 1, 4, 3, 7]?",
    "options": [
      "9 page faults",
      "7 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 5➔5➔6➔2➔1➔4➔3➔7. Cache slots = 4. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 1, 1, 6, 1, 5, 1, 2]?",
    "options": [
      "4 page faults",
      "3 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔1➔1➔6➔1➔5➔1➔2. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [2, 6, 7, 5, 4, 6, 1, 1]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔6➔7➔5➔4➔6➔1➔1. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 295 KB memory. Block chunks available are [235, 325, 415, 280] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "415 KB partition",
      "280 KB partition",
      "235 KB partition",
      "325 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 295 KB), which selects 325 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 5ms, P2 = 37ms, and P3 = 18ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.00 ms",
      "35.67 ms",
      "20.00 ms",
      "18.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 5, P2 at 42, P3 at 60. Avg Turnaround = (5 + 42 + 60) / 3 = 35.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 116 KB memory. Block chunks available are [56, 146, 236, 101] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "236 KB partition",
      "146 KB partition",
      "101 KB partition",
      "56 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 116 KB), which selects 146 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 520 KB memory. Block chunks available are [460, 550, 640, 505] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "550 KB partition",
      "505 KB partition",
      "460 KB partition",
      "640 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 520 KB), which selects 550 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 8ms, P2 = 12ms, and P3 = 30ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "26.00 ms",
      "14.00 ms",
      "6.67 ms",
      "16.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 8, P2 at 20, P3 at 50. Avg Turnaround = (8 + 20 + 50) / 3 = 26.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 2, 6, 4, 6, 5, 2, 6]?",
    "options": [
      "6 page faults",
      "3 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 4➔2➔6➔4➔6➔5➔2➔6. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 12ms, P2 = 28ms, and P3 = 35ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.00 ms",
      "42.33 ms",
      "21.00 ms",
      "13.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 12, P2 at 40, P3 at 75. Avg Turnaround = (12 + 40 + 75) / 3 = 42.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 360 KB memory. Block chunks available are [300, 390, 480, 345] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "300 KB partition",
      "390 KB partition",
      "345 KB partition",
      "480 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 360 KB), which selects 390 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 1, 3, 7, 2, 2, 1, 5]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 6➔1➔3➔7➔2➔2➔1➔5. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 5, 2, 5, 6, 2, 6, 7]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔5➔2➔5➔6➔2➔6➔7. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 5, 7, 5, 7, 1, 2, 1]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "5 page faults",
      "4 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 3➔5➔7➔5➔7➔1➔2➔1. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 120 KB memory. Block chunks available are [60, 150, 240, 105] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "150 KB partition",
      "240 KB partition",
      "60 KB partition",
      "105 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 120 KB), which selects 150 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 7, 6, 4, 7, 7, 5, 3]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔7➔6➔4➔7➔7➔5➔3. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 42ms, P2 = 38ms, and P3 = 28ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "26.67 ms",
      "76.67 ms",
      "22.00 ms",
      "36.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 42, P2 at 80, P3 at 108. Avg Turnaround = (42 + 80 + 108) / 3 = 76.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 269 KB memory. Block chunks available are [209, 299, 389, 254] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "299 KB partition",
      "254 KB partition",
      "389 KB partition",
      "209 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 269 KB), which selects 299 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 322 KB memory. Block chunks available are [262, 352, 442, 307] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "307 KB partition",
      "262 KB partition",
      "442 KB partition",
      "352 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 322 KB), which selects 352 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 1, 1, 7, 6, 3, 7, 3]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔1➔1➔7➔6➔3➔7➔3. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 20ms, P2 = 34ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "18.00 ms",
      "26.67 ms",
      "51.33 ms",
      "20.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 20, P2 at 54, P3 at 80. Avg Turnaround = (20 + 54 + 80) / 3 = 51.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 411 KB memory. Block chunks available are [351, 441, 531, 396] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "396 KB partition",
      "531 KB partition",
      "441 KB partition",
      "351 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 411 KB), which selects 441 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 23ms, P2 = 19ms, and P3 = 19ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.00 ms",
      "42.00 ms",
      "12.67 ms",
      "20.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 23, P2 at 42, P3 at 61. Avg Turnaround = (23 + 42 + 61) / 3 = 42.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 21ms, and P3 = 33ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.67 ms",
      "63.00 ms",
      "18.00 ms",
      "30.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 59, P3 at 92. Avg Turnaround = (38 + 59 + 92) / 3 = 63.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 39ms, P2 = 22ms, and P3 = 41ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "34.00 ms",
      "21.00 ms",
      "20.33 ms",
      "67.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 39, P2 at 61, P3 at 102. Avg Turnaround = (39 + 61 + 102) / 3 = 67.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 6, 1, 5, 5, 4, 2, 1]?",
    "options": [
      "8 page faults",
      "8 page faults",
      "6 page faults",
      "5 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔6➔1➔5➔5➔4➔2➔1. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 331 KB memory. Block chunks available are [271, 361, 451, 316] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "316 KB partition",
      "361 KB partition",
      "451 KB partition",
      "271 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 331 KB), which selects 361 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 10ms, P2 = 30ms, and P3 = 27ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "13.33 ms",
      "22.33 ms",
      "19.00 ms",
      "39.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 10, P2 at 40, P3 at 67. Avg Turnaround = (10 + 40 + 67) / 3 = 39.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 43ms, P2 = 23ms, and P3 = 27ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "31.00 ms",
      "67.33 ms",
      "22.00 ms",
      "16.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 43, P2 at 66, P3 at 93. Avg Turnaround = (43 + 66 + 93) / 3 = 67.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 6, 2, 6, 7, 7, 2, 4]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "3 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 6➔6➔2➔6➔7➔7➔2➔4. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 5, 7, 2, 2, 6, 2, 4]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔5➔7➔2➔2➔6➔2➔4. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 533 KB memory. Block chunks available are [473, 563, 653, 518] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "473 KB partition",
      "653 KB partition",
      "518 KB partition",
      "563 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 533 KB), which selects 563 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 276 KB memory. Block chunks available are [216, 306, 396, 261] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "216 KB partition",
      "306 KB partition",
      "396 KB partition",
      "261 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 276 KB), which selects 306 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 527 KB memory. Block chunks available are [467, 557, 647, 512] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "557 KB partition",
      "467 KB partition",
      "512 KB partition",
      "647 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 527 KB), which selects 557 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [2, 5, 2, 5, 7, 6, 6, 3]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "5 page faults",
      "7 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔5➔2➔5➔7➔6➔6➔3. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 13ms, P2 = 7ms, and P3 = 29ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.33 ms",
      "27.33 ms",
      "12.00 ms",
      "6.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 13, P2 at 20, P3 at 49. Avg Turnaround = (13 + 20 + 49) / 3 = 27.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 5ms, P2 = 5ms, and P3 = 14ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "8.00 ms",
      "13.00 ms",
      "3.33 ms",
      "6.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 5, P2 at 10, P3 at 24. Avg Turnaround = (5 + 10 + 24) / 3 = 13.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 42ms, P2 = 24ms, and P3 = 42ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "36.00 ms",
      "22.00 ms",
      "22.00 ms",
      "72.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 42, P2 at 66, P3 at 108. Avg Turnaround = (42 + 66 + 108) / 3 = 72.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 19ms, P2 = 27ms, and P3 = 20ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.67 ms",
      "43.67 ms",
      "22.00 ms",
      "15.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 19, P2 at 46, P3 at 66. Avg Turnaround = (19 + 46 + 66) / 3 = 43.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 2, 4, 4, 7, 7, 5, 4]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 6➔2➔4➔4➔7➔7➔5➔4. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 12ms, P2 = 24ms, and P3 = 39ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "21.00 ms",
      "12.00 ms",
      "25.00 ms",
      "41.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 12, P2 at 36, P3 at 75. Avg Turnaround = (12 + 36 + 75) / 3 = 41.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [2, 6, 4, 5, 6, 2, 4, 5]?",
    "options": [
      "3 page faults",
      "6 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔6➔4➔5➔6➔2➔4➔5. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 145 KB memory. Block chunks available are [85, 175, 265, 130] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "175 KB partition",
      "130 KB partition",
      "85 KB partition",
      "265 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 145 KB), which selects 175 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 6ms, P2 = 28ms, and P3 = 15ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.33 ms",
      "29.67 ms",
      "16.33 ms",
      "11.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 6, P2 at 34, P3 at 49. Avg Turnaround = (6 + 34 + 49) / 3 = 29.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 1, 4, 3, 3, 2, 4, 7]?",
    "options": [
      "4 page faults",
      "7 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 3➔1➔4➔3➔3➔2➔4➔7. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 24ms, P2 = 11ms, and P3 = 35ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.33 ms",
      "43.00 ms",
      "15.33 ms",
      "11.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 24, P2 at 35, P3 at 70. Avg Turnaround = (24 + 35 + 70) / 3 = 43.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 4, 6, 2, 7, 4, 5, 2]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 3➔4➔6➔2➔7➔4➔5➔2. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 215 KB memory. Block chunks available are [155, 245, 335, 200] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "245 KB partition",
      "200 KB partition",
      "155 KB partition",
      "335 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 215 KB), which selects 245 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 4, 5, 4, 7, 3, 1, 5]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "9 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔4➔5➔4➔7➔3➔1➔5. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 5, 2, 2, 1, 1, 4, 3]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔5➔2➔2➔1➔1➔4➔3. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 565 KB memory. Block chunks available are [505, 595, 685, 550] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "595 KB partition",
      "685 KB partition",
      "505 KB partition",
      "550 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 565 KB), which selects 595 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 9ms, P2 = 39ms, and P3 = 34ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "46.33 ms",
      "16.00 ms",
      "27.33 ms",
      "24.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 9, P2 at 48, P3 at 82. Avg Turnaround = (9 + 48 + 82) / 3 = 46.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 393 KB memory. Block chunks available are [333, 423, 513, 378] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "333 KB partition",
      "423 KB partition",
      "513 KB partition",
      "378 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 393 KB), which selects 423 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [2, 7, 6, 7, 7, 2, 1, 1]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "3 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 2➔7➔6➔7➔7➔2➔1➔1. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 25ms, P2 = 41ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "54.33 ms",
      "22.00 ms",
      "15.67 ms",
      "24.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 25, P2 at 66, P3 at 72. Avg Turnaround = (25 + 66 + 72) / 3 = 54.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 3, 7, 2, 1, 7, 3, 5]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔3➔7➔2➔1➔7➔3➔5. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 12ms, P2 = 13ms, and P3 = 41ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "22.00 ms",
      "8.33 ms",
      "18.00 ms",
      "34.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 12, P2 at 25, P3 at 66. Avg Turnaround = (12 + 25 + 66) / 3 = 34.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 330 KB memory. Block chunks available are [270, 360, 450, 315] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "360 KB partition",
      "315 KB partition",
      "270 KB partition",
      "450 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 330 KB), which selects 360 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 198 KB memory. Block chunks available are [138, 228, 318, 183] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "228 KB partition",
      "318 KB partition",
      "183 KB partition",
      "138 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 198 KB), which selects 228 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 17ms, P2 = 38ms, and P3 = 31ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.00 ms",
      "18.33 ms",
      "52.67 ms",
      "28.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 17, P2 at 55, P3 at 86. Avg Turnaround = (17 + 55 + 86) / 3 = 52.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 3, 4, 1, 6, 1, 7, 5]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "7 page faults",
      "9 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 5➔3➔4➔1➔6➔1➔7➔5. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 9ms, P2 = 22ms, and P3 = 40ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.67 ms",
      "37.00 ms",
      "23.67 ms",
      "10.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 9, P2 at 31, P3 at 71. Avg Turnaround = (9 + 31 + 71) / 3 = 37.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 4, 3, 4, 6, 5, 2, 5]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 6➔4➔3➔4➔6➔5➔2➔5. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 22ms, P2 = 20ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.67 ms",
      "14.00 ms",
      "8.33 ms",
      "37.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 22, P2 at 42, P3 at 47. Avg Turnaround = (22 + 42 + 47) / 3 = 37.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 31ms, P2 = 13ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.33 ms",
      "48.33 ms",
      "13.00 ms",
      "14.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 31, P2 at 44, P3 at 70. Avg Turnaround = (31 + 44 + 70) / 3 = 48.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 20ms, P2 = 19ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.00 ms",
      "21.67 ms",
      "41.33 ms",
      "13.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 20, P2 at 39, P3 at 65. Avg Turnaround = (20 + 39 + 65) / 3 = 41.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 3, 5, 1, 6, 2, 1, 4]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 3➔3➔5➔1➔6➔2➔1➔4. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 7, 2, 3, 7, 3, 4, 7]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "5 page faults",
      "7 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 6➔7➔2➔3➔7➔3➔4➔7. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 4, 2, 5, 5, 7, 5, 3]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "5 page faults",
      "4 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔4➔2➔5➔5➔7➔5➔3. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 28ms, and P3 = 39ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "31.00 ms",
      "22.33 ms",
      "57.67 ms",
      "18.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 54, P3 at 93. Avg Turnaround = (26 + 54 + 93) / 3 = 57.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 430 KB memory. Block chunks available are [370, 460, 550, 415] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "550 KB partition",
      "415 KB partition",
      "370 KB partition",
      "460 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 430 KB), which selects 460 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 28ms, P2 = 14ms, and P3 = 31ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "47.67 ms",
      "15.00 ms",
      "24.33 ms",
      "14.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 28, P2 at 42, P3 at 73. Avg Turnaround = (28 + 42 + 73) / 3 = 47.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 309 KB memory. Block chunks available are [249, 339, 429, 294] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "429 KB partition",
      "294 KB partition",
      "339 KB partition",
      "249 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 309 KB), which selects 339 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 7, 3, 6, 1, 5, 6, 6]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔7➔3➔6➔1➔5➔6➔6. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 540 KB memory. Block chunks available are [480, 570, 660, 525] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "480 KB partition",
      "570 KB partition",
      "525 KB partition",
      "660 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 540 KB), which selects 570 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 22ms, P2 = 36ms, and P3 = 34ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "30.67 ms",
      "23.33 ms",
      "57.33 ms",
      "19.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 22, P2 at 58, P3 at 92. Avg Turnaround = (22 + 58 + 92) / 3 = 57.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 455 KB memory. Block chunks available are [395, 485, 575, 440] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "575 KB partition",
      "395 KB partition",
      "440 KB partition",
      "485 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 455 KB), which selects 485 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 2, 5, 2, 4, 7, 7, 7]?",
    "options": [
      "4 page faults",
      "7 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 6➔2➔5➔2➔4➔7➔7➔7. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 521 KB memory. Block chunks available are [461, 551, 641, 506] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "641 KB partition",
      "461 KB partition",
      "506 KB partition",
      "551 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 521 KB), which selects 551 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [1, 5, 7, 7, 4, 1, 3, 4]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 1➔5➔7➔7➔4➔1➔3➔4. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 564 KB memory. Block chunks available are [504, 594, 684, 549] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "549 KB partition",
      "504 KB partition",
      "684 KB partition",
      "594 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 564 KB), which selects 594 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 35ms, P2 = 17ms, and P3 = 31ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "56.67 ms",
      "17.33 ms",
      "16.00 ms",
      "27.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 35, P2 at 52, P3 at 83. Avg Turnaround = (35 + 52 + 83) / 3 = 56.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 32ms, P2 = 11ms, and P3 = 18ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "9.67 ms",
      "45.33 ms",
      "20.33 ms",
      "14.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 32, P2 at 43, P3 at 61. Avg Turnaround = (32 + 43 + 61) / 3 = 45.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 1, 4, 5, 1, 1, 3, 6]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 7➔1➔4➔5➔1➔1➔3➔6. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 39ms, P2 = 36ms, and P3 = 8ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "27.67 ms",
      "14.67 ms",
      "25.00 ms",
      "65.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 39, P2 at 75, P3 at 83. Avg Turnaround = (39 + 75 + 83) / 3 = 65.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 4, 4, 2, 6, 2, 2, 4]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "6 page faults",
      "3 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔4➔4➔2➔6➔2➔2➔4. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 3, 2, 4, 4, 6, 5, 2]?",
    "options": [
      "8 page faults",
      "9 page faults",
      "6 page faults",
      "7 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔3➔2➔4➔4➔6➔5➔2. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 2, 2, 1, 3, 3, 5, 5]?",
    "options": [
      "6 page faults",
      "4 page faults",
      "3 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 1➔2➔2➔1➔3➔3➔5➔5. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 32ms, P2 = 32ms, and P3 = 14ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.33 ms",
      "58.00 ms",
      "21.33 ms",
      "26.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 32, P2 at 64, P3 at 78. Avg Turnaround = (32 + 64 + 78) / 3 = 58.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 591 KB memory. Block chunks available are [531, 621, 711, 576] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "621 KB partition",
      "711 KB partition",
      "576 KB partition",
      "531 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 591 KB), which selects 621 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 12ms, and P3 = 16ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "12.67 ms",
      "39.33 ms",
      "9.33 ms",
      "18.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 38, P3 at 54. Avg Turnaround = (26 + 38 + 54) / 3 = 39.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 5, 7, 5, 1, 4, 4, 6]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 6➔5➔7➔5➔1➔4➔4➔6. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 326 KB memory. Block chunks available are [266, 356, 446, 311] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "356 KB partition",
      "311 KB partition",
      "266 KB partition",
      "446 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 326 KB), which selects 356 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 2, 2, 5, 7, 5, 5, 5]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "6 page faults",
      "3 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔2➔2➔5➔7➔5➔5➔5. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 11ms, P2 = 32ms, and P3 = 30ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.33 ms",
      "42.33 ms",
      "24.33 ms",
      "20.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 11, P2 at 43, P3 at 73. Avg Turnaround = (11 + 43 + 73) / 3 = 42.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [5, 7, 3, 1, 7, 2, 6, 7]?",
    "options": [
      "8 page faults",
      "8 page faults",
      "5 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔7➔3➔1➔7➔2➔6➔7. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 14ms, P2 = 42ms, and P3 = 44ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "56.67 ms",
      "18.67 ms",
      "28.67 ms",
      "33.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 14, P2 at 56, P3 at 100. Avg Turnaround = (14 + 56 + 100) / 3 = 56.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 32ms, and P3 = 27ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "56.33 ms",
      "19.33 ms",
      "19.67 ms",
      "28.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 58, P3 at 85. Avg Turnaround = (26 + 58 + 85) / 3 = 56.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 16ms, P2 = 41ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.67 ms",
      "19.00 ms",
      "45.00 ms",
      "15.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 16, P2 at 57, P3 at 62. Avg Turnaround = (16 + 57 + 62) / 3 = 45.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 40ms, P2 = 18ms, and P3 = 34ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "17.33 ms",
      "30.67 ms",
      "19.33 ms",
      "63.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 40, P2 at 58, P3 at 92. Avg Turnaround = (40 + 58 + 92) / 3 = 63.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 7, 3, 5, 1, 2, 4, 1]?",
    "options": [
      "7 page faults",
      "9 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔7➔3➔5➔1➔2➔4➔1. Cache slots = 4. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 30ms, P2 = 17ms, and P3 = 17ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.67 ms",
      "21.33 ms",
      "47.00 ms",
      "11.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 30, P2 at 47, P3 at 64. Avg Turnaround = (30 + 47 + 64) / 3 = 47.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 6, 3, 3, 1, 4, 4, 6]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔6➔3➔3➔1➔4➔4➔6. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 306 KB memory. Block chunks available are [246, 336, 426, 291] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "336 KB partition",
      "246 KB partition",
      "426 KB partition",
      "291 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 306 KB), which selects 336 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [1, 7, 3, 4, 3, 7, 2, 7]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 1➔7➔3➔4➔3➔7➔2➔7. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 261 KB memory. Block chunks available are [201, 291, 381, 246] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "201 KB partition",
      "291 KB partition",
      "381 KB partition",
      "246 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 261 KB), which selects 291 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 1, 3, 3, 2, 7, 2, 5]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 7➔1➔3➔3➔2➔7➔2➔5. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 147 KB memory. Block chunks available are [87, 177, 267, 132] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "267 KB partition",
      "87 KB partition",
      "132 KB partition",
      "177 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 147 KB), which selects 177 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 3, 7, 3, 4, 3, 7, 7]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "4 page faults",
      "3 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 6➔3➔7➔3➔4➔3➔7➔7. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 1, 1, 6, 4, 6, 3, 5]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔1➔1➔6➔4➔6➔3➔5. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 3, 6, 7, 1, 6, 2, 1]?",
    "options": [
      "5 page faults",
      "7 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 3➔3➔6➔7➔1➔6➔2➔1. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 238 KB memory. Block chunks available are [178, 268, 358, 223] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "178 KB partition",
      "358 KB partition",
      "223 KB partition",
      "268 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 238 KB), which selects 268 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 4, 6, 3, 6, 6, 4, 1]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "4 page faults",
      "7 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 7➔4➔6➔3➔6➔6➔4➔1. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 36ms, P2 = 13ms, and P3 = 43ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.33 ms",
      "59.00 ms",
      "18.67 ms",
      "30.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 36, P2 at 49, P3 at 92. Avg Turnaround = (36 + 49 + 92) / 3 = 59.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 212 KB memory. Block chunks available are [152, 242, 332, 197] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "242 KB partition",
      "332 KB partition",
      "197 KB partition",
      "152 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 212 KB), which selects 242 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 465 KB memory. Block chunks available are [405, 495, 585, 450] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "450 KB partition",
      "495 KB partition",
      "585 KB partition",
      "405 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 465 KB), which selects 495 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 1, 6, 6, 3, 5, 4, 5]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 7➔1➔6➔6➔3➔5➔4➔5. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 4, 3, 7, 3, 6, 2, 4]?",
    "options": [
      "7 page faults",
      "8 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔4➔3➔7➔3➔6➔2➔4. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 1, 4, 7, 4, 4, 5, 4]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "3 page faults",
      "6 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔1➔4➔7➔4➔4➔5➔4. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 30ms, P2 = 44ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "24.67 ms",
      "27.33 ms",
      "72.00 ms",
      "37.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 30, P2 at 74, P3 at 112. Avg Turnaround = (30 + 74 + 112) / 3 = 72.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 225 KB memory. Block chunks available are [165, 255, 345, 210] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "255 KB partition",
      "165 KB partition",
      "210 KB partition",
      "345 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 225 KB), which selects 255 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 27ms, P2 = 42ms, and P3 = 42ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "37.00 ms",
      "69.00 ms",
      "28.00 ms",
      "23.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 27, P2 at 69, P3 at 111. Avg Turnaround = (27 + 69 + 111) / 3 = 69.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 17ms, and P3 = 11ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "53.00 ms",
      "9.33 ms",
      "22.00 ms",
      "18.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 55, P3 at 66. Avg Turnaround = (38 + 55 + 66) / 3 = 53.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 2, 7, 1, 1, 3, 3, 6]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔2➔7➔1➔1➔3➔3➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 43ms, P2 = 39ms, and P3 = 9ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "30.33 ms",
      "72.00 ms",
      "27.33 ms",
      "16.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 43, P2 at 82, P3 at 91. Avg Turnaround = (43 + 82 + 91) / 3 = 72.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 444 KB memory. Block chunks available are [384, 474, 564, 429] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "474 KB partition",
      "564 KB partition",
      "384 KB partition",
      "429 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 444 KB), which selects 474 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 188 KB memory. Block chunks available are [128, 218, 308, 173] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "218 KB partition",
      "308 KB partition",
      "128 KB partition",
      "173 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 188 KB), which selects 218 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 327 KB memory. Block chunks available are [267, 357, 447, 312] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "357 KB partition",
      "312 KB partition",
      "267 KB partition",
      "447 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 327 KB), which selects 357 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 6, 3, 2, 1, 3, 2, 6]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "6 page faults",
      "3 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔6➔3➔2➔1➔3➔2➔6. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 5ms, P2 = 5ms, and P3 = 29ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "18.00 ms",
      "13.00 ms",
      "3.33 ms",
      "11.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 5, P2 at 10, P3 at 39. Avg Turnaround = (5 + 10 + 39) / 3 = 18.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 3, 5, 3, 7, 3, 5, 1]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "7 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔3➔5➔3➔7➔3➔5➔1. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 5, 3, 6, 7, 3, 6, 6]?",
    "options": [
      "4 page faults",
      "6 page faults",
      "8 page faults",
      "3 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔5➔3➔6➔7➔3➔6➔6. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 114 KB memory. Block chunks available are [54, 144, 234, 99] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "234 KB partition",
      "99 KB partition",
      "144 KB partition",
      "54 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 114 KB), which selects 144 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 3, 6, 2, 3, 7, 1, 7]?",
    "options": [
      "7 page faults",
      "4 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔3➔6➔2➔3➔7➔1➔7. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 7, 5, 6, 6, 7, 1, 6]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 3➔7➔5➔6➔6➔7➔1➔6. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 12ms, P2 = 17ms, and P3 = 9ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "9.67 ms",
      "26.33 ms",
      "8.67 ms",
      "12.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 12, P2 at 29, P3 at 38. Avg Turnaround = (12 + 29 + 38) / 3 = 26.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 4, 5, 2, 1, 5, 5, 7]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔4➔5➔2➔1➔5➔5➔7. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 6, 2, 2, 4, 6, 4, 1]?",
    "options": [
      "7 page faults",
      "4 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 3➔6➔2➔2➔4➔6➔4➔1. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 379 KB memory. Block chunks available are [319, 409, 499, 364] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "409 KB partition",
      "319 KB partition",
      "364 KB partition",
      "499 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 379 KB), which selects 409 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 20ms, P2 = 29ms, and P3 = 10ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "13.00 ms",
      "19.67 ms",
      "16.33 ms",
      "42.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 20, P2 at 49, P3 at 59. Avg Turnaround = (20 + 49 + 59) / 3 = 42.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 37ms, P2 = 32ms, and P3 = 18ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "29.00 ms",
      "64.33 ms",
      "23.00 ms",
      "16.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 37, P2 at 69, P3 at 87. Avg Turnaround = (37 + 69 + 87) / 3 = 64.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 193 KB memory. Block chunks available are [133, 223, 313, 178] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "133 KB partition",
      "178 KB partition",
      "313 KB partition",
      "223 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 193 KB), which selects 223 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 6, 5, 5, 1, 7, 4, 5]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "9 page faults",
      "7 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔6➔5➔5➔1➔7➔4➔5. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 14ms, and P3 = 41ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "18.33 ms",
      "17.33 ms",
      "61.00 ms",
      "31.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 52, P3 at 93. Avg Turnaround = (38 + 52 + 93) / 3 = 61.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 1, 4, 1, 2, 4, 2, 5]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "4 page faults",
      "3 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔1➔4➔1➔2➔4➔2➔5. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 7, 2, 3, 4, 7, 4, 5]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔7➔2➔3➔4➔7➔4➔5. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 7, 7, 1, 4, 4, 2, 4]?",
    "options": [
      "5 page faults",
      "7 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔7➔7➔1➔4➔4➔2➔4. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 4, 2, 1, 1, 4, 6, 6]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔4➔2➔1➔1➔4➔6➔6. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 14ms, P2 = 8ms, and P3 = 41ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.33 ms",
      "7.33 ms",
      "33.00 ms",
      "21.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 14, P2 at 22, P3 at 63. Avg Turnaround = (14 + 22 + 63) / 3 = 33.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 150 KB memory. Block chunks available are [90, 180, 270, 135] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "270 KB partition",
      "180 KB partition",
      "90 KB partition",
      "135 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 150 KB), which selects 180 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 17ms, P2 = 26ms, and P3 = 23ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.33 ms",
      "22.00 ms",
      "42.00 ms",
      "16.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 17, P2 at 43, P3 at 66. Avg Turnaround = (17 + 43 + 66) / 3 = 42.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 3, 2, 5, 6, 2, 5, 3]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 1➔3➔2➔5➔6➔2➔5➔3. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 210 KB memory. Block chunks available are [150, 240, 330, 195] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "150 KB partition",
      "240 KB partition",
      "195 KB partition",
      "330 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 210 KB), which selects 240 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 376 KB memory. Block chunks available are [316, 406, 496, 361] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "496 KB partition",
      "361 KB partition",
      "316 KB partition",
      "406 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 376 KB), which selects 406 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 7ms, P2 = 30ms, and P3 = 14ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "12.33 ms",
      "17.00 ms",
      "14.67 ms",
      "31.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 7, P2 at 37, P3 at 51. Avg Turnaround = (7 + 37 + 51) / 3 = 31.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 5, 2, 3, 1, 1, 2, 5]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "5 page faults",
      "7 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔5➔2➔3➔1➔1➔2➔5. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 25ms, P2 = 22ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.67 ms",
      "17.33 ms",
      "41.33 ms",
      "9.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 25, P2 at 47, P3 at 52. Avg Turnaround = (25 + 47 + 52) / 3 = 41.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 420 KB memory. Block chunks available are [360, 450, 540, 405] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "450 KB partition",
      "360 KB partition",
      "540 KB partition",
      "405 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 420 KB), which selects 450 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 9ms, P2 = 6ms, and P3 = 39ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "5.00 ms",
      "26.00 ms",
      "15.00 ms",
      "18.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 9, P2 at 15, P3 at 54. Avg Turnaround = (9 + 15 + 54) / 3 = 26.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 339 KB memory. Block chunks available are [279, 369, 459, 324] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "324 KB partition",
      "369 KB partition",
      "279 KB partition",
      "459 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 339 KB), which selects 369 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 36ms, P2 = 31ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "35.00 ms",
      "22.33 ms",
      "69.33 ms",
      "23.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 36, P2 at 67, P3 at 105. Avg Turnaround = (36 + 67 + 105) / 3 = 69.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 29ms, P2 = 40ms, and P3 = 16ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "28.33 ms",
      "61.00 ms",
      "18.67 ms",
      "23.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 29, P2 at 69, P3 at 85. Avg Turnaround = (29 + 69 + 85) / 3 = 61.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 6, 2, 4, 7, 3, 4, 7]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "5 page faults",
      "4 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 6➔6➔2➔4➔7➔3➔4➔7. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 346 KB memory. Block chunks available are [286, 376, 466, 331] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "286 KB partition",
      "376 KB partition",
      "466 KB partition",
      "331 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 346 KB), which selects 376 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 171 KB memory. Block chunks available are [111, 201, 291, 156] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "156 KB partition",
      "201 KB partition",
      "291 KB partition",
      "111 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 171 KB), which selects 201 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 5, 2, 7, 1, 6, 6, 6]?",
    "options": [
      "6 page faults",
      "5 page faults",
      "8 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 3➔5➔2➔7➔1➔6➔6➔6. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 264 KB memory. Block chunks available are [204, 294, 384, 249] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "204 KB partition",
      "294 KB partition",
      "249 KB partition",
      "384 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 264 KB), which selects 294 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 428 KB memory. Block chunks available are [368, 458, 548, 413] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "548 KB partition",
      "413 KB partition",
      "368 KB partition",
      "458 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 428 KB), which selects 458 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 578 KB memory. Block chunks available are [518, 608, 698, 563] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "608 KB partition",
      "698 KB partition",
      "518 KB partition",
      "563 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 578 KB), which selects 608 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 2, 6, 1, 6, 2, 4, 4]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔2➔6➔1➔6➔2➔4➔4. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 204 KB memory. Block chunks available are [144, 234, 324, 189] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "144 KB partition",
      "324 KB partition",
      "234 KB partition",
      "189 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 204 KB), which selects 234 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 4, 3, 4, 2, 7, 4, 1]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 5➔4➔3➔4➔2➔7➔4➔1. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 6ms, P2 = 27ms, and P3 = 44ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.67 ms",
      "38.67 ms",
      "11.00 ms",
      "23.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 6, P2 at 33, P3 at 77. Avg Turnaround = (6 + 33 + 77) / 3 = 38.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 486 KB memory. Block chunks available are [426, 516, 606, 471] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "426 KB partition",
      "606 KB partition",
      "471 KB partition",
      "516 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 486 KB), which selects 516 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 4, 5, 1, 5, 4, 7, 5]?",
    "options": [
      "3 page faults",
      "4 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 7➔4➔5➔1➔5➔4➔7➔5. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 15ms, P2 = 29ms, and P3 = 31ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.67 ms",
      "25.00 ms",
      "20.00 ms",
      "44.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 15, P2 at 44, P3 at 75. Avg Turnaround = (15 + 44 + 75) / 3 = 44.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 4, 7, 1, 5, 1, 1, 1]?",
    "options": [
      "6 page faults",
      "4 page faults",
      "3 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔4➔7➔1➔5➔1➔1➔1. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [1, 5, 6, 2, 5, 2, 2, 2]?",
    "options": [
      "3 page faults",
      "6 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 1➔5➔6➔2➔5➔2➔2➔2. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 37ms, P2 = 38ms, and P3 = 25ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "21.00 ms",
      "25.00 ms",
      "33.33 ms",
      "70.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 37, P2 at 75, P3 at 100. Avg Turnaround = (37 + 75 + 100) / 3 = 70.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 377 KB memory. Block chunks available are [317, 407, 497, 362] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "317 KB partition",
      "497 KB partition",
      "362 KB partition",
      "407 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 377 KB), which selects 407 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 33ms, and P3 = 7ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.67 ms",
      "22.00 ms",
      "13.33 ms",
      "50.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 59, P3 at 66. Avg Turnaround = (26 + 59 + 66) / 3 = 50.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 3, 4, 1, 4, 4, 5, 2]?",
    "options": [
      "5 page faults",
      "7 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔3➔4➔1➔4➔4➔5➔2. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [5, 4, 3, 2, 2, 6, 6, 2]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "4 page faults",
      "7 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔4➔3➔2➔2➔6➔6➔2. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [5, 3, 3, 5, 4, 6, 6, 6]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "3 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔3➔3➔5➔4➔6➔6➔6. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 5ms, P2 = 25ms, and P3 = 15ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "26.67 ms",
      "15.00 ms",
      "13.33 ms",
      "10.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 5, P2 at 30, P3 at 45. Avg Turnaround = (5 + 30 + 45) / 3 = 26.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 43ms, P2 = 11ms, and P3 = 35ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.33 ms",
      "18.00 ms",
      "29.67 ms",
      "62.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 43, P2 at 54, P3 at 89. Avg Turnaround = (43 + 54 + 89) / 3 = 62.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 7, 7, 1, 5, 1, 1, 2]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "8 page faults",
      "7 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 3➔7➔7➔1➔5➔1➔1➔2. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 570 KB memory. Block chunks available are [510, 600, 690, 555] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "555 KB partition",
      "600 KB partition",
      "690 KB partition",
      "510 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 570 KB), which selects 600 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 1, 7, 7, 3, 5, 6, 1]?",
    "options": [
      "7 page faults",
      "4 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔1➔7➔7➔3➔5➔6➔1. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 1, 6, 2, 1, 4, 7, 2]?",
    "options": [
      "4 page faults",
      "5 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 6➔1➔6➔2➔1➔4➔7➔2. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 5, 2, 5, 4, 5, 6, 3]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "4 page faults",
      "7 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔5➔2➔5➔4➔5➔6➔3. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 4, 2, 4, 1, 7, 1, 5]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 6➔4➔2➔4➔1➔7➔1➔5. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 6, 2, 3, 2, 4, 3, 3]?",
    "options": [
      "7 page faults",
      "4 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔6➔2➔3➔2➔4➔3➔3. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 12ms, P2 = 16ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.00 ms",
      "9.33 ms",
      "18.00 ms",
      "31.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 12, P2 at 28, P3 at 54. Avg Turnaround = (12 + 28 + 54) / 3 = 31.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 5ms, P2 = 14ms, and P3 = 32ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "17.00 ms",
      "25.00 ms",
      "6.33 ms",
      "15.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 5, P2 at 19, P3 at 51. Avg Turnaround = (5 + 19 + 51) / 3 = 25.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 42ms, P2 = 21ms, and P3 = 41ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "21.00 ms",
      "20.67 ms",
      "69.67 ms",
      "34.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 42, P2 at 63, P3 at 104. Avg Turnaround = (42 + 63 + 104) / 3 = 69.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [5, 6, 3, 4, 4, 7, 7, 1]?",
    "options": [
      "6 page faults",
      "5 page faults",
      "8 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔6➔3➔4➔4➔7➔7➔1. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 174 KB memory. Block chunks available are [114, 204, 294, 159] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "114 KB partition",
      "159 KB partition",
      "294 KB partition",
      "204 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 174 KB), which selects 204 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 272 KB memory. Block chunks available are [212, 302, 392, 257] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "212 KB partition",
      "257 KB partition",
      "302 KB partition",
      "392 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 272 KB), which selects 302 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 258 KB memory. Block chunks available are [198, 288, 378, 243] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "198 KB partition",
      "288 KB partition",
      "378 KB partition",
      "243 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 258 KB), which selects 288 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 15ms, and P3 = 36ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "29.67 ms",
      "17.00 ms",
      "60.00 ms",
      "17.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 53, P3 at 89. Avg Turnaround = (38 + 53 + 89) / 3 = 60.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 11ms, P2 = 12ms, and P3 = 9ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "7.67 ms",
      "7.00 ms",
      "10.67 ms",
      "22.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 11, P2 at 23, P3 at 32. Avg Turnaround = (11 + 23 + 32) / 3 = 22.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [2, 4, 1, 3, 2, 3, 6, 3]?",
    "options": [
      "5 page faults",
      "7 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 2➔4➔1➔3➔2➔3➔6➔3. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 25ms, P2 = 28ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "45.33 ms",
      "19.33 ms",
      "17.67 ms",
      "11.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 25, P2 at 53, P3 at 58. Avg Turnaround = (25 + 53 + 58) / 3 = 45.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 3, 7, 7, 5, 6, 6, 2]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 2➔3➔7➔7➔5➔6➔6➔2. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 103 KB memory. Block chunks available are [43, 133, 223, 88] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "88 KB partition",
      "223 KB partition",
      "43 KB partition",
      "133 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 103 KB), which selects 133 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 11ms, P2 = 37ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "44.33 ms",
      "16.00 ms",
      "21.00 ms",
      "24.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 11, P2 at 48, P3 at 74. Avg Turnaround = (11 + 48 + 74) / 3 = 44.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 2, 2, 2, 5, 6, 2, 5]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "3 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 7➔2➔2➔2➔5➔6➔2➔5. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 441 KB memory. Block chunks available are [381, 471, 561, 426] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "426 KB partition",
      "381 KB partition",
      "561 KB partition",
      "471 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 441 KB), which selects 471 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 3, 6, 7, 4, 5, 1, 1]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔3➔6➔7➔4➔5➔1➔1. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 1, 2, 5, 1, 4, 1, 3]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔1➔2➔5➔1➔4➔1➔3. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 6, 3, 7, 4, 3, 1, 4]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 6➔6➔3➔7➔4➔3➔1➔4. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 4, 5, 5, 1, 2, 2, 7]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "5 page faults",
      "7 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔4➔5➔5➔1➔2➔2➔7. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 4, 6, 7, 2, 3, 3, 3]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔4➔6➔7➔2➔3➔3➔3. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 16ms, P2 = 6ms, and P3 = 8ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "7.33 ms",
      "4.67 ms",
      "10.00 ms",
      "22.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 16, P2 at 22, P3 at 30. Avg Turnaround = (16 + 22 + 30) / 3 = 22.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 2, 1, 1, 7, 6, 5, 6]?",
    "options": [
      "7 page faults",
      "4 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 1➔2➔1➔1➔7➔6➔5➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 268 KB memory. Block chunks available are [208, 298, 388, 253] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "208 KB partition",
      "388 KB partition",
      "253 KB partition",
      "298 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 268 KB), which selects 298 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 6, 3, 4, 3, 2, 4, 2]?",
    "options": [
      "4 page faults",
      "3 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔6➔3➔4➔3➔2➔4➔2. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [2, 1, 4, 2, 4, 2, 1, 2]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "2 page faults",
      "3 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 2➔1➔4➔2➔4➔2➔1➔2. Cache slots = 4. Total page fault hits = 3 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 384 KB memory. Block chunks available are [324, 414, 504, 369] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "504 KB partition",
      "369 KB partition",
      "324 KB partition",
      "414 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 384 KB), which selects 414 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 7, 7, 2, 7, 3, 1, 1]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 5➔7➔7➔2➔7➔3➔1➔1. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 5, 1, 7, 7, 4, 5, 3]?",
    "options": [
      "7 page faults",
      "9 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 3➔5➔1➔7➔7➔4➔5➔3. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 29ms, P2 = 44ms, and P3 = 34ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "26.00 ms",
      "69.67 ms",
      "24.33 ms",
      "35.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 29, P2 at 73, P3 at 107. Avg Turnaround = (29 + 73 + 107) / 3 = 69.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 12ms, P2 = 6ms, and P3 = 19ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "12.33 ms",
      "8.33 ms",
      "22.33 ms",
      "6.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 12, P2 at 18, P3 at 37. Avg Turnaround = (12 + 18 + 37) / 3 = 22.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 13ms, P2 = 9ms, and P3 = 8ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "5.67 ms",
      "10.00 ms",
      "21.67 ms",
      "7.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 13, P2 at 22, P3 at 30. Avg Turnaround = (13 + 22 + 30) / 3 = 21.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 6, 2, 2, 3, 2, 5, 3]?",
    "options": [
      "4 page faults",
      "7 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔6➔2➔2➔3➔2➔5➔3. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 154 KB memory. Block chunks available are [94, 184, 274, 139] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "274 KB partition",
      "184 KB partition",
      "94 KB partition",
      "139 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 154 KB), which selects 184 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 283 KB memory. Block chunks available are [223, 313, 403, 268] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "403 KB partition",
      "313 KB partition",
      "223 KB partition",
      "268 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 283 KB), which selects 313 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 40ms, P2 = 40ms, and P3 = 34ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "78.00 ms",
      "26.67 ms",
      "24.67 ms",
      "38.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 40, P2 at 80, P3 at 114. Avg Turnaround = (40 + 80 + 114) / 3 = 78.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 2, 2, 5, 1, 2, 2, 5]?",
    "options": [
      "3 page faults",
      "6 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔2➔2➔5➔1➔2➔2➔5. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 31ms, P2 = 32ms, and P3 = 20ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "27.67 ms",
      "59.00 ms",
      "21.00 ms",
      "17.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 31, P2 at 63, P3 at 83. Avg Turnaround = (31 + 63 + 83) / 3 = 59.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 179 KB memory. Block chunks available are [119, 209, 299, 164] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "164 KB partition",
      "299 KB partition",
      "119 KB partition",
      "209 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 179 KB), which selects 209 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 43ms, P2 = 13ms, and P3 = 22ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "26.00 ms",
      "11.67 ms",
      "18.67 ms",
      "59.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 43, P2 at 56, P3 at 78. Avg Turnaround = (43 + 56 + 78) / 3 = 59.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 172 KB memory. Block chunks available are [112, 202, 292, 157] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "157 KB partition",
      "202 KB partition",
      "292 KB partition",
      "112 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 172 KB), which selects 202 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 1, 2, 1, 7, 2, 2, 2]?",
    "options": [
      "3 page faults",
      "4 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔1➔2➔1➔7➔2➔2➔2. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 42ms, P2 = 21ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "21.00 ms",
      "33.67 ms",
      "68.67 ms",
      "19.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 42, P2 at 63, P3 at 101. Avg Turnaround = (42 + 63 + 101) / 3 = 68.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 5, 5, 4, 5, 7, 5, 2]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔5➔5➔4➔5➔7➔5➔2. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 1, 3, 7, 2, 3, 2, 7]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "6 page faults",
      "3 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 7➔1➔3➔7➔2➔3➔2➔7. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 34ms, P2 = 24ms, and P3 = 11ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "53.67 ms",
      "19.33 ms",
      "11.67 ms",
      "23.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 34, P2 at 58, P3 at 69. Avg Turnaround = (34 + 58 + 69) / 3 = 53.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 8ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "40.00 ms",
      "11.33 ms",
      "11.33 ms",
      "20.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 34, P3 at 60. Avg Turnaround = (26 + 34 + 60) / 3 = 40.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 352 KB memory. Block chunks available are [292, 382, 472, 337] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "292 KB partition",
      "472 KB partition",
      "382 KB partition",
      "337 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 352 KB), which selects 382 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 156 KB memory. Block chunks available are [96, 186, 276, 141] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "96 KB partition",
      "141 KB partition",
      "186 KB partition",
      "276 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 156 KB), which selects 186 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 33ms, P2 = 21ms, and P3 = 19ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "13.33 ms",
      "18.00 ms",
      "24.33 ms",
      "53.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 33, P2 at 54, P3 at 73. Avg Turnaround = (33 + 54 + 73) / 3 = 53.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 1, 2, 4, 1, 4, 3, 3]?",
    "options": [
      "4 page faults",
      "6 page faults",
      "3 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔1➔2➔4➔1➔4➔3➔3. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 543 KB memory. Block chunks available are [483, 573, 663, 528] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "573 KB partition",
      "528 KB partition",
      "663 KB partition",
      "483 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 543 KB), which selects 573 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 16ms, P2 = 32ms, and P3 = 21ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "17.67 ms",
      "23.00 ms",
      "16.00 ms",
      "44.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 16, P2 at 48, P3 at 69. Avg Turnaround = (16 + 48 + 69) / 3 = 44.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 7ms, P2 = 39ms, and P3 = 10ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "36.33 ms",
      "15.33 ms",
      "16.33 ms",
      "18.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 7, P2 at 46, P3 at 56. Avg Turnaround = (7 + 46 + 56) / 3 = 36.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 5, 7, 4, 3, 3, 4, 7]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "3 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔5➔7➔4➔3➔3➔4➔7. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 5, 5, 2, 6, 6, 2, 7]?",
    "options": [
      "4 page faults",
      "7 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 1➔5➔5➔2➔6➔6➔2➔7. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 35ms, P2 = 40ms, and P3 = 21ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.00 ms",
      "68.67 ms",
      "32.00 ms",
      "20.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 35, P2 at 75, P3 at 96. Avg Turnaround = (35 + 75 + 96) / 3 = 68.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 19ms, P2 = 30ms, and P3 = 23ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.33 ms",
      "46.67 ms",
      "17.67 ms",
      "24.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 19, P2 at 49, P3 at 72. Avg Turnaround = (19 + 49 + 72) / 3 = 46.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 11ms, P2 = 10ms, and P3 = 40ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "31.00 ms",
      "20.33 ms",
      "16.67 ms",
      "7.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 11, P2 at 21, P3 at 61. Avg Turnaround = (11 + 21 + 61) / 3 = 31.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 7, 7, 6, 1, 7, 6, 6]?",
    "options": [
      "2 page faults",
      "8 page faults",
      "3 page faults",
      "5 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 6➔7➔7➔6➔1➔7➔6➔6. Cache slots = 4. Total page fault hits = 3 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 8ms, P2 = 17ms, and P3 = 44ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.00 ms",
      "34.00 ms",
      "8.33 ms",
      "20.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 8, P2 at 25, P3 at 69. Avg Turnaround = (8 + 25 + 69) / 3 = 34.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 7, 5, 5, 7, 6, 7, 5]?",
    "options": [
      "2 page faults",
      "3 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 6➔7➔5➔5➔7➔6➔7➔5. Cache slots = 4. Total page fault hits = 3 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 422 KB memory. Block chunks available are [362, 452, 542, 407] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "452 KB partition",
      "407 KB partition",
      "542 KB partition",
      "362 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 422 KB), which selects 452 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 23ms, P2 = 35ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "24.33 ms",
      "32.00 ms",
      "19.33 ms",
      "59.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 23, P2 at 58, P3 at 96. Avg Turnaround = (23 + 58 + 96) / 3 = 59.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 23ms, P2 = 34ms, and P3 = 10ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.00 ms",
      "22.33 ms",
      "49.00 ms",
      "14.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 23, P2 at 57, P3 at 67. Avg Turnaround = (23 + 57 + 67) / 3 = 49.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 426 KB memory. Block chunks available are [366, 456, 546, 411] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "411 KB partition",
      "546 KB partition",
      "366 KB partition",
      "456 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 426 KB), which selects 456 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 29ms, and P3 = 30ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "32.33 ms",
      "19.67 ms",
      "22.33 ms",
      "67.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 67, P3 at 97. Avg Turnaround = (38 + 67 + 97) / 3 = 67.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 290 KB memory. Block chunks available are [230, 320, 410, 275] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "410 KB partition",
      "230 KB partition",
      "320 KB partition",
      "275 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 290 KB), which selects 320 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 15ms, P2 = 32ms, and P3 = 39ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.67 ms",
      "15.67 ms",
      "28.67 ms",
      "49.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 15, P2 at 47, P3 at 86. Avg Turnaround = (15 + 47 + 86) / 3 = 49.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 32ms, P2 = 15ms, and P3 = 19ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "48.33 ms",
      "15.67 ms",
      "11.33 ms",
      "22.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 32, P2 at 47, P3 at 66. Avg Turnaround = (32 + 47 + 66) / 3 = 48.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 25ms, P2 = 40ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "21.67 ms",
      "53.33 ms",
      "23.33 ms",
      "15.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 25, P2 at 65, P3 at 70. Avg Turnaround = (25 + 65 + 70) / 3 = 53.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 270 KB memory. Block chunks available are [210, 300, 390, 255] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "255 KB partition",
      "390 KB partition",
      "210 KB partition",
      "300 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 270 KB), which selects 300 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 35ms, P2 = 7ms, and P3 = 39ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "27.00 ms",
      "15.33 ms",
      "14.00 ms",
      "52.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 35, P2 at 42, P3 at 81. Avg Turnaround = (35 + 42 + 81) / 3 = 52.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 318 KB memory. Block chunks available are [258, 348, 438, 303] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "258 KB partition",
      "303 KB partition",
      "348 KB partition",
      "438 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 318 KB), which selects 348 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 25ms, and P3 = 32ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.00 ms",
      "53.33 ms",
      "17.00 ms",
      "27.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 51, P3 at 83. Avg Turnaround = (26 + 51 + 83) / 3 = 53.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 13ms, P2 = 23ms, and P3 = 12ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.00 ms",
      "12.00 ms",
      "32.33 ms",
      "11.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 13, P2 at 36, P3 at 48. Avg Turnaround = (13 + 36 + 48) / 3 = 32.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 29ms, P2 = 5ms, and P3 = 20ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "39.00 ms",
      "18.00 ms",
      "11.33 ms",
      "8.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 29, P2 at 34, P3 at 54. Avg Turnaround = (29 + 34 + 54) / 3 = 39.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 8ms, and P3 = 28ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.67 ms",
      "12.00 ms",
      "11.33 ms",
      "40.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 34, P3 at 62. Avg Turnaround = (26 + 34 + 62) / 3 = 40.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 3, 7, 2, 4, 7, 7, 7]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "4 page faults",
      "7 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔3➔7➔2➔4➔7➔7➔7. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 16ms, and P3 = 23ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "13.00 ms",
      "18.00 ms",
      "56.33 ms",
      "25.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 54, P3 at 77. Avg Turnaround = (38 + 54 + 77) / 3 = 56.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 370 KB memory. Block chunks available are [310, 400, 490, 355] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "490 KB partition",
      "355 KB partition",
      "310 KB partition",
      "400 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 370 KB), which selects 400 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 40ms, P2 = 9ms, and P3 = 10ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "49.33 ms",
      "6.33 ms",
      "16.33 ms",
      "19.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 40, P2 at 49, P3 at 59. Avg Turnaround = (40 + 49 + 59) / 3 = 49.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 40ms, P2 = 9ms, and P3 = 27ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.33 ms",
      "55.00 ms",
      "16.33 ms",
      "12.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 40, P2 at 49, P3 at 76. Avg Turnaround = (40 + 49 + 76) / 3 = 55.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 408 KB memory. Block chunks available are [348, 438, 528, 393] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "438 KB partition",
      "528 KB partition",
      "348 KB partition",
      "393 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 408 KB), which selects 438 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [5, 2, 7, 1, 4, 5, 7, 3]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔2➔7➔1➔4➔5➔7➔3. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 487 KB memory. Block chunks available are [427, 517, 607, 472] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "517 KB partition",
      "472 KB partition",
      "427 KB partition",
      "607 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 487 KB), which selects 517 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 310 KB memory. Block chunks available are [250, 340, 430, 295] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "340 KB partition",
      "295 KB partition",
      "430 KB partition",
      "250 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 310 KB), which selects 340 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 4, 4, 6, 2, 4, 6, 2]?",
    "options": [
      "5 page faults",
      "2 page faults",
      "3 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔4➔4➔6➔2➔4➔6➔2. Cache slots = 3. Total page fault hits = 3 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 30ms, P2 = 5ms, and P3 = 35ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "11.67 ms",
      "45.00 ms",
      "13.33 ms",
      "23.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 30, P2 at 35, P3 at 70. Avg Turnaround = (30 + 35 + 70) / 3 = 45.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 2, 3, 1, 7, 6, 6, 3]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔2➔3➔1➔7➔6➔6➔3. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 7, 1, 3, 7, 3, 3, 7]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "3 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 4➔7➔1➔3➔7➔3➔3➔7. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 5, 7, 2, 1, 6, 6, 6]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔5➔7➔2➔1➔6➔6➔6. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 398 KB memory. Block chunks available are [338, 428, 518, 383] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "518 KB partition",
      "383 KB partition",
      "338 KB partition",
      "428 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 398 KB), which selects 428 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 583 KB memory. Block chunks available are [523, 613, 703, 568] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "703 KB partition",
      "523 KB partition",
      "613 KB partition",
      "568 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 583 KB), which selects 613 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 17ms, P2 = 27ms, and P3 = 9ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.67 ms",
      "12.00 ms",
      "38.00 ms",
      "17.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 17, P2 at 44, P3 at 53. Avg Turnaround = (17 + 44 + 53) / 3 = 38.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 37ms, P2 = 27ms, and P3 = 23ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.67 ms",
      "21.33 ms",
      "29.00 ms",
      "62.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 37, P2 at 64, P3 at 87. Avg Turnaround = (37 + 64 + 87) / 3 = 62.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 560 KB memory. Block chunks available are [500, 590, 680, 545] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "590 KB partition",
      "680 KB partition",
      "545 KB partition",
      "500 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 560 KB), which selects 590 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [5, 5, 4, 1, 6, 3, 2, 5]?",
    "options": [
      "6 page faults",
      "9 page faults",
      "8 page faults",
      "7 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔5➔4➔1➔6➔3➔2➔5. Cache slots = 5. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 39ms, P2 = 6ms, and P3 = 12ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.00 ms",
      "15.00 ms",
      "47.00 ms",
      "6.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 39, P2 at 45, P3 at 57. Avg Turnaround = (39 + 45 + 57) / 3 = 47.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 35ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "33.00 ms",
      "24.33 ms",
      "70.00 ms",
      "20.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 73, P3 at 99. Avg Turnaround = (38 + 73 + 99) / 3 = 70.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 1, 7, 7, 1, 1, 3, 4]?",
    "options": [
      "7 page faults",
      "8 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔1➔7➔7➔1➔1➔3➔4. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 110 KB memory. Block chunks available are [50, 140, 230, 95] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "230 KB partition",
      "95 KB partition",
      "50 KB partition",
      "140 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 110 KB), which selects 140 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 8ms, P2 = 24ms, and P3 = 21ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "17.67 ms",
      "31.00 ms",
      "15.00 ms",
      "10.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 8, P2 at 32, P3 at 53. Avg Turnaround = (8 + 32 + 53) / 3 = 31.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 413 KB memory. Block chunks available are [353, 443, 533, 398] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "353 KB partition",
      "443 KB partition",
      "533 KB partition",
      "398 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 413 KB), which selects 443 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 27ms, P2 = 10ms, and P3 = 39ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.33 ms",
      "25.33 ms",
      "46.67 ms",
      "12.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 27, P2 at 37, P3 at 76. Avg Turnaround = (27 + 37 + 76) / 3 = 46.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 1, 7, 7, 7, 1, 6, 1]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "4 page faults",
      "3 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 3➔1➔7➔7➔7➔1➔6➔1. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 31ms, P2 = 9ms, and P3 = 8ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "39.67 ms",
      "16.00 ms",
      "13.33 ms",
      "5.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 31, P2 at 40, P3 at 48. Avg Turnaround = (31 + 40 + 48) / 3 = 39.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 14ms, P2 = 43ms, and P3 = 23ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "22.00 ms",
      "50.33 ms",
      "19.00 ms",
      "26.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 14, P2 at 57, P3 at 80. Avg Turnaround = (14 + 57 + 80) / 3 = 50.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 1, 6, 5, 6, 5, 3, 6]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "3 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔1➔6➔5➔6➔5➔3➔6. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 29ms, P2 = 16ms, and P3 = 11ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "9.00 ms",
      "43.33 ms",
      "18.67 ms",
      "15.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 29, P2 at 45, P3 at 56. Avg Turnaround = (29 + 45 + 56) / 3 = 43.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 25ms, P2 = 11ms, and P3 = 33ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "43.33 ms",
      "12.00 ms",
      "23.00 ms",
      "14.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 25, P2 at 36, P3 at 69. Avg Turnaround = (25 + 36 + 69) / 3 = 43.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 280 KB memory. Block chunks available are [220, 310, 400, 265] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "310 KB partition",
      "400 KB partition",
      "265 KB partition",
      "220 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 280 KB), which selects 310 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 30ms, P2 = 5ms, and P3 = 39ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "46.33 ms",
      "14.67 ms",
      "24.67 ms",
      "11.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 30, P2 at 35, P3 at 74. Avg Turnaround = (30 + 35 + 74) / 3 = 46.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 343 KB memory. Block chunks available are [283, 373, 463, 328] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "463 KB partition",
      "328 KB partition",
      "283 KB partition",
      "373 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 343 KB), which selects 373 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 5, 6, 2, 2, 1, 7, 4]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔5➔6➔2➔2➔1➔7➔4. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 301 KB memory. Block chunks available are [241, 331, 421, 286] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "421 KB partition",
      "286 KB partition",
      "331 KB partition",
      "241 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 301 KB), which selects 331 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 33ms, P2 = 11ms, and P3 = 42ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.67 ms",
      "28.67 ms",
      "17.67 ms",
      "54.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 33, P2 at 44, P3 at 86. Avg Turnaround = (33 + 44 + 86) / 3 = 54.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 7, 2, 4, 1, 6, 4, 6]?",
    "options": [
      "5 page faults",
      "7 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔7➔2➔4➔1➔6➔4➔6. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 2, 1, 7, 1, 1, 3, 3]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "7 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 5➔2➔1➔7➔1➔1➔3➔3. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 33ms, P2 = 27ms, and P3 = 32ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.67 ms",
      "30.67 ms",
      "20.00 ms",
      "61.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 33, P2 at 60, P3 at 92. Avg Turnaround = (33 + 60 + 92) / 3 = 61.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 297 KB memory. Block chunks available are [237, 327, 417, 282] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "327 KB partition",
      "282 KB partition",
      "237 KB partition",
      "417 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 297 KB), which selects 327 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 2, 4, 4, 5, 1, 5, 2]?",
    "options": [
      "3 page faults",
      "4 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔2➔4➔4➔5➔1➔5➔2. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 7, 1, 4, 5, 6, 5, 6]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 1➔7➔1➔4➔5➔6➔5➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 24ms, P2 = 43ms, and P3 = 28ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "31.67 ms",
      "22.33 ms",
      "62.00 ms",
      "23.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 24, P2 at 67, P3 at 95. Avg Turnaround = (24 + 67 + 95) / 3 = 62.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 41ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "55.33 ms",
      "22.33 ms",
      "15.67 ms",
      "24.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 67, P3 at 73. Avg Turnaround = (26 + 67 + 73) / 3 = 55.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 7, 1, 7, 2, 3, 3, 6]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 6➔7➔1➔7➔2➔3➔3➔6. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 2, 5, 6, 3, 6, 1, 6]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "7 page faults",
      "4 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔2➔5➔6➔3➔6➔1➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 10ms, P2 = 31ms, and P3 = 35ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "13.67 ms",
      "22.00 ms",
      "42.33 ms",
      "25.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 10, P2 at 41, P3 at 76. Avg Turnaround = (10 + 41 + 76) / 3 = 42.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 505 KB memory. Block chunks available are [445, 535, 625, 490] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "535 KB partition",
      "490 KB partition",
      "445 KB partition",
      "625 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 505 KB), which selects 535 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 42ms, P2 = 28ms, and P3 = 18ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "66.67 ms",
      "23.33 ms",
      "15.33 ms",
      "29.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 42, P2 at 70, P3 at 88. Avg Turnaround = (42 + 70 + 88) / 3 = 66.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 41ms, P2 = 41ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "29.00 ms",
      "15.33 ms",
      "27.33 ms",
      "70.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 41, P2 at 82, P3 at 87. Avg Turnaround = (41 + 82 + 87) / 3 = 70.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 8ms, P2 = 24ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.33 ms",
      "32.67 ms",
      "10.67 ms",
      "16.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 8, P2 at 32, P3 at 58. Avg Turnaround = (8 + 32 + 58) / 3 = 32.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 541 KB memory. Block chunks available are [481, 571, 661, 526] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "526 KB partition",
      "571 KB partition",
      "481 KB partition",
      "661 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 541 KB), which selects 571 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 161 KB memory. Block chunks available are [101, 191, 281, 146] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "146 KB partition",
      "101 KB partition",
      "191 KB partition",
      "281 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 161 KB), which selects 191 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 44ms, P2 = 27ms, and P3 = 33ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "73.00 ms",
      "23.67 ms",
      "20.00 ms",
      "34.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 44, P2 at 71, P3 at 104. Avg Turnaround = (44 + 71 + 104) / 3 = 73.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 31ms, P2 = 25ms, and P3 = 13ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.00 ms",
      "18.67 ms",
      "52.00 ms",
      "12.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 31, P2 at 56, P3 at 69. Avg Turnaround = (31 + 56 + 69) / 3 = 52.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 493 KB memory. Block chunks available are [433, 523, 613, 478] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "523 KB partition",
      "433 KB partition",
      "613 KB partition",
      "478 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 493 KB), which selects 523 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 39ms, and P3 = 34ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "33.00 ms",
      "21.67 ms",
      "24.33 ms",
      "63.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 65, P3 at 99. Avg Turnaround = (26 + 65 + 99) / 3 = 63.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 7, 6, 5, 5, 1, 2, 6]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔7➔6➔5➔5➔1➔2➔6. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 5ms, P2 = 21ms, and P3 = 43ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.00 ms",
      "8.67 ms",
      "21.33 ms",
      "33.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 5, P2 at 26, P3 at 69. Avg Turnaround = (5 + 26 + 69) / 3 = 33.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 33ms, P2 = 43ms, and P3 = 14ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.00 ms",
      "30.00 ms",
      "25.33 ms",
      "66.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 33, P2 at 76, P3 at 90. Avg Turnaround = (33 + 76 + 90) / 3 = 66.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 507 KB memory. Block chunks available are [447, 537, 627, 492] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "537 KB partition",
      "447 KB partition",
      "627 KB partition",
      "492 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 507 KB), which selects 537 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 355 KB memory. Block chunks available are [295, 385, 475, 340] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "475 KB partition",
      "340 KB partition",
      "385 KB partition",
      "295 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 355 KB), which selects 385 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 363 KB memory. Block chunks available are [303, 393, 483, 348] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "393 KB partition",
      "348 KB partition",
      "303 KB partition",
      "483 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 363 KB), which selects 393 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 3, 3, 6, 7, 2, 1, 6]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "5 page faults",
      "7 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔3➔3➔6➔7➔2➔1➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 1, 4, 5, 1, 7, 1, 3]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "7 page faults",
      "9 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔1➔4➔5➔1➔7➔1➔3. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 7, 7, 6, 1, 2, 3, 2]?",
    "options": [
      "8 page faults",
      "8 page faults",
      "6 page faults",
      "5 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔7➔7➔6➔1➔2➔3➔2. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 101 KB memory. Block chunks available are [41, 131, 221, 86] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "131 KB partition",
      "221 KB partition",
      "86 KB partition",
      "41 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 101 KB), which selects 131 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 7, 5, 6, 2, 2, 4, 5]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "5 page faults",
      "7 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔7➔5➔6➔2➔2➔4➔5. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 39ms, P2 = 41ms, and P3 = 17ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.33 ms",
      "26.67 ms",
      "72.00 ms",
      "32.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 39, P2 at 80, P3 at 97. Avg Turnaround = (39 + 80 + 97) / 3 = 72.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 3, 7, 2, 5, 7, 2, 4]?",
    "options": [
      "5 page faults",
      "6 page faults",
      "8 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 6➔3➔7➔2➔5➔7➔2➔4. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 5, 1, 3, 3, 7, 6, 4]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "7 page faults",
      "9 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 6➔5➔1➔3➔3➔7➔6➔4. Cache slots = 4. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 5, 3, 4, 1, 4, 4, 7]?",
    "options": [
      "5 page faults",
      "6 page faults",
      "8 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 6➔5➔3➔4➔1➔4➔4➔7. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 43ms, P2 = 17ms, and P3 = 10ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "9.00 ms",
      "23.33 ms",
      "20.00 ms",
      "57.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 43, P2 at 60, P3 at 70. Avg Turnaround = (43 + 60 + 70) / 3 = 57.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 273 KB memory. Block chunks available are [213, 303, 393, 258] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "213 KB partition",
      "303 KB partition",
      "258 KB partition",
      "393 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 273 KB), which selects 303 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 5, 6, 7, 3, 5, 5, 6]?",
    "options": [
      "6 page faults",
      "9 page faults",
      "8 page faults",
      "7 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 2➔5➔6➔7➔3➔5➔5➔6. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 7, 2, 1, 1, 6, 2, 6]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "5 page faults",
      "4 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔7➔2➔1➔1➔6➔2➔6. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 356 KB memory. Block chunks available are [296, 386, 476, 341] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "476 KB partition",
      "296 KB partition",
      "341 KB partition",
      "386 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 356 KB), which selects 386 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 32ms, P2 = 19ms, and P3 = 35ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "56.33 ms",
      "28.67 ms",
      "17.00 ms",
      "18.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 32, P2 at 51, P3 at 86. Avg Turnaround = (32 + 51 + 86) / 3 = 56.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 43ms, P2 = 13ms, and P3 = 31ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "29.00 ms",
      "14.67 ms",
      "18.67 ms",
      "62.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 43, P2 at 56, P3 at 87. Avg Turnaround = (43 + 56 + 87) / 3 = 62.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 30ms, P2 = 21ms, and P3 = 36ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "17.00 ms",
      "19.00 ms",
      "29.00 ms",
      "56.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 30, P2 at 51, P3 at 87. Avg Turnaround = (30 + 51 + 87) / 3 = 56.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 7, 2, 1, 7, 4, 6, 6]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔7➔2➔1➔7➔4➔6➔6. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 2, 7, 3, 2, 7, 6, 5]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔2➔7➔3➔2➔7➔6➔5. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 239 KB memory. Block chunks available are [179, 269, 359, 224] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "269 KB partition",
      "224 KB partition",
      "359 KB partition",
      "179 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 239 KB), which selects 269 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 4, 4, 5, 5, 2, 4, 1]?",
    "options": [
      "8 page faults",
      "3 page faults",
      "4 page faults",
      "6 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 1➔4➔4➔5➔5➔2➔4➔1. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 14ms, and P3 = 20ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "11.33 ms",
      "24.00 ms",
      "17.33 ms",
      "54.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 52, P3 at 72. Avg Turnaround = (38 + 52 + 72) / 3 = 54.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 7ms, P2 = 30ms, and P3 = 36ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "12.33 ms",
      "24.33 ms",
      "22.00 ms",
      "39.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 7, P2 at 37, P3 at 73. Avg Turnaround = (7 + 37 + 73) / 3 = 39.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 13ms, P2 = 35ms, and P3 = 9ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.67 ms",
      "19.00 ms",
      "16.00 ms",
      "39.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 13, P2 at 48, P3 at 57. Avg Turnaround = (13 + 48 + 57) / 3 = 39.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 22ms, P2 = 28ms, and P3 = 30ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "50.67 ms",
      "19.33 ms",
      "16.67 ms",
      "26.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 22, P2 at 50, P3 at 80. Avg Turnaround = (22 + 50 + 80) / 3 = 50.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 3, 7, 1, 4, 4, 6, 1]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 1➔3➔7➔1➔4➔4➔6➔1. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 22ms, P2 = 37ms, and P3 = 34ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "31.00 ms",
      "19.67 ms",
      "23.67 ms",
      "58.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 22, P2 at 59, P3 at 93. Avg Turnaround = (22 + 59 + 93) / 3 = 58.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 1, 2, 6, 5, 1, 2, 2]?",
    "options": [
      "4 page faults",
      "5 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 7➔1➔2➔6➔5➔1➔2➔2. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 35ms, P2 = 10ms, and P3 = 19ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.00 ms",
      "21.33 ms",
      "48.00 ms",
      "9.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 35, P2 at 45, P3 at 64. Avg Turnaround = (35 + 45 + 64) / 3 = 48.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 312 KB memory. Block chunks available are [252, 342, 432, 297] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "297 KB partition",
      "252 KB partition",
      "342 KB partition",
      "432 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 312 KB), which selects 342 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [2, 4, 3, 5, 1, 7, 3, 6]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "7 page faults",
      "9 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔4➔3➔5➔1➔7➔3➔6. Cache slots = 5. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 424 KB memory. Block chunks available are [364, 454, 544, 409] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "364 KB partition",
      "544 KB partition",
      "409 KB partition",
      "454 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 424 KB), which selects 454 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 6, 4, 3, 7, 3, 5, 3]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔6➔4➔3➔7➔3➔5➔3. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 378 KB memory. Block chunks available are [318, 408, 498, 363] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "408 KB partition",
      "498 KB partition",
      "363 KB partition",
      "318 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 378 KB), which selects 408 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 6, 2, 6, 6, 7, 3, 5]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔6➔2➔6➔6➔7➔3➔5. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 3, 7, 1, 2, 6, 4, 1]?",
    "options": [
      "7 page faults",
      "9 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔3➔7➔1➔2➔6➔4➔1. Cache slots = 4. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 6, 5, 3, 5, 3, 6, 6]?",
    "options": [
      "8 page faults",
      "3 page faults",
      "6 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 1➔6➔5➔3➔5➔3➔6➔6. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 202 KB memory. Block chunks available are [142, 232, 322, 187] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "187 KB partition",
      "232 KB partition",
      "322 KB partition",
      "142 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 202 KB), which selects 232 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 338 KB memory. Block chunks available are [278, 368, 458, 323] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "323 KB partition",
      "368 KB partition",
      "278 KB partition",
      "458 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 338 KB), which selects 368 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 2, 6, 1, 5, 5, 3, 5]?",
    "options": [
      "7 page faults",
      "8 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔2➔6➔1➔5➔5➔3➔5. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 7, 2, 7, 1, 5, 6, 7]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔7➔2➔7➔1➔5➔6➔7. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 12ms, P2 = 16ms, and P3 = 25ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "31.00 ms",
      "17.67 ms",
      "13.67 ms",
      "9.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 12, P2 at 28, P3 at 53. Avg Turnaround = (12 + 28 + 53) / 3 = 31.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 34ms, P2 = 15ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.33 ms",
      "7.00 ms",
      "46.00 ms",
      "18.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 34, P2 at 49, P3 at 55. Avg Turnaround = (34 + 49 + 55) / 3 = 46.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 5, 3, 3, 7, 1, 4, 4]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "5 page faults",
      "4 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 1➔5➔3➔3➔7➔1➔4➔4. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 27ms, P2 = 8ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "4.67 ms",
      "34.33 ms",
      "13.67 ms",
      "11.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 27, P2 at 35, P3 at 41. Avg Turnaround = (27 + 35 + 41) / 3 = 34.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 41ms, P2 = 32ms, and P3 = 36ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "24.33 ms",
      "22.67 ms",
      "36.33 ms",
      "74.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 41, P2 at 73, P3 at 109. Avg Turnaround = (41 + 73 + 109) / 3 = 74.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 20ms, P2 = 37ms, and P3 = 19ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.33 ms",
      "19.00 ms",
      "51.00 ms",
      "18.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 20, P2 at 57, P3 at 76. Avg Turnaround = (20 + 57 + 76) / 3 = 51.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 100 KB memory. Block chunks available are [40, 130, 220, 85] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "220 KB partition",
      "40 KB partition",
      "130 KB partition",
      "85 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 100 KB), which selects 130 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 34ms, P2 = 30ms, and P3 = 39ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "67.00 ms",
      "23.00 ms",
      "21.33 ms",
      "34.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 34, P2 at 64, P3 at 103. Avg Turnaround = (34 + 64 + 103) / 3 = 67.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 469 KB memory. Block chunks available are [409, 499, 589, 454] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "454 KB partition",
      "589 KB partition",
      "409 KB partition",
      "499 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 469 KB), which selects 499 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 19ms, P2 = 28ms, and P3 = 14ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "42.33 ms",
      "14.00 ms",
      "15.67 ms",
      "20.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 19, P2 at 47, P3 at 61. Avg Turnaround = (19 + 47 + 61) / 3 = 42.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 19ms, P2 = 14ms, and P3 = 41ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "18.33 ms",
      "42.00 ms",
      "11.00 ms",
      "24.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 19, P2 at 33, P3 at 74. Avg Turnaround = (19 + 33 + 74) / 3 = 42.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 37ms, P2 = 7ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "43.33 ms",
      "14.67 ms",
      "16.33 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 37, P2 at 44, P3 at 49. Avg Turnaround = (37 + 44 + 49) / 3 = 43.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 29ms, P2 = 23ms, and P3 = 21ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "51.33 ms",
      "17.33 ms",
      "24.33 ms",
      "14.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 29, P2 at 52, P3 at 73. Avg Turnaround = (29 + 52 + 73) / 3 = 51.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 288 KB memory. Block chunks available are [228, 318, 408, 273] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "408 KB partition",
      "318 KB partition",
      "228 KB partition",
      "273 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 288 KB), which selects 318 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 27ms, P2 = 16ms, and P3 = 28ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "47.00 ms",
      "23.67 ms",
      "14.33 ms",
      "14.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 27, P2 at 43, P3 at 71. Avg Turnaround = (27 + 43 + 71) / 3 = 47.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 8ms, P2 = 30ms, and P3 = 37ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.00 ms",
      "40.33 ms",
      "22.33 ms",
      "12.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 8, P2 at 38, P3 at 75. Avg Turnaround = (8 + 38 + 75) / 3 = 40.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [2, 3, 3, 7, 7, 3, 5, 1]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "8 page faults",
      "7 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 2➔3➔3➔7➔7➔3➔5➔1. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 582 KB memory. Block chunks available are [522, 612, 702, 567] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "522 KB partition",
      "612 KB partition",
      "567 KB partition",
      "702 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 582 KB), which selects 612 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 14ms, and P3 = 35ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.00 ms",
      "16.33 ms",
      "47.00 ms",
      "13.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 40, P3 at 75. Avg Turnaround = (26 + 40 + 75) / 3 = 47.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 5, 5, 4, 4, 5, 6, 5]?",
    "options": [
      "2 page faults",
      "3 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 5➔5➔5➔4➔4➔5➔6➔5. Cache slots = 3. Total page fault hits = 3 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 12ms, P2 = 38ms, and P3 = 10ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.00 ms",
      "16.67 ms",
      "40.67 ms",
      "16.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 12, P2 at 50, P3 at 60. Avg Turnaround = (12 + 50 + 60) / 3 = 40.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 563 KB memory. Block chunks available are [503, 593, 683, 548] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "683 KB partition",
      "503 KB partition",
      "548 KB partition",
      "593 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 563 KB), which selects 593 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 190 KB memory. Block chunks available are [130, 220, 310, 175] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "310 KB partition",
      "130 KB partition",
      "220 KB partition",
      "175 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 190 KB), which selects 220 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 231 KB memory. Block chunks available are [171, 261, 351, 216] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "351 KB partition",
      "261 KB partition",
      "171 KB partition",
      "216 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 231 KB), which selects 261 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 28ms, P2 = 29ms, and P3 = 20ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "54.00 ms",
      "25.67 ms",
      "16.33 ms",
      "19.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 28, P2 at 57, P3 at 77. Avg Turnaround = (28 + 57 + 77) / 3 = 54.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 10ms, P2 = 11ms, and P3 = 29ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "13.33 ms",
      "7.00 ms",
      "27.00 ms",
      "16.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 10, P2 at 21, P3 at 50. Avg Turnaround = (10 + 21 + 50) / 3 = 27.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 13ms, P2 = 40ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.67 ms",
      "15.33 ms",
      "17.67 ms",
      "41.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 13, P2 at 53, P3 at 59. Avg Turnaround = (13 + 53 + 59) / 3 = 41.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 4, 2, 4, 4, 3, 6, 7]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔4➔2➔4➔4➔3➔6➔7. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 32ms, P2 = 15ms, and P3 = 30ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.00 ms",
      "52.00 ms",
      "25.67 ms",
      "15.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 32, P2 at 47, P3 at 77. Avg Turnaround = (32 + 47 + 77) / 3 = 52.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 3, 5, 2, 5, 1, 7, 6]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "7 page faults",
      "9 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔3➔5➔2➔5➔1➔7➔6. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 5, 5, 3, 2, 6, 2, 6]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔5➔5➔3➔2➔6➔2➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 39ms, P2 = 19ms, and P3 = 14ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "11.00 ms",
      "24.00 ms",
      "19.33 ms",
      "56.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 39, P2 at 58, P3 at 72. Avg Turnaround = (39 + 58 + 72) / 3 = 56.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 37ms, P2 = 38ms, and P3 = 16ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.00 ms",
      "67.67 ms",
      "18.00 ms",
      "30.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 37, P2 at 75, P3 at 91. Avg Turnaround = (37 + 75 + 91) / 3 = 67.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 9ms, P2 = 23ms, and P3 = 40ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "24.00 ms",
      "21.00 ms",
      "37.67 ms",
      "10.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 9, P2 at 32, P3 at 72. Avg Turnaround = (9 + 32 + 72) / 3 = 37.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 123 KB memory. Block chunks available are [63, 153, 243, 108] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "63 KB partition",
      "108 KB partition",
      "243 KB partition",
      "153 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 123 KB), which selects 153 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 35ms, P2 = 43ms, and P3 = 28ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "73.00 ms",
      "26.00 ms",
      "23.67 ms",
      "35.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 35, P2 at 78, P3 at 106. Avg Turnaround = (35 + 78 + 106) / 3 = 73.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 6, 4, 3, 2, 7, 7, 5]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "7 page faults",
      "9 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔6➔4➔3➔2➔7➔7➔5. Cache slots = 4. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 33ms, P2 = 17ms, and P3 = 43ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.00 ms",
      "16.67 ms",
      "58.67 ms",
      "31.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 33, P2 at 50, P3 at 93. Avg Turnaround = (33 + 50 + 93) / 3 = 58.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 2, 6, 3, 3, 4, 1, 7]?",
    "options": [
      "9 page faults",
      "8 page faults",
      "7 page faults",
      "6 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 5➔2➔6➔3➔3➔4➔1➔7. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 3, 5, 4, 3, 4, 5, 7]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "6 page faults",
      "3 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 5➔3➔5➔4➔3➔4➔5➔7. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [2, 2, 2, 4, 1, 1, 3, 3]?",
    "options": [
      "4 page faults",
      "3 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 2➔2➔2➔4➔1➔1➔3➔3. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 5, 4, 1, 1, 6, 2, 3]?",
    "options": [
      "6 page faults",
      "7 page faults",
      "9 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 7➔5➔4➔1➔1➔6➔2➔3. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 374 KB memory. Block chunks available are [314, 404, 494, 359] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "359 KB partition",
      "494 KB partition",
      "404 KB partition",
      "314 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 374 KB), which selects 404 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 5, 6, 7, 5, 7, 1, 5]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 3➔5➔6➔7➔5➔7➔1➔5. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 122 KB memory. Block chunks available are [62, 152, 242, 107] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "242 KB partition",
      "152 KB partition",
      "62 KB partition",
      "107 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 122 KB), which selects 152 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 345 KB memory. Block chunks available are [285, 375, 465, 330] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "465 KB partition",
      "285 KB partition",
      "375 KB partition",
      "330 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 345 KB), which selects 375 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 6, 3, 2, 5, 2, 2, 7]?",
    "options": [
      "7 page faults",
      "4 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔6➔3➔2➔5➔2➔2➔7. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 423 KB memory. Block chunks available are [363, 453, 543, 408] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "363 KB partition",
      "453 KB partition",
      "543 KB partition",
      "408 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 423 KB), which selects 453 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 390 KB memory. Block chunks available are [330, 420, 510, 375] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "330 KB partition",
      "510 KB partition",
      "375 KB partition",
      "420 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 390 KB), which selects 420 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 24ms, and P3 = 23ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "49.67 ms",
      "16.67 ms",
      "15.67 ms",
      "24.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 50, P3 at 73. Avg Turnaround = (26 + 50 + 73) / 3 = 49.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 2, 3, 3, 2, 5, 7, 4]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "7 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 5➔2➔3➔3➔2➔5➔7➔4. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 8ms, P2 = 26ms, and P3 = 36ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.33 ms",
      "20.67 ms",
      "37.33 ms",
      "11.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 8, P2 at 34, P3 at 70. Avg Turnaround = (8 + 34 + 70) / 3 = 37.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 25ms, P2 = 12ms, and P3 = 18ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "12.33 ms",
      "18.33 ms",
      "10.00 ms",
      "39.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 25, P2 at 37, P3 at 55. Avg Turnaround = (25 + 37 + 55) / 3 = 39.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 3, 1, 1, 4, 7, 6, 1]?",
    "options": [
      "7 page faults",
      "4 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔3➔1➔1➔4➔7➔6➔1. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [5, 5, 6, 5, 4, 3, 1, 2]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 5➔5➔6➔5➔4➔3➔1➔2. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 166 KB memory. Block chunks available are [106, 196, 286, 151] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "286 KB partition",
      "106 KB partition",
      "196 KB partition",
      "151 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 166 KB), which selects 196 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 296 KB memory. Block chunks available are [236, 326, 416, 281] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "326 KB partition",
      "281 KB partition",
      "236 KB partition",
      "416 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 296 KB), which selects 326 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 526 KB memory. Block chunks available are [466, 556, 646, 511] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "556 KB partition",
      "511 KB partition",
      "646 KB partition",
      "466 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 526 KB), which selects 556 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 468 KB memory. Block chunks available are [408, 498, 588, 453] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "588 KB partition",
      "453 KB partition",
      "408 KB partition",
      "498 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 468 KB), which selects 498 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 394 KB memory. Block chunks available are [334, 424, 514, 379] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "334 KB partition",
      "379 KB partition",
      "514 KB partition",
      "424 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 394 KB), which selects 424 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 2, 5, 3, 5, 2, 5, 6]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 7➔2➔5➔3➔5➔2➔5➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 236 KB memory. Block chunks available are [176, 266, 356, 221] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "266 KB partition",
      "356 KB partition",
      "176 KB partition",
      "221 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 236 KB), which selects 266 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 17ms, P2 = 40ms, and P3 = 11ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.00 ms",
      "17.00 ms",
      "47.33 ms",
      "22.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 17, P2 at 57, P3 at 68. Avg Turnaround = (17 + 57 + 68) / 3 = 47.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 6, 1, 6, 4, 6, 4, 2]?",
    "options": [
      "6 page faults",
      "3 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 4➔6➔1➔6➔4➔6➔4➔2. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 242 KB memory. Block chunks available are [182, 272, 362, 227] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "362 KB partition",
      "227 KB partition",
      "272 KB partition",
      "182 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 242 KB), which selects 272 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 18ms, P2 = 30ms, and P3 = 7ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.00 ms",
      "40.33 ms",
      "18.33 ms",
      "12.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 18, P2 at 48, P3 at 55. Avg Turnaround = (18 + 48 + 55) / 3 = 40.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 4, 2, 4, 6, 4, 6, 3]?",
    "options": [
      "8 page faults",
      "3 page faults",
      "6 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 6➔4➔2➔4➔6➔4➔6➔3. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 6, 1, 5, 1, 6, 3, 3]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔6➔1➔5➔1➔6➔3➔3. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 15ms, P2 = 6ms, and P3 = 42ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "21.00 ms",
      "7.00 ms",
      "16.00 ms",
      "33.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 15, P2 at 21, P3 at 63. Avg Turnaround = (15 + 21 + 63) / 3 = 33.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 31ms, and P3 = 10ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.00 ms",
      "13.67 ms",
      "22.33 ms",
      "50.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 57, P3 at 67. Avg Turnaround = (26 + 57 + 67) / 3 = 50.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 207 KB memory. Block chunks available are [147, 237, 327, 192] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "192 KB partition",
      "147 KB partition",
      "237 KB partition",
      "327 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 207 KB), which selects 237 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 5ms, P2 = 15ms, and P3 = 15ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "6.67 ms",
      "11.67 ms",
      "20.00 ms",
      "10.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 5, P2 at 20, P3 at 35. Avg Turnaround = (5 + 20 + 35) / 3 = 20.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 400 KB memory. Block chunks available are [340, 430, 520, 385] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "385 KB partition",
      "340 KB partition",
      "520 KB partition",
      "430 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 400 KB), which selects 430 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 472 KB memory. Block chunks available are [412, 502, 592, 457] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "412 KB partition",
      "457 KB partition",
      "592 KB partition",
      "502 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 472 KB), which selects 502 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 550 KB memory. Block chunks available are [490, 580, 670, 535] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "670 KB partition",
      "535 KB partition",
      "580 KB partition",
      "490 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 550 KB), which selects 580 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 2, 3, 5, 3, 7, 2, 5]?",
    "options": [
      "8 page faults",
      "3 page faults",
      "4 page faults",
      "6 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 3➔2➔3➔5➔3➔7➔2➔5. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 25ms, and P3 = 35ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "28.67 ms",
      "54.33 ms",
      "17.00 ms",
      "20.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 51, P3 at 86. Avg Turnaround = (26 + 51 + 86) / 3 = 54.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 8ms, P2 = 40ms, and P3 = 11ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.00 ms",
      "17.00 ms",
      "19.67 ms",
      "38.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 8, P2 at 48, P3 at 59. Avg Turnaround = (8 + 48 + 59) / 3 = 38.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 1, 2, 7, 1, 2, 6, 5]?",
    "options": [
      "5 page faults",
      "6 page faults",
      "8 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 5➔1➔2➔7➔1➔2➔6➔5. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 23ms, P2 = 5ms, and P3 = 19ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "32.67 ms",
      "9.33 ms",
      "15.67 ms",
      "8.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 23, P2 at 28, P3 at 47. Avg Turnaround = (23 + 28 + 47) / 3 = 32.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 233 KB memory. Block chunks available are [173, 263, 353, 218] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "353 KB partition",
      "173 KB partition",
      "218 KB partition",
      "263 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 233 KB), which selects 263 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [2, 2, 1, 7, 4, 4, 1, 3]?",
    "options": [
      "7 page faults",
      "8 page faults",
      "5 page faults",
      "4 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔2➔1➔7➔4➔4➔1➔3. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 44ms, P2 = 25ms, and P3 = 28ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "32.33 ms",
      "23.00 ms",
      "70.00 ms",
      "17.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 44, P2 at 69, P3 at 97. Avg Turnaround = (44 + 69 + 97) / 3 = 70.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 342 KB memory. Block chunks available are [282, 372, 462, 327] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "282 KB partition",
      "372 KB partition",
      "327 KB partition",
      "462 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 342 KB), which selects 372 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 14ms, P2 = 15ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "11.33 ms",
      "6.67 ms",
      "25.67 ms",
      "9.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 14, P2 at 29, P3 at 34. Avg Turnaround = (14 + 29 + 34) / 3 = 25.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 14ms, P2 = 17ms, and P3 = 28ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.00 ms",
      "34.67 ms",
      "10.33 ms",
      "19.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 14, P2 at 31, P3 at 59. Avg Turnaround = (14 + 31 + 59) / 3 = 34.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 5, 4, 1, 6, 6, 5, 3]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "5 page faults",
      "4 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔5➔4➔1➔6➔6➔5➔3. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 11ms, P2 = 5ms, and P3 = 23ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "13.00 ms",
      "5.33 ms",
      "9.33 ms",
      "22.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 11, P2 at 16, P3 at 39. Avg Turnaround = (11 + 16 + 39) / 3 = 22.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 6, 7, 1, 7, 5, 1, 4]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔6➔7➔1➔7➔5➔1➔4. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 7ms, P2 = 13ms, and P3 = 31ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.67 ms",
      "6.67 ms",
      "17.00 ms",
      "26.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 7, P2 at 20, P3 at 51. Avg Turnaround = (7 + 20 + 51) / 3 = 26.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 218 KB memory. Block chunks available are [158, 248, 338, 203] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "203 KB partition",
      "248 KB partition",
      "158 KB partition",
      "338 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 218 KB), which selects 248 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 6, 2, 3, 2, 4, 5, 4]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔6➔2➔3➔2➔4➔5➔4. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 223 KB memory. Block chunks available are [163, 253, 343, 208] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "343 KB partition",
      "253 KB partition",
      "163 KB partition",
      "208 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 223 KB), which selects 253 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 3, 2, 4, 3, 6, 5, 3]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 6➔3➔2➔4➔3➔6➔5➔3. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 5, 3, 2, 7, 5, 2, 5]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "5 page faults",
      "7 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 6➔5➔3➔2➔7➔5➔2➔5. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 35ms, P2 = 6ms, and P3 = 16ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "44.33 ms",
      "7.33 ms",
      "19.00 ms",
      "13.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 35, P2 at 41, P3 at 57. Avg Turnaround = (35 + 41 + 57) / 3 = 44.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 33ms, P2 = 37ms, and P3 = 9ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "60.67 ms",
      "23.33 ms",
      "15.33 ms",
      "26.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 33, P2 at 70, P3 at 79. Avg Turnaround = (33 + 70 + 79) / 3 = 60.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 511 KB memory. Block chunks available are [451, 541, 631, 496] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "451 KB partition",
      "631 KB partition",
      "496 KB partition",
      "541 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 511 KB), which selects 541 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 4, 4, 7, 6, 4, 2, 7]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "3 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 6➔4➔4➔7➔6➔4➔2➔7. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 480 KB memory. Block chunks available are [420, 510, 600, 465] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "465 KB partition",
      "510 KB partition",
      "600 KB partition",
      "420 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 480 KB), which selects 510 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 152 KB memory. Block chunks available are [92, 182, 272, 137] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "92 KB partition",
      "272 KB partition",
      "182 KB partition",
      "137 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 152 KB), which selects 182 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 36ms, P2 = 41ms, and P3 = 10ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.67 ms",
      "66.67 ms",
      "29.00 ms",
      "17.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 36, P2 at 77, P3 at 87. Avg Turnaround = (36 + 77 + 87) / 3 = 66.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 24ms, P2 = 6ms, and P3 = 40ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "10.00 ms",
      "15.33 ms",
      "23.33 ms",
      "41.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 24, P2 at 30, P3 at 70. Avg Turnaround = (24 + 30 + 70) / 3 = 41.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 450 KB memory. Block chunks available are [390, 480, 570, 435] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "570 KB partition",
      "390 KB partition",
      "480 KB partition",
      "435 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 450 KB), which selects 480 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 590 KB memory. Block chunks available are [530, 620, 710, 575] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "575 KB partition",
      "530 KB partition",
      "620 KB partition",
      "710 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 590 KB), which selects 620 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 4, 5, 3, 6, 3, 3, 1]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 1➔4➔5➔3➔6➔3➔3➔1. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 3, 5, 6, 5, 6, 7, 1]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "7 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 7➔3➔5➔6➔5➔6➔7➔1. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 41ms, P2 = 41ms, and P3 = 14ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "18.33 ms",
      "73.00 ms",
      "32.00 ms",
      "27.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 41, P2 at 82, P3 at 96. Avg Turnaround = (41 + 82 + 96) / 3 = 73.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 479 KB memory. Block chunks available are [419, 509, 599, 464] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "419 KB partition",
      "509 KB partition",
      "599 KB partition",
      "464 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 479 KB), which selects 509 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 3, 6, 6, 4, 2, 5, 4]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "7 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 6➔3➔6➔6➔4➔2➔5➔4. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 37ms, P2 = 25ms, and P3 = 7ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "10.67 ms",
      "23.00 ms",
      "20.67 ms",
      "56.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 37, P2 at 62, P3 at 69. Avg Turnaround = (37 + 62 + 69) / 3 = 56.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 467 KB memory. Block chunks available are [407, 497, 587, 452] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "452 KB partition",
      "587 KB partition",
      "407 KB partition",
      "497 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 467 KB), which selects 497 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 40ms, P2 = 9ms, and P3 = 8ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.00 ms",
      "16.33 ms",
      "5.67 ms",
      "48.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 40, P2 at 49, P3 at 57. Avg Turnaround = (40 + 49 + 57) / 3 = 48.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 203 KB memory. Block chunks available are [143, 233, 323, 188] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "188 KB partition",
      "233 KB partition",
      "143 KB partition",
      "323 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 203 KB), which selects 233 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 4, 3, 3, 4, 1, 3, 3]?",
    "options": [
      "4 page faults",
      "3 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔4➔3➔3➔4➔1➔3➔3. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 5, 7, 7, 4, 1, 5, 1]?",
    "options": [
      "4 page faults",
      "3 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 7➔5➔7➔7➔4➔1➔5➔1. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 19ms, P2 = 36ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.67 ms",
      "51.67 ms",
      "27.00 ms",
      "18.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 19, P2 at 55, P3 at 81. Avg Turnaround = (19 + 55 + 81) / 3 = 51.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 6, 5, 6, 2, 3, 3, 4]?",
    "options": [
      "4 page faults",
      "7 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔6➔5➔6➔2➔3➔3➔4. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 410 KB memory. Block chunks available are [350, 440, 530, 395] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "350 KB partition",
      "440 KB partition",
      "530 KB partition",
      "395 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 410 KB), which selects 440 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [2, 4, 7, 1, 1, 6, 7, 3]?",
    "options": [
      "6 page faults",
      "5 page faults",
      "8 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 2➔4➔7➔1➔1➔6➔7➔3. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 28ms, P2 = 6ms, and P3 = 21ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "39.00 ms",
      "18.33 ms",
      "11.33 ms",
      "9.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 28, P2 at 34, P3 at 55. Avg Turnaround = (28 + 34 + 55) / 3 = 39.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 25ms, P2 = 41ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "22.00 ms",
      "65.00 ms",
      "26.33 ms",
      "34.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 25, P2 at 66, P3 at 104. Avg Turnaround = (25 + 66 + 104) / 3 = 65.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 36ms, P2 = 25ms, and P3 = 24ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.33 ms",
      "60.67 ms",
      "16.33 ms",
      "28.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 36, P2 at 61, P3 at 85. Avg Turnaround = (36 + 61 + 85) / 3 = 60.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 5ms, P2 = 40ms, and P3 = 23ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "21.00 ms",
      "22.67 ms",
      "15.00 ms",
      "39.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 5, P2 at 45, P3 at 68. Avg Turnaround = (5 + 45 + 68) / 3 = 39.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 9ms, P2 = 24ms, and P3 = 44ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "22.67 ms",
      "11.00 ms",
      "25.67 ms",
      "39.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 9, P2 at 33, P3 at 77. Avg Turnaround = (9 + 33 + 77) / 3 = 39.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 4, 4, 1, 7, 4, 2, 2]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "4 page faults",
      "3 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔4➔4➔1➔7➔4➔2➔2. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 21ms, P2 = 32ms, and P3 = 39ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "30.67 ms",
      "55.33 ms",
      "17.67 ms",
      "23.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 21, P2 at 53, P3 at 92. Avg Turnaround = (21 + 53 + 92) / 3 = 55.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 5ms, P2 = 13ms, and P3 = 11ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "9.67 ms",
      "6.00 ms",
      "17.33 ms",
      "8.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 5, P2 at 18, P3 at 29. Avg Turnaround = (5 + 18 + 29) / 3 = 17.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 31ms, P2 = 20ms, and P3 = 27ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "53.33 ms",
      "17.00 ms",
      "15.67 ms",
      "26.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 31, P2 at 51, P3 at 78. Avg Turnaround = (31 + 51 + 78) / 3 = 53.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 2, 2, 2, 5, 7, 6, 4]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 3➔2➔2➔2➔5➔7➔6➔4. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 10ms, P2 = 10ms, and P3 = 36ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.33 ms",
      "18.67 ms",
      "28.67 ms",
      "6.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 10, P2 at 20, P3 at 56. Avg Turnaround = (10 + 20 + 56) / 3 = 28.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 538 KB memory. Block chunks available are [478, 568, 658, 523] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "568 KB partition",
      "523 KB partition",
      "478 KB partition",
      "658 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 538 KB), which selects 568 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 35ms, P2 = 36ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.67 ms",
      "67.67 ms",
      "20.67 ms",
      "32.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 35, P2 at 71, P3 at 97. Avg Turnaround = (35 + 71 + 97) / 3 = 67.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 4, 5, 5, 7, 4, 3, 1]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔4➔5➔5➔7➔4➔3➔1. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 25ms, P2 = 12ms, and P3 = 31ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "12.33 ms",
      "14.33 ms",
      "43.33 ms",
      "22.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 25, P2 at 37, P3 at 68. Avg Turnaround = (25 + 37 + 68) / 3 = 43.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 30ms, and P3 = 42ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "32.67 ms",
      "60.00 ms",
      "18.67 ms",
      "24.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 56, P3 at 98. Avg Turnaround = (26 + 56 + 98) / 3 = 60.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 1, 3, 4, 4, 4, 7, 2]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 2➔1➔3➔4➔4➔4➔7➔2. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 16ms, P2 = 33ms, and P3 = 21ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.33 ms",
      "45.00 ms",
      "16.33 ms",
      "18.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 16, P2 at 49, P3 at 70. Avg Turnaround = (16 + 49 + 70) / 3 = 45.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 13ms, P2 = 16ms, and P3 = 32ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.00 ms",
      "34.33 ms",
      "20.33 ms",
      "9.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 13, P2 at 29, P3 at 61. Avg Turnaround = (13 + 29 + 61) / 3 = 34.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 186 KB memory. Block chunks available are [126, 216, 306, 171] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "171 KB partition",
      "216 KB partition",
      "126 KB partition",
      "306 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 186 KB), which selects 216 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 463 KB memory. Block chunks available are [403, 493, 583, 448] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "448 KB partition",
      "493 KB partition",
      "583 KB partition",
      "403 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 463 KB), which selects 493 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [2, 4, 7, 1, 3, 5, 1, 2]?",
    "options": [
      "9 page faults",
      "7 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 2➔4➔7➔1➔3➔5➔1➔2. Cache slots = 5. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 5, 3, 2, 2, 3, 6, 2]?",
    "options": [
      "6 page faults",
      "3 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 5➔5➔3➔2➔2➔3➔6➔2. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [2, 7, 4, 6, 3, 2, 3, 6]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "5 page faults",
      "4 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔7➔4➔6➔3➔2➔3➔6. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 135 KB memory. Block chunks available are [75, 165, 255, 120] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "75 KB partition",
      "165 KB partition",
      "255 KB partition",
      "120 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 135 KB), which selects 165 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 3, 6, 7, 3, 2, 3, 1]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔3➔6➔7➔3➔2➔3➔1. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 315 KB memory. Block chunks available are [255, 345, 435, 300] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "345 KB partition",
      "300 KB partition",
      "255 KB partition",
      "435 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 315 KB), which selects 345 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 183 KB memory. Block chunks available are [123, 213, 303, 168] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "168 KB partition",
      "213 KB partition",
      "123 KB partition",
      "303 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 183 KB), which selects 213 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 7, 3, 3, 6, 1, 3, 1]?",
    "options": [
      "5 page faults",
      "7 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔7➔3➔3➔6➔1➔3➔1. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 561 KB memory. Block chunks available are [501, 591, 681, 546] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "681 KB partition",
      "591 KB partition",
      "546 KB partition",
      "501 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 561 KB), which selects 591 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 2, 4, 5, 3, 4, 7, 2]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 5➔2➔4➔5➔3➔4➔7➔2. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 175 KB memory. Block chunks available are [115, 205, 295, 160] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "295 KB partition",
      "160 KB partition",
      "115 KB partition",
      "205 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 175 KB), which selects 205 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 41ms, P2 = 17ms, and P3 = 41ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.33 ms",
      "19.33 ms",
      "33.00 ms",
      "66.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 41, P2 at 58, P3 at 99. Avg Turnaround = (41 + 58 + 99) / 3 = 66.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 6, 6, 1, 6, 6, 1, 4]?",
    "options": [
      "3 page faults",
      "8 page faults",
      "4 page faults",
      "6 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔6➔6➔1➔6➔6➔1➔4. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 28ms, P2 = 11ms, and P3 = 20ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "42.00 ms",
      "13.00 ms",
      "19.67 ms",
      "10.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 28, P2 at 39, P3 at 59. Avg Turnaround = (28 + 39 + 59) / 3 = 42.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 5, 2, 7, 5, 5, 5, 1]?",
    "options": [
      "3 page faults",
      "4 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 5➔5➔2➔7➔5➔5➔5➔1. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 7, 6, 4, 7, 2, 5, 7]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔7➔6➔4➔7➔2➔5➔7. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 228 KB memory. Block chunks available are [168, 258, 348, 213] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "258 KB partition",
      "348 KB partition",
      "168 KB partition",
      "213 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 228 KB), which selects 258 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 2, 6, 6, 1, 1, 7, 5]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔2➔6➔6➔1➔1➔7➔5. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 5, 3, 7, 3, 7, 5, 3]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "3 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 2➔5➔3➔7➔3➔7➔5➔3. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 307 KB memory. Block chunks available are [247, 337, 427, 292] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "337 KB partition",
      "292 KB partition",
      "427 KB partition",
      "247 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 307 KB), which selects 337 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 10ms, P2 = 39ms, and P3 = 44ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "50.67 ms",
      "31.00 ms",
      "27.67 ms",
      "16.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 10, P2 at 49, P3 at 93. Avg Turnaround = (10 + 49 + 93) / 3 = 50.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [5, 6, 3, 3, 1, 1, 1, 5]?",
    "options": [
      "4 page faults",
      "3 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔6➔3➔3➔1➔1➔1➔5. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 11ms, P2 = 41ms, and P3 = 11ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "17.33 ms",
      "42.00 ms",
      "21.00 ms",
      "17.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 11, P2 at 52, P3 at 63. Avg Turnaround = (11 + 52 + 63) / 3 = 42.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 535 KB memory. Block chunks available are [475, 565, 655, 520] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "655 KB partition",
      "475 KB partition",
      "520 KB partition",
      "565 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 535 KB), which selects 565 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [2, 1, 4, 1, 4, 6, 5, 5]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "5 page faults",
      "7 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔1➔4➔1➔4➔6➔5➔5. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 515 KB memory. Block chunks available are [455, 545, 635, 500] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "500 KB partition",
      "635 KB partition",
      "455 KB partition",
      "545 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 515 KB), which selects 545 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 581 KB memory. Block chunks available are [521, 611, 701, 566] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "611 KB partition",
      "566 KB partition",
      "701 KB partition",
      "521 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 581 KB), which selects 611 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 7, 1, 5, 6, 2, 2, 2]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔7➔1➔5➔6➔2➔2➔2. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 25ms, P2 = 36ms, and P3 = 35ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "32.00 ms",
      "23.67 ms",
      "20.33 ms",
      "60.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 25, P2 at 61, P3 at 96. Avg Turnaround = (25 + 61 + 96) / 3 = 60.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [1, 7, 3, 1, 4, 7, 1, 4]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 1➔7➔3➔1➔4➔7➔1➔4. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 15ms, P2 = 38ms, and P3 = 40ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "31.00 ms",
      "17.67 ms",
      "53.67 ms",
      "26.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 15, P2 at 53, P3 at 93. Avg Turnaround = (15 + 53 + 93) / 3 = 53.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 16ms, P2 = 30ms, and P3 = 8ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "38.67 ms",
      "15.33 ms",
      "12.67 ms",
      "18.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 16, P2 at 46, P3 at 54. Avg Turnaround = (16 + 46 + 54) / 3 = 38.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 6ms, P2 = 17ms, and P3 = 42ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "21.67 ms",
      "7.67 ms",
      "19.67 ms",
      "31.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 6, P2 at 23, P3 at 65. Avg Turnaround = (6 + 23 + 65) / 3 = 31.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 35ms, P2 = 19ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "8.33 ms",
      "18.00 ms",
      "20.00 ms",
      "49.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 35, P2 at 54, P3 at 60. Avg Turnaround = (35 + 54 + 60) / 3 = 49.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 5, 2, 2, 4, 5, 5, 1]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "3 page faults",
      "6 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔5➔2➔2➔4➔5➔5➔1. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 34ms, P2 = 23ms, and P3 = 13ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.00 ms",
      "12.00 ms",
      "23.33 ms",
      "53.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 34, P2 at 57, P3 at 70. Avg Turnaround = (34 + 57 + 70) / 3 = 53.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 40ms, P2 = 21ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.67 ms",
      "29.00 ms",
      "62.67 ms",
      "20.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 40, P2 at 61, P3 at 87. Avg Turnaround = (40 + 61 + 87) / 3 = 62.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 39ms, P2 = 24ms, and P3 = 17ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "13.67 ms",
      "26.67 ms",
      "60.67 ms",
      "21.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 39, P2 at 63, P3 at 80. Avg Turnaround = (39 + 63 + 80) / 3 = 60.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 471 KB memory. Block chunks available are [411, 501, 591, 456] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "456 KB partition",
      "591 KB partition",
      "411 KB partition",
      "501 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 471 KB), which selects 501 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 23ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "18.00 ms",
      "43.00 ms",
      "9.33 ms",
      "16.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 49, P3 at 54. Avg Turnaround = (26 + 49 + 54) / 3 = 43.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 36ms, P2 = 24ms, and P3 = 42ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "22.00 ms",
      "66.00 ms",
      "20.00 ms",
      "34.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 36, P2 at 60, P3 at 102. Avg Turnaround = (36 + 60 + 102) / 3 = 66.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 7ms, P2 = 30ms, and P3 = 7ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "29.33 ms",
      "14.67 ms",
      "12.33 ms",
      "12.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 7, P2 at 37, P3 at 44. Avg Turnaround = (7 + 37 + 44) / 3 = 29.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 18ms, P2 = 5ms, and P3 = 37ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.00 ms",
      "33.67 ms",
      "20.00 ms",
      "7.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 18, P2 at 23, P3 at 60. Avg Turnaround = (18 + 23 + 60) / 3 = 33.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 19ms, P2 = 39ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "57.67 ms",
      "25.67 ms",
      "19.33 ms",
      "32.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 19, P2 at 58, P3 at 96. Avg Turnaround = (19 + 58 + 96) / 3 = 57.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 8ms, P2 = 34ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "32.33 ms",
      "13.00 ms",
      "14.00 ms",
      "15.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 8, P2 at 42, P3 at 47. Avg Turnaround = (8 + 42 + 47) / 3 = 32.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 286 KB memory. Block chunks available are [226, 316, 406, 271] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "316 KB partition",
      "406 KB partition",
      "271 KB partition",
      "226 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 286 KB), which selects 316 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 17ms, and P3 = 27ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "58.33 ms",
      "14.67 ms",
      "18.33 ms",
      "27.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 55, P3 at 82. Avg Turnaround = (38 + 55 + 82) / 3 = 58.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 518 KB memory. Block chunks available are [458, 548, 638, 503] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "503 KB partition",
      "638 KB partition",
      "458 KB partition",
      "548 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 518 KB), which selects 548 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 39ms, P2 = 29ms, and P3 = 33ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.67 ms",
      "33.67 ms",
      "69.33 ms",
      "22.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 39, P2 at 68, P3 at 101. Avg Turnaround = (39 + 68 + 101) / 3 = 69.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 3, 7, 4, 7, 7, 4, 3]?",
    "options": [
      "6 page faults",
      "4 page faults",
      "8 page faults",
      "3 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 2➔3➔7➔4➔7➔7➔4➔3. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 7, 7, 7, 5, 3, 2, 2]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 1➔7➔7➔7➔5➔3➔2➔2. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 8ms, P2 = 20ms, and P3 = 44ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "24.00 ms",
      "36.00 ms",
      "21.33 ms",
      "9.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 8, P2 at 28, P3 at 72. Avg Turnaround = (8 + 28 + 72) / 3 = 36.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 5, 6, 4, 3, 2, 5, 2]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔5➔6➔4➔3➔2➔5➔2. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 7, 3, 2, 6, 2, 5, 4]?",
    "options": [
      "6 page faults",
      "9 page faults",
      "8 page faults",
      "7 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 2➔7➔3➔2➔6➔2➔5➔4. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 176 KB memory. Block chunks available are [116, 206, 296, 161] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "296 KB partition",
      "206 KB partition",
      "116 KB partition",
      "161 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 176 KB), which selects 206 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 4, 3, 7, 2, 7, 5, 7]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔4➔3➔7➔2➔7➔5➔7. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 4, 6, 3, 3, 4, 7, 2]?",
    "options": [
      "4 page faults",
      "5 page faults",
      "8 page faults",
      "7 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔4➔6➔3➔3➔4➔7➔2. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 3, 7, 3, 4, 6, 6, 4]?",
    "options": [
      "4 page faults",
      "6 page faults",
      "8 page faults",
      "3 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔3➔7➔3➔4➔6➔6➔4. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 6, 3, 4, 6, 1, 4, 4]?",
    "options": [
      "3 page faults",
      "8 page faults",
      "4 page faults",
      "6 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 1➔6➔3➔4➔6➔1➔4➔4. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 41ms, P2 = 11ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.00 ms",
      "50.00 ms",
      "5.33 ms",
      "17.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 41, P2 at 52, P3 at 57. Avg Turnaround = (41 + 52 + 57) / 3 = 50.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 464 KB memory. Block chunks available are [404, 494, 584, 449] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "404 KB partition",
      "494 KB partition",
      "584 KB partition",
      "449 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 464 KB), which selects 494 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 5, 2, 6, 5, 2, 5, 1]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "3 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 2➔5➔2➔6➔5➔2➔5➔1. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 11ms, P2 = 30ms, and P3 = 41ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.67 ms",
      "13.67 ms",
      "27.33 ms",
      "44.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 11, P2 at 41, P3 at 82. Avg Turnaround = (11 + 41 + 82) / 3 = 44.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 1, 7, 5, 1, 1, 1, 2]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "4 page faults",
      "7 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 2➔1➔7➔5➔1➔1➔1➔2. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 7, 4, 4, 3, 3, 2, 4]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "7 page faults",
      "4 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔7➔4➔4➔3➔3➔2➔4. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 41ms, P2 = 31ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "26.00 ms",
      "12.33 ms",
      "63.67 ms",
      "24.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 41, P2 at 72, P3 at 78. Avg Turnaround = (41 + 72 + 78) / 3 = 63.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 2, 3, 3, 3, 2, 4, 5]?",
    "options": [
      "4 page faults",
      "5 page faults",
      "8 page faults",
      "7 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 7➔2➔3➔3➔3➔2➔4➔5. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 2, 2, 1, 2, 3, 2, 3]?",
    "options": [
      "2 page faults",
      "5 page faults",
      "3 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 3➔2➔2➔1➔2➔3➔2➔3. Cache slots = 5. Total page fault hits = 3 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [2, 6, 7, 7, 4, 7, 5, 7]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 2➔6➔7➔7➔4➔7➔5➔7. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 2, 1, 1, 5, 4, 4, 6]?",
    "options": [
      "8 page faults",
      "8 page faults",
      "5 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔2➔1➔1➔5➔4➔4➔6. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 4, 1, 6, 2, 3, 3, 4]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "5 page faults",
      "7 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔4➔1➔6➔2➔3➔3➔4. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 7, 6, 5, 5, 3, 1, 5]?",
    "options": [
      "7 page faults",
      "8 page faults",
      "5 page faults",
      "4 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔7➔6➔5➔5➔3➔1➔5. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 40ms, P2 = 19ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "54.67 ms",
      "8.33 ms",
      "21.67 ms",
      "19.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 40, P2 at 59, P3 at 65. Avg Turnaround = (40 + 59 + 65) / 3 = 54.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 594 KB memory. Block chunks available are [534, 624, 714, 579] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "714 KB partition",
      "534 KB partition",
      "624 KB partition",
      "579 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 594 KB), which selects 624 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 6, 4, 6, 2, 5, 4, 6]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "3 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔6➔4➔6➔2➔5➔4➔6. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 35ms, P2 = 27ms, and P3 = 19ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.33 ms",
      "20.67 ms",
      "59.33 ms",
      "27.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 35, P2 at 62, P3 at 81. Avg Turnaround = (35 + 62 + 81) / 3 = 59.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 30ms, P2 = 9ms, and P3 = 23ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "10.67 ms",
      "20.67 ms",
      "13.00 ms",
      "43.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 30, P2 at 39, P3 at 62. Avg Turnaround = (30 + 39 + 62) / 3 = 43.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 6, 4, 2, 2, 4, 1, 2]?",
    "options": [
      "6 page faults",
      "3 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 6➔6➔4➔2➔2➔4➔1➔2. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 134 KB memory. Block chunks available are [74, 164, 254, 119] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "164 KB partition",
      "74 KB partition",
      "254 KB partition",
      "119 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 134 KB), which selects 164 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 30ms, P2 = 36ms, and P3 = 18ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "60.00 ms",
      "22.00 ms",
      "18.00 ms",
      "28.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 30, P2 at 66, P3 at 84. Avg Turnaround = (30 + 66 + 84) / 3 = 60.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 12ms, P2 = 26ms, and P3 = 24ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.67 ms",
      "37.33 ms",
      "12.67 ms",
      "20.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 12, P2 at 38, P3 at 62. Avg Turnaround = (12 + 38 + 62) / 3 = 37.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 241 KB memory. Block chunks available are [181, 271, 361, 226] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "271 KB partition",
      "361 KB partition",
      "226 KB partition",
      "181 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 241 KB), which selects 271 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 5, 7, 5, 6, 1, 6, 6]?",
    "options": [
      "8 page faults",
      "3 page faults",
      "6 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 1➔5➔7➔5➔6➔1➔6➔6. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 9ms, P2 = 29ms, and P3 = 29ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "22.33 ms",
      "19.33 ms",
      "12.67 ms",
      "38.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 9, P2 at 38, P3 at 67. Avg Turnaround = (9 + 38 + 67) / 3 = 38.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 291 KB memory. Block chunks available are [231, 321, 411, 276] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "231 KB partition",
      "411 KB partition",
      "321 KB partition",
      "276 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 291 KB), which selects 321 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 6, 3, 3, 4, 5, 7, 2]?",
    "options": [
      "6 page faults",
      "5 page faults",
      "8 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔6➔3➔3➔4➔5➔7➔2. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 40ms, P2 = 42ms, and P3 = 32ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "27.33 ms",
      "38.00 ms",
      "78.67 ms",
      "24.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 40, P2 at 82, P3 at 114. Avg Turnaround = (40 + 82 + 114) / 3 = 78.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 27ms, P2 = 17ms, and P3 = 12ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "18.67 ms",
      "9.67 ms",
      "42.33 ms",
      "14.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 27, P2 at 44, P3 at 56. Avg Turnaround = (27 + 44 + 56) / 3 = 42.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 32ms, P2 = 33ms, and P3 = 27ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "30.67 ms",
      "21.67 ms",
      "63.00 ms",
      "20.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 32, P2 at 65, P3 at 92. Avg Turnaround = (32 + 65 + 92) / 3 = 63.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 30ms, P2 = 8ms, and P3 = 44ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "17.33 ms",
      "12.67 ms",
      "50.00 ms",
      "27.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 30, P2 at 38, P3 at 82. Avg Turnaround = (30 + 38 + 82) / 3 = 50.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 34ms, P2 = 36ms, and P3 = 35ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.33 ms",
      "69.67 ms",
      "35.00 ms",
      "23.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 34, P2 at 70, P3 at 105. Avg Turnaround = (34 + 70 + 105) / 3 = 69.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 1, 6, 4, 7, 1, 4, 1]?",
    "options": [
      "8 page faults",
      "3 page faults",
      "4 page faults",
      "6 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 1➔1➔6➔4➔7➔1➔4➔1. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 1, 5, 7, 3, 2, 3, 6]?",
    "options": [
      "9 page faults",
      "7 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔1➔5➔7➔3➔2➔3➔6. Cache slots = 4. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 7ms, P2 = 43ms, and P3 = 40ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "49.00 ms",
      "27.67 ms",
      "16.67 ms",
      "30.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 7, P2 at 50, P3 at 90. Avg Turnaround = (7 + 50 + 90) / 3 = 49.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 26ms, and P3 = 20ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "62.00 ms",
      "15.33 ms",
      "21.33 ms",
      "28.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 64, P3 at 84. Avg Turnaround = (38 + 64 + 84) / 3 = 62.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 4, 2, 4, 7, 6, 1, 3]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔4➔2➔4➔7➔6➔1➔3. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 5, 6, 4, 4, 6, 4, 2]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "4 page faults",
      "7 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔5➔6➔4➔4➔6➔4➔2. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [2, 6, 6, 3, 2, 3, 1, 2]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "3 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 2➔6➔6➔3➔2➔3➔1➔2. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 23ms, P2 = 38ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.33 ms",
      "61.00 ms",
      "20.33 ms",
      "33.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 23, P2 at 61, P3 at 99. Avg Turnaround = (23 + 61 + 99) / 3 = 61.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 12ms, P2 = 17ms, and P3 = 34ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "9.67 ms",
      "21.00 ms",
      "34.67 ms",
      "17.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 12, P2 at 29, P3 at 63. Avg Turnaround = (12 + 29 + 63) / 3 = 34.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 2, 7, 6, 7, 3, 3, 4]?",
    "options": [
      "4 page faults",
      "7 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 6➔2➔7➔6➔7➔3➔3➔4. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 6, 7, 6, 4, 5, 4, 1]?",
    "options": [
      "7 page faults",
      "8 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 6➔6➔7➔6➔4➔5➔4➔1. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 434 KB memory. Block chunks available are [374, 464, 554, 419] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "464 KB partition",
      "419 KB partition",
      "374 KB partition",
      "554 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 434 KB), which selects 464 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 34ms, P2 = 21ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "18.33 ms",
      "56.67 ms",
      "15.67 ms",
      "27.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 34, P2 at 55, P3 at 81. Avg Turnaround = (34 + 55 + 81) / 3 = 56.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 43ms, P2 = 9ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "5.00 ms",
      "51.00 ms",
      "17.33 ms",
      "19.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 43, P2 at 52, P3 at 58. Avg Turnaround = (43 + 52 + 58) / 3 = 51.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 3, 1, 7, 4, 3, 3, 4]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "6 page faults",
      "3 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔3➔1➔7➔4➔3➔3➔4. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 36ms, P2 = 44ms, and P3 = 28ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "36.00 ms",
      "24.00 ms",
      "74.67 ms",
      "26.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 36, P2 at 80, P3 at 108. Avg Turnaround = (36 + 80 + 108) / 3 = 74.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 5, 6, 3, 3, 5, 7, 3]?",
    "options": [
      "7 page faults",
      "4 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔5➔6➔3➔3➔5➔7➔3. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 42ms, P2 = 20ms, and P3 = 39ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "33.67 ms",
      "20.67 ms",
      "68.33 ms",
      "19.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 42, P2 at 62, P3 at 101. Avg Turnaround = (42 + 62 + 101) / 3 = 68.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 129 KB memory. Block chunks available are [69, 159, 249, 114] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "249 KB partition",
      "69 KB partition",
      "159 KB partition",
      "114 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 129 KB), which selects 159 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 39ms, P2 = 16ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "51.67 ms",
      "7.33 ms",
      "20.33 ms",
      "18.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 39, P2 at 55, P3 at 61. Avg Turnaround = (39 + 55 + 61) / 3 = 51.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 6, 1, 2, 3, 6, 6, 1]?",
    "options": [
      "6 page faults",
      "7 page faults",
      "8 page faults",
      "9 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔6➔1➔2➔3➔6➔6➔1. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 277 KB memory. Block chunks available are [217, 307, 397, 262] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "397 KB partition",
      "262 KB partition",
      "217 KB partition",
      "307 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 277 KB), which selects 307 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 19ms, P2 = 33ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "42.67 ms",
      "12.67 ms",
      "19.00 ms",
      "17.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 19, P2 at 52, P3 at 57. Avg Turnaround = (19 + 52 + 57) / 3 = 42.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 10ms, P2 = 8ms, and P3 = 20ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "22.00 ms",
      "12.67 ms",
      "6.00 ms",
      "9.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 10, P2 at 18, P3 at 38. Avg Turnaround = (10 + 18 + 38) / 3 = 22.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [1, 1, 3, 4, 3, 3, 3, 3]?",
    "options": [
      "3 page faults",
      "5 page faults",
      "8 page faults",
      "2 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔1➔3➔4➔3➔3➔3➔3. Cache slots = 3. Total page fault hits = 3 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 575 KB memory. Block chunks available are [515, 605, 695, 560] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "560 KB partition",
      "515 KB partition",
      "695 KB partition",
      "605 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 575 KB), which selects 605 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 284 KB memory. Block chunks available are [224, 314, 404, 269] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "314 KB partition",
      "269 KB partition",
      "404 KB partition",
      "224 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 284 KB), which selects 314 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 24ms, P2 = 17ms, and P3 = 35ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.33 ms",
      "17.33 ms",
      "13.67 ms",
      "47.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 24, P2 at 41, P3 at 76. Avg Turnaround = (24 + 41 + 76) / 3 = 47.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 6, 3, 2, 7, 3, 4, 6]?",
    "options": [
      "4 page faults",
      "7 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 3➔6➔3➔2➔7➔3➔4➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 5, 2, 1, 1, 6, 6, 1]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "3 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 6➔5➔2➔1➔1➔6➔6➔1. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [1, 1, 4, 3, 4, 1, 5, 1]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "7 page faults",
      "4 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔1➔4➔3➔4➔1➔5➔1. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 1, 4, 3, 6, 6, 7, 7]?",
    "options": [
      "7 page faults",
      "8 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔1➔4➔3➔6➔6➔7➔7. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 18ms, P2 = 39ms, and P3 = 31ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "54.33 ms",
      "23.33 ms",
      "19.00 ms",
      "29.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 18, P2 at 57, P3 at 88. Avg Turnaround = (18 + 57 + 88) / 3 = 54.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 9ms, P2 = 11ms, and P3 = 30ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "13.67 ms",
      "26.33 ms",
      "16.67 ms",
      "6.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 9, P2 at 20, P3 at 50. Avg Turnaround = (9 + 20 + 50) / 3 = 26.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 44ms, P2 = 41ms, and P3 = 20ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "78.00 ms",
      "28.33 ms",
      "35.00 ms",
      "20.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 44, P2 at 85, P3 at 105. Avg Turnaround = (44 + 85 + 105) / 3 = 78.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 6, 1, 1, 3, 1, 6, 3]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "3 page faults",
      "2 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 1➔6➔1➔1➔3➔1➔6➔3. Cache slots = 4. Total page fault hits = 3 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 31ms, P2 = 7ms, and P3 = 25ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "12.67 ms",
      "10.67 ms",
      "21.00 ms",
      "44.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 31, P2 at 38, P3 at 63. Avg Turnaround = (31 + 38 + 63) / 3 = 44.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 7, 5, 6, 6, 6, 5, 7]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "3 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔7➔5➔6➔6➔6➔5➔7. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 421 KB memory. Block chunks available are [361, 451, 541, 406] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "361 KB partition",
      "451 KB partition",
      "541 KB partition",
      "406 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 421 KB), which selects 451 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 5, 1, 3, 1, 3, 1, 2]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "7 page faults",
      "4 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 2➔5➔1➔3➔1➔3➔1➔2. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 16ms, P2 = 33ms, and P3 = 14ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.33 ms",
      "42.67 ms",
      "15.67 ms",
      "21.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 16, P2 at 49, P3 at 63. Avg Turnaround = (16 + 49 + 63) / 3 = 42.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 21ms, P2 = 39ms, and P3 = 8ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.67 ms",
      "20.00 ms",
      "49.67 ms",
      "22.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 21, P2 at 60, P3 at 68. Avg Turnaround = (21 + 60 + 68) / 3 = 49.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 14ms, P2 = 20ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.00 ms",
      "11.33 ms",
      "15.33 ms",
      "36.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 14, P2 at 34, P3 at 60. Avg Turnaround = (14 + 34 + 60) / 3 = 36.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 25ms, P2 = 20ms, and P3 = 17ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.00 ms",
      "20.67 ms",
      "12.33 ms",
      "44.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 25, P2 at 45, P3 at 62. Avg Turnaround = (25 + 45 + 62) / 3 = 44.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 7, 4, 7, 4, 1, 5, 1]?",
    "options": [
      "5 page faults",
      "7 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 3➔7➔4➔7➔4➔1➔5➔1. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 4, 4, 4, 4, 1, 2, 7]?",
    "options": [
      "7 page faults",
      "8 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔4➔4➔4➔4➔1➔2➔7. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 395 KB memory. Block chunks available are [335, 425, 515, 380] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "335 KB partition",
      "380 KB partition",
      "425 KB partition",
      "515 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 395 KB), which selects 425 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 358 KB memory. Block chunks available are [298, 388, 478, 343] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "388 KB partition",
      "478 KB partition",
      "298 KB partition",
      "343 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 358 KB), which selects 388 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 29ms, P2 = 14ms, and P3 = 42ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "52.33 ms",
      "18.67 ms",
      "14.33 ms",
      "28.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 29, P2 at 43, P3 at 85. Avg Turnaround = (29 + 43 + 85) / 3 = 52.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 29ms, P2 = 33ms, and P3 = 21ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.67 ms",
      "58.00 ms",
      "27.67 ms",
      "18.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 29, P2 at 62, P3 at 83. Avg Turnaround = (29 + 62 + 83) / 3 = 58.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 39ms, P2 = 13ms, and P3 = 10ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "51.00 ms",
      "17.33 ms",
      "20.67 ms",
      "7.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 39, P2 at 52, P3 at 62. Avg Turnaround = (39 + 52 + 62) / 3 = 51.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 19ms, P2 = 33ms, and P3 = 27ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "50.00 ms",
      "20.00 ms",
      "17.33 ms",
      "26.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 19, P2 at 52, P3 at 79. Avg Turnaround = (19 + 52 + 79) / 3 = 50.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 298 KB memory. Block chunks available are [238, 328, 418, 283] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "418 KB partition",
      "238 KB partition",
      "328 KB partition",
      "283 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 298 KB), which selects 328 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 574 KB memory. Block chunks available are [514, 604, 694, 559] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "514 KB partition",
      "559 KB partition",
      "604 KB partition",
      "694 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 574 KB), which selects 604 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 5, 6, 5, 7, 5, 6, 7]?",
    "options": [
      "6 page faults",
      "4 page faults",
      "3 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔5➔6➔5➔7➔5➔6➔7. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 44ms, P2 = 34ms, and P3 = 17ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "26.00 ms",
      "72.33 ms",
      "17.00 ms",
      "31.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 44, P2 at 78, P3 at 95. Avg Turnaround = (44 + 78 + 95) / 3 = 72.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [2, 5, 3, 3, 5, 3, 3, 1]?",
    "options": [
      "6 page faults",
      "4 page faults",
      "8 page faults",
      "3 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 2➔5➔3➔3➔5➔3➔3➔1. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 22ms, P2 = 7ms, and P3 = 17ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "9.67 ms",
      "32.33 ms",
      "8.00 ms",
      "15.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 22, P2 at 29, P3 at 46. Avg Turnaround = (22 + 29 + 46) / 3 = 32.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 24ms, P2 = 10ms, and P3 = 20ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "18.00 ms",
      "37.33 ms",
      "10.00 ms",
      "11.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 24, P2 at 34, P3 at 54. Avg Turnaround = (24 + 34 + 54) / 3 = 37.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 5ms, P2 = 12ms, and P3 = 7ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "6.33 ms",
      "15.33 ms",
      "5.67 ms",
      "8.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 5, P2 at 17, P3 at 24. Avg Turnaround = (5 + 17 + 24) / 3 = 15.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 2, 5, 2, 4, 1, 2, 4]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 7➔2➔5➔2➔4➔1➔2➔4. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 1, 5, 6, 1, 5, 3, 5]?",
    "options": [
      "4 page faults",
      "5 page faults",
      "8 page faults",
      "7 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 7➔1➔5➔6➔1➔5➔3➔5. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 2, 6, 7, 4, 7, 4, 2]?",
    "options": [
      "7 page faults",
      "8 page faults",
      "5 page faults",
      "4 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔2➔6➔7➔4➔7➔4➔2. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 7, 6, 4, 3, 3, 4, 1]?",
    "options": [
      "4 page faults",
      "7 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔7➔6➔4➔3➔3➔4➔1. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 3, 6, 1, 3, 4, 6, 1]?",
    "options": [
      "3 page faults",
      "4 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔3➔6➔1➔3➔4➔6➔1. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 16ms, P2 = 22ms, and P3 = 36ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "12.67 ms",
      "19.33 ms",
      "42.67 ms",
      "24.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 16, P2 at 38, P3 at 74. Avg Turnaround = (16 + 38 + 74) / 3 = 42.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 170 KB memory. Block chunks available are [110, 200, 290, 155] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "290 KB partition",
      "200 KB partition",
      "110 KB partition",
      "155 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 170 KB), which selects 200 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 247 KB memory. Block chunks available are [187, 277, 367, 232] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "232 KB partition",
      "277 KB partition",
      "367 KB partition",
      "187 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 247 KB), which selects 277 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 6, 1, 4, 6, 7, 4, 2]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔6➔1➔4➔6➔7➔4➔2. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 373 KB memory. Block chunks available are [313, 403, 493, 358] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "493 KB partition",
      "313 KB partition",
      "358 KB partition",
      "403 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 373 KB), which selects 403 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 1, 7, 1, 2, 7, 5, 3]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔1➔7➔1➔2➔7➔5➔3. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 5, 7, 1, 3, 1, 4, 2]?",
    "options": [
      "9 page faults",
      "6 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 6➔5➔7➔1➔3➔1➔4➔2. Cache slots = 4. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 6, 6, 1, 6, 2, 2, 4]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔6➔6➔1➔6➔2➔2➔4. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 7ms, P2 = 40ms, and P3 = 29ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "43.33 ms",
      "23.00 ms",
      "15.67 ms",
      "25.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 7, P2 at 47, P3 at 76. Avg Turnaround = (7 + 47 + 76) / 3 = 43.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 37ms, P2 = 12ms, and P3 = 9ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "7.00 ms",
      "48.00 ms",
      "19.33 ms",
      "16.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 37, P2 at 49, P3 at 58. Avg Turnaround = (37 + 49 + 58) / 3 = 48.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 9ms, P2 = 15ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "17.67 ms",
      "31.67 ms",
      "8.00 ms",
      "20.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 9, P2 at 24, P3 at 62. Avg Turnaround = (9 + 24 + 62) / 3 = 31.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 7ms, P2 = 10ms, and P3 = 41ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "5.67 ms",
      "27.33 ms",
      "19.33 ms",
      "17.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 7, P2 at 17, P3 at 58. Avg Turnaround = (7 + 17 + 58) / 3 = 27.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 12ms, P2 = 30ms, and P3 = 7ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "34.33 ms",
      "12.33 ms",
      "16.33 ms",
      "14.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 12, P2 at 42, P3 at 49. Avg Turnaround = (12 + 42 + 49) / 3 = 34.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 4, 3, 5, 2, 1, 5, 2]?",
    "options": [
      "8 page faults",
      "8 page faults",
      "5 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 1➔4➔3➔5➔2➔1➔5➔2. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 1, 4, 3, 5, 3, 3, 5]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔1➔4➔3➔5➔3➔3➔5. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 40ms, P2 = 12ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.00 ms",
      "17.33 ms",
      "5.67 ms",
      "49.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 40, P2 at 52, P3 at 57. Avg Turnaround = (40 + 52 + 57) / 3 = 49.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 230 KB memory. Block chunks available are [170, 260, 350, 215] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "350 KB partition",
      "215 KB partition",
      "260 KB partition",
      "170 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 230 KB), which selects 260 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 454 KB memory. Block chunks available are [394, 484, 574, 439] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "394 KB partition",
      "484 KB partition",
      "439 KB partition",
      "574 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 454 KB), which selects 484 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 369 KB memory. Block chunks available are [309, 399, 489, 354] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "489 KB partition",
      "309 KB partition",
      "399 KB partition",
      "354 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 369 KB), which selects 399 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 6, 3, 4, 4, 3, 4, 7]?",
    "options": [
      "6 page faults",
      "3 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔6➔3➔4➔4➔3➔4➔7. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 2, 5, 1, 3, 7, 3, 3]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔2➔5➔1➔3➔7➔3➔3. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 15ms, P2 = 15ms, and P3 = 10ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "28.33 ms",
      "13.33 ms",
      "8.33 ms",
      "10.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 15, P2 at 30, P3 at 40. Avg Turnaround = (15 + 30 + 40) / 3 = 28.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 5, 7, 4, 1, 5, 7, 6]?",
    "options": [
      "4 page faults",
      "7 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 4➔5➔7➔4➔1➔5➔7➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 2, 6, 7, 4, 6, 6, 7]?",
    "options": [
      "3 page faults",
      "4 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 2➔2➔6➔7➔4➔6➔6➔7. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 119 KB memory. Block chunks available are [59, 149, 239, 104] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "239 KB partition",
      "59 KB partition",
      "149 KB partition",
      "104 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 119 KB), which selects 149 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 13ms, P2 = 41ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "30.67 ms",
      "53.00 ms",
      "26.33 ms",
      "18.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 13, P2 at 54, P3 at 92. Avg Turnaround = (13 + 54 + 92) / 3 = 53.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 359 KB memory. Block chunks available are [299, 389, 479, 344] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "299 KB partition",
      "389 KB partition",
      "479 KB partition",
      "344 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 359 KB), which selects 389 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 8ms, P2 = 24ms, and P3 = 16ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "29.33 ms",
      "10.67 ms",
      "16.00 ms",
      "13.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 8, P2 at 32, P3 at 48. Avg Turnaround = (8 + 32 + 48) / 3 = 29.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 3, 4, 4, 3, 2, 3, 5]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "4 page faults",
      "3 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 3➔3➔4➔4➔3➔2➔3➔5. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 5, 1, 1, 4, 7, 3, 3]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔5➔1➔1➔4➔7➔3➔3. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 33ms, P2 = 38ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "32.33 ms",
      "67.00 ms",
      "23.67 ms",
      "21.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 33, P2 at 71, P3 at 97. Avg Turnaround = (33 + 71 + 97) / 3 = 67.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 8ms, P2 = 31ms, and P3 = 30ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "13.00 ms",
      "20.33 ms",
      "23.00 ms",
      "38.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 8, P2 at 39, P3 at 69. Avg Turnaround = (8 + 39 + 69) / 3 = 38.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 4, 2, 4, 5, 2, 6, 6]?",
    "options": [
      "3 page faults",
      "6 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 4➔4➔2➔4➔5➔2➔6➔6. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 6, 4, 7, 1, 6, 2, 6]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔6➔4➔7➔1➔6➔2➔6. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 25ms, P2 = 37ms, and P3 = 15ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.67 ms",
      "25.67 ms",
      "17.33 ms",
      "54.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 25, P2 at 62, P3 at 77. Avg Turnaround = (25 + 62 + 77) / 3 = 54.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [1, 4, 4, 1, 2, 2, 5, 5]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "6 page faults",
      "3 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 1➔4➔4➔1➔2➔2➔5➔5. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 17ms, P2 = 14ms, and P3 = 36ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "22.33 ms",
      "38.33 ms",
      "16.67 ms",
      "10.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 17, P2 at 31, P3 at 67. Avg Turnaround = (17 + 31 + 67) / 3 = 38.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 21ms, P2 = 27ms, and P3 = 14ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.00 ms",
      "13.67 ms",
      "43.67 ms",
      "20.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 21, P2 at 48, P3 at 62. Avg Turnaround = (21 + 48 + 62) / 3 = 43.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 23ms, P2 = 27ms, and P3 = 29ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.67 ms",
      "26.33 ms",
      "18.67 ms",
      "50.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 23, P2 at 50, P3 at 79. Avg Turnaround = (23 + 50 + 79) / 3 = 50.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 13ms, P2 = 37ms, and P3 = 18ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "18.33 ms",
      "22.67 ms",
      "16.67 ms",
      "43.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 13, P2 at 50, P3 at 68. Avg Turnaround = (13 + 50 + 68) / 3 = 43.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 33ms, P2 = 24ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.00 ms",
      "61.67 ms",
      "20.67 ms",
      "31.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 33, P2 at 57, P3 at 95. Avg Turnaround = (33 + 57 + 95) / 3 = 61.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 2, 2, 1, 6, 5, 2, 7]?",
    "options": [
      "7 page faults",
      "8 page faults",
      "9 page faults",
      "6 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔2➔2➔1➔6➔5➔2➔7. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 17ms, P2 = 13ms, and P3 = 33ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "36.67 ms",
      "21.00 ms",
      "15.33 ms",
      "10.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 17, P2 at 30, P3 at 63. Avg Turnaround = (17 + 30 + 63) / 3 = 36.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 7ms, P2 = 43ms, and P3 = 20ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.67 ms",
      "21.00 ms",
      "23.33 ms",
      "42.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 7, P2 at 50, P3 at 70. Avg Turnaround = (7 + 50 + 70) / 3 = 42.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 4, 3, 1, 4, 3, 3, 5]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "3 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔4➔3➔1➔4➔3➔3➔5. Cache slots = 3. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 3, 4, 7, 3, 3, 3, 4]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "3 page faults",
      "2 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 3➔3➔4➔7➔3➔3➔3➔4. Cache slots = 4. Total page fault hits = 3 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [5, 5, 3, 7, 7, 5, 2, 2]?",
    "options": [
      "3 page faults",
      "8 page faults",
      "6 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔5➔3➔7➔7➔5➔2➔2. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 5, 4, 5, 2, 1, 2, 1]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔5➔4➔5➔2➔1➔2➔1. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 15ms, P2 = 37ms, and P3 = 30ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "49.67 ms",
      "17.33 ms",
      "27.33 ms",
      "22.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 15, P2 at 52, P3 at 82. Avg Turnaround = (15 + 52 + 82) / 3 = 49.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 111 KB memory. Block chunks available are [51, 141, 231, 96] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "141 KB partition",
      "51 KB partition",
      "96 KB partition",
      "231 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 111 KB), which selects 141 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 412 KB memory. Block chunks available are [352, 442, 532, 397] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "532 KB partition",
      "352 KB partition",
      "442 KB partition",
      "397 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 412 KB), which selects 442 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 337 KB memory. Block chunks available are [277, 367, 457, 322] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "367 KB partition",
      "457 KB partition",
      "322 KB partition",
      "277 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 337 KB), which selects 367 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 27ms, and P3 = 26ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "17.67 ms",
      "26.33 ms",
      "52.67 ms",
      "17.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 53, P3 at 79. Avg Turnaround = (26 + 53 + 79) / 3 = 52.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 39ms, P2 = 12ms, and P3 = 9ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "7.00 ms",
      "50.00 ms",
      "17.00 ms",
      "20.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 39, P2 at 51, P3 at 60. Avg Turnaround = (39 + 51 + 60) / 3 = 50.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 15ms, P2 = 21ms, and P3 = 37ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "24.33 ms",
      "12.00 ms",
      "19.33 ms",
      "41.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 15, P2 at 36, P3 at 73. Avg Turnaround = (15 + 36 + 73) / 3 = 41.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 4, 6, 7, 6, 5, 3, 3]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "7 page faults",
      "4 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔4➔6➔7➔6➔5➔3➔3. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 443 KB memory. Block chunks available are [383, 473, 563, 428] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "563 KB partition",
      "473 KB partition",
      "383 KB partition",
      "428 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 443 KB), which selects 473 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 22ms, and P3 = 19ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "26.33 ms",
      "13.67 ms",
      "59.00 ms",
      "20.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 60, P3 at 79. Avg Turnaround = (38 + 60 + 79) / 3 = 59.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 5, 6, 3, 2, 5, 6, 5]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔5➔6➔3➔2➔5➔6➔5. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 3, 1, 1, 1, 6, 5, 5]?",
    "options": [
      "5 page faults",
      "7 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 2➔3➔1➔1➔1➔6➔5➔5. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 262 KB memory. Block chunks available are [202, 292, 382, 247] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "247 KB partition",
      "292 KB partition",
      "382 KB partition",
      "202 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 262 KB), which selects 292 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 4, 5, 5, 3, 6, 5, 5]?",
    "options": [
      "3 page faults",
      "4 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔4➔5➔5➔3➔6➔5➔5. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 1, 3, 6, 4, 6, 4, 6]?",
    "options": [
      "4 page faults",
      "6 page faults",
      "3 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔1➔3➔6➔4➔6➔4➔6. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 162 KB memory. Block chunks available are [102, 192, 282, 147] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "192 KB partition",
      "282 KB partition",
      "102 KB partition",
      "147 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 162 KB), which selects 192 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 344 KB memory. Block chunks available are [284, 374, 464, 329] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "464 KB partition",
      "374 KB partition",
      "329 KB partition",
      "284 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 344 KB), which selects 374 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 19ms, P2 = 17ms, and P3 = 13ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "10.00 ms",
      "34.67 ms",
      "16.33 ms",
      "12.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 19, P2 at 36, P3 at 49. Avg Turnaround = (19 + 36 + 49) / 3 = 34.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 1, 7, 5, 5, 7, 7, 7]?",
    "options": [
      "2 page faults",
      "5 page faults",
      "8 page faults",
      "3 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔1➔7➔5➔5➔7➔7➔7. Cache slots = 3. Total page fault hits = 3 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 5, 4, 3, 5, 6, 1, 5]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔5➔4➔3➔5➔6➔1➔5. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 40ms, P2 = 24ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "58.00 ms",
      "10.00 ms",
      "21.33 ms",
      "23.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 40, P2 at 64, P3 at 70. Avg Turnaround = (40 + 64 + 70) / 3 = 58.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 397 KB memory. Block chunks available are [337, 427, 517, 382] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "337 KB partition",
      "427 KB partition",
      "517 KB partition",
      "382 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 397 KB), which selects 427 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 4, 5, 5, 3, 5, 5, 6]?",
    "options": [
      "4 page faults",
      "3 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔4➔5➔5➔3➔5➔5➔6. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 16ms, P2 = 35ms, and P3 = 13ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "21.33 ms",
      "43.67 ms",
      "17.00 ms",
      "16.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 16, P2 at 51, P3 at 64. Avg Turnaround = (16 + 51 + 64) / 3 = 43.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 7, 3, 7, 1, 3, 4, 4]?",
    "options": [
      "3 page faults",
      "4 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔7➔3➔7➔1➔3➔4➔4. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 396 KB memory. Block chunks available are [336, 426, 516, 381] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "426 KB partition",
      "336 KB partition",
      "381 KB partition",
      "516 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 396 KB), which selects 426 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 7, 7, 5, 3, 2, 1, 5]?",
    "options": [
      "7 page faults",
      "8 page faults",
      "6 page faults",
      "9 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔7➔7➔5➔3➔2➔1➔5. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 474 KB memory. Block chunks available are [414, 504, 594, 459] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "459 KB partition",
      "594 KB partition",
      "504 KB partition",
      "414 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 474 KB), which selects 504 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 28ms, P2 = 13ms, and P3 = 13ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "13.67 ms",
      "18.00 ms",
      "41.00 ms",
      "8.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 28, P2 at 41, P3 at 54. Avg Turnaround = (28 + 41 + 54) / 3 = 41.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 6, 3, 1, 3, 2, 6, 6]?",
    "options": [
      "3 page faults",
      "4 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔6➔3➔1➔3➔2➔6➔6. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 44ms, P2 = 14ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "66.00 ms",
      "32.00 ms",
      "17.33 ms",
      "19.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 44, P2 at 58, P3 at 96. Avg Turnaround = (44 + 58 + 96) / 3 = 66.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 3, 4, 4, 6, 1, 3, 6]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔3➔4➔4➔6➔1➔3➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 385 KB memory. Block chunks available are [325, 415, 505, 370] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "370 KB partition",
      "415 KB partition",
      "325 KB partition",
      "505 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 385 KB), which selects 415 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 44ms, P2 = 19ms, and P3 = 13ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "61.00 ms",
      "10.67 ms",
      "21.00 ms",
      "25.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 44, P2 at 63, P3 at 76. Avg Turnaround = (44 + 63 + 76) / 3 = 61.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 568 KB memory. Block chunks available are [508, 598, 688, 553] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "553 KB partition",
      "688 KB partition",
      "508 KB partition",
      "598 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 568 KB), which selects 598 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 2, 2, 3, 7, 3, 5, 1]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "5 page faults",
      "4 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 1➔2➔2➔3➔7➔3➔5➔1. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 3, 4, 1, 3, 3, 4, 4]?",
    "options": [
      "5 page faults",
      "2 page faults",
      "3 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 3➔3➔4➔1➔3➔3➔4➔4. Cache slots = 4. Total page fault hits = 3 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [2, 1, 2, 2, 7, 6, 7, 6]?",
    "options": [
      "3 page faults",
      "8 page faults",
      "4 page faults",
      "6 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔1➔2➔2➔7➔6➔7➔6. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 6ms, P2 = 44ms, and P3 = 12ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.67 ms",
      "20.67 ms",
      "18.67 ms",
      "39.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 6, P2 at 50, P3 at 62. Avg Turnaround = (6 + 50 + 62) / 3 = 39.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 191 KB memory. Block chunks available are [131, 221, 311, 176] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "311 KB partition",
      "131 KB partition",
      "176 KB partition",
      "221 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 191 KB), which selects 221 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 4, 6, 6, 1, 6, 7, 6]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "7 page faults",
      "4 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 3➔4➔6➔6➔1➔6➔7➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 5, 1, 3, 1, 6, 5, 1]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "3 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔5➔1➔3➔1➔6➔5➔1. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 214 KB memory. Block chunks available are [154, 244, 334, 199] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "244 KB partition",
      "154 KB partition",
      "334 KB partition",
      "199 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 214 KB), which selects 244 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 15ms, P2 = 32ms, and P3 = 36ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "48.33 ms",
      "15.67 ms",
      "22.67 ms",
      "27.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 15, P2 at 47, P3 at 83. Avg Turnaround = (15 + 47 + 83) / 3 = 48.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 577 KB memory. Block chunks available are [517, 607, 697, 562] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "517 KB partition",
      "607 KB partition",
      "697 KB partition",
      "562 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 577 KB), which selects 607 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 35ms, P2 = 5ms, and P3 = 43ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "27.67 ms",
      "16.00 ms",
      "52.67 ms",
      "13.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 35, P2 at 40, P3 at 83. Avg Turnaround = (35 + 40 + 83) / 3 = 52.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 184 KB memory. Block chunks available are [124, 214, 304, 169] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "304 KB partition",
      "124 KB partition",
      "214 KB partition",
      "169 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 184 KB), which selects 214 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 1, 4, 3, 7, 1, 3, 1]?",
    "options": [
      "3 page faults",
      "4 page faults",
      "8 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔1➔4➔3➔7➔1➔3➔1. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 7, 3, 2, 2, 4, 2, 6]?",
    "options": [
      "4 page faults",
      "5 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔7➔3➔2➔2➔4➔2➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 6, 3, 1, 7, 5, 6, 2]?",
    "options": [
      "7 page faults",
      "10 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔6➔3➔1➔7➔5➔6➔2. Cache slots = 3. Total page fault hits = 8 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 595 KB memory. Block chunks available are [535, 625, 715, 580] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "625 KB partition",
      "715 KB partition",
      "535 KB partition",
      "580 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 595 KB), which selects 625 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 6, 3, 1, 7, 3, 4, 3]?",
    "options": [
      "4 page faults",
      "5 page faults",
      "8 page faults",
      "7 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔6➔3➔1➔7➔3➔4➔3. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 4, 3, 3, 1, 4, 3, 7]?",
    "options": [
      "7 page faults",
      "4 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 5➔4➔3➔3➔1➔4➔3➔7. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 12ms, P2 = 34ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "24.00 ms",
      "47.33 ms",
      "15.33 ms",
      "28.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 12, P2 at 46, P3 at 84. Avg Turnaround = (12 + 46 + 84) / 3 = 47.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 41ms, P2 = 21ms, and P3 = 23ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "28.33 ms",
      "14.67 ms",
      "20.67 ms",
      "62.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 41, P2 at 62, P3 at 85. Avg Turnaround = (41 + 62 + 85) / 3 = 62.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [7, 1, 6, 1, 5, 4, 2, 6]?",
    "options": [
      "6 page faults",
      "9 page faults",
      "8 page faults",
      "7 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 7➔1➔6➔1➔5➔4➔2➔6. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 18ms, P2 = 24ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "35.67 ms",
      "15.67 ms",
      "9.67 ms",
      "14.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 18, P2 at 42, P3 at 47. Avg Turnaround = (18 + 42 + 47) / 3 = 35.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 6, 2, 2, 5, 3, 5, 5]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "7 page faults",
      "4 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 1➔6➔2➔2➔5➔3➔5➔5. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 470 KB memory. Block chunks available are [410, 500, 590, 455] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "590 KB partition",
      "410 KB partition",
      "500 KB partition",
      "455 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 470 KB), which selects 500 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 353 KB memory. Block chunks available are [293, 383, 473, 338] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "338 KB partition",
      "293 KB partition",
      "383 KB partition",
      "473 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 353 KB), which selects 383 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 31ms, P2 = 22ms, and P3 = 9ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "17.67 ms",
      "48.67 ms",
      "20.67 ms",
      "10.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 31, P2 at 53, P3 at 62. Avg Turnaround = (31 + 53 + 62) / 3 = 48.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 43ms, P2 = 18ms, and P3 = 30ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "65.00 ms",
      "30.33 ms",
      "16.00 ms",
      "20.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 43, P2 at 61, P3 at 91. Avg Turnaround = (43 + 61 + 91) / 3 = 65.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 3, 6, 5, 2, 6, 6, 7]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔3➔6➔5➔2➔6➔6➔7. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 584 KB memory. Block chunks available are [524, 614, 704, 569] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "569 KB partition",
      "614 KB partition",
      "524 KB partition",
      "704 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 584 KB), which selects 614 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 334 KB memory. Block chunks available are [274, 364, 454, 319] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "274 KB partition",
      "319 KB partition",
      "454 KB partition",
      "364 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 334 KB), which selects 364 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 3, 5, 4, 4, 4, 1, 1]?",
    "options": [
      "5 page faults",
      "7 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔3➔5➔4➔4➔4➔1➔1. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 16ms, P2 = 32ms, and P3 = 42ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "30.00 ms",
      "16.00 ms",
      "24.67 ms",
      "51.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 16, P2 at 48, P3 at 90. Avg Turnaround = (16 + 48 + 90) / 3 = 51.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 7, 5, 2, 2, 1, 5, 6]?",
    "options": [
      "6 page faults",
      "5 page faults",
      "8 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔7➔5➔2➔2➔1➔5➔6. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 555 KB memory. Block chunks available are [495, 585, 675, 540] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "675 KB partition",
      "495 KB partition",
      "585 KB partition",
      "540 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 555 KB), which selects 585 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 27ms, P2 = 9ms, and P3 = 23ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.67 ms",
      "40.67 ms",
      "12.00 ms",
      "10.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 27, P2 at 36, P3 at 59. Avg Turnaround = (27 + 36 + 59) / 3 = 40.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [2, 3, 3, 3, 2, 4, 5, 5]?",
    "options": [
      "8 page faults",
      "6 page faults",
      "3 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 2➔3➔3➔3➔2➔4➔5➔5. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 37ms, P2 = 38ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.00 ms",
      "14.67 ms",
      "64.33 ms",
      "27.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 37, P2 at 75, P3 at 81. Avg Turnaround = (37 + 75 + 81) / 3 = 64.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 34ms, P2 = 20ms, and P3 = 44ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "62.00 ms",
      "21.33 ms",
      "18.00 ms",
      "32.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 34, P2 at 54, P3 at 98. Avg Turnaround = (34 + 54 + 98) / 3 = 62.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 9ms, P2 = 25ms, and P3 = 11ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "11.33 ms",
      "12.00 ms",
      "15.00 ms",
      "29.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 9, P2 at 34, P3 at 45. Avg Turnaround = (9 + 34 + 45) / 3 = 29.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [3, 2, 7, 1, 2, 7, 3, 1]?",
    "options": [
      "8 page faults",
      "3 page faults",
      "6 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔2➔7➔1➔2➔7➔3➔1. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 41ms, P2 = 8ms, and P3 = 11ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "6.33 ms",
      "20.00 ms",
      "50.00 ms",
      "16.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 41, P2 at 49, P3 at 60. Avg Turnaround = (41 + 49 + 60) / 3 = 50.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [1, 3, 3, 7, 1, 2, 4, 2]?",
    "options": [
      "5 page faults",
      "7 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔3➔3➔7➔1➔2➔4➔2. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 32ms, P2 = 37ms, and P3 = 10ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.00 ms",
      "60.00 ms",
      "26.33 ms",
      "15.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 32, P2 at 69, P3 at 79. Avg Turnaround = (32 + 69 + 79) / 3 = 60.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 23ms, P2 = 19ms, and P3 = 39ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.00 ms",
      "19.33 ms",
      "27.00 ms",
      "48.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 23, P2 at 42, P3 at 81. Avg Turnaround = (23 + 42 + 81) / 3 = 48.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 11ms, P2 = 18ms, and P3 = 35ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "34.67 ms",
      "21.33 ms",
      "17.67 ms",
      "9.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 11, P2 at 29, P3 at 64. Avg Turnaround = (11 + 29 + 64) / 3 = 34.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 22ms, P2 = 18ms, and P3 = 20ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.00 ms",
      "40.67 ms",
      "13.33 ms",
      "12.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 22, P2 at 40, P3 at 60. Avg Turnaround = (22 + 40 + 60) / 3 = 40.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 201 KB memory. Block chunks available are [141, 231, 321, 186] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "231 KB partition",
      "321 KB partition",
      "141 KB partition",
      "186 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 201 KB), which selects 231 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 14ms, P2 = 20ms, and P3 = 28ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "20.67 ms",
      "11.33 ms",
      "36.67 ms",
      "16.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 14, P2 at 34, P3 at 62. Avg Turnaround = (14 + 34 + 62) / 3 = 36.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 599 KB memory. Block chunks available are [539, 629, 719, 584] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "584 KB partition",
      "539 KB partition",
      "629 KB partition",
      "719 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 599 KB), which selects 629 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 4, 2, 1, 7, 7, 4, 6]?",
    "options": [
      "9 page faults",
      "7 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 3➔4➔2➔1➔7➔7➔4➔6. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 34ms, P2 = 18ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "7.67 ms",
      "19.00 ms",
      "47.67 ms",
      "17.33 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 34, P2 at 52, P3 at 57. Avg Turnaround = (34 + 52 + 57) / 3 = 47.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 579 KB memory. Block chunks available are [519, 609, 699, 564] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "564 KB partition",
      "519 KB partition",
      "609 KB partition",
      "699 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 579 KB), which selects 609 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 21ms, P2 = 19ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "35.67 ms",
      "8.33 ms",
      "13.33 ms",
      "15.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 21, P2 at 40, P3 at 46. Avg Turnaround = (21 + 40 + 46) / 3 = 35.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [2, 7, 4, 5, 4, 5, 2, 7]?",
    "options": [
      "3 page faults",
      "8 page faults",
      "4 page faults",
      "6 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔7➔4➔5➔4➔5➔2➔7. Cache slots = 4. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [7, 3, 1, 4, 5, 6, 2, 2]?",
    "options": [
      "7 page faults",
      "8 page faults",
      "9 page faults",
      "6 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 7➔3➔1➔4➔5➔6➔2➔2. Cache slots = 4. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [3, 1, 5, 2, 7, 4, 2, 2]?",
    "options": [
      "8 page faults",
      "5 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 3➔1➔5➔2➔7➔4➔2➔2. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 43ms, P2 = 31ms, and P3 = 30ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "24.67 ms",
      "73.67 ms",
      "34.67 ms",
      "20.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 43, P2 at 74, P3 at 104. Avg Turnaround = (43 + 74 + 104) / 3 = 73.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 7, 6, 3, 7, 7, 1, 2]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔7➔6➔3➔7➔7➔1➔2. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 43ms, P2 = 22ms, and P3 = 5ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "21.67 ms",
      "59.33 ms",
      "9.00 ms",
      "23.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 43, P2 at 65, P3 at 70. Avg Turnaround = (43 + 65 + 70) / 3 = 59.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 33ms, P2 = 28ms, and P3 = 42ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.33 ms",
      "65.67 ms",
      "34.33 ms",
      "20.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 33, P2 at 61, P3 at 103. Avg Turnaround = (33 + 61 + 103) / 3 = 65.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [6, 1, 2, 7, 6, 3, 2, 1]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "8 page faults",
      "7 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 6➔1➔2➔7➔6➔3➔2➔1. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 7ms, P2 = 39ms, and P3 = 36ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "45.00 ms",
      "25.00 ms",
      "27.33 ms",
      "15.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 7, P2 at 46, P3 at 82. Avg Turnaround = (7 + 46 + 82) / 3 = 45.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [1, 7, 3, 2, 5, 2, 6, 3]?",
    "options": [
      "7 page faults",
      "6 page faults",
      "9 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔7➔3➔2➔5➔2➔6➔3. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 1, 1, 3, 3, 3, 4, 2]?",
    "options": [
      "4 page faults",
      "5 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 2➔1➔1➔3➔3➔3➔4➔2. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 6, 4, 2, 6, 4, 3, 7]?",
    "options": [
      "5 page faults",
      "4 page faults",
      "8 page faults",
      "7 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔6➔4➔2➔6➔4➔3➔7. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 23ms, P2 = 42ms, and P3 = 15ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "56.00 ms",
      "26.67 ms",
      "21.67 ms",
      "19.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 23, P2 at 65, P3 at 80. Avg Turnaround = (23 + 65 + 80) / 3 = 56.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 17ms, P2 = 30ms, and P3 = 22ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "44.33 ms",
      "23.00 ms",
      "15.67 ms",
      "17.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 17, P2 at 47, P3 at 69. Avg Turnaround = (17 + 47 + 69) / 3 = 44.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 32ms, P2 = 36ms, and P3 = 33ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.00 ms",
      "33.67 ms",
      "22.67 ms",
      "67.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 32, P2 at 68, P3 at 101. Avg Turnaround = (32 + 68 + 101) / 3 = 67.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 321 KB memory. Block chunks available are [261, 351, 441, 306] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "441 KB partition",
      "261 KB partition",
      "351 KB partition",
      "306 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 321 KB), which selects 351 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 4, 1, 4, 3, 1, 4, 1]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "4 page faults",
      "3 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 7➔4➔1➔4➔3➔1➔4➔1. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 7, 1, 1, 4, 4, 1, 6]?",
    "options": [
      "4 page faults",
      "8 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 3➔7➔1➔1➔4➔4➔1➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 5, 6, 1, 5, 1, 1, 6]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "2 page faults",
      "3 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 6➔5➔6➔1➔5➔1➔1➔6. Cache slots = 3. Total page fault hits = 3 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 28ms, P2 = 36ms, and P3 = 30ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "31.33 ms",
      "62.00 ms",
      "21.33 ms",
      "22.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 28, P2 at 64, P3 at 94. Avg Turnaround = (28 + 64 + 94) / 3 = 62.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [5, 6, 7, 6, 7, 3, 1, 1]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "4 page faults",
      "7 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 5➔6➔7➔6➔7➔3➔1➔1. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 34ms, P2 = 16ms, and P3 = 21ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.67 ms",
      "51.67 ms",
      "23.67 ms",
      "12.33 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 34, P2 at 50, P3 at 71. Avg Turnaround = (34 + 50 + 71) / 3 = 51.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 194 KB memory. Block chunks available are [134, 224, 314, 179] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "134 KB partition",
      "314 KB partition",
      "179 KB partition",
      "224 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 194 KB), which selects 224 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [2, 4, 2, 2, 2, 7, 1, 6]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 2➔4➔2➔2➔2➔7➔1➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 189 KB memory. Block chunks available are [129, 219, 309, 174] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "174 KB partition",
      "129 KB partition",
      "219 KB partition",
      "309 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 189 KB), which selects 219 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 144 KB memory. Block chunks available are [84, 174, 264, 129] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "264 KB partition",
      "129 KB partition",
      "84 KB partition",
      "174 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 144 KB), which selects 174 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 4, 3, 2, 1, 2, 7, 6]?",
    "options": [
      "9 page faults",
      "8 page faults",
      "6 page faults",
      "7 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 6➔4➔3➔2➔1➔2➔7➔6. Cache slots = 4. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 5, 4, 1, 6, 3, 7, 2]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "9 page faults",
      "6 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 4➔5➔4➔1➔6➔3➔7➔2. Cache slots = 5. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 167 KB memory. Block chunks available are [107, 197, 287, 152] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "197 KB partition",
      "287 KB partition",
      "107 KB partition",
      "152 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 167 KB), which selects 197 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 263 KB memory. Block chunks available are [203, 293, 383, 248] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "203 KB partition",
      "383 KB partition",
      "248 KB partition",
      "293 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 263 KB), which selects 293 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 292 KB memory. Block chunks available are [232, 322, 412, 277] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "232 KB partition",
      "322 KB partition",
      "412 KB partition",
      "277 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 292 KB), which selects 322 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 35ms, P2 = 41ms, and P3 = 30ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.33 ms",
      "35.33 ms",
      "72.33 ms",
      "23.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 35, P2 at 76, P3 at 106. Avg Turnaround = (35 + 76 + 106) / 3 = 72.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 26ms, P2 = 30ms, and P3 = 32ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "56.67 ms",
      "20.67 ms",
      "29.33 ms",
      "18.67 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 26, P2 at 56, P3 at 88. Avg Turnaround = (26 + 56 + 88) / 3 = 56.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 151 KB memory. Block chunks available are [91, 181, 271, 136] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "91 KB partition",
      "181 KB partition",
      "271 KB partition",
      "136 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 151 KB), which selects 181 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 24ms, P2 = 31ms, and P3 = 6ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "46.67 ms",
      "18.33 ms",
      "12.33 ms",
      "20.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 24, P2 at 55, P3 at 61. Avg Turnaround = (24 + 55 + 61) / 3 = 46.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 139 KB memory. Block chunks available are [79, 169, 259, 124] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "169 KB partition",
      "124 KB partition",
      "79 KB partition",
      "259 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 139 KB), which selects 169 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 41ms, P2 = 18ms, and P3 = 37ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "65.33 ms",
      "19.67 ms",
      "18.33 ms",
      "32.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 41, P2 at 59, P3 at 96. Avg Turnaround = (41 + 59 + 96) / 3 = 65.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 33ms, P2 = 34ms, and P3 = 13ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "15.67 ms",
      "22.33 ms",
      "60.00 ms",
      "26.67 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 33, P2 at 67, P3 at 80. Avg Turnaround = (33 + 67 + 80) / 3 = 60.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 4, 5, 1, 3, 6, 3, 3]?",
    "options": [
      "8 page faults",
      "4 page faults",
      "7 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 5➔4➔5➔1➔3➔6➔3➔3. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 348 KB memory. Block chunks available are [288, 378, 468, 333] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "288 KB partition",
      "333 KB partition",
      "378 KB partition",
      "468 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 348 KB), which selects 378 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 492 KB memory. Block chunks available are [432, 522, 612, 477] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "432 KB partition",
      "612 KB partition",
      "477 KB partition",
      "522 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 492 KB), which selects 522 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 38ms, P2 = 14ms, and P3 = 24ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "55.33 ms",
      "12.67 ms",
      "17.33 ms",
      "25.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 38, P2 at 52, P3 at 76. Avg Turnaround = (38 + 52 + 76) / 3 = 55.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 37ms, P2 = 32ms, and P3 = 21ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "23.00 ms",
      "65.33 ms",
      "17.67 ms",
      "30.00 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 37, P2 at 69, P3 at 90. Avg Turnaround = (37 + 69 + 90) / 3 = 65.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 24ms, P2 = 40ms, and P3 = 18ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "56.67 ms",
      "19.33 ms",
      "27.33 ms",
      "21.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 24, P2 at 64, P3 at 82. Avg Turnaround = (24 + 64 + 82) / 3 = 56.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 27ms, P2 = 7ms, and P3 = 38ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "44.33 ms",
      "11.33 ms",
      "15.00 ms",
      "24.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 27, P2 at 34, P3 at 72. Avg Turnaround = (27 + 34 + 72) / 3 = 44.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 40ms, P2 = 9ms, and P3 = 22ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.33 ms",
      "53.33 ms",
      "10.33 ms",
      "23.67 ms"
    ],
    "answer": 1,
    "explanation": "Turnaround: P1 finishes at 40, P2 at 49, P3 at 71. Avg Turnaround = (40 + 49 + 71) / 3 = 53.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 545 KB memory. Block chunks available are [485, 575, 665, 530] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "575 KB partition",
      "485 KB partition",
      "530 KB partition",
      "665 KB partition"
    ],
    "answer": 0,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 545 KB), which selects 575 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [6, 2, 3, 5, 4, 6, 2, 3]?",
    "options": [
      "10 page faults",
      "7 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 6➔2➔3➔5➔4➔6➔2➔3. Cache slots = 4. Total page fault hits = 8 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 15ms, P2 = 14ms, and P3 = 37ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "36.67 ms",
      "17.00 ms",
      "9.67 ms",
      "22.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 15, P2 at 29, P3 at 66. Avg Turnaround = (15 + 29 + 66) / 3 = 36.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 30ms, P2 = 29ms, and P3 = 19ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "16.00 ms",
      "26.00 ms",
      "19.67 ms",
      "55.67 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 30, P2 at 59, P3 at 78. Avg Turnaround = (30 + 59 + 78) / 3 = 55.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [4, 6, 1, 4, 1, 2, 7, 7]?",
    "options": [
      "7 page faults",
      "4 page faults",
      "8 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 4➔6➔1➔4➔1➔2➔7➔7. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 19ms, P2 = 40ms, and P3 = 15ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "50.67 ms",
      "19.67 ms",
      "24.67 ms",
      "18.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 19, P2 at 59, P3 at 74. Avg Turnaround = (19 + 59 + 74) / 3 = 50.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [1, 7, 6, 6, 7, 7, 5, 2]?",
    "options": [
      "8 page faults",
      "7 page faults",
      "4 page faults",
      "5 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 1➔7➔6➔6➔7➔7➔5➔2. Cache slots = 5. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [3, 4, 5, 6, 2, 7, 6, 7]?",
    "options": [
      "6 page faults",
      "5 page faults",
      "8 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 3➔4➔5➔6➔2➔7➔6➔7. Cache slots = 4. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 5, 2, 1, 6, 4, 5, 1]?",
    "options": [
      "9 page faults",
      "6 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 4➔5➔2➔1➔6➔4➔5➔1. Cache slots = 4. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 195 KB memory. Block chunks available are [135, 225, 315, 180] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "315 KB partition",
      "180 KB partition",
      "135 KB partition",
      "225 KB partition"
    ],
    "answer": 3,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 195 KB), which selects 225 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 6, 2, 1, 4, 2, 3, 7]?",
    "options": [
      "7 page faults",
      "6 page faults",
      "9 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 7➔6➔2➔1➔4➔2➔3➔7. Cache slots = 5. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 5, 7, 2, 3, 2, 1, 5]?",
    "options": [
      "8 page faults",
      "9 page faults",
      "6 page faults",
      "7 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 6➔5➔7➔2➔3➔2➔1➔5. Cache slots = 3. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [1, 5, 3, 4, 7, 3, 2, 6]?",
    "options": [
      "7 page faults",
      "9 page faults",
      "6 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 1➔5➔3➔4➔7➔3➔2➔6. Cache slots = 4. Total page fault hits = 7 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 435 KB memory. Block chunks available are [375, 465, 555, 420] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "555 KB partition",
      "420 KB partition",
      "465 KB partition",
      "375 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 435 KB), which selects 465 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 30ms, P2 = 24ms, and P3 = 25ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "54.33 ms",
      "26.33 ms",
      "16.33 ms",
      "18.00 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 30, P2 at 54, P3 at 79. Avg Turnaround = (30 + 54 + 79) / 3 = 54.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 367 KB memory. Block chunks available are [307, 397, 487, 352] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "307 KB partition",
      "352 KB partition",
      "397 KB partition",
      "487 KB partition"
    ],
    "answer": 2,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 367 KB), which selects 397 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [4, 2, 4, 1, 4, 4, 1, 3]?",
    "options": [
      "3 page faults",
      "6 page faults",
      "8 page faults",
      "4 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 4➔2➔4➔1➔4➔4➔1➔3. Cache slots = 5. Total page fault hits = 4 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 19ms, P2 = 38ms, and P3 = 13ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "48.67 ms",
      "19.00 ms",
      "17.00 ms",
      "23.33 ms"
    ],
    "answer": 0,
    "explanation": "Turnaround: P1 finishes at 19, P2 at 57, P3 at 70. Avg Turnaround = (19 + 57 + 70) / 3 = 48.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 37ms, P2 = 40ms, and P3 = 37ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "25.67 ms",
      "25.67 ms",
      "76.00 ms",
      "38.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 37, P2 at 77, P3 at 114. Avg Turnaround = (37 + 77 + 114) / 3 = 76.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 2, 7, 3, 2, 6, 3, 4]?",
    "options": [
      "7 page faults",
      "4 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔2➔7➔3➔2➔6➔3➔4. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [6, 2, 5, 2, 7, 6, 6, 7]?",
    "options": [
      "4 page faults",
      "5 page faults",
      "7 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 6➔2➔5➔2➔7➔6➔6➔7. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [2, 6, 1, 3, 7, 3, 3, 1]?",
    "options": [
      "5 page faults",
      "7 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 2➔6➔1➔3➔7➔3➔3➔1. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 4 frames, how many page faults occur for access string [4, 3, 4, 1, 4, 7, 6, 6]?",
    "options": [
      "5 page faults",
      "8 page faults",
      "7 page faults",
      "4 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 4➔3➔4➔1➔4➔7➔6➔6. Cache slots = 4. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 7ms, P2 = 41ms, and P3 = 9ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "19.00 ms",
      "16.67 ms",
      "37.33 ms",
      "16.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 7, P2 at 48, P3 at 57. Avg Turnaround = (7 + 48 + 57) / 3 = 37.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 537 KB memory. Block chunks available are [477, 567, 657, 522] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "657 KB partition",
      "567 KB partition",
      "477 KB partition",
      "522 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 537 KB), which selects 567 KB partition."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 25ms, P2 = 14ms, and P3 = 29ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "14.33 ms",
      "22.67 ms",
      "13.00 ms",
      "44.00 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 25, P2 at 39, P3 at 68. Avg Turnaround = (25 + 39 + 68) / 3 = 44.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 16ms, P2 = 28ms, and P3 = 8ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "12.00 ms",
      "17.33 ms",
      "14.67 ms",
      "37.33 ms"
    ],
    "answer": 3,
    "explanation": "Turnaround: P1 finishes at 16, P2 at 44, P3 at 52. Avg Turnaround = (16 + 44 + 52) / 3 = 37.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [1, 6, 2, 4, 7, 3, 3, 7]?",
    "options": [
      "8 page faults",
      "8 page faults",
      "5 page faults",
      "6 page faults"
    ],
    "answer": 3,
    "explanation": "Tracing FIFO: 1➔6➔2➔4➔7➔3➔3➔7. Cache slots = 3. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Contiguous Memory Allocation",
    "difficulty": "Medium",
    "question": "A process requests 278 KB memory. Block chunks available are [218, 308, 398, 263] KB. Which partition is allocated under the Best-Fit memory placement scheme?",
    "options": [
      "398 KB partition",
      "308 KB partition",
      "263 KB partition",
      "218 KB partition"
    ],
    "answer": 1,
    "explanation": "Best-Fit searches for the smallest partition block that is large enough (>= 278 KB), which selects 308 KB partition."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 5 frames, how many page faults occur for access string [7, 3, 3, 4, 3, 5, 1, 6]?",
    "options": [
      "6 page faults",
      "8 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 0,
    "explanation": "Tracing FIFO: 7➔3➔3➔4➔3➔5➔1➔6. Cache slots = 5. Total page fault hits = 6 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [2, 5, 3, 4, 3, 1, 1, 4]?",
    "options": [
      "7 page faults",
      "4 page faults",
      "5 page faults",
      "8 page faults"
    ],
    "answer": 2,
    "explanation": "Tracing FIFO: 2➔5➔3➔4➔3➔1➔1➔4. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory & Demand Paging",
    "difficulty": "Hard",
    "question": "In OS virtual memory, using FIFO algorithm on empty cache memory with 3 frames, how many page faults occur for access string [5, 2, 4, 5, 1, 4, 4, 6]?",
    "options": [
      "7 page faults",
      "5 page faults",
      "4 page faults",
      "8 page faults"
    ],
    "answer": 1,
    "explanation": "Tracing FIFO: 5➔2➔4➔5➔1➔4➔4➔6. Cache slots = 3. Total page fault hits = 5 page faults."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Processes P1, P2, P3 arrive at time 0 with burst times P1 = 9ms, P2 = 9ms, and P3 = 8ms. What is the average turnaround time under non-preemptive FCFS?",
    "options": [
      "8.67 ms",
      "5.67 ms",
      "17.67 ms",
      "6.00 ms"
    ],
    "answer": 2,
    "explanation": "Turnaround: P1 finishes at 9, P2 at 18, P3 at 26. Avg Turnaround = (9 + 18 + 26) / 3 = 17.67 ms."
  }
];
