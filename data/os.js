window.quizData = window.quizData || {};
window.quizData.os = [
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Process is?",
    "options": [
      "Hardware component",
      "Static code",
      "Stored file",
      "Program in execution"
    ],
    "answer": 3,
    "explanation": "Process = program + execution context."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Thread vs Process?",
    "options": [
      "Same thing",
      "Process shares memory",
      "Thread is heavier",
      "Thread shares process memory; process has own address space"
    ],
    "answer": 3,
    "explanation": "Threads are lightweight within a process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "PCB contains?",
    "options": [
      "Only memory",
      "Process state, PID, registers, memory info",
      "Only PID",
      "Only CPU info"
    ],
    "answer": 1,
    "explanation": "Process Control Block stores all process metadata."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Context switching involves?",
    "options": [
      "Formatting disk",
      "Deleting process",
      "Creating new memory",
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
      "Random",
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Preemptive"
    ],
    "answer": 1,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "SJF scheduling selects?",
    "options": [
      "Random",
      "Process with shortest burst time",
      "Highest priority",
      "Longest burst"
    ],
    "answer": 1,
    "explanation": "Minimizes average waiting time (optimal for non-preemptive)."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Round Robin uses?",
    "options": [
      "Burst time",
      "Time quantum for preemption",
      "Priority only",
      "No preemption"
    ],
    "answer": 1,
    "explanation": "Each process gets equal CPU time slice."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Priority scheduling risk?",
    "options": [
      "Too fast execution",
      "Memory overflow",
      "Deadlock always",
      "Starvation of low-priority processes"
    ],
    "answer": 3,
    "explanation": "Aging technique prevents starvation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Semaphore is?",
    "options": [
      "File descriptor",
      "Integer variable for process synchronization",
      "Process ID",
      "Memory address"
    ],
    "answer": 1,
    "explanation": "wait() decrements; signal() increments."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Mutex is?",
    "options": [
      "Binary semaphore for mutual exclusion",
      "Memory segment",
      "Counting semaphore",
      "File lock"
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
      "Only mutual exclusion",
      "Mutual exclusion, Hold & wait, No preemption, Circular wait",
      "Only circular wait",
      "Only hold and wait"
    ],
    "answer": 1,
    "explanation": "All four Coffman conditions must hold simultaneously."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Banker's algorithm is for?",
    "options": [
      "Deadlock recovery",
      "Deadlock avoidance",
      "Deadlock prevention",
      "Deadlock detection"
    ],
    "answer": 1,
    "explanation": "Checks safe state before granting resources."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides?",
    "options": [
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores",
      "Physical memory into segments"
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
      "Fixed-size pages",
      "Equal partitions",
      "Random blocks",
      "Logical segments (code, data, stack)"
    ],
    "answer": 3,
    "explanation": "Variable-size segments based on program structure."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Virtual memory allows?",
    "options": [
      "More RAM",
      "Execution of processes larger than physical memory",
      "Better graphics",
      "Faster CPU"
    ],
    "answer": 1,
    "explanation": "Uses disk as extension of RAM via demand paging."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when?",
    "options": [
      "Disk is full",
      "Excessive page faults slow system drastically",
      "CPU is idle",
      "Memory is empty"
    ],
    "answer": 1,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Page replacement algorithm LRU evicts?",
    "options": [
      "Most recently used",
      "Least Recently Used page",
      "Random page",
      "First loaded page"
    ],
    "answer": 1,
    "explanation": "LRU approximates optimal by tracking usage recency."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FIFO page replacement?",
    "options": [
      "Most used page",
      "Evicts the oldest page in memory",
      "Newest page",
      "Least used page"
    ],
    "answer": 1,
    "explanation": "Simple but can suffer Belady's anomaly."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Optimal page replacement?",
    "options": [
      "Evicts page not used for longest future time",
      "Random page",
      "Oldest page",
      "Most used page"
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
      "Main memory",
      "Cache for page table entries",
      "Disk cache",
      "CPU register"
    ],
    "answer": 1,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "File allocation methods include?",
    "options": [
      "Only contiguous",
      "Only linked",
      "Only indexed",
      "Contiguous, Linked, Indexed"
    ],
    "answer": 3,
    "explanation": "Each has trade-offs in speed and fragmentation."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Inode stores?",
    "options": [
      "User passwords",
      "Network addresses",
      "File metadata (size, permissions, pointers)",
      "File content only"
    ],
    "answer": 2,
    "explanation": "Unix/Linux inode contains all file attributes except name."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Disk scheduling SCAN (elevator)?",
    "options": [
      "Always starts from 0",
      "Shortest seek first",
      "Random access",
      "Moves in one direction then reverses"
    ],
    "answer": 3,
    "explanation": "Like an elevator, services requests in one direction."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling?",
    "options": [
      "Random order",
      "FIFO",
      "Shortest Seek Time First",
      "Reverse order"
    ],
    "answer": 2,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "System call is?",
    "options": [
      "Interface between user program and OS kernel",
      "Software bug",
      "Hardware interrupt",
      "Network protocol"
    ],
    "answer": 0,
    "explanation": "Programs request OS services via system calls."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "fork() system call creates?",
    "options": [
      "New file",
      "New device",
      "A new child process",
      "New thread"
    ],
    "answer": 2,
    "explanation": "Child is copy of parent process."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Producer-Consumer problem uses?",
    "options": [
      "File I/O only",
      "CPU scheduling",
      "Sorting",
      "Semaphores or mutex with bounded buffer"
    ],
    "answer": 3,
    "explanation": "Classic synchronization problem with shared buffer."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Dining Philosophers problem illustrates?",
    "options": [
      "Deadlock and synchronization challenges",
      "File systems",
      "Sorting efficiency",
      "Memory allocation"
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
      "File compression",
      "CPU scheduling",
      "Memory allocation",
      "Concurrent access to shared data"
    ],
    "answer": 3,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Internal fragmentation occurs in?",
    "options": [
      "No allocation",
      "Stack memory",
      "Fixed-size allocation (paging)",
      "Variable-size allocation"
    ],
    "answer": 2,
    "explanation": "Allocated block larger than needed; wasted space within."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "External fragmentation occurs in?",
    "options": [
      "Variable-size allocation (segmentation)",
      "CPU registers",
      "Cache memory",
      "Fixed-size allocation"
    ],
    "answer": 0,
    "explanation": "Enough total free memory but not contiguous."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Demand paging loads pages?",
    "options": [
      "All at program start",
      "In sorted order",
      "Randomly",
      "Only when they are accessed (on demand)"
    ],
    "answer": 3,
    "explanation": "Lazy loading reduces initial memory usage."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Working Set Model tracks?",
    "options": [
      "Disk blocks",
      "All system pages",
      "Set of pages a process is currently using",
      "CPU instructions"
    ],
    "answer": 2,
    "explanation": "Helps determine how many frames a process needs."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Belady's Anomaly?",
    "options": [
      "Fewer frames always worse",
      "LRU anomaly",
      "More frames can cause more page faults in FIFO",
      "Optimal anomaly"
    ],
    "answer": 2,
    "explanation": "Counter-intuitive: more memory can degrade FIFO performance."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Multithreading model: many-to-one?",
    "options": [
      "One-to-one",
      "Many user threads map to one kernel thread",
      "Many-to-many",
      "One-to-many"
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
      "Each user thread maps to one kernel thread",
      "None",
      "Many-to-one",
      "Many-to-many"
    ],
    "answer": 0,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Starvation vs Deadlock?",
    "options": [
      "Deadlock is temporary",
      "Starvation is worse",
      "Same thing",
      "Starvation: indefinite wait; Deadlock: permanent block"
    ],
    "answer": 3,
    "explanation": "Starvation can be resolved; deadlock requires intervention."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is?",
    "options": [
      "Network monitor",
      "Disk management tool",
      "High-level synchronization construct with mutual exclusion",
      "Hardware device"
    ],
    "answer": 2,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Spooling is?",
    "options": [
      "Simultaneous Peripheral Operation On-Line",
      "CPU scheduling",
      "Network protocol",
      "Memory management"
    ],
    "answer": 0,
    "explanation": "Buffers data for slow devices like printers."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "6.00 ms",
      "6.67 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+8. Average = (6+14)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "1.67 ms",
      "4.67 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 3ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "3.67 ms",
      "5.00 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+3. Average = (4+7)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory",
    "difficulty": "Hard",
    "question": "Using the reference string [1, 2, 3, 4, 1, 2] with 3 physical page frames initially empty, how many page faults occur under the FIFO replacement algorithm?",
    "options": [
      "3",
      "7",
      "6",
      "4"
    ],
    "answer": 2,
    "explanation": "Simulates FIFO allocations on 3 page frame size. Result is 6."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "4.33 ms",
      "2.00 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+7. Average = (3+10)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 35 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "Best-Fit",
      "Worst-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "5.33 ms",
      "3.67 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 9ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "8.33 ms",
      "4.00 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+9. Average = (8+17)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 22 KB in the very first free block that is large enough?",
    "options": [
      "First-Fit",
      "Best-Fit",
      "None of these",
      "Worst-Fit"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 40 KB in the very first free block that is large enough?",
    "options": [
      "First-Fit",
      "Best-Fit",
      "Worst-Fit",
      "None of these"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 49 KB in the very first free block that is large enough?",
    "options": [
      "Worst-Fit",
      "None of these",
      "First-Fit",
      "Best-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 31 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "Best-Fit",
      "Worst-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "4.33 ms",
      "6.00 ms",
      "5.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "4.67 ms",
      "4.00 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 39 KB in the very first free block that is large enough?",
    "options": [
      "Best-Fit",
      "First-Fit",
      "None of these",
      "Worst-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 28 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "First-Fit",
      "Best-Fit",
      "Worst-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.00 ms",
      "4.00 ms",
      "3.00 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 33 KB in the very first free block that is large enough?",
    "options": [
      "Worst-Fit",
      "First-Fit",
      "Best-Fit",
      "None of these"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 36 KB in the very first free block that is large enough?",
    "options": [
      "First-Fit",
      "Best-Fit",
      "None of these",
      "Worst-Fit"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory",
    "difficulty": "Hard",
    "question": "Using the reference string [1, 2, 3, 4, 1, 2] with 4 physical page frames initially empty, how many page faults occur under the FIFO replacement algorithm?",
    "options": [
      "7",
      "3",
      "4",
      "5"
    ],
    "answer": 3,
    "explanation": "Simulates FIFO allocations on 4 page frame size. Result is 5."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 17 KB in the very first free block that is large enough?",
    "options": [
      "Worst-Fit",
      "None of these",
      "First-Fit",
      "Best-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 37 KB in the very first free block that is large enough?",
    "options": [
      "Best-Fit",
      "None of these",
      "Worst-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 5ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "3.00 ms",
      "4.67 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+5. Average = (2+7)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 43 KB in the very first free block that is large enough?",
    "options": [
      "First-Fit",
      "None of these",
      "Best-Fit",
      "Worst-Fit"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "7.00 ms",
      "4.00 ms",
      "7.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 55 KB in the very first free block that is large enough?",
    "options": [
      "Worst-Fit",
      "Best-Fit",
      "First-Fit",
      "None of these"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 6ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "4.67 ms",
      "5.67 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+6. Average = (4+10)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 21 KB in the very first free block that is large enough?",
    "options": [
      "Best-Fit",
      "None of these",
      "First-Fit",
      "Worst-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 6ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "8.00 ms",
      "8.00 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+6. Average = (9+15)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "7.00 ms",
      "7.00 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+9. Average = (6+15)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 6ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "3.67 ms",
      "5.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+6. Average = (5+11)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 45 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "Worst-Fit",
      "Best-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 6ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "4.33 ms",
      "4.67 ms",
      "6.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+6. Average = (7+13)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "7.33 ms",
      "4.33 ms",
      "7.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "3.33 ms",
      "4.67 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+2. Average = (6+8)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 5ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "5.33 ms",
      "2.67 ms",
      "7.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+5. Average = (8+13)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 50 KB in the very first free block that is large enough?",
    "options": [
      "First-Fit",
      "None of these",
      "Best-Fit",
      "Worst-Fit"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "8.33 ms",
      "5.33 ms",
      "8.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+9. Average = (8+17)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 51 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "Best-Fit",
      "First-Fit",
      "Worst-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 56 KB in the very first free block that is large enough?",
    "options": [
      "First-Fit",
      "Best-Fit",
      "Worst-Fit",
      "None of these"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 58 KB in the very first free block that is large enough?",
    "options": [
      "Best-Fit",
      "Worst-Fit",
      "First-Fit",
      "None of these"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 11 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "First-Fit",
      "Worst-Fit",
      "Best-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 38 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "Worst-Fit",
      "First-Fit",
      "Best-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 5ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "2.33 ms",
      "3.67 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+5. Average = (3+8)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 30 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "First-Fit",
      "Best-Fit",
      "Worst-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "3.33 ms",
      "2.33 ms",
      "2.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 5ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "4.33 ms",
      "2.67 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+5. Average = (4+9)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 25 KB in the very first free block that is large enough?",
    "options": [
      "Best-Fit",
      "First-Fit",
      "Worst-Fit",
      "None of these"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "7.00 ms",
      "5.00 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 54 KB in the very first free block that is large enough?",
    "options": [
      "Best-Fit",
      "First-Fit",
      "Worst-Fit",
      "None of these"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 5ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "2.00 ms",
      "3.67 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+5. Average = (2+7)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 4ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "3.00 ms",
      "4.00 ms",
      "4.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+4. Average = (4+8)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 6ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "5.00 ms",
      "7.00 ms",
      "6.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+6. Average = (6+12)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 6ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "3.00 ms",
      "7.33 ms",
      "5.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+6. Average = (8+14)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "1.33 ms",
      "4.67 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+2. Average = (6+8)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 44 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "Best-Fit",
      "Worst-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "7.00 ms",
      "6.33 ms",
      "5.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "3.67 ms",
      "6.67 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+9. Average = (5+14)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 2ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "3.00 ms",
      "1.67 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+2. Average = (6+8)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "3.00 ms",
      "4.00 ms",
      "2.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 34 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "First-Fit",
      "Best-Fit",
      "Worst-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.33 ms",
      "4.00 ms",
      "5.67 ms",
      "7.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "4.00 ms",
      "8.00 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+8. Average = (8+16)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 52 KB in the very first free block that is large enough?",
    "options": [
      "Worst-Fit",
      "None of these",
      "Best-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 4ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "2.00 ms",
      "2.00 ms",
      "4.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+4. Average = (4+8)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 20 KB in the very first free block that is large enough?",
    "options": [
      "Best-Fit",
      "Worst-Fit",
      "First-Fit",
      "None of these"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 48 KB in the very first free block that is large enough?",
    "options": [
      "Worst-Fit",
      "None of these",
      "First-Fit",
      "Best-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "4.67 ms",
      "6.33 ms",
      "6.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 18 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "Best-Fit",
      "First-Fit",
      "Worst-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 3ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "4.00 ms",
      "2.33 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+3. Average = (5+8)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "3.00 ms",
      "3.00 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "5.67 ms",
      "6.33 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 6ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "3.33 ms",
      "4.00 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+6. Average = (2+8)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 24 KB in the very first free block that is large enough?",
    "options": [
      "Worst-Fit",
      "None of these",
      "First-Fit",
      "Best-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 6ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "3.33 ms",
      "5.33 ms",
      "3.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+6. Average = (2+8)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "5.33 ms",
      "8.00 ms",
      "8.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+9. Average = (8+17)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "8.00 ms",
      "5.00 ms",
      "9.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+9. Average = (9+18)/3 = 9.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 3ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "3.33 ms",
      "4.33 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+3. Average = (6+9)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 15 KB in the very first free block that is large enough?",
    "options": [
      "Best-Fit",
      "None of these",
      "First-Fit",
      "Worst-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 3ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "6.00 ms",
      "4.00 ms",
      "7.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+3. Average = (9+12)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 27 KB in the very first free block that is large enough?",
    "options": [
      "First-Fit",
      "Worst-Fit",
      "None of these",
      "Best-Fit"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "7.67 ms",
      "8.00 ms",
      "5.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "5.33 ms",
      "4.67 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+4. Average = (5+9)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 59 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "Worst-Fit",
      "First-Fit",
      "Best-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "4.67 ms",
      "7.67 ms",
      "8.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+9. Average = (8+17)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "3.33 ms",
      "1.67 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 4ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "4.67 ms",
      "3.33 ms",
      "2.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+4. Average = (7+11)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "4.33 ms",
      "1.67 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "3.33 ms",
      "5.67 ms",
      "5.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 4ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "3.33 ms",
      "4.67 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+4. Average = (5+9)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "1.67 ms",
      "2.00 ms",
      "2.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.00 ms",
      "2.00 ms",
      "3.00 ms",
      "3.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 10 KB in the very first free block that is large enough?",
    "options": [
      "Best-Fit",
      "First-Fit",
      "None of these",
      "Worst-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "1.67 ms",
      "3.00 ms",
      "1.67 ms",
      "2.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 23 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "Best-Fit",
      "Worst-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 14 KB in the very first free block that is large enough?",
    "options": [
      "First-Fit",
      "Worst-Fit",
      "None of these",
      "Best-Fit"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "2.33 ms",
      "3.33 ms",
      "3.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "4.33 ms",
      "5.33 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 32 KB in the very first free block that is large enough?",
    "options": [
      "First-Fit",
      "None of these",
      "Best-Fit",
      "Worst-Fit"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "3.67 ms",
      "6.33 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "3.67 ms",
      "1.33 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+2. Average = (7+9)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "1.33 ms",
      "4.33 ms",
      "3.67 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 46 KB in the very first free block that is large enough?",
    "options": [
      "Best-Fit",
      "First-Fit",
      "None of these",
      "Worst-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "1.67 ms",
      "4.67 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 6ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "4.33 ms",
      "3.33 ms",
      "2.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+6. Average = (2+8)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 5ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "3.00 ms",
      "3.67 ms",
      "2.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+5. Average = (2+7)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "3.00 ms",
      "2.00 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "3.67 ms",
      "2.33 ms",
      "5.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "7.67 ms",
      "3.33 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "4.67 ms",
      "3.33 ms",
      "2.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "4.00 ms",
      "5.00 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+3. Average = (5+8)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 47 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "Worst-Fit",
      "Best-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "3.67 ms",
      "4.00 ms",
      "5.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 6ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "8.00 ms",
      "7.33 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+6. Average = (9+15)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "4.00 ms",
      "2.67 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 5ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "3.67 ms",
      "2.00 ms",
      "2.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+5. Average = (4+9)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 5ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "5.00 ms",
      "3.33 ms",
      "5.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+5. Average = (6+11)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 2ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "5.67 ms",
      "6.00 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+2. Average = (8+10)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 5ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "4.00 ms",
      "3.00 ms",
      "3.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+5. Average = (2+7)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.67 ms",
      "4.33 ms",
      "7.00 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 12 KB in the very first free block that is large enough?",
    "options": [
      "First-Fit",
      "None of these",
      "Best-Fit",
      "Worst-Fit"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "5.00 ms",
      "6.67 ms",
      "2.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 16 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "First-Fit",
      "Worst-Fit",
      "Best-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 3ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "3.67 ms",
      "7.00 ms",
      "5.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+3. Average = (9+12)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 53 KB in the very first free block that is large enough?",
    "options": [
      "Worst-Fit",
      "Best-Fit",
      "First-Fit",
      "None of these"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.67 ms",
      "3.67 ms",
      "3.33 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "5.00 ms",
      "6.00 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "9.00 ms",
      "5.67 ms",
      "8.67 ms",
      "5.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+9. Average = (9+18)/3 = 9.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "4.33 ms",
      "6.33 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 26 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "Worst-Fit",
      "Best-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "4.67 ms",
      "2.00 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+8. Average = (2+10)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "6.67 ms",
      "7.00 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+8. Average = (6+14)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "3.00 ms",
      "6.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "4.67 ms",
      "4.33 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 2ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "1.67 ms",
      "4.00 ms",
      "5.33 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+2. Average = (7+9)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "4.00 ms",
      "1.67 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 6ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "4.33 ms",
      "7.33 ms",
      "6.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+6. Average = (8+14)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 13 KB in the very first free block that is large enough?",
    "options": [
      "Best-Fit",
      "Worst-Fit",
      "First-Fit",
      "None of these"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "2.67 ms",
      "2.33 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 2ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "2.67 ms",
      "4.00 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+2. Average = (3+5)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "3.67 ms",
      "6.33 ms",
      "8.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "2.67 ms",
      "4.33 ms",
      "6.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 4ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "2.33 ms",
      "6.67 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+4. Average = (8+12)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 8ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "5.33 ms",
      "6.00 ms",
      "4.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+8. Average = (2+10)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 5ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "5.33 ms",
      "3.67 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+5. Average = (5+10)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 2ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "3.33 ms",
      "3.00 ms",
      "2.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+2. Average = (3+5)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "1.33 ms",
      "2.67 ms",
      "1.67 ms",
      "2.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+2. Average = (3+5)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 41 KB in the very first free block that is large enough?",
    "options": [
      "First-Fit",
      "Best-Fit",
      "Worst-Fit",
      "None of these"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 6ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "8.00 ms",
      "2.67 ms",
      "5.67 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+6. Average = (9+15)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "3.00 ms",
      "3.00 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 2ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "2.67 ms",
      "2.33 ms",
      "2.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+2. Average = (3+5)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "3.00 ms",
      "5.00 ms",
      "5.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "5.00 ms",
      "3.67 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 3ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "4.67 ms",
      "3.67 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+3. Average = (6+9)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "3.67 ms",
      "4.33 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 7ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "8.33 ms",
      "8.00 ms",
      "5.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+7. Average = (9+16)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "6.67 ms",
      "5.67 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 5ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "4.33 ms",
      "3.33 ms",
      "2.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+5. Average = (3+8)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 6ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "7.33 ms",
      "7.67 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+6. Average = (8+14)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "5.00 ms",
      "4.67 ms",
      "2.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 6ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "3.00 ms",
      "4.33 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+6. Average = (4+10)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 3ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "1.67 ms",
      "4.33 ms",
      "2.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+3. Average = (5+8)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "2.67 ms",
      "3.33 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "8.33 ms",
      "8.33 ms",
      "5.33 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+7. Average = (9+16)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 6ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "8.00 ms",
      "6.67 ms",
      "4.67 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+6. Average = (9+15)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 5ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "2.33 ms",
      "1.33 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+5. Average = (2+7)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 29 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "Best-Fit",
      "First-Fit",
      "Worst-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "5.67 ms",
      "7.00 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+3. Average = (9+12)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 8ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "6.33 ms",
      "4.33 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+8. Average = (6+14)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "3.00 ms",
      "5.67 ms",
      "6.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "5.67 ms",
      "3.33 ms",
      "6.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 7ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "4.33 ms",
      "5.67 ms",
      "6.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+7. Average = (5+12)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 5ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "3.33 ms",
      "5.00 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+5. Average = (5+10)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "3.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+4. Average = (4+8)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 5ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "4.00 ms",
      "4.67 ms",
      "5.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+5. Average = (3+8)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "5.00 ms",
      "3.67 ms",
      "3.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 3ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "1.67 ms",
      "2.67 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+3. Average = (6+9)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 8ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "6.00 ms",
      "3.33 ms",
      "8.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+8. Average = (8+16)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "4.67 ms",
      "5.00 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+4. Average = (5+9)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 6ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "4.67 ms",
      "2.67 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+6. Average = (5+11)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 3ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "6.00 ms",
      "5.00 ms",
      "5.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+3. Average = (6+9)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 4ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "2.33 ms",
      "2.00 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+4. Average = (5+9)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 5ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "4.00 ms",
      "5.67 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+5. Average = (5+10)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 6ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "3.33 ms",
      "7.33 ms",
      "2.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+6. Average = (8+14)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "3.33 ms",
      "5.00 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 5ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "4.00 ms",
      "2.33 ms",
      "2.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+5. Average = (5+10)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "3.67 ms",
      "8.33 ms",
      "6.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+9. Average = (8+17)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 7ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "8.33 ms",
      "5.00 ms",
      "7.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+7. Average = (9+16)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 42 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "First-Fit",
      "Worst-Fit",
      "Best-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "6.33 ms",
      "5.00 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 4ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "4.67 ms",
      "4.67 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+4. Average = (5+9)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "3.67 ms",
      "2.33 ms",
      "4.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+7. Average = (3+10)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 5ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "5.00 ms",
      "4.33 ms",
      "2.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+5. Average = (5+10)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "6.67 ms",
      "5.33 ms",
      "6.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+4. Average = (8+12)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "3.33 ms",
      "2.00 ms",
      "3.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "3.00 ms",
      "5.33 ms",
      "6.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "3.67 ms",
      "6.00 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+7. Average = (2+9)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 19 KB in the very first free block that is large enough?",
    "options": [
      "First-Fit",
      "Worst-Fit",
      "Best-Fit",
      "None of these"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "1.67 ms",
      "4.33 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 57 KB in the very first free block that is large enough?",
    "options": [
      "None of these",
      "Best-Fit",
      "First-Fit",
      "Worst-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "5.33 ms",
      "5.67 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+8. Average = (4+12)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 5ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "4.33 ms",
      "4.00 ms",
      "2.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+5. Average = (4+9)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "4.33 ms",
      "5.67 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+7. Average = (3+10)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 2ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "2.67 ms",
      "2.67 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+2. Average = (3+5)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 8ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "3.33 ms",
      "5.33 ms",
      "2.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+8. Average = (4+12)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "3.00 ms",
      "2.33 ms",
      "2.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 7ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "4.33 ms",
      "3.67 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+7. Average = (3+10)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 6ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "6.67 ms",
      "5.00 ms",
      "7.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+6. Average = (7+13)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "6.00 ms",
      "3.67 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "3.33 ms",
      "5.67 ms",
      "5.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+7. Average = (5+12)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "4.00 ms",
      "3.00 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 5ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "7.67 ms",
      "3.67 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+5. Average = (9+14)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 9ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "4.33 ms",
      "7.33 ms",
      "9.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+9. Average = (9+18)/3 = 9.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 6ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "7.33 ms",
      "5.33 ms",
      "7.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+6. Average = (8+14)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 3ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "2.33 ms",
      "3.67 ms",
      "2.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+3. Average = (4+7)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 4ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "5.33 ms",
      "3.00 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+4. Average = (7+11)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "6.00 ms",
      "4.33 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 6ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "1.67 ms",
      "3.00 ms",
      "3.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+6. Average = (2+8)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 5ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "4.33 ms",
      "7.00 ms",
      "7.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+5. Average = (8+13)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 6ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "6.00 ms",
      "4.00 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+6. Average = (5+11)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "5.33 ms",
      "4.00 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+8. Average = (4+12)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 6ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.67 ms",
      "5.67 ms",
      "4.67 ms",
      "8.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+6. Average = (9+15)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "3.33 ms",
      "4.33 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+4. Average = (3+7)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "5.00 ms",
      "8.00 ms",
      "7.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+8. Average = (8+16)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "4.00 ms",
      "6.67 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "7.33 ms",
      "5.33 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+9. Average = (6+15)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "8.67 ms",
      "5.33 ms",
      "8.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "3.00 ms",
      "6.00 ms",
      "5.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "2.67 ms",
      "2.00 ms",
      "1.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 2ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "3.67 ms",
      "4.33 ms",
      "1.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+2. Average = (8+10)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "3.67 ms",
      "6.00 ms",
      "7.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 2ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "6.00 ms",
      "2.67 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+2. Average = (8+10)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "3.33 ms",
      "5.67 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.00 ms",
      "3.00 ms",
      "2.33 ms",
      "2.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 2ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "3.33 ms",
      "4.67 ms",
      "2.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+2. Average = (6+8)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "3.00 ms",
      "4.00 ms",
      "1.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 9ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "3.33 ms",
      "7.00 ms",
      "6.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+9. Average = (6+15)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 6ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "4.67 ms",
      "6.67 ms",
      "5.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+6. Average = (7+13)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "7.00 ms",
      "6.33 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+9. Average = (5+14)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 6ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "2.67 ms",
      "2.00 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+6. Average = (4+10)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "5.00 ms",
      "3.67 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "7.33 ms",
      "5.33 ms",
      "8.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "1.67 ms",
      "3.00 ms",
      "3.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 6ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "4.33 ms",
      "3.00 ms",
      "3.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+6. Average = (2+8)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 5ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "7.00 ms",
      "5.00 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+5. Average = (8+13)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 8ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "3.00 ms",
      "3.67 ms",
      "5.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+8. Average = (6+14)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 6ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.00 ms",
      "3.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+6. Average = (2+8)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "5.00 ms",
      "6.33 ms",
      "3.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 5ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "5.00 ms",
      "3.67 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+5. Average = (3+8)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "3.00 ms",
      "2.67 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "6.00 ms",
      "3.67 ms",
      "6.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+4. Average = (7+11)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "3.67 ms",
      "2.67 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "2.00 ms",
      "3.67 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+7. Average = (2+9)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "5.67 ms",
      "3.00 ms",
      "4.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+8. Average = (2+10)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 8ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "7.00 ms",
      "8.00 ms",
      "4.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+8. Average = (8+16)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 7ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "8.33 ms",
      "3.67 ms",
      "6.00 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+7. Average = (9+16)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 2ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.00 ms",
      "3.67 ms",
      "3.00 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+2. Average = (2+4)/3 = 2.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 5ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "3.00 ms",
      "4.67 ms",
      "4.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+5. Average = (4+9)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "5.67 ms",
      "4.67 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "3.33 ms",
      "5.00 ms",
      "2.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 6ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "5.67 ms",
      "6.67 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+6. Average = (7+13)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "4.33 ms",
      "3.33 ms",
      "3.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 2ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "6.00 ms",
      "5.00 ms",
      "2.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+2. Average = (8+10)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 8ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "1.67 ms",
      "4.00 ms",
      "4.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+8. Average = (2+10)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "6.00 ms",
      "8.67 ms",
      "8.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "8.67 ms",
      "5.67 ms",
      "8.33 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "2.00 ms",
      "2.67 ms",
      "2.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "1.33 ms",
      "1.67 ms",
      "2.33 ms",
      "2.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "2.33 ms",
      "4.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 4ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "6.00 ms",
      "6.67 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+4. Average = (7+11)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "8.00 ms",
      "5.67 ms",
      "8.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+8. Average = (8+16)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "6.67 ms",
      "3.67 ms",
      "1.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 6ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "5.00 ms",
      "3.67 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+6. Average = (4+10)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 4ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "4.00 ms",
      "2.33 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+4. Average = (5+9)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 6ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "6.33 ms",
      "4.00 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+6. Average = (7+13)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 6ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "5.00 ms",
      "3.00 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+6. Average = (5+11)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "4.67 ms",
      "5.67 ms",
      "5.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "5.33 ms",
      "6.33 ms",
      "3.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 4ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "4.33 ms",
      "3.33 ms",
      "5.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+4. Average = (3+7)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 5ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "7.67 ms",
      "3.00 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+5. Average = (9+14)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "7.00 ms",
      "8.67 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "6.67 ms",
      "4.33 ms",
      "7.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 5ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "3.00 ms",
      "3.67 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+5. Average = (3+8)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "5.67 ms",
      "4.00 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "7.67 ms",
      "7.33 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "4.00 ms",
      "2.67 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "5.67 ms",
      "4.00 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+7. Average = (5+12)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "3.33 ms",
      "3.00 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 5ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "3.67 ms",
      "5.67 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+5. Average = (6+11)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "4.67 ms",
      "3.33 ms",
      "6.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+9. Average = (5+14)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "2.67 ms",
      "3.00 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "6.33 ms",
      "3.00 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 6ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "4.33 ms",
      "5.33 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+6. Average = (5+11)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "6.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "5.33 ms",
      "4.00 ms",
      "6.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 5ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "5.00 ms",
      "4.33 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+5. Average = (5+10)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 5ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "4.67 ms",
      "6.33 ms",
      "7.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+5. Average = (8+13)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "6.67 ms",
      "5.00 ms",
      "4.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 5ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "5.00 ms",
      "5.67 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+5. Average = (6+11)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.67 ms",
      "6.67 ms",
      "3.67 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "2.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 5ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "3.67 ms",
      "3.67 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+5. Average = (3+8)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "7.67 ms",
      "4.67 ms",
      "9.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+9. Average = (9+18)/3 = 9.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "4.33 ms",
      "6.00 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "4.00 ms",
      "4.00 ms",
      "3.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 2ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "5.33 ms",
      "3.67 ms",
      "2.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+2. Average = (7+9)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "6.00 ms",
      "3.00 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 6ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "2.67 ms",
      "4.67 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+6. Average = (4+10)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 6ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "5.00 ms",
      "5.67 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+6. Average = (2+8)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 4ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "6.00 ms",
      "3.00 ms",
      "2.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+4. Average = (7+11)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "5.33 ms",
      "5.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+3. Average = (6+9)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "5.00 ms",
      "6.33 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.33 ms",
      "4.00 ms",
      "3.67 ms",
      "6.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 6ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "1.33 ms",
      "3.33 ms",
      "3.33 ms",
      "2.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+6. Average = (2+8)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "4.00 ms",
      "7.33 ms",
      "5.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "4.33 ms",
      "5.67 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 6ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "8.00 ms",
      "6.33 ms",
      "4.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+6. Average = (9+15)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 6ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "6.00 ms",
      "4.67 ms",
      "6.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+6. Average = (6+12)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "4.67 ms",
      "8.33 ms",
      "7.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+9. Average = (8+17)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 2ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "2.00 ms",
      "3.00 ms",
      "2.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+2. Average = (2+4)/3 = 2.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.67 ms",
      "4.67 ms",
      "8.33 ms",
      "5.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+7. Average = (9+16)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 5ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "3.00 ms",
      "2.33 ms",
      "3.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+5. Average = (2+7)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "7.67 ms",
      "4.33 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 5ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "4.33 ms",
      "3.67 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+5. Average = (4+9)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 2ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "2.00 ms",
      "2.00 ms",
      "2.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+2. Average = (2+4)/3 = 2.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 8ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.33 ms",
      "5.33 ms",
      "4.67 ms",
      "6.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+8. Average = (6+14)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "8.67 ms",
      "4.67 ms",
      "7.33 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "3.67 ms",
      "6.00 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 4ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "3.33 ms",
      "2.33 ms",
      "2.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+4. Average = (3+7)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "4.67 ms",
      "3.33 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+4. Average = (3+7)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 8ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "3.00 ms",
      "5.33 ms",
      "5.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+8. Average = (4+12)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "6.67 ms",
      "3.33 ms",
      "6.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+4. Average = (8+12)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 8ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "4.67 ms",
      "4.00 ms",
      "6.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+8. Average = (6+14)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 7ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "6.67 ms",
      "4.33 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+7. Average = (5+12)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "3.67 ms",
      "3.33 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 6ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "4.00 ms",
      "5.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+6. Average = (4+10)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 6ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "6.00 ms",
      "6.00 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+6. Average = (6+12)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "6.67 ms",
      "3.67 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 5ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "6.33 ms",
      "5.00 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+5. Average = (5+10)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "5.67 ms",
      "5.00 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+2. Average = (7+9)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "5.33 ms",
      "4.33 ms",
      "2.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "7.33 ms",
      "3.67 ms",
      "6.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "4.00 ms",
      "1.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+2. Average = (8+10)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 8ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "5.33 ms",
      "3.67 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+8. Average = (4+12)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 4ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "6.00 ms",
      "2.67 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+4. Average = (7+11)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 5ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "3.33 ms",
      "3.00 ms",
      "1.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+5. Average = (2+7)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 3ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "3.67 ms",
      "2.33 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+3. Average = (4+7)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "7.00 ms",
      "5.33 ms",
      "6.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "4.67 ms",
      "3.67 ms",
      "2.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "3.67 ms",
      "6.67 ms",
      "6.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "6.00 ms",
      "5.33 ms",
      "6.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+2. Average = (8+10)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "3.33 ms",
      "5.00 ms",
      "2.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 2ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "4.67 ms",
      "4.00 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+2. Average = (7+9)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "8.67 ms",
      "6.67 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "2.33 ms",
      "5.33 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+9. Average = (5+14)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "6.33 ms",
      "3.33 ms",
      "4.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 2ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "5.00 ms",
      "3.00 ms",
      "6.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+2. Average = (8+10)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 8ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "5.33 ms",
      "2.67 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+8. Average = (2+10)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 6ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "2.67 ms",
      "3.00 ms",
      "6.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+6. Average = (7+13)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "7.67 ms",
      "5.00 ms",
      "7.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 4ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "4.00 ms",
      "4.00 ms",
      "2.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+4. Average = (4+8)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "3.33 ms",
      "1.67 ms",
      "2.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "6.33 ms",
      "3.67 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "6.33 ms",
      "6.33 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 4ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "4.00 ms",
      "2.33 ms",
      "2.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+4. Average = (4+8)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "5.67 ms",
      "5.67 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "7.67 ms",
      "6.00 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 8ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "4.67 ms",
      "3.33 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+8. Average = (4+12)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "6.33 ms",
      "8.33 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+7. Average = (9+16)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 6ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "4.00 ms",
      "6.00 ms",
      "8.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+6. Average = (9+15)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 5ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "5.67 ms",
      "7.00 ms",
      "3.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+5. Average = (8+13)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "5.67 ms",
      "5.33 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+7. Average = (5+12)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "3.00 ms",
      "5.33 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+7. Average = (5+12)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "3.00 ms",
      "5.67 ms",
      "4.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 5ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "6.33 ms",
      "5.67 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+5. Average = (6+11)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.67 ms",
      "6.67 ms",
      "5.00 ms",
      "5.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+8. Average = (6+14)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "4.00 ms",
      "2.33 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 5ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "7.67 ms",
      "4.67 ms",
      "6.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+5. Average = (9+14)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "5.33 ms",
      "3.67 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "5.67 ms",
      "3.67 ms",
      "4.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+8. Average = (2+10)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 6ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "4.00 ms",
      "8.00 ms",
      "5.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+6. Average = (9+15)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 6ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "2.67 ms",
      "2.67 ms",
      "6.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+6. Average = (6+12)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 6ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "6.67 ms",
      "3.00 ms",
      "3.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+6. Average = (7+13)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "2.33 ms",
      "4.67 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+7. Average = (2+9)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "3.67 ms",
      "4.00 ms",
      "8.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+9. Average = (8+17)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "2.67 ms",
      "5.67 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "5.67 ms",
      "6.00 ms",
      "4.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+4. Average = (7+11)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 7ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "3.00 ms",
      "4.33 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+7. Average = (3+10)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "5.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "8.33 ms",
      "4.00 ms",
      "7.00 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+7. Average = (9+16)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "2.67 ms",
      "6.67 ms",
      "5.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "4.67 ms",
      "3.67 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "6.67 ms",
      "4.33 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 7ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "3.00 ms",
      "4.67 ms",
      "5.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+7. Average = (5+12)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 7ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "2.67 ms",
      "3.67 ms",
      "4.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+7. Average = (2+9)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 6ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "6.00 ms",
      "6.67 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+6. Average = (7+13)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 5ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "4.33 ms",
      "4.00 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+5. Average = (6+11)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "5.33 ms",
      "3.67 ms",
      "6.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+8. Average = (4+12)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 2ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "5.33 ms",
      "5.33 ms",
      "6.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+2. Average = (7+9)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "7.67 ms",
      "4.67 ms",
      "7.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+9. Average = (6+15)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 2ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "4.67 ms",
      "2.00 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+2. Average = (8+10)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 8ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "7.33 ms",
      "4.67 ms",
      "8.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+8. Average = (8+16)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "6.33 ms",
      "5.00 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+4. Average = (8+12)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "4.67 ms",
      "3.67 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 5ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "3.00 ms",
      "4.67 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+5. Average = (5+10)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 2ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "2.00 ms",
      "1.67 ms",
      "1.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+2. Average = (2+4)/3 = 2.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "2.67 ms",
      "3.33 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+2. Average = (3+5)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "7.67 ms",
      "4.00 ms",
      "6.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 5ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "7.00 ms",
      "5.33 ms",
      "7.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+5. Average = (9+14)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 5ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "6.67 ms",
      "5.00 ms",
      "7.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+5. Average = (9+14)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "8.33 ms",
      "4.33 ms",
      "3.67 ms",
      "6.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+7. Average = (9+16)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "3.67 ms",
      "4.33 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+3. Average = (4+7)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 6ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "4.67 ms",
      "6.33 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+6. Average = (4+10)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "7.00 ms",
      "2.67 ms",
      "5.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+9. Average = (6+15)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 3ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "1.67 ms",
      "3.67 ms",
      "2.00 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+3. Average = (4+7)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 6ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "6.00 ms",
      "4.33 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+6. Average = (6+12)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "4.00 ms",
      "2.33 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "2.33 ms",
      "4.67 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "4.00 ms",
      "6.33 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 8ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "2.33 ms",
      "5.00 ms",
      "4.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+8. Average = (2+10)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 5ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "2.67 ms",
      "4.67 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+5. Average = (6+11)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 4ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "2.00 ms",
      "2.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+4. Average = (3+7)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 5ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "7.00 ms",
      "4.67 ms",
      "7.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+5. Average = (8+13)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "3.33 ms",
      "6.33 ms",
      "5.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 8ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "3.67 ms",
      "3.67 ms",
      "8.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+8. Average = (8+16)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 9ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "4.33 ms",
      "3.00 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+9. Average = (5+14)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "5.00 ms",
      "4.33 ms",
      "2.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+7. Average = (3+10)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 3ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "4.00 ms",
      "5.33 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+3. Average = (4+7)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "4.00 ms",
      "4.00 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 5ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "4.33 ms",
      "3.33 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+5. Average = (8+13)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 6ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "4.67 ms",
      "6.00 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+6. Average = (4+10)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "2.00 ms",
      "3.33 ms",
      "1.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 3ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "7.00 ms",
      "5.00 ms",
      "2.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+3. Average = (9+12)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 8ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "8.00 ms",
      "5.33 ms",
      "8.00 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+8. Average = (8+16)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "7.33 ms",
      "3.33 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 4ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "4.33 ms",
      "2.67 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+4. Average = (5+9)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 2ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "3.67 ms",
      "3.67 ms",
      "2.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+2. Average = (2+4)/3 = 2.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 2ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "4.67 ms",
      "4.00 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+2. Average = (6+8)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 2ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "5.00 ms",
      "3.67 ms",
      "5.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+2. Average = (6+8)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "1.67 ms",
      "2.33 ms",
      "2.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 3ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "2.00 ms",
      "5.00 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+3. Average = (6+9)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "4.67 ms",
      "5.33 ms",
      "3.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+7. Average = (2+9)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "3.33 ms",
      "4.00 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "7.33 ms",
      "5.33 ms",
      "6.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "3.33 ms",
      "5.67 ms",
      "5.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+7. Average = (5+12)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 3ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "7.00 ms",
      "1.67 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+3. Average = (9+12)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 2ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "4.33 ms",
      "4.67 ms",
      "3.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+2. Average = (6+8)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "7.00 ms",
      "3.33 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+3. Average = (9+12)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "7.67 ms",
      "5.00 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 4ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "5.67 ms",
      "4.33 ms",
      "6.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+4. Average = (8+12)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "2.33 ms",
      "5.00 ms",
      "4.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 6ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "2.33 ms",
      "4.33 ms",
      "2.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+6. Average = (5+11)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.67 ms",
      "6.00 ms",
      "5.33 ms",
      "8.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "2.67 ms",
      "5.67 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "5.67 ms",
      "4.67 ms",
      "7.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "6.67 ms",
      "6.33 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 5ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "3.33 ms",
      "2.33 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+5. Average = (8+13)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 9ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "6.00 ms",
      "7.00 ms",
      "8.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+9. Average = (6+15)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 6ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "3.67 ms",
      "6.00 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+6. Average = (6+12)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 2ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "2.67 ms",
      "5.00 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+2. Average = (7+9)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "5.33 ms",
      "4.00 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+4. Average = (4+8)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "4.00 ms",
      "4.67 ms",
      "4.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+4. Average = (5+9)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "2.67 ms",
      "3.67 ms",
      "3.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+3. Average = (4+7)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "5.33 ms",
      "3.67 ms",
      "6.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "7.00 ms",
      "4.67 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.00 ms",
      "7.33 ms",
      "5.00 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 4ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "4.00 ms",
      "4.33 ms",
      "5.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+4. Average = (4+8)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "3.00 ms",
      "1.33 ms",
      "2.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 2ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.00 ms",
      "2.67 ms",
      "2.67 ms",
      "1.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+2. Average = (3+5)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 9ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "4.67 ms",
      "7.67 ms",
      "6.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+9. Average = (5+14)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 6ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.00 ms",
      "4.33 ms",
      "5.00 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+6. Average = (8+14)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 7ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "1.67 ms",
      "4.00 ms",
      "4.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+7. Average = (3+10)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "2.67 ms",
      "3.33 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+3. Average = (5+8)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 5ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.33 ms",
      "4.33 ms",
      "7.67 ms",
      "5.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+5. Average = (9+14)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "5.33 ms",
      "4.00 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 4ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "4.00 ms",
      "3.00 ms",
      "2.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+4. Average = (3+7)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "7.67 ms",
      "8.67 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "4.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "4.67 ms",
      "3.67 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+3. Average = (4+7)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 5ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "5.67 ms",
      "5.67 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+5. Average = (6+11)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "4.67 ms",
      "2.33 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 9ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "9.00 ms",
      "9.00 ms",
      "6.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+9. Average = (9+18)/3 = 9.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "4.00 ms",
      "2.67 ms",
      "2.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "5.67 ms",
      "2.00 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 6ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "5.33 ms",
      "5.67 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+6. Average = (5+11)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "9.00 ms",
      "3.67 ms",
      "6.67 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+9. Average = (9+18)/3 = 9.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "4.00 ms",
      "3.33 ms",
      "2.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+2. Average = (2+4)/3 = 2.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "3.00 ms",
      "3.33 ms",
      "2.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "5.00 ms",
      "3.33 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "2.00 ms",
      "4.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "1.33 ms",
      "2.00 ms",
      "2.00 ms",
      "1.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+2. Average = (2+4)/3 = 2.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 9ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "8.67 ms",
      "8.33 ms",
      "6.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+9. Average = (8+17)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "4.33 ms",
      "3.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "5.00 ms",
      "3.33 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+4. Average = (3+7)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "4.00 ms",
      "7.00 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 3ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "4.33 ms",
      "2.00 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+3. Average = (5+8)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.33 ms",
      "5.67 ms",
      "4.33 ms",
      "6.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+9. Average = (5+14)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.67 ms",
      "7.33 ms",
      "4.33 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "6.67 ms",
      "5.33 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 5ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.67 ms",
      "2.67 ms",
      "5.67 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+5. Average = (9+14)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 5ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "5.67 ms",
      "4.33 ms",
      "2.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+5. Average = (6+11)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "3.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "5.00 ms",
      "2.67 ms",
      "5.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "7.67 ms",
      "4.67 ms",
      "7.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "7.67 ms",
      "7.00 ms",
      "5.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 4ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.00 ms",
      "5.67 ms",
      "4.33 ms",
      "6.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+4. Average = (8+12)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.33 ms",
      "4.00 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "4.00 ms",
      "3.67 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+4. Average = (4+8)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 8ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "5.33 ms",
      "6.67 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+8. Average = (4+12)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 6ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "6.00 ms",
      "3.00 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+6. Average = (6+12)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "4.00 ms",
      "7.67 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 8ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "5.33 ms",
      "3.33 ms",
      "2.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+8. Average = (6+14)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "3.67 ms",
      "6.33 ms",
      "2.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "4.33 ms",
      "3.33 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.33 ms",
      "2.67 ms",
      "5.67 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+9. Average = (5+14)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "5.67 ms",
      "4.33 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 3ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "3.67 ms",
      "4.33 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+3. Average = (5+8)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "4.67 ms",
      "5.67 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "5.33 ms",
      "6.33 ms",
      "4.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+7. Average = (3+10)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "9.00 ms",
      "5.33 ms",
      "8.33 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+9. Average = (9+18)/3 = 9.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "3.33 ms",
      "4.33 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 5ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "4.67 ms",
      "6.00 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+5. Average = (4+9)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 4ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.00 ms",
      "3.00 ms",
      "3.33 ms",
      "1.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+4. Average = (3+7)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 5ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "4.00 ms",
      "5.67 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+5. Average = (4+9)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "2.67 ms",
      "5.00 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+3. Average = (6+9)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 7ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "5.67 ms",
      "3.67 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+7. Average = (2+9)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 4ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "2.00 ms",
      "6.67 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+4. Average = (8+12)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 5ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "3.00 ms",
      "4.33 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+5. Average = (2+7)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "7.33 ms",
      "7.33 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "3.33 ms",
      "3.67 ms",
      "1.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+7. Average = (2+9)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 5ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "2.67 ms",
      "3.67 ms",
      "2.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+5. Average = (3+8)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 8ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "1.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+8. Average = (2+10)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 5ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "3.33 ms",
      "3.67 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+5. Average = (4+9)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.67 ms",
      "4.67 ms",
      "5.00 ms",
      "7.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "6.00 ms",
      "7.00 ms",
      "3.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+3. Average = (9+12)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "4.00 ms",
      "5.00 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+3. Average = (6+9)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 3ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "4.00 ms",
      "4.67 ms",
      "5.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+3. Average = (5+8)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 5ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "7.67 ms",
      "4.67 ms",
      "7.67 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+5. Average = (9+14)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "7.00 ms",
      "9.00 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+9. Average = (9+18)/3 = 9.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 7ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "1.33 ms",
      "3.67 ms",
      "3.00 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+7. Average = (2+9)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "3.67 ms",
      "6.67 ms",
      "7.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+9. Average = (6+15)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "4.00 ms",
      "6.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 2ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "3.00 ms",
      "2.33 ms",
      "2.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+2. Average = (3+5)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "5.00 ms",
      "5.67 ms",
      "2.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 6ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "7.33 ms",
      "4.00 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+6. Average = (8+14)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "6.33 ms",
      "4.00 ms",
      "6.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+4. Average = (7+11)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.00 ms",
      "2.67 ms",
      "3.67 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "6.33 ms",
      "5.67 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 6ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "5.33 ms",
      "3.33 ms",
      "6.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+6. Average = (6+12)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 5ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "1.67 ms",
      "3.67 ms",
      "2.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+5. Average = (3+8)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 2ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "3.00 ms",
      "5.33 ms",
      "5.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+2. Average = (7+9)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 4ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "4.00 ms",
      "5.33 ms",
      "6.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+4. Average = (8+12)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.33 ms",
      "8.00 ms",
      "5.67 ms",
      "7.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "5.00 ms",
      "7.33 ms",
      "7.00 ms",
      "5.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "4.33 ms",
      "5.33 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 6ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.67 ms",
      "5.33 ms",
      "4.67 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+6. Average = (5+11)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 2ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "2.67 ms",
      "2.67 ms",
      "2.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+2. Average = (2+4)/3 = 2.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 3ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "7.00 ms",
      "2.33 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+3. Average = (9+12)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.33 ms",
      "2.00 ms",
      "4.33 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.33 ms",
      "5.67 ms",
      "7.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "3.00 ms",
      "7.00 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+9. Average = (6+15)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 6ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "6.00 ms",
      "4.00 ms",
      "7.33 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+6. Average = (8+14)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 2ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "4.67 ms",
      "3.67 ms",
      "4.33 ms",
      "2.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+2. Average = (6+8)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling?",
    "options": [
      "3.67 ms",
      "4.33 ms",
      "3.00 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+3. Average = (5+8)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 1)",
    "options": [
      "2.67 ms",
      "4.33 ms",
      "5.33 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 2)",
    "options": [
      "4.67 ms",
      "6.33 ms",
      "5.67 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 5ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 3)",
    "options": [
      "3.33 ms",
      "3.00 ms",
      "4.67 ms",
      "4.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+5. Average = (4+9)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 4)",
    "options": [
      "4.00 ms",
      "4.67 ms",
      "2.00 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+8. Average = (2+10)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 5)",
    "options": [
      "3.00 ms",
      "4.33 ms",
      "3.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 6)",
    "options": [
      "3.67 ms",
      "5.33 ms",
      "6.33 ms",
      "3.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 7)",
    "options": [
      "5.00 ms",
      "5.00 ms",
      "8.00 ms",
      "7.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+8. Average = (8+16)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 47 KB in the very first free block that is large enough? (Set 8)",
    "options": [
      "None of these",
      "Worst-Fit",
      "Best-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 6ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 9)",
    "options": [
      "5.00 ms",
      "6.00 ms",
      "3.00 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+6. Average = (6+12)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 10)",
    "options": [
      "4.33 ms",
      "6.67 ms",
      "3.67 ms",
      "1.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 4ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 11)",
    "options": [
      "2.00 ms",
      "3.00 ms",
      "3.33 ms",
      "1.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+4. Average = (3+7)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 12)",
    "options": [
      "4.67 ms",
      "7.33 ms",
      "7.33 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 6ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 13)",
    "options": [
      "7.00 ms",
      "4.00 ms",
      "8.00 ms",
      "5.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+6. Average = (9+15)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 14)",
    "options": [
      "4.33 ms",
      "7.00 ms",
      "8.67 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 15)",
    "options": [
      "4.67 ms",
      "3.00 ms",
      "6.00 ms",
      "5.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 16)",
    "options": [
      "6.33 ms",
      "6.67 ms",
      "5.67 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 17)",
    "options": [
      "6.00 ms",
      "3.33 ms",
      "5.00 ms",
      "2.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 18)",
    "options": [
      "5.00 ms",
      "7.67 ms",
      "8.00 ms",
      "5.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 6ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 19)",
    "options": [
      "3.00 ms",
      "4.00 ms",
      "6.00 ms",
      "8.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+6. Average = (9+15)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 18 KB in the very first free block that is large enough? (Set 20)",
    "options": [
      "None of these",
      "Best-Fit",
      "First-Fit",
      "Worst-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 21)",
    "options": [
      "4.67 ms",
      "6.00 ms",
      "3.00 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 22)",
    "options": [
      "4.33 ms",
      "6.67 ms",
      "6.33 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 23)",
    "options": [
      "5.00 ms",
      "2.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 24)",
    "options": [
      "5.00 ms",
      "4.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 5ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 25)",
    "options": [
      "3.33 ms",
      "3.00 ms",
      "4.67 ms",
      "4.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+5. Average = (4+9)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 26)",
    "options": [
      "2.67 ms",
      "5.00 ms",
      "3.67 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 30 KB in the very first free block that is large enough? (Set 27)",
    "options": [
      "None of these",
      "First-Fit",
      "Best-Fit",
      "Worst-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 28)",
    "options": [
      "4.67 ms",
      "6.33 ms",
      "5.67 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 29)",
    "options": [
      "6.00 ms",
      "6.33 ms",
      "3.67 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 52 KB in the very first free block that is large enough? (Set 30)",
    "options": [
      "Worst-Fit",
      "None of these",
      "Best-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 23) (Set 31)",
    "options": [
      "5.00 ms",
      "2.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 32)",
    "options": [
      "2.67 ms",
      "6.00 ms",
      "3.67 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 57 KB in the very first free block that is large enough? (Set 33)",
    "options": [
      "None of these",
      "Best-Fit",
      "First-Fit",
      "Worst-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 26 KB in the very first free block that is large enough? (Set 34)",
    "options": [
      "None of these",
      "Worst-Fit",
      "Best-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 35)",
    "options": [
      "4.33 ms",
      "6.67 ms",
      "4.33 ms",
      "7.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Semaphore is? (Set 36)",
    "options": [
      "File descriptor",
      "Integer variable for process synchronization",
      "Process ID",
      "Memory address"
    ],
    "answer": 1,
    "explanation": "wait() decrements; signal() increments."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 18 KB in the very first free block that is large enough? (Set 20) (Set 37)",
    "options": [
      "None of these",
      "Best-Fit",
      "First-Fit",
      "Worst-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 38)",
    "options": [
      "6.00 ms",
      "3.67 ms",
      "6.33 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 5ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 39)",
    "options": [
      "3.67 ms",
      "3.00 ms",
      "4.67 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+5. Average = (2+7)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 2ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 40)",
    "options": [
      "2.33 ms",
      "4.67 ms",
      "4.00 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+2. Average = (7+9)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 41)",
    "options": [
      "4.67 ms",
      "7.00 ms",
      "5.33 ms",
      "6.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 42)",
    "options": [
      "5.67 ms",
      "5.33 ms",
      "3.67 ms",
      "6.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is? (Set 43)",
    "options": [
      "Random",
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Preemptive"
    ],
    "answer": 1,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 9ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 44)",
    "options": [
      "4.33 ms",
      "4.33 ms",
      "7.33 ms",
      "9.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+9. Average = (9+18)/3 = 9.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 45)",
    "options": [
      "5.67 ms",
      "7.33 ms",
      "3.33 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 46)",
    "options": [
      "7.33 ms",
      "4.00 ms",
      "5.67 ms",
      "7.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 47)",
    "options": [
      "3.33 ms",
      "4.33 ms",
      "5.67 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 48)",
    "options": [
      "3.67 ms",
      "5.67 ms",
      "6.33 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 49)",
    "options": [
      "5.00 ms",
      "7.33 ms",
      "5.33 ms",
      "6.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Dining Philosophers problem illustrates? (Set 50)",
    "options": [
      "Deadlock and synchronization challenges",
      "File systems",
      "Sorting efficiency",
      "Memory allocation"
    ],
    "answer": 0,
    "explanation": "Five philosophers, five forks, potential circular wait."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 51)",
    "options": [
      "2.67 ms",
      "2.67 ms",
      "2.00 ms",
      "1.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 52)",
    "options": [
      "4.67 ms",
      "6.67 ms",
      "3.33 ms",
      "6.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+4. Average = (8+12)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Context switching involves? (Set 53)",
    "options": [
      "Formatting disk",
      "Deleting process",
      "Creating new memory",
      "Saving current process state and loading another"
    ],
    "answer": 3,
    "explanation": "OS saves/restores PCB during context switch."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 54)",
    "options": [
      "4.67 ms",
      "7.67 ms",
      "4.67 ms",
      "9.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+9. Average = (9+18)/3 = 9.00 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Readers-Writers problem addresses? (Set 55)",
    "options": [
      "File compression",
      "CPU scheduling",
      "Memory allocation",
      "Concurrent access to shared data"
    ],
    "answer": 3,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 56)",
    "options": [
      "4.33 ms",
      "4.67 ms",
      "2.33 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 57)",
    "options": [
      "2.00 ms",
      "3.00 ms",
      "2.33 ms",
      "2.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 58)",
    "options": [
      "6.33 ms",
      "4.00 ms",
      "7.67 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 24) (Set 59)",
    "options": [
      "5.00 ms",
      "4.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 55 KB in the very first free block that is large enough? (Set 60)",
    "options": [
      "Worst-Fit",
      "Best-Fit",
      "First-Fit",
      "None of these"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 22) (Set 61)",
    "options": [
      "4.33 ms",
      "6.67 ms",
      "6.33 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 6ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 62)",
    "options": [
      "4.33 ms",
      "6.00 ms",
      "4.00 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+6. Average = (5+11)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 2ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 63)",
    "options": [
      "3.67 ms",
      "2.67 ms",
      "2.67 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+2. Average = (3+5)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 64)",
    "options": [
      "5.00 ms",
      "4.00 ms",
      "3.67 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+4. Average = (4+8)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 65)",
    "options": [
      "5.33 ms",
      "3.33 ms",
      "4.67 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+2. Average = (6+8)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 66)",
    "options": [
      "4.67 ms",
      "6.00 ms",
      "3.67 ms",
      "6.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+4. Average = (7+11)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 67)",
    "options": [
      "4.33 ms",
      "5.00 ms",
      "2.67 ms",
      "5.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 68)",
    "options": [
      "6.33 ms",
      "3.00 ms",
      "2.67 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 69)",
    "options": [
      "6.33 ms",
      "4.67 ms",
      "3.33 ms",
      "6.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+9. Average = (5+14)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 70)",
    "options": [
      "3.67 ms",
      "7.67 ms",
      "6.00 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 18 KB in the very first free block that is large enough? (Set 20) (Set 71)",
    "options": [
      "None of these",
      "Best-Fit",
      "First-Fit",
      "Worst-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 4ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 72)",
    "options": [
      "3.67 ms",
      "3.33 ms",
      "2.33 ms",
      "2.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+4. Average = (3+7)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 73)",
    "options": [
      "3.33 ms",
      "5.67 ms",
      "7.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 48) (Set 74)",
    "options": [
      "3.67 ms",
      "5.67 ms",
      "6.33 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 75)",
    "options": [
      "4.67 ms",
      "4.67 ms",
      "5.67 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 76)",
    "options": [
      "5.67 ms",
      "6.67 ms",
      "3.67 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 77)",
    "options": [
      "5.00 ms",
      "4.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 2ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 78)",
    "options": [
      "4.33 ms",
      "5.33 ms",
      "3.67 ms",
      "2.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+2. Average = (7+9)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 73) (Set 79)",
    "options": [
      "3.33 ms",
      "5.67 ms",
      "7.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 80)",
    "options": [
      "5.00 ms",
      "4.00 ms",
      "3.00 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 81)",
    "options": [
      "5.00 ms",
      "4.00 ms",
      "4.00 ms",
      "3.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Monitor is? (Set 82)",
    "options": [
      "Network monitor",
      "Disk management tool",
      "High-level synchronization construct with mutual exclusion",
      "Hardware device"
    ],
    "answer": 2,
    "explanation": "Encapsulates shared data with synchronized procedures."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 83)",
    "options": [
      "5.00 ms",
      "2.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Readers-Writers problem addresses? (Set 84)",
    "options": [
      "File compression",
      "CPU scheduling",
      "Memory allocation",
      "Concurrent access to shared data"
    ],
    "answer": 3,
    "explanation": "Multiple readers OK; writers need exclusive access."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 85)",
    "options": [
      "3.67 ms",
      "3.00 ms",
      "2.33 ms",
      "2.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 3ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 86)",
    "options": [
      "4.33 ms",
      "3.67 ms",
      "4.33 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+3. Average = (5+8)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 87)",
    "options": [
      "4.67 ms",
      "2.67 ms",
      "3.33 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 88)",
    "options": [
      "2.67 ms",
      "4.00 ms",
      "1.67 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 89)",
    "options": [
      "8.67 ms",
      "5.67 ms",
      "8.33 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 23) (Set 31) (Set 90)",
    "options": [
      "5.00 ms",
      "2.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 91)",
    "options": [
      "4.00 ms",
      "3.67 ms",
      "2.67 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 92)",
    "options": [
      "3.67 ms",
      "5.33 ms",
      "4.67 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+4. Average = (5+9)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 93)",
    "options": [
      "2.33 ms",
      "1.67 ms",
      "3.00 ms",
      "3.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 94)",
    "options": [
      "7.00 ms",
      "7.00 ms",
      "4.67 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 95)",
    "options": [
      "3.67 ms",
      "6.67 ms",
      "5.33 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 96)",
    "options": [
      "4.33 ms",
      "7.00 ms",
      "8.67 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 97)",
    "options": [
      "4.00 ms",
      "6.00 ms",
      "6.67 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+8. Average = (6+14)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 19 KB in the very first free block that is large enough? (Set 98)",
    "options": [
      "First-Fit",
      "Worst-Fit",
      "Best-Fit",
      "None of these"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 99)",
    "options": [
      "7.67 ms",
      "3.67 ms",
      "3.33 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 100)",
    "options": [
      "5.67 ms",
      "2.67 ms",
      "5.67 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Dining Philosophers problem illustrates? (Set 101)",
    "options": [
      "Deadlock and synchronization challenges",
      "File systems",
      "Sorting efficiency",
      "Memory allocation"
    ],
    "answer": 0,
    "explanation": "Five philosophers, five forks, potential circular wait."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 102)",
    "options": [
      "3.00 ms",
      "4.33 ms",
      "3.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 103)",
    "options": [
      "4.67 ms",
      "3.67 ms",
      "2.33 ms",
      "5.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 30 KB in the very first free block that is large enough? (Set 27) (Set 104)",
    "options": [
      "None of these",
      "First-Fit",
      "Best-Fit",
      "Worst-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 32) (Set 105)",
    "options": [
      "2.67 ms",
      "6.00 ms",
      "3.67 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 4ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 106)",
    "options": [
      "5.00 ms",
      "2.33 ms",
      "6.67 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+4. Average = (8+12)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 107)",
    "options": [
      "6.67 ms",
      "5.67 ms",
      "4.00 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 108)",
    "options": [
      "4.67 ms",
      "4.00 ms",
      "2.67 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 49 KB in the very first free block that is large enough? (Set 109)",
    "options": [
      "Worst-Fit",
      "None of these",
      "First-Fit",
      "Best-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "File allocation methods include? (Set 110)",
    "options": [
      "Only contiguous",
      "Only linked",
      "Only indexed",
      "Contiguous, Linked, Indexed"
    ],
    "answer": 3,
    "explanation": "Each has trade-offs in speed and fragmentation."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 111)",
    "options": [
      "3.33 ms",
      "6.00 ms",
      "5.33 ms",
      "6.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+2. Average = (8+10)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 112)",
    "options": [
      "2.67 ms",
      "5.33 ms",
      "4.00 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+8. Average = (4+12)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 113)",
    "options": [
      "3.33 ms",
      "4.67 ms",
      "3.67 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+3. Average = (4+7)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 114)",
    "options": [
      "4.33 ms",
      "5.00 ms",
      "2.67 ms",
      "5.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 115)",
    "options": [
      "6.33 ms",
      "5.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 116)",
    "options": [
      "4.33 ms",
      "6.67 ms",
      "4.33 ms",
      "7.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 6) (Set 117)",
    "options": [
      "3.67 ms",
      "5.33 ms",
      "6.33 ms",
      "3.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 118)",
    "options": [
      "5.33 ms",
      "7.67 ms",
      "5.00 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "System call is? (Set 119)",
    "options": [
      "Interface between user program and OS kernel",
      "Software bug",
      "Hardware interrupt",
      "Network protocol"
    ],
    "answer": 0,
    "explanation": "Programs request OS services via system calls."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 120)",
    "options": [
      "5.00 ms",
      "4.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 15 KB in the very first free block that is large enough? (Set 121)",
    "options": [
      "Best-Fit",
      "None of these",
      "First-Fit",
      "Worst-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 2) (Set 122)",
    "options": [
      "4.67 ms",
      "6.33 ms",
      "5.67 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 123)",
    "options": [
      "4.67 ms",
      "1.67 ms",
      "4.33 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 6ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 124)",
    "options": [
      "4.00 ms",
      "6.00 ms",
      "6.00 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+6. Average = (6+12)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 125)",
    "options": [
      "2.33 ms",
      "4.00 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 23) (Set 31) (Set 126)",
    "options": [
      "5.00 ms",
      "2.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 127)",
    "options": [
      "8.67 ms",
      "4.67 ms",
      "7.33 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 25 KB in the very first free block that is large enough? (Set 128)",
    "options": [
      "Best-Fit",
      "First-Fit",
      "Worst-Fit",
      "None of these"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 129)",
    "options": [
      "6.33 ms",
      "4.67 ms",
      "3.33 ms",
      "6.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+9. Average = (5+14)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 130)",
    "options": [
      "3.33 ms",
      "5.00 ms",
      "6.33 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 131)",
    "options": [
      "4.00 ms",
      "3.00 ms",
      "3.00 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 132)",
    "options": [
      "3.33 ms",
      "4.67 ms",
      "5.00 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+4. Average = (5+9)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 133)",
    "options": [
      "5.33 ms",
      "2.67 ms",
      "4.33 ms",
      "6.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 134)",
    "options": [
      "1.33 ms",
      "1.67 ms",
      "2.33 ms",
      "2.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 135)",
    "options": [
      "4.33 ms",
      "7.00 ms",
      "8.67 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 136)",
    "options": [
      "3.67 ms",
      "6.67 ms",
      "5.33 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 6ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 137)",
    "options": [
      "3.67 ms",
      "4.33 ms",
      "7.33 ms",
      "6.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+6. Average = (8+14)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 138)",
    "options": [
      "1.33 ms",
      "2.00 ms",
      "2.00 ms",
      "1.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+2. Average = (2+4)/3 = 2.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 139)",
    "options": [
      "5.67 ms",
      "2.00 ms",
      "4.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 140)",
    "options": [
      "2.00 ms",
      "4.00 ms",
      "3.00 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 8ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 141)",
    "options": [
      "6.67 ms",
      "5.33 ms",
      "3.33 ms",
      "2.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+8. Average = (6+14)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 5ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 142)",
    "options": [
      "4.33 ms",
      "4.00 ms",
      "5.67 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+5. Average = (4+9)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 143)",
    "options": [
      "1.33 ms",
      "4.33 ms",
      "3.67 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 144)",
    "options": [
      "3.33 ms",
      "4.33 ms",
      "1.67 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 145)",
    "options": [
      "4.67 ms",
      "6.67 ms",
      "3.33 ms",
      "6.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+4. Average = (8+12)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 6ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 146)",
    "options": [
      "5.67 ms",
      "7.33 ms",
      "7.67 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+6. Average = (8+14)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 147)",
    "options": [
      "5.00 ms",
      "6.33 ms",
      "4.00 ms",
      "6.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+4. Average = (7+11)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 148)",
    "options": [
      "3.33 ms",
      "4.67 ms",
      "5.67 ms",
      "5.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 149)",
    "options": [
      "5.67 ms",
      "8.00 ms",
      "5.67 ms",
      "8.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+8. Average = (8+16)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 2ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 150)",
    "options": [
      "2.33 ms",
      "2.00 ms",
      "3.00 ms",
      "2.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+2. Average = (2+4)/3 = 2.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 151)",
    "options": [
      "4.00 ms",
      "2.67 ms",
      "3.67 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 152)",
    "options": [
      "4.00 ms",
      "5.00 ms",
      "5.67 ms",
      "2.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 153)",
    "options": [
      "5.00 ms",
      "7.33 ms",
      "5.33 ms",
      "6.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 154)",
    "options": [
      "8.33 ms",
      "4.33 ms",
      "3.67 ms",
      "6.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+7. Average = (9+16)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 155)",
    "options": [
      "6.33 ms",
      "6.00 ms",
      "4.33 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 51) (Set 156)",
    "options": [
      "2.67 ms",
      "2.67 ms",
      "2.00 ms",
      "1.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 157)",
    "options": [
      "5.33 ms",
      "2.67 ms",
      "4.33 ms",
      "6.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 9ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 158)",
    "options": [
      "6.33 ms",
      "4.33 ms",
      "3.00 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+9. Average = (5+14)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Thrashing occurs when? (Set 159)",
    "options": [
      "Disk is full",
      "Excessive page faults slow system drastically",
      "CPU is idle",
      "Memory is empty"
    ],
    "answer": 1,
    "explanation": "Process spends more time paging than executing."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 160)",
    "options": [
      "1.33 ms",
      "4.33 ms",
      "3.67 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 161)",
    "options": [
      "5.33 ms",
      "6.67 ms",
      "5.00 ms",
      "4.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 162)",
    "options": [
      "6.33 ms",
      "3.33 ms",
      "5.00 ms",
      "2.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 163)",
    "options": [
      "3.67 ms",
      "5.67 ms",
      "6.33 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 56) (Set 164)",
    "options": [
      "4.33 ms",
      "4.67 ms",
      "2.33 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 165)",
    "options": [
      "3.67 ms",
      "3.67 ms",
      "6.00 ms",
      "7.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 136) (Set 166)",
    "options": [
      "3.67 ms",
      "6.67 ms",
      "5.33 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 167)",
    "options": [
      "3.67 ms",
      "2.33 ms",
      "4.67 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+7. Average = (2+9)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 168)",
    "options": [
      "6.33 ms",
      "3.33 ms",
      "5.00 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 111) (Set 169)",
    "options": [
      "3.33 ms",
      "6.00 ms",
      "5.33 ms",
      "6.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+2. Average = (8+10)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 120) (Set 170)",
    "options": [
      "5.00 ms",
      "4.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 171)",
    "options": [
      "6.67 ms",
      "7.67 ms",
      "4.33 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 172)",
    "options": [
      "6.33 ms",
      "6.67 ms",
      "5.67 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 173)",
    "options": [
      "4.67 ms",
      "7.33 ms",
      "7.33 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 174)",
    "options": [
      "6.00 ms",
      "4.00 ms",
      "1.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+2. Average = (8+10)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 6ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 175)",
    "options": [
      "4.67 ms",
      "7.33 ms",
      "5.33 ms",
      "7.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+6. Average = (8+14)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 176)",
    "options": [
      "3.33 ms",
      "2.00 ms",
      "2.67 ms",
      "2.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 23 KB in the very first free block that is large enough? (Set 177)",
    "options": [
      "None of these",
      "Best-Fit",
      "Worst-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 23) (Set 31) (Set 178)",
    "options": [
      "5.00 ms",
      "2.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 42) (Set 179)",
    "options": [
      "5.67 ms",
      "5.33 ms",
      "3.67 ms",
      "6.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 180)",
    "options": [
      "4.00 ms",
      "3.67 ms",
      "2.67 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 5ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 181)",
    "options": [
      "3.33 ms",
      "1.67 ms",
      "3.67 ms",
      "2.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+5. Average = (3+8)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 182)",
    "options": [
      "2.67 ms",
      "5.67 ms",
      "7.00 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+3. Average = (9+12)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 153) (Set 183)",
    "options": [
      "5.00 ms",
      "7.33 ms",
      "5.33 ms",
      "6.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Multithreading model: one-to-one? (Set 184)",
    "options": [
      "Each user thread maps to one kernel thread",
      "None",
      "Many-to-one",
      "Many-to-many"
    ],
    "answer": 0,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 47 KB in the very first free block that is large enough? (Set 185)",
    "options": [
      "None of these",
      "Worst-Fit",
      "Best-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 6ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 186)",
    "options": [
      "3.67 ms",
      "4.33 ms",
      "3.33 ms",
      "2.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+6. Average = (2+8)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "Multithreading model: one-to-one? (Set 184) (Set 187)",
    "options": [
      "Each user thread maps to one kernel thread",
      "None",
      "Many-to-one",
      "Many-to-many"
    ],
    "answer": 0,
    "explanation": "More concurrency but higher overhead."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 188)",
    "options": [
      "2.33 ms",
      "3.33 ms",
      "2.33 ms",
      "2.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 6ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 189)",
    "options": [
      "5.00 ms",
      "4.67 ms",
      "6.33 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+6. Average = (4+10)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 27 KB in the very first free block that is large enough? (Set 190)",
    "options": [
      "First-Fit",
      "Worst-Fit",
      "None of these",
      "Best-Fit"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 191)",
    "options": [
      "1.67 ms",
      "3.00 ms",
      "1.67 ms",
      "2.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 192)",
    "options": [
      "8.33 ms",
      "4.33 ms",
      "3.67 ms",
      "6.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+7. Average = (9+16)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Dining Philosophers problem illustrates? (Set 193)",
    "options": [
      "Deadlock and synchronization challenges",
      "File systems",
      "Sorting efficiency",
      "Memory allocation"
    ],
    "answer": 0,
    "explanation": "Five philosophers, five forks, potential circular wait."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 194)",
    "options": [
      "3.67 ms",
      "4.33 ms",
      "3.00 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+3. Average = (5+8)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 130) (Set 195)",
    "options": [
      "3.33 ms",
      "5.00 ms",
      "6.33 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 123) (Set 196)",
    "options": [
      "4.67 ms",
      "1.67 ms",
      "4.33 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 5ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 3) (Set 197)",
    "options": [
      "3.33 ms",
      "3.00 ms",
      "4.67 ms",
      "4.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+5. Average = (4+9)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 198)",
    "options": [
      "3.67 ms",
      "5.67 ms",
      "4.33 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 199)",
    "options": [
      "6.00 ms",
      "4.67 ms",
      "4.00 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 5ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 200)",
    "options": [
      "4.00 ms",
      "3.00 ms",
      "2.33 ms",
      "3.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+5. Average = (2+7)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 123) (Set 196) (Set 201)",
    "options": [
      "4.67 ms",
      "1.67 ms",
      "4.33 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Dining Philosophers problem illustrates? (Set 202)",
    "options": [
      "Deadlock and synchronization challenges",
      "File systems",
      "Sorting efficiency",
      "Memory allocation"
    ],
    "answer": 0,
    "explanation": "Five philosophers, five forks, potential circular wait."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 23) (Set 31) (Set 203)",
    "options": [
      "5.00 ms",
      "2.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Process is? (Set 204)",
    "options": [
      "Hardware component",
      "Static code",
      "Stored file",
      "Program in execution"
    ],
    "answer": 3,
    "explanation": "Process = program + execution context."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 5ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 205)",
    "options": [
      "6.00 ms",
      "7.67 ms",
      "3.00 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+5. Average = (9+14)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 6ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 206)",
    "options": [
      "3.33 ms",
      "5.33 ms",
      "3.33 ms",
      "6.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+6. Average = (6+12)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 9ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 207)",
    "options": [
      "5.67 ms",
      "8.67 ms",
      "8.33 ms",
      "6.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+9. Average = (8+17)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Semaphore is? (Set 208)",
    "options": [
      "File descriptor",
      "Integer variable for process synchronization",
      "Process ID",
      "Memory address"
    ],
    "answer": 1,
    "explanation": "wait() decrements; signal() increments."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 209)",
    "options": [
      "4.33 ms",
      "5.00 ms",
      "6.67 ms",
      "2.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 210)",
    "options": [
      "7.67 ms",
      "6.00 ms",
      "5.33 ms",
      "8.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 211)",
    "options": [
      "2.67 ms",
      "2.67 ms",
      "2.00 ms",
      "1.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 95) (Set 212)",
    "options": [
      "3.67 ms",
      "6.67 ms",
      "5.33 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 103) (Set 213)",
    "options": [
      "4.67 ms",
      "3.67 ms",
      "2.33 ms",
      "5.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 130) (Set 195) (Set 214)",
    "options": [
      "3.33 ms",
      "5.00 ms",
      "6.33 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 215)",
    "options": [
      "3.33 ms",
      "4.33 ms",
      "5.67 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+7. Average = (3+10)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 148) (Set 216)",
    "options": [
      "3.33 ms",
      "4.67 ms",
      "5.67 ms",
      "5.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 217)",
    "options": [
      "4.67 ms",
      "4.00 ms",
      "2.33 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 42 KB in the very first free block that is large enough? (Set 218)",
    "options": [
      "None of these",
      "First-Fit",
      "Worst-Fit",
      "Best-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 45) (Set 219)",
    "options": [
      "5.67 ms",
      "7.33 ms",
      "3.33 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 2ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 220)",
    "options": [
      "3.33 ms",
      "2.67 ms",
      "2.33 ms",
      "2.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+2. Average = (3+5)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 153) (Set 221)",
    "options": [
      "5.00 ms",
      "7.33 ms",
      "5.33 ms",
      "6.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 24) (Set 222)",
    "options": [
      "5.00 ms",
      "4.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 223)",
    "options": [
      "2.67 ms",
      "2.00 ms",
      "3.33 ms",
      "1.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 2ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 224)",
    "options": [
      "6.33 ms",
      "5.67 ms",
      "6.00 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+2. Average = (8+10)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 7ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 225)",
    "options": [
      "5.67 ms",
      "6.67 ms",
      "4.33 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+7. Average = (5+12)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 226)",
    "options": [
      "9.00 ms",
      "5.33 ms",
      "8.33 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+9. Average = (9+18)/3 = 9.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 6ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 227)",
    "options": [
      "4.00 ms",
      "4.67 ms",
      "6.00 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+6. Average = (4+10)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 23 KB in the very first free block that is large enough? (Set 177) (Set 228)",
    "options": [
      "None of these",
      "Best-Fit",
      "Worst-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 52 KB in the very first free block that is large enough? (Set 30) (Set 229)",
    "options": [
      "Worst-Fit",
      "None of these",
      "Best-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 230)",
    "options": [
      "5.67 ms",
      "6.33 ms",
      "3.33 ms",
      "4.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 231)",
    "options": [
      "6.67 ms",
      "1.67 ms",
      "4.67 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 6ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 232)",
    "options": [
      "4.33 ms",
      "6.00 ms",
      "4.00 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+6. Average = (5+11)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 233)",
    "options": [
      "7.67 ms",
      "4.67 ms",
      "5.00 ms",
      "7.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 198) (Set 234)",
    "options": [
      "3.67 ms",
      "5.67 ms",
      "4.33 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 235)",
    "options": [
      "5.00 ms",
      "5.67 ms",
      "3.00 ms",
      "4.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+8. Average = (2+10)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 236)",
    "options": [
      "3.33 ms",
      "4.67 ms",
      "5.00 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+4. Average = (5+9)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 237)",
    "options": [
      "6.00 ms",
      "5.67 ms",
      "4.67 ms",
      "7.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 238)",
    "options": [
      "4.00 ms",
      "3.33 ms",
      "3.67 ms",
      "1.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+7. Average = (2+9)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 22) (Set 239)",
    "options": [
      "4.33 ms",
      "6.67 ms",
      "6.33 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 3ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 240)",
    "options": [
      "2.33 ms",
      "3.33 ms",
      "4.33 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+3. Average = (6+9)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 241)",
    "options": [
      "6.00 ms",
      "3.67 ms",
      "6.33 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 242)",
    "options": [
      "5.00 ms",
      "4.67 ms",
      "3.33 ms",
      "2.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 243)",
    "options": [
      "3.33 ms",
      "4.33 ms",
      "5.67 ms",
      "5.00 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 244)",
    "options": [
      "4.33 ms",
      "4.00 ms",
      "5.00 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+3. Average = (5+8)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 245)",
    "options": [
      "3.67 ms",
      "2.67 ms",
      "5.00 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+3. Average = (6+9)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 49 KB in the very first free block that is large enough? (Set 109) (Set 246)",
    "options": [
      "Worst-Fit",
      "None of these",
      "First-Fit",
      "Best-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 247)",
    "options": [
      "5.00 ms",
      "4.00 ms",
      "3.67 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+4. Average = (4+8)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 8ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 29) (Set 248)",
    "options": [
      "6.00 ms",
      "6.33 ms",
      "3.67 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+8. Average = (5+13)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 5ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 249)",
    "options": [
      "3.67 ms",
      "4.00 ms",
      "4.67 ms",
      "5.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+5. Average = (3+8)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 250)",
    "options": [
      "3.00 ms",
      "4.33 ms",
      "3.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 5ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 251)",
    "options": [
      "2.33 ms",
      "7.67 ms",
      "3.67 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+5. Average = (9+14)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 252)",
    "options": [
      "2.33 ms",
      "3.33 ms",
      "3.00 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 5ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 253)",
    "options": [
      "7.67 ms",
      "4.67 ms",
      "7.67 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+5. Average = (9+14)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 254)",
    "options": [
      "1.33 ms",
      "4.33 ms",
      "3.67 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 94) (Set 255)",
    "options": [
      "7.00 ms",
      "7.00 ms",
      "4.67 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 56) (Set 164) (Set 256)",
    "options": [
      "4.33 ms",
      "4.67 ms",
      "2.33 ms",
      "5.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 257)",
    "options": [
      "7.33 ms",
      "5.67 ms",
      "4.33 ms",
      "6.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+9. Average = (5+14)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 6ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 258)",
    "options": [
      "5.00 ms",
      "4.67 ms",
      "6.33 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+6. Average = (4+10)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 135) (Set 259)",
    "options": [
      "4.33 ms",
      "7.00 ms",
      "8.67 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "TLB (Translation Lookaside Buffer) is? (Set 260)",
    "options": [
      "Main memory",
      "Cache for page table entries",
      "Disk cache",
      "CPU register"
    ],
    "answer": 1,
    "explanation": "Speeds up virtual to physical address translation."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 23) (Set 31) (Set 203) (Set 261)",
    "options": [
      "5.00 ms",
      "2.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 262)",
    "options": [
      "3.67 ms",
      "2.67 ms",
      "2.33 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 2ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 263)",
    "options": [
      "1.67 ms",
      "4.00 ms",
      "5.33 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+2. Average = (7+9)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 264)",
    "options": [
      "5.00 ms",
      "4.67 ms",
      "7.67 ms",
      "8.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+9. Average = (8+17)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 265)",
    "options": [
      "4.00 ms",
      "2.67 ms",
      "3.67 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 3ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 266)",
    "options": [
      "6.67 ms",
      "3.67 ms",
      "7.00 ms",
      "5.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+3. Average = (9+12)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 95) (Set 212) (Set 267)",
    "options": [
      "3.67 ms",
      "6.67 ms",
      "5.33 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 233) (Set 268)",
    "options": [
      "7.67 ms",
      "4.67 ms",
      "5.00 ms",
      "7.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 269)",
    "options": [
      "2.67 ms",
      "4.33 ms",
      "5.33 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 4ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 270)",
    "options": [
      "3.33 ms",
      "2.00 ms",
      "6.67 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+4. Average = (8+12)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 271)",
    "options": [
      "6.00 ms",
      "3.00 ms",
      "5.33 ms",
      "6.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 272)",
    "options": [
      "5.00 ms",
      "3.67 ms",
      "6.00 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 94) (Set 255) (Set 273)",
    "options": [
      "7.00 ms",
      "7.00 ms",
      "4.67 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 274)",
    "options": [
      "6.33 ms",
      "5.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 275)",
    "options": [
      "4.67 ms",
      "3.67 ms",
      "2.33 ms",
      "4.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+7. Average = (3+10)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 276)",
    "options": [
      "4.00 ms",
      "7.00 ms",
      "7.00 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+9. Average = (6+15)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 277)",
    "options": [
      "5.00 ms",
      "7.67 ms",
      "8.00 ms",
      "5.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 32 KB in the very first free block that is large enough? (Set 278)",
    "options": [
      "First-Fit",
      "None of these",
      "Best-Fit",
      "Worst-Fit"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Process is? (Set 204) (Set 279)",
    "options": [
      "Hardware component",
      "Static code",
      "Stored file",
      "Program in execution"
    ],
    "answer": 3,
    "explanation": "Process = program + execution context."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 30 KB in the very first free block that is large enough? (Set 27) (Set 104) (Set 280)",
    "options": [
      "None of these",
      "First-Fit",
      "Best-Fit",
      "Worst-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 6) (Set 117) (Set 281)",
    "options": [
      "3.67 ms",
      "5.33 ms",
      "6.33 ms",
      "3.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 9ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 282)",
    "options": [
      "4.33 ms",
      "3.33 ms",
      "7.00 ms",
      "6.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+9. Average = (6+15)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 4ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 283)",
    "options": [
      "3.33 ms",
      "4.67 ms",
      "3.33 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+4. Average = (3+7)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 9ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 282) (Set 284)",
    "options": [
      "4.33 ms",
      "3.33 ms",
      "7.00 ms",
      "6.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+9. Average = (6+15)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 285)",
    "options": [
      "7.00 ms",
      "7.33 ms",
      "5.33 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+9. Average = (6+15)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 5ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 286)",
    "options": [
      "5.00 ms",
      "4.00 ms",
      "2.33 ms",
      "2.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+5. Average = (5+10)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 287)",
    "options": [
      "2.33 ms",
      "3.33 ms",
      "3.00 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 5ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 288)",
    "options": [
      "5.67 ms",
      "2.67 ms",
      "4.67 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+5. Average = (6+11)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 289)",
    "options": [
      "4.33 ms",
      "2.67 ms",
      "5.67 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Hard",
    "question": "Dining Philosophers problem illustrates? (Set 290)",
    "options": [
      "Deadlock and synchronization challenges",
      "File systems",
      "Sorting efficiency",
      "Memory allocation"
    ],
    "answer": 0,
    "explanation": "Five philosophers, five forks, potential circular wait."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 30 KB in the very first free block that is large enough? (Set 291)",
    "options": [
      "None of these",
      "First-Fit",
      "Best-Fit",
      "Worst-Fit"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 6ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 227) (Set 292)",
    "options": [
      "4.00 ms",
      "4.67 ms",
      "6.00 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+6. Average = (4+10)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Semaphore is? (Set 293)",
    "options": [
      "File descriptor",
      "Integer variable for process synchronization",
      "Process ID",
      "Memory address"
    ],
    "answer": 1,
    "explanation": "wait() decrements; signal() increments."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 8ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 294)",
    "options": [
      "4.33 ms",
      "7.00 ms",
      "8.67 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+8. Average = (9+17)/3 = 8.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Virtual Memory",
    "difficulty": "Hard",
    "question": "Using the reference string [1, 2, 3, 4, 1, 2] with 4 physical page frames initially empty, how many page faults occur under the FIFO replacement algorithm? (Set 295)",
    "options": [
      "7",
      "3",
      "4",
      "5"
    ],
    "answer": 3,
    "explanation": "Simulates FIFO allocations on 4 page frame size. Result is 5."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 296)",
    "options": [
      "4.33 ms",
      "6.67 ms",
      "3.67 ms",
      "1.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 4ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 297)",
    "options": [
      "3.00 ms",
      "3.00 ms",
      "4.00 ms",
      "4.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+4. Average = (4+8)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 23) (Set 31) (Set 203) (Set 261) (Set 298)",
    "options": [
      "5.00 ms",
      "2.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 83) (Set 299)",
    "options": [
      "5.00 ms",
      "2.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 5ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 300)",
    "options": [
      "6.00 ms",
      "7.67 ms",
      "3.00 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+5. Average = (9+14)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 3ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 301)",
    "options": [
      "3.67 ms",
      "7.00 ms",
      "1.67 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+3. Average = (9+12)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Medium",
    "question": "SSTF disk scheduling? (Set 302)",
    "options": [
      "Random order",
      "FIFO",
      "Shortest Seek Time First",
      "Reverse order"
    ],
    "answer": 2,
    "explanation": "Services nearest request; can cause starvation of far requests."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 303)",
    "options": [
      "5.67 ms",
      "5.00 ms",
      "6.00 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 27 KB in the very first free block that is large enough? (Set 190) (Set 304)",
    "options": [
      "First-Fit",
      "Worst-Fit",
      "None of these",
      "Best-Fit"
    ],
    "answer": 0,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 5ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 305)",
    "options": [
      "5.67 ms",
      "4.33 ms",
      "4.00 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+5. Average = (6+11)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides? (Set 306)",
    "options": [
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores",
      "Physical memory into segments"
    ],
    "answer": 0,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 48) (Set 307)",
    "options": [
      "3.67 ms",
      "5.67 ms",
      "6.33 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+7. Average = (6+13)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 308)",
    "options": [
      "1.33 ms",
      "2.00 ms",
      "2.00 ms",
      "1.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+2. Average = (2+4)/3 = 2.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 15) (Set 309)",
    "options": [
      "4.67 ms",
      "3.00 ms",
      "6.00 ms",
      "5.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 310)",
    "options": [
      "6.33 ms",
      "5.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 5ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 181) (Set 311)",
    "options": [
      "3.33 ms",
      "1.67 ms",
      "3.67 ms",
      "2.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+5. Average = (3+8)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 277) (Set 312)",
    "options": [
      "5.00 ms",
      "7.67 ms",
      "8.00 ms",
      "5.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 313)",
    "options": [
      "2.67 ms",
      "3.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 1) (Set 314)",
    "options": [
      "2.67 ms",
      "4.33 ms",
      "5.33 ms",
      "4.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Semaphore is? (Set 315)",
    "options": [
      "File descriptor",
      "Integer variable for process synchronization",
      "Process ID",
      "Memory address"
    ],
    "answer": 1,
    "explanation": "wait() decrements; signal() increments."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 262) (Set 316)",
    "options": [
      "3.67 ms",
      "2.67 ms",
      "2.33 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 317)",
    "options": [
      "5.00 ms",
      "3.00 ms",
      "6.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 49 KB in the very first free block that is large enough? (Set 109) (Set 246) (Set 318)",
    "options": [
      "Worst-Fit",
      "None of these",
      "First-Fit",
      "Best-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 160) (Set 319)",
    "options": [
      "1.33 ms",
      "4.33 ms",
      "3.67 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 6ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 320)",
    "options": [
      "3.00 ms",
      "4.67 ms",
      "2.67 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+6. Average = (5+11)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 8ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 321)",
    "options": [
      "4.00 ms",
      "5.33 ms",
      "2.67 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+8. Average = (2+10)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 168) (Set 322)",
    "options": [
      "6.33 ms",
      "3.33 ms",
      "5.00 ms",
      "6.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Paging divides? (Set 323)",
    "options": [
      "Logical memory into fixed-size pages",
      "Files into blocks",
      "CPU into cores",
      "Physical memory into segments"
    ],
    "answer": 0,
    "explanation": "Pages map to frames in physical memory."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 324)",
    "options": [
      "5.33 ms",
      "7.67 ms",
      "4.67 ms",
      "7.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+9. Average = (7+16)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 3ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 325)",
    "options": [
      "6.67 ms",
      "3.67 ms",
      "7.00 ms",
      "5.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+3. Average = (9+12)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 326)",
    "options": [
      "7.00 ms",
      "5.67 ms",
      "5.33 ms",
      "4.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+7. Average = (5+12)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 21) (Set 327)",
    "options": [
      "4.67 ms",
      "6.00 ms",
      "3.00 ms",
      "7.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 328)",
    "options": [
      "2.67 ms",
      "4.00 ms",
      "2.67 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 6ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 329)",
    "options": [
      "3.67 ms",
      "5.67 ms",
      "6.67 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+6. Average = (7+13)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 6ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 330)",
    "options": [
      "3.33 ms",
      "5.00 ms",
      "5.67 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+6. Average = (2+8)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 9ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 331)",
    "options": [
      "5.67 ms",
      "8.67 ms",
      "8.33 ms",
      "6.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+9. Average = (8+17)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 83) (Set 299) (Set 332)",
    "options": [
      "5.00 ms",
      "2.00 ms",
      "4.00 ms",
      "5.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 6ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 333)",
    "options": [
      "8.00 ms",
      "6.67 ms",
      "4.67 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+6. Average = (9+15)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 5ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 155) (Set 334)",
    "options": [
      "6.33 ms",
      "6.00 ms",
      "4.33 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+5. Average = (7+12)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 335)",
    "options": [
      "6.33 ms",
      "4.00 ms",
      "7.00 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 5ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 39) (Set 336)",
    "options": [
      "3.67 ms",
      "3.00 ms",
      "4.67 ms",
      "5.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+5. Average = (2+7)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 26 KB in the very first free block that is large enough? (Set 337)",
    "options": [
      "None of these",
      "Worst-Fit",
      "Best-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 338)",
    "options": [
      "2.33 ms",
      "3.33 ms",
      "2.33 ms",
      "2.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 120) (Set 339)",
    "options": [
      "5.00 ms",
      "4.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 3ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 217) (Set 340)",
    "options": [
      "4.67 ms",
      "4.00 ms",
      "2.33 ms",
      "3.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+3. Average = (2+5)/3 = 2.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 341)",
    "options": [
      "5.67 ms",
      "7.33 ms",
      "5.33 ms",
      "8.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 93) (Set 342)",
    "options": [
      "2.33 ms",
      "1.67 ms",
      "3.00 ms",
      "3.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 7ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 343)",
    "options": [
      "5.00 ms",
      "2.67 ms",
      "3.67 ms",
      "4.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+7. Average = (2+9)/3 = 3.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 199) (Set 344)",
    "options": [
      "6.00 ms",
      "4.67 ms",
      "4.00 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 152) (Set 345)",
    "options": [
      "4.00 ms",
      "5.00 ms",
      "5.67 ms",
      "2.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 8ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 346)",
    "options": [
      "4.67 ms",
      "4.67 ms",
      "3.67 ms",
      "2.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+8. Average = (3+11)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 233) (Set 347)",
    "options": [
      "7.67 ms",
      "4.67 ms",
      "5.00 ms",
      "7.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 5ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 348)",
    "options": [
      "3.33 ms",
      "7.67 ms",
      "4.67 ms",
      "6.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+5. Average = (9+14)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 7ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 349)",
    "options": [
      "5.00 ms",
      "4.67 ms",
      "3.33 ms",
      "2.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+7. Average = (4+11)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 350)",
    "options": [
      "5.33 ms",
      "8.00 ms",
      "5.67 ms",
      "7.67 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 285) (Set 351)",
    "options": [
      "7.00 ms",
      "7.33 ms",
      "5.33 ms",
      "4.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+9. Average = (6+15)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 5ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 352)",
    "options": [
      "5.67 ms",
      "2.67 ms",
      "4.67 ms",
      "3.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+5. Average = (6+11)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 3ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 353)",
    "options": [
      "5.33 ms",
      "3.00 ms",
      "5.67 ms",
      "4.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+3. Average = (7+10)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "Semaphore is? (Set 315) (Set 354)",
    "options": [
      "File descriptor",
      "Integer variable for process synchronization",
      "Process ID",
      "Memory address"
    ],
    "answer": 1,
    "explanation": "wait() decrements; signal() increments."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 123) (Set 355)",
    "options": [
      "4.67 ms",
      "1.67 ms",
      "4.33 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 356)",
    "options": [
      "2.67 ms",
      "4.00 ms",
      "2.67 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+4. Average = (2+6)/3 = 2.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 357)",
    "options": [
      "4.67 ms",
      "3.67 ms",
      "6.33 ms",
      "2.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "OS",
    "difficulty": "Easy",
    "question": "FCFS scheduling is? (Set 43) (Set 358)",
    "options": [
      "Random",
      "First Come First Served — non-preemptive",
      "Priority-based",
      "Preemptive"
    ],
    "answer": 1,
    "explanation": "Processes executed in arrival order."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 341) (Set 359)",
    "options": [
      "5.67 ms",
      "7.33 ms",
      "5.33 ms",
      "8.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+8. Average = (7+15)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 191) (Set 360)",
    "options": [
      "1.67 ms",
      "3.00 ms",
      "1.67 ms",
      "2.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 3ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 191) (Set 360) (Set 361)",
    "options": [
      "1.67 ms",
      "3.00 ms",
      "1.67 ms",
      "2.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+3. Average = (3+6)/3 = 3.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 7ms, P2 = 7ms, and P3 = 5ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 362)",
    "options": [
      "6.33 ms",
      "4.00 ms",
      "7.00 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=7, P3=7+7. Average = (7+14)/3 = 7.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 4ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 236) (Set 363)",
    "options": [
      "3.33 ms",
      "4.67 ms",
      "5.00 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+4. Average = (5+9)/3 = 4.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 364)",
    "options": [
      "4.67 ms",
      "4.00 ms",
      "4.00 ms",
      "3.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 231) (Set 365)",
    "options": [
      "6.67 ms",
      "1.67 ms",
      "4.67 ms",
      "4.00 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 8ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 366)",
    "options": [
      "7.00 ms",
      "5.33 ms",
      "5.67 ms",
      "4.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+8. Average = (4+12)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 26 KB in the very first free block that is large enough? (Set 367)",
    "options": [
      "None of these",
      "Worst-Fit",
      "Best-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 15 KB in the very first free block that is large enough? (Set 121) (Set 368)",
    "options": [
      "Best-Fit",
      "None of these",
      "First-Fit",
      "Worst-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 7ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 233) (Set 347) (Set 369)",
    "options": [
      "7.67 ms",
      "4.67 ms",
      "5.00 ms",
      "7.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+7. Average = (8+15)/3 = 7.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 4ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 370)",
    "options": [
      "6.00 ms",
      "7.33 ms",
      "4.33 ms",
      "7.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+4. Average = (9+13)/3 = 7.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 371)",
    "options": [
      "5.00 ms",
      "5.33 ms",
      "3.67 ms",
      "6.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+8. Average = (4+12)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 372)",
    "options": [
      "5.67 ms",
      "5.33 ms",
      "3.67 ms",
      "6.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 33 KB in the very first free block that is large enough? (Set 373)",
    "options": [
      "Worst-Fit",
      "First-Fit",
      "Best-Fit",
      "None of these"
    ],
    "answer": 1,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 374)",
    "options": [
      "6.00 ms",
      "4.00 ms",
      "1.33 ms",
      "3.33 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+2. Average = (8+10)/3 = 6.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 3ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 357) (Set 375)",
    "options": [
      "4.67 ms",
      "3.67 ms",
      "6.33 ms",
      "2.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+3. Average = (8+11)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 24) (Set 222) (Set 376)",
    "options": [
      "5.00 ms",
      "4.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+2. Average = (5+7)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 6ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 377)",
    "options": [
      "4.67 ms",
      "3.33 ms",
      "5.33 ms",
      "3.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+6. Average = (2+8)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 52 KB in the very first free block that is large enough? (Set 30) (Set 229) (Set 378)",
    "options": [
      "Worst-Fit",
      "None of these",
      "Best-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 313) (Set 379)",
    "options": [
      "2.67 ms",
      "3.33 ms",
      "4.00 ms",
      "3.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 380)",
    "options": [
      "5.00 ms",
      "4.67 ms",
      "7.67 ms",
      "8.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+9. Average = (8+17)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 9ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 381)",
    "options": [
      "6.33 ms",
      "2.33 ms",
      "5.33 ms",
      "3.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+9. Average = (5+14)/3 = 6.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 2ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 382)",
    "options": [
      "4.33 ms",
      "6.67 ms",
      "3.67 ms",
      "1.33 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+2. Average = (9+11)/3 = 6.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 9ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 264) (Set 383)",
    "options": [
      "5.00 ms",
      "4.67 ms",
      "7.67 ms",
      "8.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+9. Average = (8+17)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 88) (Set 384)",
    "options": [
      "2.67 ms",
      "4.00 ms",
      "1.67 ms",
      "3.67 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 8ms, and P3 = 6ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 385)",
    "options": [
      "4.00 ms",
      "5.33 ms",
      "2.67 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+8. Average = (2+10)/3 = 4.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 9ms, P2 = 7ms, and P3 = 4ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 192) (Set 386)",
    "options": [
      "8.33 ms",
      "4.33 ms",
      "3.67 ms",
      "6.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=9, P3=9+7. Average = (9+16)/3 = 8.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 9ms, and P3 = 9ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 387)",
    "options": [
      "6.00 ms",
      "7.00 ms",
      "5.00 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+9. Average = (3+12)/3 = 5.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 6ms, P2 = 4ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 199) (Set 344) (Set 388)",
    "options": [
      "6.00 ms",
      "4.67 ms",
      "4.00 ms",
      "5.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=6, P3=6+4. Average = (6+10)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 2ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 389)",
    "options": [
      "3.33 ms",
      "3.33 ms",
      "4.00 ms",
      "4.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+2. Average = (4+6)/3 = 3.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 5ms, P2 = 6ms, and P3 = 8ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 390)",
    "options": [
      "6.33 ms",
      "4.33 ms",
      "5.33 ms",
      "4.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=5, P3=5+6. Average = (5+11)/3 = 5.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 18 KB in the very first free block that is large enough? (Set 391)",
    "options": [
      "None of these",
      "Best-Fit",
      "First-Fit",
      "Worst-Fit"
    ],
    "answer": 2,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 2ms, P2 = 9ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 392)",
    "options": [
      "4.67 ms",
      "1.67 ms",
      "4.33 ms",
      "4.00 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=2, P3=2+9. Average = (2+11)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 4ms, P2 = 9ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 372) (Set 393)",
    "options": [
      "5.67 ms",
      "5.33 ms",
      "3.67 ms",
      "6.67 ms"
    ],
    "answer": 0,
    "explanation": "Waiting times: P1=0, P2=4, P3=4+9. Average = (4+13)/3 = 5.67 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 7ms, and P3 = 2ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 394)",
    "options": [
      "3.00 ms",
      "1.67 ms",
      "4.00 ms",
      "4.33 ms"
    ],
    "answer": 3,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+7. Average = (3+10)/3 = 4.33 ms."
  },
  {
    "subject": "OS",
    "topic": "Memory Management",
    "difficulty": "Medium",
    "question": "Which memory partition allocation algorithm places a new process of size 52 KB in the very first free block that is large enough? (Set 30) (Set 229) (Set 395)",
    "options": [
      "Worst-Fit",
      "None of these",
      "Best-Fit",
      "First-Fit"
    ],
    "answer": 3,
    "explanation": "First-Fit allocates the first available partition holding size."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 8ms, P2 = 8ms, and P3 = 7ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 396)",
    "options": [
      "5.00 ms",
      "5.00 ms",
      "8.00 ms",
      "7.67 ms"
    ],
    "answer": 2,
    "explanation": "Waiting times: P1=0, P2=8, P3=8+8. Average = (8+16)/3 = 8.00 ms."
  },
  {
    "subject": "OS",
    "topic": "CPU Scheduling",
    "difficulty": "Hard",
    "question": "Given three processes arriving at time 0 with CPU burst times of P1 = 3ms, P2 = 6ms, and P3 = 3ms. What is the average waiting time under non-preemptive FCFS scheduling? (Set 140) (Set 397)",
    "options": [
      "2.00 ms",
      "4.00 ms",
      "3.00 ms",
      "4.00 ms"
    ],
    "answer": 1,
    "explanation": "Waiting times: P1=0, P2=3, P3=3+6. Average = (3+9)/3 = 4.00 ms."
  }
];
